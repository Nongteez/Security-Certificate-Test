---
id: d2-phase3-concept-distinctions-qa
domain_id: 2
domain_name: Security Governance
phase: 3
document_role: concept-distinctions-quality-assurance
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01 (DOMAIN 2.txt) and D2-S01..D2-S38; audit-local IDs from Phase 1 inventory"
total_distinctions_reviewed: 14
distinction_pass_count: 9
distinction_revision_required_count: 5
distinction_blocked_count: 0
---

# Domain 2 — Concept Distinctions Academic QA Report

## 1. Executive Summary & Review Scope

This report evaluates the **14 Concept Distinction comparisons** (`D2-CD01` through `D2-CD14`) curated in Phase 2 for **ISC2 CC 2026 Domain 2: Security Governance**.

Concept distinctions are vital for ISC2 practice design. ISC2 exam questions frequently challenge candidates with scenarios where multiple options appear plausible, but only one option aligns with the specific conceptual boundary (e.g., distinguishing an executive oversight responsibility from an administrative control, or identifying whether a failure violates RTO or RPO).

### Evaluation Criteria:
1. **Academic Rigor**: The boundary points must withstand scrutiny against recognized standards (NIST SP 800-34, NIST SP 800-30, NIST SP 800-55, ISO/IEC 27001).
2. **Plausibility & Distractor Utility**: The distinction must directly assist in constructing effective, non-trivial exam distractors.
3. **Bilingual Semantic Fidelity**: Thai translations must clearly articulate the differentiation without blurring technical nuances.

---

## 2. Detailed Distinctions QA Ledger

### D2-CD01: Governance vs Risk vs Compliance
- **English Boundary:**
  - *Governance* establishes organizational direction, assigns accountability, and conducts strategic oversight.
  - *Risk Management* assesses potential threats and vulnerabilities to assets/objectives and determines appropriate treatment strategies.
  - *Compliance* evaluates and ensures adherence to applicable laws, external regulations, contractual mandates, and internal policies.
- **Academic Evaluation:** Accurate and foundational. Prevents the common misconception that compliance equals security, or that oversight directly executes technical operations.
- **Thai Parity:** การกำกับดูแล (ทิศทาง/ความรับผิดชอบ) vs การบริหารความเสี่ยง (จัดการสิ่งกระทบเป้าหมาย) vs การปฏิบัติตามข้อกำหนด (เกณฑ์ที่ใช้กับองค์กร). Clear and precise.
- **Canonical IDs:** `KNOW-D2-002`, `KNOW-D2-003`, `KNOW-D2-004`.
- **QA Decision:** `DISTINCTION_PASS`

### D2-CD02: Framework / Standard vs GRC Platform vs Risk Register
- **English Boundary:**
  - *Frameworks and Standards* (e.g., NIST CSF, ISO/IEC 27001, COBIT) provide structured guidance, benchmarks, and management system requirements.
  - *GRC Platforms* are enterprise software applications that centralize data collection, automate compliance workflows, and manage audit evidence.
  - *Risk Registers* are structured documentation repositories logging identified risks, owners, treatment plans, and residual risk states.
- **Academic Evaluation:** Accurate. Crucial for ensuring candidates do not mistake software products for governance policies, or conflate a standard with a software database.
- **Thai Parity:** กรอบ/มาตรฐาน (จัดโครงสร้าง) vs แพลตฟอร์ม GRC (ซอฟต์แวร์รวมข้อมูล) vs ทะเบียนความเสี่ยง (บันทึกรายการความเสี่ยง).
- **Canonical IDs:** `KNOW-D2-006`, `KNOW-D2-007`, `KNOW-D2-008`, `KNOW-D2-009`, `KNOW-D2-010`, `KNOW-D2-011`.
- **QA Decision:** `DISTINCTION_PASS`

### D2-CD03: Qualitative vs Semi-Quantitative vs Quantitative Rating
- **English Boundary:**
  - *Qualitative Assessment* uses descriptive categorical labels (High, Medium, Low) based on subjective evaluation and organizational consensus.
  - *Semi-Quantitative Assessment* assigns numeric scales or bins (e.g., 1–4, 1–5, 1–10) to represent categorical ranks; numbers reflect relative order but lack cardinal mathematical properties.
  - *Quantitative Assessment* uses mathematically rigorous numerical values with empirical units, primarily monetary costs (Asset Value, SLE, ALE, ARO) or measured statistical failure rates.
