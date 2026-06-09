"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight interactive hero background.
 * Tracks the pointer (rAF-smoothed) and writes --mx / --my onto the orb root,
 * which the layered radial gradients in globals.css read for parallax.
 * Static on touch devices and when prefers-reduced-motion is set.
 */
export default function InteractiveHeroOrb() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      el.style.setProperty("--mx", curX.toFixed(3));
      el.style.setProperty("--my", curY.toFixed(3));
      if (Math.abs(targetX - curX) > 0.001 || Math.abs(targetY - curY) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="hero-orb" aria-hidden>
      <div className="hero-orb__layer hero-orb__ambient" />
      <div className="hero-orb__layer hero-orb__core" />
      <div className="hero-orb__layer hero-orb__ring" />
      <div className="hero-orb__vignette" />
    </div>
  );
}
