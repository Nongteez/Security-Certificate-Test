# Domain 1 — complete TH/EN content audit

Date: 2026-10-28. Scope: **all 12production lessons /101 slide pairs**, including titles, lead/body/tables, structured visual labels, examples, detailed explanations, choices and every feedback branch. Production is read-only; the text below is proposed remediation, not changed content. Verdict: **Requires Targeted Remediation** with the [main academic audit](domain-1-final-academic-audit.md).

The manual paired review found **two material qualification/meaning issues** (D1-F02 High, D1-F06 Medium) and **one minor omission** (D1-F07 Low). These are part of the same nine findings, not three additional issues. F03–F05 are shared academic problems in both versions; F08 is shared stale course-status copy. Proposed paired replacements are supplied so technical fixes do not introduce a new translation mismatch. F01 is absent/insufficient application teaching, not an existing mistranslation.

The other reviewed translations generally preserve conclusions, causal reasoning, authority, uncertainty and limitations. No absent/empty EN/TH field was detected in **1,686 paired objects** (including lesson metadata and structured content). Presence checks alone do not establish quality; actual complete text was read. English application controls and English technical anchors in Thai are intentional. This assistant review does not claim formal human or native-Thai editorial sign-off.

## Review ledger

Each lesson row represents all its slide IDs in the [complete production ledger](domain-1-final-academic-audit.md#production-inventory-and-complete-slide-ledger), not a sample. “No new material mismatch” is a bounded review result, not a guarantee of stylistic perfection.

| Lesson | Pairs / full explanations | Feedback inspected | Technical equivalence / terminology result |
|---|---|---|---|
| L01 CIA | 8/8 | Three verdict/reason paths and shared analysis | F02 stronger Thai proof, F06 absolute responsibility, F07 omitted testing. F03–F05 shared academic qualifications. Current hardcoded canvas is sometimes more accurate than JSON reading/Info. |
| L02 AAA/MFA | 7/7 | Reasoning hidden/shown | Claim/proof/permission/activity distinctions preserved; knowledge/possession/inherence retained. Awkward double-negative in the Thai biometric caveat remains intelligible and was not inflated into a material finding. |
| L03 Evidence | 6/6 | Unchanged/altered illustration | Signing versus verification, key custody, time, attribution and legal limits match. “ลายเซ็น” is used with explicit cryptographic explanation; not confused with a pasted handwritten mark. |
| L04 Privacy | 8/8 | AI-reuse reasoning hidden/shown | Identifiable/pseudonymized/anonymous, actual roles, minimum purpose, retention and conditional erasure preserve qualifications. Legal terminology is bounded to applicable rules. |
| L05 Risk foundations | 8/8 | Before/after evidence | Threat/source/event, vulnerability and consequence remain distinct. Communication runs throughout in both versions; unknown is not silently low/zero. |
| L06 Assessment | 8/8 | ARO2 and4, computed results | EF versus event probability, SLE/event, ARO/year and ALE/year agree; two-per-month→24/year and uncertainty reasoning preserved. |
| L07 Response | 10/10 | Three responses | Sharing costs versus preventing events, informed authority, inherent/residual, limits and annual benefit agree. No extra legal waiver appears in Thai. |
| L08 Governance | 9/9 | Three intake actions | Governing/managing, duty sources, GDPR/HIPAA/PCI boundaries and compliance/security distinction agree. Accountability's organizational sense is explained rather than equated with a log. |
| L09 Documents | 10/10 | All4classifications | Required/advisory distinction, internal/external standards, verify-before-reset and CSF/ISMS/CIS relationships agree. F08 affects delivery-status prose, not translation meaning. |
| L10 Categories | 8/8 | All3categories | Mechanism versus function, ticket/human review, electronic/physical door and taxonomy reconciliation agree. English anchor terms avoid inventing a fourth official category. |
| L11 Functions | 9/9 | All3camera contexts | Corrective/recovery overlap, equivalent/comparable protection and combined detective/preventive intervention agree. Multiple valid functions remain permitted by context. |
| L12 Conduct | 10/10 | All3reporting responses | Care/diligence overlap, service to principals, four canon substance, honest/safe escalation and AI-report responsibility agree. Principals means the served employer/client relationship, not every person issuing an instruction. |
| **Total** | **101/101** | **32 substantive states/language;64 TH/EN visits in Node fixture** | Full content accounted for; no production edits. |

Info uses reading renderers over the same blocks/structured semantic conversion; L01 intro is separately included. The audit checked both routes and their content, including the deliberately shorter custom CIA canvas and full explanations. In the source/fixture check, every101 slides rendered in both languages in presentation and reading modes, and all 101explanations appeared in Info in each language. This is not a claim of new browser typography or screen-reader testing.

## Exact paired replacements for confirmed issues

Locations refer to production JSON arrays, zero-based, using the stable IDs. See the main finding for severity rationale and primary reference. Proposed wording may be fitted editorially later only if the technical qualifications remain equivalent.

### D1-F02 — High — hash evidence versus proof

L01 `slide-04-integrity`, `blocks[2].items[0]`. Current EN calls checksums “unique”; TH adds “เพื่อพิสูจน์ว่าข้อมูลไม่มีการเปลี่ยนแปลง”. A bare digest does not prove origin or absolute uniqueness, and a comparison needs a trusted reference. [FIPS180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), introductory explanation; B§2.2 expressly mentions a trusted hash.

Replace the whole paired item:

**EN:** “Cryptographic hashes (e.g., SHA-256): compare a digest with a protected, trusted reference to help detect changes. A matching digest is not absolute proof that data is unchanged or that a particular person created it; protect the reference and verification process.”

**TH:** “ฟังก์ชันแฮชทางรหัสลับ (เช่น SHA-256): เปรียบเทียบค่าแฮชกับค่าอ้างอิงที่เชื่อถือได้และได้รับการปกป้อง เพื่อช่วยตรวจพบการเปลี่ยนแปลง ค่าแฮชที่ตรงกันไม่ใช่หลักฐานเด็ดขาดว่าข้อมูลไม่เปลี่ยนหรือบุคคลใดเป็นผู้สร้าง ต้องปกป้องทั้งค่าอ้างอิงและกระบวนการตรวจสอบ”

If the compact integrity footer is revised, use **EN:** “SHA-256 · compare with a trusted digest”; **TH:** “SHA-256 · เทียบค่าแฮชที่เชื่อถือได้”. Do not imply that an attacker-controlled reference is authenticated.

### D1-F06 — Medium — signature evidence versus absolute responsibility

L01 `slide-04-integrity`, `blocks[2].items[1]`. Current TH “ไม่สามารถปฏิเสธความรับผิดชอบ” overstates an evidence property as unavoidable liability. The English shorthand is also best qualified to match L03. [FIPS186-5](https://csrc.nist.gov/pubs/fips/186-5/final); B§4.1; L03 slides3/5.

Replace the whole paired item:

**EN:** “Digital signatures support verification of signed-data integrity and origin, and can support non-repudiation when identity-to-key binding, private-key protection and supporting evidence are trustworthy. A signature alone does not establish the human actor, intent or a guaranteed legal outcome.”

**TH:** “ลายมือชื่อดิจิทัลช่วยตรวจสอบความถูกต้องครบถ้วนและแหล่งที่มาของข้อมูลที่ลงนาม และสนับสนุน Non-repudiation เมื่อการผูกตัวตนกับกุญแจ การปกป้องกุญแจส่วนตัว และหลักฐานประกอบเชื่อถือได้ ลายมือชื่อเพียงอย่างเดียวไม่ชี้ขาดบุคคลผู้กระทำ เจตนา หรือรับประกันผลทางกฎหมาย”

### D1-F07 — Low — missing backup-test qualifier

L01 `slide-05-availability`, `blocks[1].items[2]`. English specifies “Tested off-site backups”; Thai omits testing. L11's `slide-04-corrective-and-recovery` explains why restoration requires validation. Restore the qualification without presenting backups as continuous failover.

**EN:** “Disaster Recovery & Defense: tested off-site backups, alternate data centers (hot/warm sites), and DDoS traffic mitigation scrubbing centers.”

**TH:** “การกู้คืนระบบและการป้องกัน: ข้อมูลสำรองนอกสถานที่ที่ทดสอบการกู้คืนแล้ว ศูนย์ข้อมูลสำรองแบบ Hot/Warm site และศูนย์กรองทราฟฟิกเพื่อลดผลกระทบจาก DDoS”

## Paired wording for shared academic corrections

These do not increase the bilingual-finding count. They remedy the same shared conceptual problem identified in the main register.

### D1-F03 — Medium — secrecy-only claim

L01 `slide-08-takeaways`, `blocks[1].rows[0][3]`.

**EN:** “Encryption alone does not stop deletion; authenticated encryption can also detect unauthorized changes.”

**TH:** “การเข้ารหัสเพียงอย่างเดียวไม่หยุดการลบข้อมูล ส่วน Authenticated encryption ช่วยตรวจพบการแก้ไขโดยไม่ได้รับอนุญาตได้ด้วย”

Reference: [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final). Retain the existing narrower presentation recap; do not introduce algorithm details merely to fix one absolute phrase.

### D1-F04 — Medium — modification versus exclusive CIA harm

L01 `slide-04-integrity`, replace `blocks[1].text`:

**EN:** “Unauthorized alteration directly harms integrity. The same event can also disrupt availability or accompany unauthorized disclosure; identify the specific act or consequence the question describes.”

**TH:** “การแก้ไขข้อมูลโดยไม่ได้รับอนุญาตกระทบ Integrity โดยตรง เหตุเดียวกันอาจทำให้ Availability เสียหายหรือเกิดร่วมกับการเปิดเผยข้อมูลโดยไม่มีสิทธิ์ได้ ให้พิจารณาการกระทำหรือผลกระทบเฉพาะที่โจทย์กล่าวถึง”

L01 `slide-08-takeaways`, `blocks[1].rows[1][3]`:

**EN:** “Alteration directly harms integrity; assess any additional CIA effects from the stated facts.”

**TH:** “การดัดแปลงกระทบ Integrity โดยตรง ส่วนผลต่อ CIA ด้านอื่นต้องพิจารณาจากข้อเท็จจริงที่ระบุ”

Reference: [FIPS199 §3](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf); L01's own compound-incident and current recap explanation. The original “strictly” shortcut should not be retained elsewhere after the targeted edit.

### D1-F05 — Medium — insider confidentiality boundary

L01 `slide-07-scenario-reflection`, `visual.options[0].reason`:

**EN:** “The facts establish falsification, not unauthorized disclosure. Insiders can also breach confidentiality.”

**TH:** “ข้อเท็จจริงนี้ยืนยันการปลอมข้อมูล ไม่ได้ระบุการเปิดเผยโดยไม่มีสิทธิ์ คนภายในก็ละเมิดความลับได้”

This concise replacement preserves the current structured reason capacity, the correct Integrity option and the scenario's limits. Do not insert a new fact that internal disclosure did occur. References: FIPS199 §3; A§1; B§2.1; production intern and privileged-admin scenarios.

### D1-F08 — Low — learner pointers instead of development status

L09 `slide-10-connect-and-review`, replace only the final development-status sentence:

**EN:** “Control categories and functions are taught in Lessons 10–11; professional conduct and ethics follow in Lesson 12.”

**TH:** “บท 10–11 สอนประเภทและหน้าที่ของ Controls ส่วนบท 12 สอนความประพฤติวิชาชีพและจริยธรรม”

For L10 slide8's footer:

**EN:** “Continue with Lesson 11 to analyze control functions in context.”

**TH:** “เรียนต่อบท 11 เพื่อวิเคราะห์หน้าที่ของ Controls ตามบริบท”

For related L10 full explanations, replace claims that L11 is still “planned” with the same factual learner pointer in context. Do not rewrite historical reports or imply all lessons were present at their original delivery dates. Catalog revision12 is the evidence for the current state.

## F01 proposed bilingual application text

These are **new instructional suggestions to close a coverage gap**, not fixes to purported existing mistranslations. They intentionally reuse foundational principles rather than introduce another objective or a full AI-security course. Final placement/fit is a later authorized implementation decision.

**Integrity / poisoning — EN:** “An attacker changes labels in an AI training dataset. The model may learn misleading relationships and produce unreliable results: this is an integrity risk, even if the service stays online. Restrict and review dataset changes, preserve provenance and compare against trusted versions. A matching hash does not prove that the original training data was accurate or appropriate.”

**TH:** “ผู้โจมตีเปลี่ยนป้ายกำกับในชุดข้อมูลฝึก AI โมเดลอาจเรียนรู้ความสัมพันธ์ที่บิดเบือนและให้ผลไม่น่าเชื่อถือ นี่คือความเสี่ยงต่อ Integrity แม้บริการยังออนไลน์ ควรจำกัดและทบทวนการเปลี่ยนชุดข้อมูล เก็บประวัติแหล่งที่มา และเทียบกับฉบับที่เชื่อถือได้ ค่าแฮชที่ตรงกันไม่ได้พิสูจน์ว่าข้อมูลฝึกต้นฉบับถูกต้องหรือเหมาะสม”

**Automated actions / evidence — EN:** “An AI assistant uses a registered service identity to update a booking. Authenticate its credential, authorize only permitted actions, and protect records of the identity, action, target, time and result. If the update is disputed, evaluate the signed data and key/identity evidence where available. A service log or valid signature alone does not prove which human intended the action.”

**TH:** “AI assistant ใช้ตัวตนบริการที่ลงทะเบียนเพื่อแก้ไขการจอง ต้องตรวจหลักฐานยืนยันตัวตน อนุญาตเฉพาะการกระทำในขอบเขต และปกป้องบันทึกตัวตน การกระทำ เป้าหมาย เวลา และผลลัพธ์ หากมีข้อโต้แย้ง ให้ประเมินข้อมูลที่ลงนามพร้อมหลักฐานกุญแจและตัวตนเมื่อมี Log ของบริการหรือลายมือชื่อที่ตรวจผ่านเพียงอย่างเดียวไม่พิสูจน์ว่ามนุษย์คนใดตั้งใจกระทำนั้น”

**Control mix / adoption — EN:** “Before approving an AI service, identify the data, likely harm and applicable duties. Use suitable technical restrictions, administrative approval and review, and physical or provider safeguards for the systems holding the data. Check the evidence, limits and potentially unfair outcomes, record the authorized decision within organizational risk boundaries, and review changes. No single control or human review guarantees safety or fairness.”

**TH:** “ก่อนอนุมัติบริการ AI ให้ระบุข้อมูล ผลเสียที่อาจเกิด และหน้าที่ที่ใช้บังคับ ใช้ข้อจำกัดทางเทคนิค การอนุมัติและทบทวนเชิง Administrative และมาตรการทางกายภาพหรือของผู้ให้บริการสำหรับระบบที่เก็บข้อมูล ตรวจหลักฐาน ข้อจำกัด และผลที่อาจไม่เป็นธรรม บันทึกการตัดสินใจตามอำนาจภายในขอบเขต Risk ขององค์กรและทบทวนเมื่อเปลี่ยน ไม่มี Control เดียวหรือการตรวจโดยคนที่รับประกันความปลอดภัยหรือความเป็นธรรมได้”

Scope support: official ISC2 Domain1 AI guidance; existing L02/L03/L07/L10/L12 reasoning. The poisoning scenario is an authored illustration, not an official exam question. More specialized model poisoning/AI defense claims would require further primary support if later proposed; none is asserted here.

## Cross-lesson terminology decisions

| Term | Consistent intended meaning | Audit decision |
|---|---|---|
| Confidentiality / privacy | Authorization-limited access/disclosure versus appropriate processing of personal data | Keep separate. “ความลับ” and “ความเป็นส่วนตัว” are contextual anchors, not interchangeable labels. |
| Integrity | Data correctness/completeness and protection against improper change; professional integrity means ethical honesty | Existing contexts generally distinguish them. Do not force one Thai noun into both contexts. |
| Identification / authentication / authorization | Claim identity / verify evidence / decide permission | Preserve English anchors and L02 distinctions; no new material mismatch found. |
| Accounting / auditing / accountability | Record activity / examine records / answer for assigned actions or decisions | L02/L03/L08 explain context; do not replace all with the same word “ตรวจสอบ”. |
| Non-repudiation | Verifiable later evidence with conditions, not inability to dispute human/legal responsibility | F06 is the required alignment. |
| Risk / threat / vulnerability / impact | Scenario-based potential harm / source or event / weakness / consequence | L05 differentiates their roles; no correction needed merely because Thai retains English terms. |
| SLE / ARO / ALE | Loss per event / events per year / loss per year | L06 and dynamic output agree. Thai “ครั้ง” and “เหตุการณ์” preserve the unit here. |
| Category / function | Implementation mechanism versus effect in context | L10–11 agree and reconcile managerial/operational labels; not official versus unofficial correctness by word alone. |
| Due care / due diligence | Reasonable protection and careful inquiry/review, overlapping in practice | L12 provides full explanations; English cues remain alongside Thai rather than false one-word equivalence. |
| Principals | Employer/client owed professional service | L12 full explanation removes the ambiguity of the short “ผู้รับบริการ” label; no confirmed material omission. |

## Acceptance and limits

Recheck all replacements in their actual JSON paths, semantic reading/Info conversion and separate CIA hardcoded presentation copy. Maintain structured language budgets and the supported answers. Require paired reviewer reasoning about the same scenarios, not just equal string counts. Check all affected diagram/feedback branches and only the changed desktop compositions during later remediation; a full101-slide screenshot repeat is not inherently necessary.

No broad Thai style rewrite is recommended. The review did not establish a need for new translation standards, new storage/language modes, mobile QA or an additional lesson. Human subject-matter/native-Thai acceptance remains a separate review. This report provides exact material replacements and preserves all production evidence; do not implement them until authorized.
