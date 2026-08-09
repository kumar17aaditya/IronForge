import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CoachesInteractive } from "@/components/motion/CoachesInteractive";
import { trainers } from "@/data/trainers";

export function Coaches() {
  return (
    <section id="coaches" className="bg-surface py-24 md:py-36">
      <Container>
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
            <h2 className="eyebrow">Coaches</h2>
            <span className="numeral text-sm">The people behind the programming</span>
          </div>
        </RevealOnScroll>

        <CoachesInteractive trainers={trainers} />
      </Container>
    </section>
  );
}
