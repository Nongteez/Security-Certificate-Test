---
id: d1-phase2-terminology-glossary
domain_id: 1
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-18
source_reference: ISC2-CC-2026-SOURCE-20261018-01
---

# Domain 1 — Terminology Glossary

คำอธิบายไทยเป็น derived translation จาก training materials เพื่อช่วยเรียน ไม่ใช่ official ISC2 translation และยังต้อง bilingual human review คง English terms ที่ source ใช้; ไม่ขยายชื่อย่อ/รายละเอียดที่ไม่มีหลักฐาน

`K001`–`K043` เป็นคำย่อในเอกสารนี้ของ `KNOW-D1-001`–`KNOW-D1-043` ใน [knowledge map](knowledge-map.md) จึงเป็น vocabulary views ของ concepts เดิม ไม่ใช่ concept IDs ชุดใหม่ `[Snn]` ลิงก์ภาพจริง และ `[T] T@...` ระบุเวลาเริ่ม transcript block รายการที่ติด SQ อ้าง [quality report](source-quality-report.md) และยังไม่ใช่นิยามที่อนุมัติทางเทคนิค

## Security concepts, identity and privacy

| English term / source wording | คำอธิบายไทยตามบริบท | Related / commonly confused terms และข้อจำกัด | Canonical concept / evidence |
| --- | --- | --- | --- |
| CIA Triad | กลุ่มคุณสมบัติ Confidentiality, Integrity, Availability ที่ผู้สอนเรียก pillars | ไม่ใช่ AAA; เป็นกรอบคุณสมบัติที่ปกป้อง | K001; [S04] |
| Confidentiality | จำกัดการเข้าถึง sensitive data ให้ authorized people/systems/processes | ต่างจาก Integrity; source มี “altering” ที่ต้องพิจารณา overlap (SQ-13) | K002; [S05] |
| Integrity | ข้อมูล correct and unaltered ไม่ถูกแก้/ลบ/ทำเสียโดยไม่มีสิทธิ | ใน professional conduct คำเดียวกันมีบริบทพฤติกรรม; “unaltered” มาจากภาพ ไม่ใช่ transcript variant | K004; [S07], [S57] |
| Availability | ผู้ได้รับอนุญาตเข้าถึง systems/data/resources ได้เมื่อต้องการ | อย่าสับสนกับเพียงการมีสิทธิ หรือสรุปว่ามี backup แล้ว zero downtime | K006; [S10] |
| Authorized / Unauthorized | มี/ไม่มีสิทธิตามบริบทที่ source ระบุ | คำว่า access ปรากฏได้ทั้ง Confidentiality, Authentication และ Authorization ต้องดูหน้าที่ | K002/K009/K010; [S05], [S12] |
| Encryption | วิธีที่ source ยกเพื่อป้องกันผู้อื่นอ่าน emails/files หรือข้อมูล | ต่างจาก Data Masking/Hashing; ไม่ใช่คำตอบอัตโนมัติสำหรับทุกบริบท | K003; [S05], [S06]; [T] T@00:08:08 |
| Access Control | การจำกัดการเข้าถึง resources/systems ให้ผู้ที่กำหนด | เป็นตัวอย่างทั้ง Confidentiality และ control classification; ไม่เท่ากับ Authentication อย่างเดียว | K003/K039; [S06], [S55] |
| Password | credential และตัวอย่าง Something You Know | Password + PIN อยู่ category เดียวกันตาม transcript ไม่ใช่ independent-factor MFA | K009/K012; [S12], [S13]; [T] T@00:25:37 |
| Data Masking | การซ่อนบางส่วนของ sensitive information เช่นแสดงเพียง last four digits | อย่าแปลเป็น Encryption หรือการลบข้อมูลทั้งหมด | K003; [S06] |
| Two-Factor Authentication (2FA) | ตัวอย่างใช้ password กับ code ที่ส่งไป phone และเรียกการใช้สอง factors | ไม่ใช้จำนวนช่อง login เป็นตัวนับ independent categories | K003/K012; [S06]; [T] T@00:24:20 |
| Non-Disclosure Agreement (NDA) | ข้อตกลงไม่เปิดเผย confidential information ตาม source | ไม่ใช่ Non-repudiation; ไม่มีการขยาย legal enforceability นอก source | K003; [S06]; [T] T@00:11:10 |
| Tampering | การแก้ข้อมูลที่ไม่พึงประสงค์/ไม่มีสิทธิตามบริบท Integrity | เกี่ยวกับ modified/deleted/corrupted; ต่างจากเพียงอ่านข้อมูล | K004; [S07] |
| Checksum / Hashing | เทคนิคที่ source ยกเพื่อเปรียบเทียบข้อมูลว่าถูกเปลี่ยนหรือไม่ | Source กล่าว MD5/SHA แต่ไม่ได้สอนรายละเอียดความต่างหรือ suitability; ไม่เหมารวมกับ Digital Signature (SQ-15) | K005; [S07], [S08], [S09]; [T] T@00:13:16 |
| Digital Signature | source ใช้ในตัวอย่าง verify email/data ไม่ถูกแก้หลังส่ง | ไม่มีบทเรียน Non-repudiation ชัดพอให้ขยายประโยชน์นั้นเอง | K005; [S07], [S09] |
| Downtime | ช่วงที่บริการไม่พร้อมใช้งานในบริบท hardware failure, cyberattack, maintenance | Source มุ่ง minimize disruption ไม่ได้ระบุค่ารับประกัน | K006; [S10]; [T] T@00:14:40 |
| Backup / Recovery / Restore | กลุ่มการสำรอง/กู้คืนที่ source ยกทั้ง Availability และ control functions | Backup คำเดียวอยู่ได้ทั้ง Compensating/Corrective; implementation assumptions ยัง SQ-14 | K007/K037/K039; [S10], [S54], [S56] |
| Redundancy | การมี resources/connection หลายชุดตามตัวอย่าง firewall/server/ISP | ไม่ใช่คำรับรองว่า failover สำเร็จทันทีทุกแบบ | K007; [S10], [S11]; [T] T@00:15:23 |
| Failover | การเปลี่ยนไป resources ที่เหลือเมื่อส่วนหนึ่งล่มตามคำอธิบายผู้สอน | แยกจากเพียงมี Backup; source ไม่มี recovery-time specification | K007; [S10]; [T] T@00:15:23 |
| Load Balancer | ตัวอย่างกระจาย traffic ไปหลาย web servers และไม่ส่งไป server ที่ล่ม | ไม่ใช่คำจำกัดความ Availability เอง | K007; [S11]; [T] T@00:16:01 |
| Uninterruptible Power Supplies (UPS) | อุปกรณ์จ่ายไฟต่อเนื่องที่ source ยกให้ระบบทำงานขณะไฟดับ | ไม่ใช่กลไกสำรองข้อมูล | K007; [S11] |
| Redundant Internet Connections / ISPs | ตัวอย่างใช้ Internet service providers หลายรายให้ดำเนินงานต่อเมื่อ connection หนึ่งล้มเหลว | มีตัวอย่างการใช้งาน ไม่ได้สอน network configuration | K007; [S11]; [T] T@00:17:26 |
| Disaster Recovery Sites | source ยก secondary data centers ที่ take over เมื่อ primary offline | ไม่สอน site types หรือ recovery times; ห้ามเติมเอง | K007; [S11] |
| AAA | Authentication, Authorization, Accounting เป็นสามหน้าที่พื้นฐานร่วมกัน | ไม่ใช่ชื่ออีกแบบของ CIA | K008; [S12] |
| Authentication | ตรวจยืนยัน identity ของ user/device/system ผ่าน credentials | “who/identity” กับ “permission” เป็นคนละประเด็น | K009; [S12]; [T] T@00:18:08 |
| Authorization | กำหนด/ให้ permission เพื่อเข้าถึง resources หรือทำ actions | Source บอก usually หลัง Authentication ไม่ใช่ always | K010; [S12]; [T] T@00:19:38 |
| Accounting / Auditing | source ใช้หมายถึง tracking/recording user activity | ไม่ขยายว่า Accounting = Auditing ในทุกบริบท; ไม่ใช่ความหมายเดียวกับ governance accountability | K011; [S12] |
| Credentials | สิ่งที่ source ยกเพื่อ validate identity เช่น password, fingerprint, token | จำนวน credentials ไม่จำเป็นต้องเท่าจำนวน factor categories | K009/K012; [S12], [S13] |
| Multifactor Authentication (MFA) | ใช้อย่างน้อยสอง independent factors ตาม source | เทียบ 2FA, Knowledge/Possession/Inherence/Location; SQ-06 ยังเปิด | K012; [S13], [S14]; [T] T@00:25:37 |
| Something You Know / Knowledge Factor | ข้อมูลที่ผู้ใช้รู้ เช่น password, PIN, security questions | Password กับ PIN อยู่กลุ่มเดียวกัน; ไม่แปล know ว่าของที่ครอบครอง | K012; [S13] |
| Something You Have / Possession Factor | สิ่งที่อยู่ในความครอบครอง เช่น smartphone, smart card, token | ข้ออ้างว่าต้อง physical theft จึง compromise เป็น source claim ที่ต้องตรวจ | K012; [S13] |
| Something You Are / Inherence Factor | biological characteristics เช่น fingerprint, facial features, iris patterns | คำยกตัวอย่างไม่แปลว่า forge ไม่ได้; “biometrics vs iris” ใน transcript กำกวม | K012; [S13]; [T] T@00:26:16 |
| Somewhere You Are / Location Factor | geographic/network location เช่น IP address, GPS, Wi-Fi ตามวัสดุ | คง label ของ source; ยังไม่รับรอง independent authentication factor status (SQ-06) | K012; [S14] |
| Privacy | ปกป้อง personal information และกำกับ collection/storage/use ตาม laws/policies | มีบริบท individual rights/retention; ไม่ยุบให้เป็น Confidentiality คำเดียว | K013; [S15], [S16] |
| Personal Information | ข้อมูลที่ source ยกว่าสามารถระบุตัวบุคคล เช่น social security number, home address, picture | ไม่เพิ่ม legal definition หรือ acronym ที่ source ไม่สอน | K013; [T] T@00:27:36 |
| Data Subject | บุคคลที่ข้อมูลส่วนบุคคลของตนถูกเก็บ/ประมวลผล | ต่างจาก Controller/Processor ที่ทำหน้าที่จัดการข้อมูล | K014; [S17] |
| Controller | กำหนด purpose และ means ของ processing personal data | ไม่ใช่ชื่ออีกแบบของ Processor หรือ Data Subject | K014; [S17] |
| Processor | ประมวลผลข้อมูลแทน Controller เช่น provider ที่ host ข้อมูลร้านค้า | ชื่อบริษัทไม่กำหนดบทบาทตายตัว; ขึ้นกับตัวอย่างบริการ | K014; [S17]; [T] T@00:29:06 |
| Ownership | authority/responsibility ต่อ data security/compliance ตาม source | Source ยังบอกต้อง respect data subjects' rights ไม่ใช่สิทธิเหนือข้อมูลทุกอย่าง | K015; [S18] |
| Data Inventory | รายการ data assets รวม location และ type | ต่างจาก Retention ซึ่งพูดเวลาเก็บ/ลบ | K015; [S18] |
| Retention | นโยบายเก็บข้อมูลนานเท่าใดและเมื่อใดลบ | Seven-year tax example ไม่ใช่ข้อกำหนดทั่วไปที่ยืนยันแล้ว (SQ-11) | K015; [S18] |
| Right to Be Forgotten | แนวคิดคำขอ removal ของ personal/account information ที่ source ยก | เงื่อนไข necessary/legally required ใน S19 กำกวม ไม่ตีความว่าลบได้เสมอ | K016; [S19]; [T] T@00:31:18 |
| GDPR | source ยกเป็นเรื่อง personal data/privacy within its scope | ไม่มีการรับรอง current legal scope จากเอกสารนี้; ไม่เติม expansion/ข้อยกเว้นนอก source | K016/K028; [S19], [S37] |
| HIPAA | ชื่อจาก slide ที่ยกเรื่อง certain health information ใน US | Transcript เขียน “HIPPA”; ใช้ HIPAA เพราะปรากฏใน S37 โดยเปิดเผย (SQ-03) | K028; [S37]; [T] T@00:48:26 |
| PCI DSS | source ระบุ security requirements สำหรับ payment-card data | ไม่สรุปว่าเป็น government law เพียงเพราะวางในหน้า Laws/Regulations | K028; [S34], [S35], [S37] |

