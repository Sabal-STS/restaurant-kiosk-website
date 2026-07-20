import { useState, useEffect, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

/**
 * Text scramble hook — on trigger, scrambles through random characters
 * for ~duration ms then resolves to the target string.
 */
export function useTextScramble(
  target: string,
  trigger: boolean,
  duration = 600
): string {
  const [display, setDisplay] = useState("");
  const frameRef = useRef<number>(0);
  const startRef = useRef(0);

  const scramble = useCallback(() => {
    const now = performance.now();
    const elapsed = now - startRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Number of characters resolved so far
    const resolved = Math.floor(progress * target.length);

    let result = "";
    for (let i = 0; i < target.length; i++) {
      if (target[i] === " ") {
        result += " ";
      } else if (i < resolved) {
        result += target[i];
      } else {
        result += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }

    setDisplay(result);

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(scramble);
    }
  }, [target, duration]);

  useEffect(() => {
    if (trigger && target) {
      startRef.current = performance.now();
      frameRef.current = requestAnimationFrame(scramble);
    } else if (!trigger) {
      setDisplay("");
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, target, scramble]);

  return display;
}
