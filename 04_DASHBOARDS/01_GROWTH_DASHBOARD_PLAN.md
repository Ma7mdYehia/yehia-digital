# Demo 01 — Growth Dashboard Demo
## Execution-Ready Planning Document

> **Project:** Mohamed Yehia — Proof-of-Work System
> **Positioning supported:** Growth Marketing, E-commerce & AI Transformation Lead
> **Status:** Planning (no code yet)
> **Data policy:** Realistic but fictional mock data only. No real or private company data.
> **Owner-facing claim this proves:** "I can design and build business-ready growth reporting that connects marketing, e-commerce, sales, and customer behaviour — and layer AI-assisted executive summaries on top."

---

## 1. Dashboard Strategy

### The business purpose

Most growth and e-commerce teams in the GCC do not lack data — they lack a single, trustworthy surface where revenue, acquisition cost, retention, and channel efficiency sit side by side and tell one coherent story. Numbers live scattered across Meta Ads Manager, Google Ads, GA4, the WooCommerce backend, a finance spreadsheet, and someone's monthly slide deck. By the time those are reconciled, the month is over and the decision window has closed.

This dashboard demonstrates the discipline of collapsing that fragmentation into one executive surface. It is built around a simple operating belief: **a founder or growth leader should be able to answer "are we growing profitably, and where is the next dirham best spent?" in under 60 seconds.**

### Why it matters to each stakeholder

- **CEOs / Founders** want one question answered: is the business growing, and is growth efficient? They care about revenue trend, blended ROAS, CAC vs. AOV, and repeat rate. They do not want to click through five tools.
- **Heads of Growth** need to see which channel is carrying acquisition, where efficiency is decaying, and whether paid is buying customers cheaper than their lifetime value justifies.
- **E-commerce Directors** need funnel health — sessions, add-to-cart, checkout, abandonment — and product-level revenue concentration.
- **Marketing Directors** need channel-by-channel spend-to-revenue accountability and a clear view of organic contribution that paid attribution usually hides.
- **Recruiters / hiring managers (GCC senior roles)** need evidence — fast — that the candidate thinks in business outcomes, not vanity metrics, and can build the tools a modern growth org runs on.

### The differentiator: the AI layer

The dashboard does not stop at visualisation. The fifth page turns the same underlying data into a written, decision-ready executive brief — the kind a leadership team can read in two minutes and act on. This is the proof point that separates this artifact from a generic charting template: it shows the candidate connects **data → interpretation → recommended action**, which is the actual job of a growth leader.

---

## 2. Dashboard Pages

Five pages, ordered from the broadest executive view down to the most operational detail, ending with the AI synthesis layer.

---

### Page 1 — Executive Overview

| Attribute | Detail |
|---|---|
| **Purpose** | One-glance answer to "are we growing, and is it efficient?" |
| **Target user** | CEO, Founder, Board, senior recruiter |
| **Questions answered** | Is revenue growing month over month? Are we acquiring efficiently (CAC vs. AOV)? Is paid profitable (blended ROAS)? Are customers coming back? |

**KPI cards (10):**
Total Revenue · Total Orders · Average Order Value · New Customers · Repeat Customer Rate · Conversion Rate · Blended Paid ROAS · CAC · Organic Reach · MoM Growth %

Each card shows the current-period value, a delta vs. previous period (▲/▼ with %), and a 6-point sparkline.

**Charts:**
- Monthly Revenue Trend (line, 6 months) — primary hero chart
- Orders Trend (line or bar)
- Revenue by Channel (stacked bar or 100% stacked area)
- New vs. Returning Customers (grouped bar)
- Marketing Spend vs. Revenue (dual-axis combo: bars for spend, line for revenue)

**Tables:** None on this page — kept deliberately clean.

**Filters:** Date range (month selector / last 3 / last 6). Channel filter applies globally.

**Design notes:** This is the page recruiters screenshot. It must be the most polished. Hero revenue chart top-left, KPI cards in a single scannable row or 2×5 grid above it. No clutter, generous whitespace.

---

### Page 2 — Marketing Performance

| Attribute | Detail |
|---|---|
| **Purpose** | Show how each channel contributes to growth and at what efficiency. |
| **Target user** | Head of Growth, Marketing Director |
| **Questions answered** | Which channel drives revenue most efficiently? Where is ROAS decaying? What is organic contributing that paid attribution misses? Which campaigns are winners vs. drains? |

