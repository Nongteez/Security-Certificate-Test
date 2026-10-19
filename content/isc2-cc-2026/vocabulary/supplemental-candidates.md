# ISC2 CC 2026 — Supplemental Vocabulary Candidates (Domain 1)

> **Status:** Candidate / Supplementary Inventory  
> **Segregation Rule:** These terms are essential for comprehensive ISC2 CC exam readiness, but are segregated here because they were not explicitly taught or fully detailed in the primary lecture/slides.  
> **Source Rule:** Do not mix supplemental terms into source-supported lecture glossaries without explicit verification.  

---

## 1. Overview & Provenance

During the Phase 2 source quality audit and Phase 3 curation planning, several important cybersecurity concepts were identified as **Coverage Gaps** or **Supplemental Candidates**:
- They appear in official ISC2 Certified in Cybersecurity (CC) exam outline domains.
- They are standard terminology in ISO/IEC 27000, NIST SP 800-30, and general cybersecurity curricula.
- However, they were either mentioned only in passing or not explicitly taught in the primary video lecture / slide deck (S01–S60).

To maintain absolute academic integrity, these terms are cataloged here with their formal external definitions, exam relevance, and staging status.

---

## 2. Supplemental Vocabulary Candidates

### 1. Non-Repudiation (การไม่สามารถปฏิเสธความรับผิดได้)
- **Objective:** 1.1 (Cybersecurity Concepts)
- **Category:** `core_term`
- **Definition (EN):** The assurance that the sender of data or the perpetrator of an action cannot subsequently deny having sent the message or performed the action, substantiated by proof such as digital signatures or cryptographic audit trails.
- **Thai Explanation:** การรับประกันว่าบุคคลผู้ส่งข้อมูลหรือผู้กระทำการใดๆ ในระบบ ไม่สามารถปฏิเสธในภายหลังได้ว่าตนเองไม่ได้เป็นผู้ส่งหรือกระทำการนั้น เนื่องจากมีหลักฐานผูกมัดทางดิจิทัลที่ไม่สามารถหักล้างได้ เช่น ลายมือชื่อดิจิทัล
- **Why It Is Supplemental:** The lecture curriculum plan targeted Non-repudiation, but the instructor transcript only covered Confidentiality, Integrity, and Availability, leaving Non-repudiation as an unaddressed topic in primary slides.
- **Exam Relevance:** High. Often presented as the 4th major security concept alongside CIA. Digital signatures provide both Integrity and Non-repudiation.
- **External Reference:** NIST SP 800-53 Rev. 5 / ISO/IEC 27000.

---

### 2. Risk Appetite (ระดับความเสี่ยงที่องค์กรเปิดรับได้)
- **Objective:** 1.2 (Risk Management Concepts)
- **Category:** `core_term`
- **Definition (EN):** The broad, high-level amount and type of risk that an enterprise is willing to accept in pursuit of its strategic business objectives and investment returns.
- **Thai Explanation:** ปริมาณและระดับความเสี่ยงในภาพรวมระดับสูงที่คณะกรรมการและผู้บริหารระดับสูงขององค์กรยินยอมที่จะเปิดรับ เพื่อให้บรรลุเป้าหมายทางยุทธศาสตร์และการเติบโตทางธุรกิจ
- **Why It Is Supplemental:** The lecture covered *Risk Tolerance* (S26), but did not formally define the broader strategic concept of *Risk Appetite* or compare appetite vs tolerance.
- **Exam Relevance:** Moderate-High. Risk Appetite is set at the Board level; Risk Tolerance is the specific variance permitted at the operational project level.
- **External Reference:** NIST SP 800-39 / ISO 31000.

---

