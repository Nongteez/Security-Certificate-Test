---
id: d2-phase3-knowledge-academic-qa
domain_id: 2
domain_name: Security Governance
phase: 3
document_role: academic-knowledge-quality-assurance
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01 (DOMAIN 2.txt) and D2-S01..D2-S38; audit-local IDs from Phase 1 inventory"
total_entries_reviewed: 54
qa_pass_count: 43
qa_revision_required_count: 9
qa_blocked_count: 2
---

# Domain 2 — Canonical Knowledge Academic QA Report

## 1. Executive Summary & Review Scope

This report records the individual academic and technical verification of all **54 draft Canonical Knowledge Entries** (`KNOW-D2-001` through `KNOW-D2-054`) established during Phase 2 curation for **ISC2 Certified in Cybersecurity (CC) — Updated 2026 Exam Outline, Domain 2: Security Governance (17.3%)**.

In Phase 2, entries were marked as `ACCEPTED` or `NEEDS_REVIEW` strictly as internal curation draft states. In Phase 3, every entry is subjected to rigorous academic quality assurance against:
1. The **official ISC2 CC 2026 Exam Outline** (effective September 1, 2026).
2. Authoritative technical standards and federal guidelines, including **NIST SP 800-34 Rev. 1** (Contingency Planning), **NIST SP 800-30 Rev. 1 / CSRC Terminology** (Risk Assessment), **NIST SP 800-55 Vol. 1** (Performance Measurement), **NIST SP 800-63B** (Digital Identity & Authenticator Management), **ISO/IEC 27001:2022**, **ISACA COBIT**, **HHS HIPAA Security Rule** (45 CFR Part 160 / 164), and **EU GDPR** (Regulation 2016/679).
3. Primary source evidence from the intake batch (`ISC2 Update 2026/Domain 2/`): transcript `DOMAIN 2.txt` (115 physical lines / 58 nonblank paragraphs) and 37 relevant course slide captures (`Screenshot 2026-09-20 175516.png` to `... 223751.png`, aliased `S01`–`S38`, with `S20` confirmed excluded).
4. English technical precision, Thai translation fidelity, and semantic equivalence.

### Academic Decision Definitions:
- **`QA_PASS`**: The entry is technically accurate, supported by primary course evidence and external authoritative literature, correctly bounded, aligned with the 2026 exam outline, and possesses valid bilingual parity. It is approved to serve as a foundation for Question Opportunity Planning.
- **`QA_REVISION_REQUIRED`**: The core concept is valid and relevant, but specific definitions, assumptions, illustrative bounds, or translations require editorial correction before use in question design (e.g., correcting transcript caption corruptions, removing absolute guarantees, refining metric boundaries, or correcting ordinal risk scale taxonomy).
- **`QA_BLOCKED`**: The entry contains irreconcilable source contradictions, severe legal/statutory misstatements, or disputed metrics that would result in academically invalid exam questions. Question generation on blocked scopes is strictly prohibited until external authoritative resolution is achieved.

---

## 2. Overall Results Breakdown

| Objective ID | Objective Title | Exam Weight | Total Entries | QA_PASS | QA_REVISION_REQUIRED | QA_BLOCKED |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **2.1** | Understand the security governance process | ~4.3% | 15 | 13 | 2 | 0 |
| **2.2** | Understand business continuity (BC) and disaster recovery (DR) concepts | ~4.3% | 13 | 7 | 5 | 1 |
| **2.3** | Understand security awareness, culture, and training | ~4.3% | 13 | 13 | 0 | 0 |
| **2.4** | Understand the purpose of security measurement and reporting | ~4.4% | 13 | 10 | 2 | 1 |
| **TOTAL** | **Domain 2: Security Governance** | **17.3%** | **54** | **43** | **9** | **2** |

---

## 3. Detailed Record-by-Record QA Evaluations

### Objective 2.1: Understand the Security Governance Process (Entries 001–015)

#### KNOW-D2-001: Integrated GRC and business alignment
- **Titles:** Integrated GRC and business alignment / GRC แบบบูรณาการและความสอดคล้องกับธุรกิจ
- **Objective Mapping:** 2.1 (Scope: Governance, Risk, Compliance alignment with enterprise objectives).
- **Technical Evaluation:** Technically sound. Correctly positions GRC as a holistic coordination mechanism rather than three disjointed silos. Alignment with business objectives directly reflects modern governance principles (e.g., NIST CSF 2.0 GV function; COBIT 2019).
- **Bilingual & Semantic Parity:** English explanation and Thai translation are semantically equivalent. Thai clearly conveys integration ("GRC เชื่อมการกำกับดูแล การบริหารความเสี่ยง และการปฏิบัติตามข้อกำหนด") without distorting scope.
- **Source Evidence:** [T:L7-L13], [S01], [S02].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning. Bounded rule: GRC integrates functions, but governance, risk, and compliance remain distinct operational disciplines.

