# ISC2 CC 2026 — Domain 2 Learning Slides: Recovery Audit & Defect Catalog

- **Domain:** Domain 2 — Security Governance (`17.3%` Exam Weight; Objectives `2.1`–`2.4`)
- **Exam Outline:** `isc2-cc-2026-09-01` (Effective September 1, 2026)
- **Role:** Engineering & Academic Review Agent Handoff Audit
- **Audit Date:** 2026-10-30
- **Status:** Complete — Pending Human Review & Recovery Plan Authorization
- **Mandate:** Strictly Audit & Planning Only (Zero production code modifications)

---

## 1. Executive Summary & Handoff Context

Following the implementation-complete status of Domain 1 Learning Slides, a handoff evaluation of the current Domain 2 Learning Slides was conducted. Domain 2 was partially developed and marked "published" across all 8 planned lessons (55 total slides), but user inspection revealed that its educational, pedagogical, and visual quality is unsatisfactory compared to the benchmark established by Domain 1.

This comprehensive audit evaluates the existing implementation against:
1. **The Primary Source Corpus:** `Domain 2.md` (731 lines), `D2 sum.md` (633 lines), `DOMAIN 2.txt` (115 lines), and 37 authentic video lecture slide captures (`S01`–`S19`, `S21`–`S38`).
2. **The Official ISC2 CC 2026 Exam Outline:** Objectives `2.1` through `2.4` and official 2026 application guidance.
3. **The Domain 1 Visual Benchmark:** High-contrast 16:9 compositions, custom vector illustrations, balanced desktop typography, relatable real-world scenarios, and nuanced distractor rationales.

### Key Audit Conclusions:
- **Presentation Content Truncation (Critical Didactic Defect):** While the underlying JSON files contain rich 5-block data utilized in Reading Mode, the custom JavaScript presentation renderers for Lessons 3–8 severely compress the slide content. Critical concepts (such as 5 of the 8 disruption triggers in L3, 4 of the 8 BCP elements in L3, and 3 of the 5 awareness purposes in L5) are omitted from the presentation canvas. In multiple slides, the presentation footers literally direct students to switch to Reading Mode to see the actual curriculum (`"Reading includes all eight source examples..."`).
- **Monotonous "Box-and-Arrow" Wireframe Aesthetic:** Lessons 3–8 abandoned customized visual layouts in favor of a minimal helper shell (`domain2-lesson-shell.js`) that reduces nearly every slide to a repetitive linear sequence of text cards separated by Unicode arrows (`→`).
- **Severe Desktop Whitespace Imbalance ("Ocean of White"):** At desktop viewports (1920×1080 and 1366×768), presentation slides exhibit excessive empty space surrounding small, low-contrast text cards, lacking visual anchors or focal points.
- **Formulaic Schema Lock-in:** All 55 slides were forced into a rigid, identical 5-block JSON structure (`text, table, text, list, text`) enforced by strict validation guards, preventing natural pedagogical variety.
- **Trivial / Caricatured Scenario Distractors:** Interactive decision slides feature several non-credible, extreme distractors (e.g., "stop operating until certified", "declare risk permanently eliminated") that fail to test realistic governance judgment.

---

## 2. Implementation Inventory

The current repository publishes **8 Lessons** containing exactly **55 Slides** in `content/isc2-cc-2026/learning/published/catalog.json`.

