---
id: d2-phase3-5-blocked-unresolved-issue-register
domain_id: 2
domain_name: Security Governance
phase: 3.5
document_role: blocked-and-unresolved-issue-register
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "Phase 3 Academic QA (content/isc2-cc-2026/sources/domain-2/notes/phase-3/)"
total_quarantined_records: 2
total_issues_tracked: 14
resolved_count: 2
partially_resolved_count: 7
unresolved_count: 5
total_gaps_tracked: 8
---

# Domain 2 — Blocked & Unresolved Issue Register (Phase 3.5)

## 1. Executive Summary & Governance Mandate

This register maintains strict governance tracking over all quarantined knowledge entries, unresolved source contradictions, and curricular coverage gaps for **ISC2 Certified in Cybersecurity (CC) — Updated 2026 Exam Outline, Domain 2: Security Governance (17.3%)**.

### Guiding Principles:
1. **Zero Silent Approvals**: Unresolved source discrepancies, legally overbroad statements, and conflicting numerical units must never be approved or quietly papered over.
2. **Explicit Quarantine Gates**: Quarantined records are isolated with unambiguous release criteria. Question authoring on quarantined topics is strictly prohibited.
3. **AI Scope Boundary**: Curricular requirements introduced in the official 2026 Exam Outline that are absent from the intake course are isolated as supplemental gaps (`D2-GAP01` through `D2-GAP05`), preventing ungrounded AI hallucinations from entering the canonical knowledge base.

---

## 2. Quarantined Canonical Knowledge Entries

### A. KNOW-D2-028: Regulatory Recovery Claims & Protected Information
- **Entry ID:** `KNOW-D2-028`
- **Objective Mapping:** 2.2 (Understand business continuity and disaster recovery concepts)
- **Quarantine Level:** **CRITICAL — LEGAL & STATUTORY DEFECT**
- **Affected Artifacts:** `KNOW-D2-028`, `D2-G064`, `D2-Q04`.
- **Nature of Defect:**
  1. *Statutory Acronym Corruption:* The course transcript verbally expands PHI as "personal health information" instead of the statutory definition **"Protected Health Information"** under HIPAA (45 CFR § 160.103).
  2. *Universal DRP Mandate Overreach:* The lecture asserts that HIPAA and GDPR require universal, identical Disaster Recovery Plans for all business entities. In reality:
     - **HIPAA Security Rule (45 CFR § 164.308(a)(7))** mandates a Contingency Plan (including DRP, data backup, and emergency mode operation) strictly for **Covered Entities and Business Associates** creating, receiving, maintaining, or transmitting electronic Protected Health Information (ePHI). It does not apply universally to general commercial businesses.
     - **EU GDPR (Regulation (EU) 2016/679, Article 32(1)(c))** requires technical and organizational measures to ensure "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident." This is an outcome-oriented, risk-appropriate security principle for data controllers and processors, not a prescriptive mandate for a standardized "DRP" document across all organizations.
- **Immediate Mitigation in Phase 3.5:**
  - Acronym expansion updated to "Protected Health Information" in glossary (`D2-G064`).
  - Thai translation updated to "ข้อมูลสุขภาพที่ได้รับความคุ้มครอง".
- **Strict Release Criteria for Unblocking:**
  - [ ] **Condition 1:** Statutory scope must be explicitly constrained: questions must specify "Under HIPAA, for covered entities handling ePHI..." or "Under GDPR, for controllers processing EU personal data...".
  - [ ] **Condition 2:** Universal claims that HIPAA/GDPR mandate identical DRPs across all commercial enterprises remain permanently barred from question stems and answer keys.
  - [ ] **Condition 3:** Formal sign-off by a qualified human legal/cybersecurity reviewer.
- **Phase 4 Authoring Status:** **STRICTLY BLOCKED**. No general questions asserting universal regulatory DRP mandates may be authored.

---

