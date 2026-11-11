# ISC2 CC 2026 — academic repair of the existing 157 questions

**READY FOR HUMAN ACADEMIC REVIEW — EXPANSION NOT AUTHORIZED.**

Date: 2026-11-06 (Asia/Bangkok). This report completes the interrupted repair task. The resumed work inspected existing changes/evidence and reran validation; **it did not rerun `prepare-repairs.py` or `apply-repairs.py` and did not regenerate or reapply bank content**.

## Repair summary and scope

- 157 records inspected structurally and compared with the original snapshot; 46 previously flagged records received repair/disposition review. This is not a claim of a fresh, independent academic acceptance review of all 157.
- **28 records repaired**, including Q588–Q591 and the exact six additional distractor cases: **596, 597, 599, 601, 603, 611**.
- **4 substantive questions deferred without edits:** 619, 629, 630, 637. Fourteen other audit-flagged records retained because their outstanding concerns are style/duplication, contextual terminology or an unproven overclaim; dispositions appear below.
- **129 records unchanged** by both raw source-record and canonical record hash, including all four deferred records. All 157 IDs, keys, EN/TH option texts and order, question order and domain assignments remain unchanged. Domain totals remain **24 / 39 / 23 / 33 / 38**.
- No new questions, schema fields, UI, engine, configuration, scoring, timer, navigation, persistence, vocabulary, learning slides, academic sources or legacy-bank edits. The previous audit/authoring/expansion reports are preserved.

Repaired IDs: **588, 589, 590, 591, 592, 595, 596, 597, 599, 600, 601, 603, 611, 612, 613, 614, 616, 618, 625, 626, 627, 628, 633, 636, 638, 639, 645, 1018**.

Most repairs are explanation-only. Three minimal stem corrections are documented: Q603 Thai restores the English write-once backup property; Q611 replaces the demonstrably incorrect accredited-standard terminology with recognized-standard terminology in EN/TH; Q1018 Thai restores the English MOST appropriate qualifier. No keyed option was edited.

## Method and review independence

Original files/content/hashes were recorded before editing. A key-hidden worksheet was assessed before rereading stored keys; all ten selections agreed. **The same agent had previously seen those keys in the audit. This is not an independent blind solve or independent human review.** The saved worksheet and reasoning make that limitation explicit.

English reasoning was checked against the actual scenario/options and primary/local sources, then Thai stems, options and rationale meaning were reviewed separately for qualifiers, negation, authority, timing and scope. This is a bilingual semantic desk review by the same agent, not merely field-population validation and not qualified independent native-Thai acceptance. Human academic and bilingual acceptance remains open. The new text does not add clues to the question options; explanations remain available only under the existing disclosure rules.

The plan and immutable before/after field proposals are retained in `artifacts/qa/question-bank-academic-repair/change-proposals.json`. Application used 79 localized field-value spans in three files; it did not serialize/regenerate whole domain files. The proposal/apply scripts are historical evidence, **not instructions to run them again**.

## Academic evidence and conflicts

Official outline determines scope; technical authorities verify principles; local summaries support the teaching context. Existing explanations were not treated as authority. References were inspected during the repair task, including the pre-interruption research; resumption reused those verified references.

