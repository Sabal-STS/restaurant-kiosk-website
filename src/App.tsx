import { useState, useEffect } from "react";
import { scrollStore } from "./hooks/useScrollProgress";
import SmoothScroll from "./components/SmoothScroll";
import SceneCanvas from "./scene/SceneCanvas";
import Navbar from "./components/Navbar";
import WayfindingRail from "./components/WayfindingRail";
import IntroSequence from "./components/IntroSequence";
import ChapterText from "./components/ChapterText";
import CursorGlow from "./components/CursorGlow";
import ReducedMotionFallback from "./components/ReducedMotionFallback";
import FeaturesShowcase from "./components/FeaturesShowcase";
import MarketingClose from "./components/MarketingClose";

function canUseWebGL() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl")
    );
  } catch {
    return false;
  }
}

export default function App() {
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [webglSupported] = useState(canUseWebGL);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    scrollStore.setReducedMotion(mq.matches);

    const onChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      scrollStore.setReducedMotion(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Reduced motion or unavailable WebGL: static fallback, no R3F canvas.
  if (reducedMotion || !webglSupported) {
    return <ReducedMotionFallback />;
  }

  return (
    <SmoothScroll>
      {/* WebGL scene — full viewport, behind everything */}
      <SceneCanvas />

      {/* DOM overlay layer */}
      <Navbar />
      <WayfindingRail />
      <IntroSequence />
      <ChapterText />
      <CursorGlow />

      {/* Scroll-height spacers — create scrollable area for GSAP ScrollTrigger */}
      <div className="chapter-scroll-track relative z-10 pointer-events-none">
        <div className="chapter-spacer" data-chapter="0" style={{ height: "120vh" }} />
        <div className="chapter-spacer" data-chapter="1" style={{ height: "165vh" }} />
        <div className="chapter-spacer" data-chapter="2" style={{ height: "190vh" }} />
        <div className="chapter-spacer" data-chapter="3" style={{ height: "175vh" }} />
        <div className="chapter-spacer" data-chapter="4" style={{ height: "250vh" }} />
      </div>

      <div className="handoff-blackout relative z-[55] h-[95vh]" aria-hidden="true" />

      <FeaturesShowcase />
      <MarketingClose />
    </SmoothScroll>
  );
}
