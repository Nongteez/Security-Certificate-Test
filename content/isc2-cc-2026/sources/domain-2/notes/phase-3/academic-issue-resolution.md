---
id: d2-phase3-academic-issue-resolution
domain_id: 2
domain_name: Security Governance
phase: 3
document_role: academic-issue-resolution-register
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01 (DOMAIN 2.txt) and D2-S01..D2-S38; audit-local IDs from Phase 1 inventory"
total_issues_tracked: 14
resolved_count: 2
partially_resolved_count: 7
unresolved_count: 5
total_gaps_tracked: 8
---

# Domain 2 — Academic Issue Resolution & Evidence Register

## 1. Executive Summary & Review Framework

This register presents the authoritative investigation and updated academic dispositions for the **14 critical issues** (`D2-Q01` through `D2-Q14`) and **8 curricular gaps** (`D2-GAP01` through `D2-GAP08`) tracked across Phases 1 and 2 for **ISC2 Certified in Cybersecurity (CC) — Domain 2: Security Governance**.

### Evidence Classification Architecture:
To prevent ungrounded AI assumptions, every finding is strictly partitioned into:
1. **Verified Academic Facts**: Principles established by internationally recognized cybersecurity bodies (NIST, ISO, ISACA, CISA) or codified statutory laws.
2. **Course-Source Statements**: Verbatim claims extracted directly from the local transcript `DOMAIN 2.txt` or visible slide captures `S01`–`S38`.
3. **External Authoritative References**: Explicit primary source documentation cited with complete publication titles, formal sections, and access timestamps.
4. **Editorial / AI Interpretations**: Analytical synthesis, gap analyses, and bounding rules formulated during curation.
5. **Unresolved Findings / Disputed Scopes**: Irreconcilable source contradictions or data ambiguities that remain held or blocked.

---

## 2. Updated Disposition Summary for All 14 Tracked Issues

| Issue ID | Priority / Severity | Primary Topic Area | Phase 2 Disposition | Phase 3 Updated Disposition | Question Authoring Impact |
| :---: | :---: | :--- | :---: | :---: | :--- |
| `D2-Q01` | Medium | Transcript Locators & Missing Timestamps | UNRESOLVED | **PARTIALLY_RESOLVED** | Physical line locators standardized; recording timing held. |
| `D2-Q02` | High | Transcript Caption / Speech Corruptions | PARTIALLY_RESOLVED | **PARTIALLY_RESOLVED** | 8 terms normalized from slides/standards; audio held. |
| `D2-Q03` | High | Scorecard Count vs Percentage Threshold Conflict | UNRESOLVED | **UNRESOLVED (HOLD)** | **STRICTLY BLOCKED**: No numeric questions on vulnerability row. |
| `D2-Q04` | High | Legal & Regulatory Scope (HIPAA / GDPR / PHI) | PARTIALLY_RESOLVED | **PARTIALLY_RESOLVED** | PHI corrected; universal DRP mandate claims **BLOCKED**. |
| `D2-Q05` | High | BC/DR Recovery Guarantees & Site Readiness | PARTIALLY_RESOLVED | **PARTIALLY_RESOLVED** | Cold site "no infrastructure" rejected; NIST 800-34 applied. |
| `D2-Q06` | High | Risk Rating Scale Taxonomy (1–4 Scale) | PARTIALLY_RESOLVED | **PARTIALLY_RESOLVED** | 1–4 reclassified as Semi-Quantitative (NIST 800-30); bound zero risk. |
| `D2-Q07` | Medium | Metrics Definitions (MTTD, MTTR, KRI Phishing) | PARTIALLY_RESOLVED | **PARTIALLY_RESOLVED** | Event boundaries defined; KRI phishing duality noted. |
| `D2-Q08` | Low | Unrelated Product Listing Image (S20) | RESOLVED | **RESOLVED** | S20 permanently excluded from instructional extraction. |
| `D2-Q09` | Medium | Slide Crop / Overlay Boundaries & Repetitions | UNRESOLVED | **PARTIALLY_RESOLVED** | Visible text verified; 4 duplicate captures merged. |
| `D2-Q10` | Medium | Course Attribution & Intellectual Property Rights | UNRESOLVED | **UNRESOLVED** | Unauthenticated provenance; no external redistribution claimed. |
| `D2-Q11` | High | Missing AI Coverage (Updated 2026 Outline) | UNRESOLVED | **UNRESOLVED (GAP)** | Course lacks AI teaching; supplemental gaps isolated. |
| `D2-Q12` | Medium | Documentation & ID Convention Drift | UNRESOLVED | **RESOLVED** | Resolved staging conventions: KNOW-D2-nnn, D2-Gnnn, next-bank. |
| `D2-Q13` | Medium | Isolation Test Suite Status (Invariant 9) | UNRESOLVED | **UNRESOLVED** | Pre-existing application test failure preserved; read-only boundary. |
| `D2-Q14` | Medium | Architecture Redundancy Depth (RAID / Failover) | UNRESOLVED | **PARTIALLY_RESOLVED** | Bounded to BC/DR concepts; technical hardware depth held. |

