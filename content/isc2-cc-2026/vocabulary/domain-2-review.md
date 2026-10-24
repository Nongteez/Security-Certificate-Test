# ISC2 CC 2026 Domain 2 — Exam Vocabulary Academic Review

> **Domain:** Domain 2 — Security Governance (17.3% Exam Weight)  
> **Total Extracted & Curated Entries:** 101 entries  
> **Source Corpus:** Official ISC2 CC 2026 Outline, Domain 2 Lecture Slides (S01–S38), Transcripts, Phase 3.5 Revalidated Knowledge Baseline  
> **Prepared For:** Academic Reviewers, Bilingual Curriculum Developers, and Exam Candidates  
> **Date:** 2026-10-23  

---

## 1. Executive Summary & Category Breakdown

This document provides a comprehensive academic review of all **101 accepted vocabulary entries** for Domain 2 (Security Governance) of the ISC2 Certified in Cybersecurity (CC) 2026 exam.

| Category | Count | Description |
| :--- | :---: | :--- |
| **Core Terms** (`core_term`) | 64 | Foundational governance models, risk management processes, BC/DR architectures, and metric systems. |
| **Acronyms & Abbreviations** (`acronym`) | 14 | Standard governance acronyms (GRC, CSF, ISMS, BCP, DRP, BIA, RTO, RPO, MTTD, MTTR, KPI, KRI, CISO, etc.). |
| **Confusing Terms & Distinctions** (`confusing_term`) | 12 | Structured conceptual comparisons for high-stakes exam pairs (RTO vs RPO, BCP vs DRP, Risk Appetite vs Tolerance, KPI vs KRI, etc.). |
| **Exam Scenario Vocabulary** (`scenario_vocabulary`) | 5 | Key operational concepts, exercise types (tabletop, simulation, cutover), and failover procedures. |
| **Exam Question Language** (`exam_language`) | 6 | High-stakes qualifiers and decision rules (FIRST rule, BEST risk strategy, percentage-point difference, negative stems). |
| **Total Accepted Entries** | **101** | **100% verified and mapped to Domain 2 Exam Objectives.** |

---

## 2. Objective-by-Objective Vocabulary Review

### Objective 2.1: Understand the Security Governance Process (Governance, Risk Management, Compliance, GRC, Risk Register, Risk Treatments) (34 entries)

#### `VOC-CC26-D2-001` — **Governance, Risk, and Compliance**
- **Thai Meaning (ความหมายภาษาไทย):** การกำกับดูแล การบริหารความเสี่ยง และการปฏิบัติตามข้อกำหนด
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `GRC` | **Full Form:** Governance, Risk, and Compliance
- **English Definition:** An integrated framework aligning cybersecurity strategy and operations with enterprise business goals, risk appetite, and legal or regulatory requirements.
- **Thai Explanation:** กรอบแนวทางแบบบูรณาการที่เชื่อมโยงการกำกับดูแล (Governance) การบริหารความเสี่ยง (Risk) และการปฏิบัติตามกฎเกณฑ์ (Compliance) เข้าด้วยกัน เพื่อให้การตัดสินใจด้านความมั่นคงปลอดภัยสนับสนุนเป้าหมายธุรกิจอย่างมีประสิทธิภาพ
- **Exam Relevance & Strategy:** GRC operates as a holistic enterprise discipline. Exam scenarios test the synergy where governance sets policy, risk management guides resource allocation, and compliance satisfies mandatory obligations.
- **English Example:** *"The organization adopted an integrated GRC model to streamline audit readiness and eliminate conflicting departmental security policies."*
- **Thai Example:** *"องค์กรนำแบบจำลอง GRC แบบบูรณาการมาใช้เพื่อเพิ่มความพร้อมในการตรวจสอบและขจัดนโยบายความปลอดภัยที่ขัดแย้งกันระหว่างแผนก"*
- **Confused With:** Security Operations, Compliance Only
- **Keywords:** `GRC`, `Governance`, `Risk Management`, `Compliance`, `Enterprise Strategy`, `Business Alignment`
- **Evidence Sources:** S01-S02 (KNOW-D2-001)

---

#### `VOC-CC26-D2-002` — **Security Governance**
- **Thai Meaning (ความหมายภาษาไทย):** การกำกับดูแลความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The strategic leadership, organizational structures, and oversight processes that establish security direction, authority, and accountability to protect organizational mission and assets.
- **Thai Explanation:** โครงสร้างการบริหารจัดการและการกำกับดูแลเชิงกลยุทธ์ที่กำหนดทิศทาง มอบอำนาจตัดสินใจ และสร้างความรับผิดชอบ (Accountability) ด้านความมั่นคงปลอดภัย เพื่อปกป้องภารกิจและทรัพย์สินขององค์กร
- **Exam Relevance & Strategy:** Governance flows from executive leadership (tone at the top) and the board of directors. It answers 'who is accountable' and 'what are the strategic priorities', distinct from operational security tasks.
- **English Example:** *"Executive governance mandates that all business units align third-party software procurement with corporate data protection standards."*
- **Thai Example:** *"การกำกับดูแลระดับผู้บริหารกำหนดให้ทุกหน่วยธุรกิจต้องจัดซื้อซอฟต์แวร์ภายนอกให้สอดคล้องกับมาตรฐานการปกป้องข้อมูลขององค์กร"*
- **Confused With:** Security Management, Technical Controls
- **Keywords:** `Governance`, `Oversight`, `Accountability`, `Leadership`, `Strategy`, `Policy Authority`
- **Evidence Sources:** S02 (KNOW-D2-002)

---

#### `VOC-CC26-D2-003` — **Risk Management**
- **Thai Meaning (ความหมายภาษาไทย):** การบริหารจัดการความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The ongoing systematic process of identifying, assessing, responding to, and monitoring risks to organizational operations and information assets.
- **Thai Explanation:** กระบวนการที่เป็นระบบและต่อเนื่องในการระบุ ประเมิน ตอบสนอง และเฝ้าระวังความเสี่ยงที่อาจส่งผลกระทบต่อการดำเนินงานและทรัพย์สินสารสนเทศขององค์กร
- **Exam Relevance & Strategy:** Risk management is never a one-time project; it is cyclical. Decisions must balance security investments against potential business loss, avoiding expenditure exceeding asset value.
- **English Example:** *"Through ongoing risk management, the security team prioritized patching critical perimeter services before addressing internal lab servers."*
- **Thai Example:** *"ด้วยการบริหารความเสี่ยงอย่างต่อเนื่อง ทีมความปลอดภัยจึงจัดลำดับความสำคัญในการแพตช์บริการภายนอกที่สำคัญก่อนเซิร์ฟเวอร์ในห้องทดลองภายใน"*
- **Confused With:** Risk Elimination, Vulnerability Scanning
- **Keywords:** `Risk Management`, `Identification`, `Assessment`, `Prioritization`, `Risk Monitoring`
- **Evidence Sources:** S06 (KNOW-D2-003)

---

#### `VOC-CC26-D2-004` — **Compliance**
- **Thai Meaning (ความหมายภาษาไทย):** การปฏิบัติตามกฎระเบียบและข้อกำหนด
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The state of adhering to applicable statutory laws, government regulations, industry mandates, security standards, and contractual obligations.
- **Thai Explanation:** สภาวะของการปฏิบัติตามกฎหมาย กฎระเบียบของหน่วยงานกำกับ มาตรฐานอุตสาหกรรม นโยบายภายใน และข้อตกลงตามสัญญาที่มีผลบังคับใช้กับองค์กร
- **Exam Relevance & Strategy:** Compliance establishes a mandatory legal/contractual baseline, but achieving compliance alone does not guarantee robust security. Scenarios test the boundary between statutory duty and practical risk reduction.
- **English Example:** *"The hospital conducted annual audits to ensure full compliance with healthcare privacy regulations regarding patient records."*
- **Thai Example:** *"โรงพยาบาลจัดให้มีการตรวจสอบประจำปีเพื่อให้แน่ใจว่าปฏิบัติตามกฎระเบียบความเป็นส่วนตัวด้านการดูแลสุขภาพเกี่ยวกับประวัติผู้ป่วยอย่างครบถ้วน"*
- **Confused With:** Governance, Total Security
- **Keywords:** `Compliance`, `Regulations`, `Mandatory`, `Audit`, `Statutory`, `Contracts`
- **Evidence Sources:** S05 (KNOW-D2-004)

---

#### `VOC-CC26-D2-005` — **NIST Cybersecurity Framework**
- **Thai Meaning (ความหมายภาษาไทย):** กรอบการทำงานความมั่นคงปลอดภัยไซเบอร์ของ NIST
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `NIST CSF` | **Full Form:** National Institute of Standards and Technology Cybersecurity Framework
- **English Definition:** A voluntary, risk-based guidance framework organized around core functions (Govern, Identify, Protect, Detect, Respond, Recover) to help organizations manage and reduce cybersecurity risks.
- **Thai Explanation:** กรอบแนวทางตามฐานความเสี่ยงแบบสมัครใจที่พัฒนาโดย NIST ประกอบด้วยฟังก์ชันหลักในการจัดการความเสี่ยงด้านความมั่นคงปลอดภัยไซเบอร์ ได้แก่ Govern, Identify, Protect, Detect, Respond และ Recover
- **Exam Relevance & Strategy:** NIST CSF provides voluntary flexible risk management guidance rather than certifiable mandatory audits. Questions test its distinction from certifiable standards like ISO/IEC 27001.
- **English Example:** *"The regional utility aligned its defensive operations with the NIST CSF to systematically assess and mature its cybersecurity posture."*
- **Thai Example:** *"บริษัทสาธารณูปโภคระดับภูมิภาคจัดระบบการปฏิบัติการป้องกันตาม NIST CSF เพื่อประเมินและยกระดับวุฒิภาวะด้านความปลอดภัยไซเบอร์อย่างเป็นระบบ"*
- **Confused With:** ISO/IEC 27001, GRC Software
- **Keywords:** `NIST CSF`, `Framework`, `Voluntary`, `Core Functions`, `Risk Reduction`
- **Evidence Sources:** S07 (KNOW-D2-006)

---

#### `VOC-CC26-D2-006` — **ISO/IEC 27001**
- **Thai Meaning (ความหมายภาษาไทย):** มาตรฐานระบบการจัดการความมั่นคงปลอดภัยสารสนเทศ ISO/IEC 27001
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `ISO 27001` | **Full Form:** International Organization for Standardization / International Electrotechnical Commission 27001
- **English Definition:** An internationally recognized, certifiable standard that specifies the requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS).
- **Thai Explanation:** มาตรฐานสากลที่สามารถขอรับการตรวจรับรองได้ (Certifiable) ซึ่งกำหนดข้อกำหนดสำหรับการจัดตั้ง ดำเนินงาน บำรุงรักษา และปรับปรุงระบบการจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) อย่างต่อเนื่อง
- **Exam Relevance & Strategy:** ISO/IEC 27001 is certifiable via accredited external third-party audits, whereas NIST CSF is non-certifiable guidance. Questions test this certifiable standard vs guidance framework difference.
- **English Example:** *"To assure international enterprise customers of its data hygiene, the cloud hosting provider achieved ISO/IEC 27001 certification."*
- **Thai Example:** *"เพื่อสร้างความมั่นใจให้แก่ลูกค้าองค์กรระดับสากล ผู้ให้บริการคลาวด์ได้ขอรับการตรวจรับรองมาตรฐาน ISO/IEC 27001"*
- **Confused With:** NIST CSF, ISO/IEC 27002
- **Keywords:** `ISO/IEC 27001`, `ISMS`, `Certifiable Standard`, `Audit`, `International Standard`
- **Evidence Sources:** S07 (KNOW-D2-007)

---

#### `VOC-CC26-D2-007` — **Information Security Management System**
- **Thai Meaning (ความหมายภาษาไทย):** ระบบการจัดการความมั่นคงปลอดภัยสารสนเทศ
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `ISMS` | **Full Form:** Information Security Management System
- **English Definition:** A systematic management approach comprising policies, procedures, technical processes, and security controls designed to protect sensitive organizational data assets.
- **Thai Explanation:** แนวทางการบริหารจัดการอย่างเป็นระบบที่ประกอบด้วยนโยบาย ระเบียบปฏิบัติ กระบวนการทางเทคนิค และการควบคุมความมั่นคงปลอดภัยเพื่อปกป้องทรัพย์สินข้อมูลสำคัญขององค์กร
- **Exam Relevance & Strategy:** An ISMS represents the overarching administrative management system specified by ISO/IEC 27001, distinct from any single piece of security software or hardware tool.
- **English Example:** *"The bank's executive committee reviews the ISMS annually to adjust security controls to evolving financial cyber threats."*
- **Thai Example:** *"คณะกรรมการบริหารของธนาคารทบทวนระบบ ISMS ทุกปีเพื่อปรับเปลี่ยนมาตรการควบคุมความปลอดภัยให้ทันภัยคุกคามไซเบอร์ทางการเงินที่เปลี่ยนแปลงไป"*
- **Confused With:** Security Information and Event Management (SIEM), GRC Tool
- **Keywords:** `ISMS`, `Management System`, `ISO 27001`, `Continuous Improvement`, `Security Controls`
- **Evidence Sources:** S07 (KNOW-D2-008)

---

#### `VOC-CC26-D2-008` — **COBIT**
- **Thai Meaning (ความหมายภาษาไทย):** กรอบการทำงานการกำกับดูแลไอทีระดับองค์กร COBIT
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `COBIT` | **Full Form:** Control Objectives for Information and Related Technologies
- **English Definition:** A globally accepted enterprise IT governance and management framework that bridges the gap between technical IT activities and business leadership objectives.
- **Thai Explanation:** กรอบการกำกับดูแลและบริหารจัดการเทคโนโลยีสารสนเทศระดับองค์กรที่ได้รับการยอมรับระดับสากล เพื่อเชื่อมโยงการปฏิบัติการด้านไอทีเข้ากับเป้าหมายเชิงกลยุทธ์ของผู้บริหารธุรกิจ
- **Exam Relevance & Strategy:** COBIT focuses primarily on IT governance and business alignment at the enterprise level, bridging IT services with executive decision-making.
- **English Example:** *"Management implemented COBIT to establish measurable IT governance goals and align technology projects with revenue priorities."*
- **Thai Example:** *"ผู้บริหารนำ COBIT มาใช้เพื่อกำหนดเป้าหมายการกำกับดูแลไอทีที่วัดผลได้ และปรับโครงการเทคโนโลยีให้ตรงกับทิศทางการสร้างรายได้"*
- **Confused With:** ITIL, NIST CSF
- **Keywords:** `COBIT`, `IT Governance`, `Business Alignment`, `Enterprise IT`, `ISACA`
- **Evidence Sources:** S07 (KNOW-D2-009)

---

#### `VOC-CC26-D2-009` — **GRC Software Platform**
- **Thai Meaning (ความหมายภาษาไทย):** แพลตฟอร์มซอฟต์แวร์สำหรับการบริหาร GRC
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An enterprise software application that centralizes risk documentation, automates compliance assessments, tracks policy lifecycle, and collects audit evidence.
- **Thai Explanation:** แอปพลิเคชันซอฟต์แวร์ระดับองค์กรที่ทำหน้าที่รวมศูนย์เอกสารความเสี่ยง ทำให้การประเมินการปฏิบัติตามกฎเกณฑ์เป็นอัตโนมัติ ติดตามวงจรชีวิตของนโยบาย และรวบรวมหลักฐานสำหรับการตรวจสอบ
- **Exam Relevance & Strategy:** GRC software is an operational technology tool that facilitates governance, but it does NOT replace human accountability, leadership oversight, or risk ownership.
- **English Example:** *"Using a cloud GRC software platform allowed the internal audit team to monitor compliance status across twelve subsidiaries in real time."*
- **Thai Example:** *"การใช้แพลตฟอร์มซอฟต์แวร์ GRC บนคลาวด์ช่วยให้ทีมตรวจสอบภายในสามารถเฝ้าติดตามสถานะการปฏิบัติตามกฎระเบียบของบริษัทย่อยทั้ง 12 แห่งได้แบบเรียลไทม์"*
- **Confused With:** GRC Framework, SIEM
- **Keywords:** `GRC Software`, `Automation`, `Audit Evidence`, `Policy Tracking`, `Centralized Repository`
- **Evidence Sources:** S08 (KNOW-D2-010)

---

#### `VOC-CC26-D2-010` — **Risk Register**
- **Thai Meaning (ความหมายภาษาไทย):** ทะเบียนความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A structured, centralized documentation repository recording identified risks, their severity ratings, assigned risk owners, approved treatment plans, and residual risk status.
- **Thai Explanation:** เอกสารหรือฐานข้อมูลรวมศูนย์ที่ใช้บันทึกรายการความเสี่ยงที่ระบุได้ ระดับความรุนแรง เจ้าของความเสี่ยงที่ได้รับมอบหมาย แผนการจัดการที่ได้รับอนุมัติ และสถานะความเสี่ยงคงเหลือ
- **Exam Relevance & Strategy:** The risk register is the primary operational ledger for enterprise risks. Every identified risk must be logged and paired with an accountable risk owner and treatment strategy.
- **English Example:** *"The project manager added the database sunset vulnerability to the departmental risk register and assigned remediation to the infrastructure lead."*
- **Thai Example:** *"ผู้จัดการโครงการได้เพิ่มช่องโหว่ของฐานข้อมูลที่กำลังหมดอายุการใช้งานลงในทะเบียนความเสี่ยง และมอบหมายให้หัวหน้าทีมโครงสร้างพื้นฐานรับผิดชอบแก้ไข"*
- **Confused With:** Incident Log, Asset Inventory
- **Keywords:** `Risk Register`, `Tracking`, `Risk Owner`, `Residual Risk`, `Treatment Strategy`, `Repository`
- **Evidence Sources:** S09 (KNOW-D2-011)

---

#### `VOC-CC26-D2-011` — **Risk Ownership**
- **Thai Meaning (ความหมายภาษาไทย):** ความเป็นเจ้าของความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The clear assignment of accountability for monitoring, evaluating, and managing a specific risk to an individual business leader or operational role with authority to allocate resources.
- **Thai Explanation:** การมอบหมายความรับผิดชอบอย่างชัดเจนในการเฝ้าระวัง ประเมิน และจัดการความเสี่ยงเฉพาะเรื่อง ให้แก่ผู้นำทางธุรกิจหรือผู้มีบทบาทที่มีอำนาจในการจัดสรรงบประมาณและทรัพยากร
- **Exam Relevance & Strategy:** Risk must be owned by the business owner of the asset or process, not the cybersecurity team alone. The risk owner decides and funds the treatment strategy.
- **English Example:** *"Because the e-commerce platform generates critical revenue, the VP of Digital Commerce acts as the formal risk owner for its payment processing risks."*
- **Thai Example:** *"เนื่องจากแพลตฟอร์มอีคอมเมิร์ซสร้างรายได้หลักให้บริษัท รองประธานฝ่ายพาณิชย์ดิจิทัลจึงทำหน้าที่เป็นเจ้าของความเสี่ยงสำหรับการประมวลผลการชำระเงิน"*
- **Confused With:** Risk Custodian, Security Administrator
- **Keywords:** `Risk Ownership`, `Risk Owner`, `Accountability`, `Authority`, `Resource Allocation`
- **Evidence Sources:** S09-S10 (KNOW-D2-012)

---

#### `VOC-CC26-D2-012` — **Risk Treatment**
- **Thai Meaning (ความหมายภาษาไทย):** การจัดการความเสี่ยง / การตอบสนองต่อความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The systematic selection and implementation of measures to modify risk, comprising four canonical options: Avoidance, Mitigation (Reduction), Transfer (Sharing), and Acceptance.
- **Thai Explanation:** การเลือกและดำเนินมาตรการที่เหมาะสมในการจัดการระดับความเสี่ยง ซึ่งประกอบด้วย 4 ทางเลือกหลัก ได้แก่ การหลีกเลี่ยง (Avoidance), การลด/บรรเทา (Mitigation), การถ่ายโอน (Transfer) และการยอมรับ (Acceptance)
- **Exam Relevance & Strategy:** Exam scenarios present business situations and test which of the four treatments is MOST appropriate based on costs, benefits, and risk appetite.
- **English Example:** *"After analyzing the cloud migration risk, executive leadership selected risk mitigation by requiring multifactor authentication and client-side encryption."*
- **Thai Example:** *"หลังจากการวิเคราะห์ความเสี่ยงในการย้ายระบบไปคลาวด์ ผู้บริหารเลือกวิธีลดความเสี่ยงโดยบังคับใช้การยืนยันตัวตนหลายปัจจัยและการเข้ารหัสฝั่งผู้ใช้"*
- **Confused With:** Risk Identification, Risk Assessment
- **Keywords:** `Risk Treatment`, `Risk Response`, `Avoidance`, `Mitigation`, `Transfer`, `Acceptance`
- **Evidence Sources:** S09-S10 (KNOW-D2-013)

---

