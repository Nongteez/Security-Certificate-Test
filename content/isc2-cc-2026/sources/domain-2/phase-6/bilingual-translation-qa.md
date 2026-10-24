# ISC2 CC 2026 Domain 2: Security Governance
## Phase 6: Bilingual Semantic Translation Quality Assurance Report

**Audit Date:** 2026-10-23
**Scope:** 26 Questions, 52 Stems (EN & TH), 104 Options (EN & TH), 52 Full Explanations
**Auditor:** Independent Adversarial Question Academic QA Subagent
**Review Standard:** Semantic Equivalence, Technical Terminology Fidelity, Cultural Neutrality, Readability

> [!NOTE]
> All Thai translations evaluated herein maintain an official curation status of `ai-verified / needs-human-review`. This report establishes rigorous automated and academic linguistic checks, but does not claim final human native translator sign-off.

---

### 1. Executive Summary

A comprehensive bilingual audit was conducted comparing every English stem, option, and explanation against its corresponding Thai counterpart.

#### Key Linguistic Findings:
1. **Semantic Fidelity:** 100% of the questions preserve semantic equivalence. The core cybersecurity dilemma, constraints, and operational context in English are accurately represented in Thai without omitting critical facts.
2. **Technical Terminology Alignment:** Translations strictly adhere to the Phase 3.5 Terminology Glossary and Exam Language Guide. Key governance terms (e.g., GRC, Risk Appetite, BCP, DRP, BIA, RTO, RPO, Whaling, Vishing, Pretexting, MTTD, MTTR, KPI, KRI) are accompanied by appropriate English acronyms in parentheses to support bilingual exam comprehension.
3. **Absence of Translation Leaks:** None of the Thai translations introduce clues, reveal the correct answer, or change the intended difficulty level.
4. **Minor Phrasing Nuances for Polish:**
   - In `DRAFT-D2-012`, Thai Option A includes an embedded descriptive definition in parentheses (`ศูนย์สำรองแบบไม่มีอุปกรณ์คอมพิวเตอร์พร้อมใช้ (Cold site)`), making it 56 characters, while English is just `Cold site` (9 chars). This should be standardized in Phase 7 to `ศูนย์สำรองแบบ Cold site` to match the conciseness of the other choices.
   - In `DRAFT-D2-023`, Thai Option A is verbose (237 characters) and should be lightly tightened for visual elegance.

---

### 2. Bilingual Terminology Alignment Matrix

| Canonical Concept | English Preferred Term | Thai Standardized Term | Verification Status | Notes |
|:---|:---|:---|:---:|:---|
| **Governance** | Governance | การกำกับดูแล | PASS | Distinct from Management (การจัดการ). |
| **Risk Appetite** | Risk Appetite | ระดับความเสี่ยงที่ยอมรับได้ | PASS | Standardized per ISO 31000 / COBIT. |
| **Risk Owner** | Risk Owner | เจ้าของความเสี่ยง | PASS | Business unit leader owning operational risk. |
| **Risk Avoidance** | Risk Avoidance | การหลีกเลี่ยงความเสี่ยง | PASS | Terminating risky activity (decommissioning). |
| **Semi-Quantitative** | Semi-Quantitative | การประเมินกึ่งเชิงปริมาณ | PASS | Ordinal scales (1-5) per NIST SP 800-30. |
| **Business Continuity** | Business Continuity (BCP) | แผนความต่อเนื่องทางธุรกิจ | PASS | Operational workflows, people, manual processes. |
| **Disaster Recovery** | Disaster Recovery (DRP) | แผนกู้คืนระบบจากภัยพิบัติ | PASS | Technical IT, databases, servers, networks. |
| **Business Impact Analysis** | BIA | การวิเคราะห์ผลกระทบทางธุรกิจ | PASS | Prerequisite for RTO/RPO sequencing. |
| **Recovery Time Objective** | RTO | เป้าหมายระยะเวลาการฟื้นฟูระบบ | PASS | Maximum allowable downtime. |
| **Recovery Point Objective** | RPO | เป้าหมายจุดฟื้นฟูข้อมูล | PASS | Maximum allowable data loss (time-based). |
| **Cold Site** | Cold Site | ศูนย์สำรองแบบ Cold site | PASS | Space, power, HVAC, cabling without servers. |
| **Security Culture** | Security Culture | วัฒนธรรมความมั่นคงปลอดภัย | PASS | Distinct from Awareness (ความตระหนักรู้). |
| **Tone at the Top** | Tone at the Top | แบบอย่างของผู้นำระดับสูง | PASS | Executive leadership modeling compliant behavior. |
| **Whaling** | Whaling | การล่าวาฬ / เวลลิ่ง | PASS | Spear phishing targeted at C-suite executives. |
| **Vishing** | Voice Phishing (Vishing) | วิชชิง / การหลอกลวงด้วยเสียงทางโทรศัพท์ | PASS | Voice telephony channel. |
| **Pretexting** | Pretexting | การสร้างเรื่องแต่งเพื่อหลอกลวง | PASS | Deceptive narrative mechanism. |
| **Credential Stuffing** | Credential Stuffing | การสวมรอยข้อมูลประจำตัวที่รั่วไหล | PASS | Automated credential replay attacks. |
| **Recognize & Report** | Recognize and Report | การสังเกตและรายงานทันที | PASS | Foundational end-user incident duty. |
| **Mean Time to Detect** | MTTD | ระยะเวลาเฉลี่ยในการตรวจจับ | PASS | Intrusion start to alert generation. |
| **Mean Time to Respond** | MTTR | ระยะเวลาเฉลี่ยในการตอบสนอง | PASS | Alert triage to active host containment. |
| **Key Risk Indicator** | KRI | ตัวชี้วัดความเสี่ยงสำคัญ / สัญญาณเตือนภัยล่วงหน้า | PASS | Leading risk exposure signal. |
| **Key Performance Indicator** | KPI | ตัวชี้วัดประสิทธิภาพการปฏิบัติงาน | PASS | Operational process execution target. |
| **Executive Report** | Executive Report | รายงานระดับบริหารอย่างเป็นทางการ | PASS | Formal strategic communication for boards. |

