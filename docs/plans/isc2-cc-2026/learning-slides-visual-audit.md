# Task 59R — Learning Slides Visual & Experience Architecture Audit (Gate 1)

Date: 2026-10-24  
Project: ISC2 Certified in Cybersecurity (CC) — 2026 Exam Outline  
Module: Learning Slides System Overhaul (Task 59R — Gate 1 & Gate 2)

---

## 1. Executive Summary

Task 59 established the technical infrastructure and data pipeline for the Learning Slides module (catalog integration, loader, state management, progress tracking, and bilingual support). However, practical visual inspection revealed significant presentation defects that reduce educational effectiveness and fall short of the project's target presentation quality (comparable to Canva or modern slide decks).

The objective of Task 59R is to overhaul the presentation layer from a text-heavy document viewer into an engaging, structured educational presentation experience, while preserving 100% of the underlying state, progress, schema validation, and routing contracts.

This document fulfills **Gate 1** of Task 59R by auditing the root causes of the visual failures, documenting schema and renderer limitations, specifying the rich visual component architecture, and defining the bilingual and responsive layout strategy.

---

## 2. Root Cause Analysis of Visual Failures

| Defect Observed | Architectural Root Cause | Technical Failure Mechanism |
|---|---|---|
| **SVG diagram text overlap & clipping** | Fixed-coordinate SVG text nodes | `renderers.js` rendered flow steps using SVG `<rect>` and `<text>` elements at fixed absolute coordinates (`x = index * 200 + 87`, `y = 52`, box width 165px). In standard SVG, text does not auto-wrap or reflow. Strings longer than ~15 characters or multi-line Thai strings overflow the box and collide with neighboring nodes. |
| **Thai text overflowing diagram boxes** | Script height & tone marker metrics ignored | Thai script requires additional vertical clearance for above-consonant tone marks/vowels and below-consonant vowels. Fixed 70px height boxes clipped Thai ascenders/descenders. |
| **Internal scrollbars inside 16:9 canvas** | Excessive content density and absence of authoring budgets | Slides were authored with essay-length paragraphs or large tables. In `.learning-slide`, `aspect-ratio: 16 / 9; overflow-y: auto;` triggers vertical scrollbars whenever content exceeds available height, breaking the slide aesthetic. |
| **Doubled height in EN+TH bilingual mode** | Content authoring without bilingual length budgets | In `both` (EN+TH) mode, each paragraph and table cell renders two full strings. Without strict character budgets enforced during authoring, content that fits in English overflows severely in bilingual mode. |
| **Generic, document-like presentation** | Reliance on generic content blocks (`text`, `list`, `table`) | Slides 2, 6, and 7 relied on standard blog-like markup (dense tables, bullet points, `<details><summary>`), creating a wall of text rather than visually structured learning moments. |
| **Low-fidelity thumbnails** | Primitive text previews and placeholder glyphs | Thumbnails displayed truncated titles and ASCII art (`□ → □ → □`), providing no visual representation of the slide's conceptual structure. |
| **Fullscreen navigation interference** | Interactive elements lacking navigation exclusion | Clicking interactive elements inside fullscreen slides could accidentally trigger left/right half-slide navigation if not properly tagged with `[data-slide-interactive]`. |

---

## 3. Current Renderer and Schema Limitations

1. **Generic Block Paradigm (`slide.blocks`):**
   - The initial schema treated every slide as a vertical array of generic blocks (`text`, `list`, `table`, `diagram`, `reveal`, `media`).
   - While flexible, generic blocks cannot express specialized educational presentation compositions like three-pillar architectural comparisons, cascading incident sequence cards, or interactive dilemma decisions with side-by-side analysis.
2. **Lack of Authoring Budgets:**
   - The initial schema validated types and bilingual presence, but did not enforce character or word budgets. Authors could enter 500 characters where a slide only has visual space for 120.
