# Reading Notes Domain 1: Unresolved Fixes & Implementation Verification Audit

**Audit Date:** 2026-10-30  
**Target Feature:** ISC2 CC 2026 → Reading Notes → Domain 1: Security Principles (Objectives 1.1–1.5)  
**Methodology:** Live Browser CDP Inspection (Headless Chrome), Computed CSS & DOM Geometry Measurements, Theme Contrast Analysis, Screenshot Capture, and Regression Test Analysis.

---

## 1. Executive Summary

A comprehensive, evidence-based audit was conducted across all previously reported visual defects in Domain 1 Reading Notes. The live application served in the browser was audited across desktop viewports (1366×768 and 1920×1080), themes (Dark and Light), and sidebar configurations (Expanded and Collapsed).

### Audit Status Scorecard (Post-Remediation Verification)
- **Total Checklist Items:** 10 (Items A through J)
- **PASS:** 10 items (100%)
- **FAIL (Unresolved Defects):** 0 items (0%)
- **NOT VERIFIED:** 0 items (0%)

---

## 2. Comprehensive Verification Checklist & Results

| Item ID | Previous Requested Behavior | Current Observed Behavior | Status | Evidence (Screenshot & DOM/CSS) | Root Cause | Exact File & Selector | Recommended Minimal Fix | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **A. MFA Cards (1.1.4)** | Icon, number, English title & Thai subtitle inline on desktop; vertically centered; subtle 1px border; 0px excess top void. | Verified inline on same horizontal line (`gap: 8px`); 0.0px vertical center deviation between icon, number, and title group; 1px border; 0px top margin void. | **PASS** | `artifacts/qa/domain1-unresolved-audit/mfa-cards-1366-dark-expanded.png`<br>`titleRect.top === subRect.top`, `gap: 8.0px`, `titleMarginTop: '0px'` | Correctly implemented in Task 118 via `.reading-mfa-title-group { display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap; }`. | `css/reading.css`<br>`.reading-mfa-title-group` | None needed. | Low (Resolved) |
| **B. Security Control Timeline (1.4.2)** | High-contrast BEFORE/DURING/AFTER badges (no blue-on-gray); readable Thai text; Overlap caption without overflow. | Verified: Badges have 7.15:1 (Light) / 10.36:1 (Dark) contrast (WCAG AAA); Titles have 17.85:1 / 17.20:1; Thai text has 10.35:1 / 14.60:1; Caption is semantic HTML with 0px overflow. | **PASS** | `artifacts/qa/domain1-unresolved-audit/control-timeline-1366-dark-expanded.png`<br>Contrast ratios >= 7.0:1 across all elements. | Overhauled in Task 119: expanded viewBox to 850×155, widened cards to 260px, replaced banner with `.reading-timeline-caption`. | `js/core/diagram-generator.js`<br>`css/reading.css`<br>`.reading-timeline-caption` | None needed. | Low (Resolved) |
| **C. Document Hierarchy Diagram (1.3.4)** | Complete Policy, Standard, Procedure, Guideline text; no clipped descriptions; readable Guideline caption; correct pyramid alignment. | **PASS (Remediated in Task 121):** Symmetrical 2-column layout in SVG `viewBox="0 0 860 260"`. Left: 4-tier centered pyramid (`x=20` to `x=400`, center `x=210`); Right: 4 structured explanation cards (`x=425`, width `415px`) connected via dashed lines. All 16 text elements terminate >= 58px before SVG right boundary. Guideline tier has dedicated 50px card. 0 clipped text across all viewports/themes. | **PASS** | `artifacts/qa/domain1-unresolved-audit/doc-hierarchy-1366-dark-expanded.png`<br>`viewBox: "0 0 860 260"`, `svgRight: 1274.5px`, max text right: `1216.6px` (58px margin). 0 clipped texts. | Previously cramped 720px viewBox with text placed at x=610. Rebuilt layout with balanced 860px viewBox, dedicated cards, and theme-adaptive tokens. | `js/core/diagram-generator.js`<br>`documentHierarchy`<br>`css/reading.css`<br>`.diag-doc-card` | Resolved. | Low (Resolved) |
| **D. Document Hierarchy Table (1.3.4)** | No mid-word wrapping of `Mandatory` or `Procedure`; consistent bilingual term presentation; adequate column widths; no overflow. | **PASS (Remediated in Task 121):** Mid-word wrapping 100% eliminated. All 8 bilingual technical terms render on exactly 1 line (`isMultiline: false`, height 20.52px). Column 1 width = 167.8px (min 145px); Column 3 width = 158.4px (min 140px). Contained horizontal table scroll on small screens. | **PASS** | `artifacts/qa/domain1-unresolved-audit/doc-hierarchy-1366-dark-expanded.png`<br>DOM: `enTerms.every(t => !t.isMultiline) === true`. Col 1: 167.8px, Col 3: 158.4px. | Added `.reading-bilingual-term .reading-term-en { white-space: nowrap; word-break: normal; }` and balanced column min-widths for the Document Hierarchy table. | `css/reading.css`<br>`.reading-bilingual-term .reading-term-en`<br>`.reading-table th:nth-child(1), td:nth-child(1)` | Resolved. | Low (Resolved) |
| **E. General Bilingual Terminology Tables** | English technical term on line 1; Thai translation on line 2; bold English; applied only to genuine bilingual cells. | Verified: 25 bilingual cells across Tables 1, 4, 5 all render with `.reading-term-en` on line 1 and `.reading-term-th` on line 2; bold formatting preserved; non-bilingual cells protected. | **PASS** | `artifacts/qa/domain1-unresolved-audit/audit-inspection.json`<br>`count: 25`, `allStacked: true`, `allBold: true`. | Reusable parser function `formatBilingualTermCell()` in `js/core/markdown-parser.js` cleanly generates 2-line structure. (Note: Item D mid-word wrap is a CSS table column width issue, not a parser issue). | `js/core/markdown-parser.js`<br>`formatBilingualTermCell` | None needed for general tables; fix Item D column widths. | Low (Resolved) |
| **F. Paragraph Alignment and Width** | Domain intro, Objective intro, and body prose use coherent width rules; consistent left alignment; natural text wrapping. | Verified: `.reading-lead`, Objective 1.1 intro, body prose, tables, and diagrams all share identical left content coordinate (`left: 386.0px`); widths expand to 100% of reading measure. | **PASS** | `artifacts/qa/domain1-unresolved-audit/audit-inspection.json`<br>DOM: `lead.left === 386.0`, `obj1.left === 386.0`, `table1.left === 386.0`. | Correctly unified in Task 114 via `--reading-prose-max-width: 100%` and `.reading-body .reading-lead` specificity protection. | `css/reading.css`<br>`.reading-lead`<br>`.reading-article-markdown > p` | None needed. | Low (Resolved) |
| **G. Review Scenario Cards (1.5.4)** | Single subtle outer border; no thick blue/green accent bars; no nested gray answer box; clear Situation, Question, Answer grouping. | Verified: All 8 cards have single 1px border; blue left accent border removed; nested gray answer background removed; green accent border removed; clear semantic structure. | **PASS** | `artifacts/qa/domain1-unresolved-audit/distinction-matrix-1366-dark-expanded.png`<br>`hasBlueAccent: false`, `hasGreenBorder: false`, `hasNestedGrayBg: false`. | Correctly simplified in Task 113 via `.reading-scenario-card` and `.reading-scenario-answer` clean horizontal divider. | `css/reading.css`<br>`.reading-scenario-card`<br>`.reading-scenario-answer` | None needed. | Low (Resolved) |
| **H. Ethics Mnemonic (1.5.3)** | S-A-P-P bold blue; initial letters S, A, P, P of explanatory words bold blue; remaining text normal color and weight. | Verified: Exactly 5 `.reading-mnemonic-highlight` elements (`S - A - P - P` and initial `S`, `A`, `P`, `P`) styled with `color: var(--blue)` and `font-weight: 700`; rest of text normal weight/color. | **PASS** | `artifacts/qa/domain1-unresolved-audit/audit-inspection.json`<br>`count: 5`, `color: 'rgb(58, 134, 255)'`, `fontWeight: '700'`. | Correctly scoped in Task 112 via `<strong class="reading-mnemonic-highlight">` inline markup. | `css/reading.css`<br>`.reading-mnemonic-highlight`<br>`content/isc2-cc-2026/reading/domain-1.md` | None needed. | Low (Resolved) |
| **I. Concept Distinctions Matrix (1.5.4)** | Label on own line; description begins below; no trailing colon; consistent across all 12 cards. | Verified: All 12 cards (24 terms) have term displayed on distinct line (`display: block`, `margin-bottom: 4px`); description starts below; trailing colons removed from all terms. | **PASS** | `artifacts/qa/domain1-unresolved-audit/distinction-matrix-1366-dark-expanded.png`<br>12/12 cards verified; terms display block with 401px width. | Correctly refined in Task 110 via `<strong class="reading-distinction-term">` and `.reading-distinction-desc`. | `content/isc2-cc-2026/reading/domain-1.md`<br>`css/reading.css` | None needed. | Low (Resolved) |
| **J. Floating Scroll Navigation** | At top: down arrow scrolls to bottom; scrolled: up arrow scrolls to top; targets article scrolling context; hidden on non-scrollable domains. | Verified: State 1 (top): "Go to bottom" with downward arrow; State 2 (scrolled): "Back to top" with upward arrow; targets window/article scroll; hidden on Domains 2–5. | **PASS** | `artifacts/qa/domain1-unresolved-audit/audit-inspection.json`<br>Interactive CDP test: top -> down icon; 600px scroll -> up icon. | Implemented in Task 117 via `#btn-reading-scroll-nav` and reactive scroll/ResizeObserver state machine. | `js/ui/screen-reading.js`<br>`css/reading.css` | None needed. | Low (Resolved) |

