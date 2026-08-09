import type { Perk } from "@/types";

export const perks: Perk[] = [
  {
    id: "equipment",
    label: "Elite Equipment",
    description:
      "Commercial-grade racks, plates and machines maintained to a standard, not just stocked.",
    icon: "Dumbbell",
  },
  {
    id: "coaching",
    label: "Real Coaching",
    description:
      "Coaches who can actually program a training cycle — not just count your reps back to you.",
    icon: "ClipboardList",
  },
  {
    id: "access",
    label: "Open 24/7",
    description:
      "Train at 6am or midnight. The floor doesn't keep office hours.",
    icon: "Clock",
  },
  {
    id: "recovery",
    label: "Recovery Built In",
    description:
      "A dedicated space for mobility and recovery — because progress happens between sessions too.",
    icon: "HeartPulse",
  },
  {
    id: "community",
    label: "Serious Community",
    description:
      "Train alongside people who show up and put in the work. It changes how you train.",
    icon: "Users",
  },
  {
    id: "tracking",
    label: "Progress You Can See",
    description:
      "Log lifts, track load over time, know exactly where you stand. No guessing.",
    icon: "TrendingUp",
  },
];