| Ref | Source | Relevant support / limit |
| --- | --- | --- |
| R01 | [Official ISC2 CC outline, effective September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) | Scope/objectives; does not supply a proprietary answer rule. |
| R02 | [NIST SP 800-63-4 — Authenticators](https://pages.nist.gov/800-63-4/sp800-63.html) | Different factor categories; password plus PIN remains single-factor. Strength and contextual risks matter. |
| R03 | [EDPB — Data controller or data processor](https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en) | Purposes/means and processing on instructions; not a claim about jurisdiction-specific duties in the scenario. |
| R04 | [NIST Privacy Workforce — Inventory and Mapping](https://www.nist.gov/document/2021-12-08-pwwg-slide-deck) | ID.IM-P2/P6/P7/P8: owners, data elements, processing environment and mapping. Supporting passage was inspected, not the entire slide deck. |
| R05 | [NIST SP 800-30 Rev.1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) | Assessment approaches §2.3.2; threat/vulnerability/impact distinctions and risk-response context. Numerical assessment need not be only monetary. |
| R06 | [NIST CSF 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf) | High-level outcomes, communication and Govern; GV.RR assigns and communicates roles/authority. |
| R09 | [ISO/IEC 27001 and ISO certification guidance](https://www.iso.org/standard/27001) | ISMS requirements standard; independent certification. Also https://committee.iso.org/certification.html distinguishes accreditation of a certification body from certification. |
| R10 | [NIST SP 800-34 Rev.1](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf) | BIA §3.2, site-readiness discussion, and discussion-based exercises §3.5.3. Recovery depends on capabilities and dependencies, not labels alone. |
| R11 | [NIST SP 800-55 Vol.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf) | Meaningful measures, audience/context, average time measures and limitations of isolated counts. PDF fetch initially timed out, then the relevant passage was retrieved. |
| R12 | [NIST SP 800-61 Rev.3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf) | Defined roles and reporting/coordination procedures; RS.CO-02 follows established notification procedures. No universal end-user power-off rule. |
| L01 | Local authentication notes — `ISC2 Update 2026/Domain 1/Domain 1.md:98` | Authentication and three-factor distinction at lines 102–107; reject D1 sum location-as-fourth-factor shortcut. |
| L02 | Local privacy and inventory notes — `ISC2 Update 2026/Domain 1/D1 sum.md:323` | Privacy, subject/controller/processor, inventory (410) and retention (431). |
| L03 | Local risk notes — `ISC2 Update 2026/Domain 1/Domain 1.md:150` | Risk process and treatment; D1 sum assessment/loss-estimation sections are supporting examples, not universal definitions. |
| L04 | Local governance/document notes — `ISC2 Update 2026/Domain 1/Domain 1.md:231` | Policy/standard/procedure/guideline and governance context. |
| L05 | Local control notes — `ISC2 Update 2026/Domain 1/Domain 1.md:196` | Implementation category versus function; D1 sum:1061–1324 gives control functions including corrective restoration. |
| L06 | Local governance, continuity and metrics notes — `ISC2 Update 2026/Domain 2/D2 sum.md:67` | Frameworks; risk register (118); BC/DR (155); RTO/RPO (258); effectiveness/metrics (437–594). |
| L07 | Local incident/exercise notes — `ISC2 Update 2026/Domain 5/D5 sum.md:527` | IRP roles and response; tabletop/technical exercise distinction at 634–648. Different lifecycle models do not imply an invariant sequence. |
| L08 | Local CTI notes and original EN wording — `ISC2 Update 2026/Domain 5/D5 sum.md:436` | CTI; Q1018 original English establishes MOST appropriate qualifier for translation repair. |

Conflicts retained explicitly: local MFA notes that label location as a fourth factor are not followed; NIST supports the three-category distinction. Operational/administrative taxonomy varies, so Q601 feedback is bounded to the outline’s technical/administrative/physical classification. Course metric abbreviations do not establish a universal MTTR endpoint. Cold-site telecom descriptions vary even within SP800-34; Q619 remains held. Instructor ethics word-order shortcuts, signature-as-private-key-encryption shorthand, and universal cloud/AI guarantees are not imported into repairs. No unrelated Domain 3/4 record needed a verified terminology edit here.

## Per-question evidence and before/after changes

Every applied record retains its stored key after a scenario/options/source desk check. Q588–Q591 and the six distractor cases also have the key-hidden worksheet comparison. No proposed key change was silently applied; four broader ambiguity holds remain below. The tables give exact changed structured rationale/stem/short-form text. Flat explanations that repeat those rationales are omitted from duplicate table rows; their complete original/repaired values remain in the field-proposal JSON.

### Q588 — Domain 1 / Objective 1.1

**Verified issue:** Structured explanation describes Accounting instead of the password/PIN factor question.

**Evidence:** R01, R02, L01. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation | Multi-factor authentication (MFA) requires the presentation of two or more credentials drawn from independent factor categories: something you know (knowledge), something you have (possession), or something you are (biometrics). A password and a PIN are both knowledge-based credentials ('something you know'). Using two items from the same factor category constitutes two-step or multi-credential authentication, but not multi-factor authentication. MFA requires two distinct categories, not necessarily three. PIN entropy and token format are implementation details that do not change factor taxonomy. | Multi-factor authentication (MFA) requires the presentation of two or more credentials drawn from independent factor categories: something you know (knowledge), something you have (possession), or something you are (biometrics). A password and a PIN are both knowledge-based credentials ('something you know'). Using two items from the same factor category still constitutes single-factor authentication, not multi-factor authentication. MFA requires two distinct categories, not necessarily three. PIN entropy and token format are implementation details that do not change factor taxonomy. |
| explanation_th | ข้อ B ถูกต้อง: Multi-Factor Authentication (MFA) ต้องใช้หลักฐานที่มาจากปัจจัยที่แตกต่างกันอย่างน้อย 2 ใน 3 ปัจจัย ได้แก่ สิ่งที่คุณรู้ (Know), สิ่งที่คุณมี (Have), และสิ่งที่คุณเป็น (Are) ทั้งรหัสผ่านและรหัส PIN จัดเป็น 'สิ่งที่คุณรู้' (Knowledge factor) ทั้งคู่ จึงเป็นเพียง Two-step authentication ไม่ใช่ MFA<br>- ข้อ A ไม่ถูกต้อง: แม้ PIN 4 หลักจะสั้น แต่นั่นไม่ใช่เหตุผลทางนิยามที่ทำให้ไม่เป็น MFA<br>- ข้อ C ไม่ถูกต้อง: MFA พื้นฐานต้องการเพียง 2 ปัจจัยที่ต่างกัน (Two-factor) ไม่จำเป็นต้องถึง 3 ปัจจัยเสมอไป<br>- ข้อ D ไม่ถูกต้อง: PIN สามารถตั้งและกรอกผ่านซอฟต์แวร์ได้ ไม่จำกัดเฉพาะฮาร์ดแวร์โทเคน | ข้อ B ถูกต้อง: Multi-Factor Authentication (MFA) ต้องใช้หลักฐานที่มาจากปัจจัยที่แตกต่างกันอย่างน้อย 2 ใน 3 ปัจจัย ได้แก่ สิ่งที่คุณรู้ (Know), สิ่งที่คุณมี (Have), และสิ่งที่คุณเป็น (Are) ทั้งรหัสผ่านและรหัส PIN จัดเป็น 'สิ่งที่คุณรู้' (Knowledge factor) ทั้งคู่ จึงยังคงเป็นการพิสูจน์ตัวตนแบบปัจจัยเดียว ไม่ใช่ MFA<br>- ข้อ A ไม่ถูกต้อง: แม้ PIN 4 หลักจะสั้น แต่นั่นไม่ใช่เหตุผลทางนิยามที่ทำให้ไม่เป็น MFA<br>- ข้อ C ไม่ถูกต้อง: MFA พื้นฐานต้องการเพียง 2 ปัจจัยที่ต่างกัน (Two-factor) ไม่จำเป็นต้องถึง 3 ปัจจัยเสมอไป<br>- ข้อ D ไม่ถูกต้อง: PIN สามารถตั้งและกรอกผ่านซอฟต์แวร์ได้ ไม่จำกัดเฉพาะฮาร์ดแวร์โทเคน |
| explanation_detail.correct.en | Accounting (and auditing) is the component of the AAA model responsible for logging, tracking, recording, and monitoring user and system actions, producing audit trails that prove who performed which action and when. | The password and the PIN entered on this login screen are both knowledge factors: something you know. Two secrets of the same factor type do not meet the requirement for multiple distinct authentication factors. |
| explanation_detail.correct.th | Accounting (การบันทึกและตรวจสอบกิจกรรม) คือองค์ประกอบของ AAA ที่ทำหน้าที่บันทึกเหตุการณ์ สร้าง Audit Log เพื่อให้สามารถตรวจสอบย้อนหลังได้ว่าใคร ทำอะไร ที่ไหน เมื่อใด | รหัสผ่านและ PIN ที่กรอกบนหน้าจอล็อกอินนี้เป็นปัจจัยประเภทสิ่งที่คุณรู้ (Knowledge factor) ทั้งคู่ การใช้ความลับสองอย่างในปัจจัยประเภทเดียวกันจึงไม่ตรงตามข้อกำหนดที่ต้องใช้ปัจจัยต่างประเภทกันของ MFA |
| explanation_detail.incorrect[0].text_en | Authentication verifies the truth of a claimed identity, not post-access activity logging. | PIN strength matters to security, but its length does not change its factor category. Even a longer PIN combined only with a password would still use knowledge factors. |
| explanation_detail.incorrect[0].text_th | Authentication มีหน้าที่ตรวจสอบความถูกต้องของตัวตนตอนล็อกอิน ไม่ได้บันทึกกิจกรรมย้อนหลัง | ความแข็งแรงของ PIN มีผลต่อความปลอดภัย แต่ความยาวไม่ได้เปลี่ยนประเภทปัจจัย แม้ใช้ PIN ที่ยาวขึ้นร่วมกับรหัสผ่านเพียงอย่างเดียวก็ยังเป็นปัจจัยประเภทสิ่งที่คุณรู้ |
| explanation_detail.incorrect[1].text_en | Authorization defines what actions an authenticated user is permitted to perform. | MFA requires at least two distinct factor types, not necessarily three. The problem here is that both supplied secrets have the same type. |
| explanation_detail.incorrect[1].text_th | Authorization เป็นการกำหนดสิทธิ์การเข้าถึง ไม่ใช่การบันทึกประวัติย้อนหลัง | MFA ต้องใช้ปัจจัยต่างประเภทกันอย่างน้อยสองประเภท ไม่จำเป็นต้องครบสามประเภท ปัญหาในโจทย์คือความลับทั้งสองอย่างเป็นปัจจัยประเภทเดียวกัน |
| explanation_detail.incorrect[2].text_en | Identification provides an identity claim before authentication begins. | A PIN can be entered in software or used to activate an authenticator. It is not restricted to hardware-token entry; a PIN plus a password alone does not demonstrate possession of such a token. |
| explanation_detail.incorrect[2].text_th | Identification เป็นขั้นตอนการแสดงตนเบื้องต้นเท่านั้น | PIN สามารถกรอกผ่านซอฟต์แวร์หรือใช้ปลดล็อกสิ่งที่ใช้พิสูจน์ตัวตนได้ ไม่ได้จำกัดว่าต้องกรอกบนฮาร์ดแวร์โทเคน และ PIN ร่วมกับรหัสผ่านเพียงอย่างเดียวไม่ได้แสดงว่าผู้ใช้ครอบครองโทเคนดังกล่าว |

### Q589 — Domain 1 / Objective 1.1

**Verified issue:** Structured explanation describes non-repudiation instead of privacy roles.

**Evidence:** R01, R03, L02. **Key:** C retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.correct.en | Non-repudiation provides indisputable proof of the origin, authenticity, and integrity of data, preventing an author or sender from falsely denying having performed an action or sent a communication. Asymmetric digital signatures combined with secure timestamps achieve non-repudiation. | The cloud provider is the Data Processor in the stated arrangement because it stores and processes personal data on the retailer’s instructions. The retailer determines the processing purpose; cloud hosting alone does not make the provider the controller. |
| explanation_detail.correct.th | Non-repudiation (การไม่สามารถปฏิเสธความรับผิดได้) คือคุณสมบัติความปลอดภัยที่ให้หลักฐานที่ไม่อาจโต้แย้งได้ว่าใครเป็นผู้กระทำหรือส่งข้อมูล ทำให้ผู้กระทำไม่สามารถปฏิเสธความรับผิดชอบได้ การใช้ Digital Signature ร่วมกับ Timestamp เป็นตัวอย่างที่ชัดเจนที่สุด | ผู้ให้บริการคลาวด์เป็นผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor) ในความสัมพันธ์ตามโจทย์ เพราะจัดเก็บและประมวลผลข้อมูลตามคำสั่งของบริษัทค้าปลีก บริษัทค้าปลีกเป็นผู้กำหนดวัตถุประสงค์ การให้บริการโฮสต์บนคลาวด์เพียงอย่างเดียวไม่ได้ทำให้ผู้ให้บริการเป็นผู้ควบคุมข้อมูล |
| explanation_detail.incorrect[0].text_en | Symmetric encryption provides confidentiality, but because both parties share the exact same key, either party could have generated the ciphertext, failing to provide non-repudiation. | The Data Subjects are the individuals whose shipping and payment information is processed, rather than the hosting provider. |
| explanation_detail.incorrect[0].text_th | Symmetric encryption ใช้กุญแจลับร่วมกัน ทำให้ไม่สามารถพิสูจน์ได้ว่าฝ่ายใดเป็นผู้ส่งอย่างแท้จริง จึงไม่รองรับ Non-repudiation | Data Subject คือบุคคลที่ข้อมูลการจัดส่งและการชำระเงินของตนถูกประมวลผล ไม่ใช่ผู้ให้บริการโฮสต์ |
| explanation_detail.incorrect[1].text_en | High-availability clustering guarantees operational uptime, not message provenance or individual accountability. | A Data Controller determines the purposes and means of processing. Here the retailer directs the processing, while the provider acts on its instructions. |
| explanation_detail.incorrect[1].text_th | High-availability clustering เน้นความพร้อมใช้งาน (Availability) ไม่เกี่ยวข้องกับการพิสูจน์ตัวตนผู้ส่ง | Data Controller เป็นผู้กำหนดวัตถุประสงค์และวิธีการประมวลผล ในโจทย์บริษัทค้าปลีกเป็นผู้กำหนดการประมวลผล ส่วนผู้ให้บริการปฏิบัติตามคำสั่ง |
| explanation_detail.incorrect[2].text_en | Shared departmental accounts prevent establishing individual accountability, destroying non-repudiation. | A Data Protection Authority supervises compliance with data-protection law. The provider is supplying a processing service, not acting as that regulator. |
| explanation_detail.incorrect[2].text_th | Shared departmental accounts ทำลายหลักการ Non-repudiation โดยตรงเพราะไม่สามารถระบุตัวบุคคลผู้กระทำได้ | Data Protection Authority เป็นหน่วยงานกำกับการปฏิบัติตามกฎหมายคุ้มครองข้อมูล ผู้ให้บริการในโจทย์ให้บริการประมวลผล ไม่ได้ทำหน้าที่เป็นหน่วยงานกำกับดังกล่าว |

### Q590 — Domain 1 / Objective 1.1

**Verified issue:** Structured explanation describes threats rather than inventory; flat EN also confuses a sanitization schedule with procedures.

**Evidence:** R01, R04, L02. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.correct.en | In cybersecurity risk taxonomy, a Threat is any potential circumstance, event, or entity with the capability to exploit a vulnerability and cause harm or loss to an asset. The adversarial phishing group is the threat actor initiating the threat event. | A data inventory records the categories of information held, their storage locations and their responsible owners. Those are the facts needed for the stated data-mapping exercise. |
| explanation_detail.correct.th | Threat (ภัยคุกคาม) คือเหตุการณ์ สภาวการณ์ หรือบุคคล/กลุ่มบุคคลที่มีศักยภาพในการแสวงหาประโยชน์จากช่องโหว่เพื่อสร้างความเสียหายต่อทรัพย์สิน ในกรณีนี้กลุ่มแฮกเกอร์และแคมเปญ Phishing ถือเป็นภัยคุกคามโดยตรง | Data inventory บันทึกประเภทข้อมูลที่องค์กรมี สถานที่จัดเก็บ และเจ้าของหรือผู้รับผิดชอบข้อมูล ซึ่งตรงกับข้อมูลที่ต้องใช้ในการจัดทำแผนผังข้อมูลตามโจทย์ |
| explanation_detail.incorrect[0].text_en | A Vulnerability is an inherent weakness, flaw, or gap in security procedures or systems (such as lack of employee training). | A retention policy defines how long records are kept and when disposal is appropriate; it does not itself catalog the data, locations and owners. |
| explanation_detail.incorrect[0].text_th | Vulnerability คือจุดอ่อนหรือช่องโหว่ เช่น การที่พนักงานยังไม่ได้รับการอบรม | นโยบายการเก็บรักษาข้อมูลกำหนดว่าต้องเก็บข้อมูลนานเท่าใดและควรทำลายเมื่อใด ไม่ได้ทำหน้าที่จัดทำบัญชีประเภทข้อมูล สถานที่จัดเก็บ และเจ้าของข้อมูลโดยตรง |
| explanation_detail.incorrect[1].text_en | An Impact is the measured magnitude of harm or loss resulting from an exploited vulnerability. | A sanitization schedule sets when data or media is to be sanitized. It does not provide the requested catalog of existing datasets and their owners. |
| explanation_detail.incorrect[1].text_th | Impact คือขนาดของความเสียหายที่เกิดขึ้นหากถูกโจมตีสำเร็จ | ตารางการทำลายข้อมูลอย่างปลอดภัยกำหนดเวลาที่ต้องล้างข้อมูลหรือจัดการสื่อบันทึก ไม่ได้ให้บัญชีชุดข้อมูลที่มีอยู่และเจ้าของข้อมูลตามที่ต้องการ |
| explanation_detail.incorrect[2].text_en | Residual risk is the remaining risk after controls are implemented. | A masking standard specifies how sensitive fields are obscured for an authorized use. It does not identify every dataset, storage location and owner. |
| explanation_detail.incorrect[2].text_th | Residual risk คือความเสี่ยงที่เหลืออยู่หลังติดตั้งมาตรการควบคุมแล้ว | มาตรฐานการพรางข้อมูลกำหนดวิธีปิดบังข้อมูลอ่อนไหวเพื่อการใช้งานที่ได้รับอนุญาต ไม่ได้ระบุชุดข้อมูลทั้งหมด สถานที่จัดเก็บ และเจ้าของข้อมูล |

### Q591 — Domain 1 / Objective 1.2

**Verified issue:** Structured explanation describes a generic risk formula and unrelated exclusions rather than the displayed asset/threat/vulnerability/impact choices.

**Evidence:** R01, R05, L03. **Key:** C retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_th | ข้อ C ถูกต้อง: ช่องโหว่ (Vulnerability) คือจุดอ่อน ข้อบกพร่อง หรือความผิดพลาดในระบบ โปรแกรม หรือกระบวนการ ซึ่งสามารถถูกเจาะหรือใช้ประโยชน์โดยภัยคุกคามได้ ซอฟต์แวร์ที่ยังไม่ลงแพตช์จึงเป็นตัวอย่างที่ชัดเจนของช่องโหว่<br>- ข้อ A ไม่ถูกต้อง: ทรัพย์สิน (Asset) คือเว็บเซิร์ฟเวอร์หรือฐานข้อมูลลูกค้าที่มีมูลค่าต่อองค์กร<br>- ข้อ B ไม่ถูกต้อง: ภัยคุกคาม (Threat) คือเหตุการณ์หรือตัวกระทำที่อาจก่อให้เกิดความเสียหาย เช่น แฮกเกอร์หรือการโจมตีทางไซเบอร์<br>- ข้อ D ไม่ถูกต้อง: ผลกระทบ (Impact) คือความเสียหายหรือความสูญเสียที่เกิดขึ้นหากการโจมตีสำเร็จ เช่น ข้อมูลลูกค้าถูกขโมย | ข้อ C ถูกต้อง: ช่องโหว่ (Vulnerability) คือจุดอ่อน ข้อบกพร่อง หรือความผิดพลาดในระบบ โปรแกรม หรือกระบวนการ ซึ่งสามารถถูกเจาะหรือใช้ประโยชน์โดยภัยคุกคามได้ ข้อบกพร่องในซอฟต์แวร์ที่ยังไม่ได้แพตช์จึงเป็นตัวอย่างที่ชัดเจนของช่องโหว่<br>- ข้อ A ไม่ถูกต้อง: ทรัพย์สิน (Asset) คือเว็บเซิร์ฟเวอร์หรือฐานข้อมูลลูกค้าที่มีมูลค่าต่อองค์กร<br>- ข้อ B ไม่ถูกต้อง: ภัยคุกคาม (Threat) คือเหตุการณ์หรือตัวกระทำที่อาจก่อให้เกิดความเสียหาย เช่น แฮกเกอร์หรือการโจมตีทางไซเบอร์<br>- ข้อ D ไม่ถูกต้อง: ผลกระทบ (Impact) คือความเสียหายหรือความสูญเสียที่เกิดขึ้นหากการโจมตีสำเร็จ เช่น ข้อมูลลูกค้าถูกขโมย |
| explanation_detail.correct.en | Risk fundamentally represents the likelihood and impact of a Threat exploiting a Vulnerability to cause harm to an Asset (Risk = Threat × Vulnerability × Asset value/Impact). Without an asset to protect, a vulnerability in that asset, and a threat capable of exploiting it, risk does not exist. | The unpatched code-execution flaw is a Vulnerability: a weakness that a threat could exploit. The question asks about the flaw itself, not the asset containing it or the resulting harm. |
| explanation_detail.correct.th | Risk (ความเสี่ยง) เกิดจากจุดตัดของ 3 องค์ประกอบหลัก ได้แก่: ภัยคุกคาม (Threat) เข้ามาแสวงหาประโยชน์จาก ช่องโหว่ (Vulnerability) ที่มีอยู่ เพื่อสร้างความเสียหายต่อ ทรัพย์สิน (Asset) ขององค์กร หากขาดองค์ประกอบใดองค์ประกอบหนึ่ง ความเสี่ยงทางความปลอดภัยจะไม่เกิดขึ้น | ข้อบกพร่องที่ยังไม่ได้แพตช์และเปิดทางให้รันโค้ดได้เป็นช่องโหว่ (Vulnerability) คือจุดอ่อนที่ภัยคุกคามอาจใช้ประโยชน์ได้ โจทย์ถามถึงข้อบกพร่อง ไม่ใช่ทรัพย์สินที่มีข้อบกพร่องหรือความเสียหายที่ตามมา |
| explanation_detail.incorrect[0].text_en | Excluding threats overlooks the active source of harm. | The web server and customer database are assets of value. The software flaw is a weakness in an asset, not the asset itself. |
| explanation_detail.incorrect[0].text_th | การมองข้าม Threat ทำให้ขาดปัจจัยที่จะเข้ามาโจมตี | เว็บเซิร์ฟเวอร์และฐานข้อมูลลูกค้าเป็นทรัพย์สินที่มีคุณค่า ส่วนข้อบกพร่องของซอฟต์แวร์เป็นจุดอ่อนในทรัพย์สิน ไม่ใช่ตัวทรัพย์สินเอง |
| explanation_detail.incorrect[1].text_en | Excluding assets means there is nothing of value at risk. | The malicious actors and the potential attack are sources or events of threat. The exploitable software flaw is the vulnerability they could use. |
| explanation_detail.incorrect[1].text_th | การไม่มี Asset หมายถึงไม่มีสิ่งมีค่าใดๆ ที่ต้องปกป้อง | ผู้ไม่หวังดีและการโจมตีที่อาจเกิดขึ้นเป็นแหล่งหรือเหตุการณ์ของภัยคุกคาม ส่วนข้อบกพร่องของซอฟต์แวร์ที่ใช้โจมตีได้เป็นช่องโหว่ |
| explanation_detail.incorrect[2].text_en | Treating controls as primary components confuses safeguards with the inherent risk equation. | Impact is the harm resulting from an incident, such as disclosure or alteration of customer records. The flaw is a condition that can enable that harm. |
| explanation_detail.incorrect[2].text_th | Controls เป็นมาตรการควบคุมเพื่อลดความเสี่ยง ไม่ใช่องค์ประกอบพื้นฐานที่ก่อให้เกิดความเสี่ยง | Impact คือความเสียหายที่เกิดจากเหตุการณ์ เช่น ข้อมูลลูกค้าถูกเปิดเผยหรือแก้ไข ส่วนข้อบกพร่องเป็นสภาวะที่อาจเปิดทางให้เกิดความเสียหายนั้น |

### Q592 — Domain 1 / Objective 1.2

**Verified issue:** Quantitative assessment is incorrectly defined as requiring precise monetary valuations.

**Evidence:** R05, L03. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Qualitative risk analysis uses subjective judgment and descriptive scales rather than numerical financial metrics. | Qualitative analysis uses descriptive categories and expert judgment; quantitative analysis requires meaningful numerical estimates. |
| explanation_detail.correct.en | Qualitative Risk Analysis uses descriptive, categorical scales (such as High, Medium, Low) and expert judgment, interviews, and workshops to evaluate and prioritize risks based on relative likelihood and subjective impact. It is ideal when numerical loss history or precise financial data is unavailable. | The descriptive High/Medium/Low ratings and expert judgment make this qualitative risk analysis. Quantitative analysis uses numerical values with meaningful units and relationships; financial loss estimates are one example, not its only form. |
| explanation_detail.correct.th | Qualitative Risk Analysis (การวิเคราะห์ความเสี่ยงเชิงคุณภาพ) เป็นการประเมินความเสี่ยงโดยใช้ดุลยพินิจของผู้เชี่ยวชาญ การระดมสมอง และการจัดลำดับด้วยคำอธิบายเชิงคุณภาพ เช่น สูง/กลาง/ต่ำ โดยไม่ต้องใช้ตัวเลขทางการเงินที่แน่ชัด เหมาะกับองค์กรที่ไม่มีข้อมูลสถิติตัวเลขในอดีต | การให้ระดับเชิงพรรณนา High/Medium/Low โดยอาศัยดุลยพินิจของผู้เชี่ยวชาญเป็นการวิเคราะห์ความเสี่ยงเชิงคุณภาพ ส่วนการวิเคราะห์เชิงปริมาณใช้ค่าตัวเลขที่มีหน่วยและความสัมพันธ์ที่มีความหมาย การประมาณความสูญเสียทางการเงินเป็นเพียงตัวอย่างหนึ่ง ไม่ใช่รูปแบบเดียว |
| explanation_detail.incorrect[0].text_en | Quantitative risk analysis requires precise monetary valuations and numerical calculations (such as SLE, ARO, and ALE). | Quantitative analysis uses numerical estimates whose meaning and scale support comparison, such as loss amounts or occurrence frequencies. The supplied descriptive categories do not provide such measurements. |
| explanation_detail.incorrect[0].text_th | Quantitative risk analysis ต้องคำนวณเป็นตัวเลขทางการเงินและความถี่ทางสถิติที่แน่นอน | การวิเคราะห์เชิงปริมาณใช้ค่าประมาณตัวเลขที่มีความหมายและมาตราส่วนสำหรับเปรียบเทียบ เช่น มูลค่าความสูญเสียหรือความถี่การเกิดเหตุ ระดับเชิงพรรณนาในโจทย์ไม่ได้ให้ค่าการวัดลักษณะนั้น |

### Q595 — Domain 1 / Objective 1.2

**Verified issue:** Thai acceptance rationale adds ignoring impacts; avoidance wording should refer to the declined activity, not all organizational risk.

**Evidence:** R05, L03. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.correct.en | Risk Avoidance is the strategy of eliminating risk exposure entirely by choosing not to engage in, or by completely discontinuing, the specific activity, service, or technology that creates the risk. Choosing not to adopt or purchase the high-risk AI platform completely avoids the associated risks. | Declining to deploy this platform avoids the exposure associated with using it. This is avoidance of the specified activity, not a claim that all healthcare or privacy risks disappear. |
| explanation_detail.correct.th | Risk Avoidance (การหลีกเลี่ยงความเสี่ยง) คือการตัดสินใจไม่ทำกิจกรรม ยกเลิก หรือไม่นำเทคโนโลยีที่มีความเสี่ยงสูงนั้นเข้ามาใช้เลย เพื่อตัดโอกาสการเกิดความเสี่ยงนั้นให้หมดสิ้นไป | การไม่นำแพลตฟอร์มนี้มาใช้เป็นการหลีกเลี่ยงความเสี่ยงที่เกิดจากการใช้งานแพลตฟอร์มนั้น เป็นการหลีกเลี่ยงกิจกรรมที่ระบุ ไม่ได้หมายความว่าความเสี่ยงด้านสุขภาพหรือความเป็นส่วนตัวทั้งหมดจะหายไป |
| explanation_detail.incorrect[0].text_en | Risk mitigation would involve deploying controls (such as data sanitization filters) to use the technology safely. | Mitigation would use safeguards to reduce risk while continuing with the activity, rather than declining deployment. |
| explanation_detail.incorrect[0].text_th | Risk Mitigation คือการเดินหน้านำ AI มาใช้แต่ติดตั้งมาตรการป้องกันเพิ่มเติมเพื่อลดความเสี่ยง | Mitigation ใช้มาตรการลดความเสี่ยงโดยยังดำเนินกิจกรรมต่อ ต่างจากการตัดสินใจไม่นำระบบมาใช้ |
| explanation_detail.incorrect[2].text_en | Risk acceptance would proceed with adoption while tolerating the risks. | Acceptance would retain the identified risk through an informed decision by an authorized party. It does not mean ignoring possible impacts; the organization instead declines the activity here. |
| explanation_detail.incorrect[2].text_th | Risk Acceptance คือการยอมรับความเสี่ยงและเดินหน้าติดตั้งใช้งานโดยไม่สนผลกระทบ | Acceptance คือการคงรับความเสี่ยงที่ระบุไว้โดยผู้มีอำนาจตัดสินใจอย่างมีข้อมูล ไม่ใช่การเพิกเฉยต่อผลกระทบที่อาจเกิดขึ้น แต่ในโจทย์องค์กรเลือกไม่ดำเนินกิจกรรมนั้น |

### Q596 — Domain 1 / Objective 1.2

**Verified issue:** C/D distractor rationales are attached to different displayed choices.

**Evidence:** R06, L04. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.incorrect[1].text_en | Promising 'zero risk' is unrealistic and fundamentally misrepresents the nature of risk management. | Software versions and scan-script output may support technical investigation, but this inventory alone does not explain prioritized business impacts or investment needs to the board. |
| explanation_detail.incorrect[1].text_th | การรับประกันว่าจะไม่มีความเสี่ยงหลงเหลืออยู่เลย (Zero risk) เป็นสิ่งที่เป็นไปไม่ได้ในทางปฏิบัติ | หมายเลขเวอร์ชันและผลลัพธ์สคริปต์สแกนอาจใช้สนับสนุนการตรวจสอบทางเทคนิค แต่รายการเหล่านี้เพียงอย่างเดียวไม่ได้อธิบายผลกระทบทางธุรกิจที่จัดลำดับแล้วหรือความต้องการลงทุนต่อคณะกรรมการ |
| explanation_detail.incorrect[2].text_en | Technical configuration parameters provide operational detail rather than strategic decision support. | Budget approval cannot guarantee that every residual cyber risk becomes zero. Reporting should communicate remaining risk and the expected benefits and limits of proposed controls. |
| explanation_detail.incorrect[2].text_th | พารามิเตอร์การตั้งค่าทางเทคนิคเป็นเรื่องระดับปฏิบัติการ ไม่ใช่ระดับการตัดสินใจของบอร์ด | การอนุมัติงบประมาณไม่สามารถรับประกันว่าความเสี่ยงทางไซเบอร์ที่เหลืออยู่ทุกอย่างจะเป็นศูนย์ รายงานควรสื่อสารความเสี่ยงที่เหลือและประโยชน์รวมถึงข้อจำกัดที่คาดหวังจากมาตรการที่เสนอ |

### Q597 — Domain 1 / Objective 1.3

**Verified issue:** C refers to software development absent from the option; D incorrectly receives the zero-risk rationale.

**Evidence:** R06, L04. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.incorrect[1].text_en | Software development and deployment constitute engineering activities rather than governance. | Governance directs and oversees risk management; it cannot guarantee that a breach or outage will never occur. |
| explanation_detail.incorrect[1].text_th | การพัฒนาซอฟต์แวร์เป็นงานด้านวิศวกรรม ไม่ใช่การกำกับดูแลเชิงนโยบาย | Governance กำหนดทิศทางและกำกับการบริหารความเสี่ยง แต่ไม่สามารถรับประกันว่าจะไม่มีการละเมิดข้อมูลหรือระบบหยุดทำงานเลย |
| explanation_detail.incorrect[2].text_en | Governance cannot guarantee the complete absence of incidents, as zero risk does not exist. | Configuring firewalls and writing detection rules implement technical controls. These activities support governance decisions but are not the enterprise-level direction and oversight asked about. |
| explanation_detail.incorrect[2].text_th | Governance ไม่สามารถรับประกันว่าจะไม่มีเหตุการณ์บุกรุกเกิดขึ้นได้ 100% | การตั้งค่าไฟร์วอลล์และเขียนกฎตรวจจับเป็นการนำมาตรการทางเทคนิคไปใช้ งานเหล่านี้สนับสนุนการตัดสินใจด้าน Governance แต่ไม่ใช่การกำหนดทิศทางและกำกับดูแลระดับองค์กรที่โจทย์ถาม |

### Q599 — Domain 1 / Objective 1.3

**Verified issue:** B guideline and D policy rationales are swapped.

**Evidence:** L04. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.incorrect[0].text_en | Policies outline high-level management intent without numerical technical parameters. | A guideline gives recommended practice rather than the mandatory technical requirements explicitly specified in this document. |
| explanation_detail.incorrect[0].text_th | Policy กำหนดเพียงหลักการระดับสูงว่าต้องป้องกันข้อมูล แต่ไม่ระบุค่าตัวเลขทางเทคนิค | Guideline เป็นคำแนะนำในการปฏิบัติ ไม่ใช่ข้อกำหนดทางเทคนิคภาคบังคับที่ระบุอย่างชัดเจนในเอกสารนี้ |
| explanation_detail.incorrect[2].text_en | Guidelines offer non-mandatory recommendations and advice. | A policy states management direction and expectations. The mandatory lock interval and encryption specification are the detailed standard implementing that direction. |
| explanation_detail.incorrect[2].text_th | Guideline เป็นข้อเสนอแนะ ไม่ใช่ข้อบังคับตายตัว | Policy ระบุทิศทางและความคาดหวังของผู้บริหาร ส่วนระยะเวลาล็อกหน้าจอและข้อกำหนดการเข้ารหัสภาคบังคับเป็นรายละเอียดของ Standard ที่ใช้ดำเนินการตามทิศทางนั้น |

### Q600 — Domain 1 / Objective 1.3

**Verified issue:** An ISO/IEC27001 requirements standard is conflated with a cybersecurity framework.

**Evidence:** R06, R09, L04. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.correct.en | A cybersecurity framework (such as NIST CSF or ISO/IEC 27001) provides a comprehensive, structured methodology for building, organizing, measuring, and maturing an enterprise security program. It organizes controls across domains and assists organizations in assessing their current security posture against targeted baselines. | A cybersecurity framework such as NIST CSF provides a structure for assessing, prioritizing and communicating cybersecurity outcomes across a program. ISO/IEC 27001 is a related ISMS requirements standard, rather than another name for the CSF. |
| explanation_detail.correct.th | Cybersecurity Framework (กรอบการทำงานความมั่นคงปลอดภัยไซเบอร์ เช่น NIST CSF, ISO/IEC 27001) เป็นชุดแนวทางและโครงสร้างที่ครอบคลุม เพื่อช่วยให้องค์กรวางแผน ออกแบบ ปฏิบัติ และวัดผลระดับวุฒิภาวะของระบบความปลอดภัยได้อย่างเป็นระบบ | กรอบการทำงานด้านความมั่นคงปลอดภัย เช่น NIST CSF ช่วยจัดโครงสร้างการประเมิน จัดลำดับความสำคัญ และสื่อสารผลลัพธ์ด้านความมั่นคงปลอดภัยของโปรแกรม ส่วน ISO/IEC 27001 เป็นมาตรฐานข้อกำหนด ISMS ที่เกี่ยวข้อง ไม่ใช่อีกชื่อหนึ่งของ CSF |

### Q601 — Domain 1 / Objective 1.4

**Verified issue:** Distractor rationales misstate the categories actually assigned in B/C/D; acknowledge the three-category model rather than imposing it on every taxonomy.

**Evidence:** R01, L05. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.incorrect[0].text_en | Option B misclassifies personnel training as technical instead of managerial/administrative. | Under the technical/administrative/physical classification used here, the packet-inspecting firewall is technical, and background checks/training are administrative personnel measures. B instead calls them operational and technical. |
| explanation_detail.incorrect[0].text_th | ตัวเลือก B จัดหมวดหมู่การอบรมพนักงานเป็น Technical ซึ่งไม่ถูกต้อง | ภายใต้การแบ่งเป็น Technical/Administrative/Physical ที่ใช้ในข้อนี้ ไฟร์วอลล์ตรวจแพ็กเก็ตเป็นมาตรการทางเทคนิค ส่วนการตรวจประวัติและอบรมเป็นมาตรการด้านบุคลากรทางการบริหาร ข้อ B กลับจัดเป็น Operational และ Technical ตามลำดับ |
| explanation_detail.incorrect[1].text_en | Option C misclassifies firewalls as managerial instead of technical. | C calls the firewall physical and the facility barriers managerial/administrative. The firewall’s packet inspection is technical, while the fences and turnstiles control physical entry. |
| explanation_detail.incorrect[1].text_th | ตัวเลือก C จัดหมวดหมู่ไฟร์วอลล์เป็น Managerial ซึ่งไม่ถูกต้อง | ข้อ C จัดไฟร์วอลล์เป็น Physical และสิ่งกีดขวางอาคารเป็น Managerial/Administrative แต่การตรวจแพ็กเก็ตเป็นกลไกทางเทคนิค ส่วนรั้วและประตูกั้นควบคุมการเข้าถึงทางกายภาพ |
| explanation_detail.incorrect[2].text_en | Option D misclassifies firewalls as physical and fences as technical. | D correctly identifies the firewall as technical, but calls background checks/training physical and facility barriers operational. Those measures are administrative and physical respectively in the classification used here. |
| explanation_detail.incorrect[2].text_th | ตัวเลือก D สลับหมวดหมู่ไฟร์วอลล์และรั้วกั้นอาคาร | ข้อ D จัดไฟร์วอลล์เป็น Technical ถูกต้อง แต่จัดการตรวจประวัติและอบรมเป็น Physical และสิ่งกีดขวางอาคารเป็น Operational ซึ่งในกรอบการแบ่งประเภทที่ใช้ในข้อนี้ควรเป็น Administrative และ Physical ตามลำดับ |

### Q603 — Domain 1 / Objective 1.4

**Verified issue:** B/C detective/preventive rationales are swapped; Thai stem omitted the supplied write-once backup property.

**Evidence:** L05, R10. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| question_th | หลังจากเกิดเหตุการณ์มัลแวร์เรียกค่าไถ่ (Ransomware) เข้ารหัสฐานข้อมูลบัญชีสำคัญ ทีมกู้คืนภัยพิบัติได้แยกเครือข่ายที่ติดเชื้อ ล้างเครื่องเสมือนที่ถูกโจมตี และกู้คืนข้อมูลการเงินที่สมบูรณ์จากชุดข้อมูลสำรองแบบออฟไลน์ (Offline backup) ในแง่ของฟังก์ชันการควบคุม การกู้คืนระบบจากชุดข้อมูลสำรองนี้ทำหน้าที่ใด? | หลังจากเกิดเหตุการณ์มัลแวร์เรียกค่าไถ่ (Ransomware) เข้ารหัสฐานข้อมูลบัญชีสำคัญ ทีมกู้คืนภัยพิบัติได้แยกเครือข่ายที่ติดเชื้อ ล้างเครื่องเสมือนที่ถูกโจมตี และกู้คืนข้อมูลการเงินที่สมบูรณ์จากชุดข้อมูลสำรองแบบออฟไลน์ (Offline backup) แบบเขียนได้ครั้งเดียว (Write-once) ในแง่ของฟังก์ชันการควบคุม การกู้คืนระบบจากชุดข้อมูลสำรองนี้ทำหน้าที่ใด? |
| explanation_detail.incorrect[0].text_en | Preventive controls stop incidents before they occur, rather than restoring systems after an event. | Detective controls identify or alert on events. Restoring the affected systems is corrective recovery rather than the act of detecting the ransomware. |
| explanation_detail.incorrect[0].text_th | Preventive control ทำหน้าที่ป้องกันไม่ให้เกิดเหตุ ไม่ใช่การกู้คืนหลังเกิดเหตุ | Detective control ใช้ระบุหรือตรวจพบเหตุการณ์และแจ้งเตือน ส่วนการกู้คืนระบบที่ได้รับผลกระทบเป็นการแก้ไขฟื้นฟู ไม่ใช่การตรวจจับ Ransomware |
| explanation_detail.incorrect[1].text_en | Detective controls identify and alert on active or past incidents without remediating the damage. | Preventive controls aim to stop an unwanted event before it occurs. Here the infection has already damaged systems and the stated action restores them. |
| explanation_detail.incorrect[1].text_th | Detective control ทำหน้าที่ตรวจจับและแจ้งเตือน แต่ไม่ได้ซ่อมแซมหรือกู้คืนระบบ | Preventive control มุ่งป้องกันเหตุที่ไม่ต้องการก่อนเกิดเหตุ แต่ในโจทย์ระบบได้รับความเสียหายจากการติดเชื้อแล้ว และการกระทำที่ถามคือการกู้คืนระบบ |

### Q611 — Domain 2 / Objective 2.1

**Verified issue:** D describes PCI DSS rather than NIST SP800-30; accreditation applies to certification bodies, and Thai example incorrectly calls surveillance annual renewal.

**Evidence:** R09, R05, R06, L06. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| question | An enterprise seeks to adopt an established cybersecurity framework to structure its program. The Chief Information Security Officer (CISO) requires a framework that provides an internationally accredited, third-party certifiable Information Security Management System (ISMS) standard. Which of the following frameworks BEST satisfies this requirement? | An enterprise seeks to adopt an established cybersecurity framework to structure its program. The Chief Information Security Officer (CISO) requires a framework that provides an internationally recognized, third-party certifiable Information Security Management System (ISMS) standard. Which of the following frameworks BEST satisfies this requirement? |
| question_th | องค์กรแห่งหนึ่งต้องการนำกรอบการทำงานด้านความมั่นคงปลอดภัยไซเบอร์ที่เป็นที่ยอมรับมาใช้เพื่อจัดโครงสร้างโปรแกรมของตน CISO ต้องการกรอบการทำงานที่มอบมาตรฐานระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) ที่ได้รับการรับรองในระดับสากลและสามารถตรวจรับรองโดยหน่วยงานภายนอกได้ กรอบการทำงานใดต่อไปนี้ตอบโจทย์ความต้องการนี้ได้เหมาะสมที่สุด (BEST)? | องค์กรแห่งหนึ่งต้องการนำกรอบการทำงานด้านความมั่นคงปลอดภัยไซเบอร์ที่เป็นที่ยอมรับมาใช้เพื่อจัดโครงสร้างโปรแกรมของตน CISO ต้องการกรอบการทำงานที่มอบมาตรฐานระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) ที่เป็นที่ยอมรับในระดับสากลและสามารถตรวจรับรองโดยหน่วยงานภายนอกได้ กรอบการทำงานใดต่อไปนี้ตอบโจทย์ความต้องการนี้ได้เหมาะสมที่สุด (BEST)? |
| explanation_detail.correct.en | ISO/IEC 27001 is specifically designed as a certifiable requirements standard for an Information Security Management System (ISMS), enabling organizations to earn accredited third-party certification. | ISO/IEC 27001 specifies requirements for an Information Security Management System (ISMS) against which an organization can obtain independent third-party certification. Accreditation concerns the competence of a certification body; it is not accreditation of the standard itself. |
| explanation_detail.correct.th | ISO/IEC 27001 ได้รับการออกแบบมาโดยเฉพาะเพื่อเป็นมาตรฐานข้อกำหนดสำหรับระบบ ISMS ที่องค์กรสามารถขอรับการตรวจประเมินและออกใบรับรองสากลได้ | ISO/IEC 27001 กำหนดข้อกำหนดสำหรับระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) ที่องค์กรสามารถขอรับการตรวจรับรองจากหน่วยงานภายนอกได้ Accreditation เป็นการรับรองความสามารถของหน่วยงานตรวจรับรอง ไม่ใช่การรับรองตัวมาตรฐาน |
| explanation_detail.incorrect[0].text_en | The NIST Cybersecurity Framework (NIST CSF) is a voluntary guidance framework providing a common language and taxonomy, but does not provide an accredited formal certification program. | NIST CSF 2.0 organizes cybersecurity outcomes and risk-management guidance; NIST does not offer an organizational ISMS certification through the CSF. |
| explanation_detail.incorrect[0].text_th | NIST CSF เป็นกรอบแนวปฏิบัติเพื่อการสื่อสารและยกระดับความปลอดภัย แต่ไม่มีกระบวนการตรวจประเมินเพื่อออกใบรับรองอย่างเป็นทางการแก่องค์กร | NIST CSF 2.0 จัดหมวดผลลัพธ์และแนวทางบริหารความเสี่ยงด้านความมั่นคงปลอดภัย โดย NIST ไม่ได้จัดให้มีการตรวจรับรอง ISMS ขององค์กรผ่าน CSF |
| explanation_detail.incorrect[2].text_en | PCI DSS is a specialized payment card industry compliance standard for entities processing cardholder data, not an accredited comprehensive enterprise ISMS certification scheme. | NIST SP 800-30 Rev. 1 guides the conduct of risk assessments. It is not a set of certifiable ISMS requirements like ISO/IEC 27001. |
| explanation_detail.incorrect[2].text_th | PCI DSS เป็นมาตรฐานการปฏิบัติตามกฎเกณฑ์เฉพาะทางสำหรับข้อมูลบัตรชำระเงิน ไม่ใช่มาตรฐานการตรวจรับรองระบบบริหารจัดการความปลอดภัย (ISMS) ครอบคลุมระดับองค์กร | NIST SP 800-30 Rev. 1 ให้แนวทางการประเมินความเสี่ยง ไม่ใช่ชุดข้อกำหนด ISMS สำหรับการตรวจรับรองแบบ ISO/IEC 27001 |
| explanation_detail.example.en | Global SaaS providers undergo annual ISO/IEC 27001 surveillance audits to maintain public accredited certificates that satisfy enterprise vendor due diligence requirements worldwide. | An organization may use its ISO/IEC 27001 certificate, including its scope and validity, as one input to a customer’s supplier assessment. Certification does not replace assessment of the customer’s specific risks. |
| explanation_detail.example.th | บริษัทผู้ให้บริการ SaaS ระดับโลกเข้ารับการตรวจสอบเพื่อต่ออายุใบรับรอง ISO/IEC 27001 ทุกปี เพื่อใช้เป็นหลักฐานแสดงความน่าเชื่อถือแก่ลูกค้าองค์กรทั่วโลก | องค์กรอาจใช้ใบรับรอง ISO/IEC 27001 พร้อมขอบเขตและระยะเวลาที่มีผล เป็นข้อมูลส่วนหนึ่งในการประเมินผู้ให้บริการของลูกค้า การมีใบรับรองไม่ได้ทดแทนการประเมินความเสี่ยงเฉพาะของลูกค้า |

