import { useEffect } from "react";

/**
 * Cursor-following radial glow highlight.
 * Updates CSS custom properties on the root element to position
 * a radial gradient highlight that follows the cursor.
 * Creates the "aurora catching an edge" effect on interactive elements.
 */
export default function CursorGlow() {
  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const root = document.documentElement;

    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${e.clientX}px`);
      root.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null; // No DOM output — just sets CSS variables
}
