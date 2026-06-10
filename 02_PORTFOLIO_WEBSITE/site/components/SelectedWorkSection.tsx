"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  workFilters,
  workItems,
  workIntro,
  type WorkCategory,
  type WorkItem,
} from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

/* -------------------------------------------------------------------------- */
/*  Project banner assets                                                     */
/* -------------------------------------------------------------------------- */

const projectBanners: Record<string, string> = {
  elshohail: "/images/project-banners/el-shohail.jpeg",
  "alshohail-food": "/images/project-banners/al-shuhail.jpeg",
  ideaeg: "/images/project-banners/ide-academy.jpeg",
  pointer: "/images/project-banners/pointer.jpeg",
  csc: "/images/project-banners/csc.jpeg",
  "dr-kareem-sabry": "/images/project-banners/dr.kareemsabry.jpeg",
  "dr-osama-el-tih": "/images/project-banners/dr.osamaeltih.jpeg",
  "dr-hassan-ashour": "/images/project-banners/dr.hassanashour.jpeg",
  "dr-rania-lotfy": "/images/project-banners/dr.rania.jpeg",
  iumak: "/images/project-banners/iumak.jpeg",
};

function getProjectInitials(title: string) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function ProjectBanner({ item, isPlaceholder }: { item: WorkItem; isPlaceholder: boolean }) {
  const bannerImage = projectBanners[item.id];

  return (
    <div
      className={[
        "relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#E7EDF3]",
        isPlaceholder ? "opacity-60 grayscale" : "",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(61,186,140,0.13),transparent_32%),radial-gradient(circle_at_86%_86%,rgba(15,23,42,0.08),transparent_36%)]" />

      {bannerImage ? (
        <div className="absolute inset-5 sm:inset-6 transition-transform duration-500 ease-out group-hover:scale-[1.035]">
          <Image
            src={bannerImage}
            alt={`${item.title} project banner`}
            fill
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw"
            className="object-contain drop-shadow-[0_16px_32px_rgba(15,23,42,0.14)]"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 text-center transition-transform duration-500 ease-out group-hover:scale-[1.025]">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0F1724]/10 bg-white/70 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <span className="text-xl font-semibold tracking-tight text-[#0F1724]">
              {getProjectInitials(item.title)}
            </span>
          </div>
          <p className="max-w-xs text-sm font-semibold leading-snug text-[#0F1724]">
            {item.title}
          </p>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#0F1724]/45">
            Project cover
          </span>
        </div>
      )}

      <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.06]" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F1724]/10 to-transparent pointer-events-none" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card                                                                       */
/* -------------------------------------------------------------------------- */

function WorkCard({ item }: { item: WorkItem }) {
  const isHealthcare = item.category === "healthcare";
  const showStructuredInfo = isHealthcare || item.services;
  const isPlaceholder = !!item.isPlaceholder;
  const hasBannerImage = Boolean(projectBanners[item.id]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: isPlaceholder ? 0.72 : 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={[
        "group relative overflow-hidden rounded-2xl bg-[#0F1724] transition-all duration-300",
        "border shadow-[0_20px_60px_rgba(0,0,0,0.18)]",
        isPlaceholder
          ? "border-white/[0.05] hover:border-white/[0.10]"
          : "border-white/[0.08] hover:-translate-y-0.5 hover:border-[#3DBA8C]/30",
      ].join(" ")}
      aria-label={isPlaceholder ? `${item.title} — slot reserved` : item.title}
    >
      {/* Visual area */}
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        <ProjectBanner item={item} isPlaceholder={isPlaceholder} />

        {/* Metric chip — top-right, only when verified */}
        {item.metric && (
          <div className="absolute right-4 top-4 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#0F1724]/85 px-2.5 py-1 shadow-[0_10px_30px_rgba(15,23,36,0.22)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3DBA8C]" />
              <span className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-[#D9F7EA]">
                {item.metric}
              </span>
            </span>
          </div>
        )}

        {/* Reserved-slot chip for placeholder cards */}
        {isPlaceholder && (
          <div className="absolute right-4 top-4 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#0F1724]/80 px-2.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]/70" />
              <span className="whitespace-nowrap text-[10.5px] font-medium tracking-wide text-[#CBD5E1]">
                Reserved slot
              </span>
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-3 px-6 pb-6 pt-5">
        <p className="text-[10.5px] font-medium leading-snug tracking-[0.14em] text-[#94A3B8]/80">
          {item.tags}
        </p>
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#E8EDF2] sm:text-xl">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#94A3B8]">{item.line}</p>

        {/* Healthcare structured mini-info — compact two-column */}
        {showStructuredInfo && (item.specialty || item.doctorTitle) && (
          <div className="mt-1 grid grid-cols-2 gap-3 border-t border-white/[0.06] pt-3">
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#94A3B8]/50">
                Specialty
              </p>
              <p className="truncate text-xs text-[#94A3B8]">{item.specialty}</p>
            </div>
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#94A3B8]/50">
                Title
              </p>
              <p className="truncate text-xs text-[#94A3B8]">{item.doctorTitle}</p>
            </div>
          </div>
        )}

        {/* Services strip — small footer tags */}
        {item.services && item.services.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[10.5px] text-[#94A3B8]/70"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        {/* Media slot note — only when the real project banner is still missing */}
        {isHealthcare && item.mediaSlot && !hasBannerImage && (
          <p className="pt-1 text-[10.5px] italic text-[#94A3B8]/40">
            {item.mediaSlot}
          </p>
        )}
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function SelectedWorkSection() {
  const isClient = useIsClient();
  const [active, setActive] = useState<WorkCategory>("featured");

  const filtered = useMemo(() => {
    if (active === "all") return workItems;
    if (active === "featured") return workItems.filter((work) => work.featured);
    return workItems.filter(
      (work) => work.category === active || work.filters?.includes(active)
    );
  }, [active]);

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.42, ease: "easeOut", delay },
  });

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="border-t border-white/[0.06] px-6 py-24 lg:px-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        {/* Header */}
        <div className="flex max-w-2xl flex-col gap-3">
          <motion.p
            {...reveal(0)}
            className="text-xs font-medium uppercase tracking-[0.22em] text-[#3DBA8C]"
          >
            Selected work
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl font-semibold leading-tight tracking-tight text-[#E8EDF2] sm:text-4xl"
          >
            Proof across sectors and markets.
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="text-base leading-relaxed text-[#94A3B8] sm:text-lg"
          >
            {workIntro}
          </motion.p>
        </div>

        {/* Filter bar — subtle panel strip / segmented control */}
        <motion.div
          {...reveal(0.18)}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2 sm:p-2.5"
        >
          <div
            role="tablist"
            aria-label="Filter selected work"
            className="flex flex-wrap gap-1.5 sm:gap-2"
          >
            {workFilters.map((filter) => {
              const isActive = active === filter.id;

              return (
                <button
                  key={filter.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(filter.id)}
                  className={[
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 sm:text-sm",
                    "focus-visible:ring-2 focus-visible:ring-[#3DBA8C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]",
                    isActive
                      ? "border-[#3DBA8C]/45 bg-[#3DBA8C]/15 text-[#3DBA8C]"
                      : "border-transparent bg-transparent text-[#94A3B8] hover:bg-white/[0.04] hover:text-[#E8EDF2]",
                  ].join(" ")}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state — only possible if filters change behaviour later */}
        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-[#94A3B8]/60">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
