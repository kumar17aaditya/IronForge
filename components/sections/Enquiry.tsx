import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { EnquiryForm } from "@/components/motion/EnquiryForm";

export function Enquiry() {
  return (
    <section id="enquiry" className="relative py-24 md:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Get Started"
              headline="Ready to get serious?"
              body="Tell us what you're after and we'll pick it up on WhatsApp — no account, no wait."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <EnquiryForm />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
