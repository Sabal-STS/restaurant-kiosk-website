import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Float, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { scrollStore } from "../hooks/useScrollProgress";

// Import the actual screenshots mapped to chapters
import takeOrderScreen from "../assets/take-order.jpeg";
import drawerTopScreen from "../assets/dashboard.jpeg";
import drawerBottomScreen from "../assets/order-management.jpeg";
import pushNotificationScreen from "../assets/notifications.jpeg";
import notificationListScreen from "../assets/menu-items.jpeg";
import kioskInactiveScreen from "../assets/stock-items.jpeg";

const ScreenTransitionMaterial = {
  uniforms: {
    tDiff1: { value: null },
    tDiff2: { value: null },
    mixFactor: { value: 0 },
    uLuminance: { value: 0.74 },
    uIntroAlpha: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiff1;
    uniform sampler2D tDiff2;
    uniform float mixFactor;
    uniform float uLuminance;
    uniform float uIntroAlpha;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float easedMix = mixFactor * mixFactor * (3.0 - 2.0 * mixFactor);
      float transition = sin(easedMix * 3.14159265);
      vec4 tex1 = texture2D(tDiff1, uv);
      vec4 tex2 = texture2D(tDiff2, uv);
      vec4 finalColor = mix(tex1, tex2, easedMix);
      finalColor.rgb = mix(finalColor.rgb, vec3(0.98, 0.86, 0.64), transition * 0.045);
      
      gl_FragColor = vec4(finalColor.rgb * uLuminance, uIntroAlpha);
    }
  `
};

/**
 * Procedural phone motif — replacing the generic tablet.
 * Swaps real UI screens using a soft shader crossfade.
 */
export default function PhoneHero() {
  const { size } = useThree();
  const groupRef = useRef<THREE.Group>(null!);
  const shaderRef = useRef<THREE.ShaderMaterial>(null!);
  const bodyRef = useRef<THREE.MeshStandardMaterial>(null!);
  const bezelRef = useRef<THREE.MeshStandardMaterial>(null!);

  const takeOrderTex = useTexture(takeOrderScreen);
  const drawerTopTex = useTexture(drawerTopScreen);
  const drawerBottomTex = useTexture(drawerBottomScreen);
  const pushNotificationTex = useTexture(pushNotificationScreen);
  const notificationListTex = useTexture(notificationListScreen);
  const kioskInactiveTex = useTexture(kioskInactiveScreen);

  useMemo(() => {
    [
      takeOrderTex,
      drawerTopTex,
      drawerBottomTex,
      pushNotificationTex,
      notificationListTex,
      kioskInactiveTex,
    ].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;
    });
  }, [
    takeOrderTex,
    drawerTopTex,
    drawerBottomTex,
    pushNotificationTex,
    notificationListTex,
    kioskInactiveTex,
  ]);

  const chapterKeyframes = useMemo(
    () => [
      [takeOrderTex],
      [takeOrderTex],
      [drawerTopTex, drawerBottomTex],
      [pushNotificationTex, notificationListTex],
      [kioskInactiveTex],
    ],
    [
      takeOrderTex,
      drawerTopTex,
      drawerBottomTex,
      pushNotificationTex,
      notificationListTex,
      kioskInactiveTex,
    ]
  );

  // Per-chapter rotations
  const chapterConfigs = useMemo(
    () => [
      { rotY: 0, rotX: 0 },                           // Ch0: Intro
      { rotY: Math.PI * 0.1, rotX: 0.05 },            // Ch1: Take Order
      { rotY: -Math.PI * 0.15, rotX: 0.02 },          // Ch2: Drawer
      { rotY: Math.PI * 0.05, rotX: -0.05 },          // Ch3: Notifications
      { rotY: -Math.PI * 0.1, rotX: 0.08 },           // Ch4: Kiosk Inactive
    ],
    []
  );

  useFrame(() => {
    const { chapterIndex, chapterLocalProgress, introProgress, reducedMotion } = scrollStore.getState();

    if (!groupRef.current || reducedMotion) return;
    const isMobile = size.width < 768;
    const reveal = THREE.MathUtils.smoothstep(introProgress, 0.12, 0.92);

    // Smooth rotation driven by scroll (across the whole chapter)
    const currentRot = chapterConfigs[chapterIndex];
    const nextRot = chapterConfigs[Math.min(chapterIndex + 1, 4)];
    const t = chapterLocalProgress;

    const introRotY = THREE.MathUtils.lerp(-0.46, 0, reveal);
    const introRotX = THREE.MathUtils.lerp(0.12, 0, reveal);
    const targetRotY = THREE.MathUtils.lerp(currentRot.rotY, nextRot.rotY, t) + introRotY;
    const targetRotX = THREE.MathUtils.lerp(currentRot.rotX, nextRot.rotX, t) + introRotX;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.08);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.08);

    const targetScale = (isMobile ? 0.78 : 1) * THREE.MathUtils.lerp(0.88, 1, reveal);
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08
    );

    const targetX = (isMobile ? 0 : 0.55) + THREE.MathUtils.lerp(0.22, 0, reveal);
    const targetY = (isMobile ? 1.0 : 0) + THREE.MathUtils.lerp(-0.22, 0, reveal);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.08);
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY + Math.sin(performance.now() * 0.0005) * 0.035,
      0.08
    );
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      THREE.MathUtils.lerp(-0.22, 0, reveal),
      0.08
    );

    if (bodyRef.current) {
      bodyRef.current.opacity = reveal;
    }
    if (bezelRef.current) {
      bezelRef.current.opacity = reveal;
    }

    // Handle shader texture transitions.
    if (shaderRef.current) {
      const chapterFrames = chapterKeyframes[chapterIndex];
      const previousFrames = chapterKeyframes[Math.max(0, chapterIndex - 1)];
      let fromTex = previousFrames[previousFrames.length - 1];
      let toTex = chapterFrames[0];
      let mixFactor = chapterIndex === 0 ? 1 : 1;

      if (chapterIndex > 0 && t < 0.28) {
        mixFactor = THREE.MathUtils.smoothstep(t / 0.28, 0, 1);
      } else if (chapterFrames.length > 1) {
        const innerT = (t - 0.38) / 0.28;
        if (innerT > 0 && innerT < 1) {
          fromTex = chapterFrames[0];
          toTex = chapterFrames[1];
          mixFactor = THREE.MathUtils.smoothstep(innerT, 0, 1);
        } else if (innerT >= 1) {
          fromTex = chapterFrames[0];
          toTex = chapterFrames[1];
          mixFactor = 1;
        }
      }

      shaderRef.current.uniforms.tDiff1.value = fromTex;
      shaderRef.current.uniforms.tDiff2.value = toTex;
      shaderRef.current.uniforms.mixFactor.value = mixFactor;
      shaderRef.current.uniforms.uIntroAlpha.value = reveal;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3} floatingRange={[-0.05, 0.05]}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Main Phone Body — near black */}
        <RoundedBox args={[1.78, 3.65, 0.1]} radius={0.11} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial
            ref={bodyRef}
            color="#111111"
            roughness={0.3}
            metalness={0.8}
            transparent
            opacity={0}
          />
        </RoundedBox>

        {/* Screen Face — Shader Material */}
        <mesh position={[0, 0, 0.075]}>
          <planeGeometry args={[1.52, 3.3]} />
          <shaderMaterial
            ref={shaderRef}
            args={[ScreenTransitionMaterial]}
            transparent={true}
            toneMapped={false}
          />
        </mesh>

        {/* Screen Bezel Frame — perfectly flush with body */}
        <mesh position={[0, 0, 0.065]}>
          <planeGeometry args={[1.62, 3.44]} />
          <meshStandardMaterial
            ref={bezelRef}
            color="#050505"
            roughness={0.5}
            metalness={0.2}
            transparent
            opacity={0}
          />
        </mesh>
      </group>
    </Float>
  );
}
