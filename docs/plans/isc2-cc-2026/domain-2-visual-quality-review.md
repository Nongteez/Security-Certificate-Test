# ISC2 CC 2026 — Domain 2 Learning Slides: Visual Quality Review & Desktop Design Specification

- **Domain:** Domain 2 — Security Governance (`17.3%` Exam Weight; Objectives `2.1`–`2.4`)
- **Exam Outline:** `isc2-cc-2026-09-01` (Effective September 1, 2026)
- **Role:** Engineering & Academic Review Agent Visual QA Analysis
- **Status:** Complete — Pending Human Review
- **Mandate:** Strictly Audit & Planning Only (Zero production code modifications)

---

## 1. Visual Benchmark: Domain 1 vs. Domain 2 Comparative Analysis

To understand why the current Domain 2 visual quality is unsatisfactory, we conducted a side-by-side comparative architectural review between **Domain 1 (the accepted repository standard)** and **Domain 2 (current state)**:

| Visual & UX Dimension | Domain 1 (Gold Standard) | Domain 2 (Current Implementation) | Remediation Mandate for Recovery |
|---|---|---|---|
| **Visual Variety & Archetypes** | **High & Purposeful:** Employs multiple distinct visual archetypes: character-driven scenarios (`v3-access-person`), document cards (`v3-payroll-document`), multi-column comparison tables, SVG pyramids, and structured safeguard footers. | **Monotonous & Repetitive:** Lessons 3–8 rely almost exclusively on a single layout: 2 or 3 white text cards connected by Unicode arrows (`→`), creating visual fatigue and a wireframe appearance. | Introduce 5 distinct visual archetypes (Timeline, Concentric Scopes, Grid Matrix, Split Hierarchy, Interactive Scenario) tailored to governance concepts. |
| **Desktop Canvas Utilization (1920×1080 & 1366×768)** | **Balanced & Engaging:** Content spans proportional desktop columns (60–85% effective visual fill). Generous padding is balanced by meaningful visual anchors, badges, and illustrations. | **Barren ("Ocean of White"):** Content occupies only ~25–35% of the 16:9 canvas. Vast empty spaces surround tiny, low-contrast text cards, lacking eye direction or focal points. | Establish desktop grid containers with maximum widths, dynamic column balancing, and rich visual groupings that eliminate dead whitespace. |
| **Diagrammatic Depth (Vector SVG)** | **Rich & Scalable:** Custom SVG illustrations for the CIA Triad, Document Hierarchy, and Security Controls with crisp rendering across all resolutions. | **Absent / Primitive:** Complex spatial relationships (e.g., RTO/RPO timeline, BC vs DR scope) are rendered using basic CSS border boxes with raw Unicode characters. | Author scalable, accessible SVG components for the RTO/RPO timeline and the concentric BC vs. DR relationship (`DR ⊂ BC`). |
| **Typography & Hierarchy** | **Refined & Expressive:** Clear typographical hierarchy with high contrast titles, supportive subtitles, styled badges, and high-readability body copy. | **Cramped & Undifferentiated:** Relies on generic clamp formulas in `domain2-lesson-shell.css` that produce visually identical card headers (`.d2s-term`) across completely different concepts. | Implement structured typography tokens with distinct visual weights for titles, section headers, technical definitions, and operational notes. |
| **Color Palette & Theme Contrast** | **Theme-Harmonized:** Balanced dark/light palette with sophisticated blue, indigo, and slate accents (`var(--blue-bg)`, `var(--panel-hover)`). | **Jarring Pure White Canvas:** Hardcodes `background: #fff; color: #142d45;` on the slide canvas, causing harsh visual glare when navigating from dark theme shell views. | Support harmonious theme tokens with gentle off-white/slate backgrounds in light mode and proper dark theme presentation rendering. |

---

## 2. Evidence-Backed Visual Defect Catalog

### Defect 1: The "Ocean of White" (L3–L8)
- **Visual Evidence:** In `css/learning-domain2-lesson-shell.css`, `.learning-slide .d2s-scene` applies `padding: 3.3cqw 4.2cqw`. Inside `.d2s-main`, there are often only two `.d2a-item` cards (such as L5 Slide 4).
- **User Impact:** On a 1920×1080 monitor, the student sees a small cluster of text in the upper-left or center, surrounded by approximately 1,200 vertical pixels of blank white space. The presentation appears incomplete, as if assets failed to load.
- **Root Cause:** Lack of minimum container sizing, absence of visual background accents, and lack of secondary supporting visual elements.