#### `VOC-CC26-D2-013` — **Risk Avoidance**
- **Thai Meaning (ความหมายภาษาไทย):** การหลีกเลี่ยงความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A risk treatment strategy that eliminates risk exposure entirely by choosing not to engage in, or terminating, the high-risk activity, process, or asset.
- **Thai Explanation:** กลยุทธ์การจัดการความเสี่ยงที่กำจัดความเสี่ยงออกไปอย่างสิ้นเชิง โดยการตัดสินใจไม่เข้าร่วม หรือยกเลิกกิจกรรม กระบวนการ หรือการใช้งานทรัพย์สินที่มีความเสี่ยงสูงนั้น
- **Exam Relevance & Strategy:** Avoidance is the only treatment that completely eliminates a specific risk, but it also sacrifices any business benefits associated with the abandoned activity.
- **English Example:** *"The bank avoided international wire fraud risks by deciding not to offer remote cross-border wire transfers in high-risk jurisdictions."*
- **Thai Example:** *"ธนาคารหลีกเลี่ยงความเสี่ยงจากการฉ้อโกงโอนเงินระหว่างประเทศโดยตัดสินใจไม่เปิดให้บริการโอนเงินข้ามแดนจากระยะไกลในเขตอำนาจที่มีความเสี่ยงสูง"*
- **Confused With:** Risk Mitigation, Risk Acceptance
- **Keywords:** `Risk Avoidance`, `Eliminate Activity`, `Termination`, `Zero Risk Exposure`
- **Evidence Sources:** S10 (KNOW-D2-013)

---

#### `VOC-CC26-D2-014` — **Risk Mitigation**
- **Thai Meaning (ความหมายภาษาไทย):** การลดหรือบรรเทาความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A risk treatment strategy that applies administrative, technical, or physical security controls to reduce the likelihood, impact, or both, of an identified risk.
- **Thai Explanation:** กลยุทธ์การจัดการความเสี่ยงโดยการนำมาตรการควบคุมด้านการบริหารจัดการ เทคนิค หรือทางกายภาพมาใช้ เพื่อลดโอกาสเกิดผลกระทบ หรือทั้งสองอย่าง ให้อยู่ในระดับที่ยอมรับได้
- **Exam Relevance & Strategy:** Mitigation (also called risk reduction) is the most common operational treatment. Controls should be cost-effective and proportional to the asset value.
- **English Example:** *"Implementing automated endpoint detection and response (EDR) software mitigated the risk of ransomware spreading across company workstations."*
- **Thai Example:** *"การติดตั้งซอฟต์แวร์ตรวจจับและตอบสนองภัยคุกคามที่อุปกรณ์ปลายทาง (EDR) ช่วยลดความเสี่ยงที่มัลแวร์เรียกค่าไถ่จะแพร่กระจายไปยังคอมพิวเตอร์ในบริษัท"*
- **Confused With:** Risk Transfer, Risk Elimination
- **Keywords:** `Risk Mitigation`, `Risk Reduction`, `Security Controls`, `Likelihood`, `Impact Reduction`
- **Evidence Sources:** S10 (KNOW-D2-013)

---

#### `VOC-CC26-D2-015` — **Risk Transfer**
- **Thai Meaning (ความหมายภาษาไทย):** การถ่ายโอนความเสี่ยง / การแบ่งปันความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A risk treatment strategy that shifts the financial burden of potential loss to a third party through insurance, warranties, or contractual agreements, without transferring ultimate accountability.
- **Thai Explanation:** กลยุทธ์การจัดการความเสี่ยงที่แบ่งปันหรือส่งต่อภาระความเสียหายทางการเงินไปยังบุคคลที่สาม เช่น การทำประกันภัยไซเบอร์ หรือการทำสัญญาจ้างบริการภายนอก โดยความรับผิดชอบสูงสุดยังคงอยู่ที่องค์กร
- **Exam Relevance & Strategy:** Cyber insurance transfers financial loss, but NEVER transfers executive accountability or brand reputation damage. Scenarios test this critical limitation.
- **English Example:** *"The retail enterprise purchased a cyber insurance policy to transfer potential breach litigation costs while maintaining its own incident response team."*
- **Thai Example:** *"องค์กรค้าปลีกทำสัญญาประกันภัยไซเบอร์เพื่อถ่ายโอนภาระค่าใช้จ่ายในการดำเนินคดีหากเกิดข้อมูลรั่วไหล โดยยังคงมีทีมตอบสนองเหตุการณ์ของตนเอง"*
- **Confused With:** Accountability Transfer, Risk Avoidance
- **Keywords:** `Risk Transfer`, `Cyber Insurance`, `Financial Loss`, `Third Party`, `Contractual Allocation`
- **Evidence Sources:** S10 (KNOW-D2-013)

---

#### `VOC-CC26-D2-016` — **Risk Acceptance**
- **Thai Meaning (ความหมายภาษาไทย):** การยอมรับความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A risk treatment decision by an authorized business owner to acknowledge and absorb potential loss without implementing additional controls when risk is within acceptable tolerance or control costs exceed potential loss.
- **Thai Explanation:** การตัดสินใจอย่างเป็นทางการโดยเจ้าของความเสี่ยงที่มีอำนาจ ในการรับทราบและยอมรับผลเสียหายที่อาจเกิดขึ้นโดยไม่เพิ่มมาตรการควบคุม เมื่อความเสี่ยงอยู่ในระดับที่ยอมรับได้ หรือต้นทุนมาตรการควบคุมสูงกว่าความเสียหาย
- **Exam Relevance & Strategy:** Acceptance is valid only when formally approved and documented by designated business leadership; it is never passive neglect or ignoring known risks.
- **English Example:** *"Because replacing legacy HVAC sensors would cost three times the equipment value, the facility director formally documented risk acceptance in the risk register."*
- **Thai Example:** *"เนื่องจากการเปลี่ยนเซ็นเซอร์ระบบปรับอากาศรุ่นเก่ามีราคาสูงกว่ามูลค่าอุปกรณ์ถึงสามเท่า ผู้อำนวยการฝ่ายอาคารจึงบันทึกการยอมรับความเสี่ยงลงในทะเบียนความเสี่ยงอย่างเป็นทางการ"*
- **Confused With:** Ignoring Risk, Risk Avoidance
- **Keywords:** `Risk Acceptance`, `Cost-Benefit`, `Documented Approval`, `Risk Appetite`, `Informed Decision`
- **Evidence Sources:** S10 (KNOW-D2-013)

---

#### `VOC-CC26-D2-017` — **Residual Risk**
- **Thai Meaning (ความหมายภาษาไทย):** ความเสี่ยงคงเหลือ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The remaining risk exposure after existing or planned security controls and risk treatment countermeasures have been implemented.
- **Thai Explanation:** ระดับความเสี่ยงที่ยังคงหลงเหลืออยู่หลังจากการนำมาตรการควบคุมและกลยุทธ์การจัดการความเสี่ยงไปปฏิบัติใช้แล้ว
- **Exam Relevance & Strategy:** Residual risk in operational systems is rarely zero. If residual risk exceeds organizational risk appetite, additional controls must be applied until it reaches an acceptable level.
- **English Example:** *"Even after deploying robust firewalls and encryption, the residual risk of authorized insider credential theft required ongoing behavioral monitoring."*
- **Thai Example:** *"แม้จะติดตั้งไฟร์วอลล์และระบบเข้ารหัสที่เข้มแข็งแล้ว ความเสี่ยงคงเหลือจากการขโมยข้อมูลรับรองโดยคนภายในยังคงต้องอาศัยการเฝ้าระวังพฤติกรรมอย่างต่อเนื่อง"*
- **Confused With:** Inherent Risk, Total Risk
- **Keywords:** `Residual Risk`, `Remaining Risk`, `Post-Control`, `Acceptable Level`, `Risk Appetite`
- **Evidence Sources:** S09 (KNOW-D2-014)

---

#### `VOC-CC26-D2-018` — **Inherent Risk**
- **Thai Meaning (ความหมายภาษาไทย):** ความเสี่ยงที่มีอยู่แต่เดิม (ก่อนควบคุม)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The baseline level of raw, unmitigated risk present in an activity, asset, or environment before any security controls or countermeasures are applied.
- **Thai Explanation:** ระดับความเสี่ยงดั้งเดิมหรือตามธรรมชาติที่แฝงอยู่ในกิจกรรม ทรัพย์สิน หรือสภาพแวดล้อม ก่อนที่จะมีการนำมาตรการควบคุมความปลอดภัยใดๆ เข้ามาใช้
- **Exam Relevance & Strategy:** Inherent risk represents total raw exposure. Subtracting the effect of security controls from inherent risk yields residual risk.
- **English Example:** *"Connecting an unpatched medical device directly to the public internet carries extremely high inherent risk of immediate unauthorized compromise."*
- **Thai Example:** *"การเชื่อมต่ออุปกรณ์ทางการแพทย์ที่ยังไม่ได้รับการแพตช์เข้ากับอินเทอร์เน็ตสาธารณะโดยตรงมีความเสี่ยงแต่เดิมสูงมากที่จะถูกเจาะระบบในทันที"*
- **Confused With:** Residual Risk, Control Risk
- **Keywords:** `Inherent Risk`, `Raw Risk`, `Pre-Control`, `Baseline Exposure`
- **Evidence Sources:** S09 (KNOW-D2-014)

---

#### `VOC-CC26-D2-019` — **Risk Rating Scales**
- **Thai Meaning (ความหมายภาษาไทย):** มาตราส่วนการจัดระดับความเสี่ยง
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** Methodologies used to categorize risk severity, including qualitative descriptive scales (Low, Medium, High) and semi-quantitative ranked ordinal numeric scales (1 to 4 or 1 to 5).
- **Thai Explanation:** วิธีการที่ใช้ในการจัดระดับความรุนแรงของความเสี่ยง ครอบคลุมทั้งมาตราส่วนเชิงคุณภาพที่ใช้คำบรรยาย (เช่น ต่ำ ปานกลาง สูง) และมาตราส่วนกึ่งเชิงปริมาณที่ใช้ตัวเลขจัดอันดับ (เช่น 1 ถึง 4 หรือ 1 ถึง 5)
- **Exam Relevance & Strategy:** NIST SP 800-30 Rev. 1 clarifies that representative numbers like '1 to 4' are semi-quantitative ordinal rankings, NOT mathematical quantitative figures with financial units.
- **English Example:** *"The cybersecurity committee utilized a 1-to-4 semi-quantitative risk rating scale to prioritize vulnerability remediation across corporate assets."*
- **Thai Example:** *"คณะกรรมการความปลอดภัยไซเบอร์ใช้มาตราส่วนจัดระดับความเสี่ยงกึ่งเชิงปริมาณ 1 ถึง 4 เพื่อจัดลำดับความสำคัญในการแก้ไขช่องโหว่ของทรัพย์สินองค์กร"*
- **Confused With:** Quantitative Risk Analysis, Financial Valuation
- **Keywords:** `Risk Rating Scales`, `Semi-Quantitative`, `Qualitative`, `Ordinal Scale`, `Prioritization`
- **Evidence Sources:** S09 (KNOW-D2-015)

---

#### `VOC-CC26-D2-020` — **Qualitative Risk Assessment**
- **Thai Meaning (ความหมายภาษาไทย):** การประเมินความเสี่ยงเชิงคุณภาพ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An assessment technique evaluating risk likelihood and impact using subjective, descriptive categories (e.g., Low, Medium, High, Critical) based on expert judgment and organizational consensus.
- **Thai Explanation:** เทคนิคการประเมินความเสี่ยงที่วิเคราะห์โอกาสเกิดและผลกระทบโดยใช้หมวดหมู่คำบรรยาย (เช่น ต่ำ ปานกลาง สูง วิกฤต) ตามดุลยพินิจของผู้เชี่ยวชาญและความเห็นพ้องในองค์กร
- **Exam Relevance & Strategy:** Qualitative analysis is fast and widely accessible because it does not require complex mathematical modeling or exact monetary data. It is the most common starting assessment method.
- **English Example:** *"During the initial threat workshop, the team conducted a qualitative risk assessment to quickly sort thirty potential threat scenarios into priority tiers."*
- **Thai Example:** *"ในระหว่างการประชุมเชิงปฏิบัติการด้านภัยคุกคาม ทีมงานได้ประเมินความเสี่ยงเชิงคุณภาพเพื่อจัดกลุ่มสถานการณ์ภัยคุกคาม 30 รายการตามระดับความสำคัญอย่างรวดเร็ว"*
- **Confused With:** Quantitative Risk Assessment, Statistical Analysis
- **Keywords:** `Qualitative`, `Subjective`, `Descriptive`, `Expert Judgment`, `Low Medium High`
- **Evidence Sources:** S09 (KNOW-D2-015)

---

#### `VOC-CC26-D2-021` — **Semi-Quantitative Risk Assessment**
- **Thai Meaning (ความหมายภาษาไทย):** การประเมินความเสี่ยงกึ่งเชิงปริมาณ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An assessment methodology that assigns representative numerical scores or ranked bins (such as 1 to 4) to reflect relative risk severity without using empirical financial units or strict mathematical ratios.
- **Thai Explanation:** ระเบียบวิธีการประเมินที่กำหนดคะแนนตัวเลขแทนระดับ (เช่น 1 ถึง 4 หรือ 1 ถึง 5) เพื่อสะท้อนลำดับความรุนแรงเปรียบเทียบ โดยไม่ได้ใช้หน่วยทางการเงินหรือสูตรคณิตศาสตร์แท้จริงตามนิยามของ NIST SP 800-30
- **Exam Relevance & Strategy:** Assigning numbers 1 to 4 does NOT make an assessment quantitative. Numbers represent ordinal order, not monetary currency or exact failure rates.
- **English Example:** *"By adopting a semi-quantitative scoring model, the risk committee ranked infrastructure vulnerabilities on a 1-to-5 scale for executive reporting."*
- **Thai Example:** *"การนำแบบจำลองการให้คะแนนแบบกึ่งเชิงปริมาณมาใช้ช่วยให้คณะกรรมการความเสี่ยงสามารถจัดอันดับช่องโหว่บนสเกล 1 ถึง 5 เพื่อรายงานต่อผู้บริหารได้ชัดเจนขึ้น"*
- **Confused With:** Quantitative Risk Assessment, Qualitative Risk Assessment
- **Keywords:** `Semi-Quantitative`, `Ordinal Scale`, `NIST SP 800-30`, `Relative Ranking`, `Numeric Bins`
- **Evidence Sources:** S09 (KNOW-D2-015)

---

#### `VOC-CC26-D2-022` — **Quantitative Risk Assessment**
- **Thai Meaning (ความหมายภาษาไทย):** การประเมินความเสี่ยงเชิงปริมาณ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An assessment methodology using mathematically rigorous numerical models, empirical historical frequencies, and measurable monetary currency values (e.g., SLE, ARO, ALE) to evaluate risk.
- **Thai Explanation:** ระเบียบวิธีการประเมินที่ใช้แบบจำลองคณิตศาสตร์ ข้อมูลสถิติความถี่ในอดีต และหน่วยวัดมูลค่าทางการเงินที่จับต้องได้ (เช่น SLE, ARO, ALE) ในการคำนวณและประเมินความเสี่ยง
- **Exam Relevance & Strategy:** Quantitative assessment produces dollar-based loss expectancies (ALE = SLE x ARO), which are directly comparable to the annual cost of prospective security countermeasures.
- **English Example:** *"A quantitative risk assessment revealed an Annualized Loss Expectancy of $120,000, justifying an $80,000 investment in a fault-tolerant storage array."*
- **Thai Example:** *"การประเมินความเสี่ยงเชิงปริมาณพบว่ามีความเสียหายคาดการณ์รายปี (ALE) อยู่ที่ 120,000 ดอลลาร์ ซึ่งช่วยยืนยันความคุ้มค่าของการลงทุน 80,000 ดอลลาร์ในระบบจัดเก็บข้อมูลแบบทนทานต่อความเสียหาย"*
- **Confused With:** Qualitative Risk Assessment, Semi-Quantitative Assessment
- **Keywords:** `Quantitative`, `ALE`, `SLE`, `ARO`, `Monetary Value`, `Mathematical Model`
- **Evidence Sources:** S09 (KNOW-D2-015)

---

#### `VOC-CC26-D2-023` — **Risk Appetite**
- **Thai Meaning (ความหมายภาษาไทย):** ระดับความเสี่ยงที่องค์กรเปิดรับได้ (Risk Appetite)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The broad, strategic amount and type of risk an organization is willing to pursue, retain, or accept in pursuit of its core business objectives and mission.
- **Thai Explanation:** ปริมาณและประเภทของความเสี่ยงในระดับกว้างเชิงกลยุทธ์ที่องค์กรพร้อมจะเปิดรับ คงไว้ หรือยอมรับได้ เพื่อให้บรรลุเป้าหมายทางธุรกิจและพันธกิจหลัก
- **Exam Relevance & Strategy:** Risk appetite is set at the board/executive level as high-level policy guidance. It dictates whether the organization takes an aggressive or conservative posture toward emerging tech or expansion.
- **English Example:** *"Due to a low risk appetite for regulatory non-compliance, the financial firm prohibited employees from using unvetted public generative AI platforms."*
- **Thai Example:** *"เนื่องจากมีระดับการเปิดรับความเสี่ยงต่ำมากต่อการละเมิดกฎระเบียบ สถาบันการเงินจึงสั่งห้ามพนักงานใช้แพลตฟอร์ม Generative AI สาธารณะที่ยังไม่ผ่านการตรวจสอบ"*
- **Confused With:** Risk Tolerance, Risk Threshold
- **Keywords:** `Risk Appetite`, `Strategic Level`, `Board Level`, `Broad Guidance`, `Executive Stance`
- **Evidence Sources:** S10 (KNOW-D2-012)

---

#### `VOC-CC26-D2-024` — **Risk Tolerance**
- **Thai Meaning (ความหมายภาษาไทย):** ระดับความเสี่ยงที่ยอมให้เบี่ยงเบนได้ (Risk Tolerance)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The specific, acceptable operational variance or boundary an organization allows around a defined risk appetite target for an individual project, system, or objective.
- **Thai Explanation:** ขอบเขตความแปรปรวนหรือความเบี่ยงเบนในระดับปฏิบัติการที่องค์กรยินยอมให้เกิดขึ้นได้จากเป้าหมาย Risk Appetite สำหรับโครงการ ระบบ หรือวัตถุประสงค์เฉพาะด้าน
- **Exam Relevance & Strategy:** Distinction: Risk appetite is broad and strategic ('we accept moderate cloud risk'); risk tolerance is operational and measurable ('we tolerate up to 4 hours of planned downtime quarterly').
- **English Example:** *"While the company has a low risk appetite for system downtime, its risk tolerance allows for a scheduled 30-minute monthly maintenance window on Sunday mornings."*
- **Thai Example:** *"แม้บริษัทจะมี Risk Appetite ต่ำต่อการหยุดทำงานของระบบ แต่ Risk Tolerance ในระดับปฏิบัติการยินยอมให้มีการหยุดระบบเพื่อบำรุงรักษาตามกำหนดการได้ 30 นาทีในเช้าวันอาทิตย์"*
- **Confused With:** Risk Appetite, Risk Capacity
- **Keywords:** `Risk Tolerance`, `Operational Variance`, `Measurable Boundary`, `Acceptable Deviation`
- **Evidence Sources:** S10 (KNOW-D2-012)

---

#### `VOC-CC26-D2-025` — **Risk Appetite vs Risk Tolerance**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง Risk Appetite และ Risk Tolerance
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** Risk Appetite is the strategic, high-level willingness of an enterprise to accept risk, whereas Risk Tolerance is the tactical, measurable boundary of acceptable deviation in specific operational outcomes.
- **Thai Explanation:** การเปรียบเทียบความแตกต่าง: Risk Appetite คือระดับความเต็มใจเชิงกลยุทธ์ระดับภาพรวมที่ผู้บริหารยินยอมรับความเสี่ยง ส่วน Risk Tolerance คือขอบเขตความเบี่ยงเบนเชิงปริมาณที่ยอมรับได้ในการปฏิบัติงานจริง
- **Exam Relevance & Strategy:** Exam scenarios frequently test candidates on distinguishing broad executive philosophy (appetite) from concrete operational variance limits (tolerance).
- **English Example:** *"The board defines the corporate risk appetite for cybersecurity exposure, while the IT director establishes risk tolerance thresholds for weekly patch delays."*
- **Thai Example:** *"คณะกรรมการบริษัทกำหนด Risk Appetite สำหรับภาพรวมความเสี่ยงไซเบอร์ ในขณะที่ผู้อำนวยการฝ่ายไอทีกำหนดเกณฑ์ Risk Tolerance สำหรับความล่าช้าในการลงแพตช์ประจำสัปดาห์"*
- **Confused With:** Inherent vs Residual Risk
- **Keywords:** `Appetite vs Tolerance`, `Strategic vs Operational`, `Variance`, `Governance Boundary`
- **Evidence Sources:** S10 (KNOW-D2-012)

---

#### `VOC-CC26-D2-026` — **Endpoint Detection and Response**
- **Thai Meaning (ความหมายภาษาไทย):** ระบบตรวจจับและตอบสนองภัยคุกคามที่อุปกรณ์ปลายทาง
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `EDR` | **Full Form:** Endpoint Detection and Response
- **English Definition:** An integrated security solution that continuously records system activity on endpoint devices, applies behavioral analytics to detect anomalies, and provides automated containment capabilities.
- **Thai Explanation:** โซลูชันความปลอดภัยที่บันทึกพฤติกรรมของระบบบนอุปกรณ์ปลายทางอย่างต่อเนื่อง วิเคราะห์พฤติกรรมเพื่อตรวจหาความผิดปกติ และสามารถตัดการเชื่อมต่อหรือกักกันภัยคุกคามได้แบบอัตโนมัติ
- **Exam Relevance & Strategy:** EDR is cited in governance and risk scenarios as a primary technical control for mitigating malware, ransomware propagation, and credential theft across enterprise endpoints.
- **English Example:** *"When suspicious ransomware execution was detected on a laptop, the EDR agent immediately quarantined the host from the corporate network."*
- **Thai Example:** *"เมื่อตรวจพบพฤติกรรมต้องสงสัยของมัลแวร์เรียกค่าไถ่บนแล็ปท็อป เอเจนต์ EDR ได้กักกันเครื่องนั้นออกจากเครือข่ายองค์กรในทันที"*
- **Confused With:** Antivirus, SIEM
- **Keywords:** `EDR`, `Endpoint`, `Behavioral Analytics`, `Containment`, `Ransomware Mitigation`
- **Evidence Sources:** S09-S10 (KNOW-D2-013)

