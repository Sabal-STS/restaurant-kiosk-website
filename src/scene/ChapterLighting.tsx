import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollStore } from "../hooks/useScrollProgress";

/**
 * Per-chapter lighting that shifts color temperature and intensity
 * as the user scrolls through chapters.
 */
export default function ChapterLighting() {
  const dirLightRef = useRef<THREE.DirectionalLight>(null!);
  const ambientRef = useRef<THREE.AmbientLight>(null!);
  const pointRef = useRef<THREE.PointLight>(null!);

  // Chapter lighting configs stay in the app palette: amber, warm white, near-black.
  const configs = [
    { ambient: 0.14, dir: 0.8, dirColor: "#E8E4DC", point: 0.25 },
    { ambient: 0.1, dir: 0.55, dirColor: "#B8AD9E", point: 0.25 },
    { ambient: 0.18, dir: 0.95, dirColor: "#F5D28A", point: 0.45 },
    { ambient: 0.22, dir: 0.95, dirColor: "#F5A623", point: 0.75 },
    { ambient: 0.16, dir: 1.15, dirColor: "#FFC300", point: 0.95 },
  ];

  useFrame(() => {
    const { chapterIndex, chapterLocalProgress, reducedMotion } =
      scrollStore.getState();

    if (reducedMotion) return;

    const current = configs[chapterIndex];
    const next = configs[Math.min(chapterIndex + 1, 4)];
    const t = chapterLocalProgress;

    // Ambient
    if (ambientRef.current) {
      ambientRef.current.intensity = THREE.MathUtils.lerp(
        current.ambient,
        next.ambient,
        t
      );
    }

    // Directional
    if (dirLightRef.current) {
      dirLightRef.current.intensity = THREE.MathUtils.lerp(
        current.dir,
        next.dir,
        t
      );
      const cColor = new THREE.Color(current.dirColor);
      const nColor = new THREE.Color(next.dirColor);
      dirLightRef.current.color.copy(cColor.lerp(nColor, t));
    }

    // Point (accent)
    if (pointRef.current) {
      pointRef.current.intensity = THREE.MathUtils.lerp(
        current.point,
        next.point,
        t
      );
    }
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.15} color="#B8AD9E" />
      <directionalLight
        ref={dirLightRef}
        position={[5, 5, 5]}
        intensity={0.8}
        color="#E8E4DC"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight
        ref={pointRef}
        position={[-3, 2, 3]}
        intensity={0.3}
        color="#FFC300"
        distance={10}
        decay={2}
      />
      {/* Rim light from behind */}
      <pointLight
        position={[0, 0, -3]}
        intensity={0.15}
        color="#B8AD9E"
        distance={8}
        decay={2}
      />
    </>
  );
}
