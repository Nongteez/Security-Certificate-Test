# ISC2 CC 2026 Reading Notes — Task 100: Table Typography & Visual Hierarchy Report

**Date:** 2026-10-30  
**Feature:** ISC2 CC 2026 — Reading Notes  
**Scope:** Domain 1 — Security Principles (All 6 Tables Across Objectives 1.1–1.5)  
**Status:** Completed & Fully Verified (235/235 Automated Checks Passing)

---

## 1. Executive Summary & Defect Diagnosis

A rigorous audit of table typography and layout across [`content/isc2-cc-2026/reading/domain-1.md`](file:///d:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/reading/domain-1.md) identified several recurring design and architectural defects:

1. **Inverted Header Hierarchy:** Table headers (`th`) were styled with `font-size: 13px` while table body cells (`td`) were `font-size: 14px`. Consequently, column headers appeared visually smaller and subordinate to the data beneath them.
2. **Forced Uppercase Distortion:** Table headers used `text-transform: uppercase`, which had no effect on Thai script but caused mixed-case technical abbreviations (e.g., `PCI DSS`, `NIST CSF`, `Due Care (DO)`) to appear cramped and visually jarring.
3. **Hardcoded First-Column Bolding in Parser:** In [`js/core/markdown-parser.js`](file:///d:/_Coding/SEC-CERT-TEST/js/core/markdown-parser.js), the table renderer executed `if (cellIdx === 0) tableHtml += '<td><strong>${td}</strong></td>'`, blindly forcing the first column of *every* table into bold tags regardless of whether it represented a term, a scenario question, an action verb, or a clue phrase.
4. **Unequal Emphasis in Comparative Tables (Due Care vs. Due Diligence):** Because of the hardcoded parser rule, Due Care verbs in Column 1 were bolded while Due Diligence verbs in Column 2 remained plain text, falsely implying that Due Diligence was subordinate.
5. **Misleading 1-to-1 Equivalence Assumption:** Side-by-side action verb rows in the Due Care vs. Due Diligence table risked leading candidates to assume an artificial one-to-one equivalence between verbs on the same row (e.g., *Implement* $\leftrightarrow$ *Assess*, *Apply* $\leftrightarrow$ *Review*), when they are actually illustrative verb clusters.

---

## 2. Reusable Architectural System & Design Tokens

In [`css/reading.css`](file:///d:/_Coding/SEC-CERT-TEST/css/reading.css), seven reusable table typography tokens were established in `:root`:

```css
:root {
  /* Table Typography & Visual Hierarchy Tokens */
  --table-header-font-size: 0.94rem;        /* 15px - noticeably larger & more legible than body */
  --table-header-font-weight: 700;          /* Distinct weight for immediate visual distinction */
  --table-body-font-size: 0.92rem;          /* 14.5px - comfortable long-form reading measure */
  --table-body-line-height: 1.65;           /* Generous line-height for mixed Thai-English prose */
  --table-cell-padding-y: 12px;             /* Spacious vertical breathing room */
  --table-cell-padding-x: 16px;             /* Generous horizontal cell padding */
  --table-row-hover-bg: rgba(99, 102, 241, 0.04); /* Subtle row tracking on desktop */
}
```

### Table Component Styles
```css
/* ===== Tables & Data Displays ===== */
.reading-table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: var(--space-md) 0 var(--space-lg);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--panel);
}

.reading-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--table-body-font-size);
  line-height: var(--table-body-line-height);
  font-family: inherit;
}

.reading-table th,
.reading-table td {
  border-bottom: 1px solid var(--line);
  padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  text-align: left;
  vertical-align: top;
  word-break: break-word;
  overflow-wrap: break-word;
}

.reading-table th {
  background: var(--panel-2);
  font-weight: var(--table-header-font-weight);
  color: var(--text);
  border-bottom: 2px solid var(--line);
  font-size: var(--table-header-font-size);
  letter-spacing: 0.01em;
  line-height: 1.45;
  text-transform: none; /* Preserves natural casing in Thai and English */
}

.reading-table tbody tr {
  transition: background-color 0.15s ease;
}

.reading-table tbody tr:hover {
  background-color: var(--table-row-hover-bg);
}

.reading-table tr:last-child td {
  border-bottom: none;
}

.reading-table td strong {
  color: var(--text);
  font-weight: 700;
}

.reading-table td em {
  color: var(--text-secondary);
  font-style: italic;
}

.reading-table-note {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: calc(var(--space-sm) * -1 + 4px);
  margin-bottom: var(--space-lg);
  line-height: 1.5;
  font-style: italic;
}

.reading-table-wrapper + .reading-table-note {
  margin-top: calc(var(--space-md) * -1 + 4px);
}
```

---

## 3. Parser Refactoring (`js/core/markdown-parser.js`)

The hardcoded column 0 bolding was eradicated:

```diff
--- a/js/core/markdown-parser.js
+++ b/js/core/markdown-parser.js
@@ -275,11 +275,7 @@ export function parseMarkdown(markdown) {
         bodyRows.forEach(row => {
           tableHtml += '<tr>';
-          row.forEach((td, cellIdx) => {
-            if (cellIdx === 0) {
-              tableHtml += `<td><strong>${td}</strong></td>`;
-            } else {
-              tableHtml += `<td>${td}</td>`;
-            }
-          });
+          row.forEach(td => {
+            tableHtml += `<td>${td}</td>`;
+          });
           tableHtml += '</tr>';
         });
```

**Instructional Benefit:** Emphasis is now strictly semantic and author-controlled via standard Markdown markup (`**bold**`, `*italic*`), preventing unintended visual hierarchies.

---

## 4. Comprehensive Audit & Transformation of All 6 Tables

| Table Location | Columns | Semantic Role of Columns | Visual Hierarchy Applied |
|---|---|---|---|
| **1. Section 1.1.1**<br>Core Terminology (Lines 17–25) | 1. คำศัพท์<br>2. คำจำกัดความ<br>3. ตัวอย่างในโลกจริง | Col 1: Concept row label<br>Col 2: Technical definition<br>Col 3: Concrete real-world examples | Col 1 explicitly bolded (`**Asset**`, `**Threat**`, etc.) as row identifier; Cols 2 & 3 render in comfortable body weight for scanning. |
| **2. Section 1.1.2**<br>CIA Scenario Comparison (Lines 136–141) | 1. สถานการณ์ในโจทย์<br>2. หลักการที่เด่นที่สุด<br>3. คำอธิบายเหตุผล | Col 1: Practical exam scenario<br>Col 2: Target CIA principle<br>Col 3: Explanatory reasoning | Col 1 is standard body weight; Col 2 is highlighted bold (`**Confidentiality**`, `**Integrity**`, `**Availability**`) drawing immediate visual focus to the target answer; Col 3 provides reasoning. |
| **3. Section 1.1.5**<br>AAA Questions Mapping (Lines 301–306) | 1. คำถามหลักในข้อสอบ<br>2. ขั้นตอนที่เกี่ยวข้อง | Col 1: Exam question quote<br>Col 2: Target AAA lifecycle phase | Col 1 rendered as italicized quotation (`*"Who are you?"*`); Col 2 highlighted in bold (`**Identification**`). |
| **4. Section 1.3.4**<br>Security Document Hierarchy (Lines 799–804) | 1. ประเภทเอกสาร<br>2. บทบาทหน้าที่<br>3. ระดับการบังคับ<br>4. ตัวอย่างรูปธรรม | Col 1: Document tier<br>Col 2: Role (WHAT/HOW)<br>Col 3: Legal enforceability<br>Col 4: Concrete quote | Col 1 bold (`**Policy**`), Col 2 regular, Col 3 bold badge (`**Mandatory**` / `**Advisory**`), Col 4 italicized quote. Clean 4-column balanced layout. |
| **5. Section 1.5.2**<br>Due Care vs. Due Diligence (Lines 1125–1132) | 1. คำกริยาในโจทย์ Due Care (DO)<br>2. คำกริยาในโจทย์ Due Diligence (CHECK) | Col 1: Due Care action verbs<br>Col 2: Due Diligence inquiry verbs | **Equal Visual Prominence:** Both columns receive bold emphasis on the primary verb (`**Implement**`, `**Assess / Evaluate**`, `**Apply**`, `**Review / Audit**`, etc.).<br>**Non-1:1 Clarification:** Added `.reading-table-note` clarifying that these are illustrative clusters, not rigid row-by-row equivalents. |
| **6. Section 1.5.4**<br>Exam Keyword Cheat Sheet (Lines 1467–1490) | 1. Keyword ในโจทย์ข้อสอบ<br>2. เชื่อมโยงไปยังคำตอบ / แนวคิด | Col 1: Question clue phrase<br>Col 2: Target syllabus concept | Col 1 rendered as italicized exam clues (`*Unauthorized disclosure*`); Col 2 rendered as bold concept answers (`**Confidentiality**`). |

---

## 5. Due Care vs. Due Diligence Table & Clarification Note

```markdown
| คำกริยาในโจทย์ Due Care (DO) | คำกริยาในโจทย์ Due Diligence (CHECK) |
|---|---|
| **Implement** (นำไปติดตั้ง) | **Assess / Evaluate** (ประเมินผล) |
| **Apply** (ปรับใช้) | **Review / Audit** (ทบทวนและตรวจสอบ) |
| **Protect** (ปกป้อง) | **Monitor** (เฝ้าระวัง) |
| **Take Action** (ลงมือปฏิบัติ) | **Investigate** (สืบค้นหาข้อเท็จจริง) |
| **Patch** (อุดช่องโหว่) | **Verify** (ตรวจพิสูจน์ยืนยัน) |

<p class="reading-table-note">*หมายเหตุ: คำกริยาในแต่ละคอลัมน์เป็นตัวอย่างกลุ่มคำกริยาบ่งชี้ (Illustrative Verb Clusters) ที่พบบ่อยในข้อสอบ ไม่ใช่คู่คำที่มีความสัมพันธ์เทียบเท่ากันแบบ 1 ต่อ 1 ในแต่ละบรรทัด*</p>
```

---

## 6. Verification Results Across All Test Suites

```
================================================================
Verification Summary: 210/210 tests passed (0 failed)
================================================================
Suite: tools/verify-reading-notes-domain1-presentation.mjs
All 210 presentation, math, diagram, table typography, and semantic checks passed.

=============================================================
Verification Summary: 10/10 tests passed.
=============================================================
Suite: tools/verify-reading-notes-domain1.mjs
All 10 completeness, loader, parser, and 3-level navigation checks passed.

=============================================================
Verification Summary: 9/9 tests passed.
=============================================================
Suite: tools/verify-reading-notes-foundation.mjs
All 9 foundation shell, theme, and registry checks passed.

=============================================================
Verification Summary: 6/6 tests passed.
=============================================================
Suite: tools/verify-learning-integration.mjs
All 6 learning center and card routing integration checks passed.
```

**Grand Total: 235 / 235 automated checks passing (100% success rate, exit code 0).**

---

## 7. Preservation Boundaries

- Original source markdown summaries (`D1 sum.md`, `Domain 1.md`) and video transcript (`Script - DOMAIN 1.txt`) remain untouched byte-for-byte.
- Question banks (583 legacy, 119 update), vocabulary (403 terms), and learning slides remain strictly untouched.