---

## 3. Deep Investigation of the 14 Critical Academic Areas

### 1. Scorecard Count-versus-Percentage Conflicts (`D2-Q03`)
- **Affected Records**: `KNOW-D2-054`, `D2-G050`, `D2-CD14`, `D2-EL06`.
- **Severity**: High (Critical Conflict).
- **Exact Problem**: Slide `S36` displays a scorecard table with a row: "Critical unpatched vulnerabilities | Target: < 10 | Actual: 12 | Status: Needs Attention" with **no unit or percentage sign**. All other rows on the slide explicitly include `%` (Patch compliance: 95%/91%; MFA: 100%/97%; Training: 95%/98%). In direct contradiction, the instructor states at `T:L111`: "target is less than 10 percent, actual is 12."
- **Source Evidence**: Transcript `T:L109-L111` vs Slide `S36`.
- **Authoritative Reference Evidence**: NIST SP 800-55 Vol. 1 Section 3.2 emphasizes that metrics without unambiguous units of measurement (absolute counts vs ratios/percentages) invalidate statistical tracking and governance comparison.
- **Root Cause & Classification**: Discrepancy between spoken script and graphic slide authoring. Unresolved without the original slide deck source files.
- **Academic Disposition**: **UNRESOLVED (HOLD)**.
- **Actionable Correction / Rule**:
  1. Do not normalize or alter the raw transcript or slide values.
  2. In `KNOW-D2-054`, mark the entry as `QA_BLOCKED`.
  3. **Strict Authoring Prohibition**: Any question stem, option, or calculation that relies on the unit of this specific vulnerability row is strictly prohibited. Questions testing scorecards must utilize clean percentage metrics (patch compliance, MFA coverage) where targets and actuals share unambiguous units.

### 2. Legal and Regulatory Scope (`D2-Q04`)
- **Affected Records**: `KNOW-D2-004`, `KNOW-D2-028`, `D2-G061`, `D2-G062`, `D2-G063`, `D2-G064`.
- **Severity**: High.
- **Exact Problem**: The lecture generalizes data protection laws, asserting that HIPAA and GDPR require universal, identical Disaster Recovery Plans for all business entities, and misdefines PHI.
- **Authoritative Reference Evidence**:
  - **HHS HIPAA Security Rule (45 CFR § 164.308(a)(7))**: Specifically mandates a Contingency Plan (including data backup, disaster recovery, and emergency mode operation plans) strictly for **Covered Entities and Business Associates** that create, receive, maintain, or transmit Electronic Protected Health Information (ePHI). It is not a universal law for non-healthcare commercial entities.
  - **45 CFR § 160.103**: Formally defines PHI as **"Protected Health Information"** (individually identifiable health information held by a covered entity), contradicting the instructor's colloquial expansion "personal health information".
  - **EU GDPR (Regulation (EU) 2016/679, Article 32(1)(c))**: Requires data controllers and processors to implement technical and organizational measures to ensure "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident." This is an objective-based requirement proportionate to risk, not a prescriptive mandate for a standardized "DRP" document.
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**:
  1. Formally replace all occurrences of "personal health information" with "Protected Health Information" in glossary and staging text (`D2-G064`).
  2. Reject all universal DRP legal claims in `KNOW-D2-028` (`QA_BLOCKED`).
  3. Ensure practice questions explicitly specify the jurisdictional and regulatory scope (e.g., "Under HIPAA, for covered entities handling ePHI...").

