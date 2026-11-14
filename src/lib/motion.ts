// Legacy framer-motion springs ONLY (drag gestures / BaseModal in SIGCE).
// Every spring MUST be overdamped (damping ratio zeta > 1.0).
// Public CBRB site: no framer-motion used. Do not add inline duration/type literals.
export const MOTION_SPRING_CONFIG = {
  smooth: { type: "spring", stiffness: 120, damping: 20, mass: 1 } as const,
  snappy: { type: "spring", stiffness: 200, damping: 28, mass: 1 } as const,
} as const;

export const MOTION_PRESENCE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;
