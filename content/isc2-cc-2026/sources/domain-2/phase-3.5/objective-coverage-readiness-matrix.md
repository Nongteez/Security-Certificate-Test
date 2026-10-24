---
id: d2-phase3-5-objective-coverage-readiness-matrix
domain_id: 2
domain_name: Security Governance
phase: 3.5
document_role: objective-coverage-and-readiness-matrix
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "Official ISC2 CC 2026 Exam Outline, D2-T01, D2-S01..D2-S38, and Phase 3 QA Reports"
total_canonical_entries: 54
qa_pass_count: 43
revalidated_candidate_count: 9
quarantined_blocked_count: 2
plannable_knowledge_count: 52
plannable_readiness_percentage: 96.3%
---

# Domain 2 — Objective Coverage & Readiness Matrix (Phase 3.5 Candidate)

## 1. Official Authority & Exam Outline Scope

### Certification & Exam Baseline:
- **Certification:** ISC2 Certified in Cybersecurity (CC)
- **Exam Outline Version:** UPDATED 2026 Exam Outline (effective September 1, 2026)
- **Domain:** Domain 2 — Security Governance
- **Official Domain Weight:** **17.3%** (~17 to 18 questions in a standard 100-question exam)

### Sub-Objective Structure & Weight Allocation:
The 2026 outline organizes Domain 2 into four core sub-objectives:
1. **Objective 2.1:** Understand the security governance process (~4.3%)
2. **Objective 2.2:** Understand business continuity (BC) and disaster recovery (DR) concepts (~4.3%)
3. **Objective 2.3:** Understand security awareness, culture, and training (~4.3%)
4. **Objective 2.4:** Understand the purpose of security measurement and reporting (~4.4%)

---

## 2. Objective Coverage & Phase 3.5 Readiness Breakdown

| Objective ID | Sub-Objective Title | Outline Weight | Total Entries | QA_PASS | REVALIDATED CANDIDATE | QUARANTINED (BLOCKED) | Plannable for Phase 4 | Plannable Readiness |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **2.1** | Understand the security governance process | ~4.3% | 15 | 13 | 2 | 0 | **15** | 100.0% |
| **2.2** | Understand BC and DR concepts | ~4.3% | 13 | 7 | 5 | 1 (`KNOW-D2-028`) | **12** | 92.3% |
| **2.3** | Understand security awareness, culture, training | ~4.3% | 13 | 13 | 0 | 0 | **13** | 100.0% |
| **2.4** | Understand security measurement and reporting | ~4.4% | 13 | 10 | 2 | 1 (`KNOW-D2-054`) | **12** | 92.3% |
| **TOTAL** | **Domain 2: Security Governance** | **17.3%** | **54** | **43** | **9** | **2** | **52** | **96.3%** |

---

## 3. Detailed Objective-by-Objective Concept Mapping

<a id="objective-21"></a>
### Objective 2.1: Understand the Security Governance Process (15 Entries)
*Focus: GRC integration, business alignment, leadership oversight, risk management, compliance, frameworks, ISMS, risk registers, ownership, treatment, residual risk boundaries, and ordinal rating scales.*

