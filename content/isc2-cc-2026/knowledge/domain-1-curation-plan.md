---
id: isc2-cc-2026-domain-1-curation-plan
domain_id: 1
domain_name: Security Principles
phase: 3
document_role: topic-by-topic-content-curation
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-18
source_reference: ISC2-CC-2026-SOURCE-20261018-01
question_count_target: null
questions_generated: false
---

# Domain 1 — Topic-by-Topic Content Curation Plan

## Scope, evidence and decision rules

แผนนี้คัดเนื้อหาสำหรับ **ISC2 CC 2026 — Domain 1: Security Principles** ตามลำดับ lecture เพื่อใช้วางแผนงานเขียนในอนาคต **คุณภาพสำคัญกว่าปริมาณ** ไม่มี target question count, question stems, options, answer keys หรือการเปลี่ยน production bank เอกสารนี้อยู่ข้าง [existing Domain 1 knowledge staging](domain-1.md) โดยไม่เปลี่ยนสถานะของ staging เดิม

ตรวจ architecture จริงแล้ว: `knowledge/` เป็น authoring staging; `sources/domain-1/` เก็บ raw references และ Phase 2 drafts; `questions/` กับ runtime `data/certs/.../questions/` เป็นคนละชั้น ใช้ lowercase/hyphenated filename และ draft/provenance conventions ของโครงการ เอกสาร Phase 3 นี้เป็น **curation decision record** ไม่ใช่ approved knowledge entries หรือ question schema

Input ที่ตรวจ: [manifest](../sources/source-manifest.json), [source README](../sources/README.md), [inventory](../sources/file-inventory.md), [knowledge map](../sources/domain-1/extracted-knowledge/knowledge-map.md), [glossary](../sources/domain-1/extracted-knowledge/terminology-glossary.md), [exam language guide](../sources/domain-1/extracted-knowledge/exam-language-guide.md), [concept distinctions](../sources/domain-1/extracted-knowledge/concept-distinctions.md), [Phase 2 source quality report][QUALITY], [knowledge template](../templates/knowledge-template.md), [authoring guidelines](../../../docs/plans/isc2-cc-2026/question-writing-guidelines.md)

ทบทวน transcript เต็ม **98 overlapping blocks** และเปิด PNG **60 ภาพทีละไฟล์อีกครั้งใน Phase 3** ไม่ตัดสินจาก knowledge map อย่างเดียว `[S01]`–`[S60]` เป็น direct links ไปภาพเดิมตาม manifest capture sequence; stable IDs คือ `ISC2-CC-2026-D1-CAPTURE-001` ถึง `...-060` ส่วน `[T]` คือ `ISC2-CC-2026-D1-TRANSCRIPT-001` และ `T@hh:mm:ss` คือ **เวลาเริ่ม block จริง** ไม่ใช่ frame alignment

**Order:** ยึดการเปลี่ยนหัวข้อใน transcript และจับคู่ readable slide content; filename timestamps สนับสนุน capture order เท่านั้น ไม่อ้างว่าเป็น original deck page numbers ชุด U00–U38 ด้านล่างเป็นหน่วยคัดเนื้อหาของผู้จัดทำตาม instructor progression รวมภาพนิยาม/ตัวอย่างที่ติดกันและแยก transcript-only comparison ไว้ชัด S31/S36 ไม่ถูกเดาหัวข้อจากตำแหน่ง

**Language/provenance:** English terminology คงตาม source; คำอธิบายไทย, classifications, misunderstanding risks และ opportunity designs เป็น editorial work ของผู้จัดทำที่รอ human review ไม่ใช่ official ISC2 wording หรือข้อสอบของ ISC2 ไม่มี external supplementation เพื่อแก้ source ที่ไม่ชัด

| Priority | Disposition ในแผน | ความหมายและผลต่อการเขียนในอนาคต |
| --- | --- | --- |
| HIGH | ACCEPTED | Essential, มีขอบเขตหลักฐานชัด และมี reasoning opportunity คุ้มค่า รับเฉพาะขอบเขตที่ระบุเพื่อ planning ไม่ใช่อนุมัติ answer key |
| MEDIUM | SUPPORTING | ใช้ช่วยอธิบาย/เป็นบริบท ไม่ผลักเป็นข้อสอบ standalone ถ้าไม่มี reasoning เพิ่ม |
| LOW | EXCLUDED หรือ MERGED | ซ้ำ, trivia, ชื่อที่กล่าวผ่าน, หรือไม่มี assessment value แยก; เก็บ provenance แต่ไม่เพิ่มข้อสอบจากการเปลี่ยนคำ |
| NEEDS_REVIEW | DEFERRED | ขัดแย้ง/ไม่ชัด/หลักฐานไม่พอ; **บล็อก answer-key decisions ที่พึ่ง claim นี้** จนมีการตรวจยืนยันและบันทึกหลักฐาน |

ใช้ priority กับ **candidate claim** ที่เล็กพอจะแยกความไม่แน่นอนได้ ไม่ติดป้าย HIGH ให้ทั้งย่อหน้าที่มี disputed example ปนอยู่ `D1-Cnnn` เป็น curation candidate ID ไม่ใช่ production question ID; `Knnn` หมายถึง canonical `KNOW-D1-nnn` จาก Phase 2 ไม่สร้าง concept ซ้ำ `Oxx` เป็น AI-derived **opportunity family** ในท้ายแผน ไม่เท่ากับจำนวนคำถามที่ต้องเขียน

**All future answer keys: NOT_DECIDED.** HIGH ผ่านการเลือกเนื้อหาเท่านั้น การร่างข้อสอบต้องมีคำสั่งใหม่และ technical/bilingual review ตามโครงการ ส่วน DEFERRED ต้องผ่าน specific release criteria ใน issue register ก่อน ไม่มีการยกเลิก SQ issue เพราะเปลี่ยนสถานะ candidate อื่นในหัวข้อเดียวกัน

## Coverage checklist — instructor progression

`[x]` หมายถึงทบทวนหลักฐานและตัดสิน curation แล้ว ไม่ได้หมายถึงข้อขัดแย้งได้รับการแก้ รายการ accepted/excluded/deferred และเหตุผลอย่างละเอียดอยู่ใน unit ที่ตรงกัน ทุก opportunity ในตารางเป็นแนวคิดของผู้จัดทำ

