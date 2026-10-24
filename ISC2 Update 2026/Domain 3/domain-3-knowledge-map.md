---
id: domain-3-knowledge-map
domain_id: 3
prepared_date: 2026-10-23
review_status: completed
academic_verification: primary-source-checked-by-assistant
translation_review: bilingual-meaning-checked-by-assistant
human_signoff: not-performed
readiness: READY
total_entries: 25
accepted_entries: 15
corrected_entries: 10
---

# Domain 3 - Verified knowledge map

**READY for comprehensive foundational question development within the verified scope below.** There are **25 usable bilingual entries: 15 ACCEPTED and 10 CORRECTED**. The course's incomplete teaching has been supplemented; its original files and source-only coverage findings remain unchanged. Readiness means a sufficient evidence-backed authoring baseline, not a guarantee of exam coverage or approval of questions that do not yet exist.

Reviewed: 2026-10-23 (Asia/Bangkok). Read the complete [source review](source-review-and-coverage-analysis.md), consulted its original transcript and relevant captures, and checked the linked primary references. Retained its inventory and evidence identifiers: **T** = [DOMAIN 3.txt](DOMAIN%203.txt); **S02-S17** identify the exact screenshots in that review's inventory, not original slide numbers. Transcript citations below identify supplied block starts; the overlapping timecodes are not precise clip boundaries.

The entry IDs follow the project's `KNOW-Dn-nnn` convention after checking that Domain 3 contains only empty staging templates. The [knowledge template](../../content/isc2-cc-2026/templates/knowledge-template.md), Domain 1 extraction structure and Domain 2 reviewed map informed the format. This working map is Markdown authoring evidence, not an application schema. Template vocabulary sections are intentionally omitted under this task's restriction. No question IDs were allocated.

## Scope, provenance and status rules

The official domain is **Identity And Access Management (IAM) Concepts**, **20%**, effective **September 1, 2026** ([R01], printed pp. 3 and 5). Objective titles below are official; descriptions of their eight underlying bullets are paraphrased. Neither the PDF nor this map invents 3.1.x/3.2.x numbers. Named technologies and four individual access models elaborate the broader scope; they are not extra literal outline bullets. [R02]'s additional Domain 3 AI explanation explicitly supports automated identities, MFA and anomalous-login concepts; it is distinguished from the numbered PDF.

- **OFFICIAL:** ISC2 determines scope ([R01], [R02]); it is not the technical source for every definition.
- **COURSE:** supplied T/S teaching; evidence of instruction, not automatic technical authority.
- **EXTERNAL:** NIST, government guidance or primary vendor documentation supplies verification or explicitly identified supplementation. Vendor examples establish capabilities, not mandatory ISC2 products or configurations. Federal requirements are not generalized into mandatory rules for every employer.
- **ACCEPTED:** the bounded explanation is supported and usable. **CORRECTED:** usable only in the corrected form, replacing the documented misleading interpretation. Both are verified authoring inputs. **NEEDS_REVIEW:** unresolved original claim, excluded from authoring dependence. **EXCLUDED:** do not use the claim as evidence.

Each entry gives its objective, classification, evidence, English/Thai explanation, use case and misconception. All scope mappings are OFFICIAL via [R01], with [R02] for AI additions. Technical and bilingual parity checks here were performed by the assistant; no independent human or ISC2 endorsement is claimed. English technical labels are retained where Thai alone could obscure meaning.

## Official coverage and completion matrix

| Objective / bullet scope | Verified entries | Evidence and depth supporting readiness |
| --- | --- | --- |
| 3.1 / Define roles | 003, 021 | Role permissions, approval/implementation/review responsibilities and overbroad-role limitations; S02 plus [R07], [R10]. |
| 3.1 / Establish identities and access | 001-004, 015 | Identity/account/credential distinctions, authorized provisioning and proofing versus later authentication; S03 plus [R03], [R04], [R07]. |
| 3.1 / Reassess access | 005-007, 014 | Role-change adjustment, recertification, actual remediation, stale rights, account ownership and automation; S04 plus [R14], [R17], [R18], [R19]. |
| 3.1 / Withdraw access | 008-009, 014 | Account and entitlement removal, retention, independent sessions and service dependencies; S05-S06 plus [R04], [R06], [R17]. |
| 3.1 / Supporting guidance and tools | 010-013 | Distinct framework, directory, IdP, access-enforcement and governance purposes, including a basic federation/SSO boundary; S07-S08 plus [R03], [R06], [R08], [R14], [R15], [R16]. |
| 3.2 / Minimum necessary privileges | 016, 014 | Task-specific user/process access and impact reduction without absolute security claims; S09 plus [R21]. |
| 3.2 / Separate conflicting duties | 017, 021 | Distinguish conflicting authorizations from merely dividing task names; financial and automation examples with residual collusion risk; S11 plus [R10], [R21]. |
| 3.2 / Authorization models | 018-022 | Policy/enforcement distinction and requirement-led DAC/MAC/RBAC/ABAC comparisons; S14-S17 plus [R09], [R10], [R11], [R12], [R13]. |
| Additional official AI guidance / automated identities | 014, 016-017 | Owned, scoped and reviewed bot/service access, retirement and approval boundaries; [R02], [R17], [R22]. |
| Additional official AI guidance / authentication monitoring | 023-025 | Authentication versus authorization, independent MFA factors, anomalous sign-ins and proportionate assessment; [R02], [R05], [R16], [R20]. |

All eight numbered-outline bullets now have verified foundational coverage; no required bullet remains unresolved. The scope does not require protocol internals, assurance-level memorization, product administration or advanced IAM architecture. Physical-entry controls are not a separate 2026 numbered Domain 3 objective.

## 3.1 Understand identity life cycle management

### KNOW-D3-001 - Identity, account and identifier

**Objective:** 3.1. **Academic status:** CORRECTED. **Classification/evidence:** COURSE T@00:04:11; EXTERNAL [R03], glossary entries for digital identity/identifier/subscriber account; [R04], subscriber-account records. The course equates identity with username; external evidence supplies the distinction.

**EN:** A digital identity represents an entity through attributes in a particular context. An account is the system's managed record associated with that entity; an identifier names or distinguishes it within a defined scope. A username is an identifier, not the complete identity. One person can have different accounts or identities across systems.

