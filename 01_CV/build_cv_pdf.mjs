#!/usr/bin/env node
/**
 * Build the ATS-safe CV PDF from 01_CV/MOHAMED_YEHIA_FINAL_CV.md.
 *
 * Pipeline: markdown → flat ODT (single XML, precise page geometry and
 * typography) → LibreOffice headless → PDF at
 * 02_PORTFOLIO_WEBSITE/site/public/files/mohamed-yehia-cv.pdf
 *
 * ATS constraints honoured: single column, no tables, no text boxes, no
 * icons, no photo, no graphics; white background; charcoal text;
 * Liberation Sans (Arial-metric); A4 with 0.55in margins; 9.8pt body.
 * Requires libreoffice-writer on PATH (soffice).
 *
 * The "SENSITIVE METRICS NOTE" section is authoring metadata, not CV
 * content — it is skipped in the PDF. The markdown file is never modified.
 *
 * Usage: node 01_CV/build_cv_pdf.mjs
 */

import { execFileSync } from "node:child_process";
import { copyFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, "MOHAMED_YEHIA_FINAL_CV.md");
const OUT = resolve(here, "../02_PORTFOLIO_WEBSITE/site/public/files/mohamed-yehia-cv.pdf");

/** Sections (## headings) that are build/QA metadata, not CV content. */
const SKIP_SECTIONS = new Set(["SENSITIVE METRICS NOTE"]);

/* ----------------------------- helpers ---------------------------------- */

const escapeXml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Inline markdown: only **bold** appears in the source. */
const inline = (s) =>
  escapeXml(s.replace(/\s+$/, "")).replace(
    /\*\*(.+?)\*\*/g,
    '<text:span text:style-name="TBold">$1</text:span>'
  );

const p = (style, content) =>
  `<text:p text:style-name="${style}">${content}</text:p>`;

/* ----------------------------- parse ------------------------------------ */

const lines = readFileSync(SRC, "utf8").split("\n");
const body = [];
let sawName = false;
let headlineDone = false;
let skipping = false;
let bullets = [];

const flushBullets = () => {
  if (bullets.length === 0) return;
  body.push(
    `<text:list text:style-name="LBullet">` +
      bullets
        .map((b) => `<text:list-item>${p("PBullet", inline(b))}</text:list-item>`)
        .join("") +
      `</text:list>`
  );
  bullets = [];
};

for (const raw of lines) {
  const line = raw.replace(/\s+$/, "");

  if (line.startsWith("## ")) {
    flushBullets();
    const title = line.slice(3).trim();
    skipping = SKIP_SECTIONS.has(title);
    if (skipping) continue;
    if (!headlineDone) {
      // The first ## right under the name is the professional headline.
      body.push(p("PHeadline", inline(title)));
      headlineDone = true;
    } else {
      body.push(p("PSection", inline(title)));
    }
    continue;
  }
  if (skipping) continue;

  if (line.startsWith("# ")) {
    flushBullets();
    body.push(p("PName", inline(line.slice(2).trim())));
    sawName = true;
    continue;
  }
  if (line.startsWith("### ")) {
    flushBullets();
    body.push(p("PJob", inline(line.slice(4).trim())));
    continue;
  }
  if (line.startsWith("- ")) {
    bullets.push(line.slice(2).trim());
    continue;
  }
  if (line === "---" || line.trim() === "") {
    flushBullets();
    continue;
  }

  flushBullets();
  // Contact block sits between the name and the first section.
  body.push(p(sawName && !headlineDone ? "PContact" : "PBody", inline(line)));
}
flushBullets();

/* ----------------------------- FODT ------------------------------------- */

const CHARCOAL = "#1a1a1a";
const MUTED = "#333333";

