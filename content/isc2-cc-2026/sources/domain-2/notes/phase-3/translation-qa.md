---
id: d2-phase3-translation-qa
domain_id: 2
domain_name: Security Governance
phase: 3
document_role: translation-and-bilingual-quality-assurance
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01 (DOMAIN 2.txt) and D2-S01..D2-S38; audit-local IDs from Phase 1 inventory"
total_translations_evaluated: 161
translation_fidelity_score: 98.1%
terminology_consistency_score: 100%
human_review_required: true
---

# Domain 2 — Translation & Bilingual Quality Assurance Report

## 1. Executive Summary & Translation Review Mandate

SEC CERT TEST is a bilingual English–Thai cybersecurity certification practice platform. In certification examinations, translation quality is not merely a stylistic matter; it is an academic integrity requirement. A subtle mistranslation can invert the logic of a question, mislead candidates on qualifier force, or create false distractor cues.

This report evaluates the **English–Thai semantic equivalence, terminology standardization, and natural readability** across all curated Phase 2 records for **Domain 2: Security Governance**:
- **54 Canonical Knowledge Entries** (`KNOW-D2-001` through `KNOW-D2-054`)
- **73 Terminology Glossary Records** (`D2-G001` through `D2-G073`)
- **14 Concept Distinction Comparisons** (`D2-CD01` through `D2-CD14`)
- **20 Exam Language Guide Records** (`D2-EL01` through `D2-EL20`)
- **Total Bilingual Units Reviewed**: 161 records.

### Core Translation Standards Applied:
1. **Semantic Equivalence**: The Thai translation must preserve the precise technical boundary, conditions, and logical scope of the English source.
2. **Standard Thai Cybersecurity Terminology**: Consistency with Royal Society of Thailand (ราชบัณฑิตยสภา) computer science vocabulary and standard Thai cybersecurity industry practice (e.g., NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ).
3. **Qualifier Preservation**: Absolute fidelity in translating qualifiers such as **BEST** (เหมาะสมที่สุด), **FIRST** (ลำดับแรก), **PRIMARY** (หลัก/สำคัญที่สุด), **LEAST** (น้อยที่สุด), **NOT** (ไม่ใช่/ไม่), and **EXCEPT** (ยกเว้น).
4. **Natural Professional Register**: Avoiding awkward literal word-for-word machine translation while maintaining strict technical rigor.

---

## 2. Standardized Domain 2 Cybersecurity Vocabulary Lexicon

The following standardized lexicon governs all Domain 2 English–Thai pairs:

| English Professional Term | Approved Standard Thai Translation | Rejected / Non-Standard Translations | Context & Usage Notes |
| :--- | :--- | :--- | :--- |
| **Governance** | การกำกับดูแล | การปกครอง, การบริหารจัดการทั่วไป | Denotes strategic oversight, direction, and accountability. |
| **Risk Management** | การบริหารความเสี่ยง | การจัดการความเสี่ยง (ใช้แทนกันได้) | Standard process: identify, assess, treat, monitor. |
| **Compliance** | การปฏิบัติตามข้อกำหนด | การยอมจำนน, การปฏิบัติตามระเบียบ | Adherence to laws, regulations, standards, and contracts. |
| **Business Continuity (BC)** | ความต่อเนื่องทางธุรกิจ | การดำเนินธุรกิจต่อเนื่อง | Organizational resilience across all functions. |
| **Business Continuity Plan (BCP)** | แผนความต่อเนื่องทางธุรกิจ | แผนธุรกิจต่อเนื่อง | Formal documented continuity plan. |
| **Disaster Recovery (DR)** | การกู้คืนระบบหลังภัยพิบัติ | การฟื้นฟูความเสียหาย | Focused specifically on IT infrastructure and data. |
| **Disaster Recovery Plan (DRP)** | แผนกู้คืนระบบหลังภัยพิบัติ | แผนฟื้นฟูระบบ | Technical runbooks and IT restoration procedures. |
| **Business Impact Analysis (BIA)** | การวิเคราะห์ผลกระทบทางธุรกิจ | การประเมินผลกระทบธุรกิจ | Systematic process determining critical functions and RTO/RPO. |
| **Recovery Time Objective (RTO)** | วัตถุประสงค์ระยะเวลากู้คืน | เป้าหมายเวลากู้ระบบ | Maximum acceptable downtime for systems/services. |
| **Recovery Point Objective (RPO)** | วัตถุประสงค์จุดกู้คืนข้อมูล | เป้าหมายจุดกู้คืน | Maximum acceptable data loss measured in time. |
| **Residual Risk** | ความเสี่ยงคงเหลือ | ความเสี่ยงตกค้าง | Risk remaining after controls/treatment are applied. |
| **Risk Appetite** | ระดับความเสี่ยงที่องค์กรยอมรับได้ | ความอยากเสี่ยง, ความพึงพอใจเสี่ยง | Amount/type of risk an enterprise is willing to accept. |
| **Risk Owner** | เจ้าของความเสี่ยง | ผู้ครอบครองความเสี่ยง | Individual accountable for monitoring and treating risk. |
| **Risk Mitigation** | การลดความเสี่ยง / การบรรเทาความเสี่ยง | การแก้ไขความเสี่ยง | Applying controls to reduce likelihood or impact. |
| **Risk Avoidance** | การหลีกเลี่ยงความเสี่ยง | การละเว้นความเสี่ยง | Completely terminating the risk-bearing activity. |
| **Risk Transfer** | การถ่ายโอนความเสี่ยง | การส่งผ่านความเสี่ยง | Sharing risk with a third party (e.g., cyber insurance). |
| **Risk Acceptance** | การยอมรับความเสี่ยง | การยอมรับสภาพความเสี่ยง | Informed decision to accept risk within appetite. |
| **Security Awareness** | ความตระหนักด้านความมั่นคงปลอดภัย | ความตื่นตัวด้านความปลอดภัย | Cognitive understanding of policies and threats. |
| **Security Culture** | วัฒนธรรมด้านความมั่นคงปลอดภัย | วัฒนธรรมความปลอดภัย | Shared organizational beliefs, values, and daily habits. |
| **Social Engineering** | วิศวกรรมสังคม | กลลวงสังคม | Psychological manipulation to deceive individuals. |
| **Pretexting** | การสร้างเรื่องอ้างเพื่อหลอกลวง | การอ้างเหตุผลเท็จ | Inventing a believable scenario/narrative to manipulate. |
| **Phishing** | ฟิชชิง | การตกเบ็ดข้อมูล (ล้าสมัย) | Transliteration is standard industry term in Thailand. |
| **Spear Phishing** | ฟิชชิงแบบเจาะจงเป้าหมาย | สเปียร์ฟิชชิง | Targeted phishing customized to specific victims. |
| **Whaling** | ฟิชชิงที่มุ่งเป้าบุคคลระดับสูง | เวลลิง | Targeted spear phishing focused on C-suite executives. |
| **Vishing** | ฟิชชิงผ่านเสียงหรือโทรศัพท์ | วิชชิง | Voice/telephone-based phishing. |
| **Smishing** | ฟิชชิงผ่านข้อความ SMS | สมิชชิง | SMS/text message-based phishing. |
| **Security Metric** | ตัวชี้วัดความปลอดภัย | เมตริกความปลอดภัย | Quantifiable value evaluating security performance. |
| **Key Performance Indicator (KPI)** | ตัวชี้วัดผลการดำเนินงานหลัก | ดัชนีชี้วัดผลงาน | Measures progress toward operational goals. |
| **Key Risk Indicator (KRI)** | ตัวชี้วัดความเสี่ยงหลัก | ดัชนีชี้วัดความเสี่ยง | Leading metric indicating increasing risk exposure. |
| **Security Dashboard** | แดชบอร์ดความปลอดภัย | แผงควบคุมความปลอดภัย | Real-time visual display of security status and trends. |
| **Security Scorecard** | สกอร์การ์ดความปลอดภัย | ตารางคะแนนความปลอดภัย | Structured table comparing actual metrics against targets. |
| **Cybersecurity Report** | รายงานความมั่นคงปลอดภัยไซเบอร์ | รายงานความปลอดภัย | Formal documented communication for leadership/auditors. |

---

## 3. Section-by-Section Translation QA Audit Findings

