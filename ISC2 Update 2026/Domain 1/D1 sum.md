ได้ครับ ผมจะสรุป **Domain 1 ทั้งหมดที่เราเรียนจากสไลด์ชุดนี้** ให้เป็นฉบับอ่านทวนสอบ โดยเน้นทั้ง **ความเข้าใจ + จุดแยกคำที่คล้ายกัน + Keyword ที่ควรจับในข้อสอบ**

# Domain 1 — Security Principles, Governance, Risk, Controls & Ethics

ภาพใหญ่ของ Domain นี้คือการตอบคำถามว่า

> **เรากำลังปกป้องอะไร → ปกป้องจากอะไร → ประเมินความเสี่ยงอย่างไร → องค์กรกำหนดกติกาอย่างไร → ใช้ Control แบบไหน → ผู้เชี่ยวชาญควรปฏิบัติตัวอย่างไร**

---

# 1. Security Principles — CIA Triad

พื้นฐานที่สุดของ Information Security คือ **CIA Triad**

## Confidentiality — ความลับ

เป้าหมายคือ

> ข้อมูลต้องถูกเข้าถึงโดย **ผู้ที่ได้รับอนุญาตเท่านั้น**

ต้องป้องกัน **Unauthorized Disclosure**

ตัวอย่าง Control:

- Encryption
- Access Control
- Authentication
- Permissions
- Data Classification

ตัวอย่างเหตุการณ์ที่กระทบ Confidentiality:

> Hacker ขโมย Customer Database

ถึงแม้ข้อมูลจะไม่ถูกแก้ไข แต่มีคนที่ไม่ควรเห็นข้อมูลได้เห็น → Confidentiality ถูกละเมิด

จำ:

> **Confidentiality = Who can SEE it?**

---

# 2. Integrity — ความถูกต้องและความสมบูรณ์

เป้าหมายคือ

> ข้อมูลต้องไม่ถูกเปลี่ยนแปลงโดยไม่ได้รับอนุญาต และสามารถตรวจสอบความถูกต้องได้

ป้องกัน:

> Unauthorized Modification

ตัวอย่าง:

- Hashing
- Digital Signature
- Checksums
- File Integrity Monitoring
- Access Control

เช่น Hacker เข้า Database แล้วเปลี่ยนยอดเงิน

ข้อมูลยังอยู่ ระบบยัง Online แต่ข้อมูลถูกแก้

→ **Integrity**

จำ:

> **Integrity = Can I TRUST the data?**

---

# 3. Availability — ความพร้อมใช้งาน

จากสไลด์ที่เราเรียน:

> Systems, data and resources ต้องสามารถเข้าถึงได้โดย Authorized Users เมื่อจำเป็น

เป้าหมายสำคัญคือ **ลด Downtime**

ภัยที่กระทบ Availability เช่น:

- Hardware failure
- Power outage
- DDoS
- Ransomware
- Network outage
- Maintenance failure

Control ที่ช่วย Availability:

- Backup
- Redundancy
- Failover
- Load Balancing
- UPS
- Multiple ISP
- Disaster Recovery Site

ตัวอย่าง:

### Load Balancer

มี Web Server หลายเครื่อง

```text
             ┌─ Web01
User → LB ───┼─ Web02
             └─ Web03
```

เครื่องหนึ่งเสีย → เครื่องอื่นยังให้บริการ

→ Availability

### UPS

ไฟดับแต่ Server ยังทำงานได้ชั่วคราว

→ Availability

### Redundant ISP

```text
Company
 ├── ISP A
 └── ISP B
```

ISP A ล่ม → ใช้ ISP B

→ Availability

จำ:

> **Availability = Can I ACCESS it when needed?**

ดังนั้น CIA จำสั้น ๆ:

> **C = Secret**  
> **I = Correct**  
> **A = Available**

---

# 4. AAA

AAA =

> **Authentication → Authorization → Accounting**

เป็นอีกชุดที่ต้องแยกให้แม่น

## Authentication — คุณคือใคร?

Authentication คือ

> การตรวจสอบ Identity

ตัวอย่าง:

- Username + Password
- PIN
- Fingerprint
- Smart Card
- Security Token

คำถาม:

> **Who are you?**

---