## Risk management

| English term / source wording | คำอธิบายไทยตามบริบท | Related / commonly confused terms และข้อจำกัด | Canonical concept / evidence |
| --- | --- | --- | --- |
| Risk Management | กระบวนการ identify/assess/respond/monitor ความเสี่ยงต่อ assets/operations/objectives อย่างต่อเนื่อง | ไม่จบหลัง implement controls; ครอบคลุม people/physical office ในตัวอย่าง | K017; [S20]; [T] T@00:32:51 |
| Risk Identification | ค้นหาและบันทึก potential risks | ต่างจาก Assessment ที่ประเมิน likelihood/impact | K018; [S21], [S22] |
| Asset | สิ่งที่ต้องป้องกัน เช่น customer database, people, physical office | ไม่ใช่ Threat หรือ Vulnerability | K018; [S21], [S22]; [T] T@00:32:51 |
| Threat | สิ่งที่อาจทำอันตราย; source ยก ransomware | ไม่ใช่ตัว weakness ของ asset | K018; [S21], [S22] |
| Vulnerability | weakness ที่ exploit ได้; source ยก Unpatched Server | Slide “Unpatched” ต่างจาก transcript “unpaged”; ไม่ normalize ต้นฉบับ | K018; [S21], [S22]; [T] T@00:34:18 |
| Potential Impact | สิ่งที่อาจเกิดขึ้นเมื่อ risk เกิด; source ยก data breach | ไม่ใช่ Likelihood หรือจำนวนครั้งต่อปี | K018/K019; [S21], [S22] |
| Likelihood | ความเป็นไปได้ของ risk ตามบริบท assessment/treatment | ไม่ใช่ financial loss หรือ EF; source ไม่ให้สูตร probability แยก | K019/K024; [S28]; [T] T@00:35:02 |
| Risk Assessment and Analysis | ประเมิน likelihood และ potential impact หลัง identification | ไม่ใช่การเลือก response เพียงอย่างเดียว | K019; [T] T@00:35:02 |
| Qualitative Risk Analysis | ใช้คำ/ระดับ Low, Medium, High และ expert judgment/brainstorming/ranking | ไม่มี dedicated comparison capture; ต่างจากการใช้ monetary metrics | K019; [T] T@00:35:02, T@00:35:44 |
| Quantitative Risk Analysis | ใช้ numerical values/metrics เพื่อคำนวณ potential loss | ไม่แปลว่าตัวเลข estimate เป็นสิ่งแน่นอน; source ให้ EF/SLE/ARO/ALE | K019; [T] T@00:35:44, T@00:36:30; [S23], [S24] |
| Asset Value (AV) | ค่า asset ที่ใช้เป็น input ใน SLE formula ของ source | Source ไม่มีวิธี valuation ละเอียด | K020; [S23] |
| Exposure Factor (EF) | percentage ของ asset value ที่เสียหายจาก risk event | ไม่ใช่โอกาสเกิดเหตุ; flood 70% เป็นตัวอย่าง | K020; [S23] |
| Single Loss Expectancy (SLE) | expected financial loss ต่อหนึ่งเหตุการณ์; SLE = AV × EF | ไม่ใช่ expected annual loss; สูตรเลือกตาม slide อย่างเปิดเผย | K021; [S23] |
| Annualized Rate of Occurrence (ARO) | estimated occurrences ต่อปี | ไม่ใช่จำนวนเงิน; once every five years = 0.2 ใน S23 แต่ transcript พิมพ์ 2 (SQ-04) | K022; [S23]; [T] T@00:38:53 |
| Annualized Loss Expectancy (ALE) | projected annual financial loss; ALE = SLE × ARO | ไม่ใช่ Annualized Rate; transcript มีชื่อสลับ/คำ “analyzed loss” (SQ-04) | K023; [S24]; [T] T@00:39:45 |
| Risk Treatment / Response | ขั้นการตอบสนองหลัง identify/assess ตาม source | ไม่สับสนกับ Risk Reporting; สี่ options มีความต่าง | K024; [S25]–[S28] |
| Transfer | source ยก shifting risk ด้วย insurance/outsourcing/contracts | Scope ของ responsibility ยัง SQ-07; ไม่สรุปว่ารับผิดชอบไม่เหลือ | K024; [S25] |
| Accept | acknowledge/bear risk โดยไม่เพิ่ม action ตามคำอธิบาย source | ต้องอ่าน cost/tolerance; ไม่ใช่ไม่ทราบ risk หรือกฎ “low only” | K024; [S25], [S26] |
| Avoid | discontinue activity/process ที่สร้าง risk ตาม source | ต่างจากยังทำกิจกรรมต่อโดยเพิ่ม controls แบบ Mitigate | K024; [S27], [S28] |
| Mitigate | ใช้ controls ลด likelihood/impact ให้อยู่ acceptable level | ไม่ใช่ guarantee ว่า risk หมดไป | K024; [S28] |
| Tolerance / Acceptable Level | คำที่ source ใช้เป็นเงื่อนไขของ Accept/Mitigate | ไม่มีนิยาม Risk Appetite/Risk Tolerance framework เต็มให้เติม | K024; [S26], [S28] |
| Monitor and Review | ติดตาม existing risks/control effectiveness และประเมินใหม่เมื่อเงื่อนไขเปลี่ยน | ต่างจาก Communicate/Report แม้ทำร่วมกันได้ | K025; [S29] |
| Risk Communication / Reporting | บันทึกและสื่อสาร status/mitigation/impact ไป stakeholders | S30/S32 ซ้ำสาระ จึงรวม concept | K026; [S30], [S32] |
| Stakeholders | ผู้ที่ source ระบุว่าใช้ risk information เพื่อ informed decisions/resource prioritization | เป็น contextual role; source ไม่ให้รายการผู้มีส่วนได้เสียทั้งหมด | K026; [S30] |