| Lesson ID | Title (EN / TH) | Objective | Published Slides | Custom JS Renderer | Scoped CSS File |
|---|---|:---:|:---:|---|---|
| `lesson-d2-01-grc-foundations` | GRC Foundations, Frameworks & Business Alignment<br>*(พื้นฐาน GRC กรอบมาตรฐาน และการจัดแนวกับธุรกิจ)* | 2.1 | 6 | `grc-foundations-presentations.js` | `learning-grc-foundations.css` |
| `lesson-d2-02-grc-tools-risk-register` | GRC Tools & Operationalizing the Risk Register<br>*(เครื่องมือ GRC และการนำ Risk Register ไปใช้ปฏิบัติจริง)* | 2.1 | 7 | `grc-tools-risk-register-presentations.js` | `learning-grc-tools-risk-register.css` |
| `lesson-d2-03-business-continuity-bcp` | Business Continuity, Redundancy & BCP<br>*(ความต่อเนื่องทางธุรกิจ ความซ้ำซ้อนของทรัพยากร และแผน BCP)* | 2.2 | 6 | `business-continuity-bcp-presentations.js` | `learning-business-continuity-bcp.css` |
| `lesson-d2-04-disaster-recovery-drp` | Disaster Recovery, RTO/RPO & Recovery Strategies<br>*(การกู้คืนจากภัยพิบัติ ค่า RTO/RPO และกลยุทธ์การกู้คืนระบบ)* | 2.2 | 9 | `disaster-recovery-drp-presentations.js` | `learning-disaster-recovery-drp.css` |
| `lesson-d2-05-security-awareness-culture-leadership` | Security Awareness, Culture & Leadership<br>*(ความตระหนัก วัฒนธรรม และภาวะผู้นำด้านความปลอดภัย)* | 2.3 | 6 | `security-awareness-presentations.js` | `learning-security-awareness.css` |
| `lesson-d2-06-social-engineering-password-protection` | Social Engineering & Password Protection<br>*(วิศวกรรมสังคม และการปกป้องรหัสผ่าน)* | 2.3 | 8 | `social-engineering-passwords-presentations.js` | `learning-social-passwords.css` |
| `lesson-d2-07-security-metrics-kpi-kri` | Security Metrics, KPIs & KRIs<br>*(ตัวชี้วัดความปลอดภัย KPI และ KRI)* | 2.4 | 7 | `security-metrics-presentations.js` | `learning-security-metrics.css` |
| `lesson-d2-08-dashboards-scorecards-reports` | Dashboards, Scorecards & Reports<br>*(แดชบอร์ด สกอร์การ์ด และรายงานความปลอดภัย)* | 2.4 | 6 | `security-reporting-presentations.js` | `learning-security-reporting.css` |
| **Total Domain 2** | **8 Lessons** | **4 Objectives** | **55 Slides** | **8 Presentation Modules** | **8 CSS Files + Shell CSS** |

### Slide Allocation Reconciliation:
- **Historical Planned Allocation (Task 65/Matrix):** 58 slides (`13 + 15 + 15 + 15 = 58`)
  - Planned: L1=6, L2=7, L3=6, L4=9, L5=7, L6=8, L7=8, L8=7.
- **Actual Implemented Allocation:** 55 slides (`13 + 15 + 14 + 13 = 55`)
  - Actual: L1=6, L2=7, L3=6, L4=9, L5=6 (-1), L6=8, L7=7 (-1), L8=6 (-1).
- **Finding:** The reduction of 3 slides occurred in L5 (merged culture and leadership cycles), L7 (consolidated metric categories), and L8 (combined dashboard and scorecard synthesis). The 55 slide IDs published in `catalog.json` are stable, indexed, and function correctly with student progress storage.

---

## 3. Academic & Pedagogical Quality Audit

### 3.1 Didactic Truncation in Presentation Mode
The primary purpose of Learning Slides is to deliver comprehensive instruction through visual presentation mode. In Lessons 3–8, the previous agent treated presentation mode as a mere decorative teaser, offloading the real teaching to Reading Mode.