---

## 3. Deep Dive: Investigation of the 2 Unresolved Defects

### Defect 1: Item C — Security Document Hierarchy Diagram (Section 1.3.4)

#### Visual Evidence
- **Screenshot:** `artifacts/qa/domain1-unresolved-audit/doc-hierarchy-1366-dark-expanded.png`
- **Computed Bounding Box Measurements:**
  - SVG Container Rendered Width: `760.0px`
  - Right coordinate of SVG container: `1224.5px`
  - Tier 1 Text Right Coordinate: `1235.5px` → **11.0px clipped**
  - Tier 2 Text Right Coordinate: `1310.6px` → **86.1px clipped**
  - Tier 3 Text Right Coordinate: `1358.6px` → **134.1px clipped**

#### Root Cause Analysis
In `js/core/diagram-generator.js` lines 462–489:
```html
<svg viewBox="0 0 720 250" class="reading-diagram-svg" ...>
  <!-- Tier 1: Policy -->
  <polygon points="360,20 280,75 440,75" class="diag-pyramid-tier diag-pyramid-t1" />
  <text x="360" y="55" class="diag-text-title diag-text-light" text-anchor="middle">POLICY</text>
  <text x="460" y="52" class="diag-tier-desc">WHAT & WHY · ระดับสูงสุด บังคับใช้ (Mandatory)</text>

  <!-- Tier 2: Standard -->
  <polygon points="275,80 205,135 515,135 445,80" class="diag-pyramid-tier diag-pyramid-t2" />
  <text x="360" y="112" class="diag-text-title diag-text-light" text-anchor="middle">STANDARD</text>
  <text x="535" y="112" class="diag-tier-desc">MANDATORY SPECIFICATIONS · กฎเกณฑ์ขั้นต่ำ</text>

  <!-- Tier 3: Procedure -->
  <polygon points="200,140 125,195 595,195 520,140" class="diag-pyramid-tier diag-pyramid-t3" />
  <text x="360" y="172" class="diag-text-title diag-text-light" text-anchor="middle">PROCEDURE</text>
  <text x="610" y="172" class="diag-tier-desc">HOW · ขั้นตอนปฏิบัติทีละสเต็ป (Mandatory)</text>

  <!-- Tier 4: Guideline -->
  <polygon points="120,200 45,245 675,245 600,200" class="diag-pyramid-tier diag-pyramid-t4" />
  <text x="360" y="227" class="diag-text-title diag-text-light" text-anchor="middle">GUIDELINE</text>
  <text x="360" y="240" class="diag-text-sub" text-anchor="middle">SHOULD · คำแนะนำ ยืดหยุ่น ไม่บังคับ (Discretionary)</text>
</svg>
```
1. The SVG `viewBox` width is constrained to `720`.
2. The pyramid polygon for Tier 3 extends from `x=125` to `x=595`.
3. The description for Tier 3 is placed at `x="610"`.
4. In font `'Noto Sans Thai', sans-serif` at 12.5px (`.diag-tier-desc`), `"HOW · ขั้นตอนปฏิบัติทีละสเต็ป (Mandatory)"` is `250.2px` wide.
5. `610 + 250.2 = 860.2`. Because the SVG viewBox ends at 720, **140.2 units of text extend outside the viewBox**.
6. The SVG element has default `overflow: hidden`, so any text past 720 is immediately clipped by the browser.

