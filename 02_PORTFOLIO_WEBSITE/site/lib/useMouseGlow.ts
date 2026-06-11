"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight pointer-follow glow.
 *
 * Attach the returned ref to a container. On pointer move it finds the nearest
 * `[data-glow]` element under the cursor and writes its local cursor position
 * as CSS custom properties (`--mouse-x`, `--mouse-y`, in %), which the
 * `.mouse-glow-*` classes in globals.css read for a radial spotlight.
 *
 * - One delegated listener per container (works for single panels and grids).
 * - Writes straight to the DOM via requestAnimationFrame — no React state.
 * - SSR-safe: the effect only runs on the client.
 * - Disabled on coarse (touch) pointers and when reduced motion is requested.
 */
export function useMouseGlow<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let pending: { el: HTMLElement; x: number; y: number } | null = null;

    const flush = () => {
      raf = 0;
      if (!pending) return;
      pending.el.style.setProperty("--mouse-x", `${pending.x.toFixed(1)}%`);
      pending.el.style.setProperty("--mouse-y", `${pending.y.toFixed(1)}%`);
    };

    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-glow]");
      if (!target || !root.contains(target)) return;
      const r = target.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      pending = {
        el: target,
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      };
      if (!raf) raf = requestAnimationFrame(flush);
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      root.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
