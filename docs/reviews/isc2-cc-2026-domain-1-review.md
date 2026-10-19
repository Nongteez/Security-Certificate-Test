# ISC2 CC 2026 Domain 1 Questions — Academic Review Export

## Export Overview & Metadata

- **Certification**: ISC2 Certified in Cybersecurity (CC)
- **Exam Outline Version**: 2026 Outline (`next-bank`)
- **Domain**: Domain 1 — Security Principles (`dom`: 1)
- **Source File**: `data/certs/isc2/cc/versions/next-bank/questions/domain-1.js`
- **Output File**: `docs/reviews/isc2-cc-2026-domain-1-review.md`
- **Total Questions Exported**: 24
- **Status**: Read-only complete academic review export
- **Integrity**: Exact verbatim export of all original English and Thai question text, answer options, correct keys, full explanations, short summaries, structured rationales, and supplemental tips/examples.

---

## Question Inventory

| # | ID | Question (English Preview) | Correct Answer | Has Exam Tip | Has Example |
|---|---|---|---|:---:|:---:|
| 1 | 584 | During a routine software maintenance update at a regional hospital, an unaut... | Option B | No | No |
| 2 | 585 | A bank's customer service representatives must view customer payment historie... | Option A | No | No |
| 3 | 586 | An organization's primary datacenter is equipped with an uninterruptible powe... | Option A | No | No |
| 4 | 587 | A contractor whose contract ended two days ago attempts to log into the corpo... | Option B | No | No |
| 5 | 588 | An organization's security policy requires multi-factor authentication (MFA) ... | Option B | No | No |
| 6 | 589 | A digital retail company collects customer shipping addresses and payment det... | Option C | No | No |
| 7 | 590 | An information security officer is conducting an internal data mapping exerci... | Option B | No | No |
| 8 | 591 | During a threat modeling session, an analyst reviews the following scenario: ... | Option C | No | No |
| 9 | 592 | A security manager leads a risk assessment workshop with cross-functional dep... | Option B | No | No |
| 10 | 593 | Six months ago, an enterprise formally accepted the risk of operating an unpa... | Option B | No | No |
| 11 | 594 | A logistics company evaluates the financial exposure associated with potentia... | Option B | No | No |
| 12 | 595 | A healthcare provider explores implementing an experimental generative artifi... | Option A | No | No |
| 13 | 596 | A Chief Information Security Officer (CISO) is preparing a quarterly risk rep... | Option B | No | No |
| 14 | 597 | Which of the following BEST describes the core role and primary objective of ... | Option A | No | No |
| 15 | 598 | An organization's executive committee publishes an official document that sta... | Option A | Yes | No |
| 16 | 599 | The IT security engineering team creates an internal document stating: 'All e... | Option A | No | No |
| 17 | 600 | A Chief Information Officer (CIO) wants to establish a comprehensive cybersec... | Option A | No | No |
| 18 | 601 | An organization protects its data center using three distinct measures: (1) n... | Option A | No | No |
| 19 | 602 | A high-security corporate research facility mounts brightly colored, illumina... | Option A | No | No |
| 20 | 603 | Following a sophisticated ransomware infection that encrypted critical accoun... | Option A | No | No |
| 21 | 604 | Management posts a mandatory notice on all server room entry doors stating: '... | Option A | No | No |
| 22 | 605 | A bank protects its core customer banking application using perimeter firewal... | Option A | No | No |
| 23 | 606 | A system administrator routinely applies verified operating system security u... | Option A | Yes | No |
| 24 | 607 | Prior to signing a service agreement with a third-party cloud analytics provi... | Option A | No | Yes |

---

## Detailed Question Records

### Question 1 (ID: 584)

- **Question ID**: 584
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option B (Index: 1)

#### Question Text

**English:**
> During a routine software maintenance update at a regional hospital, an unauthorized script inadvertently alters prescription dosage values in the central patient database. The database remains fully online and accessible to authorized physicians, and no patient data was disclosed outside the network. Which core security objective was primarily violated?

**Thai (ภาษาไทย):**
> ระหว่างการอัปเดตบำรุงรักษาซอฟต์แวร์ตามปกติที่โรงพยาบาล สคริปต์ที่ไม่ได้รับอนุญาตตัวหนึ่งได้แก้ไขค่าขนาดยาในฐานข้อมูลผู้ป่วยส่วนกลางโดยไม่ได้ตั้งใจ โดยที่ฐานข้อมูลยังคงออนไลน์และแพทย์ที่ได้รับอนุญาตสามารถเข้าถึงได้ตามปกติ และไม่มีข้อมูลผู้ป่วยรั่วไหลออกสู่ภายนอก เหตุการณ์นี้ละเมิดวัตถุประสงค์ความปลอดภัยหลักข้อใด?

#### Answer Choices

- **[Option A]**
  - **EN**: Confidentiality
  - **TH**: การรักษาความลับ (Confidentiality)
- **[Option B]** *(Correct Answer)*
  - **EN**: Integrity
  - **TH**: ความถูกต้องแท้จริงและความสมบูรณ์ของข้อมูล (Integrity)
- **[Option C]**
  - **EN**: Availability
  - **TH**: ความพร้อมใช้งาน (Availability)
- **[Option D]**
  - **EN**: Non-repudiation
  - **TH**: การไม่สามารถปฏิเสธความรับผิดได้ (Non-repudiation)

#### Correct Answer Summary

- **Correct Choice**: Option B
- **English Text**: Integrity
- **Thai Text**: ความถูกต้องแท้จริงและความสมบูรณ์ของข้อมูล (Integrity)

#### Explanations

**Short Explanation (English):**
Integrity ensures data is accurate and protected against unauthorized modification or deletion.

**Full Explanation (English):**
Integrity is the security objective focused on guarding against improper information modification, alteration, or destruction. In this scenario, prescription dosage values were altered without authorization, representing a direct compromise of data integrity. Confidentiality was not violated because data was not improperly disclosed. Availability was maintained because the database remained online and accessible. Non-repudiation concerns proving the identity of a sender or actor, which is secondary to the factual alteration of the clinical records.

**Full Explanation (Thai):**
ข้อ B ถูกต้อง: Integrity (ความถูกต้องสมบูรณ์ของข้อมูล) คือเป้าหมายความมั่นคงปลอดภัยในการป้องกันการแก้ไข ดัดแปลง หรือทำลายข้อมูลโดยไม่ได้รับอนุญาต การที่ขนาดยาถูกเปลี่ยนแปลงถือเป็นการทำลายความถูกต้องของข้อมูลโดยตรง
- ข้อ A ไม่ถูกต้อง: Confidentiality ไม่ถูกละเมิดเนื่องจากไม่มีการเปิดเผยข้อมูลแก่ผู้ไม่มีสิทธิ์
- ข้อ C ไม่ถูกต้อง: Availability ยังคงอยู่เพราะระบบยังออนไลน์และเข้าถึงได้ตามปกติ
- ข้อ D ไม่ถูกต้อง: Non-repudiation เป็นเรื่องการยืนยันตัวตนผู้กระทำเพื่อไม่ให้ปฏิเสธได้ ไม่ใช่วัตถุประสงค์หลักที่ถูกทำลายในกรณีนี้

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option B):**
- **EN**: Integrity is the security objective focused on guarding against improper information modification, alteration, or destruction. In this scenario, prescription dosage values were altered without authorization, representing a direct compromise of data integrity.
- **TH**: Integrity (ความถูกต้องสมบูรณ์ของข้อมูล) คือเป้าหมายความมั่นคงปลอดภัยในการป้องกันการแก้ไข ดัดแปลง หรือทำลายข้อมูลโดยไม่ได้รับอนุญาต การที่ขนาดยาถูกเปลี่ยนแปลงถือเป็นการทำลายความถูกต้องของข้อมูลโดยตรง

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Confidentiality was not violated because data was not improperly disclosed outside the authorized environment.
  - **TH**: Confidentiality ไม่ถูกละเมิดเนื่องจากไม่มีการเปิดเผยข้อมูลแก่ผู้ไม่มีสิทธิ์
- **Option C**:
  - **EN**: Availability was maintained because the database remained fully online and accessible to authorized physicians.
  - **TH**: Availability ยังคงอยู่เพราะระบบยังออนไลน์และเข้าถึงได้ตามปกติ
- **Option D**:
  - **EN**: Non-repudiation concerns proving the identity of a sender or actor, which is secondary to the factual alteration of the clinical records.
  - **TH**: Non-repudiation เป็นเรื่องการยืนยันตัวตนผู้กระทำเพื่อไม่ให้ปฏิเสธได้ ไม่ใช่วัตถุประสงค์หลักที่ถูกทำลายในกรณีนี้

---

### Question 2 (ID: 585)

- **Question ID**: 585
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> A bank's customer service representatives must view customer payment histories to address transaction inquiries, but internal policy prohibits representatives from viewing full 16-digit payment card numbers. Which bounded security control BEST satisfies this confidentiality requirement without disrupting customer support operations?

**Thai (ภาษาไทย):**
> เจ้าหน้าที่บริการลูกค้าของธนาคารจำเป็นต้องดูประวัติการชำระเงินของลูกค้าเพื่อตอบข้อซักถาม แต่ตามนโยบายภายในห้ามไม่ให้เจ้าหน้าที่มองเห็นหมายเลขบัตรเครดิตครบทั้ง 16 หลัก มาตรการความปลอดภัยในข้อใดเหมาะสมที่สุดในการตอบสนองข้อกำหนดการรักษาความลับนี้โดยไม่กระทบต่อการให้บริการ?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Data masking that displays only the last four digits of the card number to representatives
  - **TH**: การทำ Data Masking โดยแสดงเฉพาะ 4 หลักสุดท้ายของหมายเลขบัตรแก่เจ้าหน้าที่
- **[Option B]**
  - **EN**: Full-disk encryption applied to the customer service department's workstations
  - **TH**: การเข้ารหัสทั้งฮาร์ดดิสก์ (Full-disk encryption) บนเครื่องคอมพิวเตอร์ของฝ่ายบริการลูกค้า
- **[Option C]**
  - **EN**: Discretionary access control granting representatives unrestricted read access to customer files
  - **TH**: การกำหนดสิทธิ์แบบดุลยพินิจ (DAC) โดยอนุญาตให้เจ้าหน้าที่อ่านข้อมูลลูกค้าได้อย่างอิสระ
- **[Option D]**
  - **EN**: Digital signatures applied to all incoming credit card transactions
  - **TH**: การใช้ลายมือชื่อดิจิทัล (Digital Signatures) กำกับทุกรายการธุรกรรมที่เข้ามา

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Data masking that displays only the last four digits of the card number to representatives
- **Thai Text**: การทำ Data Masking โดยแสดงเฉพาะ 4 หลักสุดท้ายของหมายเลขบัตรแก่เจ้าหน้าที่

#### Explanations

**Short Explanation (English):**
Data masking selectively obscures sensitive data fields while preserving operational utility for authorized users.

**Full Explanation (English):**
Data masking is a bounded confidentiality control that obscures sensitive elements of a dataset (such as displaying only the last four digits of a credit card number) while allowing authorized users to access necessary contextual information to perform their job duties. Full-disk encryption protects data at rest against physical machine theft, but authorized active users can still see the entire decrypted number. Unrestricted read access directly violates the confidentiality mandate by exposing the full number. Digital signatures provide integrity and authenticity verification, not display confidentiality.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: Data Masking (การพรางข้อมูล) คือมาตรการรักษาความลับที่ปิดบังข้อมูลส่วนที่ละเอียดอ่อน (เช่น การแสดงเฉพาะเลขท้าย 4 ตัว) ทำให้เจ้าหน้าที่สามารถตรวจสอบยืนยันกับลูกค้าได้โดยไม่ต้องเปิดเผยหมายเลขบัตรทั้งหมด
- ข้อ B ไม่ถูกต้อง: Full-disk encryption ป้องกันข้อมูลเมื่อเครื่องถูกขโมย แต่เมื่อเจ้าหน้าที่ล็อกอินทำงาน ข้อมูลจะถูกถอดรหัสและแสดงผลเต็มจำนวนอยู่ดี
- ข้อ C ไม่ถูกต้อง: การให้สิทธิ์อ่านทั้งหมดละเมิดนโยบายความลับโดยตรง
- ข้อ D ไม่ถูกต้อง: Digital signatures ใช้ตรวจสอบความถูกต้องและแหล่งที่มา (Integrity/Authenticity) ไม่ได้ใช้จำกัดการมองเห็นข้อมูล

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: Data masking is a bounded confidentiality control that obscures sensitive elements of a dataset (such as displaying only the last four digits of a credit card number) while allowing authorized users to access necessary contextual information to perform their job duties.
- **TH**: Data Masking (การพรางข้อมูล) คือมาตรการรักษาความลับที่ปิดบังข้อมูลส่วนที่ละเอียดอ่อน (เช่น การแสดงเฉพาะเลขท้าย 4 ตัว) ทำให้เจ้าหน้าที่สามารถตรวจสอบยืนยันกับลูกค้าได้โดยไม่ต้องเปิดเผยหมายเลขบัตรทั้งหมด

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Full-disk encryption protects data at rest against physical machine theft, but authorized active users can still see the entire decrypted number.
  - **TH**: Full-disk encryption ป้องกันข้อมูลเมื่อเครื่องถูกขโมย แต่เมื่อเจ้าหน้าที่ล็อกอินทำงาน ข้อมูลจะถูกถอดรหัสและแสดงผลเต็มจำนวนอยู่ดี
- **Option C**:
  - **EN**: Unrestricted read access directly violates the confidentiality mandate by exposing the full number.
  - **TH**: การให้สิทธิ์อ่านทั้งหมดละเมิดนโยบายความลับโดยตรง
- **Option D**:
  - **EN**: Digital signatures provide integrity and authenticity verification, not display confidentiality.
  - **TH**: Digital signatures ใช้ตรวจสอบความถูกต้องและแหล่งที่มา (Integrity/Authenticity) ไม่ได้ใช้จำกัดการมองเห็นข้อมูล

---

### Question 3 (ID: 586)

- **Question ID**: 586
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> An organization's primary datacenter is equipped with an uninterruptible power supply (UPS) system that sustains server operations for up to 30 minutes during a blackout. To ensure continuous availability during an extended utility power outage lasting several days, which mechanism should the organization deploy?

**Thai (ภาษาไทย):**
> ศูนย์ข้อมูลหลักขององค์กรมีการติดตั้งระบบจ่ายไฟสำรองแบบต่อเนื่อง (UPS) ซึ่งสามารถจ่ายพลังงานให้เซิร์ฟเวอร์ทำงานได้นานสูงสุด 30 นาทีเมื่อไฟดับ หากต้องการรักษาความพร้อมใช้งานอย่างต่อเนื่องในกรณีที่ไฟฟ้าดับเป็นเวลานานหลายวัน องค์กรควรติดตั้งกลไกใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: An on-site auxiliary diesel generator with dedicated fuel reserves
  - **TH**: เครื่องกำเนิดไฟฟ้าดีเซลสำรองในพื้นที่ (Auxiliary generator) พร้อมถังน้ำมันเชื้อเพลิงสำรอง
- **[Option B]**
  - **EN**: Redundant server power supplies connected to the same electrical breaker panel
  - **TH**: พาวเวอร์ซัพพลายแบบสำรองในเซิร์ฟเวอร์ที่เสียบเข้ากับแผงวงจรไฟฟ้าเดียวกัน
- **[Option C]**
  - **EN**: A storage area network (SAN) utilizing RAID 1 disk mirroring
  - **TH**: ระบบเครือข่ายจัดเก็บข้อมูล (SAN) ที่ใช้การจำลองข้อมูลแบบ RAID 1
- **[Option D]**
  - **EN**: Daily off-site magnetic tape backups stored in an archival facility
  - **TH**: การสำรองข้อมูลลงเทปแม่เหล็กทุกวันแล้วนำไปเก็บไว้ที่สถานที่จัดเก็บภายนอก

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: An on-site auxiliary diesel generator with dedicated fuel reserves
- **Thai Text**: เครื่องกำเนิดไฟฟ้าดีเซลสำรองในพื้นที่ (Auxiliary generator) พร้อมถังน้ำมันเชื้อเพลิงสำรอง

#### Explanations

