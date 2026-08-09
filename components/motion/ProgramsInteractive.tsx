"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getGenericWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import type { Program } from "@/types";

interface ProgramsInteractiveProps {
  programs: Program[];
}

export function ProgramsInteractive({ programs }: ProgramsInteractiveProps) {
  const [active, setActive] = useState(0);
  const current = programs[active];

  return (
    <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
      {/* Nav list — compact, always visible, current program marked */}
      <div className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-visible gap-1 md:gap-0 -mx-1 px-1 md:mx-0 md:px-0">
        {programs.map((program, i) => {
          const isActive = i === active;
          return (
            <button
              key={program.id}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "shrink-0 md:shrink text-left border-b border-border-soft py-4 md:py-5 px-3 md:px-0 transition-colors",
                isActive ? "text-foreground" : "text-muted hover:text-foreground-soft",
              )}
            >
              <div className="flex items-baseline gap-3">
                <span className="numeral text-sm">0{i + 1}</span>
                <span
                  className={cn(
                    "font-display font-bold tracking-tight whitespace-nowrap transition-[font-size] duration-300",
                    isActive ? "text-2xl md:text-3xl" : "text-lg md:text-xl",
                  )}
                >
                  {program.name}
                </span>
              </div>
              {isActive && (
                <p className="hidden md:block mt-2 text-sm text-accent max-w-xs">
                  {program.hook}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* Active program — dominant visual */}
      <div className="md:col-span-8">
        <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
          <Image
            key={current.id}
            src={current.image.src}
            alt={current.image.alt}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-accent text-sm font-medium tracking-wide mb-2 md:hidden">
              {current.hook}
            </p>
            <p className="text-foreground-soft leading-relaxed max-w-md text-[15px]">
              {current.description}
            </p>
            <a
              href={getGenericWhatsAppLink(current.whatsappContext)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:text-accent transition-colors group"
            >
              {current.ctaLabel}
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