#### KNOW-D2-002: Governance direction and accountability
- **Titles:** Governance direction and accountability / ทิศทางและความรับผิดชอบในการกำกับดูแล
- **Objective Mapping:** 2.1 (Scope: Governance direction, oversight, decision-making accountability).
- **Technical Evaluation:** Accurate. Governance establishes who makes decisions, sets policy direction, and assigns accountability. Distinguishes high-level oversight from technical control implementation.
- **Bilingual & Semantic Parity:** High fidelity. Thai terms (ทิศทาง, กำกับติดตาม, ความรับผิดชอบ) correctly reflect direction, oversight, and accountability.
- **Source Evidence:** [T:L11-L13], [S02].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-003: Risk management within GRC
- **Titles:** Risk management within GRC / บทบาทการบริหารความเสี่ยงใน GRC
- **Objective Mapping:** 2.1 (Scope: Identifying, assessing, and prioritizing risks to business assets).
- **Technical Evaluation:** Accurate. Positions risk management as the identification, evaluation, and treatment of risks that could impede organizational objectives. Emphasizes that compliance alone does not satisfy all risk management requirements.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L11-L17], [S02], [S06].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-004: Compliance and applicable obligations
- **Titles:** Compliance and applicable obligations / การปฏิบัติตามข้อกำหนดที่ใช้กับองค์กร
- **Objective Mapping:** 2.1 (Scope: Laws, regulations, industry standards, organizational policies, and contracts).
- **Technical Evaluation:** Accurate at the definition level. Bounded to applicable obligations depending on industry, jurisdiction, and contractual relationships. Linked to issue `D2-Q04` to ensure questions do not assert universal applicability of specific regulations.
- **Bilingual & Semantic Parity:** High fidelity. Explicitly cautions that not all regulations apply to all organizations.
- **Source Evidence:** [T:L11-L15], [S02], [S05].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning with boundary constraint: questions must specify organizational context when evaluating compliance obligations.

#### KNOW-D2-005: Purpose and organizational value of GRC
- **Titles:** Purpose and organizational value of GRC / วัตถุประสงค์และคุณค่าของ GRC
- **Objective Mapping:** 2.1 (Scope: Benefits of structured GRC—consistency, efficiency, risk awareness).
- **Technical Evaluation:** Accurate. Cites improved organizational resilience, consistent policy deployment, and elimination of duplicated audit efforts. Properly caveats that GRC is a management approach, not an absolute guarantee against security incidents.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L13-L19], [S03], [S04], [S05], [S06].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-006: NIST Cybersecurity Framework
- **Titles:** NIST Cybersecurity Framework / กรอบการทำงานความมั่นคงปลอดภัยไซเบอร์ของ NIST
- **Objective Mapping:** 2.1 (Scope: Recognized governance and risk management frameworks).
- **Technical Evaluation:** Technically sound. Correctly identifies NIST CSF as voluntary, risk-based guidance for managing cybersecurity risks. Properly separates framework guidance from software tooling. Resolves caption corruption noted in `D2-Q02`.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L19-L21], [S07]. Corroborated with NIST CSF resources.
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning. Questions must not test specific version numbers (v1.1 vs v2.0) unless explicitly defined in scenario context.

#### KNOW-D2-007: ISO/IEC 27001 requirements standard
- **Titles:** ISO/IEC 27001 requirements standard / มาตรฐานข้อกำหนด ISO/IEC 27001
- **Objective Mapping:** 2.1 (Scope: International management system standards).
- **Technical Evaluation:** Accurate. Defines ISO/IEC 27001 as a certifiable specification for establishing, implementing, maintaining, and continually improving an ISMS. Distinguishes the standard from the instantiated management system itself.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L21], [S07]. Corroborated with ISO/IEC 27001 primary standard scope.
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-008: Information Security Management System
- **Titles:** Information Security Management System / ระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ
- **Objective Mapping:** 2.1 (Scope: Enterprise-wide management framework for security).
- **Technical Evaluation:** Accurate. Conceptual definition of ISMS as an organized approach to managing sensitive company information through risk management and governance processes.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L21], [S07].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-009: COBIT
- **Titles:** COBIT / กรอบ COBIT สำหรับการกำกับดูแลและบริหารไอที
- **Objective Mapping:** 2.1 (Scope: Enterprise IT governance frameworks).
- **Technical Evaluation:** Technically sound. Correctly positions COBIT (Control Objectives for Information and Related Technologies) as an IT governance and management framework authored by ISACA. Reconciles transcript typo "coit" with slide `S07`.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L21-L23], [S07]. Corroborated with ISACA COBIT definitions.
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning. Scope is limited to high-level framework role; detailed COBIT domain objectives are out of scope.

#### KNOW-D2-010: GRC software capabilities
- **Titles:** GRC software capabilities / ความสามารถของซอฟต์แวร์ GRC
- **Objective Mapping:** 2.1 (Scope: Automation and central management of GRC data).
- **Technical Evaluation:** Accurate. Distinguishes GRC software tools (which centralize data, automate evidence collection, and track remediation) from governance policies and human decision-making. Cites replacement of disconnected spreadsheets.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L23-L25], [S08].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-011: Risk register and risk record
- **Titles:** Risk register and risk record / ทะเบียนความเสี่ยงและข้อมูลความเสี่ยงแต่ละรายการ
- **Objective Mapping:** 2.1 (Scope: Risk documentation and tracking tools).
- **Technical Evaluation:** Accurate. Details the key components of a risk record: asset, vulnerability, threat, likelihood, impact, pre-treatment rating, owner, treatment strategy, and residual risk. Uses ransomware as a concrete scenario.
- **Bilingual & Semantic Parity:** High fidelity. All risk register field names match professional Thai cybersecurity practice.
- **Source Evidence:** [T:L25-L33], [S09], [S10].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-012: Risk ownership
- **Titles:** Risk ownership / เจ้าของความเสี่ยง
- **Objective Mapping:** 2.1 (Scope: Accountability for risk evaluation, monitoring, and treatment).
- **Technical Evaluation:** Technically sound. Defines the risk owner as the individual or business leader accountable for managing a specific risk and tracking its treatment. Notes that while IT managers may own technical operational risks (like ransomware recovery), ultimate business risk ownership lies with business process owners and senior leadership.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L27-L31], [S09], [S10].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-013: Risk treatment choices
- **Titles:** Risk treatment choices / ทางเลือกในการจัดการความเสี่ยง
- **Objective Mapping:** 2.1 (Scope: Mitigate, Avoid, Transfer, Accept).
- **Technical Evaluation:** Accurate. Classifies the four canonical risk treatment options recognized by ISC2 and ISO 31000: Risk Avoidance, Risk Mitigation (Reduction), Risk Transfer (Sharing), and Risk Acceptance. Grounded in risk appetite.
- **Bilingual & Semantic Parity:** High fidelity. Thai terms (หลีกเลี่ยง, ลด/บรรเทา, ถ่ายโอน, ยอมรับ) are accurate and standardized.
- **Source Evidence:** [T:L29-L33], [S09], [S10].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-014: Residual risk and zero-risk wording
- **Titles:** Residual risk and zero-risk wording / ความเสี่ยงคงเหลือและถ้อยคำเรื่องความเสี่ยงเป็นศูนย์
- **Objective Mapping:** 2.1 (Scope: Residual risk definition vs overbroad claims of zero risk).
- **Technical Evaluation:** Flawed in source; requires revision. The definition of residual risk (risk remaining after controls are applied) is correct. However, the transcript's sweeping assertion that "risk can never be zero after any treatment" is overly absolute. While residual risk cannot be eliminated in ongoing operations, specific risks can be eliminated entirely via genuine Risk Avoidance (e.g., terminating a high-risk product line, decommissioning an insecure legacy system).
- **Academic Issue Link:** `D2-Q06`.
- **Proposed Correction:** Maintain the accurate definition of residual risk, but explicitly strike the universal claim that risk cannot be zero under complete avoidance. Distinguish organizational baseline risk from specific isolated risk scenarios.
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Must update knowledge text to bound the statement before authoring question opportunities.

