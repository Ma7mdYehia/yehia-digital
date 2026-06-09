"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

const icons: Record<string, React.ReactNode> = {
  growth: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  ecommerce: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  ai: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  ),
};

export default function CapabilitiesSection() {
  const isClient = useIsClient();

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.42, ease: "easeOut", delay },
  });

  return (
    <section
      id="capabilities"
      aria-label="What I do"
      className="px-6 lg:pl-24 lg:pr-16 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        <div className="flex flex-col gap-3">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-widest uppercase font-medium">
            What I do
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            Three areas. One operating model.
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              {...reveal(i * 0.08)}
              className="glass rounded-2xl border border-white/[0.10] p-7 flex flex-col gap-5 hover:border-white/[0.18] transition-colors duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#3DBA8C]/[0.08] border border-[#3DBA8C]/20 flex items-center justify-center text-[#3DBA8C]">
                {icons[cap.icon]}
              </div>

              {/* Title + body */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-base font-semibold text-[#E8EDF2]">{cap.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{cap.body}</p>
              </div>

              {/* Footer tags */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.06]">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-[#94A3B8]/60 bg-white/[0.03] border border-white/[0.07] rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
