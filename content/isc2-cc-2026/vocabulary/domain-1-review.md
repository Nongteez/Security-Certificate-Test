# ISC2 CC 2026 Domain 1 — Exam Vocabulary Academic Review

> **Domain:** Domain 1 — Security Principles (24% Exam Weight)  
> **Total Extracted & Curated Entries:** 110 entries  
> **Source Corpus:** Official ISC2 CC 2026 Outline, Domain 1 Lecture Slides (S01–S60), Transcripts, Canonical Knowledge Map  
> **Prepared For:** Academic Reviewers, Bilingual Curriculum Developers, and Exam Candidates  
> **Date:** 2026-10-19  

---

## 1. Executive Summary & Category Breakdown

This document provides a comprehensive academic review of all **110 accepted vocabulary entries** for Domain 1 (Security Principles) of the ISC2 Certified in Cybersecurity (CC) 2026 exam.

| Category | Count | Description |
| :--- | :---: | :--- |
| **Core Terms** (`core_term`) | 73 | Foundational security models, risk processes, governance principles, and control types. |
| **Acronyms & Abbreviations** (`acronym`) | 18 | Essential abbreviations commonly tested on the ISC2 CC examination. |
| **Exam Question Language** (`exam_language`) | 7 | High-stakes qualifiers and question-stem operators (e.g. BEST, FIRST, EXCEPT). |
| **Exam Scenario Vocabulary** (`scenario_vocabulary`) | 12 | Key verbs, actions, conditions, and incident response terminology used in scenarios. |
| **Total Accepted Entries** | **110** | **100% verified and mapped to Domain 1 Exam Objectives.** |

---

## 2. Objective-by-Objective Vocabulary Review

### Objective 1.1: Security Concepts (Confidentiality, Integrity, Availability, AAA, Privacy) (37 entries)

#### `VOC-CC26-D1-001` — **Confidentiality**
- **Thai Meaning (ความหมายภาษาไทย):** การรักษาความลับของข้อมูล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The security goal of preventing unauthorized disclosure of information and restricting access to authorized people, entities, or processes.
- **Thai Explanation:** การปกป้องข้อมูลไม่ให้ถูกเปิดเผยแก่ผู้ที่ไม่มีสิทธิ์ โดยจำกัดการเข้าถึงเฉพาะบุคคล ระบบ หรือกระบวนการที่ได้รับอนุญาตเท่านั้น
- **Exam Relevance & Strategy:** Exam scenarios often test whether an incident involves disclosure (loss of confidentiality) versus alteration (loss of integrity). Encryption, access controls, and NDAs are common mechanisms.
- **English Example:** *"Encrypting sensitive customer records ensures confidentiality even if storage media is stolen."*
- **Thai Example:** *"การเข้ารหัสข้อมูลสำคัญของลูกค้าช่วยรักษาความลับ แม้สื่อบันทึกข้อมูลจะถูกขโมยไป"*
- **Confused With:** Integrity, Privacy
- **Keywords:** `Disclosure`, `Authorized access`, `Secrecy`, `Encryption`, `Need to know`
- **Evidence Sources:** S05 (T@00:06:42)

---

#### `VOC-CC26-D1-002` — **Integrity**
- **Thai Meaning (ความหมายภาษาไทย):** ความถูกต้องแท้จริงและความสมบูรณ์ของข้อมูล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The security goal of ensuring that data is correct, authentic, and protected against unauthorized or accidental modification, deletion, or tampering.
- **Thai Explanation:** การรับประกันว่าข้อมูลมีความถูกต้องครบถ้วน ตรงตามความเป็นจริง และไม่ถูกแก้ไข เปลี่ยนแปลง ลบ หรือดัดแปลงโดยไม่ได้รับอนุญาตหรือโดยอุบัติเหตุ
- **Exam Relevance & Strategy:** Look for scenarios involving unauthorized changes, tampering, incorrect database values, or corrupted transmissions. Key mechanisms include hashing, checksums, and digital signatures.
- **English Example:** *"Calculating a cryptographic checksum verifies the integrity of the downloaded software package."*
- **Thai Example:** *"การคำนวณค่า Checksum ช่วยตรวจสอบความถูกต้องแท้จริงของไฟล์ซอฟต์แวร์ที่ดาวน์โหลดมาว่าไม่ถูกแก้ไข"*
- **Confused With:** Confidentiality, Non-repudiation
- **Keywords:** `Tampering`, `Modification`, `Unaltered`, `Hashing`, `Accuracy`
- **Evidence Sources:** S07 (T@00:11:10)

---

#### `VOC-CC26-D1-003` — **Availability**
- **Thai Meaning (ความหมายภาษาไทย):** ความพร้อมใช้งานของระบบและข้อมูล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The security goal of ensuring that systems, networks, and data are timely and reliably accessible to authorized users when needed.
- **Thai Explanation:** การรับประกันว่าระบบ เครือข่าย และข้อมูลสามารถเข้าถึงและใช้งานได้ทันท่วงทีและเชื่อถือได้เมื่อผู้มีสิทธิ์ต้องการใช้งาน
- **Exam Relevance & Strategy:** Questions involve denial-of-service (DoS) attacks, system crashes, power outages, and hardware failures. Key mechanisms are redundancy, failover, UPS, load balancers, and backups.
- **English Example:** *"Deploying redundant power supplies and load balancers maximizes system availability during peak traffic."*
- **Thai Example:** *"การติดตั้งระบบสำรองไฟฟ้าและอุปกรณ์กระจายโหลดช่วยรักษาความพร้อมใช้งานของระบบระหว่างช่วงเวลาที่มีการใช้งานหนาแน่น"*
- **Confused With:** Authorization, Performance
- **Keywords:** `Uptime`, `Downtime`, `Redundancy`, `Failover`, `Access when needed`
- **Evidence Sources:** S10 (T@00:13:58)

---

#### `VOC-CC26-D1-004` — **CIA Triad** [**CIA** — *Confidentiality, Integrity, Availability*]
- **Thai Meaning (ความหมายภาษาไทย):** สามเหลี่ยมแห่งความปลอดภัย (CIA)
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** The foundational model and guiding framework of information security composed of three core pillars: Confidentiality, Integrity, and Availability.
- **Thai Explanation:** แบบจำลองรากฐานและเสาหลักสำคัญสามประการของการรักษาความมั่นคงปลอดภัยสารสนเทศ ได้แก่ การรักษาความลับ (Confidentiality) ความถูกต้องสมบูรณ์ (Integrity) และความพร้อมใช้งาน (Availability)
- **Exam Relevance & Strategy:** Fundamental reference model. Exam questions test balancing these three objectives under organizational operational constraints.
- **English Example:** *"A security architect uses the CIA Triad to evaluate the security requirements of a new cloud service."*
- **Thai Example:** *"สถาปนิกความปลอดภัยใช้กรอบ CIA Triad ในการประเมินความต้องการด้านความปลอดภัยของบริการคลาวด์ตัวใหม่"*
- **Confused With:** AAA Model
- **Keywords:** `Three pillars`, `Foundational model`, `Security objectives`
- **Evidence Sources:** S04 (T@00:05:55)

---

#### `VOC-CC26-D1-005` — **Authentication**
- **Thai Meaning (ความหมายภาษาไทย):** การพิสูจน์ตัวตน
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The process of verifying the identity claimed by a user, process, or device using provided credentials.
- **Thai Explanation:** กระบวนการตรวจสอบและยืนยันว่าบุคคล ระบบ หรืออุปกรณ์ที่กำลังขอเข้าใช้งานเป็นตัวตนที่กล่าวอ้างจริงหรือไม่ โดยอาศัยหลักฐานประจำตัว (Credentials)
- **Exam Relevance & Strategy:** Exams frequently test the distinction between Authentication (verifying who you are) and Authorization (determining what you are permitted to do). Authentication always precedes authorization in access control.
- **English Example:** *"Entering a password and receiving an SMS verification code authenticates the user's identity."*
- **Thai Example:** *"การป้อนรหัสผ่านพร้อมกับการรับรหัสยืนยันทาง SMS เป็นการพิสูจน์ตัวตนของผู้ใช้"*
- **Confused With:** Authorization, Identification, Accounting
- **Keywords:** `Identity verification`, `Credentials`, `Login`, `Who you are`
- **Evidence Sources:** S12 (T@00:18:08)

---

#### `VOC-CC26-D1-006` — **Authorization**
- **Thai Meaning (ความหมายภาษาไทย):** การกำหนดสิทธิ์และการอนุญาต
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The process of granting or denying specific permissions and access rights to a resource or action based on verified identity.
- **Thai Explanation:** กระบวนการกำหนด ให้ หรือปฏิเสธสิทธิ์ในการเข้าถึงทรัพยากรหรือการกระทำสิ่งใดสิ่งหนึ่งในระบบ โดยอ้างอิงจากตัวตนที่ผ่านการพิสูจน์แล้ว
- **Exam Relevance & Strategy:** Deals with permissions, privileges, and access control lists. A user can be successfully authenticated but still unauthorized to view certain records.
- **English Example:** *"Although the employee authenticated successfully, the system denied authorization to access financial records."*
- **Thai Example:** *"แม้ว่าพนักงานจะพิสูจน์ตัวตนผ่านแล้ว แต่ระบบปฏิเสธการอนุญาตให้เข้าถึงข้อมูลทางการเงิน"*
- **Confused With:** Authentication, Accounting
- **Keywords:** `Permissions`, `Privileges`, `Access rights`, `What you can do`
- **Evidence Sources:** S12 (T@00:19:38)

---

#### `VOC-CC26-D1-007` — **Accounting**
- **Thai Meaning (ความหมายภาษาไทย):** การบันทึกและตรวจสอบกิจกรรมการใช้งาน
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The tracking, recording, and auditing of user actions, resource usage, and system events to maintain accountability.
- **Thai Explanation:** การติดตามและบันทึกประวัติการกระทำ การใช้งานทรัพยากร และเหตุการณ์ต่างๆ ในระบบ เพื่อให้สามารถตรวจสอบย้อนหลังและระบุผู้รับผิดชอบได้
- **Exam Relevance & Strategy:** Associated with log files, audit trails, login records, and command history. Essential for non-repudiation, incident investigation, and regulatory compliance.
- **English Example:** *"System accounting logs revealed that an administrator executed unauthorized configuration changes at midnight."*
- **Thai Example:** *"บันทึกประวัติของระบบ (Accounting logs) เผยให้เห็นว่าผู้ดูแลระบบได้เปลี่ยนแปลงการตั้งค่าโดยไม่ได้รับอนุญาตในตอนเที่ยงคืน"*
- **Confused With:** Financial Accounting, Accountability, Auditing
- **Keywords:** `Logging`, `Audit trail`, `Tracking`, `Activity records`, `Accountability`
- **Evidence Sources:** S12 (T@00:20:20)

---

#### `VOC-CC26-D1-008` — **AAA Model** [**AAA** — *Authentication, Authorization, Accounting*]
- **Thai Meaning (ความหมายภาษาไทย):** กรอบการควบคุมการเข้าถึงแบบ AAA
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A comprehensive access control framework comprising three sequential functions: Authentication (who are you?), Authorization (what can you do?), and Accounting (what did you do?).
- **Thai Explanation:** กรอบแนวคิดการบริหารจัดการสิทธิ์และการเข้าถึงซึ่งประกอบด้วยสามขั้นตอนหลัก: การพิสูจน์ตัวตน (Authentication) การกำหนดสิทธิ์ (Authorization) และการบันทึกประวัติการใช้งาน (Accounting)
- **Exam Relevance & Strategy:** Must not be confused with the CIA Triad. AAA describes access control operations, whereas CIA describes security properties.
- **English Example:** *"Remote access servers rely on the AAA model to verify users, grant network privileges, and log connection durations."*
- **Thai Example:** *"เซิร์ฟเวอร์การเข้าถึงระยะไกลอาศัยกรอบ AAA ในการตรวจตัวตนผู้ใช้ กำหนดสิทธิ์เครือข่าย และบันทึกระยะเวลาการเชื่อมต่อ"*
- **Confused With:** CIA Triad
- **Keywords:** `Access control framework`, `Identity management`, `Three A's`
- **Evidence Sources:** S12 (T@00:18:08)

---

#### `VOC-CC26-D1-009` — **Multifactor Authentication (MFA)** [**MFA** — *Multifactor Authentication*]
- **Thai Meaning (ความหมายภาษาไทย):** การพิสูจน์ตัวตนแบบหลายปัจจัย
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** An authentication mechanism requiring users to provide two or more distinct, independent categories of authentication factors.
- **Thai Explanation:** กลไกการพิสูจน์ตัวตนที่กำหนดให้ผู้ใช้ต้องแสดงหลักฐานยืนยันตัวตนอย่างน้อยสองปัจจัยขึ้นไปจากหมวดหมู่ที่แตกต่างกันและเป็นอิสระต่อกัน
- **Exam Relevance & Strategy:** Critical exam point: Using a password plus a PIN is NOT MFA because both are 'Something You Know' (single factor). MFA requires at least two DIFFERENT categories (e.g., password + smart card, or password + fingerprint).
- **English Example:** *"Requiring both a password and a push notification on a registered smartphone implements true multifactor authentication."*
- **Thai Example:** *"การบังคับใช้ทั้งรหัสผ่านและการแจ้งเตือนบนสมาร์ตโฟนที่ลงทะเบียนไว้ ถือเป็นการพิสูจน์ตัวตนแบบหลายปัจจัยที่แท้จริง"*
- **Confused With:** Two-Factor Authentication, Dual Credentials
- **Keywords:** `Independent factors`, `Knowledge`, `Possession`, `Inherence`, `Strong authentication`
- **Evidence Sources:** S13 (T@00:21:43)

---

#### `VOC-CC26-D1-010` — **Two-Factor Authentication (2FA)** [**2FA** — *Two-Factor Authentication*]
- **Thai Meaning (ความหมายภาษาไทย):** การพิสูจน์ตัวตนแบบสองปัจจัย
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A specific subset of multifactor authentication that requires exactly two different authentication factor categories.
- **Thai Explanation:** รูปแบบเฉพาะของการพิสูจน์ตัวตนหลายปัจจัยที่กำหนดให้ใช้หลักฐานยืนยันตัวตนจากสองหมวดหมู่ที่แตกต่างกันพอดี
- **Exam Relevance & Strategy:** All 2FA is MFA, but not all MFA is limited to two factors. Often paired in questions with SMS OTP codes or hardware tokens.
- **English Example:** *"Logging in with a password followed by entering an authenticator app code satisfies 2FA requirements."*
- **Thai Example:** *"การเข้าสู่ระบบด้วยรหัสผ่านแล้วตามด้วยการกรอกรหัสจากแอปพลิเคชัน Authenticator เป็นไปตามข้อกำหนด 2FA"*
- **Confused With:** Multifactor Authentication (MFA), Two Credentials
- **Keywords:** `Two factors`, `Subset of MFA`, `OTP`, `Hardware token`
- **Evidence Sources:** S06 (T@00:24:20)

---

#### `VOC-CC26-D1-011` — **Something You Know**
- **Thai Meaning (ความหมายภาษาไทย):** ปัจจัยสิ่งที่คุณรู้ (Knowledge Factor)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An authentication factor based on secret information known only to the individual, such as passwords, PINs, or security questions.
- **Thai Explanation:** ปัจจัยการพิสูจน์ตัวตนที่อ้างอิงจากข้อมูลความลับที่บุคคลนั้นทราบเพียงผู้เดียว เช่น รหัสผ่าน รหัส PIN หรือคำถามความปลอดภัย
- **Exam Relevance & Strategy:** Remember that passwords and PINs belong to the SAME category. Combining them does NOT achieve multifactor authentication.
- **English Example:** *"A user enters a passphrase and their mother's maiden name, both representing the Something You Know factor."*
- **Thai Example:** *"ผู้ใช้ป้อนข้อความรหัสผ่านและนามสกุลเดิมของมารดา ซึ่งทั้งสองจัดเป็นปัจจัยประเภท 'สิ่งที่คุณรู้'"*
- **Confused With:** Something You Have
- **Keywords:** `Password`, `PIN`, `Passphrase`, `Knowledge factor`, `Secret question`
- **Evidence Sources:** S13 (T@00:21:43)

---

#### `VOC-CC26-D1-012` — **Something You Have**
- **Thai Meaning (ความหมายภาษาไทย):** ปัจจัยสิ่งที่คุณมี (Possession Factor)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An authentication factor based on a physical or digital object in the possession of the user, such as a smart card, hardware token, or mobile phone.
- **Thai Explanation:** ปัจจัยการพิสูจน์ตัวตนที่อิงกับวัตถุทางกายภาพหรืออุปกรณ์ดิจิทัลที่อยู่ในความครอบครองของผู้ใช้ เช่น สมาร์ตการ์ด ฮาร์ดแวร์โทเค็น หรือโทรศัพท์มือถือ
- **Exam Relevance & Strategy:** Commonly paired with 'Something You Know' to form 2FA. Examples include USB security keys (FIDO), RSA SecurID fobs, and smartphones receiving push notifications.
- **English Example:** *"Inserting a corporate smart card into a laptop provides the Something You Have authentication factor."*
- **Thai Example:** *"การเสียบสมาร์ตการ์ดขององค์กรเข้ากับแล็ปท็อปเป็นตัวแทนของปัจจัยประเภท 'สิ่งที่คุณมี'"*
- **Confused With:** Something You Are
- **Keywords:** `Smart card`, `Hardware token`, `Possession factor`, `Mobile phone`, `Security key`
- **Evidence Sources:** S13 (T@00:22:25)

---

#### `VOC-CC26-D1-013` — **Something You Are**
- **Thai Meaning (ความหมายภาษาไทย):** ปัจจัยสิ่งที่คุณเป็น (Inherence Factor / Biometrics)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An authentication factor based on unique biological, physiological, or behavioral characteristics of the human, such as fingerprints, facial geometry, or iris patterns.
- **Thai Explanation:** ปัจจัยการพิสูจน์ตัวตนที่อิงกับลักษณะทางกายภาพ ชีวมิติ หรือพฤติกรรมเฉพาะตัวของมนุษย์ เช่น ลายนิ้วมือ โครงสร้างใบหน้า หรือม่านตา
- **Exam Relevance & Strategy:** Commonly referred to as Biometrics. Often highlighted on exams because inherence factors cannot easily be shared or forgotten, though biometric templates can still be subject to sensor spoofing or database leaks.
- **English Example:** *"Scanning a fingerprint to unlock a secure server room represents the Something You Are authentication factor."*
- **Thai Example:** *"การสแกนลายนิ้วมือเพื่อปลดล็อกห้องเซิร์ฟเวอร์ที่ปลอดภัยจัดเป็นปัจจัยประเภท 'สิ่งที่คุณเป็น'"*
- **Confused With:** Something You Have
- **Keywords:** `Biometrics`, `Fingerprint`, `Facial recognition`, `Iris scan`, `Inherence factor`
- **Evidence Sources:** S13 (T@00:23:02)

---

