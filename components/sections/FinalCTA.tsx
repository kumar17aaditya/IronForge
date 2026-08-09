import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { finalCta } from "@/data/site";
import { getGenericWhatsAppLink } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(200,255,77,0.05) 0%, transparent 60%)",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 rotate-[-7deg] font-display text-[26vw] font-extrabold text-foreground/[0.035] whitespace-nowrap"
      >
        FORGE
      </span>

      <Container className="relative text-center">
        <RevealOnScroll>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-6">
            {finalCta.eyebrow}
          </p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.92] tracking-tight">
            {finalCta.headline}
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#enquiry" variant="primary">
              {finalCta.primaryCta}
            </Button>
            <Button
              href={getGenericWhatsAppLink("getting started")}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              WhatsApp
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
