import type { NavLink, TrainingBeat } from "@/types";
import { trainingEnvironmentImages } from "./media";

export const brand = {
  name: "IronForge",
  fullName: "IronForge Fitness",
  positioning: "Premium Performance Gym",
} as const;

export const navLinks: NavLink[] = [
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Facility", href: "#facility" },
  { label: "Coaches", href: "#coaches" },
];

/**
 * WHATSAPP CONFIGURATION — single source of truth.
 * Replace WHATSAPP_NUMBER with the real business number before launch.
 * Format: full international number, digits only, no + or spaces.
 */
export const whatsapp = {
  // TEMP — replace before launch. Demo placeholder number (not a real subscriber).
  number: "910000000000",
} as const;

export const hero = {
  kineticWords: ["STRENGTH", "DISCIPLINE", "PERFORMANCE"],
  headlineLine1: "Built for the ones",
  headlineLine2: "who don't stop.",
  subheading:
    "A performance facility for people who train with intent — structured programming, real coaching, a floor that takes the work as seriously as you do.",
  primaryCta: "Start Your Journey",
  secondaryCta: "Message Us",
} as const;

export const philosophy = {
  eyebrow: "The IronForge Philosophy",
  headline: "This isn't a gym. It's where you get built.",
  body: "Every rack, every coach, every hour is here for one reason: to make you stronger than you were yesterday. No shortcuts, no gimmicks — just structured, serious training.",
} as const;

export const trainingEnvironment: {
  eyebrow: string;
  headline: string;
  body: string;
  beats: TrainingBeat[];
  floorStatusLabel: string;
  floorStatusItems: string[];
} = {
  eyebrow: "Training Environment",
  headline: "The floor never stops.",
  body: "IronForge runs on a rhythm — quiet early sessions, high-energy peak hours, focused late-night work. Every hour has its own character.",
  beats: [
    {
      time: "06:00",
      label: "Early Morning",
      description: "Quiet. Focused. First session.",
      image: trainingEnvironmentImages.earlyMorning,
    },
    {
      time: "10:00",
      label: "Midday",
      description: "Steady. Fewer people. Room to work.",
      image: trainingEnvironmentImages.midday,
    },
    {
      time: "18:00",
      label: "Peak Hours",
      description: "Heavy sets. Full floor. Energy.",
      image: trainingEnvironmentImages.peakHours,
    },
    {
      time: "22:30",
      label: "Late Night",
      description: "Low lights. Serious work.",
      image: trainingEnvironmentImages.lateNight,
    },
  ],
  floorStatusLabel: "IronForge Training Floor",
  floorStatusItems: ["Strength", "Functional", "Conditioning", "Open 24/7"],
} as const;

export const whyIronForge = {
  eyebrow: "Why IronForge",
  headline: "More than equipment.",
} as const;

export const location = {
  eyebrow: "Find Your Training Ground",
  headline: "Come see the floor.",
  // Fictional demo address — IronForge is not a real business.
  addressLines: ["4th Cross, Indiranagar", "Bengaluru, Karnataka 560038"],
  hours: [
    { day: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
    { day: "Saturday – Sunday", time: "6:00 AM – 10:00 PM" },
  ],
  demoNote:
    "IronForge is a fictional brand built as a design/development demo — this address and phone number are placeholders, not a real business.",
} as const;

export const finalCta = {
  eyebrow: "Still thinking?",
  headline: "Good. Come train.",
  primaryCta: "Start Your Journey",
} as const;

export const footer = {
  tagline: "Forge yourself.",
  columns: [
    {
      title: "Explore",
      links: navLinks,
    },
    {
      title: "Contact",
      links: [
        { label: "WhatsApp", href: "#enquiry" },
        { label: "Location", href: "#location" },
      ],
    },
  ],
  legalNote:
    "IronForge Fitness is a fictional brand created for portfolio/demonstration purposes. Not a registered business.",
} as const;