---

#### `VOC-CC26-D2-027` — **Protected Health Information**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อมูลสุขภาพที่ได้รับความคุ้มครองตามกฎหมาย
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `PHI` | **Full Form:** Protected Health Information
- **English Definition:** Individually identifiable health information created, received, or stored by a covered entity or business associate, protected under statutory regulations like HIPAA.
- **Thai Explanation:** ข้อมูลสุขภาพที่สามารถระบุตัวบุคคลได้ ซึ่งถูกสร้าง ได้รับ หรือจัดเก็บโดยหน่วยงานที่เกี่ยวข้องกับการรักษาพยาบาลหรือคู่ค้า โดยได้รับความคุ้มครองอย่างเข้มงวดภายใต้กฎหมาย เช่น HIPAA
- **Exam Relevance & Strategy:** Candidates must distinguish general personal information (PII) from statutory healthcare data (PHI). Under regulations like HIPAA, PHI requires specific technical and physical privacy safeguards.
- **English Example:** *"The hospital secured its diagnostic imaging archives with end-to-end encryption because medical scan records are classified as PHI."*
- **Thai Example:** *"โรงพยาบาลได้เข้ารหัสข้อมูลภาพวินิจฉัยโรคแบบครบวงจรเนื่องจากบันทึกผลการสแกนทางการแพทย์จัดเป็นข้อมูลสุขภาพที่ได้รับความคุ้มครอง (PHI)"*
- **Confused With:** PII, Public Data
- **Keywords:** `PHI`, `HIPAA`, `Healthcare Privacy`, `Identifiable Health Data`, `Compliance`
- **Evidence Sources:** S17 (KNOW-D2-004)

---

#### `VOC-CC26-D2-028` — **Business Alignment**
- **Thai Meaning (ความหมายภาษาไทย):** ความสอดคล้องกับเป้าหมายทางธุรกิจ
- **Category:** `exam_language` | **Status:** `source_supported`
- **English Definition:** The fundamental governance principle that cybersecurity strategies, investments, and policies must directly support, enable, and protect the organization's overarching business mission and objectives.
- **Thai Explanation:** หลักการสำคัญของการกำกับดูแลที่กำหนดให้กลยุทธ์ การลงทุน และนโยบายความมั่นคงปลอดภัยไซเบอร์ต้องสนับสนุน เกื้อหนุน และปกป้องพันธกิจและเป้าหมายทางธุรกิจหลักขององค์กรโดยตรง
- **Exam Relevance & Strategy:** Exam Qualifier: Security does not exist in a vacuum. Scenarios test candidates to select the answer that aligns with business enablement rather than imposing impractical, paralyzing security roadblocks.
- **English Example:** *"Effective business alignment ensures that cybersecurity leadership is consulted during new product launches to embed security without delaying release dates."*
- **Thai Example:** *"ความสอดคล้องกับธุรกิจที่มีประสิทธิภาพช่วยให้ผู้นำความปลอดภัยไซเบอร์ได้รับคำปรึกษาตั้งแต่ช่วงพัฒนาผลิตภัณฑ์ใหม่ เพื่อผสานความปลอดภัยโดยไม่ทำให้การเปิดตัวล่าช้า"*
- **Confused With:** Technical Isolation, Zero Risk
- **Keywords:** `Business Alignment`, `Strategy`, `Enablement`, `Mission Protection`, `Exam Qualifier`
- **Evidence Sources:** S02 (KNOW-D2-001)

---

#### `VOC-CC26-D2-029` — **AI Governance**
- **Thai Meaning (ความหมายภาษาไทย):** การกำกับดูแลปัญญาประดิษฐ์ (AI Governance)
- **Category:** `core_term` | **Status:** `supplemental`
- **English Definition:** The framework of policies, ethical standards, risk assessments, and oversight mechanisms established to ensure artificial intelligence systems are deployed securely, transparently, and compliantly.
- **Thai Explanation:** กรอบนโยบาย มาตรฐานทางจริยธรรม การประเมินความเสี่ยง และกลไกการกำกับดูแลที่จัดทำขึ้นเพื่อให้แน่ใจว่าระบบปัญญาประดิษฐ์ (AI) ถูกนำมาใช้งานอย่างปลอดภัย โปร่งใส และถูกต้องตามกฎระเบียบ
- **Exam Relevance & Strategy:** Part of the updated 2026 exam outline. Scenarios test governance of AI use, prohibiting unauthorized data ingestion into public models and establishing organizational oversight for algorithmic risks.
- **English Example:** *"The company's AI governance policy prohibits employees from pasting proprietary intellectual property into external large language models."*
- **Thai Example:** *"นโยบายการกำกับดูแล AI ของบริษัทสั่งห้ามพนักงานวางทรัพย์สินทางปัญญาหรือรหัสโปรแกรมภายในลงในโมเดลภาษาขนาดใหญ่ภายนอก"*
- **Confused With:** AI Development, Traditional IT Governance
- **Keywords:** `AI Governance`, `2026 Outline`, `Ethical AI`, `Oversight`, `Data Ingestion Risk`
- **Evidence Sources:** Domain 2.1 (KNOW-D2-001)

---

#### `VOC-CC26-D2-090` — **National Institute of Standards and Technology**
- **Thai Meaning (ความหมายภาษาไทย):** สถาบันมาตรฐานและเทคโนโลยีแห่งชาติสหรัฐอเมริกา
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `NIST` | **Full Form:** National Institute of Standards and Technology
- **English Definition:** A non-regulatory agency of the U.S. Department of Commerce that publishes widely accepted cybersecurity standards, guidelines, and special publications (e.g., SP 800-30, SP 800-34, SP 800-55, CSF).
- **Thai Explanation:** หน่วยงานภาครัฐของกระทรวงพาณิชย์สหรัฐฯ ที่เผยแพร่มาตรฐาน กรอบแนวทาง และสิ่งพิมพ์พิเศษด้านความมั่นคงปลอดภัยไซเบอร์ที่ได้รับการยอมรับและนำไปใช้ทั่วโลก (เช่น SP 800-30, SP 800-34, SP 800-55 และ CSF)
- **Exam Relevance & Strategy:** NIST Special Publications are foundational reference benchmarks for ISC2 exam objectives across risk management (SP 800-30), contingency planning (SP 800-34), and metrics (SP 800-55).
- **English Example:** *"The security architect referenced NIST guidelines to structure the organization's business continuity and risk assessment methodologies."*
- **Thai Example:** *"สถาปนิกความปลอดภัยอ้างอิงแนวทางของ NIST เพื่อจัดโครงสร้างระเบียบวิธีสำหรับการประเมินความเสี่ยงและความต่อเนื่องทางธุรกิจขององค์กร"*
- **Confused With:** ISO, CIS
- **Keywords:** `NIST`, `Standards Agency`, `SP 800-30`, `SP 800-34`, `Cybersecurity Guidelines`
- **Evidence Sources:** S07 (KNOW-D2-006)

---

#### `VOC-CC26-D2-096` — **General Data Protection Regulation**
- **Thai Meaning (ความหมายภาษาไทย):** กฎหมายคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรป (GDPR)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `GDPR` | **Full Form:** General Data Protection Regulation (Regulation (EU) 2016/679)
- **English Definition:** A comprehensive European Union regulation governing the lawful collection, processing, storage, and cross-border transfer of personal data of EU residents, imposing strict compliance and breach notification mandates.
- **Thai Explanation:** กฎหมายคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรปที่มีผลบังคับใช้ครอบคลุมการเก็บรวบรวม การประมวลผล การจัดเก็บ และการโอนย้ายข้อมูลส่วนบุคคลของประชากรในสหภาพยุโรป พร้อมกำหนดหน้าที่ในการแจ้งเตือนเหตุละเมิดอย่างเข้มงวด
- **Exam Relevance & Strategy:** GDPR exemplifies international statutory compliance. Organizations must implement appropriate technical and organizational measures; note that GDPR requires notification without undue delay (often within 72 hours), but does NOT prescribe specific hourly system recovery targets (correcting KNOW-D2-028).
- **English Example:** *"Any enterprise serving European customers must comply with GDPR by establishing lawful bases for data processing and respecting data subject rights."*
- **Thai Example:** *"องค์กรใดก็ตามที่ให้บริการแก่ลูกค้าในยุโรปต้องปฏิบัติตาม GDPR โดยกำหนดฐานทางกฎหมายในการประมวลผลข้อมูลและเคารพสิทธิของเจ้าของข้อมูล"*
- **Confused With:** HIPAA, PCI DSS
- **Keywords:** `GDPR`, `EU Privacy`, `Data Protection`, `Statutory Compliance`, `Breach Notification`
- **Evidence Sources:** S05 (KNOW-D2-004)

---

#### `VOC-CC26-D2-097` — **Health Insurance Portability and Accountability Act**
- **Thai Meaning (ความหมายภาษาไทย):** กฎหมายคุ้มครองข้อมูลสุขภาพและประกันสุขภาพของสหรัฐฯ (HIPAA)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `HIPAA` | **Full Form:** Health Insurance Portability and Accountability Act
- **English Definition:** A U.S. federal statutory law establishing national standards to protect the privacy and security of individually identifiable Protected Health Information (PHI) held by covered entities and business associates.
- **Thai Explanation:** กฎหมายระดับสหพันธรัฐของสหรัฐอเมริกาที่กำหนดมาตรฐานระดับชาติในการคุ้มครองความเป็นส่วนตัวและความมั่นคงปลอดภัยของข้อมูลสุขภาพที่สามารถระบุตัวตนได้ (PHI) ซึ่งครอบครองโดยหน่วยงานทางการแพทย์และคู่ค้า
- **Exam Relevance & Strategy:** HIPAA Security Rule mandates administrative, physical, and technical safeguards and contingency planning. Note that HIPAA mandates contingency plans, but does NOT dictate specific numerical RTO hours (correcting KNOW-D2-028).
- **English Example:** *"The medical clinic signed Business Associate Agreements with its cloud backup vendor to ensure full HIPAA compliance for patient medical archives."*
- **Thai Example:** *"คลินิกการแพทย์ได้ลงนามในข้อตกลง Business Associate Agreement กับผู้ให้บริการสำรองข้อมูลบนคลาวด์เพื่อให้มั่นใจว่าปฏิบัติตาม HIPAA อย่างครบถ้วน"*
- **Confused With:** GDPR, FERPA
- **Keywords:** `HIPAA`, `PHI`, `Healthcare Regulation`, `Privacy Rule`, `Security Rule`
- **Evidence Sources:** S05-S17 (KNOW-D2-004)

---

#### `VOC-CC26-D2-098` — **Direction, Oversight, and Accountability**
- **Thai Meaning (ความหมายภาษาไทย):** ทิศทาง การกำกับติดตาม และความรับผิดชอบ (เสาหลักการกำกับดูแล)
- **Category:** `exam_language` | **Status:** `source_supported`
- **English Definition:** The three core functional pillars of cybersecurity governance: setting strategic direction, maintaining continuous operational oversight, and ensuring clear executive accountability for security outcomes.
- **Thai Explanation:** สามเสาหลักสำคัญของการกำกับดูแลความมั่นคงปลอดภัย: การกำหนดทิศทางเชิงกลยุทธ์ (Direction), การกำกับติดตามการดำเนินงานอย่างต่อเนื่อง (Oversight) และการสร้างความรับผิดชอบที่ตรวจสอบได้สำหรับผลลัพธ์ด้านความปลอดภัย (Accountability)
- **Exam Relevance & Strategy:** Reading Clue: Whenever an exam stem refers to providing strategic direction, executive oversight, or final accountability, the question points to Governance rather than technical administration.
- **English Example:** *"The board established direction, oversight, and accountability by creating an independent cyber risk committee that reports quarterly."*
- **Thai Example:** *"คณะกรรมการบริษัทได้สร้างทิศทาง การกำกับติดตาม และความรับผิดชอบ โดยจัดตั้งคณะกรรมการความเสี่ยงไซเบอร์อิสระที่รายงานผลทุกไตรมาส"*
- **Confused With:** Operations and Management
- **Keywords:** `Direction`, `Oversight`, `Accountability`, `Governance Pillars`, `Exam Reading Clue`
- **Evidence Sources:** S02 (KNOW-D2-002)

---

#### `VOC-CC26-D2-099` — **BEST (Risk Treatment Strategy)**
- **Thai Meaning (ความหมายภาษาไทย):** เหมาะสมที่สุด (การเลือกวิธีจัดการความเสี่ยง)
- **Category:** `exam_language` | **Status:** `source_supported`
- **English Definition:** An exam qualifier principle establishing that the 'BEST' risk response strategy depends on the organization's documented risk appetite, asset value, and cost-benefit balance, rather than default rules.
- **Thai Explanation:** หลักการพิจารณาคำคุณศัพท์ในข้อสอบที่ว่า วิธีจัดการความเสี่ยงที่ 'เหมาะสมที่สุด' (BEST) ขึ้นอยู่กับระดับการเปิดรับความเสี่ยงที่กำหนดไว้ (Risk Appetite) มูลค่าของทรัพย์สิน และความคุ้มค่าของการลงทุน ไม่ใช่ว่าวิธีใดวิธีหนึ่งจะดีที่สุดเสมอไปในทุกกรณี
- **Exam Relevance & Strategy:** Exam Qualifier: Questions asking for the BEST treatment require evaluating business context. Mitigation is not always superior to acceptance if control costs exceed the asset value.
- **English Example:** *"When control implementation costs exceed the total asset value, the BEST treatment is often formal risk acceptance by an authorized leader."*
- **Thai Example:** *"เมื่อต้นทุนในการติดตั้งมาตรการควบคุมสูงกว่ามูลค่ารวมของทรัพย์สิน วิธีการจัดการที่เหมาะสมที่สุด (BEST) มักเป็นการยอมรับความเสี่ยงอย่างเป็นทางการโดยผู้บริหารที่มีอำนาจ"*
- **Confused With:** Mitigation is Always Best
- **Keywords:** `BEST`, `Risk Treatment`, `Risk Appetite`, `Cost-Benefit`, `Decision Qualifier`
- **Evidence Sources:** S10 (KNOW-D2-013)

---


### Objective 2.2: Understand Business Continuity (BC) and Disaster Recovery (DR) Concepts (BCP, DRP, BIA, RTO, RPO, Recovery Sites, Testing) (24 entries)

#### `VOC-CC26-D2-030` — **Business Continuity**
- **Thai Meaning (ความหมายภาษาไทย):** ความต่อเนื่องทางธุรกิจ
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `BC` | **Full Form:** Business Continuity
- **English Definition:** The comprehensive, strategic enterprise capability and discipline that ensures critical business functions can continue operating during and following a major operational disruption.
- **Thai Explanation:** ขีดความสามารถและระเบียบปฏิบัติเชิงกลยุทธ์ระดับองค์กรที่ทำให้แน่ใจว่ากระบวนการทางธุรกิจที่สำคัญยิ่งยวดจะยังคงดำเนินต่อไปได้ ทั้งในระหว่างและหลังเกิดเหตุการณ์หยุดชะงักครั้งใหญ่
- **Exam Relevance & Strategy:** Business Continuity covers the entire organization (people, physical facilities, supply chains, customer communications), while Disaster Recovery focuses specifically on technical IT restoration.
- **English Example:** *"During the regional blizzard, the company activated its business continuity procedures, allowing customer support representatives to work seamlessly from home."*
- **Thai Example:** *"ในระหว่างพายุหิมะระดับภูมิภาค บริษัทได้เปิดใช้ขั้นตอนความต่อเนื่องทางธุรกิจ ทำให้เจ้าหน้าที่บริการลูกค้าสามารถสลับไปทำงานจากที่บ้านได้อย่างราบรื่น"*
- **Confused With:** Disaster Recovery, Incident Response
- **Keywords:** `Business Continuity`, `BC`, `Critical Operations`, `Enterprise Capability`, `Resilience`
- **Evidence Sources:** S11-S12 (KNOW-D2-016)

---

#### `VOC-CC26-D2-031` — **Business Continuity Plan**
- **Thai Meaning (ความหมายภาษาไทย):** แผนความต่อเนื่องทางธุรกิจ
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `BCP` | **Full Form:** Business Continuity Plan
- **English Definition:** A documented operational playbook detailing explicit procedures, manual workarounds, alternate work facilities, and contact chains to maintain critical enterprise operations during a crisis.
- **Thai Explanation:** คู่มือปฏิบัติการที่ได้รับการบันทึกเป็นลายลักษณ์อักษร ซึ่งระบุขั้นตอนการทำงานจริง แผนสำรองแบบใช้แรงคน (Manual workarounds) สถานที่ทำงานสำรอง และสายการติดต่อ เพื่อรักษาการดำเนินธุรกิจระหว่างวิกฤต
- **Exam Relevance & Strategy:** The BCP is business-focused and operational. It details how employees conduct daily business when regular office facilities, power, or vendor services are unavailable.
- **English Example:** *"When the corporate headquarters lost grid power, the BCP guided the immediate relocation of payroll staff to an alternate branch office."*
- **Thai Example:** *"เมื่อสำนักงานใหญ่ประสบปัญหาไฟฟ้าดับ แผน BCP ได้ให้แนวทางในการย้ายทีมงานจ่ายเงินเดือนไปยังสำนักงานสาขาสำรองได้ทันที"*
- **Confused With:** Disaster Recovery Plan (DRP), Incident Response Plan (IRP)
- **Keywords:** `BCP`, `Playbook`, `Manual Workaround`, `Staff Relocation`, `Operations Continuity`
- **Evidence Sources:** S13-S14 (KNOW-D2-017)

---

#### `VOC-CC26-D2-032` — **Disaster Recovery**
- **Thai Meaning (ความหมายภาษาไทย):** การกู้คืนระบบหลังภัยพิบัติ
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `DR` | **Full Form:** Disaster Recovery
- **English Definition:** The specialized technical discipline and processes focused on recovering, rebuilding, and restoring damaged information technology infrastructure, servers, network links, and digital data after a catastrophe.
- **Thai Explanation:** ระเบียบปฏิบัติและกระบวนการทางเทคนิคเฉพาะทางที่มุ่งเน้นการกู้คืน ซ่อมแซม และฟื้นฟูโครงสร้างพื้นฐานไอที เซิร์ฟเวอร์ เครือข่าย และข้อมูลดิจิทัลที่เสียหายหลังเกิดภัยพิบัติ
- **Exam Relevance & Strategy:** DR is technically oriented (hardware, virtual machines, database backups, network links). It serves as a technical subset supporting broader Business Continuity goals.
- **English Example:** *"Following the server room flood, the disaster recovery team initiated secondary data center spin-ups to restore production database clusters."*
- **Thai Example:** *"หลังจากเกิดเหตุน้ำท่วมห้องเซิร์ฟเวอร์ ทีมกู้คืนระบบหลังภัยพิบัติได้เริ่มเปิดการทำงานของศูนย์ข้อมูลสำรองเพื่อฟื้นฟูฐานข้อมูลหลักในทันที"*
- **Confused With:** Business Continuity, Incident Containment
- **Keywords:** `Disaster Recovery`, `DR`, `IT Restoration`, `Infrastructure`, `Data Recovery`
- **Evidence Sources:** S15-S16 (KNOW-D2-018)

---

#### `VOC-CC26-D2-033` — **Disaster Recovery Plan**
- **Thai Meaning (ความหมายภาษาไทย):** แผนกู้คืนระบบหลังภัยพิบัติ
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `DRP` | **Full Form:** Disaster Recovery Plan
- **English Definition:** A documented, step-by-step technical runbook specifying procedures for restoring server hardware, operating systems, cloud backups, network configurations, and databases after a disaster.
- **Thai Explanation:** คู่มือขั้นตอนทางเทคนิค (Technical runbook) ที่บันทึกไว้อย่างชัดเจนสำหรับการกู้คืนฮาร์ดแวร์เซิร์ฟเวอร์ ระบบปฏิบัติการ ข้อมูลสำรองบนคลาวด์ การกำหนดค่าเครือข่าย และฐานข้อมูลหลังเกิดภัยพิบัติ
- **Exam Relevance & Strategy:** The DRP contains exact technical restore commands, boot order dependencies, IP reconfigurations, and cryptographic key recoveries. It answers 'how do we restore IT systems?'.
- **English Example:** *"The system engineer followed the DRP step-by-step to restore the storage volume from immutable cloud snapshots within three hours."*
- **Thai Example:** *"วิศวกรระบบปฏิบัติตามแผน DRP ทีละขั้นตอนเพื่อกู้คืนพื้นที่จัดเก็บข้อมูลจากสแนปช็อตบนคลาวด์ที่ไม่สามารถแก้ไขได้ภายใน 3 ชั่วโมง"*
- **Confused With:** Business Continuity Plan (BCP), SLA
- **Keywords:** `DRP`, `Technical Runbook`, `System Recovery`, `Backup Restore`, `IT Infrastructure`
- **Evidence Sources:** S18-S19 (KNOW-D2-019)