**TH:** อัตลักษณ์ดิจิทัลแทนบุคคลหรือสิ่งหนึ่งผ่านชุดคุณลักษณะในบริบทหนึ่ง บัญชีคือระเบียนที่ระบบใช้จัดการสิ่งนั้น ส่วนตัวระบุใช้เรียกหรือแยกแยะภายในขอบเขตที่กำหนด ชื่อผู้ใช้เป็นตัวระบุ ไม่ใช่อัตลักษณ์ทั้งหมด บุคคลเดียวอาจมีหลายบัญชีหรือหลายอัตลักษณ์ในต่างระบบ

**Use case / relevance:** linking an employee's directory and application accounts. **Misconception:** the same displayed username proves accounts belong to the same entity.

### KNOW-D3-002 - Credentials and authenticators

**Objective:** 3.1; prerequisite to 3.2. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S03, T@00:04:51; EXTERNAL [R03], credential definition; [R05], introduction and authenticator types. Terminology is externally corrected.

**EN:** In NIST's terminology, a credential binds an identity through an identifier to an authenticator. An authenticator is the secret or device controlled to demonstrate authentication, such as a password or cryptographic authenticator. Passwords are one mechanism; a username/password pair is not a universal credential definition. A public username is not an authentication factor.

**TH:** ตามศัพท์ของ NIST credential เชื่อมอัตลักษณ์ผ่านตัวระบุกับสิ่งที่ใช้พิสูจน์ตัวตน ส่วน authenticator คือความลับหรืออุปกรณ์ที่ผู้ใช้ควบคุมเพื่อยืนยันตัวตน เช่น รหัสผ่านหรืออุปกรณ์เข้ารหัส รหัสผ่านเป็นเพียงวิธีหนึ่ง คู่ชื่อผู้ใช้กับรหัสผ่านจึงไม่ใช่นิยามที่ใช้ได้กับทุกกรณี และชื่อผู้ใช้ที่เปิดเผยได้ไม่ใช่ปัจจัยยืนยันตัวตน

**Use case / relevance:** issuing an authenticator during onboarding. **Misconception:** every credential is a password, or a username contributes a second MFA factor.

### KNOW-D3-003 - Role definition and decision responsibilities

**Objective:** 3.1. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S02; EXTERNAL [R07], AC-2. Job-function teaching is retained; governance responsibilities are supplemented.

**EN:** Define job functions and required permissions before granting access. Organizational policy assigns who may approve access, who implements it and who reviews continuing need; a job title alone does not establish approval authority. Keep these responsibilities explicit.

**TH:** กำหนดหน้าที่งานและสิทธิ์ที่จำเป็นก่อนให้สิทธิ์เข้าถึง นโยบายองค์กรต้องระบุว่าใครอนุมัติ ใครดำเนินการ และใครทบทวนความจำเป็นอย่างต่อเนื่อง ชื่อตำแหน่งเพียงอย่างเดียวไม่ได้ทำให้มีอำนาจอนุมัติ ต้องระบุความรับผิดชอบเหล่านี้ให้ชัดเจน

**Use case / relevance:** finance access approved by the designated authority and implemented by an administrator. **Misconception:** the person creating an account can automatically authorize every permission.

### KNOW-D3-004 - Authorized provisioning

**Objective:** 3.1. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S03, T@00:04:11; EXTERNAL [R07], AC-2. Corrects the universal first-step claim.

**EN:** Provisioning establishes accounts and approved access, including appropriate roles and authenticators. Follow defined prerequisites and approvals, grant needed access and confirm the intended assignment. Account creation is not automatically the first action in every IAM workflow.

**TH:** การจัดเตรียมสิทธิ์หรือ provisioning สร้างบัญชีและสิทธิ์ที่ได้รับอนุมัติ รวมถึงบทบาทและสิ่งที่ใช้ยืนยันตัวตน ต้องทำตามเงื่อนไขและการอนุมัติที่กำหนด ให้สิทธิ์เท่าที่จำเป็น และตรวจสอบการกำหนดสิทธิ์ การสร้างบัญชีไม่ได้เป็นการกระทำแรกของทุกกระบวนการ IAM เสมอไป

**Use case / relevance:** a new employee receives an approved role, not a convenient copy of another person's full access. **Misconception:** urgency removes the need for authorized scope.

### KNOW-D3-005 - Role changes and privilege accumulation

**Objective:** 3.1. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S04, T@00:06:53; EXTERNAL [R14], modification stage. Event-driven handling supplements the periodic-review example.

**EN:** A transfer or promotion requires reassessing existing entitlements as well as assigning new ones. Privilege accumulation occurs when obsolete permissions remain as duties change. Remove rights no longer justified while preserving approved current access; do not wait solely for the next routine review.

**TH:** เมื่อย้ายงานหรือเลื่อนตำแหน่ง ต้องประเมินสิทธิ์เดิมพร้อมกับให้สิทธิ์ใหม่ การสะสมสิทธิ์เกิดเมื่อสิทธิ์ที่หมดความจำเป็นยังคงอยู่หลังหน้าที่เปลี่ยน ควรถอนสิทธิ์ที่ไม่จำเป็นโดยคงสิทธิ์ปัจจุบันที่ได้รับอนุมัติ และไม่รอเพียงการทบทวนตามรอบครั้งถัดไป

**Use case / relevance:** finance-to-IT transfer retaining financial reporting access without need. **Misconception:** promotion justifies keeping every former entitlement.

### KNOW-D3-006 - Access review, recertification and remediation

**Objective:** 3.1. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S04; EXTERNAL [R18], review decisions and applying changes; [R07], AC-2 review frequency. Completion steps are supplemental.

**EN:** An access review compares current rights with current business need; recertification records the decision to retain or withdraw them. The designated reviewer uses suitable evidence, documents decisions, and ensures required removals are applied and checked. A completed review form alone does not remove access. Policy and risk determine cadence.

**TH:** การทบทวนสิทธิ์เปรียบเทียบสิทธิ์ปัจจุบันกับความจำเป็นทางธุรกิจปัจจุบัน การรับรองสิทธิ์ซ้ำบันทึกการตัดสินใจว่าจะคงหรือถอนสิทธิ์ ผู้ทบทวนที่ได้รับมอบหมายใช้หลักฐานที่เหมาะสม บันทึกผล และทำให้แน่ใจว่าการถอนสิทธิ์เกิดขึ้นจริงพร้อมตรวจสอบ แบบฟอร์มที่เสร็จแล้วไม่ได้ถอนสิทธิ์เอง ความถี่ขึ้นกับนโยบายและความเสี่ยง