#### `VOC-CC26-D1-014` — **Somewhere You Are**
- **Thai Meaning (ความหมายภาษาไทย):** ปัจจัยสถานที่ที่คุณอยู่ (Location Factor)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A contextual authentication attribute based on geographic or network location, such as IP address geolocation or GPS coordinates.
- **Thai Explanation:** คุณลักษณะการพิสูจน์ตัวตนตามบริบทที่อ้างอิงจากตำแหน่งทางภูมิศาสตร์หรือตำแหน่งเครือข่าย เช่น พิกัด GPS หรือตำแหน่งของหมายเลข IP
- **Exam Relevance & Strategy:** Instructors and materials mention this as an auxiliary or contextual factor (SQ-06 flags that some standards consider it contextual rather than an independent fourth factor). Used in geofencing and risk-based adaptive authentication.
- **English Example:** *"The bank's access system flags a login attempt because the IP geolocation originates from an unexpected foreign country."*
- **Thai Example:** *"ระบบของธนาคารแจ้งเตือนการเข้าสู่ระบบเนื่องจากตำแหน่งทางภูมิศาสตร์ของ IP มาจากต่างประเทศที่ไม่คาดคิด"*
- **Confused With:** Something You Have
- **Keywords:** `Location factor`, `Geolocation`, `GPS`, `Geofencing`, `IP address`
- **Evidence Sources:** S14 (T@00:24:59)

---

#### `VOC-CC26-D1-015` — **Credential**
- **Thai Meaning (ความหมายภาษาไทย):** หลักฐานประจำตัว / ข้อมูลประจำตัว
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An object, token, or secret value presented by an entity to substantiate a claimed identity during authentication.
- **Thai Explanation:** หลักฐาน วัตถุ หรือข้อมูลความลับที่ผู้ใช้หรือระบบนำมาแสดงเพื่อยืนยันตัวตนที่กล่าวอ้างระหว่างกระบวนการพิสูจน์ตัวตน
- **Exam Relevance & Strategy:** Credentials can be compromised via phishing, brute-force, or credential stuffing. Presenting multiple credentials of the same category does not equate to multifactor authentication.
- **English Example:** *"Users must keep their digital certificates and passwords secure to prevent unauthorized credential harvesting."*
- **Thai Example:** *"ผู้ใช้ต้องรักษาใบรับรองดิจิทัลและรหัสผ่านให้ปลอดภัยเพื่อป้องกันการถูกขโมยข้อมูลประจำตัว"*
- **Confused With:** Identity, Permission
- **Keywords:** `Token`, `Password`, `Proof of identity`, `Access token`
- **Evidence Sources:** S12 (T@00:18:08)

---

#### `VOC-CC26-D1-016` — **Encryption**
- **Thai Meaning (ความหมายภาษาไทย):** การเข้ารหัสข้อมูล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The cryptographic process of transforming plaintext into unintelligible ciphertext using an algorithm and a key, protecting confidentiality.
- **Thai Explanation:** กระบวนการทางวิทยาการรหัสลับในการแปลงข้อความธรรมดา (Plaintext) ให้เป็นข้อความเข้ารหัส (Ciphertext) ที่ไม่สามารถอ่านเข้าใจได้ โดยใช้อัลกอริทึมและกุญแจรหัส เพื่อรักษาความลับของข้อมูล
- **Exam Relevance & Strategy:** Primary mechanism to protect data at rest and data in transit. Remember: encryption protects confidentiality, but without integrity controls (like MAC or authenticated encryption), it does not fully guarantee data tampering prevention.
- **English Example:** *"The organization enforces full-disk encryption across all company laptops to protect client data at rest."*
- **Thai Example:** *"องค์กรบังคับใช้การเข้ารหัสแบบเต็มดิสก์บนแล็ปท็อปทุกเครื่องเพื่อรักษาความลับของข้อมูลลูกค้าที่ถูกจัดเก็บ"*
- **Confused With:** Hashing, Data Masking, Encoding
- **Keywords:** `Plaintext`, `Ciphertext`, `Key`, `Cryptography`, `Confidentiality at rest and in transit`
- **Evidence Sources:** S05 (T@00:08:08)

---

#### `VOC-CC26-D1-017` — **Data Masking**
- **Thai Meaning (ความหมายภาษาไทย):** การพรางข้อมูล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A technique that obscures specific sensitive data elements by replacing parts of the data with fictitious or placeholder characters while maintaining usability.
- **Thai Explanation:** เทคนิคการบดบังหรืออำพรางข้อมูลสำคัญบางส่วน โดยแทนที่ด้วยอักขระจำลอง เช่น การแสดงเพียง 4 หลักสุดท้ายของบัตรเครดิต เพื่อไม่ให้ผู้ใช้งานทั่วไปเห็นข้อมูลจริงทั้งหมด
- **Exam Relevance & Strategy:** Distinct from encryption. Data masking does not require decryption keys to view the unmasked portion; it is used on user interfaces, call centers, and test databases.
- **English Example:** *"Displaying only the last four digits of a credit card number on a customer receipt is an example of data masking."*
- **Thai Example:** *"การแสดงเพียงสี่หลักสุดท้ายของหมายเลขบัตรเครดิตบนใบเสร็จรับเงินเป็นตัวอย่างของการพรางข้อมูล"*
- **Confused With:** Encryption, Anonymization, Redaction
- **Keywords:** `Obfuscation`, `Credit card digits`, `Partial hiding`, `Display limitation`
- **Evidence Sources:** S06 (T@00:08:54)

---

#### `VOC-CC26-D1-018` — **Non-Disclosure Agreement (NDA)** [**NDA** — *Non-Disclosure Agreement*]
- **Thai Meaning (ความหมายภาษาไทย):** ข้อตกลงการไม่เปิดเผยข้อมูลความลับ
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A legally binding contract between parties establishing confidential treatment of proprietary or sensitive information shared between them.
- **Thai Explanation:** สัญญาทางกฎหมายที่ทำขึ้นระหว่างคู่สัญญาเพื่อกำหนดข้อตกลงและเงื่อนไขในการรักษาความลับของข้อมูลทางธุรกิจหรือข้อมูลสำคัญ ไม่ให้นำไปเปิดเผยแก่บุคคลภายนอก
- **Exam Relevance & Strategy:** Classified as an administrative/managerial control protecting confidentiality. Do not confuse the acronym NDA with Non-repudiation.
- **English Example:** *"Before sharing proprietary source code with external contractors, the company required a signed non-disclosure agreement."*
- **Thai Example:** *"ก่อนการส่งต่อซอร์สโค้ดที่เป็นกรรมสิทธิ์ให้แก่ผู้รับจ้างภายนอก บริษัทได้กำหนดให้มีการลงนามในข้อตกลงการไม่เปิดเผยข้อมูล (NDA)"*
- **Confused With:** Non-repudiation
- **Keywords:** `Contract`, `Confidentiality agreement`, `Legal protection`, `Administrative control`
- **Evidence Sources:** S06 (T@00:11:10)

---

#### `VOC-CC26-D1-019` — **Tampering**
- **Thai Meaning (ความหมายภาษาไทย):** การดัดแปลงแก้ไขโดยมิชอบ
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** The deliberate, unauthorized alteration, modification, or destruction of software, data, or physical systems to compromise security.
- **Thai Explanation:** การจงใจดัดแปลง แก้ไข หรือเปลี่ยนแปลงข้อมูล ซอฟต์แวร์ หรือระบบทางกายภาพโดยไม่ได้รับอนุญาต ซึ่งส่งผลกระทบโดยตรงต่อความถูกต้องสมบูรณ์ (Integrity)
- **Exam Relevance & Strategy:** Direct threat to Integrity. When an exam question describes unauthorized record changes, parameter manipulation, or modified script execution, tampering is the core concern.
- **English Example:** *"The attacker engaged in data tampering by modifying the transaction amounts stored in the payroll database."*
- **Thai Example:** *"ผู้โจมตีทำการดัดแปลงข้อมูลโดยแก้ไขยอดเงินของการทำธุรกรรมที่บันทึกอยู่ในฐานข้อมูลเงินเดือน"*
- **Confused With:** Eavesdropping, Snooping
- **Keywords:** `Unauthorized alteration`, `Data modification`, `Integrity violation`, `Corruption`
- **Evidence Sources:** S07 (T@00:11:53)

---

#### `VOC-CC26-D1-020` — **Hashing**
- **Thai Meaning (ความหมายภาษาไทย):** การแปลงข้อมูลแบบทางเดียว (แฮชชิง)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A one-way mathematical function that converts variable-length input data into a fixed-length string of characters (digest) to verify integrity.
- **Thai Explanation:** ฟังก์ชันทางคณิตศาสตร์แบบทางเดียวที่แปลงข้อมูลนำเข้าที่มีความยาวใดๆ ให้กลายเป็นข้อความที่มีความยาวคงที่ (Hash digest) เพื่อใช้ตรวจสอบความถูกต้องแท้จริงของข้อมูล โดยไม่สามารถแปลงย้อนกลับได้
- **Exam Relevance & Strategy:** Used for integrity verification and password storage. Key characteristic: one-way (irreversible), unlike encryption which is two-way (reversible with key). Even a 1-bit change creates a vastly different hash (avalanche effect).
- **English Example:** *"Verifying that the SHA-256 hash matches the vendor's published value proves that the file was not altered in transit."*
- **Thai Example:** *"การตรวจสอบว่าค่าแฮช SHA-256 ตรงกับค่าที่ผู้ผลิตประกาศไว้ แสดงว่าไฟล์ไม่ถูกดัดแปลงแก้ไขระหว่างการส่ง"*
- **Confused With:** Encryption, Encoding
- **Keywords:** `One-way function`, `Hash digest`, `Integrity check`, `SHA-256`, `MD5`
- **Evidence Sources:** S07 (T@00:13:16)

---

#### `VOC-CC26-D1-021` — **Checksum**
- **Thai Meaning (ความหมายภาษาไทย):** ค่าตรวจสอบความถูกต้อง (เช็กซัม)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A calculated numeric value used to detect errors or unauthorized changes that may have been introduced during data transmission or storage.
- **Thai Explanation:** ค่าตัวเลขที่คำนวณขึ้นจากข้อมูลชุดหนึ่งเพื่อใช้ตรวจจับข้อผิดพลาดหรือการเปลี่ยนแปลงที่อาจเกิดขึ้นระหว่างการส่งผ่านเครือข่ายหรือการจัดเก็บข้อมูล
- **Exam Relevance & Strategy:** Exam scenarios often cite checksums as a method used by administrators to verify that downloaded installers have not been corrupted or infected with malware.
- **English Example:** *"The system engineer validated the checksum of the firmware image before applying it to production routers."*
- **Thai Example:** *"วิศวกรระบบตรวจสอบค่า Checksum ของไฟล์เฟิร์มแวร์ก่อนนำไปติดตั้งบนเราเตอร์ที่ใช้งานจริง"*
- **Confused With:** Digital Signature, Parity Bit
- **Keywords:** `Integrity verification`, `Error detection`, `File verification`, `Download check`
- **Evidence Sources:** S08 (T@00:13:16)

---

#### `VOC-CC26-D1-022` — **Digital Signature**
- **Thai Meaning (ความหมายภาษาไทย):** ลายมือชื่อดิจิทัล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A cryptographic mechanism providing integrity verification, origin authentication, and non-repudiation by encrypting a hash digest with the sender's private key.
- **Thai Explanation:** กลไกทางวิทยาการรหัสลับที่ให้ทั้งการตรวจสอบความถูกต้องของข้อมูล (Integrity) การพิสูจน์แหล่งกำเนิด (Authentication) และการไม่สามารถปฏิเสธความรับผิดชอบได้ (Non-repudiation) โดยการเข้ารหัสค่าแฮชด้วยกุญแจส่วนตัวของผู้ส่ง
- **Exam Relevance & Strategy:** Provides BOTH integrity and proof of origin. If a message is digitally signed, any alteration breaks the signature, and the sender cannot credibly deny authoring it.
- **English Example:** *"Signing the software update with a digital signature confirms the software originated from the legitimate developer."*
- **Thai Example:** *"การลงลายมือชื่อดิจิทัลบนไฟล์อัปเดตซอฟต์แวร์ช่วยยืนยันว่าซอฟต์แวร์มาจากผู้พัฒนาที่แท้จริงและไม่ถูกดัดแปลง"*
- **Confused With:** Electronic Signature, Digitized Handwritten Signature
- **Keywords:** `Asymmetric cryptography`, `Non-repudiation`, `Integrity`, `Private key`, `Origin proof`
- **Evidence Sources:** S07 (T@00:12:33)

---

#### `VOC-CC26-D1-023` — **Downtime**
- **Thai Meaning (ความหมายภาษาไทย):** ระยะเวลาที่ระบบหยุดทำงาน / เวลาหยุดชะงัก
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** A period during which a computer system, service, or network is unavailable or offline due to failure, maintenance, or cyberattacks.
- **Thai Explanation:** ช่วงเวลาที่ระบบคอมพิวเตอร์ เครือข่าย หรือบริการไม่สามารถใช้งานได้ตามปกติ อันเนื่องมาจากความล้มเหลวของอุปกรณ์ การบำรุงรักษา หรือการถูกโจมตีทางไซเบอร์
- **Exam Relevance & Strategy:** Availability controls aim to minimize unplanned downtime. Often evaluated alongside metrics like Service Level Agreements (SLAs).
- **English Example:** *"A distributed denial-of-service attack caused four hours of unscheduled downtime for the e-commerce website."*
- **Thai Example:** *"การโจมตีแบบ DDoS ส่งผลให้เว็บไซต์อีคอมเมิร์ซต้องหยุดทำงานโดยไม่ได้วางแผนไว้เป็นเวลาสี่ชั่วโมง"*
- **Confused With:** Latency, Lag
- **Keywords:** `Outage`, `System unavailable`, `Unplanned outage`, `Availability failure`
- **Evidence Sources:** S10 (T@00:14:40)

---

#### `VOC-CC26-D1-024` — **Redundancy**
- **Thai Meaning (ความหมายภาษาไทย):** ความซ้ำซ้อนเพื่อทดแทน / ระบบสำรองคู่ขนาน
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The inclusion of extra, duplicate components or systems to take over operations in the event of primary component failure, eliminating single points of failure.
- **Thai Explanation:** การจัดให้มีอุปกรณ์ ส่วนประกอบ หรือระบบสำรองคู่ขนานที่พร้อมทำงานทดแทนได้ทันทีเมื่อระบบหลักเกิดความล้มเหลว เพื่อขจัดจุดล้มเหลวเดี่ยว (Single Point of Failure)
- **Exam Relevance & Strategy:** Key technical design principle supporting Availability. Examples include redundant power supplies, duplicate firewalls, RAID disks, and multiple network paths.
- **English Example:** *"Implementing hardware redundancy across all critical database servers prevents a single disk crash from causing downtime."*
- **Thai Example:** *"การติดตั้งระบบสำรองอุปกรณ์คู่ขนานบนเซิร์ฟเวอร์ฐานข้อมูลหลักช่วยป้องกันไม่ให้ดิสก์พังเพียงจุดเดียวทำให้ระบบหยุดทำงาน"*
- **Confused With:** Backup, Replication
- **Keywords:** `Duplicate components`, `Eliminate single point of failure`, `High availability`, `Fault tolerance`
- **Evidence Sources:** S10 (T@00:15:23)

---

#### `VOC-CC26-D1-025` — **Failover**
- **Thai Meaning (ความหมายภาษาไทย):** การสลับการทำงานอัตโนมัติเมื่อระบบล้มเหลว
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An operational mode that automatically switches system processing from a failed primary component to a standby backup component without service interruption.
- **Thai Explanation:** กระบวนการสลับการทำงานโดยอัตโนมัติจากระบบหรืออุปกรณ์หลักที่ขัดข้องไปยังระบบสำรองที่เตรียมพร้อมไว้ โดยไม่ทำให้การบริการต้องหยุดชะงัก
- **Exam Relevance & Strategy:** Focuses on the active process of switching to redundant resources. Contrast with manual restoration from backups.
- **English Example:** *"When the primary web cluster lost power, automated failover redirected user traffic to the secondary cluster instantly."*
- **Thai Example:** *"เมื่อคลัสเตอร์เซิร์ฟเวอร์หลักเกิดไฟดับ ระบบ Failover อัตโนมัติได้เปลี่ยนเส้นทางการใช้งานของผู้ใช้ไปยังคลัสเตอร์สำรองในทันที"*
- **Confused With:** Backup Restore, Failback
- **Keywords:** `Automated switchover`, `Standby system`, `High availability`, `Continuous operation`
- **Evidence Sources:** S10 (T@00:15:23)

---

#### `VOC-CC26-D1-026` — **Load Balancer**
- **Thai Meaning (ความหมายภาษาไทย):** อุปกรณ์หรือระบบกระจายโหลด
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A networking device or software service that distributes incoming network or application traffic across multiple backend servers.
- **Thai Explanation:** อุปกรณ์หรือบริการเครือข่ายที่ทำหน้าที่กระจายปริมาณการใช้งานของผู้ใช้ไปยังเซิร์ฟเวอร์หลายๆ เครื่อง เพื่อเพิ่มประสิทธิภาพและป้องกันไม่ให้เซิร์ฟเวอร์ใดเครื่องหนึ่งรับภาระหนักเกินไป
- **Exam Relevance & Strategy:** Supports Availability by balancing workloads and automatically routing traffic away from failed or unresponsive servers.
- **English Example:** *"The load balancer detected server failure and seamlessly redirected incoming HTTP requests to healthy nodes."*
- **Thai Example:** *"อุปกรณ์กระจายโหลดตรวจพบว่าเซิร์ฟเวอร์หนึ่งเครื่องล้มเหลว จึงเปลี่ยนเส้นทางการร้องขอ HTTP ไปยังเซิร์ฟเวอร์ที่ยังทำงานได้ตามปกติ"*
- **Confused With:** Proxy Server, Firewall
- **Keywords:** `Traffic distribution`, `High availability`, `Backend servers`, `Fault detection`
- **Evidence Sources:** S11 (T@00:16:01)

---

#### `VOC-CC26-D1-027` — **Uninterruptible Power Supply (UPS)** [**UPS** — *Uninterruptible Power Supply*]
- **Thai Meaning (ความหมายภาษาไทย):** เครื่องสำรองไฟฟ้าต่อเนื่อง
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** An electrical apparatus providing immediate battery emergency power to critical hardware during electrical utility failure.
- **Thai Explanation:** อุปกรณ์ไฟฟ้าที่ให้พลังงานสำรองจากแบตเตอรี่ในทันทีแก่อุปกรณ์คอมพิวเตอร์ที่สำคัญ เมื่อเกิดเหตุการณ์ไฟฟ้าดับหรือไฟตก เพื่อให้ระบบทำงานต่อเนื่องหรือปิดเครื่องได้อย่างปลอดภัย
- **Exam Relevance & Strategy:** Physical/technical control supporting Availability. UPS provides short-term power bridge until generators start or systems execute orderly shutdown; it does not replace long-term generators.
- **English Example:** *"Data center servers remained operational during the city-wide blackout thanks to battery-powered UPS units."*
- **Thai Example:** *"เซิร์ฟเวอร์ของศูนย์ข้อมูลยังคงทำงานได้ต่อเนื่องระหว่างไฟฟ้าดับทั่วเมือง ด้วยพลังงานจากเครื่องสำรองไฟฟ้าต่อเนื่อง (UPS)"*
- **Confused With:** Generator, Surge Protector
- **Keywords:** `Power failure`, `Battery backup`, `Short-term power`, `Availability control`
- **Evidence Sources:** S11 (T@00:16:46)

