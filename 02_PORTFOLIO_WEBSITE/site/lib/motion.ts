"use client";

import { useReducedMotion } from "framer-motion";
import { useIsClient } from "@/lib/useIsClient";

/**
 * Returns a reveal(delay?) factory — whileInView fade-up.
 * SSR-safe (no hidden content on first paint) and respects prefers-reduced-motion.
 */
export function useReveal() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const shouldAnimate = isClient && !prefersReduced;

  return (delay = 0) =>
    shouldAnimate
      ? ({
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, ease: "easeOut", delay },
        } as const)
      : ({} as const);
}

// Legacy — retained for any caller still using it.
export const scrollReveal = (delay = 0) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-60px" },
  variants: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: "easeOut", delay },
    },
  },
});