**KPI cards (10):**
Total Marketing Spend · Paid Revenue · Blended Paid ROAS · Meta ROAS · Google ROAS · TikTok ROAS · CAC · Cost per Order · Organic Reach · Email Revenue

**Charts:**
- Spend by Channel (bar)
- Revenue by Channel (bar — placed beside spend for visual comparison)
- ROAS by Channel (bar with a reference line at break-even ROAS)
- CAC by Channel (bar)
- Organic Reach Trend (line, 6 months)

**Tables:**
- Campaign Performance Table — columns: Campaign, Channel, Spend, Revenue, ROAS, Orders, CAC, Status (▲ scaling / → hold / ▼ cut). Sortable, conditional colour on ROAS.

**Filters:** Channel multi-select, month range.

**Design notes:** Spend and Revenue charts side-by-side so the eye reads efficiency instantly. The campaign table is where "operator" credibility is earned — make the Status column opinionated, not neutral.

---

### Page 3 — E-commerce Performance

| Attribute | Detail |
|---|---|
| **Purpose** | Show the health of the online sales funnel and product mix. |
| **Target user** | E-commerce Director, Growth/CRO lead |
| **Questions answered** | Where do we lose people in the funnel? Is AOV moving? Is abandonment improving? Which products carry revenue? |

**KPI cards (8):**
Website Sessions · Add-to-Cart Rate · Checkout Rate · Conversion Rate · Total Orders · AOV · Cart Abandonment Rate · Repeat Purchase Rate

**Charts:**
- Conversion Funnel (horizontal funnel: Sessions → Product Views → Add to Cart → Checkout → Purchase)
- Sessions vs. Orders (dual-axis combo)
- AOV Trend (line)
- Cart Abandonment Trend (line — downward is good; annotate)
- Top Products by Revenue (horizontal bar)

**Tables:**
- Product Performance Table — Product, Units Sold, Revenue, % of Total Revenue, AOV contribution, Trend.

**Filters:** Month range, product category.

**Design notes:** The funnel is the signature visual here. Show absolute numbers and step conversion % at each stage. Highlight the weakest step in amber.

---

### Page 4 — Customer & Retention

| Attribute | Detail |
|---|---|
| **Purpose** | Show acquisition vs. retention balance and repeat-purchase signal. |
| **Target user** | Head of Growth, CEO (retention = profitability) |
| **Questions answered** | Are we over-reliant on new acquisition? Is the repeat base growing? What is a customer worth over time? Where is churn risk? |

**KPI cards (7):**
New Customers · Returning Customers · Repeat Rate · Simulated CLV · Email Subscribers · WhatsApp / ManyChat Leads · Churn-Risk Indicator

**Charts:**
- New vs. Returning Customers (stacked bar over 6 months)
- Customer Cohort Simulation (cohort retention grid / heatmap — by acquisition month)
- Repeat Purchase Trend (line)
- Revenue by Customer Type (new vs. returning, stacked area)
- Email / WhatsApp Engagement (bar or line)

**Tables:**
- Cohort table fallback (if heatmap is heavy): acquisition month rows × months-since columns, retention %.

**Filters:** Acquisition month, customer type.

**Design notes:** The cohort grid is the most "senior analyst" visual in the whole demo — worth the extra build effort because few marketing CVs can show it. Keep CLV labelled "Simulated" everywhere to stay honest.

---

### Page 5 — Executive AI Summary

| Attribute | Detail |
|---|---|
| **Purpose** | Turn the data into a written, decision-ready brief — the AI-augmented layer. |
| **Target user** | CEO, Founder, leadership team |
| **Questions answered** | What happened, what changed, why, and what should we do next month? |

**Layout:** A single executive brief card (or set of stacked cards), styled like a polished internal memo, with these sections:

1. **What happened this month** — headline numbers in plain language.
2. **What improved** — 2–3 wins with the metric movement.
3. **What declined** — 1–2 honest negatives (credibility depends on showing these).
4. **Why it likely happened** — interpretation linking cause to effect.
5. **Recommended actions (next month)** — 3–5 specific, prioritised moves.
6. **Budget reallocation suggestion** — shift X from Channel A to Channel B, with rationale.
7. **Campaign optimisation notes** — which to scale, hold, cut.
8. **Product / category opportunity** — where the mix suggests upside.
9. **Retention recommendation** — one concrete lifecycle/email/WhatsApp move.