**Use case / relevance:** reviewer rejects obsolete application access and verifies its removal. **Misconception:** recertification is an automatic renewal or a universal fixed-day schedule.

### KNOW-D3-007 - Inactive accounts versus orphaned accounts

**Objective:** 3.1. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S04, T@00:06:53; EXTERNAL [R19], inactivity investigation; [R14], orphan-account discussion.

**EN:** Inactivity concerns lack of use over a defined period. An orphaned account lacks a valid responsible owner, identity linkage or appropriate management. They can overlap but are different conditions: an orphaned account may still be used. Investigate ownership, purpose and dependencies before deciding remediation.

**TH:** บัญชีที่ไม่เคลื่อนไหวพิจารณาจากการไม่มีการใช้งานในช่วงเวลาที่กำหนด ส่วนบัญชีที่ขาดผู้รับผิดชอบหรือ orphaned account ไม่มีเจ้าของที่เหมาะสม ไม่มีความเชื่อมโยงกับอัตลักษณ์ที่ถูกต้อง หรือขาดการจัดการ ทั้งสองกรณีอาจเกิดร่วมกันแต่ไม่เหมือนกัน บัญชีที่ขาดผู้รับผิดชอบอาจยังถูกใช้อยู่ ต้องตรวจสอบเจ้าของ วัตถุประสงค์ และระบบที่พึ่งพาก่อนจัดการ

**Use case / relevance:** contrast a rarely used approved recovery account with a departed employee's still-active account. **Misconception:** no recent login proves orphaning or justifies immediate deletion.

### KNOW-D3-008 - Deprovisioning and record retention

**Objective:** 3.1. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S05-S06, T@00:08:15; EXTERNAL [R04], subscriber-account suspension/termination; [R17], deprovisioning. Avoids conflating access withdrawal and record destruction.

**EN:** Deprovisioning removes unneeded access after departure, expiry or changed duties. Disable or remove relevant accounts and entitlements according to policy, including application and privileged access. Disabling access and deleting records are different decisions; retain or dispose of records under applicable requirements, not by an assumed universal rule.

**TH:** การถอนสิทธิ์หรือ deprovisioning ยกเลิกการเข้าถึงที่ไม่จำเป็นเมื่อออกจากงาน หมดสัญญา หรือเปลี่ยนหน้าที่ ต้องระงับหรือลบบัญชีและสิทธิ์ที่เกี่ยวข้องตามนโยบาย รวมถึงแอปพลิเคชันและสิทธิ์ระดับสูง การระงับสิทธิ์กับการทำลายระเบียนเป็นคนละการตัดสินใจ การเก็บหรือทำลายข้อมูลต้องเป็นไปตามข้อกำหนดที่ใช้จริง ไม่ใช่กฎเดียวที่สมมติขึ้น

**Use case / relevance:** terminate access at an authorized contract end while preserving required audit records. **Misconception:** every departure requires immediate destruction of the identity history.

### KNOW-D3-009 - Downstream access and independent sessions

**Objective:** 3.1. **Academic status:** ACCEPTED. **Classification/evidence:** EXTERNAL [R06], section 4.7; [R17], deprovisioning. The course lists application revocation but does not explain session independence.

**EN:** An IdP and each relying application can maintain separate sessions. Disabling a central account is not proof that all previously issued access or sessions have ended. During withdrawal, identify relevant applications, credentials and sessions, use their supported revocation controls, and verify the result.

**TH:** IdP และแอปพลิเคชันที่อาศัย IdP อาจดูแลเซสชันแยกกัน การระงับบัญชีกลางไม่ได้พิสูจน์ว่าสิทธิ์หรือเซสชันที่ออกไปก่อนหน้าถูกยกเลิกทั้งหมด เมื่อต้องถอนสิทธิ์ ให้ระบุแอปพลิเคชัน สิ่งรับรอง และเซสชันที่เกี่ยวข้อง ใช้วิธีเพิกถอนที่แต่ละระบบรองรับ และตรวจสอบผล

**Use case / relevance:** a former worker's application session remains active after directory disablement. **Misconception:** federated login creates one universally revocable session. Protocol configuration is outside scope.

### KNOW-D3-010 - IAM guidance versus software tools

**Objective:** 3.1. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S07; EXTERNAL [R03], scope/preface; [R08], PR.AA-01/05. Versions and scope are supplemental.

**EN:** NIST SP 800-63-4 guides digital identity proofing, authentication and federation. CSF 2.0 organizes broader cybersecurity outcomes, including managed identities, reviewed access, least privilege and SoD. Neither is IAM software or a complete enterprise authorization implementation. Organizations use tools to carry out policy and guidance.

**TH:** NIST SP 800-63-4 ให้แนวทางเรื่องการพิสูจน์อัตลักษณ์ การยืนยันตัวตน และการเชื่อมโยงอัตลักษณ์ระหว่างระบบ ส่วน CSF 2.0 จัดหมวดผลลัพธ์ด้านความมั่นคงปลอดภัยที่กว้างกว่า รวมถึงการจัดการอัตลักษณ์ ทบทวนสิทธิ์ ให้สิทธิ์เท่าที่จำเป็น และแยกหน้าที่ ทั้งสองไม่ใช่ซอฟต์แวร์ IAM หรือระบบกำหนดสิทธิ์องค์กรที่นำไปใช้ได้ครบถ้วน องค์กรใช้เครื่องมือปฏิบัติตามนโยบายและแนวทาง

**Use case / relevance:** choose guidance for program design versus a tool for account management. **Misconception:** adopting a framework automatically creates accounts or enforces permissions.

### KNOW-D3-011 - Directory services

**Objective:** 3.1. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S08 names directories; EXTERNAL [R15], directory data store and objects, supplies the explanation.

**EN:** A directory service stores and makes available structured information about identities and other objects, such as accounts, groups and devices. It can support authentication and access administration. Its records may supply other IAM components, but a directory alone does not guarantee complete entitlement governance across every application.

**TH:** บริการไดเรกทอรีจัดเก็บและให้เรียกใช้ข้อมูลอย่างเป็นโครงสร้างเกี่ยวกับอัตลักษณ์และวัตถุอื่น เช่น บัญชี กลุ่ม และอุปกรณ์ บริการนี้อาจสนับสนุนการยืนยันตัวตนและบริหารสิทธิ์ ข้อมูลอาจถูกใช้โดยองค์ประกอบ IAM อื่น แต่ไดเรกทอรีเพียงอย่างเดียวไม่ได้รับประกันการกำกับสิทธิ์ครบทุกแอปพลิเคชัน

