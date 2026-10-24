# Rejected and Deferred Opportunity Register
## Domain 2: Security Governance — ISC2 Certified in Cybersecurity (CC) 2026 Outline

> **Document Status:** Authoritative Quality-Gate Audit & Scope Boundary Record  
> **Phase:** Phase 4 — Quality-First Question Opportunity Planning  
> **Target Audience:** Quality Assurance Auditors, Curriculum Leads, Content Reviewers  
> **Exam Version:** ISC2 CC Updated 2026 Exam Outline (Domain 2 Weight: 17.3%)

---

## 1. Executive Summary & Quality Gate Principles

Quality-first question design requires equal discipline in **what is rejected** as in what is approved. A comprehensive practice question bank must never artificially inflate question counts by testing trivial facts, relying on unverified assumptions, incorporating out-of-scope trends, or utilizing unverified knowledge entries.

In accordance with the Phase 4 Quality Gate requirements, all proposed assessment topics were evaluated against the seven mandatory rejection criteria:
1. **Duplicate Reasoning:** Testing the exact same cognitive decision as another question.
2. **Trivial Factoid Testing:** Testing acronym spellings or rote definitions without applied educational value.
3. **Blocked / Quarantined Knowledge:** Depending on knowledge entries flagged as `QA_BLOCKED_QUARANTINE`.
4. **Unsupported Assumptions:** Requiring candidates to guess unspoken organizational policies or subjective preferences.
5. **No Defensible Answer:** Ambiguous scenarios where multiple answers are equally justifiable.
6. **Artificial Keyword Memorization:** Questions testing verbatim phrase recall from specific textbooks.
7. **Out-of-Scope Topics:** Content outside the official 2026 ISC2 CC Domain 2 examination outline.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        QUALITY GATE REJECTION & DEFERRAL SUMMARY                       │
├────────────────────────────────────────┬────────┬──────────────────────────────────────┤
│ Category                               │ Count  │ Action Taken                         │
├────────────────────────────────────────┼────────┼──────────────────────────────────────┤
│ Quarantined Baseline Entries           │ 2      │ Formally Blocked from Planning       │
│ Supplemental AI Topics                 │ 5      │ Excluded from Core Baseline          │
│ Out-of-Scope Technical / Hardware Gaps │ 2      │ Deferred to Other Domains            │
│ Legacy Incident Response Topics        │ 28     │ Deferred to Domain 5 Planning        │
│ Trivial Rote Recall & Acronym Items    │ 8      │ Permanently Rejected                 │
├────────────────────────────────────────┼────────┼──────────────────────────────────────┤
│ **Total Excluded / Deferred Scopes**   │ 45     │ Zero Contamination of Domain 2 Plan  │
└────────────────────────────────────────┴──────────────────────────────────────────────┘
```

---

## 2. Quarantined Baseline Knowledge Entries (Strictly Blocked)

In Phase 3.5, two canonical Domain 2 knowledge entries were quarantined due to irreconcilable statutory overreach and conflicting measurement units within the primary course materials. In accordance with strict quality-gate rules, **zero question opportunities were planned from these entries**.

### Record REJ-D2-01: Quarantined Entry KNOW-D2-028
- **Knowledge ID:** `KNOW-D2-028`
- **Canonical Concept Title:** Regulatory recovery claims and protected information
- **Official Objective:** 2.2 (Understand business continuity and disaster recovery concepts)
- **Quality Gate Reason:** `QA_BLOCKED_QUARANTINE`. Quarantined due to two distinct academic defects:
  1. *Statutory Overreach:* The lecture transcript asserted universal, identically named Disaster Recovery Plan (DRP) legal mandates under both HIPAA and GDPR. Authoritative legal verification confirms this is inaccurate: HIPAA contingency planning (45 CFR § 164.308(a)(7)) applies strictly to Covered Entities and Business Associates handling electronic Protected Health Information (ePHI); GDPR Article 32 mandates risk-appropriate technical and organizational measures to ensure ongoing resilience for personal data controllers/processors, without prescribing a universal, one-size-fits-all "DRP" template.
  2. *Acronym Expansion Error:* The primary transcript incorrectly expanded PHI as "Personal Health Information". Authoritative federal statutory definitions (45 CFR § 160.103) establish that PHI stands for **Protected Health Information**.
- **Pedagogical Assessment:** Authoring exam questions claiming that HIPAA or GDPR mandates universal DRPs for all organizations would test legally false propositions. Furthermore, questions based on flawed statutory terminology would undermine candidate preparation.
- **Resolution / Status:** **BLOCKED**. Exactly zero opportunities planned. Release is conditional on restricting regulatory contingency duties to bounded statutory scopes (HIPAA for ePHI, GDPR for EU personal data) and obtaining formal legal/academic sign-off.

### Record REJ-D2-02: Quarantined Entry KNOW-D2-054
- **Knowledge ID:** `KNOW-D2-054`
- **Canonical Concept Title:** Worked scorecard and unresolved vulnerability units
- **Official Objective:** 2.4 (Understand the purpose of security measurement and reporting)
- **Quality Gate Reason:** `QA_BLOCKED_QUARANTINE`. Quarantined due to an irreconcilable data unit contradiction in primary course materials: Slide S36 displays `Target: < 10` (unitless count) and `Actual: 12` (unitless count) for the vulnerability row of an executive scorecard, whereas the spoken transcript (T:L111) explicitly reads `less than 10 percent`.
- **Pedagogical Assessment:** Because this fundamental unit ambiguity (`< 10` count vs. `< 10%`) cannot be resolved without access to the original primary course deck or video recording, authoring mathematical, quantitative calculation, or target-versus-actual evaluation items based on this row would be psychometrically indefensible.
- **Resolution / Status:** **BLOCKED**. Exactly zero opportunities planned. Prohibited from mathematical calculation or scorecard evaluation items. General metric properties, patch rates, and reporting formats are evaluated via clean, unambiguous records (`KNOW-D2-043`, `046`, `047`, `048`, `051`, `052`) without relying on `KNOW-D2-054`.

---

## 3. Supplemental AI Gaps (Excluded from Core CC Baseline)

During Phase 2 and Phase 3, five supplemental AI-related governance topics were investigated (`D2-GAP01` to `D2-GAP05`). While artificial intelligence is a prominent cybersecurity trend, **it is not an explicit mandatory topic in the official ISC2 CC 2026 outline**. 

To maintain strict alignment with the certified curriculum and prevent speculative drift, all five supplemental AI topics are excluded from the core question opportunity plan.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                   SUPPLEMENTAL AI TOPIC EVALUATION & EXCLUSION REGISTER                │
├──────────┬─────────────────────────────────────┬─────────────────┬─────────────────────┤
│ Gap ID   │ Topic Title                         │ Curricular Exam │ Decision & Rationale│
│          │                                     │ Outline Status  │                     │
├──────────┼─────────────────────────────────────┼─────────────────┼─────────────────────┤
│ D2-GAP01 │ AI Acceptable Use Policy (AUP)      │ Not Mandated    │ EXCLUDED. General   │
│          │ Governance                          │ in CC 2026      │ AUP covered in 002. │
├──────────┼─────────────────────────────────────┼─────────────────┼─────────────────────┤
│ D2-GAP02 │ Generative AI & Deepfake Social     │ Supplemental    │ EXCLUDED. Core      │
│          │ Engineering Attack Vectors          │ Industry Trend  │ phishing in 014-016.│
├──────────┼─────────────────────────────────────┼─────────────────┼─────────────────────┤
│ D2-GAP03 │ Automated AI Predictive Security    │ Exceeds CC      │ EXCLUDED. Core      │
│          │ Risk Metrics                        │ Foundational    │ metrics in 020-025. │
├──────────┼─────────────────────────────────────┼─────────────────┼─────────────────────┤
│ D2-GAP04 │ Shadow AI & Unsanctioned SaaS       │ Supplemental    │ EXCLUDED. General   │
│          │ Governance Risks                    │ Industry Trend  │ cloud covered in D3.│
├──────────┼─────────────────────────────────────┼─────────────────┼─────────────────────┤
│ D2-GAP05 │ Ethical AI Governance & Algorithmic │ Advanced Ethics │ EXCLUDED. ISC2      │
│          │ Fairness / Bias Auditing            │ Beyond CC       │ Canons in Domain 1. │
└──────────┴─────────────────────────────────────┴─────────────────┴─────────────────────┘
```

