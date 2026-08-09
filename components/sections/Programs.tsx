import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ProgramsInteractive } from "@/components/motion/ProgramsInteractive";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programs" className="bg-background/95 py-24 md:py-36">
      <Container>
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
            <h2 className="eyebrow">Programs</h2>
            <span className="numeral text-sm">01 — 04</span>
          </div>
        </RevealOnScroll>

        <ProgramsInteractive programs={programs} />
      </Container>
    </section>
  );
}