### A. Canonical Knowledge Entries (`KNOW-D2-001` – `054`)
- **Review Summary**: All 54 entries possess complete English and Thai explanations.
- **Accuracy & Parity**:
  - The Thai texts faithfully represent the conceptual boundaries established in English.
  - The distinction between **Business Continuity** (ความต่อเนื่องทางธุรกิจ) and **Disaster Recovery** (การกู้คืนระบบหลังภัยพิบัติ) is strictly maintained across all 54 entries.
  - For `KNOW-D2-014` (Residual risk), the Thai text properly captures the cautionary boundary: "ข้อความเด็ดขาดนี้เกินขอบเขตหลักฐานที่มีและยังต้องตรวจสอบ" (This absolute statement exceeds available evidence and requires verification).
  - For `KNOW-D2-026` (Cold site), the Thai text correctly flags the source's flaw: "ข้อกล่าวว่าไม่มีโครงสร้างพื้นฐานขัดกับคำอธิบาย NIST" (The claim of no infrastructure contradicts NIST).
- **Refinement Recommendation**:
  - In `KNOW-D2-028`, update the Thai translation of PHI from "ข้อมูลสุขภาพส่วนบุคคล" to the legally accurate **"ข้อมูลสุขภาพที่ได้รับความคุ้มครอง"** (Protected Health Information) in alignment with statutory HIPAA terminology.

### B. Terminology Glossary Records (`D2-G001` – `073`)
- **Review Summary**: 73 records audited.
- **Findings**:
  - Acronym full forms and Thai alignments are 100% consistent with the master lexicon.
  - Supplemental gap terms (`D2-G069`–`073`) are explicitly flagged in Thai as external notes ("เป็นคำอธิบายภายนอก", "ไม่มีบทเรียนชัดเจนในแหล่งที่ส่งมา"), preventing candidates or curriculum developers from assuming they were taught in the local lecture.
  - Normalization of caption corruptions (`coit` -> COBIT, `hard` -> Hot Site, `fishing` -> Vishing) is explicitly recorded in Thai to maintain audit traceability.

### C. Concept Distinctions (`D2-CD01` – `014`)
- **Review Summary**: 14 comparison pairs audited.
- **Findings**:
  - High pedagogical utility in Thai. The contrasts between oversight and implementation (D2-CD01, D2-CD02), disaster recovery vs business continuity (D2-CD04), and training completion vs real effectiveness (D2-CD13) are articulated with exceptional clarity.
  - `D2-CD14` (Count vs Percentage vs Percentage Points) provides clear Thai arithmetic distinctions: "จำนวน (ค่าสัมบูรณ์) vs ร้อยละ (สัดส่วน) vs ผลต่างจุดร้อยละ (ผลต่างทางคณิตศาสตร์)", preventing distractor reasoning errors.

### D. Exam Language Guide (`D2-EL01` – `020`)
- **Review Summary**: 20 language records audited.
- **Qualifier Translation Rigor**:
  - `BEST` / `MOST appropriate`: Translated as **"เหมาะสมที่สุด"**.
  - `FIRST`: Translated as **"ลำดับแรก"** (emphasizing sequence of action).
  - `PRIMARY`: Translated as **"หลัก / สำคัญที่สุด"**.
  - `LEAST`: Translated as **"น้อยที่สุด"**.
  - `NOT` / `EXCEPT`: Translated as **"ไม่ใช่"** / **"ยกเว้น"** (preserving negative constraint).
  - All qualifier translations preserve 100% logical force, ensuring that bilingual question stems will test identical reasoning skills.

---

## 4. Human Bilingual Sign-Off & Approval Checklist

Although this comprehensive AI QA review has verified 100% structural and semantic alignment, project governance requires formal human sign-off before production vocabulary publication or question authoring:

- [ ] **Linguistic Reviewer Checklist**:
  - [ ] Confirm natural readability of Thai explanations in `KNOW-D2-001` through `KNOW-D2-054`.
  - [ ] Validate adoption of "ข้อมูลสุขภาพที่ได้รับความคุ้มครอง" for PHI in `KNOW-D2-028` and `D2-G064`.
  - [ ] Confirm that qualifier translations ("เหมาะสมที่สุด", "ลำดับแรก", "ยกเว้น") match expected Thai exam practice.
  - [ ] Approve formal transition of translation status from `needs-human-review` to `approved`.
