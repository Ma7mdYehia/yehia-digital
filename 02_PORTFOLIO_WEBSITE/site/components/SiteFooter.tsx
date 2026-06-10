import { siteFooter, contactLinks } from "@/content/homepage";
import { contactIcons, contactAnchorProps } from "@/lib/contactIcons";

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="px-6 lg:px-24 py-10 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#94A3B8]/50 leading-relaxed order-2 sm:order-1 text-center sm:text-left">
          {siteFooter.copyright}
        </p>

        {/* Compact link row */}
        <nav
          aria-label="Footer links"
          className="order-1 sm:order-2 flex items-center justify-center gap-1.5"
        >
          {contactLinks.map((link) => {
            const Icon = contactIcons[link.icon];
            return (
              <a
                key={link.label}
                {...contactAnchorProps(link)}
                className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-[#94A3B8] hover:text-[#E8EDF2] transition-colors"
              >
                <Icon size={15} strokeWidth={1.9} aria-hidden />
              </a>
            );
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-[#94A3B8] hover:text-[#E8EDF2] transition-colors"
          >
            <span aria-hidden>↑</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
