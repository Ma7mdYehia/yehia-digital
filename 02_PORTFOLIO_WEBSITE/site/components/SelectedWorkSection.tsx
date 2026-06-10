"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsClient } from "@/lib/useIsClient";

/* -------------------------------------------------------------------------- */
/*  Selected work data                                                         */
/* -------------------------------------------------------------------------- */

type WorkCategory =
  | "all"
  | "featured"
  | "b2b"
  | "fmcg"
  | "education"
  | "healthcare"
  | "other";

interface WorkItem {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "all" | "featured">;
  featured: boolean;
  image: string;
  business: string;
  location: string;
  year: string;
}

const workFilters: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "b2b", label: "B2B / Manufacturing" },
  { id: "fmcg", label: "Food & FMCG" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
  { id: "other", label: "Other" },
];

const workIntro =
  "A curated view of projects across B2B manufacturing, food and FMCG, education, healthcare, and digital growth work.";

const workItems: WorkItem[] = [
  /* ------------------------------------------------------------------------ */
  /*  B2B / Manufacturing                                                     */
  /* ------------------------------------------------------------------------ */
  {
    id: "al-shuhail-food-industry",
    title: "Al Shuhail Food Industry",
    category: "b2b",
    featured: true,
    image: "/images/project-banners/al-shuhail.jpeg",
    business: "Bakery Manufacture",
    location: "UAE",
    year: "2024",
  },
  {
    id: "el-shohail-trading",
    title: "EL Shohail Trading",
    category: "b2b",
    featured: true,
    image: "/images/project-banners/el-shohail.jpeg",
    business: "Bakery Machinery Trading",
    location: "Saudi Arabia",
    year: "2022",
  },
  {
    id: "csc-export-import",
    title: "CSC Export & Import",
    category: "b2b",
    featured: false,
    image: "/images/project-banners/csc.jpeg",
    business: "Sourcing & Trading",
    location: "Egypt",
    year: "2017",
  },
  {
    id: "zadmak",
    title: "ZADMAK",
    category: "b2b",
    featured: false,
    image: "/images/project-banners/zadmak.jpeg",
    business: "Bakery Machinery Manufacture",
    location: "Egypt",
    year: "2023",
  },
  {
    id: "zucchilli-forni",
    title: "Zucchilli Forni",
    category: "b2b",
    featured: false,
    image: "/images/project-banners/zucchilli-forni.jpeg",
    business: "Bakery Machinery Manufacture",
    location: "Italy",
    year: "2023",
  },
  {
    id: "nano-food-machine",
    title: "Nano Food Machine",
    category: "b2b",
    featured: false,
    image: "/images/project-banners/nano-food-machine.jpeg",
    business: "Bakery Machinery Trading",
    location: "Egypt",
    year: "2021",
  },
  {
    id: "tajerinn",
    title: "Tajerinn",
    category: "b2b",
    featured: false,
    image: "/images/project-banners/tajerinn.jpeg",
    business: "Raw Material Trading",
    location: "Egypt",
    year: "2012",
  },

  /* ------------------------------------------------------------------------ */
  /*  Food & FMCG                                                              */
  /* ------------------------------------------------------------------------ */
  {
    id: "hyper-plus",
    title: "Hyper Plus",
    category: "fmcg",
    featured: false,
    image: "/images/project-banners/hyperplus.jpeg",
    business: "Hyper Market",
    location: "Cairo",
    year: "2009",
  },
  {
    id: "halsa-bake",
    title: "Halsa Bake",
    category: "fmcg",
    featured: true,
    image: "/images/project-banners/halsabake.jpeg",
    business: "Healthy Bakery",
    location: "UAE",
    year: "2025",
  },
  {
    id: "fabz",
    title: "F A B Z",
    category: "fmcg",
    featured: false,
    image: "/images/project-banners/fabz.jpeg",
    business: "Fashion",
    location: "Cairo",
    year: "2018",
  },
  {
    id: "ana-couture",
    title: "ANA Couture",
    category: "fmcg",
    featured: true,
    image: "/images/project-banners/ana.jpeg",
    business: "Fashion",
    location: "Cairo",
    year: "2026",
  },
  {
    id: "silicon-star",
    title: "Silicon Star",
    category: "fmcg",
    featured: false,
    image: "/images/project-banners/silicon-star.jpeg",
    business: "Building Material Trading",
    location: "Saudi Arabia",
    year: "2024",
  },
  {
    id: "nano-line-trading",
    title: "Nano Line Trading",
    category: "fmcg",
    featured: false,
    image: "/images/project-banners/nano-line.jpeg",
    business: "Kitchen Equipment Trading",
    location: "UAE",
    year: "2024",
  },

  /* ------------------------------------------------------------------------ */
  /*  Education                                                                */
  /* ------------------------------------------------------------------------ */
  {
    id: "ide-academy",
    title: "IDE Academy",
    category: "education",
    featured: true,
    image: "/images/project-banners/ide-academy.jpeg",
    business: "Software Education",
    location: "Egypt",
    year: "2016",
  },
  {
    id: "atletico-de-madrid-academy",
    title: "Atletico De Madrid Academy",
    category: "education",
    featured: false,
    image: "/images/project-banners/ADMA.jpeg",
    business: "Sports & Training",
    location: "Egypt",
    year: "2018",
  },
  {
    id: "ima-studio",
    title: "IMA Studio",
    category: "education",
    featured: false,
    image: "/images/project-banners/IMA.jpeg",
    business: "Beauty & Fashion Training",
    location: "Egypt",
    year: "2018",
  },
  {
    id: "tech-village-academy",
    title: "Tech Village Academy",
    category: "education",
    featured: false,
    image: "/images/project-banners/techvillage-academy.jpeg",
    business: "Software Education",
    location: "Egypt",
    year: "2015",
  },
  {
    id: "gama-academy",
    title: "Gama Academy",
    category: "education",
    featured: false,
    image: "/images/project-banners/gamaacademy.jpeg",
    business: "Kids Education",
    location: "Egypt",
    year: "2019",
  },
  {
    id: "mehrat",
    title: "Mehrat",
    category: "education",
    featured: false,
    image: "/images/project-banners/mehrat.jpeg",
    business: "Business & HR Education",
    location: "Egypt",
    year: "2015",
  },
  {
    id: "swiss-school-of-management",
    title: "Swiss School Of Management",
    category: "education",
    featured: false,
    image: "/images/project-banners/ssm.jpeg",
    business: "Business Education",
    location: "Egypt",
    year: "2019",
  },

  /* ------------------------------------------------------------------------ */
  /*  Other                                                                    */
  /* ------------------------------------------------------------------------ */
  {
    id: "pointer-advertising",
    title: "Pointer Advertising",
    category: "other",
    featured: true,
    image: "/images/project-banners/pointer.jpeg",
    business: "Social Media Agency",
    location: "Egypt",
    year: "2018",
  },
  {
    id: "el-misk",
    title: "EL Misk",
    category: "other",
    featured: false,
    image: "/images/project-banners/l-misk.jpeg",
    business: "Window installation services",
    location: "Bahrain",
    year: "2025",
  },
  {
    id: "aqua-door",
    title: "Aqua Door",
    category: "other",
    featured: false,
    image: "/images/project-banners/aqa-door.jpeg",
    business: "Window installation services",
    location: "Egypt",
    year: "2026",
  },

  /* ------------------------------------------------------------------------ */
  /*  Healthcare                                                               */
  /* ------------------------------------------------------------------------ */
  {
    id: "dr-talat-al-sammy",
    title: "Dr. Talat AL Sammy",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/dr.talat.jpeg",
    business: "Medical Center",
    location: "Egypt",
    year: "2017",
  },
  {
    id: "dr-rania-lotfy",
    title: "Dr. Rania Lotfy",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/dr.rania.jpeg",
    business: "Medical Center",
    location: "Egypt",
    year: "2017",
  },
  {
    id: "dr-hassan-ashour",
    title: "Dr. Hassan Ashour",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/dr.hassanashour.jpeg",
    business: "Medical Center",
    location: "Egypt",
    year: "2016",
  },
  {
    id: "dr-kareem-sabry",
    title: "Dr. Kareem Sabry",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/dr.kareemsabry.jpeg",
    business: "Medical Center",
    location: "Egypt",
    year: "2014",
  },
  {
    id: "dr-osama-al-tih",
    title: "Dr. Osama AL Tih",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/dr.osamaeltih.jpeg",
    business: "Medical Center",
    location: "Egypt",
    year: "2016",
  },
  {
    id: "dr-mohamed-reda",
    title: "Dr. Mohamed Reda",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/dr.mohamed-reda.jpeg",
    business: "Medical Center",
    location: "Egypt",
    year: "2016",
  },
  {
    id: "al-safwa-center",
    title: "AL Safwa Center",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/al-safwa-center.jpeg",
    business: "Medical Center",
    location: "Egypt",
    year: "2016",
  },
  {
    id: "al-amin-clinics",
    title: "Al Amin Clinics",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/al-amin-clinic.jpeg",
    business: "Medical Center",
    location: "Saudi Arabia",
    year: "2022",
  },
  {
    id: "iumak",
    title: "IUMAK",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/iumak.jpeg",
    business: "Pharma App",
    location: "Egypt",
    year: "2020",
  },
];