#### KNOW-D2-015: Risk rating scales
- **Titles:** Risk rating scales / มาตราส่วนระดับความเสี่ยง
- **Objective Mapping:** 2.1 (Scope: Qualitative vs Quantitative vs Semi-Quantitative risk rating).
- **Technical Evaluation:** Technically flawed in source lecture. The transcript asserts that assigning numbers "1 to 4" (e.g., Low=1, Critical=4) converts an assessment into a "quantitative" risk analysis. In academic and professional cybersecurity standards (NIST SP 800-30 Rev. 1, Section 3.1; NIST CSRC Terminology), numeric ordinal scoring scales are classified as **Semi-Quantitative** or **Qualitative with numeric representations**, because the numbers represent ranked categories without cardinal mathematical units (dollars, annualized loss expectancy, or true frequency ratios).
- **Academic Issue Link:** `D2-Q06`.
- **Proposed Correction:** Explicitly classify numeric scales (1–4 or 1–5) as semi-quantitative/ordinal scales. Define true quantitative risk analysis as utilizing monetary values (ALE, SLE, ARO) or empirically measured rates.
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Must revise the entry definition to reflect NIST SP 800-30 Rev. 1 before question generation.

---

### Objective 2.2: Understand Business Continuity (BC) and Disaster Recovery (DR) Concepts (Entries 016–028)

#### KNOW-D2-016: Business Continuity
- **Titles:** Business Continuity / ความต่อเนื่องทางธุรกิจ
- **Objective Mapping:** 2.2 (Scope: Enterprise-wide capability to sustain operations during disruptions).
- **Technical Evaluation:** Accurate. Emphasizes organizational resilience across people, facilities, vendors, and business processes, rather than solely IT systems.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L35-L43], [S11], [S12], [S19].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-017: Business Continuity Plan
- **Titles:** Business Continuity Plan / แผนความต่อเนื่องทางธุรกิจ
- **Objective Mapping:** 2.2 (Scope: Documented strategies and procedures for maintaining critical business functions).
- **Technical Evaluation:** Accurate. Describes BCP as the formal document detailing communication protocols, alternate work sites, supplier redundancies, and operational workarounds.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L37-L43], [S13], [S14], [S19].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-018: Disaster Recovery
- **Titles:** Disaster Recovery / การกู้คืนระบบหลังภัยพิบัติ
- **Objective Mapping:** 2.2 (Scope: Technical restoration of IT infrastructure, systems, and data).
- **Technical Evaluation:** Accurate. Correctly scopes DR as a technical subset supporting the broader BCP framework. Focuses on restoring servers, networks, databases, and digital infrastructure.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L43-L49], [S15], [S16], [S19].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-019: Disaster Recovery Plan
- **Titles:** Disaster Recovery Plan / แผนกู้คืนระบบหลังภัยพิบัติ
- **Objective Mapping:** 2.2 (Scope: Documented technical recovery procedures, RTO/RPO targets, and site activations).
- **Technical Evaluation:** Accurate. Details technical runbooks, offsite backup restoration, recovery site cutovers, and system validation.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L53-L71], [S18], [S19].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-020: Business Impact Analysis and recovery priorities
- **Titles:** Business Impact Analysis and recovery priorities / การวิเคราะห์ผลกระทบทางธุรกิจและลำดับการกู้คืน
- **Objective Mapping:** 2.2 (Scope: Identifying critical functions and establishing recovery priorities).
- **Technical Evaluation:** Accurate. Clarifies that BIA is an analytical process that identifies critical business processes, evaluates financial and operational impacts of disruption, and drives recovery priorities (RTO/RPO) for DR and BCP planning.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L71], [S19]. Corroborated with NIST SP 800-34 Rev. 1.
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-021: Recovery Time Objective - bounded definition
- **Titles:** Recovery Time Objective - bounded definition / วัตถุประสงค์ระยะเวลากู้คืน
- **Objective Mapping:** 2.2 (Scope: Maximum acceptable system/service downtime).
- **Technical Evaluation:** Technically sound when bounded. Defines RTO as the targeted duration of time within which a business process or system must be restored after a disaster. Properly notes that the course's "1-hour ERP RTO" is an illustrative example, not an industry universal.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L53-L55], [S18], [S19].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning with boundary constraint: questions must treat RTO as a management-defined target, not an automatic guarantee.