const fodt = `<?xml version="1.0" encoding="UTF-8"?>
<office:document
  xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"
  xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"
  xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0"
  office:version="1.2"
  office:mimetype="application/vnd.oasis.opendocument.text">
  <office:font-face-decls>
    <style:font-face style:name="Liberation Sans" svg:font-family="'Liberation Sans'" style:font-family-generic="swiss" style:font-pitch="variable"/>
  </office:font-face-decls>
  <office:styles>
    <style:default-style style:family="paragraph">
      <style:paragraph-properties fo:orphans="2" fo:widows="2"/>
      <style:text-properties style:font-name="Liberation Sans" fo:font-size="9.8pt" fo:color="${CHARCOAL}" fo:language="en" fo:country="US"/>
    </style:default-style>

    <style:style style:name="PName" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0in" fo:margin-bottom="0.02in"/>
      <style:text-properties fo:font-size="19pt" fo:font-weight="bold" fo:color="#000000" fo:letter-spacing="0.02in"/>
    </style:style>

    <style:style style:name="PHeadline" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0in" fo:margin-bottom="0.07in"/>
      <style:text-properties fo:font-size="11pt" fo:font-weight="bold" fo:color="${MUTED}"/>
    </style:style>

    <style:style style:name="PContact" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0in" fo:margin-bottom="0.015in" fo:line-height="135%"/>
      <style:text-properties fo:font-size="9pt" fo:color="${MUTED}"/>
    </style:style>

    <style:style style:name="PSection" style:family="paragraph" style:master-page-name="">
      <style:paragraph-properties fo:margin-top="0.115in" fo:margin-bottom="0.04in" fo:padding-bottom="0.025in" fo:border-bottom="0.5pt solid #888888" fo:keep-with-next="always"/>
      <style:text-properties fo:font-size="11pt" fo:font-weight="bold" fo:color="#000000" fo:letter-spacing="0.008in"/>
    </style:style>

    <style:style style:name="PJob" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0.08in" fo:margin-bottom="0.012in" fo:keep-with-next="always"/>
      <style:text-properties fo:font-size="10.5pt" fo:font-weight="bold" fo:color="#000000"/>
    </style:style>

    <style:style style:name="PBody" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0in" fo:margin-bottom="0.038in" fo:line-height="119%"/>
      <style:text-properties fo:font-size="9.8pt" fo:color="${CHARCOAL}"/>
    </style:style>

    <style:style style:name="PBullet" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0in" fo:margin-bottom="0.016in" fo:line-height="117%"/>
      <style:text-properties fo:font-size="9.8pt" fo:color="${CHARCOAL}"/>
    </style:style>

    <style:style style:name="TBold" style:family="text">
      <style:text-properties fo:font-weight="bold"/>
    </style:style>

    <text:list-style style:name="LBullet">
      <text:list-level-style-bullet text:level="1" text:bullet-char="•">
        <style:list-level-properties text:list-level-position-and-space-mode="label-alignment">
          <style:list-level-label-alignment text:label-followed-by="listtab" text:list-tab-stop-position="0.18in" fo:text-indent="-0.13in" fo:margin-left="0.18in"/>
        </style:list-level-properties>
        <style:text-properties fo:color="${CHARCOAL}"/>
      </text:list-level-style-bullet>
    </text:list-style>
  </office:styles>
  <office:automatic-styles>
    <style:page-layout style:name="pm1">
      <style:page-layout-properties fo:page-width="8.27in" fo:page-height="11.69in" style:print-orientation="portrait" fo:margin-top="0.55in" fo:margin-bottom="0.55in" fo:margin-left="0.55in" fo:margin-right="0.55in" fo:background-color="#ffffff"/>
    </style:page-layout>
  </office:automatic-styles>
  <office:master-styles>
    <style:master-page style:name="Standard" style:page-layout-name="pm1"/>
  </office:master-styles>
  <office:body>
    <office:text>
      ${body.join("\n      ")}
    </office:text>
  </office:body>
</office:document>
`;

/* ----------------------------- convert ---------------------------------- */

if (process.env.CV_DEBUG_FODT) {
  writeFileSync(process.env.CV_DEBUG_FODT, fodt, "utf8");
  console.log(`Debug FODT written to ${process.env.CV_DEBUG_FODT}`);
  process.exit(0);
}

const work = mkdtempSync(join(tmpdir(), "cv-pdf-"));
try {
  const fodtPath = join(work, "mohamed-yehia-cv.fodt");
  writeFileSync(fodtPath, fodt, "utf8");
  execFileSync(
    "soffice",
    ["--headless", "--norestore", "--convert-to", "pdf", "--outdir", work, fodtPath],
    { stdio: "inherit", env: { ...process.env, HOME: work } }
  );
  copyFileSync(join(work, "mohamed-yehia-cv.pdf"), OUT);
  console.log(`\nWrote ${OUT}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
