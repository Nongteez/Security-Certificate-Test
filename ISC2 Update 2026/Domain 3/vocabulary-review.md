# ISC2 CC 2026 Domain 3 — Exam Vocabulary Academic Review

> **Domain:** Domain 3 — Identity and Access Management Concepts (19.8% Exam Weight)  
> **Total Extracted & Curated Entries:** 102 entries  
> **Source Corpus:** Official ISC2 CC 2026 Outline, Domain 3 Knowledge Map (KNOW-D3-001 to KNOW-D3-025), Lecture Slides (S01–S34), Transcripts, Accepted Production Questions (Q647–Q669)  
> **Prepared For:** Academic Reviewers, Bilingual Curriculum Developers, and Exam Candidates  
> **Date:** 2026-10-23  

---

## 1. Executive Summary & Category Breakdown

This document provides a comprehensive academic review of all **102 accepted vocabulary entries** for Domain 3 (Identity and Access Management Concepts) of the ISC2 Certified in Cybersecurity (CC) 2026 exam.

| Category | Count | Description |
| :--- | :---: | :--- |
| **Core Terms** (`core_term`) | 61 | Foundational IAM frameworks, access control models, lifecycle phases, and cryptographic authenticators. |
| **Acronyms & Abbreviations** (`acronym`) | 17 | Standard IAM industry acronyms (IAM, IdP, SSO, IGA, LDAP, SAML, OIDC, PoLP, SoD, DAC, MAC, RBAC, ABAC, PAM, JIT, MFA, FIDO). |
| **Confusing Terms & Distinctions** (`confusing_term`) | 14 | Structured comparative analyses for commonly conflated concepts (AuthN vs AuthZ, Identity vs Account, Inactive vs Orphaned, DAC vs MAC, RBAC vs ABAC, Clearance vs Need-to-Know, etc.). |
| **Exam Scenario Vocabulary** (`scenario_vocabulary`) | 5 | Real-world operational terms (Break-Glass Account, Standing Privileges, Effective Permissions, Blast Radius, Federated Trust). |
| **Exam Question Language** (`exam_language`) | 5 | Key exam stem qualifiers and decision rules (FIRST, BEST, MOST directly, Incompatible Duties, Delegated Authority). |
| **Total Accepted Entries** | **102** | **100% verified and mapped to Domain 3 Exam Objectives.** |

---

## 2. Objective-by-Objective Vocabulary Review

### Objective 3.1: Identity Lifecycle Management (Identification, Authentication, JML, Provisioning, Account Ownership, Federation, SSO) (50 entries)

#### `VOC-CC26-D3-001` — **Identity and Access Management**
- **Thai Meaning (ความหมายภาษาไทย):** การจัดการตัวตนและการเข้าถึง
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `IAM` | **Full Form:** Identity and Access Management
- **English Definition:** A business and technical framework of policies, processes, and technologies that ensures authorized entities access the right resources for legitimate purposes at appropriate times.
- **Thai Explanation:** กรอบแนวทางเชิงธุรกิจและเทคนิคที่ประกอบด้วยนโยบาย กระบวนการ และเทคโนโลยี เพื่อให้มั่นใจว่าบุคคลหรือระบบที่ได้รับอนุญาตสามารถเข้าถึงทรัพยากรที่ถูกต้องเพื่อวัตถุประสงค์ที่ชอบธรรมในเวลาที่เหมาะสม
- **Exam Relevance & Strategy:** IAM spans the full lifecycle of identities. The ISC2 CC exam focuses on distinguishing authentication from authorization, managing account lifecycles, and applying least privilege across systems.
- **English Example:** *"The enterprise modernized its IAM program to enforce centralized identity governance across cloud and on-premises environments."*
- **Thai Example:** *"องค์กรปรับปรุงโปรแกรม IAM ให้ทันสมัยเพื่อบังคับใช้การกำกับดูแลตัวตนแบบรวมศูนย์ทั่วทั้งสภาพแวดล้อมคลาวด์และในองค์กร"*
- **Confused With:** Access Control Only, Authentication Only
- **Keywords:** `IAM`, `Identity`, `Access Management`, `Lifecycle`, `Governance`, `Security Architecture`
- **Evidence Sources:** S01-S03 (KNOW-D3-001)

---

#### `VOC-CC26-D3-002` — **Identity Lifecycle Management**
- **Thai Meaning (ความหมายภาษาไทย):** การจัดการวงจรชีวิตของตัวตน
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `ILM` | **Full Form:** Identity Lifecycle Management
- **English Definition:** The structured process of creating, maintaining, updating, reviewing, and deprovisioning digital identities and their associated access entitlements across an organization.
- **Thai Explanation:** กระบวนการอย่างเป็นระบบในการสร้าง ดูแลรักษา อัปเดต ทบทวน และถอนสิทธิ์ของอัตลักษณ์ดิจิทัลและสิทธิ์การเข้าถึงที่เกี่ยวข้องตลอดอายุการทำงานในองค์กร
- **Exam Relevance & Strategy:** Often tested through the Joiner-Mover-Leaver (JML) paradigm. Exam scenarios frequently assess what action must occur during transfers (movers) or departures (leavers).
- **English Example:** *"Effective identity lifecycle management ensures obsolete access rights are promptly revoked when an employee transfers to another business unit."*
- **Thai Example:** *"การจัดการวงจรชีวิตตัวตนที่มีประสิทธิภาพช่วยให้มั่นใจว่าสิทธิ์เข้าถึงที่หมดความจำเป็นจะถูกถอนทันทีเมื่อพนักงานย้ายไปยังหน่วยงานอื่น"*
- **Confused With:** Account Provisioning, User Administration
- **Keywords:** `ILM`, `Lifecycle`, `Joiner`, `Mover`, `Leaver`, `JML`, `Offboarding`
- **Evidence Sources:** S03-S06 (KNOW-D3-004)

---

#### `VOC-CC26-D3-003` — **Digital Identity**
- **Thai Meaning (ความหมายภาษาไทย):** อัตลักษณ์ดิจิทัล
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A digital representation of an entity (person, organization, application, or device) characterized by a collection of attributes within a specific digital context.
- **Thai Explanation:** ตัวแทนในรูปแบบดิจิทัลของบุคคล องค์กร แอปพลิเคชัน หรืออุปกรณ์ ซึ่งถูกระบุด้วยชุดของคุณลักษณะ (Attributes) ภายในบริบทดิจิทัลที่กำหนด
- **Exam Relevance & Strategy:** Distinguish an identity from an account or username. One real-world person may hold multiple digital identities or accounts across different environments.
- **English Example:** *"NIST SP 800-63 defines a digital identity through attributes that uniquely identify a subscriber to an electronic service."*
- **Thai Example:** *"NIST SP 800-63 กำหนดอัตลักษณ์ดิจิทัลผ่านคุณลักษณะที่ระบุตัวตนของผู้ใช้บริการอิเล็กทรอนิกส์อย่างชัดเจน"*
- **Confused With:** Account, Username, Identifier
- **Keywords:** `Digital Identity`, `Entity`, `Attributes`, `NIST SP 800-63`, `Subscriber`
- **Evidence Sources:** S03 (KNOW-D3-001)

---

#### `VOC-CC26-D3-004` — **Identifier**
- **Thai Meaning (ความหมายภาษาไทย):** ตัวระบุ
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A unique label, character string, or token used to name and distinguish an entity or account within a given domain or directory service.
- **Thai Explanation:** ป้ายชื่อ ข้อความ หรือสัญลักษณ์เฉพาะที่ใช้เรียกและแยกแยะตัวตนหรือบัญชีหนึ่งออกจากผู้อื่นภายในขอบเขตหรือระบบไดเรกทอรีที่กำหนด
- **Exam Relevance & Strategy:** A username or employee ID is an identifier, not an authentication factor or the complete identity itself. Identifiers are claimed during identification, not secret.
- **English Example:** *"The employee number acts as an authoritative enterprise identifier linking multiple application accounts to a single verified human."*
- **Thai Example:** *"รหัสพนักงานทำหน้าที่เป็นตัวระบุหลักระดับองค์กรที่เชื่อมโยงบัญชีแอปพลิเคชันหลายระบบเข้ากับบุคคลที่ผ่านการตรวจสอบแล้วคนเดียว"*
- **Confused With:** Identity, Authenticator, Credential
- **Keywords:** `Identifier`, `Username`, `Unique ID`, `Label`, `Identification`
- **Evidence Sources:** S03 (KNOW-D3-001)

---

#### `VOC-CC26-D3-005` — **Account**
- **Thai Meaning (ความหมายภาษาไทย):** บัญชีผู้ใช้ / บัญชีระบบ
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A formal administrative record maintained by a system that associates an entity with credentials, profile data, and access permissions.
- **Thai Explanation:** ระเบียนการบริหารจัดการอย่างเป็นทางการที่ระบบบันทึกไว้ เพื่อผูกตัวตนเข้ากับสิ่งรับรอง ข้อมูลโปรไฟล์ และสิทธิ์การเข้าถึง
- **Exam Relevance & Strategy:** System accounts are objects of governance and auditing. An individual may possess separate user and administrative accounts to enforce separation of duties and privilege isolation.
- **English Example:** *"To protect administrative workflows, the systems engineer uses an ordinary account for email and a dedicated privileged account for server maintenance."*
- **Thai Example:** *"เพื่อปกป้องงานดูแลระบบ วิศวกรระบบใช้บัญชีทั่วไปสำหรับอีเมลและใช้บัญชีสิทธิ์สูงเฉพาะสำหรับการบำรุงรักษาเซิร์ฟเวอร์"*
- **Confused With:** Digital Identity, Credential
- **Keywords:** `Account`, `System Record`, `User Profile`, `Privileged Account`, `Service Account`
- **Evidence Sources:** S03 (KNOW-D3-001)

---

#### `VOC-CC26-D3-006` — **Credential**
- **Thai Meaning (ความหมายภาษาไทย):** สิ่งรับรอง / หลักฐานยืนยันตัวตน
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** An object, data structure, or digital token establishing a binding between an identity and an authenticator controlled by the subscriber.
- **Thai Explanation:** วัตถุ โครงสร้างข้อมูล หรือโทเค็นดิจิทัลที่สร้างความผูกพันระหว่างอัตลักษณ์กับสิ่งที่ใช้พิสูจน์ตัวตน (Authenticator) ซึ่งผู้ใช้เป็นผู้ถือครองหรือควบคุม
- **Exam Relevance & Strategy:** Per NIST SP 800-63, a credential binds an identity to an authenticator. Passwords, digital certificates, and smart cards represent credentials or authenticators.
- **English Example:** *"The organization issued a smart card credential containing a cryptographic certificate to enable secure workstation login."*
- **Thai Example:** *"องค์กรออกสิ่งรับรองในรูปแบบสมาร์ตการ์ดที่บรรจุใบรับรองการเข้ารหัสเพื่อเปิดใช้งานการลงชื่อเข้าใช้เวิร์กสเตชันอย่างปลอดภัย"*
- **Confused With:** Authenticator, Identifier, Username
- **Keywords:** `Credential`, `Token`, `Binding`, `NIST`, `Certificate`, `Authentication`
- **Evidence Sources:** S03 (KNOW-D3-002)

---

#### `VOC-CC26-D3-007` — **Authenticator**
- **Thai Meaning (ความหมายภาษาไทย):** สิ่งที่ใช้พิสูจน์ตัวตน
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The secret or physical mechanism possessed and controlled by a claimant to demonstrate and confirm authentication, such as a password, token, or private key.
- **Thai Explanation:** ความลับหรือกลไกทางกายภาพที่ผู้ร้องขอครอบครองและควบคุม เพื่อนำมาแสดงและยืนยันตัวตน เช่น รหัสผ่าน ฮาร์ดแวร์โทเค็น หรือกุญแจส่วนตัว
- **Exam Relevance & Strategy:** Authenticators represent authentication factors (knowledge, possession, inherence). Do not confuse an authenticator with a publicly known username.
- **English Example:** *"A FIDO2 security key serves as a hardware authenticator that proves possession of an asymmetric private key."*
- **Thai Example:** *"กุญแจความปลอดภัย FIDO2 ทำหน้าที่เป็นอุปกรณ์พิสูจน์ตัวตนแบบฮาร์ดแวร์ที่พิสูจน์การครอบครองกุญแจส่วนตัวแบบอสมมาตร"*
- **Confused With:** Credential, Identifier, Claimant
- **Keywords:** `Authenticator`, `Hardware Token`, `Private Key`, `Password`, `MFA Factor`
- **Evidence Sources:** S03 (KNOW-D3-002)

---

#### `VOC-CC26-D3-008` — **Identity Proofing**
- **Thai Meaning (ความหมายภาษาไทย):** การพิสูจน์อัตลักษณ์ (ก่อนออกบัญชี)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The process by which an enrollment service validates that an applicant is a real person and is the specific individual they claim to be, using verified evidence.
- **Thai Explanation:** กระบวนการที่บริการรับลงทะเบียนตรวจสอบและยืนยันว่าผู้สมัครมีตัวตนจริงและเป็นบุคคลที่ตนกล่าวอ้างจริง โดยใช้หลักฐานที่เชื่อถือได้และได้รับการตรวจสอบ
- **Exam Relevance & Strategy:** Crucial exam distinction: Identity proofing happens BEFORE an account or credentials are created (e.g., HR vetting/passport check); authentication happens AFTER during login.
- **English Example:** *"During remote employee onboarding, HR performs identity proofing by verifying government photo identification and background check records."*
- **Thai Example:** *"ในระหว่างการรับพนักงานทางไกล ฝ่ายบุคคลจะทำการพิสูจน์อัตลักษณ์โดยตรวจบัตรประจำตัวที่รัฐออกให้และประวัติภูมิหลัง"*
- **Confused With:** Authentication, Identification, Authorization
- **Keywords:** `Identity Proofing`, `Onboarding`, `Applicant`, `Vetting`, `NIST SP 800-63A`, `Enrollment`
- **Evidence Sources:** S07 (KNOW-D3-015)

---

#### `VOC-CC26-D3-009` — **Identification**
- **Thai Meaning (ความหมายภาษาไทย):** การระบุตัวตน
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The action of presenting an identity claim or identifier to a system to assert who the entity is, prior to any proof or verification.
- **Thai Explanation:** การแสดงตนหรือแจ้งตัวระบุ (Identifier) ต่อระบบเพื่อบอกว่าตนเองคือใคร ก่อนที่จะมีการนำหลักฐานหรือความลับมาตรวจสอบ
- **Exam Relevance & Strategy:** Identification is the initial step of the AAA framework where a user enters a username. It does not provide security until authentication proves the claim.
- **English Example:** *"Entering a username into a login screen constitutes identification, which must be immediately followed by authentication."*
- **Thai Example:** *"การกรอกชื่อผู้ใช้ในหน้าจอลงชื่อเข้าใช้เป็นการระบุตัวตน ซึ่งต้องตามด้วยการพิสูจน์ตัวตนในทันที"*
- **Confused With:** Authentication, Identity Proofing, Authorization
- **Keywords:** `Identification`, `Username`, `Claim`, `AAA`, `Initial Step`
- **Evidence Sources:** S03 (KNOW-D3-001)

---

#### `VOC-CC26-D3-010` — **Authentication**
- **Thai Meaning (ความหมายภาษาไทย):** การพิสูจน์ตัวตน / การยืนยันตัวตน
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `AuthN` | **Full Form:** Authentication
- **English Definition:** The process of verifying that an entity is who or what they claim to be by validating authenticators or credentials provided by the claimant.
- **Thai Explanation:** กระบวนการตรวจสอบและยืนยันความถูกต้องว่าบุคคลหรือระบบเป็นตัวตนที่กล่าวอ้างจริง โดยตรวจความถูกต้องของสิ่งรับรองหรือสิ่งที่ใช้ยืนยันที่ผู้ร้องขอนำมาแสดง
- **Exam Relevance & Strategy:** Core exam principle: Authentication proves identity (Who are you?); it does not grant permissions (What can you do?). High-scoring candidates never confuse AuthN with AuthZ.
- **English Example:** *"The server requires users to complete authentication with a password and a push notification before any session is established."*
- **Thai Example:** *"เซิร์ฟเวอร์กำหนดให้ผู้ใช้ทำการพิสูจน์ตัวตนด้วยรหัสผ่านและการแจ้งเตือนบนมือถือก่อนที่จะสร้างเซสชันการเชื่อมต่อ"*
- **Confused With:** Authorization, Identification, Accounting
- **Keywords:** `Authentication`, `AuthN`, `Verification`, `Identity Verification`, `MFA`, `Credentials`
- **Evidence Sources:** S08 (KNOW-D3-023)

---

#### `VOC-CC26-D3-011` — **Authorization**
- **Thai Meaning (ความหมายภาษาไทย):** การอนุญาตสิทธิ์ / การกำหนดสิทธิ์การเข้าถึง
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `AuthZ` | **Full Form:** Authorization
- **English Definition:** The process of determining and enforcing whether an authenticated subject is permitted to perform a requested action on a specific resource.
- **Thai Explanation:** กระบวนการกำหนดและบังคับใช้ว่าผู้เข้าถึง (Subject) ที่ผ่านการยืนยันตัวตนแล้ว ได้รับอนุญาตให้กระทำการใดต่อทรัพยากรที่ร้องขอหรือไม่
- **Exam Relevance & Strategy:** Authorization follows successful authentication. Even validly authenticated users will be denied access if their authorization policy excludes the resource.
- **English Example:** *"Although the marketing intern successfully completed authentication, authorization rules blocked access to the financial payroll database."*
- **Thai Example:** *"แม้ว่านักศึกษาฝึกงานฝ่ายการตลาดจะผ่านการยืนยันตัวตนสำเร็จ แต่กฎการอนุญาตสิทธิ์ก็บล็อกการเข้าถึงฐานข้อมูลเงินเดือน"*
- **Confused With:** Authentication, Access Review, Accounting
- **Keywords:** `Authorization`, `AuthZ`, `Permissions`, `Access Rights`, `Privileges`, `Policy Enforcement`
- **Evidence Sources:** S08 (KNOW-D3-023)

---

#### `VOC-CC26-D3-012` — **Provisioning**
- **Thai Meaning (ความหมายภาษาไทย):** การจัดเตรียมสิทธิ์และบัญชี
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The administrative workflow of creating user accounts, granting approved privileges, assigning appropriate roles, and issuing authenticators across systems.
- **Thai Explanation:** กระบวนการทำงานด้านบริหารจัดการในการสร้างบัญชีผู้ใช้ มอบสิทธิ์ที่ได้รับอนุมัติ กำหนดบทบาทที่เหมาะสม และออกสิ่งที่ใช้ยืนยันตัวตนในระบบต่างๆ
- **Exam Relevance & Strategy:** Provisioning must be governed by business approval and least privilege. Account creation should never occur based on urgency alone without formal owner approval.
- **English Example:** *"Automated user provisioning assigns standard sales role permissions as soon as the hiring manager's electronic approval is logged."*
- **Thai Example:** *"ระบบจัดเตรียมสิทธิ์อัตโนมัติจะกำหนดสิทธิ์บทบาทฝ่ายขายมาตรฐานทันทีที่ได้รับการอนุมัติทางอิเล็กทรอนิกส์จากผู้จัดการฝ่าย"*
- **Confused With:** Deprovisioning, Identity Proofing, Access Review
- **Keywords:** `Provisioning`, `Account Creation`, `Role Assignment`, `Onboarding`, `Entitlements`
- **Evidence Sources:** S03 (KNOW-D3-004)

---

#### `VOC-CC26-D3-013` — **Deprovisioning**
- **Thai Meaning (ความหมายภาษาไทย):** การถอนสิทธิ์และระงับบัญชี
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The practice of revoking access permissions, disabling or deleting accounts, and terminating active sessions when an employee departs, changes roles, or contracts end.
- **Thai Explanation:** แนวปฏิบัติในการเพิกถอนสิทธิ์การเข้าถึง ระงับหรือลบบัญชี และยุติเซสชันที่ยังทำงานอยู่ เมื่อพนักงานลาออก เปลี่ยนหน้าที่ หรือสิ้นสุดสัญญาจ้าง
- **Exam Relevance & Strategy:** Critical exam point: Deprovisioning terminates access but must preserve historical audit records under retention policies. Terminating central accounts must also revoke downstream app sessions.
- **English Example:** *"The security team executes immediate deprovisioning on a contractor's final day to prevent lingering access to corporate databases."*
- **Thai Example:** *"ทีมความปลอดภัยดำเนินการถอนสิทธิ์ทันทีในวันสุดท้ายของผู้รับเหมาเพื่อป้องกันการหลงเหลือสิทธิ์เข้าถึงฐานข้อมูลองค์กร"*
- **Confused With:** Provisioning, Account Deletion, Audit Trail Disposal
- **Keywords:** `Deprovisioning`, `Offboarding`, `Revocation`, `Account Disabling`, `Session Termination`
- **Evidence Sources:** S05-S06 (KNOW-D3-008)

---

