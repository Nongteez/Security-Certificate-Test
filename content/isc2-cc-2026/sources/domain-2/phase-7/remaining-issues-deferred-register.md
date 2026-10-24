# ISC2 CC 2026 Domain 2: Security Governance
## Phase 7: Remaining Issues, Quarantines & Deferred Register

**Document Date:** 2026-10-23
**Phase:** Phase 7 — Question Correction & Revalidation
**Scope:** Domain 2 (Security Governance, 17.3% Weight)
**Authoritative Baseline:** Phase 3.5 Baseline, Phase 6 QA, Phase 7 Revalidated Bank

---

### 1. Executive Summary

While all 26 questions in \x60domain-2-revalidated-candidate-bank.json\x60 have successfully achieved internal academic and psychometric revalidation (`CANDIDATE_REVALIDATED_PASS`), this register formally records outstanding human dependencies, quarantined items, and deferred concepts to ensure governance transparency.

---

### 2. Quarantined Knowledge Records (Permanently Blocked from Question Bank)

The following two records remain in strict quarantine and are excluded from the candidate question bank:

| Knowledge ID | Canonical Title | Reason for Quarantine | Release Condition | Question Bank Impact |
|:---|:---|:---|:---|:---:|
| **`KNOW-D2-028`** | Regulatory recovery claims & PHI statutory overreach | Unsubstantiated statutory claim asserting HIPAA specifies mandatory disaster recovery RTO timeframes for PHI. | Must cite specific statutory provision from 45 CFR Part 164 Subpart C or be permanently deleted. | **0 Questions Authored** (0% Leakage) |
| **`KNOW-D2-054`** | Worked scorecard vulnerability unit conflict | Unreconciled mathematical unit conflict conflating vulnerability counts (CVEs) with host counts (computers) on a sample slide. | Slide author must clarify whether the metric measures vulnerabilities or systems. | **0 Questions Authored** (0% Leakage) |

---

### 3. Conditionally Eligible Knowledge Dependencies (Revalidated Candidates)

The candidate question bank utilizes 9 knowledge records that were corrected during Phase 3.5 and categorized as `REVALIDATED_CANDIDATE`. Their academic validity in the question bank is bound to their corrected boundaries:

| Knowledge ID | Corrected Concept Boundary | Question Bank Realization | Outstanding Dependency |
|:---|:---|:---|:---|
| **`KNOW-D2-014`** | Risk Avoidance: Decommissioning and terminating the activity | `DRAFT-D2-006` (MRI workstation decommissioning) | Human academic sign-off on Phase 3.5 correction log. |
| **`KNOW-D2-015`** | Semi-Quantitative: 1-5 ordinal numbers vs true monetary units | `DRAFT-D2-007` (5x5 risk matrix taxonomy) | Human academic sign-off on Phase 3.5 correction log. |
| **`KNOW-D2-023`** | Offsite Backups: Geographic separation vs single fault domain | `DRAFT-D2-011` (Flooded server room NAS co-location) | Human academic sign-off on Phase 3.5 correction log. |
| **`KNOW-D2-024`** | Cold Site: Raised floors, power, HVAC, wiring without servers | `DRAFT-D2-012` (5-day RTO cost-effective site) | Human academic sign-off on Phase 3.5 correction log. |
| **`KNOW-D2-025`** | Warm Site: Facility plus pre-installed server hardware | `DRAFT-D2-012` (Distractor B) | Human academic sign-off on Phase 3.5 correction log. |
| **`KNOW-D2-026`** | Hot Site: Fully equipped, live-mirrored, near-instant failover | `DRAFT-D2-012` (Distractor C) | Human academic sign-off on Phase 3.5 correction log. |
| **`KNOW-D2-044`** | MTTD: Bounded from intrusion milestone to alert timestamp | `DRAFT-D2-021` (SQL injection timeline calculation) | Human academic sign-off on Phase 3.5 correction log. |
| **`KNOW-D2-045`** | MTTR: Bounded from alert triage to active host containment | `DRAFT-D2-022` (Ransomware host isolation milestone) | Human academic sign-off on Phase 3.5 correction log. |
| **`KNOW-D2-049`** | KRI: Leading forward-looking risk exposure indicators | `DRAFT-D2-025` (EOL unsupported servers on internet) | Human academic sign-off on Phase 3.5 correction log. |

---

### 4. Deferred Supplemental Curriculum Gaps

The five AI-identified curriculum gaps from Phase 2 remain deferred pending primary Tier 2 slide/transcript evidence:
- **`D2-GAP01`:** ISO 27001:2022 4-Theme Control Reorganization (deferred to future minor syllabus updates).
- **`D2-GAP02`:** AI & Machine Learning Governance (NIST AI RMF) (out of scope for entry-level CC).
- **`D2-GAP03`:** Supply Chain Security (NIST SP 800-161) (covered in Domain 1).
- **`D2-GAP04`:** Zero Trust Architecture Governance (belongs in Domain 3/4).
- **`D2-GAP05`:** Cloud Shared Responsibility in BCP/DRP (integrated as operational background in Q1/Q8; deferred as dedicated item).

---

### 5. Outstanding Linguistic Translation Status

- **Status:** `ai-verified / needs-human-review`
- **Rationale:** All Thai translations have been asserted for 1:1 semantic equivalence, professional tone, and terminology alignment by automated and subagent adversarial audits. However, the project's strict academic governance rules require that no translation claim official human native approval until reviewed by a qualified Thai-speaking cybersecurity educator.

---

### 6. Production Integration Hold

In accordance with strict project restrictions:
- The candidate bank \x60domain-2-revalidated-candidate-bank.json\x60 remains stored exclusively in \x60content/isc2-cc-2026/sources/domain-2/phase-7/\x60.
- **ZERO modifications** have been made to the production question bank files (\x60data/certs/isc2/cc/questions.json\x60 or runtime ESM scripts).
- Production integration, question ID assignment (e.g. `D2-001` to `D2-026`), and app deployment are on strict hold pending explicit user approval.