# 5. Authorization — คุณทำอะไรได้?

หลังจาก Authentication สำเร็จ ระบบจึงกำหนด Permission

ตัวอย่าง:

คุณ Login สำเร็จแล้ว

แต่

```text
User A → Read File     ✅
User A → Delete File   ❌
```

นี่คือ Authorization

คำถาม:

> **What are you allowed to do?**

สำคัญ:

> **Authorization ปกติเกิดหลัง Authentication**

---

# 6. Accounting — คุณทำอะไรไปบ้าง?

Accounting/Auditing คือ

> Tracking + Recording Activities

เช่น:

- Login logs
- Logout logs
- Command execution logs
- Resource access logs
- System usage

คำถาม:

> **What did you do?**

ดังนั้นจำ AAA:

> **Authentication = Who are you?**  
> **Authorization = What can you do?**  
> **Accounting = What did you do?**

---

# 7. Multi-Factor Authentication — MFA

MFA ต้องใช้

> **อย่างน้อย 2 Independent Authentication Factors**

ไม่ใช่แค่ใช้ Authentication สองครั้ง

## Something You Know

สิ่งที่คุณ **รู้**

เช่น:

- Password
- PIN
- Security Question

ข้อเสียคือสามารถถูก

- Guess
- Steal
- Phish

ได้

---

## Something You Have

สิ่งที่คุณ **มี**

เช่น:

- Smartphone
- Smart Card
- Hardware Token
- Security Key

---

## Something You Are

สิ่งที่คุณ **เป็น**

Biometric เช่น:

- Fingerprint
- Face
- Iris

---

## Somewhere You Are

สถานที่ที่คุณอยู่ เช่น:

- GPS
- IP Location
- Network Location
- Wi-Fi Location

เช่นบริษัทอนุญาต Login จากประเทศไทย แต่พบ Login จากประเทศผิดปกติ

→ Location Factor / Context สามารถนำมาใช้ตัดสิน Access ได้

### ข้อสอบต้องระวัง

```text
Password + PIN
```

ทั้งสองคือ **Something You Know**

ดังนั้นไม่ได้กลายเป็น MFA เพียงเพราะมี 2 อย่าง

แต่

```text
Password + Fingerprint
```

คือ

```text
Know + Are
```

→ MFA

หลักสำคัญ:

> **MFA = Different Factors ไม่ใช่ Different Credentials**

---

# 8. Privacy

Privacy เกี่ยวกับ

> การปกป้อง Personal Information และการปฏิบัติตามกฎหมาย/นโยบายเกี่ยวกับการ Collect, Store และ Use ข้อมูล

เป้าหมายคือ:

- Protect personal information
- Respect individual rights
- Compliance
- Reduce privacy risks

---

# 9. Data Subject

**Data Subject** คือ

> บุคคลที่ข้อมูลส่วนบุคคลนั้นกล่าวถึง

เช่นร้าน Online เก็บข้อมูลของ Somchai

Somchai = **Data Subject**

---

# 10. Controller vs Processor

สองคำนี้ต้องแยก

## Controller

เป็นฝ่ายที่

> **กำหนด Purpose และ Means ของการ Processing**

พูดง่าย ๆ:

> คนที่ตัดสินว่า **เก็บข้อมูลทำไม และจะจัดการอย่างไร**

เช่น Retail Company เก็บข้อมูลลูกค้าเพื่อขายสินค้า

Retail Company = Controller

---

## Processor

เป็นฝ่ายที่

> Process Data **on behalf of Controller**

เช่น Retail Company ใช้ Cloud Provider เก็บข้อมูล

```text
Customer
   ↓
Retail Company
Controller
   ↓
Cloud Provider
Processor
```

จำ:

> **Controller = decides**  
> **Processor = processes for controller**

---

# 11. Data Ownership

Ownership ช่วยกำหนดว่า

- ใครมี Authority ต่อข้อมูล
- ใคร Responsible
- ใครต้องดูแล Security
- ใครต้องดูแล Compliance

แต่การที่องค์กรถือ/ควบคุมข้อมูลไม่ได้หมายความว่าจะทำอะไรก็ได้กับ Personal Data

ยังต้องเคารพสิทธิของ **Data Subject**

---