#### `VOC-CC26-D3-014` — **Joiner Process**
- **Thai Meaning (ความหมายภาษาไทย):** กระบวนการรับพนักงานใหม่ (Joiner)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The onboarding phase of identity lifecycle management where a new worker is vetted, identity-proofed, assigned an identifier, and provisioned with approved baseline access.
- **Thai Explanation:** ระยะเริ่มต้นในวงจรชีวิตตัวตนเมื่อพนักงานใหม่เข้าสู่องค์กร โดยผ่านการตรวจสอบประวัติ พิสูจน์อัตลักษณ์ กำหนดรหัสประจำตัว และจัดเตรียมสิทธิ์ขั้นพื้นฐานที่ได้รับอนุมัติ
- **Exam Relevance & Strategy:** Part of the Joiner-Mover-Leaver (JML) framework. Do not copy an existing peer's permissions, which leads to immediate over-entitlement.
- **English Example:** *"The HR and IAM teams standardized the joiner process to provide new hires with their required email and ERP access on day one."*
- **Thai Example:** *"ฝ่ายบุคคลและทีม IAM กำหนดมาตรฐานกระบวนการรับพนักงานใหม่เพื่อให้พนักงานใหม่ได้รับสิทธิ์อีเมลและ ERP ที่จำเป็นตั้งแต่วันแรก"*
- **Confused With:** Mover Process, Leaver Process, Provisioning
- **Keywords:** `Joiner`, `JML`, `Onboarding`, `New Hire`, `Baseline Access`
- **Evidence Sources:** S03 (KNOW-D3-004)

---

#### `VOC-CC26-D3-015` — **Mover Process**
- **Thai Meaning (ความหมายภาษาไทย):** กระบวนการย้ายงาน / เปลี่ยนหน้าที่ (Mover)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The transition phase in identity lifecycle management when an existing employee changes roles, requiring the revocation of obsolete access and provisioning of new approved access.
- **Thai Explanation:** ระยะการเปลี่ยนแปลงหน้าที่ในวงจรชีวิตตัวตนเมื่อพนักงานเปลี่ยนตำแหน่งหรือย้ายแผนก ซึ่งต้องถอนสิทธิ์เดิมที่หมดความจำเป็นออก ควบคู่กับการให้สิทธิ์ใหม่ที่ได้รับอนุมัติ
- **Exam Relevance & Strategy:** The most frequent source of 'privilege accumulation' or 'access creep'. The exam heavily tests revoking previous duties when employees transition departments.
- **English Example:** *"When an engineer transferred to technical sales, the mover process revoked their code repository write access while granting access to CRM software."*
- **Thai Example:** *"เมื่อวิศวกรย้ายไปฝ่ายขายด้านเทคนิค กระบวนการ Mover ได้ถอนสิทธิ์การเขียนโค้ดเดิมออก พร้อมกับให้สิทธิ์เข้าใช้ซอฟต์แวร์ CRM"*
- **Confused With:** Joiner Process, Leaver Process, Privilege Creep
- **Keywords:** `Mover`, `JML`, `Transfer`, `Role Transition`, `Privilege Accumulation`, `Revocation`
- **Evidence Sources:** S04 (KNOW-D3-005)

---

#### `VOC-CC26-D3-016` — **Leaver Process**
- **Thai Meaning (ความหมายภาษาไทย):** กระบวนการออกจากงาน (Leaver)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The termination phase in identity lifecycle management where an individual's accounts, entitlements, tokens, and active sessions are promptly and comprehensively revoked upon departure.
- **Thai Explanation:** ระยะสิ้นสุดการทำงานในวงจรชีวิตตัวตนเมื่อพนักงานลาออกหรือถูกเลิกจ้าง ซึ่งบัญชี สิทธิ์ โทเค็น และเซสชันทั้งหมดจะต้องถูกเพิกถอนอย่างรวดเร็วและครบถ้วน
- **Exam Relevance & Strategy:** Exam scenarios emphasize speed, completeness across cloud and on-prem systems, independent session termination, and audit log retention.
- **English Example:** *"A robust leaver process disabled the resigning executive's corporate portal access within minutes of their formal departure meeting."*
- **Thai Example:** *"กระบวนการ Leaver ที่รัดกุมสามารถระงับการเข้าถึงพอร์ทัลองค์กรของผู้บริหารที่ลาออกได้ภายในไม่กี่นาทีหลังการประชุมแจ้งออก"*
- **Confused With:** Joiner Process, Mover Process, Deprovisioning
- **Keywords:** `Leaver`, `JML`, `Offboarding`, `Termination`, `Departure`, `Revocation`
- **Evidence Sources:** S05-S06 (KNOW-D3-008)

---

#### `VOC-CC26-D3-017` — **Privilege Accumulation**
- **Thai Meaning (ความหมายภาษาไทย):** การสะสมสิทธิ์เกินจำเป็น (Privilege Creep)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The gradual buildup of access rights and permissions over time as users change jobs or projects without previously assigned entitlements being revoked.
- **Thai Explanation:** การสะสมสิทธิ์การเข้าถึงเพิ่มขึ้นเรื่อยๆ ตามกาลเวลา เมื่อผู้ใช้เปลี่ยนงานหรือย้ายโครงการโดยที่สิทธิ์เดิมไม่ถูกถอดถอนออก
- **Exam Relevance & Strategy:** Also known as 'privilege creep'. Periodic access reviews and automated mover workflows are the primary countermeasures to detect and remediate privilege accumulation.
- **English Example:** *"Periodic access reviews discovered severe privilege accumulation in a senior staff member who still possessed write access to four previous departments."*
- **Thai Example:** *"การทบทวนสิทธิ์ตามรอบพบการสะสมสิทธิ์เกินจำเป็นอย่างมากในพนักงานอาวุโสที่ยังคงมีสิทธิ์แก้ไขข้อมูลของ 4 แผนกเดิมที่เคยสังกัด"*
- **Confused With:** Privilege Escalation, Privilege Misuse, Least Privilege
- **Keywords:** `Privilege Accumulation`, `Privilege Creep`, `Access Creep`, `Access Review`, `Mover`
- **Evidence Sources:** S04 (KNOW-D3-005)

---

#### `VOC-CC26-D3-018` — **Access Review**
- **Thai Meaning (ความหมายภาษาไทย):** การทบทวนสิทธิ์การเข้าถึง
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A periodic or trigger-based administrative audit where business managers and resource owners re-examine users' effective permissions against current business necessity.
- **Thai Explanation:** การตรวจสอบตามรอบเวลาหรือตามเหตุการณ์กระตุ้น ซึ่งผู้จัดการและเจ้าของทรัพยากรตรวจสอบสิทธิ์ที่มีผลจริงของผู้ใช้เทียบกับความจำเป็นทางธุรกิจปัจจุบัน
- **Exam Relevance & Strategy:** Reviewing alone is not sufficient; decisions must be enforced. If permissions are rejected, remediation must be carried out and verified.
- **English Example:** *"The department conducts a quarterly access review to ensure that only current finance personnel have access to banking transfer tools."*
- **Thai Example:** *"แผนกจัดให้มีการทบทวนสิทธิ์ประจำไตรมาสเพื่อให้มั่นใจว่ามีเฉพาะบุคลากรการเงินในปัจจุบันเท่านั้นที่เข้าถึงเครื่องมือโอนเงิน"*
- **Confused With:** Access Recertification, Audit Log Review, Authentication
- **Keywords:** `Access Review`, `Audit`, `Recertification`, `Remediation`, `Periodic Review`
- **Evidence Sources:** S04 (KNOW-D3-006)

---

#### `VOC-CC26-D3-019` — **Access Recertification**
- **Thai Meaning (ความหมายภาษาไทย):** การรับรองสิทธิ์การเข้าถึงซ้ำ
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The formal attestation and sign-off by a designated data owner or supervisor confirming that an individual's existing access permissions remain legitimately required.
- **Thai Explanation:** การลงนามรับรองอย่างเป็นทางการโดยเจ้าของข้อมูลหรือผู้บังคับบัญชา เพื่อยืนยันว่าสิทธิ์การเข้าถึงเดิมของบุคคลนั้นยังคงจำเป็นต่อการปฏิบัติงานจริง
- **Exam Relevance & Strategy:** Exam context: Recertification is not a rubber-stamp exercise. Reviewers must inspect evidence of actual need, reject stale rights, and trigger technical remediation.
- **English Example:** *"During annual access recertification, the engineering director rejected 15 inactive contractor accounts."*
- **Thai Example:** *"ในระหว่างการรับรองสิทธิ์ประจำปี ผู้อำนวยการฝ่ายวิศวกรรมได้ปฏิเสธสิทธิ์ของบัญชีผู้รับเหมาที่ไม่เคลื่อนไหวจำนวน 15 บัญชี"*
- **Confused With:** Access Review, Provisioning, Authentication
- **Keywords:** `Access Recertification`, `Attestation`, `Sign-Off`, `Owner Approval`, `Entitlement Recertification`
- **Evidence Sources:** S04 (KNOW-D3-006)

---

#### `VOC-CC26-D3-020` — **Access Remediation**
- **Thai Meaning (ความหมายภาษาไทย):** การแก้ไขปรับปรุงสิทธิ์ (การบังคับถอนสิทธิ์)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The operational action of altering, restricting, or removing permissions and accounts following an access review, audit finding, or security incident.
- **Thai Explanation:** การลงมือปฏิบัติจริงเพื่อแก้ไข ปรับลด หรือเพิกถอนสิทธิ์และบัญชี หลังจากผลการทบทวนสิทธิ์ ข้อตรวจพบจากการตรวจสอบ หรือเหตุการณ์ความปลอดภัย
- **Exam Relevance & Strategy:** An access review is incomplete without remediation. Recording that a permission should be removed provides zero protection until the technical entitlement is revoked.
- **English Example:** *"Automated access remediation revoked the excess permissions within minutes of the manager submitting the review decisions."*
- **Thai Example:** *"ระบบแก้ไขปรับปรุงสิทธิ์อัตโนมัติได้เพิกถอนสิทธิ์ที่เกินจำเป็นออกภายในไม่กี่นาทีหลังจากผู้จัดการส่งผลการตัดสินใจ"*
- **Confused With:** Access Review, Access Recertification, Deprovisioning
- **Keywords:** `Remediation`, `Revocation`, `Enforcement`, `Correction`, `Access Review`
- **Evidence Sources:** S04 (KNOW-D3-006)

---

#### `VOC-CC26-D3-021` — **Account Ownership**
- **Thai Meaning (ความหมายภาษาไทย):** ความรับผิดชอบและความเป็นเจ้าของบัญชี
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The principle that every active account within an organization must have an identifiable, accountable person or team responsible for its lifecycle and authorization.
- **Thai Explanation:** หลักการที่ว่าทุกบัญชีที่เปิดใช้งานในระบบจะต้องมีบุคคลหรือทีมงานที่ระบุตัวตนได้และพร้อมรับผิดชอบต่อวงจรชีวิตและการอนุญาตใช้งานของบัญชีนั้น
- **Exam Relevance & Strategy:** Both human and non-human accounts (service accounts, bots) must possess assigned owners. Accounts without accountable owners are classified as orphaned accounts.
- **English Example:** *"The IAM policy mandates annual verification of account ownership for all automated batch processing credentials."*
- **Thai Example:** *"นโยบาย IAM กำหนดให้มีการตรวจสอบความเป็นเจ้าของบัญชีเป็นประจำทุกปีสำหรับสิ่งรับรองของระบบประมวลผลอัตโนมัติทั้งหมด"*
- **Confused With:** Account Custodianship, System Administrator
- **Keywords:** `Account Ownership`, `Accountability`, `Owner`, `Service Account Owner`, `Governance`
- **Evidence Sources:** S04 (KNOW-D3-007)

---

#### `VOC-CC26-D3-022` — **Inactive Account**
- **Thai Meaning (ความหมายภาษาไทย):** บัญชีที่ไม่เคลื่อนไหว / ไม่มีการใช้งาน
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** An account that has not been logged into or utilized to authenticate within a specified policy timeframe, though it may still retain a valid owner.
- **Thai Explanation:** บัญชีที่ไม่มีการลงชื่อเข้าใช้หรือใช้งานยืนยันตัวตนเลยในช่วงเวลาที่นโยบายกำหนด แม้ว่าบัญชีนั้นอาจจะยังมีเจ้าของที่ถูกต้องรับผิดชอบอยู่ก็ตาม
- **Exam Relevance & Strategy:** Crucial distinction: Inactivity measures time since last logon; orphaning measures missing ownership. A rarely used disaster recovery account is inactive but NOT orphaned.
- **English Example:** *"Security scripts flag accounts inactive for 90 days for investigation before disabling them according to company policy."*
- **Thai Example:** *"สคริปต์ความปลอดภัยตรวจจับบัญชีที่ไม่เคลื่อนไหวเกิน 90 วันเพื่อทำการตรวจสอบก่อนระงับการใช้งานตามนโยบายบริษัท"*
- **Confused With:** Orphaned Account, Dormant Account, Stale Entitlement
- **Keywords:** `Inactive Account`, `Last Logon`, `Dormant`, `Inactivity`, `Monitoring`
- **Evidence Sources:** S04 (KNOW-D3-007)

---

#### `VOC-CC26-D3-023` — **Orphaned Account**
- **Thai Meaning (ความหมายภาษาไทย):** บัญชีที่ขาดผู้รับผิดชอบ (Orphaned Account)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** An account on an information system that lacks a valid, recognized, or accountable owner, typically created for departed staff or unmanaged legacy services.
- **Thai Explanation:** บัญชีในระบบที่ไม่มีผู้รับผิดชอบที่ถูกต้องหรือระบุตัวตนไม่ได้ ซึ่งมักเกิดจากพนักงานที่ลาออกไปแล้ว หรือระบบบริการเก่าที่ไม่มีผู้ดูแล
- **Exam Relevance & Strategy:** A major security vulnerability. An orphaned account can be actively running automated tasks, yet remains a critical governance defect because nobody manages or reviews it.
- **English Example:** *"The internal audit discovered five orphaned accounts on the database cluster belonging to consultants who left two years ago."*
- **Thai Example:** *"การตรวจสอบภายในพบว่ามีบัญชีที่ขาดผู้รับผิดชอบจำนวน 5 บัญชีในคลัสเตอร์ฐานข้อมูล ซึ่งเป็นของที่ปรึกษาที่ลาออกไปแล้วเมื่อ 2 ปีก่อน"*
- **Confused With:** Inactive Account, Service Account, Guest Account
- **Keywords:** `Orphaned Account`, `Missing Owner`, `No Accountability`, `Audit Finding`, `Security Risk`
- **Evidence Sources:** S04 (KNOW-D3-007)

---

#### `VOC-CC26-D3-024` — **Service Account**
- **Thai Meaning (ความหมายภาษาไทย):** บัญชีบริการ (สำหรับระบบและแอปพลิเคชัน)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A non-human account configured to allow automated software, operating system services, or daemon processes to interact with system resources.
- **Thai Explanation:** บัญชีที่ไม่ได้มีไว้สำหรับมนุษย์ใช้งาน แต่ถูกสร้างขึ้นเพื่อให้ซอฟต์แวร์อัตโนมัติ บริการของระบบปฏิบัติการ หรือดาเอมอน สามารถเข้าถึงทรัพยากรระบบได้
- **Exam Relevance & Strategy:** Service accounts frequently hold elevated privileges. They must have assigned owners, scoped rights, automated password rotation, and regular access reviews.
- **English Example:** *"The backup utility runs under a dedicated service account restricted solely to reading files and writing to archive volumes."*
- **Thai Example:** *"โปรแกรมสำรองข้อมูลทำงานภายใต้บัญชีบริการเฉพาะที่ถูกจำกัดสิทธิ์ให้อ่านไฟล์และเขียนลงสื่อบันทึกข้อมูลถาวรเท่านั้น"*
- **Confused With:** User Account, Workload Identity, Privileged Account
- **Keywords:** `Service Account`, `Non-Human`, `Daemon`, `Automation`, `Least Privilege`
- **Evidence Sources:** S09 (KNOW-D3-014)

---

#### `VOC-CC26-D3-025` — **Workload Identity**
- **Thai Meaning (ความหมายภาษาไทย):** อัตลักษณ์สำหรับภาระงาน (Workload Identity)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** An identity assigned to a non-human software workload (such as an application, container, microservice, or AI agent) to authenticate with external cloud resources.
- **Thai Explanation:** อัตลักษณ์ที่กำหนดให้แก่ภาระงานซอฟต์แวร์ (เช่น แอปพลิเคชัน คอนเทนเนอร์ ไมโครเซอร์วิส หรือบอต AI) เพื่อใช้ยืนยันตัวตนกับทรัพยากรคลาวด์ภายนอก
- **Exam Relevance & Strategy:** Part of the 2026 exam update. Automated workloads must have their own identities and cannot use interactive human MFA prompts.
- **English Example:** *"Cloud-native microservices authenticate to the object storage service using managed workload identities rather than hardcoded API keys."*
- **Thai Example:** *"ไมโครเซอร์วิสบนคลาวด์ยืนยันตัวตนกับบริการจัดเก็บข้อมูลออบเจกต์โดยใช้อัตลักษณ์สำหรับภาระงานที่จัดการได้ แทนการฝังคีย์ API ในโค้ด"*
- **Confused With:** Service Account, User Identity, API Key
- **Keywords:** `Workload Identity`, `Machine Identity`, `Cloud-Native`, `Container`, `Non-Human Identity`, `AI Agent`
- **Evidence Sources:** S08 (KNOW-D3-014)

---

#### `VOC-CC26-D3-026` — **Directory Service**
- **Thai Meaning (ความหมายภาษาไทย):** บริการไดเรกทอรี
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A structured database system that organizes, stores, and looks up information about network entities, users, groups, devices, and security attributes.
- **Thai Explanation:** ระบบฐานข้อมูลที่มีโครงสร้างซึ่งทำหน้าที่จัดระเบียบ จัดเก็บ และค้นหาข้อมูลเกี่ยวกับทรัพยากรเครือข่าย ผู้ใช้ กลุ่ม อุปกรณ์ และคุณลักษณะด้านความปลอดภัย
- **Exam Relevance & Strategy:** Directory services (like LDAP or Active Directory) store structured identity and group membership data. They are not the same as an IdP that generates federated assertions.
- **English Example:** *"Enterprise applications query the LDAP directory service to verify employee department membership before providing departmental templates."*
- **Thai Example:** *"แอปพลิเคชันองค์กรส่งคำสั่งสอบถามไปยังบริการไดเรกทอรี LDAP เพื่อตรวจแผนกของพนักงานก่อนส่งมอบแม่แบบเอกสารของแผนก"*
- **Confused With:** Identity Provider, Database, Access Management Platform
- **Keywords:** `Directory Service`, `LDAP`, `Active Directory`, `Data Store`, `Lookup`, `Attributes`
- **Evidence Sources:** S08 (KNOW-D3-011)

---