### Q612 — Domain 2 / Objective 2.1

**Verified issue:** Explanation treats organizational authority as inherent in job titles, including zero vendor authority.

**Evidence:** R06, L06. **Key:** C retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Risk Owners are business leaders who manage the asset and possess the authority to accept or treat business risks. | Risk decisions require designated authority and knowledge of the affected business process; authority is assigned by governance. |
| explanation_detail.correct.en | The business asset owner has direct responsibility for the payroll business process, understands the operational trade-offs, and holds the delegated executive authority to accept risk or authorize downtime. | The designated business asset owner is the best choice among these options because the decision balances payroll business impact and security exposure. Authority to accept risk or approve downtime must be assigned by organizational governance; decisions beyond that authority require escalation. |
| explanation_detail.correct.th | เจ้าของทรัพย์สินทางธุรกิจมีความรับผิดชอบโดยตรงต่อกระบวนการจ่ายเงินเดือน เข้าใจผลกระทบอย่างแท้จริง และมีอำนาจตัดสินใจยอมรับความเสี่ยงหรืออนุมัติให้หยุดระบบ | เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายเหมาะสมที่สุดในบรรดาตัวเลือก เพราะต้องชั่งน้ำหนักผลกระทบต่องานเงินเดือนกับความเสี่ยงด้านความปลอดภัย อำนาจยอมรับความเสี่ยงหรืออนุมัติการหยุดระบบต้องได้รับการกำหนดโดยการกำกับดูแลองค์กร และต้องส่งต่อเมื่อเกินอำนาจนั้น |
| explanation_detail.incorrect[1].text_en | Cybersecurity analysts evaluate vulnerabilities and recommend mitigations, but they do not own business operations or have authority to accept operational downtime risks. | The analyst can provide vulnerability evidence and recommendations, but the scenario does not assign the analyst authority over payroll business-risk acceptance or downtime. |
| explanation_detail.incorrect[1].text_th | นักวิเคราะห์ความปลอดภัยทำหน้าที่ระบุช่องโหว่และเสนอแนะแนวทางแก้ไข แต่ไม่มีอำนาจตัดสินใจยอมรับผลกระทบจากการหยุดชะงักของธุรกิจ | นักวิเคราะห์สามารถให้หลักฐานช่องโหว่และข้อเสนอแนะได้ แต่โจทย์ไม่ได้มอบอำนาจตัดสินใจยอมรับความเสี่ยงทางธุรกิจหรือหยุดระบบเงินเดือนให้แก่นักวิเคราะห์ |
| explanation_detail.incorrect[2].text_en | Third-party software vendors supply technical patches and advisories, but have zero governance authority within the customer organization. | The vendor engineer can advise on the flaw and remediation. Publishing an advisory does not confer authority to accept the customer’s business risk or approve its outage. |
| explanation_detail.incorrect[2].text_th | ผู้ขายซอฟต์แวร์มีหน้าที่ให้ข้อมูลและแพตช์ แต่ไม่มีสิทธิ์ในการกำกับดูแลหรือตัดสินใจใดๆ ภายในองค์กรของผู้ใช้ | วิศวกรของผู้ขายสามารถให้คำแนะนำเรื่องช่องโหว่และการแก้ไขได้ การเผยแพร่คำแนะนำไม่ได้ทำให้มีอำนาจยอมรับความเสี่ยงทางธุรกิจหรืออนุมัติการหยุดระบบของลูกค้า |
| explanation_detail.example.en | When a vulnerability requires taking down a hospital's pharmacy dispensing system, the Chief Medical Officer and Pharmacy Director act as Risk Owners to balance patient safety risks against security risks. | If a hospital designates its Pharmacy Director as the risk owner, that person evaluates pharmacy impacts and makes or escalates the decision within the assigned authority. |
| explanation_detail.example.th | เมื่อการลงแพตช์ต้องปิดระบบจ่ายยาของโรงพยาบาล ผู้อำนวยการฝ่ายการแพทย์และหัวหน้าฝ่ายเภสัชกรรมจะทำหน้าที่เป็นเจ้าของความเสี่ยงเพื่อชั่งน้ำหนักระหว่างความปลอดภัยของผู้ป่วยกับความเสี่ยงด้านไซเบอร์ | หากโรงพยาบาลมอบหมายให้หัวหน้าฝ่ายเภสัชกรรมเป็นเจ้าของความเสี่ยง บุคคลนั้นจะประเมินผลกระทบต่องานเภสัชกรรมและตัดสินใจหรือส่งต่อภายในขอบเขตอำนาจที่ได้รับ |
| explanation_detail.exam_tip.en | Fundamental ISC2 concept: Security professionals advise and facilitate, but business asset owners OWN the risk. | Check the designated decision authority and business impact. A job title alone does not establish permission to accept risk. |
| explanation_detail.exam_tip.th | หลักการสำคัญของ ISC2: ฝ่ายความมั่นคงปลอดภัยทำหน้าที่ให้คำแนะนำ แต่เจ้าของทรัพย์สินทางธุรกิจคือ 'เจ้าของความเสี่ยง' ตัวจริง | ตรวจสอบผู้มีอำนาจตัดสินใจที่ได้รับมอบหมายและผลกระทบทางธุรกิจ ชื่อตำแหน่งเพียงอย่างเดียวไม่ได้ทำให้มีอำนาจยอมรับความเสี่ยง |

