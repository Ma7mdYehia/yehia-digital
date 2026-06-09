import {
  Mail,
  Linkedin,
  Download,
  Github,
  Instagram,
  Palette,
  type LucideIcon,
} from "lucide-react";
import type { ContactLink } from "@/content/homepage";

// Behance has no lucide brand glyph — Palette is the neutral stand-in.
export const contactIcons: Record<ContactLink["icon"], LucideIcon> = {
  mail: Mail,
  linkedin: Linkedin,
  download: Download,
  github: Github,
  instagram: Instagram,
  behance: Palette,
};

/**
 * Build safe anchor attributes for a contact link:
 * - external real links open in a new tab with rel="noreferrer"
 * - the CV downloads with a meaningful filename
 * - placeholders carry an honest "(coming soon)" accessible label and
 *   never open a new tab to a fake destination
 */
export function contactAnchorProps(link: ContactLink) {
  const props: {
    href: string;
    target?: string;
    rel?: string;
    download?: boolean;
    "aria-label": string;
  } = {
    href: link.href,
    "aria-label": link.isPlaceholder ? `${link.label} (coming soon)` : link.label,
  };

  if (link.isPlaceholder) return props;

  if (link.external) {
    props.target = "_blank";
    props.rel = "noreferrer";
  }
  if (link.type === "cv") {
    props.download = true;
    props["aria-label"] = "Download CV (PDF)";
  }
  return props;
}
