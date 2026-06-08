"use client";

import { motion } from "framer-motion";

interface SectionPlaceholderProps {
  id: string;
  label: string;
}

export default function SectionPlaceholder({ id, label }: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className="px-6 lg:pl-24 lg:pr-16 py-20 border-t border-white/[0.05]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-xs text-[#94A3B8]/40 tracking-widest uppercase font-medium px-1">
            {label}
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-8 glass rounded-2xl px-8 py-10 text-center"
        >
          <p className="text-sm text-[#94A3B8]/40 font-medium">
            Coming in the next milestone
          </p>
        </motion.div>
      </div>
    </section>
  );
}
