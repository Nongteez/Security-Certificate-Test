---
id: d1-phase2-knowledge-map
domain_id: 1
domain_name: Security Principles
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-18
source_reference: ISC2-CC-2026-SOURCE-20261018-01
---

# Domain 1 — Knowledge Map

## สถานะและการอ้างอิง

นี่คือแผนที่ความรู้ **จาก training materials ที่ส่งมา** ไม่ใช่ official ISC2 syllabus หรือข้อสอบ เอกสารใช้ English technical terminology และคำอธิบายไทยที่ผู้จัดทำสรุปจากต้นฉบับ ยังไม่ใช่ reviewed knowledge ของโครงการ

`[Snn]` ลิงก์ไปยังภาพจริงตาม capture position; stable ID เต็มคือ `ISC2-CC-2026-D1-CAPTURE-nnn` ตาม [manifest](../../source-manifest.json) ส่วน `[T] T@hh:mm:ss` คือ block ที่เริ่มด้วยเวลานั้นใน transcript เดิม รายละเอียดการจับคู่ทุกภาพอยู่ใน [source quality report](source-quality-report.md) ไม่มีการอ้างว่า capture position เป็น original slide number

**Evidence labels:** ทุก KNOW entry ด้านล่างเป็น `source-supported` ในความหมายว่าอ่านพบจากวัสดุ ไม่ใช่รับรอง technical correctness; จุดที่มี SQ flag เป็น `review-required` การตั้งหัวข้อ/ID, การเชื่อมความสัมพันธ์ และคำแนะนำการใช้เป็น `editorial organization/inference` ข้อสรุปที่ source ไม่ชัดจะไม่ถูกเติมจากความจำหรือเว็บ

## Topic hierarchy — การจัดกลุ่มของผู้จัดทำ

- Source label **1.1: Understand security concepts** — CIA Triad → Confidentiality/Integrity/Availability; AAA → Authentication/Authorization/Accounting; MFA → independent factors; Privacy → roles, ownership, inventory, retention/deletion
- Source label **1.2: Understand risk management concepts** — lifecycle → identify → assess/analyze → treat/respond → monitor/review → communicate/report; qualitative/quantitative; EF/AV/SLE/ARO/ALE
- Source label **1.3: Understand governance concepts** — Governance → Law/Regulation, Framework, Guideline, Policy, Standard, Procedure; ISO/IEC 27001/ISMS; CIS Controls
- Source label **1.4: Understand cybersecurity controls** — categories → Technical/Managerial/Operational/Physical; functional types → Deterrent/Preventive/Detective/Compensating/Corrective/Directive; defense in depth และ context overlap
- Source label **1.5: Maintain professional and ethical conduct** — Professional Code of Conduct → Due Care/Due Diligence → ISC2 Code of Ethics ที่ source ยกมา

Source labels มาจาก [T] T@00:05:55, T@00:31:18, T@00:46:10, T@00:56:16 และ T@01:05:51 ไม่ได้ยืนยัน official objective numbering ใหม่

## 1.1 — Cybersecurity concepts

### KNOW-D1-001 — CIA Triad

**Meaning:** กรอบสามคุณสมบัติที่บทเรียนเรียกว่า pillars: **Confidentiality, Integrity, Availability** ให้พิจารณาว่าต้องรักษาคุณสมบัติใด ใช้วิธีใด และเกิดอะไรเมื่อคุณสมบัตินั้นถูกละเมิด นิยามย่อยอยู่ KNOW-D1-002/004/006 จึงไม่สร้าง concept ซ้ำตามจำนวนภาพ

**Relationship:** ผู้บรรยายวาง AAA เป็นอีกกลุ่มแนวคิดพื้นฐานที่เกี่ยวข้อง ไม่ได้บอกว่า AAA มาแทน CIA [S04]; [T] T@00:05:55, T@00:06:42, T@00:17:26

### KNOW-D1-002 — Confidentiality

**Definition:** ให้ sensitive data เข้าถึงได้เฉพาะ authorized people, systems หรือ processes ตามข้อความหลักใน source จุดเน้นคือการเห็น/อ่านข้อมูลโดยผู้ที่ได้รับอนุญาต

**Source example:** financial database จำกัดให้พนักงานที่เกี่ยวข้อง; encrypted emails/files ให้ผู้รับที่ได้รับอนุญาตอ่านได้ **Boundary:** [S05] ใส่ “altering” ไว้ในคำอธิบายด้วย แต่ [S07] เน้น unauthorized changes ใต้ Integrity จึงต้องอ่านเป้าหมายของเหตุการณ์ ไม่ย้ายคำข้ามแนวคิดอย่างเงียบ ๆ (SQ-13) [S05], [S06]; [T] T@00:06:42, T@00:07:28, T@00:08:54

### KNOW-D1-003 — Confidentiality measures

