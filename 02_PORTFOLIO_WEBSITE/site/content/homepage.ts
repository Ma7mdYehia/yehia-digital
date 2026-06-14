export const hero = {
  name: "Abdulrahman Zaid",
  title: "MENA Industrial Entrepreneur & Operating Leader",
  location: "Building across Egypt, Saudi Arabia & the UAE.",
  valueStatement:
    "20+ years building, operating, and scaling manufacturing, trade, food production, import, and distribution ventures across Egypt, Saudi Arabia, and the UAE.",
  credibilityLine:
    "Egypt · Saudi Arabia · UAE · Manufacturing · Trade · Food Industries · Operations",
  statusChip: "Regional business portfolio",
  profileSummary: "Manufacturing · Trade · Operations",
  ctas: {
    primary: { label: "View portfolio", href: "#work" },
    secondary: { label: "Contact", href: "#contact" },
  },
};

export interface TextSegment {
  text: string;
  accent?: boolean;
}

export interface ResultCard {
  value: string;
  label: string;
}

export const whoIAm = {
  label: "Who he is",
  headingLines: ["Build", "Operate", "Scale"] as const,
  accentLineIndex: 1,
  introParagraphs: [
    [
      { text: "Abdulrahman Zaid is an Egyptian entrepreneur and operating leader with more than " },
      { text: "20 years of regional experience", accent: true },
      { text: " across Egypt, Saudi Arabia, and the United Arab Emirates." },
    ],
    [
      { text: "His work sits at the intersection of " },
      { text: "manufacturing, food production, import, distribution, and commercial operations", accent: true },
      { text: " — turning business opportunities into working companies and scalable teams." },
    ],
    [
      { text: "The goal of this profile is to present him as a " },
      { text: "MENA industrial entrepreneur", accent: true },
      { text: " with a portfolio of ventures, partnerships, and operating systems across multiple markets." },
    ],
  ] as TextSegment[][],
  resultsLabel: "Regional footprint",
  resultCards: [
    { value: "20+", label: "Years of business experience" },
    { value: "3", label: "Core regional markets" },
    { value: "7+", label: "Ventures and operating roles" },
    { value: "100+", label: "Regional team footprint" },
    { value: "10+", label: "Completed projects and expansions" },
  ] as ResultCard[],
};

export const proofMetrics = whoIAm.resultCards.map((card) => ({
  value: card.value,
  label: card.label,
  source: "Abdulrahman Zaid profile base",
}));

export const about = {
  heading: "An operator who builds businesses across markets.",
  body: "Abdulrahman Zaid connects strategy with daily execution: production planning, supplier networks, commercial contracts, sales teams, logistics, and market expansion.",
  cta: { label: "View the journey", href: "#experience" },
  credential: {
    role: "Industrial Entrepreneur & Operating Leader",
    markets: "Egypt · Saudi Arabia · UAE",
    focus: ["Manufacturing", "Food Industries", "Trading", "Operations"],
    languages: [
      { lang: "Arabic", level: "Native" },
      { lang: "English", level: "Professional" },
    ],
  },
};

export const capabilities = [
  {
    id: "manufacturing",
    icon: "growth",
    title: "Manufacturing & Operations",
    body: "Build production plans, improve efficiency, monitor quality, and coordinate daily operations across industrial teams.",
    tags: ["Production", "Quality", "Efficiency"],
  },
  {
    id: "trade",
    icon: "ecommerce",
    title: "Trade, Import & Distribution",
    body: "Develop supplier relationships, import specialized products, expand distribution networks, and build commercial contracts.",
    tags: ["Import", "Suppliers", "Contracts"],
  },
  {
    id: "leadership",
    icon: "ai",
    title: "Regional Team Leadership",
    body: "Lead and coordinate multi-country teams across Egypt, Saudi Arabia, and the UAE with a hands-on operating mindset.",
    tags: ["Teams", "Execution", "Growth"],
  },
];

export const tools = ["ERP", "CRM", "ClickUp", "Trello", "Asana", "Microsoft Office", "Google Analytics", "Operational Dashboards", "Supplier Networks", "Commercial Reporting"];

export const whatIDo = {
  label: "What he builds",
  intro: [
    { text: "A practical operating model across " },
    { text: "manufacturing, trade, food production, and regional expansion", accent: true },
    { text: "." },
  ] as TextSegment[],
  badge: "Industrial ventures & operating systems",
  modes: [
    {
      id: "manufacturing",
      label: "Manufacturing Operations",
      cardTitle: "Build production systems that can scale.",
      cardDescription: "Food manufacturing, silicone and resin products, equipment operations, quality control, supplier coordination, and efficiency improvement.",
      capabilities: capabilities.slice(0, 2),
      tools: ["Production Planning", "Quality Control", "Supply Chain", "ERP", "Reporting"],
    },
    {
      id: "business",
      label: "Business Development",
      cardTitle: "Turn market opportunities into operating companies.",
      cardDescription: "Commercial contracts, regional distribution, client relationships, team development, import operations, and market expansion.",
      capabilities: capabilities.slice(1, 3),
      tools: ["Negotiation", "CRM", "Distribution", "Market Research", "Partnerships"],
    },
  ],
};

