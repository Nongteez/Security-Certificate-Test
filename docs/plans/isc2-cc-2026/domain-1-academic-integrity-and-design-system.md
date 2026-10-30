# ISC2 CC 2026 Reading Notes — Academic Integrity & Reusable Reading Design System

**Date:** 2026-10-30  
**Feature:** ISC2 CC 2026 — Reading Notes  
**Scope:** Reusable Reading Design System for Domains 1–5  
**Status:** Certified & Active in Production

---

## 1. Academic Review & Technical Findings

### 1.1 Academic Integrity Standards
All educational assertions across the Reading Notes are verified against official ISC2 exam requirements, NIST Special Publications, and relevant ISO standards.

| Syllabus Area | Academic Verification Standard | Key Academic Ruling & Findings |
|---|---|---|
| **Security Control Taxonomy** | NIST SP 800-53 Rev. 5, ISC2 CC 2026 Outline | **Categories vs. Functions:** Category defines *what the mechanism is* (Technical, Managerial, Operational, Physical). Function/Type defines *what role it performs* (Deterrent, Preventive, Detective, Corrective, Compensating, Directive, Recovery). A control has both (e.g., CCTV is Physical Category + Deterrent/Detective Type). |
| **Authentication & AAA** | NIST SP 800-63B | **Multi-Factor vs. Multi-Credential:** MFA strictly requires 2 or more *independent* factor categories (Something You Know, Have, Are, Somewhere). Password + PIN is Multi-Credential (both Knowledge), NOT MFA. Password + Fingerprint is MFA. |
| **Quantitative Risk Formulas** | NIST SP 800-30 Rev. 1 | $SLE = AV \times EF$ and $ALE = SLE \times ARO$. $ARO$ for multi-year events must be fractional ($1/5 = 0.2$). Cost-benefit rule dictates $\text{Safeguard Cost} \le ALE$. |
| **Risk Treatment** | ISO 31000 / NIST SP 800-37 | Avoidance (terminate activity), Mitigation (apply controls), Transfer/Sharing (cyber insurance, contracts), Acceptance (retain risk when $Cost > ALE$). **Cyber insurance transfers only financial impact**, never the technical flaw or customer trust. |
| **Due Care vs. Due Diligence** | Common Law "Prudent Person", ISC2 CC | **Due Care = DO / Take Action** (patching, implementing MFA, firewalls). **Due Diligence = CHECK / Investigate / Assess** (scanning, risk assessments, vendor security reviews). |
| **Zero Trust vs. Defense in Depth** | NIST SP 800-207 | **Zero Trust** is an access philosophy ("Never Trust, Always Verify", micro-segmentation). **Defense in Depth** is a multi-layered architectural defense strategy (People to Resilience). |
| **ISC2 Code of Ethics** | ISC2 Official Bylaws | **Strict Order of Precedence:** Canon 1 (Society) $\to$ Canon 2 (Act honorably) $\to$ Canon 3 (Principals) $\to$ Canon 4 (Profession). Society supersedes employer obligations in case of conflict. In Canon 2, honor and honesty precede legal compliance. |
| **Privacy Roles & Rights** | EU GDPR 2016/679 | Data Subject, Data Controller (determines purpose/means), Data Processor (acts on instructions). Data Ownership does not grant unrestricted rights over Personal Data. Right to be Forgotten is subject to statutory retention exceptions. |

### 1.2 Unresolved Academic Issues Flagged for Human Review
1. **Ransomware Classification in CIA Triad:** While ransomware predominantly causes denial of access (**Availability** impact), double-extortion tactics also threaten **Confidentiality** (data leak threats) and system state (**Integrity**). The Reading Notes explicitly alert students that question context determines whether Availability or Confidentiality is the intended answer.
2. **Contextual Controls (CCTV & Firewalls):** Because a single tool functions differently depending on operational context (e.g., visible cameras deter; recorded feeds detect), exam questions require analyzing the *verb and scenario intent* rather than memorizing rigid tool-to-type pairs.

---

## 2. Reusable Reading Design System Architecture

To ensure high visual quality and maintainability across **Domains 2–5**, the design system establishes standardized semantic components, typography rules, layout tokens, and mathematical typesetting standards.

