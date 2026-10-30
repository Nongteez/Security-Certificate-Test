# Domain 3 — Final Learning Slides Coverage Matrix

Date: 2026-10-30. Assistant technical/academic review complete; human academic and visual acceptance pending. This matrix supersedes the earlier planning matrix's implementation-status column; the original audit, sources and approved storyboard remain unchanged.

## Scope and interpretation

Six published lessons, **42 stable bilingual slides**: Objective 3.1 has 3 lessons /21 slides; Objective 3.2 has 3 lessons /21 slides. Counts follow the approved storyboard: 7,8,6,7,8,6. All original 21 slide IDs/order/revisions and lesson bodies are preserved. All 42 slides provide paired EN/TH semantic content and substantive Reading/Info explanations. Presentation controls remain English. Thai intentionally uses familiar English cybersecurity terms.

The eight numbered outline bullets below are paraphrased from the [ISC2 CC outline effective September 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), reviewed 2026-10-30. The two separate official AI/application clusters are tracked explicitly, without inventing new objective numbers. DAC/MAC/RBAC/ABAC and the technical qualifications are source-backed elaborations of the broad models bullet, not a claim that ISC2 enumerates four models or requires a named vendor. Coverage is introductory teaching completeness, not a prediction of exam scores or human acceptance.

## Official outcomes and concrete teaching evidence

L01–L06 mean the exact lesson IDs in the inventory below; S numbers refer to each lesson's approved ordered slide IDs. The inventory expands every reference to an actual slide ID.

| Key | Official outcome / application | Implemented evidence | Academic boundary / source | Result |
|---|---|---|---|---|
|C01 /3.1|Role definition|L01 S01/S03/S07; L05 S04/S06 apply assignments|Work→required access; designated approval differs from implementation. N§3;U1;S02|Covered|
|C02 /3.1|Provisioning|L01 S02–S07|Identity/account/identifier distinction; all six source activities retained, authorize→assign→verify. N§4;U2;S03; NIST 800-63|Covered|
|C03 /3.1|Review|L02 S01–S04/S08|Routine and change-triggered review; evidence/decision/applied remediation/verification differ; activity does not establish ownership. N§5;U3;S04|Covered|
|C04 /3.1|Deprovisioning|L02 S05–S08|Four source triggers/actions retained; account disablement does not guarantee termination of independent sessions; revoke access without destroying retained evidence. N§6;U4;S05/06; NIST 800-63C|Covered|
|C05 /3.1|IAM frameworks/tools|L03 S01–S06|Guidance, directory, IdP, governance and runtime application enforcement have distinct responsibilities. LDAP is a protocol; no mandated product. N§§7–8;U5–6;S07/08; NIST 800-63 / CSF|Covered|
|C06 /3.2|Least privilege|L04 S01–S03/S06/S07|Enough rights for authorized work, no unrelated privilege; scope and need-to-know can overlap. Permissions do not prove innocence or prevent all harm. N§9;U7;S09; NIST 800-171r3 §§03.01.05–06|Covered|
|C07 /3.2|Separation of duties|L04 S04–S07|Independent effective authority and system-enforced no-self-approval; two account names do not create independence. Residual collusion/bypass remains. N§11;U8;S11; NIST 800-171r3 §03.01.04|Covered; disputed S12/S13 allocation remains quarantined|
|C08 /3.2|Access-control models|L05 S01–S08|Request subject/action/resource and enforced policy; DAC discretion, MAC mandatory authority, role reuse/combined rights, ABAC attributes/action/missing-data rules; coexistence and stated requirements replace universal rankings. N§§10,12–17;U9–13;S14–17; NIST model sources|Covered|
|AI01|Apply IAM/access controls to automated identities|L01 S06;L02 S07;L04 S06;L05 S01 Reading/Info|Owner/purpose/scope/provision/review/retirement; bot cannot self-approve; service subject can be governed by RBAC/ABAC. Do not invent human interactive MFA for every unattended workload. Official application guidance; service-account governance|Covered|
|AI02|MFA and behavioral/login-risk applications|L06 S01–S06|Authentication does not enlarge permission grants. Knowledge/possession/inherence; required local key activation qualified. AI/location is contextual evidence, not a fourth factor. UTC-normalized distant observations are uncertain; corroborate, preserve evidence and follow authority, including required urgent containment. Privacy/false-positive limits explicit. Official application guidance; NIST 800-63B-4 §5.3|Covered|

## Source and correction review

