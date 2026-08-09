import { MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { location } from "@/data/site";
import { getGenericWhatsAppLink } from "@/lib/whatsapp";

export function Location() {
  const mapQuery = encodeURIComponent(location.addressLines.join(", "));

  return (
    <section id="location" className="bg-surface py-24 md:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
          <RevealOnScroll>
            <SectionHeading eyebrow={location.eyebrow} headline={location.headline} />

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-0.5 shrink-0" />
                <div>
                  {location.addressLines.map((line) => (
                    <p key={line} className="text-foreground/90">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-accent mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  {location.hours.map((h) => (
                    <p key={h.day} className="text-foreground/90 text-sm">
                      <span className="text-muted">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <Button
                href={getGenericWhatsAppLink("visiting the gym")}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-fit mt-2"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </Button>
            </div>

            <p className="mt-8 text-xs text-muted max-w-md">{location.demoNote}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="relative aspect-[4/3] w-full border border-border overflow-hidden bg-surface">
              {/* Real embedded map, centered on the general area — the
                  demo note below makes clear IronForge itself isn't a
                  real business at this address. */}
              <iframe
                title="Map showing the general IronForge demo location area"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "grayscale(0.4) invert(0.92) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <MapPin size={14} />
                Get Directions
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