#### `VOC-CC26-D3-027` — **Identity Provider**
- **Thai Meaning (ความหมายภาษาไทย):** ผู้ให้บริการอัตลักษณ์ (IdP)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `IdP` | **Full Form:** Identity Provider
- **English Definition:** A trusted administrative system that authenticates users and issues verifiable digital assertions or tokens regarding their identity to relying applications.
- **Thai Explanation:** ระบบบริหารจัดการที่น่าเชื่อถือซึ่งทำหน้าที่ยืนยันตัวตนของผู้ใช้ และออกข้อความยืนยันหรือโทเค็นดิจิทัลที่ตรวจสอบได้เพื่อส่งต่อให้แก่แอปพลิเคชันปลายทาง
- **Exam Relevance & Strategy:** In federated authentication, the IdP authenticates the user, while the Service Provider (relying party) validates the assertion and makes local authorization decisions.
- **English Example:** *"The university uses a central cloud Identity Provider so students can authenticate once and access both email and library services."*
- **Thai Example:** *"มหาวิทยาลัยใช้ผู้ให้บริการอัตลักษณ์บนคลาวด์ส่วนกลาง เพื่อให้นักศึกษายืนยันตัวตนครั้งเดียวแล้วเข้าถึงได้ทั้งอีเมลและบริการห้องสมุด"*
- **Confused With:** Service Provider, Directory Service, Certificate Authority
- **Keywords:** `IdP`, `Identity Provider`, `Federation`, `SAML`, `OIDC`, `Assertions`, `Authentication Server`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-028` — **Relying Party**
- **Thai Meaning (ความหมายภาษาไทย):** ฝ่ายที่พึ่งพาข้อมูลอัตลักษณ์ (Service Provider)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `RP` | **Full Form:** Relying Party
- **English Definition:** An application, website, or service that relies on an external Identity Provider to authenticate users and accept signed identity assertions.
- **Thai Explanation:** แอปพลิเคชัน เว็บไซต์ หรือบริการที่พึ่งพาผู้ให้บริการอัตลักษณ์ภายนอกในการยืนยันตัวตนผู้ใช้ และยอมรับข้อความยืนยันตัวตนที่ลงลายมือชื่อดิจิทัล
- **Exam Relevance & Strategy:** Also known as a Service Provider (SP) in SAML. The relying party does not see the user's password; it trusts and validates the IdP's cryptographic assertion.
- **English Example:** *"The corporate expense reporting tool acts as a relying party, trusting SAML tokens issued by the company's Okta IdP."*
- **Thai Example:** *"เครื่องมือรายงานค่าใช้จ่ายขององค์กรทำหน้าที่เป็นฝ่ายที่พึ่งพา โดยเชื่อถือโทเค็น SAML ที่ออกโดย IdP ของบริษัท"*
- **Confused With:** Identity Provider, Directory Service, Subject
- **Keywords:** `Relying Party`, `RP`, `Service Provider`, `SP`, `Federation`, `Assertion`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-029` — **Identity Federation**
- **Thai Meaning (ความหมายภาษาไทย):** การเชื่อมโยงอัตลักษณ์ระหว่างระบบ (Federation)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A trust arrangement linking identity management systems across distinct security domains, allowing users to use common credentials to access diverse systems.
- **Thai Explanation:** ข้อตกลงความไว้วางใจที่เชื่อมโยงระบบจัดการตัวตนข้ามขอบเขตความปลอดภัย ทำให้ผู้ใช้สามารถใช้สิ่งรับรองชุดเดียวกันเพื่อเข้าถึงระบบที่หลากหลาย
- **Exam Relevance & Strategy:** Federation enables Single Sign-On (SSO) across enterprise boundaries or third-party cloud apps without synchronizing passwords to every vendor.
- **English Example:** *"Through identity federation, employees access external SaaS tools using their corporate network login credentials."*
- **Thai Example:** *"ด้วยการเชื่อมโยงอัตลักษณ์ระหว่างระบบ พนักงานสามารถเข้าถึงเครื่องมือ SaaS ภายนอกได้โดยใช้ข้อมูลลงชื่อเข้าใช้ของเครือข่ายองค์กร"*
- **Confused With:** Single Sign-On, Directory Replication, Password Synchronization
- **Keywords:** `Federation`, `Trust Relationship`, `SAML`, `Cross-Domain`, `SaaS`, `SSO`
- **Evidence Sources:** S07-S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-030` — **Single Sign-On**
- **Thai Meaning (ความหมายภาษาไทย):** การลงชื่อเข้าใช้ครั้งเดียว (SSO)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `SSO` | **Full Form:** Single Sign-On
- **English Definition:** An authentication capability that allows a user to log in once with a single set of credentials and gain access to multiple connected applications without re-entering credentials.
- **Thai Explanation:** คุณสมบัติการยืนยันตัวตนที่ช่วยให้ผู้ใช้ลงชื่อเข้าใช้เพียงครั้งเดียวด้วยสิ่งรับรองชุดเดียว แล้วสามารถเข้าถึงแอปพลิเคชันที่เชื่อมโยงกันหลายระบบได้โดยไม่ต้องกรอกรหัสผ่านซ้ำ
- **Exam Relevance & Strategy:** SSO improves user experience and password hygiene. However, exam candidates must remember that SSO does not bypass authorization or grant blanket resource access.
- **English Example:** *"Deploying enterprise SSO reduced help-desk password reset requests by over 60 percent."*
- **Thai Example:** *"การติดตั้งระบบ SSO ขององค์กรช่วยลดคำขอรีเซ็ตรหัสผ่านของฝ่ายบริการไอทีลงมากกว่า 60 เปอร์เซ็นต์"*
- **Confused With:** Federation, Same Sign-On, Multifactor Authentication
- **Keywords:** `SSO`, `Single Sign-On`, `Authentication`, `User Experience`, `Convenience`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-031` — **Authentication Assertion**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อความยืนยันการยืนยันตัวตน (Token / Assertion)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A digitally signed and cryptographically verifiable statement issued by an Identity Provider asserting that a subject was successfully authenticated.
- **Thai Explanation:** ข้อความที่ลงลายมือชื่อดิจิทัลและสามารถตรวจสอบความถูกต้องทางวิทยาการรหัสลับได้ ซึ่งออกโดยผู้ให้บริการอัตลักษณ์เพื่อยืนยันว่าผู้ใช้ได้ผ่านการพิสูจน์ตัวตนแล้ว
- **Exam Relevance & Strategy:** Standardized as SAML assertions or OIDC/JWT tokens. The relying party checks the signature, audience, and expiry before granting session access.
- **English Example:** *"The cloud portal validated the SAML assertion's digital signature and timestamp before admitting the user."*
- **Thai Example:** *"พอร์ทัลบนคลาวด์ได้ตรวจสอบลายมือชื่อดิจิทัลและเวลาที่ระบุในข้อความยืนยัน SAML ก่อนที่จะอนุญาตให้ผู้ใช้เข้าสู่ระบบ"*
- **Confused With:** Digital Certificate, Cookie, Password Hash
- **Keywords:** `Assertion`, `SAML Token`, `JWT`, `Cryptographic Signature`, `Authentication Proof`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-032` — **Session Revocation**
- **Thai Meaning (ความหมายภาษาไทย):** การยกเลิกเซสชันการเชื่อมต่อ
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The technical mechanism of invalidating an active user session token or cookie to immediately terminate an entity's connection across connected applications.
- **Thai Explanation:** กลไกทางเทคนิคในการทำให้โทเค็นหรือคุกกี้ของเซสชันที่กำลังใช้งานอยู่ใช้การไม่ได้ เพื่อยุติการเชื่อมต่อของผู้ใช้ในแอปพลิเคชันที่เชื่อมโยงกันโดยทันที
- **Exam Relevance & Strategy:** Disabling a central account in directory services does not guarantee immediate termination of active downstream cloud sessions without explicit session revocation.
- **English Example:** *"When an employee was terminated, the security administrator triggered global session revocation across all federated cloud services."*
- **Thai Example:** *"เมื่อพนักงานถูกเลิกจ้าง ผู้ดูแลระบบความปลอดภัยได้สั่งการยกเลิกเซสชันทั่วโลกในบริการคลาวด์ทั้งหมดที่เชื่อมโยงกัน"*
- **Confused With:** Account Disabling, Password Reset, Session Timeout
- **Keywords:** `Session Revocation`, `Invalidation`, `Downstream Session`, `Token Expiry`, `Offboarding`
- **Evidence Sources:** S06 (KNOW-D3-009)

---

#### `VOC-CC26-D3-033` — **Identity Governance and Administration**
- **Thai Meaning (ความหมายภาษาไทย):** การกำกับดูแลและการบริหารจัดการอัตลักษณ์ (IGA)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `IGA` | **Full Form:** Identity Governance and Administration
- **English Definition:** The integrated policy, compliance, and technological practice governing user access requests, automated provisioning, entitlements certification, and audit compliance.
- **Thai Explanation:** แนวปฏิบัติด้านนโยบาย การปฏิบัติตามกฎเกณฑ์ และเทคโนโลยีแบบบูรณาการที่ใช้กำกับดูแลคำขอเข้าถึง การจัดเตรียมสิทธิ์อัตโนมัติ การรับรองสิทธิ์ และการตรวจสอบ
- **Exam Relevance & Strategy:** IGA platforms provide automated workflows for access requests, approvals, reviews, and reporting, helping enterprises satisfy strict audit and regulatory standards.
- **English Example:** *"The compliance officer deployed an IGA tool to automate quarterly access recertifications and track role ownership."*
- **Thai Example:** *"เจ้าหน้าที่กำกับการปฏิบัติตามกฎเกณฑ์ได้ติดตั้งเครื่องมือ IGA เพื่อทำให้การรับรองสิทธิ์ประจำไตรมาสเป็นอัตโนมัติและติดตามผู้รับผิดชอบบทบาท"*
- **Confused With:** IAM, Access Management, Active Directory
- **Keywords:** `IGA`, `Governance`, `Administration`, `Compliance`, `Access Request`, `Workflow`
- **Evidence Sources:** S08 (KNOW-D3-013)

---

#### `VOC-CC26-D3-034` — **NIST SP 800-63**
- **Thai Meaning (ความหมายภาษาไทย):** แนวปฏิบัติของ NIST ด้านอัตลักษณ์ดิจิทัล (SP 800-63)
- **Category:** `core_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** The authoritative US federal guideline series providing technical standards and recommendations for digital identity proofing, authentication, and federation.
- **Thai Explanation:** ชุดแนวทางมาตรฐานของรัฐบาลสหรัฐฯ ที่ให้คำแนะนำและข้อกำหนดทางเทคนิคสำหรับการพิสูจน์อัตลักษณ์ (Proofing) การยืนยันตัวตน (AuthN) และการเชื่อมโยงอัตลักษณ์ (Federation)
- **Exam Relevance & Strategy:** SP 800-63 is a technical guidance document, not an IAM software platform. It divides identity assurance into proofing (63A), authentication (63B), and federation (63C).
- **English Example:** *"The security architect designed the customer portal's registration workflow to align with NIST SP 800-63 standards."*
- **Thai Example:** *"สถาปนิกความปลอดภัยได้ออกแบบขั้นตอนการลงทะเบียนของพอร์ทัลลูกค้าให้สอดคล้องกับมาตรฐาน NIST SP 800-63"*
- **Confused With:** NIST CSF, NIST SP 800-53, ISO 27001
- **Keywords:** `NIST SP 800-63`, `Digital Identity Guidelines`, `Proofing`, `Authentication`, `Federation`
- **Evidence Sources:** S07 (KNOW-D3-010)

---

#### `VOC-CC26-D3-062` — **IAM**
- **Thai Meaning (ความหมายภาษาไทย):** การจัดการตัวตนและการเข้าถึง (IAM)
- **Category:** `acronym` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `IAM` | **Full Form:** Identity and Access Management
- **English Definition:** The comprehensive discipline, architecture, and technology framework ensuring that the right entities access the right resources for legitimate reasons.
- **Thai Explanation:** กรอบแนวทางและเทคโนโลยีที่ใช้บริหารจัดการตัวตนและการเข้าถึง เพื่อให้มั่นใจว่าผู้ที่มีสิทธิ์เท่านั้นที่สามารถเข้าถึงทรัพยากรที่เหมาะสมได้
- **Exam Relevance & Strategy:** The overarching theme and official title of Domain 3 (weighted at 20% on the 2026 exam outline).
- **English Example:** *"The CIO sponsored an enterprise-wide IAM initiative to improve compliance and streamline access reviews."*
- **Thai Example:** *"CIO สนับสนุนโครงการ IAM ทั่วทั้งองค์กรเพื่อปรับปรุงการปฏิบัติตามกฎเกณฑ์และเพิ่มความคล่องตัวในการทบทวนสิทธิ์"*
- **Confused With:** IdP, IGA, PAM
- **Keywords:** `IAM`, `Identity and Access Management`, `Acronym`
- **Evidence Sources:** S01 (KNOW-D3-001)

---

#### `VOC-CC26-D3-063` — **IdP**
- **Thai Meaning (ความหมายภาษาไทย):** ผู้ให้บริการอัตลักษณ์ (IdP)
- **Category:** `acronym` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `IdP` | **Full Form:** Identity Provider
- **English Definition:** A centralized, trusted authentication service that manages user identities and issues verifiable tokens to relying applications.
- **Thai Explanation:** บริการยืนยันตัวตนส่วนกลางที่น่าเชื่อถือ ซึ่งทำหน้าที่จัดการข้อมูลตัวตนผู้ใช้และออกโทเค็นที่ตรวจสอบได้ให้แก่แอปพลิเคชันปลายทาง
- **Exam Relevance & Strategy:** Key architectural component in federated identity. Tested in conjunction with Service Providers (SP) and Single Sign-On (SSO).
- **English Example:** *"When logging into the SaaS CRM, the user is redirected to the corporate IdP for authentication."*
- **Thai Example:** *"เมื่อเข้าสู่ระบบ CRM บนคลาวด์ ผู้ใช้จะถูกส่งต่อไปยัง IdP ขององค์กรเพื่อทำการยืนยันตัวตน"*
- **Confused With:** SP, IAM, SSO
- **Keywords:** `IdP`, `Identity Provider`, `Federation`, `Acronym`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-064` — **SSO**
- **Thai Meaning (ความหมายภาษาไทย):** การลงชื่อเข้าใช้ครั้งเดียว (SSO)
- **Category:** `acronym` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `SSO` | **Full Form:** Single Sign-On
- **English Definition:** A session authentication service that permits a user to log in once with one set of credentials to access multiple independent software applications.
- **Thai Explanation:** บริการยืนยันตัวตนระดับเซสชันที่ช่วยให้ผู้ใช้ลงชื่อเข้าใช้เพียงครั้งเดียวด้วยสิ่งรับรองชุดเดียว เพื่อเข้าถึงแอปพลิเคชันอิสระหลายระบบ
- **Exam Relevance & Strategy:** Improves security by reducing password fatigue, but increases risk if the single primary credential or master session is compromised.
- **English Example:** *"With SSO enabled, employees launch enterprise apps from a unified portal without re-typing their passwords."*
- **Thai Example:** *"เมื่อเปิดใช้ SSO พนักงานสามารถเปิดแอปองค์กรจากพอร์ทัลเดียวได้โดยไม่ต้องพิมพ์รหัสผ่านซ้ำ"*
- **Confused With:** Same Sign-On, IdP, MFA
- **Keywords:** `SSO`, `Single Sign-On`, `Authentication`, `Acronym`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-065` — **IGA**
- **Thai Meaning (ความหมายภาษาไทย):** การกำกับดูแลและการบริหารจัดการอัตลักษณ์ (IGA)
- **Category:** `acronym` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `IGA` | **Full Form:** Identity Governance and Administration
- **English Definition:** Policy and automated technology solutions managing access requests, lifecycle provisioning, entitlements recertification, and compliance auditing.
- **Thai Explanation:** โซลูชันนโยบายและเทคโนโลยีอัตโนมัติที่ใช้จัดการคำขอเข้าถึง การจัดเตรียมสิทธิ์ตามวงจรชีวิต การรับรองสิทธิ์ซ้ำ และการตรวจสอบตามกฎเกณฑ์
- **Exam Relevance & Strategy:** Distinguish IGA (governance, reviews, approvals) from access enforcement (firewalls, gatekeepers blocking/allowing packets).
- **English Example:** *"The enterprise uses an IGA solution to maintain audit trails for user access approvals and role changes."*
- **Thai Example:** *"องค์กรใช้โซลูชัน IGA เพื่อจัดเก็บหลักฐานการตรวจสอบสำหรับการอนุมัติสิทธิ์ผู้ใช้และการเปลี่ยนบทบาท"*
- **Confused With:** IAM, PAM, IdP
- **Keywords:** `IGA`, `Identity Governance`, `Compliance`, `Acronym`
- **Evidence Sources:** S08 (KNOW-D3-013)

---

#### `VOC-CC26-D3-066` — **LDAP**
- **Thai Meaning (ความหมายภาษาไทย):** โพรโทคอลเข้าถึงไดเรกทอรีแบบน้ำหนักเบา (LDAP)
- **Category:** `acronym` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `LDAP` | **Full Form:** Lightweight Directory Access Protocol
- **English Definition:** An open, standard network protocol used to query, search, and modify directory service records such as user accounts and group memberships over TCP/IP.
- **Thai Explanation:** โพรโทคอลเครือข่ายมาตรฐานเปิดที่ใช้สำหรับสืบค้น ค้นหา และแก้ไขระเบียนในบริการไดเรกทอรี เช่น บัญชีผู้ใช้และสมาชิกกลุ่มผ่านเครือข่าย TCP/IP
- **Exam Relevance & Strategy:** The universal directory query protocol. Often tested as the query mechanism for checking user existence and group attributes.
- **English Example:** *"The web application sends an LDAP query to verify that the authenticating user belongs to the 'Finance-Approvers' group."*
- **Thai Example:** *"เว็บแอปพลิเคชันส่งคำสั่งสืบค้น LDAP เพื่อตรวจสอบว่าผู้ใช้ที่กำลังยืนยันตัวตนเป็นสมาชิกของกลุ่ม 'Finance-Approvers' หรือไม่"*
- **Confused With:** AD, SAML, RADIUS
- **Keywords:** `LDAP`, `Directory Protocol`, `Active Directory`, `Query`, `Acronym`
- **Evidence Sources:** S08 (KNOW-D3-011)

---

#### `VOC-CC26-D3-067` — **SAML**
- **Thai Meaning (ความหมายภาษาไทย):** ภาษามาร์กอัปสำหรับข้อความยืนยันความปลอดภัย (SAML)
- **Category:** `acronym` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `SAML` | **Full Form:** Security Assertion Markup Language
- **English Definition:** An XML-based standard protocol for exchanging digital authentication and authorization data between an Identity Provider and a Service Provider.
- **Thai Explanation:** โพรโทคอลมาตรฐานที่ใช้รูปแบบ XML สำหรับแลกเปลี่ยนข้อมูลการพิสูจน์ตัวตนและการอนุญาตสิทธิ์ระหว่างผู้ให้บริการอัตลักษณ์และผู้ให้บริการแอปพลิเคชัน
- **Exam Relevance & Strategy:** Standard enterprise federation protocol. Powers browser-based SSO across enterprise networks and third-party SaaS platforms.
- **English Example:** *"SAML enables users to authenticate once with corporate credentials and seamlessly access multiple external cloud applications."*
- **Thai Example:** *"SAML ช่วยให้ผู้ใช้ยืนยันตัวตนครั้งเดียวด้วยข้อมูลประจำตัวขององค์กร แล้วเข้าถึงแอปพลิเคชันคลาวด์ภายนอกหลายระบบได้อย่างราบรื่น"*
- **Confused With:** OIDC, OAuth, XML
- **Keywords:** `SAML`, `Security Assertion`, `XML`, `Federation`, `SSO`, `Acronym`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-068` — **OIDC**
- **Thai Meaning (ความหมายภาษาไทย):** โพรโทคอลโอเพนไอดีคอนเนกต์ (OIDC)
- **Category:** `acronym` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `OIDC` | **Full Form:** OpenID Connect
- **English Definition:** A simple, modern identity layer built on top of the OAuth 2.0 framework that allows clients to verify the identity of an end user based on authentication performed by an authorization server.
- **Thai Explanation:** ชั้นการจัดการตัวตนที่ทันสมัยซึ่งสร้างขึ้นบนกรอบการทำงาน OAuth 2.0 ช่วยให้แอปพลิเคชันสามารถตรวจสอบตัวตนของผู้ใช้จากการยืนยันตัวตนที่ดำเนินการโดยเซิร์ฟเวอร์
- **Exam Relevance & Strategy:** Uses JSON Web Tokens (JWT) for modern web and mobile application federation, contrasting with legacy XML-based SAML.
- **English Example:** *"Mobile applications utilize OIDC to authenticate users against social and enterprise identity providers."*
- **Thai Example:** *"แอปพลิเคชันบนมือถือใช้ OIDC เพื่อยืนยันตัวตนผู้ใช้กับผู้ให้บริการอัตลักษณ์ระดับองค์กรหรือโซเชียลมีเดีย"*
- **Confused With:** OAuth, SAML, JWT
- **Keywords:** `OIDC`, `OpenID Connect`, `OAuth 2.0`, `JWT`, `Modern Federation`, `Acronym`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

#### `VOC-CC26-D3-080` — **Identification vs. Identity Proofing**
- **Thai Meaning (ความหมายภาษาไทย):** การระบุตัวตน เทียบกับ การพิสูจน์อัตลักษณ์
- **Category:** `confusing_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** Identification is simply claiming an identity (e.g. typing a username), whereas identity proofing is the rigorous vetting process that verifies an applicant is indeed the real-world person they claim to be.
- **Thai Explanation:** การระบุตัวตน (Identification) เป็นเพียงการแจ้งตัวตนที่กล่าวอ้าง (เช่น พิมพ์ชื่อผู้ใช้) ส่วนการพิสูจน์อัตลักษณ์ (Identity Proofing) คือการตรวจสอบหลักฐานอย่างเข้มงวดเพื่อยืนยันว่าผู้สมัครเป็นบุคคลจริงคนนั้นจริง
- **Exam Relevance & Strategy:** Identity proofing happens during onboarding before account creation. Identification happens each time a user enters an identifier to log in.
- **English Example:** *"Showing a passport at the HR office is identity proofing; entering your username into a web portal is identification."*
- **Thai Example:** *"การแสดงหนังสือเดินทางที่แผนกบุคคลคือการพิสูจน์อัตลักษณ์ ส่วนการกรอกชื่อผู้ใช้ในเว็บพอร์ทัลคือการระบุตัวตน"*
- **Confused With:** Authentication vs Authorization, Verification
- **Keywords:** `Identification vs Identity Proofing`, `Claim vs Vetting`, `Onboarding`, `Confusing Term`
- **Evidence Sources:** S07 (KNOW-D3-015)

---

