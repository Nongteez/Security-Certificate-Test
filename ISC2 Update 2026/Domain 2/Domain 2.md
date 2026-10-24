# ISC2 Certified in Cybersecurity (CC) 2026
# Domain 2 — Security Governance: Complete Study Notes

> **ขอบเขต:** สรุปเนื้อหาที่เรียนจากสไลด์ซึ่งส่งในบทสนทนา Domain 2 โดยเรียงตามหัวข้อที่ปรากฏจริง พร้อมคำอธิบายไทยและตัวอย่างช่วยจำ  
> **น้ำหนักข้อสอบ:** 17.3% ตามบทความ ISC2 เรื่องการปรับ Exam Outline มีผล 1 กันยายน 2026  
> **หมายเหตุ:** เอกสาร ISC2 ที่แนบมาเป็นบทความ *อธิบายการเปลี่ยนแปลงโครงสร้างข้อสอบ* ไม่ใช่สไลด์รายละเอียดทุกหัวข้อ เนื้อหาหลักด้านล่างยึดจากสไลด์การเรียนที่ส่งในบทสนทนา ส่วนคำอธิบายเสริมเพื่อความเข้าใจระบุด้วยคำว่า **เพิ่มเติมเพื่อความเข้าใจ**

---

## สารบัญ

1. [ภาพรวม Domain 2](#1-ภาพรวม-domain-2)
2. [Governance, Risk and Compliance (GRC)](#2-governance-risk-and-compliance-grc)
3. [GRC Frameworks and Standards](#3-grc-frameworks-and-standards)
4. [GRC Tools](#4-grc-tools)
5. [Risk Register](#5-risk-register)
6. [Business Continuity (BC)](#6-business-continuity-bc)
7. [Business Continuity Plan (BCP)](#7-business-continuity-plan-bcp)
8. [Disaster Recovery (DR)](#8-disaster-recovery-dr)
9. [Disaster Recovery Plan (DRP)](#9-disaster-recovery-plan-drp)
10. [BC vs DR](#10-business-continuity-vs-disaster-recovery)
11. [Security Awareness](#11-security-awareness)
12. [Security Culture](#12-security-culture)
13. [Security Leadership](#13-security-leadership)
14. [Social Engineering](#14-social-engineering)
15. [Common Social Engineering Techniques](#15-common-social-engineering-techniques)
16. [Password Protection](#16-password-protection)
17. [Measuring Cybersecurity Effectiveness](#17-measuring-cybersecurity-effectiveness)
18. [Security Metrics](#18-security-metrics)
19. [Key Risk Indicators (KRIs)](#19-key-risk-indicators-kris)
20. [Key Performance Indicators (KPIs)](#20-key-performance-indicators-kpis)
21. [Security Dashboards](#21-security-dashboards)
22. [Security Scorecards](#22-security-scorecards)
23. [Cybersecurity Reports](#23-cybersecurity-reports)
24. [ตารางเปรียบเทียบและจุดจำสำหรับสอบ](#24-ตารางเปรียบเทียบและจุดจำสำหรับสอบ)
25. [ตัวอย่างโจทย์ทบทวน](#25-ตัวอย่างโจทย์ทบทวน)
26. [ขอบเขตและสถานะการเรียน](#26-ขอบเขตและสถานะการเรียน)

---

## 1. ภาพรวม Domain 2

**Security Governance** คือหัวข้อที่มุ่งให้เข้าใจการกำกับดูแลความปลอดภัยขององค์กร ทั้งการจัดการความเสี่ยง การปฏิบัติตามข้อกำหนด ความต่อเนื่องทางธุรกิจ พฤติกรรมบุคลากร และการติดตามผลลัพธ์ของมาตรการความปลอดภัย

ตามบทความ ISC2 ที่แนบมา การปรับโครงสร้างปี 2026 เปลี่ยน Domain 2 จาก **Business Continuity (BC), Disaster Recovery (DR) & Incident Response Concepts** เป็น **Security Governance** (17.3%) และนำ BC/DR มาอยู่ภายใต้แนวคิดเรื่องความทนทานและความซ้ำซ้อน (redundancy) ในภาพรวม ส่วน Incident Response มีบทบาทมากขึ้นใน Domain 5

**เส้นเรื่องของบทเรียน:** กำหนดแนวทางกำกับดูแล → ระบุและจัดการความเสี่ยง → เตรียมให้ธุรกิจดำเนินต่อได้ → สร้างพฤติกรรมปลอดภัย → วัดผลและรายงาน

## 2. Governance, Risk and Compliance (GRC)

### 2.1 GRC คืออะไร

**GRC = Governance, Risk, and Compliance** เป็นแนวทางที่มีโครงสร้างและประสานงานกัน (**structured and coordinated approach**) เพื่อจัดการด้านการกำกับดูแล ความเสี่ยง และการปฏิบัติตามข้อกำหนดขององค์กร

- **Governance:** การกำหนดทิศทาง นโยบาย ความรับผิดชอบ และการกำกับดูแลให้ความปลอดภัยสอดคล้องกับเป้าหมายธุรกิจ
- **Risk:** การระบุ ประเมิน และจัดการความเสี่ยงที่อาจกระทบองค์กร
- **Compliance:** การทำให้การดำเนินงานสอดคล้องกับกฎหมาย กฎระเบียบ และข้อกำหนดที่เกี่ยวข้อง

**ตัวอย่างเพื่อความเข้าใจ:** องค์กรตั้งนโยบายให้ใช้ MFA (Governance), ประเมินความเสี่ยงจากบัญชีที่ไม่มี MFA (Risk), และตรวจสอบว่าการจัดการข้อมูลเป็นไปตามข้อกำหนดที่เกี่ยวข้อง (Compliance)

### 2.2 Purpose of GRC — วัตถุประสงค์

สไลด์ระบุว่า GRC ช่วยองค์กร:

1. **Align cybersecurity with business objectives:** ทำให้การลงทุนด้านความปลอดภัยสนับสนุนเป้าหมายทางธุรกิจ
2. **Identify and manage risks:** มองเห็นและจัดการความเสี่ยงอย่างเป็นระบบ
3. **Meet legal and regulatory obligations:** ปฏิบัติตามกฎหมายและข้อบังคับ
4. **Establish consistent policies and controls:** มีนโยบายและมาตรการควบคุมที่สอดคล้องกันทั้งองค์กร
5. **Improve accountability:** กำหนดผู้รับผิดชอบให้ชัดเจน
6. **Support informed decision-making:** ใช้ข้อมูลความเสี่ยงและการควบคุมประกอบการตัดสินใจ
7. **Reduce duplication of security and compliance efforts:** ลดงานซ้ำซ้อน เช่น การตรวจสอบข้อกำหนดเดียวกันในหลายทีม

### 2.3 Importance of GRC — ความสำคัญ

เมื่อ GRC มีประสิทธิผล องค์กรจะสามารถ:

- ลดความเสี่ยงทางไซเบอร์และธุรกิจ
- ปกป้องข้อมูลและทรัพย์สินสำคัญ
- ปฏิบัติตามข้อกำหนดจากหน่วยงานกำกับดูแล
- หลีกเลี่ยงหรือลดค่าปรับและความเสียหายทางการเงิน
- ตัดสินใจได้ดีขึ้น
- กำหนดความรับผิดชอบได้ชัดเจน
- เพิ่ม **organizational resilience** หรือความสามารถในการรับมือและฟื้นตัวจากเหตุรบกวน

**หากไม่มี GRC ที่ดี:** อาจเกิดแนวปฏิบัติด้านความปลอดภัยที่ไม่สอดคล้องกัน ความเสี่ยงที่ไม่ถูกระบุ การละเมิดข้อกำหนด และความรับผิดชอบที่ไม่ชัดเจน

**จำสอบ:** GRC ไม่ใช่เพียงเครื่องมือหรือการทำเอกสาร แต่เป็นแนวทาง **ประสาน Governance + Risk + Compliance**

## 3. GRC Frameworks and Standards

Frameworks และ Standards ช่วยให้องค์กรจัดกิจกรรม GRC อย่างมีโครงสร้าง

| ชื่อ | เน้นอะไรตามสไลด์ | จำสั้น ๆ |
|---|---|---|
| **NIST Cybersecurity Framework (CSF)** | กรอบบริหารและลดความเสี่ยงด้าน Cybersecurity | Cybersecurity Risk |
| **ISO/IEC 27001** | ข้อกำหนดสำหรับการจัดตั้งและปรับปรุง **Information Security Management System (ISMS)** อย่างต่อเนื่อง | ISMS |
| **COBIT** | กรอบกำกับดูแลและบริหารจัดการ Enterprise IT | IT Governance & Management |

**ตัวอย่างแยกแยะ:** ถ้าคำถามเน้นการสร้าง ISMS ให้คิดถึง **ISO/IEC 27001**; ถ้าเน้นการกำกับดูแลและจัดการ IT ระดับองค์กร ให้คิดถึง **COBIT**; ถ้าเน้นกรอบจัดการความเสี่ยงไซเบอร์ ให้คิดถึง **NIST CSF**

### กฎระเบียบและมาตรฐานที่ปรากฏในภาพประกอบ

สไลด์มีชื่อ **GDPR, HIPAA, PCI DSS, SOX และ CMMC** ในภาพวงกลมประกอบหัวข้อ GRC Frameworks แต่ไม่ได้แจกแจงความหมายหรือข้อกำหนดของแต่ละรายการในสไลด์ที่ส่งมา จึงควรจดจำว่าเป็น **ตัวอย่างชื่อที่ปรากฏ** โดยไม่ถือว่าบทเรียนนี้สอนรายละเอียดข้อกำหนดทั้งหมดของแต่ละฉบับ

> **เพิ่มเติมเพื่อความเข้าใจ:** Framework, standard, regulation และ law ไม่ใช่คำที่ใช้แทนกันได้ทุกกรณี; ไม่ควรสรุปว่าทุกชื่อในภาพเป็นกฎหมายหรือเป็น framework ประเภทเดียวกัน

## 4. GRC Tools

**GRC Tools** คือแพลตฟอร์มซอฟต์แวร์ที่ช่วยองค์กรจัดการกิจกรรมด้าน Governance, Risk และ Compliance

ความสามารถที่สไลด์ระบุ:

1. **Risk registers:** เก็บและติดตามรายการความเสี่ยง
2. **Policy management:** จัดการนโยบายและการปรับปรุง
3. **Compliance tracking:** ติดตามสถานะการปฏิบัติตามข้อกำหนด
4. **Control management:** จัดการมาตรการควบคุม
5. **Audit management:** จัดการการตรวจสอบ
6. **Risk assessments:** สนับสนุนการประเมินความเสี่ยง

**ตัวอย่างจากสไลด์:** แทนการเก็บข้อกำหนดและ controls หลายร้อยรายการใน Spreadsheet แยกกัน ระบบ GRC สามารถรวบรวมไว้ศูนย์กลางและติดตามสถานะได้

**จำสอบ:** GRC Tool = **Centralize + Track** ข้อมูลด้านการกำกับดูแล ความเสี่ยง และ compliance

## 5. Risk Register

### 5.1 ความหมาย

**Risk Register** คือบันทึกที่จัดทำเป็นเอกสารสำหรับความเสี่ยงขององค์กรที่ได้รับการระบุแล้ว (**documented record of identified organizational risks**)

### 5.2 ข้อมูลที่ Risk Register อาจประกอบด้วย

| ฟิลด์ | ความหมาย |
|---|---|
| **Risk description** | คำอธิบายความเสี่ยง |
| **Affected asset or process** | ทรัพย์สินหรือกระบวนการที่ได้รับผลกระทบ |
| **Threat** | ภัยคุกคาม |
| **Vulnerability** | จุดอ่อนที่อาจถูกใช้ประโยชน์ |
| **Likelihood** | โอกาสที่จะเกิด |
| **Impact** | ความรุนแรงของผลกระทบ |
| **Risk rating** | ระดับความเสี่ยงจากการประเมิน |
| **Risk owner** | ผู้รับผิดชอบความเสี่ยง |
| **Treatment strategy** | แนวทางจัดการความเสี่ยง |
| **Current status** | สถานะการจัดการปัจจุบัน |
| **Residual risk** | ความเสี่ยงที่ยังเหลืออยู่หลังการจัดการ |

**เพิ่มเติมเพื่อความเข้าใจ:** Likelihood และ Impact เป็นสองมิติที่มักใช้ประเมินระดับความเสี่ยง แต่สไลด์นี้ไม่ได้กำหนดสูตรคำนวณคะแนนความเสี่ยงแบบตายตัว

### 5.3 ตัวอย่างจากสไลด์

- **Risk:** Ransomware affecting critical servers — Ransomware กระทบเซิร์ฟเวอร์สำคัญ
- **Likelihood:** High
- **Impact:** High
- **Risk Owner:** IT Manager
- **Treatment:** Mitigation — ลดความเสี่ยง
- **Controls:** EDR, backups, network segmentation, MFA

**อธิบาย controls:**

- **EDR:** สนับสนุนการตรวจจับและตอบสนองภัยคุกคามบน Endpoint
- **Backups:** ช่วยกู้ข้อมูลหลังเหตุรบกวน
- **Network segmentation:** แบ่งเครือข่ายเพื่อจำกัดการแพร่กระจายของผลกระทบ
- **MFA:** เพิ่มชั้นการยืนยันตัวตน ลดความเสี่ยงจากการใช้รหัสผ่านเพียงอย่างเดียว

**จุดสำคัญ:** Risk Owner คือผู้รับผิดชอบให้ความเสี่ยงได้รับการจัดการ ไม่ได้หมายความว่าต้องเป็นคนลงมือทำทุก control เอง

## 6. Business Continuity (BC)

**Business Continuity (BC)** คือความสามารถขององค์กรในการ **ดำเนินกิจกรรมธุรกิจที่สำคัญต่อไปได้ระหว่างและหลังเกิดเหตุหยุดชะงัก**

ตัวอย่างเหตุหยุดชะงักที่ปรากฏในสไลด์:

1. Natural disasters — ภัยธรรมชาติ
2. Cyberattacks — การโจมตีไซเบอร์
3. Power outages — ไฟฟ้าดับ
4. Equipment failures — อุปกรณ์เสีย
5. Network outages — เครือข่ายขัดข้อง
6. Pandemics — การระบาดใหญ่
7. Loss of facilities — อาคาร/สถานที่ใช้งานไม่ได้
8. Supply-chain disruptions — ห่วงโซ่อุปทานหยุดชะงัก

**ตัวอย่างเพื่อความเข้าใจ:** เมื่อออฟฟิศใช้ไม่ได้ องค์กรจัดให้พนักงานทำงานจากสถานที่สำรองเพื่อให้บริการลูกค้าต่อได้ นี่เป็นเรื่อง **BC** เพราะเน้นการดำเนินธุรกิจต่อเนื่อง

**จำสอบ:** BC = **Keep the business running** (ไม่จำกัดเฉพาะ IT)

## 7. Business Continuity Plan (BCP)

**Business Continuity Plan (BCP)** คือเอกสารที่อธิบายว่าองค์กรจะดำเนิน **critical operations** ต่อไปอย่างไรระหว่างการหยุดชะงัก

หัวข้อที่ BCP อาจครอบคลุมตามสไลด์:

| องค์ประกอบ | ความหมาย/ตัวอย่าง |
|---|---|
| **Critical business processes** | ระบุกระบวนการธุรกิจสำคัญที่ต้องรักษาไว้ |
| **Roles and responsibilities** | ใครรับผิดชอบเรื่องใดเมื่อเกิดเหตุ |
| **Communication procedures** | แจ้งทีม ผู้บริหาร ลูกค้า หรือผู้เกี่ยวข้องอย่างไร |
| **Alternate work locations** | สถานที่ทำงานสำรอง |
| **Backup personnel** | บุคลากรทดแทนเมื่อผู้รับผิดชอบหลักไม่พร้อม |
| **Alternate suppliers** | ผู้จัดหาสินค้าหรือบริการสำรอง |
| **Essential technology and systems** | ระบบและเทคโนโลยีจำเป็น |
| **Recovery priorities** | ลำดับความสำคัญในการกลับมาดำเนินงาน |

**จำสอบ:** BC คือความสามารถหรือแนวคิด; **BCP คือเอกสารแผน** ที่บอกว่าจะทำอย่างไร

## 8. Disaster Recovery (DR)

### 8.1 ความหมาย

**Disaster Recovery (DR)** คือชุดนโยบาย เครื่องมือ และขั้นตอนเพื่อ **กู้คืน IT infrastructure, systems และ data** หลังภัยพิบัติหรือเหตุรบกวนสำคัญ

### 8.2 Purpose of DR

- **Minimize downtime:** ลดระยะเวลาที่ระบบหยุดทำงาน
- **Ensure rapid system recovery:** ทำให้ระบบกลับมาได้อย่างรวดเร็ว
- **Restore critical IT operations:** กู้คืนงาน IT สำคัญหลังเหตุการณ์
- **Protect data integrity and prevent loss:** ปกป้องความถูกต้องครบถ้วนของข้อมูลและลดการสูญหาย
- **Support business continuity:** สนับสนุนให้ธุรกิจดำเนินต่อด้วยระบบ IT ที่ฟื้นตัวได้

### 8.3 Key Concepts

1. **IT-focused recovery** — เน้นการฟื้นฟูด้าน IT
2. **Data and system restoration** — กู้ข้อมูลและระบบ
3. **A critical part of overall BC** — เป็นส่วนสำคัญของ Business Continuity

### 8.4 Importance of DR

| ประโยชน์ | คำอธิบาย |
|---|---|
| **Minimizes downtime** | ลดการหยุดชะงักด้วยการกู้คืนระบบเร็วขึ้น |
| **Protects data integrity** | ช่วยรักษาความครบถ้วนของข้อมูลและกู้กลับไปยังจุดเวลาที่เหมาะสม |
| **Supports compliance** | สนับสนุนการปฏิบัติตามข้อกำหนดที่เกี่ยวข้อง |
| **Reduces financial losses** | ลดผลกระทบทางรายได้จาก downtime |
| **Enhances customer trust** | เพิ่มความเชื่อมั่นผ่านบริการที่เชื่อถือได้ |

**ข้อควรระวัง:** สไลด์ยก GDPR และ HIPAA เป็นตัวอย่างเกี่ยวกับ compliance แต่ไม่ได้แจกแจงบทบัญญัติทางกฎหมายเฉพาะ จึงไม่ควรตีความว่าแผน DR รูปแบบเดียวเป็นข้อบังคับเหมือนกันสำหรับทุกองค์กร

## 9. Disaster Recovery Plan (DRP)

**DRP** คือแผนการกู้คืนด้าน IT หลังเหตุรบกวน โดยสไลด์ระบุองค์ประกอบสำคัญ 5 เรื่อง

### 9.1 Recovery Time Objective (RTO)

**RTO = Maximum acceptable downtime for an IT system**  
ระยะเวลาสูงสุดที่ยอมรับได้ว่าระบบจะหยุดทำงาน

**ตัวอย่าง:** RTO = 1 ชั่วโมง หมายถึงเป้าหมายต้องกู้ระบบกลับมาให้ได้ภายใน 1 ชั่วโมงหลังจุดเริ่มต้นการหยุดชะงักตามที่องค์กรกำหนด

**คำถามจำ:** “ระบบหยุดได้นานเท่าไร?” → **RTO**

### 9.2 Recovery Point Objective (RPO)

**RPO = Maximum acceptable data loss in time**  
ระยะเวลาของข้อมูลย้อนหลังสูงสุดที่องค์กรยอมรับว่าจะสูญเสียได้

**ตัวอย่าง:** RPO = 30 นาที หมายถึงต้องสามารถกู้ข้อมูลให้สูญเสียย้อนหลังได้ไม่เกิน 30 นาทีตามเป้าหมายที่กำหนด

**คำถามจำ:** “ยอมเสียข้อมูลย้อนหลังได้กี่นาที/ชั่วโมง?” → **RPO**

### 9.3 ตัวอย่างแยก RTO กับ RPO

สมมติระบบล่มเวลา **17:00**:

- กำหนด **RTO = 1 ชั่วโมง** → ตั้งเป้ากู้ระบบกลับมาไม่เกิน **18:00**
- กำหนด **RPO = 30 นาที** → ต้องกู้ข้อมูลกลับมาให้มีจุดกู้คืนที่ไม่เก่ากว่า **16:30**

> RTO เกี่ยวกับ **เวลาที่บริการหยุด**; RPO เกี่ยวกับ **ปริมาณข้อมูลที่สูญเสียซึ่งวัดเป็นเวลา** ทั้งสองค่าเป็นเป้าหมาย ไม่ใช่การรับประกันว่าทำได้จริงเสมอ

### 9.4 Backup and Recovery Strategies

วิธีสำรองและกู้คืนข้อมูล เช่น:

- **Cloud backups:** สำรองข้อมูลบนระบบ Cloud
- **Off-site storage:** เก็บข้อมูลสำรองแยกจากสถานที่หลัก

**เพิ่มเติมเพื่อความเข้าใจ:** การมี Backup อย่างเดียวไม่ได้พิสูจน์ว่ากู้คืนได้สำเร็จ จึงต้องมีการทดสอบ

### 9.5 Disaster Recovery Sites

สไลด์ยกตัวอย่างสถานที่สำรองสำหรับกู้คืน IT operations:

- **Hot site**
- **Warm site**
- **Cold site**

**เพิ่มเติมเพื่อความเข้าใจ (สไลด์ที่ส่งมาเอ่ยชื่อ แต่ไม่ได้อธิบายความแตกต่าง):**

| ประเภท | ความพร้อมโดยทั่วไป | ระยะเตรียมการโดยทั่วไป |
|---|---|---|
| **Hot Site** | ระบบและทรัพยากรเตรียมพร้อมมาก | เร็วที่สุด |
| **Warm Site** | มีทรัพยากรบางส่วน ต้องเตรียมเพิ่ม | ปานกลาง |
| **Cold Site** | มีพื้นที่/โครงสร้างพื้นฐานขั้นต้น ต้องติดตั้งเพิ่ม | ช้าที่สุด |

### 9.6 Testing and Drills

**Testing and Drills** คือการทดสอบแผน DR อย่างสม่ำเสมอเพื่อให้มั่นใจว่าแผนมีประสิทธิผล

**จำสอบ:** DRP ไม่ใช่เพียงเขียนแผน แต่ต้อง **ทดสอบ** ว่ากู้คืนได้ตามเป้าหมายจริง

## 10. Business Continuity vs Disaster Recovery

| Aspect | Business Continuity (BC) | Disaster Recovery (DR) |
|---|---|---|
| **Primary Focus** | ทำให้ธุรกิจดำเนินต่อระหว่างการหยุดชะงัก | กู้คืนระบบและโครงสร้างพื้นฐาน IT หลังการหยุดชะงัก |
| **Scope** | กว้าง: คน กระบวนการ อาคาร Supplier และเทคโนโลยี | เน้น IT: ระบบ แอปพลิเคชัน เครือข่าย และข้อมูล |
| **Examples** | สถานที่ทำงานสำรอง ขั้นตอนทำงานแบบ Manual บุคลากรทดแทน | กู้ Server, Database, Application, Network Service |
| **Key Document** | **BCP** | **DRP** |
| **Business Impact Analysis (BIA)** | ใช้ระบุธุรกิจสำคัญและลำดับความสำคัญ | ใช้ผล BIA กำหนดลำดับการกู้คืน IT |
| **Recovery Metrics** | อาจรวม RTO และความต้องการฟื้นฟูธุรกิจ | พึ่งพา RTO และ RPO มาก |
| **Relationship** | แนวคิดที่กว้างกว่า | เป็นส่วนประกอบหนึ่งของ BC |

**BIA — Business Impact Analysis:** ในสไลด์นี้ปรากฏในตารางเปรียบเทียบ โดยเน้นการระบุ **critical business functions and priorities** และนำผลไปกำหนด IT recovery priorities; ไม่มีสไลด์รายละเอียดขั้นตอนทำ BIA แยกต่างหากในเนื้อหาที่ส่งมา

**ตัวอย่างแยกแยะ:**

- เปิดให้พนักงานรับสายลูกค้าจากสาขาสำรอง → **BC**
- กู้ Database และ Network เพื่อให้ระบบกลับมาใช้งาน → **DR**

**จำสอบ:** **DR ⊂ BC** — DR เป็นส่วนหนึ่งของ BC ไม่ใช่สองคำที่มีขอบเขตเท่ากัน

## 11. Security Awareness

**Security Awareness** คือความเข้าใจเรื่องความเสี่ยง ภัยคุกคาม นโยบาย และพฤติกรรมที่เหมาะสมด้านความปลอดภัยไซเบอร์

### Purpose

ทำให้พนักงานเข้าใจ:

1. **Common cybersecurity threats:** ภัยคุกคามทั่วไป
2. **Their security responsibilities:** หน้าที่รับผิดชอบของตน
3. **Organizational security policies:** นโยบายองค์กร
4. **How to protect information and systems:** วิธีปกป้องข้อมูลและระบบ
5. **How to recognize and report suspicious activity:** วิธีสังเกตและรายงานสิ่งผิดปกติ

**จำสอบ:** Awareness เน้น **รู้จักความเสี่ยงและรู้ว่าควรปฏิบัติอย่างไร**

## 12. Security Culture

**Security Culture** คือสภาพแวดล้อมองค์กรที่มองว่าความปลอดภัยเป็น **shared responsibility** หรือความรับผิดชอบร่วมกัน

วัฒนธรรมความปลอดภัยที่ดีส่งเสริมให้พนักงาน:

- ให้ความสำคัญกับความปลอดภัย
- ปฏิบัติตามนโยบาย
- รายงานกิจกรรมที่น่าสงสัย
- ปกป้องข้อมูลอ่อนไหว
- ถามเมื่อไม่แน่ใจ
- มองความปลอดภัยเป็นส่วนหนึ่งของงานประจำวัน

**ตัวอย่างจากสไลด์:** พนักงานได้รับอีเมลน่าสงสัยแล้ว **รายงานทันทีแทนที่จะคลิกลิงก์** แสดงถึง Security Culture ที่ดี

**แยก Awareness กับ Culture:** Awareness = รู้และเข้าใจ; Culture = คนในองค์กรนำแนวทางปลอดภัยไปปฏิบัติร่วมกันเป็นปกติ

## 13. Security Leadership

**Security Leadership** มีบทบาทสำคัญในการสร้าง Security Culture ที่แข็งแรง

ผู้นำด้านความปลอดภัยควร:

1. **Demonstrate commitment to security:** แสดงความจริงจังต่อความปลอดภัย
2. **Provide appropriate resources:** จัดสรรทรัพยากรที่เหมาะสม
3. **Support security awareness programs:** สนับสนุนโครงการสร้างความตระหนัก
4. **Encourage employees to report incidents:** ส่งเสริมให้รายงานเหตุการณ์
5. **Lead by example:** ทำให้ดูเป็นตัวอย่าง
6. **Ensure security responsibilities are understood:** ทำให้ทุกคนเข้าใจหน้าที่ของตน

**ตัวอย่างจากสไลด์:** เมื่อผู้บริหารปฏิบัติตามนโยบายและใช้ MFA อย่างสม่ำเสมอ พนักงานมีแนวโน้มเห็นความสำคัญของพฤติกรรมดังกล่าวมากขึ้น

**จำสอบ:** Leadership = **Commitment + Resources + Example + Accountability**

## 14. Social Engineering

**Social Engineering** คือการใช้ **psychological manipulation or deception** (การชักจูงทางจิตวิทยาหรือหลอกลวง) เพื่อให้คนทำบางสิ่งหรือเปิดเผยข้อมูล

แรงจูงใจ/เทคนิคที่ผู้โจมตีอาจใช้ตามสไลด์:

| ปัจจัย | ตัวอย่างเพื่อความเข้าใจ |
|---|---|
| **Trust** — ความไว้ใจ | แอบอ้างเป็นเพื่อนร่วมงานที่คุ้นเคย |
| **Fear** — ความกลัว | ขู่ว่าบัญชีจะถูกปิด |
| **Urgency** — ความเร่งด่วน | บังคับให้ดำเนินการทันที |
| **Authority** — อำนาจ | แอบอ้างเป็น CEO หรือหัวหน้า |
| **Greed** — ความโลภ | ล่อด้วยรางวัลหรือผลประโยชน์ |
| **Helpfulness** — ความอยากช่วย | ขอให้พนักงานช่วยเปิดเผยข้อมูลเพื่อ “แก้ปัญหา” |

**ตัวอย่างจากสไลด์:** ผู้โจมตีแอบอ้างเป็น IT Administrator และขอรหัสผ่านจากพนักงาน

**จำสอบ:** จุดโจมตีหลักคือ **มนุษย์และการตัดสินใจ** ไม่จำเป็นต้องใช้ช่องโหว่ทางเทคนิคก่อนเสมอ

## 15. Common Social Engineering Techniques

| เทคนิค | ความหมายตามสไลด์ | คำใบ้ในข้อสอบ |
|---|---|---|
| **Phishing** | ข้อความหลอกให้คลิกลิงก์ เปิดไฟล์แนบ หรือเปิดเผยข้อมูล | Fraudulent message |
| **Spear Phishing** | Phishing แบบเจาะจงบุคคลหรือองค์กร | Targeted person/organization |
| **Whaling** | การโจมตีแบบเจาะจงบุคคลระดับสูง เช่น ผู้บริหาร | Executive / high-profile individual |
| **Vishing** | Social Engineering ผ่านเสียงหรือโทรศัพท์ | Voice / phone call |
| **Smishing** | Social Engineering ผ่าน SMS หรือข้อความโทรศัพท์ | SMS / text message |
| **Pretexting** | สร้างสถานการณ์หรือเรื่องราวปลอมเพื่อขอข้อมูลหรือชักจูงให้ทำบางอย่าง | Fabricated scenario |

### ตัวอย่างแยกแยะ

- ส่งอีเมลปลอมให้คนจำนวนมากกดลิงก์ → **Phishing**
- ส่งอีเมลปลอมที่เขียนเจาะจงพนักงานฝ่ายการเงิน → **Spear Phishing**
- เล็งโจมตี CEO → **Whaling**
- โทรศัพท์แอบอ้างเป็นเจ้าหน้าที่ IT → **Vishing**
- ส่ง SMS ปลอมเรื่องพัสดุ → **Smishing**
- สร้างเรื่องว่าเป็นเจ้าหน้าที่ตรวจสอบและขอข้อมูล → **Pretexting**

> **ข้อสังเกต:** Pretexting อาจถูกใช้ร่วมกับ Phishing, Vishing หรือ Smishing ได้ เพราะเป็นการสร้างเรื่องราวปลอม ส่วนช่องทางโจมตีเป็นอีกมิติหนึ่ง

## 16. Password Protection

องค์กรควรดำเนินการตามสไลด์:

1. **Establish authentication policies:** กำหนดนโยบายการยืนยันตัวตน
2. **Protect stored credentials:** ปกป้องข้อมูลรับรองตัวตนที่จัดเก็บ
3. **Implement appropriate access controls:** ใช้การควบคุมสิทธิ์เข้าถึงอย่างเหมาะสม
4. **Monitor suspicious authentication activity:** ตรวจสอบกิจกรรมล็อกอินที่น่าสงสัย
5. **Encourage phishing-resistant authentication where appropriate:** ส่งเสริมวิธียืนยันตัวตนที่ต้านทาน Phishing เมื่อเหมาะสม

สไลด์มีการจด **MFA** กำกับไว้เพื่อเน้นการเพิ่มความปลอดภัยในการยืนยันตัวตน

**เพิ่มเติมเพื่อความเข้าใจ:** MFA ไม่ได้แปลว่าต้านทาน Phishing ได้ทุกชนิดโดยอัตโนมัติ ควรแยกคำว่า **MFA** ออกจาก **phishing-resistant authentication** ตามบริบทของคำถาม

## 17. Measuring Cybersecurity Effectiveness

**Cybersecurity programs should be measured and monitored** — ต้องวัดและติดตามโครงการความปลอดภัย เพื่อดูว่าบรรลุวัตถุประสงค์หรือไม่

การวัดผลช่วยองค์กร:

1. ตรวจสอบว่า Security Controls มีประสิทธิผลหรือไม่
2. ระบุจุดอ่อนและช่องว่าง
3. ติดตามผลงานด้านความปลอดภัยตามเวลา
4. สนับสนุนการตัดสินใจตามความเสี่ยง
5. แสดงหลักฐานการปฏิบัติตามข้อกำหนด
6. สื่อสารสถานะความปลอดภัยต่อผู้บริหาร
7. ระบุจุดที่ต้องปรับปรุง

**จำสอบ:** การมี Control ไม่เท่ากับการพิสูจน์ว่า Control ทำงานดี ต้องมี **measurement and monitoring**

## 18. Security Metrics

**Security Metric** คือค่าที่วัดได้ (**measurable value**) ใช้ประเมิน performance หรือ effectiveness ของกิจกรรม กระบวนการ หรือ Control ด้าน Cybersecurity

### 18.1 ตัวอย่างจากสไลด์

- **Number of security incidents:** จำนวนเหตุการณ์ความปลอดภัย
- **Number of vulnerabilities:** จำนวนช่องโหว่
- **Percentage of systems patched:** ร้อยละของระบบที่ได้รับ Patch
- **Mean Time to Detect (MTTD):** เวลาเฉลี่ยในการตรวจพบเหตุการณ์
- **Mean Time to Respond (MTTR):** เวลาเฉลี่ยในการตอบสนองเหตุการณ์

### 18.2 ตัวอย่าง Metrics เพิ่มเติมที่ปรากฏในสไลด์

| ด้าน | Metric |
|---|---|
| **Vulnerability Management** | เปอร์เซ็นต์ Critical Vulnerabilities ที่แก้ไขภายในเวลาที่กำหนด |
| **Incident Response** | MTTR — ระยะเวลาเฉลี่ยที่ใช้ตอบสนองต่อ Security Incidents |
| **Security Awareness** | เปอร์เซ็นต์พนักงานที่ผ่าน Security Awareness Training |
| **Patch Management** | เปอร์เซ็นต์ระบบที่ผ่านข้อกำหนดด้าน Patching |

### 18.3 ลักษณะ Metrics ที่ดี

- **Relevant:** เกี่ยวข้องกับสิ่งที่ต้องการวัด
- **Measurable:** วัดเป็นค่าได้
- **Consistent:** วัดด้วยเกณฑ์สอดคล้องกัน
- **Meaningful to the intended audience:** มีความหมายสำหรับผู้รับข้อมูล

**ตัวอย่างเพื่อความเข้าใจ:** จำนวน Incident เพียงอย่างเดียวอาจตีความได้หลายแบบ ต้องดูบริบทและแนวโน้มร่วมด้วย

**จำสอบ:** **Metric → Measure**

## 19. Key Risk Indicators (KRIs)

**Key Risk Indicator (KRI)** คือ Metric ที่ให้ **early indication of increasing or decreasing risk** หรือสัญญาณล่วงหน้าว่าความเสี่ยงกำลังเพิ่มขึ้นหรือลดลง

เป้าหมายคือช่วยระบุปัญหาก่อนกลายเป็นเหตุการณ์หรือความสูญเสียสำคัญ

### ตัวอย่าง KRIs ตามสไลด์

1. จำนวน **critical unpatched vulnerabilities**
2. จำนวน **privileged accounts without MFA**
3. จำนวน **failed security controls**
4. **Increase in phishing reports**
5. จำนวน **unsupported systems**
6. เปอร์เซ็นต์ **critical systems without tested backups**

**ข้อควรระวัง:** การเพิ่มขึ้นของ Phishing Reports อาจเกิดจากมีการโจมตีเพิ่ม หรือพนักงานรายงานเก่งขึ้น จึงต้องดูบริบทก่อนสรุปว่าความเสี่ยงเพิ่มขึ้นแน่นอน

**จำสอบ:** **KRI → Risk → Early Warning**

## 20. Key Performance Indicators (KPIs)

**Key Performance Indicator (KPI)** วัด **progress toward a specific performance objective** หรือความก้าวหน้าไปสู่เป้าหมายการดำเนินงานที่กำหนด

**ตัวอย่างจากสไลด์:** เปอร์เซ็นต์ของ Critical Vulnerabilities ที่ได้รับ Patch ภายใน **15 วัน**

### KPI vs KRI

| KPI | KRI |
|---|---|
| วัดผลงานเทียบเป้าหมาย | เฝ้าระวังระดับหรือแนวโน้มความเสี่ยง |
| “เราทำได้ตามเป้าหรือไม่?” | “มีสัญญาณว่าความเสี่ยงเพิ่มขึ้นหรือไม่?” |
| % ช่องโหว่ที่ Patch ภายใน 15 วัน | จำนวน Critical Vulnerabilities ที่ยังไม่ Patch |

**จำสอบ:** **KPI → Performance**, **KRI → Risk**

## 21. Security Dashboards

**Security Dashboard** คือการแสดงข้อมูลและ Metrics ด้าน Cybersecurity ในรูปแบบ **Visual Representation**

สิ่งที่ Dashboard อาจแสดง:

- Current security status
- Security incidents
- Vulnerability levels
- Patch compliance
- Risk trends

รูปแบบการแสดงผลตามสไลด์:

- Charts
- Graphs
- Tables
- Trend indicators

**จำสอบ:** **Dashboard → Visualize**; ช่วยมองภาพรวมและแนวโน้มได้รวดเร็ว

## 22. Security Scorecards

**Security Scorecard** สรุปผลงาน **เทียบกับวัตถุประสงค์หรือเป้าหมายที่กำหนดล่วงหน้า**

ประโยชน์:

- เปรียบเทียบ Actual กับ Target
- ติดตามความคืบหน้า
- ระบุประเด็นที่น่ากังวล
- สื่อสารผลงานให้ผู้บริหาร
- สนับสนุน Accountability

### ตัวอย่างตารางจากสไลด์

| Area | Target | Actual | Status |
|---|---:|---:|---|
| Patch Compliance | 95% | 91% | Needs Improvement |
| MFA Adoption | 100% | 97% | Needs Improvement |
| Training Completion | 95% | 98% | On Target |
| Critical Vulnerabilities | < 10 | 12 | Needs Attention |

**วิธีอ่าน:**

- Patch 91% ต่ำกว่าเป้า 95% → ต้องปรับปรุง
- MFA 97% ต่ำกว่าเป้า 100% → ต้องปรับปรุง
- Training 98% สูงกว่าเป้า 95% → ผ่านเป้า
- Critical Vulnerabilities 12 แต่เป้าต้องน้อยกว่า 10 → ต้องแก้ไข

**จำสอบ:** **Scorecard → Compare against targets**

## 23. Cybersecurity Reports

**Cybersecurity Report** คือรายงานที่ให้ข้อมูลรายละเอียดเกี่ยวกับกิจกรรม ความเสี่ยง ผลงาน หรือ Compliance ด้าน Cybersecurity

หัวข้อที่รายงานอาจประกอบด้วย:

1. Security incidents
2. Vulnerability status
3. Risk trends
4. Compliance findings
5. Control effectiveness
6. Security metrics
7. Recommended actions

**จำสอบ:** **Report → Communicate** ข้อมูลและข้อเสนอแนะเพื่อการตัดสินใจ

### Memory Aid จากสไลด์

| คำ | จำว่า |
|---|---|
| **Metric** | Measure |
| **KPI** | Performance |
| **KRI** | Risk |
| **Dashboard** | Visualize |
| **Scorecard** | Compare against targets |
| **Report** | Communicate |

## 24. ตารางเปรียบเทียบและจุดจำสำหรับสอบ

### 24.1 รวมคำที่สับสนง่าย

| คู่เปรียบเทียบ | ความแตกต่างหลัก |
|---|---|
| **GRC vs GRC Tool** | GRC เป็นแนวทางบริหาร; GRC Tool เป็นซอฟต์แวร์สนับสนุน |
| **Risk Register vs Risk Assessment** | Register คือบันทึกรายการความเสี่ยง; Assessment คือกิจกรรมประเมินความเสี่ยง |
| **BC vs BCP** | BC คือความสามารถดำเนินธุรกิจต่อ; BCP คือเอกสารแผน |
| **DR vs DRP** | DR คือกระบวนการ/ความสามารถกู้คืน IT; DRP คือแผนกู้คืน |
| **BC vs DR** | BC กว้างทั้งธุรกิจ; DR เน้นกู้คืน IT |
| **RTO vs RPO** | RTO = เวลาระบบหยุดที่ยอมรับได้; RPO = ช่วงเวลาข้อมูลสูญหายที่ยอมรับได้ |
| **Security Awareness vs Security Culture** | Awareness = รู้และเข้าใจ; Culture = พฤติกรรมร่วมขององค์กร |
| **Phishing vs Spear Phishing** | ทั่วไป vs เจาะจงเป้าหมาย |
| **Spear Phishing vs Whaling** | เจาะจงบุคคล/องค์กร vs เจาะจงบุคคลระดับสูง |
| **Vishing vs Smishing** | โทรศัพท์/เสียง vs SMS/ข้อความ |
| **KPI vs KRI** | Performance vs Risk |
| **Dashboard vs Scorecard** | ภาพรวมข้อมูล vs เทียบเป้าหมาย |
| **Scorecard vs Report** | ตารางสถานะเทียบเป้า vs รายละเอียดและข้อเสนอแนะ |

### 24.2 Exam Traps — ข้อสังเกตเสริมเพื่อเตรียมสอบ

> ส่วนนี้เป็น **การสังเคราะห์จากเนื้อหาที่เรียน** ไม่ใช่ข้อความอ้างตรงจากสไลด์หรือข้อสอบจริง

1. ถ้าถามว่า **keep critical business operations running** → เลือก **BC/BCP** ตามว่าถามความสามารถหรือแผน
2. ถ้าถามว่า **restore servers, databases, networks** → เลือก **DR/DRP**
3. ถ้าถามว่า **maximum acceptable downtime** → **RTO**
4. ถ้าถามว่า **maximum acceptable data loss in time** → **RPO**
5. ถ้าถามว่า **documented list of identified risks** → **Risk Register**
6. ถ้าถามว่า **who is accountable for a risk** → **Risk Owner**
7. ถ้าถามว่า **establish and continually improve ISMS** → **ISO/IEC 27001**
8. ถ้าถามว่า **governance and management of enterprise IT** → **COBIT**
9. ถ้าถามว่า **cybersecurity risk management framework** → **NIST CSF**
10. ถ้าถามว่า **psychological manipulation/deception** → **Social Engineering**
11. ถ้าถามว่า **targeting an executive** → **Whaling**
12. ถ้าถามว่า **fabricated scenario** → **Pretexting**
13. ถ้าถามว่า **early warning of risk** → **KRI**
14. ถ้าถามว่า **progress toward performance target** → **KPI**
15. ถ้าถามว่า **actual vs target** → **Scorecard**
16. ถ้าถามว่า **visual status and trends** → **Dashboard**
17. ถ้าถามว่า **detailed findings and recommended actions** → **Report**

### 24.3 ภาพรวมความเชื่อมโยง

```text
Security Governance
    |
    +-- GRC
    |     +-- Governance / Risk / Compliance
    |     +-- Frameworks: NIST CSF / ISO 27001 / COBIT
    |     +-- GRC Tools
    |     +-- Risk Register
    |
    +-- Resilience / Continuity
    |     +-- Business Continuity (BC) --> BCP
    |     +-- Disaster Recovery (DR) --> DRP
    |                  +-- RTO / RPO
    |                  +-- Backup / Recovery Sites / Testing
    |
    +-- People and Culture
    |     +-- Security Awareness
    |     +-- Security Culture / Leadership
    |     +-- Social Engineering / Password Protection
    |
    +-- Measurement and Reporting
          +-- Metrics --> KPI / KRI
          +-- Dashboard / Scorecard / Report
```

## 25. ตัวอย่างโจทย์ทบทวน

> โจทย์ต่อไปนี้เป็น **แบบฝึกที่จัดทำขึ้นจากบทเรียน** ไม่ใช่ข้อสอบจริงของ ISC2

**Q1.** บริษัทต้องการให้พนักงานยังบริการลูกค้าได้แม้อาคารหลักใช้งานไม่ได้ ควรเน้นแนวคิดใด?  
**ตอบ:** BC — เพราะมุ่งรักษาการดำเนินธุรกิจ

**Q2.** ระบบฐานข้อมูลล่มและต้องกู้คืนภายใน 2 ชั่วโมง ค่า 2 ชั่วโมงนี้คืออะไร?  
**ตอบ:** RTO — เวลาหยุดระบบที่ยอมรับได้

**Q3.** องค์กรยอมสูญเสียข้อมูลย้อนหลังได้ไม่เกิน 15 นาที ค่านี้คืออะไร?  
**ตอบ:** RPO — ช่วงเวลาข้อมูลสูญหายที่ยอมรับได้

**Q4.** เอกสารที่บันทึก Risk, Likelihood, Impact, Owner และ Treatment คืออะไร?  
**ตอบ:** Risk Register

**Q5.** ต้องการสร้างและปรับปรุง ISMS อย่างต่อเนื่อง ควรนึกถึงมาตรฐานใด?  
**ตอบ:** ISO/IEC 27001

**Q6.** ผู้โจมตีโทรมาแอบอ้างเป็นฝ่าย IT และขอ Password เป็นการโจมตีประเภทใด?  
**ตอบ:** Vishing (และใช้ Social Engineering)

**Q7.** อีเมลหลอกถูกเขียนเฉพาะเจาะจงถึงผู้บริหารระดับสูง เป็นเทคนิคใด?  
**ตอบ:** Whaling

**Q8.** ต้องการทราบจำนวนบัญชีสิทธิ์สูงที่ยังไม่มี MFA เพื่อเป็นสัญญาณความเสี่ยง ควรใช้ KPI หรือ KRI?  
**ตอบ:** KRI

**Q9.** ต้องการติดตามว่า Patch Critical Vulnerabilities ภายใน 15 วันได้กี่เปอร์เซ็นต์ เทียบกับเป้าหมาย ควรใช้ KPI หรือ KRI?  
**ตอบ:** KPI

**Q10.** ต้องการแสดง Actual 91% เทียบ Target 95% พร้อมสถานะ Needs Improvement เครื่องมือรายงานชนิดใดตรงที่สุด?  
**ตอบ:** Scorecard

**Q11.** ผู้บริหารต้องการกราฟแนวโน้ม Incident, Patch Compliance และ Risk Trends บนหน้าจอเดียว ควรใช้สิ่งใด?  
**ตอบ:** Security Dashboard

**Q12.** ต้องการรายงานผลตรวจสอบ ช่องโหว่ แนวโน้มความเสี่ยง และ Recommended Actions ควรใช้สิ่งใด?  
**ตอบ:** Cybersecurity Report

## 26. ขอบเขตและสถานะการเรียน

### หัวข้อที่ครอบคลุมจากสไลด์ในบทสนทนา

- [x] Purpose and Importance of GRC
- [x] GRC Frameworks: NIST CSF, ISO/IEC 27001, COBIT
- [x] GRC Tools
- [x] Risk Register และตัวอย่าง Ransomware
- [x] Business Continuity และ BCP
- [x] Disaster Recovery และความสำคัญ
- [x] DRP: RTO, RPO, Backups, Recovery Sites, Testing
- [x] BC vs DR และ BIA ในตารางเปรียบเทียบ
- [x] Security Awareness
- [x] Security Culture
- [x] Security Leadership
- [x] Social Engineering
- [x] Phishing, Spear Phishing, Whaling, Vishing, Smishing, Pretexting
- [x] Password Protection
- [x] Measuring Cybersecurity Effectiveness
- [x] Security Metrics และตัวอย่าง
- [x] KRIs และ KPIs
- [x] Security Dashboards
- [x] Security Scorecards และตารางตัวอย่าง
- [x] Cybersecurity Reports และ Memory Aid

### สิ่งที่ไม่ควรอ้างว่าเรียนละเอียดแล้วจากสไลด์ชุดนี้

- ขั้นตอน BIA แบบละเอียด (มีเพียงบทบาทในตาราง BC vs DR)
- รายละเอียดข้อกำหนดเฉพาะของ GDPR, HIPAA, PCI DSS, SOX และ CMMC (มีชื่อในภาพประกอบ)
- รายละเอียดเชิงลึกของ Hot/Warm/Cold Sites (มีชื่อในสไลด์ DRP; ตารางอธิบายเป็นส่วนเพิ่มเติม)
- ขั้นตอนและสูตรคำนวณคะแนนความเสี่ยงเฉพาะองค์กร
- เนื้อหาอื่น ๆ ที่อาจอยู่ใน Exam Outline ฉบับเต็มแต่ยังไม่มีสไลด์ส่งมา

**สรุปสุดท้าย:** Domain 2 เชื่อมโยงการกำกับดูแล (**GRC**), ความพร้อมดำเนินธุรกิจและกู้คืนระบบ (**BC/DR**), พฤติกรรมคน (**Awareness/Culture**) และการวัดผล (**Metrics/KPI/KRI/Reporting**) เข้าด้วยกัน เป้าหมายไม่ใช่แค่มีมาตรการความปลอดภัย แต่ต้องกำกับดูแล ดำเนินการ และพิสูจน์ผลได้

---

**แหล่งเนื้อหา:** สไลด์ Domain 2 ที่ผู้เรียนส่งในบทสนทนาของโปรเจกต์ และเอกสารแนบ *Inside the Updated ISC2 Certified in Cybersecurity Exam* (ISC2, 6 August 2026), หน้า 2–3 สำหรับโครงสร้างและน้ำหนัก Domain 2
