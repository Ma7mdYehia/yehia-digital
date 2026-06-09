export const hero = {
  name: "Mohamed Yehia",
  title: "Growth Marketing, E-commerce & AI Transformation Lead",
  location: "Based between Ajman, UAE and Cairo, Egypt.",
  valueStatement:
    "15+ years turning marketing and e-commerce into measurable revenue — building the systems, teams, and AI-augmented workflows that make growth repeatable across the UAE, KSA, and Egypt.",
  credibilityLine:
    "UAE · KSA · Egypt · 15+ years · D2C + B2B · Growth · E-commerce · Business Systems",
  statusChip: "Available for senior GCC roles",
  profileSummary: "Growth · E-commerce · AI-Augmented Operations",
  ctas: {
    primary: { label: "View work", href: "#work" },
    secondary: { label: "Download CV", href: "#download-cv" },
  },
};

export const proofMetrics = [
  {
    value: "SAR 7M → 10M",
    label: "Annual revenue grown in year one",
    source: "El Shohail Trading, KSA",
    countUp: false,
  },
  {
    value: "~1.5M / month",
    label: "Organic reach built for a healthy bakery brand",
    source: "HÄLSA Bake, UAE",
    countUp: false,
  },
  {
    value: "~EGP 20M",
    label: "Revenue across education ventures",
    source: "IDEAEG, Egypt",
    countUp: false,
  },
  {
    value: "250K+",
    label: "Community built across platforms",
    source: "IDEAEG / education ventures",
    countUp: true,
    countTarget: 250000,
  },
];