### 3. Inherent Risk (ความเสี่ยงที่มีอยู่แต่เดิม)
- **Objective:** 1.2 (Risk Management Concepts)
- **Category:** `core_term`
- **Definition (EN):** The baseline raw level of risk that exists in an organization, system, or process before any security controls or countermeasures have been implemented.
- **Thai Explanation:** ระดับความเสี่ยงตามธรรมชาติที่มีอยู่แต่เดิมในระบบหรือกระบวนการ โดยที่ยังไม่ได้ติดตั้งมาตรการควบคุมความปลอดภัยหรือการป้องกันใดๆ
- **Why It Is Supplemental:** Primary lectures focused directly on risk assessment calculations (SLE/ALE) and treatments without explicitly contrasting inherent risk against residual risk.
- **Exam Relevance:** High. Tested in scenarios evaluating the effectiveness of controls: $\text{Residual Risk} = \text{Inherent Risk} - \text{Impact of Controls}$.
- **External Reference:** NIST SP 800-30 Rev. 1.

---

### 4. Residual Risk (ความเสี่ยงที่ยังคงเหลืออยู่)
- **Objective:** 1.2 (Risk Management Concepts)
- **Category:** `core_term`
- **Definition (EN):** The remaining level of risk that persists after all appropriate security controls, safeguards, and countermeasures have been implemented.
- **Thai Explanation:** ระดับความเสี่ยงที่ยังคงหลงเหลืออยู่หลังจากที่องค์กรได้ติดตั้งมาตรการควบคุมความปลอดภัยและการบรรเทาความเสี่ยงไปแล้ว
- **Why It Is Supplemental:** Mentioned in general curriculum requirements but not formally defined with standalone slide coverage in the raw lecture materials.
- **Exam Relevance:** Critical. Management must decide whether to *Accept* residual risk or apply further compensating controls. No system has zero residual risk.
- **External Reference:** NIST SP 800-30 Rev. 1.

---

### 5. Least Privilege (หลักการกำหนดสิทธิ์เท่าที่จำเป็น)
- **Objective:** 1.1 / 1.4 (Cybersecurity Controls)
- **Category:** `core_term`
- **Definition (EN):** The security principle that users, programs, and processes should be granted only the minimum necessary permissions, rights, and access required to perform their authorized job functions, and nothing more.
- **Thai Explanation:** หลักการความปลอดภัยพื้นฐานที่กำหนดให้ผู้ใช้และโปรแกรมได้รับสิทธิ์ในการเข้าถึงทรัพยากรเท่าที่จำเป็นอย่างยิ่งยวดต่อการปฏิบัติหน้าที่ให้สำเร็จเท่านั้น เพื่อจำกัดความเสียหายหากบัญชีถูกเจาะ
- **Why It Is Supplemental:** Taught extensively in Domain 4 (Network Security) and Domain 5 (Security Operations), but conceptually anchored in Domain 1 (Security Principles / Authorization).
- **Exam Relevance:** Extremely High. One of the most frequently tested concepts across all ISC2 examinations.
- **External Reference:** ISC2 CC Exam Outline / NIST SP 800-53.

---

### 6. Separation of Duties (SoD) (การแบ่งแยกหน้าที่ความรับผิดชอบ)
- **Objective:** 1.4 / 1.5 (Professional Conduct & Controls)
- **Category:** `core_term`
- **Definition (EN):** An administrative control that divides critical, high-risk operational tasks among multiple individuals so that no single person possesses end-to-end authority to execute and conceal fraud or unauthorized actions.
- **Thai Explanation:** มาตรการควบคุมทางการบริหารที่แบ่งขั้นตอนการปฏิบัติงานที่มีความสำคัญหรือเสี่ยงสูงออกเป็นส่วนๆ และมอบหมายให้บุคคลตั้งแต่สองคนขึ้นไปทำร่วมกัน เพื่อป้องกันการทุจริตหรือความผิดพลาด
- **Why It Is Supplemental:** Listed in slide S54 as an example of a control, but was not given a formal conceptual definition in the primary lecture.
- **Exam Relevance:** High. Essential administrative control preventing insider fraud, collusion, and unauthorized system modifications.
- **External Reference:** ISO/IEC 27002 / NIST SP 800-53.

---