---

### Defect 2: Item D — Security Document Hierarchy Table (Section 1.3.4)

#### Visual Evidence
- **Screenshot:** `artifacts/qa/domain1-unresolved-audit/doc-hierarchy-1366-dark-expanded.png`
- **Computed Geometry Measurements:**
  - Table Total Width: `915.0px`
  - Column 1 Width: `90.2px` (Usable content width after 32px padding = `58.2px`)
  - Column 2 Width: `386.3px` (42.2% of table)
  - Column 3 Width: `96.5px` (Usable content width after 32px padding = `64.5px`)
  - Column 4 Width: `342.0px` (37.4% of table)
  - Text Wrapping Status:
    - `"Mandatory"` (width = 64.5px): Rendered Height = `41.03px` (2 lines, expected line-height 20.5px) → **Wraps as `Man-` `datory`**
    - `"Standard"` (width = 58.2px): Rendered Height = `41.03px` (2 lines) → **Wraps as `Stan-` `dard`**
    - `"Procedure"` (width = 58.2px): Rendered Height = `41.03px` (2 lines) → **Wraps as `Proce-` `dure`**
    - `"Guideline"` (width = 58.2px): Rendered Height = `41.03px` (2 lines) → **Wraps as `Guide-` `line`**
    - `"Advisory"` (width = 64.5px): Rendered Height = `41.03px` (2 lines) → **Wraps as `Advi-` `sory`**

