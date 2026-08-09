"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const current = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Quote size={32} className="mx-auto text-accent mb-6" strokeWidth={1.5} />

      <div className="relative min-h-[180px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current.id}
            drag={shouldReduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="cursor-grab active:cursor-grabbing"
          >
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm text-muted">
              <span className="text-foreground font-semibold">{current.name}</span>
              {" · "}
              {current.memberSince}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="w-10 h-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="w-10 h-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