**Use case / relevance:** maintain group membership used in access assignment. **Misconception:** a directory, an IdP and a governance workflow are interchangeable responsibilities. Products can combine them.

### KNOW-D3-012 - Identity providers, federation and SSO

**Objective:** 3.1. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S07-S08 only name the areas; EXTERNAL [R06], introduction and IdP role, supplies the mechanism.

**EN:** In a federation transaction, an IdP sends a verifiable assertion about an authentication event to a relying application. Federation can support single sign-on, reducing repeated sign-ins. The application must validate the assertion and apply its access rules; successful IdP authentication is not permission to every resource.

**TH:** ในการเชื่อมโยงอัตลักษณ์ระหว่างระบบ IdP ส่งข้อความยืนยันที่ตรวจสอบได้เกี่ยวกับเหตุการณ์ยืนยันตัวตนให้แอปพลิเคชันที่อาศัยข้อมูลนั้น การเชื่อมโยงนี้สนับสนุน single sign-on เพื่อลดการลงชื่อเข้าใช้ซ้ำ แอปพลิเคชันต้องตรวจสอบข้อความยืนยันและใช้กฎสิทธิ์ของตน การผ่าน IdP ไม่ได้ให้สิทธิ์ทุกทรัพยากร

**Use case / relevance:** one organizational sign-in used by several applications. **Misconception:** SSO eliminates authorization or makes all connected sessions identical.

### KNOW-D3-013 - Access management and identity governance responsibilities

**Objective:** 3.1; supports 3.2. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S08 capability names; EXTERNAL [R16], authentication/authorization; [R14], IGA tool discussion. Role distinctions are supplemental.

**EN:** Access management evaluates and enforces whether a request is allowed under access policy. Identity governance supports deciding, approving, reviewing and withdrawing entitlements across their lifecycle. A directory supplies identity data and an IdP supplies authentication assertions. These responsibilities may be combined in one platform; a product name does not establish which functions are configured.

**TH:** การจัดการการเข้าถึงประเมินและบังคับใช้ว่าคำขอได้รับอนุญาตตามนโยบายหรือไม่ ส่วนการกำกับดูแลอัตลักษณ์สนับสนุนการตัดสินใจ อนุมัติ ทบทวน และถอนสิทธิ์ตลอดวงจรชีวิต ไดเรกทอรีให้ข้อมูลอัตลักษณ์ และ IdP ให้ข้อความยืนยันการยืนยันตัวตน แพลตฟอร์มเดียวอาจรวมหลายหน้าที่ ชื่อผลิตภัณฑ์ไม่ได้บอกว่าตั้งค่าใช้หน้าที่ใดแล้ว

**Use case / relevance:** distinguish login denial from a reviewer's decision to withdraw access. **Misconception:** possessing an IdP automatically completes all access reviews.

### KNOW-D3-014 - Non-human identities and service-account lifecycle

**Objective:** 3.1; applies 3.2 and official AI guidance. **Academic status:** ACCEPTED. **Classification/evidence:** OFFICIAL [R02], Domain 3 AI section; EXTERNAL [R17], planning/permissions/review/deprovisioning; [R22], automated-workload authentication boundary. No specific course lesson.

**EN:** Applications, services and bots need managed identities too. Assign a responsible owner, purpose, required permissions and review/retirement arrangements. Protect authentication material and reassess access when the workload changes or ends. Use authentication suited to automated workloads; do not assume a human MFA prompt can run unattended. Give an approval bot no authority to approve its own requests.

**TH:** แอปพลิเคชัน บริการ และบอตต้องมีการจัดการอัตลักษณ์เช่นกัน ต้องกำหนดผู้รับผิดชอบ วัตถุประสงค์ สิทธิ์ที่จำเป็น และแนวทางทบทวนหรือเลิกใช้งาน ปกป้องสิ่งที่ใช้ยืนยันตัวตนและประเมินสิทธิ์ใหม่เมื่อภาระงานเปลี่ยนหรือสิ้นสุด ใช้วิธียืนยันตัวตนที่เหมาะกับงานอัตโนมัติ ไม่สมมติว่าคำขอ MFA ที่ต้องให้มนุษย์ตอบจะทำงานได้โดยไม่มีผู้ดูแล และไม่ให้บอตอนุมัติคำขอของตนเอง

**Use case / relevance:** retire an unused reporting bot after checking service dependencies. **Misconception:** only employees need ownership, access reviews or deprovisioning. The bot-approval boundary applies entry 017; it is an editorial illustration.

### KNOW-D3-015 - Identity proofing versus later authentication

**Objective:** 3.1; prerequisite to 3.2. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S07 names proofing; EXTERNAL [R04], introduction, supplies its meaning; [R05], introduction, distinguishes authentication.

**EN:** Identity proofing establishes a link between an applicant and a claimed real-life identity to the required confidence. Authentication later verifies control of an authenticator associated with an account. Proofing, authentication and authorization answer different questions; assurance needs depend on service risk. Do not require the highest federal proofing level for every workplace account.

**TH:** การพิสูจน์อัตลักษณ์เชื่อมผู้สมัครกับตัวตนจริงที่อ้างในระดับความเชื่อมั่นที่ต้องการ ส่วนการยืนยันตัวตนภายหลังตรวจสอบการควบคุมสิ่งที่ใช้ยืนยันซึ่งเชื่อมกับบัญชี การพิสูจน์อัตลักษณ์ การยืนยันตัวตน และการอนุญาตสิทธิ์ตอบคนละเรื่อง ระดับความเชื่อมั่นขึ้นกับความเสี่ยงของบริการ ไม่จำเป็นต้องใช้ระดับพิสูจน์สูงสุดของหน่วยงานรัฐบาลกับทุกบัญชีในที่ทำงาน

**Use case / relevance:** distinguish onboarding identity checks from a returning user's login. **Misconception:** knowing an account password proves every real-world identity claim or establishes access rights.

## 3.2 Understand logical access controls

### KNOW-D3-016 - Least privilege and its limits

**Objective:** 3.2. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S09, T@00:12:40 and 00:13:21; EXTERNAL [R21], 03.01.05; [R07], AU family for attribution boundary.

**EN:** Least privilege restricts users and processes to access necessary for assigned tasks. It limits opportunities and damage from misuse, mistakes or compromised accounts; it does not eliminate those threats. Minimal intended permissions alone cannot prove who performed an action. Attribution needs evidence of actual activity.

