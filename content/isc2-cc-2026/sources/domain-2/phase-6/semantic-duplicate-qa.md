# ISC2 CC 2026 Domain 2: Security Governance
## Phase 6: Semantic Duplication & Overlap Quality Assurance Report

**Audit Date:** 2026-10-23
**Scope:** 26 Domain 2 Draft Questions
**Comparison Sets:**
1. **Intra-Domain (Domain 2):** Pairwise cross-comparison across drafts 1 to 26
2. **Inter-Domain (Domain 1):** 30 Next-Bank questions in \x60data/certs/isc2/cc/versions/next-bank/questions/domain-1.js\x60
3. **Legacy Bank:** 583 Pre-2026 questions (focusing on the 104 legacy Domain 2 questions)
**Auditor:** Independent Adversarial Question Academic QA Subagent

---

### 1. Executive Summary

This audit evaluated all 26 Domain 2 draft questions to verify that every item tests distinct cognitive reasoning, unique decision milestones, and independent syllabus objectives.

#### Audit Verdict: ZERO CRITICAL SEMANTIC DUPLICATIONS DETECTED
- **Intra-Domain:** Although some questions share broader objective themes (such as Business Continuity or Security Metrics), each question tests a distinct decision boundary (e.g., `DRAFT-D2-008` tests operational people/workflow continuity vs IT recovery; `DRAFT-D2-010` tests dual-metric SLA breaches; `DRAFT-D2-011` tests physical co-location fault domains; `DRAFT-D2-012` tests Cold Site facility infrastructure trade-offs).
- **Domain 1 Jurisdictional Separation:** Clear boundary separation is maintained. Domain 1 tests individual security concepts and authentication factor classifications (Something You Know/Have/Are); Domain 2 tests enterprise-wide credential governance and MFA deployment defeating credential stuffing (`DRAFT-D2-018`).
- **Legacy Question Evolution:** Legacy questions relied heavily on Bloom Level 1 flashcard definitions ("What does RTO stand for?"). Phase 5 questions assess Bloom Levels 3–5 (scenario analysis, timeline calculation, audit finding interpretation, and denominator differentiation).

---

### 2. Intra-Domain 2 Decision Boundary Audit

The following table documents how questions within the same objective maintain strict semantic independence:

| Objective | Question Pair | Concept Theme | Semantic & Decision Boundary Distinction |
|:---:|:---:|:---|:---|
| **2.1** | `DRAFT-001` vs `DRAFT-002` | GRC vs Board Governance | `001` assesses GRC alignment facilitating business objectives in Agile cloud deployment; `002` evaluates the Board's strategic risk appetite and fiduciary oversight role vs technical IT execution. |
| **2.1** | `DRAFT-003` vs `DRAFT-004` | Compliance vs Frameworks | `003` assesses statutory compliance (GDPR/HIPAA) overriding executive risk appetite; `004` evaluates certifiable ISMS standards (ISO 27001) vs voluntary frameworks (NIST CSF) and IT governance (COBIT). |
| **2.1** | `DRAFT-005` vs `DRAFT-006` | Risk Operations | `005` assesses risk ownership (business leaders own risk; security advises); `006` evaluates Risk Avoidance boundary when unpatchable legacy systems must be decommissioned. |
| **2.1** | `DRAFT-006` vs `DRAFT-007` | Treatment vs Rating Scale | `006` evaluates treatment selection (Avoidance); `007` assesses risk rating taxonomy (semi-quantitative ordinal scales vs true quantitative financial analysis). |
| **2.2** | `DRAFT-008` vs `DRAFT-009` | BCP Operations vs BIA Prerequisite | `008` discriminates operational workflows (people/processes) from technical recovery; `009` evaluates BIA as the required prerequisite before RTO/RPO or alternate site procurement. |
| **2.2** | `DRAFT-010` vs `DRAFT-011` | RTO/RPO SLA vs Physical Backups | `010` analyzes dual-metric failure (RTO met at 2.5h, RPO breached at 12h lost); `011` evaluates architectural co-location vulnerabilities where on-prem backups share a single flood fault domain. |
| **2.2** | `DRAFT-012` vs `DRAFT-013` | Cold Site vs Plan Verification | `012` evaluates NIST SP 800-34 Cold Site infrastructure (space, power, HVAC, cabling without servers) for a 5-day RTO; `013` evaluates audit verification proving daily backup write logs do not validate restore capability. |
| **2.3** | `DRAFT-014` vs `DRAFT-015` | Culture vs Psychological Triggers | `014` addresses leadership modeling ("tone at the top") overcoming formal training bypasses; `015` analyzes social engineering cognitive levers (Authority + Urgency in a fake CEO wire transfer). |
| **2.3** | `DRAFT-016` vs `DRAFT-017` | Whaling vs Channel/Pretexting | `016` assesses Whaling targeting a CFO during an acquisition; `017` deconstructs transmission channel (Vishing via desk phone) from deceptive narrative (Pretexting as IT technician). |
| **2.3** | `DRAFT-018` vs `DRAFT-019` | Credential Defense vs Reporting Duty | `018` addresses enterprise MFA defeating credential stuffing vs ineffective 30-day rotations; `019` evaluates the fundamental "recognize and report" duty without unauthorized DIY cleanup or pulling power plugs. |
| **2.4** | `DRAFT-020` vs `DRAFT-021` | Metric Quality vs MTTD Calculation | `020` evaluates why raw firewall block counts are vanity metrics; `021` calculates Time to Detect from initial compromise (08:00) to detection alert (10:00). |
| **2.4** | `DRAFT-022` vs `DRAFT-023` | MTTR Milestone vs Patch Velocity | `022` bounds the "Respond" milestone to active containment (host isolation); `023` differentiates endpoint fleet compliance (92% computers) from critical CVE remediation velocity (84% bugs in 15 days). |
| **2.4** | `DRAFT-024` vs `DRAFT-025` | Training Efficacy vs KRI/KPI | `024` contrasts 98% training completion (compliance) with 38% simulation clicks (outcome); `025` classifies 14-day patch SLA as a KPI and unsupported EOL systems as a KRI. |
| **2.4** | `DRAFT-025` vs `DRAFT-026` | Indicator Logic vs Stakeholder Reports | `025` evaluates leading vs lagging indicator taxonomy; `026` evaluates reporting channel selection tailored for Board governance briefings vs tactical SOC telemetry. |