| Source term | บทบาทและตัวอย่างที่ source ระบุ | ขอบเขต |
| --- | --- | --- |
| Encryption | ป้องกัน emails/files ให้อ่านได้เฉพาะผู้รับ; [T] ยก AES สำหรับ data at rest และ VPN สำหรับข้อมูลเคลื่อนผ่าน network | พบชื่อ AES/VPN แต่ไม่มีรายละเอียด algorithm/protocol ให้ขยาย; encryption ไม่ใช่ answer rule ทุกบริบท |
| Access Control / Passwords | จำกัดการเข้าถึง sensitive systems ให้ผู้ที่ได้รับอนุญาต เช่น finance employees | ดู distinction กับ Authentication/Authorization; ไม่เหมาว่า password อย่างเดียวทำทุกหน้าที่ |
| Data Masking | ซ่อนบางส่วน เช่นแสดง last four digits ของ credit card | ไม่อ้างว่าการแสดงบางส่วนมีคุณสมบัติเดียวกับ encryption |
| Two-Factor Authentication (2FA) | ตัวอย่าง password + code sent to phone | ใช้ในกลุ่ม confidentiality examples; นิยาม factor composition อยู่ KNOW-D1-012 |
| Non-Disclosure Agreement (NDA) | ข้อตกลงไม่เปิดเผย confidential information; [T] ยก employee/employer | ไม่ใช่ Non-repudiation; ไม่ขยายคำแนะนำทางกฎหมาย |

**Evidence:** [S05], [S06]; [T] T@00:08:08, T@00:08:54, T@00:09:35, T@00:10:29, T@00:11:10 ต้นฉบับ S06 ถูกตัดท้ายบางส่วนจึงอ้าง block ของ NDA ร่วมด้วย (SQ-02/13)

### KNOW-D1-004 — Integrity

**Definition:** การรักษาข้อมูลให้ correct and unaltered และป้องกัน unauthorized modification, deletion หรือ corruption ใช้ข้อความ **unaltered จาก [S07]**; transcript T@00:11:10 มี “correct and altered” ซึ่งเก็บเป็น discrepancy (SQ-03)

**Examples:** จำนวนเงินที่ส่งกับที่รับตรงกัน; patient records ไม่ถูกแก้/ลบโดยไม่มีสิทธิ; company database logs/entries คงความถูกต้องตาม source **Relationship:** แยกผลที่ต้องการรักษาออกจากเครื่องมือ verification ใน KNOW-D1-005 [S07], [S08], [S09]; [T] T@00:11:10, T@00:11:53, T@00:12:33, T@00:13:58

### KNOW-D1-005 — Integrity verification: Checksums, Hashing, Digital Signatures

Source อธิบายว่าตรวจการเปลี่ยนแปลงระหว่าง transmission/storage ได้ด้วย checksums หรือ digital signatures และกล่าวถึง hashing; ยก software download เปรียบ hash และ signed email ที่ตรวจว่าไม่ถูกแก้หลังส่ง ชื่อ **MD5** และ **SHA** ปรากฏเป็นตัวอย่างเท่านั้น ไม่มี version/ความเหมาะสมของ algorithm หรือ trust assumptions ให้สรุปต่อ

**Review-required:** ไม่ทำให้ checksum, hashing และ digital signature เป็นเครื่องมือเหมือนกันทุกคุณสมบัติ และไม่อ้างว่า hash match ยืนยัน authenticity ทุกกรณี (SQ-15) Source ไม่สอน Non-repudiation ชัดพอให้เพิ่มเป็น KNOW entry [S07], [S08], [S09]; [T] T@00:11:53, T@00:12:33, T@00:13:16

### KNOW-D1-006 — Availability

**Definition:** systems, data และ resources ใช้งานได้โดย authorized users เมื่อจำเป็น Source เน้นลด downtime จาก hardware failure, cyberattacks หรือ maintenance; [T] ยก DoS/DDoS และช่วงอัปเกรดระบบ

**Relationship:** ต่างจาก “ใครอ่านข้อมูลได้” และ “ข้อมูลถูกแก้หรือไม่”; กลไกประกอบอยู่ KNOW-D1-007 [S10]; [T] T@00:13:58, T@00:14:40

### KNOW-D1-007 — Availability mechanisms and examples

Source ยก **Backups/Recovery, Redundancy, Failover**, web servers with **Load Balancers**, cloud storage backups, **Uninterruptible Power Supplies (UPS)**, redundant Internet connections ผ่านหลาย **ISPs** และ **Disaster Recovery Sites** ผู้บรรยายอธิบาย load balancer กระจาย traffic ไป servers ที่เหลือเมื่อเครื่องหนึ่งล่ม และ ISP สำรองช่วยให้บริการต่อเนื่อง

**Boundary:** เป็นตัวอย่างของผู้สอน ไม่ใช่หลักฐานว่า backup ทุกแบบเข้าถึงได้ทันที หรือ DR site ทุกชนิด ready-to-take-over โดยไม่มี delay ไม่มี recovery-time values ให้เติม (SQ-14) [S10], [S11]; [T] T@00:15:23, T@00:16:01, T@00:16:46, T@00:17:26

### KNOW-D1-008 — AAA relationship

**AAA = Authentication, Authorization, Accounting** เป็นกลุ่มหน้าที่ที่สัมพันธ์กัน Source บอก Authorization **usually** หลัง Authentication และกิจกรรมถูกบันทึกด้วย Accounting จึงไม่เปลี่ยน usually เป็น always รายละเอียดแยกใน KNOW-D1-009–011 [S12]; [T] T@00:18:08, T@00:19:38, T@00:20:20

### KNOW-D1-009 — Authentication

**Definition:** ตรวจ identity ของ user, device หรือ system โดย validate credentials เช่น passwords, biometrics/fingerprint หรือ security tokens

