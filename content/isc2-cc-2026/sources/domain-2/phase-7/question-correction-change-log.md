# ISC2 CC 2026 Domain 2: Security Governance
## Phase 7: Question-Level Correction Change Log

**Document Date:** 2026-10-23
**Execution Phase:** Phase 7 — Question Correction & Revalidation
**Baseline Authority:** Phase 6 Adversarial QA Reports & Correction Action Register
**Auditor:** Adversarial Question Academic QA Subagent

---

### 1. Phase 6 QA Verdict Reconciliation Statement

#### The Discrepancy Investigated:
During the initial review of Phase 6 reports, the Executive Summary in \x60phase-6-summary.md\x60 reported `18 QA_PASS` and `8 QA_REVISION_REQUIRED`, whereas the master table and detailed question dossiers in \x60question-academic-qa.md\x60 showed `17 QA_PASS` and `9 QA_REVISION_REQUIRED`.

#### Root-Cause Analysis:
A granular code audit of the Phase 6 generation script revealed that the evaluation array populated in \x60build_question_academic_qa.mjs\x60 initially contained 8 revision items. Subsequently, `DRAFT-D2-026` was audited and identified as requiring distractor length elaboration (to match the visual density of Option A in Thai). When `DRAFT-D2-026` was updated to `QA_REVISION_REQUIRED`, the evaluation array, the master audit table, the detailed dossiers, and \x60correction-action-register.md\x60 were correctly updated to 9 revision items. However, the static executive summary text in \x60phase-6-summary.md\x60 and \x60question-academic-qa.md\x60 retained the un-updated draft text ("18 PASS / 8 REVISION").

#### Authoritative Reconciled Baseline:
- **Total Questions Audited:** 26
- **Authoritative `QA_PASS` Items (17):** `DRAFT-D2-001, 003, 005, 006, 007, 008, 009, 010, 013, 014, 015, 016, 018, 019, 020, 021, 025`
- **Authoritative `QA_REVISION_REQUIRED` Items (9):** `DRAFT-D2-002, 004, 011, 012, 017, 022, 023, 024, 026`
- **Authoritative `QA_BLOCKED` Items:** 0

All 9 revision items were itemized in \x60correction-action-register.md\x60 and have been addressed in Phase 7.

---

### 2. Itemized Question Correction Change Log

#### 1. DRAFT-D2-002 (Objective 2.1 — Board Governance)
- **Defect Identified:** Distractors B, C, and D were all technical firewall/network tasks, lacking functional diversity.
- **Before:** Option D was *"Conducting continuous packet inspection across all corporate local area network (LAN) switches"*.
- **After (Corrected):**
  - **EN Option:** *"Conducting annual formal performance appraisals and salary reviews for all department managers"*
  - **TH Option:** *"การจัดทำการประเมินผลการปฏิบัติงานประจำปีและการพิจารณาปรับเงินเดือนสำหรับผู้จัดการแผนกทุกคน"*
- **Explanation Update:** Updated Distractor D rationale in English and Thai explaining that routine employee performance reviews and salary management are operational HR functions, not strategic Board governance oversight.
- **Answer Key Rebalanced:** Moved from Option A to **Option B (Index 1)**.

#### 2. DRAFT-D2-004 (Objective 2.1 — ISMS Certifiable Standards)
- **Defect Identified:** Stem stated *"is the ONLY option that satisfies this requirement"*, which was leading. Distractor D (PCI DSS) is technically certifiable for card processing, creating minor student debate.
- **Before Stem:** *"An enterprise seeks to adopt an established cybersecurity framework to structure its program. The Chief Information Security Officer (CISO) requires a framework that provides an internationally accredited, third-party certifiable Information Security Management System (ISMS). Which of the following frameworks is the ONLY option that satisfies this requirement?"*
- **After Stem (Corrected):**
  - **EN Stem:** *"An enterprise seeks to adopt an established cybersecurity framework to structure its program. The Chief Information Security Officer (CISO) requires a framework that provides an internationally accredited, third-party certifiable Information Security Management System (ISMS) standard. Which of the following frameworks BEST satisfies this requirement?"*
  - **TH Stem:** *"องค์กรแห่งหนึ่งต้องการนำกรอบการทำงานด้านความมั่นคงปลอดภัยไซเบอร์ที่เป็นที่ยอมรับมาใช้เพื่อจัดโครงสร้างโปรแกรมของตน CISO ต้องการกรอบการทำงานที่มอบมาตรฐานระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) ที่ได้รับการรับรองในระดับสากลและสามารถตรวจรับรองโดยหน่วยงานภายนอกได้ กรอบการทำงานใดต่อไปนี้ตอบโจทย์ความต้องการนี้ได้เหมาะสมที่สุด (BEST)?"*