### B. KNOW-D2-054: Worked Scorecard & Unresolved Vulnerability Units
- **Entry ID:** `KNOW-D2-054`
- **Objective Mapping:** 2.4 (Understand the purpose of security measurement and reporting)
- **Quarantine Level:** **CRITICAL — MATHEMATICAL UNIT CONFLICT**
- **Affected Artifacts:** `KNOW-D2-054`, `D2-G050`, `D2-CD14`, `D2-EL06`, `D2-Q03`.
- **Nature of Defect:**
  - Slide `S36` displays a scorecard table where row 4 reads: "Critical unpatched vulnerabilities | Target: < 10 | Actual: 12 | Status: Needs Attention". **No percentage sign or unit is displayed**. (All other rows visibly include `%`: Patch compliance 95%/91%; MFA 100%/97%; Training 95%/98%).
  - In direct contradiction, the instructor verbally states at `T:L111`: "target is less than 10 percent, actual is 12."
  - This creates an irreconcilable conflict:
    1. Is the target an absolute integer count (less than 10 unpatched vulnerabilities, with an actual count of 12)?
    2. Or is it a percentage (less than 10% unpatched vulnerabilities, with an actual of 12%)?
- **Impact on Question Authoring:** If an exam question asked students to calculate deficits, percentage-point differences, or compliance status based on this row, any key would be academically corrupt depending on which interpretation was arbitrarily assumed.
- **Strict Release Criteria for Unblocking:**
  - [ ] **Condition 1:** Verification against the original uncropped slide deck or instructor publisher master confirming whether `< 10` is an integer count or percentage.
  - [ ] **Condition 2:** Alternatively, formal project decision adopting an explicit editorial convention for worked practice examples.
  - [ ] **Condition 3:** Until resolved, this specific vulnerability row is **STRICTLY PROHIBITED** from any question stem, distractor, or calculation in Phase 4.
- **Phase 4 Authoring Status:** **STRICTLY BLOCKED**. Questions testing scorecards must use clean percentage rows (e.g., patch compliance 95% vs 91%, MFA 100% vs 97%) where targets and actuals share clear, unambiguous units.

---

## 3. Register of All 14 Tracked Issues

| Issue ID | Severity | Topic / Focus | Current Status | Governance Summary & Authoring Boundary |
| :---: | :---: | :--- | :---: | :--- |
| `D2-Q01` | Medium | Transcript Locators & Timing | **PARTIALLY_RESOLVED** | Physical line locators standardized; recording timing held. Reusable for citation. |
| `D2-Q02` | High | Transcript Caption Corruptions | **PARTIALLY_RESOLVED** | 8 terms normalized from slides and standards; raw transcript preserved. |
| `D2-Q03` | High | Scorecard Count vs % Conflict | **UNRESOLVED (HOLD)** | Vulnerability row strictly quarantined (`KNOW-D2-054`). Clean rows approved. |
| `D2-Q04` | High | Legal / Regulatory Scope | **PARTIALLY_RESOLVED** | PHI corrected; universal DRP mandate quarantined (`KNOW-D2-028`). |
| `D2-Q05` | High | BC/DR Recovery Guarantees | **PARTIALLY_RESOLVED** | Cold site "no infrastructure" struck; NIST 800-34 applied; guarantees bounded. |
| `D2-Q06` | High | Risk Scale Taxonomy (1–4) | **PARTIALLY_RESOLVED** | 1–4 reclassified as Semi-Quantitative (NIST 800-30); zero risk bounded. |
| `D2-Q07` | Medium | Metrics Boundaries & Ambiguity | **PARTIALLY_RESOLVED** | Event boundaries defined for MTTD/MTTR; KRI phishing duality documented. |
| `D2-Q08` | Low | Unrelated Listing Image (S20) | **RESOLVED** | S20 permanently excluded from knowledge and vocabulary. |
| `D2-Q09` | Medium | Slide Crops & Repeated Views | **PARTIALLY_RESOLVED** | Visible text verified; 4 duplicate captures merged conceptually. |
| `D2-Q10` | Medium | Provenance & Attribution | **UNRESOLVED** | Local intake batch unauthenticated; no commercial redistribution claimed. |
| `D2-Q11` | High | Missing AI Course Coverage | **UNRESOLVED (GAP)** | Intake course lacks AI teaching; supplemental gaps isolated (`D2-GAP01`–`05`). |
| `D2-Q12` | Medium | ID Convention Drift | **RESOLVED** | Standardized conventions locked: `KNOW-D2-nnn`, `D2-Gnnn`, `D2-CDnn`, `D2-ELnn`. |
| `D2-Q13` | Medium | Isolation Test Suite Status | **UNRESOLVED** | Pre-existing application test failure preserved; zero edits outside staging. |
| `D2-Q14` | Medium | Redundancy Architecture Depth | **PARTIALLY_RESOLVED** | Bounded to high-level BC/DR concepts; hardware engineering held (`D2-GAP06`). |

