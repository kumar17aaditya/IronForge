import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { TestimonialCarousel } from "@/components/motion/TestimonialCarousel";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-surface/95 py-24 md:py-36">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow="Testimonials" headline="What members say." align="center" className="mx-auto text-center" />
        </RevealOnScroll>

        <div className="mt-16">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
        <p className="mt-10 text-xs text-muted text-center">
          Sample testimonials — IronForge is a fictional brand built for portfolio purposes.
        </p>
      </Container>
    </section>
  );
}
