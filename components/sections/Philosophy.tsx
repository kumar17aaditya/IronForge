import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { philosophy } from "@/data/site";

export function Philosophy() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Oversized low-opacity backdrop word — restrained kinetic typography.
          Inclined and sized to sit fully within the section's clipped
          bounds rather than cutting off awkwardly at the edges. */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] font-display text-[32vw] font-extrabold text-foreground/[0.035] whitespace-nowrap"
      >
        FORGE
      </span>

      <Container className="relative">
        <RevealOnScroll>
          <p className="eyebrow mb-6">{philosophy.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl">
            {philosophy.headline}
          </h2>
          <p className="mt-8 max-w-xl text-[15px] md:text-lg text-foreground-soft leading-relaxed">
            {philosophy.body}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