- **Academic Evaluation:** Source lecture was flawed (calling 1–4 quantitative). The distinction is revised in accordance with NIST SP 800-30 Rev. 1 to ensure candidates understand why 1–4 is semi-quantitative.
- **Thai Parity:** เชิงคุณภาพ (คำบรรยาย) vs คะแนนแทนระดับ (Semi-Quantitative / สเกลตัวเลข 1-4) vs ปริมาณเชิงตัวเลข (Quantitative / หน่วยการเงิน ALE, SLE).
- **Canonical IDs:** `KNOW-D2-015`. Linked to issue `D2-Q06`.
- **QA Decision:** `DISTINCTION_REVISION_REQUIRED` (Must incorporate NIST SP 800-30 taxonomy in staging).

### D2-CD04: BC vs BCP vs DR vs DRP
- **English Boundary:**
  - *Business Continuity (BC)* is the high-level organizational capability and discipline ensuring critical business operations continue during disruptions.
  - *Business Continuity Plan (BCP)* is the documented operational playbook specifying staff relocations, manual workarounds, supplier backups, and communication chains.
  - *Disaster Recovery (DR)* is the technical discipline and process focused on restoring IT infrastructure, applications, network links, and digital data.
  - *Disaster Recovery Plan (DRP)* is the documented technical runbook detailing specific restore steps, backup media cutovers, and server recovery procedures.
- **Academic Evaluation:** Highly accurate. BC/BCP covers the entire enterprise (people, facilities, business processes); DR/DRP is a technical subset focused on IT assets.
- **Thai Parity:** BC (ความสามารถระดับองค์กร) vs BCP (เอกสารแผนปฏิบัติการธุรกิจ) vs DR (การกู้คืนระบบไอที) vs DRP (เอกสารแผนกู้คืนทางเทคนิค).
- **Canonical IDs:** `KNOW-D2-016`, `KNOW-D2-017`, `KNOW-D2-018`, `KNOW-D2-019`.
- **QA Decision:** `DISTINCTION_PASS`

### D2-CD05: RTO vs RPO
- **English Boundary:**
  - *Recovery Time Objective (RTO)* is the targeted duration of acceptable system unavailability (the maximum tolerable time to restore system functions).
  - *Recovery Point Objective (RPO)* is the targeted limit on acceptable data loss measured in time (the point in time to which data must be restored from backups).
- **Academic Evaluation:** Accurate and fundamental. RTO answers "How quickly must the system be running again?", while RPO answers "How much recent data can the organization afford to lose without fatal harm?".
- **Thai Parity:** RTO (เป้าหมายเวลาที่ระบบหยุดทำงานได้) vs RPO (เป้าหมายจุดกู้ข้อมูล / ข้อมูลสูญเสียได้ย้อนหลังเท่าใด).
- **Canonical IDs:** `KNOW-D2-021`, `KNOW-D2-022`. Linked to issue `D2-Q05`.
- **QA Decision:** `DISTINCTION_PASS` (Bounded to conceptual distinction; unverified 1-hour timelines held).

### D2-CD06: Hot vs Warm vs Cold Recovery Sites
- **English Boundary:**
  - *Hot Site*: Fully configured facility equipped with hardware, power, cooling, network links, and live/near-real-time synchronized data; ready for rapid operational cutover (hours).
  - *Warm Site*: Partially configured facility containing raised floors, power, cooling, network links, and some server hardware; requires data restoration from recent backups and final configuration before activation (hours to days).
  - *Cold Site*: Facility containing basic physical infrastructure (space, power, HVAC, telecommunications wiring) but **NO pre-installed computing hardware or servers**; equipment must be procured/delivered, installed, and configured, and data loaded from backups (days to weeks).
- **Academic Evaluation:** Requires revision to overwrite the lecture's inaccurate "no infrastructure" claim for cold sites, aligning with NIST SP 800-34 Rev. 1 Section 3.4.3.
- **Thai Parity:** Hot Site (พร้อมใช้ทันที / ข้อมูลจำลองสด) vs Warm Site (มีอุปกรณ์บางส่วน / ต้องกู้ข้อมูลจากสำรอง) vs Cold Site (มีอาคาร ไฟฟ้า แอร์ / ไม่มีคอมพิวเตอร์ติดตั้ง ต้องจัดซื้อและติดตั้งใหม่).
- **Canonical IDs:** `KNOW-D2-024`, `KNOW-D2-025`, `KNOW-D2-026`. Linked to issue `D2-Q05`.
- **QA Decision:** `DISTINCTION_REVISION_REQUIRED` (Correct cold site infrastructure definition in comparison text).

