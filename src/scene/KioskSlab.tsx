import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Float, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { scrollStore } from "../hooks/useScrollProgress";
import kioskImg from "../assets/kiosk-hero.png";

/**
 * Procedural kiosk tablet slab — the recurring 3D motif.
 *
 * A floating rounded rectangular monolith with an emissive screen face.
 * Varies per chapter: screen glow intensity, edge detail, rotation.
 */
export default function KioskSlab() {
  const groupRef = useRef<THREE.Group>(null!);
  const screenRef = useRef<THREE.MeshStandardMaterial>(null!);
  const bodyRef = useRef<THREE.MeshStandardMaterial>(null!);
  const edgeGlowRef = useRef<THREE.MeshStandardMaterial>(null!);

  // Load the actual UI mockup
  const screenTex = useTexture(kioskImg);

  // Per-chapter configurations
  const chapterConfigs = useMemo(
    () => [
      { emissiveIntensity: 0.6, rotY: 0, rotX: 0 }, // Ch0: Intro — subtle glow
      { emissiveIntensity: 0.4, rotY: Math.PI * 0.15, rotX: 0.05 }, // Ch1: Problem — dim
      { emissiveIntensity: 0.9, rotY: Math.PI * 0.5, rotX: -0.1 }, // Ch2: Features — bright
      { emissiveIntensity: 1.2, rotY: Math.PI * 0.85, rotX: 0.05 }, // Ch3: Interface — warm
      { emissiveIntensity: 1.5, rotY: Math.PI * 1.2, rotX: 0 }, // Ch4: CTA — spotlight
    ],
    []
  );

  useFrame(() => {
    const { chapterIndex, chapterLocalProgress, reducedMotion } =
      scrollStore.getState();

    if (!groupRef.current || reducedMotion) return;

    // Interpolate between current and next chapter config
    const current = chapterConfigs[chapterIndex];
    const next = chapterConfigs[Math.min(chapterIndex + 1, 4)];
    const t = chapterLocalProgress;

    // Smooth rotation driven by scroll
    const targetRotY = THREE.MathUtils.lerp(current.rotY, next.rotY, t);
    const targetRotX = THREE.MathUtils.lerp(current.rotX, next.rotX, t);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.08
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.08
    );

    // Screen emissive intensity
    if (screenRef.current) {
      const targetIntensity = THREE.MathUtils.lerp(
        current.emissiveIntensity,
        next.emissiveIntensity,
        t
      );
      screenRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        screenRef.current.emissiveIntensity,
        targetIntensity,
        0.06
      );
    }

    // Subtle floating bob (very gentle)
    groupRef.current.position.y =
      Math.sin(performance.now() * 0.0005) * 0.05;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.1}
      floatIntensity={0.3}
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* ── Main body — dark espresso slab (PORTRAIT) ────────────── */}
        <RoundedBox
          args={[1.8, 3.2, 0.12]}
          radius={0.06}
          smoothness={4}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            ref={bodyRef}
            color="#1A1614"
            roughness={0.2}
            metalness={0.8}
          />
        </RoundedBox>

        {/* ── Screen face — UI texture ─────────────────────────────── */}
        <mesh position={[0, 0, 0.062]}>
          <planeGeometry args={[1.7, 3.1]} />
          <meshStandardMaterial
            ref={screenRef}
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.6}
            map={screenTex}
            emissiveMap={screenTex}
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>

        {/* ── Screen inner border — thin warm-stone edge ───────────── */}
        <mesh position={[0, 0, 0.061]}>
          <planeGeometry args={[1.75, 3.15]} />
          <meshStandardMaterial
            color="#1A1614"
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>

        {/* ── Top bezel detail — camera notch ──────────────────────── */}
        <mesh position={[0, 1.5, 0.065]}>
          <cylinderGeometry args={[0.02, 0.02, 0.01, 16]} />
          <meshStandardMaterial
            color="#2A2420"
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>

        {/* ── Bottom bezel — subtle home indicator line ────────────── */}
        <mesh position={[0, -1.48, 0.065]}>
          <boxGeometry args={[0.3, 0.015, 0.005]} />
          <meshStandardMaterial
            ref={edgeGlowRef}
            color="#B8AD9E"
            emissive="#FFC300"
            emissiveIntensity={0.1}
            roughness={0.4}
            metalness={0.5}
          />
        </mesh>

        {/* ── Side edge accent — thin reflective strip ─────────────── */}
        <mesh position={[0.9, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.005, 2.8, 0.08]} />
          <meshStandardMaterial
            color="#B8AD9E"
            roughness={0.15}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[-0.9, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.005, 2.8, 0.08]} />
          <meshStandardMaterial
            color="#B8AD9E"
            roughness={0.15}
            metalness={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}