---

#### `VOC-CC26-D2-034` — **Business Impact Analysis**
- **Thai Meaning (ความหมายภาษาไทย):** การวิเคราะห์ผลกระทบทางธุรกิจ
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `BIA` | **Full Form:** Business Impact Analysis
- **English Definition:** A formal, systematic assessment process that identifies critical business processes, determines the quantitative and qualitative consequences of operational disruption, and establishes recovery priorities (RTO and RPO).
- **Thai Explanation:** กระบวนการประเมินอย่างเป็นทางการและเป็นระบบที่ใช้ระบุกระบวนการทางธุรกิจที่มีความสำคัญยิ่งยวด ประเมินผลกระทบทั้งเชิงปริมาณและเชิงคุณภาพหากเกิดการหยุดชะงัก และกำหนดลำดับความสำคัญในการกู้คืน (RTO และ RPO)
- **Exam Relevance & Strategy:** The BIA is conducted BEFORE drafting BCP or DRP. It provides the empirical justification and target recovery metrics (RTO, RPO, MTD) for subsequent continuity investments.
- **English Example:** *"The hospital's BIA identified the patient electronic records database as the highest priority system, demanding an RTO of under one hour."*
- **Thai Example:** *"การวิเคราะห์ BIA ของโรงพยาบาลระบุว่าฐานข้อมูลเวชระเบียนอิเล็กทรอนิกส์เป็นระบบที่มีความสำคัญสูงสุด ซึ่งต้องการ RTO น้อยกว่า 1 ชั่วโมง"*
- **Confused With:** Risk Assessment, Vulnerability Assessment
- **Keywords:** `BIA`, `Business Impact`, `Critical Functions`, `Recovery Priorities`, `RTO Establishment`
- **Evidence Sources:** S19 (KNOW-D2-020)

---

#### `VOC-CC26-D2-035` — **Recovery Time Objective**
- **Thai Meaning (ความหมายภาษาไทย):** วัตถุประสงค์ระยะเวลาการกู้คืน (ระยะเวลาหยุดระบบสูงสุดที่ยอมรับได้)
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `RTO` | **Full Form:** Recovery Time Objective
- **English Definition:** The targeted maximum acceptable duration of time that a system, network, or business process can remain offline following a disruption before unacceptable business damage occurs.
- **Thai Explanation:** ระยะเวลาสูงสุดที่ยอมรับได้ในการที่ระบบ เครือข่าย หรือกระบวนการทางธุรกิจจะหยุดทำงานหลังเกิดเหตุ ก่อนที่จะเกิดความเสียหายร้ายแรงต่อธุรกิจที่ไม่สามารถรับได้
- **Exam Relevance & Strategy:** RTO answers 'How quickly must we restore the system?'. Shorter RTO requires costlier recovery solutions like hot sites or active-active failover clusters.
- **English Example:** *"Because credit card authorization cannot tolerate extended downtime, the payment gateway set a strict RTO of 15 minutes."*
- **Thai Example:** *"เนื่องจากระบบอนุมัติบัตรเครดิตไม่สามารถทนต่อการหยุดทำงานเป็นเวลานานได้ เกตเวย์การชำระเงินจึงกำหนด RTO ที่เข้มงวดไว้ที่ 15 นาที"*
- **Confused With:** Recovery Point Objective (RPO), Maximum Tolerable Downtime (MTD)
- **Keywords:** `RTO`, `Downtime Target`, `System Unavailability`, `Recovery Duration`, `BIA Metric`
- **Evidence Sources:** S18-S19 (KNOW-D2-021)

---

#### `VOC-CC26-D2-036` — **Recovery Point Objective**
- **Thai Meaning (ความหมายภาษาไทย):** วัตถุประสงค์จุดกู้คืนข้อมูล (ปริมาณข้อมูลสูญเสียสูงสุดที่ยอมรับได้ในหน่วยเวลา)
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `RPO` | **Full Form:** Recovery Point Objective
- **English Definition:** The targeted maximum acceptable amount of data loss measured in time, representing the age of files or transactions that must be recovered from backup storage for normal operations to resume.
- **Thai Explanation:** ปริมาณการสูญเสียข้อมูลสูงสุดที่ยอมรับได้ซึ่งวัดในหน่วยของเวลา โดยแสดงถึงจุดย้อนหลังของข้อมูลหรือธุรกรรมที่ต้องกู้คืนได้จากระบบสำรองข้อมูลเพื่อให้ธุรกิจกลับมาดำเนินงานได้
- **Exam Relevance & Strategy:** RPO answers 'How much data can we afford to lose?'. An RPO of 2 hours means backups must be taken at least every 2 hours, or synchronous replication employed.
- **English Example:** *"The financial trading platform maintains synchronous database replication across zones to achieve an RPO of zero seconds."*
- **Thai Example:** *"แพลตฟอร์มการซื้อขายทางการเงินใช้การจำลองฐานข้อมูลแบบซิงโครนัสข้ามโซนเพื่อให้บรรลุเป้าหมาย RPO ที่ 0 วินาที (ไม่ยอมให้ข้อมูลสูญหาย)"*
- **Confused With:** Recovery Time Objective (RTO), Backup Frequency
- **Keywords:** `RPO`, `Data Loss`, `Point in Time`, `Backup Schedule`, `Replication`
- **Evidence Sources:** S18-S19 (KNOW-D2-022)

---

#### `VOC-CC26-D2-037` — **Maximum Tolerable Downtime**
- **Thai Meaning (ความหมายภาษาไทย):** ระยะเวลาการหยุดทำงานสูงสุดที่องค์กรทนได้
- **Category:** `core_term` | **Status:** `supplemental`
- **Acronym:** `MTD` | **Full Form:** Maximum Tolerable Downtime
- **English Definition:** The absolute maximum elapsed time that an organization can survive the loss of a critical business function before suffering catastrophic or irreversible harm.
- **Thai Explanation:** ระยะเวลาสูงสุดอย่างเด็ดขาดที่องค์กรจะสามารถอยู่รอดได้จากการหยุดทำงานของกระบวนการธุรกิจสำคัญ ก่อนที่จะเกิดความเสียหายร้ายแรงต่อความอยู่รอดขององค์กรจนไม่สามารถฟื้นฟูกลับมาได้
- **Exam Relevance & Strategy:** MTD represents the overarching ceiling established by executive leadership in the BIA. By definition, RTO must always be set shorter than or equal to MTD (RTO <= MTD).
- **English Example:** *"Executive leadership established an MTD of 24 hours for online banking, ensuring that the technical RTO was planned for no more than 4 hours."*
- **Thai Example:** *"ผู้บริหารระดับสูงกำหนด MTD ไว้ที่ 24 ชั่วโมงสำหรับบริการธนาคารออนไลน์ เพื่อให้แน่ใจว่า RTO ทางเทคนิคถูกวางแผนไว้ไม่เกิน 4 ชั่วโมง"*
- **Confused With:** RTO, RPO
- **Keywords:** `MTD`, `Maximum Tolerable Downtime`, `Outage Limit`, `Catastrophic Boundary`, `BIA Metric`
- **Evidence Sources:** Sec 3.2 (KNOW-D2-020)

---

#### `VOC-CC26-D2-038` — **RTO vs RPO**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง RTO และ RPO
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** RTO measures system downtime (how long until operations are restored), whereas RPO measures data loss (how far back in time transactional data is lost from the point of failure).
- **Thai Explanation:** การเปรียบเทียบความแตกต่าง: RTO วัดระยะเวลาที่ระบบหยุดทำงาน (ต้องใช้เวลานานเท่าใดในการกู้คืนระบบให้กลับมาเปิดใช้) ในขณะที่ RPO วัดปริมาณข้อมูลที่สูญหายในหน่วยเวลา (ยอมให้ข้อมูลสูญหายย้อนหลังได้มากที่สุดเท่าใด)
- **Exam Relevance & Strategy:** Extremely high exam frequency. Scenarios describe a failure and ask which metric was violated (e.g. system restored in 3 hours vs 2-hour target = RTO violation; lost 6 hours of orders vs 1-hour target = RPO violation).
- **English Example:** *"When the server outage lasted four hours and lost two hours of database entries, the company evaluated both its RTO performance and RPO compliance."*
- **Thai Example:** *"เมื่อเซิร์ฟเวอร์หยุดทำงานไป 4 ชั่วโมงและข้อมูลธุรกรรมสูญหายไป 2 ชั่วโมง บริษัทได้ประเมินทั้งประสิทธิภาพของ RTO และการปฏิบัติตามเกณฑ์ RPO"*
- **Confused With:** MTD vs RTO, KPI vs KRI
- **Keywords:** `RTO vs RPO`, `Downtime vs Data Loss`, `Time Metrics`, `BIA Distinction`
- **Evidence Sources:** S18-S19 (KNOW-D2-021)

---

#### `VOC-CC26-D2-039` — **BCP vs DRP**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง BCP และ DRP
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** BCP is broad and organization-wide, focusing on keeping business operations and staff working, while DRP is technical, focusing on recovering IT systems, networks, and data.
- **Thai Explanation:** การเปรียบเทียบความแตกต่าง: BCP ครอบคลุมภาพรวมทั่วทั้งองค์กร (คน สถานที่ทำงาน การสื่อสาร กระบวนการธุรกิจ) เพื่อให้ธุรกิจดำเนินต่อได้ ส่วน DRP มุ่งเน้นทางเทคนิคด้านไอทีโดยเฉพาะเพื่อกู้คืนเซิร์ฟเวอร์ ข้อมูล และเครือข่าย
- **Exam Relevance & Strategy:** Exam scenarios ask whether relocating staff to an alternate office or switching to manual invoicing is BCP or DRP (Answer: BCP). Restoring database backups from snapshots is DRP.
- **English Example:** *"While the IT team executed the DRP to rebuild corrupted application servers, branch managers enacted the BCP to take manual customer orders on paper."*
- **Thai Example:** *"ในขณะที่ทีมไอทีดำเนินการตามแผน DRP เพื่อสร้างเซิร์ฟเวอร์แอปพลิเคชันขึ้นใหม่ ผู้จัดการสาขาได้เปิดใช้แผน BCP เพื่อรับใบสั่งซื้อของลูกค้าด้วยกระดาษแทน"*
- **Confused With:** IRP vs BCP
- **Keywords:** `BCP vs DRP`, `Business vs Technical`, `Operations vs IT`, `Continuity Distinction`
- **Evidence Sources:** S19 (KNOW-D2-016)

---

#### `VOC-CC26-D2-040` — **Backup Strategy**
- **Thai Meaning (ความหมายภาษาไทย):** กลยุทธ์การสำรองข้อมูล
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The systematic architecture and scheduling of data duplication to separate offsite or cloud facilities to ensure data recoverability in the event of localized physical disaster, corruption, or ransomware.
- **Thai Explanation:** สถาปัตยกรรมและการจัดตารางการทำสำเนาข้อมูลอย่างเป็นระบบไปยังสถานที่ห่างไกลหรือคลาวด์ เพื่อให้มั่นใจว่าจะสามารถกู้คืนข้อมูลได้เมื่อเกิดภัยพิบัติทางกายภาพในพื้นที่ ข้อมูลเสียหาย หรือถูกโจมตีด้วยมัลแวร์เรียกค่าไถ่
- **Exam Relevance & Strategy:** Simply taking backups does not guarantee recovery. Backups must be geographically separated, protected against unauthorized modification (immutability), and regularly tested via restore drills.
- **English Example:** *"The enterprise adopted a 3-2-1 backup strategy, keeping three copies on two different media types with one copy stored in an immutable offsite cloud repository."*
- **Thai Example:** *"องค์กรนำกลยุทธ์การสำรองข้อมูลแบบ 3-2-1 มาใช้ โดยเก็บข้อมูล 3 ชุดบนสื่อ 2 ประเภท และจัดเก็บอย่างน้อย 1 ชุดไว้บนคลาวด์ภายนอกที่ไม่สามารถถูกแก้ไขได้"*
- **Confused With:** Data Archiving, High Availability
- **Keywords:** `Backup Strategy`, `Geographic Separation`, `Offsite Backup`, `Immutability`, `Data Protection`
- **Evidence Sources:** S18 (KNOW-D2-023)

---

#### `VOC-CC26-D2-041` — **Hot Site**
- **Thai Meaning (ความหมายภาษาไทย):** ศูนย์กู้คืนระบบแบบพร้อมใช้งานทันที (Hot Site)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A fully equipped, fully configured alternate data processing site with compatible hardware, active telecommunications, power, HVAC, and near-real-time synchronized data replicas, ready for cutover within minutes to hours.
- **Thai Explanation:** ศูนย์คอมพิวเตอร์สำรองที่มีความพร้อมสูงสุด ซึ่งติดตั้งฮาร์ดแวร์ อุปกรณ์เครือข่าย ระบบไฟฟ้า ระบบปรับอากาศ และมีการซิงโครไนซ์ข้อมูลแบบเรียลไทม์ไว้พร้อมใช้งาน ทำให้สามารถสลับการทำงานได้ภายในไม่กี่นาทีถึงไม่กี่ชั่วโมง
- **Exam Relevance & Strategy:** Hot sites provide the shortest RTO and RPO, but carry the highest ongoing operational cost. They are reserved for mission-critical operations where downtime causes immediate catastrophic financial loss.
- **English Example:** *"The stock exchange maintains a hot site twenty miles outside the city with continuous live transaction replication ready for immediate automated failover."*
- **Thai Example:** *"ตลาดหลักทรัพย์มีศูนย์คอมพิวเตอร์สำรองแบบ Hot Site อยู่นอกเมือง 20 ไมล์ พร้อมการซิงค์ธุรกรรมสดอย่างต่อเนื่องเพื่อรองรับการสลับระบบอัตโนมัติได้ทันที"*
- **Confused With:** Warm Site, Cold Site
- **Keywords:** `Hot Site`, `Immediate Cutover`, `Synchronized Data`, `Short RTO`, `Disaster Recovery Facility`
- **Evidence Sources:** S18 (KNOW-D2-024)

---

#### `VOC-CC26-D2-042` — **Warm Site**
- **Thai Meaning (ความหมายภาษาไทย):** ศูนย์กู้คืนระบบแบบพร้อมใช้งานบางส่วน (Warm Site)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A partially equipped alternate facility containing physical utilities, network connections, and select server hardware, requiring current backup restoration and final software configuration before operations can begin (hours to days).
- **Thai Explanation:** ศูนย์คอมพิวเตอร์สำรองที่มีความพร้อมบางส่วน โดยมีระบบสาธารณูปโภค เครือข่าย และฮาร์ดแวร์เซิร์ฟเวอร์หลักบางส่วนติดตั้งไว้แล้ว แต่จำเป็นต้องนำข้อมูลสำรองล่าสุดมากู้คืนและตั้งค่าซอฟต์แวร์ก่อนเปิดใช้งาน (ใช้เวลาหลักชั่วโมงถึงหลายวัน)
- **Exam Relevance & Strategy:** A warm site balances cost against recovery time. It costs significantly less than a hot site while offering a much shorter recovery window than an unequipped cold site.
- **English Example:** *"The regional insurance firm chose a warm site, accepting that restoring customer databases from cloud backups would require 18 hours after a disaster declaration."*
- **Thai Example:** *"บริษัทประกันภัยระดับภูมิภาคเลือกใช้ Warm Site โดยยอมรับว่าการกู้คืนฐานข้อมูลลูกค้าจากข้อมูลสำรองบนคลาวด์จะต้องใช้เวลาประมาณ 18 ชั่วโมงหลังประกาศภัยพิบัติ"*
- **Confused With:** Hot Site, Cold Site
- **Keywords:** `Warm Site`, `Partially Equipped`, `Backup Restoration`, `Balanced Cost`, `Hours to Days`
- **Evidence Sources:** S18 (KNOW-D2-025)

---

#### `VOC-CC26-D2-043` — **Cold Site**
- **Thai Meaning (ความหมายภาษาไทย):** ศูนย์กู้คืนระบบที่มีเฉพาะโครงสร้างพื้นฐานอาคาร (Cold Site)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An alternate facility providing physical floor space, basic environmental utilities (power, HVAC, lighting), and telecommunications cabling, but ZERO pre-installed computing hardware, servers, or active data.
- **Thai Explanation:** ศูนย์สำรองที่จัดเตรียมไว้เฉพาะพื้นที่อาคาร ระบบสาธารณูปโภคพื้นฐาน (ไฟฟ้า ระบบปรับอากาศ แสงสว่าง) และสายสัญญาณ แต่ไม่มีคอมพิวเตอร์ เซิร์ฟเวอร์ หรือข้อมูลติดตั้งอยู่ล่วงหน้าเลย (ต้องจัดซื้อ ขนส่ง ติดตั้งใหม่ทั้งหมด)
- **Exam Relevance & Strategy:** Correction per NIST SP 800-34: A cold site DOES have power, HVAC, and raised flooring; what it lacks is computer servers and data. Recovery takes days to weeks, making it the least expensive option.
- **English Example:** *"For non-critical archival retrieval, the logistics company contracted a cold site space, knowing server procurement and delivery would take at least one week."*
- **Thai Example:** *"สำหรับการค้นหาเอกสารคลังข้อมูลที่ไม่เร่งด่วน บริษัทโลจิสติกส์ได้ทำสัญญาเช่าพื้นที่ Cold Site โดยตระหนักดีว่าการจัดซื้อและส่งมอบเซิร์ฟเวอร์จะต้องใช้เวลาอย่างน้อยหนึ่งสัปดาห์"*
- **Confused With:** Hot Site, Warm Site
- **Keywords:** `Cold Site`, `No Pre-installed Hardware`, `Building Shell`, `Lowest Cost`, `Days to Weeks`, `NIST SP 800-34`
- **Evidence Sources:** S18 (KNOW-D2-026)

---

#### `VOC-CC26-D2-044` — **Hot vs Warm vs Cold Recovery Sites**
- **Thai Meaning (ความหมายภาษาไทย):** การเปรียบเทียบ Hot Site, Warm Site และ Cold Site
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** Hot Sites have synchronized data and hardware ready immediately (minutes/hours; most expensive). Warm Sites have hardware but require restoring backups (hours/days; moderate cost). Cold Sites have space and power but no hardware (days/weeks; least expensive).
- **Thai Explanation:** การเปรียบเทียบศูนย์กู้คืน: Hot Site มีฮาร์ดแวร์และข้อมูลซิงค์สดพร้อมใช้ทันที (แพงที่สุด) Warm Site มีฮาร์ดแวร์บางส่วนแต่ต้องกู้ข้อมูลสำรอง (ราคาปานกลาง) Cold Site มีเฉพาะอาคารและไฟฟ้าแต่ไม่มีฮาร์ดแวร์ (ถูกที่สุด ใช้เวลากู้คืนนานสุด)
- **Exam Relevance & Strategy:** Exam scenarios ask which site type to choose when an organization requires a specific recovery timeframe (RTO) or has budget constraints.
- **English Example:** *"Evaluating recovery options, the organization selected a hot site for its real-time transaction processing and a warm site for internal employee portals."*
- **Thai Example:** *"ในการประเมินทางเลือกการกู้คืน องค์กรเลือกใช้ Hot Site สำหรับการประมวลผลธุรกรรมแบบเรียลไทม์ และเลือกใช้ Warm Site สำหรับระบบพอร์ทัลภายในของพนักงาน"*
- **Confused With:** Cloud vs On-Premises
- **Keywords:** `Site Comparison`, `Hot Warm Cold`, `RTO Tradeoff`, `Disaster Recovery Facility`
- **Evidence Sources:** S18 (KNOW-D2-024)

---

#### `VOC-CC26-D2-045` — **Disaster Recovery Testing**
- **Thai Meaning (ความหมายภาษาไทย):** การทดสอบแผนกู้คืนระบบหลังภัยพิบัติ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The formal evaluation and validation of disaster recovery plans, backup data integrity, and recovery procedures through recurring exercises of increasing operational complexity.
- **Thai Explanation:** การประเมินและตรวจสอบความถูกต้องของแผนกู้คืนระบบ ความสมบูรณ์ของข้อมูลสำรอง และขั้นตอนการกู้คืน ผ่านการฝึกซ้อมที่มีระดับความซับซ้อนของการปฏิบัติการเพิ่มขึ้นเป็นประจำ
- **Exam Relevance & Strategy:** An untested disaster plan is merely a theory. Regular testing discovers procedural flaws, outdated contact numbers, and corrupted backups before an actual catastrophe strikes.
- **English Example:** *"Quarterly disaster recovery testing revealed that an undocumented encryption key dependency prevented the customer database from booting properly."*
- **Thai Example:** *"การทดสอบแผนกู้คืนระบบประจำไตรมาสตรวจพบว่า การมีคีย์เข้ารหัสที่ไม่ได้รับการบันทึกในเอกสารทำให้ฐานข้อมูลลูกค้าไม่สามารถบูตระบบขึ้นมาได้อย่างถูกต้อง"*
- **Confused With:** Penetration Testing, Vulnerability Scanning
- **Keywords:** `DR Testing`, `Plan Validation`, `Restore Verification`, `Exercise Types`, `Preparedness`
- **Evidence Sources:** S18 (KNOW-D2-027)

