"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Trainer } from "@/types";

interface CoachesInteractiveProps {
  trainers: Trainer[];
}

/**
 * No portrait imagery required or used, by design — the coach's initial
 * becomes the dominant visual element instead of a stand-in silhouette.
 * Hover/focus one to expand it; the others recede.
 */
export function CoachesInteractive({ trainers }: CoachesInteractiveProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mt-10 md:mt-14 flex flex-col md:flex-row gap-2.5 md:gap-3 md:h-[520px]">
      {trainers.map((trainer, i) => {
        const isActive = active === i;
        const isDimmed = active !== null && !isActive;
        const initial = trainer.name.charAt(0);

        return (
          <button
            key={trainer.id}
            type="button"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            className={cn(
              "group relative overflow-hidden text-left transition-[flex-grow,opacity] duration-500 ease-out",
              "border border-border-soft bg-surface",
              "min-h-[280px] md:min-h-0 md:h-full",
              isDimmed ? "opacity-55" : "opacity-100",
            )}
            style={{ flexGrow: isActive ? 2.2 : 1 }}
          >
            {/* Oversized initial — the primary visual, replaces a portrait */}
            <span
              aria-hidden="true"
              className={cn(
                "font-display font-bold leading-none select-none absolute -bottom-6 -right-2 transition-all duration-500",
                isActive
                  ? "text-[13rem] text-accent/[0.22]"
                  : "text-[9rem] text-foreground/[0.14]",
              )}
            >
              {initial}
            </span>

            {/* Thin corner geometry — subtle, technical, not decorative clutter */}
            <span className="absolute top-5 right-5 w-8 h-8 border-t border-r border-border-soft group-hover:border-accent/40 transition-colors" />

            <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
              <p className="numeral text-xs text-muted mb-2">0{i + 1}</p>
              <p
                className={cn(
                  "font-display font-bold tracking-tight transition-[font-size] duration-500",
                  isActive ? "text-3xl md:text-4xl" : "text-xl md:text-2xl",
                )}
              >
                {trainer.name}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent mt-1">
                {trainer.specialty}
              </p>
              <p className="text-xs text-muted mt-0.5">{trainer.yearsExperience} years</p>

              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-out",
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="pt-3 text-sm text-foreground/85 leading-relaxed max-w-sm">
                    {trainer.bio}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    {trainer.certifications.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