3. **Absence of Dedicated Structured Component Renderers:**
   - Although `renderers.js` provided a plugin hook (`registerLearningRenderer`), no specialized presentation components were implemented. Everything fell back to basic DOM element generation.

---

## 4. Reusable Foundation & Contracts Preserved

The overhaul strictly preserves all existing architecture and behavioral contracts:

1. **Lesson Data in JSON:** All lesson content remains in pure, static JSON files (`lesson-d1-01-cia-triad.json`). No course content is hardcoded into JavaScript.
2. **Catalog & Routing:** `catalog.json`, lesson IDs (`lesson-d1-01-cia-triad`), objective mapping (`1.1`), and screen routing (`screen-learning-center.js`, `screen-learning-lesson.js`, `viewer.js`) remain untouched.
3. **Progress Persistence:** The `sec_cert_learning_progress_v1` LocalStorage contract, resume functionality, visited slides tracking, and explicit completion acknowledgment remain 100% intact.
4. **Language Switching:** Full runtime switching between `en`, `th`, and `both` (EN+TH) modes is preserved, keeping active slide position and focus.
5. **Fullscreen Behavior:** Fullscreen mode remains isolated to the presentation canvas with 16:9 aspect preservation, Escape exit, and left/right click navigation.
6. **Accessibility & Keyboard Navigation:** Left/Right arrows, `<` / `>`, Shift modifiers, tab focus, and screen-reader announcements remain active.
7. **Safe Rendering:** No `innerHTML` or `eval()`. All DOM construction uses safe native elements and trusted helper utilities.

---

## 5. Rich Visual Component Architecture

To replace fragile SVG coordinates and generic text walls, Task 59R introduces a **Structured Presentation Component Architecture**:

```
[Slide Data (JSON)]
      │
      ├── slide.rendererId: "pillars" | "incident-flow" | "scenario-decision"
      └── slide.visual: { ... validated structured fields ... }
              │
              ├── [Node / CI Validation] (js/core/learning-visuals.js)
              │       ├── Strict character budgets (BUDGETS)
              │       ├── Structure & tone validation (TONES)
              │       └── Derived semanticBlocks() for fallback & reading mode
              │
              └── [Browser Presentation Renderer] (js/ui/learning/visual-components.js)
                      ├── HTML/CSS Grid & Flexbox presentation layouts
                      ├── Color-coded tone accents (blue, emerald, amber)
                      ├── Interactive decision cards with [data-slide-interactive]
                      └── Mobile-responsive auto-reflow
```

### 5.1 Single Source of Academic Truth
To ensure reading mode, screen readers, and thumbnails do not require duplicated text authoring, `learning-visuals.js` provides `semanticBlocks(slide)`:
- If a slide defines `visual`, `semanticBlocks` derives standard `blocks` automatically.
- Reading mode (`data-mode="reading"`) and search/thumbnails use these blocks seamlessly.
- Authors only write the academic text once inside `slide.visual`.

### 5.2 The Three Gate 2 Component Renderers

#### A. Concept Overview — `pillars` (Slide 2)
- **Visual Goal:** Immediately communicate the three distinct pillars of the CIA Triad (Confidentiality, Integrity, Availability) as an interconnected security foundation.
- **Layout:** Three distinct architectural pillar cards arranged in a responsive grid, topped by a prominent symbol badge (`C`, `I`, `A`) with theme accents (Blue for Confidentiality, Emerald for Integrity, Amber for Availability).
- **Content Hierarchy:**
  1. Symbol Badge + Principle Name (Bilingual).
  2. Core Diagnostic Question (e.g. *"Who can see the data?"*).
  3. Security Objective & Safeguard Summary.
- **Anchor Footer:** A full-width foundational takeaway bar emphasizing that the three principles work together.