**How it works (honest framing for the README):** For the demo, summaries are **pre-generated** from the mock dataset — written in the voice an AI assistant would produce when given the month's numbers and a structured prompt. The README documents the exact prompt template used, so the workflow (data → prompt → executive brief) is transparent and reproducible. A "Regenerate with live AI" note marks where a real API call would slot in. This keeps the demo honest: it shows the *system design*, not a faked live model.

**Design notes:** This page should look like a document, not a dashboard — serif or refined sans body text, comfortable line length, a subtle "AI-generated draft · reviewed by Mohamed Yehia" footer to model responsible use.

---

## 3. KPI Dictionary

| KPI | Definition | Formula | Business interpretation | Visual |
|---|---|---|---|---|
| **Revenue** | Total sales value in period | Σ (orders × order value) | Top-line health; the number leadership anchors on | Line / KPI card |
| **Orders** | Count of completed purchases | Count of orders | Demand volume independent of price | Bar / KPI card |
| **AOV** | Average value per order | Revenue ÷ Orders | Pricing & basket strength; rising AOV softens CAC pressure | Line / KPI card |
| **New Customers** | First-time buyers in period | Count where first_order = current period | Acquisition engine output | Bar / KPI card |
| **Returning Customers** | Buyers with ≥1 prior order | Count where prior_orders ≥ 1 | Retention strength; cheaper revenue | Bar / KPI card |
| **Repeat Customer Rate** | Share of customers who return | Returning ÷ Total customers | Profitability signal; >20% is healthy for FMCG D2C | KPI card + line |
| **Conversion Rate** | Sessions that become orders | Orders ÷ Sessions | Funnel efficiency; the master CRO metric | KPI card + line |
| **Sessions** | Website visits | Count of sessions | Top-of-funnel traffic volume | Line |
| **Add-to-Cart Rate** | Sessions adding a product | Add-to-cart sessions ÷ Sessions | Product/price appeal signal | Funnel step |
| **Checkout Rate** | Carts reaching checkout | Checkouts ÷ Add-to-carts | Mid-funnel intent | Funnel step |
| **Cart Abandonment Rate** | Checkouts not completed | 1 − (Orders ÷ Checkouts) | Friction / payment / shipping issues; lower is better | Line (inverted reading) |
| **Marketing Spend** | Total paid media cost | Σ channel spend | Investment level driving paid growth | Bar / KPI card |
| **ROAS** | Return on ad spend | Paid Revenue ÷ Paid Spend | Paid efficiency; compare to break-even ROAS | Bar with reference line |
| **CAC** | Cost to acquire one customer | Marketing Spend ÷ New Customers | Must stay below AOV (ideally below CLV) | KPI card + bar |
| **Organic Reach** | Non-paid social reach | Σ organic impressions/reach | Brand pull & owned-audience strength | Line / KPI card |
| **Email Revenue** | Revenue attributed to email | Σ orders with email source | Owned-channel monetisation; high-margin | Bar / KPI card |
| **Revenue by Channel** | Revenue split by source | Group revenue by channel | Where growth actually comes from | Stacked bar |
| **Revenue by Product** | Revenue split by SKU | Group revenue by product | Concentration risk & hero products | Horizontal bar |
| **Simulated CLV** | Modelled lifetime value | AOV × purchase frequency × margin × lifespan | Justifies allowable CAC; labelled "simulated" | KPI card |
| **MoM Growth %** | Month-over-month change | (This − Last) ÷ Last | Momentum; the founder's pulse metric | KPI card delta |

> **Break-even ROAS note for the README:** with an assumed blended gross margin of ~55% for a healthy bakery, break-even ROAS ≈ 1.8x. The dashboard's ROAS reference line uses this, so "good" vs. "bad" ROAS is anchored to economics, not an arbitrary target. This is the kind of detail that signals real operator thinking.

---

## 4. Data Model

Seven flat files (CSV for tabular data, JSON for the AI summaries). Designed so a non-technical reviewer can open them in Google Sheets and a developer can load them straight into the app.

### `monthly_performance.csv`
The spine of the Executive Overview.

