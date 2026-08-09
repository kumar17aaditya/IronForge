"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface KineticHeroSequenceProps {
  words: string[];
}

const INTRO_BEAT_MS = 1100;
const LOOP_BEAT_MS = 3400;

/**
 * Shared timing/phase logic for the hero's kinetic sequence. Both the
 * full-screen intro overlay and the persistent loop label (rendered in two
 * different places in the Hero layout) derive from this single hook so
 * their timing stays in lockstep — they mount at the same time from the
 * same parent render, so their independent timers stay synchronized in
 * practice.
 */
function useKineticPhase(words: string[]) {
  const shouldReduceMotion = useReducedMotion();
  const [introIndex, setIntroIndex] = useState(0);
  const [phase, setPhase] = useState<"words" | "reveal" | "loop">("words");
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || phase !== "words") return;
    if (introIndex >= words.length) {
      const t = setTimeout(() => setPhase("reveal"), 0);
      return () => clearTimeout(t);
    }
    // Uniform beat length for every word — no word transitions faster than another.
    const t = setTimeout(() => setIntroIndex((i) => i + 1), INTRO_BEAT_MS);
    return () => clearTimeout(t);
  }, [introIndex, words.length, shouldReduceMotion, phase]);

  useEffect(() => {
    if (shouldReduceMotion || phase !== "reveal") return;
    const t = setTimeout(() => setPhase("loop"), 550);
    return () => clearTimeout(t);
  }, [phase, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || phase !== "loop") return;
    const t = setInterval(() => {
      setLoopIndex((i) => (i + 1) % words.length);
    }, LOOP_BEAT_MS);
    return () => clearInterval(t);
  }, [phase, shouldReduceMotion, words.length]);

  return { shouldReduceMotion, introIndex, phase, loopIndex };
}

/**
 * Full-screen opening beat: word → word → word → light reveal, then fades
 * to reveal the real (server-rendered, always-present) hero content.
 */
export function KineticHeroSequence({ words }: KineticHeroSequenceProps) {
  const { shouldReduceMotion, introIndex, phase } = useKineticPhase(words);
  const showIntroOverlay = !shouldReduceMotion && (phase === "words" || phase === "reveal");
  const currentIntroWord = words[introIndex];

  if (!showIntroOverlay) return null;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "reveal" ? 0 : 1 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {phase === "reveal" && (
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 55%, rgba(200,255,77,0.16) 0%, rgba(200,255,77,0) 60%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />
      )}
      {phase === "words" && (
        <AnimatePresence mode="wait">
          {currentIntroWord && (
            <motion.span
              key={currentIntroWord}
              className="font-display text-[14vw] md:text-[9vw] font-bold tracking-tight text-foreground/90"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentIntroWord}
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

/**
 * Persistent, continuously-looping word label — never disappears once the
 * intro finishes. Rendered directly above the headline in Hero.tsx (so the
 * headline reads as coming "below" the STRENGTH/DISCIPLINE/PERFORMANCE
 * cycle), not as a floating side element.
 */
export function KineticLoopLabel({ words }: KineticHeroSequenceProps) {
  const { shouldReduceMotion, loopIndex } = useKineticPhase(words);

  return (
    <div className="flex items-center gap-3 mb-4 md:mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
      <span className="inline-block overflow-hidden relative h-[1.1em] w-32">
        {shouldReduceMotion ? (
          <span className="absolute left-0 top-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground-soft whitespace-nowrap">
            {words[0]}
          </span>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={loopIndex}
              className="absolute left-0 top-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground-soft whitespace-nowrap"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {words[loopIndex]}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </div>
  );
}