```
                           +----------------------------------------+
                           |       Vanilla Markdown Source          |
                           |   (content/isc2-cc-2026/reading/*.md)  |
                           +----------------------------------------+
                                               |
                                               v
                           +----------------------------------------+
                           |        markdown-parser.js              |
                           |  - Semantic Heading Anchors            |
                           |  - KaTeX / MathML Renderer             |
                           |  - SVG Diagram Replacement Hooks       |
                           |  - Safe HTML Passthrough Whitelist     |
                           |  - Clean Table Formatter               |
                           +----------------------------------------+
                                               |
                                               v
                           +----------------------------------------+
                           |          css/reading.css               |
                           |  - Adaptive Screen & Prose Measures    |
                           |  - Vertical Rhythm Tokens (4px/8px)    |
                           |  - Law of Proximity Sibling Selectors  |
                           |  - Reusable Component Library          |
                           |  - Table Typography Design Tokens      |
                           +----------------------------------------+
                                               |
                                               v
                           +----------------------------------------+
                           |    Rendered Technical Textbook (DOM)   |
                           |  - Smooth Sticky Navigation            |
                           |  - Continuous-Scroll Experience        |
                           |  - Fully Accessible & Dark/Light Themed|
                           +----------------------------------------+
```

---

## 3. Semantic Content Model & Component Catalog

Rather than treating every line as unstructured Markdown, the Reading Notes utilize an explicit **Semantic Content Model**:

### 3.1 Reusable Component Catalog for Domains 1–5

| Component Class | Semantic Purpose | Structural HTML Pattern |
|---|---|---|
| **ConceptCardGrid** (`.reading-concept-grid`) | Categorical models with 3–4 items (e.g., 4 Control Categories, 4 MFA Factors) | `<div class="reading-concept-grid"><div class="reading-concept-card"><div class="reading-concept-header"><svg class="reading-concept-icon">...</svg><h4 class="reading-concept-title">...</h4></div><p class="reading-concept-desc">...</p><div class="reading-concept-examples">...</div></div>...</div>` |
| **ResponseGrid** (`.reading-response-grid`) | Multi-strategy response frameworks (e.g., 4 Risk Treatments: Avoid, Mitigate, Transfer, Accept) | `<div class="reading-response-grid"><div class="reading-response-card avoid"><div class="reading-response-header"><h4>...</h4><span class="reading-response-badge">...</span></div><p>...</p><div class="reading-response-keywords">...</div></div>...</div>` |
| **ConceptItem** (`.reading-concept-item`) | Detailed definition with explanatory prose replacing pseudo-bullets | `<div class="reading-concept-item"><h5 class="reading-concept-heading">Concept Title</h5><p>Explanatory paragraph...</p></div>` |
| **PrecedenceStack** (`.reading-precedence-stack`) | Tiered hierarchies and order-of-precedence rules (e.g., ISC2 Ethics Canons) | `<div class="reading-precedence-stack"><div class="reading-precedence-card tier-1"><div class="reading-precedence-header"><h4>Canon 1</h4><span class="reading-precedence-badge">Precedence 1</span></div><p>...</p></div><div class="reading-precedence-divider">▼ Supersedes if in conflict</div>...</div>` |
| **DistinctionGrid** (`.reading-distinction-grid`) | High-yield comparative distinction pairs (e.g., 12 Concept Distinctions) | `<div class="reading-distinction-grid"><div class="reading-distinction-card"><div class="reading-distinction-header"><span>Term A vs. Term B</span></div><div class="reading-distinction-body"><div class="reading-distinction-point"><strong>Term A:</strong> ...</div><div class="reading-distinction-point"><strong>Term B:</strong> ...</div></div></div>...</div>` |
| **ScenarioCard** (`.reading-scenario-card`) | Case studies and review scenarios with verified rationale | `<div class="reading-scenario-card" data-scenario="N"><div class="reading-scenario-header"><span class="reading-scenario-badge">Scenario N</span><span class="reading-scenario-topic">Topic</span></div><div class="reading-scenario-context">...</div><div class="reading-scenario-question">...</div><div class="reading-scenario-answer"><div class="reading-scenario-answer-label">เฉลยและเหตุผล:</div><p>...</p></div></div>` |
| **FormulaCard** (`.reading-formula-card`) | Quantitative calculations and mathematical relationships | `<div class="reading-formula-card"><div class="reading-formula-header"><span class="reading-formula-title">...</span><span class="reading-formula-badge">...</span></div><div class="reading-formula-equation">$Formula$</div><div class="reading-formula-vars"><div class="reading-formula-var">...</div></div></div>` |
| **CalculationBox** (`.reading-calculation-box`) | Step-by-step worked numerical walkthroughs | `<div class="reading-calculation-box"><div class="reading-calculation-title"><svg>...</svg>ตัวอย่างการคำนวณ:</div>...</div>` |
| **WarningGroup** (`.reading-warning-group`) | Shared exam traps with single header icon and dashed dividers | `<div class="reading-callout warning"><div class="reading-callout-header"><svg class="reading-callout-icon">...</svg><span>ข้อควรระวังสำหรับข้อสอบ</span></div><div class="reading-warning-group"><div class="reading-warning-item"><h5 class="reading-concept-heading">Trap 1</h5><p>...</p></div><div class="reading-warning-item"><h5 class="reading-concept-heading">Trap 2</h5><p>...</p></div></div></div>` |
| **IntroductoryLabel** (`.reading-intro-label`) | Semantic topic labels enforcing tight sibling proximity to tables/grids | `<p class="reading-intro-label"><svg class="reading-label-icon">...</svg>คำอธิบายนำ:</p>` |
| **TableWrapper & Note** (`.reading-table-wrapper`, `.reading-table-note`) | Responsive data tables with balanced header hierarchy and academic footnotes | `<div class="reading-table-wrapper"><table class="reading-table">...</table></div><p class="reading-table-note">*หมายเหตุ: ...*</p>` |

