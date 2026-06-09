import { siteFooter } from "@/content/homepage";

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="px-6 lg:pl-24 lg:pr-16 py-10 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs text-[#94A3B8]/50 leading-relaxed">
          {siteFooter.copyright}
        </p>
        <a
          href="#home"
          className="text-xs text-[#94A3B8]/60 hover:text-[#E8EDF2] transition-colors inline-flex items-center gap-1.5 group"
        >
          Back to top
          <span
            aria-hidden
            className="transition-transform group-hover:-translate-y-0.5"
          >
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}