| Reviewed / unit | Subtopic ตามลำดับที่พบ | Slides reviewed | Transcript blocks reviewed | การคัดเลือก / opportunities / open issues |
| --- | --- | --- | --- | --- |
| [x] U00 | Course/exam introduction และ old/new comparison | [S01], [S02], [S03] | T@00:00:00, T@00:00:40, T@00:01:23, T@00:02:08, T@00:02:55, T@00:03:42, T@00:04:26, T@00:05:12 | Context/trivia excluded; metadata deferred; ไม่มี O; SQ-17/18 |
| [x] U01 | CIA Triad overview | [S04] | T@00:05:55, T@00:06:42 | Relationship accepted; acronym-only excluded; O01 |
| [x] U02 | Confidentiality → measures/examples | [S05], [S06] | T@00:06:42, T@00:07:28, T@00:08:08, T@00:08:54, T@00:09:35, T@00:10:29, T@00:11:10 | Purpose/mechanisms accepted; shortcut/bank assumptions deferred; O01/O02; SQ-02/13, P3-01 |
| [x] U03 | Integrity → verification/examples | [S07], [S08], [S09] | T@00:11:10, T@00:11:53, T@00:12:33, T@00:13:16, T@00:13:58 | Tampering/purpose accepted; algorithm guarantees deferred; O01/O02; SQ-03/15 |
| [x] U04 | Availability → mechanisms/examples | [S10], [S11] | T@00:13:58, T@00:14:40, T@00:15:23, T@00:16:01, T@00:16:46, T@00:17:26 | Downtime/continuity accepted; instant-recovery assumptions deferred; O01/O03; SQ-14 |
| [x] U05 | AAA: Authentication → Authorization → Accounting | [S12] | T@00:18:08, T@00:18:49, T@00:19:38, T@00:20:20, T@00:20:58 | Three functions accepted; synonym overreach deferred; O04 |
| [x] U06 | MFA: Know → Have → Are; 2FA/independence | [S13] | T@00:21:43, T@00:22:25, T@00:23:02, T@00:23:37, T@00:24:20, T@00:25:37, T@00:26:16 | Independent categories accepted; absolute strength deferred; O05; SQ-06 |
| [x] U07 | Somewhere You Are → MFA summary | [S14] | T@00:24:59, T@00:25:37, T@00:26:16, T@00:26:57 | Location taxonomy deferred; usability supporting; O05 boundary only; SQ-06 |
| [x] U08 | Privacy definition | [S15], [S16] | T@00:27:36 | Scope vs Confidentiality accepted; repeated crop merged; O06 |
| [x] U09 | Data Subject → Controller → Processor | [S17] | T@00:28:22, T@00:29:06 | Roles accepted; brand trivia excluded; O06 |
| [x] U10 | Ownership → Data Inventory → Retention | [S18] | T@00:29:46, T@00:30:34 | Inventory/retention distinction accepted; fixed legal period deferred; O07; SQ-11 |
| [x] U11 | Right to Be Forgotten | [S19] | T@00:31:18 | Request context supporting; legal decision deferred; ไม่มี active O; SQ-11 |
| [x] U12 | Risk Management lifecycle/processes | [S20] | T@00:31:18, T@00:32:07, T@00:32:51 | Continuous lifecycle accepted; list-only excluded; O10 |
| [x] U13 | Step 1: Risk Identification | [S21], [S22] | T@00:33:37, T@00:34:18 | Asset/Threat/Vulnerability/Impact accepted; crop repetition merged; O08; SQ-03 |
| [x] U14 | Step 2: Qualitative → Quantitative analysis | Transcript-only comparison; [S23]/[S24] reviewed as later metrics context | T@00:35:02, T@00:35:44, T@00:36:30, T@00:37:13 | Method/evidence distinction accepted; precision guarantees deferred; O09 |
| [x] U15 | EF → SLE → ARO | [S23] | T@00:37:13, T@00:37:59, T@00:38:53 | Units supporting; numeric answer decisions deferred; O19 HOLD; SQ-04 |
| [x] U16 | ALE | [S24] | T@00:39:45, T@00:40:30 | Annual-loss calculation deferred; O19 HOLD; SQ-04 |
| [x] U17 | Step 3: Transfer → Accept → cost/tolerance continuation | [S25], [S26] | T@00:40:30, T@00:41:19, T@00:41:59, T@00:42:42, T@00:43:30 | Bounded response distinction accepted; accountability/only claims deferred; O11; SQ-07/08 |
| [x] U18 | Avoid → Mitigate | [S27], [S28] | T@00:43:30, T@00:44:08 | Stop activity vs reduce risk accepted; vendor shortcut deferred; O11; SQ-08 |
| [x] U19 | Step 4: Monitor and Review | [S29] | T@00:44:51, T@00:45:32 | Reassessment/accepted-risk review accepted; O10 |
| [x] U20 | Step 5: Communication and Reporting → Risk Reporting | [S30], [S32]; [S31] separately inspected, unreadable | T@00:45:32, T@00:46:10 | Stakeholder information accepted; repeated report merged; O12; SQ-01/02 |
| [x] U21 | Governance definition/direction/oversight | [S33] | T@00:46:10, T@00:46:59 | Business alignment accepted; O13 |
| [x] U22 | Regulations and Laws → examples | [S34], [S35], [S37]; [S36] separately inspected, unreadable | T@00:46:59, T@00:47:41, T@00:48:26, T@00:49:10 | Authority/applicability dimensions accepted; actual legal classifications deferred; O14; SQ-01/03/11/12 |
| [x] U23 | Frameworks | [S38] | T@00:49:10, T@00:49:52 | Structured approach accepted; catalog names supporting; taxonomy deferred; O14; SQ-12 |
| [x] U24 | Guidelines | [S39] | T@00:49:52, T@00:50:36 | Generally advisory distinction accepted; O14 |
| [x] U25 | Policy → Standard → Procedure → password example | [S40], [S41], [S42], [S43] | T@00:51:14, T@00:51:53, T@00:52:38, T@00:53:23 | Three artifact functions accepted; optional/required numeric settings deferred; O14; SQ-05 |
| [x] U26 | ISO / ISO/IEC 27001 / ISMS | [S44] | T@00:53:23, T@00:54:06 | Purpose/relationship supporting; taxonomy/editions deferred; O13/O14 support; SQ-03/12 |
| [x] U27 | CIS / CIS Controls | [S45] | T@00:54:55 | Prioritized safeguards supporting; name/count trivia excluded; O13/O14 support |
| [x] U28 | Exam Takeaways → Exam Tip | [S46], [S47] | T@00:55:38, T@00:56:16 | Reinforces U23–25; phrase aids supporting; no new family; SQ-05 |
| [x] U29 | Control categories/types overview | [S48], [S49] | T@00:56:16, T@00:57:04 | Merged with substantive U30/U32; no list-count questions |
| [x] U30 | Category definitions → category examples | [S50], [S51] | T@00:57:54, T@00:58:31, T@00:59:08, T@00:59:47 | Implementation view accepted; exhaustive list excluded; exclusivity deferred; O15; SQ-10 |
| [x] U31 | Layered controls / Defense in Depth | [S52] | T@00:59:47, T@01:00:36 | Combined layers accepted; diagram-order trivia excluded; O17 |
| [x] U32 | Functional type definitions → examples | [S53], [S54] | T@01:00:36, T@01:01:20, T@01:01:56, T@01:02:34, T@01:03:13 | Clear function distinctions accepted; Compensating/disputed examples deferred; O16; SQ-10 |
| [x] U33 | Overlapping Security Controls | [S55] | T@01:03:49, T@01:04:26 | Context/multiple functions accepted; generic ACL behavior deferred; O15/O16; SQ-10 |
| [x] U34 | Overlap identification / clue phrases | [S56] | T@01:04:26, T@01:05:10, T@01:05:51 | Clues supporting; keyword-only rules excluded; no duplicate family; SQ-10 |
| [x] U35 | Professional Code of Conduct | [S57] | T@01:05:51, T@01:06:33 | Values/context supporting; vocabulary-only excluded; no standalone O |
| [x] U36 | Due Care | [S58] | T@01:06:33, T@01:07:15 | Reasonable protective action accepted; O18 |
| [x] U37 | Due Diligence | [S59] | T@01:07:15, T@01:07:59 | Investigate/evaluate before and during accepted; O18 |
| [x] U38 | ISC2 Code of Ethics → canons → precedence commentary → closing | [S60] | T@01:07:59, T@01:08:41, T@01:09:27 | Canon themes supporting; conflict/precedence deferred; O20 HOLD; SQ-03/09 |

## 1.1 — Security concepts: curation decisions

### U00 — Course/exam introduction

**Actual source:** S01 reports 2 hours, 100–125 items, 700/1000; S02/03 compare domain names/weights. Transcript repeats course promotion/instructor background and updated-outline claims. ไม่มี technical Domain 1 scenario เพิ่มจากช่วงนี้

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C001 — Instructor biography/promotion, exam metadata memorization | LOW | EXCLUDED | ไม่วัด Security Principles reasoning; ไม่ใช้ชื่อ certifications/languages/weights เป็น trivia | [S01], [S02], [S03]; [T] T@00:00:00, T@00:01:23; O: none |
| D1-C002 — Treat source exam claims as current authoritative rules | NEEDS_REVIEW | DEFERRED | SQ-17/18: total weights row ไม่ตรง sum; transcript numbers ขาด; ไม่แปลง score เป็น raw threshold | [S01], [S03]; [T] T@00:01:23, T@00:04:26; O: none |

### U01 — CIA Triad overview (K001)

**Essential content:** Confidentiality, Integrity, Availability เป็น pillars ที่ต้องเข้าใจ property, means และผลเมื่อ compromised ผู้สอนเน้นความสัมพันธ์นี้ที่ T@00:05:55/T@00:06:42 ไม่ได้ให้นับคำย่ออย่างเดียว **Potential misunderstanding [AI inference]:** ใช้ชื่อ control แทน security objective

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C003 — Relate security objective to described harm | HIGH | ACCEPTED | รวม CIA เป็น reasoning family; ต้องให้ context ที่ชี้ property ชัด ไม่ใช้ “altering” ที่ขัดกันเป็นตัวตัดสิน | [S04], [S05], [S07], [S10]; [T] T@00:05:55; O01 |
| D1-C004 — Expand/count CIA acronym alone | LOW | MERGED | เป็น vocabulary prerequisite ของ C003 ไม่เพิ่มคำถามจากการสลับสามตัวอักษร | [S04]; O: none |

### U02 — Confidentiality and examples (K002/003)

**Definitions/terms:** authorized people/systems/processes; Encryption, Access Control, Passwords, Data Masking, 2FA, NDA **Lecture examples:** encrypted emails/files, finance database access, last-four credit-card display, password+phone code, employee/employer NDA; T@00:08:08 mentions AES/VPN โดยไม่มีรายละเอียด implementation

**Instructor tip:** T@00:07:28/T@00:08:08 calls encryption a “go to answer”; เก็บเป็น source advice ที่ยังไม่ใช้เป็นกฎ **Comparison/misunderstanding [AI inference]:** hiding part of data ต่างจาก transforming data; restrictions on viewing ต่างจาก preventing modification

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C005 — Purpose of restricted disclosure and bounded confidentiality measures | HIGH | ACCEPTED | เลือกเนื้อหาที่เชื่อม purpose กับ finance/email/masking examples โดยไม่พึ่ง algorithm detail/blanket rule | [S05], [S06]; [T] T@00:06:42, T@00:08:54, T@00:09:35; O01/O02 |
| D1-C006 — NDA and 2FA as supporting confidentiality examples | MEDIUM | SUPPORTING | NDA เป็น non-disclosure context; 2FA รวม reasoning หลักใน U06 ไม่สร้างซ้ำที่นี่ | [S06]; [T] T@00:10:29, T@00:11:10; O02/O05 support |
| D1-C007 — Encryption always wins / unauthorized alteration classified solely as Confidentiality | NEEDS_REVIEW | DEFERRED | SQ-13: S05 “altering” ทับ Integrity; ไม่ใช้ go-to wording สร้าง answer-key rule | [S05], [S07]; [T] T@00:07:28, T@00:08:08; O01/O02 restricted |
| D1-C008 — Every bank agent sees only last four digits / always uses listed identity checks | NEEDS_REVIEW | DEFERRED | P3-01: specific banking explanation มี “always”/visibility assumptions ไม่มี evidence อิสระ; คัดเฉพาะ masking purpose ใน C005 | [T] T@00:09:35, T@00:10:29; [S06] ไม่รับรอง bank procedures; O: none |
| D1-C009 — AES/VPN expansion or implementation recall | LOW | EXCLUDED | Mention-only; ไม่เติม protocol/algorithm details เพื่อสร้างข้อสอบ | [T] T@00:08:08; O: none |

### U03 — Integrity, verification and examples (K004/005)

**Definition from slide:** correct and unaltered; prevent unauthorized modification/deletion/corruption **Lecture examples:** transfer amount $10,000 becoming $1,000, software checksums, patient records, signed emails, unchanged database logs **Comparison [AI inference]:** property being protected ต่างจากเครื่องมือที่ใช้ตรวจ

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C010 — Unauthorized change as the integrity concern | HIGH | ACCEPTED | ใช้ clear slide definition + examples เพื่อ reason about altered value ไม่ใช้ malformed transcript wording เป็น answer criterion | [S07], [S09]; [T] T@00:11:53, T@00:12:33, T@00:13:58; O01 |
| D1-C011 — Verification purpose of checksums/signatures | MEDIUM | SUPPORTING | อธิบายว่าผู้สอนเชื่อมกับ detection of alteration; ยังไม่เพียงพอวัด cryptographic guarantees แยก | [S07], [S08], [S09]; [T] T@00:11:53; O02 support |
| D1-C012 — “Correct and altered” / MD5-SHA suitability / hash match proves authenticity | NEEDS_REVIEW | DEFERRED | SQ-03/15: wording conflict และไม่มี algorithm/version/trust model; บล็อกคำตัดสินที่ต้องพึ่ง claims เหล่านี้ | [S07], [S08], [S09]; [T] T@00:11:10, T@00:13:16; O02 restricted |
| D1-C013 — Separate items for S08 crop and S09 wider view | LOW | MERGED | เป็นหลักฐาน concept เดียว ใช้ C010/011 ไม่เพิ่ม assessment ด้วยภาพ variants | [S08], [S09]; O: none |