## Governance and control classification

| English term / source wording | คำอธิบายไทยตามบริบท | Related / commonly confused terms และข้อจำกัด | Canonical concept / evidence |
| --- | --- | --- | --- |
| Governance | direction, control, accountability และ oversight ขององค์กร/โปรแกรม | ไม่ยุบเป็น day-to-day execution หรือ Accounting logs | K027; [S33] |
| Law / Regulation | legally enforceable requirements จาก government/regulatory authority ตาม source | ไม่ใช่ว่าทุกรายการในหน้าตัวอย่างเป็น artifact ชนิดเดียวกัน (SQ-12) | K028; [S34], [S37] |
| Compliance | บริบททำตาม applicable laws/regulations/policies ใน lecture | ต้องดู applicability ไม่สรุป current legal duties จากไฟล์นี้ | K028; [S33], [S37] |
| Framework | structured approach เพื่อจัดการ security/risk/program และ consistency | ต่างจาก detailed Procedure; ISO/IEC 27001 ใน example list มี taxonomy caveat | K029; [S38] |
| Guideline | recommended practices/advice ที่ source ว่า generally advisory/flexible | รักษาคำ generally; ไม่ใช่คำพ้องของ mandatory Standard | K030; [S39], [S46] |
| Policy | high-level management expectations, requirements, direction | คำถาม WHAT/management direction ใน source ต่างจาก HOW | K031; [S40], [S41], [S47] |
| Standard | specific mandatory requirements/technical specifications เพื่อ implement policy | Source ไม่ได้บอกว่าคำ Standard ทุกกรณีเป็นกฎหมาย | K032; [S41], [S43], [S47] |
| Procedure | detailed step-by-step instructions สำหรับ specific task | “optional” ใน transcript ยังไม่รับรอง (SQ-05) | K033; [S42], [S43]; [T] T@00:56:16 |
| ISO — International Organization for Standardization | องค์กรที่ slide ระบุว่าพัฒนา international standards | ไม่ใช่ชื่อ standard เดียวกับ ISO/IEC 27001 | K034; [S44] |
| ISO/IEC 27001 | source ระบุ international standard เพื่อ establish/implement/maintain/improve ISMS | ใช้ spelling จาก slide ไม่ใช่ “ISO 101” ใน transcript; ไม่เติม edition | K034; [S44] |
| Information Security Management System (ISMS) | การจัดการ information security ที่ source เชื่อม risk, controls, policies/processes, improvement และ management | ไม่ใช่อุปกรณ์ security ตัวเดียว | K034; [S44] |
| NIST Cybersecurity Framework (CSF) | ชื่อที่ source ยกเป็น framework example | `mention-only`: ไม่มี function taxonomy หรือ version ให้ขยาย | K029; [S38] |
| Center for Internet Security (CIS) | source ระบุ nonprofit organization ที่พัฒนา best practices/resources | ต่างจาก CIS Controls ซึ่งเป็น resource ที่ยกมา | K035; [S45] |
| CIS Controls | prioritized security safeguards ตาม source | ไม่เติม control count/catalog/version ที่ source ไม่ให้ | K035; [S45] |
| Security Control | คำรวมที่ source ใช้กับ mechanisms, activities, policies เพื่อปกป้อง/จัดการ risk | คำอธิบายรวมนี้เป็น editorial synthesis ของ definitions; Category กับ Type เป็นคนละมุม | K036/K037; [S50], [S53] |
| Technical | category ของ hardware/software mechanisms ที่ manage access/protect resources | ไม่ใช่ functional type Preventive โดยอัตโนมัติ | K036; [S50], [S51] |
| Managerial / Administrative | category ที่เน้น policies/procedures, planning/assessment | Source จัด training อยู่ทั้ง Managerial และ Operational; ไม่บังคับ label เดียว | K036; [S50], [S51] |
| Operational | category ของ day-to-day activities primarily executed by people | ต่างจาก Policy-based view แต่ examples อาจทับกัน | K036; [S50], [S51] |
| Physical | category ที่ปกป้อง facility และ real-world objects | กล้อง/guard อาจมีทั้ง Deterrent/Detective functions | K036/K039; [S50], [S51], [S55] |
| Deterrent | discourage violation | ต่างจาก Preventive ที่ stop activity; visibility/sign อาจเป็น clue ตาม source | K037; [S53], [S56] |
| Preventive | prevent/stop unwanted or unauthorized activity | ไม่ตัดสินจาก Firewall/Authentication คำเดียวโดยไม่ดู function | K037; [S53], [S56] |
| Detective | discover/detect unwanted or unauthorized activity | ไม่ใช่ Corrective ที่แก้หลัง incident ตาม source | K037; [S53] |
| Compensating | source บอก options to other existing controls เพื่อ aid enforcement; แปลโดยคงความกว้างไว้ | ไม่เติม compliance equivalence rules; Backup/Redundancy เป็น clues ใน S56 ไม่ใช่นิยามสมบูรณ์ | K037; [S53], [S56] |
| Corrective | fix vulnerabilities หรือ mitigate damage after incident ตาม source | Backup/Restore และ forensic analysis เป็น examples ที่ต้องอ่าน context/SQ-10 | K037; [S53], [S54] |
| Directive | guide behavior และ enforce compliance ตาม policies/procedures | Signage อาจเกี่ยวข้องทั้ง Directive และ Deterrent ไม่เลือกจากคำว่า sign คำเดียว | K037/K039; [S53], [S54], [S56] |
| Defense in Depth / Layered Defense | controls หลาย layers รอบ Assets ทำงานร่วมกันใน diagram | ไม่ใช่ deployment sequence ตายตัวหรือ category exclusivity | K038; [S52]; [T] T@00:59:47 |
| Overlapping Security Controls | control เดียวทำได้หลาย functions ตาม implementation/risk/context | ตัวอย่าง camera/ACL ไม่ถูกแปลงเป็น universal single classification | K039; [S55] |

