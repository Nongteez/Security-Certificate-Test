# Phase 1B / Batch A — Verified Academic Corrections

Status: **Phase 1B Batch A Implementation Complete — Pending Human Academic & Visual Acceptance**

Reviewed **19** confirmed findings; **19 Fixed**, **0 Already Correct**, **0 Blocked**. Domains 1–4 are affected. Human academic and visual acceptance remains pending. Batch B has not begun.

## Scope and source review

The Phase 1A verification report, independent findings register, audit, remediation roadmap and `docs/plans/task.md` were read before implementation. All eight original Domain 1–4 learning-note files were inspected as references. Exact source-comparison evidence and authoritative references from Phase 1A are carried forward below; originals are not treated as automatically correct. Current occurrences were located before editing and compared with the verified proposals. The correction checklist records 44 individual replacement rules, including repeat corrections and H1 title data. No original notes were edited.

Source aliases in carried-forward comparison excerpts: D1–D4 = `content/isc2-cc-2026/reading/domain-N.md`; O1–O4 = `ISC2 Update 2026/Domain N/Domain N.md`; S1–S4 = `ISC2 Update 2026/Domain N/DN sum.md`; M3/M4 = the corresponding Reading Notes `domain-N.js` metadata modules; G = `js/core/diagram-generator.js`. Each N is the stated domain number.

The initial working tree contained only the untracked Phase 1A report. Baseline HEAD: `27c72ba5e2c70fe34311b0172597b3a8134e4179`. A 1,020-file SHA-256 snapshot captured protected modules, notes, tests and documentation before changes. No affected-file concurrent edits were detected. The untracked Phase 1A report and all unrelated files in that snapshot remain byte-identical.

Ruling: directly related educational strings in `diagram-generator.js`, `content-components.js` and the `READING_DOMAINS` title data are content assets authorized by the request. Only those literals changed; no parser, Markdown rendering mechanics, SVG geometry, event handler, progress logic, stylesheet or navigation behavior changed. One existing Domain 3 assertion was updated to expect the corrected full title.

## Finding status

| Finding | Domain / objective | Status | Verification |
|---|---|---|---|
| D1-F03 | 1 / 1.1–1.2 | Fixed | Current source + parsed output + repeat review; focused test `D1-F03` passes |
| D1-F04 | 1 / 1.1–1.2 | Fixed | Current source + parsed output + repeat review; focused test `D1-F04` passes |
| D1-F05 | 1 / 1.3 | Fixed | Current source + parsed output + repeat review; focused test `D1-F05` passes |
| D1-N05 | 1 / 1.1 privacy | Fixed | Current source + parsed output + repeat review; focused test `D1-N05` passes |
| D1-N10 | 1 / 1.4 | Fixed | Current source + parsed output + repeat review; focused test `D1-N10` passes |
| D2-02 | 2 / 2.2 | Fixed | Current source + parsed output + repeat review; focused test `D2-02` passes |
| D2-04 | 2 / 2.4 | Fixed | Current source + parsed output + repeat review; focused test `D2-04` passes |
| D2-06 | 2 / 2.2 | Fixed | Current source + parsed output + repeat review; focused test `D2-06` passes |
| D2-08 | 2 / 2.4 | Fixed | Current source + parsed output + repeat review; focused test `D2-08` passes |
| D34-01 | 3 / 3.1 frameworks | Fixed | Current source + parsed output + repeat review; focused test `D34-01` passes |
| D34-03 | 4 / 4.1 TCP/IP | Fixed | Current source + parsed output + repeat review; focused test `D34-03` passes |
| D34-04 | 4 / 4.1 IPv6 | Fixed | Current source + parsed output + repeat review; focused test `D34-04` passes |
| D34-07 | 4 / 4.3 cloud networking | Fixed | Current source + parsed output + repeat review; focused test `D34-07` passes |
| D34-08 | 3–4 / domain titles, 3.1–4.3 | Fixed | Current source + parsed output + repeat review; focused test `D34-08` passes |
| D34-10 | 4 / 4.1 IPv4 | Fixed | Current source + parsed output + repeat review; focused test `D34-10` passes |
| D34-11 | 3 / 3.2 MAC | Fixed | Current source + parsed output + repeat review; focused test `D34-11` passes |
| D34-12 | 4 / 4.1 wireless | Fixed | Current source + parsed output + repeat review; focused test `D34-12` passes |
| D34-13 | 4 / 4.3 service models | Fixed | Current source + parsed output + repeat review; focused test `D34-13` passes |
| D34-16 | 4 / 4.1 OSI | Fixed | Current source + parsed output + repeat review; focused test `D34-16` passes |

## Correction records

The following before/after strings are the exact implemented fragments, not new proposed remediation. Source links point to current one-based lines. Baseline line numbers are in the machine-readable checklist. Each record inherits the Phase 1A source comparison; its implementation is limited to the confirmed subclaim. Confidence: **High** for each confirmed correction; excluded qualified subconcerns retain their earlier uncertainty.

### D1-F03 — 1 / 1.1–1.2

**Status:** Fixed. **Confidence:** High. **Academic justification:** Threat sources can be internal or external; insider examples already in the main table must agree with the distinction and review.

**Repeated locations checked:** Main definition/table, threat-chain illustration, warning, review distinction, D1 scenarios; no external-only claim remains in these occurrences.