---

### 3. Granular Per-Question Bilingual Audit

| Draft ID | Stem Equivalence | Option Equivalence | Explanation Equivalence | Natural Thai Flow | Finding & Recommendations |
|:---|:---:|:---:|:---:|:---:|:---|
| `DRAFT-D2-001` | PASS | PASS | PASS | Excellent | Natural Thai syntax for GRC business integration. |
| `DRAFT-D2-002` | PASS | PASS | PASS | Excellent | Clear distinction of board governance vs IT tasks. |
| `DRAFT-D2-003` | PASS | PASS | PASS | Excellent | Accurate legal compliance terminology (GDPR/HIPAA). |
| `DRAFT-D2-004` | PASS | PASS | PASS | Excellent | Framework names and ISMS certification clear. |
| `DRAFT-D2-005` | PASS | PASS | PASS | Excellent | Clear translation of business risk ownership. |
| `DRAFT-D2-006` | PASS | PASS | PASS | Excellent | Risk treatment terms align with Phase 3.5 glossary. |
| `DRAFT-D2-007` | PASS | PASS | PASS | Excellent | Semi-quantitative vs quantitative taxonomy preserved. |
| `DRAFT-D2-008` | PASS | PASS | PASS | Excellent | BCP vs DRP distinction clearly articulated. |
| `DRAFT-D2-009` | PASS | PASS | PASS | Excellent | BIA prioritization dispute translated naturally. |
| `DRAFT-D2-010` | PASS | PASS | PASS | Excellent | 2.5h RTO and 12h RPO numerical terms match perfectly. |
| `DRAFT-D2-011` | PASS | PASS | PASS | Good | Minor: Option D distractor revision recommended. |
| `DRAFT-D2-012` | PASS | PASS | PASS | Acceptable | Standardize Thai option labels to concise format. |
| `DRAFT-D2-013` | PASS | PASS | PASS | Excellent | Backup write logs vs restore testing accurately phrased. |
| `DRAFT-D2-014` | PASS | PASS | PASS | Excellent | Culture vs awareness terminology elegant and natural. |
| `DRAFT-D2-015` | PASS | PASS | PASS | Excellent | Authority and urgency psychological levers clear. |
| `DRAFT-D2-016` | PASS | PASS | PASS | Excellent | Whaling vs spear phishing hierarchy preserved. |
| `DRAFT-D2-017` | PASS | PASS | PASS | Good | Vishing and pretexting definitions clear. |
| `DRAFT-D2-018` | PASS | PASS | PASS | Excellent | Credential stuffing and MFA mechanics accurate. |
| `DRAFT-D2-019` | PASS | PASS | PASS | Excellent | Recognize and report duty and RAM preservation clear. |
| `DRAFT-D2-020` | PASS | PASS | PASS | Excellent | Vanity metrics translation captures the exact nuance. |
| `DRAFT-D2-021` | PASS | PASS | PASS | Excellent | MTTD timeline milestones match English 1:1. |
| `DRAFT-D2-022` | PASS | PASS | PASS | Good | Lightly tighten Thai Option A length. |
| `DRAFT-D2-023` | PASS | PASS | PASS | Good | Tighten Thai Option A length. |
| `DRAFT-D2-024` | PASS | PASS | PASS | Good | Implementation vs effectiveness metrics clear. |
| `DRAFT-D2-025` | PASS | PASS | PASS | Excellent | KRI leading indicator vs KPI performance clear. |
| `DRAFT-D2-026` | PASS | PASS | PASS | Good | Strategic board report context clear. |

---

### 4. Bilingual Verdict & Readiness

The bilingual quality of Domain 2 questions demonstrates high academic rigor, terminology consistency, and natural idiomatic flow. No fatal translation defects or answer giveaways exist. Minor length and distractor adjustments documented above will be executed in Phase 7.