### Defect 2: Box-and-Arrow Wireframe Redundancy
- **Visual Evidence:**
  - L3 Slide 2: `[Flood] → [Inaccessible] → [Alternate Workplace]`
  - L3 Slide 4: `[Contracts] → [Same Route] → [Failure]`
  - L5 Slide 1: `[Unexpected Request] → [Check Policy] → [Use Channel]`
  - L5 Slide 3: `[Email Arrives] → [Team Makes Reporting Normal]`
  - L5 Slide 4: `[Written Policy] → [Management Follows Too]`
  - L7 Slide 1: `[Business Question] → [Defined Evidence] → [Responsible Action]`
- **User Impact:** The slides look like raw presentation outlines or wireframe mockups rather than finished, published interactive courseware.

### Defect 3: Low Contrast & Text Collision Risks in Mobile Reflow
- **Visual Evidence:** When viewports scale down to container widths below 800px, multi-column arrow grids (`grid-template-columns: 1fr .12fr 1fr .12fr 1fr`) collapse to `grid-template-columns: 1fr`, causing Unicode arrows (`→`) to point downward awkwardly without proper spacing.

---

## 3. Desktop Layout Specifications for the 5 Governance Archetypes

To achieve visual parity with Domain 1, all 55 slides in Domain 2 will be mapped to one of **5 Core Visual Archetypes**:

```
+---------------------------------------------------------------------------------+
| ARCHETYPE 1: TIMELINE & RECOVERY RUNWAY (e.g., L4 S4 RTO/RPO)                   |
| - Full-width SVG timeline with explicit time markers, target bands, and legend   |
+---------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------+
| ARCHETYPE 2: CONCENTRIC SCOPE & VENN (e.g., L4 S8 BC vs DR Scope)                |
| - Nested vector containers visually demonstrating DR is a critical subset of BC |
+---------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------+
| ARCHETYPE 3: MULTI-COLUMN COMPARISON MATRIX (e.g., L1 S3, L4 S6, L7 S6)         |
| - Balanced 2- or 3-column structured cards with colored theme borders & badges  |
+---------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------+
| ARCHETYPE 4: COMPONENT REPOSITORY & CHECKLIST (e.g., L2 S3, L3 S2, L3 S3)       |
| - Dense, scannable grid showing complete 8 disruptions / 8 BCP elements         |
+---------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------+
| ARCHETYPE 5: INTERACTIVE GOVERNANCE SCENARIO (e.g., L1 S6, L2 S7, L3 S6)        |
| - Split layout: Left column = Enterprise scenario card; Right = 4 interactive   |
|   decision buttons with immediate, dignified diagnostic feedback                |
+---------------------------------------------------------------------------------+
```

### Detailed Archetype Specifications:

#### Archetype 1: Timeline & Recovery Runway (RTO / RPO)
- **Target Slide:** `lesson-d2-04-disaster-recovery-drp` Slide 4 (`slide-04-rto-and-rpo-timelines`).
- **Visual Layout:**
  - ViewBox: `0 0 960 380` (pure vector SVG).
  - Horizontal baseline with three major event nodes:
    1. **Node 1 (Left):** Last Valid Backup (`16:30`). Amber/yellow accent line backward to Disaster Event represents the **RPO (Recovery Point Objective = 30 min maximum allowable data loss)**.
    2. **Node 2 (Center):** Disaster / System Crash (`17:00`). Bold red disaster marker with pulse outline.
    3. **Node 3 (Right):** Target Operational Recovery (`18:00`). Blue accent line forward represents the **RTO (Recovery Time Objective = 1 hour maximum allowable downtime)**.
    4. **Actual Recovery Indicator:** A separate marker at `17:45` demonstrating that the organization met its RTO and RPO targets.
  - Sub-cards below the SVG provide real-world context for database administrators and business process owners.