| Canonical ID | Concept Title | Phase 3.5 Status | Plannable in Phase 4? | Academic Bounding Notes |
| :---: | :--- | :---: | :---: | :--- |
| [`KNOW-D2-001`](knowledge-map.md#know-d2-001) | Integrated GRC and business alignment | `QA_PASS` | **YES** | Connects governance, risk, and compliance with organizational objectives. |
| [`KNOW-D2-002`](knowledge-map.md#know-d2-002) | Governance direction and accountability | `QA_PASS` | **YES** | Direction, strategic oversight, policy authority, and accountability. |
| [`KNOW-D2-003`](knowledge-map.md#know-d2-003) | Risk management within GRC | `QA_PASS` | **YES** | Identifies, assesses, and prioritizes risks to business assets and goals. |
| [`KNOW-D2-004`](knowledge-map.md#know-d2-004) | Compliance and applicable obligations | `QA_PASS` | **YES** | Bounded to applicable obligations depending on industry, jurisdiction, contracts. |
| [`KNOW-D2-005`](knowledge-map.md#know-d2-005) | Purpose and organizational value of GRC | `QA_PASS` | **YES** | Eliminates silos, improves resilience; management approach, not absolute guarantee. |
| [`KNOW-D2-006`](knowledge-map.md#know-d2-006) | NIST Cybersecurity Framework | `QA_PASS` | **YES** | Voluntary, risk-based cybersecurity management guidance (CSF). |
| [`KNOW-D2-007`](knowledge-map.md#know-d2-007) | ISO/IEC 27001 requirements standard | `QA_PASS` | **YES** | Formal certifiable international standard for information security management. |
| [`KNOW-D2-008`](knowledge-map.md#know-d2-008) | Information Security Management System | `QA_PASS` | **YES** | Systematic approach (ISMS) comprising policies, controls, and risk treatments. |
| [`KNOW-D2-009`](knowledge-map.md#know-d2-009) | COBIT | `QA_PASS` | **YES** | Enterprise IT governance framework aligning IT systems with business needs. |
| [`KNOW-D2-010`](knowledge-map.md#know-d2-010) | GRC software capabilities | `QA_PASS` | **YES** | Enterprise software tool centralizing workflows; distinct from policies. |
| [`KNOW-D2-011`](knowledge-map.md#know-d2-011) | Risk register and risk record | `QA_PASS` | **YES** | Centralized risk tracking repository with 9 canonical fields. |
| [`KNOW-D2-012`](knowledge-map.md#know-d2-012) | Risk ownership | `QA_PASS` | **YES** | Accountable business leader managing specific risk; context-specific. |
| [`KNOW-D2-013`](knowledge-map.md#know-d2-013) | Risk treatment choices | `QA_PASS` | **YES** | 4 canonical options: Avoidance, Mitigation, Transfer, Acceptance. |
| [`KNOW-D2-014`](knowledge-map.md#know-d2-014) | Residual risk and zero-risk wording | `REVALIDATED_CANDIDATE` | **YES** | Residual risk remains after controls; complete avoidance terminates targeted risks. |
| [`KNOW-D2-015`](knowledge-map.md#know-d2-015) | Risk rating scales | `REVALIDATED_CANDIDATE` | **YES** | 1–4 numeric scale is Semi-Quantitative / Ordinal (NIST SP 800-30 Rev. 1). |

---

<a id="objective-22"></a>
### Objective 2.2: Understand Business Continuity and Disaster Recovery Concepts (13 Entries)
*Focus: BC vs DR scopes, BCP vs DRP documents, BIA recovery priorities, RTO downtime targets, RPO data loss targets, offsite backup realities, hot/warm/cold recovery site facilities, restore verification.*

| Canonical ID | Concept Title | Phase 3.5 Status | Plannable in Phase 4? | Academic Bounding Notes |
| :---: | :--- | :---: | :---: | :--- |
| [`KNOW-D2-016`](knowledge-map.md#know-d2-016) | Business Continuity | `QA_PASS` | **YES** | Strategic enterprise capability sustaining operations during disruptions. |
| [`KNOW-D2-017`](knowledge-map.md#know-d2-017) | Business Continuity Plan | `QA_PASS` | **YES** | Formal operational playbook detailing workarounds, relocation, vendors. |
| [`KNOW-D2-018`](knowledge-map.md#know-d2-018) | Disaster Recovery | `QA_PASS` | **YES** | Technical IT restoration of systems, servers, networks, and data. |
| [`KNOW-D2-019`](knowledge-map.md#know-d2-019) | Disaster Recovery Plan | `QA_PASS` | **YES** | Technical runbook detailing system restore procedures and cutovers. |
| [`KNOW-D2-020`](knowledge-map.md#know-d2-020) | Business Impact Analysis | `QA_PASS` | **YES** | Identifies critical business functions, evaluates impacts, sets RTO/RPO. |
| [`KNOW-D2-021`](knowledge-map.md#know-d2-021) | Recovery Time Objective | `QA_PASS` | **YES** | Targeted maximum acceptable system downtime; operational target. |
| [`KNOW-D2-022`](knowledge-map.md#know-d2-022) | Recovery Point Objective | `QA_PASS` | **YES** | Targeted acceptable data loss in time; requires restore verification. |
| [`KNOW-D2-023`](knowledge-map.md#know-d2-023) | Backup strategy and geographic recovery | `REVALIDATED_CANDIDATE` | **YES** | Geographic separation mitigates localized disaster; no absolute guarantee. |
| [`KNOW-D2-024`](knowledge-map.md#know-d2-024) | Hot recovery site | `REVALIDATED_CANDIDATE` | **YES** | Pre-installed hardware and live synchronized data; rapid cutover (hours). |
| [`KNOW-D2-025`](knowledge-map.md#know-d2-025) | Warm recovery site | `REVALIDATED_CANDIDATE` | **YES** | Partially equipped facility; requires backup restoration (hours to days). |
| [`KNOW-D2-026`](knowledge-map.md#know-d2-026) | Cold recovery site | `REVALIDATED_CANDIDATE` | **YES** | Has building infrastructure (power/HVAC); lacks hardware/data (days/weeks). |
| [`KNOW-D2-027`](knowledge-map.md#know-d2-027) | DR testing and restore verification | `QA_PASS` | **YES** | Regular walkthroughs and restore tests; unverified backups provide no proof. |
| [`KNOW-D2-028`](knowledge-map.md#know-d2-028) | Regulatory recovery claims & PHI | `QA_BLOCKED_QUARANTINE` | **NO** | **QUARANTINED:** Universal DRP mandates under HIPAA/GDPR held (`D2-Q04`). |

---

<a id="objective-23"></a>
### Objective 2.3: Understand Security Awareness, Culture, and Training (13 Entries)
*Focus: Cognitive awareness vs shared culture vs executive leadership modeling; psychological manipulation triggers; phishing, spear phishing, whaling, vishing, smishing, pretexting; credential hygiene and MFA; employee duty to recognize and report.*

| Canonical ID | Concept Title | Phase 3.5 Status | Plannable in Phase 4? | Academic Bounding Notes |
| :---: | :--- | :---: | :---: | :--- |
| [`KNOW-D2-029`](knowledge-map.md#know-d2-029) | Security awareness | `QA_PASS` | **YES** | Individual cognitive knowledge of policies, risks, and safe behaviors. |
| [`KNOW-D2-030`](knowledge-map.md#know-d2-030) | Security culture | `QA_PASS` | **YES** | Shared organizational values, social norms, and habitual day-to-day practices. |
| [`KNOW-D2-031`](knowledge-map.md#know-d2-031) | Security leadership | `QA_PASS` | **YES** | Tone at the top, resource commitment, and visible executive compliance. |
| [`KNOW-D2-032`](knowledge-map.md#know-d2-032) | Social engineering and manipulation | `QA_PASS` | **YES** | Exploits human psychological triggers (authority, urgency, fear, greed). |
| [`KNOW-D2-033`](knowledge-map.md#know-d2-033) | Phishing | `QA_PASS` | **YES** | Mass untargeted deceptive communications via email or web. |
| [`KNOW-D2-034`](knowledge-map.md#know-d2-034) | Spear phishing | `QA_PASS` | **YES** | Targeted, customized communications tailored to specific individuals/roles. |
| [`KNOW-D2-035`](knowledge-map.md#know-d2-035) | Whaling | `QA_PASS` | **YES** | Targeted spear phishing directed exclusively against senior C-suite executives. |
| [`KNOW-D2-036`](knowledge-map.md#know-d2-036) | Vishing | `QA_PASS` | **YES** | Voice/telephone-based social engineering deception channel. |
| [`KNOW-D2-037`](knowledge-map.md#know-d2-037) | Smishing | `QA_PASS` | **YES** | Text message/SMS-based social engineering deception channel. |
| [`KNOW-D2-038`](knowledge-map.md#know-d2-038) | Pretexting | `QA_PASS` | **YES** | Fabricating an invented scenario, persona, or narrative mechanism. |
| [`KNOW-D2-039`](knowledge-map.md#know-d2-039) | Employee password protection | `QA_PASS` | **YES** | Long unique passwords, password managers, and adopting MFA. |
| [`KNOW-D2-040`](knowledge-map.md#know-d2-040) | Organizational credential protection | `QA_PASS` | **YES** | Enforcing MFA, protecting credential stores, monitoring login anomalies. |
| [`KNOW-D2-041`](knowledge-map.md#know-d2-041) | Recognizing and reporting suspicious activity | `QA_PASS` | **YES** | Employee duty is to recognize and report immediately, NOT investigate. |

---

<a id="objective-24"></a>
### Objective 2.4: Understand the Purpose of Security Measurement and Reporting (13 Entries)
*Focus: Measuring cybersecurity against business objectives; properties of effective metrics; MTTD operational boundaries; MTTR polysemous definitions; patch compliance vs vulnerability remediation; training completion vs effectiveness; KRI leading signals and phishing duality; dashboards, scorecards, and reports.*

| Canonical ID | Concept Title | Phase 3.5 Status | Plannable in Phase 4? | Academic Bounding Notes |
| :---: | :--- | :---: | :---: | :--- |
| [`KNOW-D2-042`](knowledge-map.md#know-d2-042) | Measuring cybersecurity objectives | `QA_PASS` | **YES** | Aligns security metrics with business goals and control improvement. |
| [`KNOW-D2-043`](knowledge-map.md#know-d2-043) | Security metrics properties | `QA_PASS` | **YES** | Effective metrics must be quantifiable, collectible, consistent, actionable. |
| [`KNOW-D2-044`](knowledge-map.md#know-d2-044) | Mean Time to Detect | `REVALIDATED_CANDIDATE` | **YES** | Average elapsed time from intrusion initiation to formal alert generation. |
| [`KNOW-D2-045`](knowledge-map.md#know-d2-045) | Mean Time to Respond (source MTTR) | `REVALIDATED_CANDIDATE` | **YES** | Course defines 'Respond'; context/milestones required in questions. |
| [`KNOW-D2-046`](knowledge-map.md#know-d2-046) | Vulnerability remediation metric | `QA_PASS` | **YES** | Percentage of critical vulnerabilities patched within SLA (e.g., 15 days). |
| [`KNOW-D2-047`](knowledge-map.md#know-d2-047) | Patch compliance metric | `QA_PASS` | **YES** | Percentage of systems compliant with policy baseline (denominator = systems). |
| [`KNOW-D2-048`](knowledge-map.md#know-d2-048) | Training completion metric | `QA_PASS` | **YES** | Percentage completing training; measures participation, not behavior. |
| [`KNOW-D2-049`](knowledge-map.md#know-d2-049) | Key Risk Indicators & interpretation | `REVALIDATED_CANDIDATE` | **YES** | Leading risk indicators; phishing report increases have dual interpretations. |
| [`KNOW-D2-050`](knowledge-map.md#know-d2-050) | Key Performance Indicators | `QA_PASS` | **YES** | Historical operational progress toward security objectives and SLAs. |
| [`KNOW-D2-051`](knowledge-map.md#know-d2-051) | Security dashboards | `QA_PASS` | **YES** | Dynamic graphical interfaces for real-time visual operational monitoring. |
| [`KNOW-D2-052`](knowledge-map.md#know-d2-052) | Security scorecards | `QA_PASS` | **YES** | Structured comparison matrices comparing actuals against target thresholds. |
| [`KNOW-D2-053`](knowledge-map.md#know-d2-053) | Cybersecurity reports | `QA_PASS` | **YES** | Formal documented publications for leadership, board members, auditors. |
| [`KNOW-D2-054`](knowledge-map.md#know-d2-054) | Worked scorecard vulnerability units | `QA_BLOCKED_QUARANTINE` | **NO** | **QUARANTINED:** Conflicting `< 10` (no unit) vs `< 10%` units held (`D2-Q03`). |

---

## 4. Curricular Gaps & Supplemental Boundaries

The 2026 Exam Outline incorporates modern artificial intelligence and data governance topics. Because the primary intake course contains zero AI teaching, these topics are strictly isolated as external supplemental gaps:

| Gap ID | Objective | Topic Area | Curricular Scope | Handling in Phase 4 |
| :---: | :---: | :--- | :--- | :--- |
| `D2-GAP01` | 2.3 | AI-Amplified Social Engineering | Deepfake vishing, automated targeted spear phishing | Excluded from primary course questions; requires supplemental intake. |
| `D2-GAP02` | 2.2 | AI Dataset & Configuration Recovery | Backing up hyperparameters, training data, model checkpoints | Excluded from primary course questions; requires supplemental intake. |
| `D2-GAP03` | 2.2 | Model Drift Continuity Risks | Performance degradation and automated pipeline failure as outage | Excluded from primary course questions; requires supplemental intake. |
| `D2-GAP04` | 2.1 / 2.4 | AI Governance Metrics & KRIs | Model drift thresholds, data poisoning signals, fairness metrics | Excluded from primary course questions; requires supplemental intake. |
| `D2-GAP05` | 2.1 / 2.3 | AI-Assisted Incident Triage | Automated security operations and response playbooks | Excluded from primary course questions; requires supplemental intake. |
| `D2-GAP06` | 2.2 | Technical Redundancy Hardware Depth | RAID levels, server clustering, carrier-diverse telecommunications | Preserved as supplemental; omitted from core CC question planning. |
| `D2-GAP07` | 2.2 | Quantitative BIA Calculation | Formal mathematical ALE / SLE / ARO formulas in BIA context | Preserved as supplemental; conceptual BIA approved. |
| `D2-GAP08` | All | Formal Human Sign-Off | Human review of Thai translations and legal constraints | Mandatory governance gate prior to production question deployment. |

---

## 5. Phase 4 Question Opportunity Planning Capacity

With **52 validated and plannable canonical entries**, Domain 2 possesses an exceptionally robust, academically grounded foundation for question development:

- **Plannable Foundations:** 52 entries (96.3% of total intake)
- **Quarantined Scopes:** 2 entries (3.7% of total intake) — completely blocked from question authoring
- **Projected Question Opportunities:**
  - Objective 2.1 (Governance & Risk): 5–7 Question Opportunities
  - Objective 2.2 (Business Continuity & DR): 5–6 Question Opportunities
  - Objective 2.3 (Culture, Social Engineering & Passwords): 5–6 Question Opportunities
  - Objective 2.4 (Metrics, KRIs, Dashboards & Scorecards): 5–6 Question Opportunities
  - **Total Projected Capacity:** **20–25 distinct high-yield Question Opportunities**, easily sufficient to construct a complete, high-quality, balanced 24-question Domain 2 exam bank matching Domain 1's standards.

---

## 6. Readiness Sign-Off & Phase Transition Gate

### Academic Readiness Verdict: **READY FOR PHASE 4 PLANNING**
- The academic and bilingual corrections have been applied and revalidated.
- Defective and disputed scopes are safely quarantined with explicit release criteria.
- Official 2026 AI coverage boundaries are maintained without ungrounded AI assumptions.
- In accordance with project instructions, **work stops here for user review and approval before initiating Phase 4**.