#### Root Cause Analysis
1. In `css/reading.css` line 1716:
   ```css
   .reading-table th,
   .reading-table td {
     border-bottom: 1px solid var(--line);
     padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
     text-align: left;
     vertical-align: top;
     word-break: break-word; /* <-- Allows hyphenation / mid-word breaking anywhere */
     overflow-wrap: break-word;
   }
   ```
2. The HTML table has `table-layout: auto` and no column width classes or min-widths defined.
3. The browser's automatic layout algorithm distributes width based on raw content length: Columns 2 and 4 have long sentences and consume 728px out of 915px (80%), squeezing Column 1 down to 90px and Column 3 down to 96px.
4. Each cell has horizontal padding of `16px * 2 = 32px` (`var(--table-cell-padding-x)`).
5. The remaining usable text width is only 58.2px in Column 1 and 64.5px in Column 3.
6. Because `word-break: break-word;` is active and `.reading-term-en` does not have `white-space: nowrap;`, single Latin technical terms are forcibly hyphenated and split mid-word into two lines.

---

## 4. Why Earlier Automated Tests Did Not Catch Visible Problems

1. **String / Markup Checks vs. Computed Layout Checks:**
   - Previous tests in `tools/verify-reading-notes-domain1-presentation.mjs` and `tools/verify-bilingual-table-cells.mjs` operated in a Node environment using string regex assertions.
   - For Item C, the test asserted:
     `assert(diagrams[key].includes('<svg') && diagrams[key].includes('</svg>'))`
     The text strings `"WHAT & WHY · ระดับสูงสุด บังคับใช้ (Mandatory)"` and `"HOW · ขั้นตอนปฏิบัติทีละสเต็ป"` existed inside the SVG markup string, so the test reported `PASS`. However, in a real browser rendering engine, the text coordinates (`x="610"`) placed it 140px outside the SVG viewport bounds.
   - For Item D, the test asserted:
     `assert(cell.includes('<span class="reading-term-en"><strong>Mandatory</strong></span>'))`.
     This passed because the markup was generated correctly. But because JSDOM does not compute font bounding boxes, column widths, or line wrapping, it could not detect that the browser wrapped `Mandatory` as `Man-` `datory`.
