import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { MembershipSelector } from "@/components/motion/MembershipSelector";
import { memberships } from "@/data/memberships";

export function Memberships() {
  return (
    <section id="membership" className="bg-background/95 py-24 md:py-36">
      <Container>
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
            <h2 className="eyebrow">Membership</h2>
            <span className="numeral text-sm">Choose your level</span>
          </div>
        </RevealOnScroll>

        <MembershipSelector tiers={memberships} />
      </Container>
    </section>
  );
}
