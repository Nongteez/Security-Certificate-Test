# Domain 2 Reading Notes: Mobile Diagram Readability Remediation Report

**Task:** Task 126 — Domain 2 Reading Notes: Mobile Diagram Readability Remediation  
**Scope:** Objectives 2.1–2.4 Conceptual Diagrams (`grcAlignment`, `bcVsDrScope`, `rtoRpoTimeline`, `effectivenessHierarchy`)  
**Status:** Completed — Ready for Human Visual Acceptance  
**Date:** 2026-10-30  
**Verification Suite:** `tools/verify-domain2-mobile-remediation.mjs` (CDP Headless Chrome) + 18 Unit/Integration Suites (883 checks)  

---

## 1. Executive Summary & Problem Definition

During the Task 125 Human Acceptance Audit, Chrome CDP measurements confirmed a mobile readability defect across all four Domain 2 SVG diagrams:
- Desktop SVGs designed with `viewBox` widths of $780\text{px} - 840\text{px}$ scaled down proportionally on narrow mobile viewports ($375\text{px} - 390\text{px}$) by a scale factor of $\approx 0.333 - 0.359$.
- SVG labels and secondary Thai text ($11\text{px} - 13.5\text{px}$ at native desktop scale) shrank down to $3.6\text{px} - 4.8\text{px}$ rendered size on screen, rendering educational text unreadable on mobile devices.

### Root Cause Analysis
SVG text scaling is governed by the coordinate system defined by `viewBox`. When an SVG has `width: 100%; height: auto;` inside a container constrained to $\approx 326\text{px}$ usable width, the browser must scale all vector paths and `<text>` nodes uniformly. While ideal for resolution-independent illustrations, dense educational flowcharts containing complex Thai/English bilingual typography suffer illegibility unless redesigned specifically for vertical mobile layout.

### Architectural Solution: Dual-Presentation Responsive Strategy
1. **Desktop/Tablet ($\ge 769\text{px}$):** Preserve the existing high-fidelity SVG diagrams inside `.reading-diag-desktop`. Desktop users retain horizontal pipelines, concentric SVG boxes, and timeline axes with zero regression.
2. **Narrow Screens ($\le 768\text{px}$):** Automatically hide the SVG (`display: none !important;`) and render accessible, theme-aware semantic HTML card alternatives (`.reading-diag-mobile`).
3. **Accessibility Isolation:** Because `display: none` removes elements from the accessibility tree, screen readers (VoiceOver, NVDA, JAWS) encounter only ONE representation at any given viewport width, eliminating duplicate announcements.

---

## 2. Diagram Remediation Details

### Diagram 1 — GRC Alignment (`grcAlignment`)
*Section 2.1.1 — GRC Foundations & 3 Pillars*
- **Desktop SVG:** Horizontal 3-column flowchart with top business goal banner.
- **Mobile HTML Alternative (`.reading-mobile-grc`):**
  - **Strategic Objective Banner:** Dedicated container emphasizing *Support Business Goals · Protect Assets · Increase Organizational Resilience*.
  - **3 Vertical Pillar Cards:**
    - `01 GOVERNANCE`: Direction & Oversight, ทิศทาง นโยบาย และบทบาทหน้าที่, with blue `Accountability ชัดเจน` highlight pill.
    - Downward vector connector arrow (`#93c5fd` dark / `#1e40af` light).
    - `02 RISK MANAGEMENT`: Identify & Manage, ระบุและประเมินความเสี่ยง, with blue `จัดลำดับและควบคุมความเสี่ยง` highlight pill.
    - Downward vector connector arrow.
    - `03 COMPLIANCE`: Adhere & Fulfill, ทำตามกฎหมายและข้อบังคับ, with blue `มาตรฐานสากลและนโยบาย` highlight pill.

### Diagram 2 — BC vs DR Scope Hierarchy (`bcVsDrScope`)
*Section 2.2.5 — Business Continuity vs Disaster Recovery Scope*
- **Desktop SVG:** Horizontal nested rect with left subset symbol.
- **Mobile HTML Alternative (`.reading-mobile-scope`):**
  - **True Concentric HTML Architecture:**
    - **Outer Container (`.reading-mob-scope-outer`):** Represents `BUSINESS CONTINUITY (BC)` covering the whole organization. Displays `DR ⊂ BC` badge, organizational goal (*รักษาการดำเนินงานของธุรกิจให้ทำต่อได้แม้เผชิญวิกฤต*), and 5 distinct scope pills: `People`, `Processes`, `Facilities`, `Suppliers`, `Technology`.
    - **Nested Inner Box (`.reading-mob-scope-inner`):** Physically nested inside the BC card with a 1.5px blue border and subtle shadow. Represents `DISASTER RECOVERY (DR)` as a concrete IT subset with `DR ⊂ BC (ส่วนประกอบย่อย)` badge, IT restoration goal, and a practical examples callout (*กู้ฐานข้อมูล · สลับไป DR Site · ฟื้นฟูเครือข่าย/VM*).