| Column | Type | Description |
|---|---|---|
| month | string (YYYY-MM) | Reporting month |
| revenue | integer (AED) | Total revenue |
| orders | integer | Total orders |
| aov | float (AED) | Average order value |
| new_customers | integer | First-time buyers |
| returning_customers | integer | Repeat buyers |
| repeat_rate | float (%) | Returning ÷ total customers |
| sessions | integer | Website sessions |
| conversion_rate | float (%) | Orders ÷ sessions |
| marketing_spend | integer (AED) | Total paid spend |
| paid_revenue | integer (AED) | Revenue from paid channels |
| blended_roas | float | Paid revenue ÷ spend |
| cac | float (AED) | Spend ÷ new customers |
| organic_reach | integer | Monthly organic reach |
| email_revenue | integer (AED) | Email-attributed revenue |

**Example row:**
`2025-01,45440,320,142.0,205,115,35.9,18200,1.76,16800,52640,3.13,81.9,980000,3100`

### `channel_performance.csv`
Powers Marketing Performance.

| Column | Type | Description |
|---|---|---|
| month | string | Reporting month |
| channel | string | Meta / Google / TikTok / Organic Social / Email / Direct / Retail Support |
| spend | integer (AED) | Channel spend (0 for organic/direct) |
| revenue | integer (AED) | Channel-attributed revenue |
| orders | integer | Channel orders |
| roas | float | Revenue ÷ spend (null for non-paid) |
| cac | float (AED) | Spend ÷ new customers from channel |
| reach | integer | Reach/impressions where relevant |

**Example row:**
`2025-01,Meta,7200,24800,150,3.44,52.1,420000`

### `product_performance.csv`
Powers E-commerce product table & top-products chart.

| Column | Type | Description |
|---|---|---|
| month | string | Reporting month |
| product | string | SKU name |
| units_sold | integer | Units |
| revenue | integer (AED) | Product revenue |
| pct_of_revenue | float (%) | Share of month revenue |

**Example row:**
`2025-01,Healthy Bread Bundle,180,9000,19.8`

### `customer_segments.csv`
Powers Customer & Retention.

| Column | Type | Description |
|---|---|---|
| month | string | Reporting month |
| segment | string | New / Returning / VIP (3+ orders) |
| customers | integer | Count |
| revenue | integer (AED) | Segment revenue |
| avg_orders | float | Avg orders per customer in segment |

**Example row:**
`2025-01,Returning,115,21850,1.9`

### `campaign_performance.csv`
Powers the campaign table.

| Column | Type | Description |
|---|---|---|
| month | string | Reporting month |
| campaign | string | Campaign name |
| channel | string | Channel |
| spend | integer (AED) | Spend |
| revenue | integer (AED) | Revenue |
| orders | integer | Orders |
| roas | float | Revenue ÷ spend |
| cac | float (AED) | Spend ÷ new customers |
| status | string | scaling / hold / cut |

**Example row:**
`2025-01,Protein Range — Prospecting,Meta,3200,9600,62,3.0,51.6,scaling`

### `funnel_performance.csv`
Powers the conversion funnel.

| Column | Type | Description |
|---|---|---|
| month | string | Reporting month |
| sessions | integer | Top of funnel |
| product_views | integer | Viewed a product |
| add_to_cart | integer | Added to cart |
| checkout | integer | Reached checkout |
| purchase | integer | Completed orders |

**Example row:**
`2025-01,18200,9100,3640,1280,320`

### `ai_executive_summary.json`
Powers the Executive AI Summary page. One object per month.

```json
{
  "month": "2025-06",
  "headline": "Revenue reached AED 120,080 — up 26% month over month and 2.6x since January.",
  "what_improved": [
    "Blended ROAS rose to 3.6x as Meta prospecting scaled efficiently.",
    "Repeat rate climbed to 19.8%, the highest in the period."
  ],
  "what_declined": [
    "TikTok ROAS slipped to 2.1x; creative fatigue likely."
  ],
  "why": "Growth was driven by improved retention and a stronger email contribution, not just higher paid spend — a healthier mix than prior months.",
  "recommended_actions": [
    "Shift ~AED 2,000 from TikTok to Meta prospecting where CAC is AED 48 vs AED 71.",
    "Refresh TikTok creative with 3 new UGC angles before re-scaling.",
    "Launch a win-back email flow targeting one-time buyers from Q1."
  ],
  "budget_reallocation": "Move 15% of TikTok budget to Meta; hold Google at current level.",
  "product_opportunity": "High Protein Bread is now 22% of revenue — bundle it with Oats Bread to lift AOV.",
  "retention_recommendation": "Introduce a 2nd-order discount triggered 14 days after first purchase."
}
```

