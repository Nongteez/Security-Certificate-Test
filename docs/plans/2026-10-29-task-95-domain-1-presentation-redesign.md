# Task 95 — Full Domain 1 Semantic & Educational Presentation Redesign Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Execute this plan in single-flow mode following `.agent/skills/single-flow-task-execution/SKILL.md`.

**Goal:** Transform the raw Markdown Domain 1 reading notes into a polished, readable, visually meaningful technical textbook experience with rendered mathematics, professional SVG conceptual diagrams, structured review scenarios, and clean editorial typography while strictly preserving all original educational content.

**Architecture:** 
- Robust semantic Markdown parser (`markdown-parser.js`) with dedicated math rendering (`math-renderer.js`) supporting KaTeX with fallback semantic typesetter.
- Reusable, accessible inline SVG diagrams for all 12 conceptual architectures/flows (CIA Triad, Defense in Depth, Risk Calculation, AAA, Document Hierarchy, etc.).
- Structured Scenario Presentation components (Scenario + Question + Answer/Reasoning).
- Scoped textbook styling in `css/reading.css` respecting existing dark/light tokens.
- Complete content preservation of `content/isc2-cc-2026/reading/domain-1.md` with 24 verified topic anchors.

**Tech Stack:** Vanilla JavaScript (ESM), SVG, KaTeX (with fallback typesetter), CSS Custom Properties, Node.js test suites.

---

### Task 1: Semantic Content Inventory & Traceability Matrix
- **Files:** `docs/plans/isc2-cc-2026/domain-1-presentation-audit.md`
- **Action:** Audit all 5 objectives (1.1–1.5), classify every block (definitions, controls, comparisons, formulas, diagrams, scenarios), verify mathematical values and deduplications, and document transformation strategy.

### Task 2: Math Renderer & Markdown Parser Architecture
- **Files:** `js/core/math-renderer.js`, `js/core/markdown-parser.js`, `index.html`
- **Action:**
  - Build `math-renderer.js` to parse and typeset formulas ($SLE = AV \times EF$, $ALE = SLE \times ARO$, $Risk \approx Likelihood \times Impact$, ARO fractions, monetary values).
  - Add optional KaTeX CSS/JS to `index.html` with graceful fallback to built-in semantic math formatter.
  - Fix markdown parser: prevent lists from absorbing indented code blocks, math blocks, and diagrams; eliminate leaked fences (` ```text `).

### Task 3: Visual Conceptual Diagrams (Case A, Case B & Architecture Flows)
- **Files:** `js/core/diagram-generator.js`, `content/isc2-cc-2026/reading/domain-1.md`
- **Action:**
  - Replace primitive ASCII diagrams with accessible, theme-adaptive visual SVGs:
    1. Threat & Control Chain (1.1.1)
    2. CIA Triad Conceptual Diagram (Case A - 1.1.2)
    3. Redundancy & Load Balancer Architecture (1.1.2)
    4. AAA Identity Lifecycle Process Flow (1.1.3)
    5. Privacy Governance & Roles Flow (1.1.6)
    6. Defense in Depth 7 Concentric/Stacked Layers (Case B - 1.1.7)
    7. Quantitative Risk Calculation Pipeline (Case C - 1.2.2)
    8. 4-Stage Risk Management Lifecycle (1.2.3)
    9. Security Document Hierarchy Pyramid (1.3.4)
    10. Security Control Function Timeline (1.4.2)
    11. Due Diligence $\leftrightarrow$ Due Care Cycle (1.5.2)
    12. ISC2 Code of Ethics 4 Canons Priority Flow (1.5.3)

### Task 4: Scenario-Question-Answer Presentation & Concept Distinctions (Case D)
- **Files:** `content/isc2-cc-2026/reading/domain-1.md`, `js/core/markdown-parser.js`
- **Action:**
  - Structure the 8 Review Scenarios into cohesive Scenario Cards (Scenario Context + Exam Question + Verified Answer/Reasoning).
  - Render answers open by default for reading without quiz mechanics.
  - Refine 12 Concept Distinctions Matrix and Exam Keyword Cheat Sheet.

### Task 5: CSS Design & Typography Modernization
- **Files:** `css/reading.css`
- **Action:**
  - Add textbook editorial typography, balanced margins, math formula display cards, scenario callouts, diagram containers, and responsive scaling.
  - Verify seamless dark and light mode contrast.

### Task 6: Consolidated Domain 1 Content Update & Navigation Reconciliation
- **Files:** `content/isc2-cc-2026/reading/domain-1.md`, `content/isc2-cc-2026/reading/domain-1.js`
- **Action:**
  - Apply semantic annotations and clean formatting across all 5 objectives.
  - Verify and reconcile 24 topic anchors (7+5+5+3+4 = 24) across content, data module, and sidebar navigation.

### Task 7: Comprehensive Automated Quality Assurance Suite
- **Files:** `tools/verify-reading-notes-domain1-presentation.mjs`, `tools/verify-reading-notes-domain1.mjs`
- **Action:**
  - Build automated test suite validating Case A (CIA Triad SVG), Case B (Defense in Depth 7 layers, no leaked fences), Case C (Math typesetting, formulas, zero raw LaTeX commands), Case D (8 Scenario cards with Question/Answer pairs), all 12 diagrams, 24 topic anchors, and security escaping.
  - Execute existing regression suites (`verify-reading-notes-domain1.mjs`, `verify-reading-notes-foundation.mjs`, `verify-learning-integration.mjs`).

### Task 8: Tracker Update & Delivery Report
- **Files:** `docs/plans/task.md`, `docs/plans/isc2-cc-2026/task-95-domain-1-presentation-redesign-report.md`
- **Action:**
  - Update `task.md` live table tracker with Task 95 completion.
  - Compile comprehensive 12-section delivery report.