# 12. Data Inventory

Data Inventory คือ

> รายการข้อมูลทั้งหมดที่องค์กรมี รวมถึง Type และ Location

ตัวอย่าง:

- Customer records
- Email logs
- Billing information
- Employee records

คำถามที่ Data Inventory ช่วยตอบคือ:

> **เรามีข้อมูลอะไร และมันอยู่ที่ไหน?**

ถ้าไม่รู้ว่ามีข้อมูลอะไรอยู่ตรงไหน ก็ปกป้องได้ยาก

---

# 13. Data Retention

Retention คือ

> กำหนดว่า Data ต้องเก็บไว้นานแค่ไหน และเมื่อไรควรลบ

เช่น

> Employee tax records → เก็บตามระยะเวลาที่กฎหมายกำหนด

อย่าสับสน:

**Inventory**

> What data do we have?

**Retention**

> How long do we keep it?

---

# 14. Right to Be Forgotten

แนวคิดคือบุคคลสามารถร้องขอให้ลบ Personal Data ได้ในบางเงื่อนไข เช่นข้อมูลนั้นไม่จำเป็นต้องเก็บอีกแล้ว

แต่ต้องระวัง:

> **ไม่ได้หมายความว่าขอลบแล้วองค์กรต้องลบทุกกรณี**

ถ้ามีกฎหมายหรือเหตุผลทางกฎหมายกำหนดให้ต้องเก็บ ก็อาจยังต้อง Retain ข้อมูลนั้น

---

# 15. Risk Management

Risk Management คือ

> กระบวนการอย่างเป็นระบบในการ Identify, Assess, Respond และ Monitor Risk

และที่สำคัญ:

> **เป็น Continuous Process ไม่ใช่ One-time Activity**

Lifecycle ที่เรียนคือ:

```text
1 Identify
     ↓
2 Assess / Analyze
     ↓
3 Treat / Respond
     ↓
4 Monitor / Review
     ↓
5 Communicate / Report
     ↺
```

---

# 16. Step 1 — Risk Identification

เป้าหมายคือ

> Discover + Document Potential Risks

ต้องระบุ:

### Asset

> What needs protection?

เช่น:

- Database
- Server
- Customer information

### Threat

> What could cause harm?

เช่น:

- Hacker
- Malware
- Ransomware
- Flood

### Vulnerability

> Weakness that could be exploited

เช่น:

- Unpatched Server
- Weak Password
- Misconfiguration

### Potential Impact

> ถ้า Risk เกิดแล้วจะเกิดอะไรขึ้น?

เช่น:

- Data breach
- Financial loss
- Downtime
- Reputation damage

จำตัวอย่าง:

```text
Customer Database → Asset

Unpatched Server → Vulnerability

Ransomware → Threat

Data Breach → Potential Impact
```

---

# 17. Risk Assessment & Analysis

ส่วนนี้มีสูตรที่ต้องจำ

## Asset Value — AV

มูลค่าของ Asset

เช่น:

> Server = $10,000

AV = $10,000

---

# 18. Exposure Factor — EF

EF คือ

> Percentage ของ Asset Value ที่คาดว่าจะสูญเสียจาก Risk Event หนึ่งครั้ง

เช่น Server $10,000

เหตุการณ์หนึ่งทำลาย 50%

```text
EF = 50%
```

---

# 19. Single Loss Expectancy — SLE

คือ

> ความเสียหายทางการเงินที่คาดว่าจะเกิดจาก **เหตุการณ์หนึ่งครั้ง**

สูตร:

> **SLE = AV × EF**

ตัวอย่าง:

```text
AV = $10,000
EF = 50%

SLE = 10,000 × 0.50
    = $5,000
```

---

# 20. Annualized Rate of Occurrence — ARO

ARO คือ

> จำนวนครั้งโดยประมาณที่ Risk จะเกิดใน 1 ปี

เช่น:

ปีละ 2 ครั้ง

```text
ARO = 2
```

ทุก 5 ปีเกิด 1 ครั้ง

```text
ARO = 1 / 5
    = 0.2
```

ทุก 2 ปีเกิดครั้งหนึ่ง

```text
ARO = 0.5
```

---

# 21. Annualized Loss Expectancy — ALE

