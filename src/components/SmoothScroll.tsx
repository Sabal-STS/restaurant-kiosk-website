import { useEffect, type ReactNode } from "react";
import { initScroll, destroyScroll } from "../lib/scrollSetup";

/**
 * Lenis smooth scroll wrapper — initializes scroll system on mount,
 * destroys on unmount.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
      destroyScroll();
    };
  }, []);

  return <>{children}</>;
}