### Q613 — Domain 2 / Objective 2.1

**Verified issue:** Cessation does not automatically erase risk-register history; outsourcing example overstates avoidance of all payment risk.

**Evidence:** R05, L03. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.correct.en | Risk Avoidance is the complete cessation of a risk-bearing activity or decommissioning of an asset, which successfully eliminates the targeted risk from the enterprise risk register. | Permanently retiring the vulnerable device and its diagnostic service stops the specified risk-bearing activity, illustrating Risk Avoidance. Record the disposition and any remaining transition risks rather than assuming that risk-register history disappears. |
| explanation_detail.correct.th | การหลีกเลี่ยงความเสี่ยงคือการยุติกิจกรรมที่ก่อให้เกิดความเสี่ยงหรือการปลดระวางทรัพย์สินอย่างสิ้นเชิง ซึ่งช่วยกำจัดความเสี่ยงเฉพาะนั้นออกจากองค์กรได้อย่างสมบูรณ์ | การเลิกใช้อุปกรณ์ที่มีช่องโหว่และยุติบริการตรวจวินิจฉัยนั้นอย่างถาวรเป็นการหยุดกิจกรรมที่ก่อความเสี่ยง จึงเป็น Risk Avoidance ควรบันทึกผลการจัดการและความเสี่ยงช่วงเปลี่ยนผ่านที่ยังเหลือ ไม่ใช่ถือว่าประวัติในทะเบียนความเสี่ยงหายไปเอง |
| explanation_detail.example.en | An e-commerce store eliminates the risk of credit card data theft by completely disabling credit card storage and outsourcing all payment processing to an external gateway. | The hospital retires the unsupported device and ends the associated service rather than continuing to operate it with additional controls. Other hospital risks still require management. |
| explanation_detail.example.th | ร้านค้าออนไลน์ขจัดความเสี่ยงในการถูกขโมยข้อมูลบัตรเครดิตโดยการยกเลิกการเก็บข้อมูลบัตรในเซิร์ฟเวอร์ของตนเองทั้งหมด และส่งต่อให้เกตเวย์ภายนอกจัดการแทน | โรงพยาบาลเลิกใช้อุปกรณ์ที่หมดการสนับสนุนและยุติบริการที่เกี่ยวข้อง แทนการใช้งานต่อพร้อมเพิ่มมาตรการควบคุม ความเสี่ยงอื่นของโรงพยาบาลยังต้องได้รับการจัดการ |
| explanation_detail.exam_tip.en | Key distinction reconciled in Phase 3.5: While residual risk in ongoing operational systems is rarely zero, specific targeted risks CAN be completely reduced to zero through true Risk Avoidance. | Avoidance stops the specified activity. Mitigation reduces its risk while the activity continues; transfer and acceptance do not by themselves stop it. |
| explanation_detail.exam_tip.th | ประเด็นสำคัญที่ผ่านการตรวจสอบ: แม้ความเสี่ยงในระบบที่ทำงานอยู่จะไม่เป็นศูนย์ แต่ความเสี่ยงเฉพาะอย่างสามารถลดเป็นศูนย์ได้ผ่านการหลีกเลี่ยงความเสี่ยง (Risk Avoidance) | Avoidance หยุดกิจกรรมที่ระบุ ส่วน Mitigation ลดความเสี่ยงขณะยังดำเนินกิจกรรมต่อ และ Transfer กับ Acceptance ไม่ได้หยุดกิจกรรมนั้นโดยตัวมันเอง |

