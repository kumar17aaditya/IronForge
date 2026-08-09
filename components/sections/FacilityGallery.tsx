import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { facilities } from "@/data/facilities";
import { cn } from "@/lib/cn";

const spanClasses: Record<NonNullable<(typeof facilities)[number]["span"]>, string> = {
  lg: "sm:col-span-2",
  md: "sm:col-span-2",
  sm: "",
};

export function FacilityGallery() {
  const [primary, ...supporting] = facilities;

  return (
    <section id="facility" className="bg-background py-24 md:py-36">
      <Container>
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
            <h2 className="eyebrow">Facility</h2>
            <span className="numeral text-sm">Built for serious training</span>
          </div>
        </RevealOnScroll>

        {/* Primary centerpiece — the Strength Floor gets the strongest
            treatment: full-bleed, tall, heaviest contrast/lighting, large
            typography, distinct from the supporting panels below. */}
        <RevealOnScroll className="mt-10 md:mt-14">
          <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden group">
            <Image
              src={primary.image.src}
              alt={primary.image.alt}
              fill
              priority={false}
              sizes="100vw"
              className="object-cover brightness-[0.92] contrast-[1.08] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="eyebrow">The Centerpiece</span>
              <p className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
                {primary.label}
              </p>
              <p className="mt-2 text-sm md:text-base text-foreground-soft max-w-md">
                {primary.description}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Supporting panels — asymmetric, deliberately not identical sizes */}
        <div className="mt-2.5 md:mt-3 grid grid-cols-2 sm:grid-cols-4 auto-rows-[minmax(0,1fr)] gap-2.5 md:gap-3">
          {supporting.map((zone, i) => (
            <RevealOnScroll
              key={zone.id}
              delay={(i % 4) * 0.05}
              className={cn(
                "relative overflow-hidden group",
                spanClasses[zone.span ?? "sm"],
              )}
            >
              <div className="relative w-full h-full aspect-[4/3] min-h-[180px]">
                <Image
                  src={zone.image.src}
                  alt={zone.image.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="font-display text-base md:text-lg font-bold tracking-tight">
                    {zone.label}
                  </p>
                  <p className="text-xs text-muted mt-1 hidden sm:block">
                    {zone.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