export const operatingStackCategories = [
  {
    id: "food-manufacturing",
    title: "Food Manufacturing",
    lane: "manufacturing",
    laneLabel: "Manufacturing",
    purpose: "Production operations, private label, quality, and supply coordination.",
    tools: ["Production Plans", "Quality Standards", "Private Label", "Distribution"],
  },
  {
    id: "industrial-trade",
    title: "Industrial Trade",
    lane: "trade",
    laneLabel: "Trade & Import",
    purpose: "Supplier networks, importing, portfolio expansion, and commercial contracts.",
    tools: ["Supplier Relations", "Import", "Contracts", "Market Expansion"],
  },
  {
    id: "team-ops",
    title: "Team & Operations",
    lane: "operations",
    laneLabel: "Operations",
    purpose: "Team leadership, reporting, financial oversight, and execution discipline.",
    tools: ["Team Management", "Reporting", "Budgets", "ERP / CRM"],
  },
];

export const journeyEyebrow = "Journey";
export const journeyHeading = "A regional business-building journey.";
export const journeyIntro = "From Saudi business development in 2004 to active ventures across Egypt, Saudi Arabia, and the UAE today.";
export const journeyNote = "Current roles run in parallel across several ventures and markets.";

export const learningCards = [
  {
    title: "MBA",
    detail: "Business Administration · 2015",
    description: "Academic foundation in management, strategy, and company development.",
    icon: "university" as const,
  },
  {
    title: "Computer Science",
    detail: "Bachelor's Degree · 2004",
    description: "Technical foundation supporting systems thinking and modern operations.",
    icon: "hours" as const,
  },
];

export const journeyItems = [
  {
    id: "silicon-star",
    years: "2024 – Present",
    role: "General Manager",
    company: "Silicon Star / Ibrahim Shohail Al-Qaood",
    market: "Riyadh, Saudi Arabia",
    category: "Industrial manufacturing",
    achievement: "Leads manufacturing efficiency, specialized silicone and resin product imports, financial operations, partnerships, and team capability development.",
    bullets: ["Production planning", "Client relationships", "Supplier partnerships", "Team leadership"],
    focus: ["Silicone", "Resin", "Manufacturing"],
    current: true,
  },
  {
    id: "halsa-food",
    years: "2023 – Present",
    role: "General Manager",
    company: "Halsa Food Industries / Al Shehail Food Industries",
    market: "United Arab Emirates",
    category: "Food manufacturing",
    achievement: "Leads production operations, market expansion, commercial contracts, distribution development, and manufacturing quality.",
    bullets: ["Food production", "Private label manufacturing", "Distribution", "Market penetration"],
    focus: ["FMCG", "Food Industries", "Contract Manufacturing"],
    current: true,
  },
  {
    id: "nano-line",
    years: "2022 – Present",
    role: "Maintenance & Technical Support Manager",
    company: "Nano Line Trading Company",
    market: "UAE",
    category: "Trading & equipment",
    achievement: "Develops commercial, logistics, import, marketing, and equipment-manufacturing operations.",
    bullets: ["Commercial operations", "Logistics", "Import", "Product development"],
    focus: ["Trading", "Kitchen Tools", "Bakery Equipment"],
    current: true,
  },
  {
    id: "zaid-ceramics",
    years: "2015 – Present",
    role: "General Manager",
    company: "Zaid for Sanitary Ware and Ceramics",
    market: "Delta Region, Egypt",
    category: "Retail & supply",
    achievement: "Established and oversees operations, supplier relationships, customer networks, product development, and profitability.",
    bullets: ["Daily operations", "Supplier relations", "Market share", "Financial performance"],
    focus: ["Egypt", "Retail", "Operations"],
    current: true,
  },
];

export const howIWork = {
  eyebrow: "How he operates",
  heading: "Strategy first. Operations always.",
  body: [
    "Abdulrahman works as a hands-on operator: understand the market, build the supply chain, organize the team, and turn daily execution into measurable business growth.",
    "His profile should show companies, sectors, teams, countries, and operating proof — not only job titles.",
  ],
  model: [
    { id: "strategy", title: "Strategy", phrase: "Define the business opportunity." },
    { id: "operations", title: "Operations", phrase: "Build the operating system." },
    { id: "teams", title: "Teams", phrase: "Lead people across markets." },
    { id: "growth", title: "Growth", phrase: "Expand contracts and distribution." },
  ],
  badges: ["Manufacturing-led", "Partnership-driven", "Team-based", "Regionally focused"],
};

export const contactCTA = {
  eyebrow: "Partnerships",
  headline: "Build with Abdulrahman.",
  body: "For manufacturing partnerships, private label production, distribution opportunities, import partnerships, and regional business development across MENA.",
  location: "Egypt · Saudi Arabia · United Arab Emirates",
  ctas: {
    email: { label: "Email", href: "mailto:gm@nanoline.ae" },
    linkedin: { label: "Portfolio", href: "#work" },
    cv: { label: "View journey", href: "#experience" },
  },
};

export const siteFooter = {
  copyright: "© Abdulrahman Zaid · Industrial Entrepreneur & Operating Leader · Egypt · Saudi Arabia · UAE",
};

export const placeholderSections: { id: string; label: string }[] = [];