### Q614 — Domain 2 / Objective 2.1

**Verified issue:** Explanation asserts blanket international-methodology compliance solely from use of numeric scales.

**Evidence:** R05, L06. **Key:** D retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Ordinal numeric risk scales without empirical monetary units represent semi-quantitative assessment methodologies. | Ordinal risk scales support semi-quantitative ranking; arithmetic alone does not establish quantitative measurement. |
| explanation_detail.incorrect[2].text_en | Using numeric scales in risk matrices is standard industry practice (ISO 31000, NIST SP 800-30) and is entirely compliant with international methodologies. | NIST SP 800-30 recognizes semi-quantitative scales. Using numbers is not itself a violation; whether the method is appropriate depends on the defined scales, assumptions and assessment context. |
| explanation_detail.incorrect[2].text_th | การใช้ตัวเลขในตารางประเมินความเสี่ยงเป็นวิธีปฏิบัติมาตรฐานที่สากลยอมรับ และสอดคล้องกับระเบียบวิธีของ ISO 31000 และ NIST | NIST SP 800-30 ยอมรับการใช้มาตราส่วนกึ่งเชิงปริมาณ การใช้ตัวเลขไม่ได้เป็นการละเมิดโดยตัวมันเอง ส่วนวิธีการเหมาะสมหรือไม่ขึ้นกับนิยามมาตราส่วน สมมติฐาน และบริบทการประเมิน |
| explanation_detail.exam_tip.en | Reconciled NIST concept: Qualitative = descriptive words (Low, Med, High); Semi-Quantitative = ordinal numbers (1-5); Quantitative = empirical monetary/mathematical metrics (ALE, SLE, ARO). | Distinguish descriptive categories, ordinal ranking scales and numerical estimates with meaningful units. Financial estimates are examples of quantitative analysis, not its only form. |
| explanation_detail.exam_tip.th | นิยามที่ถูกต้องตาม NIST: เชิงคุณภาพ = คำบรรยาย (ต่ำ, ปานกลาง, สูง); กึ่งเชิงปริมาณ = ตัวเลขตามลำดับ (1-5); เชิงปริมาณ = หน่วยวัดทางการเงินหรือสถิติจริง (ALE, SLE, ARO) | แยกระดับเชิงพรรณนา มาตราส่วนจัดอันดับ และค่าประมาณตัวเลขที่มีหน่วยมีความหมาย การประมาณทางการเงินเป็นตัวอย่างการวิเคราะห์เชิงปริมาณ ไม่ใช่รูปแบบเดียว |

### Q616 — Domain 2 / Objective 2.2

**Verified issue:** BIA is described as universally mandatory first rather than first for these unresolved recovery priorities.

**Evidence:** R10, L06. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | A Business Impact Analysis (BIA) must be conducted first to identify critical business functions and establish objective recovery priorities. | Here, a BIA establishes business recovery needs before recovery resources are selected. |
| explanation_detail.correct.en | Conducting a Business Impact Analysis (BIA) is the mandatory first step to objectively evaluate the criticality of business processes and establish evidence-based recovery priorities. | Because recovery priorities have not been established in this scenario, a BIA should identify critical functions, downtime impacts and dependencies before selecting recovery resources. This supports an evidence-based resolution of the departments’ competing requests. |
| explanation_detail.correct.th | การวิเคราะห์ผลกระทบทางธุรกิจ (BIA) เป็นขั้นตอนแรกที่ต้องทำเสมอเพื่อประเมินความสำคัญของกระบวนการทางธุรกิจและกำหนดลำดับการกู้คืนอย่างเป็นกลาง | ในสถานการณ์นี้ยังไม่ได้กำหนดลำดับความสำคัญในการกู้คืน จึงควรทำ BIA เพื่อระบุหน้าที่สำคัญ ผลกระทบจากการหยุดทำงาน และการพึ่งพาระหว่างระบบ ก่อนเลือกทรัพยากรกู้คืน เพื่อใช้หลักฐานตัดสินคำขอที่ขัดแย้งกันของแต่ละฝ่าย |
| explanation_detail.example.en | A hospital conducting a BIA discovers that emergency room patient telemetry has an MTD of 15 minutes, whereas the internal cafeteria inventory system has an MTD of 7 days, resolving restore priority disputes immediately. | A BIA identifies the impact of losing emergency telemetry and cafeteria inventory, including dependencies needed to recover each function. That evidence informs recovery priorities. |
| explanation_detail.example.th | โรงพยาบาลทำ BIA พบว่าระบบติดตามสัญญาณชีพอุบัติเหตุหยุดได้ไม่เกิน 15 นาที ส่วนระบบสต็อกอาหารโรงอาหารหยุดได้ 7 วัน ทำให้ยุติข้อขัดแย้งในการจัดลำดับการกู้คืนได้ทันที | BIA ระบุผลกระทบจากการสูญเสียระบบติดตามสัญญาณชีพฉุกเฉินและระบบสต็อกโรงอาหาร รวมถึงระบบที่แต่ละหน้าที่ต้องพึ่งพาในการกู้คืน หลักฐานนี้ใช้ประกอบการจัดลำดับความสำคัญ |
| explanation_detail.exam_tip.en | Exam sequencing rule: BIA comes BEFORE RTO/RPO targets, and RTO/RPO targets come BEFORE selecting recovery strategies or buying alternate sites. | For this scenario, determine business recovery needs before purchasing a site or deploying recovery technology. Do not treat BIA as the first action in every possible continuity-planning workflow. |
| explanation_detail.exam_tip.th | กฎลำดับขั้นตอนในการสอบ: BIA มาก่อนการตั้งเป้าหมาย RTO/RPO และเป้าหมาย RTO/RPO ต้องมาก่อนการเลือกศูนย์สำรองหรือซื้อเครื่องมือทางเทคนิค | ในโจทย์นี้ต้องกำหนดความต้องการกู้คืนทางธุรกิจก่อนซื้อบริการสถานที่สำรองหรือติดตั้งเทคโนโลยี อย่าเหมารวมว่า BIA เป็นขั้นตอนแรกของกระบวนการวางแผนความต่อเนื่องทุกกรณี |

### Q618 — Domain 2 / Objective 2.2

**Verified issue:** Co-location/frequent-backup claims need the stated common-hazard context, not a universal compliance or uselessness claim.

**Evidence:** R10, L06. **Key:** D retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Storing backups in the same physical room as production servers creates a single point of failure that localized disasters will destroy. | Co-located production and backup copies may share the same disaster exposure; backup frequency alone does not address that hazard. |
| explanation_detail.correct.en | Co-locating backup repositories in the same physical facility as production servers violates the fundamental disaster recovery principle of geographic diversity, creating a shared physical fault domain. | In the stated flood scenario, production and co-located backups share a physical failure domain. Backup frequency alone does not protect recovery data from an event that can damage both copies; the recovery strategy must address that common hazard. |
| explanation_detail.correct.th | การวางอุปกรณ์สำรองข้อมูลไว้ในห้องเดียวกับเซิร์ฟเวอร์หลักละเมิดหลักการแยกพื้นที่ทางภูมิศาสตร์ ทำให้ทั้งระบบหลักและระบบสำรองถูกทำลายพร้อมกันเมื่อเกิดภัยพิบัติเฉพาะจุด | ในสถานการณ์น้ำท่วมตามโจทย์ ระบบหลักและข้อมูลสำรองที่อยู่ร่วมสถานที่มีจุดเสี่ยงต่อเหตุทางกายภาพร่วมกัน ความถี่ในการสำรองเพียงอย่างเดียวไม่ได้ป้องกันข้อมูลสำหรับกู้คืนจากเหตุที่อาจทำลายทั้งสองชุด แผนกู้คืนจึงต้องจัดการภัยร่วมดังกล่าว |
| explanation_detail.example.en | The standard 3-2-1 backup rule dictates keeping 3 copies of data, on 2 different media types, with at least 1 copy stored offsite in a geographically separated location. | A recovery plan considers whether flooding could affect both the production room and its backup storage, then provides protected recovery copies outside that common hazard where needed. |
| explanation_detail.example.th | กฎการสำรองข้อมูล 3-2-1 กำหนดให้มีข้อมูล 3 ชุด บนสื่อบันทึก 2 ชนิด และอย่างน้อย 1 ชุดต้องเก็บไว้นอกสถานที่ในพื้นที่ทางภูมิศาสตร์ที่แยกจากกัน | แผนกู้คืนพิจารณาว่าน้ำท่วมอาจกระทบทั้งห้องระบบหลักและที่เก็บข้อมูลสำรองหรือไม่ แล้วจัดให้มีชุดข้อมูลกู้คืนที่ได้รับการปกป้องอยู่นอกภัยร่วมดังกล่าวตามความจำเป็น |
| explanation_detail.exam_tip.en | Exam reminder: Having frequent backups is completely useless if a single physical fire, flood, or power surge can destroy both the original and the backup media simultaneously. | Assess common hazards affecting production and backups, and verify that the recovery copies remain accessible and usable under the planned disaster conditions. |
| explanation_detail.exam_tip.th | ข้อควรจำในการสอบ: การสำรองข้อมูลบ่อยแค่ไหนก็ไร้ประโยชน์ หากไฟไหม้หรือน้ำท่วมเพียงจุดเดียวสามารถทำลายทั้งระบบจริงและตัวสำรองไปพร้อมกัน | ประเมินภัยร่วมที่อาจกระทบทั้งระบบหลักและข้อมูลสำรอง และตรวจว่าชุดข้อมูลกู้คืนยังเข้าถึงและใช้งานได้ภายใต้เงื่อนไขภัยพิบัติที่วางแผนไว้ |

### Q625 — Domain 2 / Objective 2.3

**Verified issue:** MFA is presented as a guarantee against credential-stuffing takeover instead of reducing reliance on a leaked password.

