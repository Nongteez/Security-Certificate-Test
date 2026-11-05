# Phase 3A Domain 2 Batch A — academic corrections and bilingual verification

Date: **2026-11-04 (Asia/Bangkok)**. **D2-A implemented and verified; human acceptance pending.**

## Findings and authorization

The current request authorizes exactly D2-A from the existing Phase 2 implementation plan. Historical false authorization fields record the earlier approval gate; they do not override this explicit batch request. The audit/review, current progress/handoff, D1-A and completed D5 reports, Task 157 table report and exact plan records were consulted before editing. Full approved records and acceptance criteria are retained in `approved-findings.json`.

| Finding | Decision | Exact targets | Required correction and constraints |
|---|---|---|---|
| ACC-D2-01 | APPROVE WITH REVISION | Objective 2.2; `topic-2-2-rto-rpo`, entry MD lines 227–272 | Correct categorical non-survival, explicitly bound the RTO+WRT planning model and distinguish assumed backup/target from measured outcomes. Preserve the 16:30/17:00/18:00 case and units; no universal sequential law. |
| ACC-D2-02 | APPROVE | Objective 2.4; `topic-2-4-memory-aid`, entry MD lines 555–578; existing `effectivenessHierarchy` metric/dashboard labels (entry JS lines 1716/1775 and corresponding mobile text) | Replace raw-only metric wording and qualify dashboard refresh timing in the named diagram and directly matching cues. Retain existing architecture and definitions; no new hierarchy or universal real-time claim. |

Both findings have **no dependencies**. Acceptance requires minimal primary-source-aligned edits, Thai/English semantic parity, retained anchors/examples/visuals, related-summary/scenario review, narrow mobile readability and fresh content/render/preservation checks. No HOLD or REJECT item is implemented. VER-D2-01 scorecard remains explicitly excluded.

## Academic evidence

- [NIST SP 800-34 Rev.1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf), May 2010, section 3.2.1, printed pp.16–17: accepted business downtime and system-recovery objectives need impact/context and room for additional work. The retained inequality is explicitly course planning notation under non-overlap assumptions, rather than a universal NIST formula. Exceedance does not establish inevitable organizational failure.

- [NIST SP 800-55 Volume 1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf), December 2024, section 3.1.1 (printed pp.12–14) and sections 3.3.1–3.3.4 (pp.17–18): numeric measures may be calculated, with scope, formulas and timing defined. Collection/reporting frequency varies; a dashboard’s visual format does not guarantee fresh real-time data.