### U04 — Availability and examples (K006/007)

**Definition:** accessible to authorized users whenever needed; minimize downtime **Lecture examples:** hardware/cyberattack/maintenance outages; servers/load balancer, UPS, redundant ISPs; cloud backups/DR site assertions มี conditions ไม่ครบ **Misunderstanding [AI inference]:** access permission ไม่เท่ากับ service availability และ backup ไม่ได้ให้หลักฐาน recovery time

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C014 — Continuity objective and mechanism-to-failure relationship | HIGH | ACCEPTED | ใช้ power/server/connection examples ที่ source อธิบาย causal role; ไม่ยืนยัน instant failover | [S10], [S11]; [T] T@00:14:40, T@00:16:01, T@00:16:46, T@00:17:26; O01/O03 |
| D1-C015 — Recovery/redundancy vocabulary and DR-site mention | MEDIUM | SUPPORTING | สนับสนุน reasoning ไม่แยกเป็น acronym/device-name recall ทุกตัว | [S10], [S11]; [T] T@00:15:23; O03 support |
| D1-C016 — All backups/cloud storage/DR sites guarantee immediate access or no downtime | NEEDS_REVIEW | DEFERRED | SQ-14: architecture/recovery times ไม่ได้ระบุ; ห้ามใช้เป็น answer assumption | [S11]; [T] T@00:16:46, T@00:17:26; O03 restricted |

### U05 — AAA in instructor order (K008–011)

**Definitions:** Authentication verifies identity; Authorization determines/grants permissions; Accounting tracks/records actions, source uses “Accounting (or Auditing)” **Lecture example:** email login → read/send/delete permissions → login/action logs **Misunderstanding [AI inference]:** logging an action ไม่ได้เป็นการให้สิทธิ และ usually ไม่ใช่ always

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C017 — Authentication: identity/credentials function | HIGH | ACCEPTED | ใช้แยกหน้าที่ใน activity chain ไม่ย่อเป็น “เข้าถึงได้” ทุกความหมาย | [S12]; [T] T@00:18:08, T@00:18:49; O04 |
| D1-C018 — Authorization: permissions after verified identity in the example | HIGH | ACCEPTED | รักษา “usually” และแยก from proof of identity | [S12]; [T] T@00:19:38, T@00:20:20; O04 |
| D1-C019 — Accounting: records enabling activity trace | HIGH | ACCEPTED | เชื่อม login/action logs กับหน้าที่ recording ไม่เพิ่ม claims ว่าบันทึกครบ/untamperable เสมอ | [S12]; [T] T@00:20:20, T@00:20:58; O04 |
| D1-C020 — Accounting = Auditing in every context / fixed always sequence | NEEDS_REVIEW | DEFERRED | Source ใช้คำคู่ใน lecture ไม่รองรับ universal equivalence หรือ every-system ordering | [S12]; [T] T@00:19:38, T@00:20:20; O04 restricted |

### U06 — MFA factors and independence (K012)

**Terms/examples:** Something You Know — password/PIN/security questions; Have — phone/card/token; Are — fingerprint/face/iris. T@00:25:37 explicitly says password+PIN same category; T@00:26:16 gives password+fingerprint ต่าง category **Misunderstanding [AI inference]:** number of steps/fields ไม่ใช่ number of independent categories

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C021 — Independent categories vs repeated knowledge credentials | HIGH | ACCEPTED | ใช้ชัดเจนเฉพาะ Know/Have/Are และ source counterexample; ไม่พึ่ง Location/absolute resistance | [S13], [S14]; [T] T@00:21:43, T@00:24:20, T@00:25:37, T@00:26:16; O05 |
| D1-C022 — Physical theft is required / biometrics strongest or cannot be replicated / biometrics vs iris preference | NEEDS_REVIEW | DEFERRED | SQ-06: broad strength claims และ comparison ไม่ชัด; ไม่เติม attack details จากภายนอกเพื่อแก้ | [S13]; [T] T@00:23:02, T@00:23:37, T@00:26:16, T@00:26:57; O05 restricted |

### U07 — Location and MFA summary (K012 continuation)

**Actual source:** IP/GPS/Wi-Fi location; example access allowed from office network but not home; balancing convenience/security. **Tip:** ไม่มี explicit exam-selection rule ใหม่; ไม่แปลง diagram ที่มี 4 factors เป็นคำตอบมาตรฐานที่ตรวจแล้ว

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C023 — Location independently satisfies MFA factor requirement | NEEDS_REVIEW | DEFERRED | SQ-06: source taxonomy ต้องตรวจ; แยก scenario context ออกจาก proof of independent authentication | [S14]; [T] T@00:24:59, T@00:25:37; O05 restricted |
| D1-C024 — User convenience/security balance | MEDIUM | SUPPORTING | มี principle แต่ไม่มี trade-off analysis ละเอียดพอให้เลือก technology ที่ “ดีที่สุด” | [S14]; [T] T@00:26:16; O05 support |

### U08 — Privacy definition (K013)

**Definition:** protecting personal information; laws/policies governing collection, storage, use; individual rights. **Lecture examples:** social security number, address, picture. **Comparison [AI inference]:** privacy scope กว้างกว่าจำกัดคนอ่านข้อมูลอย่างเดียว ไม่ใช้ word-cloud ใน S16 เป็น definitions เพิ่ม

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C025 — Information handling/rights vs restricted disclosure scope | HIGH | ACCEPTED | วัด scope distinction ตามนิยาม ไม่ให้ legal compliance ruling | [S15], [S16], [S05]; [T] T@00:27:36; O06 |
| D1-C026 — Crop/word-cloud terms as extra topics | LOW | MERGED | S15/16 ซ้ำ definition; ไม่แต่งบทเรียนทุกคำในภาพประกอบ | [S15], [S16]; O: none |

### U09 — Data Subject, Controller and Processor (K014)

**Definitions/example:** customer whose data is stored; retail company determines purpose/means; cloud provider processes on behalf. **Misunderstanding [AI inference]:** ชื่อ Amazon/Azure ที่ผู้สอนสมมติไม่ทำให้บริษัทมี role เดียวในทุกบริการ

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C027 — Distinguish roles by activity/decision authority | HIGH | ACCEPTED | ใช้ retail/customer/hosting relationships; ไม่มี source evidence ให้ตัดสิน legal liability details | [S17]; [T] T@00:28:22, T@00:29:06; O06 |
| D1-C028 — Identify role by brand recall | LOW | EXCLUDED | เปลี่ยนชื่อบริษัทไม่เพิ่ม reasoning; ใช้หน้าที่แทน | [S17]; [T] T@00:29:06; O: none |

### U10 — Ownership, inventory and retention (K015)

**Definitions/examples:** ownership clarifies authority/responsibility while respecting subject rights; inventory = assets/location/type; retention = how long kept/when deleted; records/email logs/billing examples และ seven-year tax example. **Misunderstanding [AI inference]:** ownership ไม่ได้ทำให้ rights ของบุคคลหาย

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C029 — Distinguish inventory information from retention decisions | HIGH | ACCEPTED | Different information needs: location/type vs timing; ไม่ตัดสิน actual legal period | [S18]; [T] T@00:30:34; O07 |
| D1-C030 — Ownership/responsibility with respect for subject rights | MEDIUM | SUPPORTING | Useful role context; source ไม่ให้ละเอียดพอสำหรับ ownership-conflict answer | [S18]; [T] T@00:29:46; O06/O07 support |
| D1-C031 — Universal seven-year tax retention requirement | NEEDS_REVIEW | DEFERRED | SQ-11: ไม่มี jurisdiction/record type/legal citation ครบ ไม่ใช้ period เป็น keyed fact | [S18]; [T] T@00:30:34; O07 restricted |

### U11 — Right to Be Forgotten (K016)

**Actual example:** former user requests removal under GDPR. ประโยค “no longer necessary or legally required to retain” มี ambiguity ของ scope จึงไม่เขียนคำอธิบายสิทธิ/ข้อยกเว้นเพิ่มเติม **Misunderstanding [AI inference]:** every deletion request must succeed ทันทีไม่ใช่ข้อสรุปที่ได้

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C032 — Existence of deletion-request/retention context | MEDIUM | SUPPORTING | เก็บเป็นบริบท Privacy เท่านั้น ไม่ให้ compliance outcome | [S19]; [T] T@00:31:18; O07 support |
| D1-C033 — Conditions deciding whether deletion must be granted | NEEDS_REVIEW | DEFERRED | SQ-11: ambiguous condition/insufficient legal scope; ไม่ใช้เป็น answer key จนตรวจ | [S19]; [T] T@00:31:18; O: none active |

## 1.2 — Risk Management: curation decisions

### U12 — Lifecycle/processes (K017)

**Definition:** systematic identifying/assessing/responding/monitoring risks ต่อ information assets/systems/operations/objectives; continuous process. **Lecture examples:** people/physical office เป็น assets ด้วย; sequence Identify → Assess/Analyze → Treat/Respond → Monitor/Review → Communicate/Report **Misunderstanding [AI inference]:** implement controls แล้วจบ หรือ communication ทำได้เฉพาะท้ายสุด

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C034 — Continuous lifecycle and relation between stages | HIGH | ACCEPTED | วัดว่าขั้นตอน/ข้อมูลสัมพันธ์กันอย่างไรและเหตุใดต้อง review ต่อ ไม่จำลำดับอย่างเดียว | [S20], [S29]; [T] T@00:32:07, T@00:32:51; O10 |
| D1-C035 — Recite five labels / physical assets supporting examples | MEDIUM | SUPPORTING | ใช้เป็น vocabulary/context ของ C034 ไม่สร้าง permutation items ของ list | [S20]; [T] T@00:32:51; O10 support |

### U13 — Identification (K018)

