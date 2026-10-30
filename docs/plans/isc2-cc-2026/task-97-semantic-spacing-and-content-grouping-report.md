# Task 97 — ISC2 CC 2026 Reading Notes: Semantic Spacing, Vertical Rhythm & Content Grouping Architecture Report

**Date:** 2026-10-30  
**Repository:** `D:/_Coding/SEC-CERT-TEST`  
**Feature:** ISC2 CC 2026 — Reading Notes  
**Scope:** Universal Spacing System & Domain 1 Content Grouping  
**Status:** Completed & Fully Verified  

---

## Executive Summary

Task 97 establishes an intentional, mathematical **Semantic Spacing, Vertical Rhythm, and Content Grouping System** across the entire **ISC2 CC 2026 Reading Notes** feature.

Prior to this work, content elements suffered from inconsistent visual separation: introductory sentences floated midway between unrelated preceding text and the tables or diagrams they were meant to introduce, violating the **Law of Proximity**.

This task implemented:
1. An 8px/4px base grid spacing scale (`--space-2xs` to `--space-3xl`) in [`css/reading.css`](file:///d:/_Coding/SEC-CERT-TEST/css/reading.css).
2. Semantic introductory labels (`.reading-intro-label`) with a **3:1 proximity ratio** (24px separation from previous prose, 8px tight latching to the introduced table/grid/diagram/list).
3. First-class semantic content grouping (`.reading-content-group`, `.reading-table-group`, `.reading-calculation-box`, `.reading-example-box`).
4. Full audit and upgrade of all 5 Objectives (24 topic anchors) in [`content/isc2-cc-2026/reading/domain-1.md`](file:///d:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/reading/domain-1.md).
5. 100% test pass rate across all 192 automated checks with zero modifications to candidate source files, question banks, or quiz engines.

---

## 1. The Spacing Architecture & The Law of Proximity

Spacing in a technical textbook must communicate semantic relationship, not arbitrary white space. Related elements must appear visibly closer together than unrelated elements.

### A. Vertical Rhythm Tokens (4px / 8px Base Scale)
Defined in `:root` inside [`css/reading.css`](file:///d:/_Coding/SEC-CERT-TEST/css/reading.css):

```css
:root {
  --space-2xs: 4px;   /* Micro-spacing, badges, label icons */
  --space-xs:  8px;   /* Tight proximity (intro label to introduced table/grid/diagram) */
  --space-sm:  12px;  /* Heading to immediate introductory paragraph */
  --space-md:  16px;  /* Standard paragraph bottom margin & sibling scenario gap */
  --space-lg:  24px;  /* Topic sub-unit separation & table vertical margin */
  --space-xl:  32px;  /* Subtopic (H4) top margin & content group boundaries */
  --space-2xl: 44px;  /* Topic (H3) top margin & section dividers */
  --space-3xl: 60px;  /* Major Objective (H2) boundary separation */
}
```

### B. Proximity Ratio Hierarchy
| Boundary Level | Selector | Top Spacing (Above) | Bottom Spacing (Below) | Proximity Ratio | Visual Effect |
|---|---|---|---|---|---|
| **Major Objective** | `.reading-objective-section` | 60px (`--space-3xl`) | 32px (`--space-xl`) | `1.9 : 1` | Massive visual chapter break |
| **Topic Boundary** | `h3` | 44px (`--space-2xl`) | 12px (`--space-sm`) | `3.7 : 1` | Detaches from previous topic; binds to its lead text |
| **Subtopic Boundary** | `h4` | 32px (`--space-xl`) | 8px (`--space-xs`) | `4.0 : 1` | Strongly binds to its following content group |
| **Introductory Label** | `.reading-intro-label` | 24px (`--space-lg`) | 8px (`--space-xs`) | **`3.0 : 1`** | **Clearly signals ownership of the following table/diagram** |
| **Paragraph to List** | `.reading-body p + ul` | Default (16px) | 8px (via -8px top) | `2.0 : 1` | List pulls close to its introductory statement |
| **Content to Note** | `table/grid + blockquote` | Component end | 16px (`--space-md`) | `2.0 : 1` | Takeaway note stays grouped with its table |

---

## 2. Specific Resolution: Section 1.1.1 Terminology Introduction

### The Problem Identified by User
In `1.1.1 Core Security Concepts & Assets`, the introductory text:
> *"คำศัพท์รากฐานที่ต้องแยกความหมายให้ชัดเจน:"*

previously rendered as an ordinary `<p>` paragraph with an 18px margin, while the terminology table had a 24px top margin. As a result, the sentence sat 24px away from the table it introduced, but only 18px away from the unrelated InfoSec paragraph above it.

### The Resolution
1. **Semantic Label Structure:** Transformed into `<p class="reading-intro-label">` with an embedded SVG list icon:
   ```html
   <p class="reading-intro-label">
     <svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
     คำศัพท์รากฐานที่ต้องแยกความหมายให้ชัดเจน:
   </p>
   ```
2. **Typography & Proximity Styling:**
   ```css
   .reading-intro-label {
     font-size: 15px;
     font-weight: 600;
     color: var(--text);
     margin-top: var(--space-lg) !important;    /* 24px above */
     margin-bottom: var(--space-xs) !important; /* 8px below */
     display: flex;
     align-items: center;
     gap: 8px;
     break-after: avoid;
   }
   .reading-intro-label + .reading-table-wrapper {
     margin-top: var(--space-xs) !important;   /* 8px tight attachment */
   }
   ```
3. **Result:** The label is visibly separated from the InfoSec definition by 24px, and tightly joined to the terminology table by 8px (`3:1` proximity ratio).

---

## 3. Reusable Content Grouping Patterns

### Pattern 1: Section Heading + Introduction + Body
- `h3` (margin 44px above, 12px below) + lead sentence + core explanation.
- Heading has `break-after: avoid;` and `scroll-margin-top: 36px;` to prevent sticky navigation bar overlap.

### Pattern 2: Introductory Label + Table + Takeaway Note
- `.reading-intro-label` (margin 24px above, 8px below)
- `.reading-table-wrapper` (margin 8px above via sibling selector)
- `blockquote` (margin 16px above via `.reading-table-wrapper + blockquote`)
- All 3 elements form one coherent visual unit.

### Pattern 3: Formula Card + Worked Calculation Box
- Formula Card (`.reading-formula-card`)
- Worked Calculation Box (`.reading-calculation-box`):
  ```html
  <div class="reading-calculation-box">
    <div class="reading-calculation-title"><svg ...>ตัวอย่างการคำนวณ SLE:</div>
    <ul>
      <li>เซิร์ฟเวอร์มีมูลค่า ($AV$) = \$10,000</li>
      <li>หากน้ำท่วมห้องเซิร์ฟเวอร์ ประเมินว่าจะเสียหาย ($EF$) = 50% (0.50)</li>
      <li>$SLE = \$10,000 \times 0.50 = \$5,000$ ต่อครั้ง</li>
    </ul>
  </div>
  ```
- Calculation box sits tightly 8px below the formula card and groups the worked numbers in a dedicated panel.

### Pattern 4: Concept Title + Grid / Stack + Warning Trap
- `.reading-intro-label` (8px to grid)
- `.reading-concept-grid` or `.reading-response-grid`
- Dedicated Callout Box (`.reading-callout.warning` / `.reading-callout.danger`):
  - 16px top margin (`.reading-concept-grid + .reading-callout`)
  - Semantic left accent border (Amber `#f59e0b` or Rose `#ef4444`)
  - No inline ad-hoc styles.

### Pattern 5: Consecutive Sibling Scenarios
- `.reading-scenario-card + .reading-scenario-card`: Standardized to `margin-top: var(--space-md);` (16px) instead of random vertical margins.

---

## 4. Comprehensive Audit Across All 5 Domain 1 Objectives

| Section | Content Grouping Applied | Introductory Label / Semantic Upgrade | Proximity Relationship |
|---|---|---|---|
| **1.1.1** | Terminology Table + Threat Chain + Exam Caveat | `<p class="reading-intro-label">คำศัพท์รากฐานที่ต้องแยกความหมายให้ชัดเจน:</p>` | 24px above, 8px to table, 16px to threat chain diagram. |
| **1.1.2** | CIA Triad + Load Balancer + Scenario Comparison Table | `<p class="reading-intro-label">ตัวอย่างสถาปัตยกรรมเพิ่ม Availability:</p>` + `<h4 class="reading-subtopic-title">เปรียบเทียบ CIA จากสถานการณ์ข้อสอบ</h4>` | Diagram and table tightly latched to their headings; keyword tip 16px below table. |
| **1.1.3** | AAA Framework Lifecycle Diagram + Definitions | AAA diagram + Identification & Authentication definitions | Sequential lifecycle grouping. |
| **1.1.4** | MFA 4-Factor Concept Grid + Exam Trap | `<p class="reading-intro-label">ปัจจัยการพิสูจน์ตัวตนแบ่งออกเป็น 4 หมวดหลัก:</p>` + `.reading-callout.warning` | Label 8px to 4 cards; warning callout 16px below cards. |
| **1.1.5** | AAA 4-Step Summary Table | `<p class="reading-intro-label">สรุปคำถามหลักในข้อสอบสำหรับ 4 ขั้นตอน AAA:</p>` | 24px above, 8px to summary table. |
| **1.1.6** | Privacy Legal Roles & Data Flow Diagram | `<p class="reading-intro-label">บทบาทและแนวคิดสำคัญในกฎหมายคุ้มครองข้อมูลส่วนบุคคล (เช่น GDPR, PDPA):</p>` | 24px above, 8px to bullet list + privacy flow diagram. |
| **1.1.7** | Zero Trust & Defense in Depth 7-Layer Diagram | `<p class="reading-intro-label">สองแนวคิดทางสถาปัตยกรรมความปลอดภัยที่เสริมส่งซึ่งกันและกันแต่มีมุมมองที่ต่างกัน:</p>` + `<p class="reading-intro-label">ตัวอย่างสถาปัตยกรรมการวางชั้นป้องกัน (7 Security Layers):</p>` | 8px to concentric SVG diagram. |
| **1.2.1** | Risk Definition + Components List + Qualitative Formula | `<p class="reading-intro-label">องค์ประกอบของความเสี่ยง:</p>` + `<p class="reading-intro-label">สมการความเสี่ยงเชิงคุณภาพ (Qualitative Risk Formula):</p>` | Lists and formulas tightly grouped to labels. |
| **1.2.2** | Quantitative Variables + SLE / ALE Formulas + Calculation Pipeline | `<h4 class="reading-subtopic-title">ตัวแปรพื้นฐานในการคำนวณ</h4>` + 2 `.reading-calculation-box` walkthroughs + `<p class="reading-intro-label">ขั้นตอนและลำดับการคำนวณ (Calculation Pipeline):</p>` | Calculation boxes sit 8px below formula cards; pipeline diagram 8px below intro label. |
| **1.2.3** | Risk Lifecycle Diagram + 5-Step Continuous Process | Lifecycle diagram + 5 steps | Continuous feedback loop visual grouping. |
| **1.2.4** | Risk Treatment 4 Responses + Cyber Insurance Trap | `<p class="reading-intro-label">เมื่อประเมินความเสี่ยงแล้ว องค์กรต้องเลือกกลยุทธ์ในการจัดการความเสี่ยง 4 รูปแบบหลัก:</p>` + `.reading-callout.danger` | 8px to 4 cards; danger callout 16px below cards. |
| **1.2.5** | Inherent vs Residual Risk + Appetite vs Tolerance | Residual risk formula + worked example box | Narrative concept grouping. |
| **1.3.1** | Governance Direction & Oversight | `<p class="reading-intro-label">แกนหลักของ Governance:</p>` | Tight coupling to formula. |
| **1.3.2** | Laws & Regulations List | `<p class="reading-intro-label">ตัวอย่างสำคัญที่มักพบในสื่อการเรียนและการสอบ:</p>` | 8px to GDPR/HIPAA/PCI list. |
| **1.3.3** | Security Frameworks List | `<p class="reading-intro-label">ตัวอย่าง Framework ที่เป็นที่ยอมรับระดับสากล:</p>` | 8px to NIST/ISO/CIS list. |
| **1.3.4** | Document Hierarchy Pyramid + Table + Mnemonic | `<p class="reading-intro-label">ลำดับชั้นของเอกสารความปลอดภัยเป็นหัวข้อที่ออกสอบบ่อยมาก และต้องแยกหน้าที่ของเอกสารแต่ละระดับให้ชัดเจน:</p>` | Pyramid SVG + table + mnemonic form one coherent unit. |
| **1.3.5** | GRC Integration | 3 pillars definition + "Compliance $\neq$ Security" callout | Conceptual balance. |
| **1.4.1** | Security Control Categories 4 Cards | `<p class="reading-intro-label">การแบ่งหมวดหมู่ตามลักษณะของกลไกหรือสิ่งที่นำมาดำเนินการ:</p>` | 8px to 4 cards. |
| **1.4.2** | Security Control Functions Matrix + 7 Functions | `<p class="reading-intro-label">การแบ่งประเภทตามบทบาทหน้าที่ในการรับมือกับเหตุการณ์ (Timing & Purpose):</p>` | 8px to Functional Matrix SVG + detailed list. |
| **1.4.3** | Contextual Controls Analysis | `<p class="reading-intro-label">ตัวอย่างเปรียบเทียบการประยุกต์ใช้ตามบริบท:</p>` | 8px to CCTV & Firewall breakdown. |
| **1.5.1** | Authority Boundaries + Classic Administrator Example | `.reading-example-box` | Dedicated example container. |
| **1.5.2** | Due Care vs Due Diligence Operational Loop + Verbs Table | `<p class="reading-intro-label">วงจรการทำงานร่วมกันและตารางคำกริยาแยกแยะในข้อสอบ:</p>` | 8px to loop SVG and DO/CHECK table. |
| **1.5.3** | ISC2 Ethics Canons Precedence Stack + Mnemonic | `<p class="reading-intro-label">ประมวลจริยธรรม 4 ข้อตามลำดับความสำคัญก่อนหลัง (Strict Order of Precedence):</p>` | 8px to Precedence SVG and 4-tier stack. |
| **1.5.4** | 12 Distinctions + 8 Scenarios + Keyword Cheat Sheet | `<h4 class="reading-subtopic-title">` for each section + sibling spacing for scenario cards | Clear subtopic separation with tightly grouped internal cards. |

---

## 5. Automated Verification Results

All test suites were executed sequentially via the automated test runner:

| Test Suite | File Path | Total Tests | Passed | Failed | Status |
|---|---|---|---|---|---|
| **Presentation, Editorial & Spacing Suite** | [`tools/verify-reading-notes-domain1-presentation.mjs`](file:///d:/_Coding/SEC-CERT-TEST/tools/verify-reading-notes-domain1-presentation.mjs) | 167 | 167 | 0 | **PASS** |
| **Domain 1 Content Completeness Suite** | [`tools/verify-reading-notes-domain1.mjs`](file:///d:/_Coding/SEC-CERT-TEST/tools/verify-reading-notes-domain1.mjs) | 10 | 10 | 0 | **PASS** |
| **Reading Notes Foundation UI Suite** | [`tools/verify-reading-notes-foundation.mjs`](file:///d:/_Coding/SEC-CERT-TEST/tools/verify-reading-notes-foundation.mjs) | 9 | 9 | 0 | **PASS** |
| **Learning Integration Suite** | [`tools/verify-learning-integration.mjs`](file:///d:/_Coding/SEC-CERT-TEST/tools/verify-learning-integration.mjs) | 6 | 6 | 0 | **PASS** |
| **Total** | | **192** | **192** | **0** | **100% PASS** |

### Key Section 12 Assertions Verified:
- Vertical spacing tokens `--space-2xs` through `--space-3xl` verified in `css/reading.css`.
- 20 semantic introductory labels rendered across Domain 1 (well above the $\ge 10$ requirement).
- Specific requirement verified: *"คำศัพท์รากฐานที่ต้องแยกความหมายให้ชัดเจน:"* rendered with `.reading-intro-label`.
- Sibling proximity rules verified: `.reading-intro-label` tightly latched to tables, concept grids, response grids, diagram cards, formula cards, and bullet lists.
- Worked calculation boxes (`.reading-calculation-box`) active for SLE and ALE formulas.
- Conceptual example box (`.reading-example-box`) active for Administrator authority boundaries.
- Standardized warning and danger callout styles active.
- Non-breaking block rules (`break-inside: avoid;`) verified.

---

## 6. Reusability Playbook for Domains 2–5

When authoring and styling study notes for Domains 2, 3, 4, and 5:

1. **Always Use `.reading-intro-label` Before Complex Elements:**
   - Never place a bare paragraph immediately above a table, grid, or diagram.
   - Wrap the introductory sentence in `<p class="reading-intro-label"><svg class="reading-label-icon" ...>Label text:</p>`.
   - The CSS sibling selector will automatically enforce the tight 8px proximity.
2. **Package Worked Problems in `.reading-calculation-box`:**
   - For MTTR, MTBF, RTO, RPO, or BCP calculations in Domain 2, use `.reading-calculation-box` with an embedded title and bullet points with escaped currency symbols (`\$`).
3. **Use `.reading-example-box` for Scenario Walkthroughs:**
   - When providing a concrete enterprise example, wrap it in `<div class="reading-example-box">` to create immediate visual grouping without heavy card wrappers.
4. **Maintain Consistent Subtopic Headers:**
   - Use `<h4 class="reading-subtopic-title">` for subsections; sibling rules ensure it sits tightly (8px) above its first card, table, or list, and comfortably separated (32px) from previous content.
5. **Rely on the Unified Vertical Tokens:**
   - Never write arbitrary pixel margins (`margin-top: 17px;`). Always reference `var(--space-*)` tokens to maintain strict vertical rhythm across the entire platform.