---

#### `VOC-CC26-D1-028` — **Privacy**
- **Thai Meaning (ความหมายภาษาไทย):** ความเป็นส่วนตัวของข้อมูลส่วนบุคคล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The right of individuals to control how their personal information is collected, processed, used, retained, and disclosed.
- **Thai Explanation:** สิทธิของบุคคลในการควบคุมและกำหนดว่าข้อมูลส่วนบุคคลของตนจะถูกรวบรวม จัดเก็บ ประมวลผล นำไปใช้ ส่งต่อ หรือเปิดเผยอย่างไร ภายใต้กรอบนโยบายและกฎหมาย
- **Exam Relevance & Strategy:** Distinguish Privacy from Confidentiality. Confidentiality protects any sensitive data (trade secrets, military data, passwords) from unauthorized viewing. Privacy specifically concerns personal data of living human beings and individual legal rights.
- **English Example:** *"The organization updated its privacy policy to allow customers to choose how their personal contact data is processed."*
- **Thai Example:** *"องค์กรปรับปรุงนโยบายความเป็นส่วนตัวเพื่อให้ลูกค้าสามารถเลือกได้ว่าจะยินยอมให้ประมวลผลข้อมูลส่วนบุคคลของตนอย่างไร"*
- **Confused With:** Confidentiality, Anonymity
- **Keywords:** `Personal information`, `Data protection`, `Individual rights`, `Consent`, `GDPR`
- **Evidence Sources:** S15 (T@00:27:36)

---

#### `VOC-CC26-D1-029` — **Personal Information** [**PI / PII** — *Personally Identifiable Information*]
- **Thai Meaning (ความหมายภาษาไทย):** ข้อมูลส่วนบุคคล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** Any information that can be used directly or indirectly to identify, contact, or locate a specific individual.
- **Thai Explanation:** ข้อมูลใดๆ ที่สามารถใช้ระบุตัวตน ติดต่อ หรือระบุตำแหน่งของบุคคลธรรมดาคนใดคนหนึ่งได้ ไม่ว่าทางตรงหรือทางอ้อม เช่น ชื่อ หมายเลขบัตรประชาชน ที่อยู่ หรือภาพถ่าย
- **Exam Relevance & Strategy:** Core subject of privacy laws (GDPR, HIPAA). Must be inventoried, protected via access control/encryption, and destroyed according to retention rules.
- **English Example:** *"National identification numbers, biometric records, and home addresses are legally classified as personal information."*
- **Thai Example:** *"หมายเลขบัตรประจำตัวประชาชน ข้อมูลชีวมิติ และที่อยู่บ้าน จัดเป็นข้อมูลส่วนบุคคลตามกฎหมาย"*
- **Confused With:** Corporate Data, Public Data
- **Keywords:** `PII`, `Identity data`, `Social security number`, `Data subject`, `Privacy scope`
- **Evidence Sources:** S15 (T@00:27:36)

---

#### `VOC-CC26-D1-030` — **Data Subject**
- **Thai Meaning (ความหมายภาษาไทย):** เจ้าของข้อมูลส่วนบุคคล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The identified or identifiable natural person whose personal data is collected, stored, or processed by an organization.
- **Thai Explanation:** บุคคลธรรมดาที่สามารถระบุตัวตนได้ ซึ่งเป็นเจ้าของข้อมูลส่วนบุคคลที่ถูกเก็บรวบรวม บันทึก หรือนำไปประมวลผลโดยองค์กร
- **Exam Relevance & Strategy:** In privacy frameworks (e.g. GDPR), the data subject possesses legal rights such as the right of access, rectification, and deletion (right to be forgotten).
- **English Example:** *"When an online shopper registers an account, that individual is the data subject of the stored customer profile."*
- **Thai Example:** *"เมื่อผู้ซื้อสินค้าออนไลน์ลงทะเบียนเปิดบัญชี บุคคลผู้นั้นจะถือเป็นเจ้าของข้อมูลส่วนบุคคล (Data Subject) ของโปรไฟล์ที่ถูกบันทึกไว้"*
- **Confused With:** Data Controller, Data Processor
- **Keywords:** `Individual`, `Natural person`, `Owner of personal data`, `Privacy rights`
- **Evidence Sources:** S17 (T@00:28:22)

---

#### `VOC-CC26-D1-031` — **Data Controller**
- **Thai Meaning (ความหมายภาษาไทย):** ผู้ควบคุมข้อมูลส่วนบุคคล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The natural or legal entity that determines the purposes, legal basis, and means of processing personal data.
- **Thai Explanation:** บุคคลหรือนิติบุคคลที่มีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงกำหนดวัตถุประสงค์และวิธีการประมวลผลข้อมูล
- **Exam Relevance & Strategy:** Primary entity accountable for privacy compliance. Crucial distinction: The Controller decides WHY and HOW data is used, while the Processor only acts on the Controller's instructions.
- **English Example:** *"The hospital is the data controller because it decides what medical records to collect and how they are handled."*
- **Thai Example:** *"โรงพยาบาลทำหน้าที่เป็นผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller) เพราะเป็นผู้ตัดสินใจว่าจะเก็บประวัติการรักษาใดและใช้งานอย่างไร"*
- **Confused With:** Data Processor, Data Subject
- **Keywords:** `Determines purpose`, `Accountable entity`, `Decision maker`, `Privacy compliance`
- **Evidence Sources:** S17 (T@00:28:22)

---

#### `VOC-CC26-D1-032` — **Data Processor**
- **Thai Meaning (ความหมายภาษาไทย):** ผู้ประมวลผลข้อมูลส่วนบุคคล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A third party or service provider that processes personal data strictly on behalf of and under the instructions of the data controller.
- **Thai Explanation:** บุคคลภายนอกหรือผู้ให้บริการที่ดำเนินการเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลตามคำสั่งหรือในนามของผู้ควบคุมข้อมูลส่วนบุคคลเท่านั้น
- **Exam Relevance & Strategy:** Often represented in exam questions by cloud hosting providers, payroll service vendors, or external analytics firms processing data for another organization.
- **English Example:** *"A cloud payroll vendor acts as a data processor when it calculates employee pay based on data from the employer."*
- **Thai Example:** *"ผู้ให้บริการคลาวด์ด้านการจ่ายเงินเดือนทำหน้าที่เป็นผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor) เมื่อคำนวณเงินเดือนตามคำสั่งของนายจ้าง"*
- **Confused With:** Data Controller, Data Owner
- **Keywords:** `Processes on behalf`, `Third-party vendor`, `Cloud provider`, `Follows instructions`
- **Evidence Sources:** S17 (T@00:29:06)

---

#### `VOC-CC26-D1-033` — **Data Inventory**
- **Thai Meaning (ความหมายภาษาไทย):** บัญชีรายการทรัพย์สินข้อมูล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A comprehensive catalog identifying what data assets an organization holds, where they reside, their classification, and how they flow.
- **Thai Explanation:** บัญชีรายการหรือเอกสารรวบรวมข้อมูลอย่างเป็นระบบ เพื่อระบุว่าองค์กรครอบครองข้อมูลประเภทใดบ้าง จัดเก็บอยู่ที่ใด มีระดับความสำคัญอย่างไร และมีการไหลเวียนของข้อมูลไปที่ใด
- **Exam Relevance & Strategy:** Foundational step in data governance and risk management: you cannot protect or maintain privacy over data if you do not know where it exists.
- **English Example:** *"The security team conducted a data inventory to locate unencrypted personal files stored across employee workstations."*
- **Thai Example:** *"ทีมความปลอดภัยได้จัดทำบัญชีรายการข้อมูลเพื่อค้นหาไฟล์ข้อมูลส่วนบุคคลที่ไม่ได้เข้ารหัสซึ่งกระจัดกระจายอยู่ตามเครื่องของพนักงาน"*
- **Confused With:** Asset Inventory, Data Retention
- **Keywords:** `Data catalog`, `Data mapping`, `Where data resides`, `Asset discovery`
- **Evidence Sources:** S18 (T@00:30:34)

---

#### `VOC-CC26-D1-034` — **Data Retention**
- **Thai Meaning (ความหมายภาษาไทย):** การเก็บรักษาข้อมูลตามระยะเวลาที่กำหนด
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The practice and organizational policy governing how long data must be stored for legal, operational, and regulatory reasons, and when it must be securely purged.
- **Thai Explanation:** นโยบายและแนวปฏิบัติขององค์กรที่กำหนดว่าต้องเก็บรักษาข้อมูลไว้นานเท่าใดเพื่อให้เป็นไปตามกฎหมายหรือวัตถุประสงค์ทางธุรกิจ และต้องทำลายทิ้งอย่างปลอดภัยเมื่อพ้นกำหนด
- **Exam Relevance & Strategy:** Holding data longer than necessary increases legal liability and breach impact. Policies must define both retention duration AND secure destruction methods.
- **English Example:** *"The data retention schedule requires customer service chat logs to be permanently sanitized after ninety days."*
- **Thai Example:** *"ตารางการเก็บรักษาข้อมูลกำหนดให้ต้องลบประวัติการสนทนากับลูกค้าทิ้งอย่างถาวรหลังจากครบกำหนดเก้าสิบวัน"*
- **Confused With:** Data Archiving, Data Inventory
- **Keywords:** `Retention schedule`, `Purge`, `Data lifecycle`, `Storage duration`
- **Evidence Sources:** S18 (T@00:30:34)

---

#### `VOC-CC26-D1-035` — **Right to Be Forgotten**
- **Thai Meaning (ความหมายภาษาไทย):** สิทธิในการขอให้ลบข้อมูลส่วนบุคคล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A privacy principle granting individuals the legal right to request the erasure of their personal data under specific conditions.
- **Thai Explanation:** หลักการด้านความเป็นส่วนตัวที่ให้สิทธิแก่เจ้าของข้อมูลในการร้องขอให้ผู้ควบคุมข้อมูลลบหรือทำลายข้อมูลส่วนบุคคลของตนเมื่อไม่มีความจำเป็นต้องใช้งานอีกต่อไป
- **Exam Relevance & Strategy:** Also known as the Right to Erasure in GDPR. Subject to lawful exceptions (e.g. legal compliance, public health, or contractual defense).
- **English Example:** *"Under the right to be forgotten, a former client submitted a request to delete all marketing tracking profiles."*
- **Thai Example:** *"ภายใต้สิทธิในการขอให้ลบข้อมูล อดีตลูกค้าได้ยื่นคำร้องขอให้ลบประวัติข้อมูลการตลาดทั้งหมดที่ติดตามตนเอง"*
- **Confused With:** Data Portability, Opt-out
- **Keywords:** `Right to Erasure`, `Data deletion`, `GDPR`, `Privacy rights`
- **Evidence Sources:** S19 (T@00:31:18)

---

#### `VOC-CC26-D1-100` — **Unauthorized Access**
- **Thai Meaning (ความหมายภาษาไทย):** การเข้าถึงโดยไม่ได้รับอนุญาต
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** The entry, connection, or viewing of resources, data, or systems without proper authorization or by bypassing security permissions.
- **Thai Explanation:** การเข้าใช้งาน การเชื่อมต่อ หรือการดูข้อมูลในระบบโดยไม่มีสิทธิ์ หรือโดยการเจาะผ่านระบบรักษาความปลอดภัย
- **Exam Relevance & Strategy:** Core security violation. Often the central problem in exam question stems testing Confidentiality, Authentication, or Authorization.
- **English Example:** *"The firewall successfully prevented unauthorized access to internal database servers."*
- **Thai Example:** *"ไฟร์วอลล์สามารถป้องกันการเข้าถึงฐานข้อมูลภายในโดยไม่ได้รับอนุญาตได้สำเร็จ"*
- **Confused With:** Authorized Access
- **Keywords:** `Security breach`, `Intrusion`, `Access violation`
- **Evidence Sources:** S05 (T@00:06:42)

---

#### `VOC-CC26-D1-109` — **Audit Trail / Logging**
- **Thai Meaning (ความหมายภาษาไทย):** เส้นทางการตรวจสอบ / บันทึกประวัติระบบ
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** A secure, chronological, tamper-evident record that documents system events, user logins, data access, and transactions to enable forensic tracing.
- **Thai Explanation:** บันทึกประวัติการทำงานของระบบที่เรียงตามลำดับเวลาและได้รับการปกป้องไม่ให้ถูกแก้ไข ซึ่งบันทึกเหตุการณ์ การเข้าสู่ระบบ การเข้าถึงข้อมูล และการทำธุรกรรม เพื่อใช้เป็นหลักฐานในการตรวจสอบย้อนหลัง
- **Exam Relevance & Strategy:** Primary mechanism for Accounting. Essential for post-incident root-cause analysis, regulatory audits, and non-repudiation.
- **English Example:** *"The security investigator reviewed the audit trail to discover which user account downloaded confidential client files."*
- **Thai Example:** *"เจ้าหน้าที่ตรวจสอบความปลอดภัยได้ตรวจสอบเส้นทางการตรวจสอบ (Audit trail) เพื่อค้นหาว่าบัญชีผู้ใช้ใดเป็นผู้ดาวน์โหลดไฟล์ลับของลูกค้า"*
- **Confused With:** Log File, Accounting Log
- **Keywords:** `Chronological record`, `Forensics`, `Accountability`, `System trace`
- **Evidence Sources:** S12 (T@00:20:20)

---

### Objective 1.2: Risk Management Concepts (Lifecycle, Assessment, Treatments, Metrics) (25 entries)

#### `VOC-CC26-D1-036` — **Risk Management**
- **Thai Meaning (ความหมายภาษาไทย):** การบริหารจัดการความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A continuous, iterative process of identifying, assessing, responding to, and monitoring risks to organizational assets and objectives.
- **Thai Explanation:** กระบวนการต่อเนื่องในการระบุ ประเมิน ตอบสนอง และติดตามตรวจสอบความเสี่ยงต่อทรัพย์สินและเป้าหมายขององค์กรให้อยู่ในระดับที่ยอมรับได้
- **Exam Relevance & Strategy:** Central exam theme: Risk management is never a one-time project; it is an ongoing cycle that supports organizational decision-making and resource allocation.
- **English Example:** *"The CISO instituted an enterprise risk management program to balance security safeguards with business innovation."*
- **Thai Example:** *"ผู้บริหารความปลอดภัยสารสนเทศได้นำโครงการบริหารจัดการความเสี่ยงระดับองค์กรมาใช้เพื่อสร้างสมดุลระหว่างการป้องกันและนวัตกรรมทางธุรกิจ"*
- **Confused With:** Risk Assessment, Vulnerability Management
- **Keywords:** `Lifecycle`, `Continuous process`, `Identify`, `Assess`, `Respond`, `Monitor`
- **Evidence Sources:** S20 (T@00:32:07)

---

#### `VOC-CC26-D1-037` — **Asset**
- **Thai Meaning (ความหมายภาษาไทย):** ทรัพย์สินขององค์กร
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** Anything of value to an organization that requires protection, including hardware, software, data, intellectual property, facilities, and personnel.
- **Thai Explanation:** สิ่งใดๆ ที่มีคุณค่าต่อองค์กรและจำเป็นต้องได้รับการปกป้องดูแล รวมถึงฮาร์ดแวร์ ซอฟต์แวร์ ฐานข้อมูล ทรัพย์สินทางปัญญา อาคารสถานที่ และบุคลากร
- **Exam Relevance & Strategy:** The starting anchor of risk management: Risk only exists when there is an asset that could be harmed. Valuation of assets dictates appropriate security expenditures.
- **English Example:** *"The primary asset identified in the assessment was the proprietary customer billing database."*
- **Thai Example:** *"ทรัพย์สินหลักที่ถูกระบุในการประเมินความเสี่ยงคือฐานข้อมูลการเรียกเก็บเงินของลูกค้าซึ่งเป็นความลับทางการค้า"*
- **Confused With:** Threat, Vulnerability
- **Keywords:** `Valuable resource`, `Hardware`, `Data asset`, `What needs protection`
- **Evidence Sources:** S21 (T@00:32:51)

---

#### `VOC-CC26-D1-038` — **Threat**
- **Thai Meaning (ความหมายภาษาไทย):** ภัยคุกคาม
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** Any circumstance or potential event with the potential to cause harm to an asset by exploiting a vulnerability.
- **Thai Explanation:** สภาวการณ์ เหตุการณ์ หรือบุคคลใดๆ ที่อาจก่อให้เกิดอันตรายหรือสร้างความเสียหายต่อทรัพย์สิน โดยการเจาะผ่านช่องโหว่ของระบบ
- **Exam Relevance & Strategy:** Crucial exam distinction: Threat = what could cause harm (e.g. ransomware, natural disaster, malicious insider). Vulnerability = the internal flaw (e.g. unpatched operating system).
- **English Example:** *"Ransomware operators scanning for exposed remote desktop ports represent an active external threat."*
- **Thai Example:** *"กลุ่มผู้ปล่อยมัลแวร์เรียกค่าไถ่ที่กำลังสแกนหาพอร์ต Remote Desktop ที่เปิดทิ้งไว้ ถือเป็นภัยคุกคามภายนอกที่มีความเคลื่อนไหว"*
- **Confused With:** Vulnerability, Risk, Impact
- **Keywords:** `Threat actor`, `Harm`, `Ransomware`, `External danger`, `Adversary`
- **Evidence Sources:** S21 (T@00:33:37)

---

#### `VOC-CC26-D1-039` — **Vulnerability**
- **Thai Meaning (ความหมายภาษาไทย):** ช่องโหว่
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A weakness, flaw, or deficiency in security procedures, design, implementation, or internal controls that could be exploited by a threat.
- **Thai Explanation:** จุดอ่อน ข้อบกพร่อง หรือความผิดพลาดในระบบ ซอฟต์แวร์ ฮาร์ดแวร์ กระบวนการ หรือมาตรการควบคุมความปลอดภัย ที่อาจถูกภัยคุกคามนำไปใช้ประโยชน์ในการโจมตี
- **Exam Relevance & Strategy:** Without a vulnerability, a threat cannot easily cause harm. Without a threat, a vulnerability presents no active risk. Examples: unpatched software, weak passwords, missing door locks.
- **English Example:** *"An unpatched web server vulnerability allowed attackers to execute remote administrative commands."*
- **Thai Example:** *"ช่องโหว่บนเว็บเซิร์ฟเวอร์ที่ยังไม่ได้ติดตั้งแพตช์เปิดโอกาสให้ผู้โจมตีสามารถสั่งรันคำสั่งของผู้ดูแลระบบจากระยะไกลได้"*
- **Confused With:** Threat, Exploit, Risk
- **Keywords:** `Weakness`, `Flaw`, `Unpatched`, `Deficiency`, `Security hole`
- **Evidence Sources:** S21 (T@00:34:18)

---