**Definitions/example:** Asset — what needs protection → customer database; Threat — potential harm source → ransomware; Vulnerability — exploitable weakness → unpatched server; Potential Impact → data breach. ใช้ **Unpatched จาก S22** โดยเก็บ transcript “unpaged” เป็น SQ-03 ไม่แก้ต้นฉบับ **Misunderstanding [AI inference]:** asset กับ weakness condition ของมันเป็นคนละบทบาท

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C036 — Distinguish asset/threat/weakness/impact by role in risk description | HIGH | ACCEPTED | Reason about relationships; ไม่ทำสี่ข้อจากการสลับคำใน source example เดียว | [S21], [S22]; [T] T@00:33:37, T@00:34:18; O08 |
| D1-C037 — Additional assessment for S21/S22 near-duplicate content | LOW | MERGED | Definition ต่อด้วย examples เพิ่มบริบทแต่ไม่ใช่ learning target ใหม่ | [S21], [S22]; O: none |

### U14 — Qualitative / Quantitative assessment (K019)

**Transcript directly reviewed:** T@00:35:02/T@00:35:44 contrast descriptive Low/Medium/High, expert judgment/brainstorming/ranking กับ numerical values/loss metrics; T@00:36:30/T@00:37:13 elaborates numbers. **Slide limit:** ไม่มี dedicated comparison capture; S23/24 เป็น subsequent metrics ไม่อ้างว่ามีภาพ qualitative matrix

**Comparison/misunderstanding [AI inference]:** รูปแบบ evidence และผลที่ต้องการอธิบายต่างกัน; numerical estimate ไม่ได้ถูกพิสูจน์ว่า exact prediction

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C038 — Qualitative vs quantitative evidence/method distinction | HIGH | ACCEPTED | เลือกตาม information/outcome ที่บรรยาย ไม่ใช้โจทย์คำนวณที่ยัง SQ-04 | [T] T@00:35:02, T@00:35:44; [S23], [S24] เป็น context; O09 |
| D1-C039 — Quantitative guarantees precision / invented scoring matrix | NEEDS_REVIEW | DEFERRED | ไม่มี numerical uncertainty/validation หรือ matrix ในวัสดุ; ห้ามขยาย claim “precise insights” ให้รับรองตัวเลข | [T] T@00:36:30; O09 restricted |

### U15 — Exposure Factor → SLE → ARO (K020–022)

**Source text/examples:** S23 defines EF percentage lost, SLE financial loss per event with AV×EF, ARO occurrences/year; flood 70%, $10,000 server with 50% damage → $5,000, once every five years → **0.2**. T@00:37:59 contains “plus the multiplied”; T@00:38:53 renders ARO **2**. ไม่รวม transcript variant เข้ากับ slide ราวกับตกลงกันแล้ว

**Misunderstanding [AI inference]:** EF percentage, per-event money และ annual frequency เป็นคนละหน่วย; ความรู้สูงคุณค่าไม่เป็นเหตุให้ข้าม hold

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C040 — AV/EF/SLE/ARO labels and dimensions as displayed | MEDIUM | SUPPORTING | เก็บคำศัพท์/หน่วยจากภาพเพื่อ review ไม่สร้าง standalone numeric/definition key ที่พึ่งความขัดแย้ง | [S23]; [T] T@00:37:13, T@00:37:59, T@00:38:53; O19 HOLD |
| D1-C041 — Numeric SLE/ARO derivation and ambiguous formula/decimal transcription | NEEDS_REVIEW | DEFERRED | SQ-04: calculations และการเลือก variant ถูกบล็อก แม้คณิตศาสตร์ดูชัด; ต้องบันทึก verification ก่อน | [S23]; [T] T@00:37:59, T@00:38:53; O19 HOLD |

### U16 — Annualized Loss Expectancy (K023)

**Source example:** S24 says ALE = SLE×ARO; SLE $5,000, ARO 2, ALE $10,000. T@00:39:45 labels annual loss as rate ก่อนพูด formula และคำว่า “analyzed” ปรากฏก่อนหน้า **Misunderstanding [AI inference]:** S24 input 2 ไม่ใช่หลักฐานให้ใช้แทน 0.2 ของ S23 หรือผสานสอง examples เป็นเรื่องเดียว

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C042 — ALE calculation/annual-vs-single loss answer decisions | NEEDS_REVIEW | DEFERRED | SQ-04: เก็บเป็น potentially valuable material แต่ยังไม่ HIGH เพราะ label/example continuity ต้องตรวจ | [S24]; [T] T@00:35:44, T@00:36:30, T@00:39:45; O19 HOLD |

### U17 — Transfer → Accept → acceptance continuation (K024)

**Definitions/examples:** Transfer via insurance/outsourcing/contracts; cyber insurance for breach losses. Accept = acknowledge/bear risk/no additional action; S26 adds tolerance/cost of treatment. Lecture compares potential loss $5,000 to countermeasure $7,000 and gives private-LAN DoS example **Misunderstanding [AI inference]:** no additional treatment ไม่ใช่ no monitoring; shifting financial exposure ไม่ได้ให้หลักฐานว่า responsibility/ownership ทุกอย่างย้าย

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C043 — Bounded distinction: use of insurance vs acknowledged/no-added-treatment response | HIGH | ACCEPTED | ใช้ source actions เปรียบกัน ไม่ให้ legal/accountability outcome และไม่เลือก treatment จาก cost อย่างเดียว | [S25], [S26]; [T] T@00:40:30, T@00:41:19, T@00:42:42; O11 |
| D1-C044 — All responsibility transferred / Accept only low risks / private LAN always safe / lower-cost heuristic always decides | NEEDS_REVIEW | DEFERRED | SQ-07/08: assumptions เกินหลักฐาน; ทุก key ที่ต้องพึ่ง claims นี้ยัง hold | [S25], [S26]; [T] T@00:41:19, T@00:41:59, T@00:43:30; O11 restricted |
| D1-C045 — Cost/tolerance vocabulary and exact $5,000/$7,000 amounts | MEDIUM | SUPPORTING | เก็บบริบทตัดสินใจ ตัวเลขเดิมไม่ใช่ learning target หรือ universal decision model | [S26]; [T] T@00:42:42, T@00:43:30; O11 support |

### U18 — Avoid → Mitigate (K024 continuation)

**Definitions/examples:** Avoid discontinues activity/process; lecture says not using vendor/not buying application. Mitigate implements measures reducing likelihood/impact to acceptable level; firewall/anti-malware **Instructor wording:** “Best for…” ใน Avoid description ไม่ใช่หลักฐาน official BEST stem pattern

**Comparison/misunderstanding [AI inference]:** stop activity vs keep doing it with controls เป็นแกนที่มีค่ากว่าจำชื่อ vendor; ไม่มีการรับรอง zero risk

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C046 — Discontinue activity vs reduce likelihood/impact with controls | HIGH | ACCEPTED | Require explicit action/risk being addressed; ไม่ extrapolate ว่า switching supplier ทุกครั้งคือ Avoid | [S27], [S28]; [T] T@00:43:30, T@00:44:08; O11 |
| D1-C047 — Any vendor change = Avoid / mitigation = total elimination | NEEDS_REVIEW | DEFERRED | SQ-08: ตัวอย่างต้องมี activity/risk scope; source ไม่รองรับ blanket rule | [S27], [S28]; [T] T@00:44:08; O11 restricted |
| D1-C048 — Separate Avoid items for crop and expanded capture | LOW | MERGED | S28 ต่อ Mitigate แต่ Avoid ยังคือ C046 ไม่คูณรายการจาก S27/S28 | [S27], [S28]; O: none |

### U19 — Monitor and Review (K025)

**Essential content/examples:** existing-risk monitoring, evaluate controls, new threats/vulnerabilities, changed systems/business processes, review accepted risks, update assessment. Triggers: new technology, major upgrade, regulatory change, new threat **Misunderstanding [AI inference]:** acceptance หรือ implementation ไม่ใช่จุดหยุดวงจร

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C049 — Recognize reassessment needs and continued review of accepted risks | HIGH | ACCEPTED | วิเคราะห์เหตุผลที่สภาพใหม่ทำให้ต้อง review ไม่จำลำดับชื่อ steps ซ้ำ U12 | [S29]; [T] T@00:44:51, T@00:45:32; O10 |

### U20 — Risk Communication/Reporting (K026)

**Definition/examples:** document/communicate identified risk, status, mitigation efforts, potential impacts ให้ stakeholders เพื่อ informed decisions/resource prioritization. S30 และ S32 มีสาระซ้ำ; S31 เป็น unreadable fragment ไม่สร้าง topic แทรก **Misunderstanding [AI inference]:** รายงานว่ามี control ไม่ได้พิสูจน์ว่า control effective

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C050 — Match risk information to stakeholder decision needs | HIGH | ACCEPTED | เน้น information completeness/purpose ไม่ให้ invent governance metric/รายงานแบบใหม่ | [S30], [S32]; [T] T@00:45:32, T@00:46:10; O12 |
| D1-C051 — Additional concept from repeat report/capture artifact | LOW | MERGED | ซ้ำสาระ ใช้ C050; S31 ไม่อ่านออก ไม่ยืนยันเนื้อหาเพิ่ม (SQ-01/02) | [S30], [S31], [S32]; O: none |

## 1.3 — Governance: curation decisions

### U21 — Governance (K027)

**Definition:** directed, controlled, held accountable; direction/oversight aligned to business, legal/regulatory, policies, risk objectives and assets. ไม่มี detailed new organizational case ใน source จึง opportunity เป็น **AI-derived extension ของหน้าที่ที่สอน** ไม่ใช่อ้างว่า instructor ยก scenario นั้น

**Comparison/misunderstanding [AI inference]:** oversight vs daily implementation; accountability ไม่ใช่ Accounting logs จาก U05

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C052 — Direction/oversight linked to business/security objectives | HIGH | ACCEPTED | วัด role/purpose distinction โดยไม่สร้าง management hierarchy/decision authority ที่ lecture ไม่สอน | [S33]; [T] T@00:46:10, T@00:46:59; O13 |

### U22 — Regulations and Laws (K028)

