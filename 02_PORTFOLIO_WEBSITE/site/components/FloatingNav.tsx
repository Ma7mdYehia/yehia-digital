"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  User,
  Clock,
  Mail,
  Download,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "work", label: "Work", icon: Briefcase, href: "#work" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "experience", label: "Experience", icon: Clock, href: "#experience" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

const cvItem = {
  id: "download-cv",
  label: "Download CV",
  icon: Download,
  href: "#download-cv",
};

export default function FloatingNav() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tooltip, setTooltip] = useState<string | null>(null);

  const allItems = [...navItems, cvItem];

  return (
    <>
      {/* Desktop left rail */}
      <nav
        aria-label="Site navigation"
        className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2"
      >
        {allItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          const isCv = item.id === "download-cv";

          return (
            <div key={item.id} className="relative group">
              <a
                href={item.href}
                aria-label={item.label}
                onClick={() => setActive(item.id)}
                onMouseEnter={() => setTooltip(item.id)}
                onMouseLeave={() => setTooltip(null)}
                className={[
                  "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
                  "glass glass-hover",
                  isActive
                    ? "border-[#3DBA8C]/60 bg-[#3DBA8C]/10 text-[#3DBA8C]"
                    : isCv
                    ? "text-[#E0A458] hover:text-[#E0A458] hover:border-[#E0A458]/40"
                    : "text-[#94A3B8] hover:text-[#E8EDF2]",
                ].join(" ")}
              >
                <Icon size={16} strokeWidth={1.75} />
              </a>

              {/* Tooltip */}
              <AnimatePresence>
                {tooltip === item.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-12 top-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <span className="glass whitespace-nowrap text-xs text-[#E8EDF2] px-2.5 py-1 rounded-lg">
                      {item.label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 px-5 py-3 flex items-center justify-between glass border-b border-white/[0.08]">
        <span className="text-sm font-medium text-[#E8EDF2]">MY</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            {allItems.map((item) => {
              const Icon = item.icon;
              const isCv = item.id === "download-cv";
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
                    isCv
                      ? "text-[#E0A458]"
                      : active === item.id
                      ? "text-[#3DBA8C] bg-[#3DBA8C]/10"
                      : "text-[#94A3B8] hover:text-[#E8EDF2]",
                  ].join(" ")}
                >
                  <Icon size={15} strokeWidth={1.75} />
                  {item.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
