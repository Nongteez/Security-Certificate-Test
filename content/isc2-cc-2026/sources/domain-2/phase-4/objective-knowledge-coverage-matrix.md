---
id: d2-phase4-objective-knowledge-coverage-matrix
domain_id: 2
domain_name: Security Governance
phase: 4
document_role: objective-and-knowledge-coverage-matrix
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "Official ISC2 CC 2026 Outline and Phase 3.5 Candidate Baseline"
total_canonical_entries: 54
plannable_entries_covered: 52
quarantined_entries_excluded: 2
total_planned_opportunities: 26
coverage_completeness_percentage: 100.0%
---

# Domain 2 — Objective & Knowledge Coverage Matrix (Phase 4 Planning)

## 1. Executive Summary & Coverage Mandate

This matrix maps every **Canonical Knowledge Entry** (`KNOW-D2-001` through `KNOW-D2-054`) established in Phase 3.5 against the **26 Question Opportunities** (`OPP-D2-001` through `OPP-D2-026`) designed in the Phase 4 Quality Blueprint.

### Core Coverage Rules:
1. **100% Plannable Coverage:** Every one of the **52 plannable entries** is mapped to at least one high-yield opportunity. Zero plannable entries are left orphaned.
2. **Strict Quarantine Exclusion:** The two quarantined entries ([`KNOW-D2-028`](file:///d:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/sources/domain-2/phase-3.5/knowledge-map.md#know-d2-028) and [`KNOW-D2-054`](file:///d:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/sources/domain-2/phase-3.5/knowledge-map.md#know-d2-054)) have **ZERO question opportunities** mapped to them.
3. **AI Gap Isolation:** Supplemental AI gaps (`D2-GAP01` through `D2-GAP05`) are tracked as unmapped external gaps, ensuring no ungrounded AI questions are planned.

---

## 2. Objective-by-Objective Distribution Summary

| Objective ID | Sub-Objective Title | Outline Weight | Total Entries | Plannable Entries | Quarantined Entries | Opportunities Planned | Opportunity IDs |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **2.1** | Understand the security governance process | ~4.3% | 15 | 15 | 0 | **7** | `OPP-D2-001` – `OPP-D2-007` |
| **2.2** | Understand BC and DR concepts | ~4.3% | 13 | 12 | 1 (`KNOW-D2-028`) | **6** | `OPP-D2-008` – `OPP-D2-013` |
| **2.3** | Understand security awareness, culture, training | ~4.3% | 13 | 13 | 0 | **6** | `OPP-D2-014` – `OPP-D2-019` |
| **2.4** | Understand security measurement and reporting | ~4.4% | 13 | 12 | 1 (`KNOW-D2-054`) | **7** | `OPP-D2-020` – `OPP-D2-026` |
| **TOTAL** | **Domain 2: Security Governance** | **17.3%** | **54** | **52** | **2** | **26** | **OPP-D2-001 – OPP-D2-026** |

---

## 3. Comprehensive Master Traceability Matrix (All 54 Knowledge Entries)

### Objective 2.1: Understand the Security Governance Process (15 Entries)

| Knowledge ID | Canonical Concept Title | Phase 3.5 Status | Planned Opportunity ID | Opportunity Assessment Role | Coverage Status |
| :---: | :--- | :---: | :---: | :--- | :---: |
| `KNOW-D2-001` | Integrated GRC and business alignment | `QA_PASS` | `OPP-D2-001` | Primary concept (GRC coordination) | **COVERED** |
| `KNOW-D2-002` | Governance direction and accountability | `QA_PASS` | `OPP-D2-002` | Primary concept (governance oversight) | **COVERED** |
| `KNOW-D2-003` | Risk management within GRC | `QA_PASS` | `OPP-D2-003` | Supporting concept (risk vs compliance) | **COVERED** |
| `KNOW-D2-004` | Compliance and applicable obligations | `QA_PASS` | `OPP-D2-003` | Primary concept (compliance limits) | **COVERED** |
| `KNOW-D2-005` | Purpose and organizational value of GRC | `QA_PASS` | `OPP-D2-001` | Supporting concept (business value) | **COVERED** |
| `KNOW-D2-006` | NIST Cybersecurity Framework | `QA_PASS` | `OPP-D2-004` | Comparative framework (voluntary guidance) | **COVERED** |
| `KNOW-D2-007` | ISO/IEC 27001 requirements standard | `QA_PASS` | `OPP-D2-004` | Primary concept (certifiable standard) | **COVERED** |
| `KNOW-D2-008` | Information Security Management System | `QA_PASS` | `OPP-D2-004` | Supporting concept (systematic ISMS) | **COVERED** |
| `KNOW-D2-009` | COBIT | `QA_PASS` | `OPP-D2-004` | Comparative framework (IT governance) | **COVERED** |
| `KNOW-D2-010` | GRC software capabilities | `QA_PASS` | `OPP-D2-002` | Contrasting concept (tools vs policy) | **COVERED** |
| `KNOW-D2-011` | Risk register and risk record | `QA_PASS` | `OPP-D2-005` | Primary concept (risk log & tracking) | **COVERED** |
| `KNOW-D2-012` | Risk ownership | `QA_PASS` | `OPP-D2-005` | Primary concept (business risk owner) | **COVERED** |
| `KNOW-D2-013` | Risk treatment choices | `QA_PASS` | `OPP-D2-006` | Primary concept (4 treatments) | **COVERED** |
| `KNOW-D2-014` | Residual risk and zero-risk wording | `REVALIDATED_CANDIDATE` | `OPP-D2-006` | Core boundary (avoidance eliminates risk)| **COVERED** |
| `KNOW-D2-015` | Risk rating scales | `REVALIDATED_CANDIDATE` | `OPP-D2-007` | Primary concept (semi-quantitative scale) | **COVERED** |

---

### Objective 2.2: Understand Business Continuity and Disaster Recovery Concepts (13 Entries)

| Knowledge ID | Canonical Concept Title | Phase 3.5 Status | Planned Opportunity ID | Opportunity Assessment Role | Coverage Status |
| :---: | :--- | :---: | :---: | :--- | :---: |
| `KNOW-D2-016` | Business Continuity | `QA_PASS` | `OPP-D2-008` | Primary concept (organizational resilience) | **COVERED** |
| `KNOW-D2-017` | Business Continuity Plan | `QA_PASS` | `OPP-D2-008` | Primary concept (operational playbook) | **COVERED** |
| `KNOW-D2-018` | Disaster Recovery | `QA_PASS` | `OPP-D2-008` | Contrasting concept (IT restoration) | **COVERED** |
| `KNOW-D2-019` | Disaster Recovery Plan | `QA_PASS` | `OPP-D2-008` | Contrasting concept (technical runbook) | **COVERED** |
| `KNOW-D2-020` | Business Impact Analysis | `QA_PASS` | `OPP-D2-009` | Primary concept (BIA prioritization) | **COVERED** |
| `KNOW-D2-021` | Recovery Time Objective | `QA_PASS` | `OPP-D2-010` | Primary concept (system downtime target) | **COVERED** |
| `KNOW-D2-022` | Recovery Point Objective | `QA_PASS` | `OPP-D2-010` | Primary concept (data loss target) | **COVERED** |
| `KNOW-D2-023` | Backup strategy & geographic recovery | `REVALIDATED_CANDIDATE` | `OPP-D2-011` | Primary concept (geographic separation) | **COVERED** |
| `KNOW-D2-024` | Hot recovery site | `REVALIDATED_CANDIDATE` | `OPP-D2-012` | Comparative option (hours; sync data) | **COVERED** |
| `KNOW-D2-025` | Warm recovery site | `REVALIDATED_CANDIDATE` | `OPP-D2-012` | Comparative option (hours-days; restore) | **COVERED** |
| `KNOW-D2-026` | Cold recovery site | `REVALIDATED_CANDIDATE` | `OPP-D2-012` | Comparative option (building vs hardware)| **COVERED** |
| `KNOW-D2-027` | DR testing and restore verification | `QA_PASS` | `OPP-D2-013` | Primary concept (test rigor & evidence) | **COVERED** |
| `KNOW-D2-028` | Regulatory recovery claims & PHI | `QA_BLOCKED_QUARANTINE` | *None* | **EXCLUDED** (Statutory overreach defect) | **QUARANTINED** |

---

### Objective 2.3: Understand Security Awareness, Culture, and Training (13 Entries)

| Knowledge ID | Canonical Concept Title | Phase 3.5 Status | Planned Opportunity ID | Opportunity Assessment Role | Coverage Status |
| :---: | :--- | :---: | :---: | :--- | :---: |
| `KNOW-D2-029` | Security awareness | `QA_PASS` | `OPP-D2-014` | Contrasting concept (cognitive knowledge) | **COVERED** |
| `KNOW-D2-030` | Security culture | `QA_PASS` | `OPP-D2-014` | Primary concept (shared daily habits) | **COVERED** |
| `KNOW-D2-031` | Security leadership | `QA_PASS` | `OPP-D2-014` | Primary concept (tone from top/modeling) | **COVERED** |
| `KNOW-D2-032` | Social engineering and manipulation | `QA_PASS` | `OPP-D2-015` | Primary concept (psychological levers) | **COVERED** |
| `KNOW-D2-033` | Phishing | `QA_PASS` | `OPP-D2-016` | Baseline category (broad broadcast) | **COVERED** |
| `KNOW-D2-034` | Spear phishing | `QA_PASS` | `OPP-D2-016` | Intermediate category (targeted lure) | **COVERED** |
| `KNOW-D2-035` | Whaling | `QA_PASS` | `OPP-D2-016` | Specialized category (executive target) | **COVERED** |
| `KNOW-D2-036` | Vishing | `QA_PASS` | `OPP-D2-017` | Transmission channel (voice/phone) | **COVERED** |
| `KNOW-D2-037` | Smishing | `QA_PASS` | `OPP-D2-017` | Transmission channel (SMS/cellular text) | **COVERED** |
| `KNOW-D2-038` | Pretexting | `QA_PASS` | `OPP-D2-017` | Narrative mechanism (invented story) | **COVERED** |
| `KNOW-D2-039` | Employee password protection | `QA_PASS` | `OPP-D2-018` | Individual hygiene (password managers) | **COVERED** |
| `KNOW-D2-040` | Organizational credential protection | `QA_PASS` | `OPP-D2-018` | Enterprise controls (enforcing MFA) | **COVERED** |
| `KNOW-D2-041` | Recognizing & reporting suspicious activity| `QA_PASS`| `OPP-D2-019` | Foundational duty (recognize & report) | **COVERED** |

---

### Objective 2.4: Understand the Purpose of Security Measurement and Reporting (13 Entries)

| Knowledge ID | Canonical Concept Title | Phase 3.5 Status | Planned Opportunity ID | Opportunity Assessment Role | Coverage Status |
| :---: | :--- | :---: | :---: | :--- | :---: |
| `KNOW-D2-042` | Measuring cybersecurity objectives | `QA_PASS` | `OPP-D2-020` | Primary concept (purpose of measurement) | **COVERED** |
| `KNOW-D2-043` | Security metrics properties | `QA_PASS` | `OPP-D2-020` | Primary concept (quantifiable, actionable)| **COVERED** |
| `KNOW-D2-044` | Mean Time to Detect | `REVALIDATED_CANDIDATE` | `OPP-D2-021` | Primary concept (operational boundaries) | **COVERED** |
| `KNOW-D2-045` | Mean Time to Respond (source MTTR) | `REVALIDATED_CANDIDATE` | `OPP-D2-022` | Primary concept (response milestones) | **COVERED** |
| `KNOW-D2-046` | Vulnerability remediation metric | `QA_PASS` | `OPP-D2-023` | Primary concept (patch velocity SLA) | **COVERED** |
| `KNOW-D2-047` | Patch compliance metric | `QA_PASS` | `OPP-D2-023` | Contrasting concept (endpoint fleet %) | **COVERED** |
| `KNOW-D2-048` | Training completion metric | `QA_PASS` | `OPP-D2-024` | Primary concept (compliance vs behavior) | **COVERED** |
| `KNOW-D2-049` | Key Risk Indicators & interpretation | `REVALIDATED_CANDIDATE` | `OPP-D2-025` | Primary concept (leading signals/duality)| **COVERED** |
| `KNOW-D2-050` | Key Performance Indicators | `QA_PASS` | `OPP-D2-025` | Contrasting concept (operational SLA) | **COVERED** |
| `KNOW-D2-051` | Security dashboards | `QA_PASS` | `OPP-D2-026` | Presentation format (dynamic visual) | **COVERED** |
| `KNOW-D2-052` | Security scorecards | `QA_PASS` | `OPP-D2-026` | Presentation format (target vs actual) | **COVERED** |
| `KNOW-D2-053` | Cybersecurity reports | `QA_PASS` | `OPP-D2-026` | Presentation format (formal narrative) | **COVERED** |
| `KNOW-D2-054` | Worked scorecard & vulnerability units | `QA_BLOCKED_QUARANTINE` | *None* | **EXCLUDED** (Conflicting measurement units)| **QUARANTINED** |

---

## 4. Quarantined & External Scope Exclusions

| Identifier | Domain Area | Nature of Scope | Reason for Exclusion from Phase 4 Opportunities |
| :---: | :---: | :--- | :--- |
| [`KNOW-D2-028`](file:///d:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/sources/domain-2/phase-3.5/knowledge-map.md#know-d2-028) | 2.2 | Regulatory recovery & universal DRP claims | Quarantined due to statutory overreach asserting universal DRP mandates under HIPAA/GDPR. |
| [`KNOW-D2-054`](file:///d:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/sources/domain-2/phase-3.5/knowledge-map.md#know-d2-054) | 2.4 | Scorecard row 4 vulnerability units | Quarantined due to unresolved unit conflict (`< 10` unitless vs `< 10%`). Prohibited from math items. |
| `D2-GAP01` | 2.3 | AI-amplified social engineering | External curricular gap absent from intake course; requires authorized supplemental curriculum. |
| `D2-GAP02` | 2.2 | AI dataset and configuration backup | External curricular gap absent from intake course; requires authorized supplemental curriculum. |
| `D2-GAP03` | 2.2 | Model drift as continuity risk | External curricular gap absent from intake course; requires authorized supplemental curriculum. |
| `D2-GAP04` | 2.1 / 2.4 | AI governance metrics and KRIs | External curricular gap absent from intake course; requires authorized supplemental curriculum. |
| `D2-GAP05` | 2.1 / 2.3 | AI-assisted incident identification | External curricular gap absent from intake course; requires authorized supplemental curriculum. |
| `D2-GAP06` | 2.2 | Hardware technical redundancy (RAID) | Supplemental technical depth beyond CC syllabus level; omitted from core question planning. |
| `D2-GAP07` | 2.2 | Quantitative BIA mathematical scoring | Supplemental technical depth beyond CC syllabus level; conceptual BIA approved. |
| `D2-GAP08` | All | Formal human review sign-off | Human governance gate; pending human sign-off prior to production deployment. |

---

## 5. Coverage Completeness Audit

- **Total Canonical Entries in Baseline:** 54
- **Plannable Canonical Entries:** 52
- **Plannable Entries Successfully Mapped:** 52 (100.0%)
- **Orphaned Plannable Entries:** 0
- **Quarantined Entries Successfully Isolated:** 2 (100.0%)
- **Supplemental AI Gaps Successfully Isolated:** 5 (100.0%)
- **Result:** Full conceptual coverage achieved across Objectives 2.1, 2.2, 2.3, and 2.4 with zero boundary leaks.