**Example:** ผู้ใช้เข้าสู่ email ด้วย username/password ตาม lecture **Boundary:** source ใช้คำว่า authorized entities ในประโยคนิยามด้วย แต่การตัดสินสิทธิทำอะไรเป็นหัวข้อ Authorization แยกต่างหาก [S12]; [T] T@00:18:08, T@00:18:49

### KNOW-D1-010 — Authorization

**Definition:** กำหนดและให้ permission เพื่อเข้าถึง resources, ทำ actions หรือใช้ services ตาม verified identity Source ยกการอ่าน/ส่ง/ลบ email หลัง login และสิทธิตาม role โดยไม่สอน access-control models แบบละเอียด

**Relationship:** Authentication ตรวจตัวตน; Authorization กำหนดสิทธิ; การมี login สำเร็จไม่ได้เป็นนิยามเดียวกับ permission [S12]; [T] T@00:18:49, T@00:19:38, T@00:20:20

### KNOW-D1-011 — Accounting / Auditing in the lecture

**Definition:** source ใช้ Accounting (or Auditing) หมายถึง tracking/recording user activity เช่น access, actions และ system usage **Examples:** login/logout logs, command execution logs และบันทึกการส่ง/ลบ email

**Boundary:** เก็บการใช้คำคู่กันของ source ไม่ขยายว่า Accounting กับ Auditing เท่ากันในทุกมาตรฐานหรือทุกระบบ [S12]; [T] T@00:20:20, T@00:20:58

### KNOW-D1-012 — MFA, 2FA and factor categories

**Core source statement:** **Multifactor Authentication (MFA)** ใช้อย่างน้อยสอง independent factors; transcript ระบุ password + PIN ยังอยู่ category “Something You Know” เดียวกัน และยก password + fingerprint เป็นการใช้ต่าง category ส่วน 2FA ถูกยกเป็นกรณีสอง factors

| คำเดิมใน source | คำอธิบายไทย/ตัวอย่างจาก source |
| --- | --- |
| Something You Know / Knowledge Factor | สิ่งที่ผู้ใช้รู้ เช่น passwords, PINs, security questions; source ระบุ guessing/theft เป็น weakness |
| Something You Have / Possession Factor | สิ่งที่ผู้ใช้มี เช่น smartphones, smart cards, tokens; ข้ออ้างว่าต้อง physical theft เท่านั้นยัง review-required |
| Something You Are / Inherence Factor | biological characteristics เช่น fingerprints, facial features, iris patterns; source บอกยากต่อ replication ไม่ใช่รับรอง impossible-to-forge |
| Somewhere You Are / Location Factor | geographic/network-based location เช่น IP address, GPS, Wi-Fi; source ยก deny access เมื่อนอก expected location แต่ independent-factor status ยังไม่ยืนยัน |

Source ยังให้คำนึงถึง user convenience กับ security และลดความเสี่ยงเมื่อ factor หนึ่งถูก compromise **Review-required:** SQ-06 ครอบคลุม Location, absolute strength claims และข้อความที่เปรียบ biometrics กับ iris scan โดยไม่ชัด ไม่แก้ด้วยข้อมูลภายนอก [S13], [S14]; [T] T@00:21:43, T@00:23:02, T@00:23:37, T@00:24:20, T@00:24:59, T@00:25:37, T@00:26:16, T@00:26:57

### KNOW-D1-013 — Privacy

**Definition:** ปกป้อง personal information และปฏิบัติตาม laws/policies เกี่ยวกับ collection, storage และ use; source เชื่อมกับ compliance, risk mitigation และ individual rights **Examples:** ข้อมูลระบุตัวบุคคล เช่น social security number, home address หรือภาพบุคคลใน transcript

**Relationship:** มีมิติเรื่องการจัดการข้อมูลและสิทธิของบุคคลนอกเหนือจากการจำกัดผู้เห็นข้อมูล การเทียบกับ Confidentiality เป็นการสังเคราะห์จากนิยามที่ source ให้ ไม่ใช่นิยามกฎหมายเพิ่มเติม [S15], [S16]; [T] T@00:27:36

### KNOW-D1-014 — Privacy roles

**Data Subject:** บุคคลที่ข้อมูลส่วนบุคคลถูกเก็บ/ประมวลผล เช่น customer ของ e-commerce; **Controller:** ผู้กำหนด purpose และ means ของ processing เช่น retail company; **Processor:** ผู้ประมวลผลแทน controller เช่น cloud service provider ที่ host ข้อมูลร้านค้า

**Example:** transcript สมมติร้านค้าใช้ cloud ของอีกองค์กรเพื่ออธิบายบทบาท ไม่อ้างว่าบริษัทที่เอ่ยชื่อมีบทบาทเดียวในทุกบริการ [S17]; [T] T@00:28:22, T@00:29:06

### KNOW-D1-015 — Ownership, Data Inventory, Retention

**Ownership:** ระบุ authority และ responsibility ด้าน security/compliance โดย source ย้ำ respect data subjects' rights **Data Inventory:** รายการ data assets รวม location/type เช่น customer records, email logs, billing information **Retention:** กำหนดระยะเวลาจัดเก็บและเมื่อใดจะลบ

**Source example:** employee tax records seven years “as required by law” เป็นตัวอย่างที่ **ไม่มี jurisdiction/context** ไม่ใช่กฎ retention ทั่วไป (SQ-11) [S18]; [T] T@00:29:46, T@00:30:34