### 7. Data Owner vs. Data Custodian (ผู้เป็นเจ้าของข้อมูล เทียบกับ ผู้ดูแลรักษาข้อมูล)
- **Objective:** 1.1 (Security Concepts & Governance)
- **Category:** `confusing_term`
- **Definition (EN):** The *Data Owner* is the executive/manager accountable for determining data classification and access rights; the *Data Custodian* is the technical specialist (e.g. database administrator) responsible for safe storage, daily backups, and technical maintenance.
- **Thai Explanation:** ผู้เป็นเจ้าของข้อมูล (Data Owner) คือผู้บริหารที่มีอำนาจตัดสินใจว่าข้อมูลนั้นสำคัญระดับใดและใครเข้าถึงได้ ส่วนผู้ดูแลรักษาข้อมูล (Data Custodian) คือผู้เชี่ยวชาญทางเทคนิคที่ทำหน้าที่จัดเก็บ สำรองข้อมูล และดูแลระบบให้เป็นไปตามคำสั่งของเจ้าของข้อมูล
- **Why It Is Supplemental:** The lecture defined Data Controller and Processor (privacy roles), but internal corporate data ownership roles (Owner vs Custodian) were not distinguished on slides.
- **Exam Relevance:** High. Candidates frequently confuse who is accountable for data classification (Owner) versus who actually performs nightly backups (Custodian).
- **External Reference:** ISC2 Official CC Study Guide.

---

### 8. Business Continuity Plan (BCP) vs. Disaster Recovery Plan (DRP)
- **Objective:** 1.1 / 1.2 (Availability & Risk Response)
- **Category:** `core_term`
- **Definition (EN):** A *Business Continuity Plan (BCP)* focuses on sustaining and continuing essential business operations during and immediately after a disruption; a *Disaster Recovery Plan (DRP)* focuses on restoring the technical IT infrastructure and data after a catastrophe.
- **Thai Explanation:** BCP มุ่งเน้นการดำเนินธุรกิจอย่างต่อเนื่องขององค์กรในภาพรวมระหว่างเกิดวิกฤต ส่วน DRP มุ่งเน้นการกู้คืนระบบคอมพิวเตอร์ เซิร์ฟเวอร์ และข้อมูลทางไอทีให้กลับมาใช้งานได้
- **Why It Is Supplemental:** Mentioned in slide S11 (Availability disaster recovery sites) but full lifecycle planning is formally situated across Domain 1 and Domain 5.
- **Exam Relevance:** High. BCP is business-focused; DRP is technical IT/data-focused.
- **External Reference:** NIST SP 800-34 Rev. 1.

---

### 9. Artificial Intelligence Security Risks (ความมั่นคงปลอดภัยของระบบปัญญาประดิษฐ์)
- **Objective:** Domain 1 (2026 Outline Revision Integration)
- **Category:** `core_term`
- **Definition (EN):** The discipline and practices addressing cybersecurity vulnerabilities and threats specific to artificial intelligence and machine learning models, including prompt injection, model poisoning, training data theft, and unauthorized autonomous actions.
- **Thai Explanation:** ศาสตร์และแนวปฏิบัติด้านความปลอดภัยที่มุ่งเน้นการจัดการภัยคุกคามและช่องโหว่เฉพาะตัวของระบบ AI/ML เช่น การโจมตีด้วยคำสั่งลวง (Prompt Injection) หรือการวางยาข้อมูลฝึกสอน (Data Poisoning)
- **Why It Is Supplemental:** The 2026 ISC2 CC Outline officially introduces foundational AI security concepts across all five domains; however, the historical primary lecture recording pre-dated dedicated AI security modules.
- **Exam Relevance:** Crucial for 2026 version candidates.
- **External Reference:** 2026 ISC2 CC Exam Outline Revision / NIST AI Risk Management Framework (AI RMF).

---

## 3. Recommended Action for Future Phases

1. Keep these supplemental candidates clearly labeled in this standalone document.
2. When expanding the vocabulary JSON database for full curriculum coverage in Phase 2/3, integrate these items under the `"source_status": "supplemental"` flag.
3. Include these terms in flashcards and quizzes, explicitly noting their source provenance.