#### `VOC-CC26-D3-081` — **Digital Identity vs. Account vs. Identifier**
- **Thai Meaning (ความหมายภาษาไทย):** อัตลักษณ์ดิจิทัล เทียบกับ บัญชีผู้ใช้ เทียบกับ ตัวระบุ
- **Category:** `confusing_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** An identity represents the entity across context; an account is the managed system record holding entitlements; an identifier is the specific label naming that account.
- **Thai Explanation:** อัตลักษณ์ (Identity) คือตัวแทนดิจิทัลของบุคคล บัญชี (Account) คือระเบียนในระบบที่ใช้จัดการสิทธิ์ และตัวระบุ (Identifier) คือชื่อหรือรหัสที่ใช้เรียกบัญชีนั้น
- **Exam Relevance & Strategy:** One human identity can be linked to multiple accounts (e.g., standard account and admin account) with distinct identifiers.
- **English Example:** *"Alice (the identity) owns an ordinary account with identifier 'alice' and an admin account with identifier 'alice-adm'."*
- **Thai Example:** *"อลิซ (อัตลักษณ์) มีบัญชีทั่วไปที่มีตัวระบุว่า 'alice' และมีบัญชีผู้ดูแลที่มีตัวระบุว่า 'alice-adm'"*
- **Confused With:** Credential vs Authenticator, Subject vs Object
- **Keywords:** `Identity vs Account vs Identifier`, `Entity`, `Username`, `NIST SP 800-63`, `Confusing Term`
- **Evidence Sources:** S03 (KNOW-D3-001)

---

#### `VOC-CC26-D3-082` — **Credential vs. Authenticator**
- **Thai Meaning (ความหมายภาษาไทย):** สิ่งรับรอง เทียบกับ สิ่งที่ใช้พิสูจน์ตัวตน
- **Category:** `confusing_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** An authenticator is the physical device or secret controlled by the claimant (e.g. smart card, password), whereas a credential binds that authenticator to a verified identity.
- **Thai Explanation:** สิ่งที่ใช้พิสูจน์ตัวตน (Authenticator) คืออุปกรณ์หรือความลับที่ผู้ใช้ครอบครอง (เช่น สมาร์ตการ์ด รหัสผ่าน) ส่วนสิ่งรับรอง (Credential) คือสิ่งที่ผูกวัตถุพิสูจน์ตัวตนนั้นเข้ากับอัตลักษณ์ที่ตรวจสอบแล้ว
- **Exam Relevance & Strategy:** Per NIST terminology, a credential is the authoritative binding issued to a subscriber, while the authenticator is the mechanism used during the authentication transaction.
- **English Example:** *"The hardware token is the authenticator; the registered token record in the identity server is the credential."*
- **Thai Example:** *"ฮาร์ดแวร์โทเค็นคือสิ่งที่ใช้พิสูจน์ตัวตน ส่วนระเบียนโทเค็นที่ลงทะเบียนไว้ในเซิร์ฟเวอร์อัตลักษณ์คือสิ่งรับรอง"*
- **Confused With:** Identifier vs Identity, Secret
- **Keywords:** `Credential vs Authenticator`, `NIST Terminology`, `Token Binding`, `Confusing Term`
- **Evidence Sources:** S03 (KNOW-D3-002)

---

#### `VOC-CC26-D3-083` — **Inactive Account vs. Orphaned Account**
- **Thai Meaning (ความหมายภาษาไทย):** บัญชีไม่เคลื่อนไหว เทียบกับ บัญชีขาดผู้รับผิดชอบ
- **Category:** `confusing_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** An inactive account has no recent login activity but retains a documented owner; an orphaned account lacks an accountable owner regardless of whether it is actively running tasks.
- **Thai Explanation:** บัญชีไม่เคลื่อนไหว (Inactive) คือไม่มีการเข้าใช้เมื่อเร็วๆ นี้แต่ยังมีเจ้าของที่ระบุได้ ส่วนบัญชีขาดผู้รับผิดชอบ (Orphaned) คือไม่มีเจ้าของรับผิดชอบ แม้ว่าบัญชีนั้นอาจยังถูกรันงานอยู่ทุกวันก็ตาม
- **Exam Relevance & Strategy:** Academic QA correction: Inactivity and orphaning are independent dimensions. Do not assume active use proves good governance, or that inactive accounts must be deleted immediately.
- **English Example:** *"A rarely used disaster recovery account is inactive but legitimate; an unmanaged bot running daily without a responsible team is orphaned."*
- **Thai Example:** *"บัญชีกู้คืนระบบที่นานๆ ใช้ทีเป็นบัญชีไม่เคลื่อนไหวที่ชอบธรรม ส่วนบอตที่รันทุกวันโดยไม่มีทีมดูแลเป็นบัญชีที่ขาดผู้รับผิดชอบ"*
- **Confused With:** Dormant Account, Service Account
- **Keywords:** `Inactive vs Orphaned`, `Account Ownership`, `Usage vs Ownership`, `Audit Distinction`, `Confusing Term`
- **Evidence Sources:** S04 (KNOW-D3-007)

---

#### `VOC-CC26-D3-084` — **Provisioning vs. Deprovisioning**
- **Thai Meaning (ความหมายภาษาไทย):** การจัดเตรียมสิทธิ์ เทียบกับ การถอนสิทธิ์
- **Category:** `confusing_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** Provisioning is the authorized granting and creation of accounts and entitlements; deprovisioning is the timely revocation of access and disabling of accounts upon transfer or exit.
- **Thai Explanation:** การจัดเตรียมสิทธิ์ (Provisioning) คือการสร้างบัญชีและให้สิทธิ์ที่ได้รับอนุมัติ ส่วนการถอนสิทธิ์ (Deprovisioning) คือการเพิกถอนสิทธิ์และระงับบัญชีอย่างทันท่วงทีเมื่อย้ายงานหรือออกจากองค์กร
- **Exam Relevance & Strategy:** Exam questions test the timing and prerequisites: Provisioning requires prior owner approval; Deprovisioning requires revoking downstream sessions and preserving audit logs.
- **English Example:** *"HR notifies IAM to execute provisioning on the start date and deprovisioning on the resignation date."*
- **Thai Example:** *"ฝ่ายบุคคลแจ้ง IAM ให้ดำเนินการจัดเตรียมสิทธิ์ในวันเริ่มงาน และดำเนินการถอนสิทธิ์ในวันที่มีผลลาออก"*
- **Confused With:** Enrollment vs Termination, Access Lifecycle
- **Keywords:** `Provisioning vs Deprovisioning`, `Grant vs Revoke`, `Lifecycle`, `Confusing Term`
- **Evidence Sources:** S03-S06 (KNOW-D3-004)

---