| Lesson & Slide | Source Requirement (`S01`–`S38`, `Domain 2.md`) | Current Presentation Rendering | Defect Description & Evidence | Severity |
|---|---|---|---|:---:|
| **L3 Slide 2** (`eight-disruption-triggers`) | All 8 disruption triggers on `S12` (Natural disasters, Cyberattacks, Power outages, Equipment failures, Network outages, Pandemics, Loss of facilities, Supply-chain disruptions) + Human Error | Renders only 3 cards (`Flood`, `Network outage`, `Key staff unavailable`) with arrows. | **Severe truncation:** 5 of 8 triggers omitted. Footer explicitly admits: *"Reading includes all eight source examples and human error."* | **Critical (P1)** |
| **L3 Slide 3** (`bcp-and-eight-elements`) | All 8 BCP elements on `S13`/`S14` (Critical business processes, Roles & responsibilities, Communication, Alternate locations, Backup personnel, Alternate suppliers, Essential technology, Recovery priorities) | Renders only 4 arbitrary fields (`Critical work`, `Activation`, `People/place`, `Tools/contact`). | **Severe truncation:** 4 of 8 elements omitted. Footer explicitly admits: *"Reading retains all eight BCP elements, including suppliers and recovery priorities."* | **Critical (P1)** |
| **L5 Slide 1** (`awareness-to-safe-action`) | All 5 Core Purposes of Security Awareness on `S21` | Renders a hardcoded loop over indices `[0, 2, 4]` (3 items only). | Purpose items 2 and 4 are dropped from the visual slide. | **Major (P2)** |
| **L5 Slide 3** (`shared-daily-culture`) | All 6 Encouraged Daily Behaviors of Security Culture on `S22` | Renders only 2 text blocks (`Suspicious email arrives` → `Team makes reporting normal`). | 4 concrete culture behaviors are completely missing from the visual presentation. | **Major (P2)** |
| **L5 Slide 4** (`leadership-makes-rules-credible`) | All 6 Security Leadership Responsibilities on `S23` | Renders 2 generic cards (`Written policy` → `Management follows it too`). | 4 leadership duties (resources, open reporting encouragement, accountability, explicit expectations) are missing. | **Major (P2)** |
| **L7 Slide 1** (`measure-for-a-decision`) | 7 Purposes of Measuring Effectiveness on `S29` | Renders an abstract 3-box pipeline (`Business question` → `Defined evidence` → `Responsible action`). | The 7 specific management purposes from `S29` and `Domain 2.md` §17 are omitted. | **Major (P2)** |

### 3.2 Formulaic 5-Block Schema Prison
Every single slide across all 8 lessons was authored with an identical block sequence:
`Block 0: text (Lead)` $\rightarrow$ `Block 1: table (Structured Data / Scenario)` $\rightarrow$ `Block 2: text (Context)` $\rightarrow$ `Block 3: list (Supporting Points)` $\rightarrow$ `Block 4: text (Takeaway)`.

- **Root Cause:** The previous agent wrote defensive assertion guards in JS tests and renderers (e.g., `b?.length===5 && b.map(x=>x.kind).join(',')==='text,table,text,list,text'`).
- **Pedagogical Impact:** Slide content was warped to satisfy the validator rather than pedagogical effectiveness. Conceptual slides were forced to include synthetic 3-column tables, while interactive scenario slides had to shoehorn options and feedback into table rows.

### 3.3 Interactive Scenario & Distractor Quality
Review of interactive scenario slides (`D2-L01-S06`, `D2-L02-S07`, `D2-L03-S06`, `D2-L04-S09`, `D2-L05-S06`, `D2-L06-S08`, `D2-L07-S07`, `D2-L08-S06`):

- **L1 Slide 6:** Distractor B states *"Treat ISO certification as universal law; stop operating until certified."* This is an unrealistic, absurd extreme that no candidate would reasonably select, reducing the diagnostic value of the question. Distractor D states *"Complete one IT checklist; declare the risk permanently eliminated."* Again, overly simplistic.
- **L2 Slide 7:** Distractor B states *"Install controls; delete the record as zero risk."* Distractor D states *"Report 4 × 4 as $16,000; make the owner configure every control alone."* Multiplying an ordinal score by dollars is a clumsy math joke rather than a plausible examination distractor.
- **L3 Slide 6:** Distractor A states *"Wait for headquarters and its ISP to recover."* Passive and obvious.
- **Pedagogical Requirement:** All distractors must reflect genuine candidate misconceptions, such as confusing Governance with Management, confusing Qualitative with Quantitative methods, misinterpreting RTO vs. RPO boundaries, or misidentifying phishing vectors.

