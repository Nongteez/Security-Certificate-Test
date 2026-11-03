# ISC2 Certified in Cybersecurity (CC) 2026 — Domain 2: Security Governance
## Expanded Complete Study Notes | ฉบับขยายทุกหัวข้อที่เรียน + ความรู้เสริม

> **ขอบเขตและที่มา**: ส่วนที่ติดป้าย **[จากสไลด์]** ยึดเนื้อหาที่ผู้เรียนส่งมาในบทสนทนา Domain 2; ส่วน **[เสริม]** เป็นความรู้ประกอบเพื่อเชื่อมความเข้าใจและฝึกทำข้อสอบ ไม่ใช่การอ้างว่าอยู่ในสไลด์หรือเป็นข้อสอบจริง ISC2. อ้างอิงเอกสาร ISC2 *Inside the Updated ISC2 Certified in Cybersecurity Exam* (6 ส.ค. 2026) ที่ผู้เรียนแนบ: Exam Outline มีผล 1 ก.ย. 2026; Domain 2 เปลี่ยนชื่อเป็น **Security Governance** น้ำหนัก **17.3%**. เอกสารดังกล่าวยืนยันภาพรวมการเปลี่ยนแปลง แต่ **ไม่ได้แจกแจงรายละเอียดทุกหัวข้อย่อยในเอกสารฉบับนี้**.
>
> **วิธีอ่าน**: เรียน Definition → Why → Example → Exam distinction → Scenario. ข้อสอบจำลองเป็นข้อแต่งเพื่อฝึก ไม่ใช่ข้อสอบจริงหรือข้อที่ ISC2 รับรอง.

---

# สารบัญ