**TH:** หลักให้สิทธิ์เท่าที่จำเป็นจำกัดผู้ใช้และกระบวนการให้เข้าถึงเท่าที่จำเป็นต่อหน้าที่ ช่วยลดโอกาสและความเสียหายจากการใช้ผิดวัตถุประสงค์ ความผิดพลาด หรือบัญชีที่ถูกยึด แต่ไม่กำจัดภัยเหล่านั้น สิทธิ์ที่ตั้งใจให้ไว้น้อยเพียงอย่างเดียวพิสูจน์ไม่ได้ว่าใครกระทำเหตุ ต้องใช้หลักฐานกิจกรรมจริง

**Use case / relevance:** a reporting identity can read required data without administrative rights. **Misconception:** RBAC assignment or a limited permission list guarantees compromise cannot cause harm.

### KNOW-D3-017 - Separation of duties and conflicting authorizations

**Objective:** 3.2. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S11, S12-S13, T@00:16:12; EXTERNAL [R21], 03.01.04. Original financial diagram remains quarantined under C07.

**EN:** SoD distributes incompatible responsibilities so one individual cannot control all sensitive steps. Enforce the separation through access permissions, not task labels alone. It reduces unilateral fraud, errors and unauthorized actions; collusion and control failures remain possible. Required participants depend on the workflow, not a universal headcount.

**TH:** การแบ่งแยกหน้าที่กระจายความรับผิดชอบที่ขัดกัน เพื่อไม่ให้คนเดียวควบคุมขั้นตอนสำคัญทั้งหมด ต้องบังคับใช้ผ่านสิทธิ์เข้าถึง ไม่ใช่เพียงตั้งชื่องานต่างกัน ช่วยลดการทุจริตโดยลำพัง ความผิดพลาด และการกระทำที่ไม่ได้รับอนุญาต แต่ยังอาจมีการสมรู้ร่วมคิดหรือมาตรการล้มเหลว จำนวนผู้เกี่ยวข้องขึ้นกับกระบวนการ ไม่ใช่จำนวนตายตัว

**Use case / relevance:** prevent the same person or automated identity initiating and approving a payment. **Misconception:** three named roles suffice if one person holds all three. This bounded example replaces reliance on the disputed illustration.

### KNOW-D3-018 - Logical controls, policy and enforcement

**Objective:** 3.2. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S14; EXTERNAL [R08], PR.AA-05; [R16], authorization. Generic enforcement interpretation is supplemented.

**EN:** Logical access controls restrict digital actions on resources according to policy. An access model describes the basis for authorization; an enforcement mechanism implements the decision. A permission to read does not automatically permit changing or deleting data. Select models for stated requirements rather than declaring one universally most secure.

**TH:** มาตรการควบคุมการเข้าถึงเชิงตรรกะจำกัดการกระทำต่อทรัพยากรดิจิทัลตามนโยบาย แบบจำลองการเข้าถึงระบุหลักเกณฑ์ตัดสินสิทธิ์ ส่วนกลไกบังคับใช้ทำให้ผลตัดสินมีผลจริง สิทธิ์อ่านไม่ได้รวมสิทธิ์แก้ไขหรือลบโดยอัตโนมัติ ควรเลือกแบบจำลองตามข้อกำหนด ไม่ประกาศว่าแบบใดปลอดภัยที่สุดเสมอ

**Use case / relevance:** a policy authorizes read-only reporting and the application denies writes. **Misconception:** documenting a rule alone enforces it, or an access-model label proves correct configuration.

### KNOW-D3-019 - Discretionary access control (DAC)

**Objective:** 3.2. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S15, T@00:17:42; EXTERNAL [R11], definitions. Corrects delegated authority versus absence of enforcement.

**EN:** DAC allows a resource owner or other authorized controller to decide who receives access and permitted actions. The system still enforces the resulting permissions. Owner-directed sharing is useful where delegated control is intended; overly broad grants are a risk. DAC is not inherently unrestricted access or universally inferior security.

**TH:** DAC ให้เจ้าของทรัพยากรหรือผู้ควบคุมที่ได้รับมอบอำนาจตัดสินว่าใครเข้าถึงได้และทำอะไรได้ ระบบยังต้องบังคับใช้สิทธิ์ที่กำหนด เหมาะกับการแบ่งปันที่ต้องการให้อำนาจเจ้าของ แต่เสี่ยงจากการให้สิทธิ์กว้างเกินไป DAC ไม่ใช่การเข้าถึงอย่างไร้ข้อจำกัด และไม่ได้ด้อยกว่าด้านความปลอดภัยในทุกกรณี

**Use case / relevance:** an owner grants a colleague read-only access to a project file. **Misconception:** owner discretion means no central system enforces the permissions.

### KNOW-D3-020 - Mandatory access control (MAC) and need-to-know

**Objective:** 3.2. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S16, T@00:19:06 and 00:19:42; EXTERNAL [R12], definitions; [R13], section 4.1(a).

**EN:** MAC enforces policy established by a central authority, commonly using resource labels and subject authorizations; ordinary owners cannot override it. In classified-information examples, appropriate clearance is insufficient by itself: applicable need-to-know and other policy conditions must also be met. The US example additionally requires an approved nondisclosure agreement. This is an example, not the definition of all MAC systems.

**TH:** MAC บังคับใช้นโยบายที่กำหนดโดยอำนาจส่วนกลาง โดยมักใช้ป้ายกำกับทรัพยากรและการอนุญาตของผู้เข้าถึง เจ้าของทั่วไปไม่อาจข้ามนโยบายได้ ในตัวอย่างข้อมูลลับ การมีระดับอนุญาตด้านความลับที่เหมาะสมเพียงอย่างเดียวไม่เพียงพอ ต้องมีความจำเป็นต้องรู้และผ่านเงื่อนไขนโยบายอื่นด้วย ตัวอย่างของสหรัฐฯ ยังต้องมีข้อตกลงไม่เปิดเผยข้อมูลที่ได้รับอนุมัติ กรณีนี้เป็นตัวอย่าง ไม่ใช่นิยามของ MAC ทุกระบบ

**Use case / relevance:** deny classified project access despite high clearance when project need is absent. **Misconception:** a high clearance or the word “mandatory” grants universal access or guarantees superior security.

### KNOW-D3-021 - Role-based access control (RBAC)

**Objective:** 3.2; supports 3.1 role definition. **Academic status:** CORRECTED. **Classification/evidence:** COURSE S02/S17, T@00:21:43; EXTERNAL [R10], roles, sessions and constraints.

