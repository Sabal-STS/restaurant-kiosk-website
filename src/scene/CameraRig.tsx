import { useRef, useMemo } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollStore } from "../hooks/useScrollProgress";

/**
 * Camera rig — drives the camera through 5 chapter waypoints
 * as a function of scroll progress.
 */

interface Waypoint {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

export default function CameraRig() {
  const { camera, size } = useThree();
  const currentPos = useRef(camera.position.clone());
  const currentTarget = useRef(new THREE.Vector3());

  const waypoints: Waypoint[] = useMemo(
    () => [
      {
        // Ch0: Intro — wide angle
        position: new THREE.Vector3(0, 0, 7.5),
        target: new THREE.Vector3(0, 0, 0),
      },
      {
        // Ch1: Problem — pulled back, looking from side/above
        position: new THREE.Vector3(3, 1.5, 6),
        target: new THREE.Vector3(0, 0, 0),
      },
      {
        // Ch2: Features — orbiting to the other side
        position: new THREE.Vector3(-2, 0, 5.5),
        target: new THREE.Vector3(0, 0, 0),
      },
      {
        // Ch3: Interface — close but fully framed
        position: new THREE.Vector3(0.5, 0, 4.5),
        target: new THREE.Vector3(0, 0, 0),
      },
      {
        // Ch4: CTA — pulled back, centered
        position: new THREE.Vector3(0, 0.5, 7.0),
        target: new THREE.Vector3(0, 0, 0),
      },
    ],
    []
  );

  useFrame(() => {
    const { chapterIndex, chapterLocalProgress, reducedMotion } =
      scrollStore.getState();

    if (reducedMotion) return;

    const current = waypoints[chapterIndex];
    const next = waypoints[Math.min(chapterIndex + 1, 4)];
    const t = chapterLocalProgress;

    // Interpolate between waypoints
    const targetPos = new THREE.Vector3().lerpVectors(
      current.position,
      next.position,
      t
    );
    const targetLookAt = new THREE.Vector3().lerpVectors(
      current.target,
      next.target,
      t
    );

    if (size.width < 768) {
      targetPos.x *= 0.32;
      targetPos.y += 0.35;
      targetPos.z += 1.25;
      targetLookAt.y += 0.55;
    }

    // Smooth follow with damping
    currentPos.current.lerp(targetPos, 0.06);
    currentTarget.current.lerp(targetLookAt, 0.06);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}