**Short Explanation (English):**
Auxiliary generators provide secondary long-term power to sustain system availability when primary power and UPS batteries fail.

**Full Explanation (English):**
An auxiliary diesel generator provides continuous secondary electrical power once temporary battery-backed UPS reserves are depleted, ensuring extended operational availability during prolonged municipal power outages. Redundant power supplies connected to the same electrical panel will both fail if utility power is lost. RAID disk mirroring protects against individual drive failures, not power loss. Tape backups provide data restoration following a disaster, but cannot keep active systems running during a power interruption.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: เครื่องกำเนิดไฟฟ้าดีเซลสำรอง (Auxiliary generator) เป็นกลไกรักษา Availability ในระยะยาว ทำหน้าที่จ่ายไฟฟ้าทดแทนเมื่อแบตเตอรี่ UPS ที่จ่ายไฟได้เพียงระยะสั้น (30 นาที) หมดลง
- ข้อ B ไม่ถูกต้อง: พาวเวอร์ซัพพลายคู่ที่ต่อกับแผงไฟเดียวกันจะดับพร้อมกันเมื่อไฟดับทั้งอาคาร
- ข้อ C ไม่ถูกต้อง: RAID ป้องกันความเสียหายจากฮาร์ดดิสก์พัง ไม่ได้ป้องกันไฟฟ้าดับ
- ข้อ D ไม่ถูกต้อง: เทปสำรองข้อมูลใช้สำหรับการกู้คืนข้อมูล (Recovery) ไม่สามารถทำให้ระบบออนไลน์ต่อเนื่องระหว่างไฟดับได้

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: An auxiliary diesel generator provides continuous secondary electrical power once temporary battery-backed UPS reserves are depleted, ensuring extended operational availability during prolonged municipal power outages.
- **TH**: เครื่องกำเนิดไฟฟ้าดีเซลสำรอง (Auxiliary generator) เป็นกลไกรักษา Availability ในระยะยาว ทำหน้าที่จ่ายไฟฟ้าทดแทนเมื่อแบตเตอรี่ UPS ที่จ่ายไฟได้เพียงระยะสั้น (30 นาที) หมดลง

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Redundant power supplies connected to the same electrical panel will both fail if utility power is lost.
  - **TH**: พาวเวอร์ซัพพลายคู่ที่ต่อกับแผงไฟเดียวกันจะดับพร้อมกันเมื่อไฟดับทั้งอาคาร
- **Option C**:
  - **EN**: RAID disk mirroring protects against individual drive failures, not power loss.
  - **TH**: RAID ป้องกันความเสียหายจากฮาร์ดดิสก์พัง ไม่ได้ป้องกันไฟฟ้าดับ
- **Option D**:
  - **EN**: Tape backups provide data restoration following a disaster, but cannot keep active systems running during a power interruption.
  - **TH**: เทปสำรองข้อมูลใช้สำหรับการกู้คืนข้อมูล (Recovery) ไม่สามารถทำให้ระบบออนไลน์ต่อเนื่องระหว่างไฟดับได้

---

### Question 4 (ID: 587)

- **Question ID**: 587
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option B (Index: 1)

#### Question Text

**English:**
> A contractor whose contract ended two days ago attempts to log into the corporate payroll portal. The contractor successfully provides a valid username and password, but the system denies access because the account's role permissions were disabled immediately upon contract termination. Which phase of the AAA model successfully prevented unauthorized access?

**Thai (ภาษาไทย):**
> ผู้รับเหมาที่สิ้นสุดสัญญาจ้างไปแล้วเมื่อ 2 วันก่อน พยายามเข้าสู่ระบบพอร์ทัลเงินเดือนของบริษัท โดยสามารถกรอกชื่อผู้ใช้และรหัสผ่านที่ถูกต้องได้สำเร็จ แต่ระบบปฏิเสธการเข้าถึงเนื่องจากสิทธิ์ตามบทบาท (Role permissions) ของบัญชีถูกระงับทันทีหลังหมดสัญญาจ้าง ขั้นตอนใดของโมเดล AAA ที่ทำหน้าที่ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาตได้สำเร็จ?

#### Answer Choices

- **[Option A]**
  - **EN**: Authentication
  - **TH**: การพิสูจน์ตัวตน (Authentication)
- **[Option B]** *(Correct Answer)*
  - **EN**: Authorization
  - **TH**: การกำหนดและอนุญาตสิทธิ์ (Authorization)
- **[Option C]**
  - **EN**: Accounting
  - **TH**: การบันทึกและตรวจสอบกิจกรรม (Accounting)
- **[Option D]**
  - **EN**: Identification
  - **TH**: การระบุตัวตน (Identification)

#### Correct Answer Summary

- **Correct Choice**: Option B
- **English Text**: Authorization
- **Thai Text**: การกำหนดและอนุญาตสิทธิ์ (Authorization)

#### Explanations

**Short Explanation (English):**
Authorization determines and enforces what resources an authenticated identity is permitted to access.

**Full Explanation (English):**
Authorization is the phase of the AAA model that determines whether an authenticated entity is permitted to access a specific resource or execute specific actions. In this scenario, identification and authentication succeeded because the contractor presented valid credentials, but the system enforced authorization rules to deny access based on revoked privileges. Accounting tracks and logs user activity after access occurs, but does not make access-granting decisions.

**Full Explanation (Thai):**
ข้อ B ถูกต้อง: Authorization (การอนุญาตสิทธิ์) คือขั้นตอนที่ตรวจสอบว่าตัวตนที่ผ่านการพิสูจน์แล้วมีสิทธิ์เข้าถึงทรัพยากรหรือทำงานใดได้บ้าง ในกรณีนี้ผู้รับเหมาพิสูจน์ตัวตนผ่าน (Authentication สำเร็จ) แต่ระบบปฏิเสธการเข้าถึงเพราะสิทธิ์ถูกเพิกถอนไปแล้ว ซึ่งเป็นหน้าที่ของ Authorization
- ข้อ A ไม่ถูกต้อง: Authentication ทำหน้าที่ตรวจสอบความถูกต้องของรหัสผ่าน ซึ่งในข้อนี้ระบุว่ากรอกผ่านได้สำเร็จ
- ข้อ C ไม่ถูกต้อง: Accounting ทำหน้าที่บันทึกประวัติการใช้งาน ไม่ใช่ตัวตัดสินอนุญาตหรือปฏิเสธสิทธิ์
- ข้อ D ไม่ถูกต้อง: Identification คือการอ้างตัวตน (เช่น การป้อน username) ซึ่งเกิดขึ้นก่อนการตรวจสอบ

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option B):**
- **EN**: Authorization is the phase of the AAA model that determines whether an authenticated entity is permitted to access a specific resource or execute specific actions. In this scenario, identification and authentication succeeded because the contractor presented valid credentials, but the system enforced authorization rules to deny access based on revoked privileges.
- **TH**: Authorization (การกำหนดสิทธิ์) เป็นขั้นตอนในโมเดล AAA ที่ทำหน้าที่ตรวจสอบว่าผู้ใช้ที่ผ่านการยืนยันตัวตนแล้วมีสิทธิ์เข้าถึงทรัพยากรนั้นหรือไม่ ในกรณีนี้การพิสูจน์ตัวตนสำเร็จแต่ระบบบล็อกเพราะสิทธิ์ของบัญชีถูกระงับ

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Authentication succeeded when credentials were validated; it does not determine access permissions.
  - **TH**: Authentication ทำงานสำเร็จไปแล้วตอนตรวจรหัสผ่าน แต่ไม่ได้มีหน้าที่ตัดสินว่าเข้าถึงข้อมูลได้หรือไม่
- **Option C**:
  - **EN**: Accounting tracks and logs user activity after access occurs, but does not make access-granting decisions.
  - **TH**: Accounting เป็นการบันทึกประวัติการใช้งานหลังจากได้รับสิทธิ์แล้ว ไม่ใช่ขั้นตอนการตัดสินใจอนุญาตหรือปฏิเสธสิทธิ์
- **Option D**:
  - **EN**: Identification is simply claiming an identity (such as supplying a username) prior to authentication.
  - **TH**: Identification เป็นเพียงการระบุตัวตน (เช่น ป้อน Username) ซึ่งสำเร็จไปตั้งแต่ตอนล็อกอินแล้ว

---

### Question 5 (ID: 588)

- **Question ID**: 588
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option B (Index: 1)

#### Question Text

**English:**
> An organization's security policy requires multi-factor authentication (MFA) for administrative access. A systems administrator logs in by entering an alphanumeric password and a four-digit numeric PIN on the login screen. Why does this authentication mechanism FAIL to satisfy the MFA requirement?

**Thai (ภาษาไทย):**
> นโยบายความมั่นคงปลอดภัยขององค์กรกำหนดให้ต้องใช้ Multi-Factor Authentication (MFA) สำหรับการเข้าถึงระบบของผู้ดูแลระบบ ผู้ดูแลระบบคนหนึ่งล็อกอินเข้าสู่ระบบโดยกรอกรหัสผ่านตัวอักษรผสมตัวเลขและตามด้วยรหัส PIN ตัวเลข 4 หลักบนหน้าจอ เหตุใดกลไกการยืนยันตัวตนนี้จึงไม่ผ่านเกณฑ์ข้อกำหนด MFA?

#### Answer Choices

- **[Option A]**
  - **EN**: A four-digit PIN does not provide sufficient cryptographic entropy for administrative accounts
  - **TH**: รหัส PIN 4 หลักมีความซับซ้อน (Entropy) ไม่เพียงพอสำหรับบัญชีผู้ดูแลระบบ
- **[Option B]** *(Correct Answer)*
  - **EN**: Both credentials belong to the same factor category of 'something you know'
  - **TH**: ข้อมูลประจำตัวทั้งสองอย่างจัดอยู่ในประเภทปัจจัยเดียวกันคือ 'สิ่งที่คุณรู้' (Something you know)
- **[Option C]**
  - **EN**: Multi-factor authentication requires at least three independent credential types
  - **TH**: การยืนยันตัวตนแบบหลายปัจจัยจำเป็นต้องใช้ข้อมูลประจำตัวที่แตกต่างกันอย่างน้อย 3 ประเภทขึ้นไป
- **[Option D]**
  - **EN**: PIN codes can only be processed when entered on an approved hardware security token
  - **TH**: รหัส PIN สามารถประมวลผลได้ก็ต่อเมื่อกดผ่านอุปกรณ์ฮาร์ดแวร์โทเคน (Hardware token) เท่านั้น

#### Correct Answer Summary

- **Correct Choice**: Option B
- **English Text**: Both credentials belong to the same factor category of 'something you know'
- **Thai Text**: ข้อมูลประจำตัวทั้งสองอย่างจัดอยู่ในประเภทปัจจัยเดียวกันคือ 'สิ่งที่คุณรู้' (Something you know)

#### Explanations

**Short Explanation (English):**
Multi-factor authentication requires credentials from at least two distinct, independent factor categories.

**Full Explanation (English):**
Multi-factor authentication (MFA) requires the presentation of two or more credentials drawn from independent factor categories: something you know (knowledge), something you have (possession), or something you are (biometrics). A password and a PIN are both knowledge-based credentials ('something you know'). Using two items from the same factor category constitutes two-step or multi-credential authentication, but not multi-factor authentication. MFA requires two distinct categories, not necessarily three. PIN entropy and token format are implementation details that do not change factor taxonomy.

**Full Explanation (Thai):**
ข้อ B ถูกต้อง: Multi-Factor Authentication (MFA) ต้องใช้หลักฐานที่มาจากปัจจัยที่แตกต่างกันอย่างน้อย 2 ใน 3 ปัจจัย ได้แก่ สิ่งที่คุณรู้ (Know), สิ่งที่คุณมี (Have), และสิ่งที่คุณเป็น (Are) ทั้งรหัสผ่านและรหัส PIN จัดเป็น 'สิ่งที่คุณรู้' (Knowledge factor) ทั้งคู่ จึงเป็นเพียง Two-step authentication ไม่ใช่ MFA
- ข้อ A ไม่ถูกต้อง: แม้ PIN 4 หลักจะสั้น แต่นั่นไม่ใช่เหตุผลทางนิยามที่ทำให้ไม่เป็น MFA
- ข้อ C ไม่ถูกต้อง: MFA พื้นฐานต้องการเพียง 2 ปัจจัยที่ต่างกัน (Two-factor) ไม่จำเป็นต้องถึง 3 ปัจจัยเสมอไป
- ข้อ D ไม่ถูกต้อง: PIN สามารถตั้งและกรอกผ่านซอฟต์แวร์ได้ ไม่จำกัดเฉพาะฮาร์ดแวร์โทเคน

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option B):**
- **EN**: Accounting (and auditing) is the component of the AAA model responsible for logging, tracking, recording, and monitoring user and system actions, producing audit trails that prove who performed which action and when.
- **TH**: Accounting (การบันทึกและตรวจสอบกิจกรรม) คือองค์ประกอบของ AAA ที่ทำหน้าที่บันทึกเหตุการณ์ สร้าง Audit Log เพื่อให้สามารถตรวจสอบย้อนหลังได้ว่าใคร ทำอะไร ที่ไหน เมื่อใด

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Authentication verifies the truth of a claimed identity, not post-access activity logging.
  - **TH**: Authentication มีหน้าที่ตรวจสอบความถูกต้องของตัวตนตอนล็อกอิน ไม่ได้บันทึกกิจกรรมย้อนหลัง
- **Option C**:
  - **EN**: Authorization defines what actions an authenticated user is permitted to perform.
  - **TH**: Authorization เป็นการกำหนดสิทธิ์การเข้าถึง ไม่ใช่การบันทึกประวัติย้อนหลัง
- **Option D**:
  - **EN**: Identification provides an identity claim before authentication begins.
  - **TH**: Identification เป็นขั้นตอนการแสดงตนเบื้องต้นเท่านั้น

---

### Question 6 (ID: 589)

- **Question ID**: 589
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option C (Index: 2)

#### Question Text

**English:**
> A digital retail company collects customer shipping addresses and payment details to fulfill online purchases. The retailer contracts a third-party cloud hosting provider to store the customer database and execute queries solely based on the retailer's written instructions. In the context of data privacy governance, which role does the cloud provider represent?

**Thai (ภาษาไทย):**
> บริษัทค้าปลีกออนไลน์แห่งหนึ่งเก็บรวบรวมที่อยู่จัดส่งและข้อมูลการชำระเงินของลูกค้าเพื่อจัดส่งสินค้า โดยบริษัทได้ทำสัญญากับผู้ให้บริการคลาวด์ภายนอกเพื่อจัดเก็บฐานข้อมูลลูกค้าและประมวลผลคำสั่งตามคำสั่งเป็นลายลักษณ์อักษรของบริษัทค้าปลีกเท่านั้น ในบริบทของการกำกับดูแลความเป็นส่วนตัวของข้อมูล (Data Privacy) ผู้ให้บริการคลาวด์นี้ทำหน้าที่ในบทบาทใด?

#### Answer Choices

- **[Option A]**
  - **EN**: Data Subject
  - **TH**: เจ้าของข้อมูลส่วนบุคคล (Data Subject)
- **[Option B]**
  - **EN**: Data Controller
  - **TH**: ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)
- **[Option C]** *(Correct Answer)*
  - **EN**: Data Processor
  - **TH**: ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor)
- **[Option D]**
  - **EN**: Data Protection Authority
  - **TH**: องค์กรกำกับดูแลการคุ้มครองข้อมูลส่วนบุคคล (Data Protection Authority)

#### Correct Answer Summary

- **Correct Choice**: Option C
- **English Text**: Data Processor
- **Thai Text**: ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor)

#### Explanations

**Short Explanation (English):**
A Data Processor processes personal information on behalf of and strictly according to the instructions of the Data Controller.

**Full Explanation (English):**
A Data Processor is an entity that processes personal data on behalf of and under the direct instructions of the data controller. The cloud hosting provider stores and manages the data strictly according to the retailer's directions without determining the purpose or legal basis of the processing. The online retailer is the Data Controller because it determines the purposes and means of processing. The customers whose information is collected are the Data Subjects. A Data Protection Authority is an independent public regulatory body overseeing privacy laws.

