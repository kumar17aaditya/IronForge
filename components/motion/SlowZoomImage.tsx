"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import type { MediaRef } from "@/types";

interface SlowZoomImageProps {
  image: MediaRef;
}

/**
 * Extremely slow, barely-perceptible scale drift on the hero image — the
 * "controlled image movement" called for in the hero spec. One 26s cycle,
 * mirrored, never resets abruptly. Disabled entirely under
 * prefers-reduced-motion (image stays static, fully readable).
 */
export function SlowZoomImage({ image }: SlowZoomImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0"
      animate={shouldReduceMotion ? undefined : { scale: [1, 1.045, 1] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    >
      <SafeImage
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </motion.div>
  );
}