#### KNOW-D2-022: Recovery Point Objective - bounded definition
- **Titles:** Recovery Point Objective - bounded definition / วัตถุประสงค์จุดกู้คืนข้อมูล
- **Objective Mapping:** 2.2 (Scope: Maximum acceptable data loss measured in time).
- **Technical Evaluation:** Technically sound when bounded. Accurately distinguishes RTO (time to restore service) from RPO (acceptable data loss / point-in-time state of recovered data).
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L55-L61], [S18], [S19].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning. Caution: Backup schedule frequency does not inherently prove that data is restorable; restore testing is required.

#### KNOW-D2-023: Backup strategy and geographic recovery assumptions
- **Titles:** Backup strategy and geographic recovery assumptions / กลยุทธ์สำรองข้อมูลและสมมติฐานด้านสถานที่
- **Objective Mapping:** 2.2 (Scope: Offsite and cloud storage, geographic separation, disaster risk).
- **Technical Evaluation:** Overbroad in course lecture; requires revision. The instructor claims offsite/cloud backups ensure data is "completely safe and easily restored." In academic engineering, cloud backups are subject to bandwidth constraints, latency during multi-terabyte restores, internet dependency, and credential attacks. Geographic separation is essential to survive regional disasters (earthquakes, flooding), but does not guarantee instantaneous recovery.
- **Academic Issue Link:** `D2-Q05`.
- **Proposed Correction:** Reframe offsite/cloud storage as risk mitigation against localized physical destruction, while explicitly removing claims of absolute safety or effortless recovery. Emphasize restore testing.
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Must revise text to remove absolute recovery guarantees before authoring questions.

#### KNOW-D2-024: Hot recovery site
- **Titles:** Hot recovery site / สถานที่กู้คืนแบบ Hot Site
- **Objective Mapping:** 2.2 (Scope: Alternate processing site readiness levels).
- **Technical Evaluation:** Contains transcription error and overstated guarantees; requires revision. The transcript corrupts "hot site" into "hard site" (corrected by slide `S18`). Furthermore, claiming that a hot site operates in "minutes" as a universal rule ignores operational cutover realities. Per NIST SP 800-34 Rev. 1 (Section 3.4.3), a hot site is fully configured with compatible computing hardware, telecommunications, and near-real-time data replication; activation is rapid but depends on DNS/routing failover.
- **Academic Issue Link:** `D2-Q02`, `D2-Q05`.
- **Proposed Correction:** Formally correct transcript error to "Hot Site". Characterize readiness by pre-installed hardware, live power/network, and current synchronized data, rather than an absolute elapsed-time promise.
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Must revise definition to align with NIST SP 800-34 Rev. 1 before question design.

#### KNOW-D2-025: Warm recovery site
- **Titles:** Warm recovery site / สถานที่กู้คืนแบบ Warm Site
- **Objective Mapping:** 2.2 (Scope: Alternate processing site readiness levels).
- **Technical Evaluation:** Grammatically fragmented in transcript; requires revision. Transcript leaves sentence incomplete regarding hardware state. Per NIST SP 800-34 Rev. 1, a warm site is a partially equipped facility with environmental controls, basic infrastructure, and some computing equipment, but lacks real-time data synchronization; data must be restored from recent backups before activation.
- **Academic Issue Link:** `D2-Q02`, `D2-Q05`.
- **Proposed Correction:** Complete definition using NIST SP 800-34 Rev. 1: has space, power, cooling, network, and partial server infrastructure; requires restoration of current backups and final system configurations prior to operations (activation typically in hours to days).
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Complete definition in staging before question authoring.

#### KNOW-D2-026: Cold recovery site
- **Titles:** Cold recovery site / สถานที่กู้คืนแบบ Cold Site
- **Objective Mapping:** 2.2 (Scope: Alternate processing site readiness levels).
- **Technical Evaluation:** Factually contradictory in lecture; requires revision. Transcript asserts that a cold site has "no infrastructure." This contradicts authoritative federal standards (NIST SP 800-34 Rev. 1, Section 3.4.3). A cold site **DOES have basic facility infrastructure**—raised floors, electrical power, HVAC cooling, physical security, and telecommunications cabling. What it **lacks** is pre-installed computing hardware, servers, and restored applications. Asserting it has "no infrastructure" would teach students a serious technical falsehood.
- **Academic Issue Link:** `D2-Q05`.
- **Proposed Correction:** Redefine cold site in alignment with NIST: provides physical space, power, and environmental controls (facility infrastructure), but zero pre-installed computing hardware or live data; hardware must be procured/shipped and configured (activation takes days to weeks).
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Must overwrite the "no infrastructure" claim with NIST-compliant text.

#### KNOW-D2-027: DR testing and restore verification
- **Titles:** DR testing and restore verification / การทดสอบแผน DR และตรวจสอบการกู้คืน
- **Objective Mapping:** 2.2 (Scope: Validating plans through testing and backup verification).
- **Technical Evaluation:** Accurate. Emphasizes that possessing an unverified backup or untested DR plan provides no assurance of operational recovery. Highlights tabletop exercises, functional walkthroughs, and restore testing.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L65-L67], [S18].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-028: Regulatory recovery claims and protected information
- **Titles:** Regulatory recovery claims and protected information / ข้อกล่าวเรื่องการกู้คืนตามกฎระเบียบและข้อมูลที่ได้รับความคุ้มครอง
- **Objective Mapping:** 2.2 (Scope: Legal and regulatory contingency requirements; PII / PHI).
- **Technical Evaluation:** Severely flawed and legally inaccurate; **BLOCKED**. Two major failures:
  1. **Acronym Corruption:** The transcript defines PHI as "personal health information" instead of the statutory definition **"Protected Health Information"** under HIPAA (45 CFR § 160.103).
  2. **Statutory Overreach:** The course presents GDPR and HIPAA as imposing universal, identically structured Disaster Recovery Plan mandates on all organizations. In reality, HIPAA applies strictly to Covered Entities and Business Associates handling electronic PHI (ePHI) (45 CFR § 164.308(a)(7) Contingency Plan standard). GDPR Article 32 requires "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident," which is an outcome-oriented risk-appropriate technical measure for data controllers and processors, not a universal prescription for an identical DRP document across all businesses.
