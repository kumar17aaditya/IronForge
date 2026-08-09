// IronForge Fitness — shared type definitions

export interface MediaAttribution {
  source: string;
  photographer?: string;
  url?: string;
}

/**
 * A real, local image asset. There is no placeholder/fallback concept here
 * by design — if `src` doesn't resolve to a real file under /public, the
 * dev-time asset checker (scripts/check-assets.mjs) fails loudly rather
 * than the app silently rendering a fake image.
 */
export interface MediaRef {
  id: string;
  src: string;
  alt: string;
  section: "hero" | "programs" | "facility" | "coaches" | "environment" | "results";
  /** Intended crop ratio, e.g. "4/5", "16/9" — documentation for whoever sources the file. */
  aspectRatio: string;
  /** CSS object-position, only when the default "center" isn't right for the crop. */
  objectPosition?: string;
  priority?: boolean;
  attribution?: MediaAttribution;
}

export interface HeroMedia {
  image: MediaRef;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  name: string;
  hook: string;
  description: string;
  image: MediaRef;
  ctaLabel: string;
  whatsappContext: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  billingNote: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  highlighted: boolean;
}

export interface Perk {
  id: string;
  label: string;
  description: string;
  icon: string; // lucide-react icon name
}

export interface FacilityZone {
  id: string;
  label: string;
  description: string;
  image: MediaRef;
  span?: "sm" | "md" | "lg";
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  yearsExperience: number;
  bio: string;
  certifications: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  memberSince: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  isIllustrative: true;
}

export interface TrainingBeat {
  time: string;
  label: string;
  description: string;
  image: MediaRef;
}

export type InterestOption = "membership" | "personal-training" | "free-trial";

export interface EnquiryFormData {
  name: string;
  phone: string;
  interest: InterestOption;
  message?: string;
}
