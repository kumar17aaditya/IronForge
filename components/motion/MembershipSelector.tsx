"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getGenericWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import type { MembershipTier } from "@/types";

interface MembershipSelectorProps {
  tiers: MembershipTier[];
}

export function MembershipSelector({ tiers }: MembershipSelectorProps) {
  const defaultIndex = tiers.findIndex((t) => t.highlighted);
  const [selected, setSelected] = useState(defaultIndex >= 0 ? defaultIndex : 0);

  return (
    <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3">
      {tiers.map((tier, i) => {
        const isSelected = selected === i;
        return (
          <button
            key={tier.id}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={isSelected}
            className={cn(
              "h-full flex flex-col py-10 px-2 md:px-8 text-left border-b md:border-b-0 md:border-l first:md:border-l-0 border-border-soft transition-colors duration-300",
              isSelected && "md:bg-surface md:px-8 relative",
            )}
          >
            {isSelected && (
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-accent hidden md:block" />
            )}

            <div className="flex items-baseline justify-between">
              <h3
                className={cn(
                  "font-display font-bold tracking-tight transition-[font-size] duration-300",
                  isSelected ? "text-3xl" : "text-2xl",
                )}
              >
                {tier.name}
              </h3>
              {tier.highlighted && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                  Most Popular
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-muted">{tier.tagline}</p>

            <div className="mt-8 flex items-baseline gap-2">
              <span
                className={cn(
                  "font-display font-bold transition-[font-size] duration-300",
                  isSelected ? "text-6xl" : "text-5xl",
                )}
              >
                {tier.price}
              </span>
              <span className="text-xs text-muted">{tier.billingNote}</span>
            </div>

            <ul className="mt-9 flex flex-col gap-3.5 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check size={15} className="text-accent mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span className="text-foreground-soft">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              href={getGenericWhatsAppLink(`the ${tier.name} membership`)}
              target="_blank"
              rel="noopener noreferrer"
              variant={isSelected ? "primary" : "secondary"}
              className="mt-10 w-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {tier.ctaLabel}
            </Button>
          </button>
        );
      })}
    </div>
  );
}