### KNOW-D1-016 — Right to Be Forgotten / deletion request

Source ยก former user ขอ removal ของ account information ภายใต้ GDPR แต่ประโยคเงื่อนไข “no longer necessary or legally required to retain” ใน [S19] และ transcript มีความกำกวม จึงเก็บเพียงว่ามี **แนวคิดการขอลบข้อมูลและข้อพิจารณาเรื่อง retention** ไม่แปลเป็นสิทธิลบได้เสมอ และไม่เติม legal exceptions เอง (SQ-11) [S19]; [T] T@00:31:18

## 1.2 — Risk management concepts

### KNOW-D1-017 — Risk Management lifecycle

**Definition:** กระบวนการ identify, assess, respond และ monitor risks ที่กระทบ information assets, systems, operations หรือ objectives เป็น continuous process ไม่ใช่งานครั้งเดียว [T] รวม people และ physical office ใน assets ด้วย

**Lifecycle ตาม source:** Identify Risks → Assess and Analyze Risks → Treat/Respond → Monitor and Review → Communicate and Report การใช้ลูกศรเป็นการแสดงลำดับที่ source ยก ไม่ได้แปลว่าการสื่อสารเกิดได้เฉพาะตอนสุดท้าย [S20]; [T] T@00:32:07, T@00:32:51

### KNOW-D1-018 — Risk Identification: Asset, Threat, Vulnerability, Impact

**Definition:** ค้นหาและบันทึก potential risks โดยรู้สิ่งที่ต้องป้องกันก่อน Source ยก **Customer Database → Asset**, **Ransomware → Threat**, **Unpatched Server → Vulnerability**, **Data Breach → Potential Impact** ใช้ “Unpatched” จาก [S22] โดยเปิดเผยว่า [T] T@00:34:18 พิมพ์ “unpaged” (SQ-03)

**Relationship:** Asset คือสิ่งที่ป้องกัน; Threat คือสิ่งอาจทำอันตราย; Vulnerability คือ weakness ที่ exploit ได้; Impact คือผลที่อาจเกิด ไม่สลับสาเหตุกับผล **Example:** ทั้งสี่รายการเป็นชุดตัวอย่างที่ source ระบุ ไม่เติม incident scenario ใหม่ [S21], [S22]; [T] T@00:33:37, T@00:34:18

### KNOW-D1-019 — Risk Assessment and Analysis

หลัง identification source ให้ประเมิน **Likelihood** และ **Potential Impact** แล้วแบ่งแนวทางเป็น **Qualitative** ซึ่งใช้ descriptive categories เช่น Low/Medium/High และ expert judgment/brainstorming/ranking กับ **Quantitative** ซึ่งใช้ numerical values เพื่อ calculate potential loss และ metrics

**Evidence limit:** การเปรียบเทียบ Qualitative/Quantitative มีใน transcript แต่ไม่มี dedicated readable comparison slide ในชุดนี้ ไม่เติมคะแนนหรือ matrix ที่ไม่มีใน source [T] T@00:35:02, T@00:35:44, T@00:36:30; ตัวอย่าง metrics อ่านได้ที่ [S23], [S24]

### KNOW-D1-020 — Asset Value (AV) and Exposure Factor (EF)

ในสูตรของ source **AV** คือค่าของ asset ที่ใช้คำนวณ และ **EF** คือ percentage ของ asset value ที่สูญเสียจาก risk event ตัวอย่าง flood เสียหาย 70% → EF 70%; server มูลค่า $10,000 ถูกเสียหาย 50% ใช้ใน SLE example

**Boundary:** ไม่ใช่ probability หรือความถี่; ไม่เพิ่มวิธี valuation ที่ source ไม่สอน [S23]; [T] T@00:37:13, T@00:37:59

### KNOW-D1-021 — Single Loss Expectancy (SLE)

**Definition/formula จากภาพ:** expected financial loss ต่อหนึ่ง risk event; **SLE = Asset Value (AV) × Exposure Factor (EF)** ตัวอย่างที่ source ให้: $10,000 × 50% = $5,000

**Review-required:** T@00:37:59 มี “plus the multiplied” จึงระบุชัดว่าสูตรที่แสดงอ่านจาก [S23] ไม่ได้แก้ transcript (SQ-04) [S23]; [T] T@00:37:59

### KNOW-D1-022 — Annualized Rate of Occurrence (ARO)

**Definition จากภาพ:** จำนวนครั้งที่ risk คาดว่าจะเกิดในหนึ่งปี [S23] ยก once every five years → **0.2** แต่ [T] T@00:38:53 พิมพ์ “2” และ “1 by 5 is equal to 2” เก็บทั้งสองรูปเป็น discrepancy ไม่เลือกตัวเลขผิดเงียบ ๆ

**Boundary:** ARO เป็น rate ไม่ใช่มูลค่า loss และไม่ใช่ percentage ของ asset value; ตัวอย่าง ARO=2 ของ [S24] เป็นคนละ input กับ once-every-five-years ของ S23 ไม่รวมกัน (SQ-04) [S23], [S24]; [T] T@00:38:53, T@00:39:45

### KNOW-D1-023 — Annualized Loss Expectancy (ALE)

**Definition/formula จากภาพ:** projected annual financial loss; **ALE = SLE × ARO** ตัวอย่าง [S24]: SLE $5,000 และ ARO 2 → ALE $10,000