### 3. Risk-Rating Scale Assumptions (`D2-Q06`)
- **Affected Records**: `KNOW-D2-014`, `KNOW-D2-015`, `D2-G013`, `D2-G014`, `D2-CD03`.
- **Severity**: High.
- **Exact Problem**: The instructor claims at `T:L27` that assigning numbers "1 to 4" (1=Low, 4=Critical) makes an assessment "quantitative." Additionally, the instructor asserts at `T:L29-L31` that "residual risk can never be reduced to zero after treatment."
- **Authoritative Reference Evidence**:
  - **NIST SP 800-30 Rev. 1 (Guide for Conducting Risk Assessments, Section 3.1 & Appendix D)**: Explicitly defines scales using numbers (e.g., 1–5, 1–10) to represent categorical bins as **Semi-Quantitative**. True **Quantitative** assessments require real mathematical measurements (monetary loss like Annualized Loss Expectancy [ALE], Single Loss Expectancy [SLE], or empirical frequency rates [ARO]).
  - **NIST CSRC Glossary**: Confirms that ordinal numbers lack proportional arithmetic properties (e.g., a risk rating of 4 is not mathematically "four times worse" than a risk rating of 1).
  - **Risk Avoidance Principles (ISO 31000 / ISC2 CC)**: While residual risk cannot be eliminated in ongoing operations, specific risks can be eliminated entirely via genuine avoidance (e.g., terminating a high-risk service, divesting an asset).
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**:
  1. Reclassify the 1–4 rating scale in `KNOW-D2-015` and `D2-CD03` as an ordinal / semi-quantitative scale.
  2. Update `KNOW-D2-014` to bound the "never zero" claim to ongoing operational activities, while acknowledging that complete avoidance eliminates specific targeted risks.

### 4. Business Continuity and Disaster Recovery Assumptions (`D2-Q05`, `D2-Q14`)
- **Affected Records**: `KNOW-D2-016` through `KNOW-D2-020`, `KNOW-D2-023`, `D2-GAP06`, `D2-GAP07`.
- **Severity**: Medium to High.
- **Exact Problem**: Lecture assumes offsite/cloud storage provides "guaranteed, effortless" recovery and omits critical technical redundancy architectures (RAID, dual power supplies, active/passive clustering, carrier-diverse telecommunications).
- **Authoritative Reference Evidence**: NIST SP 800-34 Rev. 1 Section 3.2 emphasizes that offsite data storage introduces transport latency, network bottlenecks, and potential synchronization failures. Recovery capabilities must be validated through live restore testing, not assumed based on physical location.
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**:
  1. Eliminate all language implying guaranteed recovery in `KNOW-D2-023`.
  2. Maintain `D2-GAP06` as a curricular depth gap: basic BC/DR concepts are approved for ISC2 CC level, but hardware-level redundancy (RAID, clustering) is recorded as supplemental rather than an official Domain 2 sub-objective.