---

### 3. Inter-Domain 1 Next-Bank Cross-Audit

A comprehensive search against `data/certs/isc2/cc/versions/next-bank/questions/domain-1.js` (30 questions) confirmed zero duplicate items:
- **MFA Questions:** Domain 1 questions assess authentication factor types (Something You Know vs Have vs Are) under the IAAA model. Domain 2 (`DRAFT-D2-018`) evaluates MFA as an *enterprise policy and architectural safeguard* specifically preventing credential stuffing breaches arising from employee password reuse across external websites.
- **Risk Terminology:** Domain 1 introduces definition-level formulas (`ALE = SLE × ARO`). Domain 2 questions evaluate organizational governance: risk owner business accountability (`DRAFT-D2-005`), risk treatment selection (`DRAFT-D2-006`), and semi-quantitative ordinal matrix taxonomy (`DRAFT-D2-007`).
- **Incident Response:** Domain 1 introduces broad security principles. Domain 2 (`DRAFT-D2-019`) focuses on employee escalation governance—the foundational duty of end users to "recognize and report" immediately rather than attempting rogue technical cleanup or destroying volatile RAM.

---

### 4. Legacy Question Bank Comparison (583 Questions)

The 104 legacy Domain 2 questions were reviewed to ensure Phase 5 questions do not replicate legacy patterns:
- **Legacy Flashcard Memorization:**
  - *Legacy Q110 & Q410:* "What is RTO?" -> "Recovery Time Objective".
  - *Legacy Q114 & Q416:* "Which site is fully equipped?" -> "Hot site".
  - *Legacy Q109 & Q419:* "What is BIA?" -> "Business Impact Analysis".
- **Phase 5 Scenario-Based Mastery:**
  - *`DRAFT-D2-010` (RTO/RPO):* Integrates an e-commerce SAN crash scenario with specific hourly milestones, forcing candidates to evaluate dual metrics where RTO is met (2.5h < 4h) while RPO is severely violated (12h lost > 2h).
  - *`DRAFT-D2-012` (Alternate Sites):* Directly incorporates the Phase 3.5 revalidated NIST SP 800-34 definition of a Cold Site (possessing facility space, electrical power, HVAC, and wiring without servers) to assess economic trade-offs for a 5-day recovery window.
  - *`DRAFT-D2-013` (DR Testing):* Evaluates an audit finding where an IT manager presents 100% daily backup logs, testing the crucial principle that backup write logs do not prove data restorability or operational plan viability without restore drills.
  - *2026 Objective 2.4:* All 7 questions (`DRAFT-D2-020` to `026`) assess modern security measurement concepts (MTTD dwell time, MTTR containment bounds, patch velocity denominators, training outcome efficacy, KRIs vs KPIs, and board reporting) that were completely absent from the legacy bank.

---

### 5. Final Semantic Uniqueness Statement

All 26 Phase 5 draft questions are confirmed to possess **genuine academic independence, distinct cognitive assessments, and zero redundant overlap** across all comparative question corpora.