**EN:** RBAC associates permissions with roles and assigns users to authorized roles. Reusing role permissions aids consistency and administration. Total access can differ when users have different combinations of roles or activation constraints. Role design must address minimum need and incompatible responsibilities; RBAC does not automatically guarantee least privilege or SoD.

**TH:** RBAC ผูกสิทธิ์กับบทบาทและกำหนดผู้ใช้ให้มีบทบาทที่ได้รับอนุญาต การใช้ชุดสิทธิ์ของบทบาทซ้ำช่วยให้สม่ำเสมอและบริหารง่าย แต่สิทธิ์รวมอาจต่างกันหากผู้ใช้มีหลายบทบาทต่างกันหรือมีข้อจำกัดการเปิดใช้ต่างกัน การออกแบบบทบาทต้องคำนึงถึงความจำเป็นขั้นต่ำและหน้าที่ที่ขัดกัน RBAC ไม่ได้รับประกันหลักสิทธิ์เท่าที่จำเป็นหรือ SoD โดยอัตโนมัติ

**Use case / relevance:** HR records access follows an approved HR role; a broad admin role still needs correction. **Misconception:** sharing one role means identical total access in every circumstance.

### KNOW-D3-022 - Attribute-based access control (ABAC)

**Objective:** 3.2. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S14 only lists the name; EXTERNAL [R09], definition, supplies the accepted explanation.

**EN:** ABAC evaluates attributes of the requesting subject, resource and requested action, and relevant environmental conditions, against policy. It suits access requirements involving several contextual criteria. A role can be one attribute; the distinguishing basis is attribute evaluation against policy, not simply the presence of a job title.

**TH:** ABAC ประเมินคุณลักษณะของผู้หรือสิ่งที่ร้องขอ ทรัพยากร และการกระทำที่ขอ รวมถึงสภาพแวดล้อมที่เกี่ยวข้อง เทียบกับนโยบาย เหมาะกับเงื่อนไขการเข้าถึงที่มีหลายปัจจัยตามบริบท บทบาทอาจเป็นคุณลักษณะหนึ่งได้ จุดสำคัญคือการประเมินคุณลักษณะตามนโยบาย ไม่ใช่เพียงมีชื่อตำแหน่งงาน

**Use case / relevance:** an editorial policy allows a clinician to read assigned-patient records only from an approved device during an authorized shift. **Misconception:** time or location alone defines ABAC, or every use of department data must be RBAC.

### KNOW-D3-023 - Authentication versus authorization

**Objective:** 3.2; prerequisite across 3.1. **Academic status:** ACCEPTED. **Classification/evidence:** COURSE S08 names both; EXTERNAL [R16], authentication/authorization sections, supplies the distinction. Also overlaps official Domain 1 AAA without changing that content.

**EN:** Authentication establishes confidence in a claimed identity; authorization determines whether an entity may perform a particular action on a resource. An authenticated user can still lack permission to a file or administrative function. Authentication strength and access scope solve different problems.

**TH:** การยืนยันตัวตนสร้างความเชื่อมั่นต่ออัตลักษณ์ที่อ้าง ส่วนการอนุญาตสิทธิ์กำหนดว่าสิ่งนั้นทำการกระทำหนึ่งต่อทรัพยากรหนึ่งได้หรือไม่ ผู้ใช้ที่ยืนยันตัวตนแล้วอาจไม่มีสิทธิ์เข้าถึงไฟล์หรือหน้าที่ผู้ดูแลระบบ ความแข็งแรงของการยืนยันตัวตนกับขอบเขตสิทธิ์แก้ปัญหาคนละด้าน

**Use case / relevance:** valid login followed by denied payroll access. **Misconception:** successful authentication, including MFA, grants every requested permission. No claim that all systems require prior authentication for public resources.

### KNOW-D3-024 - MFA factors and limitations

**Objective:** 3.2, additional official AI guidance. **Academic status:** ACCEPTED. **Classification/evidence:** OFFICIAL [R02], Domain 3 AI section; EXTERNAL [R05], MFA definition and authenticator types. No course explanation.

**EN:** MFA requires different authentication-factor types: knowledge, possession or inherence. Password plus PIN remains one factor type; password plus proof of control of a security key uses two. MFA improves authentication assurance but does not supply authorization or eliminate every attack. Automated identities require workload-appropriate authentication, not a fictitious person answering a prompt.

**TH:** MFA ต้องใช้ปัจจัยยืนยันตัวตนต่างประเภท เช่น สิ่งที่รู้ สิ่งที่ครอบครอง หรือคุณลักษณะของบุคคล รหัสผ่านกับ PIN ยังเป็นประเภทเดียว ส่วนรหัสผ่านร่วมกับหลักฐานการควบคุมกุญแจความปลอดภัยเป็นสองประเภท MFA เพิ่มความเชื่อมั่นในการยืนยันตัวตน แต่ไม่ให้สิทธิ์เข้าถึงหรือป้องกันทุกการโจมตี อัตลักษณ์อัตโนมัติต้องใช้วิธีที่เหมาะกับภาระงาน ไม่สมมติว่ามีคนคอยตอบคำขอ

**Use case / relevance:** distinguish additional login steps from genuinely different factors. **Misconception:** two passwords, two screens or AI risk scoring automatically constitute MFA; apply entry 014 for non-human access.

### KNOW-D3-025 - AI-assisted authentication monitoring

**Objective:** 3.2; relates to 3.1 review, additional official AI guidance. **Academic status:** ACCEPTED. **Classification/evidence:** OFFICIAL [R02], Domain 3 AI section; EXTERNAL [R05], section 5.3; [R20], atypical-travel detection. Entirely supplemented.

**EN:** Behavioral analysis can identify unusual login or session patterns and inform risk-based responses. Geographically implausible sign-ins warrant assessment; they are not conclusive proof of account theft. Follow the authorized process to investigate and, when appropriate, require renewed authentication, terminate access or escalate. Risk analytics is not itself an independent MFA factor.

**TH:** การวิเคราะห์พฤติกรรมช่วยพบรูปแบบการเข้าสู่ระบบหรือเซสชันที่ผิดปกติและประกอบการตอบสนองตามความเสี่ยง การเข้าสู่ระบบจากสถานที่ห่างกันในเวลาที่เดินทางจริงไม่ได้ควรได้รับการตรวจสอบ แต่ไม่ใช่หลักฐานเด็ดขาดว่าบัญชีถูกขโมย ให้ดำเนินการตามกระบวนการที่ได้รับอนุญาตเพื่อสืบหาสาเหตุ และยืนยันตัวตนใหม่ ยุติการเข้าถึง หรือส่งต่อเมื่อเหมาะสม การวิเคราะห์ความเสี่ยงไม่ใช่ปัจจัย MFA ที่เป็นอิสระในตัวเอง