---

## 4. Typography & Vertical Spacing Tokens

### 4.1 CSS Design Tokens in `css/reading.css`
```css
:root {
  /* Layout Sizing Tokens */
  --reading-screen-max-width: 1560px;
  --reading-article-max-width: 1080px;
  --reading-prose-max-width: 780px;
  --reading-component-max-width: 1040px;

  /* Vertical Rhythm Tokens (4px / 8px Base Grid) */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 44px;
  --space-3xl: 60px;

  /* Table Typography & Visual Hierarchy Tokens */
  --table-header-font-size: 0.94rem;
  --table-header-font-weight: 700;
  --table-body-font-size: 0.92rem;
  --table-body-line-height: 1.65;
  --table-cell-padding-y: 12px;
  --table-cell-padding-x: 16px;
  --table-row-hover-bg: rgba(99, 102, 241, 0.04);
}
```

### 4.2 Law of Proximity Sibling Rules
```css
/* Tight proximity between intro labels and their content */
.reading-intro-label + .reading-table-wrapper { margin-top: var(--space-xs); }
.reading-intro-label + .reading-concept-grid { margin-top: var(--space-xs); }
.reading-intro-label + .reading-response-grid { margin-top: var(--space-xs); }
.reading-intro-label + .reading-diagram-card { margin-top: var(--space-xs); }
.reading-intro-label + .reading-formula-card { margin-top: var(--space-xs); }
.reading-intro-label + ul,
.reading-intro-label + ol { margin-top: var(--space-xs); }

/* Distant separation between major sections */
.reading-objective-section + .reading-divider,
hr.reading-divider {
  border: none;
  border-top: 1px solid var(--line);
  margin: var(--space-2xl) 0 var(--space-xl);
}
```

---

## 5. Mathematical & Diagrammatic Rendering Engine

1. **KaTeX Integration & Fallback:** Math expressions (`$...$` and `$$...$$`) are rendered via `js/core/math-renderer.js`. If KaTeX is available, it produces accessible MathML and styled HTML; otherwise, it degrades gracefully to semantic `<var class="math-var">` and `<span class="math-operator">` with `role="math"` and accessible `aria-label`s. Zero raw LaTeX escapes leak into visible text.
2. **12 Semantic SVG Conceptual Diagrams:** Hand-crafted, responsive SVG diagrams (`js/core/diagram-generator.js`) replacing all raw ASCII art and code fences. Each diagram includes `role="img"`, descriptive `aria-label`, scalable `viewBox`, and dark/light adaptive fills.

---

## 6. Blueprint for Extending to Domains 2–5

When integrating study notes for Domains 2, 3, 4, and 5:
1. **Source Audit First:** Read all candidate Markdown files and transcripts completely; map concepts against the official exam outline before writing code.
2. **Apply Semantic Components:** Structure categorical groups as `.reading-concept-grid`, processes as sequential `<ol>`, formulas as `.reading-formula-card`, and action pairs as `.reading-distinction-grid`.
3. **Use Markdown Markup for Emphasis:** Do not hardcode column indices; use `**bold**` for key terms and `*italic*` for exam clues.
4. **Follow the Sibling Proximity Convention:** Precede every table or diagram with a `.reading-intro-label` for smooth instructional flow.
5. **Verify Against the Regression Suite:** Ensure all existing suites pass with 100% success rate before declaring completion.