/* -------------------------------------------------------------------------- */
/*  Card                                                                       */
/* -------------------------------------------------------------------------- */

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1724] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3DBA8C]/30"
      aria-label={item.title}
    >
      {/* Visual area */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-[#E7EDF3]">
        <Image
          src={item.image}
          alt={`${item.title} project banner`}
          fill
          sizes="(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.06]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F1724]/35 to-transparent pointer-events-none" />

        {/* Year chip */}
        <div className="absolute right-4 top-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-[#0F1724]/85 px-2.5 py-1 shadow-[0_10px_30px_rgba(15,23,36,0.22)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3DBA8C]" />
            <span className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-[#D9F7EA]">
              {item.year}
            </span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-3 px-6 pb-6 pt-5">
        <p className="text-[10.5px] font-medium uppercase leading-snug tracking-[0.14em] text-[#94A3B8]/80">
          {item.business} · {item.location}
        </p>
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#E8EDF2] sm:text-xl">
          {item.title}
        </h3>
        <div className="grid grid-cols-2 gap-3 border-t border-white/[0.06] pt-3">
          <div className="flex min-w-0 flex-col gap-0.5">
            <p className="text-[10px] font-medium uppercase tracking-widest text-[#94A3B8]/50">
              Business
            </p>
            <p className="truncate text-xs text-[#94A3B8]">{item.business}</p>
          </div>
          <div className="flex min-w-0 flex-col gap-0.5">
            <p className="text-[10px] font-medium uppercase tracking-widest text-[#94A3B8]/50">
              Market
            </p>
            <p className="truncate text-xs text-[#94A3B8]">{item.location}</p>
          </div>
        </div>
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
    return workItems.filter((work) => work.category === active);
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

        {/* Filter bar */}
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

        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-[#94A3B8]/60">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