**Definition:** legally enforceable requirements from government/regulatory authorities; factors industry/location/data/services/government requirements. **Examples:** GDPR, HIPAA, PCI DSS; source groups under laws heading/annotation แต่ใช้ “security requirements” กับ PCI DSS. **Misunderstanding [AI inference]:** mandatory กับ government law ไม่ใช่สิ่งที่ source แยกครบใน examples

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C053 — Distinguish authority/applicability dimensions from internal management direction | HIGH | ACCEPTED | ใช้ generic definitions/organizational context ไม่ตัดสิน actual jurisdiction/duties ของ named laws | [S34], [S35], [S40]; [T] T@00:46:59, T@00:47:41; O14 |
| D1-C054 — GDPR/HIPAA/PCI DSS labels and possible noncompliance consequences | MEDIUM | SUPPORTING | ศัพท์/ตัวอย่าง source ไม่ใช่ legal advice/ข้อกำหนดปัจจุบัน; ใช้ HIPAA จาก slide โดยเปิดเผย spelling variant | [S37]; [T] T@00:48:26, T@00:49:10; O14 support |
| D1-C055 — Classify all named examples as government law / determine legal applicability from short examples | NEEDS_REVIEW | DEFERRED | SQ-03/11/12: missing scope และ mixed taxonomy; no answer-key decision for named-law classification until verified | [S34], [S35], [S37]; [T] T@00:47:41, T@00:48:26; O14 restricted |

### U23 — Frameworks (K029)

**Definition/examples:** structured approach to build program, identify gaps, manage risk, improve maturity/consistency; names NIST CSF, ISO/IEC 27001, CIS Controls. ไม่มี functions/catalog/version ที่สอน **Comparison [AI inference]:** program structure ไม่ใช่ task instructions

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C056 — Structured program approach vs task-level instructions | HIGH | ACCEPTED | เลือก function/level of artifact; ไม่วัด catalog-name taxonomy ที่ยังขัดกัน | [S38], [S42]; [T] T@00:49:10, T@00:49:52; O14 |
| D1-C057 — All listed examples are same artifact type / detailed NIST/ISO/CIS catalog knowledge | NEEDS_REVIEW | DEFERRED | SQ-12: ISO/IEC 27001 is “standard” on S44; detailed catalog content absent | [S38], [S44]; [T] T@00:49:52; O14 restricted |

### U24 — Guidelines (K030)

**Definition/examples:** recommended, **generally** advisory, flexible/adaptable; recommendations for passwords/configuration/software development/sensitive information. **Misunderstanding [AI inference]:** generally ไม่ใช่ proof ว่าองค์กรไม่มีทางกำหนดข้อบังคับใดในเอกสารที่ตั้งชื่อ Guideline

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C058 — Recommended guidance vs specified mandatory requirement | HIGH | ACCEPTED | ใช้ stated function/conditions ไม่อนุมาน force of every document จาก title อย่างเดียว | [S39], [S41], [S46]; [T] T@00:49:52, T@00:50:36; O14 |

### U25 — Policy → Standard → Procedure → shared example (K031–033)

**Instructor order/definitions:** Policy = high-level management expectations/direction; Standard = specific mandatory specifications/required level implementing policy; Procedure = detailed step-by-step HOW. **Shared source example:** strong-password policy → minimum length/complexity/MFA requirements → open portal/select user/reset/verify/document. ไม่มี actual required password length ใน lecture

**Exam language:** “WHAT must be done”, “How do we do it?”; reinforce in U28 **Misunderstanding [AI inference]:** mandatory technical specs ไม่เท่ากับ government law; HOW definition ไม่ยืนยัน optional status

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C059 — Policy function: management-level direction | HIGH | ACCEPTED | ใช้ role/granularity ใน shared source example ไม่สร้างคำถามจำคำว่า high-level อย่างเดียว | [S40], [S43]; [T] T@00:51:14, T@00:53:23; O14 |
| D1-C060 — Standard function: mandatory implementation specification | HIGH | ACCEPTED | Reason from what the artifact specifies ไม่เติมค่า minimum length | [S41], [S43]; [T] T@00:51:53, T@00:52:38; O14 |
| D1-C061 — Procedure function: steps for carrying out task | HIGH | ACCEPTED | แยก execution sequence จาก direction/requirement โดยไม่ตัดสิน optional/mandatory status | [S42], [S43]; [T] T@00:52:38, T@00:53:23; O14 |
| D1-C062 — Procedures always optional / unstated numeric password requirements | NEEDS_REVIEW | DEFERRED | SQ-05: T says optional แต่ slides ไม่รองรับ; absent numbers ห้ามเติมจากความจำ | [S42], [S43], [S46]; [T] T@00:56:16; O14 restricted |

### U26 — ISO, ISO/IEC 27001 and ISMS (K034)

**Actual source:** International Organization for Standardization develops standards; ISO/IEC 27001 for establishing/implementing/maintaining/improving ISMS through risks/controls/policies/processes/management. ใช้ spelling/number จาก S44 ไม่แก้ transcript “101” **Misunderstanding [AI inference]:** organization vs standard vs management system ไม่ใช่ชื่อสามแบบของสิ่งเดียว

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C063 — Organization/standard/system relationships and continual improvement purpose | MEDIUM | SUPPORTING | ใช้เป็นบริบท O13/O14 ไม่จัด acronym/full-number recall เป็น high-value item | [S44]; [T] T@00:53:23, T@00:54:06; O13/O14 support |
| D1-C064 — Resolve ISO framework/standard taxonomy or supply edition/certification details | NEEDS_REVIEW | DEFERRED | SQ-03/12: source representations ต่างกัน รายละเอียดที่ไม่สอนไม่ได้เติมเอง | [S38], [S44]; [T] T@00:54:06; O14 restricted |

### U27 — CIS and CIS Controls (K035)

**Actual source:** CIS nonprofit develops best-practice resources; CIS Controls prioritized safeguards to reduce common risks/improve posture/prioritize work. ไม่มี detailed safeguard scenario/catalog; ไม่ยก name recognition ขึ้น HIGH เพียงเพราะมี dedicated slide

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C065 — CIS organization vs prioritized safeguards resource | MEDIUM | SUPPORTING | พอสำหรับ context/program purpose แต่ยังไม่พอวัด safeguard selection ละเอียด | [S45]; [T] T@00:54:55; O13/O14 support |
| D1-C066 — Full-name/count/version recall or invented CIS control cases | LOW | EXCLUDED | Name-only trivia หรือเนื้อหาที่ไม่ได้สอน ไม่สร้างรายการเพื่อเพิ่มจำนวน | [S45]; O: none |

### U28 — Exam Takeaways / Exam Tip recap

**Instructor-emphasized tips directly reviewed:** S46 repeats Law/Framework/Guideline/Policy/Standard/Procedure distinctions; S47 explicitly pairs step-by-step→Procedure, mandatory technical requirement→Standard, management high-level direction→Policy **Misunderstanding [AI inference]:** tips เป็น starting clues ไม่ใช่ permission ให้ละ context หรือจำ keyword เป็น answer key

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C067 — Instructor phrase associations | MEDIUM | SUPPORTING | เพิ่มความชัดของ C058–061 ใช้ reasoning O14 เดิม ไม่อ้าง official ISC2 patterns; SQ-05 ยังเปิด | [S46], [S47]; [T] T@00:55:38, T@00:56:16; O14 support |
| D1-C068 — Extra assessments from recap / universal keyword lookup | LOW | MERGED | Recap ไม่ใช่แนวคิดใหม่; wording variants ไม่เพิ่ม evidence of learning | [S46], [S47]; O: none |

## 1.4 — Controls: curation decisions

### U29 — Categories and types overview (K036/037 introduction)

**Source:** S48 lists Technical/Managerial/Operational/Physical; S49 lists Preventive/Deterrent/Detective/Corrective/Compensating/Directive. นิยามตามมาที่ U30/U32 จึงไม่ยก overview เป็น learning target แยก **Misunderstanding [AI inference]:** categories กับ functional types ไม่ใช่ list เดียวกัน

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C069 — Count/recite category/type labels from overview | LOW | MERGED | รวมหลักฐานกับ U30/U32 เพื่อใช้ definitions/functions ไม่เพิ่ม list-count items | [S48], [S49]; [T] T@00:57:04; O: none |

### U30 — Category definitions and examples (K036)

**Definitions:** Technical — hardware/software manage access/protect resources; Managerial/Administrative — policy/procedure/planning/assessment; Operational — day-to-day activities primarily executed by people; Physical — facilities/real-world objects

**Important source examples:** encryption/ACL/firewall in Technical; policies/vendor management/hiring/background checks/classification/training/assessments in Managerial; backup/recovery/awareness/change/configuration/media protection in Operational; guards/mantraps/fences/lights/motion detectors/dogs/cameras/alarms/laptop locks in Physical. เก็บ laptop lock physical ต่างจาก screen lock ตาม lecture **Misunderstanding [AI inference]:** training ที่พบหลายหมวดไม่ถูกแก้ให้เหลือหมวดเดียว

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C070 — Reason from implementation/organizational role, separate from functional type | HIGH | ACCEPTED | ใช้ stated mechanism/activity กับ category definition; ยอมรับ overlaps ไม่ทำ exhaustive device lookup | [S50], [S51], [S55]; [T] T@00:57:54, T@00:58:31, T@00:59:08; O15 |
| D1-C071 — Device/activity lists and physical-lock example | MEDIUM | SUPPORTING | Examples ช่วยขยาย vocabulary ไม่สร้าง item ต่ออุปกรณ์ทุกตัว | [S51]; [T] T@00:59:47; O15 support |
| D1-C072 — Every control/training activity has one exclusive category | NEEDS_REVIEW | DEFERRED | SQ-10: lists overlap และไม่มี context ให้ enforce exclusivity; ห้าม key จากชื่อเท่านั้น | [S51], [S55]; [T] T@00:59:08; O15 restricted |

### U31 — Layers / Defense in Depth (K038)

**Source:** S52 places Physical, Operational, Technical, Managerial around Assets; handwritten “Defense in depth”; T@00:59:47/T@01:00:36 describes layered controls. **Misunderstanding [AI inference]:** diagram nesting ไม่ได้เป็น mandatory implementation order

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C073 — Complementary layers protect assets together | HIGH | ACCEPTED | วัด rationale ของหลายรูปแบบมาตรการ ไม่ขยายเป็น architecture/performance guarantee | [S52], [S55]; [T] T@00:59:47, T@01:00:36; O17 |
| D1-C074 — Memorize diagram order/colors/count as assessment | LOW | EXCLUDED | ไม่มี reasoning เพิ่มจาก graphic arrangement; ไม่แปลง diagram เป็น deployment prescription | [S52]; O: none |