**Evidence:** R02, L01. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Multi-Factor Authentication (MFA) stops credential stuffing because stolen passwords alone are insufficient to authenticate. | Correctly enforced MFA makes stolen passwords alone insufficient and reduces credential-stuffing risk. |
| explanation_detail.correct.en | Multi-Factor Authentication (MFA) ensures that even if credentials are leaked and replayed via credential stuffing, access is denied without the second authentication factor. | MFA requires an additional distinct factor, so the stolen username/password pair alone is insufficient when MFA is correctly enforced. It reduces credential-stuffing exposure but is not a guarantee against every takeover; factor strength and resistance to phishing or approval abuse matter. |
| explanation_detail.correct.th | การยืนยันตัวตนแบบหลายปัจจัย (MFA) ช่วยให้มั่นใจว่า แม้รหัสผ่านจะรั่วไหลและถูกนำมาสวมรอย แต่ระบบจะปฏิเสธการเข้าถึงหากไม่มีปัจจัยที่สอง | MFA ต้องใช้ปัจจัยต่างประเภทเพิ่มเติม ทำให้คู่ชื่อผู้ใช้และรหัสผ่านที่ถูกขโมยเพียงอย่างเดียวไม่เพียงพอเมื่อบังคับใช้ MFA อย่างถูกต้อง วิธีนี้ลดความเสี่ยงจาก Credential stuffing แต่ไม่ได้รับประกันว่าจะป้องกันการยึดบัญชีได้ทุกกรณี ความแข็งแรงของปัจจัยและความต้านทานต่อ Phishing หรือการหลอกให้อนุมัติยังมีความสำคัญ |
| explanation_detail.example.en | An employee uses 'Password123!@#' on a compromised retail website and their company email. An attacker uses a bot to try logging in. Because the company requires MFA, the login triggers a push alert on the employee's phone, which they deny, blocking the breach. | An employee reuses the same long password on a personal service and corporate email. With the distinct additional factor enforced, replaying that password alone is rejected; this does not establish protection against an attacker who also defeats that factor. |
| explanation_detail.example.th | พนักงานใช้รหัสเดียวกับเว็บบอร์ดที่โดนแฮก เมื่อแฮกเกอร์นำรหัสนั้นมาลองล็อกอินอีเมลบริษัท แต่ติดหน้าจอถาม OTP บนมือถือ พนักงานจึงรู้ตัวและกดปฏิเสธ ทำให้แฮกเกอร์เข้าไม่ได้ | พนักงานใช้รหัสผ่านยาวเดียวกันกับบริการส่วนตัวและอีเมลองค์กร เมื่อบังคับใช้ปัจจัยต่างประเภทเพิ่มเติม การนำรหัสผ่านนั้นมาใช้ซ้ำเพียงอย่างเดียวจะถูกปฏิเสธ แต่ไม่ได้แสดงว่าป้องกันผู้โจมตีที่เอาชนะปัจจัยเพิ่มเติมได้ด้วย |

### Q626 — Domain 2 / Objective 2.3

**Verified issue:** Reporting is claimed to ensure containment/evidence preservation; rationale invents organizational policy; tip attributes a universal rule to ISC2.

**Evidence:** R12, L07. **Key:** D retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.correct.en | Immediately escalating the anomaly to the designated cybersecurity response team ensures rapid incident containment while preserving digital forensic evidence. | Following the stated recognize-and-report duty, the employee should promptly contact the designated response team or helpdesk using established procedures. Reporting enables authorized responders to assess containment and evidence needs; it does not by itself guarantee either outcome. |
| explanation_detail.correct.th | การรายงานสิ่งผิดปกติไปยังทีมความมั่นคงปลอดภัยทันทีช่วยให้ควบคุมเหตุการณ์ได้อย่างรวดเร็วและรักษาหลักฐานทางนิติวิทยาศาสตร์ไว้ได้ | ตามหน้าที่ Recognize and report ที่ระบุในโจทย์ พนักงานควรติดต่อทีมตอบสนองหรือ Helpdesk ที่กำหนดโดยเร็วตามขั้นตอนองค์กร การรายงานช่วยให้ผู้ตอบสนองที่มีอำนาจประเมินการจำกัดผลกระทบและการเก็บหลักฐาน แต่ไม่ได้รับประกันผลลัพธ์ทั้งสองโดยตัวมันเอง |
| explanation_detail.incorrect[0].text_en | End users must never negotiate with extortionists or reply to attack lures, which alerts adversaries and violates organizational policy. | Negotiating with the sender is not the stated reporting duty and can expose the employee to further manipulation. Ransom decisions belong to the organization’s authorized process. |
| explanation_detail.incorrect[0].text_th | พนักงานต้องไม่เจรจากับผู้กรรโชกทรัพย์หรือตอบกลับอีเมลคนร้าย เพราะทำให้คนร้ายไหวตัวและขัดต่อนโยบายบริษัท | การต่อรองกับผู้ส่งไม่ใช่หน้าที่รายงานที่ระบุ และอาจเปิดทางให้พนักงานถูกหลอกเพิ่มเติม การตัดสินใจเรื่องค่าไถ่ต้องเป็นไปตามกระบวนการของผู้มีอำนาจในองค์กร |
| explanation_detail.incorrect[1].text_en | Downloading unauthorized software from the internet is a severe policy violation that frequently introduces additional secondary malware infections. | Installing an unapproved removal tool can alter evidence or introduce further risk. The employee should follow the reporting procedure rather than attempt an unauthorized cleanup. |
| explanation_detail.incorrect[1].text_th | การดาวน์โหลดโปรแกรมแปลกปลอมจากอินเทอร์เน็ตเป็นการละเมิดนโยบายและมักนำมัลแวร์ตัวอื่นเข้ามาติดซ้ำเติม | การติดตั้งเครื่องมือลบมัลแวร์ที่ไม่ได้รับอนุมัติอาจเปลี่ยนแปลงหลักฐานหรือเพิ่มความเสี่ยง พนักงานควรทำตามขั้นตอนรายงานแทนการพยายามกำจัดมัลแวร์โดยไม่มีอำนาจ |
| explanation_detail.incorrect[2].text_en | Abruptly pulling the power cord destroys volatile RAM data (e.g., active memory artifacts, network socket tables, and encryption keys) required for forensic triage. | Abrupt power removal can lose volatile evidence. In this recognize-and-report scenario it is not the prescribed first action; shutdown or isolation decisions should follow the response procedure and any urgent safety needs. |
| explanation_detail.incorrect[2].text_th | การกระชากปลั๊กไฟทำลายข้อมูลในหน่วยความจำ RAM ชั่วคราว ซึ่งอาจมีคีย์ถอดรหัสหรือหลักฐานสำคัญที่จำเป็นต่อการสืบสวน | การตัดไฟทันทีอาจทำให้หลักฐานในหน่วยความจำชั่วคราวสูญหาย ในโจทย์ที่กำหนดหน้าที่ Recognize and report จึงไม่ใช่การกระทำแรกตามขั้นตอน การปิดเครื่องหรือแยกเครือข่ายต้องเป็นไปตามกระบวนการตอบสนองและความจำเป็นเร่งด่วนด้านความปลอดภัย |
| explanation_detail.example.en | An employee noticing strange pop-ups clicks the 'Report Phishing / Incident' button in their email client and calls the SOC hotline immediately, allowing engineers to isolate the machine via EDR within 60 seconds. | The employee uses the established helpdesk contact to report the ransom message. Authorized responders then assess containment and evidence handling under the incident procedure. |
| explanation_detail.example.th | พนักงานสังเกตเห็นหน้าต่างแปลกๆ จึงกดปุ่มแจ้งเหตุฉุกเฉินและโทรสายด่วน SOC ทันที ทำให้ทีมวิศวกรสามารถสั่งตัดการเชื่อมต่อเครือข่ายของเครื่องผ่านระบบ EDR ได้ภายใน 60 วินาที | พนักงานใช้ช่องทาง Helpdesk ที่กำหนดเพื่อรายงานข้อความเรียกค่าไถ่ จากนั้นผู้ตอบสนองที่มีอำนาจจะประเมินการจำกัดผลกระทบและจัดการหลักฐานตามขั้นตอนเหตุการณ์ |
| explanation_detail.exam_tip.en | Core ISC2 Exam Philosophy: End users are not forensic investigators. When something looks wrong, the user's golden rule is 'Recognize, Stop, and REPORT immediately.' | Read the employee’s stated role and reporting procedure. Authorized containment and evidence handling depend on the incident and safety context. |
| explanation_detail.exam_tip.th | ปรัชญาสำคัญของ ISC2: ผู้ใช้งานไม่ใช่ผู้เชี่ยวชาญด้านนิติวิทยาศาสตร์ เมื่อพบสิ่งผิดปกติ กฎทองคำคือ 'สังเกต หยุด และรายงานทันที (Recognize and Report)' | อ่านบทบาทพนักงานและขั้นตอนรายงานที่โจทย์กำหนด การจำกัดผลกระทบและจัดการหลักฐานโดยผู้มีอำนาจขึ้นกับบริบทเหตุการณ์และความปลอดภัย |

### Q627 — Domain 2 / Objective 2.4

**Verified issue:** Unsupported legal entitlement and NIST violation claims; counts are dismissed categorically rather than contextualized.

**Evidence:** R11, L06. **Key:** C retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Raw firewall block counts are vanity metrics measuring external internet noise rather than internal control efficacy or actionable business risk. | A raw firewall count needs business and control context to support the board’s decision. |
| explanation_detail.correct.en | Raw firewall block counts represent vanity metrics that quantify ambient external scanning volume without providing actionable intelligence regarding internal control effectiveness or business risk. | The count alone does not show whether important assets are protected or business risk is improving. In this board briefing it needs context such as scope, trends, exposure and control objectives; counts can still be useful when linked to a defined decision. |
| explanation_detail.correct.th | จำนวนการบล็อกของไฟร์วอลล์เป็นตัวเลขผิวเผิน (Vanity metrics) ที่บอกแค่อินเทอร์เน็ตมีคนสแกนเยอะแค่ไหน แต่ไม่ได้ให้ข้อมูลที่นำไปใช้ปรับปรุงความปลอดภัยหรือประเมินความเสี่ยงได้จริง | จำนวนครั้งเพียงอย่างเดียวไม่ได้แสดงว่าทรัพย์สินสำคัญได้รับการปกป้องหรือความเสี่ยงทางธุรกิจดีขึ้น ในรายงานต่อคณะกรรมการนี้ต้องมีบริบท เช่น ขอบเขต แนวโน้ม ความเสี่ยง และวัตถุประสงค์ของมาตรการ จำนวนครั้งยังมีประโยชน์ได้เมื่อเชื่อมโยงกับการตัดสินใจที่กำหนดไว้ |
| explanation_detail.incorrect[1].text_en | Corporate directors have a fiduciary duty of oversight and are fully entitled to review all enterprise security metrics without legal prohibitions. | The scenario supplies no legal rule forbidding this disclosure to the board. The stated problem is lack of decision-relevant context, not a blanket prohibition on board access to firewall statistics. |
| explanation_detail.incorrect[1].text_th | คณะกรรมการบริษัทมีหน้าที่กำกับดูแลและมีสิทธิ์ตามกฎหมายในการตรวจสอบข้อมูลตัวชี้วัดความปลอดภัยทั้งหมดขององค์กร | โจทย์ไม่ได้ระบุกฎหมายที่ห้ามเปิดเผยสถิตินี้ต่อคณะกรรมการ ปัญหาคือขาดบริบทที่ช่วยตัดสินใจ ไม่ใช่ข้อห้ามทั่วไปไม่ให้คณะกรรมการเข้าถึงสถิติไฟร์วอลล์ |
| explanation_detail.incorrect[2].text_en | Multiplying arbitrary event volume by processor counts creates a meaningless mathematical distortion that violates NIST SP 800-55 measurement standards. | Multiplying by processor count has no defined relationship to the stated control-effectiveness or risk objective. Such a calculation needs a justified measurement model, not an invented formula. |
| explanation_detail.incorrect[2].text_th | การนำตัวเลขนับเหตุการณ์มาคูณกับจำนวนโพรเซสเซอร์เป็นการคำนวณที่ไร้สาระและละเมิดหลักการวัดผลของ NIST | การคูณจำนวนหน่วยประมวลผลไม่ได้มีความสัมพันธ์ที่กำหนดไว้กับเป้าหมายประสิทธิผลของมาตรการหรือความเสี่ยงตามโจทย์ การคำนวณต้องมีแบบจำลองการวัดที่อธิบายได้ ไม่ใช่สูตรที่สมมติขึ้น |
| explanation_detail.example.en | Telling the board 'We blocked 10 million scans' is like a homeowner saying '10,000 cars drove past my house today.' A meaningful metric is '100% of critical internet-facing systems had zero unpatched vulnerabilities.' | A board report can relate blocked traffic trends to the monitored scope, exposed critical services and identified control gaps, explaining the limits of what the counts demonstrate. |
| explanation_detail.example.th | การบอกบอร์ดว่า 'เราบล็อกไป 10 ล้านครั้ง' เหมือนเจ้าของบ้านบอกว่า 'วันนี้มีรถวิ่งผ่านหน้าบ้านหมื่นคัน' ตัวชี้วัดที่ดีควรถามว่า 'เซิร์ฟเวอร์ต่ออินเทอร์เน็ตทุกเครื่องได้รับการอัปเดตช่องโหว่ครบ 100% หรือยัง' | รายงานต่อคณะกรรมการอาจเชื่อมแนวโน้มทราฟฟิกที่ถูกบล็อกกับขอบเขตที่เฝ้าระวัง บริการสำคัญที่เปิดรับการเชื่อมต่อ และช่องว่างของมาตรการ พร้อมอธิบายข้อจำกัดของสิ่งที่ตัวเลขแสดงได้ |
| explanation_detail.exam_tip.en | Exam rule on metrics: Vanity metrics = big numbers that sound impressive but drive zero decisions (e.g., blocked port scans). Useful metrics = rates, percentages, and trends that drive action. | Choose measures that support the intended audience’s decision. Counts, rates, percentages and trends all require defined scope and interpretation. |
| explanation_detail.exam_tip.th | หลักจำตัวชี้วัดในข้อสอบ: Vanity metrics = ตัวเลขมหาศาลที่ดูน่าตื่นเต้นแต่ตัดสินใจอะไรไม่ได้ (เช่น port scan ที่บล็อกได้); Useful metrics = สัดส่วน อัตราส่วน และแนวโน้มที่นำไปสู่การแก้ไขปรับปรุง | เลือกตัวชี้วัดที่สนับสนุนการตัดสินใจของกลุ่มเป้าหมาย จำนวนครั้ง อัตรา ร้อยละ และแนวโน้มล้วนต้องกำหนดขอบเขตและวิธีตีความ |

