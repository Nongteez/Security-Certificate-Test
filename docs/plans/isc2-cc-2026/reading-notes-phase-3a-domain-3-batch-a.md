# Phase 3A Domain 3 Batch A — academic corrections and verification

Date: **2026-11-04 (Asia/Bangkok)**. **D3-A implemented and verified; human acceptance pending.**

## Findings and authorization

The user request explicitly authorizes only D3-A from the Phase 2 implementation plan. Historical `implementationAuthorized: false` fields describe the earlier approval gate, now superseded for these four records only. Mandatory audit/review/checkpoints, D1-A/D2-A and completed D5 reports, Task 157 report and exact decision records were reviewed before editing. `approved-findings.json` retains the full acceptance criteria and required revisions. All four records have **no dependencies**; no HOLD or REJECT finding was implemented.

| Finding | Decision | Objective and exact subsection | Accepted scope |
|---|---|---|---|
| ACC-D3-01 | APPROVE WITH REVISION | 3.1; `topic-3-1-jml-lifecycle`, entry lines 9–54 | Explicit Helpdesk example policy; task-scoped access, obsolete/conflicting rights versus justified shared access; no universal revoke-all order or automatic SoD conclusion. |
| ENR-D3-02 | APPROVE | 3.1; `topic-3-1-provisioning`, entry lines 89–137 | One approved-versus-observed report/payroll/network check, correct unintended grant and retest allowed/denied actions. Policy-designated approver, not universal HR-only resource approval. |
| ENR-D3-03 | APPROVE WITH REVISION | 3.1; `topic-3-1-access-review`, entry lines 138–192 | Accountable ownership versus activity; retain departed-user example, avoid universal idle-day definition; separate review decision, applied authorized change and verification. |
| ENR-D3-04 | APPROVE | 3.1; `topic-3-1-deprovisioning`, entry lines 193–263 | One synthetic surviving-app-session observation, supported withdrawal and denial check; preserve existing retention caveat, no token/configuration tutorial. |

Shared acceptance requires small source-aligned edits, matching Thai/English actor/condition/limitation, preserved anchors/examples/diagrams, related-summary/scenario review and actual mobile/browser/regression/preservation verification. Every target was read in full with related current diagram/table/review/scenario context. No unrelated IAM-model or advanced implementation expansion is authorized.

## Academic evidence

- [NIST SP 800-53r5](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf), inspected PDF September 2020 with December updates: **AC-2/AC-3** support accountable, approved and enforced access; **AC-5** ties separation to defined conflicting duties; **AC-6(7)** and **PS-5** support review and adjustment to current need. They do not mandate removing every old right before every new grant or preserving all prior rights. Locations: printed pp.19–23, 26, 36–38 and 225–226.