**Review-required:** [T] T@00:35:44/T@00:36:30 มี “analyzed loss”; T@00:39:45 ใช้ชื่อ rate ตอนอธิบาย annual loss จึงใช้ label **Annualized Loss Expectancy จาก S24** และคง discrepancy ไว้ ไม่เพิ่มตัวอย่างคำนวณใหม่ (SQ-04) [S24]; [T] T@00:39:45

### KNOW-D1-024 — Risk Treatment / Response options

| Source option | ความหมายตาม source | Source example / เงื่อนไข |
| --- | --- | --- |
| Transfer | shift risk ไป third party ผ่าน insurance, outsourcing หรือ contracts | cyber insurance ช่วย cover data breach losses; ข้ออ้างลด direct responsibility ต้อง review ไม่สรุปว่า ownership/accountability หายหมด (SQ-07) |
| Accept | acknowledge/bear risk โดยไม่เพิ่ม action | [S25] ยก low impact/probability ที่ tolerable; [S26] เพิ่ม cost of treatment และ organization tolerance; คำ “only” ใน transcript ไม่ใช้เป็นกฎ (SQ-08) |
| Avoid | ยกเลิก activity/process ที่ก่อ risk ตามคำอธิบาย source | ไม่ใช้ vendor ที่มีประวัติ breach/ไม่ซื้อ application; ต้องชัดว่ากิจกรรมใดเลิก ไม่เหมาว่าเปลี่ยน vendor ทุกครั้งคือ Avoid (SQ-08) |
| Mitigate | ใช้ controls/measures ลด risk ให้อยู่ acceptable level โดยลด likelihood หรือ impact | firewall และ anti-malware; ไม่แปลว่าทำให้ risk หมดไปเสมอ |

**Additional transcript example:** potential loss $5,000 เทียบ countermeasure cost $7,000 ถูกยกประกอบ Accept เป็นตัวอย่าง cost comparison เท่านั้น ไม่ใช่กฎการตัดสินทุกกรณี [S25], [S26], [S27], [S28]; [T] T@00:40:30, T@00:41:19, T@00:41:59, T@00:42:42, T@00:43:30, T@00:44:08

### KNOW-D1-025 — Monitor and Review Risks

Source บอกว่า risk management ไม่จบเมื่อ implement controls: monitor existing risks, evaluate control effectiveness, identify new threats/vulnerabilities, reassess system/business changes, review accepted risks และ update assessments

**Triggers ที่ source ยก:** new technology, major software upgrade, new regulatory requirements, new threat/vulnerability [S29]; [T] T@00:44:51, T@00:45:32

### KNOW-D1-026 — Risk Communication and Reporting

**Definition:** บันทึกและสื่อสาร risk-related information ไป stakeholders รวม identified risks, status, mitigation efforts และ potential impacts เพื่อ informed decisions และ resource prioritization [S30]/[S32] มีสาระซ้ำจึงรวมเป็น concept เดียว [S30], [S32]; [T] T@00:45:32, T@00:46:10

## 1.3 — Governance concepts

### KNOW-D1-027 — Governance

**Definition:** ระบบที่องค์กรถูก directed, controlled และ held accountable ให้ security activities สนับสนุน business objectives, legal/regulatory requirements, policies, risk objectives และ protection of information/assets **Key relationship:** ให้ direction/oversight ของ cybersecurity program ไม่ใช่นิยามเดียวกับลงมือทำ control รายวัน [S33]; [T] T@00:46:10, T@00:46:59

### KNOW-D1-028 — Laws, Regulations and compliance examples

Source นิยาม Laws/Regulations ว่า legally enforceable requirements จาก governments/regulatory authorities และอธิบาย applicability ตาม industry, geographic location, type of data/services และ government requirements ยกผลไม่ปฏิบัติตามเป็น fines, legal consequences, reputational damage

**Examples as written on slides:** GDPR เกี่ยวกับ personal data/privacy within its scope; HIPAA เกี่ยวกับ certain health information in US; PCI DSS ให้ requirements กับ organizations handling payment-card data **Review-required:** heading/annotation รวมหลายชนิดข้อกำหนด ไม่ได้พิสูจน์ว่าทั้งหมดเป็นกฎหมาย; transcript spelling/scope ต่างจาก slide (SQ-03/11/12) [S34], [S35], [S37]; [T] T@00:47:41, T@00:48:26, T@00:49:10

### KNOW-D1-029 — Framework

**Definition:** structured approach จัดการ cybersecurity หรือ organizational activities เพื่อสร้าง program, identify gaps, manage risks, improve maturity และ consistency Source ยก **NIST Cybersecurity Framework (CSF), ISO/IEC 27001, CIS Controls** ไว้ใน examples แต่ไม่สอนรายละเอียด functions/control catalogs

**Boundary:** S44 เรียก ISO/IEC 27001 ว่า international standard; ไม่ทำให้ทุกตัวอย่างเป็น artifact ชนิดเดียวกัน (SQ-12) [S38]; [T] T@00:49:10, T@00:49:52

### KNOW-D1-030 — Guideline

**Definition:** recommended practices/advice ช่วย security objectives โดย source ระบุ **generally advisory**, flexible และ adaptable เพื่อ support policies/decisions **Examples:** password-management, secure-configuration, secure-software-development recommendations และ sensitive-information protection