#### `VOC-CC26-D1-040` — **Potential Impact**
- **Thai Meaning (ความหมายภาษาไทย):** ผลกระทบที่อาจเกิดขึ้น
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The magnitude of loss, damage, or adverse outcome experienced by an organization if a risk event occurs.
- **Thai Explanation:** ขนาดของความเสียหาย ความสูญเสีย หรือผลลบที่องค์กรจะได้รับหากเหตุการณ์ความเสี่ยงนั้นเกิดขึ้นจริง ไม่ว่าจะเป็นความเสียหายทางการเงิน ชื่อเสียง หรือกฎหมาย
- **Exam Relevance & Strategy:** One of the two primary variables in calculating risk (Risk = Likelihood × Impact). Impact can be quantified in monetary loss, downtime hours, or qualitative ratings.
- **English Example:** *"A breach of financial records would result in severe regulatory fines, representing a critical potential impact."*
- **Thai Example:** *"การรั่วไหลของข้อมูลทางการเงินจะส่งผลให้ถูกปรับทางกฎหมายอย่างหนัก ซึ่งแสดงถึงผลกระทบที่อาจเกิดขึ้นในระดับรุนแรง"*
- **Confused With:** Likelihood, Risk
- **Keywords:** `Magnitude of loss`, `Consequence`, `Severity`, `Damage assessment`
- **Evidence Sources:** S21 (T@00:35:02)

---

#### `VOC-CC26-D1-041` — **Likelihood**
- **Thai Meaning (ความหมายภาษาไทย):** ความเป็นไปได้ที่จะเกิดเหตุการณ์
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The probability, frequency, or chance that a given threat will successfully exploit a vulnerability.
- **Thai Explanation:** โอกาส ความถี่ หรือความเป็นไปได้ที่ภัยคุกคามจะสามารถเจาะผ่านช่องโหว่ของระบบและทำให้เกิดเหตุการณ์ความเสียหายขึ้นได้จริง
- **Exam Relevance & Strategy:** The second key variable in risk assessment. Even if impact is high, if likelihood is nearly impossible, the overall risk rating may be moderate.
- **English Example:** *"Placing the server behind an intrusion prevention system reduced the likelihood of a successful automated attack."*
- **Thai Example:** *"การติดตั้งระบบป้องกันการบุกรุกช่วยลดความเป็นไปได้ที่การโจมตีอัตโนมัติจะประสบความสำเร็จ"*
- **Confused With:** Impact, Rate of Occurrence
- **Keywords:** `Probability`, `Chance`, `Frequency`, `Risk factor`
- **Evidence Sources:** S28 (T@00:35:02)

---

#### `VOC-CC26-D1-042` — **Risk Assessment**
- **Thai Meaning (ความหมายภาษาไทย):** การประเมินความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The overall process of identifying, analyzing, and evaluating risks to determine their severity and prioritize treatments.
- **Thai Explanation:** กระบวนการรวบรวม วิเคราะห์ และประเมินความเสี่ยงเพื่อจัดลำดับความสำคัญและกำหนดมาตรการตอบสนองที่เหมาะสม
- **Exam Relevance & Strategy:** Divided into Qualitative and Quantitative methodologies. Conducted before selecting risk treatment options.
- **English Example:** *"The annual risk assessment highlighted outdated database servers as the top priority requiring remediation."*
- **Thai Example:** *"การประเมินความเสี่ยงประจำปีชี้ให้เห็นว่าเซิร์ฟเวอร์ฐานข้อมูลที่ล้าสมัยเป็นความเสี่ยงลำดับแรกที่ต้องเร่งแก้ไข"*
- **Confused With:** Risk Identification, Vulnerability Assessment
- **Keywords:** `Evaluation`, `Risk analysis`, `Severity ranking`, `Prioritization`
- **Evidence Sources:** Transcript (T@00:35:02)

---

#### `VOC-CC26-D1-043` — **Qualitative Risk Analysis**
- **Thai Meaning (ความหมายภาษาไทย):** การวิเคราะห์ความเสี่ยงเชิงคุณภาพ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A risk evaluation methodology that rates likelihood and impact using descriptive scales such as Low, Medium, and High based on expert judgment and brainstorming.
- **Thai Explanation:** วิธีการวิเคราะห์ความเสี่ยงที่อาศัยดุลยพินิจของผู้เชี่ยวชาญและการระดมสมอง เพื่อจัดระดับความเสี่ยงเป็นคำอธิบาย เช่น ต่ำ (Low), ปานกลาง (Medium), สูง (High) โดยไม่ใช้สูตรคำนวณตัวเลขทางการเงิน
- **Exam Relevance & Strategy:** Faster, subjective, and cost-effective. Excellent for initial screening and prioritization. Contrast with Quantitative analysis.
- **English Example:** *"The committee used qualitative risk analysis to rank vulnerabilities on a high, medium, and low severity matrix."*
- **Thai Example:** *"คณะกรรมการใช้วิธีการวิเคราะห์ความเสี่ยงเชิงคุณภาพในการจัดลำดับความรุนแรงของช่องโหว่เป็น สูง ปานกลาง และต่ำ"*
- **Confused With:** Quantitative Risk Analysis
- **Keywords:** `Subjective`, `Descriptive ranking`, `Low/Medium/High`, `Brainstorming`, `Risk matrix`
- **Evidence Sources:** Transcript (T@00:35:44)

---

#### `VOC-CC26-D1-044` — **Quantitative Risk Analysis**
- **Thai Meaning (ความหมายภาษาไทย):** การวิเคราะห์ความเสี่ยงเชิงปริมาณ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A numerical risk analysis methodology that assigns monetary values and statistical percentages to evaluate potential financial loss from risk events.
- **Thai Explanation:** วิธีการวิเคราะห์ความเสี่ยงที่ใช้ตัวเลขสถิติและมูลค่าทางการเงินในการคำนวณความสูญเสียที่อาจเกิดขึ้น เช่น การคำนวณค่า SLE และ ALE
- **Exam Relevance & Strategy:** Objective and numbers-based, but requires reliable historical data and is more time-consuming. Supports cost-benefit analysis for security investments.
- **English Example:** *"By performing quantitative risk analysis, management determined that purchasing a $15,000 firewall would offset a $50,000 projected annual loss."*
- **Thai Example:** *"การวิเคราะห์ความเสี่ยงเชิงปริมาณช่วยให้ผู้บริหารคำนวณได้ว่าการซื้อไฟร์วอลล์ราคา 15,000 ดอลลาร์จะคุ้มค่าต่อการลดความสูญเสียที่คาดการณ์ไว้ปีละ 50,000 ดอลลาร์"*
- **Confused With:** Qualitative Risk Analysis
- **Keywords:** `Monetary valuation`, `Formulas`, `SLE`, `ALE`, `Cost-benefit analysis`
- **Evidence Sources:** S23 (T@00:35:44)

---

#### `VOC-CC26-D1-045` — **Asset Value (AV)** [**AV** — *Asset Value*]
- **Thai Meaning (ความหมายภาษาไทย):** มูลค่าของทรัพย์สิน
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** The total monetary worth assigned to an asset, encompassing acquisition cost, operational importance, and replacement expense.
- **Thai Explanation:** มูลค่าทางการเงินที่ประเมินให้แก่ทรัพย์สิน ซึ่งรวมถึงค่าใช้จ่ายในการจัดซื้อจัดหา ความสำคัญต่อการดำเนินงาน และต้นทุนในการทดแทน
- **Exam Relevance & Strategy:** Input variable used in calculating Single Loss Expectancy (SLE = AV × EF).
- **English Example:** *"The company determined the asset value of the ecommerce server cluster to be $100,000."*
- **Thai Example:** *"บริษัทประเมินมูลค่าทรัพย์สินของกลุ่มเซิร์ฟเวอร์อีคอมเมิร์ซไว้ที่ 100,000 ดอลลาร์"*
- **Confused With:** Single Loss Expectancy
- **Keywords:** `Monetary worth`, `Valuation`, `Base value`, `SLE formula component`
- **Evidence Sources:** S23 (T@00:37:13)

---

#### `VOC-CC26-D1-046` — **Exposure Factor (EF)** [**EF** — *Exposure Factor*]
- **Thai Meaning (ความหมายภาษาไทย):** สัดส่วนความเสียหายที่คาดว่าจะเกิดขึ้น
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** The percentage of an asset's total value expected to be lost or damaged in a single realized risk event.
- **Thai Explanation:** ร้อยละหรือสัดส่วนของมูลค่าทรัพย์สินที่คาดว่าจะได้รับความเสียหายหรือสูญเสียไป หากเกิดเหตุการณ์ความเสี่ยงนั้นขึ้นหนึ่งครั้ง
- **Exam Relevance & Strategy:** Expressed as a percentage (e.g. 50% = 0.5). Used to compute Single Loss Expectancy (SLE = AV × EF).
- **English Example:** *"A flood would damage half of the ground-floor servers, representing an exposure factor of 50%."*
- **Thai Example:** *"เหตุน้ำท่วมจะสร้างความเสียหายแก่เซิร์ฟเวอร์ชั้นล่างครึ่งหนึ่ง คิดเป็นสัดส่วนความเสียหาย (EF) เท่ากับ 50%"*
- **Confused With:** Annualized Rate of Occurrence
- **Keywords:** `Percentage loss`, `Damage ratio`, `SLE formula component`
- **Evidence Sources:** S23 (T@00:37:59)

---

#### `VOC-CC26-D1-047` — **Single Loss Expectancy (SLE)** [**SLE** — *Single Loss Expectancy*]
- **Thai Meaning (ความหมายภาษาไทย):** มูลค่าความเสียหายที่คาดว่าจะเกิดขึ้นต่อหนึ่งเหตุการณ์
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** The estimated monetary loss resulting from a single occurrence of a specific risk event, calculated as Asset Value multiplied by Exposure Factor (SLE = AV × EF).
- **Thai Explanation:** มูลค่าความเสียหายทางการเงินที่คาดว่าจะเกิดขึ้นต่อการเกิดเหตุการณ์ความเสี่ยงหนึ่งครั้ง คำนวณจากมูลค่าทรัพย์สินคูณด้วยสัดส่วนความเสียหาย (SLE = AV × EF)
- **Exam Relevance & Strategy:** Represents cost per single incident, NOT per year. Note: Disputed textbook calculation details in lecture examples are flagged under SQ-04.
- **English Example:** *"If a server worth $10,000 suffers a 50% exposure factor during a power surge, the SLE is $5,000."*
- **Thai Example:** *"หากเซิร์ฟเวอร์ราคา 10,000 ดอลลาร์มีสัดส่วนความเสียหาย 50% เมื่อเกิดไฟกระชาก ค่า SLE จะเท่ากับ 5,000 ดอลลาร์"*
- **Confused With:** Annualized Loss Expectancy
- **Keywords:** `Cost per event`, `Formula SLE = AV * EF`, `Quantitative metric`
- **Evidence Sources:** S23 (T@00:37:59)

---

#### `VOC-CC26-D1-048` — **Annualized Rate of Occurrence (ARO)** [**ARO** — *Annualized Rate of Occurrence*]
- **Thai Meaning (ความหมายภาษาไทย):** อัตราความถี่ที่คาดว่าจะเกิดเหตุการณ์ในหนึ่งปี
- **Category:** `acronym` | **Status:** `review_required`
- **English Definition:** The estimated frequency or number of times a particular risk event is projected to occur within a one-year period.
- **Thai Explanation:** จำนวนครั้งหรืออัตราความถี่ที่คาดว่าเหตุการณ์ความเสี่ยงหนึ่งๆ จะเกิดขึ้นภายในระยะเวลาหนึ่งปี เช่น หากเกิดขึ้นทุก 5 ปี ARO = 0.2 หากเกิดปีละ 2 ครั้ง ARO = 2
- **Exam Relevance & Strategy:** Unit is frequency per year (not currency). Discrepancy noted in course slides (SQ-04 where once every 5 years was noted as 0.2 vs transcript mentioning 2).
- **English Example:** *"A storm event expected once every five years has an annualized rate of occurrence of 0.2."*
- **Thai Example:** *"พายุที่คาดว่าจะเกิดขึ้นเฉลี่ยทุกๆ ห้าปี จะมีอัตราความถี่ต่อปี (ARO) เท่ากับ 0.2"*
- **Confused With:** Exposure Factor
- **Keywords:** `Frequency per year`, `Event probability`, `ALE formula component`
- **Evidence Sources:** S23 (T@00:38:53)

---

#### `VOC-CC26-D1-049` — **Annualized Loss Expectancy (ALE)** [**ALE** — *Annualized Loss Expectancy*]
- **Thai Meaning (ความหมายภาษาไทย):** มูลค่าความเสียหายรวมที่คาดว่าจะเกิดขึ้นในหนึ่งปี
- **Category:** `acronym` | **Status:** `review_required`
- **English Definition:** The projected monetary loss an organization expects to incur from a specific risk over the course of an entire year, calculated as SLE multiplied by ARO (ALE = SLE × ARO).
- **Thai Explanation:** มูลค่าความสูญเสียทางการเงินรวมที่คาดว่าจะเกิดขึ้นจากความเสี่ยงนั้นๆ ตลอดระยะเวลาหนึ่งปี คำนวณจาก SLE คูณด้วย ARO (ALE = SLE × ARO)
- **Exam Relevance & Strategy:** Primary financial metric for justifying security control costs. If a control costs more than the ALE, implementing it is financially unjustified.
- **English Example:** *"With an SLE of $5,000 and an ARO of 2, the calculated Annualized Loss Expectancy is $10,000."*
- **Thai Example:** *"เมื่อค่า SLE เท่ากับ 5,000 ดอลลาร์ และค่า ARO เท่ากับ 2 มูลค่าความเสียหายรวมต่อปี (ALE) จะเท่ากับ 10,000 ดอลลาร์"*
- **Confused With:** Single Loss Expectancy
- **Keywords:** `Annual projected loss`, `Formula ALE = SLE * ARO`, `Security budgeting`
- **Evidence Sources:** S24 (T@00:39:45)

---

#### `VOC-CC26-D1-050` — **Risk Treatment (Risk Response)**
- **Thai Meaning (ความหมายภาษาไทย):** การตอบสนองต่อความเสี่ยง / การจัดการความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The stage in risk management where an organization selects and executes a strategy to handle identified risks among four options: Transfer, Accept, Avoid, or Mitigate.
- **Thai Explanation:** ขั้นตอนในกระบวนการบริหารความเสี่ยงที่องค์กรเลือกและดำเนินการตามกลยุทธ์ที่เหมาะสมกับความเสี่ยงนั้นๆ ซึ่งประกอบด้วย 4 ทางเลือกหลัก ได้แก่ การโอนย้าย (Transfer), การยอมรับ (Accept), การหลีกเลี่ยง (Avoid), และการบรรเทา (Mitigate)
- **Exam Relevance & Strategy:** Heavily tested. Candidates must analyze a scenario and identify which of the four treatment strategies is being applied.
- **English Example:** *"Management reviewed the assessment report to determine the most cost-effective risk treatment for each threat."*
- **Thai Example:** *"ฝ่ายบริหารได้ทบทวนรายงานการประเมินเพื่อเลือกกลยุทธ์การตอบสนองต่อความเสี่ยงที่คุ้มค่าที่สุดสำหรับแต่ละภัยคุกคาม"*
- **Confused With:** Risk Identification, Risk Assessment
- **Keywords:** `Treatment strategy`, `Transfer`, `Accept`, `Avoid`, `Mitigate`
- **Evidence Sources:** S25 (T@00:40:30)

---

#### `VOC-CC26-D1-051` — **Risk Transfer**
- **Thai Meaning (ความหมายภาษาไทย):** การโอนย้ายความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A risk response strategy that shifts the financial or operational impact of a risk to a third party, typically through cyber insurance, warranties, or outsourcing contracts.
- **Thai Explanation:** กลยุทธ์การตอบสนองต่อความเสี่ยงโดยการส่งผ่านหรือแบ่งเบาผลกระทบทางการเงินหรือการดำเนินงานไปยังบุคคลภายนอก เช่น การทำประกันภัยไซเบอร์ หรือการจ้างผู้ให้บริการภายนอก
- **Exam Relevance & Strategy:** Purchasing insurance or outsourcing is the classic indicator of Risk Transfer. Critical exam caveat (SQ-07): Transferring financial risk does NOT absolve the organization of legal or reputational accountability.
- **English Example:** *"Purchasing a comprehensive cyber liability insurance policy is a textbook example of risk transfer."*
- **Thai Example:** *"การซื้อกรมธรรม์ประกันภัยความรับผิดชอบทางไซเบอร์เป็นตัวอย่างคลาสสิกของการโอนย้ายความเสี่ยง"*
- **Confused With:** Risk Avoidance, Risk Mitigation
- **Keywords:** `Insurance`, `Third party`, `Outsourcing`, `Financial shift`, `Warranty`
- **Evidence Sources:** S25 (T@00:40:30)

---

#### `VOC-CC26-D1-052` — **Risk Acceptance**
- **Thai Meaning (ความหมายภาษาไทย):** การยอมรับความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A conscious risk response decision to acknowledge a risk and take no additional protective action because the cost of mitigation exceeds the potential impact, or the risk falls within tolerance.
- **Thai Explanation:** การตัดสินใจอย่างมีสติที่จะรับรู้และยอมรับผลที่อาจเกิดขึ้นจากความเสี่ยงโดยไม่ดำเนินมาตรการป้องกันเพิ่มเติม เนื่องจากต้นทุนในการป้องกันสูงกว่าความเสียหาย หรือความเสี่ยงนั้นอยู่ในเกณฑ์ที่ยอมรับได้
- **Exam Relevance & Strategy:** Acceptance does NOT mean ignoring a risk or failing to discover it. An accepted risk must still be documented in the risk register and continually monitored.
- **English Example:** *"Because replacing legacy barcode scanners would cost $50,000 to prevent a $500 potential loss, leadership formally chose risk acceptance."*
- **Thai Example:** *"เนื่องจากการเปลี่ยนเครื่องอ่านบาร์โค้ดรุ่นเก่าต้องใช้เงิน 50,000 ดอลลาร์เพื่อป้องกันความเสียหายเพียง 500 ดอลลาร์ ผู้บริหารจึงเลือกการยอมรับความเสี่ยงอย่างเป็นทางการ"*
- **Confused With:** Ignoring Risk, Risk Avoidance
- **Keywords:** `Acknowledge`, `Tolerance level`, `Cost exceeds impact`, `No additional action`
- **Evidence Sources:** S26 (T@00:41:59)

---

#### `VOC-CC26-D1-053` — **Risk Avoidance**
- **Thai Meaning (ความหมายภาษาไทย):** การหลีกเลี่ยงความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A risk response strategy that eliminates exposure to a risk by completely discontinuing the high-risk activity, process, or asset.
- **Thai Explanation:** กลยุทธ์การตอบสนองต่อความเสี่ยงโดยการยกเลิก ยุติ หรือไม่เข้าร่วมในกิจกรรม กระบวนการ หรือเทคโนโลยีที่มีความเสี่ยงสูงนั้นอย่างสิ้นเชิง เพื่อตัดโอกาสเกิดความเสี่ยงให้เป็นศูนย์
- **Exam Relevance & Strategy:** Key indicator: canceling a project, exiting a market, or refusing to deploy a risky feature. Contrast with Mitigation (where you continue the activity but add controls).
- **English Example:** *"The bank avoided high regulatory risks by deciding not to launch a cryptocurrency trading service."*
- **Thai Example:** *"ธนาคารหลีกเลี่ยงความเสี่ยงด้านกฎระเบียบที่รุนแรงโดยตัดสินใจไม่เปิดให้บริการซื้อขายคริปโทเคอร์เรนซี"*
- **Confused With:** Risk Mitigation, Risk Acceptance
- **Keywords:** `Discontinue activity`, `Cancel project`, `Eliminate exposure`, `Exit process`
- **Evidence Sources:** S27 (T@00:43:30)