#### `VOC-CC26-D3-090` — **Directory Service vs. Identity Provider**
- **Thai Meaning (ความหมายภาษาไทย):** บริการไดเรกทอรี เทียบกับ ผู้ให้บริการอัตลักษณ์
- **Category:** `confusing_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **Acronym:** `Directory vs IdP` | **Full Form:** Directory Service versus Identity Provider
- **English Definition:** A directory service stores and queries structured user and object records; an Identity Provider (IdP) authenticates users and issues verifiable digital assertions to external applications.
- **Thai Explanation:** บริการไดเรกทอรี (Directory Service) ทำหน้าที่จัดเก็บและสืบค้นระเบียนข้อมูลที่มีโครงสร้างของผู้ใช้และวัตถุ ส่วนผู้ให้บริการอัตลักษณ์ (IdP) ทำหน้าที่ยืนยันตัวตนผู้ใช้และออกโทเค็นยืนยันตัวตนให้แก่แอปพลิเคชันภายนอก
- **Exam Relevance & Strategy:** Modern platforms may bundle both capabilities, but their responsibilities differ: LDAP is a directory; Okta/Entra ID functioning as SAML authorities are IdPs.
- **English Example:** *"Active Directory stores employee email and telephone attributes (Directory), while its federation server issues SAML assertions to cloud tools (IdP)."*
- **Thai Example:** *"Active Directory จัดเก็บคุณลักษณะอีเมลและเบอร์โทรพนักงาน (ไดเรกทอรี) ในขณะที่เซิร์ฟเวอร์ federation ออกข้อความยืนยัน SAML ให้แก่เครื่องมือคลาวด์ (IdP)"*
- **Confused With:** IAM Platform, Service Provider, Database
- **Keywords:** `Directory vs IdP`, `Data Store vs Authentication Authority`, `LDAP vs SAML`, `Confusing Term`
- **Evidence Sources:** S08 (KNOW-D3-011)

---

#### `VOC-CC26-D3-091` — **Access Review vs. Access Remediation**
- **Thai Meaning (ความหมายภาษาไทย):** การทบทวนสิทธิ์ เทียบกับ การแก้ไขปรับปรุงสิทธิ์
- **Category:** `confusing_term` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** An access review is the audit process of evaluating whether entitlements are still required; remediation is the technical action of executing the required removals or corrections.
- **Thai Explanation:** การทบทวนสิทธิ์ (Access Review) คือกระบวนการตรวจสอบและประเมินว่าสิทธิ์ยังจำเป็นอยู่หรือไม่ ส่วนการแก้ไขปรับปรุงสิทธิ์ (Remediation) คือการลงมือทางเทคนิคเพื่อถอนหรือแก้ไขสิทธิ์ตามผลการตัดสินใจ
- **Exam Relevance & Strategy:** Crucial scenario pattern: Marking a contractor for access removal on a review report does not secure the system until remediation actually revokes the technical rights.
- **English Example:** *"Signing the recertification spreadsheet was the review; removing the ex-contractor's database account was the remediation."*
- **Thai Example:** *"การลงนามในรายงานรับรองสิทธิ์คือการทบทวน ส่วนการลบบัญชีฐานข้อมูลของอดีตผู้รับเหมาคือการแก้ไขปรับปรุงสิทธิ์"*
- **Confused With:** Deprovisioning, Audit
- **Keywords:** `Access Review vs Remediation`, `Decision vs Enforcement`, `Confusing Term`
- **Evidence Sources:** S04 (KNOW-D3-006)

---

#### `VOC-CC26-D3-093` — **Break-Glass Account**
- **Thai Meaning (ความหมายภาษาไทย):** บัญชีฉุกเฉิน (Break-Glass Account)
- **Category:** `scenario_vocabulary` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A highly privileged emergency account kept in a protected, audited state to allow critical administrative intervention when primary identity services or single sign-on fail.
- **Thai Explanation:** บัญชีสิทธิ์สูงระดับฉุกเฉินที่ถูกเก็บรักษาไว้อย่างรัดกุมและมีการตรวจสอบเข้มงวด เพื่อให้ผู้ดูแลระบบสามารถเข้าแทรกแซงกรณีฉุกเฉินได้เมื่อระบบยืนยันตัวตนหลักหรือ SSO ล่ม
- **Exam Relevance & Strategy:** Break-glass accounts must have complex credentials stored in a physical or digital vault, generate immediate security alerts when used, and be audited continuously.
- **English Example:** *"When the cloud identity provider experienced an outage, the enterprise used a break-glass account to regain control of critical infrastructure."*
- **Thai Example:** *"เมื่อผู้ให้บริการอัตลักษณ์บนคลาวด์เกิดเหตุขัดข้อง องค์กรได้ใช้บัญชีฉุกเฉิน Break-Glass เพื่อกู้คืนการควบคุมโครงสร้างพื้นฐานที่สำคัญ"*
- **Confused With:** Service Account, Orphaned Account, Default Account
- **Keywords:** `Break-Glass`, `Emergency Access`, `Firecall Account`, `Outage Recovery`, `Privileged Account`
- **Evidence Sources:** S04 (KNOW-D3-007)

---

#### `VOC-CC26-D3-097` — **Federated Trust Relationship**
- **Thai Meaning (ความหมายภาษาไทย):** ความสัมพันธ์แบบไว้วางใจระหว่างระบบ (Trust Relationship)
- **Category:** `scenario_vocabulary` | **Objective:** `3.1` | **Status:** `source_supported`
- **English Definition:** A formal technical and legal configuration established between an Identity Provider and a Relying Party using public key cryptography to exchange verifiable authentication tokens.
- **Thai Explanation:** การกำหนดค่าทางเทคนิคและข้อตกลงอย่างเป็นทางการที่สร้างขึ้นระหว่างผู้ให้บริการอัตลักษณ์และผู้พึ่งพาข้อมูล โดยใช้การเข้ารหัสลับแบบกุญแจสาธารณะเพื่อแลกเปลี่ยนโทเค็นที่ตรวจสอบได้
- **Exam Relevance & Strategy:** Without establishing a trust relationship (exchanging signing certificates and metadata), single sign-on assertions cannot be validated or accepted.
- **English Example:** *"The systems team configured a federated trust relationship between the company's Azure AD and the cloud vendor's payroll platform."*
- **Thai Example:** *"ทีมระบบได้กำหนดค่าความสัมพันธ์แบบไว้วางใจระหว่าง Azure AD ของบริษัทและแพลตฟอร์มเงินเดือนบนคลาวด์ของผู้ให้บริการ"*
- **Confused With:** Network Peering, API Integration, Firewall Rule
- **Keywords:** `Trust Relationship`, `Federation`, `Public Key`, `Certificates`, `Metadata`, `SAML Trust`
- **Evidence Sources:** S08 (KNOW-D3-012)

---

### Objective 3.2: Logical Access Controls (Least Privilege, Need-to-Know, SoD, DAC, MAC, RBAC, ABAC, MFA, PAM) (49 entries)

#### `VOC-CC26-D3-035` — **Principle of Least Privilege**
- **Thai Meaning (ความหมายภาษาไทย):** หลักการให้สิทธิ์เท่าที่จำเป็น (Least Privilege)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `PoLP` | **Full Form:** Principle of Least Privilege
- **English Definition:** The foundational security practice of granting users, processes, and systems only the minimum access rights and permissions required to perform their authorized tasks.
- **Thai Explanation:** แนวปฏิบัติด้านความปลอดภัยพื้นฐานที่กำหนดให้ผู้ใช้ กระบวนการทำงาน และระบบ ได้รับสิทธิ์ในการเข้าถึงและกระทำการเพียงระดับต่ำสุดที่จำเป็นต่อการปฏิบัติงานที่ได้รับอนุญาตเท่านั้น
- **Exam Relevance & Strategy:** Heavily tested on the ISC2 CC exam. Least privilege minimizes the blast radius of compromises and insider mistakes, but it does NOT guarantee that harm is impossible.
- **English Example:** *"Applying least privilege, the help-desk technician was granted password-reset capability without database administration permissions."*
- **Thai Example:** *"เมื่อนำหลักการให้สิทธิ์เท่าที่จำเป็นมาใช้ เจ้าหน้าที่บริการไอทีจะได้รับเพียงสิทธิ์รีเซ็ตรหัสผ่าน โดยไม่มีสิทธิ์ดูแลระบบฐานข้อมูล"*
- **Confused With:** Need-to-Know, Separation of Duties, Discretionary Access Control
- **Keywords:** `PoLP`, `Least Privilege`, `Minimum Rights`, `Blast Radius`, `Access Limitation`
- **Evidence Sources:** S09 (KNOW-D3-016)

---

#### `VOC-CC26-D3-036` — **Need-to-Know**
- **Thai Meaning (ความหมายภาษาไทย):** หลักการความจำเป็นต้องรู้ (Need-to-Know)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** The requirement that access to specific data or documents is granted only to individuals who require that information to perform their legitimate job duties.
- **Thai Explanation:** ข้อกำหนดที่ว่าการให้สิทธิ์เข้าถึงข้อมูลหรือเอกสารเฉพาะเรื่อง จะมอบให้เฉพาะผู้ที่จำเป็นต้องใช้ข้อมูลนั้นในการปฏิบัติงานที่ชอบด้วยหน้าที่เท่านั้น
- **Exam Relevance & Strategy:** Distinguish from clearance: In MAC/government models, having a Top Secret clearance is NOT enough; you must also demonstrate a valid need-to-know for that specific project.
- **English Example:** *"Even though the researcher held a government security clearance, they were denied project files because they lacked a legitimate need-to-know."*
- **Thai Example:** *"แม้ว่านักวิจัยจะมีระดับความลับของรัฐบาล แต่ก็ถูกปฏิเสธไม่ให้เข้าถึงไฟล์โครงการเนื่องจากไม่มีความจำเป็นต้องรู้ในงานนั้น"*
- **Confused With:** Least Privilege, Security Clearance, Separation of Duties
- **Keywords:** `Need-to-Know`, `Data Access`, `Clearance`, `Confidentiality`, `Information Need`
- **Evidence Sources:** S16 (KNOW-D3-020)

---

#### `VOC-CC26-D3-037` — **Separation of Duties**
- **Thai Meaning (ความหมายภาษาไทย):** การแบ่งแยกหน้าที่ (Separation of Duties)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `SoD` | **Full Form:** Separation of Duties
- **English Definition:** The administrative and technical security control dividing critical, sensitive tasks among multiple people or systems so no single entity can execute the entire process alone.
- **Thai Explanation:** มาตรการความปลอดภัยเชิงบริหารและเชิงเทคนิคที่แบ่งแยกขั้นตอนการทำงานที่สำคัญและละเอียดอ่อนให้แก่บุคคลหรือระบบหลายฝ่าย เพื่อไม่ให้บุคคลใดบุคคลหนึ่งสามารถดำเนินการทั้งหมดได้โดยลำพัง
- **Exam Relevance & Strategy:** Primary defense against unilateral fraud and single-point errors. Exam questions stress that SoD reduces unilateral abuse, but collusion between parties can still cause harm.
- **English Example:** *"Separation of duties requires that the accountant entering invoice data cannot approve vendor disbursements."*
- **Thai Example:** *"การแบ่งแยกหน้าที่กำหนดให้นักบัญชีที่ลงข้อมูลใบแจ้งหนี้ไม่สามารถเป็นผู้อนุมัติการจ่ายเงินให้แก่ผู้ขายได้"*
- **Confused With:** Least Privilege, Dual Control, Job Rotation
- **Keywords:** `SoD`, `Separation of Duties`, `Segregation of Duties`, `Fraud Prevention`, `Unilateral Abuse`
- **Evidence Sources:** S11-S13 (KNOW-D3-017)

---

#### `VOC-CC26-D3-038` — **Dual Control**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมแบบสองฝ่าย (Two-Person Rule)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** A security mechanism requiring the simultaneous or sequential participation of two authorized individuals to authorize or complete a highly sensitive operation.
- **Thai Explanation:** กลไกความปลอดภัยที่กำหนดให้ต้องมีบุคคลที่ได้รับอนุญาต 2 คนเข้ามามีส่วนร่วมพร้อมกันหรือตามลำดับ จึงจะสามารถอนุมัติหรือทำรายการที่สำคัญยิ่งยวดได้สำเร็จ
- **Exam Relevance & Strategy:** Often used in cryptographic master key management or physical vault access. Similar to SoD, but typically requires both parties present at the same time for a single action.
- **English Example:** *"Opening the master cryptographic key safe requires dual control, with two officers entering separate physical keys simultaneously."*
- **Thai Example:** *"การเปิดตู้เซฟเก็บกุญแจเข้ารหัสหลักต้องใช้การควบคุมแบบสองฝ่าย โดยมีเจ้าหน้าที่ 2 คนนำกุญแจคนละดอกมาไขพร้อมกัน"*
- **Confused With:** Separation of Duties, Two-Factor Authentication, Peer Review
- **Keywords:** `Dual Control`, `Two-Person Rule`, `Simultaneous`, `Master Key`, `Four-Eyes Principle`
- **Evidence Sources:** S11 (KNOW-D3-017)

---

#### `VOC-CC26-D3-039` — **Collusion**
- **Thai Meaning (ความหมายภาษาไทย):** การสมรู้ร่วมคิด (เพื่อกระทำทุจริต)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** A covert cooperation or conspiracy between two or more individuals to circumvent security controls (such as Separation of Duties) to commit fraud or unauthorized acts.
- **Thai Explanation:** การร่วมมือหรือสมรู้ร่วมคิดอย่างลับๆ ระหว่างบุคคลตั้งแต่ 2 คนขึ้นไป เพื่อหลบเลี่ยงมาตรการความปลอดภัย (เช่น การแบ่งแยกหน้าที่) ในการกระทำทุจริตหรือการกระทำที่ไม่ได้รับอนุญาต
- **Exam Relevance & Strategy:** Exam takeaway: Separation of duties prevents unilateral (single-person) fraud, but CANNOT eliminate fraud if participants collude with each other.
- **English Example:** *"Mandatory job rotation and external financial audits are designed to detect collusion between procurement staff and invoice approvers."*
- **Thai Example:** *"การบังคับสับเปลี่ยนหน้าที่งานและการตรวจสอบทางการเงินภายนอกได้รับการออกแบบมาเพื่อตรวจจับการสมรู้ร่วมคิดระหว่างเจ้าหน้าที่จัดซื้อและผู้อนุมัติใบแจ้งหนี้"*
- **Confused With:** Unilateral Abuse, Insider Threat, Privilege Abuse
- **Keywords:** `Collusion`, `Conspiracy`, `SoD Bypass`, `Fraud`, `Residual Risk`
- **Evidence Sources:** S11 (KNOW-D3-017)

---

#### `VOC-CC26-D3-040` — **Discretionary Access Control**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงตามดุลยพินิจ (DAC)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `DAC` | **Full Form:** Discretionary Access Control
- **English Definition:** An access control model where the resource owner (or authorized creator) has full discretion to determine which users or groups can access their files and what permissions they hold.
- **Thai Explanation:** แบบจำลองควบคุมการเข้าถึงที่เจ้าของทรัพยากร (หรือผู้สร้าง) มีดุลยพินิจเต็มที่ในการตัดสินใจว่าผู้ใช้หรือกลุ่มใดสามารถเข้าถึงไฟล์ของตนได้และมีสิทธิ์ทำอะไรได้บ้าง
- **Exam Relevance & Strategy:** Core exam points: In DAC, the owner sets permissions, but the operating system still enforces them. DAC is flexible but susceptible to Trojan horses and inadvertent over-sharing.
- **English Example:** *"Standard file system permissions in Windows NTFS and Linux (chmod/chown) represent typical Discretionary Access Control implementations."*
- **Thai Example:** *"สิทธิ์ของระบบไฟล์มาตรฐานใน Windows NTFS และ Linux (chmod/chown) แสดงถึงการนำการควบคุมการเข้าถึงตามดุลยพินิจ (DAC) ไปใช้ทั่วไป"*
- **Confused With:** Mandatory Access Control, Role-Based Access Control, Attribute-Based Access Control
- **Keywords:** `DAC`, `Discretionary`, `Resource Owner`, `File Sharing`, `Permissions`, `NTFS`
- **Evidence Sources:** S15 (KNOW-D3-019)

---

#### `VOC-CC26-D3-041` — **Mandatory Access Control**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงแบบบังคับ (MAC)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `MAC` | **Full Form:** Mandatory Access Control
- **English Definition:** A centrally managed access control model where authorization is enforced by the operating system based on fixed security labels (classification) assigned to resources and clearances assigned to subjects.
- **Thai Explanation:** แบบจำลองควบคุมการเข้าถึงที่บริหารจัดการจากส่วนกลาง ซึ่งการอนุญาตสิทธิ์จะถูกบังคับใช้โดยระบบปฏิบัติการตามป้ายกำกับความปลอดภัย (ชั้นความลับ) ของทรัพยากรและระดับอนุญาต (Clearance) ของผู้เข้าถึง
- **Exam Relevance & Strategy:** In MAC, end users and data owners CANNOT override or modify access policies. Used in military, intelligence, and high-security environments. Clearance + Need-to-know are both required.
- **English Example:** *"Military systems utilize Mandatory Access Control to prevent Top Secret files from being downgraded or shared with unauthorized personnel."*
- **Thai Example:** *"ระบบของกองทัพใช้การควบคุมการเข้าถึงแบบบังคับ (MAC) เพื่อป้องกันไม่ให้ไฟล์ลับสุดยอดถูกลดชั้นความลับหรือนำไปแชร์ให้แก่ผู้ที่ไม่มีสิทธิ์"*
- **Confused With:** Discretionary Access Control, Role-Based Access Control, Media Access Control
- **Keywords:** `MAC`, `Mandatory`, `Security Labels`, `Clearance`, `Classification`, `Central Policy`
- **Evidence Sources:** S16 (KNOW-D3-020)

---

#### `VOC-CC26-D3-042` — **Role-Based Access Control**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงตามบทบาท (RBAC)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `RBAC` | **Full Form:** Role-Based Access Control
- **English Definition:** An access control model where access permissions are associated with specific business job roles rather than individual users, and users are assigned to roles matching their responsibilities.
- **Thai Explanation:** แบบจำลองควบคุมการเข้าถึงที่ผูกสิทธิ์เข้ากับบทบาทหน้าที่การทำงานทางธุรกิจ แทนที่จะผูกกับบุคคล และผู้ใช้จะได้รับการจัดให้อยู่ในบทบาทที่ตรงกับหน้าที่ของตน
- **Exam Relevance & Strategy:** The most popular enterprise access model. Simplifies administration and enforces consistency across large user populations. However, poorly designed roles can lead to role explosion or over-permissioning.
- **English Example:** *"In the hospital information system, anyone assigned the 'Nurse' role automatically receives read access to patient vital signs across their assigned ward."*
- **Thai Example:** *"ในระบบข้อมูลโรงพยาบาล ผู้ใดที่ได้รับการกำหนดบทบาท 'พยาบาล' จะได้รับสิทธิ์อ่านสัญญาณชีพของผู้ป่วยในหอผู้ป่วยที่ได้รับมอบหมายโดยอัตโนมัติ"*
- **Confused With:** Rule-Based Access Control, Discretionary Access Control, Attribute-Based Access Control
- **Keywords:** `RBAC`, `Role-Based`, `Job Function`, `Enterprise Roles`, `Scalability`, `Consistency`
- **Evidence Sources:** S17 (KNOW-D3-021)

---

#### `VOC-CC26-D3-043` — **Attribute-Based Access Control**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงตามคุณลักษณะ (ABAC)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `ABAC` | **Full Form:** Attribute-Based Access Control
- **English Definition:** An advanced, dynamic access control model that evaluates attributes of the subject, resource, requested action, and environmental context against logical security policies.
- **Thai Explanation:** แบบจำลองควบคุมการเข้าถึงขั้นสูงที่มีความยืดหยุ่น โดยประเมินคุณลักษณะของผู้เข้าถึง ทรัพยากร การกระทำที่ร้องขอ และสภาพแวดล้อมทางบริบทเทียบกับนโยบายความปลอดภัย
- **Exam Relevance & Strategy:** ABAC enables fine-grained, context-aware decisions (e.g. Allow doctor to view record IF time is during shift AND location is hospital AND device is managed). Highly tested on 2026 exam.
- **English Example:** *"Using ABAC, the cloud portal allows accountants to download financial ledgers only from company-managed laptops between 8:00 AM and 6:00 PM."*
- **Thai Example:** *"การใช้ ABAC ช่วยให้พอร์ทัลคลาวด์อนุญาตให้นักบัญชีดาวน์โหลดสมุดบัญชีการเงินได้เฉพาะจากแล็ปท็อปของบริษัทในช่วงเวลา 8:00 ถึง 18:00 น. เท่านั้น"*
- **Confused With:** Role-Based Access Control, Rule-Based Access Control, DAC
- **Keywords:** `ABAC`, `Attributes`, `Context-Aware`, `Dynamic Policy`, `Fine-Grained`, `Environment`
- **Evidence Sources:** S14 (KNOW-D3-022)

---

#### `VOC-CC26-D3-044` — **Subject**
- **Thai Meaning (ความหมายภาษาไทย):** ผู้เข้าถึง / ตัวกระทำ (Subject)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An active entity (such as a user, automated process, service, or program) that initiates an access request to manipulate or retrieve data from a passive resource.
- **Thai Explanation:** เอนทิตีที่ทำหน้าที่เชิงรุก (เช่น ผู้ใช้งาน กระบวนการทำงานอัตโนมัติ บริการ หรือโปรแกรม) ซึ่งเป็นผู้เริ่มต้นส่งคำขอเพื่อจัดการหรือเรียกดูข้อมูลจากทรัพยากร
- **Exam Relevance & Strategy:** In all access control models (DAC, MAC, RBAC, ABAC), a subject requests access to an object. Subjects can be human users or system software threads.
- **English Example:** *"In the security access model, the employee's browser session acts as the subject requesting to read data from the web server."*
- **Thai Example:** *"ในแบบจำลองการควบคุมความปลอดภัย เซสชันของเบราว์เซอร์พนักงานทำหน้าที่เป็นผู้เข้าถึง (Subject) ที่ร้องขออ่านข้อมูลจากเว็บเซิร์ฟเวอร์"*
- **Confused With:** Object, Resource, Claimant
- **Keywords:** `Subject`, `Active Entity`, `User`, `Process`, `Requester`, `Actor`
- **Evidence Sources:** S14-S17 (KNOW-D3-018)

---

#### `VOC-CC26-D3-045` — **Object**
- **Thai Meaning (ความหมายภาษาไทย):** ทรัพยากรเป้าหมาย / วัตถุ (Object)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** A passive entity or resource (such as a file, database record, server, directory, or printer) containing information or computing capabilities to which access is controlled.
- **Thai Explanation:** ทรัพยากรหรือเอนทิตีที่ทำหน้าที่เชิงรับ (เช่น ไฟล์ ระเบียนฐานข้อมูล เซิร์ฟเวอร์ ไดเรกทอรี หรือเครื่องพิมพ์) ซึ่งบรรจุข้อมูลหรือความสามารถในการประมวลผลที่ถูกควบคุมการเข้าถึง
- **Exam Relevance & Strategy:** Objects receive actions from subjects. Controls like ACLs or security labels are attached to objects to govern how subjects may manipulate them.
- **English Example:** *"The confidential customer spreadsheet is the object, and permissions dictate which subjects may view or modify it."*
- **Thai Example:** *"สเปรดชีตข้อมูลลูกค้าที่เป็นความลับถือเป็นวัตถุเป้าหมาย (Object) และสิทธิ์การเข้าถึงจะระบุว่าผู้เข้าถึงรายใดสามารถดูหรือแก้ไขได้"*
- **Confused With:** Subject, Entity, Attribute
- **Keywords:** `Object`, `Passive Entity`, `Resource`, `File`, `Database`, `Asset`
- **Evidence Sources:** S14-S17 (KNOW-D3-018)

---

#### `VOC-CC26-D3-046` — **Security Clearance**
- **Thai Meaning (ความหมายภาษาไทย):** ระดับการอนุญาตเข้าถึงข้อมูลลับ (Clearance)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An official administrative authorization granted to a person after formal vetting, indicating the maximum sensitivity level of classified information they are permitted to view.
- **Thai Explanation:** การอนุญาตอย่างเป็นทางการที่มอบให้แก่บุคคลหลังจากผ่านการตรวจสอบประวัติอย่างละเอียด ซึ่งแสดงถึงระดับชั้นความลับสูงสุดของข้อมูลที่บุคคลนั้นมีสิทธิ์เข้าถึงได้
- **Exam Relevance & Strategy:** Central to Mandatory Access Control (MAC). Remember: Clearance is assigned to SUBJECTS, whereas classification labels are assigned to OBJECTS. Both clearance and need-to-know are mandatory.
- **English Example:** *"The intelligence analyst obtained a Secret security clearance following a comprehensive federal background investigation."*
- **Thai Example:** *"นักวิเคราะห์ข่าวกรองได้รับระดับการอนุญาตชั้น Secret หลังจากการตรวจสอบประวัติภูมิหลังของรัฐบาลเสร็จสมบูรณ์"*
- **Confused With:** Classification Level, Security Label, Need-to-Know
- **Keywords:** `Security Clearance`, `Clearance`, `MAC`, `Vetting`, `Secret`, `Top Secret`, `Subject Attribute`
- **Evidence Sources:** S16 (KNOW-D3-020)

---

#### `VOC-CC26-D3-047` — **Security Label**
- **Thai Meaning (ความหมายภาษาไทย):** ป้ายกำกับความปลอดภัย / ชั้นความลับ (Classification Label)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** A mandatory metadata tag attached to an information object that specifies its sensitivity classification (e.g. Public, Confidential, Secret) and handling caveats.
- **Thai Explanation:** ป้ายข้อมูลกำกับ (Metadata) แบบบังคับที่ติดอยู่กับวัตถุข้อมูล ซึ่งระบุระดับชั้นความลับของข้อมูลนั้น (เช่น สาธารณะ ความลับ ลับสุดยอด) และข้อกำหนดในการจัดการ
- **Exam Relevance & Strategy:** In MAC systems, the operating system compares the subject's clearance against the object's security label to make automated, unbypassable access decisions.
- **English Example:** *"The military document system automatically applied a 'Top Secret' security label to any file saved in the mission folder."*
- **Thai Example:** *"ระบบเอกสารทางทหารติดป้ายกำกับความปลอดภัย 'Top Secret' ให้แก่ทุกไฟล์ที่บันทึกลงในโฟลเดอร์ภารกิจโดยอัตโนมัติ"*
- **Confused With:** Security Clearance, Sensitivity Classification, Tag
- **Keywords:** `Security Label`, `Classification`, `Sensitivity Label`, `Metadata`, `MAC`, `Object Attribute`
- **Evidence Sources:** S16 (KNOW-D3-020)

---

#### `VOC-CC26-D3-048` — **Access Control List**
- **Thai Meaning (ความหมายภาษาไทย):** รายการควบคุมการเข้าถึง (ACL)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `ACL` | **Full Form:** Access Control List
- **English Definition:** A table or list attached to a computer resource or network device that defines which subjects are granted or denied specific operations on that object.
- **Thai Explanation:** ตารางหรือรายการที่ผูกติดอยู่กับทรัพยากรคอมพิวเตอร์หรืออุปกรณ์เครือข่าย ซึ่งระบุชัดเจนว่าผู้ใช้หรือระบบใดได้รับอนุญาตหรือถูกปฏิเสธไม่ให้กระทำการใดต่อวัตถุนั้น
- **Exam Relevance & Strategy:** ACLs are common implementations of DAC on file systems (specifying Read/Write per user/group) and packet filtering on routers/firewalls.
- **English Example:** *"The administrator configured the folder's ACL to grant the marketing team read-only access while giving finance write access."*
- **Thai Example:** *"ผู้ดูแลระบบกำหนดค่า ACL ของโฟลเดอร์เพื่ออนุญาตให้ทีมการตลาดอ่านข้อมูลได้อย่างเดียว ในขณะที่ให้ทีมการเงินมีสิทธิ์แก้ไขได้"*
- **Confused With:** Capability Table, Access Control Matrix, Firewall Rule
- **Keywords:** `ACL`, `Access Control List`, `Permissions`, `File System`, `Router ACL`
- **Evidence Sources:** S14-S15 (KNOW-D3-018)

---

#### `VOC-CC26-D3-049` — **Access Control Matrix**
- **Thai Meaning (ความหมายภาษาไทย):** เมทริกซ์ควบคุมการเข้าถึง (Access Control Matrix)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** A conceptual two-dimensional table that details the precise rights and permissions that every subject possesses over every object across an information system.
- **Thai Explanation:** ตารางแนวคิดสองมิติที่แสดงรายละเอียดสิทธิ์ทั้งหมดที่ผู้เข้าถึง (Subject) แต่ละรายมีต่อทรัพยากร (Object) แต่ละชิ้นทั่วทั้งระบบสารสนเทศ
- **Exam Relevance & Strategy:** Foundational computer security concept. Looking down columns yields an Access Control List (ACL); looking across rows yields a Capability Ticket/Table.
- **English Example:** *"Security researchers use an access control matrix to model and verify that isolation rules between virtual machines cannot be breached."*
- **Thai Example:** *"นักวิจัยความปลอดภัยใช้เมทริกซ์ควบคุมการเข้าถึงเพื่อจำลองและตรวจสอบว่ากฎการแยกส่วนระหว่างเวอร์ชวลแมชชีนจะไม่ถูกละเมิด"*
- **Confused With:** Access Control List, Capability Table, Role Hierarchy
- **Keywords:** `Access Control Matrix`, `Matrix`, `Two-Dimensional Table`, `Subject`, `Object`, `Permissions`
- **Evidence Sources:** S14 (KNOW-D3-018)

---

#### `VOC-CC26-D3-050` — **Privileged Access Management**
- **Thai Meaning (ความหมายภาษาไทย):** การจัดการการเข้าถึงสิทธิ์ระดับสูง (PAM)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `PAM` | **Full Form:** Privileged Access Management
- **English Definition:** A cybersecurity strategy and set of technologies designed to secure, monitor, broker, and audit privileged administrative accounts and credentials across an enterprise.
- **Thai Explanation:** กลยุทธ์และชุดเทคโนโลยีความปลอดภัยที่ออกแบบมาเพื่อปกป้อง เฝ้าระวัง เป็นตัวกลาง และตรวจสอบการใช้งานบัญชีและสิ่งรับรองที่มีสิทธิ์ระดับผู้ดูแลระบบ
- **Exam Relevance & Strategy:** Administrative credentials represent the highest-risk targets. PAM vaults eliminate static administrator passwords, enforce session recording, and enable Just-in-Time access.
- **English Example:** *"The bank mandated that all cloud administrators access production servers exclusively through the enterprise PAM gateway."*
- **Thai Example:** *"ธนาคารกำหนดให้ผู้ดูแลระบบคลาวด์ทุกคนต้องเข้าถึงเซิร์ฟเวอร์โปรดักชันผ่านเกตเวย์ PAM ขององค์กรเท่านั้น"*
- **Confused With:** IAM, IGA, Single Sign-On
- **Keywords:** `PAM`, `Privileged Access`, `Admin Accounts`, `Credential Vault`, `Session Recording`, `Elevation`
- **Evidence Sources:** S09 (KNOW-D3-014)

---

#### `VOC-CC26-D3-051` — **Just-in-Time Access**
- **Thai Meaning (ความหมายภาษาไทย):** การให้สิทธิ์แบบทันเวลาพอดี (JIT Access)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `JIT` | **Full Form:** Just-in-Time Access
- **English Definition:** A security practice where administrative permissions are granted dynamically for a strictly limited duration to perform a specific authorized task, then automatically revoked.
- **Thai Explanation:** แนวปฏิบัติด้านความปลอดภัยที่ให้สิทธิ์ผู้ดูแลระบบแบบไดนามิกเฉพาะในช่วงเวลาที่จำกัดอย่างเข้มงวดเพื่อทำงานที่ได้รับอนุมัติ แล้วถอนสิทธิ์ออกโดยอัตโนมัติเมื่อหมดเวลา
- **Exam Relevance & Strategy:** Drastically limits standing privileges (eliminates 24/7 administrator rights). A key tenet of modern Zero Trust and Least Privilege architectures.
- **English Example:** *"Under the JIT access model, database engineers request 2-hour elevated access, which is automatically revoked once maintenance finishes."*
- **Thai Example:** *"ภายใต้แบบจำลอง JIT วิศวกรฐานข้อมูลจะขอสิทธิ์ระดับสูงชั่วคราวเป็นเวลา 2 ชั่วโมง ซึ่งสิทธิ์จะถูกเพิกถอนอัตโนมัติเมื่อทำงานบำรุงรักษาเสร็จสิ้น"*
- **Confused With:** Standing Privileges, Persistent Access, Privilege Escalation
- **Keywords:** `JIT`, `Just-in-Time`, `Zero Standing Privilege`, `Ephemeral Access`, `Least Privilege`
- **Evidence Sources:** S09 (KNOW-D3-016)

---

#### `VOC-CC26-D3-052` — **Context-Aware Access Control**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงตามบริบทแวดล้อม
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An access decision mechanism that evaluates real-time situational variables (such as user location, device health, network posture, and access time) alongside credentials before granting access.
- **Thai Explanation:** กลไกการตัดสินใจให้สิทธิ์ที่ประเมินตัวแปรตามสถานการณ์จริงแบบเรียลไทม์ (เช่น ตำแหน่งผู้ใช้ สุขภาพของอุปกรณ์ สถานะเครือข่าย และเวลาที่เข้าใช้) ควบคู่กับสิ่งรับรองก่อนอนุญาตให้เข้าถึง
- **Exam Relevance & Strategy:** Core foundation of Attribute-Based Access Control (ABAC) and Zero Trust architecture. Even with correct credentials, access is blocked if contextual factors fail policy checks.
- **English Example:** *"Context-aware access control blocked the engineer from viewing confidential blueprints because they connected from an unpatched personal laptop."*
- **Thai Example:** *"การควบคุมตามบริบทได้บล็อกไม่ให้วิศวกรเปิดดูพิมพ์เขียวที่เป็นความลับ เนื่องจากเชื่อมต่อเข้ามาจากแล็ปท็อปส่วนตัวที่ยังไม่ได้อัปเดตแพตช์"*
- **Confused With:** Role-Based Access Control, Static Access Control, Multifactor Authentication
- **Keywords:** `Context-Aware`, `Zero Trust`, `Environmental Attributes`, `Conditional Access`, `ABAC`
- **Evidence Sources:** S14 (KNOW-D3-022)

---

#### `VOC-CC26-D3-053` — **Multifactor Authentication**
- **Thai Meaning (ความหมายภาษาไทย):** การยืนยันตัวตนแบบหลายปัจจัย (MFA)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `MFA` | **Full Form:** Multifactor Authentication
- **English Definition:** An authentication process requiring a user to present two or more distinct types of authentication factors (knowledge, possession, and inherence) before access is granted.
- **Thai Explanation:** กระบวนการยืนยันตัวตนที่กำหนดให้ผู้ใช้ต้องแสดงปัจจัยการยืนยันตัวตนตั้งแต่ 2 ประเภทที่แตกต่างกันขึ้นไป (สิ่งที่รู้ สิ่งที่ครอบครอง และสิ่งที่เป็น) ก่อนที่จะได้รับอนุญาตให้เข้าถึง
- **Exam Relevance & Strategy:** Critical exam rule: MFA requires DIFFERENT FACTOR TYPES. A password and a PIN represent only ONE factor type (knowledge). A password plus a hardware key represents TWO factors.
- **English Example:** *"The enterprise enforced MFA across all remote access connections, requiring a password combined with a cryptographic hardware key."*
- **Thai Example:** *"องค์กรบังคับใช้ MFA สำหรับการเชื่อมต่อระยะไกลทั้งหมด โดยกำหนดให้ใช้รหัสผ่านร่วมกับกุญแจฮาร์ดแวร์เข้ารหัส"*
- **Confused With:** Two-Factor Authentication, Two-Step Verification, Password Protection
- **Keywords:** `MFA`, `Multifactor`, `Authentication Factors`, `Knowledge`, `Possession`, `Inherence`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-054` — **Authentication Factor**
- **Thai Meaning (ความหมายภาษาไทย):** ปัจจัยในการยืนยันตัวตน
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An independent category of credential evidence utilized to confirm an entity's claimed identity, classically divided into knowledge, possession, and inherence.
- **Thai Explanation:** หมวดหมู่อิสระของหลักฐานสิ่งรับรองที่ใช้เพื่อยืนยันตัวตนที่กล่าวอ้าง ซึ่งแบ่งออกเป็น 3 หมวดหมู่หลัก ได้แก่ สิ่งที่คุณรู้ สิ่งที่คุณครอบครอง และสิ่งที่คุณเป็น
- **Exam Relevance & Strategy:** Exam candidates must memorize the three canonical categories: Something you know (knowledge), Something you have (possession), Something you are (inherence).
- **English Example:** *"A fingerprint scan serves as an inherence authentication factor, whereas a physical USB token is a possession factor."*
- **Thai Example:** *"การสแกนลายนิ้วมือทำหน้าที่เป็นปัจจัยยืนยันตัวตนประเภทสิ่งที่เป็น (Inherence) ในขณะที่ยูเอสบีโทเค็นเป็นปัจจัยประเภทสิ่งที่ครอบครอง (Possession)"*
- **Confused With:** Credential, Authenticator, Attribute
- **Keywords:** `Authentication Factor`, `Knowledge`, `Possession`, `Inherence`, `Biometrics`, `Factors`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-055` — **Knowledge Factor**
- **Thai Meaning (ความหมายภาษาไทย):** ปัจจัยประเภทสิ่งที่รู้ (Something You Know)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An authentication factor category consisting of secret information that the user memorizes and provides during login, such as a password, passphrase, or PIN.
- **Thai Explanation:** หมวดหมู่ปัจจัยยืนยันตัวตนที่ประกอบด้วยข้อมูลลับที่ผู้ใช้จดจำไว้ในสมองและป้อนเข้าระบบขณะลงชื่อเข้าใช้ เช่น รหัสผ่าน พาสเฟรส หรือรหัส PIN
- **Exam Relevance & Strategy:** The most widely used but weakest authentication factor type due to phishing, brute-force, and credential-stuffing vulnerabilities. Entering two passwords is NOT multifactor.
- **English Example:** *"A complex passphrase is a knowledge factor that should never be written down or shared with colleagues."*
- **Thai Example:** *"พาสเฟรสที่ซับซ้อนถือเป็นปัจจัยประเภทสิ่งที่รู้ ซึ่งไม่ควรจดบันทึกไว้หรือแชร์ให้เพื่อนร่วมงานทราบ"*
- **Confused With:** Possession Factor, Inherence Factor, Identifier
- **Keywords:** `Knowledge Factor`, `Something You Know`, `Password`, `PIN`, `Passphrase`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-056` — **Possession Factor**
- **Thai Meaning (ความหมายภาษาไทย):** ปัจจัยประเภทสิ่งที่ครอบครอง (Something You Have)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An authentication factor category consisting of a physical object, cryptographic device, or software-bound secret that the user holds and controls.
- **Thai Explanation:** หมวดหมู่ปัจจัยยืนยันตัวตนที่ประกอบด้วยวัตถุทางกายภาพ อุปกรณ์เข้ารหัส หรือความลับที่ผูกกับซอฟต์แวร์ ซึ่งผู้ใช้เป็นผู้ถือครองและควบคุม
- **Exam Relevance & Strategy:** Examples: FIDO2 hardware keys, smart cards, OTP authenticator apps on a smartphone, and time-based hardware tokens.
- **English Example:** *"A smart card issued by the corporate security office serves as a possession factor for facility and computer authentication."*
- **Thai Example:** *"สมาร์ตการ์ดที่ออกโดยสำนักงานความปลอดภัยขององค์กรทำหน้าที่เป็นปัจจัยประเภทสิ่งที่ครอบครองสำหรับการเข้าอาคารและเข้าใช้คอมพิวเตอร์"*
- **Confused With:** Knowledge Factor, Inherence Factor, Authenticator
- **Keywords:** `Possession Factor`, `Something You Have`, `Smart Card`, `Hardware Token`, `FIDO2`, `OTP`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-057` — **Inherence Factor**
- **Thai Meaning (ความหมายภาษาไทย):** ปัจจัยประเภทสิ่งที่เป็น / อัตลักษณ์ทางชีวมิติ (Something You Are)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An authentication factor category based on unique biological, physiological, or behavioral human characteristics, such as fingerprints, facial geometry, or iris scans.
- **Thai Explanation:** หมวดหมู่ปัจจัยยืนยันตัวตนที่อิงจากลักษณะเฉพาะทางชีววิทยา สรีรวิทยา หรือพฤติกรรมของมนุษย์ เช่น ลายนิ้วมือ โครงสร้างใบหน้า หรือม่านตา
- **Exam Relevance & Strategy:** Cannot be lost or forgotten, but cannot be changed if compromised. Subject to False Acceptance Rates (FAR) and False Rejection Rates (FRR).
- **English Example:** *"The smartphone's fingerprint reader utilizes an inherence factor to unlock the operating system without typing a password."*
- **Thai Example:** *"ตัวอ่านลายนิ้วมือของสมาร์ตโฟนใช้ปัจจัยประเภทสิ่งที่เป็น (ชีวมิติ) เพื่อปลดล็อกระบบปฏิบัติการโดยไม่ต้องพิมพ์รหัสผ่าน"*
- **Confused With:** Knowledge Factor, Possession Factor, Biometrics
- **Keywords:** `Inherence Factor`, `Something You Are`, `Biometrics`, `Fingerprint`, `Facial Recognition`, `Iris Scan`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-058` — **Cryptographic Authenticator**
- **Thai Meaning (ความหมายภาษาไทย):** อุปกรณ์พิสูจน์ตัวตนแบบเข้ารหัสลับ
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An authenticator that demonstrates possession and control of a protected cryptographic private key via an interactive challenge-response protocol.
- **Thai Explanation:** อุปกรณ์หรือกลไกพิสูจน์ตัวตนที่แสดงการครอบครองและควบคุมกุญแจส่วนตัวที่ได้รับการปกป้อง ผ่านโพรโทคอลแบบถาม-ตอบ (Challenge-Response) ทางการเข้ารหัสลับ
- **Exam Relevance & Strategy:** A multi-factor cryptographic authenticator (like a FIDO security key activated by a PIN) satisfies MFA (possession + knowledge) within a single physical device.
- **English Example:** *"Hardware security keys act as cryptographic authenticators that are immune to credential phishing."*
- **Thai Example:** *"กุญแจความปลอดภัยแบบฮาร์ดแวร์ทำหน้าที่เป็นอุปกรณ์พิสูจน์ตัวตนแบบเข้ารหัสลับที่ทนทานต่อการโจมตีแบบฟิชชิ่ง"*
- **Confused With:** Password, Digital Certificate, OTP Generator
- **Keywords:** `Cryptographic Authenticator`, `Hardware Key`, `FIDO2`, `Challenge-Response`, `Phishing-Resistant`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-059` — **Risk-Based Authentication**
- **Thai Meaning (ความหมายภาษาไทย):** การยืนยันตัวตนตามระดับความเสี่ยง (Adaptive Authentication)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `RBA` | **Full Form:** Risk-Based Authentication
- **English Definition:** An adaptive authentication approach that evaluates contextual risk signals during sign-in to dynamically adjust the authentication requirements (e.g. stepping up to MFA).
- **Thai Explanation:** แนวทางการยืนยันตัวตนแบบปรับเปลี่ยนได้ ซึ่งประเมินสัญญาณความเสี่ยงตามบริบทขณะลงชื่อเข้าใช้ เพื่อปรับระดับความเข้มงวดในการยืนยันตัวตนแบบไดนามิก (เช่น เรียกขอ MFA เพิ่มเติม)
- **Exam Relevance & Strategy:** Also known as adaptive authentication. Exam questions test that an automated risk signal triggers further verification or investigation, but is NOT an MFA factor in itself.
- **English Example:** *"Risk-based authentication allows familiar office logins with simple credentials but challenges unusual connections with biometric MFA."*
- **Thai Example:** *"การยืนยันตัวตนตามระดับความเสี่ยงอนุญาตให้ลงชื่อเข้าใช้จากสำนักงานปกติด้วยสิ่งรับรองทั่วไปได้ แต่จะเรียกขอการสแกนชีวมิติเมื่อพบการเชื่อมต่อที่ผิดปกติ"*
- **Confused With:** Multifactor Authentication, Static Authentication, Context-Aware Access
- **Keywords:** `Risk-Based Authentication`, `Adaptive Authentication`, `Step-Up Authentication`, `Risk Signal`, `AI-Assisted`
- **Evidence Sources:** S08 (KNOW-D3-025)

---

#### `VOC-CC26-D3-060` — **Anomalous Sign-In Detection**
- **Thai Meaning (ความหมายภาษาไทย):** การตรวจจับการลงชื่อเข้าใช้ที่ผิดปกติ
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An automated analytics capability that monitors user login patterns, identifying baseline deviations such as unexpected hours, unfamiliar IP addresses, or impossible travel.
- **Thai Explanation:** ความสามารถในการวิเคราะห์อัตโนมัติที่เฝ้าระวังพฤติกรรมการลงชื่อเข้าใช้ของผู้ใช้ เพื่อระบุความเบี่ยงเบนจากพฤติกรรมปกติ เช่น เวลาที่ผิดปกติ ไอพีที่ไม่คุ้นเคย หรือการเดินทางที่เป็นไปไม่ได้
- **Exam Relevance & Strategy:** Included in the 2026 exam update. Behavioral signals must be reviewed in context under authorized incident response procedures, not treated as absolute proof of compromise.
- **English Example:** *"The security operations center received an alert from the anomalous sign-in detection engine when an executive logged in from two countries within twenty minutes."*
- **Thai Example:** *"ศูนย์ปฏิบัติการความปลอดภัยได้รับการแจ้งเตือนจากระบบตรวจจับการลงชื่อเข้าใช้ที่ผิดปกติ เมื่อผู้บริหารลงชื่อเข้าใช้จากสองประเทศภายในเวลายี่สิบนาที"*
- **Confused With:** Intrusion Detection System, Brute Force Attack, Risk-Based Authentication
- **Keywords:** `Anomalous Sign-In`, `Behavioral Analytics`, `AI Monitoring`, `Impossible Travel`, `Anomaly Detection`
- **Evidence Sources:** S08 (KNOW-D3-025)

---

#### `VOC-CC26-D3-061` — **Atypical Travel**
- **Thai Meaning (ความหมายภาษาไทย):** การเดินทางที่เป็นไปไม่ได้ในเวลาจริง (Impossible Travel)
- **Category:** `core_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** An anomaly detection signal triggered when consecutive sign-ins for the same account occur from geographically distant locations within a timeframe that is physically impossible to travel.
- **Thai Explanation:** สัญญาณตรวจจับสิ่งผิดปกติที่ถูกกระตุ้นเมื่อมีการลงชื่อเข้าใช้บัญชีเดียวกันติดต่อกันจากสองสถานที่ที่อยู่ห่างไกลกัน ในช่วงเวลาที่มนุษย์ไม่สามารถเดินทางไปถึงได้จริงในทางกายภาพ
- **Exam Relevance & Strategy:** Common exam indicator of credential theft or proxy/VPN usage. The security response must validate context (e.g. corporate VPN egress) before permanently deleting the account.
- **English Example:** *"Logging in from New York at 1:00 PM and from Tokyo at 1:15 PM triggers an atypical travel security alert."*
- **Thai Example:** *"การลงชื่อเข้าใช้จากนิวยอร์กเวลา 13:00 น. และจากโตเกียวเวลา 13:15 น. จะกระตุ้นการแจ้งเตือนความปลอดภัยว่าเป็นการเดินทางที่เป็นไปไม่ได้"*
- **Confused With:** Brute Force Detection, Session Hijacking, Geolocation Tagging
- **Keywords:** `Atypical Travel`, `Impossible Travel`, `Sign-in Risk`, `Geolocation`, `Behavioral Anomaly`
- **Evidence Sources:** S08 (KNOW-D3-025)

