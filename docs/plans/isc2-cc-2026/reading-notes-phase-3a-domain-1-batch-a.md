# Phase 3A Domain 1 Batch A — evidence-based academic corrections

Date: **2026-11-04 (Asia/Bangkok)**. **D1-A implemented and verified; human acceptance pending.**

## Findings and authorization

The current user request explicitly authorizes only batch D1-A from the Phase 2 implementation plan. Historical `implementationAuthorized: false` values describe the earlier approval gate; this request supplies the bounded implementation authorization. No HOLD or REJECT finding was implemented. Dependencies are empty for all three records. The audit/review, current checkpoints, completed Domain 5 reports and Task 157 report were consulted before production changes. Exact records and acceptance criteria are preserved in `approved-findings.json`.

| Finding | Phase 2 decision | Objective and exact target | Implemented boundary |
|---|---|---|---|
| ACC-D1-01 | APPROVE WITH REVISION | 1.1; `topic-1-1-privacy-data-protection`, entry lines 251–352 | Qualify consent/lawful-basis inference and directly related wording in the same privacy subsection. Retain encryption/privacy distinction, roles, inventory and qualified erasure. |
| VER-D1-01 | APPROVE WITH REVISION | 1.5; `topic-1-5-isc2-ethics`, entry lines 977–1059 | Replace only the exceptionless exam conclusion with contextual professional judgment, public welfare, evidence preservation and authorized guidance. Keep all four canons. |
| ENR-D1-04 | APPROVE | 1.4; `topic-1-4-control-categories`, entry lines 782–794 | Add one bilingual outline/course terminology note; preserve all four existing category definitions and examples. |

Shared acceptance: minimal source-aligned change, identical Thai/English conditions and limitations, intact anchors and useful examples, repeated-summary/scenario/diagram review, primary-source verification and real 360–390px rendering. No vendor setup, advanced taxonomy, new media or unrelated learning-module edits. The full existing privacy/ethics units, category renderer, review scenarios and matching diagrams were examined for consistency.

## Academic evidence

Original source path supplied by the user is unavailable on this machine. The matching accessible repository corpus `ISC2 Update 2026/Domain 1` was used: transcript privacy 00:27:36–00:32:50, controls 00:57:04–01:02:04 and ethics 01:07:59–01:11:04. Original screenshots 225943, 231044 and 003325 were viewed at native resolution. They establish the existing learning context, not universal law or exam-answer certainty. `academic-verification.json` and `handoff-inspection.json` record source details and hashes.

- [EDPB legal basis](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en): GDPR offers context-dependent lawful grounds, including consent. Missing consent alone cannot establish unlawful processing. The replacement preserves privacy versus access restriction and avoids a jurisdiction-free consent rule.

- [EDPB data-protection basics](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en): the checklist and lawfulness/transparency/purpose sections distinguish lawful basis and information duties from security safeguards. These support the bounded table correction; they do not resolve every Thai PDPA example or retention period.