คือ

> ความเสียหายที่คาดว่าจะเกิด **ต่อปี**

สูตร:

> **ALE = SLE × ARO**

ตัวอย่าง:

```text
SLE = $5,000
ARO = 2

ALE = $10,000/year
```

จำ Flow:

```text
AV × EF = SLE
SLE × ARO = ALE
```

หรือ:

> **Asset → Single Loss → Annual Loss**

---

# 22. Risk Treatment / Risk Response

เมื่อรู้ Risk แล้ว ต้องตัดสินใจว่าจะจัดการอย่างไร

หลัก ๆ ที่เราเรียนมี 4 แบบ:

> **Avoid / Mitigate / Transfer / Accept**

## Avoid

> กำจัด Risk โดยเลิก Activity ที่สร้าง Risk

เช่น Vendor รายหนึ่งมีประวัติ Security แย่มาก

→ ไม่ใช้ Vendor นั้น

จำ:

> **Avoid = Stop doing it**

---

## Mitigate

> ลด Likelihood หรือ Impact ให้อยู่ในระดับที่ยอมรับได้

โดย Implement Controls

เช่น:

- Firewall
- Anti-malware
- MFA
- Patch
- Encryption

จำ:

> **Mitigate = Reduce**

---

## Transfer

> โอน/แบ่งภาระด้าน Risk ไปยัง Third Party

เช่น:

- Insurance
- Outsourcing
- Contract

ตัวอย่าง:

> ซื้อ Cyber Insurance

จำ:

> **Transfer = Shift**

แต่ Risk ไม่ได้หายไปจากโลก เพียงมีการถ่ายโอนผลกระทบ/ความรับผิดชอบบางส่วนตามข้อตกลง

---

## Accept

> รับรู้ Risk และเลือกไม่ Implement Control เพิ่ม

เหมาะเมื่อ:

- Risk ต่ำ
- Impact ต่ำ
- Probability ต่ำ
- Cost of Treatment สูงเกิน Benefit
- Risk อยู่ภายใน Risk Tolerance

จำ:

> **Accept = Know it + Live with it**

---

# 23. Monitor and Review

Risk Management **ไม่จบหลัง Implement Control**

ต้องตรวจต่อว่า:

- Risk เดิมเปลี่ยนไหม
- Control ยัง Effective ไหม
- มี Threat ใหม่ไหม
- มี Vulnerability ใหม่ไหม
- Business/System เปลี่ยนไหม
- Accepted Risk ยัง Accept ได้ไหม

เหตุการณ์ที่อาจ Trigger Reassessment:

- New Technology
- Major Software Upgrade
- New Regulation
- New Threat
- New Vulnerability

จำ:

> **Risk Management = Continuous**

---

# 24. Risk Communication & Reporting

คือการ

> Document + Communicate Risk Information ให้ Stakeholders

Risk Report อาจประกอบด้วย:

- Identified Risks
- Risk Status
- Mitigation Efforts
- Potential Impact

จุดประสงค์คือให้ Stakeholders สามารถ:

- Make informed decisions
- Prioritize resources
- Understand current risk

---

# 25. Governance

Governance คือระบบที่ทำให้องค์กรถูก

> **Directed + Controlled + Held Accountable**

ใน Cybersecurity หมายถึงทำให้ Security Activities สนับสนุน:

- Business Objectives
- Laws / Regulations
- Organizational Policies
- Risk Management
- Protection of Assets

คำสำคัญ:

> **Governance = Direction + Oversight + Accountability**

Governance ไม่ใช่คนลงไป Config Firewall ทุกตัว แต่กำหนดว่าองค์กรควรไปทางไหน ใครรับผิดชอบ และต้องกำกับดูแลอย่างไร

---

# 26. Laws and Regulations

Law/Regulation คือ

> **Legally Enforceable Requirements**

กฎหมายหรือข้อบังคับอาจขึ้นอยู่กับ:

- Industry
- Geographic Location
- Data Type
- Services
- Government Requirements

ตัวอย่างที่เรียน:

### GDPR

เกี่ยวข้องกับ Personal Data / Privacy ภายใน Scope ที่กฎหมายกำหนด

### HIPAA