**Full Explanation (Thai):**
ข้อ C ถูกต้อง: ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor) คือบุคคลหรือนิติบุคคลที่ดำเนินการประมวลผลข้อมูลส่วนบุคคลในนามหรือตามคำสั่งของผู้ควบคุมข้อมูล ผู้ให้บริการคลาวด์ที่ทำหน้าที่เก็บและประมวลผลตามคำสั่งของบริษัทค้าปลีกจึงมีสถานะเป็น Data Processor
- ข้อ A ไม่ถูกต้อง: Data Subject คือตัวลูกค้าซึ่งเป็นบุคคลธรรมดาที่เป็นเจ้าของข้อมูล
- ข้อ B ไม่ถูกต้อง: Data Controller คือบริษัทค้าปลีกเอง เนื่องจากเป็นผู้กำหนดวัตถุประสงค์และวิธีการในการเก็บรวบรวมและใช้ข้อมูล
- ข้อ D ไม่ถูกต้อง: Data Protection Authority คือหน่วยงานรัฐที่กำกับดูแลกฎหมายคุ้มครองข้อมูลส่วนบุคคล

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option C):**
- **EN**: Non-repudiation provides indisputable proof of the origin, authenticity, and integrity of data, preventing an author or sender from falsely denying having performed an action or sent a communication. Asymmetric digital signatures combined with secure timestamps achieve non-repudiation.
- **TH**: Non-repudiation (การไม่สามารถปฏิเสธความรับผิดได้) คือคุณสมบัติความปลอดภัยที่ให้หลักฐานที่ไม่อาจโต้แย้งได้ว่าใครเป็นผู้กระทำหรือส่งข้อมูล ทำให้ผู้กระทำไม่สามารถปฏิเสธความรับผิดชอบได้ การใช้ Digital Signature ร่วมกับ Timestamp เป็นตัวอย่างที่ชัดเจนที่สุด

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Symmetric encryption provides confidentiality, but because both parties share the exact same key, either party could have generated the ciphertext, failing to provide non-repudiation.
  - **TH**: Symmetric encryption ใช้กุญแจลับร่วมกัน ทำให้ไม่สามารถพิสูจน์ได้ว่าฝ่ายใดเป็นผู้ส่งอย่างแท้จริง จึงไม่รองรับ Non-repudiation
- **Option B**:
  - **EN**: High-availability clustering guarantees operational uptime, not message provenance or individual accountability.
  - **TH**: High-availability clustering เน้นความพร้อมใช้งาน (Availability) ไม่เกี่ยวข้องกับการพิสูจน์ตัวตนผู้ส่ง
- **Option D**:
  - **EN**: Shared departmental accounts prevent establishing individual accountability, destroying non-repudiation.
  - **TH**: Shared departmental accounts ทำลายหลักการ Non-repudiation โดยตรงเพราะไม่สามารถระบุตัวบุคคลผู้กระทำได้

---

### Question 7 (ID: 590)

- **Question ID**: 590
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option B (Index: 1)

#### Question Text

**English:**
> An information security officer is conducting an internal data mapping exercise. The officer needs to determine what categories of sensitive information exist across enterprise file shares, where the data is physically and logically stored, and which business units own each dataset. Which data governance component directly fulfills this need?

**Thai (ภาษาไทย):**
> เจ้าหน้าที่ความมั่นคงปลอดภัยสารสนเทศกำลังจัดทำแผนผังข้อมูลภายในองค์กร โดยจำเป็นต้องระบุว่ามีข้อมูลสำคัญประเภทใดบ้างในระบบแชร์ไฟล์ ข้อมูลนั้นถูกจัดเก็บไว้ที่ใดทั้งทางกายภาพและเชิงตรรกะ และหน่วยงานใดเป็นเจ้าของข้อมูลแต่ละชุด ส่วนประกอบใดของการกำกับดูแลข้อมูลที่ตอบสนองความต้องการนี้โดยตรง?

#### Answer Choices

- **[Option A]**
  - **EN**: Data retention policy
  - **TH**: นโยบายการเก็บรักษาข้อมูล (Data retention policy)
- **[Option B]** *(Correct Answer)*
  - **EN**: Data inventory
  - **TH**: การจัดทำบัญชีรายการข้อมูล (Data inventory)
- **[Option C]**
  - **EN**: Data sanitization schedule
  - **TH**: ตารางการทำลายข้อมูลอย่างปลอดภัย (Data sanitization schedule)
- **[Option D]**
  - **EN**: Data masking standard
  - **TH**: มาตรฐานการพรางข้อมูล (Data masking standard)

#### Correct Answer Summary

- **Correct Choice**: Option B
- **English Text**: Data inventory
- **Thai Text**: การจัดทำบัญชีรายการข้อมูล (Data inventory)

#### Explanations

**Short Explanation (English):**
A data inventory catalogs information assets, their storage locations, sensitivity levels, and assigned owners.

**Full Explanation (English):**
A data inventory (or data asset catalog) identifies what information assets exist, their classification, their storage locations, and their assigned business owners. In contrast, a data retention policy establishes timeframes for how long records must be kept and when they must be destroyed. A data sanitization schedule specifies operational procedures for wiping or destroying retired physical media. A data masking standard defines formatting rules for obscuring sensitive fields from unauthorized viewers.

**Full Explanation (Thai):**
ข้อ B ถูกต้อง: Data Inventory (การจัดทำบัญชีรายการข้อมูล) เป็นกระบวนการสำรวจและบันทึกว่าองค์กรครอบครองข้อมูลประเภทใดบ้าง จัดเก็บอยู่ที่ไหน (Location) และใครเป็นผู้รับผิดชอบ (Ownership) เพื่อเป็นรากฐานในการคุ้มครองข้อมูล
- ข้อ A ไม่ถูกต้อง: Data retention policy กำหนดระยะเวลาว่าต้องเก็บข้อมูลไว้นานเท่าใดและทำลายเมื่อใด
- ข้อ C ไม่ถูกต้อง: Data sanitization schedule คือกำหนดการลบหรือทำลายสื่อบันทึกข้อมูลอย่างถาวร
- ข้อ D ไม่ถูกต้อง: Data masking standard คือแนวทางปฏิบัติในการปิดบังข้อมูลบางส่วนเพื่อความปลอดภัย

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option B):**
- **EN**: In cybersecurity risk taxonomy, a Threat is any potential circumstance, event, or entity with the capability to exploit a vulnerability and cause harm or loss to an asset. The adversarial phishing group is the threat actor initiating the threat event.
- **TH**: Threat (ภัยคุกคาม) คือเหตุการณ์ สภาวการณ์ หรือบุคคล/กลุ่มบุคคลที่มีศักยภาพในการแสวงหาประโยชน์จากช่องโหว่เพื่อสร้างความเสียหายต่อทรัพย์สิน ในกรณีนี้กลุ่มแฮกเกอร์และแคมเปญ Phishing ถือเป็นภัยคุกคามโดยตรง

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: A Vulnerability is an inherent weakness, flaw, or gap in security procedures or systems (such as lack of employee training).
  - **TH**: Vulnerability คือจุดอ่อนหรือช่องโหว่ เช่น การที่พนักงานยังไม่ได้รับการอบรม
- **Option C**:
  - **EN**: An Impact is the measured magnitude of harm or loss resulting from an exploited vulnerability.
  - **TH**: Impact คือขนาดของความเสียหายที่เกิดขึ้นหากถูกโจมตีสำเร็จ
- **Option D**:
  - **EN**: Residual risk is the remaining risk after controls are implemented.
  - **TH**: Residual risk คือความเสี่ยงที่เหลืออยู่หลังติดตั้งมาตรการควบคุมแล้ว

---

### Question 8 (ID: 591)

- **Question ID**: 591
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option C (Index: 2)

#### Question Text

**English:**
> During a threat modeling session, an analyst reviews the following scenario: 'An internet-facing web server contains an unpatched vulnerability that allows arbitrary code execution. Malicious threat actors are actively scanning the subnet, which could lead to unauthorized access to the customer database.' In this relational risk analysis, what does the unpatched code execution flaw represent?

**Thai (ภาษาไทย):**
> ในระหว่างการประชุมประเมินภัยคุกคาม นักวิเคราะห์ได้ทบทวนสถานการณ์ต่อไปนี้: 'เว็บเซิร์ฟเวอร์ที่เชื่อมต่อกับอินเทอร์เน็ตมีช่องโหว่ที่ยังไม่ได้รับการแพตช์ซึ่งเปิดทางให้รันโค้ดแปลกปลอมได้ แฮกเกอร์กำลังสแกนซับเน็ตนี้อย่างต่อเนื่อง ซึ่งอาจนำไปสู่การเข้าถึงฐานข้อมูลลูกค้าโดยไม่ได้รับอนุญาต' ในการวิเคราะห์ความเสี่ยงนี้ ข้อบกพร่องของซอฟต์แวร์ที่ยังไม่ได้รับการแพตช์จัดเป็นอะไร?

#### Answer Choices

- **[Option A]**
  - **EN**: Asset
  - **TH**: ทรัพย์สิน (Asset)
- **[Option B]**
  - **EN**: Threat
  - **TH**: ภัยคุกคาม (Threat)
- **[Option C]** *(Correct Answer)*
  - **EN**: Vulnerability
  - **TH**: ช่องโหว่ (Vulnerability)
- **[Option D]**
  - **EN**: Impact
  - **TH**: ผลกระทบ (Impact)

#### Correct Answer Summary

- **Correct Choice**: Option C
- **English Text**: Vulnerability
- **Thai Text**: ช่องโหว่ (Vulnerability)

#### Explanations

**Short Explanation (English):**
A vulnerability is an exploitable flaw or weakness in a system or control.

**Full Explanation (English):**
A vulnerability is a flaw, weakness, or gap in security procedures, design, implementation, or internal controls that can be exploited by a threat. An unpatched software flaw is the classic definition of a vulnerability. The asset is the web server or customer database. The threat is the potential occurrence of an unauthorized compromise or the malicious actors conducting scans. The impact is the resulting damage, such as unauthorized disclosure of confidential customer records.

**Full Explanation (Thai):**
ข้อ C ถูกต้อง: ช่องโหว่ (Vulnerability) คือจุดอ่อน ข้อบกพร่อง หรือความผิดพลาดในระบบ โปรแกรม หรือกระบวนการ ซึ่งสามารถถูกเจาะหรือใช้ประโยชน์โดยภัยคุกคามได้ ซอฟต์แวร์ที่ยังไม่ลงแพตช์จึงเป็นตัวอย่างที่ชัดเจนของช่องโหว่
- ข้อ A ไม่ถูกต้อง: ทรัพย์สิน (Asset) คือเว็บเซิร์ฟเวอร์หรือฐานข้อมูลลูกค้าที่มีมูลค่าต่อองค์กร
- ข้อ B ไม่ถูกต้อง: ภัยคุกคาม (Threat) คือเหตุการณ์หรือตัวกระทำที่อาจก่อให้เกิดความเสียหาย เช่น แฮกเกอร์หรือการโจมตีทางไซเบอร์
- ข้อ D ไม่ถูกต้อง: ผลกระทบ (Impact) คือความเสียหายหรือความสูญเสียที่เกิดขึ้นหากการโจมตีสำเร็จ เช่น ข้อมูลลูกค้าถูกขโมย

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option C):**
- **EN**: Risk fundamentally represents the likelihood and impact of a Threat exploiting a Vulnerability to cause harm to an Asset (Risk = Threat × Vulnerability × Asset value/Impact). Without an asset to protect, a vulnerability in that asset, and a threat capable of exploiting it, risk does not exist.
- **TH**: Risk (ความเสี่ยง) เกิดจากจุดตัดของ 3 องค์ประกอบหลัก ได้แก่: ภัยคุกคาม (Threat) เข้ามาแสวงหาประโยชน์จาก ช่องโหว่ (Vulnerability) ที่มีอยู่ เพื่อสร้างความเสียหายต่อ ทรัพย์สิน (Asset) ขององค์กร หากขาดองค์ประกอบใดองค์ประกอบหนึ่ง ความเสี่ยงทางความปลอดภัยจะไม่เกิดขึ้น

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Excluding threats overlooks the active source of harm.
  - **TH**: การมองข้าม Threat ทำให้ขาดปัจจัยที่จะเข้ามาโจมตี
- **Option B**:
  - **EN**: Excluding assets means there is nothing of value at risk.
  - **TH**: การไม่มี Asset หมายถึงไม่มีสิ่งมีค่าใดๆ ที่ต้องปกป้อง
- **Option D**:
  - **EN**: Treating controls as primary components confuses safeguards with the inherent risk equation.
  - **TH**: Controls เป็นมาตรการควบคุมเพื่อลดความเสี่ยง ไม่ใช่องค์ประกอบพื้นฐานที่ก่อให้เกิดความเสี่ยง

---

### Question 9 (ID: 592)

- **Question ID**: 592
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option B (Index: 1)

#### Question Text

**English:**
> A security manager leads a risk assessment workshop with cross-functional department heads. Because the organization has limited actuarial loss data, the team evaluates identified risks by assigning descriptive rankings of 'High', 'Medium', or 'Low' based on operational experience and collective consensus. Which risk assessment methodology is the manager using?

**Thai (ภาษาไทย):**
> ผู้จัดการฝ่ายความมั่นคงปลอดภัยจัดเวิร์กช็อปประเมินความเสี่ยงร่วมกับหัวหน้าแผนกต่างๆ เนื่องจากองค์กรมีข้อมูลสถิติความสูญเสียทางการเงินในอดีตอย่างจำกัด ทีมงานจึงประเมินความเสี่ยงที่พบโดยใช้การจัดอันดับเชิงพรรณนา เช่น 'สูง', 'ปานกลาง' หรือ 'ต่ำ' ตามประสบการณ์และการระดมสมองร่วมกัน ผู้จัดการกำลังใช้วิธีการประเมินความเสี่ยงแบบใด?

#### Answer Choices

- **[Option A]**
  - **EN**: Quantitative risk analysis
  - **TH**: การวิเคราะห์ความเสี่ยงเชิงปริมาณ (Quantitative risk analysis)
- **[Option B]** *(Correct Answer)*
  - **EN**: Qualitative risk analysis
  - **TH**: การวิเคราะห์ความเสี่ยงเชิงคุณภาพ (Qualitative risk analysis)
- **[Option C]**
  - **EN**: Residual risk calculation
  - **TH**: การคำนวณความเสี่ยงที่เหลืออยู่ (Residual risk calculation)
- **[Option D]**
  - **EN**: Total cost of ownership analysis
  - **TH**: การวิเคราะห์ต้นทุนรวมในการเป็นเจ้าของ (Total cost of ownership analysis)

#### Correct Answer Summary

- **Correct Choice**: Option B
- **English Text**: Qualitative risk analysis
- **Thai Text**: การวิเคราะห์ความเสี่ยงเชิงคุณภาพ (Qualitative risk analysis)

#### Explanations

**Short Explanation (English):**
Qualitative risk analysis uses subjective judgment and descriptive scales rather than numerical financial metrics.

**Full Explanation (English):**
Qualitative risk analysis uses descriptive scales, expert judgment, and experiential categorization (such as High, Medium, and Low) to evaluate and prioritize risks based on likelihood and impact. It does not attempt to assign precise numerical dollar amounts. In contrast, quantitative risk analysis relies on numerical and financial calculations, such as monetary loss figures and annual frequencies. Residual risk is the risk remaining after controls are implemented, and total cost of ownership evaluates asset purchase and maintenance expenses.