### 3.4 Governance Discrepancy Handling: S36 Scorecard Row 4
On `S36` (`Domain 2.md` L542–547), the 4th scorecard row reads:
`Critical Vulnerabilities | Target: < 10 | Actual: 12 | Status: Needs Attention` (unitless count).
In the lecture transcript (`DOMAIN 2.txt` L111), the instructor states:
`"Critical vulnerability target is less than 10% and actual is 12"`.

- **Current Implementation:** Lesson 8 Slide 3 includes both notes and properly leaves Row 4 unscored.
- **Academic Recommendation:** Retain this explicit quarantine (`D2-Q03`), but upgrade the teaching note: explain that metric governance requires unambiguous units of measure (`Count` vs. `Percentage`), and how lack of data dictionary standards creates executive reporting failures.

---

## 4. Bilingual Accuracy & Naturalness Findings

### 4.1 Mechanical Translation Artifacts
Several Thai translations across the presentation modules and JSON files exhibit unnatural, overly literal phrasing:

| Location | English Source | Current Thai Translation | Academic Review & Refined Natural Phrasing |
|---|---|---|---|
| L1 S2 Presentation | Separate requests | ต่างทีมต่างขอหลักฐาน | **การขอหลักฐานแบบแยกส่วน / ต่างคนต่างขอ** |
| L1 S2 Presentation | Repeated work. Conflicting copies. | ทำงานซ้ำ และเสี่ยงได้ข้อมูลคนละชุด | **เกิดงานซ้ำซ้อน และเสี่ยงได้ข้อมูลที่ไม่ตรงกัน** |
| L2 S1 Presentation | Separate working copies | ไฟล์ทำงานแยกส่วน | **เอกสารการทำงานที่กระจัดกระจายและไม่เชื่อมโยงกัน** |
| L3 S1 Presentation | The business activity to sustain | งานธุรกิจที่ต้องทำต่อ | **กระบวนการทางธุรกิจสำคัญที่ต้องดำเนินต่อไปได้อย่างต่อเนื่อง** |
| L3 S2 Presentation | Key staff unavailable | คนสำคัญมาทำงานไม่ได้ | **บุคลากรหลักไม่สามารถปฏิบัติงานได้ (Key Personnel Unavailable)** |
| L5 S3 Presentation | The team makes reporting normal | ทีมมองการรายงานเป็นเรื่องปกติ | **สร้างบรรยากาศในทีมให้การรายงานเหตุเป็นเรื่องปกติที่ปลอดภัย** |
| L7 S1 Presentation | Define the population | กำหนดประชากร | **กำหนดขอบเขตประชากรเป้าหมาย (Scope / Population)** |

### 4.2 Standard Cybersecurity Terminology Alignment
- Ensure strict alignment with Thai cybersecurity regulatory bodies (NCSA / สกมช.) and PDPA standards.
- Maintain consistent bilingual term presentation: English term accompanied by accurate Thai professional meaning in parentheses upon first introduction (e.g., *ความต่อเนื่องทางธุรกิจ (Business Continuity)*, *เป้าหมายระยะเวลาการกู้คืน (Recovery Time Objective: RTO)*).

---

## 5. Visual, Layout & UX Quality Audit

### 5.1 Desktop Viewport Analysis (1920×1080 and 1366×768)

1. **The "Ocean of White" Defect:**
   - On a 1080p desktop display, slides in Lessons 3–8 render with a small block of content floating in a vast, empty white canvas (`#fff`).
   - The shell applies `padding: 3.3cqw 4.2cqw`, but because the main content container (`.d2s-main`) only contains 2 or 3 small text cards, the remaining 60–70% of the screen is completely blank.
   - Unlike Domain 1 (which utilizes structured two-column splits, graphic badges, and balanced diagrams), Domain 2 feels barren and unpolished.

2. **Monotonous "Box-and-Arrow" Aesthetic:**
   - In `domain2-lesson-shell.js`, every presentation is constructed using `.d2s-scene`, `.d2s-header`, `.d2s-main`, and `.d2s-arrow`.
   - Almost every slide renders as: `[Box 1] → [Box 2] → [Box 3]`.
   - This layout creates visual fatigue and lacks instructional differentiation. A student cannot visually distinguish an Incident Timeline from a GRC Hierarchy or a BCP Operations Plan.

