import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { perks } from "@/data/perks";

export function WhyIronForge() {
  return (
    <section className="bg-surface/95 py-24 md:py-36">
      <Container>
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
            <h2 className="eyebrow">Why IronForge</h2>
            <span className="numeral text-sm">More than equipment</span>
          </div>
        </RevealOnScroll>

        {/* Manifesto — each statement is its own scroll moment, oversized
            typography, not a six-item icon grid. */}
        <div className="mt-4 md:mt-8">
          {perks.map((perk, i) => {
            const Icon = (Icons[perk.icon as keyof typeof Icons] ??
              Icons.Dumbbell) as LucideIcon;
            return (
              <RevealOnScroll key={perk.id} delay={i * 0.03}>
                <div className="group border-b border-border-soft py-8 md:py-10">
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="numeral text-xs md:text-sm text-muted mt-3 md:mt-5 shrink-0">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 md:gap-4">
                        <Icon
                          size={20}
                          className="text-accent shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                          strokeWidth={1.5}
                        />
                        <h3 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] transition-colors group-hover:text-accent">
                          {perk.label}
                        </h3>
                      </div>
                      <p className="mt-3 md:mt-4 text-sm md:text-base text-foreground-soft leading-relaxed max-w-xl md:pl-9">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