---

#### `VOC-CC26-D1-054` — **Risk Mitigation**
- **Thai Meaning (ความหมายภาษาไทย):** การบรรเทาหรือลดความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A risk response strategy that implements security controls and countermeasures to reduce the likelihood, impact, or both, bringing risk down to an acceptable level.
- **Thai Explanation:** กลยุทธ์การตอบสนองต่อความเสี่ยงโดยการติดตั้งมาตรการควบคุมความปลอดภัย เพื่อลดโอกาสเกิดผลกระทบ หรือลดความรุนแรงของความเสียหาย ให้อยู่ในระดับที่องค์กรยอมรับได้
- **Exam Relevance & Strategy:** The most common response in cybersecurity operations. Controls like firewalls, patching, MFA, and employee training represent mitigation. Mitigation reduces risk but rarely eliminates it completely.
- **English Example:** *"Deploying multi-factor authentication and endpoint antimalware mitigated the risk of unauthorized account access."*
- **Thai Example:** *"การติดตั้งระบบพิสูจน์ตัวตนหลายปัจจัยและโปรแกรมป้องกันมัลแวร์ช่วยบรรเทาความเสี่ยงจากการเข้าถึงบัญชีโดยไม่ได้รับอนุญาต"*
- **Confused With:** Risk Avoidance, Risk Elimination
- **Keywords:** `Implement controls`, `Reduce likelihood/impact`, `Countermeasures`, `Remediation`
- **Evidence Sources:** S28 (T@00:44:08)

---

#### `VOC-CC26-D1-055` — **Risk Tolerance**
- **Thai Meaning (ความหมายภาษาไทย):** ระดับความเสี่ยงที่องค์กรยอมรับได้
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The acceptable level of variation in performance or loss that an organization is willing to endure in pursuit of its objectives.
- **Thai Explanation:** ระดับความผันผวนหรือความสูญเสียสูงสุดที่องค์กรยินยอมรับได้ในการดำเนินงานเพื่อให้บรรลุเป้าหมายทางธุรกิจ
- **Exam Relevance & Strategy:** Dictates whether a risk must be mitigated or can be accepted. Closely linked to management oversight.
- **English Example:** *"Because the expected loss fell well within executive risk tolerance, the project proceeded without additional firewalls."*
- **Thai Example:** *"เนื่องจากความเสียหายที่คาดการณ์ไว้อยู่ในเกณฑ์ความเสี่ยงที่ยอมรับได้ของผู้บริหาร โครงการจึงดำเนินต่อไปโดยไม่ต้องเพิ่มไฟร์วอลล์"*
- **Confused With:** Risk Appetite, Risk Threshold
- **Keywords:** `Acceptable boundary`, `Threshold`, `Variance limit`, `Executive threshold`
- **Evidence Sources:** S26 (T@00:42:42)

---

#### `VOC-CC26-D1-056` — **Risk Monitoring and Review**
- **Thai Meaning (ความหมายภาษาไทย):** การติดตามและทบทวนความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The ongoing phase of the risk lifecycle that tracks existing risks, checks control effectiveness, and reassesses hazards when internal or external conditions change.
- **Thai Explanation:** ขั้นตอนต่อเนื่องในวงจรความเสี่ยงที่คอยติดตามสถานะของความเสี่ยงเดิม ตรวจสอบประสิทธิภาพของมาตรการควบคุม และประเมินความเสี่ยงใหม่เมื่อบริบทหรือเทคโนโลยีเปลี่ยนแปลงไป
- **Exam Relevance & Strategy:** Re-evaluates previously accepted risks. Exam questions emphasize that risk management is cyclical and requires continuous monitoring, not a set-and-forget attitude.
- **English Example:** *"Deploying a major software upgrade triggered an immediate risk review to identify newly introduced vulnerabilities."*
- **Thai Example:** *"การอัปเกรดซอฟต์แวร์ครั้งใหญ่เป็นตัวกระตุ้นให้ต้องมีการทบทวนความเสี่ยงทันทีเพื่อตรวจหาช่องโหว่ใหม่ๆ"*
- **Confused With:** Risk Reporting, Security Auditing
- **Keywords:** `Continuous oversight`, `Reassessment`, `Triggers`, `Control effectiveness`
- **Evidence Sources:** S29 (T@00:44:51)

---

#### `VOC-CC26-D1-057` — **Risk Communication and Reporting**
- **Thai Meaning (ความหมายภาษาไทย):** การสื่อสารและรายงานสถานะความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The systematic dissemination of risk assessment findings, treatment progress, and risk posture to internal and external stakeholders to enable informed governance decisions.
- **Thai Explanation:** การนำเสนอและสื่อสารข้อมูลผลการประเมินความเสี่ยง ความคืบหน้าในการแก้ไข และสถานะความเสี่ยงขององค์กรให้แก่ผู้มีส่วนได้ส่วนเสีย เพื่อสนับสนุนการตัดสินใจอย่างถูกต้อง
- **Exam Relevance & Strategy:** Essential for governance. Provides management with the necessary facts to prioritize cybersecurity budget and human resources.
- **English Example:** *"The security director prepared an executive risk report for the board of directors prior to annual budget planning."*
- **Thai Example:** *"ผู้อำนวยการฝ่ายความปลอดภัยได้จัดทำรายงานความเสี่ยงระดับบริหารเพื่อเสนอต่อคณะกรรมการบริษัทก่อนการวางแผนงบประมาณประจำปี"*
- **Confused With:** Incident Reporting, Compliance Filing
- **Keywords:** `Executive briefing`, `Stakeholder reporting`, `Risk posture`, `Resource prioritization`
- **Evidence Sources:** S30 (T@00:45:32)

---

#### `VOC-CC26-D1-101` — **Security Breach**
- **Thai Meaning (ความหมายภาษาไทย):** การละเมิดความปลอดภัย / การรั่วไหลของข้อมูล
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** An incident that leads to the confirmed unauthorized access, disclosure, alteration, or destruction of sensitive or confidential information.
- **Thai Explanation:** เหตุการณ์ด้านความมั่นคงปลอดภัยที่มีการยืนยันแล้วว่า ข้อมูลสำคัญหรือข้อมูลลับถูกเข้าถึง เปิดเผย แก้ไข หรือทำลายโดยบุคคลที่ไม่มีสิทธิ์
- **Exam Relevance & Strategy:** Represents realized high-impact incidents. Distinct from a security event (observable occurrence) or incident (possible compromise).
- **English Example:** *"The company reported a major security breach after customer financial records were leaked online."*
- **Thai Example:** *"บริษัทได้รายงานเหตุการณ์การละเมิดความปลอดภัยครั้งใหญ่หลังจากข้อมูลทางการเงินของลูกค้าถูกปล่อยรั่วไหลบนอินเทอร์เน็ต"*
- **Confused With:** Security Event, Security Incident
- **Keywords:** `Data breach`, `Compromise`, `Confirmed incident`, `Data leak`
- **Evidence Sources:** S21 (T@00:34:18)

---

#### `VOC-CC26-D1-102` — **Mitigate**
- **Thai Meaning (ความหมายภาษาไทย):** บรรเทา / ผ่อนคลายความเสี่ยง
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** To make less severe, harmful, or painful; in cybersecurity, taking concrete actions to lessen risk likelihood or damage.
- **Thai Explanation:** การดำเนินการเพื่อลดความรุนแรง อันตราย หรือโอกาสเกิดความเสียหายของความเสี่ยงให้น้อยลง
- **Exam Relevance & Strategy:** Primary operational verb for risk reduction. Whenever controls are implemented, the action being taken is mitigation.
- **English Example:** *"The IT department patched all vulnerable endpoints to mitigate the threat of malware infections."*
- **Thai Example:** *"ฝ่ายไอทีได้ลงแพตช์บนเครื่องลูกข่ายที่มีช่องโหว่ทั้งหมดเพื่อบรรเทาภัยคุกคามจากการติดมัลแวร์"*
- **Confused With:** Eliminate, Avoid
- **Keywords:** `Lessen`, `Reduce risk`, `Remediate`, `Countermeasure`
- **Evidence Sources:** S28 (T@00:44:08)

---

#### `VOC-CC26-D1-105` — **Assess**
- **Thai Meaning (ความหมายภาษาไทย):** ประเมิน / ตรวจสอบวัดระดับ
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** To systematically evaluate the nature, quality, risk, or effectiveness of an asset, control, or security posture.
- **Thai Explanation:** การสำรวจและประเมินอย่างเป็นระบบเพื่อทำความเข้าใจระดับความเสี่ยง ประสิทธิภาพของมาตรการ หรือสถานะความปลอดภัย
- **Exam Relevance & Strategy:** Occurs before mitigation. You cannot manage or treat risks effectively until you assess their scope.
- **English Example:** *"Security analysts regularly assess network architecture to identify new attack vectors."*
- **Thai Example:** *"นักวิเคราะห์ความปลอดภัยประเมินสถาปัตยกรรมเครือข่ายอย่างสม่ำเสมอเพื่อตรวจหาช่องทางการโจมตีใหม่ๆ"*
- **Confused With:** Audit, Remediate
- **Keywords:** `Evaluate`, `Appraise`, `Analyze risk`, `Inspect posture`
- **Evidence Sources:** S20 (T@00:32:07)

---

### Objective 1.3: Governance Concepts (Laws, Regulations, Frameworks, Policies, Standards, Procedures) (16 entries)

#### `VOC-CC26-D1-058` — **Governance**
- **Thai Meaning (ความหมายภาษาไทย):** การกำกับดูแลกิจการ / ธรรมาภิบาลความปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The strategic leadership, organizational structures, and oversight processes by which executive management directs, controls, and holds an enterprise accountable for achieving business goals.
- **Thai Explanation:** กระบวนการชี้นำ ควบคุม และกำกับดูแลในระดับยุทธศาสตร์ของฝ่ายบริหาร เพื่อให้มั่นใจว่าการดำเนินงานด้านความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจ กฎหมาย และมีความรับผิดชอบที่โปร่งใส
- **Exam Relevance & Strategy:** Distinguish Governance (strategic direction, policies, and accountability set by the Board/Executives) from Operations (tactical day-to-day execution handled by technical teams).
- **English Example:** *"Corporate security governance ensures that technology investments directly support the company's regulatory and legal duties."*
- **Thai Example:** *"การกำกับดูแลความปลอดภัยขององค์กรช่วยให้มั่นใจว่าการลงทุนด้านเทคโนโลยีสอดคล้องกับหน้าที่ตามกฎหมายและข้อบังคับของบริษัท"*
- **Confused With:** Management, Compliance, Accounting
- **Keywords:** `Strategic oversight`, `Direction and control`, `Accountability`, `Executive leadership`
- **Evidence Sources:** S33 (T@00:46:10)

---

#### `VOC-CC26-D1-059` — **Compliance**
- **Thai Meaning (ความหมายภาษาไทย):** การปฏิบัติตามกฎหมายและข้อกำหนด
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The state of adhering to applicable governmental laws, industry regulations, contractual obligations, and internal corporate policies.
- **Thai Explanation:** สภาวะหรือการกระทำที่สอดคล้องและเป็นไปตามกฎหมายของรัฐ ข้อบังคับของหน่วยงานกำกับดูแล พันธะสัญญาทางธุรกิจ และนโยบายภายในขององค์กร
- **Exam Relevance & Strategy:** Exams frequently test: Compliance does not automatically guarantee total security, but non-compliance leads to severe legal penalties, lawsuits, and license revocation.
- **English Example:** *"The compliance audit verified that all employee access reviews adhered strictly to federal banking regulations."*
- **Thai Example:** *"การตรวจสอบความสอดคล้องยืนยันว่าการทบทวนสิทธิ์การเข้าถึงของพนักงานเป็นไปตามกฎระเบียบของธนาคารกลางอย่างเคร่งครัด"*
- **Confused With:** Governance, Security
- **Keywords:** `Adherence`, `Regulations`, `Legal duties`, `Audit`, `Mandatory compliance`
- **Evidence Sources:** S33 (T@00:46:59)

---

#### `VOC-CC26-D1-060` — **Law / Regulation**
- **Thai Meaning (ความหมายภาษาไทย):** กฎหมายและข้อบังคับ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** Legally enforceable rules and standards enacted by sovereign governments or regulatory bodies that organizations must obey under penalty of sanctions.
- **Thai Explanation:** กฎระเบียบและข้อบังคับที่มีผลบังคับใช้ตามกฎหมาย ซึ่งตราขึ้นโดยรัฐบาลหรือหน่วยงานกำกับดูแลของรัฐ โดยองค์กรมีหน้าที่ต้องปฏิบัติตาม มิฉะนั้นจะได้รับโทษตามกฎหมาย
- **Exam Relevance & Strategy:** Top of the hierarchy of governance artifacts. Internal policies can never lawfully violate or override applicable legislation.
- **English Example:** *"Data privacy regulations impose strict deadlines on corporations for notifying authorities of customer data breaches."*
- **Thai Example:** *"ข้อบังคับด้านการคุ้มครองข้อมูลส่วนบุคคลกำหนดกรอบเวลาที่เข้มงวดให้องค์กรต้องแจ้งเหตุการณ์ข้อมูลรั่วไหลต่อเจ้าหน้าที่"*
- **Confused With:** Standard, Guideline
- **Keywords:** `Legally enforceable`, `Government statute`, `Mandatory legal requirement`
- **Evidence Sources:** S34 (T@00:46:59)

---

#### `VOC-CC26-D1-061` — **General Data Protection Regulation (GDPR)** [**GDPR** — *General Data Protection Regulation*]
- **Thai Meaning (ความหมายภาษาไทย):** กฎหมายคุ้มครองข้อมูลส่วนบุคคลแห่งสหภาพยุโรป
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A comprehensive European Union regulation governing the collection, processing, storage, and transfer of personal data of EU residents.
- **Thai Explanation:** กฎหมายว่าด้วยการคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรปที่มีผลบังคับใช้ครอบคลุมองค์กรทั่วโลกที่มีการประมวลผลข้อมูลส่วนบุคคลของพลเมืองสหภาพยุโรป
- **Exam Relevance & Strategy:** Key example of a privacy law. Mentions concepts like Data Subject, Controller, Processor, and the Right to Erasure.
- **English Example:** *"A company based in Asia must still comply with the GDPR if it sells merchandise to residents in the European Union."*
- **Thai Example:** *"บริษัทที่ตั้งอยู่ในเอเชียยังคงต้องปฏิบัติตาม GDPR หากมีการจำหน่ายสินค้าให้แก่ผู้ที่พำนักอยู่ในสหภาพยุโรป"*
- **Confused With:** HIPAA, PCI DSS
- **Keywords:** `EU regulation`, `Privacy law`, `Extraterritorial scope`, `Data protection`
- **Evidence Sources:** S37 (T@00:48:26)

---

#### `VOC-CC26-D1-062` — **Health Insurance Portability and Accountability Act (HIPAA)** [**HIPAA** — *Health Insurance Portability and Accountability Act*]
- **Thai Meaning (ความหมายภาษาไทย):** กฎหมายคุ้มครองและควบคุมข้อมูลสุขภาพของสหรัฐอเมริกา
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A United States federal statute establishing national standards for the protection of individuals' protected health information (PHI).
- **Thai Explanation:** กฎหมายระดับประเทศของสหรัฐอเมริกาที่กำหนดมาตรฐานในการปกป้องและรักษาความปลอดภัยของข้อมูลสุขภาพส่วนบุคคล (PHI) ในสถานพยาบาลและบริษัทประกัน
- **Exam Relevance & Strategy:** Primary example of sector-specific healthcare legislation. Watch out for spelling typos in source transcripts (e.g. 'HIPPA' vs official 'HIPAA' noted in SQ-03).
- **English Example:** *"Hospitals must enforce strict electronic access controls to comply with HIPAA security safeguards."*
- **Thai Example:** *"โรงพยาบาลต้องบังคับใช้มาตรการควบคุมการเข้าถึงระบบอิเล็กทรอนิกส์อย่างเข้มงวดเพื่อให้เป็นไปตามข้อกำหนดของ HIPAA"*
- **Confused With:** GDPR, PCI DSS
- **Keywords:** `US healthcare law`, `Protected Health Information`, `PHI`, `Medical data security`
- **Evidence Sources:** S37 (T@00:48:26)

---

#### `VOC-CC26-D1-063` — **Payment Card Industry Data Security Standard (PCI DSS)** [**PCI DSS** — *Payment Card Industry Data Security Standard*]
- **Thai Meaning (ความหมายภาษาไทย):** มาตรฐานความปลอดภัยข้อมูลสำหรับอุตสาหกรรมบัตรชำระเงิน
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** An information security standard established by major credit card companies for organizations that handle branded credit, debit, and prepaid cards.
- **Thai Explanation:** มาตรฐานความมั่นคงปลอดภัยสารสนเทศระดับสากลที่กำหนดโดยกลุ่มผู้ให้บริการบัตรเครดิตรายใหญ่ เพื่อให้ร้านค้าและผู้ให้บริการที่จัดการข้อมูลบัตรชำระเงินปฏิบัติตาม
- **Exam Relevance & Strategy:** Crucial distinction: PCI DSS is an industry contractual standard, NOT a government-enacted law, although failing to comply can result in fines and loss of card processing abilities.
- **English Example:** *"Retail stores must encrypt cardholder data during transmission to maintain PCI DSS certification."*
- **Thai Example:** *"ร้านค้าปลีกต้องเข้ารหัสข้อมูลผู้ถือบัตรขณะส่งผ่านเครือข่ายเพื่อรักษาการรับรองมาตรฐาน PCI DSS"*
- **Confused With:** Government Law, ISO 27001
- **Keywords:** `Industry standard`, `Credit card security`, `Cardholder data`, `Not a law`
- **Evidence Sources:** S37 (T@00:47:41)

---

#### `VOC-CC26-D1-064` — **Security Framework**
- **Thai Meaning (ความหมายภาษาไทย):** กรอบการดำเนินงานด้านความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A structured, comprehensive set of guidelines, practices, and standards designed to help organizations plan, implement, manage, and measure an information security program.
- **Thai Explanation:** ชุดแนวทาง โครงสร้าง และมาตรฐานอย่างเป็นระบบที่ออกแบบมาเพื่อช่วยให้องค์กรสามารถวางแผน จัดการ และประเมินประสิทธิผลของระบบความมั่นคงปลอดภัยได้อย่างครอบคลุม
- **Exam Relevance & Strategy:** Provides the overarching structure and common taxonomy for security controls. Examples include NIST CSF and ISO/IEC 27001.
- **English Example:** *"Adopting a recognized security framework allowed the company to identify gaps in its current defensive posture."*
- **Thai Example:** *"การนำกรอบการดำเนินงานด้านความปลอดภัยที่เป็นที่ยอมรับมาใช้ ช่วยให้บริษัทค้นพบช่องว่างในการป้องกันที่มีอยู่เดิม"*
- **Confused With:** Security Policy, Standard, Procedure
- **Keywords:** `Structured approach`, `NIST CSF`, `ISO 27001`, `Program blueprint`
- **Evidence Sources:** S38 (T@00:49:10)

---