- [NIST SP 800-63B-4, Session Management](https://pages.nist.gov/800-63-4/sp800-63b/session/), section 5: application/session-host state matters, and IdP/RP sessions are separately managed. This supports a **possible observed surviving application session**, not a guarantee that central disablement always behaves identically across products. The example uses supported revocation and an effective denial check without protocol internals.

- [ISC2 CC outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective **1 September 2026**: objective 3.1 covers roles, provision/review/deprovision and related tools; 3.2 includes least privilege/SoD. This maps foundational scope, not exact exam questions, fixed procedures or permission bundles.

References were reopened on 2026-11-04. The unavailable guessed 800-63C session URL was not used; the directly inspected 800-63B-4 page supplies the relevant session evidence. Standards principles inform the authored examples; none is represented as an exact NIST-mandated scenario or vendor procedure.

The supplied Settapon source directory is absent on this machine (fresh path check). The available matching repository corpus `ISC2 Update 2026/Domain 3` was used: `DOMAIN 3.txt` provisioning/review/withdrawal segment around 00:04:11–00:09:37, `D3 Example.md` Finance-transfer case, and native screenshot **2026-09-27 040655**, which shows the six findings and six-month review example without a universal revoke-all order. Published `lesson-d3-01-roles-provisioning.json` and `lesson-d3-02-review-deprovisioning.json` supply existing approved-action, ownership and observed-session teaching to adapt. Those learning files and source materials remain unchanged. `academic-verification.json` and `handoff-inspection.json` record source depth, conclusions and hashes.

## Implemented correction and bilingual review

ACC-D3-01 replaces the excessive Domain Admin example and universal ordering with an explicit synthetic Helpdesk policy, obsolete ERP payment-approval finding, approved task access and effective verification. Justified shared access can remain; unneeded/conflicting rights must be addressed under the policy. Combined rights alone do not prove an SoD violation. Matching obsolete-rights wording in the mover/role-change context is qualified. The desktop JML already says “Revoke Obsolete Permissions”; exactly one contradictory mobile paragraph is corrected to match, with all geometry/attributes and other diagram content retained.

ENR-D3-02 adds one compact report/payroll/network check: only report reading is approved, payroll change unexpectedly succeeds, correct the excess grant and retest both allowed and denied actions. The existing assigning-roles sentence now distinguishes verified job information from policy-defined resource approval authority. No new onboarding sequence or table was added.

ENR-D3-03 retains the departed-user example and adds investigation of unaccountable ownership despite recent activity. The existing 90-day example is explicitly illustrative/policy-defined. The six-month Finance review case now includes the authorized decision, applied removal and effective denial while approved IT work remains. No ownership matrix or universal inactivity limit was created.

ENR-D3-04 adds one contract-end/session observation and a supported application withdrawal/denial check using that existing session, retaining required evidence. Behavior is explicitly product-dependent; no global disable→revoke sequence or guarantee is taught. Existing four triggers, four activity labels and the full retention/evidence caveat remain.

Thai and English replacements were reviewed for matching actors, example policy, necessary versus obsolete access, approval/enforcement and observed versus expected outcome. Least privilege follows justified current tasks; authentication is not equated with authorization. Existing correct summaries, tables and all twelve scenarios/data already align with these bounded principles, so none was rewritten. No human bilingual acceptance is inferred.

## Original and corrected wording

All **twelve exact spans** (eleven in Markdown, one existing mobile diagram paragraph) are recorded below. Coordinates use immutable entry files; added paragraphs shift final Markdown line numbers. Full original files, structured pairs and unified diff are retained.

### ACC-D3-01 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 32

**Original:**

```text
การได้รับสิทธิ์ใหม่เพิ่มเข้ามาแต่สิทธิ์เดิมของแผนกเก่าไม่ถูกเพิกถอนออกไป
```

**Corrected:**

```text
การได้รับสิทธิ์ใหม่เพิ่มเข้ามาแต่สิทธิ์เดิมที่หมดความจำเป็นไม่ถูกเพิกถอน (Obsolete access remains)
```

### ACC-D3-01 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 35

**Original:**

```text
  <strong>กรณีศึกษาข้อสอบ (Finance-to-IT Transfer):</strong> นายสมคิด ย้ายตำแหน่งจากแผนกบัญชี (Finance) ไปเป็นผู้ดูแลระบบฝ่ายไอที (IT Helpdesk) ฝ่ายไอทีได้สร้างสิทธิ์ Domain Admin ให้เขา แต่ไม่มีการเพิกถอนสิทธิ์การอนุมัติการจ่ายเงินในระบบ ERP เดิม ทำให้สมคิดมีทั้งสิทธิ์เข้าถึงระบบหลังบ้านและสิทธิ์อนุมัติเงิน ซึ่งเป็นความเสี่ยง <strong>Privilege Creep</strong> และละเมิดหลักการ <strong>Segregation of Duties (SoD)</strong> อย่างร้ายแรง วิธีแก้ที่ถูกต้องคือต้องมีขั้นตอนทบทวนและเพิกถอนสิทธิ์เดิมทั้งหมดก่อนมอบสิทธิ์ใหม่เสมอ
```

**Corrected:**

```text
  <p><strong>สถานการณ์สมมติ (Finance-to-IT Transfer):</strong> นโยบายตัวอย่างให้ Helpdesk รีเซ็ตรหัสผ่านผู้ใช้ทั่วไปได้ แต่ไม่ให้ Domain Admin หรืออนุมัติจ่ายเงิน ERP เมื่อสมคิดย้ายจาก Finance มา Helpdesk สิทธิ์อนุมัติจ่ายเงินเดิมที่ยังค้างจึงเป็นสิทธิ์เกินความจำเป็น ให้คงสิทธิ์ส่วนกลางที่ยังมีเหตุผลรองรับ ถอนสิทธิ์ที่เลิกใช้หรือขัดนโยบาย และให้เฉพาะงานใหม่ที่อนุมัติแล้ว พร้อมตรวจผลจริง ลำดับการเปลี่ยนผ่านเป็นไปตามนโยบาย; การมีหลายสิทธิ์ร่วมกันไม่ได้พิสูจน์การละเมิด SoD โดยอัตโนมัติ</p>
  <p><strong>Illustrative policy:</strong> Helpdesk may reset ordinary users’ passwords, but not administer the domain or approve ERP payments. When Somkid moves from Finance to Helpdesk, retained ERP payment approval is obsolete excess access. Retain justified common access, revoke obsolete or conflicting permissions, grant only approved new tasks and verify effective access. Transition order follows policy; combined permissions alone do not prove a SoD violation.</p>
```

### ACC-D3-01 — `js/core/diagram-generator.js`, entry line 1914

**Original:**

```text
<p class="reading-mob-tier-desc">ประเมินสิทธิ์ใหม่และเพิกถอนสิทธิ์เดิมออกทันที เพื่อป้องกันปัญหา Privilege Accumulation / Privilege Creep (สิทธิ์เก่าสะสม)</p>
```

**Corrected:**

```text
<p class="reading-mob-tier-desc">ทบทวนตามหน้าที่ใหม่ ถอนสิทธิ์ที่หมดความจำเป็นหรือขัดนโยบาย และคงสิทธิ์ที่ยังจำเป็นตามอำนาจอนุมัติ (Review access; revoke obsolete/conflicting rights and retain justified access under policy)</p>
```

### ENR-D3-02 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 114

**Original:**

```text
การผูกบัญชีเข้ากับบทบาทหน้าที่ (Roles) ตามตำแหน่งงานที่ได้รับการอนุมัติจากฝ่ายทรัพยากรบุคคล
```

**Corrected:**

```text
การผูกบัญชีกับบทบาทหน้าที่ (Roles) ตามข้อมูลตำแหน่งงานที่ตรวจสอบแล้ว โดยผู้มีอำนาจตามนโยบายอนุมัติสิทธิ์ของระบบหรือทรัพยากรนั้น ไม่ใช่ถือว่า HR อนุมัติสิทธิ์ทุกระบบเสมอ / Verified job information informs the role; the policy-designated authority approves resource access, rather than assuming HR approves every system.
```

### ENR-D3-02 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 138

**Original:**

```text
<h3 id="topic-3-1-access-review">
```

**Corrected:**

```text
<p><strong>ตัวอย่างสมมติ: สิทธิ์ที่อนุมัติเทียบกับผลจริง (Approved vs observed):</strong> ผู้มีอำนาจตามนโยบายอนุมัติให้นักวิเคราะห์อ่านรายงานรายเดือนเท่านั้น ไม่ให้แก้ Payroll หรือดูแล Network แต่ผลตรวจพบว่าแก้ Payroll ได้ ต้องแก้สิทธิ์ที่เกินและตรวจซ้ำว่าอ่านรายงานได้ ส่วนแก้ Payroll และดูแล Network ต้องถูกปฏิเสธ</p>
<p><strong>Illustrative check:</strong> The policy-designated approver authorizes only monthly-report reading, not payroll changes or network administration. Testing shows payroll changes also succeed. Correct the excess grant, then verify that report reading succeeds while payroll changes and network administration are denied.</p>

<h3 id="topic-3-1-access-review">
```

### ENR-D3-03 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 154

**Original:**

```text
บัญชีที่ไม่มีการล็อกอินเข้าใช้งานเป็นเวลานาน (เช่น เกิน 90 วัน) แต่ยังเปิดทิ้งไว้
```

**Corrected:**

```text
บัญชีที่ไม่มีการล็อกอินเป็นเวลานานแต่ยังเปิดทิ้งไว้ เช่น เกิน 90 วันภายใต้นโยบายสมมติ; เกณฑ์จริงกำหนดตามบริบทและนโยบายองค์กร / For example, over 90 days under an illustrative policy; the actual inactivity threshold is organization-defined.
```

### ENR-D3-03 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 168

**Original:**

```text
พนักงานย้ายตำแหน่งงานแล้ว แต่ยังคงมีสิทธิ์ของหน้าที่งานเดิมหลงเหลืออยู่
```

**Corrected:**

```text
พนักงานย้ายตำแหน่งแล้ว แต่สิทธิ์งานเดิมที่หมดความจำเป็นยังค้างอยู่ (Obsolete access after a role change)
```

### ENR-D3-03 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 175

**Original:**

```text
การที่สิทธิ์ในระบบค่อย ๆ พอกพูนขึ้นเรื่อย ๆ จากการย้ายแผนกหลายครั้ง
```

**Corrected:**

```text
การที่สิทธิ์เกินความจำเป็นสะสมจากการย้ายแผนกหลายครั้ง โดยไม่ถอนส่วนที่เลิกใช้ (Accumulation of unnecessary access)
```

### ENR-D3-03 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 182

**Original:**

```text
บัญชีของผู้ใช้ที่ลาออก พ้นสภาพ หรือสัญญาจ้างสิ้นสุดลงแล้ว แต่บัญชียังไม่ถูกระงับหรือเพิกถอน
```

**Corrected:**

```text
ตัวอย่างคือบัญชีของผู้ลาออกหรือสิ้นสุดสัญญาที่ยังไม่ถูกระงับ นอกจากนี้ต้องตรวจสอบบัญชีที่หาผู้รับผิดชอบที่มีอำนาจไม่ได้ แม้จะมีการใช้งานล่าสุด; Activity ไม่ได้ยืนยัน Ownership / A departed user’s active account is one example. Also investigate accounts without an identifiable accountable owner, even if recently used; activity alone does not establish ownership.
```

### ENR-D3-03 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 191

**Original:**

```text
  <p>พนักงานย้ายจากแผนก Finance ไปแผนก IT ได้รับสิทธิ์ IT Admin แต่ระบบยังไม่ได้ถอดสิทธิ์ดูงบการเงินใน Finance ออก ผ่านไป 6 เดือนพนักงานยังเปิดดูข้อมูลลับทางการเงินได้ ปัญหานี้เรียกว่า <strong>Privilege Accumulation</strong> และต้องแก้ไขด้วยกระบวนการ <strong>Periodic Access Review</strong></p>
```

**Corrected:**

```text
  <p>สมมติว่านโยบายไม่ให้เข้าดูรายงาน Finance หลังย้ายไปงาน IT นี้ ผ่านไป 6 เดือนพนักงานยังเปิดรายงานเดิมได้ จึงพบสิทธิ์เกินความจำเป็น การทบทวนต้องตามด้วยคำตัดสินจากผู้มีอำนาจ การถอนสิทธิ์ที่อนุมัติให้ถอน และการตรวจว่าอ่านรายงาน Finance ไม่ได้แล้ว ขณะที่งาน IT ที่ยังอนุมัติไว้ทำได้</p>
  <p><strong>Review → apply → verify:</strong> Under the example policy, Finance-report access is no longer needed after this IT transfer. Six months later it still works. Obtain the authorized review decision, apply the approved removal and verify that Finance-report reading is denied while approved IT work remains available.</p>
```

### ACC-D3-01 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 217

**Original:**

```text
พนักงานเปลี่ยนบทบาทหรือย้ายฝ่าย (เพิกถอนสิทธิ์เดิมและปรับปรุงสิทธิ์ใหม่)
```

**Corrected:**

```text
พนักงานเปลี่ยนบทบาทหรือย้ายฝ่าย (ถอนสิทธิ์ที่หมดความจำเป็นและปรับให้ตรงหน้าที่ใหม่ตามนโยบาย / Revoke obsolete access and align rights with the new duties under policy)
```

### ENR-D3-04 — `content/isc2-cc-2026/reading/domain-3.md`, entry line 264

**Original:**

```text
<h3 id="topic-3-1-iam-frameworks">
```

**Corrected:**

```text
<p><strong>ตัวอย่างสมมติ: Session ในแอปยังใช้ได้ (Surviving app session):</strong> สัญญาจ้างสิ้นสุดและผู้ดูแลมีอำนาจถอนสิทธิ์แล้ว บัญชีกลางถูกระงับ แต่ในตัวอย่างนี้ Session เดิมของแอปยังเปิดข้อมูลได้ ให้ใช้กระบวนการถอนสิทธิ์หรือ Session ที่แอปรองรับ แล้วตรวจด้วย Session เดิมว่าถูกปฏิเสธการเข้าถึง พร้อมเก็บหลักฐานตามนโยบาย พฤติกรรมนี้ไม่ได้เกิดเหมือนกันทุกแอป</p>
<p><strong>Illustrative session check:</strong> The contract has ended and the administrator is authorized to withdraw access. The central account is disabled, but this application’s existing session still reads data. Use the application’s supported access/session revocation process, verify denial with that existing session, and retain required evidence. Application behavior varies.</p>

<h3 id="topic-3-1-iam-frameworks">
```

## Modified files

Existing paths modified by this batch:

- `content/isc2-cc-2026/reading/domain-3.md` — eleven spans within the four authorized units.
- `js/core/diagram-generator.js` — one `iamLifecycle` mobile paragraph.
- `docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md` — appended current checkpoint.
- `docs/plans/isc2-cc-2026/reading-notes-enrichment-handoff.md` — appended resumable handoff.
- `docs/plans/task.md` — one new D3-A task row.

New report: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-3-batch-a.md`. New QA evidence/scripts/screenshots are confined to `artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/`, listed in `new-files.json`. No scenario-data file, CSS/parser, Learning Slide, bank/vocabulary/quiz, shared behavior or other-domain production content changed.

## Content checks

**12/12 PASS** in `content-integrity.json`. Exact reversal reproduces both entry files. All IDs/progress anchors/order, twelve original scenarios/answers/reusable data, five table shapes and every original table row match. Four diagram placements and every unrelated template are identical, including D2 measurement and D5 ATT&CK. JML SVG and full markup/attributes match; only one mobile paragraph differs. All content outside the four approved topic units is byte-identical. The complete retention caveat and original provisioning/review/trigger/activity headings remain. No leaked Markdown delimiters; structural section/div counts and original LF endings retained. D1/D2/D5 and Task 157/navigation/persistence hashes match entry.

## Regression results

Twelve existing Reading suites ran unchanged before and after: **8 passing / 4 failing suites**. The fresh cross-domain baseline has **23** failed assertions: historical failures plus the known D1-A taxonomy and two D2-A text mismatches. After D3-A it has **26**. Suite-level outcomes match; exact-text assertion counts are explicitly distinguished. Raw logs and timing-normalized failed names are retained.

| Suite | Baseline | After | Detail |
|---|---|---|---|
| `verify-reading-notes-domain1` | FAIL | FAIL | 9/10; historical 119 expectation versus existing 157-question bank. |
| `verify-reading-notes-domain2` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain3` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain4` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-domain5` | PASS | PASS | Pass before and after. |
| `verify-reading-notes-dom-integrity` | PASS | PASS | Pass before and after. |
| `verify-reading-persistence` | PASS | PASS | Pass before and after. |
| `verify-reading-navigation` | PASS | PASS | Pass before and after. |
| `verify-reading-diagram-semantics` | FAIL | FAIL | 7/14; same seven historical failed names. |
| `verify-reading-notes-rendering-quality` | PASS | PASS | Pass before and after. |
| `verify-reading-cross-domain-structure` | FAIL | FAIL | 368/391 → 365/391; exact-text failures 23 → 26. |
| `verify-domain5-integration` | FAIL | FAIL | Same historical D1 hash assertion; D1 bytes/hash unchanged this batch. |

Three new failed names are the `complete subsection text, examples, formulas and values` assertions for `topic-3-1-provisioning`, `topic-3-1-access-review` and `topic-3-1-deprovisioning`. They require the old text exactly, so the approved corrections/examples trigger them. JML/whole-domain exact-text assertions were already failing. D1-A `topic-1-4-control-categories` and D2-A `topic-2-4-memory-aid`/`topic-2-review-scenarios` remain present and are not new D3 failures. No other added/removed failed name occurs. Diagram payloads may reflect the changed mobile text while failed names remain unchanged. No expected snapshot, fixture or unrelated test was modified to force a pass.

## Real Chrome QA

**Before 12/12 and after 12/12 required viewport/theme states PASS**, using `C:\Program Files\Google\Chrome\Application\chrome.exe` (Chrome/156.0.8078.80) through CDP with an isolated temporary profile. Dimensions: 1920×1080, 1440×900, 1366×768, 768×1024, 390×844 and 360×800, each light/dark. **348 normal viewport screenshots**: 148 main before, 188 main after (including 40 protected-content captures), plus six before/six after mobile Mover close views.

Every state retains five Domain 3 tables, four diagrams, twelve scenarios, zero nested wrappers and Task 157 bottom-aligned headers/font families. Zero page-level horizontal overflow or mover-paragraph clipping metrics; table left/right edges remain accessible through existing contained scrolling. Thai-English glyphs and wrapping are readable. Long bilingual sections use ordinary vertical document scrolling and separate English continuation captures. The corrected Mover card fits its six responsive close-view screenshots (768px, 390px and 360px in both themes). All desktop JML text is unchanged. No new diagram, image or interaction was created.

Sidebar navigation to all four targets passes in all twelve states. Cold direct links, reload and Domain 4→Domain 3/topic return pass for all four anchors at the final 360×800 dark state. Twelve additional protected smoke states—D1/D2/D5, 1366×768/360×800, both themes—pass, retaining earlier correction units and table/scenario/diagram counts. The original retention caveat and representative table rendered text match before/after across the matrix. There are zero runtime exceptions or console errors.

The previously verified outside-sandbox Chrome setup avoids its known Crashpad launch restriction; it uses only a local QA server and temporary profile. The main baseline was captured before production edits. Supplemental close views render immutable entry Markdown/diagram JS through a QA-only server override for “before”, leaving live production edits intact. Representative desktop/light, laptop/dark and phone images were inspected natively (`visual-inspection.json`); full browser state/capture data and `screenshot-manifest.json` record every path/dimension/hash. No screen-reader or learner-outcome study is claimed.

### Screenshot index

Representative before/after views are linked per state. Complete continuation, table-edge, mobile Mover and protected screenshots are in the manifest.

| State | Before | After |
|---|---|---|
| 1920x1080-light | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-light-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-light-sessionEn.png) |
| 1920x1080-dark | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1920x1080-dark-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1920x1080-dark-sessionEn.png) |
| 1440x900-light | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-light-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-light-sessionEn.png) |
| 1440x900-dark | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1440x900-dark-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1440x900-dark-sessionEn.png) |
| 1366x768-light | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-light-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-light-sessionEn.png) |
| 1366x768-dark | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/1366x768-dark-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/1366x768-dark-sessionEn.png) |
| 768x1024-light | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-light-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-light-sessionEn.png) |
| 768x1024-dark | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/768x1024-dark-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/768x1024-dark-sessionEn.png) |
| 390x844-light | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-light-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-light-sessionEn.png) |
| 390x844-dark | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/390x844-dark-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/390x844-dark-sessionEn.png) |
| 360x800-light | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-light-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-light-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-light-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-light-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-light-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-light-sessionEn.png) |
| 360x800-dark | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/before/360x800-dark-sessionEn.png) | [mover](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-dark-mover.png); [provision](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-dark-provision.png); [orphan](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-dark-orphan.png); [reviewEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-dark-reviewEn.png); [sessionEn](../../../artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/screenshots/after/360x800-dark-sessionEn.png) |