---

#### `VOC-CC26-D3-069` — **PoLP**
- **Thai Meaning (ความหมายภาษาไทย):** หลักการให้สิทธิ์เท่าที่จำเป็น (PoLP)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `PoLP` | **Full Form:** Principle of Least Privilege
- **English Definition:** The security rule stating that subjects must be provided only the minimum authorizations necessary to complete their assigned responsibilities.
- **Thai Explanation:** กฎความปลอดภัยที่ระบุว่าผู้เข้าถึงจะต้องได้รับเพียงสิทธิ์ขั้นต่ำสุดที่จำเป็นต่อการปฏิบัติหน้าที่ที่ได้รับมอบหมายเท่านั้น
- **Exam Relevance & Strategy:** A core principle tested repeatedly across multiple domains. Reduces the attack surface and damage potential of compromised credentials.
- **English Example:** *"Under PoLP, regular users operate without local administrator rights on corporate workstations."*
- **Thai Example:** *"ภายใต้หลักการ PoLP ผู้ใช้ทั่วไปจะทำงานโดยไม่มีสิทธิ์ผู้ดูแลระบบในเครื่องเวิร์กสเตชันขององค์กร"*
- **Confused With:** SoD, DAC, Least Access
- **Keywords:** `PoLP`, `Principle of Least Privilege`, `Acronym`
- **Evidence Sources:** S09 (KNOW-D3-016)

---

#### `VOC-CC26-D3-070` — **SoD**
- **Thai Meaning (ความหมายภาษาไทย):** การแบ่งแยกหน้าที่ (SoD)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `SoD` | **Full Form:** Separation of Duties
- **English Definition:** The internal control policy of dividing critical responsibilities across distinct roles so no individual possesses unilateral power to execute and conceal an entire transaction.
- **Thai Explanation:** นโยบายการควบคุมภายในที่แบ่งแยกความรับผิดชอบที่สำคัญให้แก่บทบาทที่แตกต่างกัน เพื่อไม่ให้บุคคลใดมีอำนาจแต่เพียงผู้เดียวในการทำรายการและปกปิดความผิด
- **Exam Relevance & Strategy:** Separation of duties protects against unilateral fraud and mistakes. Collusion remains an inherent limitation.
- **English Example:** *"Auditors flagged an SoD violation when they discovered that one technician could both deploy and approve code changes."*
- **Thai Example:** *"ผู้ตรวจสอบชี้ข้อบกพร่องเรื่อง SoD เมื่อพบว่าช่างเทคนิคคนเดียวสามารถทั้งติดตั้งและอนุมัติการแก้ไขโค้ดได้"*
- **Confused With:** PoLP, Dual Control, Job Rotation
- **Keywords:** `SoD`, `Separation of Duties`, `Segregation of Duties`, `Fraud Prevention`, `Acronym`
- **Evidence Sources:** S11 (KNOW-D3-017)

---

#### `VOC-CC26-D3-071` — **DAC**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงตามดุลยพินิจ (DAC)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `DAC` | **Full Form:** Discretionary Access Control
- **English Definition:** An access model where resource owners determine and configure who can access their data and what actions are allowed.
- **Thai Explanation:** แบบจำลองการเข้าถึงที่เจ้าของทรัพยากรเป็นผู้กำหนดและตั้งค่าว่าใครสามารถเข้าถึงข้อมูลของตนได้และทำอะไรได้บ้าง
- **Exam Relevance & Strategy:** Deciding authority: The resource OWNER. System software enforces the owner's choices. Common in end-user file sharing.
- **English Example:** *"In DAC environments, document authors directly edit file sharing lists to collaborate with specific team members."*
- **Thai Example:** *"ในสภาพแวดล้อมแบบ DAC ผู้เขียนเอกสารสามารถแก้ไขรายชื่อผู้แชร์ไฟล์ได้โดยตรงเพื่อทำงานร่วมกับสมาชิกทีมเฉพาะราย"*
- **Confused With:** MAC, RBAC, ABAC
- **Keywords:** `DAC`, `Discretionary Access Control`, `Owner-Directed`, `Acronym`
- **Evidence Sources:** S15 (KNOW-D3-019)

---

#### `VOC-CC26-D3-072` — **MAC**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงแบบบังคับ (MAC)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `MAC` | **Full Form:** Mandatory Access Control
- **English Definition:** A centrally administered access model where the operating system enforces access decisions by comparing fixed security labels on objects against security clearances of subjects.
- **Thai Explanation:** แบบจำลองการเข้าถึงที่บริหารจัดการจากส่วนกลาง ซึ่งระบบปฏิบัติการจะบังคับใช้การตัดสินใจโดยเทียบป้ายกำกับความปลอดภัยของวัตถุกับระดับอนุญาตของผู้เข้าถึง
- **Exam Relevance & Strategy:** Deciding authority: CENTRAL POLICY. Owners cannot share files at will. Mandatory policy requires both clearance and need-to-know.
- **English Example:** *"Government classified networks enforce MAC to guarantee that confidential files cannot be viewed without verified security clearance."*
- **Thai Example:** *"เครือข่ายข้อมูลลับของรัฐบาลบังคับใช้ MAC เพื่อรับประกันว่าไฟล์ลับจะไม่สามารถเปิดดูได้หากไม่มีระดับอนุญาตที่ผ่านการตรวจสอบ"*
- **Confused With:** DAC, RBAC, Media Access Control
- **Keywords:** `MAC`, `Mandatory Access Control`, `Clearance`, `Labels`, `Acronym`
- **Evidence Sources:** S16 (KNOW-D3-020)

---

#### `VOC-CC26-D3-073` — **RBAC**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงตามบทบาท (RBAC)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `RBAC` | **Full Form:** Role-Based Access Control
- **English Definition:** An access model associating permissions with predefined job roles and assigning users to those roles according to organizational functions.
- **Thai Explanation:** แบบจำลองการเข้าถึงที่ผูกสิทธิ์เข้ากับบทบาทงานที่กำหนดไว้ล่วงหน้า และมอบหมายบทบาทเหล่านั้นให้แก่ผู้ใช้ตามหน้าที่ในองค์กร
- **Exam Relevance & Strategy:** Deciding authority: ORGANIZATIONAL ROLES. Simplifies management at scale. Exam questions highlight that role assignment alone does not guarantee least privilege if roles are over-permissioned.
- **English Example:** *"Enterprise ERP systems rely on RBAC to assign accounting staff the appropriate ledger posting permissions."*
- **Thai Example:** *"ระบบ ERP ขององค์กรพึ่งพา RBAC ในการกำหนดสิทธิ์การลงบัญชีแยกประเภทที่เหมาะสมให้แก่เจ้าหน้าที่ฝ่ายบัญชี"*
- **Confused With:** ABAC, DAC, Rule-Based Access Control
- **Keywords:** `RBAC`, `Role-Based Access Control`, `Job Roles`, `Role Assignment`, `Acronym`
- **Evidence Sources:** S17 (KNOW-D3-021)

---

#### `VOC-CC26-D3-074` — **ABAC**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมการเข้าถึงตามคุณลักษณะ (ABAC)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `ABAC` | **Full Form:** Attribute-Based Access Control
- **English Definition:** A dynamic authorization model granting access by evaluating policies based on attributes of the subject, resource, action, and environment.
- **Thai Explanation:** แบบจำลองการอนุญาตสิทธิ์แบบไดนามิกที่ให้สิทธิ์โดยประเมินนโยบายจากคุณลักษณะของผู้เข้าถึง ทรัพยากร การกระทำ และสภาพแวดล้อม
- **Exam Relevance & Strategy:** Deciding authority: ATTRIBUTES AND POLICY RULES. Enables context-aware decisions (device health, time of day, geolocation).
- **English Example:** *"ABAC allows a remote worker to access confidential records only when connecting from an encrypted, compliant device during business hours."*
- **Thai Example:** *"ABAC อนุญาตให้พนักงานที่ทำงานระยะไกลเข้าถึงระเบียนข้อมูลลับได้เฉพาะเมื่อเชื่อมต่อจากอุปกรณ์ที่เข้ารหัสและเป็นไปตามข้อกำหนดในเวลาทำการเท่านั้น"*
- **Confused With:** RBAC, DAC, MAC
- **Keywords:** `ABAC`, `Attribute-Based Access Control`, `Dynamic`, `Contextual`, `Acronym`
- **Evidence Sources:** S14 (KNOW-D3-022)

---

#### `VOC-CC26-D3-075` — **PAM**
- **Thai Meaning (ความหมายภาษาไทย):** การจัดการการเข้าถึงสิทธิ์ระดับสูง (PAM)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `PAM` | **Full Form:** Privileged Access Management
- **English Definition:** A suite of security controls and tools that govern, monitor, vault, and audit high-privilege administrative accounts.
- **Thai Explanation:** ชุดมาตรการและเครื่องมือความปลอดภัยที่ใช้กำกับดูแล ตรวจสอบ จัดเก็บในตู้นิรภัย และบันทึกประวัติการใช้บัญชีสิทธิ์สูงระดับผู้ดูแลระบบ
- **Exam Relevance & Strategy:** PAM protects against credential theft, lateral movement, and privilege abuse by rotating administrative passwords and recording privileged sessions.
- **English Example:** *"Administrators must check out server passwords from the PAM vault for each maintenance session."*
- **Thai Example:** *"ผู้ดูแลระบบต้องเบิกใช้รหัสผ่านเซิร์ฟเวอร์จากตู้นิรภัย PAM สำหรับการเข้าบำรุงรักษาในแต่ละครั้ง"*
- **Confused With:** IAM, IGA, MFA
- **Keywords:** `PAM`, `Privileged Access Management`, `Admin Vault`, `Acronym`
- **Evidence Sources:** S09 (KNOW-D3-014)

---

