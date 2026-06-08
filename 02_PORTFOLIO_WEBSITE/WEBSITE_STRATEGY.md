# yehia.digital — Website Strategy & Content Architecture

> **Scope:** Personal profile website · digital CV · executive portfolio · case-study library.
> **Not** a dashboard demo. Dashboards/automation are proof of *how I work*, not the product.
> **Positioning:** Growth Marketing, E-commerce & AI Transformation Lead.
> **Chapter 1 (now):** Build the website / digital CV / profile.
> **Chapter 2 (later):** Add Labs / proof-of-work demos.

---

## A note before the strategy: the data-integrity rule

This website's entire value is credibility in front of CEOs and recruiters who will verify. So one rule governs everything below:

**Every claim must be backed by something real.** Three businesses have hard, defensible numbers (HÄLSA Bake, El Shohail Trading, IDEAEG). Those carry the site. Several projects in the Selected Work brief — TechVillage Academy, TAO Academy, Experit Academy, SSM Academy, EU Business Academy, IGCSE — do **not** appear in your CV source, and I have no metrics or role detail for them. I will not invent case studies for those. Below I show how to feature what's proven and present the rest honestly (as a credential/logo block, not fabricated narratives). This restraint is what makes the proven numbers believable.

---

## 1. The real purpose of the website

In one line: **to convert a 90-second visit from a senior decision-maker into "this person is credible, let's talk."**

It does four jobs, in priority order:

1. **Establish credibility fast** — who you are, the level you operate at, and proof you've driven real business outcomes across UAE/KSA/Egypt.
2. **Tell the story** — a 20-year arc from self-taught builder to growth-and-systems leader, with AI as the natural next chapter (not a bolt-on).
3. **Prove it** — a small set of strong, sector-grouped case studies with numbers.
4. **Make action easy** — download the CV, see LinkedIn, send a message.

It is a *business profile for a senior operator*, not a creative portfolio and not a generic CV template. The visitor should never wonder "is this person mid-level?" — the design, the numbers, and the restraint should answer that immediately.

## 2. Homepage strategy

The homepage is a **one-scroll executive summary** that earns the click to a deeper page. It is not the full CV. It should answer who/what/proof/why-credible/how-to-contact in a single confident scroll, then route people to Work, About, and the CV.

Recommended homepage section order:

1. **Hero** — name, positioning line, one-sentence value statement, two CTAs (View work · Download CV).
2. **Credibility strip** — markets (UAE · KSA · Egypt), years (15+), and 3–4 logos or business names you've led.
3. **Proof bar** — 3–4 headline metrics pulled from the strongest cases (e.g. "SAR 7M→10M", "~1.5M organic reach/mo", "EGP 20M", "250K community"). Numbers only, no fluff.
4. **What I do** — 3 pillars: Growth & Performance · E-commerce & Business Systems · AI-Augmented Operations. One tight paragraph each.
5. **Featured work** — 3 hero case-study cards (HÄLSA, El Shohail, IDEAEG).
6. **How I work** — the AI/dashboards/GitHub/ClickUp operating model, framed as modern working style.
7. **Short about** — 2–3 sentences + a "Read my story" link.
8. **Contact CTA** — one clear block: email, LinkedIn, CV download.

Rule: the hero + proof bar must do their job *above the fold on a laptop*. If a recruiter never scrolls, they should still come away with positioning + proof + a way to contact you.

## 3. Recommended navigation menu

Keep it to five items. More looks like a content site; fewer looks thin.

```
Home   |   Work   |   About   |   Experience   |   Contact
```

- **Work** = the case-study library (the proof).
- **About** = the story page.
- **Experience** = the digital CV (chronological, ATS-aligned, with a download button).
- A **"Download CV"** button sits persistently in the top-right of the nav, visually distinct.
- **Labs** is intentionally *omitted now*. It joins the nav in Chapter 2 once the dashboard/automation demos are live. Don't ship an empty Labs link.

## 4. Recommended pages

| Page | Route | Job |
|---|---|---|
| Home | `/` | 90-second executive summary + routing |
| Work | `/work` | Sector-grouped case-study library |
| Case study (template) | `/work/[slug]` | One deep case per strong project |
| About | `/about` | The professional story |
| Experience | `/experience` | Digital CV + download |
| Contact | `/contact` | Email, LinkedIn, CV, short form |
| *(Later)* Labs | `/labs` | Proof-of-work demos (Chapter 2) |

