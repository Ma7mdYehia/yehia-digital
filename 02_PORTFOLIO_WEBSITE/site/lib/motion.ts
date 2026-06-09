"use client";

// Returns whileInView animation props that start visible on SSR
// and animate on scroll client-side.
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