---

## 5. Mock Data Direction

### Business: "a UAE healthy bakery D2C + retail-supported brand" (fictional)

Six months, **Jan 2025 → Jun 2025**, showing a credible growth story — not a hockey stick, but steady compounding with realistic noise and at least one honest dip.

### Master trajectory (drives `monthly_performance.csv`)

| Month | Orders | AOV (AED) | Revenue (AED) | New Cust. | Returning | Repeat % | Spend | Blended ROAS | CAC | Organic Reach |
|---|---|---|---|---|---|---|---|---|---|---|
| 2025-01 | 320 | 142 | 45,440 | 205 | 115 | 35.9 | 16,800 | 3.13 | 82 | 980,000 |
| 2025-02 | 365 | 145 | 52,925 | 220 | 145 | 39.7 | 18,500 | 3.20 | 84 | 1,050,000 |
| 2025-03 | 430 | 148 | 63,640 | 250 | 180 | 41.9 | 21,000 | 3.30 | 84 | 1,180,000 |
| 2025-04 | 505 | 151 | 76,255 | 275 | 230 | 45.5 | 23,800 | 3.40 | 87 | 1,300,000 |
| 2025-05 | 620 | 154 | 95,480 | 320 | 300 | 48.4 | 27,500 | 3.50 | 86 | 1,420,000 |
| 2025-06 | 760 | 158 | 120,080 | 360 | 400 | 52.6 | 31,000 | 3.60 | 86 | 1,560,000 |

**Why these numbers are credible:**
- AOV drifts up gradually (AED 142 → 158) — anchored near the real HÄLSA-class AED 150 figure, never spiking unrealistically.
- Repeat rate climbs from ~36% to ~53% as the returning base compounds — the *story* of the demo is "we built a retention engine," which is the most valuable growth narrative.
- CAC stays roughly flat (~AED 82–87) while revenue grows — showing efficient, not bought, growth.
- Blended ROAS improves modestly (3.1x → 3.6x) — believable, never a suspicious 8x.
- Organic reach grows ~1.0M → 1.56M — echoes the real ~1.5M/month proof point, clearly fictionalised.

### Channel logic (`channel_performance.csv`)

Monthly revenue splits roughly: **Meta ~38%, Google ~18%, TikTok ~10%, Email ~7%, Organic Social ~12%, Direct ~10%, Retail Support ~5%.** Paid channels carry spend; Organic/Direct/Retail have spend = 0. Build one honest stress point: **TikTok ROAS decays from 2.9x (Jan) to 2.1x (Jun)** to give the AI summary a real "what declined" to flag.

### Product mix (`product_performance.csv`)

Eight SKUs from the brief. Concentration with a shifting hero:
- **Healthy Bread Bundle** — leads early (~20% of revenue), the acquisition product.
- **High Protein Bread** — rises to ~22% by Jun (the breakout, drives the AI "opportunity" note).
- High Fiber Bread, Whole Wheat Bread, Oats Bread — mid-tier, steady.
- Burger Buns, Toast Loaf, Samoon — long tail, retail-leaning.

### Funnel logic (`funnel_performance.csv`)

Each month: Sessions → ~50% product views → ~20% add-to-cart → ~7% checkout → ~1.76–2.4% purchase (conversion improves over the 6 months as a CRO narrative). Cart abandonment improves from ~75% to ~68%.

### Customer / cohort logic (`customer_segments.csv`)

New, Returning, VIP (3+ orders). VIP segment emerges only from Month 3 onward — realistic for a 6-month-old retention motion. Cohort retention: Jan cohort retains ~28% by month 3, improving for later cohorts (~34%) as lifecycle marketing matures.

### Data realism rules

- Add small irregular noise (±2–4%) so lines aren't suspiciously smooth.
- One genuine month-over-month wobble somewhere (e.g. Feb conversion dips slightly) so it reads like reality.
- Every derived metric must reconcile (orders × AOV = revenue; spend ÷ new customers = CAC). Reviewers *will* spot-check.
- Round to sensible precision (AED whole numbers for money, 1 decimal for rates).

---

## 6. Visual & UX Direction

### Overall feel
Executive, calm, premium, GCC-friendly. It should look like an internal tool a real company pays for — not a colourful template and not a student dashboard.