---

#### `VOC-CC26-D2-046` — **Tabletop Exercise**
- **Thai Meaning (ความหมายภาษาไทย):** การฝึกซ้อมแผนแบบจำลองบนโต๊ะ (Tabletop Exercise)
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** A structured, discussion-based disaster recovery exercise where key stakeholders review an emergency scenario around a conference table to assess roles and plan effectiveness without disrupting live operations.
- **Thai Explanation:** การฝึกซ้อมแผนการกู้คืนแบบพูดคุยแลกเปลี่ยน โดยผู้มีส่วนเกี่ยวข้องหลักจะนั่งประชุมร่วมกันรอบโต๊ะเพื่อซักซ้อมบทบาทหน้าที่และประเมินประสิทธิผลของแผนตามสถานการณ์สมมติ โดยไม่กระทบต่อการทำงานจริง
- **Exam Relevance & Strategy:** Tabletop exercises are cost-effective, low-stress, and cause zero operational interruption. They are ideal for validating decision-making chains and communications before conducting technical simulations.
- **English Example:** *"The executive team participated in a two-hour tabletop exercise simulating a catastrophic ransomware lockout across all regional branch servers."*
- **Thai Example:** *"ทีมผู้บริหารเข้าร่วมการฝึกซ้อมบนโต๊ะเป็นเวลา 2 ชั่วโมง เพื่อจำลองสถานการณ์การถูกโจมตีด้วยมัลแวร์เรียกค่าไถ่ที่ล็อคเซิร์ฟเวอร์ของทุกสาขาในภูมิภาค"*
- **Confused With:** Simulation Exercise, Full Interruption Test
- **Keywords:** `Tabletop Exercise`, `Discussion Based`, `Zero Disruption`, `Walkthrough`, `Role Clarification`
- **Evidence Sources:** S18 (KNOW-D2-027)

---

#### `VOC-CC26-D2-047` — **Simulation Exercise**
- **Thai Meaning (ความหมายภาษาไทย):** การฝึกซ้อมแผนแบบจำลองสถานการณ์จริง
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** A hands-on disaster recovery drill where technical personnel execute recovery procedures in an isolated staging environment using actual backup data without terminating production operations.
- **Thai Explanation:** การฝึกซ้อมกู้คืนระบบแบบลงมือปฏิบัติจริง โดยเจ้าหน้าที่ฝ่ายเทคนิคจะดำเนินการกู้คืนระบบในสภาพแวดล้อมทดสอบที่แยกออกมาต่างหาก โดยใช้ข้อมูลสำรองจริงโดยไม่หยุดการทำงานของระบบจริง
- **Exam Relevance & Strategy:** Simulation exercises test technical staff skills and verify that data backups can actually be restored within the targeted RTO, without risking downtime in the live production environment.
- **English Example:** *"During the annual simulation exercise, engineers successfully restored a 10-terabyte database to test servers in 45 minutes."*
- **Thai Example:** *"ในระหว่างการฝึกซ้อมจำลองสถานการณ์ประจำปี วิศวกรสามารถกู้คืนฐานข้อมูลขนาด 10 เทราไบต์ไปยังเซิร์ฟเวอร์ทดสอบได้สำเร็จภายใน 45 นาที"*
- **Confused With:** Tabletop Exercise, Full Interruption Test
- **Keywords:** `Simulation`, `Technical Drill`, `Isolated Environment`, `Hands-on`, `Restore Validation`
- **Evidence Sources:** S18 (KNOW-D2-027)

---

#### `VOC-CC26-D2-048` — **Cutover Test**
- **Thai Meaning (ความหมายภาษาไทย):** การทดสอบสลับระบบเต็มรูปแบบ (Cutover / Full Interruption Test)
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** The most rigorous disaster recovery test in which production operations at the primary site are deliberately shut down and fully transferred to the alternate recovery facility.
- **Thai Explanation:** การทดสอบแผนกู้คืนระบบที่เข้มงวดและสมจริงที่สุด โดยการจงใจปิดการทำงานของระบบจริงที่ศูนย์หลัก และสลับการให้บริการทั้งหมดไปยังศูนย์กู้คืนระบบสำรองอย่างเต็มรูปแบบ
- **Exam Relevance & Strategy:** Full cutover tests provide the highest level of assurance, but also carry the highest operational risk. They are conducted during planned maintenance windows with executive sign-off.
- **English Example:** *"Over the holiday weekend, the bank performed a planned cutover test, directing all live mobile banking traffic to its secondary data center."*
- **Thai Example:** *"ในช่วงวันหยุดยาว ธนาคารได้ดำเนินการทดสอบสลับระบบเต็มรูปแบบ โดยโอนถ่ายทราฟฟิกบริการโมบายแบงก์กิ้งจริงทั้งหมดไปยังศูนย์ข้อมูลสำรอง"*
- **Confused With:** Parallel Test, Tabletop Exercise
- **Keywords:** `Cutover Test`, `Full Interruption`, `Live Failover`, `Highest Assurance`, `Operational Risk`
- **Evidence Sources:** S18 (KNOW-D2-027)

---

#### `VOC-CC26-D2-049` — **Failover vs Fallback**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง Failover และ Fallback
- **Category:** `scenario_vocabulary` | **Status:** `editorial_synthesis`
- **English Definition:** Failover is switching operational processing from a failed primary system to an alternate standby system during a crisis. Fallback (failback) is returning operations back to the restored primary system once normal conditions resume.
- **Thai Explanation:** การเปรียบเทียบ: Failover คือการสลับการทำงานจากระบบหลักที่ขัดข้องไปยังระบบสำรองระหว่างเกิดเหตุฉุกเฉิน ส่วน Fallback (หรือ Failback) คือกระบวนการย้ายการทำงานทั้งหมดกลับมายังระบบหลักเดิมหลังจากได้รับการซ่อมแซมและกู้คืนความพร้อมแล้ว
- **Exam Relevance & Strategy:** Disaster recovery plans must address BOTH phases. A plan that only describes failover will leave an organization stranded on secondary hardware with unsynchronized data when returning to normal.
- **English Example:** *"After successfully executing failover during the generator failure, the engineering team planned the fallback procedure for midnight to avoid daytime service disruption."*
- **Thai Example:** *"หลังจากการสลับระบบ (Failover) สำเร็จในระหว่างเครื่องปั่นไฟขัดข้อง ทีมวิศวกรได้วางแผนกระบวนการย้ายระบบกลับ (Fallback) ในช่วงเที่ยงคืนเพื่อหลีกเลี่ยงผลกระทบต่อผู้ใช้"*
- **Confused With:** Load Balancing, Redundancy
- **Keywords:** `Failover`, `Fallback`, `Failback`, `Switchover`, `Return to Normal`
- **Evidence Sources:** S18 (KNOW-D2-019)

---

#### `VOC-CC26-D2-050` — **Operational Resilience**
- **Thai Meaning (ความหมายภาษาไทย):** ความสามารถในการฟื้นตัวของการดำเนินงาน (Operational Resilience)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The ability of an enterprise to anticipate, absorb, adapt to, and rapidly recover from adverse events, shocks, and chronic stresses while maintaining delivery of critical services.
- **Thai Explanation:** ความสามารถขององค์กรในการคาดการณ์ รองรับ ปรับตัว และฟื้นตัวอย่างรวดเร็วจากเหตุการณ์ไม่พึงประสงค์ การหยุดชะงัก หรือความกดดัน โดยยังคงสามารถส่งมอบบริการที่มีความสำคัญยิ่งยวดต่อไปได้
- **Exam Relevance & Strategy:** Operational resilience represents the modern evolution beyond traditional static disaster recovery. It focuses on end-to-end service continuity rather than just restoring isolated servers.
- **English Example:** *"By adopting multi-cloud architecture and redundant supplier networks, the fintech startup achieved superior operational resilience against regional outages."*
- **Thai Example:** *"ด้วยการนำสถาปัตยกรรมแบบมัลติคลาวด์และเครือข่ายผู้จัดหาวัตถุดิบสำรองมาใช้ สตาร์ทอัพฟินเทคจึงบรรลุความพร้อมในการฟื้นตัวของการดำเนินงานที่ดีเยี่ยมเมื่อเกิดเหตุระบบล่มในภูมิภาค"*
- **Confused With:** Fault Tolerance, High Availability
- **Keywords:** `Operational Resilience`, `Adaptability`, `Service Continuity`, `End-to-End Resilience`
- **Evidence Sources:** S11 (KNOW-D2-016)

---

#### `VOC-CC26-D2-088` — **AI Model Drift**
- **Thai Meaning (ความหมายภาษาไทย):** การเบี่ยงเบนของโมเดลปัญญาประดิษฐ์ (AI Model Drift)
- **Category:** `core_term` | **Status:** `supplemental`
- **English Definition:** The gradual degradation of an artificial intelligence or machine learning model's predictive accuracy and reliability over time due to shifts in input data patterns, environmental factors, or operational environments.
- **Thai Explanation:** การลดลงของความแม่นยำและความน่าเชื่อถือในการทำนายของโมเดลปัญญาประดิษฐ์ (AI) หรือการเรียนรู้ของเครื่อง (Machine Learning) ตามกาลเวลา อันเนื่องมาจากการเปลี่ยนแปลงของรูปแบบข้อมูลนำเข้า ปัจจัยแวดล้อม หรือบริบทในการปฏิบัติงาน
- **Exam Relevance & Strategy:** Included in the 2026 exam outline under operational continuity and resilience. Organizations using AI security defenses must continuously monitor for drift to prevent degraded threat detection.
- **English Example:** *"Continuous validation was implemented to detect AI model drift in the fraud detection system after consumer transaction patterns shifted during the holiday shopping season."*
- **Thai Example:** *"มีการนำระบบตรวจสอบอย่างต่อเนื่องมาใช้เพื่อตรวจหาการเบี่ยงเบนของโมเดล AI (Model Drift) ในระบบตรวจจับการฉ้อโกง หลังพฤติกรรมการใช้จ่ายของผู้บริโภคเปลี่ยนไปในช่วงเทศกาล"*
- **Confused With:** Concept Drift, Data Poisoning
- **Keywords:** `Model Drift`, `AI Continuity`, `Machine Learning Decay`, `Operational Resilience`, `2026 Outline`
- **Evidence Sources:** Domain 2.2 (KNOW-D2-016)

---

#### `VOC-CC26-D2-094` — **Enterprise Resource Planning**
- **Thai Meaning (ความหมายภาษาไทย):** ระบบการวางแผนทรัพยากรทางธุรกิจขององค์กร (ERP)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `ERP` | **Full Form:** Enterprise Resource Planning
- **English Definition:** An integrated suite of business software applications that coordinates core operational processes, such as supply chain, manufacturing, finance, human resources, and customer transactions.
- **Thai Explanation:** ชุดแอปพลิเคชันซอฟต์แวร์ระดับองค์กรที่ผสานรวมกระบวนการดำเนินงานหลัก เช่น ห่วงโซ่อุปทาน การผลิต การเงิน ทรัพยากรบุคคล และการจัดการธุรกรรมเข้าไว้ในระบบเดียวกัน
- **Exam Relevance & Strategy:** ERP systems are frequently classified as mission-critical systems in BIA assessments, requiring aggressive RTO and RPO targets and dedicated disaster recovery failover sites.
- **English Example:** *"Because the manufacturing plant cannot produce goods without its ERP platform, the BIA assigned the system an RTO of two hours."*
- **Thai Example:** *"เนื่องจากโรงงานผลิตไม่สามารถดำเนินงานได้หากปราศจากแพลตฟอร์ม ERP การวิเคราะห์ BIA จึงกำหนด RTO ของระบบนี้ไว้ที่ 2 ชั่วโมง"*
- **Confused With:** CRM, Database
- **Keywords:** `ERP`, `Enterprise Resource Planning`, `Mission Critical`, `BIA Priority`, `Core System`
- **Evidence Sources:** S18 (KNOW-D2-020)

---

#### `VOC-CC26-D2-095` — **Database**
- **Thai Meaning (ความหมายภาษาไทย):** ฐานข้อมูล (Database)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `DB` | **Full Form:** Database
- **English Definition:** An organized, structured collection of digital data stored electronically in a computer system and managed through a Database Management System (DBMS).
- **Thai Explanation:** แหล่งรวบรวมข้อมูลดิจิทัลที่ถูกจัดระเบียบและมีโครงสร้างอย่างเป็นระบบ จัดเก็บในระบบคอมพิวเตอร์ และบริหารจัดการผ่านระบบจัดการฐานข้อมูล (DBMS)
- **Exam Relevance & Strategy:** Databases represent core data assets in disaster recovery. RPO specifically dictates how frequently database transaction logs or snapshots must be backed up to prevent unacceptable loss.
- **English Example:** *"Transaction log backups were configured to run every fifteen minutes to guarantee database recovery within the mandated RPO."*
- **Thai Example:** *"มีการตั้งค่าการสำรองข้อมูลทรานแซกชันล็อกทุกๆ 15 นาที เพื่อรับประกันว่าจะสามารถกู้คืนฐานข้อมูลได้ภายในเกณฑ์ RPO ที่กำหนด"*
- **Confused With:** File System, Spreadsheet
- **Keywords:** `DB`, `Database`, `RPO`, `Transaction Logs`, `Data Restoration`
- **Evidence Sources:** S18 (KNOW-D2-022)

---


### Objective 2.3: Understand Security Awareness, Culture, and Employee Responsibilities (Awareness, Culture, Tone at the Top, Social Engineering, Reporting) (22 entries)

#### `VOC-CC26-D2-051` — **Security Awareness**
- **Thai Meaning (ความหมายภาษาไทย):** ความตระหนักรู้ด้านความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The state of individual understanding and cognitive recognition regarding organizational security policies, everyday cyber threats, safe computing practices, and employee reporting duties.
- **Thai Explanation:** สภาวะความรู้ความเข้าใจและการตระหนักรู้ของบุคคลเกี่ยวกับนโยบายความปลอดภัยขององค์กร ภัยคุกคามทางไซเบอร์ในชีวิตประจำวัน แนวทางปฏิบัติที่ปลอดภัย และหน้าที่ในการรายงานเหตุผิดปกติ
- **Exam Relevance & Strategy:** Awareness focuses on knowledge transfer and recognizing deception (e.g., spotting phishing emails). It is the individual cognitive foundation necessary for building an organizational security culture.
- **English Example:** *"All newly hired personnel must complete cybersecurity awareness modules covering credential protection and social engineering red flags."*
- **Thai Example:** *"พนักงานเข้าใหม่ทุกคนต้องผ่านหลักสูตรสร้างความตระหนักรู้ด้านความปลอดภัยไซเบอร์ ซึ่งครอบคลุมการปกป้องรหัสผ่านและข้อสังเกตของวิศวกรรมสังคม"*
- **Confused With:** Security Culture, Security Training
- **Keywords:** `Security Awareness`, `Individual Knowledge`, `Threat Recognition`, `Phishing Education`, `Policies`
- **Evidence Sources:** S21 (KNOW-D2-029)

---

#### `VOC-CC26-D2-052` — **Security Culture**
- **Thai Meaning (ความหมายภาษาไทย):** วัฒนธรรมความมั่นคงปลอดภัยขององค์กร
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The shared collective values, attitudes, social norms, unwritten rules, and habitual day-to-day security practices embedded across all levels of an organization.
- **Thai Explanation:** ค่านิยม ทัศนคติ บรรทัดฐานทางสังคม กฎเกณฑ์ที่ปฏิบัติร่วมกัน และพฤติกรรมการรักษาความปลอดภัยในชีวิตประจำวันของบุคลากรทุกคนที่หล่อหลอมฝังแน่นอยู่ในองค์กร
- **Exam Relevance & Strategy:** Awareness is what people KNOW; culture is what people DO when no one is watching. Culture is driven by executive leadership modeling and psychological safety.
- **English Example:** *"A positive security culture empowers employees to challenge unbadged visitors without fear of causing offense or receiving reprimands."*
- **Thai Example:** *"วัฒนธรรมความปลอดภัยเชิงบวกช่วยส่งเสริมให้พนักงานกล้าสอบถามผู้มาเยือนที่ไม่ได้ติดบัตรประจำตัว โดยไม่ต้องกลัวว่าจะเสียมารยาทหรือถูกตำหนิ"*
- **Confused With:** Security Awareness, Corporate Policy
- **Keywords:** `Security Culture`, `Collective Values`, `Shared Norms`, `Habitual Behavior`, `Tone at the Top`
- **Evidence Sources:** S22 (KNOW-D2-030)

---

#### `VOC-CC26-D2-053` — **Security Leadership**
- **Thai Meaning (ความหมายภาษาไทย):** ภาวะผู้นำด้านความมั่นคงปลอดภัย (Tone at the Top)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** Executive commitment, active resource allocation, and visible personal modeling of security compliance by senior management that sets the behavioral standard for the entire enterprise.
- **Thai Explanation:** ความมุ่งมั่นของผู้บริหาร การจัดสรรงบประมาณและทรัพยากรอย่างจริงจัง และการทำตัวเป็นแบบอย่างในการปฏิบัติตามกฎความปลอดภัยอย่างเปิดเผย เพื่อสร้างมาตรฐานพฤติกรรมทั่วทั้งองค์กร
- **Exam Relevance & Strategy:** Tone at the top is vital. If executives demand bypasses around security rules (like refusing MFA), security culture collapses. Leadership must visibly follow all controls.
- **English Example:** *"By demonstrating personal compliance with multifactor authentication during all presentations, the CEO modeled strong security leadership."*
- **Thai Example:** *"ด้วยการแสดงให้เห็นถึงการปฏิบัติตามการยืนยันตัวตนแบบหลายปัจจัยด้วยตนเองในทุกการบรรยาย CEO ได้เป็นแบบอย่างที่ดีของภาวะผู้นำด้านความปลอดภัย"*
- **Confused With:** Security Management, Technical Administration
- **Keywords:** `Security Leadership`, `Tone at the Top`, `Executive Modeling`, `Resource Commitment`
- **Evidence Sources:** S23 (KNOW-D2-031)

---

#### `VOC-CC26-D2-054` — **Security Awareness vs Security Culture**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง Security Awareness และ Security Culture
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** Security Awareness refers to individual knowledge and recognition of threats, whereas Security Culture refers to the collective organizational habits, values, and norms practiced consistently by staff.
- **Thai Explanation:** การเปรียบเทียบ: Security Awareness คือความรู้และการตระหนักรู้ของบุคคลเกี่ยวกับภัยคุกคาม ในขณะที่ Security Culture คือค่านิยมและพฤติกรรมความปลอดภัยที่คนในองค์กรปฏิบัติร่วมกันเป็นกิจวัตร
- **Exam Relevance & Strategy:** Exam questions emphasize that 100% completion of awareness training does NOT automatically guarantee a strong security culture. Culture requires continuous behavioral reinforcement.
- **English Example:** *"Annual compliance training built security awareness, but leadership's open encouragement to report mistakes transformed it into an enduring security culture."*
- **Thai Example:** *"การฝึกอบรมประจำปีช่วยสร้างความตระหนักรู้ด้านความปลอดภัย (Awareness) แต่การที่ผู้บริหารเปิดกว้างสนับสนุนให้รายงานความผิดพลาดได้เปลี่ยนให้กลายเป็นวัฒนธรรมความปลอดภัยที่ยั่งยืน (Culture)"*
- **Confused With:** Training vs Education
- **Keywords:** `Awareness vs Culture`, `Knowledge vs Behavior`, `Individual vs Collective`
- **Evidence Sources:** S21-S22 (KNOW-D2-029)

---

#### `VOC-CC26-D2-055` — **Social Engineering**
- **Thai Meaning (ความหมายภาษาไทย):** วิศวกรรมสังคม (การหลอกลวงทางจิตวิทยา)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The psychological manipulation of human cognitive traits (such as authority, urgency, helpfulness, or fear) to trick individuals into disclosing confidential information or performing insecure actions.
- **Thai Explanation:** การชักจูงหรือหลอกลวงทางจิตวิทยาโดยอาศัยจุดอ่อนด้านพฤติกรรมมนุษย์ (เช่น ความเกรงใจในอำนาจ ความเร่งรีบ ความอยากช่วยเหลือ หรือความกลัว) เพื่อล่อลวงให้เหยื่อเปิดเผยข้อมูลที่เป็นความลับหรือกระทำการที่ลดทอนความปลอดภัย
- **Exam Relevance & Strategy:** Social engineering targets the human element rather than software vulnerabilities. It underpins most major enterprise compromises. Scenarios test identifying psychological triggers (urgency, authority).
- **English Example:** *"The attacker used social engineering, pretending to be the panicked CFO needing urgent wire transfers before bank closing time."*
- **Thai Example:** *"ผู้โจมตีใช้วิศวกรรมสังคมโดยแอบอ้างเป็น CFO ที่กำลังตื่นตระหนกและต้องการโอนเงินด่วนก่อนที่ธนาคารจะปิดทำการ"*
- **Confused With:** Hacking, Malware Exploits
- **Keywords:** `Social Engineering`, `Psychological Manipulation`, `Human Factor`, `Urgency`, `Authority Trigger`
- **Evidence Sources:** S24 (KNOW-D2-032)

---