**Boundary:** รักษาคำ generally; ไม่สรุปสถานะข้อบังคับของเอกสารจริงทุกองค์กรจากชื่อ Guideline อย่างเดียว [S39], [S46]; [T] T@00:49:52, T@00:50:36

### KNOW-D1-031 — Policy

**Definition:** high-level statement of management expectations, requirements และ direction กำหนดสิ่งที่องค์กรต้องการ, objectives, responsibilities และ acceptable/unacceptable behavior **Examples:** Information Security Policy, Acceptable Use Policy, Password Policy; password policy อาจกำหนดให้ใช้ strong passwords [S40], [S43], [S46], [S47]; [T] T@00:51:14, T@00:51:53, T@00:53:23

### KNOW-D1-032 — Standard

**Definition:** specific mandatory requirements เพื่อ implement policy; มี technical specifications, minimum security requirements และ consistent criteria Source แยก **Policy says WHAT; Standard defines required level/specifications**

**Example:** password standard ระบุ minimum length, complexity และ MFA requirements โดยไม่มีค่าตัวเลขขั้นต่ำให้เติม [S41], [S43], [S46], [S47]; [T] T@00:51:53, T@00:52:38, T@00:53:23

### KNOW-D1-033 — Procedure

**Definition:** detailed step-by-step instructions สำหรับ specific task; source phrase **“How do we do it?”** **Example:** เปิด identity-management portal → select account → reset password → verify new authentication settings → document change

**Review-required:** เก็บ process example โดยไม่สร้างคำสั่งใช้งานจริง; ไม่รับรองคำ “optional” ของ T@00:56:16 เพราะ slides ไม่ระบุเช่นนั้น (SQ-05) [S42], [S43], [S46], [S47]; [T] T@00:52:38, T@00:53:23, T@00:56:16

### KNOW-D1-034 — ISO, ISO/IEC 27001 and ISMS

ตาม [S44] **International Organization for Standardization (ISO)** พัฒนา international standards; **ISO/IEC 27001** เป็น international standard สำหรับ establishing, implementing, maintaining และ continually improving **Information Security Management System (ISMS)** ซึ่งเกี่ยวกับ risk management, controls, policies/processes, continual improvement และ management involvement

ใช้ชื่อเต็ม/ตัวเลขจาก slide อย่างเปิดเผย เพราะ transcript มี “27,01”, “101” และ “NISMS” ไม่สรุป certification details/versions ที่ source ไม่ให้ (SQ-03/12) [S44]; [T] T@00:53:23, T@00:54:06

### KNOW-D1-035 — Center for Internet Security (CIS) and CIS Controls

ตาม source **CIS** เป็น nonprofit organization ที่พัฒนา cybersecurity best practices/resources ส่วน **CIS Controls** เป็น prioritized safeguards เพื่อ reduce common cyber risks, improve security posture, prioritize activities และ establish practical controls ไม่ขยายเป็นรายการ safeguards/version ที่ไม่มีในวัสดุ [S45]; [T] T@00:54:55

## 1.4 — Cybersecurity controls

### KNOW-D1-036 — Control categories

การแยก “รูปแบบ/วิธีดำเนินการ” เป็นคำอธิบายเชิงจัดหมวดของผู้จัดทำจาก source table ไม่ใช่ taxonomy ที่ตรวจยืนยันจาก ISC2

| Category ตาม source | Definition / ตัวอย่างทั้งหมดใน category table |
| --- | --- |
| Technical | hardware/software mechanisms ปกป้อง resources และ manage access: encryption, smart cards, passwords, biometrics, ACLs, firewalls, routers, IDS/IPS |
| Managerial / Administrative | policy/procedure, planning/assessment เพื่อ reduce/manage risk: policies, procedures, vendor management, hiring practices, background checks, data classification, security training, risk assessments, vulnerability assessments |
| Operational | day-to-day activities ที่ primarily executed by people: backup/recovery procedures, awareness training, change management, configuration management, media protection |
| Physical | ป้องกัน facilities/real-world objects: guards, mantraps, fences, lights, motion detectors, guard dogs, video cameras, alarms, laptop locks |

Source เองมี training ในหลาย category; ไม่ normalize ให้เป็นได้ที่เดียว รายชื่อที่มีเพียงการยกตัวอย่างถือ `mention-only` ไม่มี standalone device-definition ให้แต่งเพิ่ม [S48], [S50], [S51]; [T] T@00:57:04, T@00:57:54, T@00:58:31, T@00:59:08, T@00:59:47

### KNOW-D1-037 — Functional control types

| Type ตาม source | Definition ที่อ่านพบ | Examples ตาม S54 — ไม่ใช่ universal classifications |
| --- | --- | --- |
| Deterrent | discourage violation ของ security policies | guards, lighting, cameras, separation of duties, security policies, awareness training |
| Preventive | prevent/stop unwanted or unauthorized activity | fences, locks, biometrics, mantraps, alarms, job rotation, data classification, penetration testing, access control methods, firewalls |
| Detective | discover/detect unwanted or unauthorized activity | guards, guard dogs, motion detectors, job rotation, mandatory vacations, audit trails, intrusion detection systems, violation reports, honey pots |
| Compensating | source ใช้ “options to other existing controls” ช่วย enforce policies; wording ยังไม่ละเอียด | security policy, personnel supervision, monitoring, work-task procedures |
| Corrective | fix vulnerabilities หรือ mitigate damage after incident | backups/restores, patching, antivirus/antimalware, forensic analysis, disciplinary action |
| Directive | guide behavior และ enforce compliance with policy/procedure | policies, procedures, standards, guidelines, physical signage, verbal instructions, contracts/agreements |