### D2-CD07: Security Awareness vs Security Culture vs Leadership
- **English Boundary:**
  - *Security Awareness*: The cognitive understanding of policies, threats, and safe behaviors by individuals.
  - *Security Culture*: The shared beliefs, social norms, and habitual practices regarding security embedded throughout the organization.
  - *Security Leadership*: Executive commitment, tone at the top, resource allocation, and visible personal modeling of security policies.
- **Academic Evaluation:** Accurate. Demonstrates how leadership fuels awareness programs, which mature into a resilient organizational culture.
- **Thai Parity:** ความตระหนัก (ความรู้ความเข้าใจ) vs วัฒนธรรม (ค่านิยมและพฤติกรรมประจำวัน) vs ภาวะผู้นำ (การสนับสนุนงบประมาณและทำตัวเป็นแบบอย่าง).
- **Canonical IDs:** `KNOW-D2-029`, `KNOW-D2-030`, `KNOW-D2-031`.
- **QA Decision:** `DISTINCTION_PASS`

### D2-CD08: Phishing vs Spear Phishing vs Whaling
- **English Boundary:**
  - *Phishing*: Untargeted, broadcast deceptive communications distributed to large numbers of recipients.
  - *Spear Phishing*: Targeted, customized social engineering messages addressed to specific individuals, departments, or organizations, leveraging researched context.
  - *Whaling*: A specialized subcategory of spear phishing directed exclusively against high-profile, high-value individuals (CEOs, CFOs, Board Members).
- **Academic Evaluation:** Highly accurate hierarchy: Phishing is the parent category; Spear Phishing is targeted; Whaling is executive-targeted.
- **Thai Parity:** ฟิชชิง (หว่านกระจายวงกว้าง) vs Spear Phishing (เจาะจงบุคคลหรือกลุ่ม) vs Whaling (มุ่งเป้าผู้บริหารระดับสูง).
- **Canonical IDs:** `KNOW-D2-033`, `KNOW-D2-034`, `KNOW-D2-035`.
- **QA Decision:** `DISTINCTION_PASS`

### D2-CD09: Vishing / Smishing vs Pretexting
- **English Boundary:**
  - *Vishing (Voice) & Smishing (SMS)* define the **communication transmission channels** used to deliver social engineering attacks.
  - *Pretexting* defines the **deceptive scenario, invented persona, or narrative mechanism** (e.g., impersonating an IT technician conducting an audit) used to convince the victim to comply.
- **Academic Evaluation:** Accurate. Prevents candidates from treating pretexting and vishing as mutually exclusive options when a phone scam employs a fabricated pretext.
- **Thai Parity:** Vishing/Smishing (ช่องทางการสื่อสาร: เสียง / SMS) vs Pretexting (กลไกการสร้างเรื่องอ้างหรือสถานการณ์หลอกลวง).
- **Canonical IDs:** `KNOW-D2-036`, `KNOW-D2-037`, `KNOW-D2-038`.
- **QA Decision:** `DISTINCTION_PASS`

### D2-CD10: KPI vs KRI
- **English Boundary:**
  - *Key Performance Indicators (KPIs)* measure historical operational performance and progress toward desired business/security goals (e.g., percentage of systems patched within SLA).
  - *Key Risk Indicators (KRIs)* are forward-looking or operational warning signals indicating an increase in risk exposure or likelihood of failure (e.g., increase in unpatched critical vulnerabilities, privileged accounts without MFA).
- **Academic Evaluation:** Conceptual boundary is accurate. However, requires revision to note the contextual ambiguity of "increased phishing reports" (which can be a healthy awareness indicator or an increased attack indicator).
- **Thai Parity:** KPI (วัดผลการดำเนินงาน / ความก้าวหน้า) vs KRI (สัญญาณเตือนระดับความเสี่ยงที่เพิ่มขึ้น).
- **Canonical IDs:** `KNOW-D2-049`, `KNOW-D2-050`. Linked to issue `D2-Q07`.
- **QA Decision:** `DISTINCTION_REVISION_REQUIRED` (Add dual-interpretation caveat).

### D2-CD11: Dashboard vs Scorecard vs Report
- **English Boundary:**
  - *Security Dashboard*: Real-time or near-real-time graphical interface designed for dynamic visualization of current operational metrics, alerts, and system health.
  - *Security Scorecard*: Structured comparison comparing actual measured values against predetermined targets and thresholds, highlighting compliance status and accountability.
  - *Cybersecurity Report*: Formal, documented publication communicating comprehensive findings, risk trends, control evaluations, and strategic recommendations to leadership.