**Use case / relevance:** assess an anomalous sign-in using logs and contextual evidence rather than permanently deleting the account automatically. **Misconception:** every AI alert proves compromise or independently authorizes broad access.

## Academic correction and disposition register

The original misleading wording is paraphrased below; original T/S files remain unchanged. Links in the evidence column identify authority, while entry numbers identify the accepted replacement. No accepted entry depends on C07 or C14 being resolved.

| Issue / original problem and location | Correct interpretation or disposition | Authority / replacement | Impact on later questions | Final status |
| --- | --- | --- | --- | --- |
| C01 / T@00:06:53 treats unused and orphaned accounts as the same | Separate activity from ownership/linkage; stale entitlements are another condition | [R14], [R19]; 005/007 | Supply evidence for the actual condition | CORRECTED |
| C02 / T@00:04:11 and 00:04:51 equates identity with username and credentials with username/password | Distinguish identity, managed account, identifier, credential and authenticator | [R03], [R04], [R05]; 001/002 | No username-as-factor or password-only definition | CORRECTED |
| C03 / S15-S16 and T@00:19:06 imply a universal MAC-over-DAC security ranking | Delegation and policy authority differ; both need enforcement; fit depends on requirements | [R11], [R12]; 018-020 | Choose by policy criteria, not security superlatives | CORRECTED |
| C04 / S16, T@00:19:42 suggests clearance alone grants classified access | Labels and policy apply; the US example also needs need-to-know and applicable access conditions | [R12], [R13]; 020 | State need and authorization, not just clearance | CORRECTED |
| C05 / T@00:12:40 and 00:13:21 uses PoLP to rule out account attribution | Reduced access limits exposure; actual attribution still needs evidence | [R21], [R07] AU family; 016 | No guarantees of innocence, safety or no compromise | CORRECTED |
| C06 / S11 and T@00:16:12 imply fraud prevention/all participants must collude | SoD reduces unilateral abuse; bypass and collusion remain possible | [R21] 03.01.04; 017 | Assess incompatible rights, not an absolute guarantee | CORRECTED |
| C07 / S12-S13 text assigns approval/payment together; diagram distributes request/approval/payment | Original intended accounting workflow cannot be established; quarantine its headcount/assignment implications. Use the independently bounded initiator/approver example in 017 | Original S12/S13; [R21] supports only the general principle | No question may rely on the original diagram's exact participant roles | NEEDS_REVIEW |
| C08 / T@00:04:11 calls provisioning the first IAM step | Preconditions and authority depend on the stated workflow | [R07] AC-2; 003/004 | FIRST stems must identify stage and prior approvals | CORRECTED |
| C09 / T@00:06:16 suggests inactive-account deletion/disablement without context | Investigate purpose; access withdrawal differs from record retention/disposal | [R19], [R04], [R17]; 007/008 | Avoid automatic destruction of audit history | CORRECTED |
| C10 / T@00:21:43 implies shared role means identical total permissions | Additional roles/constraints can alter effective access | [R10]; 021 | State all relevant assignments in comparisons | CORRECTED |
| C11 / S07 names SP 800-63 and CSF | Retain the scoped guidance purposes; clarify standards/frameworks versus software | [R03], [R08]; 010 | No framework-as-software distractor treated as true | ACCEPTED |
| C12 / S14 names ABAC without an explanation | Preserve the name-only course finding; supplement a technical explanation | [R09]; 022 | Attribute-selection scenarios now supported | ACCEPTED |
| C13 / T has overlapping/inconsistent timecodes and recognition errors | Use block-start references for traceability; exclude unreliable verbatim wording/timing as technical evidence. Model names are corroborated by S14-S17 | T and original captures, as inventoried | No items testing transcription artifacts or exact video duration | EXCLUDED |
| C14 / no original recording, manifest or course URL | Original course completeness/authorship remains unverified; primary sources independently support this map | Original source review | Do not claim complete instructor coverage or official-course endorsement | NEEDS_REVIEW |

Register totals: **9 CORRECTED, 2 ACCEPTED, 2 NEEDS_REVIEW, 1 EXCLUDED**. These are issue dispositions, separate from the 25 knowledge-entry statuses.

## Question-development guidance and quality gate

No actual questions, options, keys or vocabulary are included. Examples in entries are editorial illustrations, not source quotations or real ISC2 exam items.

| Workplace reasoning target | Knowledge evidence | Authoring boundary / useful misconception |
| --- | --- | --- |
| BEST initial or changed-role access | 003-005, 016, 021 | Establish authorization and current duties; copying all a colleague's rights is unjustified |
| MOST appropriate review/remediation | 005-008 | Show evidence and reviewer authority; reviewing access and actually withdrawing it differ |
| FIRST response to departure or expiry | 008-009, 014 | State confirmed trigger, policy and prior steps; check account/application/session coverage rather than inventing a universal sequence |
| Least privilege versus SoD | 016-017 | Contrast minimizing rights with splitting incompatible responsibilities; both may apply simultaneously |
| DAC/MAC/RBAC/ABAC selection | 018-022 | Use owner discretion, mandatory policy, role assignment or policy-evaluated attributes as the deciding criteria; avoid industry-name shortcuts |
| Directory versus IdP versus governance/enforcement | 010-013 | Ask about the needed responsibility, acknowledging combined platforms; no vendor-specific administration |
| Authentication, authorization and MFA | 001-002, 015, 023-024 | Distinguish claims, proof, factor types and permitted actions; successful MFA is not access approval |
| Automated identity lifecycle and anomaly handling | 014, 017, 025 | Preserve ownership, scope, review and retirement; require proportionate authorized assessment rather than assuming every AI alert is conclusive |

**Completion checks:** every outline bullet has multiple linked propositions or a sufficient focused explanation; all usable entries have direct primary technical evidence; original course conflicts have explicit dispositions. Each English/Thai pair was checked for the same actor, action, scope and limitations, especially “reduces” versus “prevents,” inactivity versus orphaning, permission versus authentication, and conditional versus guaranteed access. Entries describe distinct decisions; cross-references connect overlaps without creating separate duplicate accounts of the same concept.

