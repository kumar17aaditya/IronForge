import type { MediaRef, HeroMedia } from "@/types";

/**
 * MEDIA MANIFEST — single source of truth for every real image on the
 * site. Every entry here maps to a file that actually exists in
 * /public/media. There is no placeholder system.
 *
 * Design decision (this revision): rather than wait on assets that don't
 * exist yet, every previously-missing slot was either (a) redesigned away
 * — the section now uses typography/motion instead of a photo — or
 * (b) filled by intelligently reusing an existing real photo in a new
 * context. See Hero, Training Environment, Results and Coaches for the
 * specifics. Nothing below is "coming soon."
 */

export const programImages: Record<string, MediaRef> = {
  strength: {
    id: "programs-strength",
    src: "/media/programs/strength.jpg",
    alt: "Athlete performing a heavy barbell lift on the IronForge strength floor",
    section: "programs",
    aspectRatio: "4/5",
  },
  personalTraining: {
    id: "programs-personal-training",
    src: "/media/programs/personal-training.jpg",
    alt: "IronForge coach actively spotting and coaching a client through a lift",
    section: "programs",
    aspectRatio: "4/5",
  },
  functional: {
    id: "programs-functional",
    src: "/media/programs/functional.jpg",
    alt: "Athlete performing a sled push in the functional training zone",
    section: "programs",
    aspectRatio: "4/5",
  },
  performance: {
    id: "programs-performance",
    src: "/media/programs/performance.jpg",
    alt: "Athlete performing explosive conditioning work",
    section: "programs",
    aspectRatio: "4/5",
  },
};

export const facilityImages: Record<string, MediaRef> = {
  strengthFloor: {
    id: "facility-strength-floor",
    src: "/media/facility/strength-floor.jpg",
    alt: "IronForge strength floor with racks, benches and free weights",
    section: "facility",
    aspectRatio: "4/5",
  },
  functionalZone: {
    id: "facility-functional-zone",
    src: "/media/facility/functional-zone.jpg",
    alt: "Functional training zone with rig, sleds and open floor space",
    section: "facility",
    aspectRatio: "4/3",
  },
  cardio: {
    id: "facility-cardio",
    src: "/media/facility/cardio.jpg",
    alt: "Row of premium cardio equipment",
    section: "facility",
    aspectRatio: "4/3",
  },
  recovery: {
    id: "facility-recovery",
    src: "/media/facility/recovery.jpg",
    alt: "Dedicated recovery and stretching zone",
    section: "facility",
    aspectRatio: "4/5",
  },
  lockers: {
    id: "facility-lockers",
    src: "/media/facility/lockers.jpg",
    alt: "Clean, premium locker and changing facility",
    section: "facility",
    aspectRatio: "4/3",
  },
  lounge: {
    id: "facility-lounge",
    src: "/media/facility/lounge.jpg",
    alt: "Post-training lounge space",
    section: "facility",
    aspectRatio: "4/3",
  },
};

/**
 * Hero — there is no dedicated hero photo. Rather than leave the hero
 * empty or broken, it intelligently reuses the strength-floor photo
 * (the strongest, most dramatic real asset in the project) as its
 * full-bleed backdrop. Thematically it's the right image for a hero
 * anyway — "this is the floor you'll train on."
 */
export const heroMedia: HeroMedia = {
  image: facilityImages.strengthFloor,
};

/**
 * Training Environment — all four time-of-day photos are now real,
 * user-provided images.
 */
export const trainingEnvironmentImages: Record<string, MediaRef> = {
  earlyMorning: {
    id: "environment-early-morning",
    src: "/media/environment/early-morning.jpg",
    alt: "Quiet early morning training floor, single lifter, low light",
    section: "environment",
    aspectRatio: "4/5",
  },
  midday: {
    id: "environment-midday",
    src: "/media/environment/midday.jpg",
    alt: "Midday training floor, steady activity on treadmills",
    section: "environment",
    aspectRatio: "3/4",
  },
  peakHours: {
    id: "environment-peak-hours",
    src: "/media/environment/peak-hours.jpg",
    alt: "Full training floor at peak hours, multiple athletes training",
    section: "environment",
    aspectRatio: "3/4",
  },
  lateNight: {
    id: "environment-late-night",
    src: "/media/environment/late-night.jpg",
    alt: "Empty low-lit training floor late at night",
    section: "environment",
    aspectRatio: "3/4",
  },
};

/**
 * Results — only three of the four original session photos exist.
 * The section grid was redesigned around three images rather than
 * requiring a fourth that doesn't exist.
 */
export const transformationImages: MediaRef[] = [
  {
    id: "results-session-1",
    src: "/media/results/session-1.jpg",
    alt: "Members training together on the IronForge floor",
    section: "results",
    aspectRatio: "4/5",
  },
  {
    id: "results-session-2",
    src: "/media/results/session-2.jpg",
    alt: "Member reaching a strength milestone lift",
    section: "results",
    aspectRatio: "3/4",
  },
  {
    id: "results-session-4",
    src: "/media/results/session-4.jpg",
    alt: "Group conditioning session in progress",
    section: "results",
    aspectRatio: "4/5",
  },
];

/** Flat list of every required real asset — consumed by scripts/check-assets.ts. */
export const allMediaAssets: MediaRef[] = [
  ...Object.values(programImages),
  ...Object.values(facilityImages),
  ...Object.values(trainingEnvironmentImages),
  ...transformationImages,
];