**Full Explanation (Thai):**
ข้อ B ถูกต้อง: Qualitative Risk Analysis (การวิเคราะห์ความเสี่ยงเชิงคุณภาพ) เป็นการประเมินความเสี่ยงโดยใช้ดุลยพินิจของผู้เชี่ยวชาญ การระดมสมอง และการจัดลำดับด้วยคำอธิบายเชิงคุณภาพ เช่น สูง/กลาง/ต่ำ โดยไม่ต้องใช้ตัวเลขทางการเงินที่แน่ชัด เหมาะกับองค์กรที่ไม่มีข้อมูลสถิติตัวเลขในอดีต
- ข้อ A ไม่ถูกต้อง: Quantitative risk analysis ต้องคำนวณเป็นตัวเลขทางการเงินและความถี่ทางสถิติที่แน่นอน
- ข้อ C ไม่ถูกต้อง: Residual risk คือความเสี่ยงที่ยังคงเหลืออยู่หลังใช้มาตรการควบคุม ไม่ใช่ชื่อวิธีประเมิน
- ข้อ D ไม่ถูกต้อง: Total cost of ownership เป็นการคำนวณค่าใช้จ่ายในการจัดซื้อและดูแลรักษาระบบ ไม่ใช่การประเมินความเสี่ยง

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option B):**
- **EN**: Qualitative Risk Analysis uses descriptive, categorical scales (such as High, Medium, Low) and expert judgment, interviews, and workshops to evaluate and prioritize risks based on relative likelihood and subjective impact. It is ideal when numerical loss history or precise financial data is unavailable.
- **TH**: Qualitative Risk Analysis (การวิเคราะห์ความเสี่ยงเชิงคุณภาพ) เป็นการประเมินความเสี่ยงโดยใช้ดุลยพินิจของผู้เชี่ยวชาญ การระดมสมอง และการจัดลำดับด้วยคำอธิบายเชิงคุณภาพ เช่น สูง/กลาง/ต่ำ โดยไม่ต้องใช้ตัวเลขทางการเงินที่แน่ชัด เหมาะกับองค์กรที่ไม่มีข้อมูลสถิติตัวเลขในอดีต

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Quantitative risk analysis requires precise monetary valuations and numerical calculations (such as SLE, ARO, and ALE).
  - **TH**: Quantitative risk analysis ต้องคำนวณเป็นตัวเลขทางการเงินและความถี่ทางสถิติที่แน่นอน
- **Option C**:
  - **EN**: Residual risk is the risk remaining after safeguards, not an analysis methodology.
  - **TH**: Residual risk คือความเสี่ยงที่ยังคงเหลืออยู่หลังใช้มาตรการควบคุม ไม่ใช่ชื่อวิธีประเมิน
- **Option D**:
  - **EN**: Total cost of ownership assesses acquisition and operating costs, not risk probability or impact.
  - **TH**: Total cost of ownership เป็นการคำนวณค่าใช้จ่ายในการจัดซื้อและดูแลรักษาระบบ ไม่ใช่การประเมินความเสี่ยง

---

### Question 10 (ID: 593)

- **Question ID**: 593
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option B (Index: 1)

#### Question Text

**English:**
> Six months ago, an enterprise formally accepted the risk of operating an unpatched internal document archive because it was completely isolated from the internet. Recently, the engineering department connected this archive to a public cloud storage service to enable remote collaboration. In accordance with the risk management lifecycle, how should the organization respond to this operational change?

**Thai (ภาษาไทย):**
> เมื่อ 6 เดือนก่อน องค์กรแห่งหนึ่งได้ยอมรับความเสี่ยง (Risk Acceptance) อย่างเป็นทางการในการใช้งานระบบจัดเก็บเอกสารภายในที่ยังไม่ได้ลงแพตช์ เนื่องจากระบบถูกตัดขาดจากอินเทอร์เน็ตโดยสิ้นเชิง แต่เมื่อเร็วๆ นี้ แผนกวิศวกรรมได้เชื่อมต่อระบบนี้เข้ากับคลาวด์เพื่อทำงานร่วมกันจากระยะไกล ตามวงจรการบริหารความเสี่ยง องค์กรควรตอบสนองต่อการเปลี่ยนแปลงนี้อย่างไร?

#### Answer Choices

- **[Option A]**
  - **EN**: Maintain the existing risk acceptance record until the scheduled annual audit cycle concludes
  - **TH**: คงสถานะการยอมรับความเสี่ยงเดิมไว้จนกว่าจะครบรอบการตรวจสอบประจำปี
- **[Option B]** *(Correct Answer)*
  - **EN**: Reassess the risk immediately under the Monitor and Review process because the exposure context has changed
  - **TH**: ทำการประเมินความเสี่ยงใหม่อีกครั้งทันทีในขั้นตอน Monitor and Review เนื่องจากบริบทความเสี่ยงเปลี่ยนไป
- **[Option C]**
  - **EN**: Automatically transfer the risk to an insurance policy without conducting a technical review
  - **TH**: โอนย้ายความเสี่ยงไปให้บริษัทประกันภัยโดยอัตโนมัติโดยไม่ต้องตรวจสอบทางเทคนิค
- **[Option D]**
  - **EN**: Terminate the remote collaboration project immediately because accepted risks can never be altered
  - **TH**: สั่งยกเลิกโครงการทำงานร่วมกันผ่านคลาวด์ทันทีเพราะระบบที่เคยยอมรับความเสี่ยงไปแล้วห้ามเปลี่ยนแปลงใดๆ

#### Correct Answer Summary

- **Correct Choice**: Option B
- **English Text**: Reassess the risk immediately under the Monitor and Review process because the exposure context has changed
- **Thai Text**: ทำการประเมินความเสี่ยงใหม่อีกครั้งทันทีในขั้นตอน Monitor and Review เนื่องจากบริบทความเสี่ยงเปลี่ยนไป

#### Explanations

**Short Explanation (English):**
Risk management is a continuous process requiring reassessment whenever operational or technological conditions change.

**Full Explanation (English):**
Risk management is a continuous lifecycle. Under the Monitor and Review phase, organizations must regularly evaluate existing risks and reassess previously accepted risks whenever significant operational, technological, or environmental changes occur. Connecting a previously isolated system to the public internet alters its threat environment and attack surface, rendering prior risk acceptance assumptions invalid. Risk acceptance is not an indefinite exemption, insurance requires informed assessment, and operational changes require review rather than arbitrary termination.

**Full Explanation (Thai):**
ข้อ B ถูกต้อง: การบริหารความเสี่ยงเป็นกระบวนการต่อเนื่อง (Continuous process) ในขั้นตอน Monitor and Review ความเสี่ยงที่เคยยอมรับไว้ (Accepted risk) จะต้องถูกนำมาทบทวนและประเมินใหม่เสมอเมื่อมีสภาพแวดล้อม เทคโนโลยี หรือสถาปัตยกรรมระบบที่เปลี่ยนแปลงไป การนำระบบที่ไม่ลงแพตช์ไปต่ออินเทอร์เน็ตทำให้ระดับความเสี่ยงเพิ่มขึ้นอย่างมีนัยสำคัญ
- ข้อ A ไม่ถูกต้อง: การยอมรับความเสี่ยงไม่ใช่การละเลยจนกว่าจะครบรอบปี หากมีการเปลี่ยนแปลงสำคัญต้องทบทวนทันที
- ข้อ C ไม่ถูกต้อง: การทำประกันภัยไม่สามารถทำได้โดยไม่ประเมินความเสี่ยง และไม่ช่วยลดความเสี่ยงทางเทคนิค
- ข้อ D ไม่ถูกต้อง: การบริหารความเสี่ยงมีเป้าหมายเพื่อสนับสนุนธุรกิจ การเปลี่ยนแปลงระบบสามารถทำได้หากประเมินและควบคุมความเสี่ยงอย่างเหมาะสม

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option B):**
- **EN**: Risk management is a continuous lifecycle. Under the Monitor and Review phase, organizations must regularly evaluate existing risks and reassess previously accepted risks whenever significant operational, technological, or environmental changes occur. Connecting a previously isolated system to the public internet alters its threat environment and attack surface, rendering prior risk acceptance assumptions invalid.
- **TH**: การบริหารความเสี่ยงเป็นกระบวนการต่อเนื่อง (Continuous process) ในขั้นตอน Monitor and Review ความเสี่ยงที่เคยยอมรับไว้ (Accepted risk) จะต้องถูกนำมาทบทวนและประเมินใหม่เสมอเมื่อมีสภาพแวดล้อม เทคโนโลยี หรือสถาปัตยกรรมระบบที่เปลี่ยนแปลงไป การนำระบบที่ไม่ลงแพตช์ไปต่ออินเทอร์เน็ตทำให้ระดับความเสี่ยงเพิ่มขึ้นอย่างมีนัยสำคัญ

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Risk acceptance is not an indefinite exemption; significant architectural changes require immediate re-evaluation.
  - **TH**: การยอมรับความเสี่ยงไม่ใช่การละเลยจนกว่าจะครบรอบปี หากมีการเปลี่ยนแปลงสำคัญต้องทบทวนทันที
- **Option C**:
  - **EN**: Purchasing insurance without understanding new technical exposure is negligent and ineffective.
  - **TH**: การทำประกันภัยไม่สามารถทำได้โดยไม่ประเมินความเสี่ยง และไม่ช่วยลดความเสี่ยงทางเทคนิค
- **Option D**:
  - **EN**: Arbitrarily halting business operations contradicts the business-enabling purpose of risk management.
  - **TH**: การบริหารความเสี่ยงมีเป้าหมายเพื่อสนับสนุนธุรกิจ การเปลี่ยนแปลงระบบสามารถทำได้หากประเมินและควบคุมความเสี่ยงอย่างเหมาะสม

---

### Question 11 (ID: 594)

- **Question ID**: 594
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option B (Index: 1)

#### Question Text

**English:**
> A logistics company evaluates the financial exposure associated with potential warehouse fire damage to its server infrastructure. The executive leadership decides to purchase a comprehensive commercial cyber and property insurance policy that covers recovery costs and business interruption losses resulting from a catastrophe. Which risk treatment strategy has the company executed?

**Thai (ภาษาไทย):**
> บริษัทโลจิสติกส์แห่งหนึ่งประเมินผลกระทบทางการเงินที่อาจเกิดขึ้นจากเหตุเพลิงไหม้คลังสินค้าซึ่งมีเซิร์ฟเวอร์ติดตั้งอยู่ ผู้บริหารระดับสูงตัดสินใจซื้อกรมธรรม์ประกันภัยทรัพย์สินและไซเบอร์เพื่อชดเชยค่าใช้จ่ายในการกู้คืนระบบและความสูญเสียจากการหยุดชะงักทางธุรกิจหากเกิดภัยพิบัติ บริษัทได้ดำเนินกลยุทธ์จัดการความเสี่ยงแบบใด?

#### Answer Choices

- **[Option A]**
  - **EN**: Risk Mitigation
  - **TH**: การบรรเทาความเสี่ยง (Risk Mitigation)
- **[Option B]** *(Correct Answer)*
  - **EN**: Risk Transfer
  - **TH**: การโอนย้ายความเสี่ยง (Risk Transfer)
- **[Option C]**
  - **EN**: Risk Avoidance
  - **TH**: การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)
- **[Option D]**
  - **EN**: Risk Acceptance
  - **TH**: การยอมรับความเสี่ยง (Risk Acceptance)

#### Correct Answer Summary

- **Correct Choice**: Option B
- **English Text**: Risk Transfer
- **Thai Text**: การโอนย้ายความเสี่ยง (Risk Transfer)

#### Explanations

**Short Explanation (English):**
Risk transfer shifts financial loss exposure to a third party, such as an insurance underwriter.

**Full Explanation (English):**
Risk Transfer involves shifting or sharing financial loss exposure with a third party, most commonly through insurance policies, indemnification clauses, or outsourcing contracts. Purchasing an insurance policy to cover monetary losses from physical disaster is the primary example of risk transfer. Risk mitigation implements safeguards to reduce likelihood or impact. Risk avoidance ceases the activity altogether. Risk acceptance absorbs potential losses without additional safeguards or insurance.

**Full Explanation (Thai):**
ข้อ B ถูกต้อง: Risk Transfer (การโอนความเสี่ยง) คือการย้ายหรือแบ่งปันภาระความสูญเสียทางการเงินไปให้บุคคลที่สาม โดยวิธีการที่พบบ่อยที่สุดคือการทำประกันภัย (Insurance) หรือการทำสัญญาจ้างภายนอก
- ข้อ A ไม่ถูกต้อง: Risk Mitigation คือการใช้มาตรการควบคุมเพื่อลดโอกาสหรือผลกระทบ เช่น ติดตั้งระบบดับเพลิงอัตโนมัติ
- ข้อ C ไม่ถูกต้อง: Risk Avoidance คือการยกเลิกกิจกรรมนั้นไปเลย เช่น เลิกตั้งเซิร์ฟเวอร์ในคลังสินค้า
- ข้อ D ไม่ถูกต้อง: Risk Acceptance คือการรับรู้ความเสี่ยงและพร้อมรับผลกระทบด้วยตนเองโดยไม่ทำประกันหรือเพิ่มมาตรการใดๆ

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option B):**
- **EN**: Risk Transfer involves shifting or sharing financial loss exposure with a third party, most commonly through insurance policies, indemnification clauses, or outsourcing contracts. Purchasing an insurance policy to cover monetary losses from physical disaster is the primary example of risk transfer.
- **TH**: Risk Transfer (การโอนความเสี่ยง) คือการย้ายหรือแบ่งปันภาระความสูญเสียทางการเงินไปให้บุคคลที่สาม โดยวิธีการที่พบบ่อยที่สุดคือการทำประกันภัย (Insurance) หรือการทำสัญญาจ้างภายนอก

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Risk Mitigation implements safeguards (such as fire suppression) to reduce likelihood or impact.
  - **TH**: Risk Mitigation คือการใช้มาตรการควบคุมเพื่อลดโอกาสหรือผลกระทบ เช่น ติดตั้งระบบดับเพลิงอัตโนมัติ
- **Option C**:
  - **EN**: Risk Avoidance eliminates exposure by discontinuing the activity (e.g., closing the datacenter).
  - **TH**: Risk Avoidance คือการยกเลิกกิจกรรมนั้นไปเลย เช่น เลิกตั้งเซิร์ฟเวอร์ในคลังสินค้า
- **Option D**:
  - **EN**: Risk Acceptance absorbs potential losses without additional safeguards or insurance.
  - **TH**: Risk Acceptance คือการรับรู้ความเสี่ยงและพร้อมรับผลกระทบด้วยตนเองโดยไม่ทำประกันหรือเพิ่มมาตรการใดๆ

---

### Question 12 (ID: 595)

- **Question ID**: 595
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> A healthcare provider explores implementing an experimental generative artificial intelligence platform to summarize patient consultation audio recordings. Following a security and compliance assessment, the compliance committee determines that the legal liability and privacy breach risks exceed organizational tolerance, and current vendor safeguards cannot sufficiently guarantee data protection. Consequently, the organization decides not to purchase or deploy the AI platform. Which risk treatment strategy was applied?

**Thai (ภาษาไทย):**
> ผู้ให้บริการทางการแพทย์แห่งหนึ่งกำลังพิจารณานำแพลตฟอร์มปัญญาประดิษฐ์ (AI) แบบ Generative มาใช้สรุปเสียงการให้คำปรึกษาแก่ผู้ป่วย หลังจากการประเมินด้านความปลอดภัยและการปฏิบัติตามกฎหมาย คณะกรรมการพบว่าความเสี่ยงด้านความรับผิดชอบทางกฎหมายและข้อมูลรั่วไหลสูงเกินกว่าระดับที่องค์กรยอมรับได้ และไม่มีมาตรการควบคุมใดของผู้ขายที่รัดกุมเพียงพอ องค์กรจึงตัดสินใจไม่จัดซื้อและไม่ใช้งานแพลตฟอร์ม AI นี้ องค์กรใช้กลยุทธ์จัดการความเสี่ยงข้อใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Risk Avoidance
  - **TH**: การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)
- **[Option B]**
  - **EN**: Risk Mitigation
  - **TH**: การบรรเทาความเสี่ยง (Risk Mitigation)
- **[Option C]**
  - **EN**: Risk Transfer
  - **TH**: การโอนย้ายความเสี่ยง (Risk Transfer)
- **[Option D]**
  - **EN**: Risk Acceptance
  - **TH**: การยอมรับความเสี่ยง (Risk Acceptance)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Risk Avoidance
- **Thai Text**: การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)

#### Explanations

**Short Explanation (English):**
Risk avoidance eliminates exposure by deciding not to engage in or by discontinuing a risky activity.

