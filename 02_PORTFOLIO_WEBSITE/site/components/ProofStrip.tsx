"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { proofMetrics } from "@/content/homepage";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function useCountUp(target: number, active: boolean, reduced: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || reduced) { setCount(target); return; }
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced, target]);
  return count;
}

interface MetricCardProps {
  value: string;
  label: string;
  source: string;
  countUp: boolean;
  countTarget?: number;
  index: number;
}

function MetricCard({ value, label, source, countUp, countTarget, index }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const count = useCountUp(countTarget ?? 0, countUp && inView, reduced);

  const displayValue = countUp && countTarget
    ? `${Math.round(count / 1000)}K+`
    : value;

  return (
    <motion.div
      ref={ref}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.42, ease: "easeOut", delay: index * 0.08 }}
      className="glass glass-hover rounded-2xl px-7 py-7 flex flex-col gap-2 flex-1 min-w-[220px]"
    >
      <span className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-none tracking-tight">
        {displayValue}
      </span>
      <p className="text-sm text-[#94A3B8] leading-snug mt-1">{label}</p>
      <p className="text-xs text-[#94A3B8]/50 mt-auto pt-3 border-t border-white/[0.06]">
        {source}
      </p>
    </motion.div>
  );
}

export default function ProofStrip() {
  return (
    <section
      aria-label="Proof metrics"
      className="px-6 lg:pl-24 lg:pr-16 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs text-[#94A3B8]/60 tracking-wider uppercase mb-8 font-medium"
        >
          Selected results
        </motion.p>
        <div className="flex flex-wrap gap-4">
          {proofMetrics.map((m, i) => (
            <MetricCard key={m.source} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
