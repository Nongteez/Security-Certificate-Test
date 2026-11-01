# Phase 1B / Batch B — Academic Clarity & Bilingual Refinement

**Phase 1B Batch B Implementation Complete — Pending Human Academic & Visual Acceptance**

## Executive summary

Reviewed **29/29** target findings: **29 Fixed**, **0 Already Resolved**, **0 Blocked**. “Fixed” means the misleading implication has been clarified; it does not reclassify technically defensible shorthand as a confirmed factual error. Changes affect Domains 1–4 and objectives 1.1–1.5, 2.2–2.4, 3.1–3.2 and 4.1–4.3. No separate 2.1 correction was needed. Human academic and visual acceptance remains pending.

All six required documents and eight original learning-note files were reviewed; `source-review.json` records the files. The exact 29 IDs and their Phase 1A source-comparison records were recovered before implementation in `phase1a-targets.json`. Current occurrences were checked against that report and its authoritative references. Correct examples, bilingual terminology and scenario concepts were retained. No other phase has begun.

The working tree already contained Batch A’s 12 modified tracked files, its untracked report/evidence and the untracked Phase 1A report. They were captured at HEAD `27c72ba5e2c70fe34311b0172597b3a8134e4179` in `baseline.json`. Batch B changes only the ten existing content files listed below; nine overlap Batch A files and one is the Reading Notes D4 scenario export. Existing Batch A-only file changes and all earlier reports/evidence remain untouched. No affected-file concurrent edits were detected.

## Finding status

| Finding ID | Objective(s) | Status | Confidence |
|---|---|---|---|
| D1-F01 | 1.1; 3.1 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-F02 | 1.1 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-F06 | 1.1 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-F07 | 1.2 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-F08 | 1.2 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-F09 | 1.5 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-F10 | 1.5 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-N02 | 1.4 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-N03 | 1.1 enrichment; 4.2 consistency | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-N04 | 1.2 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-N06 | 1.1; 1.3 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D1-N09 | 1.1 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D2-01 | 2.2 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D2-03 | 2.3 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D2-05 | 2.4 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D2-07 | 2.3 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D2-10 | 2.2 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D2-11 | 2.2 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D2-12 | 2.3 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-02 | 3.2 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-05 | 4.3 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-06 | 4.3 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-09 | 4.1 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-14 | 4.3 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-15 | 3.1 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-Q1 | 3.1 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-Q2 | 3.1 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-Q12 | 4.2 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |
| D34-Q14 | 4.3 | Fixed | High for the implemented clarification; earlier provenance/legal qualifications retained |

## Implementation decisions and depth preservation

- Use verified Phase 1A wording or its relevant clause, adapting only for surrounding grammar, Batch A overlap and repeated learner-facing text. The private-course citation instruction in F08 is an authoring concern; learner text instead labels the sequence honestly as a learning model.
- Preserve every existing scenario (8/12/12/12), heading anchor, table, diagram and example family. No functional renderer, SVG geometry, icon, CSS, navigation handler or progress schema changed. Only educational literals in the existing content modules changed.
- Substantial rewrites replace academically misleading claims: the unbounded ALE decision rule, official five-stage mandate, adjective-order precedence, universal legal-protection claim, residual subtraction equation and 100%-exclusive cloud language. Their educational explanations are replaced or expanded, not reduced to keywords.
- The residual subtraction expression lacked a defined compatible scale/effectiveness quantity; it is replaced with reassessment after controls. The valid simplified likelihood product, SLE/ALE formulas and worked calculations remain. The old 10,000/25,000 currency example is retained, and the new example explicitly shows 10,000−9,000−5,000=−4,000 annually.
- The unattributed password composition example is replaced with an approved administrator-MFA standard. Knowledge examples remain, with Security Questions identified as legacy; D2 retains a scoped modern passphrase/NIST example. No universal private-organization compliance rule is asserted.
- No scenario answer concept changes: Customer, Whaling, Hybrid Cloud, RTO, MAC and the IAM answers remain. Premises/questions are made explicit where necessary, with both Markdown and exported Reading Notes scenarios updated. These are not Question Bank edits.

## Finding-by-finding wording and traceability

Source aliases in carried-forward references: D1–D4 = `content/isc2-cc-2026/reading/domain-N.md`; O1–O4 = `ISC2 Update 2026/Domain N/Domain N.md`; S1–S4 = `ISC2 Update 2026/Domain N/DN sum.md`; G = `js/core/diagram-generator.js`; C3/C4 = Reading Notes `domain-3-scenarios.js` / `domain-4-scenarios.js`. Line numbers in original-note excerpts remain valid because originals were not edited. Current source locations below reflect Batch B.

Before fragments record the wording at that edit; final fragments show the actual current wording after fresh-review refinements. The JSON checklist preserves all 145 targeted transformations, baseline locations where available and final line references. A pure Batch B patch and byte-verified pre-B content snapshot distinguish this task from the pre-existing Batch A diff.

### D1-F01 — Objective 1.1; 3.1

**Status:** Fixed. **Academic and bilingual rationale:** Separate claiming an identity from proving the claimed identity. The correct main explanation remains; the revision mnemonic and two D3 Authentication repetitions now agree.