### Q628 — Domain 2 / Objective 2.4

**Verified issue:** One incident is conflated with MTTD; alert-to-containment is labeled a universal respond metric.

**Evidence:** R11, L06. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.correct.en | Time to Detect begins at the initial security breach milestone (08:00) and terminates upon formal detection alert generation (10:00), spanning exactly 2 hours. | For this incident, using the supplied 10:00 detection milestone, TTD is 10:00 minus 08:00, or 2 hours. A mean time to detect would require averaging defined detection intervals over a set of incidents. |
| explanation_detail.correct.th | Time to Detect เริ่มต้นนับตั้งแต่วินาทีที่ระบบถูกเจาะ (08:00) จนถึงจุดที่มีการตรวจพบและแจ้งเตือนอย่างเป็นทางการ (10:00) รวมเป็นเวลา 2 ชั่วโมงพอดี | สำหรับเหตุการณ์นี้ เมื่อใช้จุดตรวจพบเวลา 10:00 ตามข้อมูลในโจทย์ TTD คือ 10:00 ลบ 08:00 เท่ากับ 2 ชั่วโมง ส่วน Mean time to detect ต้องคำนวณค่าเฉลี่ยของช่วงเวลาตรวจพบที่กำหนดไว้จากหลายเหตุการณ์ |
| explanation_detail.incorrect[2].text_en | The 1.5-hour duration measures Time to Respond (TTR) or Time to Contain, starting from the alert timestamp and ending at active host containment. | The 1.5-hour interval runs from the detection alert to host isolation. It is a detection-to-containment interval, not the compromise-to-detection interval asked for; a response metric needs its own defined endpoints. |
| explanation_detail.incorrect[2].text_th | ช่วงเวลา 1.5 ชั่วโมงคือ Time to Respond (TTR) หรือเวลาที่ใช้ในการตอบสนองและกักกันความเสียหาย ซึ่งเริ่มนับหลังการตรวจจับพบแล้ว | ช่วง 1.5 ชั่วโมงนับจากการแจ้งเตือนตรวจพบถึงการแยกเครื่อง เป็นช่วงเวลาจากตรวจพบถึงจำกัดผลกระทบ ไม่ใช่จากเริ่มถูกเจาะถึงตรวจพบที่โจทย์ถาม และตัวชี้วัดการตอบสนองต้องกำหนดจุดเริ่มและจุดสิ้นสุดของตนเอง |
| explanation_detail.exam_tip.en | Phase 3.5 Revalidated milestone logic: MTTD start = Intrusion occurred; MTTD end = Alert/Detection triggered. Do not confuse with Response (Alert to Containment). | Use the stated milestones and units. TTD describes this incident; MTTD is an average over an explicitly defined incident set. |
| explanation_detail.exam_tip.th | หลักการที่ถูกต้องตาม Phase 3.5: จุดเริ่ม MTTD = เกิดการบุกรุก; จุดสิ้นสุด MTTD = ระบบตรวจจับและแจ้งเตือน อย่าสับสนกับเวลา Response (นับจากแจ้งเตือนจนถึงควบคุมเหตุการณ์) | ใช้จุดเวลาและหน่วยที่โจทย์ระบุ TTD อธิบายเหตุการณ์นี้ ส่วน MTTD เป็นค่าเฉลี่ยของกลุ่มเหตุการณ์ที่กำหนดไว้อย่างชัดเจน |

### Q633 — Domain 2 / Objective 2.4

**Verified issue:** Tip asserts an exclusive universal board/report audience rule rather than the stated communication requirement.

**Evidence:** R11, L06. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Boards of Directors require formal executive reports focusing on strategic trends, business risk, and resource alignment, rather than tactical operational noise. | A business-aligned executive report fits the strategic decision needs stated in this scenario. |
| explanation_detail.exam_tip.en | Target audience rule: Board = Formal Strategic Reports (Risk, Business, Budget); Managers = Scorecards (Targets, SLAs); Analysts/SOC = Real-time Dashboards (Alerts, Packets). | Match the information, level of detail and format to the decision and audience. A strategic report fits this scenario; boards can also use suitable scorecards or dashboards. |
| explanation_detail.exam_tip.th | กฎการเลือกรูปแบบรายงานตามกลุ่มผู้ฟัง: คณะกรรมการ (Board) = รายงานกลยุทธ์ระดับบริหาร (ความเสี่ยง, ธุรกิจ, งบประมาณ); ผู้จัดการ = Scorecards (เป้าหมาย, SLAs); นักวิเคราะห์ SOC = แดชบอร์ดเรียลไทม์ (แจ้งเตือน, แพ็กเก็ต) | จับคู่ข้อมูล ระดับรายละเอียด และรูปแบบกับการตัดสินใจและกลุ่มเป้าหมาย รายงานเชิงกลยุทธ์เหมาะกับโจทย์นี้ แต่คณะกรรมการอาจใช้ Scorecard หรือ Dashboard ที่เหมาะสมได้เช่นกัน |

### Q636 — Domain 2 / Objective 2.1

**Verified issue:** Risk-acceptance authority is assigned universally by job title instead of governance delegation.

**Evidence:** R06, L06. **Key:** C retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Residual risk must be recorded in the risk register and formally accepted by the designated business asset owner. | Residual risk should be documented and accepted through the designated organizational authority. |
| explanation_detail.correct.en | Residual risk is the risk that remains after implementing all planned security controls. Governance requires documenting this residual risk in the enterprise risk register and obtaining formal, informed risk acceptance from the designated business asset owner who has the authority and budget to absorb the impact. | The residual risk should be documented and referred to the designated risk-acceptance authority. Among these options, the designated business asset owner best matches that governance responsibility; the organization must define the owner’s authority and escalation limits. |
| explanation_detail.correct.th | ความเสี่ยงคงเหลือ (Residual Risk) คือความเสี่ยงที่ยังหลงเหลืออยู่หลังติดตั้งมาตรการป้องกันแล้ว หลักการกำกับดูแลกำหนดให้บันทึกความเสี่ยงนี้ลงในทะเบียนความเสี่ยง และต้องได้รับการลงนามยอมรับอย่างเป็นทางการจากเจ้าของทรัพย์สินทางธุรกิจ | ควรบันทึกความเสี่ยงที่เหลือและเสนอให้ผู้มีอำนาจยอมรับความเสี่ยงที่ได้รับมอบหมาย ในบรรดาตัวเลือก เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายตรงกับความรับผิดชอบด้านการกำกับดูแลมากที่สุด โดยองค์กรต้องกำหนดอำนาจและขอบเขตการส่งต่อของเจ้าของนั้น |
| explanation_detail.incorrect[1].text_en | Operational IT staff or administrators cannot accept business risk; only business asset owners or executive management possess the authority to accept risk. | Deploying firewall rules does not itself authorize an administrator to accept the organization’s business risk. The scenario identifies no such delegation to the junior administrator. |
| explanation_detail.incorrect[1].text_th | เจ้าหน้าที่ไอทีระดับปฏิบัติการไม่มีอำนาจในการยอมรับความเสี่ยงทางธุรกิจขององค์กร | การติดตั้งกฎไฟร์วอลล์ไม่ได้ให้อำนาจผู้ดูแลระบบยอมรับความเสี่ยงทางธุรกิจขององค์กรโดยตัวมันเอง และโจทย์ไม่ได้ระบุการมอบอำนาจดังกล่าวแก่ผู้ดูแลระบบระดับต้น |
| explanation_detail.exam_tip.en | On the ISC2 CC exam, watch out for answers claiming security can achieve 'zero risk.' Security balances protection with business functionality, and residual risk must always be accepted by business owners. | Check that residual risk is documented and accepted through the organization’s designated authority. Technical implementation alone is not risk-acceptance authorization. |
| explanation_detail.exam_tip.th | ในการสอบ ISC2 CC ให้ระวังตัวเลือกที่อ้างว่าความปลอดภัยสามารถทำให้ 'ความเสี่ยงเป็นศูนย์' ได้ เพราะความมั่นคงปลอดภัยต้องรักษาสมดุลกับการใช้งาน และความเสี่ยงคงเหลือต้องมีเจ้าของธุรกิจลงนามยอมรับเสมอ | ตรวจว่าความเสี่ยงที่เหลือได้รับการบันทึกและยอมรับผ่านผู้มีอำนาจที่องค์กรกำหนด การนำมาตรการทางเทคนิคไปใช้เพียงอย่างเดียวไม่ใช่การมอบอำนาจยอมรับความเสี่ยง |

### Q638 — Domain 2 / Objective 2.2

**Verified issue:** Discussion-based exercise is generalized as a mandatory universal progression with zero operational effect.

**Evidence:** R10, L07. **Key:** A retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | Tabletop exercises allow teams to validate DRP roles and procedures cost-effectively with zero operational disruption. | A tabletop can review roles and procedures without intentionally interrupting production; it does not prove technical recovery. |
| explanation_detail.correct.en | A tabletop exercise (or structured walkthrough) brings key emergency personnel together in a discussion-based, conference room setting to step through disaster scenarios role-by-role. It validates procedural logic and clarifies responsibilities at low cost with zero disruption to active business operations, making it the recommended initial test for any new DRP. | A discussion-based tabletop exercise fits the stated goal of reviewing roles, recovery procedures and communications without intentionally interrupting production. It can expose procedural gaps, but does not demonstrate that technical recovery or failover will work. |
| explanation_detail.correct.th | การฝึกซ้อมบนโต๊ะ (Tabletop exercise หรือ Structured walkthrough) เป็นการรวมผู้มีบทบาทสำคัญมาทบทวนขั้นตอนการกู้คืนในห้องประชุมเพื่อสร้างความเข้าใจและหาข้อบกพร่อง โดยไม่กระทบต่อการทำงานจริงและประหยัดค่าใช้จ่าย จึงเป็นวิธีเริ่มต้นที่เหมาะสมที่สุด | การฝึกซ้อม Tabletop แบบอภิปรายเหมาะกับเป้าหมายทบทวนบทบาท ขั้นตอนกู้คืน และการสื่อสาร โดยไม่จงใจหยุดระบบจริง สามารถช่วยพบช่องว่างของกระบวนการ แต่ไม่ได้พิสูจน์ว่าการกู้คืนทางเทคนิคหรือ Failover จะทำงานได้ |
| explanation_detail.incorrect[1].text_en | A parallel test requires duplicate systems and substantial resources, occurring later in the testing progression. | The proposed 48-hour parallel processing test requires recovery resources and operational coordination beyond the low-cost discussion sought here. Exercise selection depends on objectives and risk, not a universal sequence. |
| explanation_detail.incorrect[1].text_th | การทดสอบแบบคู่ขนานต้องใช้ทรัพยากรสูงและจัดอยู่ในลำดับขั้นการทดสอบที่สูงกว่า | การทดสอบประมวลผลคู่ขนาน 48 ชั่วโมงที่เสนอต้องใช้ทรัพยากรกู้คืนและการประสานงานเกินกว่าการอภิปรายต้นทุนต่ำที่ต้องการในโจทย์ การเลือกแบบฝึกขึ้นกับวัตถุประสงค์และความเสี่ยง ไม่ใช่ลำดับเดียวที่ใช้ทุกกรณี |
| explanation_detail.exam_tip.en | On the ISC2 CC exam, recognize the standard testing progression: Checklist review -> Tabletop/Walkthrough -> Simulation -> Parallel test -> Full interruption test. | Choose the exercise that tests the stated objective within the disruption and resource constraints. Discussion and technical execution provide different evidence; terminology and progression may vary by program. |
| explanation_detail.exam_tip.th | ลำดับขั้นการทดสอบ DRP สำหรับการสอบ CC: ตรวจสอบเอกสาร (Checklist) -> ซักซ้อมบนโต๊ะ (Tabletop) -> จำลองสถานการณ์ (Simulation) -> ทดสอบคู่ขนาน (Parallel) -> ตัดระบบจริง (Full-interruption) | เลือกการฝึกที่ตรวจสอบวัตถุประสงค์ตามข้อจำกัดเรื่องผลกระทบและทรัพยากร การอภิปรายและการลงมือทดสอบทางเทคนิคให้หลักฐานต่างกัน และชื่อหรือขั้นตอนการฝึกอาจแตกต่างตามโปรแกรม |

### Q639 — Domain 2 / Objective 2.2

**Verified issue:** Shortest MTD is asserted as a universal recovery sequence ignoring dependencies.

**Evidence:** R10, L06. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| short_explanation_en | System recovery sequencing is prioritized by shortest Maximum Tolerable Downtime (MTD) and BIA criticality. | Recovery priorities consider business criticality, downtime tolerances and system dependencies. |
| explanation_detail.correct.en | In business continuity and disaster recovery, systems must be restored strictly in accordance with recovery priorities established by the Business Impact Analysis (BIA). The system with the shortest Maximum Tolerable Downtime (MTD) must be restored first because exceeding its threshold threatens organizational viability. | Among the listed choices, emergency dispatch has the stated safety-critical function and the shortest downtime tolerance, so it is the best recovery priority on the supplied facts. An actual recovery sequence must also account for the BIA’s dependencies, prerequisites and approved recovery objectives. |
| explanation_detail.correct.th | ในการกู้คืนระบบจากภัยพิบัติ การจัดลำดับความสำคัญต้องอิงตามผลวิเคราะห์ BIA โดยระบบที่มีค่า MTD สั้นที่สุดต้องได้รับการกู้คืนเป็นอันดับแรกเพื่อป้องกันความเสียหายต่อความอยู่รอดขององค์กร | ในบรรดาตัวเลือก ระบบ Emergency dispatch มีหน้าที่สำคัญต่อความปลอดภัยตามโจทย์และมีระยะเวลาที่ทนต่อการหยุดทำงานสั้นที่สุด จึงควรได้รับความสำคัญในการกู้คืนจากข้อมูลที่ให้มา ส่วนลำดับกู้คืนจริงต้องพิจารณาระบบที่พึ่งพากัน เงื่อนไขก่อนดำเนินการ และเป้าหมายกู้คืนที่อนุมัติใน BIA ด้วย |