### 5. RTO and RPO Definitions and Interpretation (`D2-Q05`)
- **Affected Records**: `KNOW-D2-021`, `KNOW-D2-022`, `D2-G020`, `D2-G021`, `D2-CD05`, `D2-EL11`, `D2-EL12`.
- **Severity**: Medium.
- **Exact Problem**: The lecture links RPO directly to backup schedules and uses an illustrative 1-hour ERP RTO scenario that could be misinterpreted by candidates as a universal standard.
- **Authoritative Reference Evidence**: NIST SP 800-34 Rev. 1 Section 3.2.1 defines RTO as the maximum acceptable amount of time that a system can be down before causing significant disruption, and RPO as the point in time to which data must be recovered. BIA establishes these values based on Maximum Tolerable Downtime (MTD). A backup schedule (e.g., hourly backups) defines the theoretical recovery point, but actual RPO achievement depends on backup integrity and successful restoration.
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**: Bounded definition-level distinctions are approved (`QA_PASS`). Questions must treat RTO and RPO as management targets derived from BIA, and reinforce that scheduled backups alone do not guarantee RPO without validated restore testing.

### 6. Hot / Warm / Cold Recovery-Site Descriptions (`D2-Q05`, `D2-Q02`)
- **Affected Records**: `KNOW-D2-024`, `KNOW-D2-025`, `KNOW-D2-026`, `D2-G023`, `D2-G024`, `D2-G025`, `D2-CD06`.
- **Severity**: High.
- **Exact Problem**: The transcript contains two serious errors:
  1. Audio transcription error calling a hot site a "hard site" (`T:L63`).
  2. Factually false statement asserting that a cold site has "no infrastructure" (`T:L65`).
- **Authoritative Reference Evidence**:
  - **NIST SP 800-34 Rev. 1 (Section 3.4.3, Alternate Processing Sites)**: Explicitly states that a cold site **provides physical space and basic facility infrastructure**—raised flooring, electrical power, HVAC, backup generators, fire suppression, and communication jacks. It lacks active computer hardware and data.
  - A hot site possesses pre-installed, fully configured computing hardware, telecommunications, and real-time replicated data.
  - A warm site possesses partial hardware (e.g., network equipment, basic servers) but lacks real-time data replication; data must be restored from recent backup media.
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**:
  1. Correct "hard site" to "Hot Site" in all staging files.
  2. Overwrite the "no infrastructure" claim in `KNOW-D2-026` and `D2-CD06` with the NIST SP 800-34 standard definition.
  3. Frame recovery site activation timelines (Hot = minutes/hours; Warm = hours/days; Cold = days/weeks) as illustrative operational targets rather than contractual guarantees.

### 7. MTTD and MTTR Ambiguity (`D2-Q07`)
- **Affected Records**: `KNOW-D2-044`, `KNOW-D2-045`, `D2-G042`, `D2-G043`, `D2-CD12`.
- **Severity**: Medium.
- **Exact Problem**: MTTR is expanded locally in slides `S30`/`S31` as "Mean Time to Respond," which conflicts with common industry expansions (Mean Time to Repair, Recover, Remediate). Neither MTTD nor MTTR defines calculation endpoints or incident milestones.
- **Authoritative Reference Evidence**: NIST SP 800-55 Vol. 1 Section 3.3.1 and NIST SP 800-61 Rev. 2 Section 3.4 require precise operational event milestones:
  - *MTTD*: Timestamp of initial unauthorized penetration/incident event to timestamp of formal detection/alert.
  - *MTTR*: If defined as "Respond," must specify whether response termination is initial analyst triage acknowledgment, threat containment (isolation), or full remediation.
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**:
  1. Retain the course's explicit expansion ("Mean Time to Respond"), but explicitly note in staging and question explanations that MTTR also denotes Repair/Recover in IT engineering.
  2. Questions testing MTTD/MTTR must supply explicit scenario milestones (e.g., "from alert generation to host network isolation") to prevent ambiguity.