- **Academic Issue Link:** `D2-Q02`, `D2-Q04`.
- **Proposed Correction:** Correct PHI to "Protected Health Information". Constrain legal claims to their legitimate statutory scopes (HIPAA = covered entities/BA handling ePHI; GDPR = controllers/processors handling EU personal data).
- **Academic Decision:** `QA_BLOCKED`
- **Release Condition:** BLOCKED from question authoring until statutory boundaries and correct acronym expansions are formally approved by human review.

---

### Objective 2.3: Understand Security Awareness, Culture, and Training (Entries 029–041)

#### KNOW-D2-029: Security awareness
- **Titles:** Security awareness / ความตระหนักด้านความมั่นคงปลอดภัย
- **Objective Mapping:** 2.3 (Scope: Individual knowledge and recognition of security risks and policies).
- **Technical Evaluation:** Accurate. Focuses on individual understanding of acceptable use policies, social engineering threats, credential hygiene, and prompt reporting of abnormalities.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L73-L75], [S21].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-030: Security culture
- **Titles:** Security culture / วัฒนธรรมด้านความมั่นคงปลอดภัย
- **Objective Mapping:** 2.3 (Scope: Shared organizational beliefs, values, and habitual security behaviors).
- **Technical Evaluation:** Accurate. Distinguishes culture (shared organizational mindset and everyday habits) from awareness (cognitive knowledge). Stresses psychological safety where employees feel empowered to ask questions and report mistakes without fear of punishment.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L75-L77], [S22].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-031: Security leadership
- **Titles:** Security leadership / ภาวะผู้นำด้านความมั่นคงปลอดภัย
- **Objective Mapping:** 2.3 (Scope: Tone from the top, executive modeling, resource allocation).
- **Technical Evaluation:** Accurate. Highlights executive modeling (executives following the same MFA and travel security rules as staff) and leadership commitment in funding security programs.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L77-L81], [S23].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-032: Social engineering and manipulation
- **Titles:** Social engineering and manipulation / วิศวกรรมสังคมและการชักจูงหลอกลวง
- **Objective Mapping:** 2.3 (Scope: Psychological triggers exploited by attackers).
- **Technical Evaluation:** Accurate. Identifies foundational psychological levers: authority, urgency, fear, greed, helpfulness, and curiosity. Matches CISA and ISC2 social engineering frameworks.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L81-L83], [S24].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-033: Phishing
- **Titles:** Phishing / ฟิชชิง
- **Objective Mapping:** 2.3 (Scope: Broad, untargeted deceptive communications).
- **Technical Evaluation:** Accurate. Defines mass deceptive messaging designed to trick victims into executing malware, clicking credential harvesting links, or divulging sensitive data.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L83-L85], [S25]. Resolves caption errors in transcript.
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-034: Spear phishing
- **Titles:** Spear phishing / ฟิชชิงแบบเจาะจงเป้าหมาย
- **Objective Mapping:** 2.3 (Scope: Targeted communications tailored to specific organizations or individuals).
- **Technical Evaluation:** Accurate. Distinguishes mass phishing from customized attacks incorporating researched details (names, roles, internal project names) about the victim.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L85], [S25].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-035: Whaling
- **Titles:** Whaling / ฟิชชิงที่มุ่งเป้าบุคคลระดับสูง
- **Objective Mapping:** 2.3 (Scope: Highly targeted attacks on C-suite executives and high-value personnel).
- **Technical Evaluation:** Accurate. Focuses on executive targets (CEO, CFO, CISO, Board members) due to their elevated access, financial authorization powers, and proprietary business insights.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L85-L87], [S25].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-036: Vishing
- **Titles:** Vishing / ฟิชชิงผ่านเสียงหรือโทรศัพท์
- **Objective Mapping:** 2.3 (Scope: Voice and telephone-based social engineering).
- **Technical Evaluation:** Accurate. Voice phishing exploiting telephone networks, VoIP spoofing, and conversational deception. Slide `S25` resolves caption spelling ambiguities in the transcript.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L87], [S25].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-037: Smishing
- **Titles:** Smishing / ฟิชชิงผ่านข้อความ SMS
- **Objective Mapping:** 2.3 (Scope: SMS and cellular text message phishing).
- **Technical Evaluation:** Accurate. Defines social engineering attacks delivered via SMS, messaging apps, or cellular texts containing malicious URLs or urgent callback requests.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L87-L89], [S26].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-038: Pretexting
- **Titles:** Pretexting / การสร้างเรื่องอ้างเพื่อหลอกลวง
- **Objective Mapping:** 2.3 (Scope: Deception technique involving fabricated scenario or role).
- **Technical Evaluation:** Accurate. Correctly distinguishes the deception scenario (the pretext, such as an IT auditor conducting an urgent review) from the communication delivery channel (voice, SMS, email).
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L89], [S26].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-039: Employee password protection
- **Titles:** Employee password protection / การปกป้องรหัสผ่านของพนักงาน
- **Objective Mapping:** 2.3 (Scope: Credential hygiene, password managers, MFA usage).
- **Technical Evaluation:** Accurate. Covers personal password hygiene: length, uniqueness, avoiding predictable personal information, utilizing enterprise password managers, and adopting MFA.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L89-L91] (Transcript-only concept).
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning. Do not invent arbitrary character-complexity requirements not present in ISC2 standards.

