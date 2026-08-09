"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Sophisticated ambient atmosphere, mounted once in the root layout so it
 * sits behind every section as one continuous brand atmosphere. Two large
 * blurred light/shadow fields drift on independent, very slow cycles, plus
 * a handful of thin line-art fitness motifs (plate, dumbbell, barbell)
 * drifting/rotating even more slowly — an engineered technical detail, not
 * literal photography or a particle system. Everything here is transform/
 * opacity only (GPU-friendly), and the whole layer goes static under
 * prefers-reduced-motion.
 */
export function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const noAnim = shouldReduceMotion || undefined;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,77,0.05) 0%, rgba(200,255,77,0) 65%)",
          filter: "blur(60px)",
        }}
        animate={noAnim ? undefined : { x: ["0%", "12%", "-6%", "0%"], y: ["0%", "8%", "14%", "0%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/3 -right-1/4 w-[70vw] h-[70vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,31,28,0.9) 0%, rgba(34,31,28,0) 60%)",
          filter: "blur(70px)",
        }}
        animate={noAnim ? undefined : { x: ["0%", "-10%", "8%", "0%"], y: ["0%", "-6%", "-12%", "0%"] }}
        transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Line-art technical motifs — thin stroke only, very low opacity */}
      <motion.svg
        className="absolute top-[12%] left-[6%] w-24 h-24 opacity-[0.05]"
        viewBox="0 0 100 100"
        fill="none"
        animate={noAnim ? undefined : { y: [0, 26, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* weight plate */}
        <circle cx="50" cy="50" r="42" stroke="#eeece6" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="14" stroke="#eeece6" strokeWidth="1.5" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[18%] left-[16%] w-40 h-16 opacity-[0.045]"
        viewBox="0 0 220 90"
        fill="none"
        animate={noAnim ? undefined : { x: [0, -24, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* dumbbell */}
        <rect x="95" y="40" width="30" height="10" rx="2" stroke="#eeece6" strokeWidth="1.5" />
        <circle cx="80" cy="45" r="30" stroke="#eeece6" strokeWidth="1.5" />
        <circle cx="140" cy="45" r="30" stroke="#eeece6" strokeWidth="1.5" />
      </motion.svg>

      <motion.svg
        className="absolute top-[30%] right-[10%] w-56 h-20 opacity-[0.04]"
        viewBox="0 0 320 100"
        fill="none"
        animate={noAnim ? undefined : { x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* barbell */}
        <line x1="40" y1="50" x2="280" y2="50" stroke="#c8ff4d" strokeWidth="1.5" />
        <rect x="20" y="26" width="14" height="48" rx="2" stroke="#c8ff4d" strokeWidth="1.5" />
        <rect x="286" y="26" width="14" height="48" rx="2" stroke="#c8ff4d" strokeWidth="1.5" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[8%] right-[22%] w-20 h-20 opacity-[0.045]"
        viewBox="0 0 100 100"
        fill="none"
        animate={noAnim ? undefined : { rotate: [0, 14, 0], y: [0, 12, 0] }}
        transition={{ duration: 44, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="38" stroke="#eeece6" strokeWidth="1.5" />
        <line x1="50" y1="12" x2="50" y2="24" stroke="#eeece6" strokeWidth="1.5" />
      </motion.svg>

      <div className="grain-overlay" />
    </div>
  );
}
