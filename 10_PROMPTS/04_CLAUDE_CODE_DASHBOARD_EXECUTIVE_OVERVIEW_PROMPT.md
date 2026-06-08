# Claude Code Prompt — Build Growth Dashboard Executive Overview

Continue in Claude Code / OpenCode.

Use Opus 4.7 first. Use Opus 4.8 only if architecture, TypeScript, or design decisions become complex.

You are a senior frontend engineer, dashboard UX designer, and BI product builder.

## Project Context

You are working inside the GitHub repo:

`Ma7mdYehia/yehia-digital`

This repo supports Mohamed Yehia’s proof-of-work positioning:

**Growth Marketing, E-commerce & AI Transformation Lead**

This task is part of:

**Demo 01 — Growth Dashboard Demo**

The goal is to build the first working version of a premium executive growth dashboard using mock data only.

## Important Files to Read First

Before writing code, read:

- `00_MASTER_CAREER_BRIEF.md`
- `10_PROMPTS/02_PROJECT_DECISION_AFTER_CLAUDE_ANALYSIS.md`
- `04_DASHBOARDS/00_GROWTH_DASHBOARD_DEMO_BRIEF.md`
- `04_DASHBOARDS/01_GROWTH_DASHBOARD_PLAN.md`
- `04_DASHBOARDS/README.md`
- `04_DASHBOARDS/data/monthly_performance.csv`
- `04_DASHBOARDS/data/channel_performance.csv`
- `04_DASHBOARDS/data/product_performance.csv`
- `04_DASHBOARDS/data/customer_segments.csv`
- `04_DASHBOARDS/data/campaign_performance.csv`
- `04_DASHBOARDS/data/funnel_performance.csv`
- `04_DASHBOARDS/data/ai_executive_summary.json`

## Scope of This Task

Build only the first implementation milestone:

### Milestone 01 — Executive Overview

Do NOT build all dashboard pages yet.

Build:

1. Next.js app inside:
   `04_DASHBOARDS/dashboard-app/`

2. Data layer:
   - Load static CSV and JSON mock data.
   - Place data loading logic in `lib/data.ts`.
   - Place derived KPI calculations in `lib/metrics.ts`.
   - Do not hardcode metric values directly inside components.

3. Shared layout:
   - App shell
   - Sidebar navigation
   - Top filter bar
   - Date range selector placeholder
   - Channel filter placeholder
   - “Sample data” badge

4. Shared components:
   - `KpiCard`
   - `ChartCard`
   - `Sidebar`
   - `FilterBar`
   - simple sparkline support if practical
   - reusable value formatting utilities

5. Executive Overview page only:
   Route: `/`

The page should include:

### KPI Cards

- Total Revenue
- Total Orders
- Average Order Value
- New Customers
- Repeat Customer Rate
- Conversion Rate
- Blended Paid ROAS
- CAC
- Organic Reach
- Month-over-Month Growth %

Each KPI card should show:
- Current period value
- Delta vs previous month
- Optional tiny sparkline if practical
- Clear label
- Proper formatting:
  - AED for money
  - % for percentage
  - x for ROAS
  - compact format for reach

### Charts

Build the following charts using Recharts:

1. Monthly Revenue Trend
2. Orders Trend
3. Revenue by Channel
4. New vs Returning Customers
5. Marketing Spend vs Revenue

## Design Direction

The dashboard must feel:

- Executive
- Premium
- Clean
- Practical
- Data-driven
- GCC-friendly
- Not childish
- Not a generic template

Use this visual direction:

- Dark charcoal-navy app shell: `#0F1724`
- Light off-white cards: `#F8FAF9`
- Primary accent sage green: `#3DBA8C`
- Secondary muted amber: `#E0A458`
- Rounded cards
- Subtle shadows
- Thin chart lines
- Soft fills
- Clear typography
- Strong spacing
- Responsive layout

Do not use loud colors or playful visuals.

## Technical Requirements

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Recharts
- Static data only
- No backend
- No database
- No private data

The app should run with:

```bash
npm install
npm run dev
```

## File Structure Expected

Create:

```text
04_DASHBOARDS/dashboard-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── KpiCard.tsx
│   ├── ChartCard.tsx
│   ├── Sidebar.tsx
│   ├── FilterBar.tsx
│   └── charts/
├── lib/
│   ├── data.ts
│   ├── metrics.ts
│   └── format.ts
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Data Path Rule

The app is inside:

`04_DASHBOARDS/dashboard-app/`

The data files are outside the app at:

`04_DASHBOARDS/data/`

Load or copy the data in a clean way.

Preferred simple approach:
- Copy the CSV/JSON mock data into:
  `04_DASHBOARDS/dashboard-app/data/`
- Document that these are copied from the master data folder.

Alternative approach:
- Load from parent folder only if it works cleanly with Next.js build.

Do not break Vercel deployment.

## README Requirement

Create a basic README inside:

`04_DASHBOARDS/dashboard-app/README.md`

Include:

- What this app is
- What this milestone includes
- Data policy: sample fictional data only
- Tech stack
- How to run locally
- Planned next milestones

## Quality Bar

The first page must look screenshot-ready.

No console errors.

No broken TypeScript.

No unfinished placeholder text except clearly marked future navigation pages.

Sidebar can include future routes:
- Executive Overview
- Marketing Performance
- E-commerce Performance
- Customer & Retention
- Executive AI Summary

But only Executive Overview needs to work now.

## Stop Point

After building Executive Overview, stop.

Do not build the other pages yet.

Give me:

1. Summary of what you built.
2. Files created/changed.
3. Commands to run locally.
4. Any issues or assumptions.
5. Suggested next step.
