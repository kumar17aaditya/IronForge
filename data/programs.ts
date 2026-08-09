import type { Program } from "@/types";
import { programImages } from "./media";

export const programs: Program[] = [
  {
    id: "strength",
    name: "Strength",
    hook: "Heavy weight. Measured progress.",
    description:
      "Squat, bench, deadlift and press, programmed on a progressive-overload cycle. You track load and reps every session — no guessing whether you're getting stronger.",
    image: programImages.strength,
    ctaLabel: "Explore Strength",
    whatsappContext: "the Strength program",
  },
  {
    id: "personal-training",
    name: "Personal Training",
    hook: "One coach. Your program.",
    description:
      "A dedicated coach builds your program around your goals, your schedule and your starting point, then adjusts it as you progress. Every session is planned, not improvised.",
    image: programImages.personalTraining,
    ctaLabel: "Train 1:1",
    whatsappContext: "Personal Training",
  },
  {
    id: "functional",
    name: "Functional",
    hook: "Movement that carries over.",
    description:
      "Sleds, carries, rope work and ground-based movement built for people who need strength that transfers — to sport, to work, to daily life.",
    image: programImages.functional,
    ctaLabel: "Explore Functional",
    whatsappContext: "the Functional program",
  },
  {
    id: "performance",
    name: "Performance",
    hook: "Train like an athlete.",
    description:
      "Speed, power and conditioning work for people preparing for competition — or who just want to move like they still are one.",
    image: programImages.performance,
    ctaLabel: "Level Up",
    whatsappContext: "the Performance program",
  },
];