1. [แผนที่ความรู้ Domain 2](#1-แผนที่ความรู้-domain-2)
2. [Objective 2.1 — Governance, Risk and Compliance (GRC)](#2-objective-21--governance-risk-and-compliance-grc)
3. [GRC Frameworks, Standards และข้อกำหนด](#3-grc-frameworks-standards-และข้อกำหนด)
4. [GRC Tools และ Risk Register](#4-grc-tools-และ-risk-register)
5. [Objective 2.2 — Redundancy, Business Continuity และ Disaster Recovery](#5-objective-22--redundancy-business-continuity-และ-disaster-recovery)
6. [BCP, DRP, RTO, RPO และ Backup](#6-bcp-drp-rto-rpo-และ-backup)
7. [Recovery Sites, Resilience และการทดสอบ](#7-recovery-sites-resilience-และการทดสอบ)
8. [Objective 2.3 — Security Awareness, Culture, Leadership](#8-objective-23--security-awareness-culture-leadership)
9. [Social Engineering และ Password Protection](#9-social-engineering-และ-password-protection)
10. [Objective 2.4 — Measuring Cybersecurity Effectiveness](#10-objective-24--measuring-cybersecurity-effectiveness)
11. [Metrics, KPI, KRI, Dashboard, Scorecard, Report](#11-metrics-kpi-kri-dashboard-scorecard-report)
12. [Integrated Case Study](#12-integrated-case-study)
13. [Exam Traps และคำศัพท์](#13-exam-traps-และคำศัพท์)
14. [แบบฝึกหัดพร้อมเฉลย](#14-แบบฝึกหัดพร้อมเฉลย)
15. [One-page Memory Sheet และ Checklist](#15-one-page-memory-sheet-และ-checklist)

---

# 1. แผนที่ความรู้ Domain 2

**[จากสไลด์]** เส้นทางการเรียนที่ปรากฏในบทสนทนา:

```text
DOMAIN 2 — SECURITY GOVERNANCE (17.3%)
│
├─ 2.1 Plan Governance, Risk, and Compliance (GRC)
│  ├─ Governance / Risk / Compliance
│  ├─ Purpose and Importance of GRC
│  ├─ NIST CSF / ISO/IEC 27001 / COBIT
│  ├─ GRC tools
│  └─ Risk register + ransomware example
│
├─ 2.2 Understand Redundancy
│  ├─ Business Continuity (BC) / BCP
│  ├─ Disaster Recovery (DR) / DRP
│  ├─ RTO / RPO
│  ├─ Backup and recovery
│  ├─ Hot / Warm / Cold sites
│  └─ BC vs DR
│
├─ 2.3 กลุ่ม Security Awareness ที่เรียนต่อจาก 2.2
│  ├─ Security awareness / culture / leadership
│  ├─ Social engineering
│  ├─ Phishing / Spear phishing / Whaling / Vishing / Smishing / Pretexting
│  └─ Password protection / MFA
│
└─ 2.4 Measure Cybersecurity Effectiveness
   ├─ Security metrics / MTTD / MTTR
   ├─ KPI / KRI
   ├─ Dashboard / Scorecard / Report
   └─ Measurement → Management decision → Improvement
```

> **หมายเหตุความแม่นยำ**: ชื่อวัตถุประสงค์ 2.1, 2.2, 2.4 ปรากฏในสไลด์ที่ส่งมาโดยตรง; กลุ่ม 2.3 ระบุเป็นการจัดหมวดตามลำดับบทเรียน ไม่ยืนยันชื่อ Objective อย่างเป็นทางการจากสไลด์หน้าปกที่ไม่ได้เห็น.

**[เสริม]** มอง Domain 2 เป็นวงจรเดียวกัน: **กำหนดทิศทาง (Governance) → รู้และจัดการความเสี่ยง (Risk) → ทำตามข้อกำหนด (Compliance) → ทำให้ธุรกิจดำเนินต่อ (BC/DR) → ทำให้คนทำสิ่งที่ถูกต้อง (Culture) → วัดผลและปรับปรุง (Metrics)**.

# 2. Objective 2.1 — Governance, Risk and Compliance (GRC)

## 2.1 GRC คืออะไร

**[จากสไลด์]** GRC เป็นแนวทางแบบบูรณาการ (integrated approach) ที่องค์กรใช้บริหารความต้องการด้าน cybersecurity และธุรกิจร่วมกัน; มุ่งให้การทำงานมีโครงสร้างและประสานกัน (structured and coordinated).

| เสาหลัก | คำสำคัญในสไลด์ | คำถามที่ตอบ | ตัวอย่าง |
|---|---|---|---|
| **Governance** | Direction, Oversight, Accountability | ใครกำหนดทิศทางและรับผิดชอบ? | คณะผู้บริหารอนุมัตินโยบายความปลอดภัย |
| **Risk** | Identify and Manage | มีอะไรอาจทำให้เป้าหมายองค์กรล้มเหลว? | ประเมิน ransomware ต่อระบบสำคัญ |
| **Compliance** | Laws, Regulations, Standards, Policies, Contracts | ต้องทำตามข้อกำหนดใด? | ตรวจการปฏิบัติตามนโยบายและสัญญา |

**[เสริม]** Governance ไม่เท่ากับการลงมือแก้เซิร์ฟเวอร์: Governance กำหนด **ใครมีอำนาจตัดสินใจ / ยอมรับความเสี่ยงระดับใด / รายงานต่อใคร** ส่วนทีมปฏิบัติการลงมือใช้ controls.

### Direction, Oversight, Accountability

- **Direction**: กำหนดเป้าหมาย เช่น ข้อมูลลูกค้าต้องได้รับการคุ้มครองตามระดับความเสี่ยง
- **Oversight**: ตรวจว่าการปฏิบัติเป็นไปตามทิศทาง เช่น รีวิวผล audit และ dashboard
- **Accountability**: ระบุผู้ที่ต้องรับผิดชอบผลลัพธ์ เช่น risk owner / process owner

**[เสริม] Responsibility vs Accountability**: ผู้ปฏิบัติหลายคนอาจ *responsible* ในการทำงาน แต่ควรระบุเจ้าของผลลัพธ์ที่ *accountable* อย่างชัดเจน; อย่าสรุปว่า IT ต้องเป็นเจ้าของความเสี่ยงทางธุรกิจทุกกรณี.

## 2.2 Purpose of GRC

**[จากสไลด์]** GRC ช่วย (1) Align cybersecurity with business objectives (2) Identify/manage risks (3) Meet legal/regulatory obligations (4) Establish consistent policies and controls (5) Improve accountability (6) Support informed decision-making (7) Reduce duplicated security/compliance efforts.

**ตัวอย่างเชื่อมภาพ**: บริษัทออนไลน์ต้องรักษาระบบสั่งซื้อ 24/7 → Governance กำหนดความสำคัญของบริการ → Risk ประเมินโอกาสระบบล่ม → Compliance ดูข้อกำหนดการเก็บข้อมูล → Controls จัดทำ MFA, backup, monitoring → Management ตรวจผลผ่าน metrics.

## 2.3 Importance of GRC

**[จากสไลด์]** ประโยชน์: ลด cybersecurity/business risk, ปกป้อง critical information/assets, ตอบข้อกำหนด, ลดโอกาส financial penalties, เพิ่มคุณภาพการตัดสินใจ, ความรับผิดชอบชัดเจน, เพิ่ม organizational resilience. หากไม่มี GRC อาจเกิด inconsistent security practices, unidentified risks, compliance violations, poor accountability.

**Exam distinction**: คำว่า **business alignment / direction / oversight** มักชี้ Governance; **likelihood / impact / treatment** ชี้ Risk; **law / regulation / audit obligation** ชี้ Compliance.

## 2.4 Governance documents [เสริม]

สไลด์กล่าวถึง policies/controls แต่ไม่ได้ลงรายละเอียดลำดับเอกสาร จึงเพิ่มเพื่อช่วยแยกคำ:

| เอกสาร | หน้าที่ | ตัวอย่าง |
|---|---|---|
| **Policy** | ระบุข้อกำหนดระดับองค์กรว่า *ต้องทำอะไร* | ต้องใช้ MFA สำหรับ privileged accounts |
| **Standard** | ระบุข้อกำหนดเฉพาะที่ต้องทำให้สม่ำเสมอ | กำหนดรูปแบบการเข้ารหัสที่องค์กรอนุมัติ |
| **Procedure** | ขั้นตอน *ทำอย่างไร* | วิธีขอ/อนุมัติ/เพิกถอนสิทธิ์ |
| **Guideline** | แนวทางแนะนำที่ยืดหยุ่นตามบริบท | แนวทางตั้งค่าอุปกรณ์ให้ปลอดภัย |

**Exam trap**: การมี policy **ไม่เท่ากับ** การบังคับใช้จริง ต้องมี controls, awareness, monitoring และ review.

## 2.5 Risk vocabulary [เสริมเพื่อขยาย Risk Register]

- **Asset**: สิ่งมีคุณค่า เช่น customer database, server, business process
- **Threat**: สิ่ง/เหตุการณ์ที่อาจก่อความเสียหาย เช่น ransomware, insider misuse, flood
- **Vulnerability**: จุดอ่อนที่ถูกใช้ประโยชน์ได้ เช่น unpatched software
- **Likelihood**: ความเป็นไปได้ที่จะเกิดเหตุการณ์
- **Impact**: ผลกระทบหากเกิดเหตุการณ์
- **Risk**: ผลของความไม่แน่นอนต่อวัตถุประสงค์; ในการประเมินอย่างง่ายพิจารณา likelihood และ impact
- **Control**: มาตรการลดความเสี่ยง เช่น MFA, EDR, backup
- **Risk owner**: ผู้มีหน้าที่ดูแลการตัดสินใจและติดตามความเสี่ยง

**ตัวอย่าง**: Web server (asset) มีช่องโหว่ไม่ได้ patch (vulnerability), attacker (threat actor) ใช้ exploit (threat event), ทำให้บริการหยุด (impact). ประเมิน likelihood/impact แล้วเลือก treatment.

### Risk treatment [เสริม]

| ทางเลือก | แนวคิด | ตัวอย่าง |
|---|---|---|
| **Mitigate/Reduce** | ลด likelihood หรือ impact | EDR + patch + backup |
| **Avoid** | เลิกกิจกรรมที่ก่อความเสี่ยง | ยกเลิกบริการที่เสี่ยงเกินรับได้ |
| **Transfer/Share** | โอนหรือแบ่งภาระผลกระทบบางส่วน | Cyber insurance หรือสัญญากับผู้ให้บริการ |
| **Accept** | รับความเสี่ยงที่เหลือโดยผู้มีอำนาจ | ยอมรับความเสี่ยงระดับต่ำพร้อมบันทึกเหตุผล |

> Transfer ไม่ได้ทำให้ความรับผิดชอบทั้งหมดหายไป; Accept ไม่ได้แปลว่าไม่ต้องบันทึก/ติดตาม.

# 3. GRC Frameworks, Standards และข้อกำหนด

## 3.1 NIST Cybersecurity Framework (CSF)

**[จากสไลด์]** กรอบสำหรับ managing and reducing cybersecurity risk.

**[เสริม]** NIST CSF 2.0 มี 6 functions: **Govern, Identify, Protect, Detect, Respond, Recover**. ใช้เป็นภาษากลางเพื่อมองภาพรวมความเสี่ยง ไม่ใช่รายการที่การใช้เพียงอย่างเดียวจะรับรอง compliance ทุกกฎหมาย.

- Govern: กลยุทธ์ นโยบาย บทบาท และการกำกับ
- Identify: ทรัพย์สินและความเสี่ยง
- Protect: มาตรการป้องกัน
- Detect: ตรวจจับความผิดปกติ
- Respond: จัดการเหตุการณ์
- Recover: ฟื้นฟูการทำงาน

## 3.2 ISO/IEC 27001

**[จากสไลด์]** กำหนด requirements สำหรับการจัดตั้งและปรับปรุง **Information Security Management System (ISMS)** อย่างต่อเนื่อง.

**[เสริม]** ISMS คือระบบบริหารความมั่นคงปลอดภัยสารสนเทศที่รวม scope, leadership, risk assessment, risk treatment, monitoring, internal audit และ continual improvement. การรับรอง ISO 27001 ต้องผ่านกระบวนการตามเกณฑ์ที่เกี่ยวข้อง; **การมีเอกสาร policy อย่างเดียวไม่ใช่ certification**.

## 3.3 COBIT

**[จากสไลด์]** กรอบสำหรับ **governance and management of enterprise IT**.

**[เสริม]** เน้นการเชื่อม IT กับคุณค่าธุรกิจ การกำกับดูแลและการบริหารกระบวนการ IT; ใช้ประกอบการจัดความรับผิดชอบและการวัดผลได้.

## 3.4 แยก Framework, Standard, Law และ Regulation

| ประเภท | ความหมาย | ตัวอย่างในสไลด์/ภาพ |
|---|---|---|
| Framework | โครงสร้างแนวทางบริหาร | NIST CSF, COBIT |
| Management-system standard | ข้อกำหนดระบบบริหาร | ISO/IEC 27001 |
| Law / Regulation | กฎหมายหรือข้อบังคับตามเขตอำนาจ | GDPR, HIPAA (บริบทกฎหมายต่างกัน) |
| Industry standard | ข้อกำหนดจากอุตสาหกรรม/สัญญา | PCI DSS |
| Program / requirement | ข้อกำหนดตามบริบทเฉพาะ | CMMC |

**[จากภาพสไลด์]** ภาพแสดงชื่อ GDPR, HIPAA, PCI DSS, SOX, CMMC ประกอบการอธิบาย GRC. **[เสริม]** อย่าจัดทั้งหมดเป็น “กฎหมาย” เหมือนกัน: GDPR เป็นกฎระเบียบคุ้มครองข้อมูลของ EU; HIPAA เป็นกฎหมายสหรัฐและกฎที่เกี่ยวข้องกับข้อมูลสุขภาพในขอบเขตที่กำหนด; SOX เป็นกฎหมายสหรัฐด้านการรายงานและการควบคุมทางการเงิน; PCI DSS เป็นมาตรฐานอุตสาหกรรมบัตรชำระเงิน; CMMC เป็นโปรแกรมประเมินความพร้อมด้าน cybersecurity ของห่วงโซ่อุปทานกลาโหมสหรัฐ. ความใช้บังคับขึ้นกับบริบทองค์กร.

**Exam quick match**: *Risk management framework* → NIST CSF; *ISMS requirements* → ISO 27001; *Enterprise IT governance* → COBIT.

# 4. GRC Tools และ Risk Register

## 4.1 GRC Tools

**[จากสไลด์]** Software platforms ที่ช่วยบริหาร governance, risk, compliance; ความสามารถ: **risk registers, policy management, compliance tracking, control management, audit management, risk assessments**. ประโยชน์คือรวมข้อมูลที่เคยกระจายหลาย spreadsheets และติดตามสถานะได้.

**[เสริม]** ตัวอย่าง workflow: เพิ่ม risk → มอบหมาย owner → ผูก control → อัปโหลดหลักฐาน audit → กำหนด due date → ดู status dashboard → รายงานต่อ management. เครื่องมือช่วยประสานงาน **แต่ไม่แทนการตัดสินใจของเจ้าของความเสี่ยง**.

## 4.2 Risk Register

**[จากสไลด์]** *Documented record of identified organizational risks*. ฟิลด์ที่ปรากฏ: risk description, affected asset/process, threat, vulnerability, likelihood, impact, risk rating, risk owner, treatment strategy, current status, residual risk.

| ฟิลด์ | อธิบาย | ตัวอย่างจาก ransomware case |
|---|---|---|
| Risk description | อธิบายเหตุการณ์ความเสี่ยง | Ransomware affecting critical servers |
| Affected asset/process | ระบบ/งานที่ได้รับผล | Critical servers |
| Threat | สิ่งคุกคาม | Ransomware |
| Vulnerability | จุดอ่อนที่อาจถูกใช้ | [เสริม] ระบบ patch ไม่ทัน |
| Likelihood | ความเป็นไปได้ | High |
| Impact | ความเสียหาย | High |
| Risk rating | ระดับความเสี่ยง | [เสริม] High / Critical ตามเกณฑ์องค์กร |
| Risk owner | เจ้าของความเสี่ยง | IT Manager |
| Treatment | วิธีจัดการ | Mitigation |
| Controls | มาตรการ | EDR, backups, segmentation, MFA |
| Current status | ความคืบหน้า | [เสริม] In progress |
| Residual risk | ความเสี่ยงหลังใช้ controls | [เสริม] Medium (ต้องประเมินจริง) |

**[จากสไลด์]** Case: **Risk: Ransomware affecting critical servers; Likelihood: High; Impact: High; Risk Owner: IT Manager; Treatment: Mitigation; Controls: EDR, backups, network segmentation, MFA**.

### Inherent vs Residual Risk [เสริม]

- **Inherent risk**: ความเสี่ยงก่อนคำนึงถึง controls ที่นำมาลด
- **Residual risk**: ความเสี่ยงที่เหลือหลัง controls
- Residual risk ไม่จำเป็นต้องเป็นศูนย์; ต้องพิจารณาว่าอยู่ในระดับยอมรับได้หรือไม่

### Risk scoring [เสริม]

แบบจำลองเชิงคุณภาพอย่างง่ายอาจให้ likelihood และ impact ระดับ 1–5 แล้วคูณกัน เช่น 4 × 5 = 20. **นี่เป็นเพียงตัวอย่างวิธีจัดอันดับ ไม่ใช่สูตรบังคับของ ISC2 หรือของทุกองค์กร**. ต้องกำหนดเกณฑ์การตีความคะแนนล่วงหน้า.

**Exam trap**: Risk Register คือ **record/tracking** ไม่ใช่เครื่องมือป้องกัน ransomware ด้วยตัวมันเอง; EDR/backup/MFA คือ controls.

# 5. Objective 2.2 — Redundancy, Business Continuity และ Disaster Recovery

## 5.1 Business Continuity (BC)

**[จากสไลด์]** ความสามารถขององค์กรที่จะ **continue critical business operations during and after a disruption**. สิ่งรบกวนที่เรียน: natural disasters, cyberattacks, power outages, equipment failures, network outages, pandemics, loss of facilities, supply-chain disruptions.

**แนวคิดหลัก**: BC มอง “ธุรกิจยังให้บริการสำคัญต่อได้อย่างไร” ไม่จำกัดแค่ระบบ IT; รวม people, process, facilities, suppliers, technology.

## 5.2 Business Continuity Plan (BCP)

**[จากสไลด์]** เอกสารที่กำหนดวิธีดำเนิน critical operations ระหว่าง disruption. หัวข้อที่สไลด์ระบุ:

1. **Critical business processes** — กระบวนการสำคัญต้องดำเนินต่อ
2. **Roles and responsibilities** — ใครตัดสินใจ ใครปฏิบัติ ใครสำรอง
3. **Communication procedures** — แจ้งพนักงาน ลูกค้า คู่ค้า และผู้บริหารอย่างไร
4. **Alternate work locations** — สถานที่ทำงานสำรอง
5. **Backup personnel** — บุคลากรทดแทน
6. **Alternate suppliers** — คู่ค้าหรือผู้ส่งมอบสำรอง
7. **Essential technology and systems** — เทคโนโลยีจำเป็น
8. **Recovery priorities** — งานใดต้องกลับมาก่อน

**ตัวอย่าง**: ศูนย์บริการลูกค้าใช้สำนักงานไม่ได้ → ให้พนักงานสำรองทำงานจากอีกสถานที่และใช้ระบบติดต่อฉุกเฉิน. นี่เป็น **BCP** แม้ยังไม่ต้องกู้ database.

## 5.3 Redundancy [เสริมเชื่อมชื่อ Objective]

ชื่อสไลด์ 2.2 คือ *Understand Redundancy* แต่รายละเอียดที่ส่งมามุ่ง BC/DR; จึงเสริมความหมายพื้นฐานดังนี้:

- **Redundancy**: มีทรัพยากรสำรองเพื่อลด single point of failure เช่น dual power supplies, network links, clustered servers, alternate personnel
- **High Availability (HA)**: ออกแบบให้บริการพร้อมใช้งานสูง โดยลดผลของ component failure
- **Failover**: ย้ายการให้บริการไปยังระบบสำรองเมื่อระบบหลักล้มเหลว
- **Fault Tolerance**: ออกแบบให้ยังทำงานต่อได้แม้บางองค์ประกอบเสีย
- **Resilience**: ความสามารถในการรับมือ ปรับตัว ฟื้นฟู และคงบริการสำคัญ

**ข้อแตกต่าง**: Backup เป็นสำเนาข้อมูลเพื่อกู้คืน; redundancy เป็นความซ้ำซ้อนของทรัพยากรเพื่อรักษาบริการ. การมี backup อย่างเดียว **ไม่รับประกัน zero downtime**.

# 6. BCP, DRP, RTO, RPO และ Backup

## 6.1 Disaster Recovery (DR)

**[จากสไลด์]** ชุดของ policies, tools, procedures สำหรับ **restore IT infrastructure, systems, and data after a disaster or major disruption**. จุดประสงค์: minimize downtime, restore critical IT operations, protect data integrity/prevent loss, support business continuity through technology resilience.

**[จากสไลด์]** ประโยชน์: ฟื้นระบบเร็ว ลด disruption, ปกป้องข้อมูล, สนับสนุน compliance, ลด financial loss, รักษาความเชื่อมั่นลูกค้า.

> หมายเหตุ [เสริม]: ข้อกำหนดด้าน DR ในกฎหมายต่าง ๆ ขึ้นกับประเภทองค์กร/ข้อมูลและข้อบังคับที่ใช้จริง; อย่าตีความว่า GDPR/HIPAA บังคับ DRP รูปแบบเดียวกันทุกองค์กร.

## 6.2 Business Continuity vs Disaster Recovery

| ประเด็น | BC | DR |
|---|---|---|
| Main question | ธุรกิจดำเนินต่ออย่างไร? | IT กลับมาอย่างไร? |
| Focus | Critical business operations | IT infrastructure, applications, networks, data |
| Scope | People, processes, sites, suppliers, technology | Primarily technology recovery |
| Plan | BCP | DRP |
| Example | ย้ายพนักงานไปไซต์สำรอง | กู้ database และ network |
| Relationship | กรอบกว้าง | องค์ประกอบสำคัญของ BC |

**[จากสไลด์]** BIA ช่วยระบุ critical business functions/priorities และใช้ผลกำหนด IT recovery priorities; DR พึ่งพา RTO/RPO อย่างมาก.

## 6.3 Business Impact Analysis (BIA) [เสริมรายละเอียด]

**BIA** วิเคราะห์ผลกระทบจากการหยุดชะงักเพื่อจัดลำดับความสำคัญของกระบวนการ. ควรระบุ process owner, dependencies, impacts over time, criticality, acceptable disruption และ recovery requirements. **BIA ไม่ใช่สิ่งเดียวกับ risk assessment**: BIA เน้น *ผลกระทบหากหยุด*; risk assessment เน้น *เหตุการณ์เสี่ยงและความเป็นไปได้/ผลกระทบ*.

**ตัวอย่าง**: ระบบรับคำสั่งซื้อหยุด 1 ชั่วโมงเสียรายได้สูง แต่ระบบจัดเก็บเอกสารภายในหยุด 1 วันยังพอรับได้ → ระบบรับคำสั่งซื้ออาจมี recovery priority สูงกว่า.

## 6.4 Disaster Recovery Plan (DRP)

**[จากสไลด์]** องค์ประกอบ: **RTO, RPO, backup and recovery strategies, disaster recovery sites, testing and drills**.

**[เสริม]** DRP ที่นำไปใช้จริงมักเพิ่ม contact list, escalation, activation criteria, dependency mapping, recovery runbooks, validation steps, return-to-normal และ post-test lessons learned.

## 6.5 Recovery Time Objective (RTO)

**[จากสไลด์]** *Maximum acceptable downtime for an IT system*.

- ถามว่า **ระบบหยุดได้นานที่สุดตามเป้าหมายเท่าไร?**
- RTO = 2 ชั่วโมง → วางแผนให้บริการกลับมาภายใน 2 ชั่วโมงหลัง disruption ตามจุดเริ่มต้นที่กำหนด
- ถ้าใช้เวลา 3 ชั่วโมง → เกิน RTO

## 6.6 Recovery Point Objective (RPO)

**[จากสไลด์]** *Maximum acceptable data loss in time*.

- ถามว่า **ยอมสูญเสียข้อมูลย้อนหลังเป็นเวลาเท่าไร?**
- RPO = 30 นาที → จุดกู้คืนต้องใหม่พอที่ข้อมูลสูญหายไม่เกินช่วงเวลาเป้าหมาย 30 นาที
- ถ้า backup ล่าสุดอยู่ก่อนเหตุ 4 ชั่วโมง → อาจไม่ผ่าน RPO 30 นาที

### Timeline ที่ต้องเข้าใจ

```text
09:00 -------- 09:30 -------- 10:00 -------- 11:00
   last backup                 incident       restored
        |                          |               |
        +----- 60 min data gap ----+               |
                                   +-- 60 min ----+

RPO = ยอมเสียข้อมูลย้อนหลังได้กี่นาที (เทียบ incident กับจุดข้อมูลกู้คืน)
RTO = ยอมให้บริการหยุดกี่นาที (เทียบ incident กับเวลาบริการกลับมา)
```

**ตัวอย่าง [เสริม]** Incident 10:00, backup ล่าสุด 09:30, restored 11:00 → actual data gap 30 นาที และ actual recovery time 60 นาที. ถ้าเป้าหมาย RPO 15 นาที / RTO 2 ชั่วโมง → ผ่าน RTO แต่ **ไม่ผ่าน RPO**.

**Exam trap**: RPO ไม่ใช่เวลาในการกู้ระบบ และ RTO ไม่ใช่ปริมาณข้อมูลที่สูญหาย (GB). ทั้งสองใช้หน่วยเวลาแต่ตอบคนละคำถาม.

## 6.7 Backup and Recovery Strategies

**[จากสไลด์]** cloud backups, off-site storage และวิธี backup/restore ข้อมูล.

**[เสริม]**

| ประเภท | หลักการ | จุดควรจำ |
|---|---|---|
| Full backup | สำรองข้อมูลทั้งหมดในขอบเขต | กู้จาก full ได้โดยตรง แต่ใช้เวลา/พื้นที่มาก |
| Incremental | สำรองสิ่งที่เปลี่ยนตั้งแต่ backup ครั้งก่อน | สำรองเร็ว/เล็ก แต่กู้อาจต้องใช้หลายชุด |
| Differential | สำรองสิ่งที่เปลี่ยนตั้งแต่ full ล่าสุด | กู้ด้วย full + differential ล่าสุด |
| Snapshot | เก็บสถานะ ณ จุดเวลา | ขึ้นกับระบบ; snapshot ไม่เท่ากับ backup แยกอิสระเสมอ |
| Off-site | เก็บสำเนาแยกสถานที่ | ลดผลจากเหตุที่กระทบสถานที่หลัก |
| Immutable / Offline | ป้องกันแก้ไข/ลบหรือแยกจากระบบออนไลน์ | มีประโยชน์ต่อ ransomware resilience |

**[เสริม]** หลัก 3-2-1 แบบที่พบทั่วไป: มีข้อมูล 3 สำเนา ใช้สื่อ 2 ประเภท และ 1 สำเนาอยู่นอกสถานที่. แนวทางจริงอาจเพิ่ม immutable/offline และการทดสอบ restore. **Backup success ≠ Restore success**; ต้องทดสอบกู้คืน.

# 7. Recovery Sites, Resilience และการทดสอบ

## 7.1 Hot, Warm, Cold Sites

**[จากสไลด์]** สไลด์ระบุ Hot/Warm/Cold sites เป็น alternate locations สำหรับ IT recovery; รายละเอียดตารางต่อไปนี้เป็น **[เสริม]**.

| Site | ความพร้อม | เวลา/ค่าใช้จ่ายโดยทั่วไป | เหมาะกับ |
|---|---|---|---|
| **Hot** | ระบบ/โครงสร้างพร้อมสูง ข้อมูลอาจซิงก์ตามการออกแบบ | กู้เร็วที่สุดในสามแบบ แต่แพง | ระบบสำคัญ RTO สั้น |
| **Warm** | มีโครงสร้างบางส่วน ต้อง config/restore เพิ่ม | ปานกลาง | งานที่ยอม downtime ได้บ้าง |
| **Cold** | พื้นที่/สิ่งอำนวยความสะดวกพื้นฐาน ต้องนำระบบมาติดตั้ง | ช้าที่สุด แต่ต้นทุนเตรียมพร้อมต่ำ | งานที่ยอม downtime ได้มาก |

> ความเร็ว/ราคาเป็นแนวโน้มทั่วไป ไม่ใช่ตัวเลขตายตัว; RTO จริงขึ้นกับการออกแบบ ทรัพยากร และผลทดสอบ.

## 7.2 Testing and Drills

**[จากสไลด์]** ต้องทดสอบ DR plan เป็นประจำเพื่อยืนยัน effectiveness.

**[เสริม]** รูปแบบที่พบบ่อย:

- **Tabletop exercise**: ผู้เกี่ยวข้องจำลองสถานการณ์และอภิปรายบทบาท/การตัดสินใจ
- **Walkthrough**: ตรวจขั้นตอน runbook ทีละส่วน
- **Simulation**: จำลองเหตุการณ์และการตอบสนองโดยไม่จำเป็นต้องสลับระบบจริง
- **Parallel test**: เปิดระบบกู้คืนคู่ขนานโดยไม่ตัดระบบหลัก
- **Full interruption / failover test**: ทดสอบสลับไประบบสำรองจริง มีความเสี่ยงปฏิบัติการสูงกว่า

**สิ่งที่ต้องเก็บหลังทดสอบ**: actual recovery time, actual recoverable data point, unmet dependencies, contact failures, corrective actions, owners, deadlines.

# 8. Objective 2.3 — Security Awareness, Culture, Leadership

## 8.1 Security Awareness

**[จากสไลด์]** ความเข้าใจเกี่ยวกับ cybersecurity risks, threats, policies และ appropriate security behaviors. พนักงานควรรู้ common threats, responsibilities, organizational policies, วิธีปกป้องข้อมูล/ระบบ และวิธี recognize/report suspicious activity.

**[เสริม]** Awareness ไม่ใช่การอบรมครั้งเดียวแล้วจบ; อาจมี onboarding, refresher, phishing simulations, role-specific training และ reporting channels. วัดได้จาก completion rate และพฤติกรรมที่เปลี่ยนจริง.

## 8.2 Security Culture

**[จากสไลด์]** สภาพแวดล้อมที่ถือว่า **security is a shared responsibility**. พนักงานควร take security seriously, follow policies, report suspicious activity, protect sensitive information, ask questions when unsure, accept security as daily responsibility.

**ตัวอย่างจากสไลด์**: ได้อีเมลน่าสงสัยแล้วรายงานทันทีแทนการกดลิงก์ → positive security culture.

**[เสริม]** แยก Awareness (รู้ว่าอะไรเสี่ยง) กับ Culture (องค์กรทำพฤติกรรมปลอดภัยเป็นปกติ). คนอาจรู้ว่าต้องรายงาน แต่ถ้ากลัวถูกตำหนิ ก็อาจไม่รายงาน; leadership จึงสำคัญ.

## 8.3 Security Leadership

**[จากสไลด์]** ผู้นำต้อง demonstrate commitment, provide resources, support awareness programs, encourage incident reporting, lead by example และ ensure responsibilities understood.

**ตัวอย่างจากสไลด์**: Management ปฏิบัติตาม policy และใช้ MFA เอง → พนักงานเห็นว่าสำคัญ.

**[เสริม]** ผู้นำควรสร้างช่องทางรายงานที่เข้าถึงง่าย กำหนดบทบาทชัดเจน และติดตามการปรับปรุง ไม่ใช่โยนความรับผิดชอบให้ทีม Security อย่างเดียว.

### Awareness vs Culture vs Leadership

| คำ | คำถามหลัก | ตัวอย่าง |
|---|---|---|
| Awareness | พนักงานรู้และเข้าใจไหม? | รู้วิธีสังเกต phishing |
| Culture | พนักงานปฏิบัติเป็นนิสัยไหม? | รายงาน phishing โดยไม่ลังเล |
| Leadership | ผู้บริหารทำให้เกิดพฤติกรรมนี้ไหม? | สนับสนุนการอบรมและใช้ MFA เป็นตัวอย่าง |

# 9. Social Engineering และ Password Protection

## 9.1 Social Engineering

**[จากสไลด์]** ใช้ **psychological manipulation or deception** เพื่อชักจูงคนให้ทำบางอย่างหรือเปิดเผยข้อมูล. ตัวกระตุ้น: **Trust, Fear, Urgency, Authority, Greed, Helpfulness**.

**ตัวอย่างจากสไลด์**: ผู้โจมตีแอบอ้างเป็น IT administrator ขอรหัสผ่านพนักงาน.

**[เสริม]** หลักป้องกัน: verify identity ผ่านช่องทางอิสระ, ไม่ส่ง password/OTP, ไม่กดลิงก์โดยไม่ตรวจ, report suspicious requests, least privilege, phishing-resistant MFA.

## 9.2 Common Social Engineering Techniques

| เทคนิค | ความหมายจากสไลด์ | Keyword ในโจทย์ | ตัวอย่าง |
|---|---|---|---|
| **Phishing** | Fraudulent messages หลอกให้คลิก/เปิด/เปิดเผย | Fraudulent message | อีเมลปลอมแจ้งบัญชีถูกล็อก |
| **Spear phishing** | Targeted phishing ต่อบุคคล/องค์กร | Targeted person | อีเมลระบุชื่อฝ่ายการเงิน |
| **Whaling** | Targeted attack ต่อ high-profile executive | CEO/CFO | หลอกผู้บริหารให้อนุมัติโอนเงิน |
| **Vishing** | ผ่าน voice/telephone | Phone call | โทรปลอมเป็น helpdesk |
| **Smishing** | ผ่าน SMS/text | SMS | SMS ปลอมจากบริษัทขนส่ง |
| **Pretexting** | Fabricated scenario | Fake story/identity | อ้างว่าเป็น auditor ขอข้อมูล |

**Exam traps**:

- Spear phishing = **ความเจาะจงของเป้าหมาย**, ไม่ได้กำหนดช่องทางเพียงอย่างเดียว
- Whaling = เน้น **บุคคลระดับสูง**; เป็นรูปแบบหนึ่งของ targeted social engineering/phishing
- Vishing = **เสียง/โทรศัพท์**, Smishing = **SMS**
- Pretexting = **สร้างเรื่องหรือบทบาทปลอม**; อาจถูกใช้ร่วมกับ phishing/vishing

## 9.3 เทคนิคเพิ่มเติม [เสริม ไม่ได้อยู่ในสไลด์ชุดที่เห็น]

- **Baiting**: ล่อด้วยสิ่งที่อยากได้ เช่น USB ที่ทิ้งไว้
- **Quid pro quo**: เสนอผลตอบแทน/ความช่วยเหลือแลกข้อมูลหรือการกระทำ
- **Tailgating**: ตามผู้มีสิทธิ์เข้าพื้นที่โดยไม่ได้รับอนุญาต
- **Shoulder surfing**: แอบดูหน้าจอ/รหัสผ่าน
- **Business Email Compromise (BEC)**: แอบอ้าง/ยึดช่องทางอีเมลธุรกิจเพื่อหลอกการชำระเงินหรือข้อมูล

## 9.4 Password Protection

**[จากสไลด์]** องค์กรควร establish authentication policies, protect stored credentials, implement appropriate access controls, monitor suspicious authentication activity, encourage phishing-resistant authentication where appropriate. สไลด์มีการเน้น **MFA**.

**[เสริม]**

- **Authentication** = พิสูจน์ว่าเป็นใคร; **Authorization** = กำหนดว่าทำอะไรได้
- **MFA** = ใช้ปัจจัยต่างประเภทอย่างน้อยสองประเภท เช่น password + security key; การใช้ password สองชุดไม่ใช่ MFA
- ปัจจัย: **Something you know** (password), **have** (hardware key), **are** (biometric)
- **Phishing-resistant MFA**: เช่น FIDO2/WebAuthn passkeys/security keys ที่ผูกการพิสูจน์กับ origin ของบริการ; OTP ผ่าน SMS/app อาจถูก phishing ได้
- Password storage: ใช้ salted adaptive password hashing ที่เหมาะสม; **ไม่เก็บ plaintext**
- ป้องกัน account takeover: rate limiting, anomaly detection, least privilege, revoke compromised credentials
- ผู้ใช้: ใช้ password manager, รหัสผ่านไม่ซ้ำ, ไม่แชร์ credentials, ตรวจ domain ก่อน login

**Exam trap**: MFA ลดความเสี่ยง credential compromise แต่ไม่ใช่การป้องกัน social engineering ได้ทั้งหมด และไม่ทดแทน access controls/monitoring.

# 10. Objective 2.4 — Measuring Cybersecurity Effectiveness

## 10.1 ทำไมต้องวัด

**[จากสไลด์]** Cybersecurity programs ต้อง **measured and monitored** เพื่อดูว่า security objectives บรรลุหรือไม่. ช่วย determine control effectiveness, identify gaps, track performance over time, risk-based decisions, demonstrate compliance, communicate status to management, identify improvements.

**[เสริม]** วงจร: Set objective → Choose metric → Collect consistent data → Compare baseline/target → Investigate deviations → Correct → Measure again. ถ้าไม่มี objective/definition ชัด ตัวเลขอาจดูดีแต่ไม่ได้ลดความเสี่ยงจริง.

# 11. Metrics, KPI, KRI, Dashboard, Scorecard, Report

## 11.1 Security Metric

**[จากสไลด์]** *Measurable value used to evaluate performance or effectiveness of cybersecurity activity, process, or control.* ตัวอย่าง: number of incidents, number of vulnerabilities, % systems patched, MTTD, MTTR. Metric ที่ดีต้อง relevant, measurable, consistent, meaningful to intended audience.

**ตัวอย่างการคำนวณ [เสริม]**: patch compliance = patched systems meeting requirement / in-scope systems × 100. หาก 91 จาก 100 ระบบผ่านเกณฑ์ → 91%. ต้องนิยาม scope และ cut-off date ให้ตรงกันก่อนเทียบเดือนต่อเดือน.

## 11.2 MTTD / MTTR

**[จากสไลด์]**

- **MTTD (Mean Time to Detect)**: เวลาเฉลี่ยในการตรวจพบ incident
- **MTTR (Mean Time to Respond)**: ตามคำอธิบายสไลด์ คือเวลาเฉลี่ยในการตอบสนองต่อ security incident

**[เสริม]** ตัวอย่าง MTTD: incident 3 เหตุการณ์ใช้เวลาตรวจพบ 10, 20, 30 นาที → MTTD = (10+20+30)/3 = **20 นาที**. MTTR ในวงการมีการใช้คำย่อเดียวกันแทน *mean time to respond / remediate / recover / repair* ตามบริบท; **ข้อสอบชุดสไลด์นี้ให้ยึด “respond” ตามคำจำในบทเรียน** และตรวจนิยาม metric ในโจทย์ทุกครั้ง.

## 11.3 KPI — Key Performance Indicator

**[จากสไลด์]** วัด **progress toward a specific performance objective**. ตัวอย่าง % critical vulnerabilities patched within 15 days.

**[เสริม]** KPI ที่ดีต้องมี numerator/denominator, target, timeframe, owner. ตัวอย่าง: Target ≥95% patched within 15 days; Actual 91% → ต่ำกว่าเป้าหมาย 4 percentage points.

## 11.4 KRI — Key Risk Indicator

**[จากสไลด์]** metric ที่ให้ **early indication of increasing/decreasing risk**. ตัวอย่าง: critical unpatched vulnerabilities, privileged accounts without MFA, failed controls, increase in phishing reports, unsupported systems, % critical systems without tested backups.

**[เสริม]** ต้องระวัง interpretation: จำนวน phishing reports ที่เพิ่มขึ้นอาจเกิดจากการโจมตีเพิ่ม **หรือ** พนักงานรายงานดีขึ้น จึงต้องดูบริบทและ metrics อื่นประกอบ. KRI อาจตั้ง threshold เช่น critical unpatched assets >10 ต้อง escalate.

### KPI vs KRI

| KPI | KRI |
|---|---|
| วัดความสำเร็จตาม objective | เตือนการเปลี่ยนแปลงความเสี่ยง |
| % patch completed on time | จำนวน critical vulnerabilities ค้าง |
| % training completed | % privileged accounts without MFA |
| คำจำ: **Performance** | คำจำ: **Risk** |

**Exam trap**: Metric เดียวกันอาจใช้ทั้ง KPI หรือ KRI ได้ตาม **วัตถุประสงค์และวิธีตีความ**; อย่าตัดสินจากชื่อตัวเลขเพียงอย่างเดียว.

## 11.5 Security Dashboard

**[จากสไลด์]** **Visual representation** of cybersecurity information/metrics; อาจแสดง current status, incidents, vulnerability levels, patch compliance, risk trends ผ่าน charts, graphs, tables, trend indicators.

**[เสริม]** Dashboard เหมาะกับการดูภาพรวมเร็วและติดตามแนวโน้ม แต่ต้องมีคำอธิบาย context เมื่อ metric ผิดปกติ.

## 11.6 Security Scorecard

**[จากสไลด์]** สรุป **performance against predefined objectives/targets**. ช่วย compare actual vs target, track progress, identify concerns, communicate to management, support accountability.

**ตัวอย่างจากสไลด์**:

| Area | Target | Actual | Status |
|---|---:|---:|---|
| Patch Compliance | 95% | 91% | Needs Improvement |
| MFA Adoption | 100% | 97% | Needs Improvement |
| Training Completion | 95% | 98% | On Target |
| Critical Vulnerabilities | <10 | 12 | Needs Attention |

**อ่านให้ถูก**: สำหรับ patch/MFA/training ค่ายิ่งสูงมักยิ่งดี; สำหรับจำนวน critical vulnerabilities ค่ายิ่งต่ำมักยิ่งดี. ดังนั้นอย่าใช้เกณฑ์ “Actual มากกว่า Target = ดี” กับทุก metric.

## 11.7 Cybersecurity Report

**[จากสไลด์]** ให้ **detailed information** เกี่ยวกับ cybersecurity activities, risks, performance หรือ compliance. อาจมี incidents, vulnerability status, risk trends, compliance findings, control effectiveness, security metrics, recommended actions.

**[เสริม]** ตัวอย่างเนื้อหา report: executive summary, reporting period, evidence, issue analysis, root cause, business impact, corrective actions, owner, due date. เหมาะกับการสื่อสารรายละเอียดเพื่อให้ management ตัดสินใจ.

### Dashboard vs Scorecard vs Report

| เครื่องมือ | คำจำจากสไลด์ | คำถามที่ตอบ |
|---|---|---|
| Dashboard | **Visualize** | ตอนนี้ภาพรวมเป็นอย่างไร? |
| Scorecard | **Compare against targets** | บรรลุเป้าหมายไหม? |
| Report | **Communicate** | เกิดอะไรขึ้น เพราะอะไร และควรทำอะไร? |

### Exam Memory Aid [จากสไลด์]

```text
Metric    → Measure
KPI       → Performance
KRI       → Risk
Dashboard → Visualize
Scorecard → Compare against targets
Report    → Communicate
```

# 12. Integrated Case Study

## กรณี: Ransomware ต่อระบบรับคำสั่งซื้อ

**สถานการณ์สมมติ [เสริมโดยใช้แนวคิดจากทุกสไลด์]**: บริษัท e-commerce มีระบบสั่งซื้อสำคัญ พนักงานได้รับอีเมลปลอมและเปิดไฟล์แนบ ทำให้ ransomware แพร่สู่เซิร์ฟเวอร์. บริษัทตั้ง RTO = 2 ชั่วโมง และ RPO = 15 นาที.

1. **Governance**: Management กำหนดว่า order processing เป็น critical business service และแต่งตั้ง owner.
2. **Risk**: บันทึก ransomware ใน Risk Register; ประเมิน likelihood/impact และเลือก mitigation.
3. **Compliance**: ตรวจหน้าที่แจ้งเหตุ/คุ้มครองข้อมูลตามข้อกำหนดที่ใช้จริง.
4. **Controls**: MFA, EDR, network segmentation, tested backups, patching.
5. **Awareness**: ฝึกพนักงานตรวจ phishing และ report suspicious email.
6. **BCP**: จัดช่องทางรับคำสั่งซื้อสำรองหรือกระบวนการ manual ที่อนุมัติ.
7. **DRP**: กู้ server/database/network ตามลำดับและทดสอบ integrity.
8. **RPO**: backup ล่าสุด 10:45, incident 11:00 → สูญข้อมูลย้อนหลัง 15 นาที ตรงเป้า.
9. **RTO**: กลับมา 13:30 หลัง incident 11:00 → downtime 2 ชั่วโมง 30 นาที **เกิน RTO 2 ชั่วโมง**.
10. **KPI**: % DR tests ที่กู้ภายใน RTO; % systems patched within SLA.
11. **KRI**: จำนวน critical assets ที่ไม่มี tested backups; unpatched vulnerabilities.
12. **Dashboard**: แสดง incident status และ risk trends.
13. **Scorecard**: RTO target 120 นาที vs actual 150 นาที → missed target.
14. **Report**: สรุปเหตุ ผลกระทบ gap และ corrective actions.

**คำถามวิเคราะห์**: ทำไม RPO ผ่านแต่ RTO ไม่ผ่าน? เพราะ “ความใหม่ของข้อมูลกู้คืน” และ “เวลาที่บริการกลับมา” เป็นเป้าหมายต่างกัน.

# 13. Exam Traps และคำศัพท์

## 13.1 จุดสับสนที่ต้องแยก

| ถ้าโจทย์เน้น… | ให้คิดถึง… | ไม่ใช่… |
|---|---|---|
| Direction / Oversight | Governance | การกู้เซิร์ฟเวอร์ |
| Laws / Regulations | Compliance | Risk scoring |
| Documented list of risks | Risk Register | Firewall |
| Information Security Management System | ISO/IEC 27001 | COBIT |
| Enterprise IT governance | COBIT | ISO/IEC 27001 |
| Manage/reduce cyber risk framework | NIST CSF | DR site |
| Continue critical business operations | BC/BCP | DR เพียงอย่างเดียว |
| Restore IT systems/data | DR/DRP | Security awareness |
| Maximum downtime | RTO | RPO |
| Maximum data loss in time | RPO | RTO |
| Executive targeted | Whaling | Generic phishing |
| Phone/voice | Vishing | Smishing |
| SMS | Smishing | Vishing |
| Fabricated story | Pretexting | Patch management |
| Progress toward target | KPI | KRI |
| Early risk warning | KRI | KPI |
| Visual representation | Dashboard | Detailed report |
| Actual vs target | Scorecard | Risk register |
| Detailed communication | Report | Dashboard only |

## 13.2 Glossary

- **Accountability** — ความรับผิดชอบต่อผลลัพธ์
- **Asset** — ทรัพย์สิน/สิ่งมีคุณค่า
- **Audit** — การตรวจประเมินหลักฐานและการปฏิบัติตามเกณฑ์
- **BC** — Business Continuity
- **BCP** — Business Continuity Plan
- **BIA** — Business Impact Analysis
- **Compliance** — การปฏิบัติตามข้อกำหนด
- **Control** — มาตรการควบคุม
- **COBIT** — กรอบ governance/management ของ enterprise IT
- **DR** — Disaster Recovery
- **DRP** — Disaster Recovery Plan
- **EDR** — Endpoint Detection and Response
- **GRC** — Governance, Risk and Compliance
- **ISMS** — Information Security Management System
- **KPI** — Key Performance Indicator
- **KRI** — Key Risk Indicator
- **Likelihood** — ความเป็นไปได้
- **MFA** — Multi-Factor Authentication
- **MTTD** — Mean Time to Detect
- **MTTR** — Mean Time to Respond (ตามสไลด์ชุดนี้)
- **Residual Risk** — ความเสี่ยงที่เหลือหลังใช้ controls
- **Risk Owner** — ผู้รับผิดชอบติดตาม/ตัดสินใจเกี่ยวกับความเสี่ยง
- **RPO** — Recovery Point Objective
- **RTO** — Recovery Time Objective
- **Security Culture** — วัฒนธรรมความปลอดภัยร่วมกัน
- **Spear Phishing** — Phishing แบบเจาะจงเป้าหมาย
- **Whaling** — การโจมตีเจาะผู้บริหาร/บุคคลสำคัญ

# 14. แบบฝึกหัดพร้อมเฉลย

> ข้อสอบจำลองเพื่อฝึกแนวคิด ไม่ใช่ข้อสอบจริง

### Q1
An organization needs a framework for governance and management of enterprise IT. Which is MOST appropriate?
A. COBIT  B. RPO  C. Risk Register  D. Smishing

### Q2
Which document records likelihood, impact, owner, treatment and residual risk?
A. Dashboard  B. Risk Register  C. BCP  D. Scorecard

### Q3
A company must continue customer support from an alternate location during a flood. Which concept BEST fits?
A. DR  B. BC  C. KRI  D. Whaling

### Q4
A recovery target permits 20 minutes of data loss. This is the:
A. RTO  B. MTTD  C. RPO  D. MTTR

### Q5
A system must be operational within 90 minutes after disruption. This is the:
A. RTO  B. RPO  C. KRI  D. BIA

### Q6
An attacker calls an employee pretending to be technical support. Which technique?
A. Smishing  B. Vishing  C. Whaling  D. Dashboard

### Q7
An attacker sends a customized phishing message to a particular payroll officer. Which technique?
A. Spear phishing  B. Generic phishing  C. Tailgating  D. Cold site

### Q8
A management view compares patch compliance target 95% with actual 91%. Which artifact BEST fits?
A. Report  B. Scorecard  C. Risk Register  D. BCP

### Q9
The number of privileged accounts without MFA is tracked as an early warning of increased risk. This is a:
A. KPI  B. KRI  C. DRP  D. BIA

### Q10
A management team needs a visual overview of incidents and vulnerability trends. Choose:
A. Dashboard  B. Procedure  C. Cold site  D. Residual risk

### Q11
A report explains incidents, risk trends, compliance findings and corrective actions. Its primary role is:
A. Compare targets  B. Communicate details  C. Replace backups  D. Authenticate users

### Q12
Which standard is associated with ISMS requirements?
A. COBIT  B. ISO/IEC 27001  C. RTO  D. PCI DSS

### Q13
A critical system has a backup from 09:40; incident at 10:00; service restored 11:30. Actual data gap and downtime are:
A. 20 min, 90 min  B. 90 min, 20 min  C. 20 min, 20 min  D. 90 min, 90 min

### Q14
Employees know phishing signs but fear punishment for reporting mistakes. Which broader issue is MOST relevant?
A. Security culture  B. RPO  C. Cold site  D. Incremental backup

### Q15
Which choice MOST directly reduces the chance that a single network-link failure disconnects a site?
A. Redundant network links  B. Security report  C. Risk register only  D. Annual policy review only

### Q16
Which statement is MOST accurate?
A. Backup always guarantees zero downtime
B. DR covers every people/supplier issue in BC
C. DR is a technology-focused component supporting BC
D. RPO means maximum downtime

### Q17
Which indicator is most clearly a performance measure against a defined objective?
A. % critical vulnerabilities patched within 15 days
B. Number of unsupported servers as early risk warning
C. Number of privileged accounts without MFA as early risk warning
D. Increase in risk exposure

### Q18
Which is the BEST reason to test a DRP regularly?
A. Prove written steps will work in practice and identify gaps
B. Eliminate all future risks
C. Remove need for a BCP
D. Guarantee zero data loss

### Q19
An attacker invents an audit scenario to obtain confidential information. What is the clearest technique?
A. Pretexting  B. Dashboard  C. Differential backup  D. RTO

### Q20
What does residual risk mean?
A. Risk before controls
B. Risk remaining after controls
C. A backup stored off-site
D. A compliance dashboard

## เฉลยพร้อมเหตุผล

| ข้อ | ตอบ | เหตุผล |
|---|---|---|
| 1 | A | COBIT เน้น enterprise IT governance/management |
| 2 | B | Risk Register บันทึกและติดตามความเสี่ยง |
| 3 | B | BC เน้นการดำเนินธุรกิจต่อ แม้เปลี่ยนสถานที่ |
| 4 | C | RPO วัด data loss tolerance เป็นเวลา |
| 5 | A | RTO วัด acceptable downtime |
| 6 | B | Vishing ใช้ voice/phone |
| 7 | A | Spear phishing เจาะจงเป้าหมาย |
| 8 | B | Scorecard เทียบ actual กับ target |
| 9 | B | KRI เป็น early risk warning |
| 10 | A | Dashboard เน้น visualization |
| 11 | B | Report เน้น detailed communication |
| 12 | B | ISO 27001 ว่าด้วย ISMS requirements |
| 13 | A | 10:00−09:40 = 20 นาที; 11:30−10:00 = 90 นาที |
| 14 | A | Culture เกี่ยวกับพฤติกรรมและบรรยากาศการรายงาน |
| 15 | A | Redundancy ลด single point of failure |
| 16 | C | DR เน้น IT เป็นส่วนหนึ่งของ BC |
| 17 | A | วัด progress ต่อ objective ที่กำหนด |
| 18 | A | Testing ตรวจว่ากู้ได้จริงและพบ gaps |
| 19 | A | Pretexting คือ fabricated scenario |
| 20 | B | Residual risk คือความเสี่ยงคงเหลือ |

# 15. One-page Memory Sheet และ Checklist

## 15.1 จำก่อนสอบ

```text
GRC = Governance (Direction/Oversight/Accountability)
    + Risk (Identify/Manage)
    + Compliance (Requirements)

NIST CSF    = Cybersecurity Risk Framework
ISO 27001   = ISMS Requirements
COBIT       = Enterprise IT Governance
Risk Register = Documented Risks + Owner + Treatment + Status

BC = Keep Business Running
BCP = Business Continuity Plan
DR = Restore IT Systems/Data
DRP = Disaster Recovery Plan
BIA = Critical Functions + Business Impact + Priorities
RTO = Maximum Downtime
RPO = Maximum Data Loss (in time)
Hot / Warm / Cold = Ready Fast / Partial / Basic

Awareness = Understand Security
Culture = Shared Responsibility + Daily Behavior
Leadership = Resources + Lead by Example
Phishing = Fraudulent Messages
Spear = Targeted
Whaling = Executive
Vishing = Voice
Smishing = SMS
Pretexting = Fabricated Story
MFA = Multiple Factor Types

Metric = Measure
KPI = Performance
KRI = Risk
Dashboard = Visualize
Scorecard = Compare Actual vs Target
Report = Communicate Details
```

## 15.2 Checklist ความพร้อม

- [ ] อธิบาย Governance, Risk, Compliance โดยไม่สับสน
- [ ] แยก NIST CSF / ISO 27001 / COBIT ได้
- [ ] อธิบายแต่ละช่องของ Risk Register และ ransomware case ได้
- [ ] แยก BC, BCP, DR, DRP และ BIA ได้
- [ ] คำนวณ actual RTO/RPO จาก timeline ได้
- [ ] เปรียบเทียบ Hot/Warm/Cold และความหมาย Redundancy ได้
- [ ] อธิบาย Awareness/Culture/Leadership ด้วยตัวอย่างได้
- [ ] แยก phishing, spear phishing, whaling, vishing, smishing, pretexting ได้
- [ ] อธิบาย Password Protection และ MFA ได้
- [ ] แยก Metric, KPI, KRI ได้
- [ ] แยก Dashboard, Scorecard, Report ได้
- [ ] ทำข้อสอบจำลอง 20 ข้อพร้อมอธิบายเหตุผลได้

---

## ข้อจำกัดและแหล่งอ้างอิง

1. **สไลด์ Domain 2 ที่ผู้เรียนส่งในบทสนทนา**: เป็นฐานสำหรับหัวข้อที่ระบุ `[จากสไลด์]` และตัวอย่างในชั้นเรียน; ไม่มีการสมมติว่ามีสไลด์อื่นที่ไม่ได้เห็น.
2. **ISC2, “Inside the Updated ISC2 Certified in Cybersecurity Exam,” 6 Aug 2026**: ไฟล์ที่ผู้เรียนแนบ `What’s New for Entry-Level Cybersecurity.pdf`, หน้า 2–3 ของเอกสาร PDF; ยืนยัน Domain 2 ชื่อ Security Governance, 17.3%, และแนวโน้ม GRC/culture/metrics. https://www.isc2.org/Insights/2026/08/inside-the-updated-isc2-cc-exam
3. **ความรู้ `[เสริม]`**: อธิบายเพื่อการเรียนรู้ทั่วไป เช่น NIST CSF functions, risk treatments, BIA, backup types, recovery site comparison, MFA, metric design. ไม่ใช่การอ้างอิงว่า ISC2 ระบุรายละเอียดเหล่านี้ทุกข้อในเอกสารแนบ.
4. เอกสารนี้เป็น **study guide** ไม่ใช่ exam outline ฉบับทางการหรือการรับรองว่าครบทุกหัวข้อใน blueprint. ควรตรวจ exam outline ที่ใช้ในวันสอบประกอบ.

**End of Domain 2 — Expanded Complete Study Notes**