#### `VOC-CC26-D2-056` — **Phishing**
- **Thai Meaning (ความหมายภาษาไทย):** ฟิชชิง (การหลอกลวงวงกว้าง)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A broad, untargeted social engineering attack distributed via email, messaging, or deceptive websites to large masses of generic recipients seeking to harvest credentials or deliver malware.
- **Thai Explanation:** การโจมตีแบบวิศวกรรมสังคมในวงกว้างที่ไม่เจาะจงเป้าหมาย โดยส่งผ่านอีเมล ข้อความ หรือเว็บไซต์ปลอมไปยังผู้รับจำนวนมากเพื่อหลอกขโมยข้อมูลรับรอง หรือส่งมัลแวร์เข้าสู่ระบบ
- **Exam Relevance & Strategy:** Phishing is generic and mass-volume (uses generic greetings like 'Dear Customer'). It is contrasted with targeted spear phishing and executive-targeted whaling.
- **English Example:** *"A mass phishing campaign distributed thousands of fake package delivery notifications containing links to credential-harvesting websites."*
- **Thai Example:** *"แคมเปญฟิชชิงวงกว้างได้ส่งการแจ้งเตือนการส่งพัสดุปลอมจำนวนหลายพันฉบับพร้อมลิงก์ไปยังเว็บไซต์ที่ใช้ดักจับรหัสผ่าน"*
- **Confused With:** Spear Phishing, Spam
- **Keywords:** `Phishing`, `Mass Email`, `Generic Greeting`, `Credential Harvesting`, `Deceptive Link`
- **Evidence Sources:** S25 (KNOW-D2-033)

---

#### `VOC-CC26-D2-057` — **Spear Phishing**
- **Thai Meaning (ความหมายภาษาไทย):** สเปียร์ฟิชชิง (ฟิชชิงแบบเจาะจงเป้าหมาย)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A customized, highly targeted social engineering attack tailored to specific individuals, roles, or organizations using researched personal or contextual information to appear authentic.
- **Thai Explanation:** การโจมตีแบบวิศวกรรมสังคมที่มีการปรับแต่งและพุ่งเป้าไปยังบุคคล ตำแหน่ง หรือองค์กรเฉพาะเจาะจง โดยใช้ข้อมูลที่ผ่านการสืบค้นมาล่วงหน้าเพื่อให้ข้อความดูน่าเชื่อถือและสมจริง
- **Exam Relevance & Strategy:** Spear phishing uses specific internal terminology, project names, and colleague references. Candidates must identify that tailored context distinguishes spear phishing from mass phishing.
- **English Example:** *"The attacker launched a spear phishing attack against the accounting department, referencing the company's real accounting software and recent vendor invoices."*
- **Thai Example:** *"ผู้โจมตีเปิดฉากการโจมตีแบบสเปียร์ฟิชชิงใส่แผนกบัญชี โดยอ้างถึงชื่อซอฟต์แวร์บัญชีที่บริษัทใช้จริงและใบแจ้งหนี้ของคู่ค้าล่าสุด"*
- **Confused With:** Phishing, Whaling
- **Keywords:** `Spear Phishing`, `Targeted Attack`, `Customized`, `Researched Context`, `Department Target`
- **Evidence Sources:** S25 (KNOW-D2-034)

---

#### `VOC-CC26-D2-058` — **Whaling**
- **Thai Meaning (ความหมายภาษาไทย):** เวลลิง (ฟิชชิงมุ่งเป้าผู้บริหารระดับสูง)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A specialized form of spear phishing directed exclusively against high-profile, high-value executive targets (such as CEOs, CFOs, Board Members, or senior government leaders).
- **Thai Explanation:** รูปแบบเฉพาะของสเปียร์ฟิชชิงที่มุ่งเป้าไปยังบุคคลระดับสูงที่มีอำนาจและมูลค่าสูงเป็นพิเศษ เช่น ประธานเจ้าหน้าที่บริหาร (CEO), ประธานเจ้าหน้าที่ฝ่ายการเงิน (CFO) หรือกรรมการบริหาร
- **Exam Relevance & Strategy:** Whaling focuses on C-suite executives who possess high authorization limits, financial transfer authority, or sensitive board-level strategic information.
- **English Example:** *"The CFO was targeted by a whaling email disguised as an urgent subpoena from the regulatory commission regarding an upcoming merger."*
- **Thai Example:** *"CFO ตกเป็นเป้าหมายของอีเมลเวลลิงที่ปลอมแปลงเป็นหมายศาลด่วนจากคณะกรรมการกำกับดูแลเกี่ยวกับการควบรวมกิจการที่กำลังจะมาถึง"*
- **Confused With:** Spear Phishing, CEO Fraud
- **Keywords:** `Whaling`, `Executive Target`, `C-Suite`, `CEO`, `CFO`, `High Value Target`
- **Evidence Sources:** S25 (KNOW-D2-035)

---

#### `VOC-CC26-D2-059` — **Phishing vs Spear Phishing vs Whaling**
- **Thai Meaning (ความหมายภาษาไทย):** การเปรียบเทียบ Phishing, Spear Phishing และ Whaling
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** Phishing is untargeted mass deception; Spear Phishing is customized and aimed at specific individuals or departments; Whaling is spear phishing targeted exclusively at high-profile C-suite executives.
- **Thai Explanation:** ลำดับความสัมพันธ์: Phishing เป็นการหลอกลวงหว่านแหวงกว้าง -> Spear Phishing เป็นการเจาะจงเฉพาะบุคคลหรือแผนกโดยใช้ข้อมูลสืบค้น -> Whaling เป็นการเจาะจงเฉพาะผู้บริหารระดับสูง (C-Suite) โดยเฉพาะ
- **Exam Relevance & Strategy:** Questions test candidate ability to recognize the hierarchy based on the victim's profile: generic recipient = phishing; department analyst = spear phishing; CEO/CFO = whaling.
- **English Example:** *"The security team categorized an email as whaling rather than general phishing because it was tailored specifically to the chief executive officer."*
- **Thai Example:** *"ทีมความปลอดภัยจัดประเภทอีเมลฉบับนั้นว่าเป็น Whaling แทนที่จะเป็นฟิชชิงทั่วไป เพราะเนื้อหาถูกปรับแต่งมาเพื่อหลอกประธานเจ้าหน้าที่บริหารโดยเฉพาะ"*
- **Confused With:** Vishing vs Smishing
- **Keywords:** `Phishing Hierarchy`, `Target Profiling`, `Generic vs Specific vs Executive`
- **Evidence Sources:** S25 (KNOW-D2-033)

---

#### `VOC-CC26-D2-060` — **Voice Phishing**
- **Thai Meaning (ความหมายภาษาไทย):** วิชชิง (การหลอกลวงทางโทรศัพท์หรือเสียง)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `Vishing` | **Full Form:** Voice Phishing
- **English Definition:** A social engineering attack conducted over telephone lines or Voice over IP (VoIP) systems, manipulating victims through spoken conversation to surrender confidential information.
- **Thai Explanation:** การโจมตีแบบวิศวกรรมสังคมที่กระทำผ่านสายโทรศัพท์หรือระบบเสียงผ่านอินเทอร์เน็ต (VoIP) โดยผู้โจมตีจะพูดคุยเกลี้ยกล่อมหรือกดดันเหยื่อโดยตรงเพื่อให้เปิดเผยข้อมูลลับ
- **Exam Relevance & Strategy:** Vishing defines the transmission medium (voice phone calls). Scenarios frequently combine vishing with spoofed caller IDs and high urgency.
- **English Example:** *"An employee received a vishing call from a scammer posing as an IT service desk technician requesting remote access credentials."*
- **Thai Example:** *"พนักงานได้รับสายโทรศัพท์วิชชิงจากมิจฉาชีพที่แอบอ้างเป็นเจ้าหน้าที่ฝ่ายช่วยเหลือด้านไอทีและขอรหัสผ่านสำหรับการเข้าถึงระบบระยะไกล"*
- **Confused With:** Smishing, Phishing
- **Keywords:** `Vishing`, `Voice Phishing`, `Telephone`, `VoIP`, `Spoken Conversation`
- **Evidence Sources:** S25 (KNOW-D2-036)

---

#### `VOC-CC26-D2-061` — **SMS Phishing**
- **Thai Meaning (ความหมายภาษาไทย):** สมิชชิง (การหลอกลวงผ่านข้อความสั้น SMS)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `Smishing` | **Full Form:** SMS Phishing
- **English Definition:** A social engineering attack conducted via Short Message Service (SMS) text messaging, delivering urgent messages with malicious hyperlinks or fake callback numbers.
- **Thai Explanation:** การโจมตีแบบวิศวกรรมสังคมผ่านบริการข้อความสั้น (SMS) ทางโทรศัพท์มือถือ โดยส่งข้อความแจ้งเตือนด่วนที่มีลิงก์อันตรายหรือเบอร์โทรกลับปลอมเพื่อหลอกลวงเหยื่อ
- **Exam Relevance & Strategy:** Smishing defines the transmission channel (cellular SMS). Attackers exploit high SMS read rates and limited screen space to mask deceptive URLs.
- **English Example:** *"The bank warned customers about a smishing wave claiming their accounts were frozen and directing them to a fake mobile verification site."*
- **Thai Example:** *"ธนาคารได้เตือนลูกค้าเกี่ยวกับคลื่นการหลอกลวงแบบสมิชชิงที่อ้างว่าบัญชีถูกระงับ และหลอกให้คลิกไปยังหน้าเว็บไซต์ยืนยันตัวตนบนมือถือปลอม"*
- **Confused With:** Vishing, Phishing
- **Keywords:** `Smishing`, `SMS Phishing`, `Text Messaging`, `Mobile Scam`, `Malicious Link`
- **Evidence Sources:** S25 (KNOW-D2-037)

---

#### `VOC-CC26-D2-062` — **Pretexting**
- **Thai Meaning (ความหมายภาษาไทย):** การสร้างเรื่องอ้างเพื่อหลอกลวง (Pretexting)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The social engineering technique of fabricating an invented scenario, fictional identity, or plausible storyline (the pretext) to deceive a victim into relinquishing information or granting access.
- **Thai Explanation:** เทคนิคการสร้างเรื่องราวสมมติ การสวมรอยบทบาท หรือการแต่งสถานการณ์ที่ดูน่าเชื่อถือ (เรื่องอ้าง หรือ Pretext) เพื่อลวงให้เหยื่อหลงเชื่อจนยอมมอบข้อมูลสำคัญหรือเปิดทางให้เข้าถึงระบบ
- **Exam Relevance & Strategy:** Pretexting is the deceptive STORYLINE/PERSONA mechanism. It can be delivered through any channel (email, phone, in person). Vishing is the voice channel; pretexting is the narrative.
- **English Example:** *"Using an elaborate pretexting scheme, the fraudster impersonated a fire marshal conducting an unscheduled inspection to gain access to the server room."*
- **Thai Example:** *"ผู้ไม่หวังดีใช้การสร้างเรื่องอ้างอันแยบยลโดยแอบอ้างเป็นเจ้าหน้าที่ดับเพลิงที่เข้ามาตรวจตราฉุกเฉินเพื่อขอเข้าห้องเซิร์ฟเวอร์"*
- **Confused With:** Vishing, Impersonation
- **Keywords:** `Pretexting`, `Fabricated Scenario`, `Invented Persona`, `Storyline`, `Deception Mechanism`
- **Evidence Sources:** S26 (KNOW-D2-038)

---

#### `VOC-CC26-D2-063` — **Vishing / Smishing vs Pretexting**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง Vishing/Smishing และ Pretexting
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** Vishing (phone calls) and Smishing (SMS messages) describe the communication delivery channels, whereas Pretexting describes the fabricated storyline and persona used to deceive the victim.
- **Thai Explanation:** การเปรียบเทียบ: Vishing (โทรศัพท์) และ Smishing (SMS) คือ 'ช่องทางการสื่อสาร' ที่ใช้ส่งสารหลอกลวง ในขณะที่ Pretexting คือ 'บทบาทหรือเรื่องราวสมมติ' ที่ผู้โจมตีแต่งขึ้นมาเพื่อใช้หลอกเหยื่อในช่องทางเหล่านั้น
- **Exam Relevance & Strategy:** These concepts are not mutually exclusive. An attacker often uses vishing (the phone channel) to deliver an invented pretext (such as posing as an external auditor).
- **English Example:** *"The attacker called an accountant via vishing and delivered a sophisticated pretexting story claiming to be an auditor performing an emergency balance verification."*
- **Thai Example:** *"ผู้โจมตีโทรหาเจ้าหน้าที่บัญชีผ่านสายโทรศัพท์ (Vishing) พร้อมกับสร้างเรื่องอ้าง (Pretexting) ที่ซับซ้อนว่าตนเป็นผู้ตรวจสอบบัญชีที่กำลังตรวจสอบยอดด่วน"*
- **Confused With:** Phishing vs Pretexting
- **Keywords:** `Channel vs Scenario`, `Delivery Medium vs Storyline`, `Pretext Distinction`
- **Evidence Sources:** S26 (KNOW-D2-038)

---

#### `VOC-CC26-D2-064` — **Password Hygiene**
- **Thai Meaning (ความหมายภาษาไทย):** สุขอนามัยด้านรหัสผ่าน
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** Personal and operational practices that maintain credential security, including generating long unique passphrases, never reusing passwords across services, and utilizing approved password managers.
- **Thai Explanation:** แนวทางปฏิบัติของบุคคลในการรักษาความปลอดภัยของรหัสผ่าน เช่น การสร้างรหัสผ่านหรือวลีผ่านที่ยาวและไม่ซ้ำ การไม่ใช้รหัสผ่านซ้ำกันในหลายระบบ และการใช้โปรแกรมจัดการรหัสผ่านที่ได้รับอนุมัติ
- **Exam Relevance & Strategy:** Password hygiene is an individual user responsibility. Modern standards emphasize length, uniqueness, and multifactor authentication over frequent arbitrary character changes that lead to predictable patterns.
- **English Example:** *"Strong password hygiene prevents a credential breach on a social media site from compromising an employee's corporate email account."*
- **Thai Example:** *"สุขอนามัยด้านรหัสผ่านที่ดีช่วยป้องกันไม่ให้การรั่วไหลของรหัสผ่านบนโซเชียลมีเดียส่งผลกระทบต่อบัญชีอีเมลขององค์กร"*
- **Confused With:** Password Complexity Rules, Credential Protection
- **Keywords:** `Password Hygiene`, `Passphrase`, `Password Manager`, `Credential Reuse`, `Safe Practices`
- **Evidence Sources:** T:L89-L91 (KNOW-D2-039)

---

#### `VOC-CC26-D2-065` — **Credential Protection**
- **Thai Meaning (ความหมายภาษาไทย):** การปกป้องข้อมูลรับรองขององค์กร
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** Enterprise administrative and technical controls designed to safeguard identity repositories, prevent credential theft, enforce multifactor authentication (MFA), and detect anomalous authentication attempts.
- **Thai Explanation:** มาตรการควบคุมทั้งด้านการบริหารจัดการและทางเทคนิคขององค์กร เพื่อปกป้องฐานข้อมูลตัวตน ป้องกันการขโมยข้อมูลรับรอง บังคับใช้การยืนยันตัวตนแบบหลายปัจจัย และตรวจจับการพยายามเข้าสู่ระบบที่ผิดปกติ
- **Exam Relevance & Strategy:** Distinction: Password hygiene is the user's personal practice; Credential protection represents the organization's technical safeguards (MFA, salted hashes, least privilege).
- **English Example:** *"The organization enhanced its credential protection architecture by enforcing FIDO2-compliant hardware security keys for all privileged access."*
- **Thai Example:** *"องค์กรยกระดับสถาปัตยกรรมการปกป้องข้อมูลรับรองโดยบังคับใช้ฮาร์ดแวร์คีย์ความปลอดภัยตามมาตรฐาน FIDO2 สำหรับบัญชีผู้ดูแลระบบทั้งหมด"*
- **Confused With:** Password Hygiene, Access Control
- **Keywords:** `Credential Protection`, `Enterprise Safeguards`, `MFA Enforcement`, `Identity Repository`
- **Evidence Sources:** S27 (KNOW-D2-040)

---

#### `VOC-CC26-D2-066` — **Reporting Suspicious Activity**
- **Thai Meaning (ความหมายภาษาไทย):** การสังเกตและรายงานกิจกรรมที่น่าสงสัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The primary operational responsibility of general employees to promptly notify official security escalation channels upon encountering anomalies, phishing attempts, or physical breaches without attempting self-investigation.
- **Thai Explanation:** หน้าที่และความรับผิดชอบหลักของพนักงานทั่วไปในการแจ้งเตือนช่องทางการรายงานความปลอดภัยขององค์กรโดยทันทีเมื่อพบสิ่งผิดปกติ อีเมลฟิชชิง หรือการละเมิดทางกายภาพ โดยไม่ทำการสืบสวนด้วยตนเอง
- **Exam Relevance & Strategy:** Critical exam rule: The correct FIRST action for general employees is to RECOGNIZE AND REPORT. Employees must not inspect malware, attempt to trace attackers, or confront intruders.
- **English Example:** *"When an unfamiliar caller asked for administrative access codes, the receptionist reported the suspicious activity immediately through the security portal."*
- **Thai Example:** *"เมื่อมีผู้โทรมาที่ไม่คุ้นเคยขอรหัสผ่านระดับผู้ดูแลระบบ พนักงานต้อนรับได้รายงานกิจกรรมที่น่าสงสัยทันทีผ่านพอร์ทัลความปลอดภัย"*
- **Confused With:** Incident Investigation, Security Remediation
- **Keywords:** `Reporting`, `Recognize and Report`, `Employee Duty`, `Suspicious Activity`, `Escalation`
- **Evidence Sources:** S21-S23 (KNOW-D2-041)

---

#### `VOC-CC26-D2-067` — **FIRST (Recognize and Report)**
- **Thai Meaning (ความหมายภาษาไทย):** ลำดับแรก: สังเกตและรายงาน (FIRST Rule)
- **Category:** `exam_language` | **Status:** `source_supported`
- **English Definition:** The standard ISC2 decision rule stating that upon encountering potential security incidents or social engineering attempts, general personnel must immediately report the event through established channels before taking any other action.
- **Thai Explanation:** กฎการตัดสินใจมาตรฐานของ ISC2 ที่ระบุว่า เมื่อพนักงานทั่วไปเผชิญกับเหตุการณ์ที่อาจเป็นภัยความมั่นคงปลอดภัยหรือการพยายามใช้วิศวกรรมสังคม สิ่งที่ต้องทำใน 'ลำดับแรก' คือการรายงานผ่านช่องทางที่กำหนดทันทีก่อนกระทำการอื่นใด
- **Exam Relevance & Strategy:** Exam Qualifier: Questions asking what an employee should do FIRST when receiving a suspicious email or encountering an unbadged visitor test this rule. The correct answer is always reporting, not investigating or modifying settings.
- **English Example:** *"In the exam scenario, when an accountant received a suspicious wire transfer request, the FIRST action was to report the email to the security incident team."*
- **Thai Example:** *"ในโจทย์ข้อสอบ เมื่อพนักงานบัญชีได้รับคำขอโอนเงินที่น่าสงสัย สิ่งที่ต้องทำเป็นลำดับแรกคือการรายงานอีเมลนั้นไปยังทีมจัดการเหตุการณ์ความปลอดภัย"*
- **Confused With:** Investigate First, Delete and Ignore
- **Keywords:** `FIRST`, `Recognize and Report`, `Decision Rule`, `Exam Qualifier`, `Escalation`
- **Evidence Sources:** S21 (KNOW-D2-041)

---

#### `VOC-CC26-D2-068` — **Chief Information Security Officer**
- **Thai Meaning (ความหมายภาษาไทย):** ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `CISO` | **Full Form:** Chief Information Security Officer
- **English Definition:** The senior executive accountable for developing, implementing, and overseeing the enterprise-wide cybersecurity strategy, security architecture, and regulatory compliance posture.
- **Thai Explanation:** ผู้บริหารระดับสูงที่มีหน้าที่รับผิดชอบในการพัฒนา นำไปปฏิบัติ และกำกับดูแลกลยุทธ์ความมั่นคงปลอดภัยไซเบอร์ สถาปัตยกรรมความปลอดภัย และการปฏิบัติตามกฎเกณฑ์ทั่วทั้งองค์กร
- **Exam Relevance & Strategy:** The CISO provides strategic leadership, bridges technical risks to board members, and establishes security policies, distinct from daily hands-on technical administrators.
- **English Example:** *"The CISO presented the annual cybersecurity maturity assessment and budget request directly to the board of directors."*
- **Thai Example:** *"CISO ได้นำเสนอผลการประเมินวุฒิภาวะด้านความมั่นคงปลอดภัยไซเบอร์ประจำปีและคำของบประมาณต่อคณะกรรมการบริหารโดยตรง"*
- **Confused With:** CIO, Security Administrator
- **Keywords:** `CISO`, `Chief Information Security Officer`, `Executive Role`, `Leadership`, `Accountability`
- **Evidence Sources:** S25 (KNOW-D2-031)

---

