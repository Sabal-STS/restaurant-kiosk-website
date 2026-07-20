import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import PhoneHero from "./PhoneHero";
import CameraRig from "./CameraRig";
import ChapterLighting from "./ChapterLighting";
import PostProcessingEffects from "./PostProcessing";
import { useScrollProgress } from "../hooks/useScrollProgress";

/**
 * Root Three.js scene canvas — renders full-viewport behind DOM.
 */
export default function SceneCanvas() {
  const { chapterIndex, chapterLocalProgress } = useScrollProgress();
  const exitFade =
    chapterIndex === 4
      ? Math.max(0, Math.min(1, (chapterLocalProgress - 0.34) / 0.2))
      : 0;

  return (
    <div
      className="fixed inset-0 z-0 transition-opacity duration-200"
      style={{ opacity: 1 - exitFade }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        style={{ background: "#0A0A08" }}
      >
        {/* Scene fog for depth */}
        <fog attach="fog" args={["#0A0A08", 8, 20]} />

        {/* Camera rig driven by scroll */}
        <CameraRig />

        {/* Per-chapter lighting */}
        <ChapterLighting />

        {/* The recurring 3D motif */}
        <PhoneHero />

        {/* Post-processing */}
        <PostProcessingEffects />

        {/* Preload all assets */}
        <Preload all />
      </Canvas>
    </div>
  );
}