เกี่ยวข้องกับการคุ้มครอง Health Information บางประเภทในสหรัฐฯ

### PCI DSS

Security Requirements สำหรับองค์กรที่เกี่ยวข้องกับ Payment Card Data

ข้อสำคัญ:

> ไม่ใช่ทุกองค์กรต้องปฏิบัติตามทุก Regulation/Requirement

ต้องดู **Applicability**

---

# 27. Framework

Framework คือ

> Structured Approach สำหรับจัดการ Cybersecurity/Risk

ช่วยองค์กร:

- Build cybersecurity program
- Identify gaps
- Manage risks
- Improve maturity
- Establish consistent practices

ตัวอย่าง:

- NIST Cybersecurity Framework
- ISO/IEC 27001
- CIS Controls

จำ:

> **Framework = Structure**

---

# 28. Guidelines

Guideline คือ

> Recommended Practice / Advice

โดยทั่วไป:

- Advisory
- Flexible
- Adaptable
- ใช้ช่วยตัดสินใจ

เช่น:

> Password Management Recommendations

จำ:

> **Guideline = SHOULD / Recommendation**

ไม่ใช่ Mandatory โดยตัวมันเองเหมือน Standard ภายในที่องค์กรกำหนดให้ต้องปฏิบัติ

---

# 29. Policy

Policy คือ

> High-level statement of management expectations, requirements and direction

กำหนด:

- Organization requirements
- Security objectives
- Responsibilities
- Acceptable / Unacceptable behavior
- Management expectations

ตัวอย่าง:

- Information Security Policy
- Acceptable Use Policy
- Password Policy

จำ:

> **Policy = WHAT / High-level direction**

---

# 30. Standard

Standard คือ

> Specific Mandatory Requirement

มีรายละเอียดกว่า Policy เช่น:

- Technical specifications
- Minimum requirements
- Consistent implementation criteria

ตัวอย่าง:

Policy:

> Password ต้อง Strong

Standard:

> Password ต้องอย่างน้อย X characters และเป็นไปตามข้อกำหนดที่องค์กรกำหนด

จำ:

> **Standard = Specific + Mandatory**

---

# 31. Procedure

Procedure คือ

> Detailed Step-by-Step Instructions

ตอบคำถาม:

> **HOW do we do it?**

เช่น Reset Password:

```text
1. Open IAM portal
2. Select user
3. Reset password
4. Verify authentication
5. Document change
```

→ Procedure

---

# 32. Policy vs Standard vs Procedure

ข้อนี้ควรแม่นมาก

| สิ่งที่ถาม | คำตอบ |
|---|---|
| High-level management direction | **Policy** |
| Specific mandatory requirement | **Standard** |
| Step-by-step instructions | **Procedure** |
| Recommended practice | **Guideline** |
| Structured security approach | **Framework** |
| Legally enforceable requirement | **Law / Regulation** |

จำ:

> **Policy = WHAT**  
> **Standard = EXACT REQUIREMENT**  
> **Procedure = HOW**

---

# 33. ISO / ISO/IEC 27001

ISO คือ

> International Organization for Standardization

พัฒนา International Standards หลายด้าน

ส่วน:

> **ISO/IEC 27001**

เป็น International Standard สำหรับการ

- Establish
- Implement
- Maintain
- Continually improve

**Information Security Management System — ISMS**

ISMS ช่วยจัดการ Information Security ผ่าน:

- Risk Management
- Security Controls
- Policies & Processes
- Continual Improvement
- Management Involvement

คำที่ต้องเชื่อม:

> **ISO 27001 → ISMS**

---

# 34. CIS — Center for Internet Security

CIS เป็นองค์กร nonprofit ที่พัฒนา Cybersecurity Best Practices และ Resources

สิ่งสำคัญที่เรียนคือ:

> **CIS Controls**

เป็น Prioritized Security Safeguards เพื่อช่วย:

- Reduce common cyber risks
- Improve security posture
- Prioritize security activities
- Establish practical controls

---

# 35. Security Controls

ตรงนี้ต้องแยกสองเรื่อง:

> **Category = Control เป็นอะไร/ใครเป็นคนดำเนินการ**

กับ

> **Type = Control ทำหน้าที่อะไร**

อย่าเอาสองชุดนี้ปนกัน