## Professional conduct

| English term / source wording | คำอธิบายไทยตามบริบท | Related / commonly confused terms และข้อจำกัด | Canonical concept / evidence |
| --- | --- | --- | --- |
| Professional Code of Conduct | principles/expectations ต่อพฤติกรรมสมาชิกวิชาชีพ | ไม่ใช่นิยาม data Integrity; เชื่อม confidentiality/responsibility/respect/compliance | K040; [S57] |
| Due Care | reasonable steps เพื่อปกป้อง assets และ reduce risk ตาม circumstances | ไม่ย่อเป็นเพียง “ทำหลังเหตุ”; examples เป็น controls/patching/training | K041; [S58] |
| Due Diligence | investigate/evaluate/maintain risk awareness ก่อนและระหว่าง security activities | ไม่ย่อเป็น “ทำก่อนครั้งเดียว”; source รวม ongoing monitoring | K042; [S59] |
| ISC2 Code of Ethics / Canons | principles และรายการ canons สี่ข้อที่ course นำมาแสดง | ไม่ได้ยืนยัน interpretation ภายใน canon หรือ precedence ที่ผู้สอนอ้าง (SQ-09) | K043; [S60] |
| Principals | คำที่ slide ใช้ใน “service to principals”; คำแปลเชิงบริบทของผู้จัดทำคือผู้ที่วิชาชีพให้บริการ | ไม่ใช่ “principles” ที่แปลว่าหลักการ; transcript มี spelling ต่างกัน ยังไม่เพิ่มนิยามทางกฎหมาย | K043; [S60]; [T] T@01:08:41 |