**Full Explanation (English):**
Risk Avoidance is the strategy of eliminating risk exposure entirely by choosing not to engage in, or by completely discontinuing, the specific activity, service, or technology that creates the risk. Choosing not to adopt or purchase the high-risk AI platform completely avoids the associated risks. Risk mitigation would involve deploying controls (such as data sanitization filters) to use the technology safely. Risk transfer would involve shifting financial exposure via insurance or contracts. Risk acceptance would proceed with adoption while tolerating the risks.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: Risk Avoidance (การหลีกเลี่ยงความเสี่ยง) คือการตัดสินใจไม่ทำกิจกรรม ยกเลิก หรือไม่นำเทคโนโลยีที่มีความเสี่ยงสูงนั้นเข้ามาใช้เลย เพื่อตัดโอกาสการเกิดความเสี่ยงนั้นให้หมดสิ้นไป
- ข้อ B ไม่ถูกต้อง: Risk Mitigation คือการเดินหน้านำ AI มาใช้แต่ติดตั้งมาตรการป้องกันเพิ่มเติมเพื่อลดความเสี่ยง
- ข้อ C ไม่ถูกต้อง: Risk Transfer คือการผลักภาระความสูญเสียทางการเงินไปให้ผู้อื่น เช่น ทำประกันภัย
- ข้อ D ไม่ถูกต้อง: Risk Acceptance คือการยอมรับความเสี่ยงและเดินหน้าติดตั้งใช้งานโดยไม่สนผลกระทบ

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: Risk Avoidance is the strategy of eliminating risk exposure entirely by choosing not to engage in, or by completely discontinuing, the specific activity, service, or technology that creates the risk. Choosing not to adopt or purchase the high-risk AI platform completely avoids the associated risks.
- **TH**: Risk Avoidance (การหลีกเลี่ยงความเสี่ยง) คือการตัดสินใจไม่ทำกิจกรรม ยกเลิก หรือไม่นำเทคโนโลยีที่มีความเสี่ยงสูงนั้นเข้ามาใช้เลย เพื่อตัดโอกาสการเกิดความเสี่ยงนั้นให้หมดสิ้นไป

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Risk mitigation would involve deploying controls (such as data sanitization filters) to use the technology safely.
  - **TH**: Risk Mitigation คือการเดินหน้านำ AI มาใช้แต่ติดตั้งมาตรการป้องกันเพิ่มเติมเพื่อลดความเสี่ยง
- **Option C**:
  - **EN**: Risk transfer would involve shifting financial exposure via insurance or contracts.
  - **TH**: Risk Transfer คือการผลักภาระความสูญเสียทางการเงินไปให้ผู้อื่น เช่น ทำประกันภัย
- **Option D**:
  - **EN**: Risk acceptance would proceed with adoption while tolerating the risks.
  - **TH**: Risk Acceptance คือการยอมรับความเสี่ยงและเดินหน้าติดตั้งใช้งานโดยไม่สนผลกระทบ

---

### Question 13 (ID: 596)

- **Question ID**: 596
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option B (Index: 1)

#### Question Text

**English:**
> A Chief Information Security Officer (CISO) is preparing a quarterly risk report for the Board of Directors. The primary objective of the presentation is to help executive leadership allocate capital and prioritize security investments across business units. Which reporting approach is MOST appropriate for this audience?

**Thai (ภาษาไทย):**
> ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ (CISO) กำลังเตรียมรายงานความเสี่ยงรายไตรมาสเพื่อนำเสนอต่อคณะกรรมการบริหาร (Board of Directors) โดยมีเป้าหมายหลักเพื่อช่วยให้ผู้บริหารจัดสรรงบประมาณและจัดลำดับความสำคัญของการลงทุนด้านความปลอดภัย แนวทางการรายงานในข้อใดเหมาะสมที่สุดสำหรับกลุ่มเป้าหมายนี้?

#### Answer Choices

- **[Option A]**
  - **EN**: Exporting raw, unaggregated firewall packet logs and intrusion detection alerts from the past 90 days
  - **TH**: การส่งออกข้อมูลบันทึกแพ็กเก็ตของไฟร์วอลล์ (Raw packet logs) และการแจ้งเตือนของระบบตรวจจับการบุกรุกทั้งหมดในรอบ 90 วันที่ผ่านมา
- **[Option B]** *(Correct Answer)*
  - **EN**: Presenting high-level summaries of prioritized risks, potential business and financial impacts, and required remediation resources
  - **TH**: การนำเสนอสรุปภาพรวมระดับสูงของความเสี่ยงที่จัดลำดับความสำคัญแล้ว ผลกระทบต่อธุรกิจและการเงิน และทรัพยากรที่จำเป็นต้องใช้ในการแก้ไข
- **[Option C]**
  - **EN**: Providing a detailed technical inventory of software version numbers and vulnerability scanning script outputs
  - **TH**: การแสดงรายการหมายเลขเวอร์ชันของซอฟต์แวร์ทั้งหมดในองค์กรและผลลัพธ์ของสคริปต์สแกนช่องโหว่อย่างละเอียด
- **[Option D]**
  - **EN**: Guaranteeing that all residual cyber risks will be reduced to zero if the requested budget is approved
  - **TH**: การให้คำมั่นสัญญากับบอร์ดว่าความเสี่ยงทางไซเบอร์ที่เหลืออยู่ทั้งหมดจะลดลงเหลือศูนย์อย่างแน่นอนหากได้รับการอนุมัติงบประมาณ

#### Correct Answer Summary

- **Correct Choice**: Option B
- **English Text**: Presenting high-level summaries of prioritized risks, potential business and financial impacts, and required remediation resources
- **Thai Text**: การนำเสนอสรุปภาพรวมระดับสูงของความเสี่ยงที่จัดลำดับความสำคัญแล้ว ผลกระทบต่อธุรกิจและการเงิน และทรัพยากรที่จำเป็นต้องใช้ในการแก้ไข

#### Explanations

**Short Explanation (English):**
Executive risk reporting should focus on high-level business impact, prioritized risks, and resource requirements rather than low-level technical logs.

**Full Explanation (English):**
Effective risk communication matches the information needs and decision authority of the intended audience. Executive leadership and the Board of Directors require high-level, strategic risk reports that contextualize identified threats in terms of business impact, financial risk, operational objectives, and resource prioritization. Raw technical packet captures, alert logs, and software revision lists overwhelm non-technical executives and obscure critical decision points. Furthermore, promising 'zero risk' is unrealistic and fundamentally misrepresents the nature of risk management.

**Full Explanation (Thai):**
ข้อ B ถูกต้อง: การรายงานความเสี่ยง (Risk Reporting) ต้องคำนึงถึงผู้รับสาร คณะกรรมการบริหารต้องการข้อมูลสรุปภาพรวมเชิงกลยุทธ์ (Executive summary) ที่ชี้ให้เห็นว่าความเสี่ยงใดสำคัญที่สุด ส่งผลกระทบต่อธุรกิจอย่างไร และต้องใช้งบประมาณหรือทรัพยากรเท่าใดในการจัดการ
- ข้อ A ไม่ถูกต้อง: Raw logs มีรายละเอียดทางเทคนิคมากเกินไปและไม่ช่วยให้เกิดการตัดสินใจเชิงธุรกิจ
- ข้อ C ไม่ถูกต้อง: รายการเวอร์ชันซอฟต์แวร์เป็นข้อมูลการปฏิบัติการ (Operational) ที่ไม่เหมาะกับระดับบอร์ดบริหาร
- ข้อ D ไม่ถูกต้อง: การอ้างว่าความเสี่ยงจะลดเหลือศูนย์ (Zero risk) เป็นไปไม่ได้ในทางปฏิบัติและขัดกับหลักการบริหารความเสี่ยง

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option B):**
- **EN**: Effective risk communication matches the information needs and decision authority of the intended audience. Executive leadership and the Board of Directors require high-level, strategic risk reports that contextualize identified threats in terms of business impact, financial risk, operational objectives, and resource prioritization.
- **TH**: การสื่อสารความเสี่ยงที่มีประสิทธิภาพจะต้องปรับให้เข้ากับกลุ่มเป้าหมาย สำหรับผู้บริหารระดับสูงและคณะกรรมการบริษัท ต้องนำเสนอเป็นรายงานเชิงกลยุทธ์ระดับสูง (High-level strategic report) ที่เชื่อมโยงความเสี่ยงด้านไซเบอร์เข้ากับผลกระทบทางธุรกิจ การเงิน และการจัดสรรทรัพยากร

**Incorrect Options Analysis:**
- **Option A**:
  - **EN**: Raw technical packet captures, alert logs, and software revision lists overwhelm non-technical executives and obscure critical decision points.
  - **TH**: การส่งข้อมูลล็อกทางเทคนิคอย่างละเอียดจะทำให้ผู้บริหารสับสนและไม่เห็นภาพรวมเชิงธุรกิจ
- **Option C**:
  - **EN**: Promising 'zero risk' is unrealistic and fundamentally misrepresents the nature of risk management.
  - **TH**: การรับประกันว่าจะไม่มีความเสี่ยงหลงเหลืออยู่เลย (Zero risk) เป็นสิ่งที่เป็นไปไม่ได้ในทางปฏิบัติ
- **Option D**:
  - **EN**: Technical configuration parameters provide operational detail rather than strategic decision support.
  - **TH**: พารามิเตอร์การตั้งค่าทางเทคนิคเป็นเรื่องระดับปฏิบัติการ ไม่ใช่ระดับการตัดสินใจของบอร์ด

---

### Question 14 (ID: 597)

- **Question ID**: 597
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> Which of the following BEST describes the core role and primary objective of cybersecurity governance within an enterprise?

**Thai (ภาษาไทย):**
> ข้อใดอธิบายบทบาทหลักและวัตถุประสงค์ที่แท้จริงของการกำกับดูแลความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity Governance) ในองค์กรได้ดีที่สุด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Providing strategic leadership, organizational oversight, and accountability to ensure security objectives support business goals and regulatory requirements
  - **TH**: การกำหนดทิศทางเชิงกลยุทธ์ การกำกับดูแล และความรับผิดชอบเพื่อให้แน่ใจว่างานความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจและกฎหมาย
- **[Option B]**
  - **EN**: Executing day-to-day administrative tasks, such as creating user accounts and inspecting endpoint antivirus definition updates
  - **TH**: การปฏิบัติงานดูแลระบบประจำวัน เช่น การสร้างบัญชีผู้ใช้งานและการตรวจสอบการอัปเดตแอนติไวรัสของเครื่องลูกข่าย
- **[Option C]**
  - **EN**: Providing an absolute guarantee that the organization will never suffer a data breach or operational outage
  - **TH**: การให้การรับประกันแบบเบ็ดเสร็จเด็ดขาดว่าองค์กรจะไม่มีวันถูกเจาะระบบหรือเกิดเหตุการณ์ระบบล่มอย่างแน่นอน
- **[Option D]**
  - **EN**: Configuring boundary network firewalls and writing automated intrusion detection rules
  - **TH**: การกำหนดค่าคอนฟิกไฟร์วอลล์ที่ขอบเขตเครือข่ายและการเขียนกฎของระบบตรวจจับการบุกรุก

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Providing strategic leadership, organizational oversight, and accountability to ensure security objectives support business goals and regulatory requirements
- **Thai Text**: การกำหนดทิศทางเชิงกลยุทธ์ การกำกับดูแล และความรับผิดชอบเพื่อให้แน่ใจว่างานความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจและกฎหมาย

#### Explanations

**Short Explanation (English):**
Cybersecurity governance provides strategic oversight, direction, and accountability aligned with business objectives.

**Full Explanation (English):**
Governance is the strategic framework of rules, relationships, and oversight that directs and controls how an organization manages risk, ensures accountability, complies with legal requirements, and aligns information security with overall business goals. Operational activities—such as configuring firewalls, managing user accounts, or updating antivirus definitions—are tactical and operational security administration, not governance. Governance cannot guarantee the complete absence of incidents.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: การกำกับดูแล (Governance) คือโครงสร้างระดับกลยุทธ์ การกำหนดทิศทาง การกำกับดูแลความรับผิดชอบ (Accountability) และการตรวจสอบ เพื่อให้มั่นใจว่าการบริหารจัดการความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจ กฎหมาย และระดับความเสี่ยงขององค์กร
- ข้อ B ไม่ถูกต้อง: การสร้าง user และอัปเดตโปรแกรมเป็นงานระดับปฏิบัติการ (Operational task) ไม่ใช่การกำกับดูแล
- ข้อ C ไม่ถูกต้อง: Governance ไม่สามารถรับประกันได้ว่าจะไม่มีเหตุการณ์ถูกโจมตีเกิดขึ้น 100%
- ข้อ D ไม่ถูกต้อง: การตั้งค่าไฟร์วอลล์เป็นงานเชิงเทคนิคและการปฏิบัติการ (Technical/Operational control)

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: Governance is the strategic framework of rules, relationships, and oversight that directs and controls how an organization manages risk, ensures accountability, complies with legal requirements, and aligns information security with overall business goals.
- **TH**: Governance (การกำกับดูแล) คือกรอบการทำงานเชิงกลยุทธ์ กฎเกณฑ์ และการกำกับดูแลจากฝ่ายบริหาร เพื่อให้มั่นใจว่าการบริหารจัดการความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจ มีความรับผิดชอบ และปฏิบัติตามกฎหมาย

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Operational activities—such as configuring firewalls, managing user accounts, or updating antivirus definitions—are tactical and operational security administration, not governance.
  - **TH**: การคอนฟิกไฟร์วอลล์และจัดการบัญชีผู้ใช้เป็นงานระดับปฏิบัติการ (Security Administration) ไม่ใช่ Governance
- **Option C**:
  - **EN**: Software development and deployment constitute engineering activities rather than governance.
  - **TH**: การพัฒนาซอฟต์แวร์เป็นงานด้านวิศวกรรม ไม่ใช่การกำกับดูแลเชิงนโยบาย
- **Option D**:
  - **EN**: Governance cannot guarantee the complete absence of incidents, as zero risk does not exist.
  - **TH**: Governance ไม่สามารถรับประกันว่าจะไม่มีเหตุการณ์บุกรุกเกิดขึ้นได้ 100%

---

### Question 15 (ID: 598)

- **Question ID**: 598
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> An organization's executive committee publishes an official document that states: 'All corporate information systems and sensitive customer records must be protected from unauthorized disclosure, and employee access must be restricted to legitimate business needs.' The document outlines management's high-level expectations and overarching goals, but contains no technical parameters or operational steps. What type of governance artifact is this document?

**Thai (ภาษาไทย):**
> คณะกรรมการบริหารขององค์กรเผยแพร่เอกสารอย่างเป็นทางการซึ่งระบุว่า: 'ระบบสารสนเทศและข้อมูลลูกค้าสำคัญทั้งหมดขององค์กรจะต้องได้รับการปกป้องจากการเปิดเผยโดยไม่ได้รับอนุญาต และการเข้าถึงของพนักงานจะต้องถูกจำกัดเฉพาะเพื่อการปฏิบัติงานตามหน้าที่เท่านั้น' เอกสารนี้กำหนดความคาดหวังและเป้าหมายระดับสูงของผู้บริหาร แต่ไม่ได้ระบุค่าทางเทคนิคหรือขั้นตอนปฏิบัติ เอกสารนี้จัดเป็นเอกสารกำกับดูแลประเภทใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Policy
  - **TH**: นโยบาย (Policy)
- **[Option B]**
  - **EN**: Standard
  - **TH**: มาตรฐาน (Standard)
- **[Option C]**
  - **EN**: Procedure
  - **TH**: ขั้นตอนปฏิบัติ (Procedure)
- **[Option D]**
  - **EN**: Guideline
  - **TH**: แนวปฏิบัติ (Guideline)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Policy
- **Thai Text**: นโยบาย (Policy)

#### Explanations

**Short Explanation (English):**
A policy is a high-level, mandatory management directive outlining overarching security expectations and rules.