2. **Narrow Scope of Recent Tasks:**
   - Recent tasks (Tasks 110–118) focused narrowly on specific requested areas (MFA card layout, Ethics mnemonic highlighting, Distinction matrix colons, Fluid layout width, Floating scroll button).
   - Items C and D were authored in Tasks 95/96 and were never subject to geometry-based visual regression tests.

---

## 5. Live Server & Source Asset Verification

- **Live Server Status:** The dev server correctly serves the actual, current source files from `D:\_Coding\SEC-CERT-TEST` without caching or stale bundler state.
- **Verification of Recent Tasks:**
  - Task 118 (MFA card inline layout) is 100% active in the live browser: `isInline: true`, `gap: 8.0px`, centered.
  - Task 119 (Control timeline diagram) is 100% active in the live browser: WCAG AAA contrast, semantic HTML caption, 0px overflow.
  - Task 117 (Floating scroll navigation) is 100% active in the live browser: toggles smoothly between down and up arrows based on scroll position.

---

## 6. Recommended Remediation Order & Action Plan

When authorized by human review, the two unresolved defects should be addressed in the following sequence:

### Step 1: Fix Item D — Security Document Hierarchy Table Wrapping (Quick, High-Impact)
1. **In `css/reading.css`:**
   - Add `white-space: nowrap;` and `word-break: normal;` to `.reading-bilingual-term .reading-term-en` to strictly forbid mid-word wrapping of technical terms.
   - Define minimum column widths on `.reading-table`:
     ```css
     .reading-table .col-doc-type,
     .reading-table th:first-child,
     .reading-table td:first-child {
       min-width: 130px;
       white-space: nowrap;
     }
     .reading-table .col-enforcement,
     .reading-table th:nth-child(3),
     .reading-table td:nth-child(3) {
       min-width: 120px;
       white-space: nowrap;
     }
     ```
2. **Verification:** Inspect rendered table in headless Chrome CDP to confirm `isMultiline: false` for `Mandatory`, `Procedure`, `Standard`, `Guideline`, and `Advisory`.

### Step 2: Fix Item C — Security Document Hierarchy Diagram SVG Layout
1. **In `js/core/diagram-generator.js` (`documentHierarchy`):**
   - Expand SVG `viewBox` from `0 0 720 250` to `0 0 880 260` (or `860 260`) to match the generous container width established in Task 119.
   - Shift the pyramid coordinates slightly left (e.g. center pyramid around `x=300` or `x=320`) and place descriptions with generous width from `x=460` to `x=840`, ensuring all text terminates comfortably before the right viewBox edge.
   - Separate `GUIDELINE` and its subtitle at the base with proper vertical spacing (y=218 and y=242) and distinct contrast.
2. **In `css/reading.css`:**
   - Add `.reading-diagram-card[data-diagram="documentHierarchy"] .reading-diagram-svg { max-width: 860px; width: 100%; }`.
3. **Verification:** Measure `text.getBoundingClientRect().right < svg.getBoundingClientRect().right` across all tiers in headless Chrome CDP.

---

## 7. Remediation Results & Final Verification Status

- **Initial Audit Result:** 8 PASS, 2 FAIL (Item C and Item D).
- **Remediation Implemented (Task 121):**
  - **Item D (Table):** Added `.reading-bilingual-term .reading-term-en { white-space: nowrap; word-break: normal; }` and balanced column min-widths (`th:nth-child(1)` 145px, `th:nth-child(3)` 140px). Mid-word wrapping completely eliminated across all 8 terms (`isMultiline: false`, height 20.52px).
  - **Item C (Diagram):** Redesigned SVG pyramid into a 2-column layout in `viewBox="0 0 860 260"`. 4-tier centered pyramid on left (`x=210`), 4 structured explanation cards (`415px` wide) on right linked by dashed connectors. Base Guideline tier has its own dedicated card. All 16 text elements terminate >= 58px inside SVG bounds. Zero clipped text.
- **Verification:** Verified via live headless Chrome CDP across 4 configurations (1366×768 and 1920×1080, Light and Dark themes, Expanded and Collapsed sidebar states), plus 17 automated test suites (874 checks total).
- **Final Audit Scorecard:** **10 PASS, 0 FAIL, 0 NOT VERIFIED (100% PASS)**.
- **Status:** **Ready for Human Visual Acceptance**.