#### `VOC-CC26-D2-091` — **Short Message Service**
- **Thai Meaning (ความหมายภาษาไทย):** บริการส่งข้อความสั้นทางโทรศัพท์มือถือ (SMS)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `SMS` | **Full Form:** Short Message Service
- **English Definition:** A standardized communication protocol enabling mobile devices to exchange short text messages over cellular networks, frequently targeted by smishing attacks.
- **Thai Explanation:** โพรโทคอลการสื่อสารมาตรฐานที่ช่วยให้อุปกรณ์เคลื่อนที่สามารถรับส่งข้อความตัวอักษรขนาดสั้นผ่านเครือข่ายโทรศัพท์มือถือ ซึ่งมักตกเป็นเป้าหมายในการโจมตีแบบสมิชชิง (Smishing)
- **Exam Relevance & Strategy:** SMS is an unencrypted, cleartext carrier medium susceptible to caller/sender ID spoofing and interception, which is why SMS-based MFA is less secure than app-based authenticators or hardware keys.
- **English Example:** *"Attackers exploited unauthenticated SMS protocols to broadcast thousands of fake delivery notifications containing phishing links."*
- **Thai Example:** *"ผู้โจมตีอาศัยช่องโหว่ของโพรโทคอล SMS ที่ไม่มีการตรวจสอบตัวตนผู้ส่งเพื่อหว่านส่งข้อความแจ้งเตือนพัสดุปลอมพร้อมลิงก์ฟิชชิงไปยังผู้ใช้นับพันคน"*
- **Confused With:** MMS, Instant Messaging
- **Keywords:** `SMS`, `Text Message`, `Smishing Carrier`, `Mobile Protocol`, `Cleartext`
- **Evidence Sources:** S25 (KNOW-D2-037)

---

#### `VOC-CC26-D2-092` — **Chief Executive Officer**
- **Thai Meaning (ความหมายภาษาไทย):** ประธานเจ้าหน้าที่บริหาร (CEO)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `CEO` | **Full Form:** Chief Executive Officer
- **English Definition:** The highest-ranking corporate executive responsible for overall management, strategic direction, and ultimate executive accountability for organizational compliance and risk posture.
- **Thai Explanation:** ผู้บริหารระดับสูงสุดขององค์กรที่รับผิดชอบการบริหารภาพรวม ทิศทางเชิงกลยุทธ์ และมีความรับผิดชอบสูงสุดในระดับบริหารต่อความเสี่ยงและการปฏิบัติตามกฎเกณฑ์ขององค์กร
- **Exam Relevance & Strategy:** The CEO sets the tone at the top for security culture and is frequently impersonated in business email compromise (BEC) and targeted in whaling campaigns.
- **English Example:** *"The accounting team verified an urgent wire transfer request directly with the CEO via out-of-band communication, preventing a fraudulent transfer."*
- **Thai Example:** *"ทีมบัญชีได้ตรวจสอบคำขอโอนเงินด่วนโดยตรงกับ CEO ผ่านช่องทางการสื่อสารที่แยกออกมา ทำให้สามารถสกัดกั้นการโอนเงินที่ฉ้อโกงได้ทันท่วงที"*
- **Confused With:** CFO, CISO
- **Keywords:** `CEO`, `Chief Executive Officer`, `Tone at the Top`, `Whaling Target`, `Executive Authority`
- **Evidence Sources:** S23-S25 (KNOW-D2-031)

---

#### `VOC-CC26-D2-093` — **Chief Financial Officer**
- **Thai Meaning (ความหมายภาษาไทย):** ประธานเจ้าหน้าที่ฝ่ายการเงิน (CFO)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `CFO` | **Full Form:** Chief Financial Officer
- **English Definition:** The senior corporate executive responsible for managing financial actions, capital allocation, fiduciary risk management, and statutory financial reporting.
- **Thai Explanation:** ผู้บริหารระดับสูงที่รับผิดชอบการจัดการด้านการเงิน การจัดสรรงบประมาณ การบริหารความเสี่ยงทางการเงิน และการจัดทำรายงานทางการเงินตามที่กฎหมายกำหนด
- **Exam Relevance & Strategy:** CFOs possess high-level authorization for wire transfers and capital expenditure, making them primary targets for whaling and executive impersonation attacks.
- **English Example:** *"Because the CFO is authorized to approve large wire transfers, the finance team requires dual authorization to prevent whaling manipulation."*
- **Thai Example:** *"เนื่องจาก CFO มีอำนาจในการอนุมัติการโอนเงินจำนวนมาก ทีมการเงินจึงกำหนดให้ต้องมีการอนุมัติร่วมสองคน (Dual Authorization) เพื่อป้องกันการถูกหลอกผ่านอีเมลเวลลิง"*
- **Confused With:** CEO, Controller
- **Keywords:** `CFO`, `Chief Financial Officer`, `Financial Authority`, `Whaling Target`, `Wire Transfer`
- **Evidence Sources:** S25 (KNOW-D2-035)

---

#### `VOC-CC26-D2-100` — **Tone at the Top**
- **Thai Meaning (ความหมายภาษาไทย):** ทัศนคติและแบบอย่างจากผู้นำระดับสูง (Tone at the Top)
- **Category:** `scenario_vocabulary` | **Status:** `source_supported`
- **English Definition:** The ethical atmosphere, security mindset, and behavioral standards demonstrated by an organization's board of directors, CEO, and executive leadership that shapes corporate security culture.
- **Thai Explanation:** บรรยากาศทางจริยธรรม กรอบความคิดด้านความปลอดภัย และมาตรฐานพฤติกรรมที่แสดงออกโดยคณะกรรมการบริษัท CEO และผู้บริหารระดับสูง ซึ่งมีอิทธิพลโดยตรงต่อการหล่อหลอมวัฒนธรรมความปลอดภัยทั่วทั้งองค์กร
- **Exam Relevance & Strategy:** A favorite ISC2 concept: Without a strong tone at the top, security awareness fails and policies are ignored. Executive modeling of compliance is required for organizational security culture.
- **English Example:** *"When the executive committee visibly complied with the clean-desk policy and wore visitor badges, the positive tone at the top reinforced employee adherence."*
- **Thai Example:** *"เมื่อคณะกรรมการบริหารปฏิบัติตามนโยบายโต๊ะทำงานสะอาดอย่างเปิดเผยและติดบัตรผู้มาเยือน ทัศนคติและแบบอย่างที่ดีจากผู้นำระดับสูงได้ช่วยเสริมสร้างความร่วมมือของพนักงาน"*
- **Confused With:** Security Policy, Management Mandate
- **Keywords:** `Tone at the Top`, `Executive Leadership`, `Cultural Modeling`, `Security Mindset`
- **Evidence Sources:** S23 (KNOW-D2-031)

---


### Objective 2.4: Understand Security Metrics and Reporting (Measurement, MTTD, MTTR, Remediation SLAs, Patch Compliance, KPI, KRI, Dashboards, Scorecards) (20 entries)

#### `VOC-CC26-D2-069` — **Security Measurement**
- **Thai Meaning (ความหมายภาษาไทย):** การวัดผลความมั่นคงปลอดภัย
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The continuous organizational process of collecting, analyzing, and reporting quantifiable data to evaluate the performance of security programs and the efficacy of protective controls.
- **Thai Explanation:** กระบวนการระดับองค์กรที่ดำเนินไปอย่างต่อเนื่องในการรวบรวม วิเคราะห์ และรายงานข้อมูลที่วัดผลได้ในเชิงตัวเลข เพื่อประเมินผลการดำเนินงานของแผนงานความมั่นคงปลอดภัยและประสิทธิภาพของมาตรการควบคุม
- **Exam Relevance & Strategy:** Per NIST SP 800-55, measurement provides evidence for executive decision-making. Security cannot be effectively managed or justified without consistent, repeatable measurement.
- **English Example:** *"Through rigorous security measurement, the organization demonstrated a 40% reduction in unpatched critical vulnerabilities over six months."*
- **Thai Example:** *"ด้วยการวัดผลความปลอดภัยที่เข้มงวด องค์กรสามารถพิสูจน์ให้เห็นว่ามีช่องโหว่ร้ายแรงที่ยังไม่ได้รับการแพตช์ลดลงถึง 40% ในช่วงเวลา 6 เดือน"*
- **Confused With:** Security Auditing, Risk Assessment
- **Keywords:** `Security Measurement`, `NIST SP 800-55`, `Performance Evaluation`, `Quantifiable Data`
- **Evidence Sources:** S28-S29 (KNOW-D2-042)

---

#### `VOC-CC26-D2-070` — **Security Metric**
- **Thai Meaning (ความหมายภาษาไทย):** ตัวชี้วัดความมั่นคงปลอดภัย (Security Metric)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A quantifiable, reproducible value derived from observation or data collection that indicates the degree to which a system, control, or process meets its defined security objectives.
- **Thai Explanation:** ค่าเชิงปริมาณที่สามารถวัดซ้ำได้ ซึ่งได้มาจากการสังเกตหรือรวบรวมข้อมูล เพื่อบ่งชี้ระดับที่ระบบ มาตรการควบคุม หรือกระบวนการ สามารถบรรลุวัตถุประสงค์ด้านความปลอดภัยที่กำหนดไว้
- **Exam Relevance & Strategy:** Metrics must be specific, measurable, achievable, repeatable, and time-bound (SMART). Scenarios test selecting actionable operational metrics (like patch compliance rate) over vague claims.
- **English Example:** *"The security metric tracking mean time to patch critical vulnerabilities helped the operations team identify workflow bottlenecks."*
- **Thai Example:** *"ตัวชี้วัดความปลอดภัยที่ติดตามระยะเวลาเฉลี่ยในการแพตช์ช่องโหว่ร้ายแรงช่วยให้ทีมปฏิบัติการระบุจุดติดขัดในการทำงานได้ชัดเจน"*
- **Confused With:** Security Goal, Raw Log Data
- **Keywords:** `Security Metric`, `Quantifiable`, `Reproducible`, `SMART`, `Performance Measurement`
- **Evidence Sources:** S30 (KNOW-D2-043)

---

#### `VOC-CC26-D2-071` — **Mean Time to Detect**
- **Thai Meaning (ความหมายภาษาไทย):** เวลาเฉลี่ยในการตรวจพบภัยคุกคาม (MTTD)
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `MTTD` | **Full Form:** Mean Time to Detect
- **English Definition:** The average elapsed time from the initial occurrence of an unauthorized security intrusion or breach until it is formally detected and recognized by security monitoring systems or personnel.
- **Thai Explanation:** ระยะเวลาเฉลี่ยที่นับตั้งแต่ช่วงเวลาที่เกิดการบุกรุกหรือการละเมิดความปลอดภัยขึ้นในระบบ จนกระทั่งระบบเฝ้าระวังหรือบุคลากรตรวจพบและรับรู้ถึงเหตุการณ์นั้นอย่างเป็นทางการ
- **Exam Relevance & Strategy:** MTTD measures detection efficiency. Shorter MTTD limits attacker dwell time, reducing potential data exfiltration and damage. Calculated from initial compromise to alert timestamp.
- **English Example:** *"By deploying network behavior anomaly detection, the SOC reduced its MTTD from thirty days down to under four hours."*
- **Thai Example:** *"การติดตั้งระบบตรวจจับพฤติกรรมผิดปกติบนเครือข่ายช่วยให้ศูนย์ SOC สามารถลดเวลาเฉลี่ยในการตรวจพบ (MTTD) จาก 30 วันลงมาเหลือไม่ถึง 4 ชั่วโมง"*
- **Confused With:** Mean Time to Respond (MTTR), Mean Time Between Failures (MTBF)
- **Keywords:** `MTTD`, `Mean Time to Detect`, `Detection Time`, `Dwell Time`, `SOC Metric`
- **Evidence Sources:** S30 (KNOW-D2-044)

---

#### `VOC-CC26-D2-072` — **Mean Time to Respond**
- **Thai Meaning (ความหมายภาษาไทย):** เวลาเฉลี่ยในการตอบสนองต่อเหตุการณ์ (MTTR)
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `MTTR` | **Full Form:** Mean Time to Respond
- **English Definition:** The average elapsed time from the moment a security alert or incident is verified until active containment and response actions are formally initiated by the response team.
- **Thai Explanation:** ระยะเวลาเฉลี่ยที่นับตั้งแต่ช่วงเวลาที่มีการยืนยันการแจ้งเตือนหรือเหตุการณ์ความปลอดภัย จนกระทั่งทีมตอบสนองเหตุการณ์เริ่มดำเนินการกักกันและตอบโต้ภัยคุกคามอย่างเป็นทางการ
- **Exam Relevance & Strategy:** In ISC2 CC primary materials, MTTR represents 'Mean Time to Respond'. (Note: In wider engineering literature, it can also denote Mean Time to Repair or Recover). Measured from alert to active response.
- **English Example:** *"Automated playbook isolation reduced the incident response team's MTTR to less than ten minutes for compromised endpoint alerts."*
- **Thai Example:** *"การสั่งกักกันเครื่องแบบอัตโนมัติตามคู่มือช่วยลดเวลาเฉลี่ยในการตอบสนอง (MTTR) ของทีมตอบสนองเหตุการณ์ลงเหลือไม่ถึง 10 นาทีเมื่อมีการแจ้งเตือนอุปกรณ์ปลายทางถูกเจาะ"*
- **Confused With:** Mean Time to Detect (MTTD), Mean Time to Repair
- **Keywords:** `MTTR`, `Mean Time to Respond`, `Response Time`, `Incident Containment`, `SOC Metric`
- **Evidence Sources:** S30-S31 (KNOW-D2-045)

---

#### `VOC-CC26-D2-073` — **MTTD vs MTTR**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง MTTD และ MTTR
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** MTTD measures how long an attacker operates undetected (compromise to alert), whereas MTTR measures how quickly the security team takes action once alerted (alert to response).
- **Thai Explanation:** การเปรียบเทียบ: MTTD วัดความเร็วในการตรวจพบ (ตั้งแต่เริ่มบุกรุกจนถึงมีสัญญาณแจ้งเตือน) ในขณะที่ MTTR วัดความเร็วในการเข้าจัดการของทีม (ตั้งแต่ได้รับการแจ้งเตือนจนถึงเริ่มดำเนินมาตรการตอบโต้)
- **Exam Relevance & Strategy:** Exam scenarios ask which metric is improved when investing in automated SIEM detection rules (MTTD) versus investing in incident response playbooks and automated containment (MTTR).
- **English Example:** *"The SOC improved MTTD with new detection rules and improved MTTR by implementing automated host quarantine scripts."*
- **Thai Example:** *"ศูนย์ SOC ปรับปรุงค่า MTTD ให้ดีขึ้นด้วยกฎการตรวจจับใหม่ และปรับปรุงค่า MTTR ให้รวดเร็วขึ้นด้วยสคริปต์กักกันเครื่องอัตโนมัติ"*
- **Confused With:** RTO vs RPO
- **Keywords:** `MTTD vs MTTR`, `Detection vs Response`, `Operational Milestones`, `SOC Metrics`
- **Evidence Sources:** S30-S31 (KNOW-D2-044)

---

#### `VOC-CC26-D2-074` — **Remediation Metric**
- **Thai Meaning (ความหมายภาษาไทย):** ตัวชี้วัดการแก้ไขช่องโหว่ตามข้อตกลงระดับการให้บริการ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A performance metric measuring the percentage of identified security vulnerabilities remediated, patched, or mitigated within an established organizational Service Level Agreement (e.g., within 15 or 30 days).
- **Thai Explanation:** ตัวชี้วัดผลการดำเนินงานที่วัดร้อยละของช่องโหว่ความปลอดภัยที่ตรวจพบและได้รับการแก้ไข ปิดช่องโหว่ หรือบรรเทาความเสี่ยงได้สำเร็จภายในกรอบเวลาที่ตกลงไว้ตาม SLA (เช่น ภายใน 15 หรือ 30 วัน)
- **Exam Relevance & Strategy:** Evaluating vulnerability remediation requires tracking time-to-remediation against formal SLA categories based on vulnerability severity (e.g., Critical = 15 days).
- **English Example:** *"The security team achieved an 88% remediation metric for critical vulnerabilities closed within their mandatory 15-day SLA target."*
- **Thai Example:** *"ทีมความปลอดภัยสามารถทำผลงานการแก้ไขช่องโหว่ได้ 88% สำหรับช่องโหว่ระดับวิกฤตที่ได้รับการปิดช่องโหว่ภายในเป้าหมาย SLA 15 วัน"*
- **Confused With:** Patch Compliance, Vulnerability Count
- **Keywords:** `Remediation Metric`, `SLA`, `Vulnerability Resolution`, `Turnaround Time`, `Performance Target`
- **Evidence Sources:** S31-S33 (KNOW-D2-046)

---

#### `VOC-CC26-D2-075` — **Patch Compliance Percentage**
- **Thai Meaning (ความหมายภาษาไทย):** ร้อยละความสอดคล้องตามข้อกำหนดการแพตช์ระบบ
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** The proportion of enterprise systems meeting baseline operating system and software security patch standards relative to the total inventory of managed systems.
- **Thai Explanation:** สัดส่วนของระบบคอมพิวเตอร์และเซิร์ฟเวอร์ในองค์กรที่ได้รับการติดตั้งแพตช์ความปลอดภัยตามมาตรฐานขั้นต่ำ เมื่อเทียบกับจำนวนระบบทั้งหมดที่อยู่ภายใต้การบริหารจัดการขององค์กร
- **Exam Relevance & Strategy:** A classic security scorecard KPI. The calculation requires a complete asset inventory as the denominator: (Systems compliant / Total systems) x 100.
- **English Example:** *"With 910 out of 1,000 corporate laptops fully patched, the enterprise achieved a 91% patch compliance rate against its 95% target."*
- **Thai Example:** *"ด้วยจำนวนแล็ปท็อป 910 เครื่องจากทั้งหมด 1,000 เครื่องที่ได้รับการลงแพตช์ครบถ้วน องค์กรจึงทำคะแนนความสอดคล้องตามเกณฑ์แพตช์ได้ 91% เทียบกับเป้าหมาย 95%"*
- **Confused With:** Vulnerability Count, Remediation Rate
- **Keywords:** `Patch Compliance`, `KPI`, `Asset Inventory`, `Baseline Adherence`, `Scorecard Metric`
- **Evidence Sources:** S31-S36 (KNOW-D2-047)

---

#### `VOC-CC26-D2-076` — **Training Completion Rate**
- **Thai Meaning (ความหมายภาษาไทย):** อัตราการผ่านการอบรมตามเกณฑ์กำหนด
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** An administrative compliance metric tracking the percentage of eligible personnel who have completed mandatory security awareness training within a designated reporting period.
- **Thai Explanation:** ตัวชี้วัดการปฏิบัติตามกฎเกณฑ์ด้านการบริหารที่ติดตามร้อยละของบุคลากรที่เข้าอบรมและผ่านหลักสูตรสร้างความตระหนักรู้ด้านความปลอดภัยครบถ้วนตามข้อบังคับภายในระยะเวลาที่กำหนด
- **Exam Relevance & Strategy:** Training completion is an implementation/participation metric, NOT a proof of security effectiveness. High completion does not automatically guarantee employees will resist real attacks.
- **English Example:** *"Human resources reported a 98% security training completion rate, fulfilling annual compliance audit requirements."*
- **Thai Example:** *"ฝ่ายทรัพยากรบุคคลรายงานอัตราการผ่านการอบรมด้านความปลอดภัย 98% ซึ่งเป็นไปตามข้อกำหนดการตรวจสอบการปฏิบัติตามกฎระเบียบประจำปี"*
- **Confused With:** Security Effectiveness, Phishing Click Rate
- **Keywords:** `Training Completion`, `Participation Metric`, `Compliance Record`, `HR Metric`
- **Evidence Sources:** S31-S36 (KNOW-D2-048)

---

#### `VOC-CC26-D2-077` — **Training Completion vs Security Effectiveness**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง Training Completion และ Security Effectiveness
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** Training Completion measures attendance and policy fulfillment (did employees watch the course?), whereas Security Effectiveness measures measurable behavioral change (did employees stop clicking malicious links?).
- **Thai Explanation:** การเปรียบเทียบ: Training Completion วัดเพียงการเข้าร่วมและทำตามข้อกำหนด (พนักงานเรียนจบตามเกณฑ์หรือไม่) ส่วน Security Effectiveness วัดการเปลี่ยนแปลงพฤติกรรมจริงที่ลดความเสี่ยง (พนักงานหยุดกดลิงก์อันตรายและรายงานฟิชชิงมากขึ้นหรือไม่)
- **Exam Relevance & Strategy:** Foundational NIST SP 800-55 and ISC2 concept. An organization with 100% training completion can still suffer disastrous breaches if behavioral effectiveness is low.
- **English Example:** *"Although the training completion rate reached 100%, the phishing simulation click rate of 24% showed that real security effectiveness remained inadequate."*
- **Thai Example:** *"แม้ว่าอัตราการผ่านการอบรมจะสูงถึง 100% แต่อัตราการหลงกดลิงก์ฟิชชิงจำลองที่ 24% ชี้ให้เห็นว่าประสิทธิผลด้านความปลอดภัยที่แท้จริงยังไม่เพียงพอ"*
- **Confused With:** Awareness vs Training
- **Keywords:** `Completion vs Effectiveness`, `Participation vs Behavior`, `NIST SP 800-55`, `Measurement Trap`
- **Evidence Sources:** S31 (KNOW-D2-048)

---