### 8. KPI and KRI Classification (`D2-Q07`)
- **Affected Records**: `KNOW-D2-049`, `KNOW-D2-050`, `D2-G047`, `D2-G048`, `D2-CD10`, `D2-EL03`, `D2-EL04`.
- **Severity**: Medium.
- **Exact Problem**: The lecture oversimplifies the classification ("KPI = performance, KRI = risk") and provides an ambiguous example: "an increase in phishing reports" as a KRI signaling increased risk.
- **Authoritative Reference Evidence**: ISACA COBIT 2019 and NIST SP 800-55 Vol. 1 distinguish between operational performance indicators (measuring efficiency against an SLA) and risk indicators (measuring exposure to threat vectors). An increase in reported phishing emails is context-dependent: in an active phishing campaign, it reflects high threat activity; following widespread awareness training, it reflects positive employee reporting vigilance.
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**: Update `KNOW-D2-049` and `D2-CD10` with the dual-interpretation note. Questions must provide scenario context (e.g., "Following a mandatory training campaign...") to enable unambiguous answer determination.

### 9. Security Dashboard, Scorecard, and Reporting Terminology (`D2-Q07`)
- **Affected Records**: `KNOW-D2-051`, `KNOW-D2-052`, `KNOW-D2-053`, `D2-CD11`, `D2-EL05`, `D2-EL06`, `D2-EL07`.
- **Severity**: Medium.
- **Exact Problem**: Risk of candidates treating dashboards, scorecards, and reports as mutually exclusive technology silos.
- **Authoritative Reference Evidence**: NIST SP 800-55 Vol. 1 Section 3.4 outlines reporting techniques: dashboards provide dynamic visual operational tracking; scorecards summarize performance against target thresholds; formal reports provide detailed technical and strategic narrative for leadership. A dashboard may contain a scorecard widget; a report may summarize dashboard trends.
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**: Emphasize presentation and communication purpose (visualize vs evaluate targets vs communicate details) rather than artificial tool boundaries. Approved for question planning (`DISTINCTION_PASS`).

### 10. Missing AI-Related Course Coverage (`D2-Q11`, `D2-GAP01`–`GAP05`)
- **Affected Records**: `D2-G071`, `D2-G072`, `D2-G073`, `D2-GAP01` through `D2-GAP05`.
- **Severity**: High (Curricular Gap).
- **Exact Problem**: The official updated ISC2 CC 2026 Exam Outline introduces explicit AI context in Domain 2 (e.g., recovering AI configurations/datasets, model drift as an operational continuity risk, AI-specific risk indicators). The intake course materials contain **zero** instruction on AI topics.
- **Authoritative Reference Evidence**: Official ISC2 CC Certification Exam Outline (effective Sept 1, 2026), Domain 2 AI Guidance notes.
- **Academic Disposition**: **UNRESOLVED (CURRICULAR GAP)**.
- **Actionable Correction / Rule**:
  1. Do not fabricate or attribute AI knowledge to the course transcript or slide captures.
  2. Maintain `D2-GAP01` through `D2-GAP05` as formally documented gaps.
  3. Block course-derived AI question authoring until authoritative supplemental AI curricular materials are formally supplied and audited.

### 11. Source Provenance and Attribution Limitations (`D2-Q10`)
- **Affected Records**: Audit-local IDs `D2-T01`, `D2-S01`–`D2-S38`.
- **Severity**: Medium.
- **Exact Problem**: The intake batch contains local screenshots and an audio transcript, but lacks original publisher metadata, copyright licensing, or verified video alignment. Attempted retrieval of a candidate YouTube URL (`Ix5owkIyheU`) failed.
- **Academic Disposition**: **UNRESOLVED**.
- **Actionable Correction / Rule**: Treat source materials as an audit-local study batch. All derived items must remain in staging; no claims of reproducing official third-party commercial content or live exam items are permitted.

### 12. Transcript Caption and Transcription Errors (`D2-Q02`)
- **Affected Records**: Multiple entries across all 4 objectives.
- **Severity**: High.
- **Exact Problem**: Speech-to-text software generated significant phonetic corruptions: `coit` for COBIT, corrupted ISO strings, `CESO` for CISO, `HIPPA` for HIPAA, `hard site` for Hot Site, `fishing` for Vishing, `paged/unpaged` for patched/unpatched, and `personal` for Protected Health Information.
- **Academic Disposition**: **PARTIALLY_RESOLVED**.
- **Actionable Correction / Rule**: Resolved all 8 corruptions through explicit slide corroboration and external standard references (documented in Section 3 of `terminology-qa.md`). Raw transcript is preserved untouched as audit evidence.