- [ISC2 CC exam outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective **1 September 2026**, objectives 2.2 and 2.4: maps BC/DR and effectiveness/metrics/reporting at foundational level. It does not establish particular questions, memorization requirements or the local equation.

Primary references were reopened on 2026-11-04. CISA’s StopRansomware page and official PDF returned 403 on direct access; indexed official excerpts were supplementary context only. No correction depends on inaccessible full-text CISA guidance. This access limitation is recorded rather than represented as a completed full-source inspection.

The supplied Settapon source directory is unavailable on this machine. The matching repository `ISC2 Update 2026/Domain 2` supplies original context: `DOMAIN 2.txt` recovery/measurement/dashboard segments and native slides **183410**, **222340**, **223200**, **223320**. The Phase 2 metric locator **223240** is absent; the original manifest identifies the actual metric slide **222340**, whose counts, percentages and means were verified visually. Historical records remain unchanged. `academic-verification.json` contains exact conclusions/locations, source observations and limitations; `handoff-inspection.json` records input hashes.

## Implemented academic correction

ACC-D2-01 now labels the equation a simplified planning model, defines disruption→IT readiness and subsequent work→business resumption, and acknowledges real activities may overlap. It replaces certain non-survival with a business-tolerance/plan-review explanation. A concise bilingual note labels the existing 16:30 backup as assumed recoverable and 18:00 as the one-hour target, preserving the original correct times, 30-minute RPO boundary and worked case. No new numeric example was added, and no timeline label was changed.

ACC-D2-02 replaces exactly two SVG text nodes and two matching mobile paragraphs in the existing measurement diagram. Defined measurable value replaces raw-only value, and dashboard display is qualified by refresh cadence. A bilingual freshness note and the matching table/review cue are aligned. Existing metric/KPI/KRI explanations, scorecard values, all scenarios and data remain intact. The real-time SOC scenario is a legitimate specifically requested configuration, so it needs no edit.

Thai and English wording was reviewed for the same condition, timing, target/observation distinction and limitation. Existing useful examples and definitions remain; this bounded editorial review does not certify every prior source statement or substitute for human acceptance.

## Original and corrected wording

All **nine exact spans** are recorded below and in `exact-changes.json`. Entry line coordinates refer to immutable originals; insertions shift later final MD lines. Full original files and a unified diff are retained.

### ACC-D2-01 — `content/isc2-cc-2026/reading/domain-2.md`, entry line 229

**Original:**

```text
ในการวางแผนกู้คืนระบบ IT องค์กรต้องกำหนดเป้าหมายเชิงเวลา 2 ตัวชี้วัดสำคัญ:

```

**Corrected:**

```text
ในการวางแผนกู้คืนระบบ IT องค์กรต้องกำหนดเป้าหมายเชิงเวลา 2 ตัวชี้วัดสำคัญ:

**สมมติฐานของภาพ (Illustrative assumptions):** ภาพสมมติว่ามีจุดสำรองที่กู้คืนได้เวลา 16:30 น. และเกิดเหตุเวลา 17:00 น.; จุดสำรองนี้ตรงกับขอบเขต RPO 30 นาทีในตัวอย่าง ส่วน 18:00 น. เป็นเป้าหมาย RTO 1 ชั่วโมง ไม่ใช่ผลกู้คืนที่ทดสอบแล้ว / The illustration assumes a recoverable 16:30 backup and a 17:00 outage. That backup coincides with the example’s 30-minute RPO boundary; 18:00 is the one-hour RTO target, not a tested recovery outcome.

```

### ACC-D2-01 — `content/isc2-cc-2026/reading/domain-2.md`, entry line 257

**Original:**

```text
- **สูตรความสัมพันธ์แม่บทสำหรับห้องสอบ:**
  **MTD &ge; RTO + WRT**
  *(หาก RTO + WRT &gt; MTD หมายความว่าธุรกิจจะได้รับความเสียหายวิกฤตเกินระดับที่องค์กรจะอยู่รอดได้)*
```

**Corrected:**

```text
- **แบบจำลองวางแผนอย่างง่าย (Simplified planning model):**
  **MTD &ge; RTO + WRT**
  ในแบบจำลองนี้ RTO นับจากเริ่มหยุดชะงักจนระบบ IT พร้อมใช้งาน แล้ว WRT นับต่อจนธุรกิจกลับมาดำเนินงาน โดยสมมติให้สองช่วงไม่ซ้อนทับกัน; กิจกรรมจริงอาจซ้อนทับกันได้ / Here, RTO runs from disruption to IT readiness, followed by WRT until business resumes. The model assumes non-overlapping intervals; actual activities may overlap.
  *หากผลรวมเกิน MTD แผนนี้จัดสรรเวลาเกินช่วงหยุดชะงักที่ธุรกิจยอมรับ ต้องทบทวนแผน; การหยุดชะงักจริงเกิน MTD ไม่ได้หมายความว่าองค์กรจะอยู่รอดไม่ได้เสมอไป / If the sum exceeds MTD, the plan exceeds the business downtime tolerance and needs review. An actual outage beyond MTD does not inevitably mean organizational failure.*
```

### ACC-D2-02 — `content/isc2-cc-2026/reading/domain-2.md`, entry line 559

**Original:**

```text
<div class="reading-semantic-diagram" data-diagram="effectivenessHierarchy"></div>
```

**Corrected:**

```text
**รอบอัปเดต (Refresh cadence):** Dashboard อาจอัปเดตเป็นระยะหรือใกล้เวลาจริง ขึ้นอยู่กับการเก็บข้อมูลและการรายงาน ควรตรวจเวลาอัปเดตของข้อมูล / A dashboard may refresh periodically or near real time, depending on data collection and reporting; check when its data was updated.

<div class="reading-semantic-diagram" data-diagram="effectivenessHierarchy"></div>
```

### ACC-D2-02 — `content/isc2-cc-2026/reading/domain-2.md`, entry line 568

**Original:**

```text
| **Dashboard** | "Real-time", "Operational view", "Visual representation" | แสดงภาพรวมสถานะปัจจุบันผ่านชาร์ต/กราฟสำหรับการเฝ้าระวังประจำวัน | หน้าจอ SOC แสดงสถานะการโจมตีและการแจ้งเตือนความปลอดภัยแบบเรียลไทม์ |
```

**Corrected:**

```text
| **Dashboard** | "Refresh cadence varies", "Operational view", "Visual representation" | แสดงภาพรวมผ่านชาร์ต/กราฟสำหรับการเฝ้าระวังประจำวัน โดยความสดของข้อมูลขึ้นกับรอบอัปเดต (Data freshness depends on refresh cadence) | ตัวอย่างหน้าจอ SOC ที่ตั้งค่าให้อัปเดตใกล้เวลาจริง (Illustrative near-real-time SOC view) |
```

### ACC-D2-02 — `content/isc2-cc-2026/reading/domain-2.md`, entry line 744

**Original:**

```text
<div class="reading-distinction-desc">Visualize — นำเสนอข้อมูลภาพรวมและแนวโน้มแบบ Real-time</div>
```

**Corrected:**

```text
<div class="reading-distinction-desc">Visualize — นำเสนอภาพรวมและแนวโน้มตามรอบอัปเดต (Periodic / near-real-time)</div>
```

### ACC-D2-02 — `js/core/diagram-generator.js`, entry line 1716

**Original:**

```text
<text x="56" y="158" class="diag-text-sub">ภาพรวมสถานะความปลอดภัยแบบเรียลไทม์</text>
```

**Corrected:**

```text
<text x="56" y="158" class="diag-text-sub">ภาพรวมตามรอบอัปเดต (Refresh cadence)</text>
```

### ACC-D2-02 — `js/core/diagram-generator.js`, entry line 1775

**Original:**

```text
<text x="130" y="358" class="diag-text-sub">ค่าดิบที่วัดได้เชิงปริมาณ (Quantifiable Raw Value) ซึ่งเป็นรากฐานข้อมูลของการวัดผลทุกระดับ</text>
```

**Corrected:**

```text
<text x="130" y="358" class="diag-text-sub">ค่าที่กำหนดและวัดได้ (Defined measurable value)</text>
```

### ACC-D2-02 — `js/core/diagram-generator.js`, entry line 1801

**Original:**

```text
<p class="reading-mob-tier-desc"><strong>Dashboard:</strong> แสดงผลกราฟิกแบบ Real-time &middot; <strong>Scorecard:</strong> เปรียบเทียบผลงานจริง (Actual) เทียบเป้าหมาย (Targets) เพื่อชี้วัด Gaps</p>
```

**Corrected:**

```text
<p class="reading-mob-tier-desc"><strong>Dashboard:</strong> แสดงผลกราฟิกตามรอบอัปเดต (Periodic / near-real-time) &middot; <strong>Scorecard:</strong> เปรียบเทียบผลงานจริง (Actual) เทียบเป้าหมาย (Targets) เพื่อชี้วัด Gaps</p>
```

### ACC-D2-02 — `js/core/diagram-generator.js`, entry line 1823

**Original:**

```text
<p class="reading-mob-tier-desc">ค่าดิบที่วัดได้เชิงปริมาณ (Quantifiable Raw Value) ซึ่งเป็นรากฐานข้อมูลของการวัดผลทุกระดับ &middot; คุณสมบัติที่ดี: Relevant (ตรงประเด็น), Measurable (วัดได้จริง), Consistent (วัดซ้ำได้ผลสม่ำเสมอ)</p>
```

**Corrected:**

```text
<p class="reading-mob-tier-desc">ค่าที่กำหนดและวัดได้ (Defined measurable value): จำนวน ร้อยละ อัตราส่วน หรือค่าเฉลี่ย (count, percentage, ratio or average) &middot; คุณสมบัติที่ดี: Relevant (ตรงประเด็น), Measurable (วัดได้จริง), Consistent (วัดซ้ำได้ผลสม่ำเสมอ)</p>
```

## Modified files

Existing paths modified by this batch:

- `content/isc2-cc-2026/reading/domain-2.md` — five approved prose/table/summary spans.
- `js/core/diagram-generator.js` — four text-only replacements within `effectivenessHierarchy`.
- `docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md` — appended current checkpoint.
- `docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md` — appended resumable handoff.
- `docs/plans/task.md` — one new D2-A row.

New report: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-2-batch-a.md`. New QA evidence/scripts are confined to `artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/`, inventoried by `new-files.json`. No scenario-data file, CSS/parser, unrelated shared JS behavior or other-domain production text changed.

## Content and consistency checks

**12/12 PASS** in `content-integrity.json`: exact reversal reproduces both originals; all IDs/order/progress anchors, twelve scenarios/answers/reusable data, original time-valued case and recovery definitions remain. Four diagram placements and all unrelated templates are identical. Stripping only inner SVG/mobile paragraph text proves identical measurement geometry/markup; exactly two desktop and two mobile texts differ. Nine tables retain all row/column shapes, and every row outside the matching dashboard row is unchanged. HOLD scorecard and unrelated dashboard/metrics/report subsections remain intact. Changed units render without leaked Markdown; section/div structure and LF endings are retained. D1-A/D5/Task 157/persistence hashes match entry.

The first QA case-preservation helper used a guessed next-anchor name and overran the intended region. Its failed comparison was traced to that helper boundary; using the actual next heading resolves it. No production change was needed. This is distinct from the existing regression failures below.

## Regression results

Twelve existing Reading suites ran unchanged before and after: **8 pass / 4 fail**. Suite-level outcomes match, while exact-text assertion counts differ as disclosed. D1-A’s taxonomy mismatch is part of the fresh **21-failure** cross-domain baseline. `regression-comparison.json` normalizes timing noise and records exact names; raw logs remain available.

| Suite | Baseline | After | Detail |
|---|---|---|---|
| `verify-reading-notes-domain1` | FAIL | FAIL | 9/10; existing 157-question bank versus historical 119 assertion. |
| `verify-reading-notes-domain2` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain3` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain4` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain5` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-dom-integrity` | PASS | PASS | Pass before and after. |
| `verify-reading-persistence` | PASS | PASS | Pass before and after. |
| `verify-reading-navigation` | PASS | PASS | Pass before and after. |
| `verify-reading-diagram-semantics` | FAIL | FAIL | 7/14; same seven historical failed names. |
| `verify-reading-notes-rendering-quality` | PASS | PASS | Pass before and after. |
| `verify-reading-cross-domain-structure` | FAIL | FAIL | 370/391 → 368/391; exact-text failures 21 → 23. |
| `verify-domain5-integration` | FAIL | FAIL | Same existing protected Domain 1 hash assertion; actual D1 hash unchanged in this batch. |

Exactly two new failed names occur: `topic-2-4-memory-aid: complete subsection text, examples, formulas and values` and `topic-2-review-scenarios: complete subsection text, examples, formulas and values`. Their fixtures demand prior text, so the authorized measurement note/labels and matching review cue trigger them. The recovery/whole-domain text snapshots were already failing. D1-A’s `topic-1-4-control-categories` mismatch remains present and unchanged; it is not counted as a new D2 failure. No other added or removed failed-test name occurs. Diagram assertion payload may reflect changed text while failed names remain the same. No test or fixture was modified to obtain passing results.

## Real Chrome QA

**Before 12/12 and after 12/12 requested states PASS**, using `C:\Program Files\Google\Chrome\Application\chrome.exe` (Chrome/156.0.8078.80) through CDP with a fresh isolated temporary profile. Six dimensions—1920×1080, 1440×900, 1366×768, 768×1024, 390×844, 360×800—were each tested in light/dark. **280 viewport-sized PNGs: 124 baseline + 156 after**, including 32 protected D1/D5 captures.

All matrix states show zero page-level horizontal overflow, no clipped recovery-prose metrics, nine tables with zero nested wrappers, four diagrams and twelve scenarios. Existing Task 157 bottom-aligned headers/font families and horizontal table scrolling remain; both edges of the affected table row are captured. Corrected desktop text bounding boxes fit existing panels at every desktop presentation. Mobile fallback cards preserve readable bilingual metric/cadence wording. Long text continues through ordinary vertical scrolling; separate model and conclusion captures cover the full correction.

Sidebar navigation to both targets passes in all twelve states. Cold direct links, reload and Domain 3→Domain 2/topic return pass for both anchors at the final 360×800 dark state. Original timeline and worked-example rendered text match baseline in every state. Eight additional protected smoke states—D1/D5, 1366×768/360×800, both themes—pass with all earlier correction units and table/diagram/scenario counts. No runtime exceptions or console errors occur.

The established outside-sandbox Chrome setup avoids the previously documented Crashpad launch restriction; only local QA content and a temporary browser profile are used. An initial 100-image baseline was captured before edits; close formula/conclusion views were then added by rendering immutable entry Markdown and diagram JS through a QA-only server override, without reverting live production. Final screenshots use normal settled viewport scrolling, not oversized element crops. Selected before/after desktop/mobile images were inspected natively (`visual-inspection.json`). Full state/capture data and screenshot hashes/dimensions are retained. No screen-reader or learner-outcome verification is claimed.

### Screenshot index

Each state links representative before/after correction views; `screenshot-manifest.json` inventories every capture, including table edges, original example and protected content.

| State | Before | After |
|---|---|---|
| 1920x1080-light | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1920x1080-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1920x1080-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1920x1080-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1920x1080-light-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1920x1080-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1920x1080-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1920x1080-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1920x1080-light-dashboardRow.png) |
| 1920x1080-dark | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1920x1080-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1920x1080-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1920x1080-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1920x1080-dark-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1920x1080-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1920x1080-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1920x1080-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1920x1080-dark-dashboardRow.png) |
| 1440x900-light | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1440x900-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1440x900-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1440x900-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1440x900-light-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1440x900-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1440x900-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1440x900-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1440x900-light-dashboardRow.png) |
| 1440x900-dark | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1440x900-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1440x900-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1440x900-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1440x900-dark-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1440x900-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1440x900-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1440x900-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1440x900-dark-dashboardRow.png) |
| 1366x768-light | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1366x768-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1366x768-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1366x768-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1366x768-light-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1366x768-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1366x768-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1366x768-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1366x768-light-dashboardRow.png) |
| 1366x768-dark | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1366x768-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1366x768-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1366x768-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/1366x768-dark-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1366x768-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1366x768-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1366x768-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/1366x768-dark-dashboardRow.png) |
| 768x1024-light | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/768x1024-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/768x1024-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/768x1024-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/768x1024-light-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/768x1024-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/768x1024-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/768x1024-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/768x1024-light-dashboardRow.png) |
| 768x1024-dark | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/768x1024-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/768x1024-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/768x1024-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/768x1024-dark-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/768x1024-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/768x1024-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/768x1024-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/768x1024-dark-dashboardRow.png) |
| 390x844-light | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/390x844-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/390x844-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/390x844-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/390x844-light-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/390x844-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/390x844-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/390x844-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/390x844-light-dashboardRow.png) |
| 390x844-dark | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/390x844-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/390x844-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/390x844-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/390x844-dark-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/390x844-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/390x844-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/390x844-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/390x844-dark-dashboardRow.png) |
| 360x800-light | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/360x800-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/360x800-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/360x800-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/360x800-light-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/360x800-light-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/360x800-light-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/360x800-light-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/360x800-light-dashboardRow.png) |
| 360x800-dark | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/360x800-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/360x800-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/360x800-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/before/360x800-dark-dashboardRow.png) | [model](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/360x800-dark-model.png); [conclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/360x800-dark-conclusion.png); [measurement](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/360x800-dark-measurement.png); [dashboardRow](../../../artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/screenshots/after/360x800-dark-dashboardRow.png) |

## Preservation and remaining issues

The immutable entry inventory protects **31,578 pre-existing files**, including all uncommitted tracked/untracked work. The final verifier compares every entry SHA-256, permits only the five listed existing paths and confines new paths to this report/QA directory. Original task/progress/handoff bytes are preserved as prefixes. All prior D1-A, D5 Batch 1–3 and Task 157 reports/artifacts remain unchanged. All D1/D3/D4/D5 production text, scenario data, Learning Slides, Vocabulary, Question Banks, Quiz and navigation/persistence code remain protected. The shared diagram file changes only the four documented measurement text spans; every other template and all geometry/attributes remain intact. No branch switch, destructive Git command, commit or push occurred. Historical stale task-row statuses are preserved; dated checkpoints govern current state.

No authorized D2-A finding is blocked. Four historical failing suites, including D1-A’s known content snapshot, remain outstanding; the two new authorized-text mismatches require separately scoped fixture maintenance if desired. VER-D2-01 remains HOLD with its original ambiguous scorecard numbers/units untouched. CISA direct-access 403 and the corrected local slide locator are disclosed evidence limits, not unresolved correction blockers. No other batch, new photograph, SVG diagram, animation or interaction was started.

## Resumable checkpoint and next step

Completed: exact authorization/decision reconciliation; original/authoritative source review; baseline inventory and suites; nine minimal edits; Thai-English and consistency review; content checks; before/after Chrome/navigation and protected-content checks; report and append-only checkpoints. Final verification command:

```powershell
python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/verify-final.py
```

Read `final-verification.json` for the fresh final result. Preserve all historical evidence and avoid rerunning old finalizers. Human acceptance remains pending.

Recommended next batch after acceptance and separate explicit authorization: **D3-A — ACC-D3-01, ENR-D3-02, ENR-D3-03, ENR-D3-04**. No next batch or visual enrichment is authorized by this completion.

**Phase 3A Domain 2 Batch A Complete — Awaiting Human Acceptance.**