### U32 — Functional types and examples (K037)

**Definitions in source order:** Deterrent discourage; Preventive prevent/stop; Detective discover/detect; Compensating “options to other existing controls”; Corrective fix vulnerabilities/mitigate damage after incident; Directive guide behavior/enforce compliance

**Important examples:** cameras/guards visible deterrence and detection; fence/firewall preventive list; audits/logs/IDS detective list; policies/personnel supervision/monitoring compensating list; backups/restores/patching/forensics corrective list; policies/standards/signage/verbal instructions/contracts directive list. S54 also places penetration testing as Preventive และ forensic analysis as Corrective — เก็บป้าย source พร้อม hold ไม่ย้ายให้ตรงความจำ

**Comparison/misunderstanding [AI inference]:** function ต่อ activity/incident สำคัญกว่าชื่อสิ่งของ; Compensating definition ยังไม่ละเอียดพอให้ตีความเป็น substitution/compliance rule เต็ม

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C075 — Deterrent vs Preventive by discourage vs stop function | HIGH | ACCEPTED | ต้องระบุ functional effect ใน context; ไม่ให้ camera/guard มี type เดียว | [S53], [S54], [S55]; [T] T@01:00:36, T@01:01:56; O16 |
| D1-C076 — Detective vs Corrective by detecting vs described after-incident remediation | HIGH | ACCEPTED | ใช้ definitions ชัด ไม่ใช้ disputed forensic label เป็น key | [S53]; [T] T@01:01:20; O16 |
| D1-C077 — Directive function: guide behavior/enforce stated policy | HIGH | ACCEPTED | แยก purpose จากชื่อ Policy/Sign อย่างเดียว; signage อาจมี function อื่นตาม context | [S53], [S54], [S56]; [T] T@01:01:20, T@01:03:13; O16 |
| D1-C078 — Compensating definition sufficiency / fixed classification of contentious examples | NEEDS_REVIEW | DEFERRED | SQ-10: penetration testing, forensics, monitoring, backup, job rotation ต้องดู context/review; ไม่ใช้ S54 เป็น complete answer dictionary | [S53], [S54], [S56]; [T] T@01:02:34, T@01:03:13; O15/O16 restricted |

### U33 — Overlapping Security Controls (K039)

**Direct examples:** camera deters unwanted entry และ records incidents; ACL example separates blocking from mainly logging for later investigation. ผู้บรรยายย้ำ implementation/specific risk/context. **Misunderstanding [AI inference]:** การจัด category และ function คนละมุมเป็น editorial synthesis จาก S50/S53/S55 ไม่อ้าง official taxonomy wording

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C079 — One control can serve multiple contextual functions | HIGH | ACCEPTED | Camera example supports combined Deterrent/Detective without unique label; ต้องมี explicit function details | [S55]; [T] T@01:03:49, T@01:04:26; O15/O16 |
| D1-C080 — Generic ACL/product automatically logs/blocks in stated manner | NEEDS_REVIEW | DEFERRED | SQ-10: source illustration ไม่พิสูจน์ behavior ของทุก implementation; อย่า assume unstated logging feature | [S55]; [T] T@01:04:26; O15/O16 restricted |

### U34 — Identification clues / instructor exam tip

**Exact clue groups from S56:** Warning/Sign/Visibility/Perception → Deterrent; Access Control/Authentication/Firewall/Encryption → Preventive; Monitoring/Audit/Logging/Alerts → Detective; Alternative/Backup/Redundancy → Compensating; Backup/Restore/Incident Response → Corrective; Policy/Procedure/Standard/Guideline → Directive

**Instructor emphasis:** exams often use hints ตาม S56/T@01:04:26–T@01:05:51 เป็นคำแนะนำผู้สอน ไม่ใช่หลักฐาน official question frequency. **Misunderstanding [AI inference]:** Backup ในสองแถว และ Sign/Signage คนละมุมแสดงว่า clue ไม่ใช่ exclusive answer rule

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C081 — Clues as reading aids, checked against actual function/context | MEDIUM | SUPPORTING | ใช้ reinforce C075–079 ไม่สร้าง phrase-matching family ใหม่; disputed Compensating usage ยัง SQ-10 | [S56], [S55]; [T] T@01:04:26, T@01:05:10, T@01:05:51; O15/O16 support |
| D1-C082 — Keyword-only answer selection or duplicate paraphrase items | LOW | EXCLUDED | ไม่มี reasoning ที่แยกจากคำใบ้ และอาจขัดกับ overlap ที่ source สอน | [S54], [S55], [S56]; O: none |

## 1.5 — Professional conduct: curation decisions

### U35 — Professional Code of Conduct (K040)

**Definition/list:** principles/expectations for professional behavior; Integrity, Confidentiality, Professionalism, Responsibility, Respect, Information Protection, Compliance. ไม่มี specific ethical-conflict case ที่ resolve ชัดในช่วงนี้ **Comparison [AI inference]:** professional Integrity context ต่างจาก data Integrity ของ U03

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C083 — Professional expectations/context for security activities | MEDIUM | SUPPORTING | Useful framing ของ Due Care/Diligence; ไม่แต่ง authority/duty details ใหม่เพื่อบังคับ scenario answer | [S57]; [T] T@01:05:51, T@01:06:33; O18 support |
| D1-C084 — Moral vocabulary/list-length recall | LOW | EXCLUDED | ไม่สร้างข้อสอบที่เดาจากคำเชิงบวก/นับ values ได้โดยไม่ใช้ security reasoning | [S57]; O: none |

### U36 — Due Care (K041)

**Definition/examples:** reasonable steps protect assets/reduce risk under circumstances; implement controls, protect data, apply patches, provide awareness training. **Misunderstanding [AI inference]:** ไม่จำเป็นต้องแปลว่า activity เกิดหลัง incident เท่านั้น

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C085 — Reasonable protective action interpreted by function/circumstances | HIGH | ACCEPTED | Compare doing protection vs evaluating adequacy using actual lecture examples; no legal negligence judgment | [S58]; [T] T@01:06:33, T@01:07:15; O18 |

### U37 — Due Diligence (K042)

**Definition/examples:** investigating/evaluating/maintaining risk awareness **before and during** activities; risk assessments, controls review, vulnerability assessments, emerging-threat monitoring. **Misunderstanding [AI inference]:** before/during prevents simple before-vs-after mnemonic; lecture “more formal” ไม่ใช่ approved differentiator

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C086 — Investigate/evaluate effectiveness and continue risk awareness | HIGH | ACCEPTED | แยก purpose ของ action จาก calendar position; ให้ overlap ได้เมื่อ case ระบุทั้งป้องกันและประเมิน | [S59], [S58]; [T] T@01:07:15, T@01:07:59; O18 |
| D1-C087 — “More formal” as sole defining rule | NEEDS_REVIEW | DEFERRED | Transcript commentary ไม่ให้ measurable criterion; ไม่ใช้เป็น answer-key separator | [T] T@01:07:15; [S59] เน้น function แทน; O18 restricted |

### U38 — ISC2 Code of Ethics / precedence commentary (K043)

**Source-supported themes:** protect society/common good/trust/infrastructure; act honorably/honestly/justly/responsibly/legally; diligent/competent service to **principals** (spelling on S60); advance/protect profession. คำแปลไทยเป็น derived summary ไม่ใช่ official translation

**Instructor exam advice requiring hold:** T@01:08:41/T@01:09:27 says word order within canon should determine precedence and prefer honor/honesty when legality differs. S60 list/text ไม่ยืนยัน interpretation นี้ **Misunderstanding [AI inference]:** list order ไม่เป็นหลักฐานพอให้ตัดสิน conflicting obligations

| Candidate | Priority | Disposition | Selection rationale / boundary | Exact evidence / opportunity |
| --- | --- | --- | --- | --- |
| D1-C088 — Canon themes and professional responsibility framing | MEDIUM | SUPPORTING | Source claims retained; ไม่เริ่ม conflict-resolution items หรือ official-text certification | [S60]; [T] T@01:07:59, T@01:08:41; O18 context only |
| D1-C089 — Ethics conflict/word-order precedence and legally-vs-honor decision | NEEDS_REVIEW | DEFERRED | SQ-09/03: block every answer decision relying on this interpretation; principles/principals variant remains visible | [S60]; [T] T@01:08:41, T@01:09:27; O20 HOLD |
| D1-C090 — Canon word-order/count recitation as standalone assessment | LOW | EXCLUDED | Trivia ไม่พิสูจน์ practical reasoning; ไม่เติม extra scenarios เพื่อสร้าง apparent coverage | [S60]; O: none |

## Unplaced artifacts and explicit coverage gap

| Record | Priority / disposition | หลักฐานที่ตรวจและเหตุผล | ผลต่อ coverage |
| --- | --- | --- | --- |
| S31 | NEEDS_REVIEW / no content extracted | `Screenshot 2026-09-19 234500.png`, 50×36 pixels, 374 bytes; เปิดดูจริง ไม่มี readable text | อยู่ระหว่าง reporting captures แต่ไม่ตั้งชื่อ subtopic ให้; SQ-01/02 |
| S36 | NEEDS_REVIEW / no content extracted | `Screenshot 2026-09-19 235026.png`, 43×22 pixels, 615 bytes; เปิดดูจริง ไม่มี readable text | อยู่ระหว่าง laws captures แต่ไม่เติมเนื้อหา; SQ-01/02 |
| D1-C091 — Non-repudiation | NEEDS_REVIEW / DEFERRED | ไม่พบ explicit teaching ใน full [T] หรือ readable slide; [existing planning](domain-1.md) มีหัวข้อนี้ | SQ-16: source gap ไม่ใช่ excluded-as-unimportant; ไม่เติมนิยามหรือ opportunity ที่อ้างว่าผู้สอนสอนแล้ว |

ไม่จัด AI/security topics ที่ไม่มีใน lecture เป็น subtopic เพิ่ม ไม่อ้างว่า Domain 1 official coverage ครบเพราะตรวจทุก supplied file แล้ว Topic order ของสิ่งที่ขาดยังไม่ทราบ

## Meaningful question opportunities — AI-derived planning only