## 5. What each page should include

**Home** — as section order in §2.

**Work** — short intro line; 3 featured case studies up top; then sector groups (B2B/Manufacturing/Trade · Food & FMCG/Retail · Education/Training · Agencies/Client Work) as compact archive cards. Featured = full cards with a metric; archive = small cards (logo, role, one line).

**Case study** — the reusable template in §13.

**About** — the story in §7.

**Experience** — the CV in §8: a clean chronological view with the collapsed Al-Shehail structure, plus a prominent "Download PDF CV" button. This page can be denser than the homepage — people who reach it want detail.

**Contact** — email, LinkedIn, location (UAE/Cairo), and a 3-field message form (name, email, message). Restate the CV download here. Keep it human: one line like "Open to senior growth, e-commerce, and digital transformation roles across the GCC."

## 6. Homepage hero copy options

All three lead with the proven positioning and avoid AI overhype. Pick one; I lean **Option B**.

**Option A — direct & executive**
> **Mohamed Yehia**
> Growth Marketing, E-commerce & AI Transformation Lead
> I build marketing engines, e-commerce systems, and AI-augmented operations that connect strategy, execution, and business results — across the UAE, KSA, and Egypt.
> [ View work ] [ Download CV ]

**Option B — outcome-led (recommended)**
> **Mohamed Yehia**
> Growth Marketing, E-commerce & AI Transformation Lead
> 15+ years turning marketing and e-commerce into measurable revenue — building the systems, teams, and AI-augmented workflows that make growth repeatable across the GCC.
> [ View work ] [ Download CV ]

**Option C — story-led**
> **Mohamed Yehia**
> Growth Marketing, E-commerce & AI Transformation Lead
> From a self-taught web builder in 2005 to a growth-and-systems leader across three markets — I connect performance marketing, e-commerce, and modern AI-assisted operations into one engine.
> [ View work ] [ Download CV ]

Sub-line / credibility strip (under any hero): `UAE · KSA · Egypt · 15+ years · D2C + B2B · Healthy FMCG · Food-processing machinery · Education`

## 7. About / Story page structure

The story is your strongest differentiator — most growth marketers can't credibly claim a 20-year builder arc. Structure it as a narrative, not a bullet list.

1. **Opening** — who you are now, in two sentences, at the level you operate.
2. **The origin (2005)** — self-taught builder: websites, forums, communities. The point: *systems thinking and shipping have been the through-line for two decades.*
3. **The evolution** — into performance marketing, e-commerce, brand, ERP, and operations across agencies and your own ventures.
4. **The current chapter** — group-level growth and systems leadership across UAE/KSA/Egypt, multiple brands in parallel.
5. **The AI chapter** — framed as *evolution, not pivot*: "the same instinct to build systems, now applied with AI." Mention Claude, ChatGPT, ClickUp, GitHub as the modern toolkit, plus the dashboards/automation you're building.
6. **What I'm looking for** — one honest paragraph on the roles and the kind of business you want to help.
7. **Close** — a human line + CTA (CV / contact).

Tone: first person, confident, plain-spoken. No hero-narrative clichés.

## 8. Experience / CV page structure

Mirror the structure we already locked in the CV strategy work, so the site and the PDF tell one story:

1. **Header** — name, positioning, location, contacts, portfolio + LinkedIn, **Download PDF** button.
2. **Summary** — 3–4 lines.
3. **Core competencies** — 4–5 grouped clusters (not the 80-item dump).
4. **Experience**:
   - **Al-Shehail Group — Group Marketing & Digital Growth Lead** (collapsed parent) with two embedded brand verticals: HÄLSA Bake (UAE) and El Shohail Trading (KSA). This solves the "three parallel Present roles" problem.
   - **IDEAEG Education Group — Co-Founder**.
   - **Earlier career (2005–2015)** — one compressed block (Pointer, MEHRAT, Eid Labib Group, CSC, Micro4Host).
5. **AI-Augmented Operating Approach** — 4–5 bullets, treated as *how you work*.
6. **Education & certifications** — incl. Apple AATP.
7. **Languages**.