---

# 36. Security Control Categories

มี 4 Categories ตามสไลด์:

> **Technical / Managerial / Operational / Physical**

## Technical

ใช้ Hardware / Software / Technology

ตัวอย่าง:

- Encryption
- Password mechanisms
- Smart Cards
- Biometrics
- ACL
- Firewall
- Router
- IDS/IPS

จำ:

> **Technical = Technology**

---

## Managerial

เกี่ยวกับ:

- Policy
- Planning
- Assessment
- Risk Management
- Administrative oversight

ตัวอย่าง:

- Policies
- Vendor Management
- Hiring Practices
- Background Checks
- Data Classification
- Risk Assessment
- Vulnerability Assessment

จำ:

> **Managerial = Policy / Planning / Management**

---

## Operational

เกี่ยวกับ:

> **Day-to-day operations และกระบวนการที่คนดำเนินการ**

ตัวอย่าง:

- Backup/Recovery Procedures
- Awareness Training
- Change Management
- Configuration Management
- Media Protection

จำ:

> **Operational = People + Process + Day-to-day**

---

## Physical

ป้องกัน:

> Facilities และ Physical/Real-world Assets

ตัวอย่าง:

- Guards
- Fences
- Mantraps
- Lights
- Motion Detectors
- Cameras
- Alarms
- Laptop Locks

จำ:

> **Physical = Tangible / Touchable**

---

# 37. Security Control Types

อีกชุดหนึ่งคือ **Control ทำหน้าที่อะไร**

มี:

> Deterrent  
> Preventive  
> Detective  
> Compensating  
> Corrective  
> Directive

---

# 38. Deterrent

เป้าหมายคือ

> **Discourage**

ทำให้ผู้โจมตี **ไม่อยากทำ / ไม่กล้าทำ**

Keyword:

- Warning
- Sign
- Visibility
- Perception
- Discourage

ตัวอย่าง:

- Warning Sign
- Visible Camera
- Security Guard
- Lighting

จำ:

> **Deterrent = Don't even try.**

---

# 39. Preventive

เป้าหมาย:

> **Prevent / Stop** Unauthorized Activity ก่อนเกิด

ตัวอย่าง:

- Authentication
- Firewall
- Access Control
- Encryption
- Locks
- Biometrics
- Mantrap

จำ:

> **Preventive = Stop it**

---

# 40. Detective

เป้าหมาย:

> Discover / Detect Activity

Keyword:

- Monitoring
- Audit
- Logging
- Alerts
- Detection

ตัวอย่าง:

- IDS
- Audit Logs
- Monitoring
- Motion Detector

จำ:

> **Detective = Find it**

---

# 41. Corrective

ใช้เมื่อมีปัญหาเกิดแล้ว เพื่อ:

> Fix / Restore / Recover / Reduce Damage

ตัวอย่าง:

- Restore Backup
- Patching
- Incident Response
- Malware Removal

จำ:

> **Corrective = Fix it**

---

# 42. Compensating

คือ

> Alternative Control

ใช้เมื่อ Primary/Preferred Control ไม่สามารถใช้ได้ แล้วต้องใช้ Control อื่นมาชดเชยเพื่อให้บรรลุวัตถุประสงค์ด้าน Security

Keyword:

- Alternative
- Substitute
- Compensate

จำ:

> **Compensating = Can't use A → use B instead**

---

# 43. Directive

ใช้เพื่อ

> Guide / Direct Behavior

ตัวอย่าง:

- Policies
- Procedures
- Standards
- Guidelines
- Signs
- Instructions

จำ:

> **Directive = Tell people what to do**

---

# 44. Overlapping Security Controls

สำคัญมาก:

> **Control หนึ่งตัวสามารถจัดได้หลาย Type ขึ้นอยู่กับ Context**

อย่าจำชื่อ Control แบบตายตัว

เช่น:

### CCTV

ถ้าติดให้คนเห็นเพื่อทำให้โจรไม่กล้าเข้า

→ **Deterrent**

ถ้าใช้บันทึก/ตรวจจับผู้บุกรุก

→ **Detective**

ดังนั้น CCTV อาจเป็น:

```text
Category = Physical

Type = Deterrent
       และ/หรือ
       Detective
```