**Original-note traceability (Phase 1A, historical comparison):** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/Domain 1.md:19`: `สิ่งหรือเหตุการณ์ที่อาจก่อความเสียหาย`; line 20 includes `อาชญากรไซเบอร์ ผู้ใช้ภายใน`. `ISC2 Update 2026/Domain 1/D1 sum.md:512`: `> What could cause harm?`; line 1656: `> **Threat = สิ่งที่ทำอันตราย**`. Neither original imposes the external-only restriction. Attribution: textbook generation introduced the restriction, against both original concepts and its own insider example.

**Authoritative basis:** [NIST SP 800-30r1, Appendix D Table D-2, printed p. D-2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf#page=66); [NIST threat glossary](https://csrc.nist.gov/glossary/term/threat)

Current source: [content/isc2-cc-2026/reading/domain-1.md:37](../../../content/isc2-cc-2026/reading/domain-1.md#L37)

**Before:**
```text
Threat คือสิ่งภายนอกหรืออันตรายที่เข้ามา (เช่น Hacker, Flood)
```

**After (actual implemented Thai/English wording):**
```text
Threat คือบุคคล สิ่ง หรือเหตุการณ์ที่อาจก่อความเสียหาย ทั้งจากภายในและภายนอกองค์กร (เช่น พนักงานประสงค์ร้าย, Hacker, Flood)
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:1040](../../../content/isc2-cc-2026/reading/domain-1.md#L1040)

**Before:**
```text
สิ่งภายนอก/เหตุการณ์ที่อาจก่ออันตราย (Hacker, Malware, Flood)
```

**After (actual implemented Thai/English wording):**
```text
บุคคล สิ่ง หรือเหตุการณ์ภายในหรือภายนอกที่อาจก่ออันตราย (Insider, Hacker, Malware, Flood)
```


### D1-F04 — 1 / 1.1–1.2

**Status:** Fixed. **Confidence:** High. **Academic justification:** A threat source exploits a vulnerability, not the threat itself. Thai agent/object reversal was incorrect.

**Repeated locations checked:** Definition table, warning, review, threat-chain diagram; other explanations already name the weakness correctly.

**Original-note traceability (Phase 1A, historical comparison):** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:523`: `> Weakness that could be exploited`. `ISC2 Update 2026/Domain 1/Domain 1.md:21`: `จุดอ่อนที่อาจถูกใช้ประโยชน์`; 26: `Asset มีคุณค่า → Threat อาจใช้ Vulnerability → เกิดเหตุการณ์ที่สร้าง Impact`. Both originals have the correct relationship. Attribution: textbook generation introduced this Thai passive-object error.

**Authoritative basis:** [NIST threat glossary, FIPS 200 definition](https://csrc.nist.gov/glossary/term/threat); [NIST SP 800-30r1 §2.3.1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf#page=17)

Current source: [content/isc2-cc-2026/reading/domain-1.md:22](../../../content/isc2-cc-2026/reading/domain-1.md#L22)

**Before:**
```text
จุดอ่อนหรือข้อบกพร่องในระบบ กระบวนการ หรือการควบคุม ที่เปิดโอกาสให้ Threat ถูกใช้ประโยชน์
```

**After (actual implemented Thai/English wording):**
```text
จุดอ่อนหรือข้อบกพร่องในระบบ กระบวนการ หรือมาตรการควบคุม ที่ผู้ก่อภัยคุกคามอาจใช้ประโยชน์ หรือเหตุการณ์คุกคามอาจกระตุ้นให้เกิดความเสียหาย
```


### D1-F05 — 1 / 1.3

**Status:** Fixed. **Confidence:** High. **Academic justification:** GDPR Article 3 uses establishment and specified targeting/monitoring criteria, not EU citizenship alone.

**Repeated locations checked:** GDPR card, privacy subsection, law reminder, privacyFlow and scenarios; citizenship-only criterion occurred in the card.

**Original-note traceability (Phase 1A, historical comparison):** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:841`: `เกี่ยวข้องกับ Personal Data / Privacy ภายใน Scope ที่กฎหมายกำหนด`; 853–855: `ไม่ใช่ทุกองค์กรต้องปฏิบัติตามทุก Regulation/Requirement` and `ต้องดู **Applicability**`. `ISC2 Update 2026/Domain 1/Domain 1.md:138` discusses handling personal information, without a GDPR citizenship rule. The exact citizenship claim is **Not covered in original learning notes** (both complete files checked). Attribution: introduced in textbook expansion, not inherited.

**Authoritative basis:** [EDPB Guidelines 3/2018, §1 and §2(a)](https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en_1.pdf#page=14)

Current source: [content/isc2-cc-2026/reading/domain-1.md:626](../../../content/isc2-cc-2026/reading/domain-1.md#L626)

**Before:**
```text
กฎหมายคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรป เน้นสิทธิของ Data Subject และข้อบังคับสำหรับ Controller/Processor ทั่วโลกที่มีการประมวลผลข้อมูลพลเมืองสหภาพยุโรป
```

**After (actual implemented Thai/English wording):**
```text
GDPR คุ้มครองข้อมูลส่วนบุคคลตามขอบเขตการใช้บังคับของกฎหมาย เช่น การประมวลผลในบริบทกิจกรรมของสถานประกอบการในสหภาพยุโรป หรือการเสนอสินค้า/บริการแก่บุคคลที่อยู่ในสหภาพยุโรปหรือเฝ้าติดตามพฤติกรรมของบุคคลที่เกิดขึ้นที่นั่นตามเงื่อนไข Article 3 การมีสัญชาติ EU เพียงอย่างเดียวไม่ใช่เกณฑ์ตัดสิน
```


### D1-N05 — 1 / 1.1 privacy

**Status:** Fixed. **Confidence:** High. **Academic justification:** Controllers may be natural persons; Collection and Storage are distinct lifecycle activities.

**Repeated locations checked:** Privacy lifecycle, controller card, desktop/mobile privacyFlow and review scenarios. Desktop diagram uses neutral role wording and needs no change. Consent/retention subconcerns are excluded.

**Original-note traceability (Phase 1A, historical comparison):** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:358`: `กำหนด Purpose และ Means ของการ Processing`; 362: `คนที่ตัดสินว่า **เก็บข้อมูลทำไม และจะจัดการอย่างไร**`; 439: `Employee tax records → เก็บตามระยะเวลาที่กฎหมายกำหนด` without seven years. `ISC2 Update 2026/Domain 1/Domain 1.md:138`: `ตั้งแต่การเก็บ ใช้ เปิดเผย เก็บรักษา ไปจนถึงการลบข้อมูล`. The current natural-person exclusion, numeric retention period and universal-sounding consent addition are not in either original. Attribution is textual current-only addition; causation unproven.

**Authoritative basis:** [EDPB final Guidelines 07/2020 §2.1.1, printed p.10](https://www.edpb.europa.eu/system/files/documents/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf#page=10)

Current source: [content/isc2-cc-2026/reading/domain-1.md:256](../../../content/isc2-cc-2026/reading/domain-1.md#L256)

**Before:**
```text
การจัดเก็บ (Collection)
```

**After (actual implemented Thai/English wording):**
```text
การเก็บรวบรวมข้อมูล (Collection)
```

Current source: [content/isc2-cc-2026/reading/domain-1.md:267](../../../content/isc2-cc-2026/reading/domain-1.md#L267)

**Before:**
```text
นิติบุคคลหรือองค์กรที่เป็นผู้ตัดสินใจว่า
```

**After (actual implemented Thai/English wording):**
```text
บุคคลธรรมดา นิติบุคคล หน่วยงาน หรือองค์กรที่กำหนดโดยลำพังหรือร่วมกับผู้อื่นว่า
```

Current source: [js/core/diagram-generator.js:533](../../../js/core/diagram-generator.js#L533)

**Before:**
```text
องค์กรที่มีอำนาจตัดสินใจว่า <em>เก็บข้อมูลไปทำไม และใช้อย่างไร</em>
```

**After (actual implemented Thai/English wording):**
```text
บุคคลธรรมดา นิติบุคคล หน่วยงาน หรือองค์กรที่กำหนดโดยลำพังหรือร่วมกับผู้อื่นว่า <em>เก็บข้อมูลไปทำไม และใช้อย่างไร</em>
```


### D1-N10 — 1 / 1.4

**Status:** Fixed. **Confidence:** High. **Academic justification:** The Thai mantrap label contained a spelling/meaning error. The four-category teaching model was not a confirmed error.

**Repeated locations checked:** Control-category component generated into D1 plus control-type section and review. Only the mantrap label changes.

**Original-note traceability (Phase 1A, historical comparison):** **Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1077–1079`: `มี 4 Categories ตามสไลด์:` and `Technical / Managerial / Operational / Physical`; line 1158 lists `Mantraps` without the Thai typo. `ISC2 Update 2026/Domain 1/Domain 1.md:204–206` uses Administrative/Managerial, Technical/Logical and Physical. Four categories are inherited from the sum while the fuller original already follows a three-category organization. The Thai typo is current-only. Mixed-source taxonomy does not establish an invented or incorrect model.

**Authoritative basis:** [ISC2 current outline, objective 1.4](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [current ISC2 webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [English outline PDF, printed p.5](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf#page=5)

Current source: [js/core/content-components.js:217](../../../js/core/content-components.js#L217)

**Before:**
```text
ประตูกลักกันคนเดินตาม (Mantraps)
```

**After (actual implemented Thai/English wording):**
```text
ประตูควบคุมการผ่านเข้าออกสองชั้น (Mantrap/Access Control Vestibule)
```


### D2-02 — 2 / 2.2

**Status:** Fixed. **Confidence:** High. **Academic justification:** MTD marks unacceptable impact; irreversible damage or organizational collapse is not inevitable.

**Repeated locations checked:** BIA, RTO/RPO subsection, recovery timeline, review and scenarios. The RTO inequality itself is outside this confirmed subclaim.

**Original-note traceability (Phase 1A, historical comparison):** **Original quote/context:** **Not covered in original learning notes** after both were read fully. Relevant original BIA context is `ISC2 Update 2026/Domain 2/Domain 2.md:310`: “โดยเน้นการระบุ **critical business functions and priorities** และนำผลไปกำหนด IT recovery priorities; ไม่มีสไลด์รายละเอียดขั้นตอนทำ BIA แยกต่างหากในเนื้อหาที่ส่งมา”. `D2 sum.md:258–285` covers RTO/RPO without MTD.

**Authoritative basis:** [NIST MTD glossary, SP 800-34r1 definition](https://csrc.nist.gov/glossary/term/maximum_tolerable_downtime)

Current source: [content/isc2-cc-2026/reading/domain-2.md:164](../../../content/isc2-cc-2026/reading/domain-2.md#L164)

**Before:**
```text
ก่อนจะเกิดความเสียหายที่ไม่อาจฟื้นคืนได้
```

**After (actual implemented Thai/English wording):**
```text
ก่อนเกิดผลกระทบเกินระดับที่องค์กรยอมรับได้
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:167](../../../content/isc2-cc-2026/reading/domain-2.md#L167)

**Before:**
```text
องค์กรจะล่มสลายก่อนที่ระบบ IT จะกู้คืนเสร็จสิ้น
```

**After (actual implemented Thai/English wording):**
```text
อาจเกิดผลกระทบเกินระดับที่องค์กรยอมรับได้ก่อนที่ระบบ IT จะกู้คืนเสร็จสิ้น โดยไม่ได้หมายความว่าองค์กรจะล่มสลายหรือเกิดความเสียหายที่ฟื้นคืนไม่ได้เสมอไป
```


### D2-04 — 2 / 2.4

**Status:** Fixed. **Confidence:** High. **Academic justification:** Metrics include calculated percentages, ratios and averages, including selected KPI/KRI; they are not restricted to raw values.

**Repeated locations checked:** Metric introduction, KPI/KRI, table, desktop/mobile measurement diagram, dashboard/scorecard/report review and scenarios. Added the relationship and example-architecture qualification without diagram redesign.

**Original-note traceability (Phase 1A, historical comparison):** **Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:461`: “**Metric = Measurable Value**”; `:473–475` includes percent patched, MTTD and MTTR; `:520`: “เป็น Metric ที่ให้ Early Indication ว่า Risk กำลังเพิ่มหรือลด”. `ISC2 Update 2026/Domain 2/Domain 2.md:442` defines measurable value, `:448–450` includes percentage/means, and `:474`: “**Key Risk Indicator (KRI)** คือ Metric”. Original mnemonic `:578–583` does not restrict metrics to raw counts.

**Authoritative basis:** [NIST SP 800-55v1 §2.4, printed pp.9–11](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf#page=17)

Current source: [content/isc2-cc-2026/reading/domain-2.md:443](../../../content/isc2-cc-2026/reading/domain-2.md#L443)

**Before:**
```text
"Raw measurable value", "Quantifiable data", "Measurement base" | ค่าดิบเชิงปริมาณที่ใช้เป็นฐานข้อมูลในการประเมินผล
```

**After (actual implemented Thai/English wording):**
```text
"Defined measurable value", "Count, percentage, ratio or average" | ค่าที่กำหนดและวัดอย่างสม่ำเสมอเพื่อประเมินการดำเนินงานหรือความเสี่ยง รวมถึง KPI และ KRI ที่เลือกใช้ตามวัตถุประสงค์
```

Current source: [content/isc2-cc-2026/reading/domain-2.md:435](../../../content/isc2-cc-2026/reading/domain-2.md#L435)

**Before:**
```text
<div class="reading-semantic-diagram" data-diagram="effectivenessHierarchy"></div>
```

**After (actual implemented Thai/English wording):**
```text
Metric อาจเป็นจำนวน ร้อยละ อัตราส่วน หรือค่าเฉลี่ย KPI และ KRI เป็น Metric ที่เลือกใช้ตามวัตถุประสงค์: KPI ติดตามผลงานเทียบเป้าหมาย ส่วน KRI เฝ้าระวังแนวโน้มความเสี่ยง Dashboard, scorecard และ report เป็นรูปแบบนำเสนอที่อาจใช้ร่วมกันได้ ภาพต่อไปนี้เป็นตัวอย่างการจัดระบบการวัดผล ไม่ใช่ลำดับขั้นที่ทุกองค์กรต้องใช้

<div class="reading-semantic-diagram" data-diagram="effectivenessHierarchy"></div>
```

Current source: [js/core/diagram-generator.js:1791](../../../js/core/diagram-generator.js#L1791)

**Before:**
```text
ค่าดิบที่วัดได้เชิงปริมาณ (Quantifiable Raw Value) ซึ่งเป็นรากฐานข้อมูลของการวัดผลทุกระดับ
```

**After (actual implemented Thai/English wording):**
```text
ค่าที่วัดได้: จำนวน ร้อยละ อัตราส่วน หรือค่าเฉลี่ย รวมถึง KPI และ KRI
```

Current source: [js/core/diagram-generator.js:1869](../../../js/core/diagram-generator.js#L1869)

**Before:**
```text
ค่าดิบที่วัดได้เชิงปริมาณ (Quantifiable Raw Value) ประเมินประสิทธิผลตามคุณสมบัติ Relevant, Measurable และ Consistent
```

**After (actual implemented Thai/English wording):**
```text
ค่าที่วัดได้: จำนวน ร้อยละ อัตราส่วน หรือค่าเฉลี่ย รวมถึง KPI และ KRI ที่เลือกใช้ตามวัตถุประสงค์ โดยควร Relevant, Measurable และ Consistent
```


### D2-06 — 2 / 2.2

**Status:** Fixed. **Confidence:** High. **Academic justification:** DR names recovery activities; DRP names the plan. The two diagram labels incorrectly called DR a plan.

**Repeated locations checked:** DR/DRP prose and table already distinguish them; corrected BC-vs-DR diagram in both desktop and mobile alternatives.

**Original-note traceability (Phase 1A, historical comparison):** **Original quote:** `ISC2 Update 2026/Domain 2/Domain 2.md:594`: “**DR vs DRP** | DR คือกระบวนการ/ความสามารถกู้คืน IT; DRP คือแผนกู้คืน”. `D2 sum.md:206–208` describes policies/tools/procedures to restore IT; `:289` separately names Disaster Recovery Plan. Neither original contains these diagram mistranslations.

**Authoritative basis:** [NIST DRP glossary, SP 800-34r1 definition](https://csrc.nist.gov/glossary/term/disaster_recovery_plan)

Current source: [js/core/diagram-generator.js:1542](../../../js/core/diagram-generator.js#L1542)

**Before:**
```text
DISASTER RECOVERY (DR) — แผนกู้คืนระบบเทคโนโลยีสารสนเทศ
```

**After (actual implemented Thai/English wording):**
```text
DISASTER RECOVERY (DR) — การกู้คืนระบบเทคโนโลยีสารสนเทศ
```

Current source: [js/core/diagram-generator.js:1577](../../../js/core/diagram-generator.js#L1577)

**Before:**
```text
แผนกู้คืนระบบ IT โครงสร้างพื้นฐาน และข้อมูล
```

**After (actual implemented Thai/English wording):**
```text
การกู้คืนระบบ IT โครงสร้างพื้นฐาน และข้อมูล
```


### D2-08 — 2 / 2.4

**Status:** Fixed. **Confidence:** High. **Academic justification:** Metric means a measure/indicator, whereas matrix denotes a different concept.

**Repeated locations checked:** Six Markdown occurrences and four exported scenario occurrences corrected. The genuine English Exam Keyword Trigger Matrix remains.

**Original-note traceability (Phase 1A, historical comparison):** **Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:461`: “**Metric = Measurable Value**”; `ISC2 Update 2026/Domain 2/Domain 2.md:442`: “**Security Metric** คือค่าที่วัดได้ (**measurable value**)”; `:509`: “การแสดงข้อมูลและ Metrics ด้าน Cybersecurity”. Mistaken Thai matrix wording: **Not covered in original learning notes**, after both complete files were inspected.

**Authoritative basis:** [NIST SP 800-55v1 §2.4](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf#page=17)

Current source: [content/isc2-cc-2026/reading/domain-2.md:199](../../../content/isc2-cc-2026/reading/domain-2.md#L199)

**Before:**
```text
เมทริกซ์
```

**After (actual implemented Thai/English wording):**
```text
ตัวชี้วัด
```

Current source: [content/isc2-cc-2026/reading/domain-2-scenarios.js:28](../../../content/isc2-cc-2026/reading/domain-2-scenarios.js#L28)

**Before:**
```text
เมทริกซ์
```

**After (actual implemented Thai/English wording):**
```text
ตัวชี้วัด
```


### D34-01 — 3 / 3.1 frameworks

**Status:** Fixed. **Confidence:** High. **Academic justification:** The CSF 2.0 Protect category is PR.AA; PR.AC belongs to CSF 1.1.

**Repeated locations checked:** Framework section and remaining D1–4 references searched for PR.AC; no other current Reading Notes occurrence.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [NIST CSF FAQ](https://www.nist.gov/cyberframework/faqs)

Current source: [content/isc2-cc-2026/reading/domain-3.md:129](../../../content/isc2-cc-2026/reading/domain-3.md#L129)

**Before:**
```text
หัวข้อการควบคุมการเข้าถึง (PR.AC)
```

**After (actual implemented Thai/English wording):**
```text
หมวด Identity Management, Authentication, and Access Control (PR.AA)
```


### D34-03 — 4 / 4.1 TCP/IP

**Status:** Fixed. **Confidence:** High. **Academic justification:** In this four-layer TCP/IP model, ARP is treated under Link, as in RFC 1122 §2.3.2.

**Repeated locations checked:** Mapping table, TCP/IP diagram, OSI list and review checked; wrong placement was in the table. Added the local-link purpose.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [RFC 1122 §2.3.2](https://www.rfc-editor.org/rfc/rfc1122.html#section-2.3.2)

Current source: [content/isc2-cc-2026/reading/domain-4.md:91](../../../content/isc2-cc-2026/reading/domain-4.md#L91)

**Before:**
```text
| Packet | IPv4, IPv6, ICMP, IPsec, ARP |
```

**After (actual implemented Thai/English wording):**
```text
| Packet | IPv4, IPv6, ICMP, IPsec |
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:92](../../../content/isc2-cc-2026/reading/domain-4.md#L92)

**Before:**
```text
| Frame / Bits | Ethernet, 802.11 Wi-Fi, MAC, สื่อทางกายภาพ |
```

**After (actual implemented Thai/English wording):**
```text
| Frame / Bits | Ethernet, 802.11 Wi-Fi, ARP, MAC, สื่อทางกายภาพ |

ในแบบจำลอง TCP/IP 4 ชั้นนี้ ARP อยู่ในชั้น Link / Network Access ทำหน้าที่หา Link-layer address ของปลายทางหรือ next hop บนลิงก์ IPv4 เดียวกัน
```


### D34-04 — 4 / 4.1 IPv6

**Status:** Fixed. **Confidence:** High. **Academic justification:** SLAAC uses a prefix and IID; MAC-derived identifiers are not mandatory.

**Repeated locations checked:** IPv6 main section, distinction/review, dual-stack scenario and networking diagrams; only the main explanation mandated MAC derivation.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [RFC 8064 §3](https://www.rfc-editor.org/rfc/rfc8064.html#section-3)

Current source: [content/isc2-cc-2026/reading/domain-4.md:144](../../../content/isc2-cc-2026/reading/domain-4.md#L144)

**Before:**
```text
อุปกรณ์สามารถกำหนดหมายเลขไอพีให้ตัวเองได้อัตโนมัติ โดยส่งคำขอไปยังเราเตอร์ (Router Solicitation) และนำ Prefix ที่ได้มารวมกับ MAC Address ของตนเองโดยไม่ต้องพึ่งพา DHCP Server เสมอไป
```

**After (actual implemented Thai/English wording):**
```text
SLAAC สร้างที่อยู่ IPv6 โดยใช้ prefix ที่เราเตอร์ประกาศร่วมกับ Interface Identifier (IID) ของอินเทอร์เฟซ วิธีสร้าง IID ไม่จำเป็นต้องใช้ MAC Address; EUI-64 ที่อาศัย MAC เป็นเพียงวิธีหนึ่งในอดีต
```


### D34-07 — 4 / 4.3 cloud networking

**Status:** Fixed. **Confidence:** High. **Academic justification:** A NAT gateway is an example, not the sole outbound mechanism. AWS supports NAT instances and IPv6 egress-only gateways.

**Repeated locations checked:** Private-subnet paragraph, cloud tables, diagrams, summaries and scenarios. Clarified lack of direct Internet Gateway route to agree with IPv6 alternative.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [AWS NAT gateway versus NAT instance](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html); [AWS egress-only IGW](https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html)

Current source: [content/isc2-cc-2026/reading/domain-4.md:511](../../../content/isc2-cc-2026/reading/domain-4.md#L511)

**Before:**
```text
หากต้องการออกไปดาวน์โหลดแพตช์ภายนอก ต้องผ่าน **NAT Gateway** เท่านั้น
```

**After (actual implemented Thai/English wording):**
```text
การออกไปยังอินเทอร์เน็ตต้องใช้เส้นทางและกลไกที่เหมาะสม เช่น **NAT Gateway** สำหรับ IPv4; อาจใช้ NAT instance หรือสำหรับ IPv6 ใช้ egress-only Internet Gateway ตามสถาปัตยกรรมและนโยบาย
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:511](../../../content/isc2-cc-2026/reading/domain-4.md#L511)

**Before:**
```text
Private Subnet: ไม่มีเส้นทางตรงสู่อินเทอร์เน็ต
```

**After (actual implemented Thai/English wording):**
```text
Private Subnet: ไม่มีเส้นทางตรงผ่าน Internet Gateway
```


### D34-08 — 3–4 / domain titles, 3.1–4.3

**Status:** Fixed. **Confidence:** High. **Academic justification:** Formal titles must reflect the September 2026 outline and its IAM/cloud scope.

**Repeated locations checked:** Both module titles, both leads and the two H1 title data entries corrected. Existing shortTitle abbreviations and unrendered module comments are not official full headings. Weights/objective IDs unchanged.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [Official ISC2 September 2026 PDF](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf)

Current source: [content/isc2-cc-2026/reading/domain-3.js:13](../../../content/isc2-cc-2026/reading/domain-3.js#L13)

**Before:**
```text
title: 'Domain 3: Access Controls'
```

**After (actual implemented Thai/English wording):**
```text
title: 'Domain 3: Identity and Access Management (IAM) Concepts'
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:1](../../../content/isc2-cc-2026/reading/domain-3.md#L1)

**Before:**
```text
ใน Domain 3: Access Controls (น้ำหนัก
```

**After (actual implemented Thai/English wording):**
```text
ใน Domain 3: Identity and Access Management (IAM) Concepts — แนวคิดการบริหารตัวตนและการเข้าถึง (น้ำหนัก
```

Current source: [content/isc2-cc-2026/reading/domain-4.js:13](../../../content/isc2-cc-2026/reading/domain-4.js#L13)

**Before:**
```text
title: 'Domain 4: Network Security'
```

**After (actual implemented Thai/English wording):**
```text
title: 'Domain 4: Networking and Cloud Security Concepts'
```

Current source: [content/isc2-cc-2026/reading/domain-4.md:1](../../../content/isc2-cc-2026/reading/domain-4.md#L1)

**Before:**
```text
ใน Domain 4: Network Security (น้ำหนัก
```

**After (actual implemented Thai/English wording):**
```text
ใน Domain 4: Networking and Cloud Security Concepts — แนวคิดความมั่นคงปลอดภัยเครือข่ายและคลาวด์ (น้ำหนัก
```

Current source: [js/ui/screen-reading.js:43](../../../js/ui/screen-reading.js#L43)

**Before:**
```text
title: 'Domain 3: Access Controls'
```

**After (actual implemented Thai/English wording):**
```text
title: 'Domain 3: Identity and Access Management (IAM) Concepts'
```

Current source: [js/ui/screen-reading.js:52](../../../js/ui/screen-reading.js#L52)

**Before:**
```text
title: 'Domain 4: Network Security'
```

**After (actual implemented Thai/English wording):**
```text
title: 'Domain 4: Networking and Cloud Security Concepts'
```


### D34-10 — 4 / 4.1 IPv4

**Status:** Fixed. **Confidence:** High. **Academic justification:** IPv4 link-local APIPA is separate from RFC 1918. The allocated /16 and the narrower automatic candidate range are different facts.

**Repeated locations checked:** RFC 1918 list, APIPA paragraph, NAT/review and diagrams; retained correct /16 allocation, separated the paragraph and named automatic candidate range.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [RFC 3927 §2.1](https://www.rfc-editor.org/rfc/rfc3927.html#section-2.1)

Current source: [content/isc2-cc-2026/reading/domain-4.md:117](../../../content/isc2-cc-2026/reading/domain-4.md#L117)

**Before:**
```text
- **APIPA (Automatic Private IP Addressing):** 169.254.0.0 – 169.254.255.255 (ช่วง 169.254.0.0/16) ระบบปฏิบัติการจะจ่ายให้ตัวเองอัตโนมัติเมื่อไม่สามารถติดต่อขอไอพีจาก DHCP Server ได้
```

**After (actual implemented Thai/English wording):**
```text

**IPv4 Link-local / APIPA — แยกจาก RFC 1918:**

สงวนบล็อก 169.254.0.0/16 สำหรับสื่อสารบนลิงก์เดียวกัน การเลือกที่อยู่อัตโนมัติตาม RFC 3927 ใช้ 169.254.1.0–169.254.254.255 โดยไม่ใช้ /24 แรกและสุดท้าย และเราเตอร์ไม่ส่งต่อทราฟฟิกนี้ออกนอกลิงก์ APIPA อาจถูกใช้เมื่อไม่สามารถรับที่อยู่จาก DHCP Server ได้
```


### D34-11 — 3 / 3.2 MAC

**Status:** Fixed. **Confidence:** High. **Academic justification:** MAC enforces central policy; it does not guarantee all leakage is prevented. Clearance alone is insufficient.

**Repeated locations checked:** Main explanation, advantage, table, Markdown/exported scenario 7, desktop/mobile models diagram. Existing need-to-know warning preserved; scenario answer remains MAC.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [NIST MAC glossary](https://csrc.nist.gov/glossary/term/mandatory_access_control)

Current source: [content/isc2-cc-2026/reading/domain-3.md:231](../../../content/isc2-cc-2026/reading/domain-3.md#L231)

**Before:**
```text
เป็นโมเดลการควบคุมการเข้าถึงที่มีความเข้มงวดและปลอดภัยสูงสุด
```

**After (actual implemented Thai/English wording):**
```text
เป็นโมเดลการควบคุมการเข้าถึงที่บังคับใช้นโยบายส่วนกลาง
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:238](../../../content/isc2-cc-2026/reading/domain-3.md#L238)

**Before:**
```text
ความมั่นคงปลอดภัยระดับสูงสุด ป้องกันข้อมูลรั่วไหลได้อย่างเด็ดขาด
```

**After (actual implemented Thai/English wording):**
```text
ช่วยจำกัดการเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต แต่ไม่รับประกันว่าจะป้องกันข้อมูลรั่วไหลได้ทุกกรณี
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:470](../../../content/isc2-cc-2026/reading/domain-3.md#L470)

**Before:**
```text
ป้องกันข้อมูลความลับรั่วไหลในระดับสูงสุด | ระบบทหารอนุญาตให้อ่านเอกสารลับเฉพาะผู้มี Clearance
```

**After (actual implemented Thai/English wording):**
```text
บังคับใช้นโยบายส่วนกลางเพื่อจำกัดการเปิดเผยข้อมูล | ระบบทหารตรวจ Clearance, Need-to-Know และนโยบายที่เกี่ยวข้องก่อนอนุญาตให้อ่านเอกสารลับ
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:540](../../../content/isc2-cc-2026/reading/domain-3.md#L540)

**Before:**
```text
ของเอกสารเท่านั้น โดยผู้ใช้ไม่มีสิทธิ์เปลี่ยนแปลงป้ายกำกับ
```

**After (actual implemented Thai/English wording):**
```text
ของเอกสาร และต้องมี Need-to-Know พร้อมผ่านนโยบายที่เกี่ยวข้องด้วย โดยผู้ใช้ไม่มีสิทธิ์เปลี่ยนแปลงป้ายกำกับ
```

Current source: [content/isc2-cc-2026/reading/domain-3.md:543](../../../content/isc2-cc-2026/reading/domain-3.md#L543)

**Before:**
```text
เป็นโมเดลการควบคุมที่มีความเข้มงวดสูงสุด
```

**After (actual implemented Thai/English wording):**
```text
เป็นโมเดลการควบคุมที่บังคับใช้นโยบายส่วนกลาง
```

Current source: [content/isc2-cc-2026/reading/domain-3-scenarios.js:71](../../../content/isc2-cc-2026/reading/domain-3-scenarios.js#L71)

**Before:**
```text
ของเอกสารเท่านั้น โดยผู้ใช้ไม่มีสิทธิ์เปลี่ยนแปลงป้ายกำกับ
```

**After (actual implemented Thai/English wording):**
```text
ของเอกสาร และต้องมี Need-to-Know พร้อมผ่านนโยบายที่เกี่ยวข้องด้วย โดยผู้ใช้ไม่มีสิทธิ์เปลี่ยนแปลงป้ายกำกับ
```

Current source: [content/isc2-cc-2026/reading/domain-3-scenarios.js:74](../../../content/isc2-cc-2026/reading/domain-3-scenarios.js#L74)

**Before:**
```text
เป็นโมเดลการควบคุมที่มีความเข้มงวดสูงสุด
```

**After (actual implemented Thai/English wording):**
```text
เป็นโมเดลการควบคุมที่บังคับใช้นโยบายส่วนกลาง
```

Current source: [js/core/diagram-generator.js:2180](../../../js/core/diagram-generator.js#L2180)

**Before:**
```text
Highest Security &middot; Need-to-Know
```

**After (actual implemented Thai/English wording):**
```text
Central Policy &middot; Need-to-Know
```

Current source: [js/core/diagram-generator.js:2233](../../../js/core/diagram-generator.js#L2233)

**Before:**
```text
นโยบายกลางบังคับใช้ผ่าน Security Labels และ Clearances ปลอดภัยสูงสุด ผู้ใช้แก้เองไม่ได้
```

**After (actual implemented Thai/English wording):**
```text
นโยบายกลางบังคับใช้ผ่าน Security Labels และ Clearances ร่วมกับ Need-to-Know ผู้ใช้แก้เองไม่ได้ และไม่รับประกันว่าจะป้องกันข้อมูลรั่วไหลได้ทุกกรณี
```


### D34-12 — 4 / 4.1 wireless

**Status:** Fixed. **Confidence:** High. **Academic justification:** SSID hiding omits a name from announcements; it does not suppress all beacons or supply encryption/authentication.

**Repeated locations checked:** Wireless warning, exam tip and network scenarios. The valid weak-security conclusion is retained; beacon/name explanation corrected.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [Cisco Meraki Air Marshal](https://documentation.meraki.com/Wireless/Operate_and_Maintain/User_Guides/Monitoring_and_Reporting/Air_Marshal); [Cisco Aironet FAQ](https://www.cisco.com/c/en/us/support/docs/wireless-mobility/wlan-security/68583-FAQ-Wireless-Security.html)

Current source: [content/isc2-cc-2026/reading/domain-4.md:274](../../../content/isc2-cc-2026/reading/domain-4.md#L274)

**Before:**
```text
การซ่อน SSID ไม่ได้ช่วยอะไร เพราะชื่อเครือข่ายยังคงถูกส่งออกไปใน Probe Requests และ Beacon Frames เมื่อมีเครื่องเชื่อมต่อ
```

**After (actual implemented Thai/English wording):**
```text
การซ่อน SSID เพียงละชื่อจากการประกาศเครือข่าย ไม่ได้หยุด Beacon ทั้งหมด และไม่ใช่การเข้ารหัสหรือการพิสูจน์ตัวตน ผู้สังเกตยังอาจทราบชื่อจากการสื่อสารระหว่างการค้นหาและเชื่อมต่อของลูกข่าย จึงควรใช้ WPA2/WPA3 และการตั้งค่าที่เหมาะสม
```


### D34-13 — 4 / 4.3 service models

**Status:** Fixed. **Confidence:** High. **Academic justification:** Idle scale-to-zero depends on service, hosting plan and configuration.

**Repeated locations checked:** FaaS paragraph, service/shared-responsibility diagram, review and scenarios; event-driven examples remain valid and unchanged.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [Azure Functions event-driven scaling](https://learn.microsoft.com/en-us/azure/azure-functions/event-driven-scaling)

Current source: [content/isc2-cc-2026/reading/domain-4.md:448](../../../content/isc2-cc-2026/reading/domain-4.md#L448)

**Before:**
```text
รูปแบบย่อยของ PaaS ที่ลูกค้านำเฉพาะโค้ดของฟังก์ชันสั้น ๆ มาอัปโหลดไว้ โดยระบบจะรันโค้ดเมื่อมีเหตุการณ์เข้ามากระตุ้น (Event-Driven) และสเกลขนาดเป็นศูนย์เมื่อไม่มีการใช้งาน
```

**After (actual implemented Thai/English wording):**
```text
FaaS รันฟังก์ชันตามเหตุการณ์ (Event-Driven) และให้ผู้ให้บริการบริหารโครงสร้างพื้นฐาน หลายแผนรองรับการ scale-to-zero เมื่อว่าง แต่พฤติกรรมนี้ขึ้นอยู่กับบริการ แผน และการตั้งค่า เช่น การมี always-ready instance
```


### D34-16 — 4 / 4.1 OSI

**Status:** Fixed. **Confidence:** High. **Academic justification:** Sockets are communication endpoint APIs, not a Session-layer wire protocol.

**Repeated locations checked:** Session protocol list, OSI diagram and model/review explanations. Removed Sockets from the list and SVG; added API explanation in prose without changing SVG geometry.

**Original-note traceability (Phase 1A, historical comparison):** See this finding’s source-comparison record in the unchanged Phase 1A report.

**Authoritative basis:** [Microsoft socket function](https://learn.microsoft.com/en-us/windows/win32/api/winsock2/nf-winsock2-socket); [RFC 8504 §11.2](https://www.rfc-editor.org/rfc/rfc8504.html#section-11.2)

Current source: [content/isc2-cc-2026/reading/domain-4.md:50](../../../content/isc2-cc-2026/reading/domain-4.md#L50)

**Before:**
```text
โพรโทคอลสำคัญ: RPC (Remote Procedure Call), NetBIOS, Sockets
```

**After (actual implemented Thai/English wording):**
```text
โพรโทคอลที่มักใช้เป็นตัวอย่าง: RPC (Remote Procedure Call), NetBIOS
   - Session Layer เป็นแนวคิดการสร้าง บริหาร และยุติเซสชันระหว่างแอปพลิเคชัน ส่วน sockets เป็น API/นามธรรมของจุดปลายการสื่อสารที่แอปใช้เรียกบริการเครือข่าย ไม่ใช่โพรโทคอลประจำ Session Layer
```

Current source: [js/core/diagram-generator.js:2284](../../../js/core/diagram-generator.js#L2284)

**Before:**
```text
RPC, NetBIOS, Sockets &middot; Session Management
```

**After (actual implemented Thai/English wording):**
```text
RPC, NetBIOS &middot; Session Management
```

## Cross-domain consistency and boundaries

- Threat/vulnerability wording now agrees with the existing insider example and threat-chain relationship; no change to risk formulas or examples.
- Privacy roles and lifecycle terms agree across prose and mobile alternatives. Consent and seven-year retention subconcerns in D1-N05 were qualified, not confirmed, and remain outside Batch A.
- The D1-N10 control taxonomy remains unchanged; only the confirmed mantrap label was corrected.
- MTD impact wording now agrees with tolerable disruption; the separately ambiguous RTO/MTD equality and recovery-buffer question was not implemented. DR remains an activity and DRP remains a plan.
- Metrics include KPI/KRI and derived measures in prose, table and both diagram alternatives. The numbered diagram is expressly an example architecture, not a mandatory pipeline; existing useful counts and KPI/KRI scenario answers remain.
- MAC central-policy/labels/clearance/need-to-know concepts agree across main text, comparison table, both scenario representations and both diagram variants. Scenario 7 still answers MAC.
- ARP placement agrees with the four-layer teaching model. APIPA retains the correct /16 allocation; only grouping and candidate-range precision changed. Mask-dependent broadcast shorthand is outside Batch A.
- Cloud NAT alternatives and FaaS plan qualifications agree with current provider documentation. Other qualified cloud responsibility, provider scope and security-superiority concerns remain Batch B.
- Full formal D3/D4 titles agree in module metadata, lead paragraphs and H1 data; shortened navigation labels remain abbreviations. Weights, objectives and subsection IDs are unchanged.
- Spacing, weak subheading hierarchy, long bullet groups, confusing icons and diagram presentation are separate future presentation-audit concerns. No visual redesign was implemented.

## Tests and browser evidence

Focused regression checks: baseline **19 failed / 4 passed** (all 19 target defects reproduced, four structural checks already passed); final **23/23 passed**. Logs: `focused-red.txt`, `focused-green.txt`, `focused-final.txt`; test source: `academic.test.mjs`, all under the evidence directory.

Existing suites: persistence **20/20**, foundation **9/9**, Domain 1 **10/10**, Domain 2 **9/9**, Domain 3 **10/10**, Domain 4 **10/10**, DOM integrity **35/35**: **103/103 passed**. The first Domain 3 run failed its old-title assertion after the authorized title correction; the narrowly updated assertion and final rerun pass. This was an implementation-induced stale expectation, not a pre-existing failure. Logs preserve both results.

`git diff --check` passes. Node parsing and DOM checks cover all 24/29/17/24 D1–D4 subsections, Thai/English preservation, tables, scenarios and diagram generation. Persistence and foundation suites cover progress/navigation boundaries; protected navigation/progress implementation remains unchanged.

Chrome `Chrome/156.0.8078.74`: 64 subsection screenshots plus **20 focused diagram screenshots**, both Light and Dark themes, desktop 1366×768 and mobile 390×844. Manifests record domain loading, corrected D3/D4 H1 text, all 94 headings, 22 tables, 24 diagrams, hash targets and changed SVG-label bounds. No missing requested anchor, raw scenario markers, object artifacts or replacement characters were detected. All visible changed SVG labels stayed within their SVG bounds. **Zero runtime/console errors** in both runs. See `browser-results.json`, `diagram-browser-results.json` and their `.mjs` drivers. Parent visually inspected representative screenshots including TCP/IP mapping, desktop metrics/MAC and mobile privacy/DR; corrected wording renders and mobile text wraps. Existing low-contrast diagram text/table overflow remains a future presentation concern. Human visual acceptance remains pending; these checks are not acceptance.

## Exact changed-file manifest

Modified tracked files (no other tracked files changed):

- `content/isc2-cc-2026/reading/domain-1.md`
- `content/isc2-cc-2026/reading/domain-2-scenarios.js`
- `content/isc2-cc-2026/reading/domain-2.md`
- `content/isc2-cc-2026/reading/domain-3-scenarios.js`
- `content/isc2-cc-2026/reading/domain-3.js`
- `content/isc2-cc-2026/reading/domain-3.md`
- `content/isc2-cc-2026/reading/domain-4.js`
- `content/isc2-cc-2026/reading/domain-4.md`
- `js/core/content-components.js`
- `js/core/diagram-generator.js`
- `js/ui/screen-reading.js`
- `tools/verify-reading-notes-domain3.mjs`

New report: `docs/plans/isc2-cc-2026/reading-notes-phase1b-batch-a-academic-corrections.md`. New QA artifacts are confined to `artifacts/qa/reading-notes-phase1b-batch-a/`; `evidence-manifest.json` lists every artifact and its SHA-256. The existing untracked Phase 1A report belongs to prior work and was not created or modified by Batch A.

## Review, limitations and acceptance

Fresh read-only review found one missed full-title repetition in the H1 data; it was corrected and added to focused assertions and Chrome verification. Follow-up review verified the title literals, browser manifest, focused tests, preservation hashes and report draft with no further concrete issue. Reviewer did not modify files. Review limitations: screenshot pixels, focused diagram results, final generated report and evidence manifest received parent verification.

Blocked findings: **None**. Remaining academic risks are the 29 qualified/ambiguous, five acceptable-simplification and two evidence-dependent Phase 1A findings, not automatically authorized corrections. Their original classifications remain unchanged. No claim is made that the entire textbook is now free of academic or presentation concerns.

The browser uses an isolated temporary Chrome profile and loopback server. Long-page screenshots are samples, not an exhaustive manual visual audit. Previously reported layout/navigation issues remain outside this task. Source documentation retrieval can vary; Phase 1A records its direct EUR-Lex robot-check limitation and uses EDPB primary guidance.

All eight original notes, Learning Slides, banks, Quiz/Exam, vocabulary, Domain 5, progress schema and CSS were preserved. No staging, commit, push, reset, revert or deletion was performed. Human Acceptance has **not** been approved.

**Phase 1B Batch A Implementation Complete — Pending Human Academic & Visual Acceptance**