Keep this page's claims identical to the downloadable PDF. A recruiter who reads both should find zero contradictions.

## 9. Selected Work / Case Studies page architecture

Two tiers on `/work`, in this order:

1. **Featured (3)** — full case-study cards that link to deep pages: HÄLSA, El Shohail, IDEAEG.
2. **By sector (archive)** — compact cards grouped under four headers. Most are short cards (no deep page yet); you upgrade them to full case studies over time.

This keeps the page uncrowded: three rich things at the top, everything else scannable below.

## 10. Grouping by sector without crowding

Use **four sector bands**, each a labelled row of small archive cards. The trick to avoiding clutter is *card discipline*: archive cards show only logo/name, your role, market, and one outcome line — nothing more. Only featured cards get metrics, images, and a "Read case study" link.

```
Featured case studies
  [ HÄLSA Bake ]   [ El Shohail Trading ]   [ IDEAEG ]

B2B · Manufacturing · Trade
  [ El Shohail Trading* ] [ Al Shohail Food Industries ] [ CSC Export ] [ Tajerinn ]

Food & Beverage · FMCG · Retail
  [ HÄLSA Bake* ]  [ Hyper Plus ]

Education · Training · Academies
  [ IDEAEG / IDE / IMA* ]   + a combined "Academy & training clients" credential strip

Agencies · Digital Products · Client Work
  [ Pointer Advertising ]   [ IBA.Apps (coming soon) ]
```
(*Featured items also appear in their sector band — that's fine and expected.)

**On the education list specifically:** feature IDEAEG (real numbers). For the academies that lack backing detail (TechVillage, TAO, Experit, SSM, EU Business Academy, IGCSE, Gama, Atlético Madrid Academy), do **not** create individual case studies. Present them as a single **"Academy & training clients"** strip — names/logos under a line like *"Marketing and growth work across education and training brands."* If you later confirm role and results for any one, promote it to a card. This is honest and still impressive as breadth.

## 11. Which case studies to feature first

Only the three with hard, defensible outcomes:

1. **HÄLSA Bake** — D2C/FMCG growth + e-commerce launch (the cleanest consumer story).
2. **El Shohail Trading** — B2B revenue growth + ERP/business systems (the operator story).
3. **IDEAEG** — founder-level scale + Apple AATP (the ownership story).

Together they show range: consumer, B2B, and entrepreneurship — exactly the spread senior GCC roles screen for.

## 12. Which projects start as short archive cards

Everything else: Al Shohail Food Industries, CSC Export, Tajerinn, Hyper Plus, Pointer Advertising, IBA.Apps (marked "coming soon"), and the education/training clients strip. Each is a small card with role + market + one outcome line, upgradeable later.

## 13. Reusable case study template

Every featured case page follows the same skeleton (keeps the library consistent and fast to extend):

```
[Hero]   Project name · sector · market · your role · dates
         One-line outcome headline (the single most impressive result)

[Context]      The business, the market, the starting point. 2–3 sentences.
[Challenge]    What needed to be solved (growth, launch, systems, etc.).
[What I did]   3–6 plain bullets — the actual work, grouped (marketing /
               e-commerce / systems). No buzzwords.
[Results]      3–4 metric callouts (big number + label). Honest, "approx."
               where appropriate.
[How AI/systems helped]  (optional, where true) one short note on tools/
               workflows used — only if real for that project.
[Visuals]      Screenshots / mockups / before-after where available.
[Close]        One line on impact + a "Back to work" / "Contact" CTA.
```

Design note: lead with the outcome headline, not the context. Decision-makers read the result first, then decide whether to read the how.

## 14. How to present each named project

- **HÄLSA Bake** *(featured)* — Headline: launched the e-commerce channel and built an organic-led growth engine. Results: ~1.5M organic reach/mo, ~25% offline sales uplift, ~200 new customers/mo, ~25% MoM growth, ~AED 150 AOV, ~15% repeat rate. Brand rule respected: describe products via "natural sourdough fermentation," never "sourdough bread."
- **El Shohail Trading** *(featured)* — Headline: grew revenue and ran the first full ERP implementation. Results: ~SAR 7M→10M in year one, ~10% YoY, ~50K social following, ~1M monthly reach, e-commerce site SAR 250K+ in year one. Frame the multiple website rebuilds as *deliberate iteration as the model matured* (catalog → lead-gen → direct e-commerce), not indecision.
- **IDEAEG** *(featured)* — Headline: co-founded and scaled education businesses; secured Apple AATP. Results: 250K community, ~5,500 students, ~EGP 20M revenue, ~20% YoY enrolment growth.
- **Al Shohail Food Industries** *(archive)* — the manufacturing/parent-industry context behind HÄLSA; one line on group marketing/systems role.
- **Pointer Advertising** *(archive)* — agency-side delivery across multiple client accounts; one line, name a couple of recognisable clients.
- **Hyper Plus** *(archive)* — early retail/e-commerce digital execution; one line.
- **CSC Export** *(archive)* — export/trade digital content across markets (China, KSA, Egypt, Australia); one line.
- **Tajerinn** *(archive)* — e-commerce content and promotions; one line.
- **IBA.Apps** *(archive, "coming soon")* — digital products/apps; placeholder until you add detail.

## 15. AI, dashboards, GitHub, Claude, ChatGPT, automation — without looking like a fake AI startup

The framing that keeps this credible: **AI is your operating model, not your product.** You're a growth-and-systems leader who works with modern tools — not an "AI guy."

Do this:
- Put it in a **"How I work"** section (home) and the **AI-Augmented Operating Approach** (CV), described as *how you execute faster and more consistently*: AI-assisted content/creative cycles, prototyping reporting and dashboards, prompt libraries and workflow templates adopted by teams, AI-assisted build of this very site (Claude + GitHub).
- Use **concrete, modest verbs**: "use," "prototype," "build," "compress cycle time" — not "revolutionise," "AI-powered transformation engine," "machine learning."
- Treat dashboards/automation as **Chapter 2 Labs** — linked once real, never as the homepage centrepiece.
- A nice honest touch: a small "**How this site was built**" note (AI-assisted, GitHub-tracked) — it *demonstrates* the working style instead of claiming it.

Avoid this:
- No "AI" hero headline, no neon/gradient "AI startup" aesthetic, no fabricated automation metrics, no claiming data-science/ML you haven't done.

The test: every AI sentence should survive a skeptical recruiter asking "show me." If it can't, soften it or move it to Labs.

## 16. Content to write before Claude Code starts building

Write (or approve) these as plain text first, so the build is content-driven, not lorem-ipsum:

1. Final hero copy (pick an option in §6) + credibility strip.
2. The 3–4 proof-bar metrics.
3. The three "What I do" pillar paragraphs.
4. The three featured case studies (full template, §13).
5. Archive card one-liners for every other project (§14).
6. The About story (§7) — full prose.
7. The "How I work" section copy (§15).
8. Contact block copy + the "open to roles" line.
9. The CV content (already largely done) + the downloadable PDF.
10. Headshot/photo and any brand/logo assets; screenshots for the featured cases.

Build only after 1–8 are approved. Copy first, code second.

## 17. Suggested visual direction

Executive, calm, modern, confident — consistent with the dashboard demo's family so your whole presence feels coherent.

- **Palette:** deep navy/charcoal (`#0F1724`) anchors; off-white surfaces; one restrained accent — sage green (`#3DBA8C`) — with a muted warm secondary if needed. Two accents max.
- **Typography:** one clean modern sans for UI (Inter/General Sans/Geist); optionally a refined serif for the story page's pull-quotes only. Two weights.
- **Layout:** generous whitespace, strong type hierarchy, a clear grid. Numbers presented large and proud.
- **Imagery:** real where possible (you, the brands, actual screenshots). Avoid generic stock and "AI" abstractions.
- **Restraint over decoration:** no parallax circus, no gradient meshes. The seniority signal comes from calm and clarity, not effects.
- **Mobile-first:** recruiters open links on phones — the hero, proof bar, and featured cards must be excellent on mobile.

## 18. Suggested tone of voice

Executive, practical, confident, human. First person. Plain English with precise business language. Measured about AI. Specific over grand ("grew revenue from SAR 7M to 10M" beats "drove explosive growth"). GCC-professional: serious but not stiff. Never buzzword-stacked.

## 19. Recommended first build milestone

**Milestone W1 — the Homepage only**, content-complete (real copy, not placeholder), responsive, with working CTAs to placeholder routes for Work/About/Experience/Contact. No case-study deep pages yet, no Labs.

Why: the homepage is the highest-leverage surface and forces you to lock positioning, hero copy, and proof before building anything else. Everything after inherits those decisions.

Sequence after W1: Experience/CV page → Work page (featured + archive) → the three featured case studies → About → Contact → (Chapter 2) Labs.

## 20. Final Claude Code prompt — build the Homepage only (use after strategy approval)

> Paste into Claude Code once §16 items 1–8 are written and approved. Assumes the approved copy is saved in the repo (e.g. `05_WEBSITE/content/homepage.md`).

```
You are a senior frontend engineer and design-focused developer building the
HOMEPAGE ONLY of a personal executive portfolio website: yehia.digital.

Read first:
- 00_MASTER_CAREER_BRIEF.md
- 10_PROMPTS/05_CLAUDE_WEBSITE_STRATEGY_RESET_PROMPT.md
- 05_WEBSITE/WEBSITE_STRATEGY.md            (this strategy)
- 05_WEBSITE/content/homepage.md            (approved copy — use verbatim)

SCOPE: Build ONLY the homepage. Create placeholder routes for /work, /about,
/experience, /contact (simple "coming soon" stubs) so nav links resolve. Do
NOT build case studies, the CV page, or any Labs/dashboard section.

STACK:
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Static content imported from /content (no backend, no database)
- Deployable cleanly on Vercel
- Project root: 05_WEBSITE/site/

HOMEPAGE SECTIONS (in this order, content from homepage.md — never invent copy):
1. Sticky top nav: Home · Work · About · Experience · Contact, with a
   distinct "Download CV" button top-right.
2. Hero: name, positioning line, value sentence, two CTAs (View work,
   Download CV), credibility strip (UAE · KSA · Egypt · 15+ years · D2C+B2B).
3. Proof bar: 3-4 headline metric callouts (big number + label).
4. "What I do": 3 pillars (Growth & Performance, E-commerce & Business
   Systems, AI-Augmented Operations), one paragraph each.
5. Featured work: 3 cards (HÄLSA Bake, El Shohail Trading, IDEAEG) — each with
   an outcome headline + one metric; link to /work for now.
6. "How I work": the AI-augmented operating model, modest framing.
7. Short about: 2-3 sentences + "Read my story" link to /about.
8. Contact CTA: email, LinkedIn, Download CV.
9. Minimal footer.

DESIGN (follow strategy §17):
- Deep navy/charcoal (#0F1724) anchors, off-white surfaces, single sage-green
  accent (#3DBA8C). Two accents max. Flat, no gradient meshes.
- One clean modern sans (e.g. Inter). Two weights. Strong type hierarchy.
  Large, proud numbers in the proof bar.
- Generous whitespace, clear grid, executive and calm. No decorative effects.
- Mobile-first: hero, proof bar, and featured cards must look excellent on a
  phone. Test at 375px and at desktop.
- Respect the HÄLSA brand rule: never "sourdough bread" — use "natural
  sourdough fermentation" / "natural sourdough starter".

QUALITY BAR:
- Screenshot-ready homepage, no console errors, clean TypeScript.
- Real approved copy only — no lorem ipsum, no invented metrics.
- Accessible: semantic landmarks, alt text, sufficient contrast.

DELIVER:
- Working homepage under 05_WEBSITE/site/ + the four placeholder routes.
- A README: what it is, content policy, tech stack, how to run, next pages.
- Tell me the exact commands to run locally and to deploy on Vercel.

Build the layout/nav and hero first, then pause so I can review the hero and
visual direction before you build the remaining sections.
```

---

## Next action

This is Chapter 1 strategy, approval-ready. Before any code, the highest-value next step is to **write and approve the homepage copy** (§16 items 1–8) — especially the hero (pick an option from §6) and the three featured case studies. Once that copy exists, the Claude Code prompt in §20 builds the homepage against it.

If you want, I can draft that homepage copy next — real hero, proof bar, three pillars, the three featured case-study write-ups, and the "How I work" section — using only the proven numbers, so it's ready to hand to Claude Code.