## Preservation and remaining issues

The immutable entry inventory covers **31,920 pre-existing files**, including dirty/untracked prior work. The final verifier compares every SHA-256, allows only the five listed existing-path changes and confines new files to this report/QA directory. Original task/progress/handoff bytes remain prefixes. D1-A, D2-A, D5 ACC-D5-01–05 and Task 157 production fixes, reports and all earlier QA are protected. All Domain 1/2/4/5 text, reusable scenario data, Slides, Vocabulary, Question Banks, Quiz, navigation and progress code remain unchanged. The shared diagram file differs only in the one documented mobile JML paragraph; D2/D5 and all other template strings remain identical. No destructive Git operation, branch switch, commit or push occurred. Historical stale tracker rows are preserved; dated checkpoints describe actual completed batches.

No authorized D3-A finding is blocked. Four failing suites and three new authorized-text mismatches remain disclosed; fixture maintenance requires a separately scoped instruction. Other HOLD/REJECT recommendations and later D3 material remain outside scope. Source access is limited to the matching local corpus and directly inspected primary references; no exhaustive new corpus audit is claimed. No Domain 4, new visual enrichment, unrelated rewriting or other batch was started.

## Resumable checkpoint and next step

Completed: exact scope/decision/source verification; entry inventory and baseline suites; twelve scoped edits; bilingual/consistency review; content checks; real Chrome before/after/navigation/protected states; native screenshot review; report and append-only progress/handoff/task checkpoint. Final verification command:

```powershell
python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/verify-final.py
```

Read `final-verification.json` for the fresh final result; do not regenerate historical finalizers or overwrite earlier evidence. Human acceptance remains pending.

Recommended next batch after acceptance and separate explicit authorization: **D4-A — ACC-D4-01, ACC-D4-02, ACC-D4-03, ENR-D4-04**. No Domain 4 work or visual enrichment is authorized by this completion.

**Phase 3A Domain 3 Batch A Complete — Awaiting Human Acceptance.**
