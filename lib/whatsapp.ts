import { whatsapp } from "@/data/site";
import type { EnquiryFormData, InterestOption } from "@/types";

const INTEREST_LABELS: Record<InterestOption, string> = {
  membership: "Membership",
  "personal-training": "Personal Training",
  "free-trial": "a Free Trial",
};

/**
 * Builds the WhatsApp message for a fully-completed enquiry form.
 */
export function buildWhatsAppMessage(data: EnquiryFormData): string {
  const interest = INTEREST_LABELS[data.interest];
  const lines = [
    `Hi IronForge, I'm ${data.name}.`,
    `I'm interested in ${interest}.`,
  ];
  if (data.message?.trim()) {
    lines.push(data.message.trim());
  } else {
    lines.push("I'd like to know more about getting started.");
  }
  if (data.phone) {
    lines.push(`You can reach me at ${data.phone}.`);
  }
  return lines.join(" ");
}

/**
 * Returns a wa.me link for a fully-completed enquiry form submission.
 */
export function getWhatsAppLink(data: EnquiryFormData): string {
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns a wa.me link for a contextual CTA that isn't backed by the full
 * enquiry form (nav "Join Now", program CTAs, mobile bar, etc.).
 */
export function getGenericWhatsAppLink(context: string): string {
  const message = `Hi IronForge, I'd like to know more about ${context}.`;
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}