#### `VOC-CC26-D3-076` — **JIT**
- **Thai Meaning (ความหมายภาษาไทย):** การให้สิทธิ์แบบทันเวลาพอดี (JIT)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `JIT` | **Full Form:** Just-in-Time Access
- **English Definition:** An access management practice granting elevated rights only when required for a specific task and automatically revoking them upon completion.
- **Thai Explanation:** แนวปฏิบัติการจัดการสิทธิ์ที่ให้สิทธิ์ระดับสูงเฉพาะเมื่อจำเป็นต้องใช้สำหรับงานหนึ่งๆ และถอนสิทธิ์ออกโดยอัตโนมัติเมื่อทำงานเสร็จสิ้น
- **Exam Relevance & Strategy:** Zero standing privilege practice. Reduces the attack window by ensuring accounts are not permanently privileged.
- **English Example:** *"Implementing JIT eliminated permanent administrative rights across the company's production database cluster."*
- **Thai Example:** *"การนำ JIT มาใช้ช่วยขจัดสิทธิ์ผู้ดูแลระบบแบบถาวรในคลัสเตอร์ฐานข้อมูลโปรดักชันของบริษัท"*
- **Confused With:** PAM, RBAC, PoLP
- **Keywords:** `JIT`, `Just-in-Time`, `Ephemeral`, `Zero Standing Privilege`, `Acronym`
- **Evidence Sources:** S09 (KNOW-D3-016)

---

#### `VOC-CC26-D3-077` — **MFA**
- **Thai Meaning (ความหมายภาษาไทย):** การยืนยันตัวตนแบบหลายปัจจัย (MFA)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `MFA` | **Full Form:** Multifactor Authentication
- **English Definition:** A security authentication mechanism requiring two or more independent credentials belonging to different factor categories to verify an identity.
- **Thai Explanation:** กลไกการยืนยันตัวตนความปลอดภัยที่กำหนดให้ต้องใช้สิ่งรับรองที่เป็นอิสระต่อกันตั้งแต่สองประเภทปัจจัยที่แตกต่างกันขึ้นไปเพื่อยืนยันตัวตน
- **Exam Relevance & Strategy:** Frequently tested acronym. Knowledge + Possession + Inherence = The 3 standard factor types.
- **English Example:** *"MFA drastically mitigates credential stuffing attacks by ensuring stolen passwords alone are insufficient to log in."*
- **Thai Example:** *"MFA ช่วยลดการโจมตีแบบ Credential Stuffing ได้อย่างมาก โดยทำให้มั่นใจว่ารหัสผ่านที่ถูกขโมยเพียงอย่างเดียวจะไม่สามารถใช้เข้าสู่ระบบได้"*
- **Confused With:** 2FA, SSO, AuthN
- **Keywords:** `MFA`, `Multifactor Authentication`, `Factors`, `Security`, `Acronym`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-078` — **FIDO**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรฐานการยืนยันตัวตนออนไลน์แบบรวดเร็ว (FIDO)
- **Category:** `acronym` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `FIDO` | **Full Form:** Fast Identity Online
- **English Definition:** An open industry consortium and standard establishing phishing-resistant, passwordless and multi-factor authentication protocols based on public-key cryptography.
- **Thai Explanation:** กลุ่มความร่วมมือและมาตรฐานอุตสาหกรรมแบบเปิดที่กำหนดโพรโทคอลการยืนยันตัวตนแบบไร้รหัสผ่านและทนทานต่อฟิชชิ่ง โดยใช้การเข้ารหัสลับแบบกุญแจสาธารณะ
- **Exam Relevance & Strategy:** FIDO2 / WebAuthn authenticators provide phishing-resistant MFA because private keys never leave the hardware device and authentication is cryptographically bound to the domain.
- **English Example:** *"The company replaced SMS one-time codes with FIDO2 security keys to protect against sophisticated adversary-in-the-middle phishing."*
- **Thai Example:** *"บริษัทเปลี่ยนจากการใช้รหัส SMS ครั้งเดียวมาเป็นกุญแจความปลอดภัย FIDO2 เพื่อป้องกันการฟิชชิ่งแบบดักกลางข้อมูลที่ซับซ้อน"*
- **Confused With:** OTP, SAML, PKI
- **Keywords:** `FIDO`, `FIDO2`, `WebAuthn`, `Passwordless`, `Phishing-Resistant`, `Acronym`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-079` — **Authentication vs. Authorization**
- **Thai Meaning (ความหมายภาษาไทย):** การยืนยันตัวตน เทียบกับ การอนุญาตสิทธิ์
- **Category:** `confusing_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `AuthN vs AuthZ` | **Full Form:** Authentication versus Authorization
- **English Definition:** Authentication verifies who an entity is (identity proof), whereas authorization determines what resources and actions that verified entity is permitted to access.
- **Thai Explanation:** การยืนยันตัวตน (Authentication) ตรวจสอบว่าบุคคลหรือระบบเป็นใคร (พิสูจน์ตัวตน) ส่วนการอนุญาตสิทธิ์ (Authorization) ตัดสินว่าบุคคลนั้นได้รับอนุญาตให้เข้าถึงทรัพยากรและกระทำการใดได้บ้าง
- **Exam Relevance & Strategy:** Number one most frequently tested distinction in IAM. Passing authentication never automatically grants authorization to all files.
- **English Example:** *"A contractor logs in successfully with their password (Authentication), but the system denies them access to payroll records (Authorization)."*
- **Thai Example:** *"ผู้รับเหมาลงชื่อเข้าใช้ด้วยรหัสผ่านได้สำเร็จ (การยืนยันตัวตน) แต่ระบบไม่อนุญาตให้เปิดดูระเบียนเงินเดือน (การอนุญาตสิทธิ์)"*
- **Confused With:** Identification vs Authentication, Accounting
- **Keywords:** `Authentication vs Authorization`, `AuthN vs AuthZ`, `Who You Are vs What You Can Do`, `IAM Basics`, `Confusing Term`
- **Evidence Sources:** S08 (KNOW-D3-023)

---

#### `VOC-CC26-D3-085` — **Least Privilege vs. Need-to-Know**
- **Thai Meaning (ความหมายภาษาไทย):** หลักการให้สิทธิ์เท่าที่จำเป็น เทียบกับ ความจำเป็นต้องรู้
- **Category:** `confusing_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `PoLP vs Need-to-Know` | **Full Form:** Principle of Least Privilege versus Need-to-Know
- **English Definition:** Least privilege limits the actions/operations a subject can execute (e.g. read-only, no admin); need-to-know restricts access to specific information based on legitimate job need.
- **Thai Explanation:** หลักให้สิทธิ์เท่าที่จำเป็น (Least Privilege) จำกัดขอบเขตการกระทำหรือสิทธิ์ที่ทำได้ (เช่น อ่านได้อย่างเดียว ห้ามเป็นแอดมิน) ส่วนความจำเป็นต้องรู้ (Need-to-Know) จำกัดการเข้าถึงเนื้อหาข้อมูลเฉพาะเรื่องตามหน้าที่
- **Exam Relevance & Strategy:** Least privilege applies broadly to privileges, system calls, and administrative rights; Need-to-know applies specifically to data confidentiality and classified materials.
- **English Example:** *"A technician has read-only rights (Least Privilege) but is granted access only to their assigned branch files (Need-to-Know)."*
- **Thai Example:** *"ช่างเทคนิคมีสิทธิ์อ่านอย่างเดียว (Least Privilege) แต่ได้รับอนุญาตให้เปิดดูเฉพาะไฟล์ของสาขาที่ตนรับผิดชอบ (Need-to-Know)"*
- **Confused With:** Separation of Duties, Clearance
- **Keywords:** `Least Privilege vs Need-to-Know`, `PoLP`, `Actions vs Data`, `Confidentiality`, `Confusing Term`
- **Evidence Sources:** S09 (KNOW-D3-016)

---

#### `VOC-CC26-D3-086` — **Discretionary (DAC) vs. Mandatory (MAC)**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมตามดุลยพินิจ (DAC) เทียบกับ การควบคุมแบบบังคับ (MAC)
- **Category:** `confusing_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `DAC vs MAC` | **Full Form:** Discretionary Access Control versus Mandatory Access Control
- **English Definition:** In DAC, the individual resource owner decides who can access their files; in MAC, central organizational policy decides access based on fixed classification labels and clearances.
- **Thai Explanation:** ใน DAC เจ้าของทรัพยากรแต่ละรายเป็นผู้ตัดสินใจว่าจะให้ใครเข้าถึงไฟล์ของตน แต่ใน MAC นโยบายส่วนกลางขององค์กรเป็นผู้กำหนดการเข้าถึงตามป้ายชั้นความลับและระดับอนุญาต
- **Exam Relevance & Strategy:** Exam rule: There is NO universal 'MAC is always better than DAC' ranking. Model choice depends on organizational policy and requirements. In DAC, software still enforces permissions.
- **English Example:** *"A marketing team sharing shared drive folders uses DAC; a national defense intelligence database enforces MAC."*
- **Thai Example:** *"ทีมการตลาดที่แชร์โฟลเดอร์ไดรฟ์ส่วนกลางใช้ DAC ส่วนฐานข้อมูลข่าวกรองด้านความมั่นคงแห่งชาติบังคับใช้ MAC"*
- **Confused With:** RBAC vs ABAC, Rule-Based Access Control
- **Keywords:** `DAC vs MAC`, `Owner Discretion vs Central Policy`, `Security Models`, `Confusing Term`
- **Evidence Sources:** S15-S16 (KNOW-D3-019)

---

#### `VOC-CC26-D3-087` — **Role-Based (RBAC) vs. Attribute-Based (ABAC)**
- **Thai Meaning (ความหมายภาษาไทย):** การควบคุมตามบทบาท (RBAC) เทียบกับ การควบคุมตามคุณลักษณะ (ABAC)
- **Category:** `confusing_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `RBAC vs ABAC` | **Full Form:** Role-Based Access Control versus Attribute-Based Access Control
- **English Definition:** RBAC grants permissions based on static job role assignments; ABAC grants access dynamically by evaluating multiple attributes of the subject, resource, action, and environment.
- **Thai Explanation:** RBAC ให้สิทธิ์ตามบทบาทหน้าที่งานที่กำหนดไว้คงที่ ส่วน ABAC ให้สิทธิ์แบบไดนามิกโดยประเมินคุณลักษณะหลายด้านของผู้เข้าถึง ทรัพยากร การกระทำ และสภาพแวดล้อม
- **Exam Relevance & Strategy:** RBAC is simple and scalable for standard jobs; ABAC is required when access depends on contextual variables like device health, location, or time of day.
- **English Example:** *"Allowing all 'Doctors' to view records is RBAC; allowing 'Doctors' to view records only from clinic tablets during their shift is ABAC."*
- **Thai Example:** *"การอนุญาตให้ 'แพทย์' ทุกคนดูเวชระเบียนได้คือ RBAC ส่วนการอนุญาตให้ 'แพทย์' ดูได้เฉพาะจากแท็บเล็ตของคลินิกในระหว่างเข้าเวรคือ ABAC"*
- **Confused With:** DAC vs MAC, Rule-Based Access Control
- **Keywords:** `RBAC vs ABAC`, `Static vs Dynamic`, `Job Role vs Contextual Attributes`, `Confusing Term`
- **Evidence Sources:** S14-S17 (KNOW-D3-021)

---

#### `VOC-CC26-D3-088` — **Security Clearance vs. Need-to-Know**
- **Thai Meaning (ความหมายภาษาไทย):** ระดับการอนุญาต (Clearance) เทียบกับ ความจำเป็นต้องรู้ (Need-to-Know)
- **Category:** `confusing_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** Clearance establishes the maximum classification level a vetted individual is authorized to access; need-to-know requires that they also possess a legitimate operational necessity for that specific document.
- **Thai Explanation:** ระดับการอนุญาต (Clearance) ระบุชั้นความลับสูงสุดที่บุคคลที่ผ่านการตรวจสอบมีสิทธิ์เข้าถึง ส่วนความจำเป็นต้องรู้ (Need-to-Know) กำหนดว่าบุคคลนั้นต้องมีความจำเป็นในหน้าที่การงานจริงต่อเอกสารชิ้นนั้นด้วย
- **Exam Relevance & Strategy:** High-probability exam question: An officer holding a Top Secret clearance CANNOT read a Top Secret project file unless they also have an assigned need-to-know on that specific project.
- **English Example:** *"The general had Top Secret clearance, but lacked the need-to-know for a compartmentalized submarine stealth project."*
- **Thai Example:** *"นายพลมีระดับความลับชั้นลับสุดยอด แต่ไม่มีความจำเป็นต้องรู้ในโครงการลับเฉพาะด้านเทคโนโลยีเรือดำน้ำล่องหน"*
- **Confused With:** Classification vs Clearance, Least Privilege
- **Keywords:** `Clearance vs Need-to-Know`, `MAC Requirements`, `Two Conditions`, `Confusing Term`
- **Evidence Sources:** S16 (KNOW-D3-020)

---

#### `VOC-CC26-D3-089` — **Separation of Duties vs. Least Privilege**
- **Thai Meaning (ความหมายภาษาไทย):** การแบ่งแยกหน้าที่ (SoD) เทียบกับ สิทธิ์เท่าที่จำเป็น (PoLP)
- **Category:** `confusing_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `SoD vs PoLP` | **Full Form:** Separation of Duties versus Principle of Least Privilege
- **English Definition:** Least privilege ensures an entity gets no more permissions than required for its job; separation of duties splits conflicting permissions across different entities to prevent unilateral abuse.
- **Thai Explanation:** สิทธิ์เท่าที่จำเป็น (PoLP) ทำให้มั่นใจว่าผู้เข้าถึงจะไม่ได้สิทธิ์เกินความจำเป็นสำหรับงานของตน ส่วนการแบ่งแยกหน้าที่ (SoD) จะกระจายสิทธิ์ที่ขัดกันให้แก่บุคคลต่างคนกันเพื่อป้องกันการใช้อำนาจมิชอบคนเดียว
- **Exam Relevance & Strategy:** Both can apply simultaneously. A billing clerk should have minimal billing permissions (PoLP) and cannot also approve payments (SoD).
- **English Example:** *"Giving an analyst read-only query rights is PoLP; ensuring the same analyst cannot deploy production code is SoD."*
- **Thai Example:** *"การให้สิทธิ์นักวิเคราะห์สืบค้นข้อมูลแบบอ่านอย่างเดียวคือ PoLP ส่วนการทำให้แน่ใจว่านักวิเคราะห์คนนั้นไม่สามารถนำโค้ดขึ้นระบบจริงได้คือ SoD"*
- **Confused With:** Dual Control, Need-to-Know
- **Keywords:** `SoD vs PoLP`, `Separation of Duties vs Least Privilege`, `Access Control Comparison`, `Confusing Term`
- **Evidence Sources:** S09-S11 (KNOW-D3-017)

---

#### `VOC-CC26-D3-092` — **Multi-Step vs. Multi-Factor Authentication**
- **Thai Meaning (ความหมายภาษาไทย):** การยืนยันหลายขั้นตอน เทียบกับ การยืนยันตัวตนแบบหลายปัจจัย
- **Category:** `confusing_term` | **Objective:** `3.2` | **Status:** `source_supported`
- **Acronym:** `Multi-Step vs MFA` | **Full Form:** Multi-Step Verification versus Multi-Factor Authentication
- **English Definition:** Multi-step verification requires multiple sequential inputs (which may all belong to the same factor, e.g. password + security question); MFA strictly requires two or more different factor types.
- **Thai Explanation:** การยืนยันหลายขั้นตอน (Multi-Step) กำหนดให้ป้อนข้อมูลตามลำดับหลายครั้ง (ซึ่งอาจเป็นปัจจัยประเภทเดียวกันทั้งหมด เช่น รหัสผ่าน + คำถามกันลืม) ส่วน MFA บังคับว่าต้องใช้ประเภทปัจจัยที่แตกต่างกัน
- **Exam Relevance & Strategy:** Exam trap: Two passwords or a password plus a PIN is multi-step, NOT multi-factor (both are knowledge factors). Password plus a smartphone push is MFA.
- **English Example:** *"Entering a password and answering 'What city were you born in?' is multi-step (knowledge + knowledge); entering a password and tapping a security key is MFA (knowledge + possession)."*
- **Thai Example:** *"การกรอกรหัสผ่านและตอบคำถามว่า 'คุณเกิดที่เมืองไหน' เป็นการยืนยันหลายขั้นตอน (รู้ + รู้) แต่การกรอกรหัสผ่านและแตะกุญแจความปลอดภัยคือ MFA (รู้ + ครอบครอง)"*
- **Confused With:** Two-Factor Authentication, MFA
- **Keywords:** `Multi-Step vs Multi-Factor`, `Factor Types`, `Password + PIN Trap`, `Confusing Term`
- **Evidence Sources:** S08 (KNOW-D3-024)

---

#### `VOC-CC26-D3-094` — **Standing Privileges**
- **Thai Meaning (ความหมายภาษาไทย):** สิทธิ์ระดับสูงที่คงค้างอยู่ตลอดเวลา (Standing Privileges)
- **Category:** `scenario_vocabulary` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** Administrative permissions permanently assigned to user accounts, remaining active 24/7 regardless of whether an active administrative task is being performed.
- **Thai Explanation:** สิทธิ์ระดับผู้ดูแลระบบที่มอบหมายให้กับบัญชีผู้ใช้อย่างถาวร โดยเปิดใช้งานอยู่ตลอด 24 ชั่วโมงไม่ว่าในขณะนั้นจะมีการทำงานดูแลระบบจริงหรือไม่
- **Exam Relevance & Strategy:** Modern access controls seek 'zero standing privileges' by replacing permanent administrative rights with Just-in-Time (JIT) elevation and temporary access brokers.
- **English Example:** *"Eliminating standing privileges protects cloud infrastructure by ensuring admin accounts cannot be abused when idle."*
- **Thai Example:** *"การขจัดสิทธิ์ระดับสูงที่คงค้างตลอดเวลาช่วยปกป้องโครงสร้างพื้นฐานคลาวด์ โดยทำให้มั่นใจว่าบัญชีแอดมินจะไม่ถูกนำไปใช้ในทางที่ผิดขณะว่าง"*
- **Confused With:** Just-in-Time Access, Least Privilege
- **Keywords:** `Standing Privileges`, `Permanent Access`, `Zero Standing Privilege`, `Risk Reduction`
- **Evidence Sources:** S09 (KNOW-D3-016)

---

#### `VOC-CC26-D3-095` — **Effective Permissions**
- **Thai Meaning (ความหมายภาษาไทย):** สิทธิ์การเข้าถึงที่มีผลบังคับใช้จริง (Effective Permissions)
- **Category:** `scenario_vocabulary` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** The net total of access permissions a subject actually holds over an object after calculating all individual, group, inherited, and role assignments and negative restrictions.
- **Thai Explanation:** ผลรวมสุทธิของสิทธิ์การเข้าถึงที่ผู้เข้าถึงมีต่อทรัพยากรจริง หลังจากการคำนวณสิทธิ์ส่วนบุคคล สิทธิ์ของกลุ่ม สิทธิ์ที่สืบทอดมา และสิทธิ์ที่ถูกปฏิเสธ
- **Exam Relevance & Strategy:** Critical in access audits: A user may belong to multiple roles that grant overlapping rights. Auditors must inspect effective permissions rather than assuming a single role defines total access.
- **English Example:** *"The administrator evaluated the effective permissions of the transferred employee to verify that write rights were successfully blocked."*
- **Thai Example:** *"ผู้ดูแลระบบประเมินสิทธิ์ที่มีผลจริงของพนักงานที่ย้ายแผนก เพื่อยืนยันว่าสิทธิ์การเขียนข้อมูลถูกบล็อกเรียบร้อยแล้วจริง"*
- **Confused With:** Role Permissions, Inherited Permissions, Explicit Permissions
- **Keywords:** `Effective Permissions`, `Net Access`, `Permission Calculation`, `Audit Check`
- **Evidence Sources:** S17 (KNOW-D3-021)

---

#### `VOC-CC26-D3-096` — **Blast Radius**
- **Thai Meaning (ความหมายภาษาไทย):** ขอบเขตความเสียหายที่อาจเกิดขึ้น (Blast Radius)
- **Category:** `scenario_vocabulary` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** The maximum potential scope of damage or compromise across systems, data, and business operations if a specific account, credential, or component is breached.
- **Thai Explanation:** ขอบเขตความเสียหายสูงสุดที่อาจเกิดขึ้นทั่วทั้งระบบ ข้อมูล และการดำเนินธุรกิจ หากบัญชี สิ่งรับรอง หรือองค์ประกอบความปลอดภัยนั้นถูกเจาะหรือถูกยึดครอง
- **Exam Relevance & Strategy:** Least privilege and segmentation are primarily designed to reduce the blast radius when an individual credential or host is compromised.
- **English Example:** *"Restricting developer accounts from production database write access significantly limited the blast radius of a phishing incident."*
- **Thai Example:** *"การจำกัดไม่ให้บัญชีของนักพัฒนาแก้ไขฐานข้อมูลโปรดักชันช่วยลดขอบเขตความเสียหายจากเหตุการณ์ฟิชชิ่งได้อย่างมีนัยสำคัญ"*
- **Confused With:** Attack Surface, Vulnerability Impact
- **Keywords:** `Blast Radius`, `Damage Scope`, `Least Privilege`, `Containment`, `Risk Impact`
- **Evidence Sources:** S09 (KNOW-D3-016)

---