**Remaining limitations:** C07 and C14 remain unresolved source-history issues and are excluded from accepted reasoning. Independent human bilingual/editorial sign-off has not been performed. The evidence is sufficient for foundational authoring; it cannot establish what specific items ISC2 will ask. No unsupported assumption is required to cover a numbered bullet. Organization-specific timing, approval assignments, entitlement dependencies and anomaly-response authority must be stated in later scenarios.

**Next task:** question generation and question-level academic/bilingual QA can proceed from this map. Website integration must follow those checks plus repository schema, duplicate-content and current-ID verification; this document is not evidence that an uncreated question bank has passed QA. Vocabulary remains a separate later task. No changes to production, legacy questions, Domains 1-2, registry or configuration are part of this work.

## Primary reference register

All links below were consulted on 2026-10-23. References identify the sections used, not fabricated quotations. NIST references here support technical interpretations; federal-specific mandates and vendor settings are not added to CC scope. SP 800-63 Revision 4 is the July 2025 final series; the course itself did not specify a revision. [R07] is the stable Rev. 5 publication for the cited controls; no claim is made that this PDF contains every subsequent catalog update.

| Ref | Classification | Primary source and precise use |
| --- | --- | --- |
| R01 | OFFICIAL | [ISC2 CC 2026 English outline](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), printed pp. 3, 5: weight and numbered objective scope. |
| R02 | OFFICIAL | [ISC2 outline webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), dated numbered Domain 3 and “How is AI Security Incorporated” Domain 3 explanation. |
| R03 | EXTERNAL | [NIST SP 800-63-4](https://pages.nist.gov/800-63-4/sp800-63.html), scope, digital identity models and glossary: identity, identifier, credential and account. |
| R04 | EXTERNAL | [NIST SP 800-63A-4](https://pages.nist.gov/800-63-4/sp800-63a.html), introduction and subscriber-account sections: proofing, account records, suspension/termination and retention. |
| R05 | EXTERNAL | [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html), introduction, authenticator types, MFA glossary and section 5.3 monitoring. |
| R06 | EXTERNAL | [NIST SP 800-63C-4](https://pages.nist.gov/800-63-4/sp800-63c.html), introduction/IdP role and section 4.7: assertions, federation and independent sessions. |
| R07 | EXTERNAL | [NIST SP 800-53 Rev. 5](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf), AC-2 (printed pp. 19-23) and AU family: responsibilities, approval, review, lifecycle and activity evidence. |
| R08 | EXTERNAL | [NIST CSF 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf), abstract and PR.AA-01/05: outcomes versus implementations; identities and access policy/review. |
| R09 | EXTERNAL | [NIST SP 800-162, final with 2019 updates](https://csrc.nist.gov/pubs/sp/800/162/upd2/final), abstract: ABAC decision inputs and policy evaluation. |
| R10 | EXTERNAL | [NIST RBAC FAQ](https://csrc.nist.gov/projects/role-based-access-control/faqs), role rules, group comparison, sessions and constraints. |
| R11 | EXTERNAL | [NIST DAC definition](https://csrc.nist.gov/glossary/term/discretionary_access_control), owner/authorized-controller discretion. |
| R12 | EXTERNAL | [NIST MAC definition](https://csrc.nist.gov/glossary/term/mandatory_access_control), central policy, labels and authorized subjects. |
| R13 | EXTERNAL | [US Executive Order 13526, National Archives](https://www.archives.gov/isoo/policy-documents/cnsi-eo.html), section 4.1(a): classified access conditions. US example only. |
| R14 | EXTERNAL | [Federal identity lifecycle playbook](https://www.idmanagement.gov/playbooks/ilm/), modification stage, orphan-account discussion and IGA tool description. Used for these bounded distinctions only. |
| R15 | EXTERNAL | [Microsoft AD DS overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview), directory objects and data store. No configuration prescriptions imported. |
| R16 | EXTERNAL | [Microsoft authentication versus authorization](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization), separate identity verification and permission decisions. |
| R17 | EXTERNAL | [Microsoft governing service accounts](https://learn.microsoft.com/en-us/entra/architecture/govern-service-accounts), purpose/owner/scope inventory, privilege review and deprovisioning. |
| R18 | EXTERNAL | [Microsoft access reviews](https://learn.microsoft.com/en-us/entra/id-governance/manage-access-review), decisions about continuing access and applying results. |
| R19 | EXTERNAL | [Microsoft detecting and investigating inactive accounts](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-manage-inactive-user-accounts), usage evidence and investigation. No vendor inactivity threshold generalized. |
| R20 | EXTERNAL | [Microsoft identity risk detections](https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks), atypical travel and probabilistic risk signals. |
| R21 | EXTERNAL | [NIST SP 800-171 Rev. 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html), 03.01.04/05: separate duties and least privilege. Uses the principles, not a claim every organization handles CUI. |
| R22 | EXTERNAL | [Microsoft workload identity authentication boundary](https://learn.microsoft.com/en-us/entra/identity/conditional-access/workload-identity), introduction: automated service principals cannot perform interactive MFA. Product settings and license details are not imported. |

[R01]: https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf
[R02]: https://www.isc2.org/certifications/cc/cc-certification-exam-outline
[R03]: https://pages.nist.gov/800-63-4/sp800-63.html
[R04]: https://pages.nist.gov/800-63-4/sp800-63a.html
[R05]: https://pages.nist.gov/800-63-4/sp800-63b.html
[R06]: https://pages.nist.gov/800-63-4/sp800-63c.html
[R07]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf
[R08]: https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf
[R09]: https://csrc.nist.gov/pubs/sp/800/162/upd2/final
[R10]: https://csrc.nist.gov/projects/role-based-access-control/faqs
[R11]: https://csrc.nist.gov/glossary/term/discretionary_access_control
[R12]: https://csrc.nist.gov/glossary/term/mandatory_access_control
[R13]: https://www.archives.gov/isoo/policy-documents/cnsi-eo.html
[R14]: https://www.idmanagement.gov/playbooks/ilm/
[R15]: https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview
[R16]: https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization
[R17]: https://learn.microsoft.com/en-us/entra/architecture/govern-service-accounts
[R18]: https://learn.microsoft.com/en-us/entra/id-governance/manage-access-review
[R19]: https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-manage-inactive-user-accounts
[R20]: https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks
[R21]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html
[R22]: https://learn.microsoft.com/en-us/entra/identity/conditional-access/workload-identity