ทุกแถวด้านล่างเป็น **แนวคิดของผู้จัดทำ** ซึ่งต่อยอดจาก lecture examples/definitions ไม่ใช่ instructor questions หรือ official ISC2 items ไม่มี stem/options/answer key และไม่มีจำนวนที่ต้องผลิต **Opportunity family ≠ one promised question.** หาก future drafts วัด decision เดิมโดยเปลี่ยนเพียงชื่อ/จำนวน/คำศัพท์ ให้ merge/discard; จะเพิ่ม candidate item ได้ก็ต่อเมื่อ reviewer อธิบาย reasoning/decision ที่ต่างกันได้จริง

`PLANNABLE` = ใช้ออกแบบในอนาคตได้ภายใน bounded accepted scope เมื่อมีคำสั่งใหม่ ไม่อนุมัติ key; `HOLD` = แสดงคุณค่าที่อาจมี แต่ยังห้ามตัดสิน answer key

| Opportunity / status | HIGH concepts served หรือ held candidates | Source seed — สิ่งที่ lecture มีจริง | AI-derived scenario opportunity / reasoning skill | Required boundaries / nonduplication |
| --- | --- | --- | --- | --- |
| O01 / PLANNABLE | C003, C005, C010, C014 | Finance access, changed bank amount, outages [S05]–[S11] | วิเคราะห์ **security objective/impact** จาก harm และ justify property ที่เกี่ยวข้อง | ใช้ function/context ไม่ใช้ term matching; SQ-13 ไม่ให้ key จาก “altering” ของ S05 เพียงอย่างเดียว; CIA examples เป็น family ร่วม |
| O02 / PLANNABLE | C005; C010/011 support only | Encrypted files, access restrictions, masking, verification examples [S06]–[S09] | เปรียบเทียบ **purpose of a measure** กับข้อมูล/การป้องกันที่ต้องการในขอบเขตนิยาม | ไม่ใช่ crypto algorithm/suitability/guarantee decision; SQ-15 และ P3-01 held; ไม่แยกชื่อ measure เป็น recall items หลายข้อ |
| O03 / PLANNABLE | C014 | Power/server/connection continuity examples [S10], [S11] | เชื่อม **failure mechanism to continuity objective** โดยระบุว่า measure ช่วยปัญหาไหน | SQ-14 ห้าม assume instant recovery/zero downtime; ไม่เพิ่ม recovery architectures ที่ไม่สอน |
| O04 / PLANNABLE | C017, C018, C019 | Login → read/send/delete permissions → logs [S12] | **Distinguish identity, permission, activity evidence** ใน action chain | เป็น AAA reasoning family เดียว ไม่ทำ acronym paraphrases; no universal sequence/Accounting=Auditing guarantee |
| O05 / PLANNABLE | C021 | Password+PIN vs password+fingerprint [S13], [S14]; T@00:25:37 | **Evaluate factor independence**, แยกจำนวน credentials จาก category independence | SQ-06: exclude Location as keyed independent factor และ resistance/ranking claims; เปลี่ยน PIN/password wording ไม่เพิ่ม reasoning |
| O06 / PLANNABLE | C025, C027 | Personal-data lifecycle และ retail/customer/cloud roles [S15]–[S17] | **Infer responsibility/role from purpose, means and on-behalf actions**, เชื่อม privacy scope | ไม่มี actual legal outcome หรือ fixed-brand role; scope-vs-role เป็น distinct reasoning ที่ต้องอธิบาย ไม่คูณตามชื่อบริษัท |
| O07 / PLANNABLE | C029 | Location/type inventory vs how-long/when-delete retention [S18] | **Determine information needed for data handling task** และแยก inventory/retention purposes | SQ-11: no seven-year requirement/deletion-right answer; role and retention evidence ไม่ถูกใช้แทนกฎหมาย |
| O08 / PLANNABLE | C036 | Database/ransomware/unpatched condition/breach examples [S21], [S22] | **Relational risk analysis:** distinguish asset, threat, weakness and impact | Source ให้ examples; การทำ causal case ใหม่เป็น AI idea ที่ต้องเขียนในอนาคต ไม่ใช่ lecture incident จริง; ไม่ทำ four label-swaps ของ case เดียว |
| O09 / PLANNABLE | C038 | Descriptive categories/judgment vs numeric loss analysis [T] T@00:35:02, T@00:35:44 | **Choose analysis approach from available evidence and intended output** | No invented matrix/precision guarantee; actual computations remain O19 HOLD |
| O10 / PLANNABLE | C034, C049 | Continuous lifecycle และ technology/software/threat changes [S20], [S29] | **Process reasoning/reassessment judgment:** connect changed conditions with continued review | วัด why/what information changes ไม่ใช่จำ ordered list; no unrelated IR sequence ที่ source ไม่สอน |
| O11 / PLANNABLE | C043, C046 | Insurance, acknowledgment, discontinue activity, firewall/anti-malware [S25]–[S28] | **Discriminate risk responses from actual action and scope**; compare options only with explicit context | SQ-07/08: no full-accountability transfer, private-LAN immunity, cost-only “best”, generic vendor-change rule; ไม่ทำ four synonym items |
| O12 / PLANNABLE | C050 | Risk status/mitigation/impact to stakeholders [S30], [S32] | **Evaluate relevance/completeness of risk communication** for stated decision need | ไม่มี metrics/reporting frameworks ที่ไม่ได้สอน; S30/S32 ไม่ใช่สอง opportunities |
| O13 / PLANNABLE | C052 | Governance supports business/legal/policy/risk goals [S33] | **Distinguish oversight/alignment from implementation**, using specified organizational function | Scenario design เป็น AI derivation ไม่ใช่ actual lecture case; no invented CISO hierarchy or authority |
| O14 / PLANNABLE | C053, C056, C058, C059, C060, C061 | Definitions และ shared password policy/standard/procedure example [S34], [S38]–[S43], [S47] | **Determine artifact purpose/granularity/authority** from what it does; compare direction, required specification, steps, advice, structure | SQ-05/11/12: no optional status/numeric password/legal taxonomy keys; source tip aids interpretation only; avoid one paraphrase item per phrase |
| O15 / PLANNABLE | C070, C079 | Category tables และ camera multiple functions [S50], [S51], [S55] | **Separate implementation/category view from contextual function**, allow several justified functions | SQ-10: no exclusive training category/device lookup or assumed generic ACL logging |
| O16 / PLANNABLE | C075, C076, C077, C079 | Function verbs and camera example [S53], [S55] | **Identify intended effect/phase and explain overlap**: discourage, stop, detect, correct, direct | Compensating/detail-example judgments remain held; camera may be Deterrent and Detective simultaneously; one label per device forbidden |
| O17 / PLANNABLE | C073 | Layer diagram รอบ Assets [S52]; controls work together [S55] | **Explain rationale of complementary layers** over single-label memorization | ไม่อ้างว่า graphic nesting คือ order ที่ต้อง deploy หรือมี guaranteed failure tolerance |
| O18 / PLANNABLE | C085, C086 | Patching/protective actions vs assessments/reviews/monitoring [S58], [S59] | **Distinguish reasonable protective action from evaluating adequacy**, preserve before-and-during scope | ไม่ตัดสินจากก่อน/หลังอย่างเดียว; allow dual purpose if context supports; no legal negligence or canon conflict keys |
| O19 / HOLD | C041, C042; C040 support | EF/SLE/ARO/ALE definitions/examples [S23], [S24] | Potential **dimensional/financial-loss reasoning** หลัง verification เท่านั้น | SQ-04: verify formulas, labels, 0.2 vs 2 and separate inputs; ไม่มี new worked problem/answer key ในแผน |
| O20 / HOLD | C089; C088 support | Canon list กับ conflicting precedence commentary [S60]; T@01:08:41, T@01:09:27 | Potential **ethical-obligation reasoning** ถ้ามี authoritative interpretation/context เพิ่ม | SQ-09: ห้ามใช้ลำดับคำเป็น decision rule; ไม่สร้าง conflict case เพื่อให้ดูว่ามี source support ครบ |

## Phase 2 issue carry-forward and answer-key holds

Issue IDs ต่อไปนี้ตรงกับ [Phase 2 quality report][QUALITY] ทุกข้อยัง **OPEN** ไม่ได้ปิดด้วย Phase 3 curation ตารางนี้เพิ่มผลต่อ selection และเงื่อนไขปลด hold เพื่อให้ผู้เขียนต่อไม่ต้องเดา การปลด hold ต้องมี reviewer, dated evidence/source locator, ขอบเขต claim ที่ตรวจ และเหตุผลที่บันทึกได้ ไม่เพียงเปลี่ยนป้าย priority หรือกล่าวว่า “AI verified”