**Repeated locations checked:** Main AAA text, cheat sheet, desktop/mobile AAA, D1 authorization scenario and D3 AuthN comparison.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:221`: `> **Authentication = Who are you?**`; repeated at 1635. But `ISC2 Update 2026/Domain 1/Domain 1.md:121`: `| “Who are you?” | Identification |` and 122: `| “Prove you are that person.” | Authentication |`; its cheat sheet at 361 says only `| Prove identity | Authentication |`. This is a mixed-original conflict: the textbook preserves the weaker sum mnemonic in its final revision table after using the fuller notes' correct distinction in the main lesson. It is not wholly generation-invented.

**Authoritative reference(s):** [NIST SP 800-63B-4, Introduction](https://pages.nist.gov/800-63-4/sp800-63b.html#introduction)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:1309](../../../content/isc2-cc-2026/reading/domain-1.md#L1309)

**Before:**
```text
| *Prove identity / Who are you* | **Authentication** |
```

**After — actual implemented wording:**
```text
| *Claim identity / Who are you? — กล่าวอ้างตัวตน* | **Identification (การระบุตัวตน)** |
| *Prove the claimed identity / Prove it — พิสูจน์ตัวตนที่กล่าวอ้าง* | **Authentication (การพิสูจน์ตัวตน)** |
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:153](../../../content/isc2-cc-2026/reading/domain-3.md#L153)

**Before:**
```text
ตอบคำถามว่า <em>"คุณคือใคร?"</em> (Who are you?)
```

**After — actual implemented wording:**
```text
ตอบคำถามว่า <em>"พิสูจน์ว่าคุณเป็นบุคคลที่กล่าวอ้าง"</em> (Prove the claimed identity)
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:391](../../../content/isc2-cc-2026/reading/domain-3.md#L391)

**Before:**
```text
การตรวจสอบและยืนยันว่าผู้ใช้คือใคร (Who are you?) ผ่านข้อมูลประจำตัว
```

**After — actual implemented wording:**
```text
การพิสูจน์ตัวตนที่ผู้ใช้กล่าวอ้าง (Prove the claimed identity) ผ่านข้อมูลประจำตัว
```

### D1-F02 — Objective 1.1

**Status:** Fixed. **Academic and bilingual rationale:** Separate the three independent MFA factor types from supplementary location/network risk signals; preserve all context examples and the existing password/PIN and fingerprint contrasts.

**Repeated locations checked:** MFA heading, directive, generated fourth card, AAA diagram and D1/D3 authentication/ABAC text.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:291`: `→ Location Factor / Context สามารถนำมาใช้ตัดสิน Access ได้`; 1641: `> **Know + Have + Are + Location/Context**`; 1643: `และ MFA ต้องใช้ **คนละ Factor**`. Conversely `ISC2 Update 2026/Domain 1/Domain 1.md:103–107` lists only Know/Have/Are and requires different types. The ambiguity is inherited from the sum; the categorical “4 หมวดหลัก” textbook heading strengthens it. The current card's context note is an improvement that must be preserved.

**Authoritative reference(s):** [NIST SP 800-63B-4 §2, Authentication Assurance Levels](https://pages.nist.gov/800-63-4/sp800-63b.html#aal)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:189](../../../content/isc2-cc-2026/reading/domain-1.md#L189)

**Before:**
```text
ปัจจัยการพิสูจน์ตัวตนแบ่งออกเป็น 4 หมวดหลัก:
```

**After — actual implemented wording:**
```text
ปัจจัยหลักของ MFA มี 3 ประเภท: Know, Have และ Are; สถานที่หรือเครือข่ายเป็นบริบทเสริม (Context) ไม่ใช่ปัจจัยอิสระที่ใช้แทนประเภทเหล่านี้:
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:195](../../../content/isc2-cc-2026/reading/domain-1.md#L195)

**Before:**
```text
- **Somewhere You Are** (สถานที่ที่คุณอยู่)
```

**After — actual implemented wording:**
```text
- **Somewhere You Are** (สถานที่ที่คุณอยู่ — บริบทเสริม ไม่ใช่ปัจจัย MFA)
```

Current source: [js/core/content-components.js:68](../../../js/core/content-components.js#L68)

**Before:**
```text
note: 'เป็นปัจจัยแวดล้อมเสริม (Contextual Factor)'
```

**After — actual implemented wording:**
```text
note: 'เป็นบริบทเสริมสำหรับประเมินความเสี่ยง (Supplementary Risk Signal) ไม่ใช่ปัจจัย MFA; Password + Corporate IP เพียงอย่างเดียวยังไม่ใช่ MFA'
```

### D1-F06 — Objective 1.1

**Status:** Fixed. **Academic and bilingual rationale:** Protected logs support accountability; ordinary logs alone do not guarantee non-repudiation. Digital signatures remain an example with evidence/key-management conditions.

**Repeated locations checked:** Mobile AAA explanation; desktop tracing labels and Markdown accountability/non-repudiation discussion already distinguish the concepts.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/Domain 1.md:117`: `บันทึกว่า **ใครทำอะไร เมื่อไร และกับระบบใด** เพื่อการติดตาม สืบสวน และตรวจสอบความรับผิดชอบ`; line 132: `เช่น การใช้ Digital Signature พร้อมการจัดการกุญแจและหลักฐานที่เหมาะสม`. `ISC2 Update 2026/Domain 1/D1 sum.md:205`: `> Tracking + Recording Activities`. Neither original claims that timestamps alone establish non-repudiation. Attribution: mobile textbook diagram introduced conflation.

**Authoritative reference(s):** [RFC 4949 §2, non-repudiation service](https://www.rfc-editor.org/rfc/rfc4949.html#page-200)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [js/core/diagram-generator.js:464](../../../js/core/diagram-generator.js#L464)

**Before:**
```text
        <p class="reading-mob-tier-desc">บันทึกเหตุการณ์และการกระทำทั้งหมดลง Log: Audit Trails, ประทับเวลา (Timestamps) เพื่อสร้างความรับผิดชอบที่ไม่สามารถปฏิเสธได้ (Non-Repudiation)</p>
```

**After — actual implemented wording:**
```text
        <p class="reading-mob-tier-desc">Audit Trails และ Timestamps ช่วยติดตามกิจกรรมและสนับสนุน Accountability เมื่อบันทึกได้รับการปกป้องและเชื่อมโยงกับตัวตนอย่างน่าเชื่อถือ ส่วน Non-repudiation ต้องมีหลักฐานและการควบคุมที่เหมาะสมต่อการโต้แย้งภายหลัง เช่น ลายมือชื่อดิจิทัลพร้อมการจัดการกุญแจและหลักฐานที่เชื่อถือได้ ไม่ได้เกิดจากการมี Log เพียงอย่างเดียว</p>
```

### D1-F07 — Objective 1.2

**Status:** Fixed. **Academic and bilingual rationale:** Annual loss reduction is ALE before minus ALE after, compared with annual control cost. Untreated ALE is only a bound under a narrow model. Preserve the old 10,000/25,000 example, add a valid negative-net-benefit example, and qualify legal/safety/mission constraints.

**Repeated locations checked:** Main cost-benefit callout, both risk-calculation diagram forms, risk-acceptance component, existing acceptance scenario and cheat sheet. Acceptance scenario answer remains correct.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:744`: `- Cost of Treatment สูงเกิน Benefit`; 643: `ความเสียหายที่คาดว่าจะเกิด **ต่อปี**`. `ISC2 Update 2026/Domain 1/Domain 1.md:173–176` describes responses, not a universal ALE spending limit. The specific “cost must not exceed untreated ALE” exam rule is **Not covered in original learning notes** (both files checked). Attribution: textbook introduced the framing; original cost-versus-benefit idea is sound.

**Authoritative reference(s):** [NIST SP 800-39 §3.3, Risk response](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf#page=50)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:508](../../../content/isc2-cc-2026/reading/domain-1.md#L508)

**Before:**
```text
  <p><strong>กฎการตัดสินใจ:</strong> ต้นทุนของมาตรการความปลอดภัยต่อปีไม่ควรเกินมูลค่า $ALE$ ของความเสี่ยงนั้น (เช่น หากความเสี่ยงก่อความเสียหายปีละ \$10,000 องค์กรไม่ควรจ่ายเงินซื้ออุปกรณ์ป้องกันปีละ \$25,000)</p>
```

**After — actual implemented wording:**
```text
  <p><strong>การเปรียบเทียบด้านการเงินแบบง่าย:</strong> ผลประโยชน์จากการลดความเสียหายต่อปี (Annual Loss-Reduction Benefit) = ALE ก่อนใช้ Control − ALE หลังใช้ Control แล้วเปรียบเทียบกับต้นทุน Control ต่อปี การมีต้นทุนต่ำกว่า ALE เดิมเพียงอย่างเดียวยังไม่พอ เช่น ALE ก่อน 10,000/ปี หลัง 9,000/ปี ลดความเสียหายได้ 1,000/ปี หาก Control มีต้นทุน 5,000/ปี ผลประโยชน์สุทธิเท่ากับ −4,000/ปี ตัวอย่างเดิมที่ ALE \$10,000/ปี แต่ Control ราคา \$25,000/ปี ก็ไม่คุ้มด้านการเงินภายใต้สมมติฐานนี้ อย่างไรก็ตาม กฎหมาย สัญญา ความปลอดภัยของบุคคล และภารกิจอาจทำให้องค์กรต้องเลือกมาตรการแม้ผลตอบแทนทางการเงินโดยตรงไม่เป็นบวก</p>
```

Current source: [js/core/diagram-generator.js:744](../../../js/core/diagram-generator.js#L744)

**Before:**
```text
Decision Rule: ค่าใช้จ่ายมาตรการป้องกันต่อปี (Cost of Control) ไม่ควรเกิน ALE
```

**After — actual implemented wording:**
```text
Financial comparison: ALE ก่อน − ALE หลัง เทียบต้นทุน Control ต่อปี
```

Current source: [js/core/diagram-generator.js:795](../../../js/core/diagram-generator.js#L795)

**Before:**
```text
        <p class="reading-mob-tier-desc"><strong>กฎเหล็กของข้อสอบ:</strong> ค่าใช้จ่ายมาตรการป้องกันต่อปี (Cost of Safeguard - ACS) ต้อง <strong>ไม่เกิน</strong> มูลค่าความเสียหายที่ลดลงได้ (ALE Savings) &middot; หากความเสียหายปีละ $20,000 ไม่ควรจ่ายซื้ออุปกรณ์ป้องกันปีละ $25,000</p>
```

**After — actual implemented wording:**
```text
        <p class="reading-mob-tier-desc"><strong>การเปรียบเทียบด้านการเงินแบบง่าย:</strong> ALE Savings = ALE ก่อน − ALE หลัง เปรียบเทียบกับต้นทุน Control ต่อปี ตัวอย่าง ALE 20,000/ปี กับ Control 25,000/ปี ไม่คุ้มเมื่อพิจารณาเฉพาะการลดความเสียหายนี้ แต่กฎหมาย สัญญา ความปลอดภัยของบุคคล และภารกิจอาจกำหนดให้ต้องใช้มาตรการแม้ผลประโยชน์สุทธิทางการเงินไม่เป็นบวก</p>
```

Current source: [js/core/content-components.js:146](../../../js/core/content-components.js#L146)

**Before:**
```text
ต้นทุนในการป้องกันสูงกว่ามูลค่าความเสียหาย (Safeguard Cost > ALE)
```

**After — actual implemented wording:**
```text
ต้นทุนในการป้องกันสูงกว่าประโยชน์จากการลดความเสียหาย (Annual Control Cost > ALE Before − ALE After) โดยต้องพิจารณากฎหมาย สัญญา ความปลอดภัย และภารกิจก่อนรับความเสี่ยง
```

### D1-F08 — Objective 1.2

**Status:** Fixed. **Academic and bilingual rationale:** Keep all five learning activities and reporting depth, label the sequence a learning model, and distinguish NIST Frame/Assess/Respond/Monitor. Remove the unsupported claim that this exact sequence is mandated by the exam/course.

**Repeated locations checked:** Main sequence/callout and desktop/mobile lifecycle title/banner. No scenario requires a fixed fifth stage.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:475`: `Lifecycle ที่เรียนคือ:` followed at 478/480/482/484/486 by Identify, Assess / Analyze, Treat / Respond, Monitor / Review, Communicate / Report. `ISC2 Update 2026/Domain 1/Domain 1.md:164–167` gives the first four without an official named-source comparison. Thus five-stage educational content is inherited from an original that expressly describes what was learned. The textbook introduced the generalized NIST/ISO comparison and stronger current-course mandate. This does not prove the sum misremembered private course instruction.

**Authoritative reference(s):** [NIST SP 800-39, Chapter 3 printed pp.32–33](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf#page=41); [Official CC outline, objective 1.2](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:516](../../../content/isc2-cc-2026/reading/domain-1.md#L516)

**Before:**
```text
วงจรชีวิตการบริหารความเสี่ยงประกอบด้วย 5 ขั้นตอนหลัก:
```

**After — actual implemented wording:**
```text
บทนี้ใช้ลำดับช่วยเรียนรู้ 5 ส่วนจากบันทึกการเรียน โดยการสื่อสารเกิดควบคู่ได้ตลอดกระบวนการ:
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:535](../../../content/isc2-cc-2026/reading/domain-1.md#L535)

**Before:**
```text
  <p>ในตำราและกรอบการทำงานด้านความปลอดภัยสากล (เช่น NIST หรือ ISO 31000) บางครั้งอาจสรุปกระบวนการปฏิบัติการเป็น <strong>4 ขั้นตอนหลัก</strong> (Identify → Assess → Treat → Monitor) โดยมองว่าการสื่อสารและรายงานผล (Communication & Reporting) เป็นกิจกรรมที่ทำควบคู่ไปตลอดเวลา แต่ในหลักสูตรการสอน ISC2 CC 2026 นี้ ได้กำหนด <strong>Risk Communication & Reporting</strong> ไว้อย่างชัดเจนเป็นขั้นตอนที่ 5 ของวงจร เพื่อเน้นย้ำความสำคัญของการรายงานต่อผู้บริหารและผู้มีส่วนได้เสียในการตัดสินใจจัดสรรงบประมาณ</p>
```

**After — actual implemented wording:**
```text
  <p>บทนี้ใช้ลำดับช่วยเรียนรู้ 5 ส่วนจากบันทึกการเรียน: Identify → Assess → Treat → Monitor → Communicate/Report โดยการสื่อสารและรายงานผลเกิดควบคู่ได้ตลอดกระบวนการ เพื่อให้ผู้บริหารและผู้มีส่วนได้เสียตัดสินใจจัดสรรทรัพยากรได้ กรอบงานอื่นอาจจัดกลุ่มต่างกัน เช่น NIST SP 800-39 ใช้ Frame, Assess, Respond และ Monitor ลำดับ 5 ส่วนนี้เป็นแบบจำลองช่วยเรียนรู้ ไม่ใช่ข้อกำหนดลำดับตายตัวจาก Exam Outline</p>
```

Current source: [js/core/diagram-generator.js:807](../../../js/core/diagram-generator.js#L807)

**Before:**
```text
The 5-Stage Risk Management Lifecycle
```

**After — actual implemented wording:**
```text
Risk Management: Five-Part Learning Model
```

Current source: [js/core/diagram-generator.js:851](../../../js/core/diagram-generator.js#L851)

**Before:**
```text
วงจรการบริหารความเสี่ยง 5 ขั้นตอน: กระบวนการต่อเนื่องไม่รู้จบ (Continuous Iterative Process)
```

**After — actual implemented wording:**
```text
แบบจำลองช่วยเรียนรู้ 5 ส่วน: กระบวนการต่อเนื่อง (Continuous Iterative Process) การสื่อสารเกิดควบคู่ได้ตลอด ไม่ใช่ขั้นตอนสุดท้ายเท่านั้น
```

### D1-F09 — Objective 1.5

**Status:** Fixed. **Academic and bilingual rationale:** Canon 2 duties apply together; adjective order is not demonstrated precedence. Preserve the valid lawful-but-unethical example.

**Repeated locations checked:** Canon 2 explanation, ethics diagram and scenarios. Inter-canon precedence is a different evidence-dependent ID and is unchanged.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1562–1566` lists `Honesty`, `Integrity`, `Fairness`, `Responsibility`, `Legality` with no override rule. `ISC2 Update 2026/Domain 1/Domain 1.md:269` gives the Canon 2 sentence and a parallel Thai translation. Adjective-order precedence is **Not covered in original learning notes** (both full originals checked). Attribution: introduced textbook interpretation.

**Authoritative reference(s):** [ISC2 Code of Ethics, Code and Canons](https://www.isc2.org/ethics)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:992](../../../content/isc2-cc-2026/reading/domain-1.md#L992)

**Before:**
```text
ข้อสังเกตเชิงลึก: ลำดับคำใน Canon 2 ให้เกียรติและความซื่อสัตย์มาก่อนกฎหมาย เพื่อเน้นย้ำว่าความซื่อตรงต่อความจริงต้องเป็นที่ตั้งเสมอ แม้การกระทำบางอย่างจะไม่ผิดกฎหมายแต่ถ้าขาดความซื่อสัตย์หรือบิดเบือนข้อเท็จจริงก็ยังถือว่าละเมิดจริยธรรมของ ISC2
```

**After — actual implemented wording:**
```text
ข้อสังเกต: Canon 2 กำหนดหน้าที่เหล่านี้ร่วมกัน ไม่ควรอนุมานลำดับเหนือกว่ากันจากลำดับคำในประโยค การกระทำที่ไม่ผิดกฎหมายอาจยังขัดจริยธรรมหากเป็นการหลอกลวง บิดเบือนข้อเท็จจริง หรือไม่เป็นธรรม
```

### D1-F10 — Objective 1.5

**Status:** Fixed. **Academic and bilingual rationale:** Scope possible disciplinary/professional/legal consequences by facts, role and applicable law; avoid universal loss of every legal protection.

**Repeated locations checked:** Mobile due-care/diligence explanation; main text and desktop cycle do not assert the blanket legal result.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1448`: `Taking reasonable steps to protect assets and reduce risk`; `ISC2 Update 2026/Domain 1/Domain 1.md:256–259` describes reasonable measures and diligent evaluation. A gross-negligence offense or blanket removal of legal protection is **Not covered in original learning notes** after checking both files. Attribution: mobile textbook payload introduced the claim.

**Authoritative reference(s):** [ISC2 Code of Ethics, Code and Ethical Complaint Procedures](https://www.isc2.org/ethics); [Official U.S. Code §14503, limitation on liability for volunteers](https://usc-cdn.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title42-section14503)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [js/core/diagram-generator.js:1280](../../../js/core/diagram-generator.js#L1280)

**Before:**
```text
        <p class="reading-mob-tier-desc">หากผู้บริหารหรือเจ้าหน้าที่ไม่ทำ Due Diligence หรือ Due Care จนเกิดความเสียหาย อาจมีความผิดฐาน <strong>Gross Negligence (ประมาทเลินเล่ออย่างร้ายแรง)</strong> ซึ่งไม่ได้รับการคุ้มครองทางกฎหมาย</p>
```

**After — actual implemented wording:**
```text
        <p class="reading-mob-tier-desc">การละเลย Due Care หรือ Due Diligence อาจก่อให้เกิดความเสียหายและผลทางวินัย วิชาชีพ หรือกฎหมาย โดยความรับผิดและข้อคุ้มครองที่ใช้ได้ขึ้นอยู่กับข้อเท็จจริง บทบาท และกฎหมายที่เกี่ยวข้อง ไม่อาจสรุปจากคำว่า Gross Negligence (ประมาทเลินเล่ออย่างร้ายแรง) เพียงอย่างเดียวว่าบุคคลนั้นหมดความคุ้มครองทางกฎหมายทุกประเภท</p>
```

### D1-N02 — Objective 1.4

**Status:** Fixed. **Academic and bilingual rationale:** Classify controls by function, with overlapping timing. Detective may discover past events; corrective may begin during an incident.

**Repeated locations checked:** Desktop/mobile control timeline labels/descriptions, mnemonic, analysis checklist and existing overlap caption/CCTV example. Existing arrows are mnemonic, not mandatory chronology.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1241`: `Discover / Detect Activity`; 1268: `Fix / Restore / Recover / Reduce Damage`; mnemonic 1391–1400 gives the deterrent→preventive→detective→corrective sequence. `ISC2 Update 2026/Domain 1/Domain 1.md:213`: `ตรวจจับเหตุการณ์หรือการละเมิด`, and 219 says one control may serve multiple functions. Attribution: general timeline/mnemonic inherited, narrow real-time framing is a current-only elaboration; causal editing history unproven.

**Authoritative reference(s):** [NIST SP 800-92 §2.1.4 and §5.3](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-92.pdf#page=43)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [js/core/diagram-generator.js:1067](../../../js/core/diagram-generator.js#L1067)

**Before:**
```text
>DURING</text>
```

**After — actual implemented wording:**
```text
>DETECT</text>
```

Current source: [js/core/diagram-generator.js:1081](../../../js/core/diagram-generator.js#L1081)

**Before:**
```text
>AFTER</text>
```

**After — actual implemented wording:**
```text
>CORRECT</text>
```

Current source: [js/core/diagram-generator.js:1069](../../../js/core/diagram-generator.js#L1069)

**Before:**
```text
ตรวจจับ &amp; แจ้งเตือนภัยขณะเกิดเหตุ
```

**After — actual implemented wording:**
```text
ตรวจจับระหว่างเกิดเหตุหรือย้อนหลัง
```

Current source: [js/core/diagram-generator.js:1083](../../../js/core/diagram-generator.js#L1083)

**Before:**
```text
แก้ไขเยียวยา &amp; กู้คืนระบบหลังเกิดเหตุ
```

**After — actual implemented wording:**
```text
แก้ปัญหา ลดความเสียหาย &amp; กู้คืน
```

Current source: [js/core/diagram-generator.js:1125](../../../js/core/diagram-generator.js#L1125)

**Before:**
```text
DETECTIVE (ขณะเกิดเหตุ)
```

**After — actual implemented wording:**
```text
DETECTIVE (ระหว่างเกิดเหตุหรือย้อนหลัง)
```

Current source: [js/core/diagram-generator.js:1129](../../../js/core/diagram-generator.js#L1129)

**Before:**
```text
ค้นหา ตรวจจับความผิดปกติ และแจ้งเตือนภัยแบบเรียลไทม์ขณะที่เหตุการณ์หรือการโจมตีกำลังดำเนินอยู่
```

**After — actual implemented wording:**
```text
ค้นหาและตรวจจับเหตุการณ์ได้ทั้งระหว่างเกิดและย้อนหลัง เช่น ตรวจ Log ภายหลัง ไม่จำกัดเฉพาะการแจ้งเตือนแบบเรียลไทม์
```

Current source: [js/core/diagram-generator.js:1148](../../../js/core/diagram-generator.js#L1148)

**Before:**
```text
CORRECTIVE &amp; RECOVERY (หลังเกิดเหตุ)
```

**After — actual implemented wording:**
```text
CORRECTIVE &amp; RECOVERY (เวลาอาจซ้อนทับกัน)
```

Current source: [js/core/diagram-generator.js:1091](../../../js/core/diagram-generator.js#L1091)

**Before:**
```text
การจำแนกมาตรการตามช่วงเวลาและบทบาทหน้าที่: ก่อนเกิดเหตุ (Before) &middot; ขณะเกิดเหตุ (During) &middot; หลังเกิดเหตุ (After)
```

**After — actual implemented wording:**
```text
จัดประเภทตามหน้าที่หลัก ไม่ใช่ช่วงเวลาตายตัว: Preventive สกัดกั้น; Detective ค้นพบระหว่างเกิดหรือย้อนหลัง; Corrective แก้ไขสาเหตุหรือลดความเสียหายและอาจเริ่มขณะเกิดเหตุ; Recovery ฟื้นฟูบริการ เวลาทำงานอาจซ้อนทับกันได้
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:835](../../../content/isc2-cc-2026/reading/domain-1.md#L835)

**Before:**
```text
สูตรจำลำดับการทำงาน (Action Sequence Mnemonic)
```

**After — actual implemented wording:**
```text
สูตรจำหน้าที่ของมาตรการ (Function Mnemonic; ไม่ใช่ลำดับตายตัว)
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:874](../../../content/isc2-cc-2026/reading/domain-1.md#L874)

**Before:**
```text
เกิดเหตุ?</li>
```

**After — actual implemented wording:**
```text
เกิดเหตุ? ใช้เวลาเป็นบริบทประกอบ ไม่ใช่เกณฑ์ตายตัว เพราะ Detective อาจพบย้อนหลังและ Corrective อาจเริ่มขณะเกิดเหตุ</li>
```

### D1-N03 — Objective 1.1 enrichment; 4.2 consistency

**Status:** Fixed. **Academic and bilingual rationale:** Layering reduces risk but cannot guarantee removal of all common dependencies. WAF reduces exposure to weaknesses; encryption protects data rather than being prevented.

**Repeated locations checked:** D1 main defense explanation, example title and desktop/mobile labels; D4 defense wording checked under Q12. Seven layers remain useful examples.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/Domain 1.md:295`: `การใช้ **มาตรการหลายชั้น** เพื่อไม่ให้การล้มเหลวของ Control เดียวเปิดทางให้ผู้โจมตีเข้าถึงทุกอย่าง`; 297 gives example controls. The sum does not supply a seven-layer diagram or encryption-prevention grammar. General layering is inherited; guaranteed elimination and the exact Thai ambiguity are current-only additions. Both originals checked; no causal edit history inferred.

**Authoritative reference(s):** [NIST CSRC defense-in-depth, definitions and source context](https://csrc.nist.gov/glossary/term/defense_in_depth)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:352](../../../content/isc2-cc-2026/reading/domain-1.md#L352)

**Before:**
```text
กลยุทธ์การวาง **มาตรการควบคุมความปลอดภัยหลายชั้นที่สอดประสานกัน** เพื่อป้องกันไม่ให้การล้มเหลวของมาตรการควบคุมชั้นใดชั้นหนึ่งเปิดโอกาสให้ผู้โจมตีเจาะทะลุระบบได้สำเร็จ (No Single Point of Failure in Security)
```

**After — actual implemented wording:**
```text
กลยุทธ์การวาง **มาตรการควบคุมความปลอดภัยหลายชั้นที่สอดประสานกัน (Defense in Depth)** เพื่อลดโอกาสที่ความล้มเหลวของมาตรการเดียวจะนำไปสู่ความเสียหาย ชั้นต่าง ๆ ยังอาจมีจุดพึ่งพาร่วมกัน จึงไม่รับประกันว่าจะกำจัดจุดล้มเหลวเดี่ยว (Single Point of Failure) ทั้งหมด
```

Current source: [js/core/diagram-generator.js:602](../../../js/core/diagram-generator.js#L602)

**Before:**
```text
>No Single Point of Failure</text>
```

**After — actual implemented wording:**
```text
>Complementary Security Layers</text>
```

Current source: [js/core/diagram-generator.js:610](../../../js/core/diagram-generator.js#L610)

**Before:**
```text
ขจัดจุดล้มเหลวเดี่ยว (No Single Point of Failure)
```

**After — actual implemented wording:**
```text
ลดโอกาสที่มาตรการเดียวล้มเหลวแล้วเกิดความเสียหาย แต่ชั้นต่าง ๆ อาจมีจุดพึ่งพาร่วมกัน จึงไม่รับประกันว่าจะขจัดทุก Single Point of Failure
```

Current source: [js/core/diagram-generator.js:676](../../../js/core/diagram-generator.js#L676)

**Before:**
```text
ป้องกันช่องโหว่ซอฟต์แวร์และการเข้ารหัสข้อมูล:
```

**After — actual implemented wording:**
```text
ลดการเปิดรับความเสี่ยงจากช่องโหว่ซอฟต์แวร์ด้วยมาตรการที่เหมาะสม และใช้การเข้ารหัสข้อมูล:
```

Current source: [js/core/diagram-generator.js:562](../../../js/core/diagram-generator.js#L562)

**Before:**
```text
Defense in Depth — 7 Complementary Protective Layers
```

**After — actual implemented wording:**
```text
Defense in Depth — Seven Example Protective Layers
```

Current source: [js/core/diagram-generator.js:676](../../../js/core/diagram-generator.js#L676)

**Before:**
```text
ลดช่องโหว่ซอฟต์แวร์ด้วยมาตรการที่เหมาะสม และใช้การเข้ารหัสข้อมูล:
```

**After — actual implemented wording:**
```text
ลดการเปิดรับความเสี่ยงจากช่องโหว่ซอฟต์แวร์ด้วยมาตรการที่เหมาะสม และใช้การเข้ารหัสข้อมูล:
```

### D1-N04 — Objective 1.2

**Status:** Fixed. **Academic and bilingual rationale:** Risk combines likelihood and impact using a defined model/scale. Preserve the approximate product with a qualification; replace the undefined residual subtraction equation with reassessment after controls.

**Repeated locations checked:** Risk definition/formula, residual explanation, review distinction and financial-pipeline diagram. SLE/ALE formulas and examples remain unchanged.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/Domain 1.md:158`: `Risk ≈ Likelihood × Impact` with the qualification `ในทางปฏิบัติองค์กรอาจใช้วิธีเชิงคุณภาพหรือเชิงปริมาณต่างกัน`; 182–185 defines risk before/after controls without subtraction. `ISC2 Update 2026/Domain 1/D1 sum.md:576/596/647` gives EF/SLE/ALE financial formulas, not a general residual subtraction equation. Approximate multiplication is inherited with a fuller-original caveat; unbounded sum/subtraction phrasing is current-only.

**Authoritative reference(s):** [NIST SP 800-30r1, Task 1-4, printed p.23](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf#page=37)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:388](../../../content/isc2-cc-2026/reading/domain-1.md#L388)

**Before:**
```text
คือผลรวมของโอกาสที่เหตุการณ์ไม่พึงประสงค์จะเกิดขึ้น ควบคู่กับขนาดของผลกระทบ
```

**After — actual implemented wording:**
```text
ประเมินจากโอกาสที่เหตุการณ์ไม่พึงประสงค์จะเกิดขึ้นร่วมกับขนาดของผลกระทบ
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:1058](../../../content/isc2-cc-2026/reading/domain-1.md#L1058)

**Before:**
```text
ผลรวมของโอกาสเกิด (Likelihood) และผลกระทบจากเหตุการณ์ที่ไม่แน่นอน
```

**After — actual implemented wording:**
```text
การพิจารณาโอกาสเกิด (Likelihood) ร่วมกับผลกระทบ (Impact) จากเหตุการณ์ที่ไม่แน่นอน
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:409](../../../content/isc2-cc-2026/reading/domain-1.md#L409)

**Before:**
```text
$\text{Risk} \approx \text{Likelihood} \times \text{Impact}$
```

**After — actual implemented wording:**
```text
$\text{Risk} \approx \text{Likelihood} \times \text{Impact}$

บางโมเดลแบบง่ายใช้ผลคูณนี้โดยต้องกำหนดสเกลและความหมายของคะแนนให้ชัดเจน องค์กรอาจเลือกวิธีเชิงคุณภาพหรือเชิงปริมาณต่างกัน ไม่ใช่สูตรเดียวที่บังคับใช้กับทุกการประเมิน
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:582](../../../content/isc2-cc-2026/reading/domain-1.md#L582)

**Before:**
```text
  $\text{Residual Risk} = \text{Inherent Risk} - \text{Impact of Controls}$
```

**After — actual implemented wording:**
```text
  <p>Residual Risk คือความเสี่ยงที่ประเมินใหม่หลังคำนึงถึงมาตรการควบคุม ไม่ใช่การลบคะแนนหรือเงินออกจากกันได้เสมอไป ต้องประเมินโอกาสเกิดและผลกระทบที่ยังเหลืออยู่ด้วยโมเดลและสเกลที่เหมาะสม</p>
```

### D1-N06 — Objective 1.1; 1.3

**Status:** Fixed. **Academic and bilingual rationale:** Retain Security Questions as a legacy knowledge example, not a recommendation. Use administrator MFA to illustrate an approved mandatory standard and distinguish authorized exceptions from user discretion.

**Repeated locations checked:** MFA examples, standard table, document-hierarchy mobile wording and mandatory/advisory comparison. No claim that every private-system password policy is illegal.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:243` lists `Security Question`; 956 uses a deliberately generic `Password ต้องอย่างน้อย X characters และเป็นไปตามข้อกำหนดที่องค์กรกำหนด`. `ISC2 Update 2026/Domain 1/Domain 1.md:240` gives `บัญชีผู้ดูแลระบบต้องใช้ MFA`; 242 recommends a passphrase. Security-question taxonomy is inherited; specific dated composition and no-exception absolutes are current-only additions.

**Authoritative reference(s):** [NIST SP 800-63B-4 §3.1.1, Passwords](https://pages.nist.gov/800-63-4/sp800-63b.html#password)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:685](../../../content/isc2-cc-2026/reading/domain-1.md#L685)

**Before:**
```text
รหัสผ่านต้องมีความยาวอย่างน้อย 14 ตัวอักษร ผสมอักขระ 3 ใน 4 ประเภท และบังคับใช้ MFA
```

**After — actual implemented wording:**
```text
บัญชีผู้ดูแลระบบต้องใช้ MFA ตามมาตรฐานที่องค์กรอนุมัติ
```

Current source: [js/core/content-components.js:37](../../../js/core/content-components.js#L37)

**Before:**
```text
Password, PIN, Passphrase, คำถามกันลืม (Security Questions)
```

**After — actual implemented wording:**
```text
Password, PIN, Passphrase; Security Questions เป็นตัวอย่าง Knowledge แบบเดิมที่คาดเดาหรือสืบค้นคำตอบได้ ไม่ใช่แนวทางสมัยใหม่ที่แนะนำ
```

Current source: [js/core/diagram-generator.js:1012](../../../js/core/diagram-generator.js#L1012)

**Before:**
```text
ข้อกำหนดทางเทคนิคขั้นต่ำที่วัดผลได้ชัดเจน (เช่น บังคับรหัสผ่านยาว 12 ตัวขึ้นไป, บังคับเข้ารหัส AES-256) ต้องปฏิบัติตามโดยไม่มีข้อยกเว้น
```

**After — actual implemented wording:**
```text
ข้อกำหนดทางเทคนิคขั้นต่ำที่วัดผลได้ชัดเจน เช่น บัญชีผู้ดูแลระบบต้องใช้ MFA เป็นข้อกำหนดบังคับ การยกเว้นต้องผ่านกระบวนการอนุมัติและบันทึกความเสี่ยงขององค์กร ไม่ใช่การยกเว้นโดยผู้ใช้เอง
```

### D1-N09 — Objective 1.1

**Status:** Fixed. **Academic and bilingual rationale:** Bound the ordinary authentication-before-authorization example, availability service goals and backend-redundancy illustration. A single depicted LB does not prove elimination of every SPOF.

**Repeated locations checked:** Authorization text, availability definition/review, load-balancer mobile banner and desktop topology. Authenticated-but-denied scenario remains valid.

**Original learning-note comparison:** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:197`: `Authorization ปกติเกิดหลัง Authentication` (normally); 77: authorized users can access resources when needed. Its original LB drawing 107–109 has one LB but only claims at 112 `เครื่องหนึ่งเสีย → เครื่องอื่นยังให้บริการ`, not elimination of all SPOFs. `ISC2 Update 2026/Domain 1/Domain 1.md:66`: `ให้ผู้มีสิทธิ์ใช้ข้อมูลหรือบริการได้เมื่อจำเป็น`; 111 describes the ordinary post-authentication permission decision. Normal workflow/redundant backend pattern inherited; absolute “always” and topology-wide SPOF implication are stronger current-only claims.

**Authoritative reference(s):** [RFC 4949 §2, authorization / availability, printed pp.29–30](https://www.rfc-editor.org/rfc/rfc4949.html#page-29)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-1.md:115](../../../content/isc2-cc-2026/reading/domain-1.md#L115)

**Before:**
```text
พร้อมให้ผู้มีสิทธิ์เข้าใช้งานได้เสมอเมื่อต้องการ
```

**After — actual implemented wording:**
```text
พร้อมให้ผู้มีสิทธิ์เข้าใช้งานตามเวลาที่จำเป็นและข้อกำหนดบริการ
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:115](../../../content/isc2-cc-2026/reading/domain-1.md#L115)

**Before:**
```text
และรับประกันความต่อเนื่องทางธุรกิจจากการคุกคาม
```

**After — actual implemented wording:**
```text
และสนับสนุนความต่อเนื่องทางธุรกิจเมื่อเผชิญภัยคุกคาม
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:222](../../../content/isc2-cc-2026/reading/domain-1.md#L222)

**Before:**
```text
หลังจาก** Authentication สำเร็จแล้วเสมอ
```

**After — actual implemented wording:**
```text
หลังจาก** Authentication สำเร็จในตัวอย่างการล็อกอินทั่วไป ทั้งนี้นโยบาย Authorization อาจอนุญาตผู้ใช้ที่ยังไม่ล็อกอินให้อ่านข้อมูลสาธารณะได้
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:1110](../../../content/isc2-cc-2026/reading/domain-1.md#L1110)

**Before:**
```text
ระบบและข้อมูลพร้อมให้เข้าถึงได้เสมอเมื่อต้องการ
```

**After — actual implemented wording:**
```text
ระบบและข้อมูลพร้อมให้ผู้มีสิทธิ์เข้าถึงตามเวลาที่จำเป็นและข้อกำหนดบริการ
```

Current source: [js/core/diagram-generator.js:289](../../../js/core/diagram-generator.js#L289)

**Before:**
```text
      <p class="reading-mob-banner-text">การกระจายภาระงานและคลัสเตอร์เซิร์ฟเวอร์คู่ขนานเพื่อขจัดจุดล้มเหลวเดี่ยว (Eliminate Single Point of Failure - SPOF)</p>
```

**After — actual implemented wording:**
```text
      <p class="reading-mob-banner-text">ตัวอย่าง Load Balancer นี้กระจายภาระงานไปยัง Web Servers หลายเครื่อง เพื่อลดผลกระทบจากบางเครื่องเสีย หากต้องการหลีกเลี่ยง Load Balancer เป็น Single Point of Failure ต้องออกแบบความซ้ำซ้อนของ LB และส่วนพึ่งพาอื่นด้วย</p>
```

### D2-01 — Objective 2.2

**Status:** Fixed. **Academic and bilingual rationale:** RTO is a system/service restoration target, while MTD concerns total business disruption; leave time for validation/reprocessing. Retain defensible Maximum Acceptable Downtime shorthand and correct RPO arithmetic.

**Repeated locations checked:** BIA relationship, RTO prose/review/exam tip, both scenario representations and desktop/mobile recovery timeline. Batch A MTD impact qualification remains.

**Original learning-note comparison:** **Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:264`: “**Maximum acceptable downtime**”; `:270`: “เช่น RTO = 2 ชั่วโมง หมายความว่าเป้าหมายคือกู้ระบบให้กลับมาภายในช่วงเวลานั้น”. `ISC2 Update 2026/Domain 2/Domain 2.md:242`: “**RTO = Maximum acceptable downtime for an IT system**”; `:265`: “ทั้งสองค่าเป็นเป้าหมาย ไม่ใช่การรับประกันว่าทำได้จริงเสมอ”. MTD and universal inequality framing: **Not covered in original learning notes**, after both complete files were inspected.

**Authoritative reference(s):** [NIST SP 800-34r1 §3.2.1, printed p.17](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=31); [NIST RTO glossary, SP 800-34r1 definition](https://csrc.nist.gov/glossary/term/recovery_time_objective)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-2.md:166](../../../content/isc2-cc-2026/reading/domain-2.md#L166)

**Before:**
```text
จะต้อง **น้อยกว่าหรือเท่ากับ** Maximum Tolerable Downtime (ระยะเวลาหยุดทำงานสูงสุดที่ธุรกิจยอมรับได้) เสมอ
```

**After — actual implemented wording:**
```text
ต้องอยู่ภายใน Maximum Tolerable Downtime (ระยะหยุดชะงักรวมที่ธุรกิจทนได้) และเหลือเวลาตรวจสอบระบบและทำรายการค้างก่อนกลับมาดำเนินธุรกิจ
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:165](../../../content/isc2-cc-2026/reading/domain-2.md#L165)

**Before:**
```text
*หมายเหตุทางวิชาการและสมการความสัมพันธ์ (Core Academic Inequality):*
```

**After — actual implemented wording:**
```text
*ความสัมพันธ์ของเป้าหมายกู้คืนระบบกับความทนทานของธุรกิจ (Recovery Target and Business Tolerance):*
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:204](../../../content/isc2-cc-2026/reading/domain-2.md#L204)

**Before:**
```text
คือ **Maximum Acceptable Downtime** หรือระยะเวลาสูงสุดที่ระบบ IT ยอมให้หยุดทำงานได้
```

**After — actual implemented wording:**
```text
คือเป้าหมายระยะเวลาสูงสุดที่กำหนดให้กู้คืนระบบหรือบริการหลังหยุดชะงัก (Target Maximum Restoration Interval; มักย่อว่า Maximum Acceptable Downtime ของระบบ) ไม่ใช่ระยะหยุดชะงักรวมของธุรกิจแบบ MTD
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:205](../../../content/isc2-cc-2026/reading/domain-2.md#L205)

**Before:**
```text
   - **ความสัมพันธ์เชิงคณิตศาสตร์กับ MTD:** <strong class="reading-math-formula">RTO ≤ MTD</strong> (RTO ต้องสั้นกว่าหรือเท่ากับเพดาน MTD เสมอ เพื่อความอยู่รอดของธุรกิจ)
```

**After — actual implemented wording:**
```text
   - **ความสัมพันธ์กับ MTD:** RTO ต้องเหลือเวลาสำหรับการตรวจสอบและทำรายการค้าง เพื่อให้กลับมาดำเนินธุรกิจได้ภายใน MTD เช่น MTD 4 ชั่วโมง อาจกำหนด RTO 3 ชั่วโมงและเวลาเตรียมกลับมาทำงานอีก 1 ชั่วโมง การมี RTO ≤ MTD เพียงอย่างเดียวยังไม่ยืนยันว่าธุรกิจกลับมาทำงานทัน
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:539](../../../content/isc2-cc-2026/reading/domain-2.md#L539)

**Before:**
```text
        <div class="reading-distinction-desc">ระยะเวลาหยุดทำงานสูงสุดที่ระบบยอมรับได้ (Maximum Acceptable Downtime) เดินหน้าหลังเกิดเหตุ โดยต้องเป็นไปตามเงื่อนไข <strong class="reading-math-formula">RTO ≤ MTD</strong></div>
```

**After — actual implemented wording:**
```text
        <div class="reading-distinction-desc">เป้าหมายระยะเวลาสูงสุดสำหรับกู้คืนระบบหรือบริการหลังเกิดเหตุ โดยต้องเหลือเวลาตรวจสอบและทำรายการค้างให้กลับมาดำเนินธุรกิจได้ภายใน MTD</div>
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:641](../../../content/isc2-cc-2026/reading/domain-2.md#L641)

**Before:**
```text
**"ระยะเวลาสูงสุดที่ระบบยอมให้หยุดทำงานได้"**
```

**After — actual implemented wording:**
```text
**"เป้าหมายระยะเวลาสูงสุดสำหรับกู้คืนระบบหรือบริการ"**
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:676](../../../content/isc2-cc-2026/reading/domain-2.md#L676)

**Before:**
```text
RTO คือระยะเวลาสูงสุดที่องค์กรยอมรับได้ว่าระบบ IT หรือบริการจะหยุดทำงาน (Maximum Acceptable Downtime)
```

**After — actual implemented wording:**
```text
RTO คือเป้าหมายระยะเวลาสูงสุดสำหรับกู้คืนระบบ IT หรือบริการหลังหยุดชะงัก (Target Maximum Restoration Interval) ต้องวางแผนเวลาเตรียมกลับมาดำเนินธุรกิจให้ทัน MTD ด้วย
```

Current source: [content/isc2-cc-2026/reading/domain-2-scenarios.js:30](../../../content/isc2-cc-2026/reading/domain-2-scenarios.js#L30)

**Before:**
```text
RTO คือระยะเวลาสูงสุดที่องค์กรยอมรับได้ว่าระบบ IT หรือบริการจะหยุดทำงาน (Maximum Acceptable Downtime)
```

**After — actual implemented wording:**
```text
RTO คือเป้าหมายระยะเวลาสูงสุดสำหรับกู้คืนระบบ IT หรือบริการหลังหยุดชะงัก (Target Maximum Restoration Interval) ต้องวางแผนเวลาเตรียมกลับมาดำเนินธุรกิจให้ทัน MTD ด้วย
```

Current source: [js/core/diagram-generator.js:1622](../../../js/core/diagram-generator.js#L1622)

**Before:**
```text
ระบบยอมหยุดทำงานได้สูงสุด: 1 ชม. → (RTO ≤ MTD)
```

**After — actual implemented wording:**
```text
ตัวอย่างเป้าหมายกู้ระบบ: 1 ชม. (เผื่อเวลาก่อน MTD)
```

Current source: [js/core/diagram-generator.js:1640](../../../js/core/diagram-generator.js#L1640)

**Before:**
```text
RTO (Acceptable Downtime)
```

**After — actual implemented wording:**
```text
RTO (Restoration Target)
```

Current source: [js/core/diagram-generator.js:1642](../../../js/core/diagram-generator.js#L1642)

**Before:**
```text
ระยะเวลาหยุดทำงานสูงสุดที่ยอมรับได้นับเดินหน้าจากเวลาเกิดเหตุ (17:00 → 18:00) · RTO ≤ MTD
```

**After — actual implemented wording:**
```text
เป้าหมายกู้คืนระบบนับเดินหน้าจากเวลาเกิดเหตุ (17:00 → 18:00) ต้องเหลือเวลาตรวจสอบและทำรายการค้างให้ธุรกิจกลับมาทำงานภายใน MTD
```

Current source: [js/core/diagram-generator.js:1676](../../../js/core/diagram-generator.js#L1676)

**Before:**
```text
RTO เดินหน้า: เวลาหยุดทำงานสูงสุด 1 ชม.
```

**After — actual implemented wording:**
```text
RTO เดินหน้า: เป้าหมายกู้ระบบภายใน 1 ชม.
```

### D2-03 — Objective 2.3

**Status:** Fixed. **Academic and bilingual rationale:** Attribute NIST password minima to their single-factor/MFA context, rather than replacing 14 with another universal number. Retain passphrase length and compromised-password checks.

**Repeated locations checked:** Password-protection subsection; no numeric 14 requirement in relevant scenarios/diagrams.

**Original learning-note comparison:** **Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:427`: “Establish Authentication Policies”; `ISC2 Update 2026/Domain 2/Domain 2.md:414`: “**Establish authentication policies:** กำหนดนโยบายการยืนยันตัวตน”. Numeric threshold: **Not covered in original learning notes**, after both complete files were inspected.

**Authoritative reference(s):** [NIST SP 800-63B-4 §3.1.1.2, Password Verifiers](https://pages.nist.gov/800-63-4/sp800-63b.html#passwordver)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-2.md:327](../../../content/isc2-cc-2026/reading/domain-2.md#L327)

**Before:**
```text
- **Establish Authentication Policies:** กำหนดนโยบายความยาวรหัสผ่าน (นิยมใช้ Passphrase ที่มีความยาว <span class="reading-math-formula">≥ 14</span> ตัวอักษรแทนความซับซ้อนแบบเดิม)
```

**After — actual implemented wording:**
```text
- **Establish Authentication Policies:** กำหนดนโยบายรหัสผ่านตามความเสี่ยงและวิธีพิสูจน์ตัวตน เน้นความยาวของ Passphrase และการตรวจรหัสผ่านที่รั่วไหล ตาม NIST SP 800-63B-4 รหัสผ่านที่ใช้เป็นปัจจัยเดียวต้องมีอย่างน้อย 15 ตัวอักษร; ถ้าใช้เฉพาะร่วมกับ MFA อาจกำหนดสั้นลงได้แต่ไม่น้อยกว่า 8 ตัวอักษร ตัวเลขนี้เป็นข้อกำหนดของมาตรฐานที่ระบุ ไม่ใช่เกณฑ์สากลสำหรับทุกระบบ
```

### D2-05 — Objective 2.4

**Status:** Fixed. **Academic and bilingual rationale:** State MTTR expansion and endpoints rather than a universal undisclosed ISC2 convention. Respond is valid; initiation and completed remediation are different intervals.

**Repeated locations checked:** MTTR heading/body; MTTD remains occurrence-to-detection. No scenario or dedicated diagram requires the disputed endpoint.

**Original learning-note comparison:** **Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:492`: “**MTTR — Mean Time to Respond**”; `:494`: “ตาม framing ในสไลด์:”; `:496`: “ใช้เวลาเท่าไรในการ Respond ต่อ Security Incident”. `ISC2 Update 2026/Domain 2/Domain 2.md:450`: “**Mean Time to Respond (MTTR):** เวลาเฉลี่ยในการตอบสนองเหตุการณ์”; `:457` describes response duration. Initiation-only endpoint and universal ISC2 convention: **Not covered in original learning notes**. Underlying slides were not independently available to establish the stronger claim.

**Authoritative reference(s):** [Microsoft incident-response overview, “Incident response process for SecOps” → “1. Decide and act”](https://learn.microsoft.com/en-us/security/operations/incident-response-overview#incident-response-process-for-secops); [ISC2 objective 2.4](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-2.md:374](../../../content/isc2-cc-2026/reading/domain-2.md#L374)

**Before:**
```text
**Mean Time to Respond / Remediate (MTTR):**
```

**After — actual implemented wording:**
```text
**MTTR — ต้องระบุชื่อเต็มและช่วงเวลาที่วัด:**
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:375](../../../content/isc2-cc-2026/reading/domain-2.md#L375)

**Before:**
```text
   - *ตามบริบทในสไลด์และเนื้อหาการสอบ ISC2 CC:* MTTR คือ **Mean Time to Respond** หรือเวลาเฉลี่ยที่ทีมงานใช้ในการเริ่มดำเนินการตอบสนองต่อ Security Incident ที่ได้รับแจ้ง
```

**After — actual implemented wording:**
```text
   - MTTR มีหลายความหมายตามบริบท เช่น **Mean Time to Respond, Remediate, Repair หรือ Restore** จึงต้องระบุชื่อเต็มและจุดเริ่ม/สิ้นสุดของช่วงเวลาที่วัด หากในบทนี้วัดเวลาเริ่มตอบสนอง ให้ระบุว่าเฉลี่ยตั้งแต่แจ้งเหตุจนเริ่มปฏิบัติ; หากวัดเวลาแก้ไขจนเสร็จ ต้องระบุจุดสิ้นสุดนั้นแยกต่างหาก
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:376](../../../content/isc2-cc-2026/reading/domain-2.md#L376)

**Before:**
```text
ดังนั้นในห้องสอบจึงควรสังเกตบริบทของคำถามเป็นหลัก
```

**After — actual implemented wording:**
```text
อ่านนิยามและจุดเริ่ม/สิ้นสุดในโจทย์ก่อนคำนวณหรือเปรียบเทียบ ไม่ถือว่าทุกบริบทใช้ช่วงเวลาเดียวกัน
```

### D2-07 — Objective 2.3

**Status:** Fixed. **Academic and bilingual rationale:** Preserve bulk examples while explaining nesting: Whaling is a targeted Spear Phishing subtype, and Spear Phishing is Phishing.

**Repeated locations checked:** Attack table, review distinctions, executive example and exported scenario rationale. Whaling remains the most-specific answer; Vishing/Smishing channel distinctions remain.

**Original learning-note comparison:** **Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:400`: “**Phishing** → ข้อความหลอกทั่วไปให้ Click/Open/Reveal information”; `:402`: “**Spear Phishing** → Phishing ที่เจาะจงบุคคลหรือองค์กร”; `:404`: “**Whaling** → Target บุคคลระดับสูง เช่น Executive”. `ISC2 Update 2026/Domain 2/Domain 2.md:392–394` defines generic fraudulent-message phishing, targeted spear phishing and executive whaling; `:598–599` uses general/targeted shorthand. Stronger executive-excluding JS rationale is current-only.

**Authoritative reference(s):** [Canadian Centre for Cyber Security, “Spear-phishing”](https://www.cyber.gc.ca/en/guidance/introduction-cyber-threat-environment)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-2.md:567](../../../content/isc2-cc-2026/reading/domain-2.md#L567)

**Before:**
```text
การส่งข้อความหลอกลวงทั่วไปแบบไม่เจาะจงเป้าหมายในวงกว้าง
```

**After — actual implemented wording:**
```text
Phishing คือข้อความหลอกลวงเพื่อชักจูงให้เปิดเผยข้อมูลหรือทำสิ่งที่เป็นอันตราย อาจส่งวงกว้างหรือเจาะจงเป้าหมายก็ได้; Bulk Phishing เป็นตัวอย่างแบบวงกว้าง
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:581](../../../content/isc2-cc-2026/reading/domain-2.md#L581)

**Before:**
```text
การเจาะจงบุคคลทั่วไป พนักงานแผนกใดแผนกหนึ่ง หรือทีมงานเฉพาะกลุ่ม
```

**After — actual implemented wording:**
```text
Phishing ที่เจาะจงบุคคลหรือองค์กร เช่น พนักงาน แผนก หรือทีมเฉพาะกลุ่ม; รวมถึงผู้บริหารได้ โดย Whaling เป็นประเภทย่อยที่พุ่งเป้าผู้บริหารหรือบุคคลสำคัญ
```

Current source: [content/isc2-cc-2026/reading/domain-2-scenarios.js:70](../../../content/isc2-cc-2026/reading/domain-2-scenarios.js#L70)

**Before:**
```text
ซึ่งต่างจาก Spear Phishing ที่หมายถึงการเจาะจงบุคคลหรือกลุ่มงานทั่วไป
```

**After — actual implemented wording:**
```text
Whaling เป็นประเภทย่อยของ Spear Phishing ซึ่งเป็น Phishing ที่เจาะจงบุคคลหรือองค์กร จึงตอบ Whaling เป็นประเภทที่เฉพาะเจาะจงที่สุดในสถานการณ์นี้
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:308](../../../content/isc2-cc-2026/reading/domain-2.md#L308)

**Before:**
```text
ข้อความหลอกลวงวงกว้างเพื่อล่อให้เหยื่อคลิกลิงก์ เปิดไฟล์แนบ หรือกรอกรหัสผ่าน
```

**After — actual implemented wording:**
```text
ข้อความหลอกลวงเพื่อล่อให้เหยื่อคลิกลิงก์ เปิดไฟล์แนบ หรือกรอกรหัสผ่าน; ตัวอย่างแบบวงกว้างเรียก Bulk Phishing ส่วน Spear Phishing และ Whaling เจาะจงเป้าหมาย
```

### D2-10 — Objective 2.2

**Status:** Fixed. **Academic and bilingual rationale:** Distinguish document review from a facilitated tabletop scenario discussion, retaining simulations and full-interruption testing without a mandatory ladder.

**Repeated locations checked:** DR testing paragraph and surrounding purposes; no repeated tabletop diagram/scenario.

**Original learning-note comparison:** **Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:305`: “และ DR Plan ต้องมีการ Test/Drill เพื่อดูว่าใช้ได้จริง”; `ISC2 Update 2026/Domain 2/Domain 2.md:294`: “**Testing and Drills** คือการทดสอบแผน DR อย่างสม่ำเสมอเพื่อให้มั่นใจว่าแผนมีประสิทธิผล”. Checklist/tabletop grouping: **Not covered in original learning notes** after both were inspected.

**Authoritative reference(s):** [NIST SP 800-84 §4, printed p.4-1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-84.pdf#page=21)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-2.md:252](../../../content/isc2-cc-2026/reading/domain-2.md#L252)

**Before:**
```text
- รูปแบบการทดสอบมีตั้งแต่การตรวจทานเอกสาร (Checklist / Tabletop Exercise), การทดลองซ้อมบางส่วน (Simulation / Functional Drill) ไปจนถึงการสลับระบบจริง (Full-Interruption Test)
```

**After — actual implemented wording:**
```text
- รูปแบบการทดสอบมีทั้ง Checklist / Document Review เพื่อตรวจความครบถ้วนของแผน; Tabletop Exercise ให้ผู้เกี่ยวข้องอภิปรายบทบาทและการตัดสินใจตามสถานการณ์ที่ผู้นำการฝึกกำหนด โดยไม่ต้องสลับระบบจริง; Simulation / Functional Drill และการทดสอบกู้คืนจริงใช้ตรวจความสามารถปฏิบัติงานตามขอบเขตและความเสี่ยงที่อนุมัติ ส่วน Full-Interruption Test มีการสลับระบบจริง จึงต้องประเมินและอนุมัติผลกระทบก่อน ไม่ใช่ลำดับการทดสอบที่ทุกองค์กรต้องทำเหมือนกัน
```

### D2-11 — Objective 2.2

**Status:** Fixed. **Academic and bilingual rationale:** Preserve hot/warm/cold readiness, cost comparisons and time examples; label times illustrative and data readiness design-dependent, tested against RTO/RPO.

**Repeated locations checked:** Recovery-site descriptions; diagram site-name lists do not promise numeric windows.

**Original learning-note comparison:** **Original quote:** `ISC2 Update 2026/Domain 2/Domain 2.md:284`: “**เพิ่มเติมเพื่อความเข้าใจ (สไลด์ที่ส่งมาเอ่ยชื่อ แต่ไม่ได้อธิบายความแตกต่าง):**”; `:286`: “ความพร้อมโดยทั่วไป | ระยะเตรียมการโดยทั่วไป”; `:288`: “**Hot Site** | ระบบและทรัพยากรเตรียมพร้อมมาก | เร็วที่สุด”. `D2 sum.md:299–303` only names sites. Numeric windows and universal near-real-time sync: **Not covered in original learning notes**.

**Authoritative reference(s):** [NIST SP 800-34r1 §§3.4.3 and 5.1.5, printed pp.22 and 47](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=36)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-2.md:233](../../../content/isc2-cc-2026/reading/domain-2.md#L233)

**Before:**
```text
     - มีอุปกรณ์ฮาร์ดแวร์ เครือข่าย ซอฟต์แวร์ และข้อมูลที่ซิงโครไนซ์แบบเกือบ Real-time พร้อมใช้งานทันที
```

**After — actual implemented wording:**
```text
     - เตรียมระบบและทรัพยากรพร้อมมากเพื่อเริ่มกู้คืนได้รวดเร็ว ข้อมูลอาจจำลองแบบต่อเนื่องหรือจำเป็นต้องปรับปรุงจากสำรองล่าสุด ขึ้นอยู่กับการออกแบบ ไม่ได้หมายความว่าข้อมูลเป็นปัจจุบันและพร้อมใช้งานทันทีทุกกรณี
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:234](../../../content/isc2-cc-2026/reading/domain-2.md#L234)

**Before:**
```text
*ระยะเวลากู้คืน:*
```

**After — actual implemented wording:**
```text
*ระยะเวลากู้คืนโดยเปรียบเทียบ (ช่วงเวลาเป็นตัวอย่าง ไม่ใช่การรับประกัน ต้องทดสอบเทียบ RTO/RPO):*
```

### D2-12 — Objective 2.3

**Status:** Fixed. **Academic and bilingual rationale:** Separate suitable salted password hashing from supplemental encryption. Bound phishing resistance to usable authentication material sent to an impostor verifier; preserve device/session/recovery protection.

**Repeated locations checked:** Password verifier and FIDO2/WebAuthn/passkey explanations; existing ordinary-MFA phishing caveat preserved.

**Original learning-note comparison:** **Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:428`: “Protect Stored Credentials”; `:431`: “Encourage Phishing-resistant Authentication”. `ISC2 Update 2026/Domain 2/Domain 2.md:415`: “**Protect stored credentials:** ปกป้องข้อมูลรับรองตัวตนที่จัดเก็บ”; `:422`: “MFA ไม่ได้แปลว่าต้านทาน Phishing ได้ทุกชนิดโดยอัตโนมัติ”. Specific storage algorithms and anti-interception guarantee: **Not covered in original learning notes** after both were read fully.

**Authoritative reference(s):** [NIST SP 800-63B-4 §§3.1.1.2 and 3.2.5](https://pages.nist.gov/800-63-4/sp800-63b.html#phish)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-2.md:328](../../../content/isc2-cc-2026/reading/domain-2.md#L328)

**Before:**
```text
- **Protect Stored Credentials:** ป้องกันรหัสผ่านที่จัดเก็บด้วยการเข้ารหัสและการแฮชร่วมกับ Salt (Hashing & Salting)
```

**After — actual implemented wording:**
```text
- **Protect Stored Credentials:** ระบบตรวจสอบรหัสผ่านควรเก็บค่าแฮชจากวิธี Password Hashing ที่เหมาะสมร่วมกับ salt เฉพาะและค่า cost ที่เหมาะสม ไม่เก็บรหัสผ่านเป็นข้อความธรรมดา; การเข้ารหัส (Encryption) อาจเป็นมาตรการเสริมแยกต่างหากจาก Hashing &amp; Salting
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:333](../../../content/isc2-cc-2026/reading/domain-2.md#L333)

**Before:**
```text
ทำให้ไม่สามารถถูกดักขโมยรหัสยืนยันตัวตนได้
```

**After — actual implemented wording:**
```text
จึงต้านทานการหลอกส่งข้อมูลยืนยันที่นำไปใช้ได้ให้เว็บไซต์ปลอม แต่ยังต้องปกป้องอุปกรณ์ เซสชัน และกระบวนการกู้คืนบัญชี ไม่ใช่การรับประกันว่าจะป้องกันการยึดบัญชีได้ทุกกรณี
```

### D34-02 — Objective 3.2

**Status:** Fixed. **Academic and bilingual rationale:** Add requested action while retaining valid device posture. The list is illustrative rather than a canonical exhaustive four-store taxonomy.

**Repeated locations checked:** ABAC main text, policy, review comparison, both scenario forms, desktop/mobile model matrix. Read/Delete example makes operation-level scope explicit.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [NIST ABAC project](https://csrc.nist.gov/projects/attribute-based-access-control)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-3.md:257](../../../content/isc2-cc-2026/reading/domain-3.md#L257)

**Before:**
```text
**หมวดหมู่คุณลักษณะหลัก 4 ด้าน:**
```

**After — actual implemented wording:**
```text
**ตัวอย่างคุณลักษณะและบริบทที่นโยบายอาจใช้ (ไม่ใช่หมวดหมู่ตายตัว):**
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:262](../../../content/isc2-cc-2026/reading/domain-3.md#L262)

**Before:**
```text
- **ตัวอย่างนโยบาย:** *"อนุญาตให้เปิดไฟล์สัญญาทางการเงินได้
```

**After — actual implemented wording:**
```text
- **Requested Action (การกระทำที่ร้องขอ):** ต้องประเมินร่วมกับคุณลักษณะและนโยบาย เช่น Read อาจอนุญาต แต่ Delete ไม่อนุญาต แม้เป็นผู้ใช้และไฟล์เดียวกัน
- **ตัวอย่างนโยบาย:** *"อนุญาตให้อ่าน (Read) ไฟล์สัญญาทางการเงินได้
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:381](../../../content/isc2-cc-2026/reading/domain-3.md#L381)

**Before:**
```text
(Subject, Object, Environment, Device)
```

**After — actual implemented wording:**
```text
(Subject, Object, Requested Action, Environment และอาจใช้ Device Posture)
```

Current source: [js/core/diagram-generator.js:2206](../../../js/core/diagram-generator.js#L2206)

**Before:**
```text
Subject, Object &amp; Environment
```

**After — actual implemented wording:**
```text
Subject, Object, Action, Context
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:561](../../../content/isc2-cc-2026/reading/domain-3.md#L561)

**Before:**
```text
ทำธุรกรรม "ในวันจันทร์-ศุกร์
```

**After — actual implemented wording:**
```text
ทำรายการโอนเงิน (Requested Action) "ในวันจันทร์-ศุกร์
```

Current source: [content/isc2-cc-2026/reading/domain-3-scenarios.js:87](../../../content/isc2-cc-2026/reading/domain-3-scenarios.js#L87)

**Before:**
```text
ทำธุรกรรม "ในวันจันทร์-ศุกร์
```

**After — actual implemented wording:**
```text
ทำรายการโอนเงิน (Requested Action) "ในวันจันทร์-ศุกร์
```

### D34-05 — Objective 4.3

**Status:** Fixed. **Academic and bilingual rationale:** Keep retained customer accountability while separating customer policy/settings from provider-operated Storage/IAM services. Scope the scenario to the misconfigured sharing setting.

**Repeated locations checked:** Main shared model/callout, all eight customer Data/IAM SVG cells, all four mobile service cards, service review/exam tip/table and both scenario forms. Customer answer preserved.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [Azure shared responsibility](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility); [AWS IAM/STS Security](https://docs.aws.amazon.com/IAM/latest/UserGuide/security.html)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-4.md:468](../../../content/isc2-cc-2026/reading/domain-4.md#L468)

**Before:**
```text
กฎทองสำหรับห้องสอบ: สิ่งที่ลูกค้าเป็นผู้รับผิดชอบ 100% เสมอ
```

**After — actual implemented wording:**
```text
ความรับผิดชอบที่ลูกค้ายังคงมี: การตัดสินใจและการตั้งค่าที่ตนควบคุม
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:470](../../../content/isc2-cc-2026/reading/domain-4.md#L470)

**Before:**
```text
  <p>ไม่ว่าองค์กรจะเลือกใช้โมเดลคลาวด์รูปแบบใด (IaaS, PaaS, SaaS หรือ FaaS) สิ่งที่ <strong>ลูกค้า (Customer) ต้องเป็นผู้รับผิดชอบเสมอ 100%</strong> และไม่สามารถส่งมอบความรับผิดชอบนี้ให้แก่ผู้ให้บริการคลาวด์ได้ คือ:<br>
```

**After — actual implemented wording:**
```text
  <p>ในทุกโมเดล (IaaS, PaaS, SaaS หรือ FaaS) ลูกค้ายังคงรับผิดชอบการตัดสินใจและการตั้งค่าที่ตนควบคุม แต่ผู้ให้บริการยังต้องรักษาความปลอดภัยของบริการจัดเก็บข้อมูลและระบบ IAM ที่ตนบริหาร ขอบเขตจริงขึ้นอยู่กับบริการและข้อตกลง:<br>
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:471](../../../content/isc2-cc-2026/reading/domain-4.md#L471)

**Before:**
```text
Data &amp; Information (ข้อมูลสารสนเทศและการจัดชั้นความลับ)
```

**After — actual implemented wording:**
```text
Data &amp; Information (การจัดชั้นข้อมูลและการกำหนดผู้มีสิทธิ์เข้าถึง)
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:472](../../../content/isc2-cc-2026/reading/domain-4.md#L472)

**Before:**
```text
Identity &amp; Access Management (การบริหารจัดการตัวตน บัญชีผู้ใช้ และสิทธิ์การเข้าถึง)
```

**After — actual implemented wording:**
```text
Identity &amp; Access Management (บัญชี นโยบาย และสิทธิ์ที่ลูกค้าควบคุม)
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:461](../../../content/isc2-cc-2026/reading/domain-4.md#L461)

**Before:**
```text
<div class="reading-semantic-diagram" data-diagram="cloudSharedResponsibility"></div>
```

**After — actual implemented wording:**
```text
ในภาพ Data Policy / IAM Policy หมายถึงการจัดชั้นข้อมูล การตัดสินใจให้สิทธิ์ และการตั้งค่าบัญชีที่ลูกค้าควบคุม ไม่ได้หมายความว่าลูกค้าดำเนินบริการ Storage หรือ IAM ทั้งหมดเอง ผู้ให้บริการยังรักษาความปลอดภัยของส่วนบริการที่ตนบริหาร รายละเอียดของโมเดลรวมถึง PaaS ให้ตรวจบริการและข้อตกลง

<div class="reading-semantic-diagram" data-diagram="cloudSharedResponsibility"></div>
```

Current source: [js/core/diagram-generator.js:2647](../../../js/core/diagram-generator.js#L2647)

**Before:**
```text
Data &amp; Information (Customer)
```

**After — actual implemented wording:**
```text
Data Policy (Customer)
```

Current source: [js/core/diagram-generator.js:2650](../../../js/core/diagram-generator.js#L2650)

**Before:**
```text
Identity &amp; Access (Customer)
```

**After — actual implemented wording:**
```text
IAM Policy (Customer)
```

Current source: [js/core/diagram-generator.js:2756](../../../js/core/diagram-generator.js#L2756)

**Before:**
```text
ลูกค้าดูแล: Data, IAM,
```

**After — actual implemented wording:**
```text
ลูกค้าดูแล: การจัดชั้นข้อมูลและนโยบาย IAM/การตั้งค่าที่ตนควบคุม,
```

Current source: [js/core/diagram-generator.js:2778](../../../js/core/diagram-generator.js#L2778)

**Before:**
```text
ลูกค้าดูแล: Data และ User Access (IAM) เสมอ
```

**After — actual implemented wording:**
```text
ลูกค้าดูแล: การจัดชั้นข้อมูลและนโยบาย/การตั้งค่า User Access ที่ตนควบคุม; CSP ยังคงดูแลความปลอดภัยของบริการ Storage และ IAM ที่ตนบริหาร
```

Current source: [js/core/diagram-generator.js:2789](../../../js/core/diagram-generator.js#L2789)

**Before:**
```text
ลูกค้าดูแล: เฉพาะ Function Code, Data และ IAM Trigger
```

**After — actual implemented wording:**
```text
ลูกค้าดูแล: Function Code, การจัดชั้นข้อมูล และนโยบาย/การตั้งค่า IAM Trigger ที่ตนควบคุม
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:657](../../../content/isc2-cc-2026/reading/domain-4.md#L657)

**Before:**
```text
SaaS ผู้ให้บริการดูแลทั้งหมด ลูกค้าดูแลแค่ Data และ User Access
```

**After — actual implemented wording:**
```text
SaaS ผู้ให้บริการบริหารแอปพลิเคชัน/แพลตฟอร์ม ลูกค้ายังคงดูแลการจัดชั้นข้อมูลและนโยบาย/การตั้งค่า User Access ที่ตนควบคุม
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:707](../../../content/isc2-cc-2026/reading/domain-4.md#L707)

**Before:**
```text
**"สิ่งที่ลูกค้าคลาวด์เป็นผู้รับผิดชอบ 100% เสมอในทุกโมเดล (IaaS, PaaS, SaaS)"**
```

**After — actual implemented wording:**
```text
**"ความรับผิดชอบที่ลูกค้ายังคงมีในทุกโมเดล: การจัดชั้นข้อมูลและการกำหนดสิทธิ์ที่ตนควบคุม"**
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:734](../../../content/isc2-cc-2026/reading/domain-4.md#L734)

**Before:**
```text
ลูกค้าเป็นเจ้าของและรับผิดชอบข้อมูลและการให้สิทธิ์ 100% เสมอ
```

**After — actual implemented wording:**
```text
ลูกค้ายังคงรับผิดชอบการจัดชั้นข้อมูล การตัดสินใจให้สิทธิ์ และการตั้งค่าที่ตนควบคุม; CSP ดูแลบริการที่ตนบริหาร
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:819](../../../content/isc2-cc-2026/reading/domain-4.md#L819)

**Before:**
```text
Customer (ผู้ใช้บริการคลาวด์เสมอ — ไม่สามารถส่งมอบความรับผิดชอบนี้ให้ CSP ได้)
```

**After — actual implemented wording:**
```text
Customer (ผู้ใช้บริการที่ต้องแก้ไขสิทธิ์แชร์ซึ่งองค์กรตั้งค่าผิด)
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:820](../../../content/isc2-cc-2026/reading/domain-4.md#L820)

**Before:**
```text
กฎทองของโมเดลความรับผิดชอบร่วมบนคลาวด์คือ ไม่ว่าองค์กรจะใช้โมเดล IaaS, PaaS หรือ SaaS ก็ตาม ทรัพย์สินที่ลูกค้าเป็นผู้รับผิดชอบ 100% เสมอคือ "ข้อมูล (Data & Information)" และ "การบริหารจัดการตัวตนและสิทธิ์การเข้าถึง (IAM & Access Control)" ผู้ให้บริการคลาวด์ไม่สามารถรับผิดชอบแทนได้
```

**After — actual implemented wording:**
```text
ในสถานการณ์นี้ลูกค้าตั้งค่าสิทธิ์แชร์เป็น Public Accessible จึงต้องแก้ไขสิทธิ์ที่ตนควบคุม ลูกค้ายังคงรับผิดชอบการจัดชั้นข้อมูลและนโยบายการเข้าถึง ขณะที่ CSP ยังต้องรักษาความปลอดภัยของบริการ Storage และ IAM ที่ตนบริหาร ขอบเขตจริงขึ้นอยู่กับบริการและข้อตกลง
```

Current source: [content/isc2-cc-2026/reading/domain-4-scenarios.js:81](../../../content/isc2-cc-2026/reading/domain-4-scenarios.js#L81)

**Before:**
```text
Customer (ผู้ใช้บริการคลาวด์เสมอ — ไม่สามารถส่งมอบความรับผิดชอบนี้ให้ CSP ได้)
```

**After — actual implemented wording:**
```text
Customer (ผู้ใช้บริการที่ต้องแก้ไขสิทธิ์แชร์ซึ่งองค์กรตั้งค่าผิด)
```

Current source: [content/isc2-cc-2026/reading/domain-4-scenarios.js:82](../../../content/isc2-cc-2026/reading/domain-4-scenarios.js#L82)

**Before:**
```text
กฎทองของโมเดลความรับผิดชอบร่วมบนคลาวด์คือ ไม่ว่าองค์กรจะใช้โมเดล IaaS, PaaS หรือ SaaS ก็ตาม ทรัพย์สินที่ลูกค้าเป็นผู้รับผิดชอบ 100% เสมอคือ "ข้อมูล (Data & Information)" และ "การบริหารจัดการตัวตนและสิทธิ์การเข้าถึง (IAM & Access Control)" ผู้ให้บริการคลาวด์ไม่สามารถรับผิดชอบแทนได้
```

**After — actual implemented wording:**
```text
ในสถานการณ์นี้ลูกค้าตั้งค่าสิทธิ์แชร์เป็น Public Accessible จึงต้องแก้ไขสิทธิ์ที่ตนควบคุม ลูกค้ายังคงรับผิดชอบการจัดชั้นข้อมูลและนโยบายการเข้าถึง ขณะที่ CSP ยังต้องรักษาความปลอดภัยของบริการ Storage และ IAM ที่ตนบริหาร ขอบเขตจริงขึ้นอยู่กับบริการและข้อตกลง
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:818](../../../content/isc2-cc-2026/reading/domain-4.md#L818)

**Before:**
```text
ไม่ว่าจะใช้งานคลาวด์โมเดลใด (IaaS, PaaS หรือ SaaS) หน้าที่ในการจำแนกประเภทข้อมูลและการบริหารจัดการสิทธิ์การเข้าถึง (Data & IAM) เป็นของใครเสมอ?
```

**After — actual implemented wording:**
```text
ในสถานการณ์นี้ ใครต้องแก้ไขสิทธิ์แชร์ที่องค์กรตั้งค่าผิด (Customer-Controlled Sharing Permission)?
```

Current source: [content/isc2-cc-2026/reading/domain-4-scenarios.js:80](../../../content/isc2-cc-2026/reading/domain-4-scenarios.js#L80)

**Before:**
```text
ไม่ว่าจะใช้งานคลาวด์โมเดลใด (IaaS, PaaS หรือ SaaS) หน้าที่ในการจำแนกประเภทข้อมูลและการบริหารจัดการสิทธิ์การเข้าถึง (Data & IAM) เป็นของใครเสมอ?
```

**After — actual implemented wording:**
```text
ในสถานการณ์นี้ ใครต้องแก้ไขสิทธิ์แชร์ที่องค์กรตั้งค่าผิด (Customer-Controlled Sharing Permission)?
```

### D34-06 — Objective 4.3

**Status:** Fixed. **Academic and bilingual rationale:** Identify AWS SG/NACL mechanics as an example, distinguish resource/interface filtering from guest-OS firewall, and limit automatic permission to response traffic. Briefly contrast Azure NSG.

**Repeated locations checked:** Cloud-control explanation, comparison and trigger table. No SG/NACL scenario; Batch A NAT alternatives retained.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [AWS VPC comparison](https://docs.aws.amazon.com/vpc/latest/userguide/infrastructure-security.html#VPC_Security_Comparison); [AWS SG basics](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html#VPCSecurityGroups); [Azure NSG overview](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-4.md:516](../../../content/isc2-cc-2026/reading/domain-4.md#L516)

**Before:**
```text
**Security Groups vs. Network ACLs (NACLs):**
```

**After — actual implemented wording:**
```text
**ตัวอย่าง AWS VPC — Security Groups vs. Network ACLs (NACLs):**
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:517](../../../content/isc2-cc-2026/reading/domain-4.md#L517)

**Before:**
```text
ไฟร์วอลล์เสมือนระดับ **Instance / Virtual Machine (Host Level)** มีคุณสมบัติเป็น **Stateful** (หากอนุญาตขาเข้า ขาออกจะได้รับอนุญาตอัตโนมัติ)
```

**After — actual implemented wording:**
```text
การกรองแบบ **Stateful** ที่ผูกกับทรัพยากร/อินเทอร์เฟซของ AWS (ไม่ใช่ Firewall ภายใน Guest OS) ทราฟฟิกตอบกลับของการเชื่อมต่อที่อนุญาตผ่านได้อัตโนมัติ
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:518](../../../content/isc2-cc-2026/reading/domain-4.md#L518)

**Before:**
```text
รองรับทั้งกฎ Allow และ Deny เรียงลำดับตามหมายเลข Rule Number
```

**After — actual implemented wording:**
```text
รองรับทั้งกฎ Allow และ Deny เรียงลำดับตามหมายเลข Rule Number ผู้ให้บริการอื่นมีรายละเอียดต่างกัน เช่น Azure NSG เป็น Stateful และมีทั้ง Allow/Deny โดยผูกกับ subnet หรือ NIC ได้
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:691](../../../content/isc2-cc-2026/reading/domain-4.md#L691)

**Before:**
```text
12. Security Group (Stateful) vs. Network ACL (Stateless)
```

**After — actual implemented wording:**
```text
12. AWS Security Group (Stateful) vs. Network ACL (Stateless)
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:695](../../../content/isc2-cc-2026/reading/domain-4.md#L695)

**Before:**
```text
ทำงานระดับเครื่องเสมือน มีคุณสมบัติ Stateful อนุญาตทราฟฟิกขากลับอัตโนมัติ กำหนดได้เฉพาะกฎ Allow
```

**After — actual implemented wording:**
```text
ใน AWS ผูกกับทรัพยากร/อินเทอร์เฟซ เป็น Stateful อนุญาตทราฟฟิกตอบกลับของ flow ที่อนุญาตอัตโนมัติ ใช้กฎ Allow; ไม่ใช่ข้อกำหนดเดียวกันของทุกผู้ให้บริการ
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:739](../../../content/isc2-cc-2026/reading/domain-4.md#L739)

**Before:**
```text
| **Security Group** |
```

**After — actual implemented wording:**
```text
| **AWS Security Group** |
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:739](../../../content/isc2-cc-2026/reading/domain-4.md#L739)

**Before:**
```text
เปิดพอร์ต 443 ขาเข้า แล้วทราฟฟิกขาออกเปิดให้อัตโนมัติ
```

**After — actual implemented wording:**
```text
อนุญาต flow เข้าพอร์ต 443 แล้วทราฟฟิกตอบกลับของ flow นั้นผ่านได้อัตโนมัติ ไม่ใช่อนุญาตขาออกใหม่ทั้งหมด
```

### D34-09 — Objective 4.1

**Status:** Fixed. **Academic and bilingual rationale:** Qualify IPv4 broadcast by host bits and subnet mask. Keep the valid Ethernet address and a /24 example.

**Repeated locations checked:** Broadcast-domain definition, CIDR explanation, diagrams/scenarios; no repeated unqualified .255 rule.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [RFC 919 §7](https://www.rfc-editor.org/rfc/rfc919.html#section-7)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-4.md:22](../../../content/isc2-cc-2026/reading/domain-4.md#L22)

**Before:**
```text
Broadcast (FF:FF:FF:FF:FF:FF หรือ x.x.x.255)
```

**After — actual implemented wording:**
```text
Broadcast (Ethernet ใช้ FF:FF:FF:FF:FF:FF; IPv4 subnet-directed broadcast มีบิตส่วน host เป็น 1 ทั้งหมด เช่น 192.168.1.255 สำหรับ 192.168.1.0/24 ต้องดู subnet mask ไม่ใช่ .255 เพียงอย่างเดียว)
```

### D34-14 — Objective 4.3

**Status:** Fixed. **Academic and bilingual rationale:** Keep the high-level PaaS provider OS/platform model, customer code/data and named examples; qualify customer settings, supported versions and Beanstalk update/branch duties.

**Repeated locations checked:** PaaS main paragraph, service recap, shared model note/matrix, SQL-injection scenario. Customer remains responsible for the vulnerable application code in that scenario.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [AWS Beanstalk managed updates](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html); [Platform support policy](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-support-policy.html)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-4.md:441](../../../content/isc2-cc-2026/reading/domain-4.md#L441)

**Before:**
```text
ลูกค้ามีหน้าที่เพียงนำ **โค้ดแอปพลิเคชัน (Application Code) และข้อมูล (Data)** มาติดตั้งและรันงาน
```

**After — actual implemented wording:**
```text
ลูกค้าดูแล **การพัฒนาโค้ดแอปพลิเคชัน (Application Code), ข้อมูล (Data) และการตั้งค่าที่ตนควบคุม**
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:442](../../../content/isc2-cc-2026/reading/domain-4.md#L442)

**Before:**
```text
AWS Elastic Beanstalk
```

**After — actual implemented wording:**
```text
AWS Elastic Beanstalk (รายละเอียดขึ้นอยู่กับบริการ: ลูกค้ายังต้องเลือกเวอร์ชันที่รองรับ ตั้งค่าการอัปเดต และย้าย platform branch เมื่อจำเป็น)
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:653](../../../content/isc2-cc-2026/reading/domain-4.md#L653)

**Before:**
```text
PaaS ผู้ให้บริการดูแล OS ให้ ลูกค้าดูแลเฉพาะโค้ดและข้อมูล
```

**After — actual implemented wording:**
```text
PaaS โดยทั่วไปผู้ให้บริการดูแล OS/แพลตฟอร์ม ลูกค้าดูแลโค้ด ข้อมูล และการตั้งค่าที่ตนควบคุม โดยมีรายละเอียดตามบริการ
```

### D34-15 — Objective 3.1

**Status:** Fixed. **Academic and bilingual rationale:** Differentiate a directory service implementation from the LDAP access protocol, retaining both useful examples and correct English expansion.

**Repeated locations checked:** Directory Services item, IAM tool categories, review and scenarios; no second LDAP-as-product occurrence.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [RFC 4511 §1](https://www.rfc-editor.org/rfc/rfc4511.html#section-1)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-3.md:139](../../../content/isc2-cc-2026/reading/domain-3.md#L139)

**Before:**
```text
   - ตัวอย่าง: Microsoft Active Directory (AD), Lightweight Directory Access Protocol (LDAP)
```

**After — actual implemented wording:**
```text
   - ตัวอย่างบริการไดเรกทอรี: Microsoft Active Directory Domain Services หรือไดเรกทอรีที่ให้บริการ LDAP โดย LDAP (Lightweight Directory Access Protocol) เป็นโพรโทคอลสำหรับเข้าถึงบริการไดเรกทอรี ไม่ใช่ชื่อผลิตภัณฑ์เดียวกับ AD
```

### D34-Q1 — Objective 3.1

**Status:** Fixed. **Academic and bilingual rationale:** Keep six provisioning activities as examples; role/permission definition is the prerequisite when not yet defined, not every scenario’s universal first answer.

**Repeated locations checked:** Role note, provisioning heading/introduction/metadata, exam tip, both onboarding scenarios and mobile JML description. Scenario answer preserved with explicit missing-role premise.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [NIST SP800-53 Rev5 control derivative](https://csrc.nist.gov/CSRC/media/Projects/risk-management/800-53%20Downloads/800-53r5/SP_800-53_v5_1-derived-OSCAL.pdf)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-3.md:37](../../../content/isc2-cc-2026/reading/domain-3.md#L37)

**Before:**
```text
สิ่งแรกที่ต้องทำเสมอคือ
```

**After — actual implemented wording:**
```text
หากยังไม่ทราบบทบาทและสิทธิ์ที่งานต้องใช้ ควร
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:58](../../../content/isc2-cc-2026/reading/domain-3.md#L58)

**Before:**
```text
3.1.3 Identity Provisioning: วงจร 6 ขั้นตอนในการจัดสรรสิทธิ์
```

**After — actual implemented wording:**
```text
3.1.3 Identity Provisioning: ตัวอย่างกิจกรรม 6 ส่วนในการจัดสรรสิทธิ์
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:64](../../../content/isc2-cc-2026/reading/domain-3.md#L64)

**Before:**
```text
กระบวนการ Provisioning มี 6 ขั้นตอนตามลำดับมาตรฐาน:
```

**After — actual implemented wording:**
```text
กิจกรรม Provisioning ต่อไปนี้เป็นตัวอย่าง ไม่ใช่ลำดับมาตรฐานตายตัว ก่อนให้สิทธิ์ต้องทราบหน้าที่งาน ความจำเป็น และได้รับการอนุมัติตามนโยบาย:
```

Current source: [content/isc2-cc-2026/reading/domain-3.js:27](../../../content/isc2-cc-2026/reading/domain-3.js#L27)

**Before:**
```text
Identity Provisioning: 6-Step Lifecycle
```

**After — actual implemented wording:**
```text
Identity Provisioning: 6 Example Activities
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:445](../../../content/isc2-cc-2026/reading/domain-3.md#L445)

**Before:**
```text
**"สิ่งแรกที่ต้องทำก่อนให้สิทธิ์เข้าถึง (Grant Access)"**
```

**After — actual implemented wording:**
```text
**"ยังไม่ได้กำหนดบทบาทและสิทธิ์ที่งานต้องใช้ ก่อนให้สิทธิ์เข้าถึง (Grant Access) ควรทำอะไร"**
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:481](../../../content/isc2-cc-2026/reading/domain-3.md#L481)

**Before:**
```text
องค์กรกำลังเริ่มรับพนักงานใหม่จำนวนมากในสายงานพัฒนาซอฟต์แวร์
```

**After — actual implemented wording:**
```text
องค์กรกำลังเริ่มรับพนักงานใหม่จำนวนมากในสายงานพัฒนาซอฟต์แวร์ โดยยังไม่ได้กำหนดบทบาทและสิทธิ์ที่แต่ละงานต้องใช้
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:484](../../../content/isc2-cc-2026/reading/domain-3.md#L484)

**Before:**
```text
ให้ชัดเจนเป็นอันดับแรก เพื่อให้ทราบ
```

**After — actual implemented wording:**
```text
ให้ชัดเจนก่อนจัดสรรสิทธิ์ในกรณีที่ยังไม่กำหนดไว้ เพื่อให้ทราบ
```

Current source: [content/isc2-cc-2026/reading/domain-3-scenarios.js:23](../../../content/isc2-cc-2026/reading/domain-3-scenarios.js#L23)

**Before:**
```text
องค์กรกำลังเริ่มรับพนักงานใหม่จำนวนมากในสายงานพัฒนาซอฟต์แวร์
```

**After — actual implemented wording:**
```text
องค์กรกำลังเริ่มรับพนักงานใหม่จำนวนมากในสายงานพัฒนาซอฟต์แวร์ โดยยังไม่ได้กำหนดบทบาทและสิทธิ์ที่แต่ละงานต้องใช้
```

Current source: [content/isc2-cc-2026/reading/domain-3-scenarios.js:26](../../../content/isc2-cc-2026/reading/domain-3-scenarios.js#L26)

**Before:**
```text
ให้ชัดเจนเป็นอันดับแรก เพื่อให้ทราบ
```

**After — actual implemented wording:**
```text
ให้ชัดเจนก่อนจัดสรรสิทธิ์ในกรณีที่ยังไม่กำหนดไว้ เพื่อให้ทราบ
```

Current source: [js/core/diagram-generator.js:1947](../../../js/core/diagram-generator.js#L1947)

**Before:**
```text
กำหนดบทบาทและหน้าที่ให้ชัดเจนก่อนให้สิทธิ์ (Define Roles first)
```

**After — actual implemented wording:**
```text
หากยังไม่กำหนดบทบาทและสิทธิ์ที่จำเป็น ให้กำหนดและอนุมัติก่อนจัดสรรสิทธิ์ (Define approved access needs)
```

### D34-Q2 — Objective 3.1

**Status:** Fixed. **Academic and bilingual rationale:** Distinguish administrative disabling from failed-sign-in lockout. Retain useful caution against automatic deletion, but scope account/log retention to policy and system dependencies.

**Repeated locations checked:** Leaver list/callout, disable/delete comparison, both scenario forms and mobile JML card. Scenario explicitly stipulates retention policy; answer unchanged in meaning.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [Microsoft AD account management](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage-user-accounts-in-windows-server); [NIST AC-2](https://csrc.nist.gov/CSRC/media/Projects/risk-management/800-53%20Downloads/800-53r5/SP_800-53_v5_1-derived-OSCAL.pdf)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-3.md:107](../../../content/isc2-cc-2026/reading/domain-3.md#L107)

**Before:**
```text
ระงับการใช้งานบัญชี (Lock Account)
```

**After — actual implemented wording:**
```text
ปิดการใช้งานบัญชีโดยผู้ดูแล แตกต่างจาก Account Lockout ที่มักเกิดจากการลงชื่อเข้าใช้ผิดซ้ำ
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:117](../../../content/isc2-cc-2026/reading/domain-3.md#L117)

**Before:**
```text
ทันที เพื่อเก็บรักษาประวัติการใช้งาน บันทึกการตรวจสอบย้อนหลัง (Audit Trail / Logs) และป้องกันปัญหาการสูญหายของความเป็นเจ้าของไฟล์ในระบบ
```

**After — actual implemented wording:**
```text
ทันที เพื่อพิจารณานโยบายการเก็บรักษาบัญชี หลักฐานตรวจสอบ (Audit Trail / Logs) และความสัมพันธ์ของระบบ เช่น ความเป็นเจ้าของไฟล์ การเก็บหรือลบต้องทำตามข้อกำหนดที่เกี่ยวข้อง; การ Disable ไม่ได้ยืนยันว่าทุก Log ถูกเก็บไว้ และการ Delete ไม่ได้ทำให้ Log ทุกระบบสูญหายเสมอไป
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:433](../../../content/isc2-cc-2026/reading/domain-3.md#L433)

**Before:**
```text
ล็อกบัญชีไม่ให้ล็อกอินได้ แต่ยังคงเก็บข้อมูล ประวัติการใช้งาน และ Audit Logs ไว้เพื่อการตรวจสอบย้อนหลัง
```

**After — actual implemented wording:**
```text
ปิดการใช้งานบัญชีโดยผู้ดูแล (Administrative Disable) แตกต่างจาก Lockout; การเก็บบัญชีและ Audit Logs ต้องเป็นไปตามนโยบายและความสัมพันธ์ของระบบ
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:437](../../../content/isc2-cc-2026/reading/domain-3.md#L437)

**Before:**
```text
การทำลายข้อมูลบัญชีทิ้งถาวร ซึ่งมีความเสี่ยงทำให้ประวัติการตรวจสอบย้อนหลังสูญหายและกระทบต่อกรรมสิทธิ์ของไฟล์
```

**After — actual implemented wording:**
```text
การลบบัญชีถาวร ต้องพิจารณานโยบายการเก็บรักษา หลักฐาน และความเป็นเจ้าของไฟล์ ผลต่อ Audit Logs ขึ้นอยู่กับระบบ ไม่ใช่ว่าการลบบัญชีทำลาย Log เสมอไป
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:571](../../../content/isc2-cc-2026/reading/domain-3.md#L571)

**Before:**
```text
พนักงานฝ่ายขายได้ยื่นใบลาออก
```

**After — actual implemented wording:**
```text
ตามนโยบายองค์กรต้องเก็บบัญชีที่ปิดใช้งานเพื่อการตรวจสอบและการโอนความเป็นเจ้าของไฟล์ พนักงานฝ่ายขายได้ยื่นใบลาออก
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:574](../../../content/isc2-cc-2026/reading/domain-3.md#L574)

**Before:**
```text
ในทางปฏิบัติที่ดีด้านความปลอดภัย (Best Practice)
```

**After — actual implemented wording:**
```text
ตามนโยบายการเก็บรักษาขององค์กรในสถานการณ์นี้
```

Current source: [content/isc2-cc-2026/reading/domain-3-scenarios.js:95](../../../content/isc2-cc-2026/reading/domain-3-scenarios.js#L95)

**Before:**
```text
พนักงานฝ่ายขายได้ยื่นใบลาออก
```

**After — actual implemented wording:**
```text
ตามนโยบายองค์กรต้องเก็บบัญชีที่ปิดใช้งานเพื่อการตรวจสอบและการโอนความเป็นเจ้าของไฟล์ พนักงานฝ่ายขายได้ยื่นใบลาออก
```

Current source: [content/isc2-cc-2026/reading/domain-3-scenarios.js:98](../../../content/isc2-cc-2026/reading/domain-3-scenarios.js#L98)

**Before:**
```text
ในทางปฏิบัติที่ดีด้านความปลอดภัย (Best Practice)
```

**After — actual implemented wording:**
```text
ตามนโยบายการเก็บรักษาขององค์กรในสถานการณ์นี้
```

Current source: [js/core/diagram-generator.js:1973](../../../js/core/diagram-generator.js#L1973)

**Before:**
```text
เพิกถอนสิทธิ์ทันทีโดยใช้วิธี Disable Account (ไม่ลบถาวรทันที) เพื่อรักษาประวัติการตรวจสอบย้อนหลัง (Audit Trail)
```

**After — actual implemented wording:**
```text
เพิกถอนการเข้าถึงตามเวลาที่กำหนด เช่น Disable Account ส่วนการเก็บหรือลบบัญชีและ Audit Trail ให้ทำตามนโยบาย ข้อกำหนด และความสัมพันธ์ของระบบ ไม่ใช่ว่า Disable รับประกันการเก็บ Log ทุกระบบ
```

### D34-Q12 — Objective 4.2

**Status:** Fixed. **Academic and bilingual rationale:** Use policy-approved service ports rather than a universal 80/443-only rule. Keep five useful control families as examples rather than mandatory concentric containment.

**Repeated locations checked:** DMZ SVG/caption, mail/DNS labels, defense heading and review table. No SVG geometry, ports, services or scenario key removed.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [NIST defense-in-depth glossary](https://csrc.nist.gov/glossary/term/defense_in_depth)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [js/core/diagram-generator.js:2426](../../../js/core/diagram-generator.js#L2426)

**Before:**
```text
>Port 80/443</text>
```

**After — actual implemented wording:**
```text
>Policy Ports</text>
```

Current source: [js/core/diagram-generator.js:2519](../../../js/core/diagram-generator.js#L2519)

**Before:**
```text
Defense in Depth (Layered Defense): 5 Concentric Security Tiers
```

**After — actual implemented wording:**
```text
Defense in Depth: Five Example Control Groups
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:387](../../../content/isc2-cc-2026/reading/domain-4.md#L387)

**Before:**
```text
Concentric Rings of Defense
```

**After — actual implemented wording:**
```text
ตัวอย่างกลุ่มมาตรการที่ทำงานร่วมกัน (Complementary Control Groups) ไม่ใช่จำนวนชั้นหรือเส้นทางตายตัว
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:731](../../../content/isc2-cc-2026/reading/domain-4.md#L731)

**Before:**
```text
"No single point of failure", "Concentric"
```

**After — actual implemented wording:**
```text
"Complementary controls", "Example layers"
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:731](../../../content/isc2-cc-2026/reading/domain-4.md#L731)

**Before:**
```text
วางมาตรการซ้อนกันหลายชั้นเพื่อให้มีระบบสำรองป้องกันเสมอ
```

**After — actual implemented wording:**
```text
ใช้หลายมาตรการเสริมกันเพื่อลดผลกระทบเมื่อมาตรการหนึ่งล้มเหลว ไม่รับประกันความเป็นอิสระของทุกชั้น
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:347](../../../content/isc2-cc-2026/reading/domain-4.md#L347)

**Before:**
```text
<div class="reading-semantic-diagram" data-diagram="dmzFirewallArchitecture"></div>
```

**After — actual implemented wording:**
```text
ตัวอย่างกฎ External Firewall: อนุญาต HTTPS443 ไปยังเว็บเซิร์ฟเวอร์ และเปิดบริการสาธารณะอื่น เช่น Mail/DNS เฉพาะพอร์ตและปลายทางที่นโยบายอนุมัติ ป้าย Policy Ports ในภาพไม่ใช่การกำหนดให้ทุก DMZ เปิดพอร์ตเหมือนกัน

<div class="reading-semantic-diagram" data-diagram="dmzFirewallArchitecture"></div>
```

### D34-Q14 — Objective 4.3

**Status:** Fixed. **Academic and bilingual rationale:** Use NIST public ownership and dedicated private-cloud definitions without guaranteed superiority. Distinguish NIST hybrid infrastructure from broader vendor on-premises usage and retain hybrid/multicloud coexistence.

**Repeated locations checked:** Deployment prose, hybrid explanation/table/review/exam tip and both hybrid scenario forms. Scenario now explicitly uses a private cloud; Hybrid Cloud answer preserved.

**Original learning-note comparison:** See unchanged Phase 1A comparison for this ID.

**Authoritative reference(s):** [NIST SP800-145 §2, Deployment Models, printed p.3](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf)

**Verification:** focused test with this finding ID passes; current source, repeated representations and parsed output checked. Thai and retained English terms convey the same bounded meaning.

Current source: [content/isc2-cc-2026/reading/domain-4.md:480](../../../content/isc2-cc-2026/reading/domain-4.md#L480)

**Before:**
```text
เป็นเจ้าของและบริหารจัดการโดยผู้ให้บริการคลาวด์เชิงพาณิชย์ (เช่น AWS, Azure, Google Cloud)
```

**After — actual implemented wording:**
```text
ตาม NIST อาจเป็นขององค์กรธุรกิจ การศึกษา หรือรัฐบาล หรือหลายฝ่ายร่วมกัน ตัวอย่างผู้ให้บริการเชิงพาณิชย์ ได้แก่ AWS, Azure, Google Cloud
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:484](../../../content/isc2-cc-2026/reading/domain-4.md#L484)

**Before:**
```text
ให้การควบคุม ความเป็นส่วนตัว และความมั่นคงปลอดภัยสูงสุด
```

**After — actual implemented wording:**
```text
ให้การควบคุมเฉพาะทางและสภาพแวดล้อมเฉพาะองค์กร แต่ไม่รับประกันความปลอดภัยสูงกว่าทุกทางเลือก
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:486](../../../content/isc2-cc-2026/reading/domain-4.md#L486)

**Before:**
```text
การทำงานร่วมกันอย่างแนบแน่นระหว่างโครงสร้างพื้นฐานอย่างน้อยสองรูปแบบที่ต่างกัน (โดยทั่วไปคือ Private Cloud หรือ On-Premises ผสมกับ Public Cloud)
```

**After — actual implemented wording:**
```text
ตาม NIST เป็นการเชื่อมโครงสร้างพื้นฐานคลาวด์ต่างกันตั้งแต่สองแห่ง (Private, Community หรือ Public) ที่ยังคงเป็นเอกเทศแต่เชื่อมให้ย้ายข้อมูล/แอปได้ เช่น Private Cloud กับ Public Cloud; ในการใช้คำทั่วไปของผู้ให้บริการอาจรวมระบบ on-premises แบบเดิมด้วย แต่ระบบ on-premises ไม่ได้เป็น Private Cloud โดยอัตโนมัติ
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:496](../../../content/isc2-cc-2026/reading/domain-4.md#L496)

**Before:**
```text
ดาต้าเซ็นเตอร์ของตนเอง (Private)
```

**After — actual implemented wording:**
```text
Private Cloud ในดาต้าเซ็นเตอร์ของตนเอง
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:681](../../../content/isc2-cc-2026/reading/domain-4.md#L681)

**Before:**
```text
Private Cloud / On-Premises และ Public Cloud
```

**After — actual implemented wording:**
```text
Private Cloud และ Public Cloud ตามตัวอย่างนี้; การใช้คำแบบผู้ให้บริการอาจรวม on-premises แบบเดิม แต่ต้องระบุบริบท
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:721](../../../content/isc2-cc-2026/reading/domain-4.md#L721)

**Before:**
```text
**"สถาปัตยกรรมที่ผสมผสานระหว่างศูนย์ข้อมูลส่วนตัว On-Premises เข้ากับ Public Cloud"**
```

**After — actual implemented wording:**
```text
**"สถาปัตยกรรมที่เชื่อม Private Cloud เข้ากับ Public Cloud"**
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:735](../../../content/isc2-cc-2026/reading/domain-4.md#L735)

**Before:**
```text
ผสมผสานดาต้าเซ็นเตอร์ส่วนตัวเข้ากับคลาวด์สาธารณะ
```

**After — actual implemented wording:**
```text
เชื่อมคลาวด์ต่างชนิดกัน เช่น Private Cloud ในดาต้าเซ็นเตอร์ส่วนตัวกับ Public Cloud; Hybrid และ Multi-Cloud เกิดร่วมกันได้
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:827](../../../content/isc2-cc-2026/reading/domain-4.md#L827)

**Before:**
```text
ไว้ในศูนย์ข้อมูลส่วนตัว (Private Data Center) ของตนเอง
```

**After — actual implemented wording:**
```text
ไว้บน Private Cloud ในศูนย์ข้อมูลของตนเอง
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:830](../../../content/isc2-cc-2026/reading/domain-4.md#L830)

**Before:**
```text
Private Cloud (หรือ On-premises Data Center)
```

**After — actual implemented wording:**
```text
Private Cloud ตามตัวอย่างนี้ (คำแบบผู้ให้บริการอาจรวม on-premises แบบเดิมด้วย แต่ไม่ใช่ทุกระบบ on-premises เป็น Private Cloud)
```

Current source: [content/isc2-cc-2026/reading/domain-4-scenarios.js:87](../../../content/isc2-cc-2026/reading/domain-4-scenarios.js#L87)

**Before:**
```text
ไว้ในศูนย์ข้อมูลส่วนตัว (Private Data Center) ของตนเอง
```

**After — actual implemented wording:**
```text
ไว้บน Private Cloud ในศูนย์ข้อมูลของตนเอง
```

Current source: [content/isc2-cc-2026/reading/domain-4-scenarios.js:90](../../../content/isc2-cc-2026/reading/domain-4-scenarios.js#L90)

**Before:**
```text
Private Cloud (หรือ On-premises Data Center)
```

**After — actual implemented wording:**
```text
Private Cloud ตามตัวอย่างนี้ (คำแบบผู้ให้บริการอาจรวม on-premises แบบเดิมด้วย แต่ไม่ใช่ทุกระบบ on-premises เป็น Private Cloud)
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:503](../../../content/isc2-cc-2026/reading/domain-4.md#L503)

**Before:**
```text
**Private Cloud / On-Prem**
```

**After — actual implemented wording:**
```text
**Private Cloud (อาจอยู่ On-Premises)**
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:506](../../../content/isc2-cc-2026/reading/domain-4.md#L506)

**Before:**
```text
*"On-premises integrated with public cloud", "Sensitive data hosted locally"*
```

**After — actual implemented wording:**
```text
*"Private cloud integrated with public cloud"; "On-premises integrated with public cloud" เป็นคำใช้แบบกว้างของผู้ให้บริการ ต้องดูบริบท ไม่ใช่ทุกระบบในองค์กรเป็น Private Cloud*
```

## Cross-domain consistency verification

AAA concepts agree between D1 and D3, including two D3 AuthN mnemonics identified by fresh review. MFA factor types remain separate from context; D3 ABAC legitimately uses environment/device context and now explicitly includes action. Risk, threat and vulnerability retain Batch A’s direction and insider scope; risk scoring now has model assumptions. Governance/management and control category/function distinctions were reviewed without broadening into unrelated edits.

BC/DR and DRP remain distinct. RTO is a target with a business-resumption allowance inside MTD, not a guarantee; RPO examples retain 16:30→17:00 data loss and 17:00→18:00 recovery target arithmetic. MTTR endpoints are explicit, while KPI/KRI continue to be metrics. Cloud customer decisions/settings and provider service operation agree in prose, all matrix rows, mobile alternatives and scenarios. AWS-specific controls, subnet-mask broadcast and NIST/vendor hybrid terminology have explicit scope.

All 23 Batch A regressions pass before and after Batch B. Batch A corrections remain semantically intact; shared content files were intentionally refined, while earlier audit reports/evidence and Batch A-only files remain byte-identical. Five acceptable simplifications and two evidence-dependent Phase 1A IDs were not implemented. Qualified consent/tax-retention components bundled into D1-N05 also remain outside the exact 29-ID target set.

## Tests and Chrome QA

Focused Batch B checks reproduced **29 target failures / 4 structural passes** before implementation and pass **33/33** after it. Batch A passes **23/23** before and after. Existing Reading Notes suites pass **103/103**: persistence20, foundation9, D1 10, D2 9, D3 10, D4 10 and DOM integrity35. Total final: **159 passing checks, zero failures**. All final exit codes are recorded in `test-results-final.json`; TAP/detail logs are retained.

An intermediate DOM check failed because the rewritten financial explanation had omitted the original dollar notation. The content was corrected to retain the currency example; the original test was not weakened or edited. No existing test file was changed by Batch B. No pre-existing failing test was identified in these relevant suites. `git diff --check` passes.

Real isolated Chrome produced **120 before screenshots**, **256 after screenshots**, and **8 final PaaS wording screenshots**, both Light and Dark, at **1920×1080, 1366×768, 390×844 and 320×568**: **384 screenshots total**. The before and after DOM manifests match exactly for domain identity, heading anchors, 24/29/17/24 subsections, 22 tables, 24 diagrams and all 44 scenarios. No missing requested anchor, raw scenario marker, object artifact, replacement character or console/runtime error was detected. The eight additional captures verify the final Thai noun-form refinement in the PaaS paragraph; `final-paas-browser.json` records that check.

The SVG boundary scan found no new text escaping its SVG bounds. The existing cloud CSP legend exceeds the SVG boundary in both baseline and final captures; this is preserved evidence of a presentation concern, not silently fixed. Parent inspected representative screenshots for 320px MFA wrapping, dark desktop recovery timeline, 1920px cloud matrix and dark mobile ABAC; browser automation and sampled inspection do not constitute human visual acceptance. Manifests: `before-browser.json`, `after-browser.json`; driver: `browser.mjs`.

## Exact Batch B changed-file manifest

- `content/isc2-cc-2026/reading/domain-1.md` — educational content/data only.
- `content/isc2-cc-2026/reading/domain-2-scenarios.js` — educational content/data only.
- `content/isc2-cc-2026/reading/domain-2.md` — educational content/data only.
- `content/isc2-cc-2026/reading/domain-3-scenarios.js` — educational content/data only.
- `content/isc2-cc-2026/reading/domain-3.js` — educational content/data only.
- `content/isc2-cc-2026/reading/domain-3.md` — educational content/data only.
- `content/isc2-cc-2026/reading/domain-4-scenarios.js` — educational content/data only.
- `content/isc2-cc-2026/reading/domain-4.md` — educational content/data only.
- `js/core/content-components.js` — educational content/data only.
- `js/core/diagram-generator.js` — educational content/data only.

New report: `docs/plans/isc2-cc-2026/reading-notes-phase1b-batch-b-academic-clarity.md`. New tests, plan/checklist, snapshots, patch, logs, browser captures and manifests are confined to `artifacts/qa/reading-notes-phase1b-batch-b/`; every QA artifact is enumerated by SHA-256 in `evidence-manifest.json`.

Preservation comparison checked **20618 baseline files**. Exactly these ten content files changed relative to the Batch B starting snapshot; **zero unrelated baseline files changed**. All eight original notes, Learning Slides, banks, Quiz/Exam, vocabulary, Domain 5, CSS, parser/renderer mechanics, progress/routing implementation, prior QA artifacts and prior reports were preserved. Initial/final Git status and the Batch B-only patch are saved. HEAD and index remain unchanged. No reset, revert, deletion, clean, stage, commit or push was performed.

## Blockers, remaining risks and Educational Presentation deferrals

**Blocked Batch B findings: None.** All 29 target ambiguities received bounded content corrections; no unsupported replacement or correction requiring forbidden implementation was forced through. Residual risks are the unchanged evidence-dependent findings (including AI curriculum coverage/course provenance and inter-canon precedence), qualified components outside the 29 targets, and normal dependence on service/framework/jurisdiction context. The report does not certify the whole textbook error-free.

Deferred to Educational Presentation, without implementation in this task:

- Spacing between headings and content, separation of bullet groups, internal subheading hierarchy and readability of long sections.
- Confusing icons and small/low-contrast diagram labels; the existing clipped cloud legend.
- Visual-semantic review of D1 defense layer containment/common protected asset and timeline/cyclic arrows. Wording now states example scope, function overlap and continuous communication, but no connector or diagram-layout redesign was performed.
- D4 five-group presentation is now labeled as example control groups; any later concentric-containment redesign requires a separate presentation task.

Fresh read-only review checked all 29 groups and source transformations, found the D3 AuthN repeats and WAF exposure phrasing, and those were corrected. It found no other material academic/scope issue. Parent verified the final source, tests, browser manifests, representative pixels and preservation evidence. Human academic and visual acceptance remains **pending**.

**Phase 1B Batch B Implementation Complete — Pending Human Academic & Visual Acceptance**