- **Academic Evaluation:** Accurate. Explains that these are complementary presentation formats with overlapping data elements, rather than mutually exclusive software packages.
- **Thai Parity:** แดชบอร์ด (การแสดงผลภาพแบบเรียลไทม์) vs สกอร์การ์ด (ตารางเทียบค่าจริงกับเป้าหมาย) vs รายงาน (เอกสารทางการสื่อสารรายละเอียด).
- **Canonical IDs:** `KNOW-D2-051`, `KNOW-D2-052`, `KNOW-D2-053`.
- **QA Decision:** `DISTINCTION_PASS`

### D2-CD12: MTTD vs MTTR
- **English Boundary:**
  - *Mean Time to Detect (MTTD)*: Average elapsed time from initial intrusion/compromise initiation to detection by monitoring systems or staff.
  - *Mean Time to Respond (MTTR)*: Course defines this as Mean Time to Respond (time from detection to response action). Industry literature also defines MTTR as Mean Time to Repair, Recover, or Remediate.
- **Academic Evaluation:** Requires revision. Event boundaries must be defined to distinguish detection from response milestones, and the multiple industry meanings of MTTR must be acknowledged.
- **Thai Parity:** MTTD (เวลาเฉลี่ยในการตรวจพบเหตุ) vs MTTR (เวลาเฉลี่ยในการตอบสนองตามบทเรียน / ต้องระบุจุดเริ่มและสิ้นสุด).
- **Canonical IDs:** `KNOW-D2-044`, `KNOW-D2-045`. Linked to issue `D2-Q07`.
- **QA Decision:** `DISTINCTION_REVISION_REQUIRED` (Document boundary milestones and acronym variants).

### D2-CD13: Training Completion vs Security Effectiveness
- **English Boundary:**
  - *Training Completion Percentage* is an operational implementation/compliance metric measuring how many employees finished a required curriculum.
  - *Security Effectiveness* is an outcome-oriented metric measuring whether employee behavior actually changed (e.g., reduced click-through rate on simulated phishing, increased reporting speed).
- **Academic Evaluation:** Highly valuable ISC2 concept (NIST SP 800-55 Vol. 1). A 100% completion rate does not guarantee that the organization is safe from social engineering.
- **Thai Parity:** การเรียนครบ (วัดการเข้าร่วมตามเกณฑ์) vs ประสิทธิผล (วัดพฤติกรรมจริงและความเสี่ยงที่ลดลง).
- **Canonical IDs:** `KNOW-D2-042`, `KNOW-D2-048`.
- **QA Decision:** `DISTINCTION_PASS`

### D2-CD14: Count vs Percentage vs Percentage-Point Difference
- **English Boundary:**
  - *Count*: Absolute whole number of discrete occurrences (e.g., 12 unpatched vulnerabilities).
  - *Percentage*: Ratio of part to whole scaled to 100 (e.g., 91% patch compliance).
  - *Percentage-Point Difference*: Arithmetic subtraction between two percentage values (e.g., Target 95% minus Actual 91% = a 4 percentage-point deficit, NOT a 4% relative change).
- **Academic Evaluation:** Essential mathematical clarity. Resolves errors in distractor reasoning. Linked to unresolved issue `D2-Q03` (scorecard vulnerability row unit ambiguity).
- **Thai Parity:** จำนวน (ค่าสัมบูรณ์) vs ร้อยละ (สัดส่วนเทียบร้อย) vs ผลต่างจุดร้อยละ (ผลลบของค่าร้อยละ).
- **Canonical IDs:** `KNOW-D2-047`, `KNOW-D2-048`, `KNOW-D2-054`. Linked to issue `D2-Q03`.
- **QA Decision:** `DISTINCTION_REVISION_REQUIRED` (Reiterate that scorecard row with unit ambiguity cannot be used for calculations).

---

## 3. Distinctions Decisions Summary

- **Total Distinctions Evaluated**: 14
- **`DISTINCTION_PASS`**: 9 (64.3%) — (`D2-CD01`, `D2-CD02`, `D2-CD04`, `D2-CD05`, `D2-CD07`, `D2-CD08`, `D2-CD09`, `D2-CD11`, `D2-CD13`)
- **`DISTINCTION_REVISION_REQUIRED`**: 5 (35.7%) — (`D2-CD03`, `D2-CD06`, `D2-CD10`, `D2-CD12`, `D2-CD14`)
- **`DISTINCTION_BLOCKED`**: 0
