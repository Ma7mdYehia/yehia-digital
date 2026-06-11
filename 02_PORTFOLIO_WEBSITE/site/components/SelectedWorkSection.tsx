"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useReveal, filterGridTransition } from "@/lib/motion";
import { useMouseGlow } from "@/lib/useMouseGlow";
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
  | "commerce"
  | "services";

interface WorkItem {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "all" | "featured">;
  featured: boolean;
  image: string;
  business: string;
  location: string;
  year: string;
  line: string;
  tags: string[];
}

const workFilters: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "b2b", label: "B2B / Manufacturing" },
  { id: "fmcg", label: "Food & FMCG" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
  { id: "commerce", label: "Commerce & Retail" },
  { id: "services", label: "Agencies & Services" },
];

const workIntro =
  "A curated view of projects across B2B manufacturing, food and FMCG, education, healthcare, commerce, and agency growth work.";

const workItems: WorkItem[] = [
  /* ------------------------------------------------------------------------ */
  /*  B2B / Manufacturing                                                     */
  /* ------------------------------------------------------------------------ */
  {
    id: "el-shohail-trading",
    title: "EL Shohail Trading",
    category: "b2b",
    featured: true,
    image: "/images/project-banners/el-shohail.jpeg",
    business: "Bakery Machinery Trading",
    location: "Saudi Arabia",
    year: "2022",
    line: "Built B2B digital growth, e-commerce, and ERP-led operating workflows.",
    tags: ["B2B", "E-commerce", "ERP", "Odoo"],
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
    line: "Led digital content, website, and SEO across export markets.",
    tags: ["Content", "Website", "SEO"],
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
    line: "Group marketing and digital support for a bakery-machinery manufacturer.",
    tags: ["B2B", "Content", "Brand"],
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
    line: "Group marketing and digital-presence support for a bakery-equipment maker.",
    tags: ["B2B", "Brand", "Website"],
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
    line: "Digital marketing and product presentation for bakery-machinery trading.",
    tags: ["B2B", "Content", "Paid Media"],
  },
  {
    id: "silicon-star",
    title: "Silicon Star",
    category: "b2b",
    featured: false,
    image: "/images/project-banners/silicon-star.jpeg",
    business: "Building Material Trading",
    location: "Saudi Arabia",
    year: "2024",
    line: "Digital marketing and brand presence for a building-materials trader.",
    tags: ["B2B", "Content", "Brand"],
  },

  /* ------------------------------------------------------------------------ */
  /*  Food & FMCG                                                              */
  /* ------------------------------------------------------------------------ */
  {
    id: "halsa-bake",
    title: "HÄLSA Bake",
    category: "fmcg",
    featured: true,
    image: "/images/project-banners/halsabake.jpeg",
    business: "Healthy Bakery",
    location: "UAE",
    year: "2025",
    line: "Launched e-commerce and organic growth systems for a clean-label bakery brand.",
    tags: ["Growth", "E-commerce", "Organic", "FMCG"],
  },
  {
    id: "al-shuhail-food-industry",
    title: "Al Shuhail Food Industry",
    category: "fmcg",
    featured: true,
    image: "/images/project-banners/al-shuhail.jpeg",
    business: "Bakery Manufacture",
    location: "UAE",
    year: "2024",
    line: "Group brand, marketing, and business-systems support for a bakery manufacturing arm.",
    tags: ["Brand", "Operations", "FMCG"],
  },

  /* ------------------------------------------------------------------------ */
  /*  Commerce & Retail                                                       */
  /* ------------------------------------------------------------------------ */
  {
    id: "tajerinn",
    title: "Tajerinn",
    category: "commerce",
    featured: false,
    image: "/images/project-banners/tajerinn.jpeg",
    business: "Retail & E-commerce",
    location: "Egypt",
    year: "2012",
    line: "Social content, e-commerce promotions, and on-page SEO for a retail group.",
    tags: ["Content", "E-commerce", "SEO", "Retail"],
  },
  {
    id: "hyper-plus",
    title: "Hyper Plus",
    category: "commerce",
    featured: false,
    image: "/images/project-banners/hyperplus.jpeg",
    business: "Hypermarket Retail",
    location: "Cairo",
    year: "2009",
    line: "Social content, promotions, and website updates for a hypermarket retailer.",
    tags: ["Content", "Social Media", "Retail"],
  },
  {
    id: "fabz",
    title: "F A B Z",
    category: "commerce",
    featured: false,
    image: "/images/project-banners/fabz.jpeg",
    business: "Fashion Brand",
    location: "Cairo",
    year: "2018",
    line: "Agency-side performance campaigns and content for a fashion brand.",
    tags: ["Paid Media", "Content", "Social Media"],
  },
  {
    id: "ana-couture",
    title: "ANA Couture",
    category: "commerce",
    featured: false,
    image: "/images/project-banners/ana.jpeg",
    business: "Fashion & Couture",
    location: "Cairo",
    year: "2026",
    line: "Brand and social growth support for a couture fashion label.",
    tags: ["Brand", "Social Media", "Content"],
  },
  {
    id: "nano-line-trading",
    title: "Nano Line Trading",
    category: "commerce",
    featured: false,
    image: "/images/project-banners/nano-line.jpeg",
    business: "Professional Kitchen Equipment",
    location: "UAE",
    year: "2024",
    line: "Marketplace and storefront support for professional kitchen-equipment trading.",
    tags: ["E-commerce", "Retail", "Operations"],
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
    line: "Co-founded and scaled a programming academy with Apple AATP authorization.",
    tags: ["Education", "Growth", "Brand"],
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
    line: "Agency-side campaigns and content for a sports academy.",
    tags: ["Paid Media", "Content", "Education"],
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
    line: "Launched and grew a makeup-and-fashion academy through content-led marketing.",
    tags: ["Education", "Content", "Social Media"],
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
    line: "Marketing and content support for a software-training academy.",
    tags: ["Education", "Content"],
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
    line: "Agency-side campaigns and content for a kids’ education brand.",
    tags: ["Paid Media", "Content", "Education"],
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
    line: "Social calendar and paid campaigns for corporate training programs.",
    tags: ["Social Media", "Paid Media", "Education"],
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
    line: "Marketing and content support for a business-education school.",
    tags: ["Education", "Content"],
  },

  /* ------------------------------------------------------------------------ */
  /*  Agencies & Services                                                      */
  /* ------------------------------------------------------------------------ */
  {
    id: "pointer-advertising",
    title: "Pointer Advertising",
    category: "services",
    featured: true,
    image: "/images/project-banners/pointer.jpeg",
    business: "Social Media Agency",
    location: "Egypt",
    year: "2018",
    line: "Led agency delivery across healthcare, education, fashion, and performance campaigns.",
    tags: ["Paid Media", "Content", "Operations"],
  },
  {
    id: "el-misk",
    title: "EL Misk",
    category: "services",
    featured: false,
    image: "/images/project-banners/l-misk.jpeg",
    business: "UPVC & Window Services",
    location: "Bahrain",
    year: "2025",
    line: "Digital content and web presence for a window-installation services business.",
    tags: ["Content", "Website", "Social Media"],
  },
  {
    id: "aqua-door",
    title: "Aqua Door",
    category: "services",
    featured: false,
    image: "/images/project-banners/aqa-door.jpeg",
    business: "UPVC & Interiors",
    location: "Egypt",
    year: "2026",
    line: "Digital content and web presence for a UPVC and interiors business.",
    tags: ["Content", "Website", "Social Media"],
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
    line: "Agency-side content, paid campaigns, and web presence for a medical practice.",
    tags: ["Healthcare", "Paid Media", "Content", "Website"],
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
    line: "Agency-side content, paid campaigns, and web presence for a medical practice.",
    tags: ["Healthcare", "Paid Media", "Content"],
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
    line: "Agency-side content, paid campaigns, and web presence for a medical practice.",
    tags: ["Healthcare", "Content", "Website"],
  },
  {
    id: "dr-kareem-sabry",
    title: "Dr. Kareem Sabry",
    category: "healthcare",
    featured: true,
    image: "/images/project-banners/dr.kareemsabry.jpeg",
    business: "Medical Center",
    location: "Egypt",
    year: "2014",
    line: "Agency-side content, paid campaigns, and web presence for a medical practice.",
    tags: ["Healthcare", "Paid Media", "Content", "Website"],
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
    line: "Agency-side content, paid campaigns, and web presence for a medical practice.",
    tags: ["Healthcare", "Content", "Paid Media"],
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
    line: "Agency-side content, paid campaigns, and web presence for a medical practice.",
    tags: ["Healthcare", "Content", "Website"],
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
    line: "Agency-side content, paid campaigns, and web presence for a medical center.",
    tags: ["Healthcare", "Content", "Website"],
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
    line: "Group marketing and digital support for a healthcare clinic brand.",
    tags: ["Healthcare", "Brand", "Content"],
  },
  {
    id: "iumak",
    title: "IUMAK",
    category: "healthcare",
    featured: false,
    image: "/images/project-banners/iumak.jpeg",
    business: "Pharmacy Mobile App",
    location: "Egypt",
    year: "2020",
    line: "Supported UI/UX and product direction for a pharmacy mobile app.",
    tags: ["Product", "UI/UX", "Healthcare"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Card                                                                       */
/* -------------------------------------------------------------------------- */

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.article
      {...filterGridTransition(!prefersReduced, index)}
      data-glow
      className="mouse-glow-border group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1724] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3DBA8C]/30"
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

        {/* Role / outcome line */}
        <p className="text-sm leading-relaxed text-[#94A3B8] line-clamp-2">
          {item.line}
        </p>

        {/* Service tags */}
        <div className="flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10.5px] text-[#94A3B8] sm:px-2.5 sm:py-1 sm:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function SelectedWorkSection() {
  const reveal = useReveal();
  const glowRef = useMouseGlow<HTMLElement>();
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animatePill = isClient && !prefersReduced;
  const [active, setActive] = useState<WorkCategory>("featured");

  const filtered = useMemo(() => {
    if (active === "all") return workItems;
    if (active === "featured") return workItems.filter((work) => work.featured);
    return workItems.filter((work) => work.category === active);
  }, [active]);

  return (
    <section
      ref={glowRef}
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
          data-glow
          {...reveal(0.18)}
          className="mouse-glow-panel rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2 sm:p-2.5"
        >
          <div
            role="tablist"
            aria-label="Filter selected work"
            className="relative flex flex-wrap gap-1.5 sm:gap-2"
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
                    "relative rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 sm:text-sm",
                    "focus-visible:ring-2 focus-visible:ring-[#3DBA8C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]",
                    isActive
                      ? "border-transparent text-[#3DBA8C]"
                      : "border-transparent bg-transparent text-[#94A3B8] hover:bg-white/[0.04] hover:text-[#E8EDF2]",
                  ].join(" ")}
                >
                  {isActive && (
                    <motion.span
                      layoutId="workFilterPill"
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-[#3DBA8C]/45 bg-[#3DBA8C]/15"
                      transition={
                        animatePill
                          ? { type: "spring", stiffness: 420, damping: 34 }
                          : { duration: 0 }
                      }
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Result count */}
        <p className="-mt-4 text-xs text-[#94A3B8]/50">
          {filtered.length} project{filtered.length === 1 ? "" : "s"}
        </p>

        {/* Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <WorkCard key={item.id} item={item} index={i} />
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