3. **Absence of Custom Vector Graphics (SVG):**
   - In Domain 1, concepts like the CIA Triad, Document Hierarchy, and Security Controls utilize clean, responsive SVG diagrams.
   - In Domain 2, complex spatial concepts are reduced to plain text cards:
     - The **RTO vs. RPO Timeline** (`S18`) is rendered as a plain HTML flex row with dots instead of a professional, annotated timeline diagram.
     - The **BC vs. DR Relationship** (`DR ⊂ BC`) is rendered as side-by-side text cards rather than a concentric relationship visual.
     - The **GRC Framework Alignment** (`NIST CSF / ISO 27001 / COBIT`) lacks a structured architectural visual.

4. **Hardcoded Pure White Canvas & Theme Jarring:**
   - In `css/learning-domain2-lesson-shell.css`, the canvas is hardcoded to `background: #fff; color: #142d45;`.
   - When a user navigates from the dark-themed application shell into a Learning Slide, the sudden full-screen pure white canvas causes severe glare and visual discomfort. Dark mode or neutral presentation themes should be harmonized.

---

## 6. Architecture & Code Quality Risks

### 6.1 Brittle Shape Validation Guards
In each presentation module, functions such as `hasBusinessContinuityBcpPresentation` and `hasSecurityMetricsPresentation` validate slide data using brittle predicates:
```javascript
b?.length === 5 &&
b.map(x => x.kind).join(',') === 'text,table,text,list,text' &&
b[1].columns?.length === 3 &&
b[1].rows?.length === spec[1] &&
b[1].rows.every(r => r.length === 3);
```
- **Risk:** Any legitimate educational improvement to slide content (e.g., adding an image block, adding a 4th column, adding an additional takeaway) causes the guard to evaluate to `false`. When this happens, the presentation renderer silently fails and falls back to a bare text view without warning.

### 6.2 Architectural Fragmentation (L1/L2 vs. L3–L8)
- Lessons 1 and 2 use private DOM builders and custom scoped CSS (`learning-grc-foundations.css`, `learning-grc-tools-risk-register.css`).
- Lessons 3–8 use `domain2-lesson-shell.js` and a shared typography layer (`learning-domain2-lesson-shell.css`).
- This split results in duplicated code, inconsistent class naming conventions (`grf-*`, `grt-*`, `d2s-*`), and conflicting font-scaling techniques across the same domain.

### 6.3 Test Brittleness
- Existing test suites in `tools/` (e.g., `verify-learning-d2-completion.mjs`) hardcode snapshots of Domain 3 status (`status: coming-soon`, `lessons: []`). When subsequent domains are implemented, these assertions fail even though Domain 2 code is completely intact.
- Historical `test6` guards check the entire working tree for modified files, throwing errors when legitimate QA artifacts or uncommitted planning documents are present.

---

## 7. Defect Catalog & Severity Matrix