**Review-required:** SQ-10 ครอบคลุมตัวอย่างที่ต้องมี implementation/context โดยเฉพาะ penetration testing, forensic analysis, monitoring, backup และ job rotation ไม่ย้ายตัวอย่างไป type อื่นเงียบ ๆ และไม่ใช้รายชื่อนี้เป็น answer lookup [S49], [S53], [S54]; [T] T@01:00:36, T@01:01:20, T@01:01:56, T@01:02:34, T@01:03:13

### KNOW-D1-038 — Defense in Depth / layered controls

Source แสดง Physical, Operational, Technical และ Managerial เป็น layers รอบ Assets; [T] เรียก layered defense/defense in depth เพื่ออธิบาย controls ทำงานร่วมกัน **Boundary:** แผนภาพเป็น teaching model ไม่ได้พิสูจน์ว่าทุกองค์กรต้องมี physical-to-managerial deployment order เดียวกัน [S52]; [T] T@00:59:47, T@01:00:36

### KNOW-D1-039 — Context-dependent overlap

Source ระบุ single control มีได้หลาย functional types ตาม implementation, situation และ specific risk **ตัวอย่าง source:** camera → Deterrent เมื่อ discourage entry และ Detective เมื่อ record/review incident; ACL → Preventive เมื่อ block access หรือ Detective เมื่อทำหน้าที่ log access เป็นหลัก

**Relationship:** category กับ function เป็นคนละมุมอธิบาย และตัวอย่างเดียวกันอาจมีมากกว่าหนึ่ง label การสรุปนี้เป็น editorial synthesis จาก [S50]/[S53]/[S55] คำอธิบาย “ACL logging” ยังคงเป็น source claim ที่ต้องดู implementation ไม่แต่งพฤติกรรม product เพิ่ม (SQ-10) [S55], [S56]; [T] T@01:03:49, T@01:04:26, T@01:05:10

## 1.5 — Professional and ethical conduct

### KNOW-D1-040 — Professional Code of Conduct

**Definition:** principles/expectations ว่าสมาชิกวิชาชีพควรปฏิบัติอย่างไร Source ระบุ Integrity, Confidentiality, Professionalism, Responsibility, Respect for Others, Protection of Information และ Compliance with Laws/Regulations

**Context:** Integrity ในรายการพฤติกรรมเป็นบริบทวิชาชีพ; การแยกจาก data Integrity เป็น contextual reading ของผู้จัดทำ ไม่ใช่นิยามใหม่จาก source [S57]; [T] T@01:05:51, T@01:06:33

### KNOW-D1-041 — Due Care

**Definition:** ทำ reasonable steps เพื่อป้องกัน organizational assets/reduce risk ตามสิ่งที่ reasonable/responsible organization หรือ professional ควรทำใน circumstances นั้น **Examples:** implement appropriate controls, protect sensitive information, apply patches, provide awareness training [S58]; [T] T@01:06:33, T@01:07:15

### KNOW-D1-042 — Due Diligence

**Definition:** investigate, evaluate และ maintain awareness of risks **before and during** security activities เพื่อตรวจว่า measures appropriate/effective หรือไม่ **Examples:** risk assessments, reviewing controls, vulnerability assessments, monitoring emerging threats

**Boundary:** ไม่ย่อเป็น “ทำก่อน” เท่านั้น หรือ Due Care “ทำหลัง” เท่านั้น เพราะ source ให้ before and during ชัดเจน ข้อเปรียบว่า more formal เป็น commentary ใน transcript ไม่ใช่แกนของนิยาม [S59]; [T] T@01:07:15, T@01:07:59

### KNOW-D1-043 — ISC2 Code of Ethics as reproduced by the course

Source อธิบาย purpose ว่ารักษา integrity, professionalism และ responsibility เพื่อปกป้อง public, organizations และ profession และแสดง canons สี่ข้อในลำดับต่อไปนี้ คำไทยเป็น derived summary ของ slide ไม่ใช่ official translation:

1. ปกป้อง society, common good, necessary public trust/confidence และ infrastructure
2. ปฏิบัติอย่าง honorably, honestly, justly, responsibly และ legally
3. ให้ diligent and competent service แก่ **principals** — ใช้ spelling จาก slide ซึ่งต่างจาก transcript “principles”
4. advance and protect the profession

**Review-required:** บันทึกลำดับที่เห็น ไม่รับรองข้ออ้างใน T@01:08:41/T@01:09:27 ว่าลำดับคำภายใน canon เป็นกฎให้ honesty/honor เหนือ legality; **ไม่ใช้เป็น decision rule** จนผ่าน authoritative human review (SQ-09) [S60]; [T] T@01:07:59, T@01:08:41, T@01:09:27

## Coverage / unresolved gaps