- **Policy for Phase 5:** Supplemental AI questions may be developed in the future as an optional "Emerging Tech / Special Topics" module, but will NOT be included in the certified ISC2 CC 2026 Domain 2 practice bank.

---

## 4. Out-of-Scope Technical & Hardware Concepts (Deferred)

Two infrastructure topics identified during source extraction have been evaluated and formally deferred:

### Record REJ-D2-03: Hardware RAID vs. Software Striping (`D2-GAP06`)
- **Concept:** Detailed comparison of hardware RAID controllers versus OS-level software RAID parity striping.
- **Reason for Rejection:** Highly specialized systems administration and storage engineering topic. It does not assess security governance, policy, or risk decision-making.
- **Resolution:** **DEFERRED to Domain 3 (Network and System Infrastructure)**.

### Record REJ-D2-04: Data Center Physical Facilities & Fire Suppression (`D2-GAP07`)
- **Concept:** Clean-agent fire suppression chemistries (FM-200, Novec 1230), wet-pipe vs. dry-pipe sprinkler systems, and raised flooring airflow.
- **Reason for Rejection:** Physical environmental security engineering topic. In the 2026 outline, physical facility controls are addressed in Domain 1 (Physical Security concepts) and Domain 3, not Domain 2 Governance.
- **Resolution:** **REJECTED from Domain 2**. Physical security hygiene is addressed strictly through the lens of human behavior (`OPP-D2-018: Clean Desk & Shoulder Surfing Prevention`).

