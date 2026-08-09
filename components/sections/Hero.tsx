import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KineticHeroSequence, KineticLoopLabel } from "@/components/motion/KineticHeroSequence";
import { SlowZoomImage } from "@/components/motion/SlowZoomImage";
import { hero } from "@/data/site";
import { heroMedia } from "@/data/media";
import { getGenericWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[540px] sm:min-h-[620px] md:min-h-[680px] w-full overflow-hidden bg-background">
      {/* Image layer — reuses the real strength-floor photo as the hero
          backdrop (no dedicated hero photo exists; this was the strongest
          available real asset and thematically the right one). Slow scale
          drift, layered darkness rather than a flat gradient-over-photo. */}
      <div className="absolute inset-0">
        <SlowZoomImage image={heroMedia.image} />
        {/* Directional darkness — heavier from the left/bottom where type sits */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/10 to-background/40" />
        {/* Radial vignette for depth, not a flat rectangle overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 65%, transparent 0%, rgba(13,12,11,0.55) 75%)",
          }}
        />
        <div className="grain-overlay" />
      </div>

      {/* Top strip — brand context, understated */}
      <Container className="relative z-10 pt-28 md:pt-32">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Bengaluru · Performance Facility
        </div>
      </Container>

      {/* Main hero content — the kinetic word cycle sits directly above the
          headline as its lead-in, so the headline reads as coming after/
          below the STRENGTH · DISCIPLINE · PERFORMANCE cycle, not as an
          unrelated floating side element. */}
      <Container className="relative z-10 flex h-full flex-col justify-end pb-16 sm:pb-20 md:pb-16">
        <div className="max-w-4xl">
          <KineticLoopLabel words={[...hero.kineticWords]} />

          <h1 className="font-display text-[13.5vw] sm:text-[9.5vw] md:text-[6.6vw] leading-[0.9] font-bold tracking-tight">
            <span className="block">{hero.headlineLine1}</span>
            <span className="block text-accent">{hero.headlineLine2}</span>
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
            <p className="max-w-sm text-[15px] leading-relaxed text-foreground-soft">
              {hero.subheading}
            </p>
            <div className="flex flex-col xs:flex-row gap-3 shrink-0">
              <Button href="#enquiry" variant="primary">
                {hero.primaryCta}
              </Button>
              <Button
                href={getGenericWhatsAppLink("joining IronForge")}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="text-foreground-soft hover:text-accent"
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 right-6 md:right-10 z-10 hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        Scroll
        <ArrowDown size={13} />
      </div>

      <KineticHeroSequence words={[...hero.kineticWords]} />
    </section>
  );
}