- **หลักฐานที่มี:** ทั้ง 5 source sections ข้างต้นมี transcript และภาพที่อ่านได้ประกอบ; Qualitative/Quantitative comparison อาศัย transcript โดยตรง ไม่มี dedicated comparison capture
- **ไม่มี explicit teaching พอ:** Non-repudiation แม้ถูกระบุใน planning file ของโครงการ จึงไม่สร้างนิยามหรือ canonical KNOW entry จากความจำ ชื่อ NDA หรือ Digital Signatures ไม่ทำให้ gap นี้หาย
- **กล่าวถึงแต่ไม่ได้สอนละเอียด:** algorithms/protocols, access-control models, device operations, detailed legal applicability, framework catalogs และการ resolve ethical conflict จึงไม่ขยายเอง และไม่เพิ่ม AI material ที่ไม่ปรากฏ
- **หลักฐานที่อ่านไม่ได้:** S31/S36 ไม่มี concept extraction; original deck numbering/ครบกี่ slide และ exact transcript alignment ยังไม่ทราบ
- **พร้อมทำอะไรต่อ:** ใช้แผนที่นี้และ [concept distinctions](concept-distinctions.md) เป็นฐานสำหรับ human review และอนาคต Phase 3 coverage planning แบบมี holds ตาม [source quality report](source-quality-report.md) ไม่ใช่ใบอนุญาตสร้างข้อสอบใน Phase 2

<!-- Source reference definitions: aliases map to original manifest records. -->
[S04]: ../slides/Screenshot%202026-09-19%20213831.png
[S05]: ../slides/Screenshot%202026-09-19%20213951.png
[S06]: ../slides/Screenshot%202026-09-19%20214354.png
[S07]: ../slides/Screenshot%202026-09-19%20215019.png
[S08]: ../slides/Screenshot%202026-09-19%20215812.png
[S09]: ../slides/Screenshot%202026-09-19%20215816.png
[S10]: ../slides/Screenshot%202026-09-19%20220631.png
[S11]: ../slides/Screenshot%202026-09-19%20223016.png
[S12]: ../slides/Screenshot%202026-09-19%20223751.png
[S13]: ../slides/Screenshot%202026-09-19%20224441.png
[S14]: ../slides/Screenshot%202026-09-19%20225627.png
[S15]: ../slides/Screenshot%202026-09-19%20225921.png
[S16]: ../slides/Screenshot%202026-09-19%20225926.png
[S17]: ../slides/Screenshot%202026-09-19%20225943.png
[S18]: ../slides/Screenshot%202026-09-19%20231044.png
[S19]: ../slides/Screenshot%202026-09-19%20231055.png
[S20]: ../slides/Screenshot%202026-09-19%20231752.png
[S21]: ../slides/Screenshot%202026-09-19%20232732.png
[S22]: ../slides/Screenshot%202026-09-19%20232740.png
[S23]: ../slides/Screenshot%202026-09-19%20232805.png
[S24]: ../slides/Screenshot%202026-09-19%20232819.png
[S25]: ../slides/Screenshot%202026-09-19%20232832.png
[S26]: ../slides/Screenshot%202026-09-19%20232901.png
[S27]: ../slides/Screenshot%202026-09-19%20232913.png
[S28]: ../slides/Screenshot%202026-09-19%20232929.png
[S29]: ../slides/Screenshot%202026-09-19%20232948.png
[S30]: ../slides/Screenshot%202026-09-19%20232959.png
[S32]: ../slides/Screenshot%202026-09-19%20234513.png
[S33]: ../slides/Screenshot%202026-09-19%20234554.png
[S34]: ../slides/Screenshot%202026-09-19%20234647.png
[S35]: ../slides/Screenshot%202026-09-19%20235021.png
[S37]: ../slides/Screenshot%202026-09-19%20235030.png
[S38]: ../slides/Screenshot%202026-09-19%20235324.png
[S39]: ../slides/Screenshot%202026-09-19%20235339.png
[S40]: ../slides/Screenshot%202026-09-19%20235649.png
[S41]: ../slides/Screenshot%202026-09-19%20235907.png
[S42]: ../slides/Screenshot%202026-09-19%20235938.png
[S43]: ../slides/Screenshot%202026-09-19%20235943.png
[S44]: ../slides/Screenshot%202026-09-20%20000914.png
[S45]: ../slides/Screenshot%202026-09-20%20001051.png
[S46]: ../slides/Screenshot%202026-09-20%20001103.png
[S47]: ../slides/Screenshot%202026-09-20%20001417.png
[S48]: ../slides/Screenshot%202026-09-20%20001425.png
[S49]: ../slides/Screenshot%202026-09-20%20001435.png
[S50]: ../slides/Screenshot%202026-09-20%20001509.png
[S51]: ../slides/Screenshot%202026-09-20%20001709.png
[S52]: ../slides/Screenshot%202026-09-20%20001717.png
[S53]: ../slides/Screenshot%202026-09-20%20001901.png
[S54]: ../slides/Screenshot%202026-09-20%20001921.png
[S55]: ../slides/Screenshot%202026-09-20%20002108.png
[S56]: ../slides/Screenshot%202026-09-20%20002536.png
[S57]: ../slides/Screenshot%202026-09-20%20002700.png
[S58]: ../slides/Screenshot%202026-09-20%20002816.png
[S59]: ../slides/Screenshot%202026-09-20%20003207.png
[S60]: ../slides/Screenshot%202026-09-20%20003325.png
[T]: ../transcripts/Script%20-%20DOMAIN%201.txt