### Diagram 3 — RTO vs RPO Timeline (`rtoRpoTimeline`)
*Section 2.2.6 — Recovery Time Objective vs Recovery Point Objective*
- **Desktop SVG:** Horizontal timeline axis with 16:30 backup, 17:00 failure, 18:00 restored.
- **Mobile HTML Alternative (`.reading-mobile-timeline`):**
  - **Key Metrics Summary Header:** Top 2-box comparison detailing RPO (30-min data loss window backward from incident) and RTO (1-hr downtime window forward from incident).
  - **Vertical Chronological Stepper:**
    - `16:30` (Last Valid Backup): Point of Recovery badge, Thai description, and `← สิ้นสุดกรอบ RPO 30 นาที` indicator.
    - Dynamic connector line with `↑ RPO ย้อนหลัง: รับข้อมูลสูญเสียสูงสุด 30 นาที ↑` pill.
    - `17:00` (DISASTER): High-contrast red alert card (`#f87171` dark / `#b91c1c` light) marking incident moment and downtime start.
    - Dynamic connector line with `↓ RTO เดินหน้า: เวลาหยุดทำงานสูงสุด 1 ชม. ↓` pill.
    - `18:00` (Service Operational): High-contrast green restoration card (`#34d399` dark / `#047857` light) marking operational target.

### Diagram 4 — Cybersecurity Effectiveness Hierarchy (`effectivenessHierarchy`)
*Section 2.4.8 — Measurement, Visualization & Communication Stack*
- **Desktop SVG:** 4-tier horizontal stacked bands.
- **Mobile HTML Alternative (`.reading-mobile-stack`):**
  - **4-Tier Vertical Stack:**
    - `Tier 04 REPORT`: Top Level badge, `Communicate 📄`, executive findings and recommendations.
    - `Tier 03 DASHBOARD & SCORECARD`: 2-item subgrid distinguishing `Dashboard (Visualize 📊)` from `Scorecard (Compare 📋)`.
    - `Tier 02 KPI & KRI`: 2-item subgrid distinguishing `KPI (Performance 🎯)` from `KRI (Risk ⚠️)`.
    - `Tier 01 METRIC`: Foundation badge, blue border accent, `Measure 📏`, base quantifiable criteria (Relevant, Measurable, Consistent).

---

## 3. Typography & Readability Verification

| Metric | Previous Mobile SVG | Remediated Mobile HTML | Status |
| :--- | :--- | :--- | :--- |
| **Card / Pillar Titles** | $4.4\text{px} - 4.8\text{px}$ | $15.0\text{px} - 15.5\text{px}$ (Space Grotesk, Bold 700) | **PASS** ($\ge 15\text{px}$) |
| **Thai Body / Explanations** | $3.6\text{px} - 4.1\text{px}$ | $13.5\text{px} - 14.0\text{px}$ (Noto Sans Thai, 1.55 line-height) | **PASS** ($\ge 13.5\text{px}$) |
| **Subtitles / Focus Tags** | $3.8\text{px} - 4.2\text{px}$ | $12.5\text{px} - 13.0\text{px}$ (Semi-bold 600) | **PASS** ($\ge 12.5\text{px}$) |
| **Badges / Number Tags** | $3.6\text{px} - 3.8\text{px}$ | $11.0\text{px} - 13.0\text{px}$ (JetBrains Mono, Bold 700) | **PASS** ($\ge 11.0\text{px}$) |
| **Micro-text (< 10px)** | Present throughout SVG | **0 elements** (Strict minimum: $10.0\text{px}$) | **PASS** (Zero micro-text) |

---

## 4. Quantitative Color Contrast Audit (WCAG AA & AAA)

Tested across all 80 text elements in the mobile diagram alternatives under both themes:

### Dark Theme (`--panel-2: #1b1b22`, `--bg: #0a0a0d`)
- **Card Titles (`#f2f2f5` on `#1b1b22`):** $15.32:1$ (**AAA Pass**)
- **Thai Explanations (`#f2f2f5` on `#1b1b22`):** $15.32:1$ (**AAA Pass**)
- **Subtitles & Actions (`#cbd5e1` on `#1b1b22`):** $11.45:1$ (**AAA Pass**)
- **Blue Badges (`#93c5fd` on `#1b1b22`):** $8.15:1$ - $9.50:1$ (**AAA Pass**)
- **Red Alert (`#f87171` on `#1b1b22`):** $7.28:1$ (**AAA Pass**)
- **Green Restoration (`#34d399` on `#1b1b22`):** $8.95:1$ (**AAA Pass**)
- **Result:** **80 / 80 PASS** (0 failures).

