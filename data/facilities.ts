import type { FacilityZone } from "@/types";
import { facilityImages } from "./media";

export const facilities: FacilityZone[] = [
  {
    id: "strength-floor",
    label: "Strength Floor",
    description: "Commercial-grade racks, benches and free weights.",
    image: facilityImages.strengthFloor,
    span: "lg",
  },
  {
    id: "functional-zone",
    label: "Functional Zone",
    description: "Sleds, ropes, rigs and open movement space.",
    image: facilityImages.functionalZone,
    span: "md",
  },
  {
    id: "cardio",
    label: "Cardio",
    description: "Premium cardio equipment, always maintained.",
    image: facilityImages.cardio,
    span: "sm",
  },
  {
    id: "recovery",
    label: "Recovery",
    description: "A dedicated space to stretch, roll out and reset.",
    image: facilityImages.recovery,
    span: "lg",
  },
  {
    id: "lockers",
    label: "Lockers",
    description: "Clean, secure, premium changing facilities.",
    image: facilityImages.lockers,
    span: "sm",
  },
  {
    id: "lounge",
    label: "Lounge",
    description: "Somewhere to sit after you've earned it.",
    image: facilityImages.lounge,
    span: "md",
  },
];