### Layout
- **Left sidebar navigation** (collapsible): the five pages + a brand mark "Growth OS — Demo".
- **Top bar:** global date-range selector, channel filter, and a subtle "Sample data" badge (honesty signal).
- **Content grid:** 12-column responsive. KPI card row across the top, charts below in a 2-up grid, tables full-width.
- Generous whitespace; one clear visual hierarchy per page (one hero chart, supporting visuals smaller).

### Colour direction
- **Background:** deep charcoal-navy (`#0F1724` / `#111827`) for the app shell — premium, reduces glare in screenshots.
- **Cards:** off-white (`#F8FAF9`) or a dark elevated surface (`#1B2433`) — pick one mode; recommend **dark shell + light cards** for contrast that photographs well.
- **Primary accent:** soft sage green (`#3DBA8C` / `#4ADE80` muted) — growth, health, on-brand for bakery/FMCG.
- **Secondary accent:** muted amber/gold (`#E0A458`) for warnings, "watch" states, weakest funnel step.
- **Text:** high-contrast off-white on dark, slate-900 on light cards. Never pure black on pure white.
- Restraint is the rule: two accents maximum carrying meaning. Green = good/primary, amber = caution. Negative deltas in a desaturated red, never alarm-red.

### KPI card style
Label (small caps, muted) · large value · delta chip (▲ green / ▼ amber-red) · tiny sparkline. Subtle border or soft shadow, generous padding, consistent height.

### Chart style
- Recharts (or equivalent): thin 2px lines, soft area fills at ~10% opacity, rounded bar corners.
- Muted gridlines, no heavy borders. Tooltips on hover with formatted AED values.
- Consistent channel colour mapping across every page (Meta always the same hue, etc.).
- No 3D, no pie charts except where share genuinely needs it (prefer stacked bars).

### Table style
Zebra-free, thin row dividers, right-aligned numbers, sticky header. Conditional formatting on ROAS/Status columns (green/amber text, not loud background fills). Sortable headers.

### Executive AI Summary card
Styled like a refined memo: comfortable measure (~70 chars/line), clear section headings, a soft accent left-border on the recommendations block, and an honest footer: *"AI-generated draft from sample data · reviewed by Mohamed Yehia."*

### Filter behaviour
Filters update all visuals on the active page instantly (client-side, no reload). Selected month range echoed in the page subtitle ("Jan–Jun 2025"). Default view = full 6 months.