## Mention-only vocabulary — ไม่ขยายเกินหลักฐาน

| คำที่พบ | อธิบายได้เพียงใดจากวัสดุ | Evidence |
| --- | --- | --- |
| AES, VPN | ผู้บรรยายยกประกอบ encryption at rest / network confidentiality ไม่ให้รายละเอียด algorithm/protocol | K003; [T] T@00:08:08 |
| MD5, SHA | ยกชื่อใน software-download verification ไม่ให้ version/suitability หรือความปลอดภัยครบถ้วน | K005; [S08], [S09] |
| DoS, DDoS | ผู้บรรยายยกเป็น attacks ที่กระทบ Availability; ไม่ขยาย attack mechanics | K006; [T] T@00:14:40 |
| Smart cards, biometrics, ACLs, firewalls, routers, IDS/IPS | รายชื่อ Technical examples; ACL ขยายเป็น Access Control List ใน source; IDS/IPS ไม่ถูกสอนรายละเอียดทุกส่วน | K036/K039; [S51], [S55] |
| Vendor management, hiring practices, background checks, data classification, security training, risk/vulnerability assessments | รายชื่อ Managerial examples ไม่ได้ให้ standalone definitions ทุก term | K036; [S51] |
| Change management, configuration management, media protection, awareness training | รายชื่อ Operational examples ไม่เพิ่ม lifecycle/ขั้นตอนเอง | K036; [S51] |
| Guards, mantraps, fences, lights, motion detectors, guard dogs, video cameras, alarms, laptop locks | รายชื่อ Physical examples; source ย้ำ laptop lock ในโลกกายภาพ ไม่ใช่ screen lock | K036; [S51]; [T] T@00:59:47 |
| Separation of duties, job rotation, penetration testing, mandatory vacations, audit trails, violation reports, honey pots, personnel supervision, work-task procedures, patching, forensic analysis, disciplinary action | รายชื่อใน control-type examples มี context-dependent/controversial placements จึงไม่แต่งนิยามหรือกำหนด type ถาวร | K037; [S54] |
| Physical signage, verbal instructions, contracts and agreements | ยกใน Directive examples แต่ชื่อสิ่งของอย่างเดียวไม่บอก function ทั้งหมด | K037/K039; [S54], [S56] |

## คำที่ยังไม่เพิ่มเป็นนิยาม

**Non-repudiation** อยู่ใน planning ของโครงการ แต่ไม่พบ explicit teaching ใน transcript/slide ที่อ่านได้ จึงระบุเป็น coverage gap ไม่ใช่ glossary entry ที่อ้างว่า extract ได้ ไม่เติม Risk Appetite, residual/inherent risk, detailed cryptography, AI security หรือ official exam-language patterns จากความจำ การไม่เพิ่มนิยามเหล่านี้ไม่ได้แปลว่าไม่เกี่ยวกับการสอบ แต่สะท้อนขอบเขตของ batch นี้เท่านั้น

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