### 13. Unsupported Source Claims and Inventory Integrity (`D2-Q08`, `D2-Q09`, `D2-Q12`, `D2-Q13`)
- **Affected Records**: `S20`, slide duplicates, repository architecture.
- **Severity**: Medium to Low.
- **Exact Problem**:
  - `D2-Q08`: Slide `Screenshot 2026-09-20 201852.png` (`S20`) is an unrelated Thai ESP32 electronics listing.
  - `D2-Q09`: Multiple slide captures (`S03`–`S05`, `S13`–`S16`) are repeated views of identical slides with different annotations or cropping.
  - `D2-Q12`: Documentation drift regarding question ID conventions (historical 1001+ vs runtime next-bank 584–607).
  - `D2-Q13`: Pre-existing test failure in `verify-complete-isolation.mjs` (Invariant 9).
- **Academic Disposition**:
  - `D2-Q08`: **RESOLVED** (S20 permanently excluded from knowledge and vocabulary).
  - `D2-Q09`: **PARTIALLY_RESOLVED** (Repeated slides merged conceptually).
  - `D2-Q12`: **RESOLVED** (Staging convention finalized: KNOW-D2-nnn, D2-Gnnn, next-bank architecture preserved).
  - `D2-Q13`: **UNRESOLVED** (Application test suite left untouched per strict file boundaries).

### 14. Thai Translation Quality and Semantic Consistency
- **Affected Records**: All 54 canonical entries, 73 glossary records, 14 distinctions, 20 language items.
- **Severity**: High (Core Project Goal).
- **Exact Problem**: Translations generated in Phase 2 required line-by-line verification to eliminate unnatural machine phrasing, ensure consistent cybersecurity vocabulary, and guarantee exact semantic parity.
- **Academic Disposition**: **PARTIALLY_RESOLVED** (AI verification completed; human bilingual approval pending).
- **Actionable Correction / Rule**: Comprehensive audit and translation correction matrix established in `translation-qa.md`.

---

## 4. Supplemental Curricular Gaps Register

The 8 curricular gaps identified in Phase 2 are maintained with updated academic notes:

| Gap ID | Associated Objective | Scope & Curricular Description | Evidence & Academic Reference | Current Status |
| :---: | :---: | :--- | :--- | :---: |
| `D2-GAP01` | 2.3 | AI-amplified social engineering and manipulation | Official 2026 Outline; Canadian CCCS ITSAP.00.166 | **HELD (GAP)** |
| `D2-GAP02` | 2.2 | Backup and recovery of AI configurations and datasets | Official 2026 Outline Domain 2 AI guidance | **HELD (GAP)** |
| `D2-GAP03` | 2.2 | Model drift as an operational continuity risk | Official 2026 Outline Domain 2 AI guidance | **HELD (GAP)** |
| `D2-GAP04` | 2.1 / 2.4 | AI-specific governance metrics and risk indicators | Official 2026 Outline Domain 2 AI guidance | **HELD (GAP)** |
| `D2-GAP05` | 2.1 / 2.3 | AI-assisted incident identification and playbooks | Official 2026 Outline (cross-domain with D5) | **HELD (GAP)** |
| `D2-GAP06` | 2.2 | Technical redundancy depth (RAID, dual power, failover) | Slide S11 title card; NIST SP 800-34 Rev. 1 | **HELD (GAP)** |
| `D2-GAP07` | 2.2 | Quantitative BIA methodology and scoring | Transcript T:L71; NIST SP 800-34 Rev. 1 | **HELD (GAP)** |
| `D2-GAP08` | All Objectives | Formal human technical and bilingual review sign-off | Project Governance Standards | **PENDING** |