---

## 4. Official 2026 Exam Outline AI Scope & Supplemental Curricular Gaps

### Independent Verification of 2026 Exam Outline Requirements
The official updated ISC2 CC Exam Outline (effective September 1, 2026) assigns Domain 2 (Security Governance) a weight of **17.3%**.

In addition to traditional governance, business continuity, culture, and measurement, the 2026 outline incorporates modern operational realities:
- **Objective 2.1:** Governance of emerging technologies, automated decision workflows, and compliance reporting.
- **Objective 2.2:** Business continuity for AI pipelines; backing up training datasets, hyperparameters, and model configurations; model drift as an operational continuity risk.
- **Objective 2.3:** AI-amplified social engineering (deepfake vishing, automated targeted spear phishing).
- **Objective 2.4:** Modern risk indicators, including model drift thresholds, data poisoning signals, and automated control metrics.

### Curricular Gap Register (`D2-GAP01` through `D2-GAP08`)

| Gap ID | Objective | Topic & Scope Description | Authoritative Reference | Staging Status | Action Required Before Planning |
| :---: | :---: | :--- | :--- | :---: | :--- |
| `D2-GAP01` | 2.3 | AI-amplified social engineering (deepfakes, voice synthesis, automated phishing) | Official 2026 Outline; Canadian CCCS ITSAP.00.166 | **HELD (GAP)** | Requires authorized supplemental study brief or intake batch. |
| `D2-GAP02` | 2.2 | Backup and recovery of AI configurations, hyperparameters, and datasets | Official 2026 Outline Domain 2 Guidance | **HELD (GAP)** | Requires authorized supplemental study brief or intake batch. |
| `D2-GAP03` | 2.2 | Model drift and automated pipeline failure as operational continuity risks | Official 2026 Outline Domain 2 Guidance | **HELD (GAP)** | Requires authorized supplemental study brief or intake batch. |
| `D2-GAP04` | 2.1 / 2.4 | AI-specific governance metrics and leading risk indicators (KRIs) | Official 2026 Outline Domain 2 Guidance | **HELD (GAP)** | Requires authorized supplemental study brief or intake batch. |
| `D2-GAP05` | 2.1 / 2.3 | AI-assisted incident identification and automated triage playbooks | Official 2026 Outline (cross-domain with D5) | **HELD (GAP)** | Requires authorized supplemental study brief or intake batch. |
| `D2-GAP06` | 2.2 | Technical redundancy hardware depth (RAID levels, clustering, dual power) | Slide S11 title card; NIST SP 800-34 Rev. 1 | **HELD (GAP)** | Preserved as supplemental; omitted from core CC question planning. |
| `D2-GAP07` | 2.2 | Quantitative BIA methodology, ALE calculation, and scoring formulas | Transcript T:L71; NIST SP 800-30 / 800-34 | **HELD (GAP)** | Preserved as supplemental; conceptual BIA approved. |
| `D2-GAP08` | All | Formal human technical and bilingual review sign-off | SEC CERT TEST Governance Standards | **PENDING** | Requires human reviewer approval prior to production release. |

### Strict Rule on AI Question Authoring:
Because the intake course materials (`DOMAIN 2.txt` and slides `S01`–`S38`) contain **zero instruction on AI**, no AI-related practice questions may be authored based on the intake course. Any supplemental AI questions must be sourced from an explicit, verified external supplemental curriculum and tagged with a distinct provenance identifier.
