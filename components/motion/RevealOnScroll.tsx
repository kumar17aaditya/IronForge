"use client";

import { motion, useReducedMotion, type Variant } from "framer-motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span";
}

/**
 * Tier 1 entrance motion: opacity + small Y translate, once, ease-out.
 * This is the ONLY client-component boundary most sections need —
 * the section itself stays a server component and passes its
 * server-rendered content in as `children`.
 */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  const hidden: Variant = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y };
  const visible: Variant = { opacity: 1, y: 0 };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