#### KNOW-D2-040: Organizational credential protection
- **Titles:** Organizational credential protection / การปกป้องข้อมูลรับรองขององค์กร
- **Objective Mapping:** 2.3 (Scope: Enterprise policies, monitoring, privileged access control).
- **Technical Evaluation:** Accurate. Covers organizational controls: enforcing MFA, monitoring failed logins, protecting credential stores, and moving toward phishing-resistant authenticators (NIST SP 800-63B).
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L91-L93], [S27].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-041: Recognizing and reporting suspicious activity
- **Titles:** Recognizing and reporting suspicious activity / การสังเกตและรายงานกิจกรรมน่าสงสัย
- **Objective Mapping:** 2.3 (Scope: Employee incident escalation without independent remediation).
- **Technical Evaluation:** Accurate. Core ISC2 CC principle: an employee's primary role is to **recognize and report** suspicious activity through approved escalation channels, rather than attempting to investigate, confront, or remediate the threat independently.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L73-L79], [S21], [S22], [S23].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning. High exam value for "FIRST" or "BEST" action questions.

---

### Objective 2.4: Understand the Purpose of Security Measurement and Reporting (Entries 042–054)

#### KNOW-D2-042: Measuring cybersecurity objectives
- **Titles:** Measuring cybersecurity objectives / การวัดผลตามเป้าหมายความมั่นคงปลอดภัยไซเบอร์
- **Objective Mapping:** 2.4 (Scope: Purpose of security measurement and continuous improvement).
- **Technical Evaluation:** Accurate. Aligns measurement with business objectives, identifying control weaknesses, tracking remediation trends, and demonstrating compliance to stakeholders (NIST SP 800-55 Vol. 1).
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L93-L95], [S28], [S29].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-043: Security metrics and useful measurement properties
- **Titles:** Security metrics and useful measurement properties / ตัวชี้วัดความปลอดภัยและคุณสมบัติที่ช่วยให้ใช้ได้จริง
- **Objective Mapping:** 2.4 (Scope: Characteristics of effective metrics—relevant, measurable, consistent).
- **Technical Evaluation:** Accurate. Outlines core attributes of viable metrics: quantifiable, consistently collectible, relevant to stakeholders, and actionable. Distinguishes counts, percentages, and time-based metrics.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L95-L99], [S30].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-044: Mean Time to Detect
- **Titles:** Mean Time to Detect / เวลาเฉลี่ยในการตรวจพบ
- **Objective Mapping:** 2.4 (Scope: Incident measurement and elapsed operational times).
- **Technical Evaluation:** Technically valid metric, but source endpoints are underspecified; requires revision. The lecture provides an illustrative target (< 1 hour) without specifying calculation parameters. Per NIST SP 800-55 and 800-61 Rev. 2, MTTD measures the average elapsed time from the point an attacker compromises an environment (or a security incident begins) to the point security monitoring/analysts formally detect the intrusion.
- **Academic Issue Link:** `D2-Q07`.
- **Proposed Correction:** Define the precise boundary: timestamp of unauthorized event initiation to timestamp of detection alert generation/acknowledgment.
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Must incorporate operational boundary definitions before authoring scenario questions.

#### KNOW-D2-045: Mean Time to Respond - source-specific MTTR
- **Titles:** Mean Time to Respond - source-specific MTTR / เวลาเฉลี่ยในการตอบสนองตามความหมาย MTTR ของบทเรียน
- **Objective Mapping:** 2.4 (Scope: Incident response measurement and acronym ambiguity).
- **Technical Evaluation:** Conflicted acronym in industry literature; requires revision. Slide `S30` and `S31` explicitly define MTTR as **Mean Time to Respond**. However, in broader IT operations and academic literature, MTTR commonly expands to:
  - Mean Time to Repair (hardware/systems)
  - Mean Time to Recover (system restoration)
  - Mean Time to Remediate (eradicating vulnerability or incident)
  Furthermore, the course fails to define whether "Respond" means initial analyst triage, containment, or complete incident closure.
- **Academic Issue Link:** `D2-Q07`.
- **Proposed Correction:** Explicitly document the course's chosen definition ("Respond"), but highlight the industry ambiguity. Formally define "Respond" in practice items as either initial incident acknowledgment or active containment.
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Questions must explicitly define the term's context to avoid penalizing candidates familiar with standard engineering definitions.

#### KNOW-D2-046: Vulnerability remediation performance metric
- **Titles:** Vulnerability remediation performance metric / ตัวชี้วัดผลงานการแก้ไขช่องโหว่
- **Objective Mapping:** 2.4 (Scope: Patch velocity and vulnerability management KPIs).
- **Technical Evaluation:** Accurate. Measures the percentage of critical vulnerabilities remediated within an established service-level agreement (e.g., 15 days). Distinguishes remediation percentage from total vulnerability counts.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L99-L103], [S31], [S33].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-047: Patch compliance metric
- **Titles:** Patch compliance metric / ตัวชี้วัดความสอดคล้องตามข้อกำหนดแพตช์
- **Objective Mapping:** 2.4 (Scope: Endpoint and server compliance metrics).
- **Technical Evaluation:** Accurate. Evaluates the percentage of enterprise systems meeting patch baseline policies (target 95%, actual 91%). Distinct denominator (total endpoint systems) from vulnerability count.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L99-L109], [S31], [S36].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-048: Security-awareness training completion metric
- **Titles:** Security-awareness training completion metric / ตัวชี้วัดการเรียนรู้ด้านความปลอดภัยครบตามกำหนด
- **Objective Mapping:** 2.4 (Scope: Program compliance metrics vs operational effectiveness).
- **Technical Evaluation:** Accurate. Accurately evaluates training completion percentage (target 95%, actual 98%). Critically emphasizes that high completion demonstrates compliance and participation, but does not independently prove reduced susceptibility to phishing attacks.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L99-L109], [S31], [S36].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning. Excellent foundation for scenario questions distinguishing implementation compliance from behavioral effectiveness.