Original teaching sources are `ISC2 Update 2026/Domain 3/Domain 3.md` (N), `D3 sum.md` (U), `DOMAIN 3.txt` (T), and the source inventory's S01–S17 captures. No invented S18–S34 sources, exam-frequency assertions, copied bank questions or vendor requirements were introduced. Slide `referenceIds` resolve to each lesson's references, including repository paths and technical locators. The approved roadmap, academic audit, implementation-readiness package, source inventory and earlier 3.1 gate were reviewed before authoring.

Primary technical references checked for the new lessons:

- [NIST SP 800-171r3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html), §§03.01.04–06: incompatible duties, least privilege and privileged work. Its federal CUI applicability is not generalized into a universal legal obligation.
- NIST [DAC definition](https://csrc.nist.gov/glossary/term/discretionary_access_control), [MAC definition](https://csrc.nist.gov/glossary/term/mandatory_access_control), [RBAC FAQ](https://csrc.nist.gov/projects/role-based-access-control/faqs), and [SP 800-162 ABAC](https://csrc.nist.gov/pubs/sp/800/162/upd2/final): decision authority, role assignments/activation constraints and subject/object/requested-operation/environment evaluation.
- [US Executive Order 13526 §4.1(a)](https://www.archives.gov/isoo/policy-documents/cnsi-eo.html): eligibility, nondisclosure agreement and need-to-know are a scoped US classified-access example, not universal rules for all countries or every MAC system.
- [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html), multifactor cryptographic authenticators and §5.3 session monitoring: factor categories, required local activation, biometrics qualifications, potential-fraud responses and privacy.
- [Service-account governance](https://learn.microsoft.com/en-us/entra/architecture/govern-service-accounts): accountable ownership, purpose, access and dependencies; no vendor configuration is taught as mandatory.

| Audit finding | Final disposition |
|---|---|
|D3-A01–A07, A15|Existing L01–L03 corrections/review retained byte-for-byte; earlier reports and 3.1 gate supply detailed evidence. Shared dispatch/Info and final selection/Resume regression checks exercise compatibility.|
|D3-A08|L04 S01 keeps minimum necessary access separate from prevention/attribution proof; all original practices and bounded benefits remain in Reading/Info.|
|D3-A09|L04 S04/S05/S07 teaches reduction of unilateral abuse and actual permissions; does not promise that all participants must collude or that fraud becomes impossible.|
|D3-A10|Source allocation unresolved, not falsely closed. L04 S04/S05 uses an explicitly authored Ana-requester/Ben-approver policy; no inferred headcount or original financial answer key.|
|D3-A11–A12|L05 distinguishes discretion from enforcement, qualifies MAC administration and classified-access conditions, and rejects a universal model ranking.|
|D3-A13–A14|L05 separates shared role permission from total effective rights; activation/constraints matter. ABAC depth is correctly attributed to current N/U, with requested action and declared missing-data handling. Models can coexist.|
|D3-A16–A18|L06 and the workload examples close the official application coverage. Location/AI are signals, not independent factors or certain compromise; authority, privacy, evidence and urgent policy response remain explicit in EN/TH.|
|D3-A19–A20|Unsupported Vocabulary/completeness/exam-probability claims and disputed financial content remain excluded from teaching authority. Existing Vocabulary/banks were not edited. Scenarios are authored learning decisions.|
|D3-A21|Actual schema/publication/renderer/progress contracts used. No schema or storage migration; valid slide IDs and per-lesson saved positions retained.|

## Bilingual review and inventory method

Assistant review covered new presentation compositions, every semantic table/list/explanation and all scenario reasons in EN/TH. Natural Thai mixed terminology preserves conditions, exceptions and decision authority rather than translating every technical noun. Reading and Info consume the same full paired semantic content; native presentations intentionally summarize it. L05 S07's final concise table retains the full comparison in both explanation modes. L06's cryptographic-key example requires actual PIN activation, and both languages preserve false-positive and urgent-containment qualifications.

The 21 earlier slides reuse their valid academic/bilingual and Chrome evidence, with fresh source-file hash checks and shared renderer/Info/progress regressions. The 21 new slides have fresh four-configuration Chrome Presentation/Reading/Info checks and visual screenshot review. See the completion report for exact counts, QA scripts, failures and limitations. Automated paired-field checks support this review; they do not prove semantic equivalence by themselves.

## Exact ordered inventory

The generated table below lists all 42 actual published slides and their actual reference IDs. IDs/orders match the approved storyboard, not a global catalog size assumption. Each row passed paired-content, reference-resolution and substantive-explanation checks.


### `lesson-d3-01-roles-provisioning` — Objective 3.1

Roles & Authorized Provisioning / บทบาทและการจัดเตรียมสิทธิ์ที่ได้รับอนุมัติ. 7 slides.

| Order | Stable slide ID | EN / TH teaching title | Reference IDs |
|---|---|---|---|
|1|`slide-d3-01-01-role-to-task`|Start with the work, then justify the access. / เริ่มจากหน้าที่ แล้วจึงกำหนดสิทธิ์ที่จำเป็น|d3-notes, d3-summary, isc2-outline|
|2|`slide-d3-01-02-identity-account-identifier`|One person can use more than one account. / คนเดียวอาจใช้ได้หลายบัญชี|d3-notes, nist-identity|
|3|`slide-d3-01-03-authorize-before-assignment`|Approval and implementation have different responsibilities. / การอนุมัติกับการตั้งค่าสิทธิ์มีหน้าที่ต่างกัน|d3-notes, d3-summary, nist-account-management|
|4|`slide-d3-01-04-provision-approved-access`|Provision the approved ability to work. / จัดเตรียมสิทธิ์ให้ทำงานได้ตามที่อนุมัติ|d3-notes, d3-summary, nist-account-management|
|5|`slide-d3-01-05-verify-the-grant`|Compare approved scope with effective access. / เทียบสิทธิ์ที่อนุมัติกับสิทธิ์ที่ใช้ได้จริง|d3-notes, nist-account-management|
|6|`slide-d3-01-06-own-the-reporting-bot`|Automation still needs an accountable owner. / ระบบอัตโนมัติก็ต้องมีผู้รับผิดชอบ|isc2-ai-application, service-account-governance, d3-notes|
|7|`slide-d3-01-07-urgent-access-decision`|Urgency does not establish approval authority. / งานเร่งด่วนไม่ได้ให้อำนาจอนุมัติสิทธิ์|d3-notes, d3-summary, nist-account-management|

### `lesson-d3-02-review-deprovisioning` — Objective 3.1

Access Reviews, Changes & Deprovisioning / ทบทวน ปรับ และถอนสิทธิ์ตลอดวงจรชีวิต. 8 slides.

| Order | Stable slide ID | EN / TH teaching title | Reference IDs |
|---|---|---|---|
|1|`slide-d3-02-01-mover-before-after`|A new role does not justify keeping every old permission. / ย้ายหน้าที่แล้ว ไม่ได้แปลว่าควรเก็บทุกสิทธิ์เดิม|d3-notes, d3-summary, identity-lifecycle|
|2|`slide-d3-02-02-review-apply-verify`|A review decision must become a verified access change. / ผลทบทวนต้องนำไปสู่การปรับสิทธิ์ที่ตรวจยืนยันได้|d3-notes, identity-lifecycle, nist-csf|
|3|`slide-d3-02-03-activity-and-ownership`|Usage and ownership answer different questions. / การใช้งานกับผู้รับผิดชอบเป็นคนละคำถาม|d3-notes, d3-summary, identity-lifecycle|
|4|`slide-d3-02-04-review-at-the-change`|Scheduled reviews do not replace change-triggered reassessment. / การทบทวนตามรอบไม่ทดแทนการตรวจเมื่อหน้าที่เปลี่ยน|d3-notes, d3-summary, identity-lifecycle|
|5|`slide-d3-02-05-withdraw-without-erasing-history`|Withdraw access without erasing required evidence. / ถอนสิทธิ์ โดยไม่ทำลายหลักฐานที่ต้องเก็บ|d3-notes, d3-summary, identity-lifecycle|
|6|`slide-d3-02-06-central-and-application-sessions`|A central disable does not prove every app session has ended. / ระงับบัญชีกลางแล้ว ไม่ได้ยืนยันว่าทุก Session ในแอปสิ้นสุดลง|d3-notes, nist-federation|
|7|`slide-d3-02-07-retire-a-workload-identity`|A retired workload should not leave active, unjustified access. / เลิกใช้ระบบงานแล้ว ไม่ควรทิ้งสิทธิ์ที่หมดความจำเป็นไว้|isc2-ai-application, service-account-governance, identity-lifecycle|
|8|`slide-d3-02-08-complete-offboarding-decision`|Finish the withdrawal, then verify the result. / ถอนสิทธิ์ให้ครบ แล้วตรวจผล|d3-notes, d3-summary, nist-federation, identity-lifecycle|

### `lesson-d3-03-iam-frameworks-tools` — Objective 3.1

IAM Frameworks & Tool Responsibilities / กรอบแนวทางและหน้าที่ของเครื่องมือ IAM. 6 slides.

| Order | Stable slide ID | EN / TH teaching title | Reference IDs |
|---|---|---|---|
|1|`slide-d3-03-01-guidance-is-not-software`|Guidance shapes the design; tools carry it out. / แนวทางช่วยออกแบบ เครื่องมือทำตามที่กำหนด|isc2-outline, d3-notes, d3-summary, nist-identity, nist-csf|
|2|`slide-d3-03-02-directory-records`|A directory supplies records, not every access decision. / Directory ให้ข้อมูล ไม่ได้ตัดสินสิทธิ์ทุกอย่างแทนแอป|isc2-outline, d3-notes, d3-summary, nist-identity, nist-federation, ldap-protocol|
|3|`slide-d3-03-03-idp-to-application`|An IdP supplies evidence; the application checks access. / IdP ส่งหลักฐาน แอปตรวจสิทธิ์ของคำขอ|isc2-outline, d3-notes, d3-summary, nist-identity, nist-federation|
|4|`slide-d3-03-04-governance-and-enforcement`|Governance decides the grant; enforcement applies the rule. / การกำกับตัดสินสิทธิ์ การบังคับใช้ตรวจคำขอ|isc2-outline, d3-notes, d3-summary, nist-csf, nist-federation|
|5|`slide-d3-03-05-sso-with-access-boundaries`|One sign-in can support apps with different permissions. / ลงชื่อเข้าใช้ครั้งเดียว แต่สิทธิ์แต่ละแอปต่างกันได้|isc2-outline, d3-notes, d3-summary, nist-federation|
|6|`slide-d3-03-06-tool-responsibility-decision`|Choose the function that supplies the evidence you need. / เลือกหน้าที่ที่ให้หลักฐานตรงกับสิ่งที่ต้องใช้|isc2-outline, d3-notes, d3-summary, nist-federation, nist-csf|

### `lesson-d3-04-least-privilege-sod` — Objective 3.2

Least Privilege & Separation of Duties / สิทธิ์เท่าที่จำเป็นและการแบ่งแยกหน้าที่. 7 slides.

| Order | Stable slide ID | EN / TH teaching title | Reference IDs |
|---|---|---|---|
|1|`slide-d3-04-01-rights-for-the-task`|Enough access for the task, without unnecessary power. / ให้สิทธิ์พอทำงาน โดยไม่เพิ่มอำนาจที่ไม่จำเป็น|isc2-outline, d3-notes, d3-summary, nist-access|
|2|`slide-d3-04-02-limit-privileged-work`|Privileged rights belong to the authorized maintenance task. / สิทธิ์ระดับสูงต้องตรงกับงานดูแลที่ได้รับอนุญาต|isc2-outline, d3-notes, d3-summary, nist-access|
|3|`slide-d3-04-03-permission-and-information-need`|Check both the action and the information needed. / ตรวจทั้งการกระทำและข้อมูลที่ต้องใช้|isc2-outline, d3-notes, d3-summary, nist-access|
|4|`slide-d3-04-04-stop-self-approval`|The requester must not approve their own transaction. / ผู้สร้างรายการต้องอนุมัติรายการตนเองไม่ได้|isc2-outline, d3-notes, d3-summary, nist-access|
|5|`slide-d3-04-05-roles-need-independent-actors`|Different account names do not create independent authority. / ชื่อบัญชีต่างกัน ไม่ได้ทำให้อำนาจเป็นอิสระ|isc2-outline, d3-notes, d3-summary, nist-access|
|6|`slide-d3-04-06-bot-authority-boundary`|A request-generating bot must not approve its own work. / Bot ที่สร้างคำขอต้องอนุมัติงานตนเองไม่ได้|isc2-outline, d3-notes, d3-summary, nist-access, service-account-governance|
|7|`slide-d3-04-07-scope-and-conflict-decision`|Choose rights that support the work and independent approval. / เลือกสิทธิ์ให้งานทำได้และอนุมัติอย่างเป็นอิสระ|isc2-outline, d3-notes, d3-summary, nist-access|

### `lesson-d3-05-access-control-models` — Objective 3.2

Choosing and Applying Access-Control Models / เลือกและใช้แบบจำลองควบคุมการเข้าถึง. 8 slides.

| Order | Stable slide ID | EN / TH teaching title | Reference IDs |
|---|---|---|---|
|1|`slide-d3-05-01-request-policy-enforcement`|A model explains the rule; enforcement applies it. / โมเดลอธิบายกฎ การบังคับใช้นำกฎไปตรวจคำขอ|isc2-outline, d3-notes, d3-summary, nist-abac|
|2|`slide-d3-05-02-dac-authorized-owner`|DAC delegates access-setting discretion to an authorized owner. / DAC ให้อำนาจเจ้าของที่ได้รับอนุญาตกำหนดสิทธิ์|isc2-outline, d3-notes, d3-summary, nist-dac|
|3|`slide-d3-05-03-mac-central-policy`|MAC applies mandatory policy that ordinary owners cannot override. / MAC บังคับนโยบายที่เจ้าของทั่วไปเปลี่ยนข้ามไม่ได้|isc2-outline, d3-notes, d3-summary, nist-mac, us-classified|
|4|`slide-d3-05-04-rbac-role-permission-reuse`|RBAC reuses role-permission assignments. / RBAC ใช้ชุดสิทธิ์ของ Role ร่วมกัน|isc2-outline, d3-notes, d3-summary, nist-rbac|
|5|`slide-d3-05-05-abac-evaluate-the-request`|ABAC evaluates the attributes of this request against policy. / ABAC เทียบ Attributes ของคำขอนี้กับนโยบาย|isc2-outline, d3-notes, d3-summary, nist-abac|
|6|`slide-d3-05-06-effective-role-combinations`|A shared role does not prove identical total rights. / มี Role ร่วมกัน ไม่ได้พิสูจน์ว่าสิทธิ์รวมเหมือนกัน|isc2-outline, d3-notes, d3-summary, nist-rbac|
|7|`slide-d3-05-07-choose-by-policy-requirement`|Choose by policy requirements, not a security ranking. / เลือกตามข้อกำหนดนโยบาย ไม่ใช่อันดับความปลอดภัย|isc2-outline, d3-notes, d3-summary, nist-dac, nist-mac, nist-rbac, nist-abac|
|8|`slide-d3-05-08-mandatory-policy-decision`|Which model matches a mandatory owner-override boundary? / โมเดลใดตรงกับข้อบังคับที่เจ้าของข้ามไม่ได้?|isc2-outline, d3-notes, d3-summary, nist-mac|

### `lesson-d3-06-mfa-authentication-signals` — Objective 3.2

MFA & Authentication Risk Signals / MFA และสัญญาณความเสี่ยงในการยืนยันตัวตน. 6 slides.

| Order | Stable slide ID | EN / TH teaching title | Reference IDs |
|---|---|---|---|
|1|`slide-d3-06-01-authenticated-but-not-authorized`|Successful MFA does not expand the permission boundary. / ผ่าน MFA ไม่ได้ทำให้ขอบเขตสิทธิ์เพิ่มขึ้น|isc2-outline, d3-notes, d3-summary, nist-authentication|
|2|`slide-d3-06-02-factor-types-not-screens`|Count factor types, not screens or devices. / นับประเภทปัจจัย ไม่ใช่จำนวนหน้าจอหรืออุปกรณ์|isc2-outline, d3-notes, d3-summary, nist-authentication|
|3|`slide-d3-06-03-risk-context-not-a-factor`|A risk signal can trigger checks without becoming a factor. / สัญญาณเสี่ยงนำไปตรวจเพิ่มได้ โดยไม่กลายเป็นปัจจัย|isc2-outline, d3-notes, d3-summary, nist-authentication|
|4|`slide-d3-06-04-implausible-login-evidence`|Two distant login observations are a signal, not a verdict. / ข้อมูล Login ห่างไกลสองจุดเป็นสัญญาณ ไม่ใช่คำตัดสิน|isc2-outline, d3-notes, d3-summary, nist-authentication|
|5|`slide-d3-06-05-proportionate-authorized-response`|Respond within policy, evidence and your authority. / ตอบสนองตามนโยบาย หลักฐาน และอำนาจของคุณ|isc2-outline, d3-notes, d3-summary, nist-authentication|
|6|`slide-d3-06-06-anomalous-login-decision`|Use the anomaly to support an authorized decision. / ใช้ความผิดปกติประกอบการตัดสินตามอำนาจ|isc2-outline, d3-notes, d3-summary, nist-authentication|