#### `VOC-CC26-D2-078` — **Key Risk Indicator**
- **Thai Meaning (ความหมายภาษาไทย):** ตัวชี้วัดความเสี่ยงหลัก (สัญญาณเตือนความเสี่ยง)
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `KRI` | **Full Form:** Key Risk Indicator
- **English Definition:** A forward-looking, leading indicator metric that provides an early warning signal of increasing risk exposure or vulnerability across enterprise assets and processes.
- **Thai Explanation:** ตัวชี้วัดล่วงหน้า (Leading indicator) ที่ทำหน้าที่เป็นสัญญาณเตือนภัยล่วงหน้า เพื่อบ่งชี้ว่าระดับความเสี่ยงหรือช่องโหว่ในระบบและกระบวนการขององค์กรกำลังมีแนวโน้มเพิ่มสูงขึ้น
- **Exam Relevance & Strategy:** KRIs signal growing danger before an incident happens (e.g., sharp increase in unpatched critical servers or external probe spikes). Context matters: rising phishing reports can signal higher attack activity or higher vigilance.
- **English Example:** *"A sudden rise in failed administrator login attempts served as a vital KRI, warning the security team of an ongoing brute-force attack campaign."*
- **Thai Example:** *"การพยายามเข้าสู่ระบบของผู้ดูแลระบบที่ล้มเหลวเพิ่มขึ้นอย่างรวดเร็วทำหน้าที่เป็น KRI สำคัญที่เตือนทีมความปลอดภัยถึงการโจมตีแบบ Brute-Force ที่กำลังดำเนินอยู่"*
- **Confused With:** Key Performance Indicator (KPI), Security Metric
- **Keywords:** `KRI`, `Key Risk Indicator`, `Early Warning`, `Leading Indicator`, `Risk Exposure`
- **Evidence Sources:** S32-S33 (KNOW-D2-049)

---

#### `VOC-CC26-D2-079` — **Key Performance Indicator**
- **Thai Meaning (ความหมายภาษาไทย):** ตัวชี้วัดผลการดำเนินงานหลัก
- **Category:** `core_term` | **Status:** `source_supported`
- **Acronym:** `KPI` | **Full Form:** Key Performance Indicator
- **English Definition:** A quantifiable operational metric that measures progress, efficiency, and success toward achieving specific security operational goals, SLAs, or compliance baselines.
- **Thai Explanation:** ตัวชี้วัดการปฏิบัติการเชิงปริมาณที่ใช้ประเมินความก้าวหน้า ประสิทธิภาพ และความสำเร็จในการบรรลุเป้าหมายการดำเนินงานด้านความปลอดภัย ข้อตกลงระดับบริการ (SLA) หรือเกณฑ์มาตรฐานที่ตั้งไว้
- **Exam Relevance & Strategy:** KPIs measure how well operational teams perform work (e.g., percentage of systems patched within SLA, time to resolve tickets).
- **English Example:** *"The SOC tracked ticket resolution turnaround time as a key performance indicator to evaluate the efficiency of tier-one analysts."*
- **Thai Example:** *"ศูนย์ SOC ติดตามเวลาที่ใช้ในการปิดเคสแจ้งเตือนเป็น KPI หลักเพื่อประเมินประสิทธิภาพการทำงานของนักวิเคราะห์ระดับที่หนึ่ง"*
- **Confused With:** Key Risk Indicator (KRI), SLA
- **Keywords:** `KPI`, `Key Performance Indicator`, `Operational Success`, `Progress Measurement`, `SLA Efficiency`
- **Evidence Sources:** S33 (KNOW-D2-050)

---

#### `VOC-CC26-D2-080` — **KPI vs KRI**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง KPI และ KRI
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** KPIs evaluate operational efficiency and success in reaching predefined targets (how well are we performing?), whereas KRIs provide early warning signals of rising risk exposure (how much risk is developing?).
- **Thai Explanation:** การเปรียบเทียบ: KPI วัดผลงานและความสำเร็จในการทำงานตามเป้าหมาย (เราปฏิบัติงานได้ดีตามเป้าเพียงใด) ส่วน KRI ทำหน้าที่เป็นสัญญาณเตือนภัยล่วงหน้าถึงแนวโน้มความเสี่ยงที่กำลังก่อตัว (ความเสี่ยงกำลังเพิ่มขึ้นหรือไม่)
- **Exam Relevance & Strategy:** Classic governance exam topic. Scenarios ask whether a metric tracks operational progress (KPI) or provides early risk warnings (KRI). Some metrics (like reported phishing count) can serve both based on context.
- **English Example:** *"Patch compliance percentage is a KPI evaluating the IT operations team, while the count of active zero-day vulnerabilities in the environment is a KRI."*
- **Thai Example:** *"ร้อยละความสอดคล้องของการลงแพตช์คือ KPI ที่ใช้วัดผลงานของทีมไอที ในขณะที่จำนวนช่องโหว่ Zero-Day ที่ยังไม่ได้รับการแก้ไขคือ KRI สำหรับเตือนความเสี่ยง"*
- **Confused With:** MTTD vs MTTR
- **Keywords:** `KPI vs KRI`, `Performance vs Risk`, `Leading vs Lagging`, `Operational Context`
- **Evidence Sources:** S33 (KNOW-D2-049)

---

#### `VOC-CC26-D2-081` — **Security Dashboard**
- **Thai Meaning (ความหมายภาษาไทย):** แดชบอร์ดความมั่นคงปลอดภัย (Security Dashboard)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A dynamic, graphical user interface providing real-time visual monitoring of security metrics, alert feeds, system health indicators, and operational trends for immediate operational awareness.
- **Thai Explanation:** หน้าจอแสดงผลข้อมูลเชิงภาพแบบกราฟิกที่อัปเดตแบบเรียลไทม์ เพื่อให้ผู้ปฏิบัติงานสามารถเฝ้าติดตามตัวชี้วัดความปลอดภัย ข้อมูลการแจ้งเตือน สถานะการทำงานของระบบ และแนวโน้มได้อย่างต่อเนื่องทันท่วงที
- **Exam Relevance & Strategy:** Dashboards emphasize visual presentation, dynamic graphical elements (charts, gauges), and real-time operational monitoring for SOC analysts and IT operators.
- **English Example:** *"The security operations center monitored an interactive dashboard displaying active firewall intrusion alerts and geographical traffic flows in real time."*
- **Thai Example:** *"ศูนย์ปฏิบัติการความปลอดภัยเฝ้าติดตามแดชบอร์ดเชิงโต้ตอบที่แสดงการแจ้งเตือนการบุกรุกไฟร์วอลล์และเส้นทางการไหลของทราฟฟิกตามพื้นที่ภูมิศาสตร์แบบเรียลไทม์"*
- **Confused With:** Security Scorecard, Cybersecurity Report
- **Keywords:** `Security Dashboard`, `Visual Display`, `Real-Time Monitoring`, `Operational Trends`, `Graphical Interface`
- **Evidence Sources:** S34 (KNOW-D2-051)

---

#### `VOC-CC26-D2-082` — **Security Scorecard**
- **Thai Meaning (ความหมายภาษาไทย):** สกอร์การ์ดความมั่นคงปลอดภัย (Security Scorecard)
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A structured, tabular assessment tool that compares actual measured security values directly against predefined target thresholds and SLAs to evaluate performance and identify compliance gaps.
- **Thai Explanation:** เครื่องมือประเมินผลในรูปแบบตารางที่มีโครงสร้างชัดเจน ซึ่งเปรียบเทียบค่าที่วัดได้จริงกับเกณฑ์เป้าหมายหรือ SLA ที่กำหนดไว้ล่วงหน้าโดยตรง เพื่อประเมินผลงานและชี้ให้เห็นช่องว่างที่ต้องปรับปรุง
- **Exam Relevance & Strategy:** Scorecards are tabular and target-driven (Target vs Actual vs Status). They evaluate variance (e.g. Target: 95%, Actual: 91%, Deficit: 4 percentage points) for management review.
- **English Example:** *"The quarterly security scorecard showed that while MFA deployment met its 100% goal, patch compliance fell four percentage points below target."*
- **Thai Example:** *"สกอร์การ์ดความปลอดภัยประจำไตรมาสแสดงให้เห็นว่า แม้การติดตั้ง MFA จะบรรลุเป้าหมาย 100% แต่ความสอดคล้องตามเกณฑ์แพตช์ยังต่ำกว่าเป้าหมายไป 4 จุดร้อยละ"*
- **Confused With:** Security Dashboard, Audit Report
- **Keywords:** `Security Scorecard`, `Target vs Actual`, `Tabular Matrix`, `Gap Analysis`, `Threshold Comparison`
- **Evidence Sources:** S35-S36 (KNOW-D2-052)

---

#### `VOC-CC26-D2-083` — **Cybersecurity Report**
- **Thai Meaning (ความหมายภาษาไทย):** รายงานความมั่นคงปลอดภัยไซเบอร์
- **Category:** `core_term` | **Status:** `source_supported`
- **English Definition:** A formal, documented communication presenting security program status, comprehensive audit findings, strategic risk postures, and resource recommendations tailored to leadership and stakeholders.
- **Thai Explanation:** เอกสารสื่อสารอย่างเป็นทางการที่นำเสนอสถานะของแผนงานความปลอดภัย ผลการตรวจสอบอย่างครอบคลุม ระดับความเสี่ยงเชิงกลยุทธ์ และข้อเสนอแนะในการจัดสรรทรัพยากร ซึ่งปรับแต่งให้เหมาะสมกับผู้บริหารและผู้มีส่วนได้ส่วนเสีย
- **Exam Relevance & Strategy:** Reports provide detailed narrative context, historical trends, and strategic investment justifications tailored to specific audiences (board of directors, auditors, technical managers).
- **English Example:** *"The CISO presented a formal cybersecurity report to the board summarizing recent breach attempts and requesting capital funding for cloud security posture tools."*
- **Thai Example:** *"CISO นำเสนอรายงานความปลอดภัยไซเบอร์อย่างเป็นทางการต่อคณะกรรมการ เพื่อสรุปความพยายามในการเจาะระบบล่าสุดและขอยื่นของบประมาณลงทุนในเครื่องมือความปลอดภัยบนคลาวด์"*
- **Confused With:** Security Dashboard, Security Scorecard
- **Keywords:** `Cybersecurity Report`, `Formal Document`, `Strategic Communication`, `Executive Summary`, `Recommendations`
- **Evidence Sources:** S37-S38 (KNOW-D2-053)

---

#### `VOC-CC26-D2-084` — **Dashboard vs Scorecard vs Report**
- **Thai Meaning (ความหมายภาษาไทย):** การเปรียบเทียบ Dashboard, Scorecard และ Report
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** Dashboards provide real-time dynamic visual graphics for day-to-day operational monitoring; Scorecards provide tabular comparisons of actual results against targets; Reports provide formal detailed narrative documentation for strategic decision-makers.
- **Thai Explanation:** การเปรียบเทียบรูปแบบการรายงาน: แดชบอร์ด (Dashboard) ให้ภาพกราฟิกแบบเรียลไทม์สำหรับการเฝ้าระวังประจำวัน, สกอร์การ์ด (Scorecard) เป็นตารางเปรียบเทียบค่าจริงกับเป้าหมาย, และรายงาน (Report) เป็นเอกสารทางการที่มีเนื้อหาเชิงวิเคราะห์สำหรับผู้บริหารระดับสูง
- **Exam Relevance & Strategy:** Candidates must select the appropriate format based on user need: real-time SOC monitoring = dashboard; tracking SLA targets = scorecard; executive board review = formal report.
- **English Example:** *"The SOC team uses a dashboard for monitoring live alerts, the security manager uses a scorecard to track SLA targets, and the board receives an annual cybersecurity report."*
- **Thai Example:** *"ทีม SOC ใช้แดชบอร์ดสำหรับเฝ้าระวังการแจ้งเตือนสด ผู้จัดการความปลอดภัยใช้สกอร์การ์ดติดตามเป้าหมาย SLA และคณะกรรมการจะได้รับรายงานความปลอดภัยไซเบอร์ประจำปี"*
- **Confused With:** Metric vs Measure
- **Keywords:** `Reporting Formats`, `Dashboard Scorecard Report`, `Presentation Types`, `Target Audience`
- **Evidence Sources:** S34-S38 (KNOW-D2-051)

---

#### `VOC-CC26-D2-085` — **Service Level Agreement**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อตกลงระดับการให้บริการ (SLA)
- **Category:** `acronym` | **Status:** `source_supported`
- **Acronym:** `SLA` | **Full Form:** Service Level Agreement
- **English Definition:** A formal documented commitment between a service provider and a client that defines agreed standards for service availability, performance, uptime, and incident remediation response times.
- **Thai Explanation:** ข้อตกลงที่มีการบันทึกเป็นทางการระหว่างผู้ให้บริการและผู้ใช้บริการ ซึ่งกำหนดมาตรฐานการให้บริการที่ตกลงร่วมกัน ทั้งความพร้อมใช้งาน ประสิทธิภาพ เวลาการทำงานต่อเนื่อง และกรอบเวลาในการแก้ไขปัญหา
- **Exam Relevance & Strategy:** SLAs establish the measurable contractual targets evaluated in security scorecards and vendor governance (e.g., cloud provider promising 99.9% uptime or vendor resolving critical bugs within 15 days).
- **English Example:** *"The cloud contract included a strict SLA requiring the hosting provider to maintain 99.95% availability and credit the customer for any unauthorized outages."*
- **Thai Example:** *"สัญญาคลาวด์มีข้อกำหนด SLA ที่เข้มงวด โดยกำหนดให้ผู้ให้บริการต้องรักษาความพร้อมใช้งานที่ 99.95% และชดเชยค่าเสียหายให้ลูกค้าหากเกิดระบบล่มที่ไม่ได้แจ้งล่วงหน้า"*
- **Confused With:** Service Level Objective (SLO), MOU
- **Keywords:** `SLA`, `Service Level Agreement`, `Contractual Target`, `Uptime Guarantee`, `Vendor Commitment`
- **Evidence Sources:** S31-S33 (KNOW-D2-046)

---

#### `VOC-CC26-D2-086` — **Leading vs Lagging Indicator**
- **Thai Meaning (ความหมายภาษาไทย):** ข้อแตกต่างระหว่าง Leading Indicator และ Lagging Indicator
- **Category:** `confusing_term` | **Status:** `editorial_synthesis`
- **English Definition:** A Leading Indicator is a forward-looking metric providing early warning of emerging conditions (e.g., KRIs, unpatched vulnerabilities), while a Lagging Indicator is a backward-looking metric evaluating historical outcomes after events occur (e.g., incident counts, financial breach losses).
- **Thai Explanation:** การเปรียบเทียบ: Leading Indicator คือตัวชี้วัดล่วงหน้าที่ช่วยเตือนภัยแนวโน้มหรือสภาวะที่กำลังจะเกิดขึ้น (เช่น KRI, สถิติช่องโหว่) ส่วน Lagging Indicator คือตัวชี้วัดย้อนหลังที่วัดผลลัพธ์หลังจากเหตุการณ์เกิดขึ้นแล้ว (เช่น จำนวนเหตุการณ์บุกรุกจริง, มูลค่าความเสียหาย)
- **Exam Relevance & Strategy:** Exam scenarios ask which indicator type helps prevent incidents before they manifest (leading) versus which indicator records post-incident damage for historical trends (lagging).
- **English Example:** *"Tracking daily employee phishing reporting speed provides a leading indicator of resilience, whereas totaling the annual cost of ransomware recovery is a lagging indicator."*
- **Thai Example:** *"การติดตามความเร็วในการรายงานฟิชชิงของพนักงานเป็นตัวชี้วัดล่วงหน้า (Leading indicator) ส่วนการคำนวณมูลค่าความเสียหายรวมจากมัลแวร์เรียกค่าไถ่ตลอดทั้งปีเป็นตัวชี้วัดย้อนหลัง (Lagging indicator)"*
- **Confused With:** KPI vs KRI
- **Keywords:** `Leading vs Lagging`, `Forward-looking`, `Historical Outcome`, `Early Warning`, `Indicator Types`
- **Evidence Sources:** S32-S33 (KNOW-D2-049)

---

#### `VOC-CC26-D2-087` — **Percentage-Point Deficit**
- **Thai Meaning (ความหมายภาษาไทย):** ผลต่างจุดร้อยละ (Percentage-Point Deficit)
- **Category:** `exam_language` | **Status:** `source_supported`
- **English Definition:** The arithmetic difference obtained by subtracting one percentage value from another (e.g., Target 95% minus Actual 91% equals a 4 percentage-point deficit, distinct from a relative percentage change).
- **Thai Explanation:** ผลต่างทางคณิตศาสตร์ที่ได้จากการนำค่าร้อยละหนึ่งมาลบออกจากอีกค่าร้อยละหนึ่ง (เช่น ค่าเป้าหมาย 95% ลบด้วยค่าจริง 91% จะเท่ากับมีผลต่างต่ำกว่าเป้าหมาย 4 'จุดร้อยละ' ซึ่งไม่ใช่การเปลี่ยนแปลงสัมพัทธ์ 4%)
- **Exam Relevance & Strategy:** Math and wording guidance for scorecard questions. Subtracting 91% from 95% is four percentage points, avoiding linguistic ambiguity in question options.
- **English Example:** *"The scorecard report noted that patch compliance fell by four percentage points below the corporate mandate."*
- **Thai Example:** *"รายงานสกอร์การ์ดระบุว่าความสอดคล้องตามเกณฑ์การลงแพตช์ต่ำกว่าเกณฑ์ข้อบังคับของบริษัทไป 4 จุดร้อยละ"*
- **Confused With:** Relative Percentage Change
- **Keywords:** `Percentage Point`, `Arithmetic Difference`, `Scorecard Math`, `Variance Analysis`
- **Evidence Sources:** S36 (KNOW-D2-047)

---

#### `VOC-CC26-D2-089` — **AI-Specific Key Risk Indicator**
- **Thai Meaning (ความหมายภาษาไทย):** ตัวชี้วัดความเสี่ยงหลักสำหรับระบบปัญญาประดิษฐ์ (AI-KRI)
- **Category:** `core_term` | **Status:** `supplemental`
- **Acronym:** `AI-KRI` | **Full Form:** Artificial Intelligence Key Risk Indicator
- **English Definition:** A forward-looking risk metric specifically designed to monitor emerging risks in deployed artificial intelligence systems, such as model error rates, hallucination frequencies, or training data distribution shifts.
- **Thai Explanation:** ตัวชี้วัดความเสี่ยงล่วงหน้าที่ออกแบบมาเพื่อเฝ้าระวังความเสี่ยงที่เกิดขึ้นในระบบปัญญาประดิษฐ์ที่เปิดใช้งานแล้ว เช่น อัตราความผิดพลาดของโมเดล ความถี่ในการตอบข้อมูลเท็จ (Hallucination) หรือการเปลี่ยนแปลงในการกระจายตัวของข้อมูลฝึกฝน
- **Exam Relevance & Strategy:** Part of the updated 2026 exam outline metrics scope. Scenarios test monitoring AI systems using leading indicators to detect reliability degradation before decisions cause business disruption.
- **English Example:** *"The compliance team tracked anomalous prompt rejection rates as an AI-KRI to detect prompt injection attempts against customer-facing chatbots."*
- **Thai Example:** *"ทีมกำกับดูแลติดตามอัตราการปฏิเสธคำสั่งที่ผิดปกติเป็น AI-KRI เพื่อตรวจจับความพยายามในการโจมตีแบบ Prompt Injection ใส่แชตบอตที่ให้บริการลูกค้า"*
- **Confused With:** Traditional KRI, Model Accuracy KPI
- **Keywords:** `AI-KRI`, `Key Risk Indicator`, `AI Risk`, `Model Monitoring`, `2026 Outline`
- **Evidence Sources:** Domain 2.4 (KNOW-D2-049)

---


### Exam Strategy & Qualifier Language (1 entries)

#### `VOC-CC26-D2-101` — **LEAST / NOT / EXCEPT (Governance Exclusions)**
- **Thai Meaning (ความหมายภาษาไทย):** น้อยที่สุด / ไม่ใช่ / ยกเว้น (คำบ่งชี้การตัดออกในข้อสอบ)
- **Category:** `exam_language` | **Status:** `source_supported`
- **English Definition:** Negative exam stem qualifiers instructing candidates to identify the incorrect action, the invalid claim, or the option that does NOT align with governance, continuity, or compliance principles.
- **Thai Explanation:** คำบ่งชี้เชิงปฏิเสธในโจทย์ข้อสอบ (LEAST, NOT, EXCEPT) ที่กำหนดให้ผู้สอบเลือกคำตอบที่เป็นการกระทำที่ไม่ถูกต้อง ข้อความที่ไม่เป็นความจริง หรือตัวเลือกที่ 'ไม่สอดคล้อง' กับหลักการกำกับดูแล ความต่อเนื่อง หรือการปฏิบัติตามกฎเกณฑ์
- **Exam Relevance & Strategy:** Candidates must invert their search and identify the distractor or prohibited behavior (such as transferring accountability to an insurer, or expecting an unequipped cold site to restore systems within hours).
- **English Example:** *"The question asked which option was LEAST likely to build a strong security culture, identifying penalizing employees for reporting honest mistakes."*
- **Thai Example:** *"โจทย์ถามว่าตัวเลือกใดส่งเสริมวัฒนธรรมความปลอดภัยได้น้อยที่สุด (LEAST) ซึ่งคำตอบที่ถูกต้องคือการลงโทษพนักงานที่รายงานความผิดพลาดโดยสุจริต"*
- **Confused With:** BEST / MOST
- **Keywords:** `LEAST`, `NOT`, `EXCEPT`, `Negative Stem`, `Exam Strategy`, `Exclusion`
- **Evidence Sources:** EL18 (KNOW-D2-001)

---

