import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { scrollStore } from "../hooks/useScrollProgress";

/**
 * Post-processing effects:
 * - Subtle bloom on emissive screen face
 * - Gentle vignette + film grain
 */
export default function PostProcessingEffects() {
  const { reducedMotion } = scrollStore.getState();
  
  if (reducedMotion) return null;

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.16}
        luminanceThreshold={0.86}
        luminanceSmoothing={0.55}
        mipmapBlur
      />
      <Vignette
        offset={0.35}
        darkness={0.48}
        blendFunction={BlendFunction.NORMAL}
      />
      <Noise
        premultiply
        blendFunction={BlendFunction.SOFT_LIGHT}
        opacity={0.06}
      />
    </EffectComposer>
  );
}