#### KNOW-D2-049: Key Risk Indicators and interpretation
- **Titles:** Key Risk Indicators and interpretation / ตัวชี้วัดความเสี่ยงหลักและการตีความ
- **Objective Mapping:** 2.4 (Scope: Leading risk signals and causal interpretation).
- **Technical Evaluation:** Contains an ambiguous causal example; requires revision. The definition of a KRI as a leading metric signaling increasing risk exposure is accurate. However, the source's example—"an increase in reported phishing attempts"—is fundamentally ambiguous:
  1. It could indicate that the organization is facing an aggressive external attack campaign (increased risk).
  2. Alternatively, it could indicate that security awareness training was highly successful and employees are now actively recognizing and reporting emails that previously went unflagged (improved security posture).
- **Academic Issue Link:** `D2-Q07`.
- **Proposed Correction:** Note the dual interpretation in the entry text. Questions must provide scenario context so candidates can distinguish between heightened attack activity and improved reporting behavior.
- **Academic Decision:** `QA_REVISION_REQUIRED`
- **Release Condition:** Must document this interpretation caveat before writing practice items.

#### KNOW-D2-050: Key Performance Indicators
- **Titles:** Key Performance Indicators / ตัวชี้วัดผลการดำเนินงานหลัก
- **Objective Mapping:** 2.4 (Scope: Evaluating progress toward operational security objectives).
- **Technical Evaluation:** Accurate. Correctly distinguishes KPIs (measuring operational progress and process efficiency, e.g., patching critical vulnerabilities within 15 days) from KRIs (measuring risk exposure and vulnerability thresholds).
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L103-L105], [S33].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-051: Security dashboards
- **Titles:** Security dashboards / แดชบอร์ดความปลอดภัย
- **Objective Mapping:** 2.4 (Scope: Real-time visual display of security status and trends).
- **Technical Evaluation:** Accurate. Positions dashboards as dynamic visualization interfaces aggregating diverse metrics (vulnerabilities, alerts, compliance status) for tactical and operational monitoring.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L105-L107], [S34].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-052: Security scorecards
- **Titles:** Security scorecards / สกอร์การ์ดความปลอดภัย
- **Objective Mapping:** 2.4 (Scope: Target-versus-actual performance evaluations).
- **Technical Evaluation:** Accurate at the conceptual level. Focuses on structured comparisons of actual measured values against predefined targets and thresholds to drive governance accountability.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L107-L111], [S35], [S36].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning. (Specific numerical data rows are governed by `KNOW-D2-054`).

#### KNOW-D2-053: Cybersecurity reports
- **Titles:** Cybersecurity reports / รายงานความมั่นคงปลอดภัยไซเบอร์
- **Objective Mapping:** 2.4 (Scope: Formal communication of security findings to diverse stakeholders).
- **Technical Evaluation:** Accurate. Defines formal, documented reports communicating risk postures, audit findings, control effectiveness, and resource recommendations to executives, board members, and auditors.
- **Bilingual & Semantic Parity:** High fidelity.
- **Source Evidence:** [T:L111-L115], [S37], [S38].
- **Academic Decision:** `QA_PASS`
- **Release Condition:** Permitted for Question Opportunity Planning.

#### KNOW-D2-054: Worked scorecard and unresolved vulnerability units
- **Titles:** Worked scorecard and unresolved vulnerability units / ตัวอย่างสกอร์การ์ดและหน่วยช่องโหว่ที่ยังขัดแย้ง
- **Objective Mapping:** 2.4 (Scope: Scorecard threshold and unit interpretation).
- **Technical Evaluation:** Critical unresolved conflict in source materials; **BLOCKED**. In slide `S36`, the scorecard displays:
  - Critical unpatched vulnerabilities: Target `< 10`, Actual `12`, Status `Needs Attention` (NO unit or percentage symbol is shown; other rows visibly include `%`).
  - In transcript `T:L111`, the instructor verbally states: "target is less than 10 percent, actual is 12."
  This creates an irreconcilable conflict:
  1. Is the target an absolute count (less than 10 unpatched vulnerabilities, with an actual count of 12)?
  2. Or is it a percentage (less than 10% of vulnerabilities remaining unpatched, with an actual of 12%)?
  Without the original lecture deck or instructor clarification, assuming either a percentage or an absolute count would corrupt candidate calculations.
- **Academic Issue Link:** `D2-Q03`.
- **Proposed Correction:** Document the conflict explicitly. Strictly prohibit any question stem, option, or calculation that relies on the unit of this specific vulnerability row.
- **Academic Decision:** `QA_BLOCKED`
- **Release Condition:** BLOCKED from question authoring. Questions on scorecards must use clean, uncontroversial target-versus-actual examples (e.g., patch compliance 95% vs 91%, or MFA 100% vs 97%).

---

## 4. Academic Traceability Matrix & Action Plan