---

Firewall ก็เช่นเดียวกัน

ถ้า Block Unauthorized Traffic

→ **Preventive**

ถ้า Function/Context เน้น Logging/Alerting การกระทำ

→ มี **Detective** function ได้

ข้อสอบจึงต้องดู:

> **What is the control doing in THIS scenario?**

ไม่ใช่:

> “ปกติ Control นี้เรียกว่าอะไร?”

---

# 45. Keyword สำหรับ Security Control Type

ชุดนี้มีประโยชน์ตอนทำข้อสอบ:

| Keyword | คิดถึง |
|---|---|
| Warning / Visibility / Discourage | **Deterrent** |
| Block / Stop / Prevent | **Preventive** |
| Detect / Monitor / Log / Alert | **Detective** |
| Restore / Repair / Recover / Fix | **Corrective** |
| Alternative / Substitute | **Compensating** |
| Direct / Instruct / Require | **Directive** |

จำ Flow:

> **กลัว → กัน → เจอ → แก้**

```text
Deterrent
    ↓
Preventive
    ↓
Detective
    ↓
Corrective
```

ส่วน:

```text
Compensating = ทดแทน
Directive    = สั่ง/ชี้แนวทาง
```

---

# 46. Professional Code of Conduct

Professional Code of Conduct คือ

> Principles + Expectations ว่าคนในวิชาชีพควรประพฤติตัวอย่างไร

สำหรับ Cybersecurity เน้น:

- Integrity
- Confidentiality
- Professionalism
- Responsibility
- Respect
- Protection of Information
- Compliance with Laws/Regulations

หลักคิดสำคัญ:

> **มี Technical Access ไม่ได้แปลว่ามี Authorization ทางจริยธรรมหรือธุรกิจให้ทำทุกอย่าง**

เช่นคุณเป็น Domain Admin

Technically เปิดข้อมูลพนักงานได้

ไม่ได้หมายความว่า:

> “ฉันเป็น Admin ดังนั้นเปิดอะไรก็ได้”

ต้องมี Business/Authorized Purpose

---

# 47. Due Care

Due Care คือ

> **Taking reasonable steps to protect assets and reduce risk**

เน้น:

> **ลงมือทำสิ่งที่สมเหตุสมผลและรับผิดชอบ**

ตัวอย่าง:

- Implement Security Controls
- Protect Sensitive Information
- Apply Security Patches
- Security Awareness Training

จำ:

> **Due Care = DO**

---

# 48. Due Diligence

Due Diligence คือ

> Investigate + Evaluate + Maintain Awareness of Risk

ตรวจว่าสิ่งที่ทำ:

- Appropriate ไหม
- Effective ไหม
- Risk เปลี่ยนหรือไม่

ตัวอย่าง:

- Risk Assessment
- Review Security Controls
- Vulnerability Assessment
- Monitor Emerging Threats

จำ:

> **Due Diligence = CHECK**

---

# 49. Due Care vs Due Diligence

ตัวอย่างที่ชัดมาก:

บริษัท Scan Server

พบ Vulnerability

→ **Due Diligence**

ติดตั้ง Patch

→ **Due Care**

Scan ใหม่หลัง Patch

→ **Due Diligence**

ดังนั้น:

```text
Diligence
   ↓
พบ Risk
   ↓
Care
   ↓
Implement Control
   ↓
Diligence
   ↓
ตรวจสอบผล
```

Keyword:

| Due Care | Due Diligence |
|---|---|
| Implement | Assess |
| Apply | Review |
| Protect | Evaluate |
| Take Action | Monitor |
| Patch | Verify |

---

# 50. ISC2 Code of Ethics

ส่วนท้ายที่เราเพิ่งเรียน และควรจำ **4 Canons**

## Canon 1

> **Protect society, the common good, necessary public trust and confidence, and the infrastructure.**

คิดถึง:

- Society
- Public
- Common Good
- Public Trust
- Infrastructure

---

## Canon 2

> **Act honorably, honestly, justly, responsibly, and legally.**

คิดถึง:

- Honesty
- Integrity
- Fairness
- Responsibility
- Legality

---

## Canon 3

> **Provide diligent and competent service to principals.**

Principal อาจเป็น:

- Employer
- Client
- Organization ที่เรามีหน้าที่ให้บริการ

ต้องให้บริการอย่าง:

- Diligent
- Competent
- Professional

---

## Canon 4

> **Advance and protect the profession.**

คิดถึง:

- Cybersecurity Profession
- Professional reputation
- Development of profession
- Protecting professional standards

---

# 51. จำ ISC2 Canons

จำ:

> **S → A → P → P**

```text
Society
   ↓
Act honorably
   ↓
Principals
   ↓
Profession
```

หรือ:

> **Public → Ethical Conduct → Client/Employer → Profession**

---

# สรุป Domain 1 แบบย่อที่สุด

ถ้าก่อนสอบมีเวลาอ่านแค่หน้าเดียว ให้จำชุดนี้:

### CIA

> **Confidentiality = Secret**  
> **Integrity = Correct**  
> **Availability = Accessible**

### AAA

> **Authentication = Who are you?**  
> **Authorization = What can you do?**  
> **Accounting = What did you do?**

### MFA

> **Know + Have + Are + Location/Context**

และ MFA ต้องใช้ **คนละ Factor**

### Privacy

> **Data Subject = เจ้าของข้อมูลส่วนบุคคลที่ข้อมูลกล่าวถึง**  
> **Controller = Decide purpose/means**  
> **Processor = Process for Controller**  
> **Inventory = มีข้อมูลอะไร/อยู่ไหน**  
> **Retention = เก็บนานเท่าไร**

### Risk

> **Asset = สิ่งที่ปกป้อง**  
> **Threat = สิ่งที่ทำอันตราย**  
> **Vulnerability = จุดอ่อน**  
> **Impact = ผลที่จะเกิด**

### สูตร

> **SLE = AV × EF**

> **ALE = SLE × ARO**

### Risk Response

> **Avoid = เลิก**  
> **Mitigate = ลด**  
> **Transfer = โอน/แบ่งภาระ**  
> **Accept = ยอมรับ**

### Governance

> **Direction + Oversight + Accountability**

### Documents / Requirements

> **Law = Legally enforceable**  
> **Framework = Structure**  
> **Guideline = Recommendation**  
> **Policy = High-level WHAT**  
> **Standard = Specific Mandatory Requirement**  
> **Procedure = Step-by-step HOW**

### Security Control Categories

> **Technical = Technology**  
> **Managerial = Policy/Planning**  
> **Operational = People/Day-to-day Process**  
> **Physical = Tangible**

### Security Control Types

> **Deterrent = Discourage**  
> **Preventive = Stop**  
> **Detective = Find**  
> **Corrective = Fix**  
> **Compensating = Alternative**  
> **Directive = Tell/Guide**

### Due Care / Due Diligence

> **Due Care = DO**

> **Due Diligence = CHECK**

### ISC2 Ethics

> **1 Society**  
> **2 Act honorably**  
> **3 Principals**  
> **4 Profession**

---

## จุดที่ผมมองว่าต้องแม่นที่สุดก่อนขึ้น Domain 2

Domain 1 ไม่ได้ยากเพราะต้องจำเยอะอย่างเดียว แต่ข้อสอบสามารถเอาคำที่ **ใกล้กันมาก** มาหลอกได้ ดังนั้นต้องแยก 6 คู่/กลุ่มนี้ให้ขาด:

**Authentication vs Authorization** — ตัวตน vs สิทธิ์

**Threat vs Vulnerability** — สิ่งที่สร้างอันตราย vs จุดอ่อน

**SLE vs ALE** — เสียครั้งเดียว vs เสียต่อปี

**Policy vs Standard vs Procedure** — ทิศทาง vs Requirement เฉพาะ vs วิธีทำทีละขั้น

**Control Category vs Control Type** — Control เป็นกลุ่มอะไร vs Control ทำหน้าที่อะไร

**Due Care vs Due Diligence** — ลงมือทำ vs ตรวจสอบ/ประเมิน

ถ้า 6 ชุดนี้แยกได้ และจำ **Risk Responses + Security Control Types + ISC2 4 Canons** ได้ ผมถือว่าฐานของ Domain 1 ชุดที่เราเรียนมาค่อนข้างแน่นแล้วครับ