**Full Explanation (English):**
A security policy is a high-level, mandatory management document that establishes organizational security posture, expectations, and goals ('WHAT' must be done). It is authored by leadership to define rules and direction without specifying technical mechanisms. A standard establishes mandatory technical baselines and specific criteria. A procedure provides step-by-step instructions ('HOW' to accomplish a task). A guideline provides recommended best practices that are generally advisory and flexible.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: นโยบาย (Policy) คือเอกสารระดับผู้บริหารสูงสุดที่มีผลบังคับใช้ (Mandatory) กำหนดทิศทาง เป้าหมาย และกฎเกณฑ์ระดับสูงขององค์กร (WHAT ต้องทำอะไร) โดยไม่ลงลึกถึงขั้นตอนทางเทคนิคหรือวิธีการปฏิบัติ
- ข้อ B ไม่ถูกต้อง: มาตรฐาน (Standard) กำหนดข้อกำหนดทางเทคนิคที่ต้องปฏิบัติตามอย่างเฉพาะเจาะจง เช่น กำหนดความยาวรหัสผ่าน
- ข้อ C ไม่ถูกต้อง: ขั้นตอนปฏิบัติ (Procedure) คือคู่มืออธิบายขั้นตอนการทำงานอย่างเป็นลำดับขั้น (HOW ทำอย่างไรแบบ step-by-step)
- ข้อ D ไม่ถูกต้อง: แนวปฏิบัติ (Guideline) คือคำแนะนำหรือข้อเสนอแนะที่ไม่มีการบังคับใช้โดยเด็ดขาด ยืดหยุ่นได้

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: A security policy is a high-level, mandatory management document that establishes organizational security posture, expectations, and goals ('WHAT' must be done). It is authored by leadership to define rules and direction without specifying technical mechanisms.
- **TH**: Security Policy (นโยบายความมั่นคงปลอดภัย) เป็นเอกสารระดับบริหารที่มีผลบังคับใช้ (Mandatory) ซึ่งระบุเป้าหมาย ทิศทาง และข้อกำหนดว่า 'ต้องทำอะไร' (WHAT) เพื่อกำหนดกรอบความปลอดภัยโดยไม่ลงลึกถึงวิธีปฏิบัติทางเทคนิค

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: A standard establishes mandatory technical baselines and specific criteria.
  - **TH**: Standard (มาตรฐาน) กำหนดเกณฑ์ทางเทคนิคที่ต้องปฏิบัติอย่างสม่ำเสมอ
- **Option C**:
  - **EN**: A procedure provides step-by-step instructions ('HOW' to accomplish a task).
  - **TH**: Procedure (ระเบียบปฏิบัติ) ให้คำแนะนำทีละขั้นตอนว่าต้องทำอย่างไร (HOW)
- **Option D**:
  - **EN**: A guideline provides recommended best practices that are generally advisory and flexible.
  - **TH**: Guideline (แนวทางปฏิบัติ) เป็นข้อแนะนำที่ไม่บังคับ เพื่อให้เกิดความยืดหยุ่น

**Exam Tip:**
- **EN**: Policies define 'WHAT' must be done; Procedures define 'HOW' to do it; Standards specify mandatory technical baselines; Guidelines offer advisory best practices.
- **TH**: Policy บอกว่า 'ต้องทำอะไร' (WHAT), Procedure บอกว่า 'ทำอย่างไร' (HOW), Standard คือเกณฑ์มาตรฐานบังคับ, และ Guideline คือคำแนะนำที่ไม่บังคับ

---

### Question 16 (ID: 599)

- **Question ID**: 599
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> The IT security engineering team creates an internal document stating: 'All enterprise employee workstations must have screen savers configured to automatically lock after 10 minutes of inactivity, require an authenticated password to resume, and use AES-256 bit full-disk encryption.' This document defines mandatory technical specifications that must be implemented across all systems. Which type of governance document does this represent?

**Thai (ภาษาไทย):**
> ทีมวิศวกรรมความมั่นคงปลอดภัยสารสนเทศจัดทำเอกสารภายในระบุว่า: 'เครื่องคอมพิวเตอร์พนักงานทั้งหมดต้องตั้งค่า Screen Saver ให้ล็อกหน้าจอโดยอัตโนมัติเมื่อไม่มีการใช้งานเกิน 10 นาที ต้องใส่รหัสผ่านเพื่อปลดล็อก และต้องเปิดใช้งานการเข้ารหัสข้อมูลทั้งดิสก์ด้วยมาตรฐาน AES-256' เอกสารนี้กำหนดข้อกำหนดทางเทคนิคภาคบังคับที่ต้องนำไปปฏิบัติในทุกระบบ จัดเป็นเอกสารประเภทใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Standard
  - **TH**: มาตรฐาน (Standard)
- **[Option B]**
  - **EN**: Guideline
  - **TH**: แนวปฏิบัติ (Guideline)
- **[Option C]**
  - **EN**: Procedure
  - **TH**: ขั้นตอนปฏิบัติ (Procedure)
- **[Option D]**
  - **EN**: Policy
  - **TH**: นโยบาย (Policy)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Standard
- **Thai Text**: มาตรฐาน (Standard)

#### Explanations

**Short Explanation (English):**
A standard establishes mandatory, specific technical baselines and requirements to implement policy directives.

**Full Explanation (English):**
A standard is a mandatory governance document that specifies uniform technical requirements, configurations, hardware/software baselines, and rules used to achieve policy compliance. The specific 10-minute screen lock and AES-256 encryption criteria are explicit technical specifications, making this a standard. Policies outline high-level management intent. Procedures provide chronological step-by-step instructions. Guidelines offer non-mandatory recommendations.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: มาตรฐาน (Standard) เป็นเอกสารภาคบังคับ (Mandatory) ที่กำหนดสเปกหรือข้อกำหนดทางเทคนิคอย่างเฉพาะเจาะจง (เช่น กำหนดระยะเวลา 10 นาที หรืออัลกอริทึม AES-256) เพื่อให้ระบบต่างๆ มีความมั่นคงปลอดภัยตามเกณฑ์มาตรฐานเดียวกัน
- ข้อ B ไม่ถูกต้อง: แนวปฏิบัติ (Guideline) เป็นเพียงคำแนะนำที่ยืดหยุ่นได้ ไม่ใช่ข้อกำหนดบังคับ
- ข้อ C ไม่ถูกต้อง: ขั้นตอนปฏิบัติ (Procedure) บอกขั้นตอนการคลิกเมนูหรือคำสั่งเป็นลำดับทีละขั้น
- ข้อ D ไม่ถูกต้อง: นโยบาย (Policy) กำหนดทิศทางระดับสูง เช่น 'ต้องมีการปกป้องหน้าจอคอมพิวเตอร์' แต่จะไม่ระบุตัวเลขเวลาหรือเทคโนโลยีเฉพาะเจาะจง

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: A standard is a mandatory governance document that specifies uniform technical requirements, configurations, hardware/software baselines, and rules used to achieve policy compliance. The specific 10-minute screen lock and AES-256 encryption criteria are explicit technical specifications, making this a standard.
- **TH**: Standard (มาตรฐาน) คือเอกสารข้อกำหนดที่มีผลบังคับใช้เพื่อระบุเกณฑ์ทางเทคนิคขั้นต่ำ (Baseline) ที่แน่นอน เช่น การกำหนดเวลาล็อกหน้าจอ 10 นาที หรือระดับการเข้ารหัส AES-256 เพื่อให้สอดคล้องกับนโยบาย

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Policies outline high-level management intent without numerical technical parameters.
  - **TH**: Policy กำหนดเพียงหลักการระดับสูงว่าต้องป้องกันข้อมูล แต่ไม่ระบุค่าตัวเลขทางเทคนิค
- **Option C**:
  - **EN**: Procedures provide chronological step-by-step instructions for performing tasks.
  - **TH**: Procedure ระบุขั้นตอนการคลิกหรือคำสั่งทีละขั้น ไม่ใช่เกณฑ์ข้อกำหนด
- **Option D**:
  - **EN**: Guidelines offer non-mandatory recommendations and advice.
  - **TH**: Guideline เป็นข้อเสนอแนะ ไม่ใช่ข้อบังคับตายตัว

---

### Question 17 (ID: 600)

- **Question ID**: 600
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> A Chief Information Officer (CIO) wants to establish a comprehensive cybersecurity program for an expanding organization. The security team needs a structured, organized approach to assess cybersecurity capabilities, identify program gaps, guide security investment, and systematically improve security maturity over time. Which governance instrument is MOST suitable for this purpose?

**Thai (ภาษาไทย):**
> ประธานเจ้าหน้าที่ฝ่ายสารสนเทศ (CIO) ต้องการจัดตั้งโครงการความมั่นคงปลอดภัยไซเบอร์แบบครอบคลุมสำหรับองค์กรที่กำลังเติบโต ทีมงานต้องการแนวทางที่มีโครงสร้างชัดเจนในการประเมินขีดความสามารถ ชี้หาจุดบกพร่องของระบบ กำกับการลงทุน และพัฒนาวุฒิภาวะ (Maturity) ด้านความปลอดภัยอย่างเป็นระบบ เครื่องมือในการกำกับดูแลข้อใดเหมาะสมที่สุดสำหรับเป้าหมายนี้?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Cybersecurity Framework
  - **TH**: กรอบการดำเนินงานด้านความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity Framework)
- **[Option B]**
  - **EN**: Standard Operating Procedure
  - **TH**: ระเบียบปฏิบัติประจำ (Standard Operating Procedure)
- **[Option C]**
  - **EN**: Acceptable Use Policy
  - **TH**: นโยบายการใช้งานเทคโนโลยีที่ยอมรับได้ (Acceptable Use Policy)
- **[Option D]**
  - **EN**: Baseline Security Guideline
  - **TH**: แนวปฏิบัติความปลอดภัยขั้นพื้นฐาน (Baseline Security Guideline)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Cybersecurity Framework
- **Thai Text**: กรอบการดำเนินงานด้านความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity Framework)

#### Explanations

**Short Explanation (English):**
A cybersecurity framework provides a structured, comprehensive approach to organize, assess, and mature an entire security program.

**Full Explanation (English):**
A cybersecurity framework (such as NIST CSF or ISO/IEC 27001) provides a comprehensive, structured methodology for building, organizing, measuring, and maturing an enterprise security program. It organizes controls across domains and assists organizations in assessing their current security posture against targeted baselines. In contrast, standard operating procedures outline operational keystrokes for specific tasks, acceptable use policies govern end-user computer usage, and baseline guidelines provide non-mandatory technical advice.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: กรอบการดำเนินงาน (Cybersecurity Framework) เช่น NIST CSF หรือ ISO/IEC 27001 คือแบบแผนโครงสร้างระดับมหภาคที่ช่วยให้องค์กรวางแผน ออกแบบ สร้าง และประเมินระดับวุฒิภาวะ (Maturity) ของโครงการความมั่นคงปลอดภัยในภาพรวมได้อย่างเป็นระบบ
- ข้อ B ไม่ถูกต้อง: Standard Operating Procedure (SOP) เป็นขั้นตอนการทำงานสำหรับงานย่อยเฉพาะเรื่อง ไม่ใช่โครงสร้างของทั้งโปรแกรม
- ข้อ C ไม่ถูกต้อง: Acceptable Use Policy (AUP) เป็นนโยบายการใช้งานของพนักงานทั่วไป
- ข้อ D ไม่ถูกต้อง: Baseline Security Guideline เป็นเพียงคำแนะนำเบื้องต้นสำหรับการตั้งค่าอุปกรณ์

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: A cybersecurity framework (such as NIST CSF or ISO/IEC 27001) provides a comprehensive, structured methodology for building, organizing, measuring, and maturing an enterprise security program. It organizes controls across domains and assists organizations in assessing their current security posture against targeted baselines.
- **TH**: Cybersecurity Framework (กรอบการทำงานความมั่นคงปลอดภัยไซเบอร์ เช่น NIST CSF, ISO/IEC 27001) เป็นชุดแนวทางและโครงสร้างที่ครอบคลุม เพื่อช่วยให้องค์กรวางแผน ออกแบบ ปฏิบัติ และวัดผลระดับวุฒิภาวะของระบบความปลอดภัยได้อย่างเป็นระบบ

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Standard operating procedures outline operational keystrokes for specific tasks, not enterprise program architecture.
  - **TH**: Standard operating procedures เป็นเพียงขั้นตอนการทำงานย่อยสำหรับงานเฉพาะอย่าง
- **Option C**:
  - **EN**: Acceptable use policies govern end-user computer usage rules, not overall program structure.
  - **TH**: Acceptable use policy เป็นนโยบายการใช้งานอุปกรณ์ของผู้ใช้ ไม่ใช่กรอบโครงสร้างองค์กร
- **Option D**:
  - **EN**: Baseline guidelines provide non-mandatory technical advice rather than program architecture.
  - **TH**: Baseline guidelines เป็นเพียงคำแนะนำเบื้องต้น ไม่ครอบคลุมการบริหารจัดการระดับองค์กร

---

### Question 18 (ID: 601)

- **Question ID**: 601
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> An organization protects its data center using three distinct measures: (1) network firewalls that inspect incoming packets, (2) mandatory background checks and security awareness training for newly hired staff, and (3) perimeter fences equipped with biometric turnstiles at facility gates. In terms of implementation categories, how are these three controls properly classified?

**Thai (ภาษาไทย):**
> องค์กรแห่งหนึ่งปกป้องศูนย์ข้อมูลด้วย 3 มาตรการ ได้แก่: (1) ไฟร์วอลล์เครือข่ายที่ตรวจสอบข้อมูลแพ็กเก็ตที่ผ่านเข้าออก, (2) การตรวจสอบประวัติและการฝึกอบรมความตระหนักรู้ด้านความปลอดภัยภาคบังคับสำหรับพนักงานใหม่, และ (3) รั้วล้อมรอบอาคารพร้อมประตูกั้นแบบสแกนลายนิ้วมือที่ทางเข้า ในแง่ของประเภทการนำไปใช้ (Control categories) มาตรการทั้งสามนี้จัดอยู่ในประเภทใดตามลำดับ?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: (1) Technical, (2) Managerial/Administrative, (3) Physical
  - **TH**: (1) ทางเทคนิค (Technical), (2) ทางการจัดการ/บริหาร (Managerial/Administrative), (3) ทางกายภาพ (Physical)
- **[Option B]**
  - **EN**: (1) Operational, (2) Technical, (3) Physical
  - **TH**: (1) ทางการปฏิบัติการ (Operational), (2) ทางเทคนิค (Technical), (3) ทางกายภาพ (Physical)
- **[Option C]**
  - **EN**: (1) Physical, (2) Operational, (3) Managerial/Administrative
  - **TH**: (1) ทางกายภาพ (Physical), (2) ทางการปฏิบัติการ (Operational), (3) ทางการจัดการ/บริหาร (Managerial/Administrative)
- **[Option D]**
  - **EN**: (1) Technical, (2) Physical, (3) Operational
  - **TH**: (1) ทางเทคนิค (Technical), (2) ทางกายภาพ (Physical), (3) ทางการปฏิบัติการ (Operational)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: (1) Technical, (2) Managerial/Administrative, (3) Physical
- **Thai Text**: (1) ทางเทคนิค (Technical), (2) ทางการจัดการ/บริหาร (Managerial/Administrative), (3) ทางกายภาพ (Physical)

#### Explanations

**Short Explanation (English):**
Security controls are categorized by implementation domain into Technical (hardware/software), Managerial/Administrative (management/personnel), and Physical (facility/tangible barriers).

**Full Explanation (English):**
Cybersecurity controls are categorized by their implementation domain: Technical controls use hardware or software mechanisms (e.g., firewalls, access control lists, encryption). Managerial (or Administrative) controls focus on policies, procedures, background checks, risk assessments, and personnel training directed by management. Physical controls use real-world tangible barriers and facility defenses (e.g., fences, turnstiles, locks, lighting). Thus, firewalls are Technical, employee training and background checks are Managerial/Administrative, and fences/turnstiles are Physical.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: หมวดหมู่ของการควบคุมความมั่นคงปลอดภัยแบ่งตามลักษณะการนำไปใช้งาน ได้แก่:
(1) Technical: กลไกฮาร์ดแวร์หรือซอฟต์แวร์ เช่น ไฟร์วอลล์
(2) Managerial/Administrative: การจัดการ นโยบาย การตรวจประวัติ และการฝึกอบรมบุคลากร
(3) Physical: มาตรการทางกายภาพ สิ่งกีดขวาง และรั้วอาคาร
- ตัวเลือกอื่นๆ สลับหมวดหมู่และจำแนกไม่ถูกต้องตามนิยาม

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: Cybersecurity controls are categorized by their implementation domain: Technical controls use hardware or software mechanisms (e.g., firewalls, access control lists, encryption). Managerial (or Administrative) controls focus on policies, procedures, background checks, risk assessments, and personnel training directed by management. Physical controls use real-world tangible barriers and facility defenses (e.g., fences, turnstiles, locks, lighting). Thus, firewalls are Technical, employee training and background checks are Managerial/Administrative, and fences/turnstiles are Physical.
- **TH**: หมวดหมู่ของการควบคุมความมั่นคงปลอดภัยแบ่งตามลักษณะการนำไปใช้งาน ได้แก่: Technical (เทคนิค: กลไกฮาร์ดแวร์/ซอฟต์แวร์ เช่น ไฟร์วอลล์), Managerial/Administrative (การจัดการ: นโยบาย ตรวจประวัติ และการอบรม), และ Physical (กายภาพ: สิ่งกีดขวาง รั้ว ประตูล็อก)

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Option B misclassifies personnel training as technical instead of managerial/administrative.
  - **TH**: ตัวเลือก B จัดหมวดหมู่การอบรมพนักงานเป็น Technical ซึ่งไม่ถูกต้อง