- [ISC2 Code of Ethics](https://www.isc2.org/ethics): the introduction requires professional ethical judgment alongside the four mandatory canons. The inspected page does not establish the old exceptionless conflict algorithm. The revised security/legal escalation examples are a teaching application of the approved review, not a claimed official universal procedure. Neither the opposite hierarchy nor permission for unauthorized disclosure, concealment or illegality is inferred.

- [ISC2 CC exam outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective **1 September 2026**: objective 1.4 names Technical, Administrative and Physical controls; objectives 1.1 and 1.5 map privacy and ethics. The added note explains this course’s managerial/operational subdivision without changing the official list or predicting question frequency.

- [NIST management-controls definition](https://csrc.nist.gov/glossary/term/management_controls) and [operational-controls definition](https://csrc.nist.gov/glossary/term/operational_controls), attributed to FIPS 200: risk/security management and people-executed activities support the existing teaching distinction. These are contextual definitions, not evidence of a universal one-to-one taxonomy mapping. The unavailable administrative-controls glossary URL was not used as evidence.

All primary references were reopened on 2026-11-04. English and Thai replacements were reviewed for the same actor, scope, condition and limitation. This is a bounded academic/editorial review, not certification of all pre-existing legal material or a human bilingual sign-off.

## Original and corrected wording

Five exact spans in **one production file** changed. Full originals, structured pairs and unified diff are retained in the QA directory. Coordinates below use the immutable entry file; the taxonomy insertion shifts the final ethics conclusion by two lines.

### ACC-D1-01 — entry line 294

**Original:**

```text
องค์กรยังคงต้องเคารพสิทธิและความยินยอมของ Data Subject เสมอ
```

**Corrected:**

```text
องค์กรต้องเคารพสิทธิของ Data Subject ตามกฎหมายที่ใช้บังคับ และขอความยินยอมเมื่อใช้ฐานความยินยอม <em>Respect data-subject rights under applicable law; obtain consent when relying on consent as the legal basis.</em>
```

### ACC-D1-01 — entry line 319

**Original:**

```text
| **มาตรการควบคุมหลัก** | Encryption, Access Control, Need to Know, Firewalls | Consent, Data Retention, Purpose Limitation, Right to be Forgotten |
```

**Corrected:**

```text
| **มาตรการควบคุมหลัก** | Encryption, Access Control, Need to Know, Firewalls | Lawful Basis (เช่น Consent เมื่อเหมาะสม), Transparency, Data Retention, Purpose Limitation, Right to be Forgotten |
```

### ACC-D1-01 — entry line 320

**Original:**

```text
| **จุดลวงในข้อสอบ** | การเข้ารหัสข้อมูล (Encryption) ตอบสนอง Confidentiality แต่ *ไม่ได้แปลว่าปฏิบัติตาม Privacy ครบถ้วน* หากเก็บข้อมูลโดยไม่ได้รับความยินยอม! | ข้อสอบมักถามว่า "การเก็บข้อมูลลูกค้าโดยเข้ารหัสอย่างดีแต่ไม่แจ้งวัตถุประสงค์ ผิดหลักการใด?" คำตอบคือ **Privacy Violation** |
```

**Corrected:**

```text
| **ตัวอย่างวิเคราะห์ (Illustrative example)** | Encryption จำกัดการเข้าถึง แต่เพียงอย่างเดียวยังไม่ยืนยันว่าปฏิบัติตาม Privacy ครบถ้วน / Encryption restricts access; it alone does not establish privacy compliance. | ต้องพิจารณาวัตถุประสงค์ ฐานกฎหมาย และหน้าที่ด้านความโปร่งใสตามกฎหมายที่ใช้บังคับ; ตาม GDPR ความยินยอมเป็นฐานหนึ่ง / Check purpose, lawful basis and applicable transparency duties; under GDPR, consent is one possible basis. |
```

### ENR-D1-04 — entry line 784

**Original:**

```text
### 1.4.1 Security Control Categories

```

**Corrected:**

```text
### 1.4.1 Security Control Categories

**คำศัพท์ในโครงร่างสอบ (Outline terminology):** โครงร่างสอบ CC ที่มีผล 1 กันยายน 2026 ระบุหมวด Technical, Administrative และ Physical; บทเรียนนี้แยกงานบริหาร (Managerial) และงานประจำวันโดยบุคลากร (Operational) เพื่อช่วยอธิบายด้าน Administrative / The CC outline effective 1 September 2026 names Technical, Administrative and Physical controls; this course explains administrative work through managerial and day-to-day operational activities.

```

### VER-D1-01 — entry line 1057

**Original:**

```text
  <p><strong>ข้อสรุปเด็ดขาดสำหรับห้องสอบ:</strong> สมาชิก ISC2 ต้องยึดถือประโยชน์และความปลอดภัยของสังคมส่วนรวม (<strong>Canon 1</strong>) เป็นอันดับสูงสุดเสมอ และ <strong>Canon 1 อยู่เหนือผลประโยชน์ของนายจ้างหรือลูกค้า (Canon 3) อย่างไม่มีข้อยกเว้น</strong></p>
```

**Corrected:**

```text
  <p><strong>แนวทางใช้ดุลยพินิจ (Professional judgment):</strong> คำนึงถึงความปลอดภัยของสาธารณะ เก็บรักษาหลักฐานที่เกี่ยวข้อง และขอคำแนะนำผ่านช่องทางที่มีอำนาจ เช่น ผู้รับผิดชอบด้านความปลอดภัยหรือฝ่ายกฎหมาย โดยพิจารณาหน้าที่ทั้งสี่ร่วมกับข้อเท็จจริง ไม่อนุมานว่ามีสิทธิปกปิด เปิดเผยข้อมูลต่อสาธารณะโดยพลการ หรือทำผิดกฎหมาย / Protect public welfare, preserve relevant evidence and seek guidance through authorized channels, such as security leadership or legal counsel, considering all four duties and the facts. Do not infer permission to conceal, disclose publicly without authorization or act illegally.</p>
```

## Modified files

Existing files modified by this batch:

- `content/isc2-cc-2026/reading/domain-1.md` — five documented spans only.
- `docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md` — appended dated checkpoint.
- `docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md` — appended resumable handoff.
- `docs/plans/task.md` — one new D1-A task row.

New report: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-1-batch-a.md`. New evidence/scripts/screenshots are confined to `artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/`; the final `new-files.json` inventories them. No global CSS/JavaScript, existing diagram labels, scenario-data file or other-domain production content changed.

## Content and consistency checks

**12/12 checks PASS.** Exact reversal of the five documented changes reproduces the entry file; all IDs/order, eight scenario blocks/answers, twelve diagram placements/templates, four category definitions/examples, four canon cards, judgment caution, privacy roles/inventory/retention/erasure caveat and eight table row/column shapes are preserved. Unrelated table rows and structural wrappers match. Task 157 parser/CSS and global diagram/component hashes match entry. The new note renders outside the custom fence, without literal Markdown delimiters. Original LF endings remain.

PrivacyFlow already qualifies consent by basis in its mobile connector. Existing EthicsCanons desktop/mobile text already emphasizes judgment. The quick-review mnemonic names all four canons without repeating the exceptionless conclusion. None of the eight review scenarios repeats the corrected claims; reusable scenario data therefore needs no edit. No diagram-label correction or new visual was necessary.

## Regression results

The same twelve existing suites ran before and after, unchanged: **8 passing / 4 failing suites**. Suite-level outcomes match the fresh baseline, but this is **not** a claim that every failed assertion is unchanged. `regression-comparison.json` removes timing noise and records exact failed-test names; raw logs are retained.

| Suite | Baseline | After | Interpretation |
|---|---|---|---|
| `verify-reading-notes-domain1` | FAIL | FAIL | 9/10; protected updated-bank count is 157, older assertion expects 119. |
| `verify-reading-notes-domain2` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain3` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain4` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain5` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-dom-integrity` | PASS | PASS | Pass before and after. |
| `verify-reading-persistence` | PASS | PASS | Pass before and after. |
| `verify-reading-navigation` | PASS | PASS | Pass before and after. |
| `verify-reading-diagram-semantics` | FAIL | FAIL | 7/14; same seven historical diagram assertions. |
| `verify-reading-notes-rendering-quality` | PASS | PASS | Pass before and after. |
| `verify-reading-cross-domain-structure` | FAIL | FAIL | 371/391 → 370/391; one additional exact-text snapshot rejects the authorized taxonomy note. |
| `verify-domain5-integration` | FAIL | FAIL | Already fails at historical Domain 1 hash; actual hash changes as expected for this authorized Domain 1 edit. |

The new failed assertion is `topic-1-4-control-categories: complete subsection text, examples, formulas and values`. The fixture requires the previous paragraph text exactly; adding the specifically approved explanation necessarily changes it. Existing whole-Domain-1/privacy/ethics snapshot failures were already failing at entry. No other new failed-test name appears. No test or fixture was edited to force passing. Dedicated scope/structure checks and Chrome results validate the intended change; stale fixture/hash maintenance remains a separately scoped follow-up.

## Real Chrome QA

**Before 12/12 and after 12/12 viewport/theme states PASS**, using `C:\Program Files\Google\Chrome\Application\chrome.exe` (Chrome/156.0.8078.80) through CDP with an isolated temporary profile. Required dimensions: 1920×1080, 1440×900, 1366×768, 768×1024, 390×844 and 360×800, each light/dark. **204 viewport-sized screenshots: 92 baseline and 112 after** (including 20 protected Domain 5 captures). No Chrome verification is simulated.

All states retain readable Thai/English, parsed Markdown, eight Domain 1 tables, twelve diagrams, eight scenarios and zero nested table wrappers. Task 157 bottom-aligned headers and font families remain. Zero page-level overflow, clipped changed-prose metrics, runtime exceptions or console errors. Narrow tables use the existing contained horizontal scroll; left/right edges and the changed final row are captured. This does not claim all columns fit simultaneously on a phone. Retained privacy/ethics desktop/mobile diagram presentation text matches the baseline.

Sidebar navigation to all three affected anchors passes in every matrix state. Cold direct navigation, reload and Domain 2→Domain 1/topic return pass for all three anchors at the final 360×800 dark state, with settled target-position samples retained. Protected Domain 5 checks additionally pass at 1366×768 and 360×800, both themes: all five prior correction units, fourteen single-wrapper tables, twelve scenarios, four diagrams and corrected ATT&CK text remain present.

The initial sandbox Chrome launch failed with a Crashpad pipe error; the approved outside-sandbox retry used only the local QA server and a temporary browser profile. The first navigation harness sampled before the existing font/image restoration completed, and the first protected D5 check sampled its loading shell. Source inspection and recorded metrics identified these harness timing issues. Content-ready and settled-position waits resolved them without product changes. Initial timing/loading JSON is preserved. Visual inspection also caught a supplemental selector matching the header row; it was corrected to the final body row. The refreshed captures show the entire changed row at both horizontal edges, with row-index and viewport-bound metrics in fter-rows-browser-qa.json. The initial 76 before screenshots were captured before production edits; the final expanded 92-image baseline rerenders the immutable entry Markdown through a QA-only server override, avoiding any reversion of the live working file. All other production inputs are preserved.

Representative desktop/light, laptop/dark and phone screenshots were visually inspected for Thai glyphs, wrapping, table access and unchanged diagrams. Full screenshot paths/hashes/dimensions are in `screenshot-manifest.json`; the linked index below covers each configuration. Automated metrics cover the whole matrix; this is not a screen-reader or learner-outcome study.

### Screenshot index

| Viewport/theme | Before | After |
|---|---|---|
| 1920x1080-light | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-light-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-light-ethicsDiagram.png) |
| 1920x1080-dark | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1920x1080-dark-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1920x1080-dark-ethicsDiagram.png) |
| 1440x900-light | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-light-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-light-ethicsDiagram.png) |
| 1440x900-dark | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1440x900-dark-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1440x900-dark-ethicsDiagram.png) |
| 1366x768-light | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-light-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-light-ethicsDiagram.png) |
| 1366x768-dark | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/1366x768-dark-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/1366x768-dark-ethicsDiagram.png) |
| 768x1024-light | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-light-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-light-ethicsDiagram.png) |
| 768x1024-dark | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/768x1024-dark-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/768x1024-dark-ethicsDiagram.png) |
| 390x844-light | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-light-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-light-ethicsDiagram.png) |
| 390x844-dark | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/390x844-dark-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/390x844-dark-ethicsDiagram.png) |
| 360x800-light | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-light-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-light-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-light-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-light-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-light-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-light-ethicsDiagram.png) |
| 360x800-dark | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/before/360x800-dark-ethicsDiagram.png) | [privacyExample](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-dark-privacyExample.png); [categories](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-dark-categories.png); [ethicsConclusion](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-dark-ethicsConclusion.png); [privacyDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-dark-privacyDiagram.png); [ethicsDiagram](../../../artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/screenshots/after/360x800-dark-ethicsDiagram.png) |

## Preservation and remaining issues

The immutable entry inventory covers **31,309 pre-existing files**, including all dirty/untracked prior work. `verify-final.py` performs the final SHA-256 comparison and new-file allowlist check. Only the four listed existing paths are permitted to change. Original task/progress/handoff bytes remain prefixes. All Domain 5 ACC-D5-01–05 text/data and Batch 1–3 artifacts/reports, Task 157 table fixes/evidence, global parser/CSS/diagrams, Domain 2–5 content, Learning Slides, Vocabulary, Question Banks, Quiz, progress and navigation code remain protected. No commit, push, branch switch, reset or clean was performed. Historical stale task-row statuses remain untouched; the dated checkpoints describe completed earlier batches.

No D1-A finding is blocked. VER-D1-01 is complete as an unsupported-certainty correction; it does not settle a universal ethics hierarchy. Held legal material, including jurisdiction-specific retention assumptions, remains outside this batch. Four failing suites and the additional authorized-text snapshot failure remain disclosed. No photograph, new diagram, animation, interaction, unrelated Domain 1 edit or other batch was started.

## Resumable checkpoint and next step

Completed: approved-record reconciliation; source/authority review; immutable baseline; before/after suites and screenshots; five minimal edits; scope and bilingual review; content/Chrome checks; report and tracker/progress/handoff checkpoint. Final preservation command:

```powershell
python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/verify-final.py
```

Read `final-verification.json` for the fresh result. Do not rerun historical finalizers or overwrite earlier batch evidence. Final results and file hashes are the review boundary; human acceptance remains pending.

Recommended next batch after acceptance and separate explicit authorization: **D2-A — ACC-D2-01 and ACC-D2-02** (recovery/measurement consistency). No next batch or visual enrichment is authorized by this completion.

**Phase 3A Domain 1 Batch A Complete — Awaiting Human Acceptance.**