| Defect ID | Category | Severity | Summary & Root Cause | Affected Files | Remediation Guidance |
|:---:|:---:|:---:|---|---|---|
| **D2-DEF-01** | Academic / Didactic | **Critical (P1)** | **Severe Presentation Content Truncation:** L3 S2 & S3 drop 5/8 disruption triggers and 4/8 BCP elements from the visual canvas. Footers explicitly push students to Reading Mode. | `business-continuity-bcp-presentations.js`, `lesson-d2-03-*.json` | Redesign L3 presentation renderers to display all 8 disruptions and 8 BCP elements using structured visual grids. Remove meta-commentary footers. |
| **D2-DEF-02** | Academic / Didactic | **Critical (P1)** | **Awareness & Culture Concepts Truncated:** L5 S1, S3, S4 drop 40–60% of source awareness purposes, culture behaviors, and leadership duties. | `security-awareness-presentations.js`, `lesson-d2-05-*.json` | Expand presentation renderers to visually map complete 5 awareness purposes, 6 culture behaviors, and 6 leadership duties. |
| **D2-DEF-03** | Visual / UX | **Critical (P1)** | **Monotonous Box-and-Arrow Wireframe Aesthetic:** Lessons 3–8 rely almost exclusively on repetitive 2- or 3-box arrow flows (`.d2s-scene`). | `domain2-lesson-shell.js`, `css/learning-*.css` | Replace bare boxes with rich, distinct instructional layouts (timelines, nested concentric scopes, matrices, comparison splits). |
| **D2-DEF-04** | Visual / UX | **Major (P2)** | **Desktop Whitespace Imbalance ("Ocean of White"):** High empty space on 1920×1080 and 1366×768 displays. Small text clusters lack focal balance. | All Domain 2 CSS files | Implement balanced desktop layout grids, proportional typography, and visual containers inspired by Domain 1. |
| **D2-DEF-05** | Visual / UX | **Major (P2)** | **Absence of Dedicated SVG Diagrams:** Spatial concepts (RTO/RPO timeline, BC vs DR scope, GRC pyramid) lack clear vector illustrations. | `disaster-recovery-drp-presentations.js`, `grc-foundations-presentations.js` | Author scalable, theme-aware SVG diagrams for RTO/RPO timeline and BC vs DR concentric boundaries (`DR ⊂ BC`). |
| **D2-DEF-06** | Academic / Pedagogy | **Major (P2)** | **Trivial & Non-Credible Scenario Distractors:** Several interactive scenarios feature caricature choices ("stop operating until certified", "$16,000 score"). | All Domain 2 lesson JSON files | Rewrite scenario distractors to test subtle, realistic candidate misconceptions aligned with ISC2 CC exam standards. |
| **D2-DEF-07** | Bilingual | **Moderate (P3)** | **Non-Idiomatic Thai Phrasing:** Awkward, mechanical translations across presentation labels and slide bodies. | All Domain 2 lesson JSON and JS modules | Refine Thai translations into natural professional cybersecurity terminology aligned with Thai NCSA / PDPA conventions. |
| **D2-DEF-08** | Architecture | **Major (P2)** | **Brittle 5-Block Schema Guard Lock-in:** `has*Presentation` guards strictly require `length===5` and `text,table,text,list,text`, preventing natural content evolution. | All 8 presentation JS modules | Loosen guards to validate required semantic fields without enforcing an artificial, uniform 5-block constraint. |
| **D2-DEF-09** | Architecture | **Moderate (P3)** | **Renderer Architecture Fragmentation:** L1/L2 use custom builders; L3–L8 use `domain2-lesson-shell.js` with inconsistent CSS classes. | `domain2-lesson-shell.js`, `grc-foundations-presentations.js`, etc. | Unify Domain 2 rendering into a consistent component pattern with shared design tokens. |
| **D2-DEF-10** | Testing | **Minor (P4)** | **Brittle Multi-Domain Test Expectations:** Tests fail due to outdated hardcoded snapshots of other domains. | `tools/verify-learning-d2-completion.mjs` | Update test assertions to decouple Domain 2 verification from other domains' lifecycle states. |

---

## 8. Baseline & Protection Boundaries Verification

The audit confirms that the following core repository assets remain completely protected, untouched, and must be preserved during all recovery work:
1. **Domain 1 Learning Slides:** Complete, verified, and strictly read-only.
2. **Question Banks:** Legacy bank (583 items) and next-bank (119 items) remain 100% intact.
3. **Vocabulary Engine:** All 403 curated vocabulary items remain 100% intact.
4. **Learning Runtime & Viewer Core:** `viewer.js`, `routes.js`, `presentation-stage.js`, `lesson-info.js`, and `catalog.json` schema contracts remain intact.
5. **Student Progress Storage:** `sec_cert_learning_progress_v1` storage schema and keys remain intact.
6. **Domain 2 Published Lesson IDs & Slide IDs:** All 8 lesson IDs and 55 slide IDs must be preserved to prevent student progress invalidation.

---

*End of Recovery Audit Report. Ready for integration into `domain-2-recovery-plan.md` and subsequent phased execution.*