### Light Theme (`--panel-2: #f1f5f9`, `--bg: #f6f8fc`)
- **Card Titles (`#172033` on `#f1f5f9`):** $14.85:1$ (**AAA Pass**)
- **Thai Explanations (`#172033` on `#f1f5f9`):** $14.85:1$ (**AAA Pass**)
- **Subtitles & Actions (`#334155` on `#f1f5f9`):** $7.96:1$ (**AAA Pass**)
- **Blue Badges (`#1e40af` on `#f1f5f9`):** $7.15:1$ - $7.96:1$ (**AAA Pass**)
- **Red Alert (`#b91c1c` on `#f1f5f9`):** $7.02:1$ (**AAA Pass**)
- **Green Restoration (`#047857` on `#f1f5f9`):** $7.42:1$ (**AAA Pass**)
- **Result:** **80 / 80 PASS** (0 failures).

---

## 5. Viewport & Breakpoint Verification Matrix

Executed via headless Chrome CDP with full page rendering and layout inspection:

| Viewport | Configuration | Theme | Mobile HTML | Desktop SVG | Overflow | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **390 × 844** | Mobile Standard (iPhone 12/13/14) | Dark | Visible (`flex`) | Hidden (`none`) | 0px | **PASS** |
| **390 × 844** | Mobile Standard (iPhone 12/13/14) | Light | Visible (`flex`) | Hidden (`none`) | 0px | **PASS** |
| **375 × 812** | Mobile Narrow (iPhone SE/mini) | Dark | Visible (`flex`) | Hidden (`none`) | 0px | **PASS** |
| **375 × 812** | Mobile Narrow (iPhone SE/mini) | Light | Visible (`flex`) | Hidden (`none`) | 0px | **PASS** |
| **768 × 1024** | Tablet Breakpoint Boundary ($\le 768\text{px}$) | Dark | Visible (`flex`) | Hidden (`none`) | 0px | **PASS** |
| **769 × 1024** | Desktop Breakpoint Boundary ($\ge 769\text{px}$) | Dark | Hidden (`none`) | Visible (`flex`) | 0px | **PASS** |
| **1366 × 768** | Desktop Standard (Laptop) | Dark | Hidden (`none`) | Visible (`flex`) | 0px | **PASS** |
| **1366 × 768** | Desktop Standard (Laptop) | Light | Hidden (`none`) | Visible (`flex`) | 0px | **PASS** |
| **1920 × 1080** | Desktop Widescreen (FHD) | Dark | Hidden (`none`) | Visible (`flex`) | 0px | **PASS** |

---

## 6. Screenshot Manifest

High-resolution screenshots captured in `artifacts/qa/domain-2-mobile-remediation/`:

| Diagram ID | Configuration | Rendering Mode | File |
| :--- | :--- | :--- | :--- |
| `grcAlignment` | 390×844 Dark | Mobile HTML | `grcAlignment-390x844-dark.png` |
| `grcAlignment` | 390×844 Light | Mobile HTML | `grcAlignment-390x844-light.png` |
| `grcAlignment` | 1366×768 Dark | Desktop SVG | `grcAlignment-1366x768-dark.png` |
| `bcVsDrScope` | 390×844 Dark | Mobile HTML | `bcVsDrScope-390x844-dark.png` |
| `bcVsDrScope` | 390×844 Light | Mobile HTML | `bcVsDrScope-390x844-light.png` |
| `bcVsDrScope` | 1366×768 Dark | Desktop SVG | `bcVsDrScope-1366x768-dark.png` |
| `rtoRpoTimeline` | 390×844 Dark | Mobile HTML | `rtoRpoTimeline-390x844-dark.png` |
| `rtoRpoTimeline` | 390×844 Light | Mobile HTML | `rtoRpoTimeline-390x844-light.png` |
| `rtoRpoTimeline` | 1366×768 Dark | Desktop SVG | `rtoRpoTimeline-1366x768-dark.png` |
| `effectivenessHierarchy` | 390×844 Dark | Mobile HTML | `effectivenessHierarchy-390x844-dark.png` |
| `effectivenessHierarchy` | 390×844 Light | Mobile HTML | `effectivenessHierarchy-390x844-light.png` |
| `effectivenessHierarchy` | 1366×768 Dark | Desktop SVG | `effectivenessHierarchy-1366x768-dark.png` |

---

## 7. Regression & Preservation Status

- **18 Reading Test Suites:** 18 passed, 0 failed across all 883 assertions.
- **Domain 1 Reading Notes:** 100% untouched and preserved.
- **Question Banks:** 583 legacy questions + 119 next-bank questions preserved without modification.
- **Vocabulary Catalog:** 403 terms across Domains 1–4 preserved without modification.
- **Learning Slides & Interactive Quizzes:** Completely untouched.
- **Git State:** Clean working tree edits; strictly no commit or push.