- **Option C**:
  - **EN**: Option C misclassifies firewalls as managerial instead of technical.
  - **TH**: ตัวเลือก C จัดหมวดหมู่ไฟร์วอลล์เป็น Managerial ซึ่งไม่ถูกต้อง
- **Option D**:
  - **EN**: Option D misclassifies firewalls as physical and fences as technical.
  - **TH**: ตัวเลือก D สลับหมวดหมู่ไฟร์วอลล์และรั้วกั้นอาคาร

---

### Question 19 (ID: 602)

- **Question ID**: 602
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> A high-security corporate research facility mounts brightly colored, illuminated warning signs along its external perimeter boundary reading: 'WARNING: Restricted Property. 24-Hour Armed Patrols and Continuous Closed-Circuit Video Surveillance in Progress.' In terms of functional control types, what is the PRIMARY purpose of these warning signs?

**Thai (ภาษาไทย):**
> ศูนย์วิจัยความปลอดภัยสูงแห่งหนึ่งติดตั้งป้ายเตือนไฟส่องสว่างสีสันสะดุดตาตามแนวรั้วภายนอกอาคาร ระบุว่า: 'คำเตือน: เขตหวงห้าม มีเจ้าหน้าที่รักษาความปลอดภัยติดอาวุธลาดตระเวนตลอด 24 ชั่วโมงและบันทึกภาพด้วยกล้องวงจรปิดตลอดเวลา' ในแง่ของฟังก์ชันการทำงาน (Functional control types) วัตถุประสงค์หลักของป้ายเตือนนี้คือข้อใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Deterrent control
  - **TH**: การควบคุมเชิงยับยั้ง (Deterrent control)
- **[Option B]**
  - **EN**: Preventive control
  - **TH**: การควบคุมเชิงป้องกัน (Preventive control)
- **[Option C]**
  - **EN**: Detective control
  - **TH**: การควบคุมเชิงตรวจจับ (Detective control)
- **[Option D]**
  - **EN**: Corrective control
  - **TH**: การควบคุมเชิงแก้ไข (Corrective control)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Deterrent control
- **Thai Text**: การควบคุมเชิงยับยั้ง (Deterrent control)

#### Explanations

**Short Explanation (English):**
A deterrent control aims to discourage individuals from attempting unauthorized actions by increasing perceived risk and consequences.

**Full Explanation (English):**
A Deterrent control aims to discourage would-be attackers or trespassers from attempting unauthorized actions by making them aware of the risks, consequences, and likelihood of detection. Warning signs and visible notices function primarily as deterrents. In contrast, a preventive control physically or technically stops an action (such as a locked gate). A detective control identifies and records an incident when it happens (such as the video camera recording the footage). A corrective control restores or repairs damage after an event occurs.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: การควบคุมเชิงยับยั้ง (Deterrent control) มีหน้าที่หลักในการขัดขวางหรือทำให้ผู้ประสงค์ร้ายเกิดความกลัวและเปลี่ยนใจไม่ก่อเหตุ ป้ายเตือนที่มองเห็นได้ชัดเจนเป็นตัวอย่างคลาสสิกของการควบคุมเชิงยับยั้ง
- ข้อ B ไม่ถูกต้อง: Preventive control ต้องสามารถหยุดยั้งทางกายภาพหรือเทคนิคได้จริง เช่น ประตูล็อกหรือกำแพง (ป้ายเตือนหยุดคนเดินผ่านไม่ได้จริง)
- ข้อ C ไม่ถูกต้อง: Detective control คือสิ่งที่ตรวจจับและแจ้งเตือน เช่น ตัวกล้องวงจรปิดหรือเซ็นเซอร์ตรวจจับความเคลื่อนไหว
- ข้อ D ไม่ถูกต้อง: Corrective control ใช้แก้ไขฟื้นฟูหลังเกิดเหตุ เช่น การสำรองข้อมูล

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: A Deterrent control aims to discourage would-be attackers or trespassers from attempting unauthorized actions by making them aware of the risks, consequences, and likelihood of detection. Warning signs and visible notices function primarily as deterrents.
- **TH**: Deterrent Control (การควบคุมเชิงป้องปราม) มีเป้าหมายเพื่อยับยั้ง ข่มขวัญ หรือทำให้ผู้ไม่หวังดีเปลี่ยนใจล้มเลิกการกระทำความผิด โดยการแจ้งเตือนให้ทราบถึงความเสี่ยงและบทลงโทษ เช่น ป้ายเตือนทรัพย์สินส่วนบุคคล

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: A preventive control physically or technically stops an action before it can occur (such as a locked security gate).
  - **TH**: Preventive control ทำหน้าที่สกัดกั้นหรือหยุดยั้งการกระทำผิดทางกายภาพ เช่น ประตูล็อก
- **Option C**:
  - **EN**: A detective control identifies and records an incident when it happens (such as the video camera recording footage).
  - **TH**: Detective control ทำหน้าที่ตรวจจับและบันทึกเหตุการณ์ เช่น กล้องวงจรปิด
- **Option D**:
  - **EN**: A corrective control restores or repairs damage after an event occurs.
  - **TH**: Corrective control ทำหน้าที่แก้ไขและฟื้นฟูหลังเกิดเหตุการณ์

---

### Question 20 (ID: 603)

- **Question ID**: 603
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> Following a sophisticated ransomware infection that encrypted critical accounting databases, the disaster recovery team isolates the infected network segment, wipes the compromised virtual machines, and restores clean financial data from an offline, write-once backup copy. In terms of functional control types, what role does restoring systems from backup media fulfill?

**Thai (ภาษาไทย):**
> หลังจากเกิดเหตุการณ์มัลแวร์เรียกค่าไถ่ (Ransomware) เข้ารหัสฐานข้อมูลบัญชีสำคัญ ทีมกู้คืนภัยพิบัติได้แยกเครือข่ายที่ติดเชื้อ ล้างเครื่องเสมือนที่ถูกโจมตี และกู้คืนข้อมูลการเงินที่สมบูรณ์จากชุดข้อมูลสำรองแบบออฟไลน์ (Offline backup) ในแง่ของฟังก์ชันการควบคุม การกู้คืนระบบจากชุดข้อมูลสำรองนี้ทำหน้าที่ใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Corrective control
  - **TH**: การควบคุมเชิงแก้ไข (Corrective control)
- **[Option B]**
  - **EN**: Detective control
  - **TH**: การควบคุมเชิงตรวจจับ (Detective control)
- **[Option C]**
  - **EN**: Preventive control
  - **TH**: การควบคุมเชิงป้องกัน (Preventive control)
- **[Option D]**
  - **EN**: Directive control
  - **TH**: การควบคุมเชิงสั่งการ (Directive control)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Corrective control
- **Thai Text**: การควบคุมเชิงแก้ไข (Corrective control)

#### Explanations

**Short Explanation (English):**
A corrective control restores systems, repairs damage, and mitigates harm following a security incident.

**Full Explanation (English):**
A Corrective control functions to remedy damage, fix vulnerabilities, restore impacted assets, and return systems to a normal operational state following a security incident. Restoring data from backups, applying corrective patches, and rebuilding compromised operating systems are primary examples of corrective controls. Preventive controls stop incidents before they occur. Detective controls identify and alert on active or past incidents. Directive controls specify mandatory behavioral rules.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: Corrective Control (การควบคุมเชิงแก้ไข) คือมาตรการที่ทำงาน 'หลังเกิดเหตุ' (Post-incident) เพื่อเยียวยาความเสียหาย ซ่อมแซมระบบ และนำระบบและข้อมูลกลับคืนสู่สภาวะปกติ เช่น การกู้คืนข้อมูลจากแบ็กอัป หรือการลงระบบใหม่
- ข้อ B ไม่ถูกต้อง: Detective control ทำหน้าที่ตรวจพบการบุกรุก เช่น ระบบแอนติไวรัสหรือ SIEM แจ้งเตือน
- ข้อ C ไม่ถูกต้อง: Preventive control ทำหน้าที่สกัดกั้นการโจมตีไม่ให้เกิดขึ้นตั้งแต่แรก
- ข้อ D ไม่ถูกต้อง: Directive control เป็นการออกคำสั่ง กฎเกณฑ์ หรือนโยบายเพื่อนำทางพฤติกรรมของบุคลากร

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: A Corrective control functions to remedy damage, fix vulnerabilities, restore impacted assets, and return systems to a normal operational state following a security incident. Restoring data from backups, applying corrective patches, and rebuilding compromised operating systems are primary examples of corrective controls.
- **TH**: Corrective Control (การควบคุมเชิงแก้ไข) ทำหน้าที่ซ่อมแซม เยียวยาความเสียหาย ฟื้นฟูระบบ และนำระบบกลับสู่สภาวะการทำงานปกติหลังเกิดเหตุการณ์ความมั่นคงปลอดภัย เช่น การกู้คืนข้อมูลจากแบ็กอัป การลงแพตช์แก้ไขช่องโหว่ หรือการติดตั้งระบบใหม่

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Preventive controls stop incidents before they occur, rather than restoring systems after an event.
  - **TH**: Preventive control ทำหน้าที่ป้องกันไม่ให้เกิดเหตุ ไม่ใช่การกู้คืนหลังเกิดเหตุ
- **Option C**:
  - **EN**: Detective controls identify and alert on active or past incidents without remediating the damage.
  - **TH**: Detective control ทำหน้าที่ตรวจจับและแจ้งเตือน แต่ไม่ได้ซ่อมแซมหรือกู้คืนระบบ
- **Option D**:
  - **EN**: Directive controls specify mandatory behavioral rules and policies.
  - **TH**: Directive control เป็นการสั่งการและออกกฎระเบียบบังคับใช้

---

### Question 21 (ID: 604)

- **Question ID**: 604
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> Management posts a mandatory notice on all server room entry doors stating: 'NOTICE: Tailgating is strictly prohibited. Every employee must badge in individually, and all external visitors must be escorted by authorized IT staff at all times.' Which functional control type is illustrated by this posted directive?

**Thai (ภาษาไทย):**
> ผู้บริหารติดประกาศบังคับไว้ที่ประตูทางเข้าห้องเซิร์ฟเวอร์ทุกบานว่า: 'ประกาศ: ห้ามเดินตามหลังโดยไม่แตะบัตร (Tailgating) อย่างเด็ดขาด พนักงานทุกคนต้องแตะบัตรเข้าออกรายบุคคล และผู้มาติดต่อภายนอกต้องมีเจ้าหน้าที่ไอทีติดตามตลอดเวลา' ป้ายประกาศนี้เป็นตัวอย่างของการควบคุมเชิงฟังก์ชันประเภทใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Directive control
  - **TH**: การควบคุมเชิงสั่งการ (Directive control)
- **[Option B]**
  - **EN**: Compensating control
  - **TH**: การควบคุมเชิงชดเชย (Compensating control)
- **[Option C]**
  - **EN**: Detective control
  - **TH**: การควบคุมเชิงตรวจจับ (Detective control)
- **[Option D]**
  - **EN**: Corrective control
  - **TH**: การควบคุมเชิงแก้ไข (Corrective control)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Directive control
- **Thai Text**: การควบคุมเชิงสั่งการ (Directive control)

#### Explanations

**Short Explanation (English):**
A directive control guides behavior and mandates compliance with specified security procedures and policies.

**Full Explanation (English):**
A Directive control specifies, guides, or mandates specific employee behaviors and actions to ensure compliance with organizational security policies and standards. Signs instructing employees on required procedures (such as no tailgating and escorting visitors) are classic examples of directive controls. Compensating controls serve as alternative mechanisms when primary safeguards cannot be deployed. Detective controls discover and log violations. Corrective controls remediate consequences after an event.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: Directive Control (การควบคุมเชิงสั่งการ) คือการกำหนดแนวทาง ชี้แนะ หรือออกคำสั่งบังคับพฤติกรรมของบุคลากรให้ปฏิบัติตามนโยบายความมั่นคงปลอดภัย เช่น ป้ายประกาศกฎระเบียบ ข้อปฏิบัติ หรือข้อบังคับของบริษัท
- ข้อ B ไม่ถูกต้อง: Compensating control คือมาตรการทดแทนเมื่อไม่สามารถติดตั้งมาตรการหลักได้
- ข้อ C ไม่ถูกต้อง: Detective control คือการตรวจสอบ เช่น มีกล้องวงจรปิดคอยดูว่ามีใครแอบเดินตามหรือไม่
- ข้อ D ไม่ถูกต้อง: Corrective control คือการแก้ไขหลังเกิดเหตุ เช่น การลงโทษทางวินัยหรือการยกเลิกบัตร

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: A Directive control specifies, guides, or mandates specific employee behaviors and actions to ensure compliance with organizational security policies and standards. Signs instructing employees on required procedures (such as no tailgating and escorting visitors) are classic examples of directive controls.
- **TH**: Directive Control (การควบคุมเชิงสั่งการ) คือการกำหนดแนวทาง ชี้แนะ หรือออกคำสั่งบังคับพฤติกรรมของบุคลากรให้ปฏิบัติตามนโยบายความมั่นคงปลอดภัย เช่น ป้ายประกาศกฎระเบียบ ข้อปฏิบัติ หรือข้อบังคับของบริษัท

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Compensating controls serve as alternative mechanisms when primary safeguards cannot be deployed.
  - **TH**: Compensating control คือมาตรการทดแทนเมื่อไม่สามารถติดตั้งมาตรการหลักได้
- **Option C**:
  - **EN**: Detective controls discover and log violations rather than commanding behavior.
  - **TH**: Detective control คือการตรวจสอบ เช่น มีกล้องวงจรปิดคอยดูว่ามีใครแอบเดินตามหรือไม่
- **Option D**:
  - **EN**: Corrective controls remediate consequences and repair damage after an event.
  - **TH**: Corrective control คือการแก้ไขหลังเกิดเหตุ เช่น การลงโทษทางวินัยหรือการยกเลิกบัตร

---

### Question 22 (ID: 605)

- **Question ID**: 605
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> A bank protects its core customer banking application using perimeter firewalls, internal network segmentation, host-based endpoint protection, multi-factor authentication, database-level encryption, and continuous log auditing. Why is this multi-tiered architecture considered superior to relying solely on a powerful perimeter firewall?

**Thai (ภาษาไทย):**
> ธนาคารแห่งหนึ่งปกป้องแอปพลิเคชันระบบการเงินโดยใช้ไฟร์วอลล์ที่ขอบเขตเครือข่าย, การแบ่งเซกเมนต์เครือข่ายภายใน, การป้องกันที่เครื่องแม่ข่าย, การยืนยันตัวตนแบบหลายปัจจัย, การเข้ารหัสฐานข้อมูล, และการตรวจสอบ Log อย่างต่อเนื่อง เหตุใดสถาปัตยกรรมแบบหลายชั้นนี้จึงเหนือกว่าการพึ่งพาเพียงไฟร์วอลล์รอบนอกที่ทรงประสิทธิภาพเพียงอย่างเดียว?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: It implements Defense in Depth, ensuring that if a perimeter control fails or is bypassed, complementary internal layers continue to protect the critical asset
  - **TH**: เป็นการใช้หลักการป้องกันแบบเชิงลึก (Defense in Depth) ทำให้หากการควบคุมรอบนอกล้มเหลวหรือถูกบายพาส เลเยอร์ชั้นในที่เสริมกันจะยังคงปกป้องทรัพยากรสำคัญต่อไปได้