### Mobile considerations
Sidebar collapses to a top hamburger. KPI cards stack 2-up then 1-up. Charts become horizontally scrollable or simplify to fewer series. The Executive AI Summary reads beautifully on mobile (it's mostly text) — make sure recruiters viewing on a phone get a strong first impression there.

---

## 7. Recommended Tech Stack

### Option A — Next.js + React + Tailwind + Recharts (custom web app)
**Strengths:** Fully controlled premium design; lives on yehia.digital and as a standalone repo; doubles as proof you can ship a real product; deployable free on Vercel; best screenshots.
**Weaknesses:** More build effort; you maintain the data-loading layer.

### Option B — Looker Studio + Google Sheets
**Strengths:** Fast; instantly legible to recruiters who *use* BI tools daily; "this is a real reporting tool" signal; easy to share by link.
**Weaknesses:** Generic Looker aesthetic (hard to make premium); limited custom AI-summary page; weaker as a *coding/AI-transformation* proof point.

### Option C — Hybrid (recommended in the brief)
Build the web app (A) **and** publish a Looker Studio / Sheets version of the same data as a secondary artifact, documented in the README.

### Final recommendation: **Option A as the primary build, with a lightweight Option C extension.**

Build the Next.js app as the hero artifact — it carries the design quality and the "I can ship" signal that matters most for an *AI Transformation* positioning. Then add a thin Hybrid layer: publish the same seven data files as a public Google Sheet and link it from the README ("same data, BI-tool view") so the BI-literate recruiter who doesn't read code still gets a familiar reference point. This captures Option A's depth and Option C's accessibility without doubling the work.

**Concrete stack:**
- Next.js (App Router) + TypeScript
- Tailwind CSS for styling
- Recharts for visualisation
- Static import of CSV/JSON mock data (no backend needed — keeps it deployable and reviewable)
- Deployed on Vercel; embedded into / linked from yehia.digital
- Optional: a small documented script showing the AI-summary prompt → output flow

---

## 8. Folder Structure

```
04_DASHBOARDS/
├── 00_GROWTH_DASHBOARD_DEMO_BRIEF.md        # (exists) the brief
├── 01_GROWTH_DASHBOARD_PLAN.md              # (this document)
│
├── planning/
│   ├── kpi_dictionary.md                    # extracted KPI table
│   ├── data_model.md                        # extracted data model spec
│   └── design_notes.md                      # colours, layout, components
│
├── data/
│   ├── monthly_performance.csv
│   ├── channel_performance.csv
│   ├── product_performance.csv
│   ├── customer_segments.csv
│   ├── campaign_performance.csv
│   ├── funnel_performance.csv
│   └── ai_executive_summary.json
│
├── dashboard-app/                           # Next.js application
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                         # Executive Overview
│   │   ├── marketing/page.tsx
│   │   ├── ecommerce/page.tsx
│   │   ├── customers/page.tsx
│   │   └── ai-summary/page.tsx
│   ├── components/
│   │   ├── KpiCard.tsx
│   │   ├── charts/
│   │   ├── DataTable.tsx
│   │   ├── Sidebar.tsx
│   │   └── FilterBar.tsx
│   ├── lib/
│   │   ├── data.ts                          # loads /data files
│   │   └── metrics.ts                        # derived calculations
│   ├── public/
│   ├── package.json
│   └── tailwind.config.ts
│
├── screenshots/
│   ├── 01-executive-overview.png
│   ├── 02-marketing.png
│   ├── 03-ecommerce.png
│   ├── 04-customers.png
│   └── 05-ai-summary.png
│
├── docs/
│   ├── ARCHITECTURE.md                      # system + data flow
│   ├── AI_SUMMARY_PROMPT.md                 # the prompt template used
│   └── BUSINESS_SCENARIO.md                 # the fictional brand context
│
└── case-study/
    └── case-study.md                        # yehia.digital page content
```

---

## 9. README Structure

Recommended outline for `04_DASHBOARDS/dashboard-app/README.md` (the public face of the repo):

```
# Growth Dashboard Demo — AI-Augmented Business Reporting for E-commerce

> One-line positioning + "Sample data only — no real company data."

## Overview
- What this is, who it's for, what it proves (3–4 sentences).
- Live demo link · Screenshots link · Case study link.

## The Business Problem
- The fragmentation problem this solves (2 short paragraphs).

## What It Shows (5 pages)
- Bullet summary of each page with one screenshot each.

## The AI Layer
- How the Executive AI Summary works (data → prompt → brief).
- Link to AI_SUMMARY_PROMPT.md. Honest "pre-generated for demo" note.

## Data Model
- The 7 files, one-line each. Link to data_model.md.
- Note on economic assumptions (margin, break-even ROAS).

## Tech Stack
- Next.js · TypeScript · Tailwind · Recharts · Vercel.
- "Hybrid" note: link to the public Google Sheet / Looker version.

## Running Locally
- npm install / npm run dev (3 lines).

## Screenshots
- The 5 page screenshots inline.

## What This Proves
- Bulleted: business→dashboard translation, KPI design, viz, AI-assisted
  reporting, executive communication.

## Future Improvements
- Live data connectors, real-time AI summaries, alerting, multi-brand.

## About
- One line + link to yehia.digital + LinkedIn.
```

Keep it scannable. A recruiter spends ~90 seconds here — the screenshots and "What This Proves" do the heavy lifting.

---

## 10. Case Study Structure for yehia.digital

Page content outline for `case-study/case-study.md` → the portfolio site:

**Title:** Growth Dashboard Demo — AI-Augmented Business Reporting for E-commerce Growth

1. **Business problem** — Growth teams drown in fragmented data across five tools; decisions lag the month. (Set the tension.)
2. **Dashboard objective** — One executive surface answering "are we growing profitably, and where does the next dirham go?"
3. **Data model** — The seven datasets and how they connect; the economic assumptions that make the metrics honest.
4. **KPI structure** — The KPI dictionary as the analytical backbone; highlight CAC-vs-AOV and repeat-rate thinking.
5. **Dashboard pages** — Walk the five pages with one screenshot each and a sentence on the decision each enables.
6. **AI executive summary concept** — The data → prompt → brief workflow; the responsible-AI framing (drafted by AI, reviewed by a human).
7. **Tools used** — Next.js, TypeScript, Tailwind, Recharts, Vercel, AI-assisted build (Claude/ChatGPT), Looker/Sheets hybrid.
8. **Screenshots** — Full gallery, Executive Overview and AI Summary featured.
9. **What this proves** — Maps explicitly to the positioning: dashboards, data viz, internal reporting, AI-augmented workflows, executive communication.
10. **Future improvements** — Live connectors, scheduled AI briefs, alerting, multi-brand rollout.

Close with a single CTA line: *"This is a demonstration system built on fictional data to show approach and capability. Available to discuss how the same thinking applies to your business."*

---

## 11. Claude Code Implementation Prompt

> Paste the following into Claude Code once the data files are generated and you're ready to build. It assumes this plan and the brief are in the repo.

```
You are building a premium, executive growth analytics dashboard as a
Next.js application. This is a proof-of-work portfolio artifact — design
quality and credibility matter as much as functionality.

CONTEXT FILES (read first):
- 04_DASHBOARDS/00_GROWTH_DASHBOARD_DEMO_BRIEF.md
- 04_DASHBOARDS/01_GROWTH_DASHBOARD_PLAN.md
Follow the plan's data model, KPI dictionary, page specs, and visual
direction exactly.

STACK:
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Recharts
- Static mock data imported from /data (no backend, no database)
- Must deploy cleanly on Vercel

DATA:
- Read the 7 files from 04_DASHBOARDS/data/ (6 CSVs + ai_executive_summary.json).
- If they don't exist yet, generate them following Section 5 "Mock Data
  Direction" of the plan — 6 months (2025-01 to 2025-06), the exact
  trajectory table, with ±2-4% realistic noise. All derived metrics MUST
  reconcile (orders × AOV = revenue, spend ÷ new_customers = CAC).
- Put data-loading in lib/data.ts and all derived calculations in
  lib/metrics.ts. Never hardcode metric values in components.

PAGES (5, matching the plan):
1. Executive Overview (/)        — 10 KPI cards + 5 charts, hero revenue chart
2. Marketing Performance (/marketing) — 10 KPI cards, spend/revenue/ROAS/CAC
                                   charts, sortable campaign table
3. E-commerce Performance (/ecommerce) — 8 KPI cards, conversion funnel
                                   (highlight weakest step in amber), product table
4. Customer & Retention (/customers)  — 7 KPI cards, new-vs-returning,
                                   cohort retention heatmap, repeat trend
5. Executive AI Summary (/ai-summary) — render ai_executive_summary.json as a
                                   styled executive memo; honest footer noting
                                   AI-drafted + human-reviewed; per-month selector

DESIGN (follow plan Section 6):
- Dark charcoal-navy app shell (#0F1724), light off-white cards (#F8FAF9).
- Primary accent soft sage green (#3DBA8C); secondary muted amber (#E0A458).
- Collapsible left sidebar nav; top bar with global date-range + channel
  filter + a small "Sample data" badge.
- Reusable components: KpiCard (label, value, delta chip, sparkline),
  chart wrappers, DataTable (sortable, conditional ROAS/status colours),
  Sidebar, FilterBar.
- Consistent channel colour mapping across all pages.
- Thin lines, soft fills, rounded bars, no 3D, minimal gridlines.
- Fully responsive: sidebar → hamburger, KPI cards stack, charts adapt.

QUALITY BAR:
- It must look like a real internal tool a company pays for, not a template.
- Format all currency as AED with thousands separators.
- Include a ROAS reference line at break-even (~1.8x) per the plan.
- No console errors; clean TypeScript types for all data.

DELIVER:
- Working app under 04_DASHBOARDS/dashboard-app/
- A README following Section 9 of the plan.
- Tell me the exact commands to run it locally and to deploy on Vercel.

Build page by page. Start with the data layer + lib/metrics.ts, then the
shared components, then Executive Overview. Pause after Executive Overview
so I can review the design direction before you build the remaining pages.
```

---

## Next action

This plan is execution-ready. The recommended sequence from here:

1. **Generate the seven mock-data files** (I can produce these next — fully reconciled CSVs + the JSON summaries — so Claude Code builds against real files, not improvised ones).
2. **Run the Claude Code prompt** above to build the Next.js app, pausing after the Executive Overview for a design review.
3. **Capture screenshots**, write the README and case study from the outlines here.
4. **Deploy to Vercel**, link from yehia.digital, then move to Demo 02.

If you'd like, the most useful next step I can do directly is generate the complete, reconciled mock dataset (all 7 files) so the build has a solid, honest data foundation. Just say the word.