#### B. Incident Flow — `incident-flow` (Slide 6)
- **Visual Goal:** Illustrate multi-impact cascading incidents (using a hospital ransomware scenario) without broken SVG text or clipping.
- **Layout:** Pure HTML/CSS flex/grid sequence of 3 connected stages:
  1. **Phase 1: Exfiltration** → Impact on **Confidentiality** (Blue accent).
  2. **Phase 2: Lockout** → Impact on **Availability** (Amber accent).
  3. **Phase 3: Database Corruption** → Impact on **Integrity** (Emerald accent).
- **Visual Connecting Elements:** CSS-styled directional indicator arrows between cards.
- **Explicit Pedagogy:** Prominent notice clarifying that this is an *illustrative educational sequence*, not a universal attack pattern for all ransomware.
- **Exam Insight Bar:** Highlighting how exam questions test specific phases.

#### C. Interactive Scenario — `scenario-decision` (Slide 7)
- **Visual Goal:** A realistic decision-making scenario where learners diagnose the primary violated CIA principle before revealing the expert explanation.
- **Layout:**
  1. **Scenario Dossier:** Distinct narrative card detailing the disgruntled database administrator modifying inventory records.
  2. **Diagnostic Question:** Clear prompt asking which principle is directly breached.
  3. **Interactive Decision Cards:** Three selectable cards (Confidentiality, Integrity, Availability) styled with hover/focus states and marked with `data-slide-interactive` to prevent accidental fullscreen navigation.
  4. **Analysis Reveal:** When an option is selected or the reveal button is clicked, each option displays its precise verdict (*Directly Violated* vs. *Not Primary Harm* vs. *Unimpaired*) and source-grounded rationale.

---

## 6. Bilingual and Responsive Layout Strategy

### 6.1 Strict Authoring Budgets (Enforced via `learning-visuals.js`)
To guarantee that slides never overflow the 16:9 canvas in EN+TH mode:

| Component Field | English Max Chars | Thai Max Chars | Purpose |
|---|---|---|---|
| `term` | 32 | 40 | Pillar / Principle technical names |
| `question` | 48 | 60 | Diagnostic questions |
| `summary` | 90 | 110 | Core safeguard/objective explanations |
| `takeaway` | 120 | 150 | Bottom summary / exam tip |
| `lead` | 110 | 140 | Scenario intro text |
| `caseTitle` | 60 | 80 | Case study title |
| `stageLabel` | 28 | 40 | Flow step title |
| `event` | 110 | 130 | Incident event description |
| `impact` | 110 | 130 | Specific CIA impact description |
| `scenario` | 320 | 400 | Full scenario prompt text |
| `prompt` | 120 | 150 | Actionable question prompt |
| `verdict` | 28 | 40 | Status badge (e.g. Directly Violated) |
| `reason` | 140 | 160 | Option-level justification |

### 6.2 Responsive Composition
- **Desktop (16:9 Presentation):**
  - Uses CSS Grid (`grid-template-columns: repeat(3, 1fr)`) with `gap: clamp(12px, 1.5vw, 20px)`.
  - Font sizes scale smoothly using `clamp(0.85rem, 1.1vw, 1.05rem)`.
  - `overflow: hidden` on presentation canvas with zero internal scrollbars.
- **Mobile (< 640px):**
  - Automatically reflows from horizontal 3-column layouts into readable vertical card stacks.
  - Aspect ratio unclasps to `aspect-ratio: auto` allowing natural scrolling on narrow devices without shrinking text to unreadable microscopic sizes.
- **Bilingual Stacking:**
  - In `both` mode, English technical terms are prioritized with bold weight and theme color, followed immediately by natural Thai explanation text with appropriate line-height (`1.65`).

---

## 7. Gate 1 Conclusion & Transition to Gate 2

Gate 1 confirms that:
1. Root causes have been completely identified and addressed at the architectural level.
2. The schema extension is pure ESM data validation with zero dependencies.
3. Single-source academic derivation via `semanticBlocks` eliminates duplicate content maintenance.
4. Gate 2 implementation can proceed immediately to implement the three prototype slides (Slide 2, 6, 7).