| Open issue | Affected scope / candidate decisions | Answer-key block and release requirement |
| --- | --- | --- |
| SQ-01 — Unreadable | S31/S36; U20/U22 artifact records | ห้าม key จาก unreadable content; ต้องมี readable replacement/original recording แล้ว inspect ใหม่ หรือคงเป็น gap |
| SQ-02 — Order/crops | U00–U38 ordering; C013/026/037/048/051/068/069 merges | ห้าม key ที่พึ่ง original page order/missing crop text; ต้องมี deck/recording evidence ก่อนอ้าง page completeness; merged repeats ไม่กลับมาเป็น extra items |
| SQ-03 — Transcript artifacts | C010/012/036/054/064/089 and proper terminology | ห้ามอ้าง altered/unpaged/HIPPA/ISO101/principles ว่าถูกยืนยันแล้ว; clear slide text ถูก cite ตามภาพอย่างเปิดเผย แต่ disputed wording ไม่เป็น key until reviewer logs resolution |
| SQ-04 — ARO/ALE | C040/041/042; O19 | **Numeric/formula/label-based answer keys BLOCKED** จนตรวจ against authoritative reference/recording และแยก S23 vs S24 examples พร้อม record ไม่ merge decimal variant |
| SQ-05 — Procedure optional | C062; U25/U28; O14 restricted | Key เรื่อง optional/mandatory status BLOCKED; ต้องตรวจ applicability/context ของ statement; high-level/step/spec distinctions ไม่ถือเป็นการแก้ issue นี้ |
| SQ-06 — MFA | C022/023; O05 restricted | Key เรื่อง Location independent-factor status, absolute resistance, biometrics/iris ranking BLOCKED; ต้องมี precise taxonomy/assumptions verified โดย reviewer |
| SQ-07 — Risk transfer | C044; O11 restricted | Key ที่พึ่ง transferred accountability/ownership BLOCKED; ต้องแยก scope ของ financial/operational/responsibility claims พร้อม verified evidence |
| SQ-08 — Accept/Avoid overreach | C044/047; O11 restricted | Key จาก “only low”, private-LAN low risk, cost-only optimum, any vendor switch=Avoid BLOCKED; ต้องระบุ activity/risk/constraints และ verify conclusion |
| SQ-09 — Ethics precedence | C089; O20 | **All conflict/word-order precedence keys BLOCKED** จนมี authoritative interpretation และ qualified human review; transcript tip ไม่พอ |
| SQ-10 — Controls | C072/078/080; O15/O16 restricted | Key จาก fixed/exclusive class, generic ACL behavior, disputed Compensating/penetration-testing/forensic/monitoring/backup examples BLOCKED; ต้องมี actual function/implementation และ review record; context-overlap principle ไม่ปิด issue |
| SQ-11 — Privacy/legal scope | C031/033/055; O07/O14 restricted | Key เรื่อง retention period/deletion rights/GDPR scope BLOCKED; ต้องมี applicable jurisdiction/context/current authoritative source ตรวจแยก ไม่เติมเองใน phase นี้ |
| SQ-12 — Law/standard/framework taxonomy | C055/057/064; O14 restricted | Key ที่จัด named examples เป็น law/framework/standard อย่าง definitive BLOCKED; ต้อง reconcile S34/37/38/44 กับ authoritative taxonomy และ usage |
| SQ-13 — CIA boundary / go-to answer | C007; O01/O02 restricted | Key จาก “altering=Confidentiality only” หรือ “encryption always” BLOCKED; ต้องใช้ explicit objective/context และ reviewer ชี้ exact claim ที่ใช้ได้ |
| SQ-14 — Availability assumptions | C016; O03 restricted | Key ที่สมมติ backup/DR instant access/zero downtime BLOCKED; ต้องมี architecture/recovery assumptions พร้อม verified evidence |
| SQ-15 — Hash guarantees | C012; O02 restricted | Key เรื่อง MD5/SHA suitability/hash trust/authenticity guarantees BLOCKED; source algorithm names ไม่พอ ต้องมี algorithm/version/trust evidence |
| SQ-16 — Coverage gap | C091; Non-repudiation | ไม่มี source-grounded key/definition/opportunity สำหรับหัวข้อที่ขาด; รับ material เพิ่มและ map evidence ก่อน ไม่มีการเติมจากความจำ |
| SQ-17 — Exam claims | C002; U00 excluded metadata | ห้ามใช้ source-reported format/score/weights เป็น current official facts หรือปรับ production config; หากภายหลังจำเป็นต้องใช้งาน ต้อง verify official info แยก |
| SQ-18 — Provenance/translation | ทุก unit และทุก O | ไม่อ้าง official ISC2 questions, independent verification หรือ approved Thai translation; source identity/rights และ technical/bilingual review ยังไม่ครบ; ไม่มี publication ใน task นี้ |
| P3-01 — Banking assumptions (new curation flag) | C008; U02 | ห้าม key ว่า agents ทุกธนาคารเห็นแค่ last four digits/always use listed checks; ต้องมี specific system/process evidence ถ้าจะ assessment เรื่องนั้น มิฉะนั้นใช้แค่ masking example |

C020 (universal Accounting/Auditing equivalence), C039 (precision/matrix), C087 (“more formal” rule) และ unstated details ใน C062 ยัง **DEFERRED** ด้วยเหตุ insufficient support ของตัวเอง แม้ไม่ตั้ง SQ ใหม่ ต้อง verify/re-scope พร้อมหลักฐานก่อนตัดสิน key ไม่ถือว่าไม่มี SQ ID แล้วพร้อมใช้ได้

## Nonduplication, handoff and stopping point

- ไม่มี quota/target count สำหรับ Domain 1 หรือแต่ละ subtopic ตัวเลข allocation ใน staging/planning เก่าไม่ถูกนำมาใช้เป็นเป้าหมายของงานนี้
- เก็บ candidate claim หนึ่งครั้งใน home unit; repeated slide/text ผูกกลับ candidate เดิม Opportunity ที่ใช้หลาย HIGH candidates เป็น family ร่วม ไม่ต้องผลิตหนึ่ง item ต่อ candidate
- ก่อนอนุมัติ future item ให้ reviewer อธิบาย **reasoning skill, decision being tested, exact evidence, allowed assumptions, active holds และ distinction from existing items** หากต่างเพียงชื่อองค์กร/ถ้อยคำ/ตัวเลขให้ merge หรือ discard ไม่เพิ่มเพื่อความครบเชิงปริมาณ
- Source examples เป็น training examples ที่ผู้สอนให้ ส่วน O01–O20 เป็น AI-derived design directions ยังไม่มี question text; ไม่เรียกว่าข้อสอบจริง/official/คำถามที่ instructor ให้
- การคัดเนื้อหาสำหรับ planning ไม่ยืนยัน official objective completeness โดยเฉพาะ Non-repudiation gap และ unreadable captures; future item-writing authorization ยังต้องเป็นงานใหม่
- Domains 2–5 มี source count 0 ตาม manifest ไม่สร้าง curation plan/materials ให้ก่อน จะใช้ workflow เดียวกันเมื่อรับ source จริง

### Completion verification

งานนี้ตั้งใจเพิ่มไฟล์เดียว: `content/isc2-cc-2026/knowledge/domain-1-curation-plan.md` โดยเก็บ Phase 2 outputs, manifest, original/copy sources, existing knowledge/questions, schema, configs/loaders/application และ unrelated working-tree changes ไว้ทั้งหมด ใช้ baseline **354 pre-existing non-Git files** ที่เก็บก่อนเริ่ม Phase 3 เพื่อเทียบ SHA-256; ตรวจ candidate priorities/dispositions, HIGH→opportunity coverage, source links/timestamp starts, U00–U38 และ source review coverage ก่อนรายงาน completion

สถานะ editorial ของผลนี้ยังเป็น **draft / needs human review** แม้ file-integrity/coverage checks ผ่าน หยุดที่ Domain 1 content curation ไม่มีการสร้างข้อสอบหรือแก้ production bank

<!-- Source reference definitions: aliases map to original manifest records. -->
[QUALITY]: ../sources/domain-1/extracted-knowledge/source-quality-report.md
[S01]: ../sources/domain-1/slides/Screenshot%202026-09-19%20212949.png
[S02]: ../sources/domain-1/slides/Screenshot%202026-09-19%20213300.png
[S03]: ../sources/domain-1/slides/Screenshot%202026-09-19%20213632.png
[S04]: ../sources/domain-1/slides/Screenshot%202026-09-19%20213831.png
[S05]: ../sources/domain-1/slides/Screenshot%202026-09-19%20213951.png
[S06]: ../sources/domain-1/slides/Screenshot%202026-09-19%20214354.png
[S07]: ../sources/domain-1/slides/Screenshot%202026-09-19%20215019.png
[S08]: ../sources/domain-1/slides/Screenshot%202026-09-19%20215812.png
[S09]: ../sources/domain-1/slides/Screenshot%202026-09-19%20215816.png
[S10]: ../sources/domain-1/slides/Screenshot%202026-09-19%20220631.png
[S11]: ../sources/domain-1/slides/Screenshot%202026-09-19%20223016.png
[S12]: ../sources/domain-1/slides/Screenshot%202026-09-19%20223751.png
[S13]: ../sources/domain-1/slides/Screenshot%202026-09-19%20224441.png
[S14]: ../sources/domain-1/slides/Screenshot%202026-09-19%20225627.png
[S15]: ../sources/domain-1/slides/Screenshot%202026-09-19%20225921.png
[S16]: ../sources/domain-1/slides/Screenshot%202026-09-19%20225926.png
[S17]: ../sources/domain-1/slides/Screenshot%202026-09-19%20225943.png
[S18]: ../sources/domain-1/slides/Screenshot%202026-09-19%20231044.png
[S19]: ../sources/domain-1/slides/Screenshot%202026-09-19%20231055.png
[S20]: ../sources/domain-1/slides/Screenshot%202026-09-19%20231752.png
[S21]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232732.png
[S22]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232740.png
[S23]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232805.png
[S24]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232819.png
[S25]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232832.png
[S26]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232901.png
[S27]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232913.png
[S28]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232929.png
[S29]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232948.png
[S30]: ../sources/domain-1/slides/Screenshot%202026-09-19%20232959.png
[S31]: ../sources/domain-1/slides/Screenshot%202026-09-19%20234500.png
[S32]: ../sources/domain-1/slides/Screenshot%202026-09-19%20234513.png
[S33]: ../sources/domain-1/slides/Screenshot%202026-09-19%20234554.png
[S34]: ../sources/domain-1/slides/Screenshot%202026-09-19%20234647.png
[S35]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235021.png
[S36]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235026.png
[S37]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235030.png
[S38]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235324.png
[S39]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235339.png
[S40]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235649.png
[S41]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235907.png
[S42]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235938.png
[S43]: ../sources/domain-1/slides/Screenshot%202026-09-19%20235943.png
[S44]: ../sources/domain-1/slides/Screenshot%202026-09-20%20000914.png
[S45]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001051.png
[S46]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001103.png
[S47]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001417.png
[S48]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001425.png
[S49]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001435.png
[S50]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001509.png
[S51]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001709.png
[S52]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001717.png
[S53]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001901.png
[S54]: ../sources/domain-1/slides/Screenshot%202026-09-20%20001921.png
[S55]: ../sources/domain-1/slides/Screenshot%202026-09-20%20002108.png
[S56]: ../sources/domain-1/slides/Screenshot%202026-09-20%20002536.png
[S57]: ../sources/domain-1/slides/Screenshot%202026-09-20%20002700.png
[S58]: ../sources/domain-1/slides/Screenshot%202026-09-20%20002816.png
[S59]: ../sources/domain-1/slides/Screenshot%202026-09-20%20003207.png
[S60]: ../sources/domain-1/slides/Screenshot%202026-09-20%20003325.png
[T]: ../sources/domain-1/transcripts/Script%20-%20DOMAIN%201.txt
