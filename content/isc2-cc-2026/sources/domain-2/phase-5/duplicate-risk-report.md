# ISC2 CC 2026 Domain 2: Security Governance
## Phase 5: Duplicate-Risk & Semantic Overlap Report

**Audit Date:** 2026-10-23
**Scope:** 26 Draft Questions (`DRAFT-D2-001` through `DRAFT-D2-026`)
**Comparison Corpora:**
1. **Intra-Domain 2:** Drafts 1 to 26 comparison
2. **Inter-Domain (Domain 1 Next-Bank):** `data/certs/isc2/cc/versions/next-bank/questions/domain-1.js` (30 items)
3. **Legacy Question Bank:** 583 Pre-2026 questions (focusing on Domain 2 items: 104 items)

---

### 1. Executive Summary

- **Total Potential Conflicts Detected:** 0 critical duplications; 5 low-medium semantic adjacent concepts.
- **Intra-Domain Overlap:** Zero duplicate questions. Concepts within the same objective assess distinct Bloom cognitive levels, contrasting operational decisions (e.g., BCP operational workflows vs DRP technical restoration; MTTD intrusion detection milestone vs MTTR containment action).
- **Domain 1 Separation:** Clear jurisdictional separation. Domain 1 addresses fundamental security concepts (CIA triad, IAAA, ethics canon, risk definitions). Domain 2 addresses organizational governance processes (GRC alignment, framework hierarchy, BCP/DRP operational execution, security culture, and NIST SP 800-55 governance metrics).
- **Legacy Question Differentiation:** Legacy questions operate primarily at Bloom Level 1 (rote recall of acronyms, such as "What does RTO stand for?"). Phase 5 questions operate at Bloom Levels 3–5 (scenario analysis, dual-metric failure diagnosis, audit finding evaluation, and denominator distinction).

---

### 2. Intra-Domain Semantic Discrimination Matrix

The following table demonstrates how adjacent questions within the same objective maintain strict semantic independence:

| Objective | Question Pair | Shared Theme | Distinct Cognitive Assessment & Decision Boundary |
|:---:|:---:|:---|:---|
| **2.1** | `DRAFT-001` vs `DRAFT-002` | GRC Integration vs Strategic Governance | `001` assesses cross-functional GRC business alignment in cloud delivery; `002` assesses governance policy hierarchy and executive direction vs operational management. |
| **2.1** | `DRAFT-003` vs `DRAFT-004` | Regulatory Compliance vs Frameworks | `003` assesses statutory compliance (GDPR/HIPAA/SOX) vs executive risk appetite; `004` tests certifiable ISMS standards (ISO 27001) vs voluntary guidelines (NIST CSF) and IT governance (COBIT). |
| **2.1** | `DRAFT-005` vs `DRAFT-006` | Risk Operations | `005` assesses risk ownership accountability (business unit leader owns risk; security advises); `006` assesses the boundary of Risk Avoidance when an unpatchable legacy system must be decommissioned. |
| **2.2** | `DRAFT-008` vs `DRAFT-009` | Continuity Operations vs BIA | `008` discriminates BCP operational continuity (people/workflows) from DRP technical IT recovery; `009` evaluates BIA as the mandatory prerequisite process to resolve departmental recovery disputes. |
| **2.2** | `DRAFT-010` vs `DRAFT-011` | Contingency Failure Analysis | `010` analyzes a dual-metric scenario where RTO was met (2.5h < 4h) but RPO was breached (12h lost > 2h); `011` evaluates architectural co-location vulnerabilities where on-prem backups share a single fault domain. |
| **2.2** | `DRAFT-012` vs `DRAFT-013` | Alternate Sites vs Plan Verification | `012` evaluates NIST SP 800-34 Cold Site infrastructure (space, power, HVAC, wiring without servers) for a 5-day RTO; `013` evaluates audit verification proving daily backup write logs do not validate restore capability. |
| **2.3** | `DRAFT-014` vs `DRAFT-015` | Culture vs Psychological Lures | `014` addresses leadership modeling ("tone at the top") overcoming formal training bypasses; `015` analyzes social engineering cognitive levers (Authority + Urgency in a fake CEO wire transfer). |
| **2.3** | `DRAFT-016` vs `DRAFT-017` | Phishing Taxonomy vs Channel/Pretext | `016` assesses Whaling targeting a CFO during an acquisition; `017` deconstructs transmission channel (Vishing via desk phone) from deceptive narrative (Pretexting as IT technician). |
| **2.3** | `DRAFT-018` vs `DRAFT-019` | Credential Hygiene vs Escalation Duty | `018` addresses enterprise MFA defeating credential stuffing vs ineffective 30-day rotations; `019` evaluates the fundamental "recognize and report" duty without unauthorized DIY cleanup or pulling power plugs. |
| **2.4** | `DRAFT-020` vs `DRAFT-021` | Metric Properties vs MTTD Boundaries | `020` evaluates why raw firewall block counts are vanity metrics; `021` calculates Time to Detect from initial compromise (08:00) to detection alert (10:00). |
| **2.4** | `DRAFT-022` vs `DRAFT-023` | MTTR Milestone vs Patch Velocity | `022` bounds the "Respond" milestone to active containment (host isolation); `023` differentiates endpoint fleet compliance (92% computers) from critical CVE remediation velocity (84% bugs in 15 days). |
| **2.4** | `DRAFT-024` vs `DRAFT-025` | Training Effectiveness vs KRI/KPI | `024` contrasts 98% training completion (compliance) with 38% simulation clicks (outcome); `025` classifies 14-day patch SLA as a KPI and unsupported EOL systems as a KRI. |

