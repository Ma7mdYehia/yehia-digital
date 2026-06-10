"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Layers,
  Boxes,
  Briefcase,
  Quote,
  Route,
  Workflow,
  Mail,
  Download,
  Menu,
  X,
} from "lucide-react";

/**
 * Rail side for this polish pass. Set to "left" to move it back —
 * all positioning derives from this constant.
 */
const SIDE: "left" | "right" = "right";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "Who I am", icon: User, href: "#about" },
  { id: "capabilities", label: "What I do", icon: Layers, href: "#capabilities" },
  { id: "tools", label: "Operating stack", icon: Boxes, href: "#tools" },
  { id: "work", label: "Selected work", icon: Briefcase, href: "#work" },
  { id: "proof", label: "Proof", icon: Quote, href: "#proof" },
  { id: "experience", label: "My Journey", icon: Route, href: "#experience" },
  { id: "how", label: "How I work", icon: Workflow, href: "#how" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

// Special final action — links to the CV PDF (not a scroll-spy section).
const resumeAction = {
  label: "Download Resume",
  href: "/files/mohamed-yehia-cv.pdf",
  icon: Download,
};

export default function FloatingNav() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll-spy: highlight the section crossing the viewport's vertical centre.
  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const railSide = SIDE === "right" ? "right-5" : "left-5";
  // Label pill sits on the inner side of the rail.
  const labelSide =
    SIDE === "right"
      ? "right-12 flex-row-reverse"
      : "left-12";

  return (
    <>
      {/* Desktop vertical rail */}
      <nav
        aria-label="Site navigation"
        className={`fixed ${railSide} top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <div key={item.id} className="relative group flex items-center">
              <a
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(item.id)}
                className={[
                  "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 glass glass-hover",
                  isActive
                    ? "border-[#3DBA8C]/60 bg-[#3DBA8C]/10 text-[#3DBA8C]"
                    : "text-[#94A3B8] hover:text-[#E8EDF2]",
                ].join(" ")}
              >
                <Icon size={17} strokeWidth={1.75} />
              </a>

              {/* Label pill — reveals on hover, on the inner side */}
              <span
                aria-hidden
                className={[
                  "absolute top-1/2 -translate-y-1/2 pointer-events-none",
                  labelSide,
                  "glass whitespace-nowrap rounded-lg px-2.5 py-1",
                  "font-display text-sm tracking-wider text-[#E8EDF2]",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                ].join(" ")}
              >
                {item.label}
              </span>
            </div>
          );
        })}

        {/* Separator + special Download Resume action */}
        <div aria-hidden className="my-1 mx-auto h-px w-5 bg-white/[0.12]" />
        <div className="relative group flex items-center">
          <a
            href={resumeAction.href}
            download
            aria-label={resumeAction.label}
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 border border-[#3DBA8C]/50 bg-[#3DBA8C]/15 text-[#3DBA8C] hover:bg-[#3DBA8C]/25"
          >
            <resumeAction.icon size={16} strokeWidth={2} />
          </a>
          <span
            aria-hidden
            className={[
              "absolute top-1/2 -translate-y-1/2 pointer-events-none",
              labelSide,
              "glass whitespace-nowrap rounded-lg px-2.5 py-1",
              "font-display text-sm tracking-wider text-[#3DBA8C]",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            ].join(" ")}
          >
            {resumeAction.label}
          </span>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 px-5 py-3 flex items-center justify-between glass border-b border-white/[0.08]">
        <span className="font-display text-lg tracking-wider text-[#E8EDF2]">
          Mohamed Yehia
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="p-2 rounded-lg glass text-[#94A3B8] hover:text-[#E8EDF2] transition-colors"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile navigation"
            className="lg:hidden fixed top-[52px] left-0 right-0 z-40 glass border-b border-white/[0.08] px-5 py-4 flex flex-col gap-1"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActive(item.id);
                    setMobileOpen(false);
                  }}
                  className={[
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                    active === item.id
                      ? "text-[#3DBA8C] bg-[#3DBA8C]/10"
                      : "text-[#94A3B8] hover:text-[#E8EDF2]",
                  ].join(" ")}
                >
                  <Icon size={15} strokeWidth={1.75} />
                  {item.label}
                </a>
              );
            })}

            {/* Distinct final action */}
            <div aria-hidden className="my-1 h-px bg-white/[0.08]" />
            <a
              href={resumeAction.href}
              download
              aria-label={resumeAction.label}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium border border-[#3DBA8C]/40 bg-[#3DBA8C]/10 text-[#3DBA8C]"
            >
              <resumeAction.icon size={15} strokeWidth={1.9} />
              {resumeAction.label}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
