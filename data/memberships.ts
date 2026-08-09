import type { MembershipTier } from "@/types";

export const memberships: MembershipTier[] = [
  {
    id: "forge",
    name: "Forge",
    price: "₹2,499",
    billingNote: "per month",
    tagline: "Everything you need to start training seriously.",
    features: [
      "Full gym access",
      "Strength floor",
      "Cardio zone",
      "Locker access",
    ],
    ctaLabel: "Join Forge",
    highlighted: false,
  },
  {
    id: "performance",
    name: "Performance",
    price: "₹4,499",
    billingNote: "per month",
    tagline: "For members who train with structure.",
    features: [
      "Everything in Forge",
      "Functional training zone",
      "Group sessions",
      "Progress tracking",
      "Recovery zone",
    ],
    ctaLabel: "Start Training",
    highlighted: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: "₹7,999",
    billingNote: "per month",
    tagline: "Full coaching, fully programmed.",
    features: [
      "Everything in Performance",
      "Personal training",
      "Custom programming",
      "Nutrition guidance",
      "Priority coaching",
    ],
    ctaLabel: "Go Elite",
    highlighted: false,
  },
];