#### `VOC-CC26-D1-065` — **NIST Cybersecurity Framework (NIST CSF)** [**NIST CSF** — *National Institute of Standards and Technology Cybersecurity Framework*]
- **Thai Meaning (ความหมายภาษาไทย):** กรอบการรักษาความมั่นคงปลอดภัยไซเบอร์ของสถาบัน NIST
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A voluntary cybersecurity framework developed by the US National Institute of Standards and Technology consisting of core functions to manage and reduce cyber risks.
- **Thai Explanation:** กรอบการดำเนินงานด้านความมั่นคงปลอดภัยไซเบอร์ที่พัฒนาโดยสถาบันมาตรฐานและเทคโนโลยีแห่งชาติสหรัฐฯ (NIST) เพื่อช่วยให้องค์กรระบุ ป้องกัน ตรวจจับ ตอบสนอง และฟื้นฟูจากภัยคุกคาม
- **Exam Relevance & Strategy:** Widely cited framework example. Known for its core functions (Identify, Protect, Detect, Respond, Recover).
- **English Example:** *"The financial institution aligned its incident response and threat hunting practices with the NIST Cybersecurity Framework."*
- **Thai Example:** *"สถาบันการเงินได้จัดกระบวนการตอบสนองต่อเหตุการณ์และการตรวจจับภัยคุกคามให้สอดคล้องกับกรอบ NIST Cybersecurity Framework"*
- **Confused With:** ISO/IEC 27001, CIS Controls
- **Keywords:** `NIST`, `Cybersecurity framework`, `Five core functions`, `Risk management framework`
- **Evidence Sources:** S38 (T@00:49:10)

---

#### `VOC-CC26-D1-066` — **ISO / ISO/IEC 27001** [**ISO** — *International Organization for Standardization*]
- **Thai Meaning (ความหมายภาษาไทย):** มาตรฐานสากล ISO/IEC 27001
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An internationally recognized auditable standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS).
- **Thai Explanation:** มาตรฐานสากลที่สามารถตรวจรับรองได้ ซึ่งกำหนดข้อกำหนดสำหรับการจัดทำ นำไปปฏิบัติ บำรุงรักษา และปรับปรุงระบบการจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) อย่างต่อเนื่อง
- **Exam Relevance & Strategy:** Key standard for ISMS certification. ISO is the organization; ISO/IEC 27001 is the specific certifiable management system standard.
- **English Example:** *"Achieving ISO/IEC 27001 certification demonstrated to enterprise clients that the cloud vendor adheres to international security practices."*
- **Thai Example:** *"การผ่านการรับรองมาตรฐาน ISO/IEC 27001 แสดงให้ลูกค้าองค์กรเห็นว่าผู้ให้บริการคลาวด์ปฏิบัติตามแนวปฏิบัติด้านความปลอดภัยที่เป็นมาตรฐานสากล"*
- **Confused With:** ISMS, NIST CSF
- **Keywords:** `International standard`, `Certification`, `ISMS requirements`, `Auditable standard`
- **Evidence Sources:** S44 (T@00:53:23)

---

#### `VOC-CC26-D1-067` — **Information Security Management System (ISMS)** [**ISMS** — *Information Security Management System*]
- **Thai Meaning (ความหมายภาษาไทย):** ระบบการจัดการความมั่นคงปลอดภัยสารสนเทศ
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A systematic approach to managing sensitive company information through a risk management process that encompasses people, processes, and IT systems.
- **Thai Explanation:** ระบบบริหารจัดการเชิงระบบที่ประกอบด้วยนโยบาย กระบวนการ บุคลากร และระบบไอที เพื่อจัดการความเสี่ยงและปกป้องข้อมูลสำคัญขององค์กรให้ปลอดภัยอย่างยั่งยืน
- **Exam Relevance & Strategy:** ISMS is the overarching management system, not a piece of software or a single technical control. Evaluated directly under ISO/IEC 27001.
- **English Example:** *"The company's ISMS defines the exact review cycles and security roles required to protect corporate data assets."*
- **Thai Example:** *"ระบบ ISMS ขององค์กรกำหนดวงรอบการทบทวนและบทบาทหน้าที่ด้านความปลอดภัยที่จำเป็นในการปกป้องทรัพย์สินข้อมูลของบริษัท"*
- **Confused With:** SIEM, Security Policy
- **Keywords:** `Management system`, `ISO 27001`, `People process technology`, `Systemic security`
- **Evidence Sources:** S44 (T@00:53:23)

---

#### `VOC-CC26-D1-068` — **Center for Internet Security (CIS) / CIS Controls** [**CIS** — *Center for Internet Security*]
- **Thai Meaning (ความหมายภาษาไทย):** ศูนย์ความปลอดภัยอินเทอร์เน็ต / มาตรการควบคุมความปลอดภัย CIS Controls
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A nonprofit community-driven organization that publishes prioritized, actionable best-practice safeguards (CIS Controls and Benchmarks) to defend against common cyber threats.
- **Thai Explanation:** องค์กรไม่แสวงหาผลกำไรที่พัฒนาและเผยแพร่แนวปฏิบัติที่ดีและมาตรการควบคุมความปลอดภัยไซเบอร์แบบจัดลำดับความสำคัญ (CIS Controls) เพื่อช่วยให้องค์กรป้องกันภัยคุกคามทั่วไปได้อย่างมีประสิทธิภาพ
- **Exam Relevance & Strategy:** Known for prioritized, highly prescriptive technical baselines and security benchmarks.
- **English Example:** *"System administrators hardened server operating systems using the CIS Benchmarks."*
- **Thai Example:** *"ผู้ดูแลระบบปรับแต่งความปลอดภัยของระบบปฏิบัติการเซิร์ฟเวอร์โดยอ้างอิงจากเกณฑ์มาตรฐาน CIS Benchmarks"*
- **Confused With:** NIST, ISO
- **Keywords:** `Prioritized safeguards`, `Benchmarks`, `System hardening`, `Best practices`
- **Evidence Sources:** S45 (T@00:54:55)

---