---

## 5. Legacy Incident Response Concepts (Deferred to Domain 5)

An audit of the 65 legacy Domain 2 questions revealed that **28 questions** (IDs 115–124, 140–148, 155–164) evaluate technical Incident Response:
- Forensic disk imaging and write-blockers.
- Chain of custody forms and digital evidence admissibility.
- Tactical containment (network cable disconnection, port isolation).
- Incident eradication and malware sandbox analysis.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CURRICULAR REALIGNMENT: INCIDENT RESPONSE                       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ • Pre-2026 Practice Bank: Grouped IR, BCP, and DRP together into Domain 2.             │
│ • Official 2026 Outline: Realocated Incident Response to Domain 5 (Security Ops).     │
│ • Phase 4 Action: 100% of technical IR questions are excluded from Domain 2 and       │
│   deferred to Domain 5 Question Planning.                                              │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Pedagogical Boundary:** In Domain 2, the only incident-related concept assessed is the end-user's duty to **Recognize and Report** suspicious events (`OPP-D2-019`) and executive crisis communication protocols (`OPP-D2-013`). Hands-on incident containment, forensics, and technical triage are strictly deferred to Domain 5.

---

## 6. Permanently Rejected Trivial & Defective Opportunity Concepts

Eight specific question concepts were proposed during preliminary brainstorming and permanently rejected due to lack of educational value or psychometric defect:

| Rejection ID | Proposed Concept | Pedagogical Defect & Rejection Rationale |
| :--- | :--- | :--- |
| **REJ-TRIV-01** | Acronym Memorization (e.g., spelling out "GRC", "BIA", "ISMS") | **Pure Rote Recall:** Tests spelling rather than understanding of organizational function. Completely devoid of educational value. |
| **REJ-TRIV-02** | Qualitative Matrix Color Coding (e.g., "What color is a Medium risk on a standard heat map?") | **Subjective & Artificial:** Color coding (red/yellow/green) is an organizational display preference, not an international standard requirement. |
| **REJ-TRIV-03** | Verbatim ISO 27001 Clause Numbers (e.g., "Which clause in ISO 27001 covers Leadership?") | **Trivia Memorization:** Certified in Cybersecurity candidates are entry-level practitioners; testing clause numbering rather than ISMS intent is inappropriate. |
| **REJ-TRIV-04** | Offsite Storage Transit Distances (e.g., "Exactly how many miles away must a cold site be located?") | **Unsupportable Assumption:** Ideal geographic distance depends entirely on local threat profiles (floodplains, fault lines, power grids) and cannot be stated as a universal dogmatic number. |
| **REJ-TRIV-05** | Phishing Click-Rate Target Percentages (e.g., "What is the acceptable industry failure rate for a phishing drill?") | **Arbitrary Target:** Industry benchmarks vary widely by sector and drill difficulty; has no universally defensible single answer. |
| **REJ-TRIV-06** | Hardware MTBF Calculations (e.g., calculating Mean Time Between Failures for hard drive spindles) | **Engineering Math Out of Scope:** MTBF component reliability is hardware engineering, not foundational governance. MTTD and MTTR are the appropriate governance metrics. |
| **REJ-TRIV-07** | Commercial Vendor Tool Selection (e.g., choosing between ServiceNow, Jira Service Desk, or Archer GRC) | **Vendor Specificity:** Certification exams are vendor-neutral. Questions must never test commercial software packages. |
| **REJ-TRIV-08** | Legacy Comedic Scenarios (e.g., scenarios involving "corporate fires", "buying pizza for the DR team") | **Unprofessional & Defective Distractors:** Destroys item face validity and psychometric integrity. |

---

## 7. Summary & Quality Gate Conclusion

By enforcing these strict quality boundaries, Phase 4 has:
1. Eliminated 45 ungrounded, trivial, or misaligned topics before authoring begins.
2. Protected the question bank from speculative AI topics and infrastructure drift.
3. Preserved strict curricular separation between Domain 2 Governance and Domain 5 Operations.
4. Guaranteed that every one of the **26 approved question opportunities** in `question-opportunity-register.md` represents a legitimate, defensible, high-value assessment of core cybersecurity governance principles.
