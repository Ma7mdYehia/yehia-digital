# Claude Code Prompt — Build Yehia.Digital First Screen

Continue in Claude Code / OpenCode.

Use Opus 4.7 first. Use Opus 4.8 only if the visual system, responsive layout, Framer Motion, or TypeScript decisions become complex.

You are a senior frontend engineer and design-focused developer building the FIRST SCREEN ONLY of an executive personal portfolio website:

**yehia.digital**

## Project Context

This is a personal profile website, digital CV, executive portfolio, and case-study library for Mohamed Yehia.

It is NOT primarily a dashboard demo.

The visual direction is Stratos-inspired, but with a serious executive business profile tone.

Build toward:

**Premium dark executive**

Not:
- futuristic developer portfolio
- fake AI startup
- student portfolio
- generic CV template

## Files to Read First

Read these files before writing code:

- `02_PORTFOLIO_WEBSITE/UI_DIRECTION.md`
- `02_PORTFOLIO_WEBSITE/content/homepage.md`
- `00_MASTER_CAREER_BRIEF.md`

Treat `02_PORTFOLIO_WEBSITE/UI_DIRECTION.md` as the authoritative design direction.
Treat `02_PORTFOLIO_WEBSITE/content/homepage.md` as the authoritative content source.

## Scope — Build ONLY First Screen

Create the first implementation milestone inside:

`02_PORTFOLIO_WEBSITE/site/`

Build only:

1. Shared visual system
2. Left floating icon navigation
3. Hero section
4. Stats / Proof strip
5. Minimal placeholder blocks below the proof strip for later sections

Do NOT build the full homepage yet.
Do NOT build Selected Work yet.
Do NOT build Tools carousel yet.
Do NOT build Experience page yet.
Do NOT build About page yet.
Do NOT build Contact page yet.
Do NOT build dashboards or Labs.

## Required Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion for subtle motion only
- Static Markdown/content source where practical
- No backend
- No database
- Deployable on Vercel

## Expected Folder Structure

Create:

```text
02_PORTFOLIO_WEBSITE/site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── FloatingNav.tsx
│   ├── HeroSection.tsx
│   ├── ProofStrip.tsx
│   └── SectionPlaceholder.tsx
├── content/
│   └── homepage.ts
├── lib/
│   └── format.ts
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── README.md
```

You may adjust slightly if needed, but keep the structure clean.

## Visual System

Follow `UI_DIRECTION.md`.

Use:

- Base background: `#0B1220`
- Secondary surface: `#0F1724`
- Glass panels: white at 4–8% alpha
- Borders: white at 8–12% alpha
- Primary accent: sage green `#3DBA8C`
- Optional secondary accent: muted amber `#E0A458`
- Primary text: `#E8EDF2`
- Secondary text: `#94A3B8`

Typography:

- Use Inter or Geist.
- Two weights only where possible.
- Large hero name.
- Large stat numbers.
- Sentence case.
- Avoid heavy all-caps except very small labels.

Motion:

- Subtle fade-and-rise entrance only.
- 350–450ms ease-out.
- Stats count-up once.
- Respect `prefers-reduced-motion`.
- No particles.
- No looping animation.
- No neon glow.
- No animated gradient mesh.

## Left Floating Navigation

Desktop:

- Fixed left floating vertical nav rail.
- Icon-only buttons.
- Tooltips on hover.
- Items:
  - Home
  - Work
  - About
  - Experience
  - Contact
  - Download CV
- Active state in sage green.
- Glass/dark rounded buttons.
- Quiet, premium, Stratos-inspired.

Mobile:

- Collapse into a top hamburger/nav button.
- Keep it simple for now.

Routes can be anchors/placeholders for now:

- `#home`
- `#work`
- `#about`
- `#experience`
- `#contact`

Download CV can link to `#download-cv` for now.

## Hero Section

Use content from `homepage.md`.

Hero must include:

- Mohamed Yehia
- Growth Marketing, E-commerce & AI Transformation Lead
- Value statement:
  `15+ years turning marketing and e-commerce into measurable revenue — building the systems, teams, and AI-augmented workflows that make growth repeatable across the UAE, KSA, and Egypt.`
- CTAs:
  - View work
  - Download CV
- Credibility line:
  `UAE · KSA · Egypt · 15+ years · D2C + B2B · Growth · E-commerce · Business Systems`

Hero visual:

- Use a rounded frosted placeholder frame for now.
- The frame should be ready for a future professional headshot.
- Do not use random stock photos.
- Do not generate fake person imagery.
- Include a small status chip such as:
  `Available for senior GCC roles`
- Include a small profile summary card if it improves the layout:
  `Growth · E-commerce · AI-Augmented Operations`

## Proof Strip

Use these exact proof metrics from homepage.md:

1. `SAR 7M → 10M`
   Label: `Annual revenue grown in year one`
   Source: `El Shohail Trading, KSA`

2. `~1.5M / month`
   Label: `Organic reach built for a healthy bakery brand`
   Source: `HÄLSA Bake, UAE`

3. `~EGP 20M`
   Label: `Revenue across education ventures`
   Source: `IDEAEG, Egypt`

4. `250K+`
   Label: `Community built across platforms`
   Source: `IDEAEG / education ventures`

Design:

- Large proud numbers.
- Small source line under each metric.
- Glass card strip or separated cards.
- Must look premium, not dashboard-like.
- Count-up animation is acceptable if it does not distort symbols like `SAR 7M → 10M`.
  If count-up is awkward for compound metrics, use fade-in instead.

## Placeholder Sections Below First Screen

Add quiet placeholders below the proof strip for later sections:

- About Snapshot
- What I Do
- Tools Behind My Work
- Selected Work
- Professional Journey
- How I Work
- Contact

Each placeholder should be simple and subtle, not built out.

## Content Rules

Use only approved copy.
Do not invent claims.
Do not invent email.
Do not invent LinkedIn URL.
Do not create fake testimonials.
Do not create fake screenshots.
Do not use random people photos.

Respect HÄLSA rule:
Do not write “sourdough bread”.
Use only “natural sourdough fermentation” or “natural sourdough starter” where needed.

## README Requirement

Create:

`02_PORTFOLIO_WEBSITE/site/README.md`

Include:

- What this site is
- Current milestone: first screen only
- Tech stack
- Content policy: proven facts only
- How to run locally
- Planned next sections
- Deployment note for Vercel

## Quality Bar

- Screenshot-ready first screen.
- Must feel premium and executive.
- Excellent at 375px mobile and desktop.
- No console errors.
- Clean TypeScript.
- Accessible landmarks and buttons.
- Visible focus states.
- Respect reduced motion.

## Commands Expected

The site should run with:

```bash
cd 02_PORTFOLIO_WEBSITE/site
npm install
npm run dev
```

## Stop Point

After building the first screen, stop.

Do not continue into the full homepage.

Give me:

1. Summary of what you built.
2. Files created/changed.
3. Commands to run locally.
4. Any issues or assumptions.
5. Suggested next step.