- **[Option B]**
  - **EN**: It completely eliminates the requirement for ongoing vulnerability management and security patching
  - **TH**: ช่วยขจัดความจำเป็นในการจัดการช่องโหว่และการลงแพตช์ระบบอย่างต่อเนื่องได้อย่างสิ้นเชิง
- **[Option C]**
  - **EN**: It eliminates single points of failure by ensuring that every security control performs identical functional operations
  - **TH**: ช่วยกำจัดจุดล้มเหลวเดี่ยวโดยทำให้แน่ใจว่ามาตรการควบคุมทุกตัวทำงานในฟังก์ชันที่เหมือนกันทุกประการ
- **[Option D]**
  - **EN**: It ensures that technical controls operate independently of organizational security policies and management oversight
  - **TH**: ทำให้มาตรการควบคุมทางเทคนิคสามารถทำงานได้โดยไม่ต้องขึ้นกับนโยบายขององค์กรหรือการกำกับดูแลของผู้บริหาร

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: It implements Defense in Depth, ensuring that if a perimeter control fails or is bypassed, complementary internal layers continue to protect the critical asset
- **Thai Text**: เป็นการใช้หลักการป้องกันแบบเชิงลึก (Defense in Depth) ทำให้หากการควบคุมรอบนอกล้มเหลวหรือถูกบายพาส เลเยอร์ชั้นในที่เสริมกันจะยังคงปกป้องทรัพยากรสำคัญต่อไปได้

#### Explanations

**Short Explanation (English):**
Defense in depth deploys multiple complementary security layers so that the failure of any single control does not compromise the asset.

**Full Explanation (English):**
Defense in Depth (or layered security) is the defensive practice of deploying multiple complementary, overlapping security controls across technical, administrative, and physical domains. The core rationale is that no single security control is infallible; if an attacker penetrates or bypasses perimeter firewalls, subsequent layers—such as host-based protection, multi-factor authentication, and database encryption—still protect the underlying asset. Defense in depth does not eliminate the need for patching or vulnerability management, nor does it mean controls operate without policy.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: Defense in Depth (การป้องกันแบบเชิงลึก) คือการวางมาตรการควบคุมหลายระดับที่สอดประสานกัน เพื่อให้แน่ใจว่าหากด่านป้องกันชั้นใดชั้นหนึ่งล้มเหลวหรือถูกเจาะ ด่านชั้นต่อๆ ไป (เช่น การจำกัดสิทธิ์ การเข้ารหัสข้อมูล การยืนยันตัวตน) จะยังคงทำหน้าที่ปกป้องข้อมูลสำคัญอยู่
- ข้อ B ไม่ถูกต้อง: Defense in Depth ไม่ได้ทำให้ยกเลิกการลงแพตช์ได้ การอัปเดตระบบยังคงจำเป็นอย่างยิ่ง
- ข้อ C ไม่ถูกต้อง: การควบคุมแต่ละชั้นมีหน้าที่หลากหลายและเสริมกัน ไม่ได้ทำงานเหมือนกันทุกประการ
- ข้อ D ไม่ถูกต้อง: มาตรการทางเทคนิคทั้งหมดต้องขับเคลื่อนและสอดคล้องกับนโยบายของผู้บริหารเสมอ

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: Defense in Depth (or layered security) is the defensive practice of deploying multiple complementary, overlapping security controls across technical, administrative, and physical domains. The core rationale is that no single security control is infallible; if an attacker penetrates or bypasses perimeter firewalls, subsequent layers—such as host-based protection, multi-factor authentication, and database encryption—still protect the underlying asset.
- **TH**: Defense in Depth (การป้องกันแบบเชิงลึก) คือการวางมาตรการควบคุมหลายระดับที่สอดประสานกัน เพื่อให้แน่ใจว่าหากด่านป้องกันชั้นใดชั้นหนึ่งล้มเหลวหรือถูกเจาะ ด่านชั้นต่อๆ ไป (เช่น การจำกัดสิทธิ์ การเข้ารหัสข้อมูล การยืนยันตัวตน) จะยังคงทำหน้าที่ปกป้องข้อมูลสำคัญอยู่

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Defense in depth does not eliminate the need for patching or vulnerability management; regular maintenance remains essential.
  - **TH**: Defense in Depth ไม่ได้ทำให้ยกเลิกการลงแพตช์ได้ การอัปเดตระบบยังคงจำเป็นอย่างยิ่ง
- **Option C**:
  - **EN**: Controls across layers perform diverse and complementary functions, not identical operations.
  - **TH**: การควบคุมแต่ละชั้นมีหน้าที่หลากหลายและเสริมกัน ไม่ได้ทำงานเหมือนกันทุกประการ
- **Option D**:
  - **EN**: Technical controls must always align with and be driven by organizational security policies.
  - **TH**: มาตรการทางเทคนิคทั้งหมดต้องขับเคลื่อนและสอดคล้องกับนโยบายของผู้บริหารเสมอ

---

### Question 23 (ID: 606)

- **Question ID**: 606
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> A system administrator routinely applies verified operating system security updates, maintains current anti-malware signatures on endpoints, and changes factory-default passwords on newly installed network switches before deployment. These routine, prudent operational measures reflect which professional security principle?

**Thai (ภาษาไทย):**
> ผู้ดูแลระบบปฏิบัติการหมั่นลงแพตช์ความมั่นคงปลอดภัยตามกำหนดเวลาอย่างสม่ำเสมอ อัปเดตฐานข้อมูลแอนติไวรัสบนเครื่องลูกข่าย และเปลี่ยนรหัสผ่านเริ่มต้นจากโรงงาน (Default passwords) บนอุปกรณ์สวิตช์เครือข่ายตัวใหม่ก่อนนำไปใช้งานจริง การดำเนินการที่รอบคอบและเหมาะสมตามปกตินี้สะท้อนถึงหลักการวิชาชีพใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Due Care
  - **TH**: ความใส่ใจตามสมควรในการปฏิบัติหน้าที่ (Due Care)
- **[Option B]**
  - **EN**: Due Diligence
  - **TH**: ความรอบคอบในการตรวจสอบและประเมิน (Due Diligence)
- **[Option C]**
  - **EN**: Risk Avoidance
  - **TH**: การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)
- **[Option D]**
  - **EN**: Separation of Duties
  - **TH**: การแบ่งแยกหน้าที่ความรับผิดชอบ (Separation of Duties)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Due Care
- **Thai Text**: ความใส่ใจตามสมควรในการปฏิบัติหน้าที่ (Due Care)

#### Explanations

**Short Explanation (English):**
Due Care is the implementation of reasonable, prudent actions and operational safeguards to protect assets from harm.

**Full Explanation (English):**
Due Care is the practice of taking reasonable, prudent, and responsible operational actions under the circumstances to protect assets, enforce security controls, and mitigate known risks ('doing the right things' to protect the organization). Routine activities like applying security patches, maintaining antivirus definitions, and changing default passwords are core examples of practicing Due Care. Due Diligence, by contrast, is the analytical and investigative process of researching, assessing, and evaluating risk and control adequacy ('knowing what needs to be done'). Risk avoidance eliminates activities altogether, and separation of duties divides tasks among multiple people.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: Due Care (การปฏิบัติหน้าที่ด้วยความใส่ใจตามสมควร) คือการลงมือกระทำอย่างถูกต้อง รอบคอบ และมีความรับผิดชอบในการปกป้องดูแลระบบและทรัพย์สิน เช่น การลงแพตช์อย่างสม่ำเสมอ การเปลี่ยนรหัสผ่านเริ่มต้น และการเปิดใช้งานแอนติไวรัส (เน้นการ 'ลงมือทำ' เพื่อปกป้อง)
- ข้อ B ไม่ถูกต้อง: Due Diligence คือการตรวจสอบ วิเคราะห์ และประเมินสถานการณ์ล่วงหน้าอย่างละเอียดรอบคอบ (เน้นการ 'ตรวจสอบ/ประเมิน' ก่อนและระหว่างดำเนินการ)
- ข้อ C ไม่ถูกต้อง: Risk Avoidance คือการยกเลิกไม่ทำกิจกรรมเพื่อไม่ให้มีความเสี่ยง
- ข้อ D ไม่ถูกต้อง: Separation of Duties คือการแยกหน้าที่สำคัญออกจากกันเพื่อป้องกันการทุจริต

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: Due Care is the practice of taking reasonable, prudent, and responsible operational actions under the circumstances to protect assets, enforce security controls, and mitigate known risks ('doing the right things' to protect the organization). Routine activities like applying security patches, maintaining antivirus definitions, and changing default passwords are core examples of practicing Due Care.
- **TH**: Due Care (การปฏิบัติหน้าที่ด้วยความใส่ใจตามสมควร) คือการลงมือกระทำอย่างถูกต้อง รอบคอบ และมีความรับผิดชอบในการปกป้องดูแลระบบและทรัพย์สิน เช่น การลงแพตช์อย่างสม่ำเสมอ การเปลี่ยนรหัสผ่านเริ่มต้น และการเปิดใช้งานแอนติไวรัส (เน้นการ 'ลงมือทำ' เพื่อปกป้อง)

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Due Diligence, by contrast, is the analytical and investigative process of researching, assessing, and evaluating risk and control adequacy ('knowing what needs to be done').
  - **TH**: Due Diligence คือการตรวจสอบ วิเคราะห์ และประเมินสถานการณ์ล่วงหน้าอย่างละเอียดรอบคอบ (เน้นการ 'ตรวจสอบ/ประเมิน' ก่อนและระหว่างดำเนินการ)
- **Option C**:
  - **EN**: Risk avoidance eliminates activities altogether to avoid risk exposure.
  - **TH**: Risk Avoidance คือการยกเลิกไม่ทำกิจกรรมเพื่อไม่ให้มีความเสี่ยง
- **Option D**:
  - **EN**: Separation of duties divides sensitive tasks among multiple people to prevent fraud.
  - **TH**: Separation of Duties คือการแยกหน้าที่สำคัญออกจากกันเพื่อป้องกันการทุจริต

**Exam Tip:**
- **EN**: Due Care = Prudent Action / Implementation ('Doing the right thing'); Due Diligence = Thorough Investigation / Verification ('Knowing the right thing').
- **TH**: Due Care = การลงมือปฏิบัติอย่างรอบคอบ (Doing the right thing); Due Diligence = การตรวจสอบหาข้อเท็จจริงอย่างละเอียด (Knowing the right thing)

---

### Question 24 (ID: 607)

- **Question ID**: 607
- **Domain**: Domain 1: Security Principles (`dom`: 1)
- **Topic**: Not specified in source data
- **Correct Answer**: Option A (Index: 0)

#### Question Text

**English:**
> Prior to signing a service agreement with a third-party cloud analytics provider, a financial firm's cybersecurity team conducts a formal risk assessment, reviews the vendor's SOC 2 Type II audit report, evaluates their encryption architecture, and verifies their regulatory compliance certifications. Which professional security principle is the cybersecurity team executing?

**Thai (ภาษาไทย):**
> ก่อนการลงนามในสัญญาใช้บริการกับผู้ให้บริการวิเคราะห์ข้อมูลบนคลาวด์ภายนอก ทีมความมั่นคงปลอดภัยไซเบอร์ของบริษัทการเงินได้ทำการประเมินความเสี่ยงอย่างเป็นทางการ ตรวจสอบรายงานการตรวจสอบ SOC 2 Type II ของผู้ขาย ประเมินสถาปัตยกรรมการเข้ารหัสข้อมูล และยืนยันการรับรองมาตรฐานด้านกฎหมาย ทีมงานกำลังปฏิบัติตามหลักการวิชาชีพใด?

#### Answer Choices

- **[Option A]** *(Correct Answer)*
  - **EN**: Due Diligence
  - **TH**: ความรอบคอบในการตรวจสอบและประเมิน (Due Diligence)
- **[Option B]**
  - **EN**: Due Care
  - **TH**: ความใส่ใจตามสมควรในการปฏิบัติหน้าที่ (Due Care)
- **[Option C]**
  - **EN**: Strict Liability
  - **TH**: ความรับผิดโดยเคร่งครัด (Strict Liability)
- **[Option D]**
  - **EN**: Risk Acceptance
  - **TH**: การยอมรับความเสี่ยง (Risk Acceptance)

#### Correct Answer Summary

- **Correct Choice**: Option A
- **English Text**: Due Diligence
- **Thai Text**: ความรอบคอบในการตรวจสอบและประเมิน (Due Diligence)

#### Explanations

**Short Explanation (English):**
Due Diligence is the thorough investigation, review, and assessment of risks and controls before and during an activity.

**Full Explanation (English):**
Due Diligence is the practice of thoroughly investigating, assessing, evaluating, and validating risks and security postures before and during a business commitment or operational activity ('knowing the facts and assessing the risks'). Reviewing third-party audit reports, inspecting security controls, and validating vendor compliance certifications prior to signing a contract represents Due Diligence. Due Care is the subsequent or routine practice of taking prudent, protective operational steps. Strict liability is a legal standard, and risk acceptance acknowledges and absorbs risk without requiring remediation.

**Full Explanation (Thai):**
ข้อ A ถูกต้อง: Due Diligence (ความรอบคอบในการตรวจสอบ) คือการศึกษา ค้นคว้า ตรวจสอบ และประเมินความเสี่ยงและมาตรการความปลอดภัยอย่างละเอียดรอบคอบ 'ก่อนและระหว่าง' การทำธุรกรรมหรือการว่าจ้างผู้ให้บริการภายนอก เพื่อให้มีข้อมูลครบถ้วนก่อนตัดสินใจ
- ข้อ B ไม่ถูกต้อง: Due Care คือการลงมือปฏิบัติด้านการป้องกันดูแลระบบอย่างสม่ำเสมอตามสมควร (Duty of care)
- ข้อ C ไม่ถูกต้อง: Strict Liability เป็นหลักการทางกฎหมายว่าด้วยความรับผิดโดยไม่ต้องพิสูจน์เจตนา ไม่ใช่หลักการประเมินความปลอดภัย
- ข้อ D ไม่ถูกต้อง: Risk Acceptance คือการตัดสินใจยอมรับความเสี่ยง ไม่ใช่กระบวนการตรวจสอบข้อมูลของผู้ขาย

#### Structured Explanation Detail (`explanation_detail`)

**Correct Option Analysis (Option A):**
- **EN**: Due Diligence is the practice of thoroughly investigating, assessing, evaluating, and validating risks and security postures before and during a business commitment or operational activity ('knowing the facts and assessing the risks'). Reviewing third-party audit reports, inspecting security controls, and validating vendor compliance certifications prior to signing a contract represents Due Diligence.
- **TH**: Due Diligence (ความรอบคอบในการตรวจสอบ) คือการศึกษา ค้นคว้า ตรวจสอบ และประเมินความเสี่ยงและมาตรการความปลอดภัยอย่างละเอียดรอบคอบ 'ก่อนและระหว่าง' การทำธุรกรรมหรือการว่าจ้างผู้ให้บริการภายนอก เพื่อให้มีข้อมูลครบถ้วนก่อนตัดสินใจ

**Incorrect Options Analysis:**
- **Option B**:
  - **EN**: Due Care is the subsequent or routine practice of taking prudent, protective operational steps.
  - **TH**: Due Care คือการลงมือปฏิบัติด้านการป้องกันดูแลระบบอย่างสม่ำเสมอตามสมควร (Duty of care)
- **Option C**:
  - **EN**: Strict liability is a legal standard assigning liability regardless of fault or intent, not a security evaluation practice.
  - **TH**: Strict Liability เป็นหลักการทางกฎหมายว่าด้วยความรับผิดโดยไม่ต้องพิสูจน์เจตนา ไม่ใช่หลักการประเมินความปลอดภัย
- **Option D**:
  - **EN**: Risk acceptance acknowledges and absorbs risk without requiring remediation or vendor investigation.
  - **TH**: Risk Acceptance คือการตัดสินใจยอมรับความเสี่ยง ไม่ใช่กระบวนการตรวจสอบข้อมูลของผู้ขาย

**Real-World Example:**
- **EN**: Reviewing a cloud vendor's SOC 2 Type II report and ISO 27001 certificate before signing an enterprise subscription is Due Diligence.
- **TH**: การขอตรวจสอบรายงาน SOC 2 Type II และใบรับรอง ISO 27001 ของผู้ให้บริการคลาวด์ก่อนลงนามในสัญญาคือตัวอย่างของ Due Diligence

---