| Canonical ID | Concept Title | Objective | Phase 2 Draft | Phase 3 Decision | Primary Action / Resolution Requirement |
| :---: | :--- | :---: | :---: | :---: | :--- |
| `KNOW-D2-001` | Integrated GRC and business alignment | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; reinforce functional distinction |
| `KNOW-D2-002` | Governance direction and accountability | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning |
| `KNOW-D2-003` | Risk management within GRC | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning |
| `KNOW-D2-004` | Compliance and applicable obligations | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; scope context required |
| `KNOW-D2-005` | Purpose and organizational value of GRC | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning |
| `KNOW-D2-006` | NIST Cybersecurity Framework | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; frame as voluntary risk tool |
| `KNOW-D2-007` | ISO/IEC 27001 requirements standard | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; ISMS certifiable standard |
| `KNOW-D2-008` | Information Security Management System | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning |
| `KNOW-D2-009` | COBIT | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; IT governance framework |
| `KNOW-D2-010` | GRC software capabilities | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; software tool vs policy |
| `KNOW-D2-011` | Risk register and risk record | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; 9 standard fields verified |
| `KNOW-D2-012` | Risk ownership | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; context-dependent assignment |
| `KNOW-D2-013` | Risk treatment choices | 2.1 | ACCEPTED | **QA_PASS** | Approved for planning; 4 canonical treatments |
| `KNOW-D2-014` | Residual risk and zero-risk wording | 2.1 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Strike universal "never zero" claim; bound avoidance |
| `KNOW-D2-015` | Risk rating scales | 2.1 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Reclassify 1-4 scale as ordinal/semi-quantitative |
| `KNOW-D2-016` | Business Continuity | 2.2 | ACCEPTED | **QA_PASS** | Approved for planning; enterprise-wide scope |
| `KNOW-D2-017` | Business Continuity Plan | 2.2 | ACCEPTED | **QA_PASS** | Approved for planning; documented operational plan |
| `KNOW-D2-018` | Disaster Recovery | 2.2 | ACCEPTED | **QA_PASS** | Approved for planning; IT technical restoration |
| `KNOW-D2-019` | Disaster Recovery Plan | 2.2 | ACCEPTED | **QA_PASS** | Approved for planning; technical runbooks/systems |
| `KNOW-D2-020` | Business Impact Analysis | 2.2 | ACCEPTED | **QA_PASS** | Approved for planning; drives recovery priorities |
| `KNOW-D2-021` | Recovery Time Objective | 2.2 | ACCEPTED | **QA_PASS** | Approved for planning; bounded downtime target |
| `KNOW-D2-022` | Recovery Point Objective | 2.2 | ACCEPTED | **QA_PASS** | Approved for planning; tolerable data loss |
| `KNOW-D2-023` | Backup strategy & geographic assumptions | 2.2 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Remove "completely safe/effortless" guarantees |
| `KNOW-D2-024` | Hot recovery site | 2.2 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Correct "hard site" typo; bound activation timing |
| `KNOW-D2-025` | Warm recovery site | 2.2 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Repair transcript fragment; align with NIST SP 800-34 |
| `KNOW-D2-026` | Cold recovery site | 2.2 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Strike "no infrastructure"; cite facility facilities |
| `KNOW-D2-027` | DR testing and restore verification | 2.2 | ACCEPTED | **QA_PASS** | Approved for planning; testing is mandatory |
| `KNOW-D2-028` | Regulatory recovery & protected info | 2.2 | NEEDS_REVIEW | **QA_BLOCKED** | Correct PHI expansion; scope HIPAA & GDPR bounds |
| `KNOW-D2-029` | Security awareness | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; cognitive understanding |
| `KNOW-D2-030` | Security culture | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; shared behavioral habits |
| `KNOW-D2-031` | Security leadership | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; executive role-modeling |
| `KNOW-D2-032` | Social engineering and manipulation | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; psychological triggers |
| `KNOW-D2-033` | Phishing | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; mass deceptive comms |
| `KNOW-D2-034` | Spear phishing | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; targeted communications |
| `KNOW-D2-035` | Whaling | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; executive targeting |
| `KNOW-D2-036` | Vishing | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; voice/telephone channel |
| `KNOW-D2-037` | Smishing | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; SMS/text channel |
| `KNOW-D2-038` | Pretexting | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; scenario mechanism |
| `KNOW-D2-039` | Employee password protection | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; personal hygiene |
| `KNOW-D2-040` | Organizational credential protection | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; enterprise controls |
| `KNOW-D2-041` | Recognizing & reporting suspicious activity | 2.3 | ACCEPTED | **QA_PASS** | Approved for planning; high exam value ("FIRST") |
| `KNOW-D2-042` | Measuring cybersecurity objectives | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; alignment with goals |
| `KNOW-D2-043` | Security metrics properties | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; measurable & consistent |
| `KNOW-D2-044` | Mean Time to Detect | 2.4 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Define event boundaries (initiation to detection) |
| `KNOW-D2-045` | Mean Time to Respond (source MTTR) | 2.4 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Clarify "Respond" vs industry Repair/Recover variants |
| `KNOW-D2-046` | Vulnerability remediation performance | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; SLA percentage KPI |
| `KNOW-D2-047` | Patch compliance metric | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; system compliance denominator |
| `KNOW-D2-048` | Training completion metric | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; compliance vs effectiveness |
| `KNOW-D2-049` | Key Risk Indicators & interpretation | 2.4 | NEEDS_REVIEW | **QA_REVISION_REQUIRED** | Document dual-interpretation of phishing reports |
| `KNOW-D2-050` | Key Performance Indicators | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; operational progress |
| `KNOW-D2-051` | Security dashboards | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; visualization presentation |
| `KNOW-D2-052` | Security scorecards | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; target-vs-actual comparison |
| `KNOW-D2-053` | Cybersecurity reports | 2.4 | ACCEPTED | **QA_PASS** | Approved for planning; formal stakeholder comms |
| `KNOW-D2-054` | Worked scorecard & vulnerability units | 2.4 | NEEDS_REVIEW | **QA_BLOCKED** | Hold disputed units; block numeric calculation items |
