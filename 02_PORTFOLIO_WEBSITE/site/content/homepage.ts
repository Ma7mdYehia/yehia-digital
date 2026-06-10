export const hero = {
  name: "Mohamed Yehia",
  title: "Growth Marketing & AI Transformation Lead",
  location: "Based between UAE & Egypt.",
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
  // Profile copy — senior, AI-powered, mentor/early-stage positioning.
  // A few phrases are accent-highlighted (kept to 5).
  introParagraphs: [
    [
      {
        text:
          "I'm Mohamed Yehia — a growth, e-commerce, and business-systems leader with 15+ years across the UAE, KSA, and Egypt. Today, that experience is amplified by ",
      },
      { text: "AI-powered execution", accent: true },
      {
        text:
          ": faster research, sharper planning, stronger content systems, better reporting, and more repeatable growth operations.",
      },
    ],
    [
      { text: "I help " },
      { text: "founders, startups, and traditional businesses", accent: true },
      { text: " find the right first steps: " },
      { text: "building marketing departments from zero", accent: true },
      {
        text:
          ", launching e-commerce channels, introducing digital workflows, and turning scattered activity into a clear operating system.",
      },
    ],
    [
      {
        text:
          "Because I've built companies, co-founded ventures, led teams, implemented ERP workflows, and grown both B2B and consumer brands, I can ",
      },
      { text: "lead, educate, and mentor teams", accent: true },
      {
        text:
          " through the messy early stages of digital transformation — connecting ",
      },
      { text: "strategy, execution, and results", accent: true },
      { text: "." },
    ],
  ] as TextSegment[][],
  resultsLabel: "Selected results",
  resultCards: [
    { value: "~USD 5M", label: "Revenue across food industry" },
    { value: "~USD 2.5M", label: "Revenue across education ventures" },
    { value: "~USD 1.7M", label: "Revenue across healthcare sector" },
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

/* -------------------------------------------------------------------------- */
/*  What I do — two operating modes (tabs)                                     */
/* -------------------------------------------------------------------------- */

export interface WhatIDoCapability {
  title: string;
  body: string;
}

export interface WhatIDoMode {
  id: string;
  label: string;
  cardTitle: string;
  cardDescription: string;
  capabilities: WhatIDoCapability[];
  tools: string[];
}

export const whatIDo = {
  label: "What I do",
  intro: [
    { text: "I combine marketing, creative execution, business systems, and " },
    { text: "AI-powered operations", accent: true },
    { text: " to help companies grow with clarity — from " },
    { text: "first digital steps", accent: true },
    { text: " to " },
    { text: "executive-level visibility", accent: true },
    { text: "." },
  ] as TextSegment[],
  badge: "AI-powered growth & business operations",
  modes: [
    {
      id: "growth",
      label: "Marketing & Digital Growth",
      cardTitle: "Build growth engines that turn attention into revenue.",
      cardDescription:
        "I help brands move from scattered marketing activity into structured growth systems — combining performance marketing, content direction, e-commerce journeys, creative testing, and AI-powered execution to create repeatable demand.",
      capabilities: [
        {
          title: "Build Digital Growth Strategies",
          body: "Create practical growth plans across paid, organic, content, and e-commerce channels.",
        },
        {
          title: "Run Performance Marketing",
          body: "Plan and optimize Meta, Google, TikTok, and conversion-focused campaigns.",
        },
        {
          title: "Lead Content & Creative Direction",
          body: "Turn brand stories into campaigns, visuals, hooks, and content systems.",
        },
        {
          title: "Optimize E-commerce Journeys",
          body: "Improve product pages, funnels, offers, checkout flow, and customer experience.",
        },
        {
          title: "Build AI-Powered Marketing Workflows",
          body: "Use AI to speed up research, content production, campaign planning, and reporting.",
        },
      ],
      tools: [
        "Meta",
        "Google Ads",
        "TikTok",
        "GA4",
        "Canva",
        "Adobe",
        "CapCut",
        "ChatGPT",
        "Claude",
        "Figma",
      ],
    },
    {
      id: "systems",
      label: "Business Systems & Executive Ops",
      cardTitle: "Create the systems leaders need to manage growth.",
      cardDescription:
        "I support founders, startups, and traditional businesses by building the operating layer behind growth — dashboards, reporting workflows, websites, e-commerce systems, automation, ERP coordination, and executive visibility for better decisions.",
      capabilities: [
        {
          title: "Build Reporting & Dashboards",
          body: "Create clear visibility for sales, marketing, revenue, operations, and management decisions.",
        },
        {
          title: "Design Business Workflows",
          body: "Map daily operations into cleaner processes, ownership, task flow, and follow-up systems.",
        },
        {
          title: "Develop Websites & Digital Platforms",
          body: "Shape websites, landing pages, e-commerce stores, and digital touchpoints around business goals.",
        },
        {
          title: "Support Apps & Internal Tools",
          body: "Plan business-facing tools, app concepts, admin flows, and operational interfaces.",
        },
        {
          title: "Guide C-Level Digital Transformation",
          body: "Help founders and leadership teams understand what to build first, what to automate, and what to measure.",
        },
      ],
      tools: [
        "Odoo",
        "Microsoft Dynamics",
        "Zoho",
        "ClickUp",
        "Jira",
        "WordPress",
        "Shopify",
        "Zid",
        "Salla",
        "WooCommerce",
        "n8n",
        "Apify",
        "Lovable",
        "Cursor",
      ],
    },
  ] as WhatIDoMode[],
};

/* -------------------------------------------------------------------------- */
/*  Proof & Voices — client voices (pending verified quotes) + project proof   */
/* -------------------------------------------------------------------------- */

export interface ProofVoice {
  sector: string;
  status: string;
  text: string;
  project: string;
  /** Brand/project monogram — not a person. */
  initials: string;
}

export const proofVoices = {
  label: "Proof",
  heading: "Client voices and project proof.",
  subtitle:
    "A compact view of the people, sectors, and project types behind the work — with verified feedback added only when approved.",
  voices: [
    {
      sector: "Food & FMCG",
      status: "Verified quote pending",
      text: "Client feedback will be added here after approval.",
      project: "HÄLSA Bake / Al Shohail Food Industries",
      initials: "HB",
    },
    {
      sector: "B2B / Manufacturing",
      status: "Verified quote pending",
      text: "Client feedback will be added here after approval.",
      project: "El Shohail Trading",
      initials: "ES",
    },
    {
      sector: "Healthcare",
      status: "Verified quote pending",
      text: "Client feedback will be added here after approval.",
      project: "Healthcare growth projects",
      initials: "HC",
    },
  ] as ProofVoice[],
  projectOverviewLabel: "Project overview",
  projectOverview: [
    "Food & FMCG",
    "B2B / Manufacturing",
    "Education",
    "Healthcare",
    "Agencies & Digital Products",
    "Mobile Apps",
    "E-commerce",
    "AI Operations",
  ],
};

export type ToolCategory =
  | "growth"
  | "ecommerce"
  | "reporting"
  | "ai"
  | "creative";

export interface Tool {
  name: string;
  use: string;
  category: ToolCategory;
}

export const tools: Tool[] = [
  { name: "GA4", use: "Measuring traffic, conversions, and funnel performance.", category: "reporting" },
  { name: "Google Tag Manager", use: "Managing tracking and events without code bottlenecks.", category: "reporting" },
  { name: "Looker Studio", use: "Turning marketing and sales data into management dashboards.", category: "reporting" },
  { name: "Meta Ads Manager", use: "Running and scaling paid acquisition on Meta.", category: "growth" },
  { name: "Google Ads", use: "Search and shopping campaigns for high-intent demand.", category: "growth" },
  { name: "WooCommerce", use: "Building and running direct-to-consumer online stores.", category: "ecommerce" },
  { name: "Odoo", use: "ERP for sales, inventory, and operations.", category: "ecommerce" },
  { name: "Claude", use: "AI-assisted strategy, copy, reporting, and workflow building.", category: "ai" },
  { name: "ClickUp", use: "Running sprints, roadmaps, and cross-team delivery.", category: "reporting" },
  { name: "Canva", use: "Fast on-brand creative for campaigns and social.", category: "creative" },
];

// Display order + labels for the grouped operating-stack panel.
export const toolGroups: { id: ToolCategory; label: string }[] = [
  { id: "growth", label: "Growth channels" },
  { id: "ecommerce", label: "E-commerce & web" },
  { id: "reporting", label: "Reporting & operations" },
  { id: "ai", label: "AI & automation" },
  { id: "creative", label: "Creative production" },
];

export const toolsMeta = {
  label: "Operating stack",
  heading: "Tools Behind My Work",
  intro:
    "The platforms I use to connect strategy, marketing execution, e-commerce, reporting, content systems, and AI-assisted workflows.",
  panelTitle: "One connected stack, not a tool list.",
  panelBody:
    "Each platform plugs into the same operating model — so growth, e-commerce, reporting, and AI-assisted work stay coordinated rather than scattered.",
};

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
  /** Short stage label shown on the rail. */
  category?: string;
  /** Impact / responsibility points for the details card (existing facts only). */
  bullets?: string[];
  /** Focus category tags (descriptive, no claims). */
  focus?: string[];
  /** Current ongoing roles get a small accent chip. */
  current?: boolean;
  /** True for the umbrella group role — Al-Shehail Group. */
  isGroup?: boolean;
  /** Reference to the umbrella group (for nested current roles). */
  underGroup?: string;
}

export interface LearningCard {
  title: string;
  detail: string;
  description: string;
  icon: "university" | "apple" | "hours";
}

export const journeyEyebrow = "Journey";
export const journeyHeading =
  "From self-taught builder to group growth lead.";
export const journeyIntro =
  "Nearly two decades across the UAE, KSA, and Egypt — building marketing engines, e-commerce operations, and business systems that connect strategy to execution.";
export const journeyNote =
  "Current Al-Shehail roles operate in parallel under one group context.";

export const learningCards: LearningCard[] = [
  {
    title: "Benha University",
    detail: "B.Sc. in Business / Commerce",
    description:
      "Formal academic foundation supporting the business and marketing journey.",
    icon: "university",
  },
  {
    title: "Apple — AATP",
    detail: "iOS App Development",
    description:
      "Structured creative and digital learning connected to Apple’s training ecosystem.",
    icon: "apple",
  },
  {
    title: "2500+ self-learning hours",
    detail: "Continuous, project-led",
    description:
      "Independent learning across design, marketing, e-commerce, AI, systems, and business operations.",
    icon: "hours",
  },
];

export const journeyItems: JourneyItem[] = [
  {
    id: "micro4host",
    years: "2005–2009",
    role: "Co-Founder & Digital Builder",
    company: "Micro4Host",
    market: "Egypt",
    category: "Self-taught builder",
    achievement:
      "Self-taught web development: built and grew community websites and early online audiences.",
    bullets: [
      "Self-taught web development from scratch",
      "Built and ran community websites",
      "Grew early online audiences through content",
    ],
    focus: ["Web", "Community", "Content"],
  },
  {
    id: "eid-labib",
    years: "2009–2013",
    role: "Digital Marketing Executive",
    company: "Eid Labib Group (HyperPlus, Tajerinn)",
    market: "Egypt",
    category: "Retail marketing",
    achievement:
      "Retail and e-commerce content, promotions, and early SEO across HyperPlus and Tajerinn.",
    bullets: [
      "Retail and e-commerce content and promotions",
      "Early SEO across HyperPlus and Tajerinn",
    ],
    focus: ["Retail", "E-commerce", "SEO"],
  },
  {
    id: "ideaeg",
    years: "2014–2020",
    role: "Co-Founder & Head of Growth",
    company: "IDEAEG Education Group",
    market: "Egypt",
    category: "Founder · Education",
    achievement:
      "Scaled education ventures to ~EGP 20M and a 250K+ community; secured Apple AATP authorization.",
    bullets: [
      "Co-founded and scaled education ventures",
      "Scaled to ~EGP 20M and a 250K+ community",
      "Secured Apple AATP authorization",
    ],
    focus: ["Education", "Growth", "Founder"],
  },
  {
    id: "pointer",
    years: "2016–2020",
    role: "Digital Marketing Manager",
    company: "Pointer Advertising",
    market: "Egypt",
    category: "Agency",
    achievement:
      "Led agency delivery across multiple client accounts, alongside IDEAEG.",
    bullets: [
      "Led agency delivery across multiple client accounts",
      "Performance marketing and content for clients",
    ],
    focus: ["Agency", "Performance", "Content"],
  },
  {
    id: "alshehail-group",
    years: "2021–present",
    role: "Group Marketing & Digital Growth Lead",
    company: "Al-Shehail Group",
    market: "UAE · KSA · Egypt",
    category: "Group growth lead",
    achievement:
      "Cross-brand growth, digital, and business-systems leadership across UAE, KSA, and Egypt.",
    bullets: [
      "Cross-brand growth and digital leadership",
      "Business-systems leadership across UAE · KSA · Egypt",
      "Websites, e-commerce, and reporting workflows",
    ],
    focus: ["Group Growth", "Digital", "Systems"],
    current: true,
    isGroup: true,
  },
  {
    id: "elshohail",
    years: "2021–present",
    role: "Marketing & Business Operations Lead",
    company: "El Shohail Trading",
    market: "KSA",
    category: "B2B operations",
    achievement:
      "Grew revenue ~SAR 7M→10M in year one; led the first full Odoo ERP implementation.",
    bullets: [
      "Grew annual revenue ~SAR 7M→10M in year one",
      "Led the company’s first full Odoo ERP implementation",
    ],
    focus: ["B2B", "Revenue", "ERP"],
    current: true,
    underGroup: "Al-Shehail Group",
  },
  {
    id: "halsa-bake",
    years: "2024–present",
    role: "Marketing & E-commerce Growth Manager",
    company: "HÄLSA Bake",
    market: "UAE",
    category: "FMCG growth",
    achievement:
      "Launched the e-commerce channel and built an organic-led growth engine (~1.5M reach/month).",
    bullets: [
      "Launched the e-commerce channel",
      "Built an organic-led growth engine (~1.5M reach/month)",
    ],
    focus: ["FMCG", "E-commerce", "Organic"],
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

export const contactCTA = {
  eyebrow: "Contact",
  headline: "Let’s talk.",
  body: "Open to senior roles in growth, e-commerce, marketing operations, and digital transformation across the GCC. The fastest way to reach me is by email or LinkedIn.",
  location: "Based between Ajman, UAE and Cairo, Egypt.",
};

export interface ContactLink {
  label: string;
  type: "email" | "cv" | "social";
  href: string;
  icon: "mail" | "linkedin" | "download" | "github" | "instagram" | "behance";
  /** Primary actions row (Email / LinkedIn / Download CV). */
  isPrimary: boolean;
  /** No confirmed URL yet — rendered but non-misleading. */
  isPlaceholder: boolean;
  /** Opens in a new tab when true. */
  external?: boolean;
}

// Confirmed values in use: GitHub (https://github.com/Ma7mdYehia),
// email (ma7md.yehia@gmail.com), and the CV PDF (public/files/...).
// TODO: replace these placeholder hrefs with real profile URLs once confirmed:
//   LinkedIn  -> "https://www.linkedin.com/in/<handle>"
//   Instagram -> "https://www.instagram.com/<handle>"
//   Behance   -> "https://www.behance.net/<handle>"
// Placeholders point to "#contact" (no fake destination, no new tab).
export const contactLinks: ContactLink[] = [
  {
    label: "Email me",
    type: "email",
    href: "mailto:ma7md.yehia@gmail.com",
    icon: "mail",
    isPrimary: true,
    isPlaceholder: false,
  },
  {
    label: "LinkedIn",
    type: "social",
    href: "#contact",
    icon: "linkedin",
    isPrimary: true,
    isPlaceholder: true,
  },
  {
    label: "Download CV",
    type: "cv",
    href: "/files/mohamed-yehia-cv.pdf",
    icon: "download",
    isPrimary: true,
    isPlaceholder: false,
  },
  {
    label: "GitHub",
    type: "social",
    href: "https://github.com/Ma7mdYehia",
    icon: "github",
    isPrimary: false,
    isPlaceholder: false,
    external: true,
  },
  {
    label: "Instagram",
    type: "social",
    href: "#contact",
    icon: "instagram",
    isPrimary: false,
    isPlaceholder: true,
  },
  {
    label: "Behance",
    type: "social",
    href: "#contact",
    icon: "behance",
    isPrimary: false,
    isPlaceholder: true,
  },
];

export const siteFooter = {
  copyright:
    "© Mohamed Yehia · Growth Marketing, E-commerce & AI Transformation · UAE · KSA · Egypt",
};

// Homepage is now feature-complete; no remaining placeholder sections.
export const placeholderSections: { id: string; label: string }[] = [];