---

### 3. Cross-Domain Separation (Domain 1 Next-Bank Comparison)

An automated audit against the 30 next-bank questions of Domain 1 (`domain-1.js`) was performed:
- **Authentication & MFA:** Domain 1 tests MFA factor categories (Something You Know, Have, Are) under IAAA. In contrast, `DRAFT-D2-018` evaluates MFA as an *enterprise governance control* mitigating credential stuffing breaches resulting from password reuse.
- **Risk Terminology:** Domain 1 tests basic risk definitions (Threat, Vulnerability, Likelihood, Impact). In contrast, Domain 2 drafts test GRC integration (`001`), risk owner accountability (`005`), risk avoidance decommissioning (`006`), and semi-quantitative ordinal scale taxonomy (`007`).
- **Incident Concepts:** Domain 1 introduces high-level security concepts. `DRAFT-D2-019` focuses strictly on employee escalation governance—the "recognize and report" duty and forensic RAM preservation.

**Result:** Zero duplicate questions or concept collisions.

---

### 4. Legacy Question Bank Semantic Differentiation

The 583 legacy Pre-2026 questions contain 104 questions mapped to historical Domain 2 topics. A comparative analysis confirms substantial differentiation:

1. **RTO and RPO:**
   - *Legacy Approach (e.g., Q110, Q111, Q410, Q411):* Simple vocabulary flashcards: "What does RTO stand for?", "What metric measures acceptable data loss?".
   - *Phase 5 Approach (`DRAFT-D2-010`):* Complex dual-metric operational scenario where an e-commerce database recovers in 2.5 hours (achieving the 4-hour RTO) but loses 12 hours of transaction orders (violating the 2-hour RPO).
2. **Alternate Processing Sites:**
   - *Legacy Approach (e.g., Q114, Q179, Q416):* "Which site is fully equipped and ready immediately?" (Hot site).
   - *Phase 5 Approach (`DRAFT-D2-012`):* Incorporates NIST SP 800-34 corrected definitions: evaluates a Cold Site providing physical facility infrastructure (power, cooling, raised floors, telecom) without installed server hardware, optimized for a 5-day RTO and lowest recurring lease cost.
3. **Disaster Recovery Testing:**
   - *Legacy Approach (e.g., Q107, Q197, Q417):* Categorizes test names (tabletop vs full interruption).
   - *Phase 5 Approach (`DRAFT-D2-013`):* Evaluates an audit finding where an IT manager presents 100% successful daily backup logs, requiring the candidate to identify that backup write logs do not validate data restorability or plan execution without restore tests.
4. **Security Measurement (2026 Objective 2.4):**
   - *Legacy Approach:* Zero questions on MTTD, MTTR, patch velocity vs compliance, KRIs vs KPIs, vanity metrics, or stakeholder communication formats.
   - *Phase 5 Approach (`DRAFT-D2-020` to `026`):* Comprehensive, state-of-the-art 2026 curriculum assessment with zero legacy precedence.

---

### 5. Final Assessment

All 26 Phase 5 draft questions are confirmed to be **semantically unique, psychometrically robust, and non-duplicative** across all project question banks.