- **Explanation Update:** Clarified Distractor D detail to explain that PCI DSS is a specialized payment card industry compliance standard, not an accredited comprehensive enterprise ISMS certification scheme.
- **Answer Key Position:** Retained at **Option A (Index 0)**.

#### 3. DRAFT-D2-011 (Objective 2.2 — Offsite Backups & Shared Fault Domains)
- **Defect Identified:** Distractor D (*"Failing to encrypt backup data blocks prior to transmitting them across the local area network"*) was a confidentiality control irrelevant to physical water pipe flooding.
- **Before:** Option D was *"Failing to encrypt the backup data blocks prior to transmitting them across the local area network"*.
- **After (Corrected):**
  - **EN Option:** *"Relying exclusively on daily differential backups rather than maintaining independent full backup baselines"*
  - **TH Option:** *"การพึ่งพาการสำรองข้อมูลแบบผลต่างรายวัน (Differential backup) เพียงอย่างเดียว โดยไม่มีการจัดทำชุดข้อมูลสำรองแบบเต็มชุดที่เป็นอิสระ"*
- **Explanation Update:** Updated Distractor D detail explaining that backup type selection (full vs differential) determines data restoration speed, but does not solve physical destruction when primary and backup storage share the same flooded room.
- **Answer Key Rebalanced:** Moved from Option A to **Option D (Index 3)**.

#### 4. DRAFT-D2-012 (Objective 2.2 — Cold Site Infrastructure Trade-offs)
- **Defect Identified:** Thai Option A was 56 characters due to an embedded definition in parentheses, creating length cueing against English (9 chars).
- **Before:** Option A in Thai was *"ศูนย์สำรองแบบไม่มีอุปกรณ์คอมพิวเตอร์พร้อมใช้ (Cold site)"*.
- **After (Corrected):** Standardized all four Thai options to concise, uniform labels:
  - **(A)** *"ศูนย์สำรองแบบ Cold site"*
  - **(B)** *"ศูนย์สำรองแบบ Hot site"*
  - **(C)** *"ศูนย์สำรองแบบ Warm site"*
  - **(D)** *"ศูนย์สำรองแบบ Mobile site"*
- **Answer Key Rebalanced:** Moved from Option A to **Option C (Index 2)**.

#### 5. DRAFT-D2-017 (Objective 2.3 — Vishing & Pretexting)
- **Defect Identified:** Distractor D combined shoulder surfing with physical piggybacking, which was disparate from an office desk phone call.
- **Before:** Option D was *"Shoulder surfing using a physical piggybacking mechanism"*.
- **After (Corrected):**
  - **EN Option:** *"Baiting attack using a malicious USB media delivery pretext"*
  - **TH Option:** *"การโจมตีแบบล่อลวง (Baiting) โดยใช้เรื่องแต่งการส่งมอบสื่อบันทึกข้อมูล USB ที่ฝังมัลแวร์"*
- **Explanation Update:** Updated Distractor D detail explaining that Baiting exploits physical media drops (e.g. infected USB flash drives), which does not describe telephone voice communication.
- **Answer Key Rebalanced:** Moved from Option A to **Option B (Index 1)**.

#### 6. DRAFT-D2-022 (Objective 2.4 — MTTR Containment Milestone)
- **Defect Identified:** Option length asymmetry in Thai (Option A 157 chars vs Option D 97 chars).
- **Before:** Option A was verbose; Option D was terse (*"The official release of an audited software security update by the third-party operating system vendor"*).
- **After (Corrected):**
  - **Option A (Tightened):**
    - **EN:** *"The execution of active containment actions, such as isolating the affected host or terminating malicious processes"*
    - **TH:** *"การลงมือกักกันความเสียหาย (Active containment) เช่น การสั่งตัดการเชื่อมต่อเครือข่ายของเครื่อง หรือการสั่งยุติโพรเซสอันตราย"*
  - **Option D (Expanded):**
    - **EN:** *"The official publication of an audited software security update by the operating system vendor following its scheduled release cycle"*
    - **TH:** *"การเผยแพร่ตัวอัปเดตความปลอดภัยของซอฟต์แวร์อย่างเป็นทางการโดยบริษัทผู้พัฒนาระบบปฏิบัติการตามรอบเวลาที่กำหนด"*