#### `VOC-CC26-D1-069` — **Security Policy**
- **Thai Meaning (ความหมายภาษาไทย):** นโยบายความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A high-level formal document issued by executive management stating the organization's mandatory security requirements, goals, and strategic direction (defines WHAT must be done).
- **Thai Explanation:** เอกสารทางการระดับสูงสุดที่ออกโดยฝ่ายบริหารขององค์กร เพื่อประกาศเจตนารมณ์ ทิศทาง และข้อกำหนดที่ทุกคนต้องปฏิบัติตาม (บอกว่า 'ต้องทำอะไร' - WHAT)
- **Exam Relevance & Strategy:** Top internal governance document. Key exam mnemonic: Policy tells you WHAT must be done (management's intent); Standard specifies mandatory technical specs; Procedure tells you HOW step-by-step.
- **English Example:** *"The corporate Information Security Policy dictates that all passwords must be kept confidential and never shared."*
- **Thai Example:** *"นโยบายความมั่นคงปลอดภัยสารสนเทศขององค์กรระบุว่ารหัสผ่านทั้งหมดต้องถูกเก็บเป็นความลับและห้ามเปิดเผยเด็ดขาด"*
- **Confused With:** Security Standard, Security Procedure, Security Guideline
- **Keywords:** `High-level document`, `Management direction`, `WHAT must be done`, `Mandatory`
- **Evidence Sources:** S40 (T@00:51:14)

---

#### `VOC-CC26-D1-070` — **Security Standard**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรฐานความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A mandatory document specifying mandatory technical requirements, configurations, baselines, or rules used to implement a security policy uniformly.
- **Thai Explanation:** เอกสารข้อกำหนดทางเทคนิคที่มีผลบังคับใช้ ซึ่งระบุรายละเอียด มาตรฐานขั้นต่ำ หรือค่าคอนฟิกูเรชันที่ต้องปฏิบัติให้ตรงกันเพื่อให้นโยบายเกิดผลจริง
- **Exam Relevance & Strategy:** Mandatory technical requirement. Example: If the Policy says 'use strong passwords', the Standard specifies 'minimum 14 characters, complexity requirements, and account lockout after 5 failed attempts'.
- **English Example:** *"According to the corporate password standard, all accounts must require a minimum length of twelve characters."*
- **Thai Example:** *"ตามมาตรฐานรหัสผ่านขององค์กร บัญชีผู้ใช้ทั้งหมดจะต้องใช้รหัสผ่านที่มีความยาวอย่างน้อยสิบสองตัวอักษร"*
- **Confused With:** Security Policy, Security Guideline, Security Procedure
- **Keywords:** `Mandatory technical requirement`, `Specifications`, `Baseline`, `Implementation rule`
- **Evidence Sources:** S41 (T@00:51:53)

---

#### `VOC-CC26-D1-071` — **Security Procedure**
- **Thai Meaning (ความหมายภาษาไทย):** ขั้นตอนการปฏิบัติงานด้านความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A detailed, step-by-step instructional document describing exactly how a specific security task or process is to be carried out (defines HOW).
- **Thai Explanation:** เอกสารคู่มือปฏิบัติงานที่อธิบายขั้นตอนการทำงานอย่างละเอียดทีละขั้นตอน (Step-by-step) ว่าต้องดำเนินการสิ่งใดบ้างเพื่อให้บรรลุเป้าหมายของงานนั้นๆ (บอกว่า 'ทำอย่างไร' - HOW)
- **Exam Relevance & Strategy:** Exam takeaway: 'step-by-step instructions' = Procedure. (SQ-05 flags that transcripts erroneously mentioned procedures can be optional; in practice, operational procedures must be followed strictly).
- **English Example:** *"The help desk technician followed the password reset procedure step-by-step to safely verify the caller's identity."*
- **Thai Example:** *"เจ้าหน้าที่ Help desk ปฏิบัติตามขั้นตอนการรีเซ็ตรหัสผ่านทีละขั้นตอนเพื่อตรวจสอบตัวตนของผู้โทรอย่างปลอดภัย"*
- **Confused With:** Security Standard, Security Policy
- **Keywords:** `Step-by-step instructions`, `HOW to do it`, `Task workflow`, `Operational steps`
- **Evidence Sources:** S42 (T@00:52:38)

---

#### `VOC-CC26-D1-072` — **Security Guideline**
- **Thai Meaning (ความหมายภาษาไทย):** แนวปฏิบัติ / คำแนะนำด้านความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A recommended, advisory document offering flexible suggestions, advice, and best practices that are generally non-mandatory.
- **Thai Explanation:** เอกสารข้อแนะนำหรือแนวทางปฏิบัติที่ดีที่ยืดหยุ่นและไม่มีผลบังคับเด็ดขาด เพื่อให้คำแนะนำที่เป็นประโยชน์แก่ผู้ปฏิบัติงานในการตัดสินใจ
- **Exam Relevance & Strategy:** Crucial governance distinction: Policies, Standards, and Procedures are MANDATORY. Guidelines are ADVISORY / RECOMMENDATIONS.
- **English Example:** *"The security team published guidelines on how employees can protect their home Wi-Fi networks when telecommuting."*
- **Thai Example:** *"ทีมความปลอดภัยได้เผยแพร่แนวปฏิบัติเกี่ยวกับวิธีที่พนักงานสามารถปกป้องเครือข่าย Wi-Fi ที่บ้านเมื่อต้องทำงานระยะไกล"*
- **Confused With:** Security Standard, Security Policy
- **Keywords:** `Advisory`, `Recommended practice`, `Non-mandatory`, `Flexible advice`
- **Evidence Sources:** S39 (T@00:49:52)

---

#### `VOC-CC26-D1-103` — **Enforce**
- **Thai Meaning (ความหมายภาษาไทย):** บังคับใช้ (กฎ นโยบาย มาตรการ)
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** To compel observance of or compliance with a law, rule, security policy, or control mechanism.
- **Thai Explanation:** การดำเนินการหรือใช้กลไกเพื่อให้มั่นใจว่าจะมีการปฏิบัติตามกฎหมาย นโยบายความปลอดภัย หรือมาตรการควบคุมอย่างจริงจัง
- **Exam Relevance & Strategy:** Policies without enforcement mechanisms are ineffective. Technical controls are often deployed to enforce written managerial policies.
- **English Example:** *"Group policy objects are used to automatically enforce minimum password length across all domain accounts."*
- **Thai Example:** *"Group Policy ถูกนำมาใช้เพื่อบังคับใช้ความยาวขั้นต่ำของรหัสผ่านสำหรับทุกบัญชีในโดเมนโดยอัตโนมัติ"*
- **Confused With:** Suggest, Recommend
- **Keywords:** `Compel compliance`, `Policy execution`, `Mandatory enforcement`
- **Evidence Sources:** S40 (T@00:51:14)

---

### Objective 1.4: Cybersecurity Controls (Technical, Managerial, Operational, Physical, Functional Types) (19 entries)

#### `VOC-CC26-D1-073` — **Security Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A safeguard, countermeasure, mechanism, or administrative process designed to prevent, detect, or counteract security risks to an asset.
- **Thai Explanation:** มาตรการ กลไก กระบวนการ หรือเครื่องมือที่ออกแบบมาเพื่อป้องกัน ตรวจจับ ลดทอน หรือแก้ไขความเสี่ยงด้านความปลอดภัยที่มีต่อทรัพย์สินขององค์กร
- **Exam Relevance & Strategy:** Classified along two distinct dimensions: by implementation category (Technical, Managerial, Operational, Physical) and by functional type (Deterrent, Preventive, Detective, Corrective, Compensating, Directive).
- **English Example:** *"Installing automated security patches is an effective technical control against known software exploits."*
- **Thai Example:** *"การติดตั้งแพตช์ความปลอดภัยแบบอัตโนมัติเป็นมาตรการควบคุมทางเทคนิคที่มีประสิทธิภาพในการป้องกันการเจาะช่องโหว่ซอฟต์แวร์"*
- **Confused With:** Security Policy, Vulnerability
- **Keywords:** `Safeguard`, `Countermeasure`, `Control classification`, `Risk treatment`
- **Evidence Sources:** S50 (T@00:56:16)

---

#### `VOC-CC26-D1-074` — **Technical Control (Logical Control)**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมทางเทคนิค (มาตรการเชิงตรรกะ)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A security mechanism executed by hardware, software, or computer firmware to manage access and protect resources, such as firewalls, encryption, and access control lists.
- **Thai Explanation:** มาตรการควบคุมความปลอดภัยที่ทำงานผ่านฮาร์ดแวร์ ซอฟต์แวร์ หรือเฟิร์มแวร์ของระบบคอมพิวเตอร์ เพื่อควบคุมการเข้าถึงและปกป้องข้อมูล เช่น ไฟร์วอลล์ การเข้ารหัส และระบบตรวจจับการบุกรุก
- **Exam Relevance & Strategy:** Also known as Logical Controls. Involves technology configurations. Examples: Antivirus, firewalls, ACLs, biometrics scanners, encryption algorithms.
- **English Example:** *"Configuring a network firewall to block inbound Telnet connections is a technical security control."*
- **Thai Example:** *"การตั้งค่าไฟร์วอลล์เพื่อปิดกั้นการเชื่อมต่อ Telnet ขาเข้าเป็นมาตรการควบคุมทางเทคนิค"*
- **Confused With:** Physical Control, Managerial Control
- **Keywords:** `Software`, `Hardware`, `Logical control`, `Firewall`, `Encryption`
- **Evidence Sources:** S50 (T@00:57:54)

---

#### `VOC-CC26-D1-075` — **Managerial Control (Administrative Control)**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมทางการบริหารจัดการ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A security control focused on policies, procedures, strategic guidelines, personnel screening, and risk assessments that guide organizational security governance.
- **Thai Explanation:** มาตรการควบคุมความปลอดภัยที่เน้นกระบวนการบริหารจัดการ การกำหนดนโยบาย ระเบียบปฏิบัติ การตรวจสอบประวัติพนักงาน และการประเมินความเสี่ยง เพื่อกำกับดูแลความปลอดภัยในภาพรวม
- **Exam Relevance & Strategy:** Also known as Administrative Controls. Sets the organizational rules. Examples: Hiring policies, background checks, security policies, separation of duties.
- **English Example:** *"Performing background checks on all new IT applicants is an essential managerial control."*
- **Thai Example:** *"การตรวจสอบประวัติอาชญากรรมของผู้สมัครงานไอทีทุกคนถือเป็นมาตรการควบคุมทางการบริหารจัดการที่สำคัญ"*
- **Confused With:** Operational Control, Technical Control
- **Keywords:** `Administrative`, `Policy`, `Background check`, `Planning`, `Governance control`
- **Evidence Sources:** S50 (T@00:58:31)

---

#### `VOC-CC26-D1-076` — **Operational Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมด้านการปฏิบัติการ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A security control executed primarily by people during day-to-day business operations, such as security awareness training, configuration management, and log review.
- **Thai Explanation:** มาตรการควบคุมความปลอดภัยที่ขับเคลื่อนและปฏิบัติโดยบุคลากรในการทำงานประจำวัน เช่น การอบรมสร้างความตระหนักรู้ การบริหารจัดการการเปลี่ยนแปลง และการสำรองข้อมูลเป็นประจำ
- **Exam Relevance & Strategy:** Focuses on human execution and daily routines. Note: Course materials note that Security Training appears in both Managerial and Operational contexts depending on whether it is the policy program or actual delivery.
- **English Example:** *"Conducting regular employee phishing awareness drills is an operational security control."*
- **Thai Example:** *"การจัดฝึกอบรมและทดสอบการจำลองฟิชชิงแก่พนักงานเป็นประจำจัดเป็นมาตรการควบคุมด้านการปฏิบัติการ"*
- **Confused With:** Managerial Control, Technical Control
- **Keywords:** `Day-to-day operations`, `People-driven`, `Awareness training`, `Routine procedures`
- **Evidence Sources:** S50 (T@00:59:08)

---

#### `VOC-CC26-D1-077` — **Physical Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมทางกายภาพ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A security safeguard that limits physical access to facilities, buildings, rooms, and hardware, such as fences, locks, guards, badge readers, and video surveillance.
- **Thai Explanation:** มาตรการความปลอดภัยที่ใช้ป้องกันและจำกัดการเข้าถึงสถานที่ อาคาร ห้องคอมพิวเตอร์ และอุปกรณ์ทางกายภาพ เช่น รั้ว ประตูล็อก รปภ. กล้องวงจรปิด และกุญแจล็อกแล็ปท็อป
- **Exam Relevance & Strategy:** Protects real-world tangible assets. If physical security fails, technical controls can often be bypassed (e.g. stealing hard drives or consoles). Examples include fences, guards, mantraps, locks.
- **English Example:** *"Installing electronic badge readers at the server room entrance is a physical access control."*
- **Thai Example:** *"การติดตั้งเครื่องอ่านบัตรอิเล็กทรอนิกส์ที่ประตูทางเข้าห้องเซิร์ฟเวอร์เป็นมาตรการควบคุมทางกายภาพ"*
- **Confused With:** Technical Control
- **Keywords:** `Locks`, `Fences`, `Guards`, `Badges`, `Physical security`, `Facility protection`
- **Evidence Sources:** S50 (T@00:59:47)

---

#### `VOC-CC26-D1-078` — **Deterrent Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมเพื่อการป้องปราม / ยับยั้ง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A functional control type designed to discourage or dissuade potential adversaries from attempting a security violation by projecting visible consequences.
- **Thai Explanation:** มาตรการควบคุมที่มีเป้าหมายเพื่อป้องปรามหรือทำให้ผู้คิดจะกระทำความผิดเกิดความลังเลใจหรือเปลี่ยนใจที่จะไม่ลงมือก่อเหตุ โดยแสดงให้เห็นถึงผลลัพธ์หรือการถูกตรวจจับได้อย่างชัดเจน
- **Exam Relevance & Strategy:** Key clue: Deterrent controls DISCOURAGE but do not physically prevent or stop an action. Examples: Warning signs ('Trespassers will be prosecuted'), visible security cameras, visible guard patrols.
- **English Example:** *"Posting a prominent warning sign stating that computer access is monitored acts as a deterrent control."*
- **Thai Example:** *"การติดป้ายเตือนที่เห็นเด่นชัดว่าระบบคอมพิวเตอร์มีการตรวจสอบบันทึกการใช้งาน ทำหน้าที่เป็นมาตรการควบคุมเพื่อการป้องปราม"*
- **Confused With:** Preventive Control, Directive Control
- **Keywords:** `Discourage`, `Dissuade`, `Warning signs`, `Visible camera`, `Psychological barrier`
- **Evidence Sources:** S53 (T@01:00:36)

---

#### `VOC-CC26-D1-079` — **Preventive Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมเพื่อการป้องกัน
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A functional control type designed to actively prevent, block, or stop unauthorized or unwanted activity from occurring.
- **Thai Explanation:** มาตรการควบคุมที่ทำงานเชิงรุกเพื่อปิดกั้น สกัดกั้น หรือหยุดยั้งไม่ให้เกิดการกระทำที่ไม่พึงประสงค์หรือการเข้าถึงโดยไม่ได้รับอนุญาตขึ้นตั้งแต่แรก
- **Exam Relevance & Strategy:** Active prevention. If an action is blocked before it happens, it is Preventive. Examples: Firewalls blocking ports, door locks, biometric scanners, encryption, least privilege.
- **English Example:** *"A biometric fingerprint scanner on the laboratory door acts as a preventive control by stopping unauthorized entry."*
- **Thai Example:** *"เครื่องสแกนลายนิ้วมือบนประตูห้องปฏิบัติการทำหน้าที่เป็นมาตรการควบคุมเพื่อการป้องกันโดยสกัดกั้นการเข้าออกของผู้ไม่มีสิทธิ์"*
- **Confused With:** Deterrent Control, Detective Control
- **Keywords:** `Stop`, `Block`, `Prevent`, `Door locks`, `Firewall rule`
- **Evidence Sources:** S53 (T@01:01:20)

---

#### `VOC-CC26-D1-080` — **Detective Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมเพื่อการตรวจจับ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A functional control type designed to discover, identify, or alert on unauthorized or unwanted activity during or after its occurrence.
- **Thai Explanation:** มาตรการควบคุมที่มีเป้าหมายเพื่อค้นหา ระบุ ตรวจจับ หรือแจ้งเตือนเมื่อมีเหตุการณ์ผิดปกติหรือการบุกรุกเกิดขึ้น เพื่อให้ทราบเหตุการณ์ได้ทันท่วงที
- **Exam Relevance & Strategy:** Keywords: Alerts, alarms, logs, monitoring, review. Detective controls identify that an event occurred but do not stop it by themselves. Examples: IDS, motion sensors, audit logs, CCTV recording.
- **English Example:** *"An intrusion detection system (IDS) sending an immediate alert upon observing malicious traffic is a detective control."*
- **Thai Example:** *"ระบบตรวจจับการบุกรุก (IDS) ที่ส่งการแจ้งเตือนทันทีเมื่อพบการรับส่งข้อมูลที่ไม่พึงประสงค์ทำหน้าที่เป็นมาตรการควบคุมเพื่อการตรวจจับ"*
- **Confused With:** Corrective Control, Preventive Control
- **Keywords:** `Discover`, `Detect`, `Alert`, `Logging`, `Audit`, `Motion detector`
- **Evidence Sources:** S53 (T@01:01:56)

---

#### `VOC-CC26-D1-081` — **Corrective Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมเพื่อการแก้ไขและฟื้นฟู
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A functional control type designed to remedy vulnerabilities, restore systems to normal operations, and mitigate damage after an incident has occurred.
- **Thai Explanation:** มาตรการควบคุมที่นำมาใช้ภายหลังจากเกิดเหตุการณ์ความเสียหายขึ้นแล้ว เพื่อแก้ไขปัญหา ลดทอนความเสียหาย และฟื้นฟูระบบให้กลับคืนสู่สภาวะการทำงานปกติ
- **Exam Relevance & Strategy:** Operates AFTER the incident. Keywords: Restore, recover, repair, patch, incident response. Examples: Restoring data from backups, applying security patches after an exploit, quarantining infected files.
- **English Example:** *"Restoring corrupted databases from offline backups following a ransomware attack is a corrective control."*
- **Thai Example:** *"การกู้คืนฐานข้อมูลที่เสียหายจากไฟล์สำรองข้อมูลออฟไลน์หลังถูกโจมตีด้วยมัลแวร์เรียกค่าไถ่จัดเป็นมาตรการควบคุมเพื่อการแก้ไข"*
- **Confused With:** Detective Control, Compensating Control
- **Keywords:** `Restore`, `Recover`, `Repair after incident`, `Backup restoration`, `Patching`
- **Evidence Sources:** S53 (T@01:02:34)

---

#### `VOC-CC26-D1-082` — **Compensating Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมเพื่อชดเชย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An alternative safeguard deployed in place of a primary control when the primary control cannot be implemented due to technical or business constraints, providing comparable protection.
- **Thai Explanation:** มาตรการควบคุมทางเลือกที่นำมาใช้ทดแทนมาตรการควบคุมหลักที่ไม่สามารถติดตั้งหรือทำได้เนื่องจากข้อจำกัดทางเทคนิคหรือธุรกิจ โดยต้องให้ระดับการป้องกันที่เทียบเท่ากัน
- **Exam Relevance & Strategy:** Deployed when the ideal control is impossible. Example: An obsolete medical device cannot support encryption, so it is isolated on an air-gapped VLAN with strict firewalling as a compensating control.
- **English Example:** *"Isolating an unpatchable legacy server on a dedicated network segment serves as a compensating control."*
- **Thai Example:** *"การแยกเซิร์ฟเวอร์ระบบเก่าที่ไม่สามารถอัปเดตแพตช์ได้ให้อยู่ในเครือข่ายเฉพาะถือเป็นมาตรการควบคุมเพื่อชดเชย"*
- **Confused With:** Corrective Control, Alternative Control
- **Keywords:** `Alternative safeguard`, `Workaround`, `Comparable protection`, `Constraint`
- **Evidence Sources:** S53 (T@01:03:13)

---

#### `VOC-CC26-D1-083` — **Directive Control**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมเพื่อการชี้นำและบังคับใช้
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A functional control type designed to specify mandatory requirements, guide human behavior, and enforce compliance, such as policies, procedures, and explicit instructions.
- **Thai Explanation:** มาตรการควบคุมที่กำหนดข้อบังคับเพื่อชี้นำพฤติกรรมของบุคลากรและบังคับใช้กฎระเบียบ เช่น นโยบาย ขั้นตอนการปฏิบัติงาน และป้ายข้อบังคับ
- **Exam Relevance & Strategy:** Guides behavior. Key examples: Acceptable Use Policy (AUP), clean desk policies, compliance checklists.
- **English Example:** *"Requiring employees to read and sign the Acceptable Use Policy annually is a directive control."*
- **Thai Example:** *"การกำหนดให้พนักงานต้องอ่านและลงนามรับทราบนโยบายการใช้งานที่ยอมรับได้ (AUP) เป็นประจำทุกปีเป็นมาตรการควบคุมเพื่อการชี้นำ"*
- **Confused With:** Deterrent Control, Managerial Control
- **Keywords:** `Guide behavior`, `Mandatory rules`, `Policy compliance`, `Instructions`
- **Evidence Sources:** S53 (T@01:00:36)

---

#### `VOC-CC26-D1-084` — **Defense in Depth (Layered Defense)**
- **Thai Meaning (ความหมายภาษาไทย):** การป้องกันแบบหลายชั้นเชิงลึก
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A holistic cybersecurity strategy that employs multiple concentric layers of diverse security controls so that if one layer fails, subsequent layers continue to protect the asset.
- **Thai Explanation:** ยุทธศาสตร์ความปลอดภัยที่จัดวางมาตรการควบคุมความปลอดภัยหลากหลายประเภทซ้อนทับกันหลายชั้น เพื่อให้หากมาตรการชั้นใดชั้นหนึ่งถูกเจาะผ่าน ชั้นถัดไปยังคงทำหน้าที่ปกป้องทรัพย์สินได้
- **Exam Relevance & Strategy:** Core architectural philosophy. No single security tool is 100% foolproof; combining physical, administrative, and technical controls creates resilience.
- **English Example:** *"Protecting the server with physical perimeter fences, network firewalls, endpoint antivirus, and database encryption exemplifies defense in depth."*
- **Thai Example:** *"การปกป้องเซิร์ฟเวอร์ด้วยรั้วทางกายภาพ ไฟร์วอลล์เครือข่าย แอนติไวรัสบนเครื่อง และการเข้ารหัสฐานข้อมูล เป็นตัวอย่างของการป้องกันแบบหลายชั้นเชิงลึก"*
- **Confused With:** Redundancy, Single Layer Protection
- **Keywords:** `Layered security`, `Multiple safeguards`, `No single point of failure`, `Concentric defense`
- **Evidence Sources:** S52 (T@00:59:47)

---

#### `VOC-CC26-D1-085` — **Overlapping Security Controls**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรการควบคุมความปลอดภัยที่มีหลายบทบาททับซ้อน
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The principle that a single security mechanism can perform multiple functional roles simultaneously depending on its implementation and the threat context.
- **Thai Explanation:** หลักการที่ว่ามาตรการความปลอดภัยตัวเดียวสามารถทำหน้าที่ได้หลายประเภทพร้อมกัน ขึ้นอยู่กับรูปแบบการติดตั้งและบริบทของภัยคุกคาม เช่น กล้องวงจรปิดที่เป็นทั้งการป้องปรามและตรวจจับ
- **Exam Relevance & Strategy:** Exams frequently test dual functions: A video camera is both Deterrent (its visible presence dissuades intruders) and Detective (recording footage to detect incidents). An ACL can be Preventive (blocking ports) and Detective (logging traffic).
- **English Example:** *"A security guard at the gate functions as both a deterrent control and a detective control."*
- **Thai Example:** *"เจ้าหน้าที่รักษาความปลอดภัยที่ประจำอยู่หน้าประตูทำหน้าที่เป็นทั้งมาตรการป้องปรามและมาตรการตรวจจับไปพร้อมกัน"*
- **Confused With:** Exclusive Classification
- **Keywords:** `Dual purpose`, `Context-dependent`, `Camera deterrent and detective`, `Multi-function safeguard`
- **Evidence Sources:** S55 (T@01:03:49)

---

#### `VOC-CC26-D1-086` — **Access Control List (ACL)** [**ACL** — *Access Control List*]
- **Thai Meaning (ความหมายภาษาไทย):** รายการควบคุมการเข้าถึง
- **Category:** `acronym` | **Status:** `source_supported`
- **English Definition:** A sequential table of rules that specifies which users, systems, or network addresses are granted or denied access to a particular system object or network port.
- **Thai Explanation:** ตารางกฎที่ระบุว่าผู้ใช้ ระบบ หรือไอพีแอดเดรสใดบ้างที่ได้รับอนุญาตหรือถูกปฏิเสธไม่ให้เข้าถึงไฟล์ ทรัพยากร หรือพอร์ตเครือข่ายนั้นๆ
- **Exam Relevance & Strategy:** Primary technical control found on routers, firewalls, and file systems. Demonstrates both preventive filtering and detective logging.
- **English Example:** *"The router's access control list was configured to block all incoming traffic from unauthorized external subnets."*
- **Thai Example:** *"รายการควบคุมการเข้าถึง (ACL) ของเราเตอร์ถูกตั้งค่าเพื่อปิดกั้นทราฟฟิกขาเข้าทั้งหมดที่มาจากซับเน็ตภายนอกที่ไม่ได้รับอนุญาต"*
- **Confused With:** Firewall Rulebase, Capability List
- **Keywords:** `Permit/Deny rules`, `Router filter`, `File permissions`, `Packet filtering`
- **Evidence Sources:** S51 (T@01:04:26)

---

#### `VOC-CC26-D1-087` — **Firewall**
- **Thai Meaning (ความหมายภาษาไทย):** ไฟร์วอลล์ (ระบบรักษาความปลอดภัยเครือข่าย)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A network security device or software that monitors and filters incoming and outgoing network traffic based on predetermined security rules.
- **Thai Explanation:** อุปกรณ์หรือซอฟต์แวร์รักษาความปลอดภัยเครือข่ายที่ทำหน้าที่คัดกรองและตรวจสอบการเข้าออกของข้อมูลระหว่างเครือข่าย ตามกฎความปลอดภัยที่กำหนดไว้ล่วงหน้า
- **Exam Relevance & Strategy:** Primary boundary protection tool. Acts as a Technical Preventive control.
- **English Example:** *"The perimeter firewall inspected all web traffic and blocked requests targeting known exploit signatures."*
- **Thai Example:** *"ไฟร์วอลล์ขอบเขตเครือข่ายตรวจสอบทราฟฟิกเว็บทั้งหมดและปิดกั้นคำขอที่มีรูปแบบการโจมตีที่เป็นอันตราย"*
- **Confused With:** Router, Intrusion Detection System
- **Keywords:** `Perimeter defense`, `Network filter`, `Packet inspection`, `Preventive barrier`
- **Evidence Sources:** S51 (T@01:01:20)

---

#### `VOC-CC26-D1-104` — **Implement**
- **Thai Meaning (ความหมายภาษาไทย):** ติดตั้งและนำไปปฏิบัติจริง
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** To put a decision, plan, policy, or security control into practical effect or active operation.
- **Thai Explanation:** การนำแผนงาน นโยบาย ข้อกำหนด หรือมาตรการควบคุมทางเทคนิคไปติดตั้ง ตั้งค่า และเปิดใช้งานให้เกิดผลในทางปฏิบัติจริง
- **Exam Relevance & Strategy:** Common exam action verb. Represents translating theoretical policy requirements into physical or technical safeguards.
- **English Example:** *"The organization plans to implement multi-factor authentication across all external remote access points."*
- **Thai Example:** *"องค์กรมีแผนที่จะติดตั้งและนำระบบพิสูจน์ตัวตนหลายปัจจัยไปใช้งานจริงกับทุกจุดเชื่อมต่อระยะไกลจากภายนอก"*
- **Confused With:** Design, Plan
- **Keywords:** `Deploy`, `Execute`, `Put into practice`, `Activate control`
- **Evidence Sources:** S50 (T@00:56:16)

---

#### `VOC-CC26-D1-106` — **Monitor**
- **Thai Meaning (ความหมายภาษาไทย):** เฝ้าระวังและติดตามตรวจสอบ
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** To observe, track, and record systems, logs, and network behavior continuously to detect anomalies or policy violations.
- **Thai Explanation:** การเฝ้าสังเกต ติดตาม และบันทึกพฤติกรรมของระบบ เครือข่าย หรือไฟล์บันทึกการใช้งานอย่างต่อเนื่อง เพื่อตรวจจับสิ่งผิดปกติหรือการละเมิดนโยบาย
- **Exam Relevance & Strategy:** Detective activity supporting continuous risk management. Essential for early threat containment.
- **English Example:** *"Security operations center (SOC) analysts monitor incoming network telemetry twenty-four hours a day."*
- **Thai Example:** *"นักวิเคราะห์ประจำศูนย์ปฏิบัติการความปลอดภัย (SOC) เฝ้าระวังข้อมูลเครือข่ายขาเข้าตลอด 24 ชั่วโมง"*
- **Confused With:** Control, Block
- **Keywords:** `Continuous observation`, `Track`, `Watch`, `Detective activity`
- **Evidence Sources:** S29 (T@00:44:51)

---

#### `VOC-CC26-D1-108` — **Patch Management / Patching**
- **Thai Meaning (ความหมายภาษาไทย):** การบริหารจัดการแพตช์ / การลงแพตช์อัปเดต
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** The systematic acquisition, testing, and deployment of software updates (patches) to fix security vulnerabilities and operational bugs.
- **Thai Explanation:** กระบวนการจัดหา ทดสอบ และติดตั้งไฟล์อัปเดตซอฟต์แวร์ (แพตช์) อย่างเป็นระบบ เพื่ออุดช่องโหว่ความปลอดภัยและแก้ไขข้อบกพร่องของระบบ
- **Exam Relevance & Strategy:** Fundamental security hygiene. Eliminates known vulnerabilities. Demonstrates Due Care in operational maintenance.
- **English Example:** *"Implementing automated patch management prevents attackers from exploiting known operating system weaknesses."*
- **Thai Example:** *"การติดตั้งระบบจัดการแพตช์แบบอัตโนมัติช่วยป้องกันไม่ให้ผู้โจมตีเจาะผ่านช่องโหว่ที่ทราบแล้วของระบบปฏิบัติการ"*
- **Confused With:** Software Upgrade, Reinstallation
- **Keywords:** `Software update`, `Vulnerability remediation`, `Due care`, `Hotfix`
- **Evidence Sources:** S54 (T@01:02:34)

---

#### `VOC-CC26-D1-110` — **Incident Response** [**IR** — *Incident Response*]
- **Thai Meaning (ความหมายภาษาไทย):** การตอบสนองต่อเหตุการณ์ความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The structured, organized approach an organization takes to prepare for, detect, contain, investigate, eradicate, and recover from cybersecurity breaches.
- **Thai Explanation:** แนวทางการรับมืออย่างเป็นขั้นตอนและมีแบบแผนขององค์กรในการเตรียมพร้อม ตรวจจับ สกัดกั้น สอบสวน กำจัด และฟื้นฟูระบบเมื่อเกิดเหตุการณ์ละเมิดความมั่นคงปลอดภัยไซเบอร์
- **Exam Relevance & Strategy:** Corrective and operational activity. Essential for mitigating incident impact and maintaining business continuity.
- **English Example:** *"The incident response team isolated infected workstations immediately to contain the spread of malware."*
- **Thai Example:** *"ทีมตอบสนองต่อเหตุการณ์ได้ตัดการเชื่อมต่อเครื่องคอมพิวเตอร์ที่ติดเชื้อในทันทีเพื่อสกัดกั้นการแพร่ระบาดของมัลแวร์"*
- **Confused With:** Disaster Recovery, Business Continuity
- **Keywords:** `Containment`, `Eradication`, `Recovery`, `Breach handling`
- **Evidence Sources:** S56 (T@01:05:10)

---

### Objective 1.5: Professional & Ethical Conduct (Code of Conduct, Due Care, Due Diligence, ISC2 Canons) (6 entries)

#### `VOC-CC26-D1-088` — **Professional Code of Conduct**
- **Thai Meaning (ความหมายภาษาไทย):** จรรยาบรรณวิชาชีพ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A set of formal ethical principles and behavioral guidelines that members of a profession are expected to uphold in their professional duties.
- **Thai Explanation:** ประมวลหลักการทางจริยธรรมและแนวทางพฤติกรรมที่สมาชิกในวิชาชีพต้องยึดถือและปฏิบัติตามในการปฏิบัติหน้าที่ เพื่อรักษามาตรฐานและเกียรติแห่งวิชาชีพ
- **Exam Relevance & Strategy:** Reflects integrity, responsibility, public trust, and compliance. Adhering to professional codes is mandatory for certified practitioners.
- **English Example:** *"Adhering to the professional code of conduct requires cybersecurity practitioners to avoid conflicts of interest."*
- **Thai Example:** *"การยึดมั่นในจรรยาบรรณวิชาชีพกำหนดให้ผู้ประกอบวิชาชีพความปลอดภัยไซเบอร์ต้องหลีกเลี่ยงผลประโยชน์ทับซ้อน"*
- **Confused With:** ISC2 Code of Ethics, Legal Statute
- **Keywords:** `Ethics`, `Professionalism`, `Honesty`, `Duty of care`
- **Evidence Sources:** S57 (T@01:05:51)

---

#### `VOC-CC26-D1-089` — **Due Care**
- **Thai Meaning (ความหมายภาษาไทย):** ความระมัดระวังตามสมควรในการปฏิบัติหน้าที่ (การลงมือทำ)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The practice of taking reasonable and prudent steps to protect organizational assets and reduce risk in accordance with what a reasonable person would do under the circumstances.
- **Thai Explanation:** การลงมือปฏิบัติตามขั้นตอนที่ถูกต้อง เหมาะสม และรอบคอบ เพื่อปกป้องทรัพย์สินและลดความเสี่ยง ตามมาตรฐานที่บุคคลผู้มีความรับผิดชอบพึงกระทำในสถานการณ์นั้นๆ (มุ่งเน้นการลงมือปฏิบัติจริง เช่น การลงแพตช์ การตั้งไฟร์วอลล์)
- **Exam Relevance & Strategy:** Crucial exam distinction: Due Care = DOING the right things (taking action, implementing safeguards, patching). Due Diligence = KNOWING the right things (investigating, assessing, reviewing, verifying before and during activities).
- **English Example:** *"Applying critical security patches within twenty-four hours of release demonstrates due care."*
- **Thai Example:** *"การติดตั้งแพตช์ความปลอดภัยที่สำคัญภายในยี่สิบสี่ชั่วโมงหลังการปล่อยแพตช์แสดงถึงความระมัดระวังตามสมควรในการปฏิบัติหน้าที่ (Due Care)"*
- **Confused With:** Due Diligence
- **Keywords:** `Reasonable steps`, `Prudent action`, `Doing`, `Implementing safeguards`
- **Evidence Sources:** S58 (T@01:06:33)

---

#### `VOC-CC26-D1-090` — **Due Diligence**
- **Thai Meaning (ความหมายภาษาไทย):** ความเพียรพยายามและตรวจสอบอย่างรอบคอบ (การตรวจสอบ/สืบค้น)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The practice of thoroughly investigating, evaluating, validating, and maintaining risk awareness before and during organizational activities to ensure controls are appropriate and effective.
- **Thai Explanation:** การตรวจสอบ ค้นคว้า ประเมิน และรักษาความเข้าใจในความเสี่ยงอย่างรอบคอบ ทั้งก่อนและระหว่างการดำเนินกิจกรรม เพื่อให้มั่นใจว่ามาตรการที่มีอยู่นั้นเหมาะสมและได้ผลจริง (มุ่งเน้นการตรวจสอบ การประเมินความเสี่ยง และการตรวจสอบสถานะ)
- **Exam Relevance & Strategy:** Due Diligence is the research, verification, and ongoing assessment that justifies and validates Due Care. Exam tip: S59 explicitly states Due Diligence occurs 'before and during', not just before.
- **English Example:** *"Conducting a comprehensive security audit of a vendor before signing a cloud contract exemplifies due diligence."*
- **Thai Example:** *"การตรวจสอบความปลอดภัยของบริษัทคู่ค้าอย่างละเอียดก่อนลงนามในสัญญาใช้บริการคลาวด์แสดงถึงความรอบคอบในการตรวจสอบ (Due Diligence)"*
- **Confused With:** Due Care
- **Keywords:** `Investigating`, `Evaluating`, `Auditing`, `Knowing`, `Before and during`, `Verification`
- **Evidence Sources:** S59 (T@01:07:15)

---

#### `VOC-CC26-D1-091` — **ISC2 Code of Ethics Canons**
- **Thai Meaning (ความหมายภาษาไทย):** จรรยาบรรณหลัก 4 ประการของ ISC2
- **Category:** `core_term` | **Status:** `review_required`
- **English Definition:** The four mandatory ethical canons established by ISC2 that all members and certification holders must commit to upholding.
- **Thai Explanation:** หลักจรรยาบรรณบังคับ 4 ข้อขององค์กร ISC2 ที่สมาชิกและผู้ถือใบรับรองทุกคนต้องยึดถือ ได้แก่: 1) ปกป้องสังคม สาธารณะ และโครงสร้างพื้นฐาน 2) ปฏิบัติหน้าที่ด้วยเกียรติ ซื่อสัตย์ และชอบด้วยกฎหมาย 3) ให้บริการที่ขยันขันแข็งแก่ผู้ว่าจ้าง 4) พัฒนาและปกป้องวิชาชีพ
- **Exam Relevance & Strategy:** The four canons are: 1. Protect society, the common good, necessary public trust, and the infrastructure. 2. Act honorably, honestly, justly, responsibly, and legally. 3. Provide diligent and competent service to principals. 4. Advance and protect the profession. Note: Instructor commentary regarding canon precedence order in conflict scenarios is flagged under SQ-09.
- **English Example:** *"An analyst faced with an illegal executive order refuses to comply, citing the first two canons of the ISC2 Code of Ethics."*
- **Thai Example:** *"นักวิเคราะห์ที่ได้รับคำสั่งที่ผิดกฎหมายจากผู้บริหารปฏิเสธที่จะปฏิบัติตาม โดยอ้างจรรยาบรรณสองข้อแรกของ ISC2"*
- **Confused With:** Company Code of Conduct
- **Keywords:** `Four canons`, `Protect society`, `Act honorably`, `Service to principals`, `Advance profession`
- **Evidence Sources:** S60 (T@01:07:59)

