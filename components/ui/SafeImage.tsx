"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/cn";

type SafeImageProps = ImageProps & { label?: string };

/**
 * During development, a required asset can genuinely be missing (see
 * npm run check-assets / npm run build, which both refuse to ship without
 * it). Rather than a raw broken-image icon and alt text, this shows a
 * minimal graphite panel with a small icon and label — an honest "not
 * available yet" state, not a fake photo standing in for a real one.
 * In production this never renders, because the build won't complete
 * while required assets are missing.
 */
export function SafeImage({ label, alt, className, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-graphite border border-border-soft text-muted",
          className,
        )}
      >
        <ImageOff size={18} strokeWidth={1.5} />
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-center px-4">
          {label ?? "Image pending"}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
