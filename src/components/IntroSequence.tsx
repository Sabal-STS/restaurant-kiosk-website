import { useEffect, useState } from "react";
import { scrollStore } from "../hooks/useScrollProgress";

/**
 * Live intro sequence — a 2.5s scripted overlay animation.
 * - Starts with a solid black screen
 * - STS logo fades in at center, then shrinks/fades
 * - Overlay dissolves, revealing the scene beneath
 * - Marks introComplete in the scroll store
 */
export default function IntroSequence() {
  const [phase, setPhase] = useState<"black" | "logo" | "reveal" | "done">("black");

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const duration = 3200;
    const tick = () => {
      const progress = Math.min(1, (performance.now() - start) / duration);
      scrollStore.setIntroProgress(progress);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setPhase("logo"), 180);
    const t2 = setTimeout(() => setPhase("reveal"), 1750);
    const t3 = setTimeout(() => {
      setPhase("done");
      scrollStore.setIntroProgress(1);
      scrollStore.setIntroComplete(true);
    }, duration);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden transition-opacity duration-1000"
      style={{
        zIndex: 100,
        opacity: phase === "reveal" ? 0 : 1,
        backgroundColor: "#0A0A08",
        pointerEvents: phase === "reveal" ? "none" : "auto",
      }}
    >
      <div className="absolute inset-0 opacity-70">
        <div className="intro-amber-orbit intro-amber-orbit-a" />
        <div className="intro-amber-orbit intro-amber-orbit-b" />
      </div>

      <div
        className="relative flex flex-col items-center gap-5 transition-all duration-1000"
        style={{
          opacity: phase === "logo" ? 1 : 0,
          transform:
            phase === "logo"
              ? "scale(1) translateY(0)"
              : phase === "reveal"
                ? "scale(0.8) translateY(-20px)"
                : "scale(1.1) translateY(10px)",
        }}
      >
        <div className="rounded-2xl border border-ember/15 bg-[#080705]/90 p-2 shadow-[0_0_30px_rgba(245,166,35,0.08)]">
          <img
            src="/sts_logo.png"
            alt="STS Logo"
            className="h-16 w-16 rounded-xl object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-ember/90 text-[11px] font-semibold tracking-[0.3em] uppercase">
            STS KIOSK
          </p>
          <p className="text-warm-stone/60 text-[9px] tracking-[0.2em] uppercase mt-1">
            We Make IT Happen
          </p>
          <div className="mx-auto mt-5 h-px w-32 overflow-hidden bg-warm-white/10">
            <div className="h-full w-full origin-left animate-intro-line bg-ember" />
          </div>
        </div>
      </div>

      {phase === "reveal" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(245,166,35,0.12), transparent 36%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,195,0,0.018) 2px, rgba(255,195,0,0.018) 4px)",
            animation: "scanlines 0.12s linear infinite",
          }}
        />
      )}
    </div>
  );
}