---

#### `VOC-CC26-D1-092` — **Principals**
- **Thai Meaning (ความหมายภาษาไทย):** ผู้ว่าจ้าง / นายจ้าง / ผู้มอบหมายอำนาจ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The employers, clients, or authorizing entities to whom a cybersecurity professional owes diligent, honest, and competent service.
- **Thai Explanation:** นายจ้าง ลูกค้า หรือผู้มีอำนาจมอบหมายที่ผู้ประกอบวิชาชีพความปลอดภัยไซเบอร์มีหน้าที่ให้บริการด้วยความขยันหมั่นเพียรและมีความสามารถ ตามจรรยาบรรณข้อที่สาม
- **Exam Relevance & Strategy:** Do not confuse 'Principals' (people/employers who hire you) with 'Principles' (fundamental security rules). Appears in Canon 3: 'Provide diligent and competent service to principals'.
- **English Example:** *"Cybersecurity consultants must maintain confidentiality and deliver competent guidance to their principals."*
- **Thai Example:** *"ที่ปรึกษาความปลอดภัยไซเบอร์ต้องรักษาความลับและให้คำแนะนำอย่างเชี่ยวชาญแก่ผู้ว่าจ้าง (Principals)"*
- **Confused With:** Principles
- **Keywords:** `Employers`, `Clients`, `Canon 3`, `Service recipient`
- **Evidence Sources:** S60 (T@01:08:41)

---

#### `VOC-CC26-D1-107` — **Escalate**
- **Thai Meaning (ความหมายภาษาไทย):** ยกระดับการจัดการ / ส่งต่อปัญหาตามลำดับขั้น
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** To transfer an incident, decision, or problem to higher authority levels or specialized response teams when it exceeds local thresholds or capabilities.
- **Thai Explanation:** การส่งต่อเหตุการณ์ ข้อติดขัด หรือปัญหาไปยังผู้มีอำนาจระดับสูงขึ้น หรือทีมผู้เชี่ยวชาญเฉพาะด้าน เมื่อปัญหานั้นเกินขอบเขตอำนาจหรือความสามารถในการจัดการระดับต้น
- **Exam Relevance & Strategy:** Essential concept in incident response and professional conduct. First-line analysts must know when to escalate an anomaly to incident response leads or executive leadership.
- **English Example:** *"When the help desk noticed multiple simultaneous account lockouts, they escalated the incident to the cybersecurity team."*
- **Thai Example:** *"เมื่อฝ่าย Help desk สังเกตเห็นว่ามีการล็อกบัญชีผู้ใช้พร้อมกันหลายบัญชี จึงได้ยกระดับเหตุการณ์ส่งต่อไปยังทีมความปลอดภัยไซเบอร์ทันที"*
- **Confused With:** Ignore, Resolve locally
- **Keywords:** `Elevate issue`, `Chain of command`, `Incident response hierarchy`
- **Evidence Sources:** questions/domain-1.md (Q590/Q596)

---

### Exam Strategy & Question Qualifiers (BEST, FIRST, PRIMARY, EXCEPT, etc.) (7 entries)

#### `VOC-CC26-D1-093` — **BEST**
- **Thai Meaning (ความหมายภาษาไทย):** เหมาะสมที่สุด / ดีที่สุดในสถานการณ์ที่กำหนด
- **Category:** `exam_language` | **Status:** `editorial_synthesis`
- **English Definition:** An exam question qualifier requiring the candidate to evaluate multiple plausible or correct options and choose the single most optimal, comprehensive, or contextually appropriate answer.
- **Thai Explanation:** คำระบุในคำถามสอบที่กำหนดให้ผู้สอบต้องเปรียบเทียบตัวเลือกที่อาจถูกต้องหลายข้อ แล้วตัดสินใจเลือกข้อที่ดีที่สุด เหมาะสมที่สุดกับเงื่อนไข หรือครอบคลุมวัตถุประสงค์หลักที่สุด
- **Exam Relevance & Strategy:** In questions asking for the 'BEST' option, other options may also be technically viable or good practices, but one option addresses the root cause or highest priority security objective most effectively.
- **English Example:** *"Which of the following is the BEST method to protect sensitive customer data at rest? (Choose the most direct, robust safeguard)."*
- **Thai Example:** *"ข้อใดคือวิธีที่ดีที่สุด (BEST) ในการปกป้องข้อมูลสำคัญของลูกค้าที่จัดเก็บอยู่ในระบบ? (ต้องเลือกวิธีที่ตรงจุดและรัดกุมที่สุด)"*
- **Confused With:** FIRST, PRIMARY
- **Keywords:** `Optimal choice`, `Contextual superiority`, `Highest priority answer`
- **Evidence Sources:** exam-language-guide.md (Section 3)

---

#### `VOC-CC26-D1-094` — **FIRST**
- **Thai Meaning (ความหมายภาษาไทย):** สิ่งแรกที่ต้องทำ / ลำดับขั้นตอนแรก
- **Category:** `exam_language` | **Status:** `editorial_synthesis`
- **English Definition:** An exam question qualifier instructing the candidate to identify the initial, prerequisite step in an operational, incident response, or lifecycle process.
- **Thai Explanation:** คำระบุในคำถามสอบที่ถามหาขั้นตอนแรกสุดที่ต้องปฏิบัติในกระบวนการตอบสนองต่อเหตุการณ์ การบริหารความเสี่ยง หรือการพัฒนาระบบ ก่อนที่จะเริ่มขั้นตอนอื่นๆ
- **Exam Relevance & Strategy:** Chronological sequence test. Even if other answer options describe necessary actions, the question asks which action must happen FIRST (e.g. assess/contain before eradicating, identify assets before risk assessing).
- **English Example:** *"What should an administrator do FIRST upon discovering an active data exfiltration event?"*
- **Thai Example:** *"ผู้ดูแลระบบควรทำสิ่งใดเป็นสิ่งแรก (FIRST) เมื่อตรวจพบเหตุการณ์ข้อมูลกำลังถูกขโมยออกไป?"*
- **Confused With:** BEST, NEXT STEP
- **Keywords:** `Chronological order`, `Prerequisite action`, `Initial step`
- **Evidence Sources:** exam-language-guide.md (Section 3)

---

#### `VOC-CC26-D1-095` — **PRIMARY**
- **Thai Meaning (ความหมายภาษาไทย):** วัตถุประสงค์หลัก / หน้าที่หลัก
- **Category:** `exam_language` | **Status:** `editorial_synthesis`
- **English Definition:** An exam question qualifier asking for the chief, most significant, or foundational purpose or function of a security control or activity.
- **Thai Explanation:** คำระบุในคำถามสอบที่เน้นถามหาหน้าที่หลัก วัตถุประสงค์แกนกลาง หรือเป้าหมายอันดับหนึ่งของมาตรการหรือกิจกรรมความปลอดภัยนั้นๆ
- **Exam Relevance & Strategy:** Distinguishes primary security functions from secondary or side benefits. E.g. The PRIMARY purpose of hashing is integrity verification, even though it can also be used in deduplication.
- **English Example:** *"What is the PRIMARY purpose of implementing an access control list on an edge router?"*
- **Thai Example:** *"วัตถุประสงค์หลัก (PRIMARY) ของการติดตั้ง Access Control List บนเราเตอร์ขอบเขตคืออะไร?"*
- **Confused With:** MAIN PURPOSE, BEST
- **Keywords:** `Core objective`, `Chief purpose`, `Main function`
- **Evidence Sources:** exam-language-guide.md (Section 3)

---

#### `VOC-CC26-D1-096` — **LEAST**
- **Thai Meaning (ความหมายภาษาไทย):** มีความเหมาะสมน้อยที่สุด / มีประสิทธิภาพต่ำที่สุด
- **Category:** `exam_language` | **Status:** `editorial_synthesis`
- **English Definition:** An inverted exam question qualifier asking the candidate to choose the option that is the least effective, least appropriate, or lowest priority.
- **Thai Explanation:** คำระบุในคำถามสอบในเชิงปฏิเสธหรือกลับขั้ว ที่ถามหาตัวเลือกที่มีประสิทธิภาพต่ำที่สุด มีประโยชน์น้อยที่สุด หรือไม่เหมาะสมที่สุดในสถานการณ์นั้น
- **Exam Relevance & Strategy:** Candidates must be careful not to pick the strongest answer out of habit. Three options will be good ideas; the correct answer is the WEAKEST or least relevant option.
- **English Example:** *"Which of the following is the LEAST effective method to prevent phishing attacks?"*
- **Thai Example:** *"ข้อใดเป็นวิธีที่มีประสิทธิภาพน้อยที่สุด (LEAST) ในการป้องกันการโจมตีแบบฟิชชิง?"*
- **Confused With:** EXCEPT, NOT
- **Keywords:** `Lowest effectiveness`, `Weakest choice`, `Least appropriate`
- **Evidence Sources:** exam-language-guide.md (Section 3)

---

#### `VOC-CC26-D1-097` — **EXCEPT / NOT**
- **Thai Meaning (ความหมายภาษาไทย):** ยกเว้น / ไม่ใช่
- **Category:** `exam_language` | **Status:** `editorial_synthesis`
- **English Definition:** Negative constraint operators indicating that the correct response is the single false statement, missing element, or non-matching example among true statements.
- **Thai Explanation:** คำสั่งในเชิงปฏิเสธที่กำหนดให้เลือกตัวเลือกข้อเดียวที่เป็นเท็จ ไม่เข้าพวก หรือไม่ใช่ส่วนประกอบของกลุ่มที่กล่าวถึง โดยตัวเลือกที่เหลืออีกสามข้อจะเป็นจริงทั้งหมด
- **Exam Relevance & Strategy:** Requires careful reading. Identify three true statements and eliminate them; the outlier or false statement is the correct answer.
- **English Example:** *"All of the following are examples of biometric authentication factors EXCEPT:"*
- **Thai Example:** *"ข้อต่อไปนี้ทั้งหมดเป็นตัวอย่างของปัจจัยการพิสูจน์ตัวตนทางชีวมิติ ยกเว้น (EXCEPT) ข้อใด:"*
- **Confused With:** LEAST
- **Keywords:** `Negative stem`, `Outlier`, `Exception`, `False statement`
- **Evidence Sources:** exam-language-guide.md (Section 3)

---

#### `VOC-CC26-D1-098` — **MOST LIKELY**
- **Thai Meaning (ความหมายภาษาไทย):** มีความเป็นไปได้มากที่สุด / มีโอกาสเกิดสูงสุด
- **Category:** `exam_language` | **Status:** `editorial_synthesis`
- **English Definition:** A probability-oriented qualifier asking the candidate to determine the most probable threat, cause, vulnerability, or consequence based on scenario clues.
- **Thai Explanation:** คำระบุในคำถามสอบที่ถามหาความเป็นไปได้สูงสุด ผลลัพธ์ที่มีโอกาสเกิดมากที่สุด หรือสาเหตุหลักที่น่าจะเกิดขึ้นตามรูปการณ์ในโจทย์
- **Exam Relevance & Strategy:** Tests diagnosis and situational deduction. Eliminate remote or unlikely possibilities and select the consequence with highest correlation.
- **English Example:** *"If an employee clicks a suspicious attachment in an unsolicited email, what is the MOST LIKELY consequence?"*
- **Thai Example:** *"หากพนักงานคลิกไฟล์แนบที่น่าสงสัยในอีเมลที่ไม่ทราบที่มา ผลลัพธ์ที่มีโอกาสเกิดขึ้นมากที่สุด (MOST LIKELY) คืออะไร?"*
- **Confused With:** BEST, DEFINITELY
- **Keywords:** `High probability`, `Likeliest outcome`, `Probable cause`
- **Evidence Sources:** exam-language-guide.md (Section 3)

---

#### `VOC-CC26-D1-099` — **NEXT STEP**
- **Thai Meaning (ความหมายภาษาไทย):** ขั้นตอนถัดไปในกระบวนการ
- **Category:** `exam_language` | **Status:** `editorial_synthesis`
- **English Definition:** A procedural qualifier that asks what immediate action should follow the completed step described in the question stem.
- **Thai Explanation:** คำระบุในคำถามสอบที่ถามหาขั้นตอนที่จะต้องดำเนินการต่อในทันที หลังจากขั้นตอนที่โจทย์ระบุได้เสร็จสิ้นลงแล้ว
- **Exam Relevance & Strategy:** Requires knowledge of security lifecycles (e.g. Risk Management: Identify -> Assess -> Respond -> Monitor). If the stem completed Risk Identification, the NEXT STEP is Risk Assessment.
- **English Example:** *"Having completed the risk identification phase, what is the NEXT STEP in the risk management lifecycle?"*
- **Thai Example:** *"เมื่อเสร็จสิ้นขั้นตอนการระบุความเสี่ยงแล้ว ขั้นตอนถัดไป (NEXT STEP) ในวงจรการบริหารความเสี่ยงคืออะไร?"*
- **Confused With:** FIRST, FINAL STEP
- **Keywords:** `Sequential action`, `Workflow progression`, `Lifecycle stage`
- **Evidence Sources:** exam-language-guide.md (Section 3)

---