- **Answer Key Position:** Retained at **Option A (Index 0)**.

#### 7. DRAFT-D2-023 (Objective 2.4 — Patch Velocity vs Endpoint Compliance)
- **Defect Identified:** Distractors B and C were simplistic (*"measures threat actor capabilities"*, *"evaluates physical datacenter controls"*). Thai Option A was verbose (237 chars).
- **After (Corrected):**
  - **Option A (Tightened TH):** *"ตัวชี้วัด X เป็นตัวชี้วัดความสอดคล้องตามเกณฑ์ที่เน้นอุปกรณ์ (Asset-centric) เพื่อตรวจสถานะเครื่องปลายทาง ขณะที่ตัวชี้วัด Y เป็นตัวชี้วัดความเร็วที่เน้นช่องโหว่ (Vulnerability-centric) เพื่อวัดความเร็วในการแก้ไขตาม SLA"*
  - **Option B (Upgraded):**
    - **EN:** *"Metric X measures zero-day exploit weaponization, while Metric Y measures static code analysis findings"*
    - **TH:** *"ตัวชี้วัด X ประเมินการติดอาวุธของช่องโหว่ซีโร่เดย์ ขณะที่ตัวชี้วัด Y ประเมินผลการตรวจวิเคราะห์โค้ดแบบสถิต"*
  - **Option C (Upgraded):**
    - **EN:** *"Metric X evaluates boundary network segmentation, while Metric Y evaluates runtime container security"*
    - **TH:** *"ตัวชี้วัด X ประเมินการแบ่งส่วนเครือข่ายขอบเขต ขณะที่ตัวชี้วัด Y ประเมินความมั่นคงปลอดภัยของคอนเทนเนอร์ขณะทำงาน"*
- **Explanation Update:** Updated Distractor B and C details in English and Thai explaining zero-day weaponization, static analysis, and network segmentation.
- **Answer Key Rebalanced:** Moved from Option A to **Option D (Index 3)**.

#### 8. DRAFT-D2-024 (Objective 2.4 — Training Implementation vs Outcome)
- **Defect Identified:** Distractor B (*"LMS falsified employee completion records"*) was hyperbolic. Option A was noticeably longer than Option C.
- **After (Corrected):**
  - **Option A (Tightened):**
    - **EN:** *"Training completion measures administrative program participation, which does not guarantee behavioral competence or operational resilience against social engineering"*
    - **TH:** *"การผ่านการอบรมวัดเพียงการเข้าร่วมตามระเบียบ แต่ไม่ได้รับประกันความสามารถทางพฤติกรรมหรือภูมิคุ้มกันในการป้องกันการโจมตีทางสังคม"*
  - **Option B (Upgraded):**
    - **EN:** *"The simulated phishing assessment results were technically invalid because the test was administered within thirty days of training completion"*
    - **TH:** *"ผลการทดสอบฟิชชิงจำลองไม่ถูกต้องตามหลักการ เนื่องจากเป็นการทดสอบที่จัดขึ้นภายในสามสิบวันหลังจากที่พนักงานเพิ่งผ่านการอบรม"*
- **Explanation Update:** Updated Distractor B detail explaining that conducting simulations shortly after training evaluates retention and instinctive vigilance rather than invalidating test results.
- **Answer Key Rebalanced:** Moved from Option A to **Option C (Index 2)**.

#### 9. DRAFT-D2-026 (Objective 2.4 — Executive Security Reporting)
- **Defect Identified:** Distractor D was shorter than Option A in Thai (118 chars vs 196 chars).
- **After (Corrected):**
  - **Option D (Expanded):**
    - **EN:** *"An automated instant messaging alerting channel that sends real-time push notifications to board members whenever an individual employee endpoint triggers an antivirus detection"*
    - **TH:** *"ช่องทางการแจ้งเตือนผ่านแอปแช็ตอัตโนมัติที่จะส่งข้อความแจ้งเตือนบอร์ดบริหารแบบเรียลไทม์ทุกครั้งที่มีคอมพิวเตอร์ของพนักงานเกิดสัญญาณเตือนจากโปรแกรมแอนติไวรัส"*
- **Answer Key Position:** Retained at **Option A (Index 0)**.

---

### 3. Change Verification Summary

All 9 content revisions have been verified for:
1. Preservation of exactly one defensible best answer.
2. 100% English–Thai semantic parity.
3. Synchronized updates to `explanation`, `explanation_th`, and `explanation_detail`.
4. Zero contamination from quarantined knowledge records (`KNOW-D2-028`, `KNOW-D2-054`).