#### Archetype 2: Concentric Scope & Venn (`DR ⊂ BC`)
- **Target Slide:** `lesson-d2-04-disaster-recovery-drp` Slide 8 (`slide-08-bc-versus-dr-relationship`).
- **Visual Layout:**
  - Outer Container: **Business Continuity (BC)** — large, rounded, soothing blue container representing organization-wide operational resilience (people, facilities, suppliers, communications).
  - Inner Nested Container: **Disaster Recovery (DR)** — prominent nested container representing the IT-focused restoration of systems, servers, applications, and data.
  - Visual Equation Banner: `DR ⊂ BC` ("Disaster Recovery is the technical engine supporting Business Continuity").
  - Side-by-side dimension comparison table (Focus, Scope, Goal, Trigger, Metric) below the diagram.

#### Archetype 3: Multi-Column Comparison Matrix
- **Target Slides:**
  - `slide-04-grc-frameworks` (NIST CSF vs ISO 27001 vs COBIT)
  - `slide-06-recovery-site-strategies` (Hot vs Warm vs Cold Sites)
  - `slide-06-interpretation-and-indicator-role` (KRI vs KPI)
- **Visual Layout:**
  - Proportional 3-column CSS Grid (`grid-template-columns: repeat(3, 1fr); gap: 24px;`).
  - Each column features:
    - Distinctive Header Badge with theme accent (e.g., Red for Hot Site, Amber for Warm Site, Slate for Cold Site).
    - Readiness Timeline Indicator (Minutes vs Hours vs Days/Weeks).
    - Cost vs Capability Rating Bar.
    - Bulleted operational realities.

#### Archetype 4: Full Component Grid (Restoring Omitted Curriculum)
- **Target Slides:**
  - `slide-02-eight-disruption-triggers` (Restoring all 8 source disruption triggers).
  - `slide-03-bcp-and-eight-elements` (Restoring all 8 BCP core elements).
  - `slide-01-awareness-to-safe-action` (Restoring all 5 awareness purposes).
  - `slide-03-shared-daily-culture` (Restoring all 6 culture behaviors).
  - `slide-04-leadership-makes-rules-credible` (Restoring all 6 leadership responsibilities).
- **Visual Layout:**
  - Responsive 2×4 or 2×3 Card Matrix (`grid-template-columns: repeat(4, 1fr); gap: 16px;`).
  - Each card contains:
    - Numbered badge / icon token.
    - Bold primary term in English & Thai.
    - Concise 1-sentence real-world explanation.
  - Result: 100% of the course notes are visible, scannable, and memorable in Presentation Mode.

#### Archetype 5: Interactive Governance Decision Layout
- **Target Slides:** All 8 scenario slides (`L1 S6`, `L2 S7`, `L3 S6`, `L4 S9`, `L5 S6`, `L6 S8`, `L7 S7`, `L8 S6`).
- **Visual Layout:**
  - Desktop 2-Column Split (`grid-template-columns: 1.1fr 1fr; gap: 32px; align-items: start;`).
  - **Left Column:** Enterprise Scenario Briefing Card (Title, context paragraph, key operational constraints).
  - **Right Column:**
    - 4 Stacked Option Buttons (`A`, `B`, `C`, `D`) with generous touch targets (min-height 52px), distinct borders, and hover glow.
    - Responsive Diagnostic Feedback Box below or beside options, providing dignified educational explanations of why the chosen approach is recommended or what critical governance principle it overlooks.

---

## 4. Typography & Container Scaling Tokens

To eradicate the "Ocean of White" without overflowing the 16:9 canvas, Domain 2 will adopt calibrated container-query tokens:

```css
:root {
  /* Domain 2 Calibrated Layout Tokens */
  --d2-canvas-max-width: 1440px;
  --d2-canvas-min-aspect: 16 / 9;
  --d2-card-bg-light: #ffffff;
  --d2-card-border-light: #e2e8f0;
  --d2-card-hover-border: #3b82f6;
  
  /* Typography Scale */
  --d2-font-slide-title: clamp(26px, 2.5cqw, 42px);
  --d2-font-slide-lead: clamp(16px, 1.35cqw, 22px);
  --d2-font-card-title: clamp(18px, 1.4cqw, 24px);
  --d2-font-card-body: clamp(14px, 1.1cqw, 18px);
  --d2-font-card-note: clamp(12.5px, 0.95cqw, 15px);
  --d2-font-badge: clamp(11px, 0.85cqw, 13px);
  
  /* Line Heights */
  --d2-line-title: 1.25;
  --d2-line-body: 1.55;
}
```

---

*End of Visual Quality Review & Desktop Design Specification.*

