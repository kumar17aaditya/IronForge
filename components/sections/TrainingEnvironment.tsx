import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { trainingEnvironment } from "@/data/site";

export function TrainingEnvironment() {
  return (
    <section className="bg-surface py-24 md:py-36">
      <Container>
        <RevealOnScroll>
          <div className="border-b border-border pb-8">
            <p className="eyebrow mb-5">{trainingEnvironment.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
              {trainingEnvironment.headline}
            </h2>
            <p className="mt-4 max-w-md text-sm text-foreground-soft leading-relaxed">
              {trainingEnvironment.body}
            </p>
          </div>
        </RevealOnScroll>

        {/* Cinematic timeline — four real photos, one per time of day. Fixed
            aspect ratio per panel (no height-calc math) so text never gets
            pushed out of view regardless of viewport height. */}
        <div className="relative mt-14 md:mt-16">
          <div className="hidden md:block absolute left-0 right-0 top-0 h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
            {trainingEnvironment.beats.map((beat, i) => (
              <RevealOnScroll key={beat.time} delay={i * 0.08} className="relative">
                <span className="hidden md:block absolute -top-3 left-0 w-1.5 h-1.5 rounded-full bg-accent" />
                <div className="relative aspect-[3/4] overflow-hidden group">
                  <Image
                    src={beat.image.src}
                    alt={beat.image.alt}
                    fill
                    sizes="(min-width: 768px) 24vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <p className="font-display font-bold text-accent leading-none text-3xl md:text-4xl">
                      {beat.time}
                    </p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                      {beat.label}
                    </p>
                    <p className="mt-1 text-sm text-muted">{beat.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll className="mt-10">
          <div className="border border-border px-6 py-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {trainingEnvironment.floorStatusLabel}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {trainingEnvironment.floorStatusItems.map((item) => (
                <span
                  key={item}
                  className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
