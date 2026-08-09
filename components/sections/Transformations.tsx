import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { stats } from "@/data/stats";
import { transformationImages } from "@/data/media";

export function Transformations() {
  return (
    <section className="bg-background py-24 md:py-36">
      <Container>
        <RevealOnScroll>
          <div className="border-b border-border pb-8">
            <p className="eyebrow mb-5">Results</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              The work shows.
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 border-b border-border pb-10">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center sm:text-left">
              <p className="font-display text-5xl md:text-6xl font-extrabold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </RevealOnScroll>
        <p className="mt-3 text-xs text-muted">
          *Illustrative demo figures — IronForge is a fictional brand built for
          portfolio purposes, not verified business statistics.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {transformationImages.map((img, i) => (
            <RevealOnScroll key={img.src} delay={i * 0.06}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 32vw, 90vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.05]"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