#### `VOC-CC26-D3-101` — **Incompatible Duties**
- **Thai Meaning (ความหมายภาษาไทย):** หน้าที่ที่ขัดแย้งกันในตัวเอง
- **Category:** `exam_language` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** Two or more operational responsibilities that, if held by the same person or automated identity, create an unacceptable risk of undetected error, fraud, or abuse.
- **Thai Explanation:** ความรับผิดชอบในการปฏิบัติงานตั้งแต่สองหน้าที่ขึ้นไป ซึ่งหากอยู่ในมือของบุคคลหรือระบบอัตโนมัติเดียวกัน จะก่อให้เกิดความเสี่ยงต่อข้อผิดพลาด การทุจริต หรือการใช้อำนาจมิชอบที่ตรวจไม่พบ
- **Exam Relevance & Strategy:** Key trigger in Separation of Duties (SoD) questions (e.g. creating vendors and paying vendors, writing code and approving code, requesting and approving).
- **English Example:** *"Authorizing bank disbursements and reconciling monthly statements represent incompatible duties."*
- **Thai Example:** *"การอนุมัติการจ่ายเงินของธนาคารและการกระทบยอดบัญชีรายเดือนถือเป็นหน้าที่ที่ขัดแย้งกันในตัวเอง"*
- **Confused With:** Least Privilege, Role Division
- **Keywords:** `Incompatible Duties`, `SoD Conflict`, `Fraud Risk`, `Internal Control`
- **Evidence Sources:** S11 (KNOW-D3-017)

---

#### `VOC-CC26-D3-102` — **Delegated Authority**
- **Thai Meaning (ความหมายภาษาไทย):** อำนาจที่ได้รับการมอบหมาย (Delegated Authority)
- **Category:** `exam_language` | **Objective:** `3.2` | **Status:** `source_supported`
- **English Definition:** The legal or organizational empowerment granted to a specific resource owner, manager, or custodian to authorize or configure access to assets under their custody.
- **Thai Explanation:** การให้อำนาจตามกฎหมายหรือระเบียบองค์กรแก่เจ้าของทรัพยากร ผู้จัดการ หรือผู้ดูแล ในการอนุญาตหรือตั้งค่าการเข้าถึงทรัพย์สินที่อยู่ในการดูแลของตน
- **Exam Relevance & Strategy:** Foundational in Discretionary Access Control (DAC), where policy authority is delegated to the file owner, contrasting with central administrative authority in MAC.
- **English Example:** *"Under DAC, data creators exercise delegated authority to invite collaborators to review project drafts."*
- **Thai Example:** *"ภายใต้ DAC ผู้สร้างข้อมูลใช้อำนาจที่ได้รับมอบหมายเพื่อเชิญผู้ร่วมงานเข้ามาตรวจทานแบบร่างโครงการ"*
- **Confused With:** Central Authority, Mandatory Authority
- **Keywords:** `Delegated Authority`, `Discretionary`, `Owner Discretion`, `Empowerment`
- **Evidence Sources:** S15 (KNOW-D3-019)

---

### Exam Strategy & Decision Qualifiers (FIRST, BEST, MOST Directly) (3 entries)

#### `VOC-CC26-D3-098` — **FIRST (IAM Decision Sequence)**
- **Thai Meaning (ความหมายภาษาไทย):** การกระทำอันดับแรก (ลำดับการตัดสินใจเรื่องสิทธิ์)
- **Category:** `exam_language` | **Objective:** `exam_strategy` | **Status:** `source_supported`
- **English Definition:** An exam stem operator requiring the candidate to identify the immediate prerequisite or procedural first step before executing subsequent technical actions.
- **Thai Explanation:** คำระบุในโจทย์ข้อสอบที่กำหนดให้ผู้สอบระบุเงื่อนไขก่อนหน้า (Prerequisite) หรือขั้นตอนแรกตามกระบวนการ ก่อนที่จะลงมือทำขั้นตอนทางเทคนิคถัดไป
- **Exam Relevance & Strategy:** Exam rule: In access request scenarios, obtaining proper owner approval is always required FIRST before administrators provision access. In departure scenarios, immediate access revocation comes FIRST.
- **English Example:** *"When an urgent account request arrives without manager approval, obtaining approval must occur FIRST."*
- **Thai Example:** *"เมื่อมีคำขอสร้างบัญชีแบบเร่งด่วนโดยไม่มีการอนุมัติของผู้จัดการ การขออนุมัติจะต้องทำเป็นอันดับแรก"*
- **Confused With:** BEST, MOST, FINAL
- **Keywords:** `FIRST`, `Prerequisite`, `Procedural Order`, `Exam Qualifier`, `Sequence`
- **Evidence Sources:** Outline (KNOW-D3-003)

---

#### `VOC-CC26-D3-099` — **BEST (Access Governance Fit)**
- **Thai Meaning (ความหมายภาษาไทย):** ทางเลือกที่เหมาะสมที่สุด (ความเหมาะสมในการกำกับดูแล)
- **Category:** `exam_language` | **Objective:** `exam_strategy` | **Status:** `source_supported`
- **English Definition:** An exam stem qualifier instructing the test-taker to choose the response providing the most academically sound, policy-grounded, and sustainable governance outcome.
- **Thai Explanation:** คำระบุในโจทย์ข้อสอบที่ให้ผู้สอบเลือกคำตอบที่ถูกต้องตามหลักวิชาการ มีนโยบายรองรับ และให้ผลลัพธ์การกำกับดูแลที่ยั่งยืนที่สุดในบรรดาตัวเลือก
- **Exam Relevance & Strategy:** Look for answers that enforce least privilege, verify removals, maintain accountability, and respect documented policy, rather than convenient administrative shortcuts.
- **English Example:** *"The BEST response to privilege accumulation is revoking obsolete entitlements while preserving approved new access."*
- **Thai Example:** *"การตอบสนองที่เหมาะสมที่สุด (BEST) ต่อการสะสมสิทธิ์เกินจำเป็นคือการเพิกถอนสิทธิ์เดิมที่หมดความจำเป็น ควบคู่กับการคงสิทธิ์ใหม่ที่ได้รับอนุมัติ"*
- **Confused With:** FIRST, MOST, LEAST
- **Keywords:** `BEST`, `Governance Fit`, `Policy-Grounded`, `Exam Qualifier`
- **Evidence Sources:** Outline (KNOW-D3-005)

---

#### `VOC-CC26-D3-100` — **MOST Directly (Technical Enforcement)**
- **Thai Meaning (ความหมายภาษาไทย):** ตรงกับวัตถุประสงค์ที่สุด (การบังคับใช้ทางเทคนิค)
- **Category:** `exam_language` | **Objective:** `exam_strategy` | **Status:** `source_supported`
- **English Definition:** An exam qualifier directing the candidate to pick the specific control or operational action that immediately and tangibly enforces the stated security requirement.
- **Thai Explanation:** คำระบุในโจทย์ที่ให้ผู้สอบเลือกมาตรการหรือการกระทำที่มีผลบังคับใช้ตามข้อกำหนดความปลอดภัยที่ระบุได้อย่างตรงจุดและจับต้องได้มากที่สุด
- **Exam Relevance & Strategy:** Technical permissions enforce access restrictions. Signing a policy form or sending an email acknowledgment does NOT directly enforce read-only restrictions.
- **English Example:** *"Changing effective permissions on the server MOST directly enforces a read-only policy."*
- **Thai Example:** *"การแก้ไขสิทธิ์ที่มีผลจริงบนเซิร์ฟเวอร์ตอบสนองการบังคับใช้นโยบายอ่านอย่างเดียวได้ตรงจุดที่สุด (MOST directly)"*
- **Confused With:** Indirect Control, Policy Statement
- **Keywords:** `MOST Directly`, `Direct Enforcement`, `Technical Control`, `Exam Qualifier`
- **Evidence Sources:** Outline (KNOW-D3-018)

---

## 3. High-Stakes Terminology Distinctions (Confusing Concept Pairs)

The following 14 pairs/trios represent high-frequency stumbling blocks on the ISC2 CC examination. In Domain 3, precise semantic boundaries are essential:

### Authentication vs. Authorization
- **ID:** `VOC-CC26-D3-079` | **Objective:** `3.2`
- **Core Distinction:** Authentication verifies who an entity is (identity proof), whereas authorization determines what resources and actions that verified entity is permitted to access.
- **Thai Guidance:** การยืนยันตัวตน (Authentication) ตรวจสอบว่าบุคคลหรือระบบเป็นใคร (พิสูจน์ตัวตน) ส่วนการอนุญาตสิทธิ์ (Authorization) ตัดสินว่าบุคคลนั้นได้รับอนุญาตให้เข้าถึงทรัพยากรและกระทำการใดได้บ้าง
- **Exam Takeaway:** Number one most frequently tested distinction in IAM. Passing authentication never automatically grants authorization to all files.

### Identification vs. Identity Proofing
- **ID:** `VOC-CC26-D3-080` | **Objective:** `3.1`
- **Core Distinction:** Identification is simply claiming an identity (e.g. typing a username), whereas identity proofing is the rigorous vetting process that verifies an applicant is indeed the real-world person they claim to be.
- **Thai Guidance:** การระบุตัวตน (Identification) เป็นเพียงการแจ้งตัวตนที่กล่าวอ้าง (เช่น พิมพ์ชื่อผู้ใช้) ส่วนการพิสูจน์อัตลักษณ์ (Identity Proofing) คือการตรวจสอบหลักฐานอย่างเข้มงวดเพื่อยืนยันว่าผู้สมัครเป็นบุคคลจริงคนนั้นจริง
- **Exam Takeaway:** Identity proofing happens during onboarding before account creation. Identification happens each time a user enters an identifier to log in.

### Digital Identity vs. Account vs. Identifier
- **ID:** `VOC-CC26-D3-081` | **Objective:** `3.1`
- **Core Distinction:** An identity represents the entity across context; an account is the managed system record holding entitlements; an identifier is the specific label naming that account.
- **Thai Guidance:** อัตลักษณ์ (Identity) คือตัวแทนดิจิทัลของบุคคล บัญชี (Account) คือระเบียนในระบบที่ใช้จัดการสิทธิ์ และตัวระบุ (Identifier) คือชื่อหรือรหัสที่ใช้เรียกบัญชีนั้น
- **Exam Takeaway:** One human identity can be linked to multiple accounts (e.g., standard account and admin account) with distinct identifiers.

### Credential vs. Authenticator
- **ID:** `VOC-CC26-D3-082` | **Objective:** `3.1`
- **Core Distinction:** An authenticator is the physical device or secret controlled by the claimant (e.g. smart card, password), whereas a credential binds that authenticator to a verified identity.
- **Thai Guidance:** สิ่งที่ใช้พิสูจน์ตัวตน (Authenticator) คืออุปกรณ์หรือความลับที่ผู้ใช้ครอบครอง (เช่น สมาร์ตการ์ด รหัสผ่าน) ส่วนสิ่งรับรอง (Credential) คือสิ่งที่ผูกวัตถุพิสูจน์ตัวตนนั้นเข้ากับอัตลักษณ์ที่ตรวจสอบแล้ว
- **Exam Takeaway:** Per NIST terminology, a credential is the authoritative binding issued to a subscriber, while the authenticator is the mechanism used during the authentication transaction.

### Inactive Account vs. Orphaned Account
- **ID:** `VOC-CC26-D3-083` | **Objective:** `3.1`
- **Core Distinction:** An inactive account has no recent login activity but retains a documented owner; an orphaned account lacks an accountable owner regardless of whether it is actively running tasks.
- **Thai Guidance:** บัญชีไม่เคลื่อนไหว (Inactive) คือไม่มีการเข้าใช้เมื่อเร็วๆ นี้แต่ยังมีเจ้าของที่ระบุได้ ส่วนบัญชีขาดผู้รับผิดชอบ (Orphaned) คือไม่มีเจ้าของรับผิดชอบ แม้ว่าบัญชีนั้นอาจยังถูกรันงานอยู่ทุกวันก็ตาม
- **Exam Takeaway:** Academic QA correction: Inactivity and orphaning are independent dimensions. Do not assume active use proves good governance, or that inactive accounts must be deleted immediately.

### Provisioning vs. Deprovisioning
- **ID:** `VOC-CC26-D3-084` | **Objective:** `3.1`
- **Core Distinction:** Provisioning is the authorized granting and creation of accounts and entitlements; deprovisioning is the timely revocation of access and disabling of accounts upon transfer or exit.
- **Thai Guidance:** การจัดเตรียมสิทธิ์ (Provisioning) คือการสร้างบัญชีและให้สิทธิ์ที่ได้รับอนุมัติ ส่วนการถอนสิทธิ์ (Deprovisioning) คือการเพิกถอนสิทธิ์และระงับบัญชีอย่างทันท่วงทีเมื่อย้ายงานหรือออกจากองค์กร
- **Exam Takeaway:** Exam questions test the timing and prerequisites: Provisioning requires prior owner approval; Deprovisioning requires revoking downstream sessions and preserving audit logs.

### Least Privilege vs. Need-to-Know
- **ID:** `VOC-CC26-D3-085` | **Objective:** `3.2`
- **Core Distinction:** Least privilege limits the actions/operations a subject can execute (e.g. read-only, no admin); need-to-know restricts access to specific information based on legitimate job need.
- **Thai Guidance:** หลักให้สิทธิ์เท่าที่จำเป็น (Least Privilege) จำกัดขอบเขตการกระทำหรือสิทธิ์ที่ทำได้ (เช่น อ่านได้อย่างเดียว ห้ามเป็นแอดมิน) ส่วนความจำเป็นต้องรู้ (Need-to-Know) จำกัดการเข้าถึงเนื้อหาข้อมูลเฉพาะเรื่องตามหน้าที่
- **Exam Takeaway:** Least privilege applies broadly to privileges, system calls, and administrative rights; Need-to-know applies specifically to data confidentiality and classified materials.

### Discretionary (DAC) vs. Mandatory (MAC)
- **ID:** `VOC-CC26-D3-086` | **Objective:** `3.2`
- **Core Distinction:** In DAC, the individual resource owner decides who can access their files; in MAC, central organizational policy decides access based on fixed classification labels and clearances.
- **Thai Guidance:** ใน DAC เจ้าของทรัพยากรแต่ละรายเป็นผู้ตัดสินใจว่าจะให้ใครเข้าถึงไฟล์ของตน แต่ใน MAC นโยบายส่วนกลางขององค์กรเป็นผู้กำหนดการเข้าถึงตามป้ายชั้นความลับและระดับอนุญาต
- **Exam Takeaway:** Exam rule: There is NO universal 'MAC is always better than DAC' ranking. Model choice depends on organizational policy and requirements. In DAC, software still enforces permissions.

### Role-Based (RBAC) vs. Attribute-Based (ABAC)
- **ID:** `VOC-CC26-D3-087` | **Objective:** `3.2`
- **Core Distinction:** RBAC grants permissions based on static job role assignments; ABAC grants access dynamically by evaluating multiple attributes of the subject, resource, action, and environment.
- **Thai Guidance:** RBAC ให้สิทธิ์ตามบทบาทหน้าที่งานที่กำหนดไว้คงที่ ส่วน ABAC ให้สิทธิ์แบบไดนามิกโดยประเมินคุณลักษณะหลายด้านของผู้เข้าถึง ทรัพยากร การกระทำ และสภาพแวดล้อม
- **Exam Takeaway:** RBAC is simple and scalable for standard jobs; ABAC is required when access depends on contextual variables like device health, location, or time of day.

### Security Clearance vs. Need-to-Know
- **ID:** `VOC-CC26-D3-088` | **Objective:** `3.2`
- **Core Distinction:** Clearance establishes the maximum classification level a vetted individual is authorized to access; need-to-know requires that they also possess a legitimate operational necessity for that specific document.
- **Thai Guidance:** ระดับการอนุญาต (Clearance) ระบุชั้นความลับสูงสุดที่บุคคลที่ผ่านการตรวจสอบมีสิทธิ์เข้าถึง ส่วนความจำเป็นต้องรู้ (Need-to-Know) กำหนดว่าบุคคลนั้นต้องมีความจำเป็นในหน้าที่การงานจริงต่อเอกสารชิ้นนั้นด้วย
- **Exam Takeaway:** High-probability exam question: An officer holding a Top Secret clearance CANNOT read a Top Secret project file unless they also have an assigned need-to-know on that specific project.

### Separation of Duties vs. Least Privilege
- **ID:** `VOC-CC26-D3-089` | **Objective:** `3.2`
- **Core Distinction:** Least privilege ensures an entity gets no more permissions than required for its job; separation of duties splits conflicting permissions across different entities to prevent unilateral abuse.
- **Thai Guidance:** สิทธิ์เท่าที่จำเป็น (PoLP) ทำให้มั่นใจว่าผู้เข้าถึงจะไม่ได้สิทธิ์เกินความจำเป็นสำหรับงานของตน ส่วนการแบ่งแยกหน้าที่ (SoD) จะกระจายสิทธิ์ที่ขัดกันให้แก่บุคคลต่างคนกันเพื่อป้องกันการใช้อำนาจมิชอบคนเดียว
- **Exam Takeaway:** Both can apply simultaneously. A billing clerk should have minimal billing permissions (PoLP) and cannot also approve payments (SoD).

### Directory Service vs. Identity Provider
- **ID:** `VOC-CC26-D3-090` | **Objective:** `3.1`
- **Core Distinction:** A directory service stores and queries structured user and object records; an Identity Provider (IdP) authenticates users and issues verifiable digital assertions to external applications.
- **Thai Guidance:** บริการไดเรกทอรี (Directory Service) ทำหน้าที่จัดเก็บและสืบค้นระเบียนข้อมูลที่มีโครงสร้างของผู้ใช้และวัตถุ ส่วนผู้ให้บริการอัตลักษณ์ (IdP) ทำหน้าที่ยืนยันตัวตนผู้ใช้และออกโทเค็นยืนยันตัวตนให้แก่แอปพลิเคชันภายนอก
- **Exam Takeaway:** Modern platforms may bundle both capabilities, but their responsibilities differ: LDAP is a directory; Okta/Entra ID functioning as SAML authorities are IdPs.

### Access Review vs. Access Remediation
- **ID:** `VOC-CC26-D3-091` | **Objective:** `3.1`
- **Core Distinction:** An access review is the audit process of evaluating whether entitlements are still required; remediation is the technical action of executing the required removals or corrections.
- **Thai Guidance:** การทบทวนสิทธิ์ (Access Review) คือกระบวนการตรวจสอบและประเมินว่าสิทธิ์ยังจำเป็นอยู่หรือไม่ ส่วนการแก้ไขปรับปรุงสิทธิ์ (Remediation) คือการลงมือทางเทคนิคเพื่อถอนหรือแก้ไขสิทธิ์ตามผลการตัดสินใจ
- **Exam Takeaway:** Crucial scenario pattern: Marking a contractor for access removal on a review report does not secure the system until remediation actually revokes the technical rights.

### Multi-Step vs. Multi-Factor Authentication
- **ID:** `VOC-CC26-D3-092` | **Objective:** `3.2`
- **Core Distinction:** Multi-step verification requires multiple sequential inputs (which may all belong to the same factor, e.g. password + security question); MFA strictly requires two or more different factor types.
- **Thai Guidance:** การยืนยันหลายขั้นตอน (Multi-Step) กำหนดให้ป้อนข้อมูลตามลำดับหลายครั้ง (ซึ่งอาจเป็นปัจจัยประเภทเดียวกันทั้งหมด เช่น รหัสผ่าน + คำถามกันลืม) ส่วน MFA บังคับว่าต้องใช้ประเภทปัจจัยที่แตกต่างกัน
- **Exam Takeaway:** Exam trap: Two passwords or a password plus a PIN is multi-step, NOT multi-factor (both are knowledge factors). Password plus a smartphone push is MFA.

---

## 4. Academic Quality Assurance & Corrections Applied

1. **Quarantined Diagram Exclusions:** Sourced concepts strictly respect corrections from Phase 3.5. Slide C07 bank customer diagram is recognized as non-universal and excluded from general IAM lifecycle rules.
2. **No Arbitrary MAC vs. DAC Security Ranking:** Access control models are defined by their authorization mechanisms and governance structure, not by absolute claims that MAC is universally superior to DAC.
3. **Separation of Duties (SoD) Bounds:** SoD is accurately defined as preventing unilateral fraud; definitions explicitly note that SoD does not eliminate collusion.
4. **Inactivity vs. Orphaning Independence:** Inactive accounts (time elapsed since login) and orphaned accounts (missing accountable owner) are strictly treated as independent dimensions.
5. **Clearance vs. Need-to-Know:** Clearances establish the ceiling of trust; a valid need-to-know is mandatory for access to any specific compartment or asset.
6. **Workload & AI Identities:** Non-human identities (containers, microservices, AI agents) are explicitly integrated into IAM lifecycle concepts without invalid assumptions about interactive human MFA.
7. **MFA Mathematical Correctness:** FIDO2 cryptographic tokens with local PIN verification are correctly modeled as two distinct factors (possession of private key + knowledge of PIN) within a single physical form factor.

---

## 5. Duplicate and Cross-Domain Overlap Analysis

- **Internal Duplicates in Domain 3:** 0 duplicates across 102 terms.
- **Overlap with Domain 2:** 0 duplicates.
- **Overlap with Domain 1:** 3 justified overlapping foundational terms (`Credential`, `Authentication`, `Authorization`).
  - *Rationale:* In Domain 1, these appear as introductory high-level principles (Objective 1.1). In Domain 3, they are redefined through specific IAM lifecycle and subject-object logical access control frameworks (NIST SP 800-63 binding, authenticators vs credentials, claimant verification, permission enforcement). Their presence in Domain 3 flashcards is essential for comprehensive learner study.