export const about = {
  heading: "I build growth systems, not just campaigns.",
  body: "I'm Mohamed Yehia, a growth, e-commerce, and business-systems leader with 15+ years across the UAE, KSA, and Egypt. I've launched e-commerce channels, grown revenue for B2B and consumer brands, run ERP implementations, and co-founded businesses of my own — connecting strategy, execution, and results.",
  cta: { label: "Read my story", href: "#experience" },
  credential: {
    role: "Group Marketing & Digital Growth Lead",
    markets: "UAE · KSA · Egypt",
    focus: ["Growth", "E-commerce", "Business Systems", "AI"],
    languages: [
      { lang: "Arabic", level: "Native" },
      { lang: "English", level: "Professional" },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*  Who I am — merged editorial intro + selected results                       */
/* -------------------------------------------------------------------------- */

export interface TextSegment {
  text: string;
  accent?: boolean;
}

export interface ResultCard {
  value: string;
  label: string;
}

export const whoIAm = {
  label: "Who I am",
  // Large left-side display heading; the middle line is accented.
  headingLines: ["Build", "Growth", "Systems"] as const,
  accentLineIndex: 1,
  // Approved about copy, split for readability with a few accented phrases.
  introParagraphs: [
    [
      { text: "I'm Mohamed Yehia, a " },
      { text: "growth, e-commerce, and business-systems leader", accent: true },
      { text: " with 15+ years across the " },
      { text: "UAE, KSA, and Egypt", accent: true },
      { text: "." },
    ],
    [
      {
        text:
          "I've launched e-commerce channels, grown revenue for B2B and consumer brands, run ERP implementations, and co-founded businesses of my own — connecting ",
      },
      { text: "strategy, execution, and results", accent: true },
      { text: "." },
    ],
  ] as TextSegment[][],
  resultsLabel: "Selected results",
  resultCards: [
    { value: "~USD 2.5M", label: "Revenue across food industry" },
    { value: "~USD 2.5M", label: "Revenue across education ventures" },
    { value: "~USD 1.7M", label: "Revenue across healthcare" },
    { value: "+250M", label: "Organic reach across platforms" },
    { value: "+5M", label: "Followers across platforms" },
  ] as ResultCard[],
};

export const capabilities = [
  {
    id: "growth",
    title: "Growth & Performance",
    body: "Acquisition and conversion across Meta, Google, and TikTok, paired with organic and email — focused on ROAS, CAC, repeat rate, and revenue. Growth that holds up against the numbers, not reach for its own sake.",
    tags: ["Meta", "Google", "TikTok", "Organic"],
    icon: "growth",
  },
  {
    id: "ecommerce",
    title: "E-commerce & Business Systems",
    body: "Online stores and the operations behind them — WooCommerce, ZID, and Salla storefronts, marketplaces, and the ERP and reporting workflows that keep them coordinated. I led El Shohail's first full Odoo ERP implementation.",
    tags: ["WooCommerce", "ZID", "Salla", "Odoo"],
    icon: "ecommerce",
  },
  {
    id: "ai",
    title: "AI-Augmented Operations",
    body: "I work with modern AI tools — Claude, ChatGPT, ManyChat — to move faster and more consistently: drafting and iterating creative, prototyping dashboards and reports, and building reusable workflow templates teams can adopt.",
    tags: ["Claude", "ChatGPT", "ManyChat", "Reporting"],
    icon: "ai",
  },
];

export const tools = [
  { name: "GA4", use: "Measuring traffic, conversions, and funnel performance." },
  { name: "Google Tag Manager", use: "Managing tracking and events without code bottlenecks." },
  { name: "Looker Studio", use: "Turning marketing and sales data into management dashboards." },
  { name: "Meta Ads Manager", use: "Running and scaling paid acquisition on Meta." },
  { name: "Google Ads", use: "Search and shopping campaigns for high-intent demand." },
  { name: "WooCommerce", use: "Building and running direct-to-consumer online stores." },
  { name: "Odoo", use: "ERP for sales, inventory, and operations." },
  { name: "Claude", use: "AI-assisted strategy, copy, reporting, and workflow building." },
  { name: "ClickUp", use: "Running sprints, roadmaps, and cross-team delivery." },
  { name: "Canva", use: "Fast on-brand creative for campaigns and social." },
];

export type WorkCategory =
  | "all"
  | "featured"
  | "b2b"
  | "fmcg"
  | "education"
  | "healthcare"
  | "mobile"
  | "agency";

export type WorkVisual =
  | "bakery"
  | "machinery"
  | "manufacturing"
  | "education"
  | "agency"
  | "export"
  | "healthcare"
  | "healthcare-placeholder"
  | "iumak";

export interface WorkItem {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "all" | "featured">;
  /** Extra filter memberships beyond the primary category. */
  filters?: WorkCategory[];
  featured: boolean;
  tags: string;
  metric?: string;
  line: string;
  visual: WorkVisual;
  /** Healthcare-specific structured fields */
  specialty?: string;
  doctorTitle?: string;
  services?: string[];
  mediaSlot?: string;
  /** Placeholder slots reserved for future named clients. */
  isPlaceholder?: boolean;
}

export const workFilters: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "b2b", label: "B2B / Manufacturing" },
  { id: "fmcg", label: "Food & FMCG" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "agency", label: "Agencies & Digital Products" },
];

export const workIntro =
  "Proof across sectors and markets — from B2B trade and FMCG to education, healthcare, mobile apps, and agency client campaigns.";

export const workItems: WorkItem[] = [
  {
    id: "halsa",
    title: "HÄLSA Bake",
    category: "fmcg",
    featured: true,
    tags: "FOOD & FMCG · UAE · GROWTH + E-COMMERCE",
    metric: "~1.5M reach/mo",
    line: "Clean-label bakery, baked using natural sourdough fermentation — launched the online store and an organic-led growth engine.",
    visual: "bakery",
  },
  {
    id: "elshohail",
    title: "El Shohail Trading",
    category: "b2b",
    featured: true,
    tags: "B2B MACHINERY · KSA · DIGITAL GROWTH",
    metric: "SAR 7M→10M",
    line: "B2B food-processing machinery — revenue growth and the company's first full ERP implementation.",
    visual: "machinery",
  },
  {
    id: "alshohail-food",
    title: "Al Shohail Food Industries",
    category: "b2b",
    featured: true,
    tags: "FOOD MANUFACTURING · UAE · SYSTEMS + BRAND",
    line: "Manufacturing arm behind HÄLSA — group marketing, brand, and business-systems support.",
    visual: "manufacturing",
  },
  {
    id: "ideaeg",
    title: "IDE / IDEAEG Education Group",
    category: "education",
    featured: true,
    tags: "EDUCATION · EGYPT · FOUNDER STORY",
    metric: "~EGP 20M",
    line: "Co-founded and scaled education businesses; secured Apple AATP authorization.",
    visual: "education",
  },
  {
    id: "pointer",
    title: "Pointer Advertising",
    category: "agency",
    featured: true,
    tags: "AGENCY · EGYPT · CLIENT CAMPAIGNS",
    line: "Agency-side delivery across multiple client accounts — performance marketing and content.",
    visual: "agency",
  },
  {
    id: "csc",
    title: "CSC Export",
    category: "b2b",
    featured: true,
    tags: "B2B EXPORT · EGYPT / KSA / CHINA",
    line: "Export-focused digital content and product presentation across international markets.",
    visual: "export",
  },

  /* ------------------------------------------------------------- */
  /*  Healthcare — named clients (details pending)                 */
  /* ------------------------------------------------------------- */
  {
    id: "dr-kareem-sabry",
    title: "Dr Kareem Sabry",
    category: "healthcare",
    featured: false,
    tags: "HEALTHCARE · CONTENT + MEDIA BUYING + WEB DEVELOPMENT",
    line: "Healthcare digital growth support across content, paid media, and web presence.",
    visual: "healthcare",
    specialty: "Pending",
    doctorTitle: "Pending",
    services: ["Social Media Content", "Media Buying", "Web Development"],
    mediaSlot: "Doctor photo or clinic logo pending",
  },
  {
    id: "dr-osama-el-tih",
    title: "Dr Osama El Tih",
    category: "healthcare",
    featured: false,
    tags: "HEALTHCARE · CONTENT + MEDIA BUYING + WEB DEVELOPMENT",
    line: "Healthcare digital growth support across content, paid media, and web presence.",
    visual: "healthcare",
    specialty: "Pending",
    doctorTitle: "Pending",
    services: ["Social Media Content", "Media Buying", "Web Development"],
    mediaSlot: "Doctor photo or clinic logo pending",
  },
  {
    id: "dr-hassan-ashour",
    title: "Dr Hassan Ashour",
    category: "healthcare",
    featured: false,
    tags: "HEALTHCARE · CONTENT + MEDIA BUYING + WEB DEVELOPMENT",
    line: "Healthcare digital growth support across content, paid media, and web presence.",
    visual: "healthcare",
    specialty: "Pending",
    doctorTitle: "Pending",
    services: ["Social Media Content", "Media Buying", "Web Development"],
    mediaSlot: "Doctor photo or clinic logo pending",
  },
  {
    id: "dr-rania-lotfy",
    title: "Dr Rania Lotfy",
    category: "healthcare",
    featured: false,
    tags: "HEALTHCARE · CONTENT + MEDIA BUYING + WEB DEVELOPMENT",
    line: "Healthcare digital growth support across content, paid media, and web presence.",
    visual: "healthcare",
    specialty: "Pending",
    doctorTitle: "Pending",
    services: ["Social Media Content", "Media Buying", "Web Development"],
    mediaSlot: "Doctor photo or clinic logo pending",
  },

  /* ------------------------------------------------------------- */
  /*  Healthcare — reserved placeholder slots for future clients   */
  /* ------------------------------------------------------------- */
  {
    id: "healthcare-05",
    title: "Healthcare Client 05",
    category: "healthcare",
    featured: false,
    tags: "HEALTHCARE · CONTENT + MEDIA BUYING + WEB DEVELOPMENT",
    line: "Client details pending",
    visual: "healthcare-placeholder",
    specialty: "Pending",
    doctorTitle: "Pending",
    services: ["Social Media Content", "Media Buying", "Web Development"],
    mediaSlot: "Doctor photo or clinic logo pending",
    isPlaceholder: true,
  },
  {
    id: "healthcare-06",
    title: "Healthcare Client 06",
    category: "healthcare",
    featured: false,
    tags: "HEALTHCARE · CONTENT + MEDIA BUYING + WEB DEVELOPMENT",
    line: "Client details pending",
    visual: "healthcare-placeholder",
    specialty: "Pending",
    doctorTitle: "Pending",
    services: ["Social Media Content", "Media Buying", "Web Development"],
    mediaSlot: "Doctor photo or clinic logo pending",
    isPlaceholder: true,
  },
  {
    id: "healthcare-07",
    title: "Healthcare Client 07",
    category: "healthcare",
    featured: false,
    tags: "HEALTHCARE · CONTENT + MEDIA BUYING + WEB DEVELOPMENT",
    line: "Client details pending",
    visual: "healthcare-placeholder",
    specialty: "Pending",
    doctorTitle: "Pending",
    services: ["Social Media Content", "Media Buying", "Web Development"],
    mediaSlot: "Doctor photo or clinic logo pending",
    isPlaceholder: true,
  },
  {
    id: "healthcare-08",
    title: "Healthcare Client 08",
    category: "healthcare",
    featured: false,
    tags: "HEALTHCARE · CONTENT + MEDIA BUYING + WEB DEVELOPMENT",
    line: "Client details pending",
    visual: "healthcare-placeholder",
    specialty: "Pending",
    doctorTitle: "Pending",
    services: ["Social Media Content", "Media Buying", "Web Development"],
    mediaSlot: "Doctor photo or clinic logo pending",
    isPlaceholder: true,
  },

  /* ------------------------------------------------------------- */
  /*  Mobile Apps                                                  */
  /* ------------------------------------------------------------- */
  {
    id: "iumak",
    title: "IUMAK",
    category: "mobile",
    filters: ["mobile", "healthcare"],
    featured: false,
    tags: "MEDICAL APP · PHARMACIES · UI/UX + MOBILE APP DEVELOPMENT",
    line: "Mobile app design and development for a healthcare/pharmacy product.",
    visual: "iumak",
    services: ["Mobile App Design", "Mobile App Development"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Professional Journey                                                       */
/* -------------------------------------------------------------------------- */

export interface JourneyItem {
  id: string;
  years: string;
  role: string;
  company: string;
  market?: string;
  achievement: string;
  /** Current ongoing roles get a small accent chip. */
  current?: boolean;
  /** True for the umbrella group role — Al-Shehail Group. */
  isGroup?: boolean;
  /** Reference to the umbrella group (for nested current roles). */
  underGroup?: string;
}

export const journeyEyebrow = "Journey";
export const journeyHeading =
  "From self-taught builder to group growth lead.";
export const journeyIntro =
  "Nearly two decades across the UAE, KSA, and Egypt — building marketing engines, e-commerce operations, and business systems that connect strategy to execution.";
export const journeyNote =
  "Current Al-Shehail roles operate in parallel under one group context.";

export const journeyItems: JourneyItem[] = [
  {
    id: "micro4host",
    years: "2005–2009",
    role: "Co-Founder & Digital Builder",
    company: "Micro4Host",
    market: "Egypt",
    achievement:
      "Self-taught web development: built and grew community websites and early online audiences.",
  },
  {
    id: "eid-labib",
    years: "2009–2013",
    role: "Digital Marketing Executive",
    company: "Eid Labib Group (HyperPlus, Tajerinn)",
    market: "Egypt",
    achievement:
      "Retail and e-commerce content, promotions, and early SEO across HyperPlus and Tajerinn.",
  },
  {
    id: "ideaeg",
    years: "2014–2020",
    role: "Co-Founder & Head of Growth",
    company: "IDEAEG Education Group",
    market: "Egypt",
    achievement:
      "Scaled education ventures to ~EGP 20M and a 250K+ community; secured Apple AATP authorization.",
  },
  {
    id: "pointer",
    years: "2016–2020",
    role: "Digital Marketing Manager",
    company: "Pointer Advertising",
    market: "Egypt",
    achievement:
      "Led agency delivery across multiple client accounts, alongside IDEAEG.",
  },
  {
    id: "alshehail-group",
    years: "2021–present",
    role: "Group Marketing & Digital Growth Lead",
    company: "Al-Shehail Group",
    market: "UAE · KSA · Egypt",
    achievement:
      "Cross-brand growth, digital, and business-systems leadership across UAE, KSA, and Egypt.",
    current: true,
    isGroup: true,
  },
  {
    id: "elshohail",
    years: "2021–present",
    role: "Marketing & Business Operations Lead",
    company: "El Shohail Trading",
    market: "KSA",
    achievement:
      "Grew revenue ~SAR 7M→10M in year one; led the first full Odoo ERP implementation.",
    current: true,
    underGroup: "Al-Shehail Group",
  },
  {
    id: "halsa-bake",
    years: "2024–present",
    role: "Marketing & E-commerce Growth Manager",
    company: "HÄLSA Bake",
    market: "UAE",
    achievement:
      "Launched the e-commerce channel and built an organic-led growth engine (~1.5M reach/month).",
    current: true,
    underGroup: "Al-Shehail Group",
  },
];

/* -------------------------------------------------------------------------- */
/*  How I Work                                                                 */
/* -------------------------------------------------------------------------- */

export const howIWork = {
  eyebrow: "How I work",
  heading: "A system-first way to build growth.",
  body: [
    "My approach has been the same for nearly two decades: build the system, then make it run. It started in 2005 with self-taught web development, and it now shows up as marketing engines, e-commerce operations, and ERP-led workflows that connect strategy to execution.",
    "Today that includes working with AI as a daily tool — Claude and ChatGPT to draft and iterate faster, prototyping dashboards and reporting for clearer management visibility, and reusable templates so teams execute more consistently. I track delivery in ClickUp and build in the open on GitHub.",
    "This site itself is being built that way: AI-assisted and version-tracked — a small example of how I prefer to work.",
  ],
  model: [
    { id: "strategy", title: "Strategy", phrase: "Define the business direction." },
    { id: "execution", title: "Execution", phrase: "Turn plans into campaigns and workflows." },
    { id: "systems", title: "Systems", phrase: "Connect e-commerce, ERP, teams, and content." },
    { id: "visibility", title: "Visibility", phrase: "Track performance with reporting and dashboards." },
  ],
  badges: ["AI-assisted", "GitHub-tracked", "ClickUp-managed", "Reporting-led"],
};

/* -------------------------------------------------------------------------- */
/*  Contact CTA                                                                */
/* -------------------------------------------------------------------------- */

// TODO: Replace placeholder hrefs once real contact details are confirmed:
//   email    -> "mailto:<address>"
//   linkedin -> "https://www.linkedin.com/in/<handle>"
//   cv       -> "/Mohamed-Yehia-CV.pdf"  (file must exist in public/)
// Until then, every CTA falls back to the in-page #contact anchor so the
// buttons remain visually present without inventing any contact data.
export const contactCTA = {
  eyebrow: "Contact",
  headline: "Let’s talk.",
  body: "Open to senior roles in growth, e-commerce, marketing operations, and digital transformation across the GCC. The fastest way to reach me is by email or LinkedIn.",
  location: "Based between Ajman, UAE and Cairo, Egypt.",
  ctas: {
    email:    { label: "Email me",     href: "#contact" },
    linkedin: { label: "LinkedIn",     href: "#contact" },
    cv:       { label: "Download CV",  href: "#download-cv" },
  },
};

export const siteFooter = {
  copyright:
    "© Mohamed Yehia · Growth Marketing, E-commerce & AI Transformation · UAE · KSA · Egypt",
};

// Homepage is now feature-complete; no remaining placeholder sections.
export const placeholderSections: { id: string; label: string }[] = [];
