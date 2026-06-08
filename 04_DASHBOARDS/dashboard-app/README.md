# Growth Dashboard Demo — Executive Overview (Milestone 01)

An executive growth analytics dashboard built as a proof-of-work artifact for
the positioning **Growth Marketing, E-commerce & AI Transformation Lead**.

> **Data policy:** This demo uses **fictional sample data only**. It does not
> contain any real, private, or client company data. All figures were generated
> to be internally consistent (revenue = orders × AOV, customers = new +
> returning, CAC = spend ÷ new customers, blended ROAS = revenue ÷ spend).

---

## What this is

A premium, executive-style dashboard for a fictional UAE healthy-bakery D2C +
retail brand. It connects marketing, e-commerce, sales, and customer behaviour
into one decision surface, and is designed to layer an AI-assisted executive
summary on top (a later milestone).

## What this milestone includes

**Milestone 01 — Executive Overview** (this build):

- App shell with sidebar navigation and a top filter bar
- A "Sample data" badge and placeholder date-range / channel filters
- 10 KPI cards with month-over-month deltas and inline sparklines:
  Total Revenue · Orders · AOV · New Customers · Repeat Customer Rate ·
  Conversion Rate · Blended ROAS · CAC · Organic Reach · MoM Revenue Growth
- 5 charts (Recharts):
  Monthly Revenue Trend · Orders Trend · Revenue by Channel ·
  New vs Returning Customers · Marketing Spend vs Revenue

Other pages (Marketing, E-commerce, Customer & Retention, Executive AI Summary)
appear in the sidebar marked "soon" and are built in later milestones.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Recharts
- Static mock data (CSV + JSON) read at build time — no backend, no database

## Data

Mock data lives in `./data/` (copied from the master folder
`04_DASHBOARDS/data/`):

| File | Purpose |
|---|---|
| `monthly_performance.csv` | Spine of the Executive Overview |
| `channel_performance.csv` | Revenue / spend / ROAS by channel |
| `product_performance.csv` | Product revenue mix (later pages) |
| `customer_segments.csv` | New / Returning / VIP (later pages) |
| `campaign_performance.csv` | Campaign table (later pages) |
| `funnel_performance.csv` | Funnel steps (later pages) |
| `ai_executive_summary.json` | AI summary content (later page) |

Data loading is in `lib/data.ts`; all derived KPI calculations are in
`lib/metrics.ts`. No metric values are hardcoded in components.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Deploys cleanly on Vercel (set the project root to
`04_DASHBOARDS/dashboard-app`). The `data/` folder is committed inside the app
so it is available at build time.

## Planned next milestones

1. Marketing Performance page (channel efficiency + campaign table)
2. E-commerce Performance page (conversion funnel + product table)
3. Customer & Retention page (cohort retention grid)
4. Executive AI Summary page (renders `ai_executive_summary.json`)
5. Wire up the date-range and channel filters

## About

Built by Mohamed Yehia — Growth Marketing, E-commerce & AI Transformation.
Portfolio: yehia.digital
