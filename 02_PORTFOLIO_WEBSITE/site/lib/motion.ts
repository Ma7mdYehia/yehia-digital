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

/* ---------------------------------------------------------------------------
   Shared state-transition factories.

   Each takes an `animate` flag (the caller computes it from useIsClient +
   useReducedMotion) and returns motion props. When `animate` is false they
   return a static/instant variant so reduced-motion users get no movement.
   All effects are transform/opacity only.
--------------------------------------------------------------------------- */

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;

/** Soft fade-up for a panel re-entering (e.g. remount by key). */
export const panelSwap = (animate: boolean) =>
  animate
    ? ({
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: SLIDE_EASE },
      } as const)
    : ({} as const);

/** Horizontal slide + fade for tab-panel content swaps. */
export const tabContentSlide = (animate: boolean) =>
  animate
    ? ({
        initial: { opacity: 0, x: 18 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.34, ease: "easeOut" },
      } as const)
    : ({} as const);

/** Slide + fade for a detail panel whose contents change in place. */
export const detailPanelSlide = (animate: boolean) =>
  animate
    ? ({
        initial: { opacity: 0, x: 14 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.3, ease: "easeOut" },
      } as const)
    : ({} as const);

/**
 * Per-card enter/exit for a filtered grid. `index` lightly staggers the
 * entrance. Always provides an exit so AnimatePresence can animate removal.
 */
export const filterGridTransition = (animate: boolean, index = 0) =>
  ({
    layout: true,
    initial: animate ? { opacity: 0, y: 12 } : false,
    animate: { opacity: 1, y: 0 },
    exit: animate ? { opacity: 0, y: -8 } : { opacity: 0 },
    transition: {
      duration: 0.32,
      ease: "easeOut",
      delay: animate ? Math.min(index * 0.025, 0.2) : 0,
    },
  } as const);

/** Slightly larger first-entry slide-up for whole sections / strips. */
export const sectionSlideUp = (animate: boolean, delay = 0) =>
  animate
    ? ({
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, ease: SLIDE_EASE, delay },
      } as const)
    : ({} as const);

/** Container + item variants for a light staggered first-entry (e.g. chips). */
export const staggerContainer = (animate: boolean, stagger = 0.02) =>
  animate
    ? ({
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-40px" },
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: stagger } },
        },
      } as const)
    : ({} as const);

export const staggerItem = (animate: boolean) =>
  animate
    ? ({
        variants: {
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          },
        },
      } as const)
    : ({} as const);

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