### Q645 — Domain 2 / Objective 2.4

**Verified issue:** Tip attributes a fixed audience-format rule to the CC exam.

**Evidence:** R11, L06. **Key:** D retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| explanation_detail.exam_tip.en | Audience matching is key on the CC exam: Tactical/Operational (SOC) = Real-time Dashboards; Strategic/Governance (Board/Audit) = Periodic Scorecards and Executive Reports. | In this scenario, a live dashboard fits SOC monitoring and a periodic scorecard fits target-based review. Select formats by the audience’s actual decisions, not by an exclusive job-title rule. |
| explanation_detail.exam_tip.th | หลักการจับคู่กลุ่มผู้รับสารในการสอบ CC: ระดับปฏิบัติการ (SOC) = แดชบอร์ดเรียลไทม์; ระดับกลยุทธ์/การกำกับดูแล (บอร์ด/ผู้บริหาร) = สกอร์การ์ดและรายงานสรุปเป็นงวดๆ | ในโจทย์นี้ Dashboard แบบสดเหมาะกับการเฝ้าระวังของ SOC และ Scorecard เป็นระยะเหมาะกับการทบทวนตามเป้าหมาย เลือกรูปแบบตามการตัดสินใจจริงของกลุ่มเป้าหมาย ไม่ใช่กฎที่ผูกตายตัวกับชื่อตำแหน่ง |

### Q1018 — Domain 5 / Objective 5.2

**Verified issue:** Thai stem omits the English MOST appropriate qualifier.

**Evidence:** R01, L08. **Key:** B retained; one best choice remains defensible on the supplied facts in desk review. **EN/TH check:** the changed language variants preserve the same concept, scenario criterion and qualifications; no option-order/key change. **Status:** applied, ready for human academic/bilingual review.

| Changed field | Before | After |
| --- | --- | --- |
| question_th | รายงานภัยคุกคามที่เชื่อถือได้ระบุ Hash ไฟล์อันตรายและช่วงที่ Campaign ทำงาน นักวิเคราะห์ต้องการทราบว่า Endpoint ที่เกี่ยวข้องเคยพบไฟล์นั้นหรือไม่ ควรใช้รายงานอย่างไร? | รายงานภัยคุกคามที่เชื่อถือได้ระบุ Hash ไฟล์อันตรายและช่วงที่ Campaign ทำงาน นักวิเคราะห์ต้องการทราบว่า Endpoint ที่เกี่ยวข้องเคยพบไฟล์นั้นหรือไม่ การใช้รายงานในข้อใดเหมาะสมที่สุด? |

## Deferred questions — unchanged, human decision required

| ID / objective / stored key | Issue | Proposed correction — NOT applied | Evidence / uncertainty |
| --- | --- | --- | --- |
| 619 / 2.2 / C | Cold-site choice is plausible from facility/cost description, but five-day recovery is not demonstrated. | Propose adding verified procurement, delivery, installation, restore and validation lead times, or narrowing the item to site classification. Do not promise RTO compliance merely from cold-site label. | R10: the general site description includes infrastructure/telecom connections, while the detailed cold-site description distinguishes installed telecom equipment; definitions vary. Document this conflict and specify actual capabilities instead of silently choosing one wording. |
| 629 / 2.4 / A | MTTR/respond has no defined operational endpoint in the question; containment is asserted as universal. | Propose explicitly defining start/end events, scope and incident cohort in the SLA, or testing an explicitly named detection-to-containment metric. | R11 and local D2 sum:486 use time measures/framing but do not establish a universal containment endpoint. A, the stored key, is not approved as a universal definition. |
| 630 / 2.4 / D | The intended D choice calls percentage remediated within SLA a velocity; it is a timeliness/compliance proportion. | Propose replacing the velocity wording in both answer languages and aligning example/denominators. This changes a keyed option, so hold for human approval. | R11 supports defined units and interpretation. The stored key remains unchanged; current answer wording is not academically accepted by this repair. |
| 637 / 2.2 / D | Hot-site plus real-time mirroring does not prove RPO zero or tested sub-15-minute service recovery; explanation relaxes zero to near-zero. | Propose specifying acknowledgment/replication-loss behavior and a tested recovery capability, and replacing the universal MANDATORY assurance with a bounded requirement. | R10 describes readiness models, not a blanket zero-loss guarantee. D is the closest supplied design but its guarantee is unsupported; no key or explanation change was applied. |

No answer-key change is proposed as approved. Q629/Q630/Q637 retain unresolved definition/answer-wording concerns; Q619 needs capability evidence. Their existing keys are preserved, not newly certified.

## Other audit findings retained

| IDs | Disposition |
| --- | --- |
| 594, 635 | Insurance transfer is correctly described as sharing financial exposure. Concept repetition is real, but not an answer-key error. No rewrite/replacement in repair-only scope. |
| 605 | Layered controls describe the defense-in-depth design rationale; no explicit guarantee against every incident is established. The audit’s concern is cautionary wording, not a verified wrong key. Retained. |
| 617, 620, 621, 622, 623, 631, 641 | Verbose stems, awkward PRIMARY grammar and/or weak distractors are editorial/discrimination concerns. No demonstrated academic-key correction requires rewriting them here. |
| 624 | Vishing/pretexting fits the phone scenario. Targeted-phishing terminology can vary across taxonomies; no competing supplied choice displaces the specific phone-based answer. Avoid a new universal email-only rule; leave the item unchanged pending editorial review. |
| 632, 644 | KPI/KRI decisions are defensible, but concept repetition remains. |
| 646 | Behavioral reporting measure fits the stated awareness objective. Denominator/false-positive interpretation matters to deployment but does not establish a wrong supplied key. Duplicate/distractor quality remains an editorial concern. |

The original D1 answer-position imbalance (14 A, 8 B, 2 C, 0 D; eleven consecutive A keys) remains. Correcting it would require option/key reordering and is outside this authorization. No semantic duplicate was removed and no substitute item was generated.

## Automated validation and historical failures

| Command / evidence | Before | After / resumed | Interpretation |
| --- | --- | --- | --- |
| `node artifacts/qa/question-bank-academic-repair/verify-repairs.mjs` | 4 pass / 4 fail | 8 / 8 pass, freshly rerun on resume | Red cases reproduced unrelated topics, wrong distractor mapping, unapplied proposals and missing wording corrections. Green also checks 129 hashes, schema, exact field scope and complete real-renderer EN/TH content. This is not academic proof by itself. |
| `node tools/verify-study-answers.mjs` | 8 / 8 pass | 8 / 8 pass | Existing Study Answers behavior tests. |
| `node tools/verify-quiz-minimal-ui.mjs` | 6 / 6 pass | 6 / 6 pass | Existing scoped quiz presentation/disclosure checks. |
| `node tools/verify-phase4-quiz-engine.mjs` | Not run before this repair | 7 / 7 pass on resume | Legacy engine/session/scoring checks; no prior-repair comparison claimed. |
| `node tools/verify-session-persistence.mjs` | Not run before this repair | 8 / 8 pass on resume | Legacy autosave/resume, absolute timer expiry and expired-Exam submission, storage defense and 583-record invariants. |
| `node tools/verify-exam-versions.mjs` | 14 pass / 5 fail | 14 pass / 5 fail | Historical assumptions treat next-bank as unavailable; registry/load/rejection/start-screen expectations conflict with publication. Missing original/isc2_cc_BothThai-eng_583quiz.html also fails. No tests weakened. |
| `node tools/verify-isc2-question-migration.mjs` | Exit 1 | Exit 1 | Historical root isc2_cc_BothThai-eng_583quiz.html fixture missing; no migration performed. |
| `node tools/verify-domain5-integration.mjs` | Exit 1 at pre-existing Reading Notes hash mismatch | Exit 1 now first at deliberately repaired domain-1.js hash | Changed failure location is an expected conflict with a historical protected baseline, not an unchanged passing regression. Updating or bypassing the baseline was not authorized. |
| Frozen Domain 5 staging comparison | Original authoring snapshot | Q1018 question_th is the sole current/staged difference | The repaired qualifier intentionally differs from old staged/accepted text. Historical approvals are not approvals of this repair. No source manifest/QA history was silently rewritten. |

Full before/after/resumed logs and `regression-comparison.json` are under the evidence directory. The historical integration checker stops before later equality checks; no claim is made that its remaining assertions passed. A later authorized authoring-snapshot/QA reconciliation is needed before using that checker as a clean release gate. Do not regenerate the repaired bank from the frozen pre-repair staging snapshot.

## Real Chrome validation and screenshots

Existing saved Chrome evidence was inspected on resume; the bank files still exactly match the repair proposals, so the completed browser matrix was reused rather than rerun. `verify-browser.mjs` launched the installed `C:/Program Files/Google/Chrome/Application/chrome.exe` in headless Chrome with a separate temporary profile and a loopback-only test server. The initial sandbox launch failed to start Chrome’s crash handler; the authorized run outside the sandbox succeeded. This was actual Chrome, not a DOM mock or a claim of manual human acceptance.

- Before: **205 checks, 144 view/size/theme/language states, 471 complete bank/language render cases**, zero application console errors/exceptions.
- After: **350 checks, 144 states, 471 complete bank/language render cases**, zero application console errors/exceptions.
- Representative repaired IDs **588, 591, 611, 1018** in Study Answers, Practice and completed Exam review; EN/TH/EN+TH; light/dark; 1440×900 and 390×844. The 471 cases are renderer-content checks for 157×3 language modes, not 471 separately navigated pages.
- Practice hides feedback before answering; active Exam selection/navigation has no correct-answer highlight or explanation; finishing/review exposes the permitted explanation. Previous/Next and correct/wrong score restoration passed. Legacy decorated/nested explanations remain unchanged.
- 24 before and 24 after full-page screenshots retained. Q588 before/after desktop and Q611 after dark-mobile screenshots were visually inspected; no horizontal overflow or omitted rationale was observed. All matrix states also have DOM completeness/alignment/overflow checks.

| Screenshot | Before | After |
| --- | --- | --- |
| Q588 study 1440x900 | [PNG](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-bank-academic-repair/before/q588-study-1440x900-light-both.png) | [PNG](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-bank-academic-repair/after/q588-study-1440x900-light-both.png) |
| Q611 practice 390x844 | [PNG](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-bank-academic-repair/before/q611-practice-390x844-dark-both.png) | [PNG](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-bank-academic-repair/after/q611-practice-390x844-dark-both.png) |
| Q591 review 1440x900 | [PNG](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-bank-academic-repair/before/q591-review-1440x900-light-both.png) | [PNG](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-bank-academic-repair/after/q591-review-1440x900-light-both.png) |
| Q1018 study 390x844 | [PNG](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-bank-academic-repair/before/q1018-study-390x844-dark-both.png) | [PNG](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-bank-academic-repair/after/q1018-study-390x844-dark-both.png) |

## Preservation and exact file scope

Entry snapshot: **1337 files**. Exactly three existing production files changed; **1334 protected files** remain byte-identical. Full hashes: `entry-hashes.json`, `applied-spans.json`, `preservation.json`. Per-record before/after hashes and changed fields: `record-preservation.json`. All academic-source file paths and prior audit reports in the entry snapshot retain their hashes.

| Existing file modified | Repair scope |
| --- | --- |
| `data/certs/isc2/cc/versions/next-bank/questions/domain-1.js` | 12 Domain 1 records; 25 field-value spans. |
| `data/certs/isc2/cc/versions/next-bank/questions/domain-2.js` | 15 Domain 2 records; 53 field-value spans. |
| `data/certs/isc2/cc/versions/next-bank/questions/domain-5.js` | One Domain 5 Thai qualifier; one field-value span. |
| `docs/plans/task.md` | Updated the academic-repair task row only during this task; other pre-existing rows/changes retained. |

Created report: `docs/plans/isc2-cc-2026/question-bank-157-academic-repair.md`. New evidence/scripts/logs/screenshots are confined to `artifacts/qa/question-bank-academic-repair/`; the exact generated-file inventory is `delivery-manifest.json`. No other working-tree edits shown by Git are attributed to this task: they were present in the entry snapshot and are preserved.

| Objective | Unchanged question count |
| --- | --- |
| 1.1 | 7 |
| 1.2 | 6 |
| 1.3 | 4 |
| 1.4 | 5 |
| 1.5 | 2 |
| 2.1 | 10 |
| 2.2 | 9 |
| 2.3 | 10 |
| 2.4 | 10 |
| 3.1 | 12 |
| 3.2 | 11 |
| 4.1 | 15 |
| 4.2 | 8 |
| 4.3 | 10 |
| 5.1 | 9 |
| 5.2 | 10 |
| 5.3 | 5 |
| 5.4 | 6 |
| 5.5 | 8 |

Objective metadata is held in audit/authoring sidecars rather than runtime question fields. The ID-to-objective mapping and its source files are unchanged; no question was reassigned. No prior audit report was rewritten to conceal that its findings describe the before state.

## Outstanding review and acceptance

Phase 1’s controlled repairs and requested verification/documentation are ready for human academic review. **Human acceptance has not occurred.** The four deferred questions, independent academic/key and qualified bilingual acceptance, historical fixture/baseline/staging reconciliation, and retained editorial/duplication/key-position issues remain open. The 111 unflagged records were structurally/preservation checked here, not newly certified through a complete independent academic review.

No answer key changed, no additional questions were generated or published, and this repair does not authorize the 43-question expansion. Human review should accept/reject the applied changes and decide the held wording/assumption corrections before declaring the full bank academically accepted.

**READY FOR HUMAN ACADEMIC REVIEW — EXPANSION NOT AUTHORIZED.**
