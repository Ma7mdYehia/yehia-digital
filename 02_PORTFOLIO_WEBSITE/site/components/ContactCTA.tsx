"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";
import { contactCTA } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

export default function ContactCTA() {
  const isClient = useIsClient();

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.42, ease: "easeOut", delay },
  });

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="px-6 lg:pl-24 lg:pr-16 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...reveal(0)}
          className="relative glass rounded-3xl border border-white/[0.10] overflow-hidden"
        >
          {/* Subtle sage wash from top — keeps the panel feeling like a destination */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent"
          />

          <div className="relative flex flex-col items-center text-center gap-6 px-6 sm:px-12 lg:px-16 py-16 sm:py-20">

            {/* Eyebrow */}
            <motion.p
              {...reveal(0.05)}
              className="text-xs text-[#3DBA8C] tracking-widest uppercase font-medium"
            >
              {contactCTA.eyebrow}
            </motion.p>

            {/* Headline */}
            <motion.h2
              {...reveal(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#E8EDF2] leading-[1.05] tracking-tight"
            >
              {contactCTA.headline}
            </motion.h2>

            {/* Body */}
            <motion.p
              {...reveal(0.16)}
              className="max-w-xl text-base sm:text-lg text-[#94A3B8] leading-relaxed"
            >
              {contactCTA.body}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...reveal(0.22)}
              className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto"
            >
              <a
                href={contactCTA.ctas.email.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#3DBA8C] text-[#0B1220] text-sm font-semibold hover:bg-[#35a87d] transition-colors focus-visible:ring-2 focus-visible:ring-[#3DBA8C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
              >
                <Mail size={16} strokeWidth={2} aria-hidden />
                {contactCTA.ctas.email.label}
              </a>

              <a
                href={contactCTA.ctas.linkedin.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-sm font-medium text-[#E8EDF2] transition-colors"
              >
                <Linkedin size={16} strokeWidth={2} aria-hidden />
                {contactCTA.ctas.linkedin.label}
              </a>

              <a
                href={contactCTA.ctas.cv.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-[#94A3B8] hover:text-[#E8EDF2] transition-colors"
              >
                <Download size={16} strokeWidth={2} aria-hidden />
                {contactCTA.ctas.cv.label}
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              {...reveal(0.3)}
              className="inline-flex items-center gap-2 mt-3"
            >
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]" />
              <p className="text-xs sm:text-[13px] text-[#94A3B8]/70">
                {contactCTA.location}
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
