---
id: d2-phase3-terminology-qa
domain_id: 2
domain_name: Security Governance
phase: 3
document_role: terminology-glossary-quality-assurance
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01 (DOMAIN 2.txt) and D2-S01..D2-S38; audit-local IDs from Phase 1 inventory"
total_glossary_records: 73
term_pass_count: 56
term_revision_required_count: 9
term_blocked_count: 5
term_deferred_count: 3
---

# Domain 2 — Terminology Glossary Academic QA Report

## 1. Executive Summary & Review Scope

This report documents the record-by-record academic and linguistic evaluation of all **73 glossary entries** established in `content/isc2-cc-2026/sources/domain-2/extracted-knowledge/terminology-glossary.md` for **Domain 2: Security Governance (17.3%)**.

The glossary entries fall into three structural tiers:
1. **Core Concept Terms (`D2-G001` through `D2-G051`)**: 51 terms tied directly to canonical concepts (`KNOW-D2-001` through `KNOW-D2-053`).
2. **Supporting Acronyms and Operational Labels (`D2-G052` through `D2-G068`)**: 17 terms reflecting roles, technologies, frameworks, and legal instruments cited in course slides or spoken commentary.
3. **Supplemental / Boundary Terms (`D2-G069` through `D2-G073`)**: 5 terms addressing curricular gaps, modern measurement taxonomy, and official ISC2 2026 AI context absent from the primary lecture.

### Evaluation Criteria:
- **Technical Accuracy**: Definition conforms to accepted cybersecurity lexicons (NIST CSRC, ISO/IEC 27000, ISC2 CC outline).
- **Acronym Expansions**: Verifiable expansions from authoritative bodies (NIST, ISO, ISACA, HHS, European Commission).
- **Caption Normalization**: Discrepancies between transcript audio captions and visible slide text are formally resolved and justified.
- **Bilingual & Semantic Equivalence**: Thai definitions convey exact operational meaning without English semantic drift.
- **QA Decision Tiers**:
  - `TERM_PASS`: Verified and ready for future production vocabulary integration.
  - `TERM_REVISION_REQUIRED`: Conceptually sound, but requires definition refinement, boundary constraints, or typo correction.
  - `TERM_BLOCKED`: Contains inaccurate statutory expansions, unsupported causal claims, or unverified units.
  - `TERM_DEFERRED`: Mentioned only in passing or as background diagrams without instructional delivery; excluded from current bank.

---

## 2. Terminology Evaluation Ledger

### A. Core Concept Terms (`D2-G001` – `D2-G051`)

| Term ID | English Term | Acronym / Full Form | QA Decision | Academic & Bilingual Findings |
| :---: | :--- | :--- | :---: | :--- |
| `D2-G001` | Integrated GRC | GRC: Governance, Risk, and Compliance | **TERM_PASS** | Accurate integration of 3 functions; Thai equivalent is precise. |
| `D2-G002` | Governance | -: Not an acronym | **TERM_PASS** | Clear oversight/direction focus; distinct from technical execution. |
| `D2-G003` | Risk management | -: Not an acronym | **TERM_PASS** | Identifies/manages risk to objectives; accurate Thai alignment. |
| `D2-G004` | Compliance | -: Not an acronym | **TERM_PASS** | Bounded to applicable obligations (laws, regulations, contracts). |
| `D2-G005` | NIST CSF | CSF: Cybersecurity Framework | **TERM_PASS** | Voluntary risk reduction framework; distinguished from GRC software. |
| `D2-G006` | ISO/IEC 27001 | Numbered Standard | **TERM_PASS** | ISMS specification standard; slide S07 resolves caption corruption. |
| `D2-G007` | ISMS | Information Security Management System | **TERM_PASS** | Systematic management approach; accurate definition. |
| `D2-G008` | COBIT | Brand Name / Framework | **TERM_PASS** | Enterprise IT governance framework; corrects transcript "coit". |
| `D2-G009` | GRC software | -: Not an acronym | **TERM_PASS** | Software tooling to centralize compliance/risk; not policy itself. |
| `D2-G010` | Risk register | -: Not an acronym | **TERM_PASS** | Standard risk documentation log containing 9 canonical fields. |
| `D2-G011` | Risk ownership | -: Not an acronym | **TERM_PASS** | Person accountable for managing risk; context-specific assignment. |
| `D2-G012` | Risk treatment | -: Not an acronym | **TERM_PASS** | Mitigate, Avoid, Transfer, Accept; aligned with ISO 31000 / ISC2. |
| `D2-G013` | Residual risk | -: Not an acronym | **TERM_REVISION_REQUIRED** | Risk remaining after controls; strike universal "never zero" claim. |
| `D2-G014` | Risk rating scales | -: Not an acronym | **TERM_REVISION_REQUIRED** | Reclassify 1-4 scale as ordinal/semi-quantitative, not quantitative. |
| `D2-G015` | Business Continuity | BC: Business Continuity | **TERM_PASS** | Enterprise-wide capability to sustain critical operations. |
| `D2-G016` | BCP | Business Continuity Plan | **TERM_PASS** | Documented strategies for operational continuity. |
| `D2-G017` | Disaster Recovery | DR: Disaster Recovery | **TERM_PASS** | Technical restoration of IT infrastructure, systems, and data. |
| `D2-G018` | DRP | Disaster Recovery Plan | **TERM_PASS** | Technical runbooks and procedures for IT recovery. |
| `D2-G019` | BIA | Business Impact Analysis | **TERM_PASS** | Identifies critical functions and sets recovery priorities. |
| `D2-G020` | RTO | Recovery Time Objective | **TERM_PASS** | Target maximum acceptable system downtime. |
| `D2-G021` | RPO | Recovery Point Objective | **TERM_PASS** | Maximum acceptable data loss measured in time. |
| `D2-G022` | Backup strategy | -: Not an acronym | **TERM_REVISION_REQUIRED** | Offsite/cloud backups; remove absolute "safe/effortless" claims. |
| `D2-G023` | Hot site | -: Not an acronym | **TERM_REVISION_REQUIRED** | Corrects "hard site" caption error; bound rapid cutover timing. |
| `D2-G024` | Warm site | -: Not an acronym | **TERM_REVISION_REQUIRED** | Repair transcript fragment; align with NIST SP 800-34 partial readiness. |
| `D2-G025` | Cold site | -: Not an acronym | **TERM_REVISION_REQUIRED** | Strike "no infrastructure"; has building/power/HVAC, lacks hardware. |
| `D2-G026` | DR testing | -: Not an acronym | **TERM_PASS** | Validating plans through functional walkthroughs and restore tests. |
| `D2-G027` | Security awareness | -: Not an acronym | **TERM_PASS** | Cognitive knowledge and recognition of security policies/risks. |
| `D2-G028` | Security culture | -: Not an acronym | **TERM_PASS** | Shared values, daily habits, and organizational behavioral mindset. |
| `D2-G029` | Security leadership | -: Not an acronym | **TERM_PASS** | Executive tone, resource commitment, and modeling compliance. |
| `D2-G030` | Social engineering | -: Not an acronym | **TERM_PASS** | Psychological manipulation to induce disclosure or harmful action. |
| `D2-G031` | Phishing | -: Not an acronym | **TERM_PASS** | Mass deceptive communications via email/web. |
| `D2-G032` | Spear phishing | -: Not an acronym | **TERM_PASS** | Targeted phishing tailored to specific individuals or organizations. |
| `D2-G033` | Whaling | -: Not an acronym | **TERM_PASS** | Spear phishing targeting high-profile C-suite executives. |
| `D2-G034` | Vishing | Voice Phishing | **TERM_PASS** | Phone/voice-based social engineering; slide S25 confirms spelling. |
| `D2-G035` | Smishing | SMS Phishing | **TERM_PASS** | Text message/cellular social engineering. |
| `D2-G036` | Pretexting | -: Not an acronym | **TERM_PASS** | Fabricating an invented scenario/story to deceive victims. |
| `D2-G037` | Password hygiene | -: Not an acronym | **TERM_PASS** | Long unique passwords, enterprise password managers, MFA. |
| `D2-G038` | Credential protection | -: Not an acronym | **TERM_PASS** | Enterprise controls protecting identity repositories and MFA tokens. |
| `D2-G039` | Reporting activity | -: Not an acronym | **TERM_PASS** | Employee duty to recognize and report rather than investigate. |
| `D2-G040` | Security measurement | -: Not an acronym | **TERM_PASS** | Evaluating performance against business objectives (NIST 800-55). |
| `D2-G041` | Security metric | -: Not an acronym | **TERM_PASS** | Measurable value evaluating security process, control, or posture. |
| `D2-G042` | MTTD | Mean Time to Detect | **TERM_REVISION_REQUIRED** | Average elapsed time to detect; require incident start boundaries. |
| `D2-G043` | MTTR (source) | Mean Time to Respond | **TERM_REVISION_REQUIRED** | Local course definition ("Respond"); note industry Repair variants. |
| `D2-G044` | Remediation metric | -: Not an acronym | **TERM_PASS** | Percentage of critical vulnerabilities patched within target timeframe. |
| `D2-G045` | Patch compliance | -: Not an acronym | **TERM_PASS** | Percentage of systems compliant with patching policy. |
| `D2-G046` | Training completion | -: Not an acronym | **TERM_PASS** | Percentage of employees completing awareness training. |
| `D2-G047` | KRI | Key Risk Indicator | **TERM_REVISION_REQUIRED** | Leading indicator of risk exposure; note phishing report ambiguity. |
| `D2-G048` | KPI | Key Performance Indicator | **TERM_PASS** | Metric evaluating progress toward operational objectives. |
| `D2-G049` | Dashboard | -: Not an acronym | **TERM_PASS** | Dynamic visual presentation interface for metrics and status. |
| `D2-G050` | Scorecard | -: Not an acronym | **TERM_PASS** | Structured comparison of actual values against predefined targets. |
| `D2-G051` | Cybersecurity report | -: Not an acronym | **TERM_PASS** | Formal communication of risk, compliance, and metrics to stakeholders. |

### B. Supporting Acronyms & Operational Labels (`D2-G052` – `D2-G068`)

| Term ID | Acronym / Label | Full Form Expansion | QA Decision | Academic & Normalization Findings |
| :---: | :--- | :--- | :---: | :--- |
| `D2-G052` | NIST | National Institute of Standards and Technology | **TERM_PASS** | Verified US federal standards agency; accurately expanded. |
| `D2-G053` | EDR | Endpoint Detection and Response | **TERM_PASS** | Advanced host security software; cited in ransomware scenario. |
| `D2-G054` | MFA | Multifactor Authentication | **TERM_PASS** | Authentication requiring 2+ distinct factors; standard ISC2 term. |
| `D2-G055` | SMS | Short Message Service | **TERM_PASS** | Standard telecommunications text protocol underpinning smishing. |
| `D2-G056` | CEO | Chief Executive Officer | **TERM_PASS** | Executive role cited in leadership modeling and whaling targets. |
| `D2-G057` | CFO | Chief Financial Officer | **TERM_PASS** | Executive role cited in financial authorization and whaling targets. |
| `D2-G058` | CISO | Chief Information Security Officer | **TERM_PASS** | Senior security executive; slide S25 confirms against typo "CESO". |
| `D2-G059` | ERP | Enterprise Resource Planning | **TERM_PASS** | Enterprise business software cited in 1-hour RTO scenario. |
| `D2-G060` | DB | Database | **TERM_PASS** | Standard shorthand in handwritten recovery timeline (slide S18). |
| `D2-G061` | GDPR | General Data Protection Regulation | **TERM_PASS** | Regulation (EU) 2016/679; full form verified. |
| `D2-G062` | HIPAA | Health Insurance Portability and Accountability Act | **TERM_PASS** | US Federal Law (Pub.L. 104-191); resolves caption error "HIPPA". |
| `D2-G063` | PII | Personally Identifiable Information | **TERM_PASS** | Information identifying an individual; standard US/ISC2 definition. |
| `D2-G064` | PHI | Protected Health Information | **TERM_PASS** | **CORRECTED**: HHS statutory term; overrides transcript "personal". |
| `D2-G065` | PCI DSS | Payment Card Industry Data Security Standard | **TERM_DEFERRED** | Diagram-only label in slide S07; no course teaching provided. |
| `D2-G066` | CMMC | Cybersecurity Maturity Model Certification | **TERM_DEFERRED** | Diagram-only label in slide S07; no course teaching provided. |
| `D2-G067` | SOX | Sarbanes-Oxley Act | **TERM_DEFERRED** | Left-clipped diagram label in slide S07; no instruction provided. |
| `D2-G068` | Risk appetite | -: Not an acronym | **TERM_PASS** | Amount and type of risk an organization is willing to pursue/retain. |

### C. Supplemental / Gap Records (`D2-G069` – `D2-G073`)

| Term ID | English Term | Expansion / Role | QA Decision | Supplemental & Boundary Findings |
| :---: | :--- | :--- | :---: | :--- |
| `D2-G069` | Semi-quantitative assessment | Representative-number scoring | **TERM_BLOCKED** | Retained as external taxonomy note (NIST SP 800-30); blocked from course-derived bank. |
| `D2-G070` | MTD | Maximum Tolerable Downtime | **TERM_BLOCKED** | External overarching business limit (NIST SP 800-34); blocked from course-derived bank. |
| `D2-G071` | AI | Artificial Intelligence | **TERM_BLOCKED** | Official 2026 outline context; course lacks instruction; blocked from course bank. |
| `D2-G072` | Model drift | Degradation of AI predictive ability | **TERM_BLOCKED** | Official 2026 AI continuity risk; absent from course; blocked from course bank. |
| `D2-G073` | AI-specific KRI | Leading indicator for AI model risk | **TERM_BLOCKED** | Official 2026 AI measurement; absent from course; blocked from course bank. |

---

## 3. Summary of Caption Normalizations

The following table documents and formally justifies all caption and transcription normalizations applied during Domain 2 QA:

| Raw Transcript Text | Slide Corroboration | Authoritative Source | Normalized Term | Academic Justification |
| :--- | :--- | :--- | :--- | :--- |
| `coit` (T:L21) | `COBIT` (S07) | ISACA COBIT 2019 | **COBIT** | Spoken pronunciation corrupted by speech-to-text; slide S07 displays clear brand typography. |
| Corrupted ISO string (T:L21) | `ISO/IEC 27001` (S07) | ISO/IEC 27001:2022 | **ISO/IEC 27001** | Transcript dropped the slash and organization prefix; slide S07 provides exact standard identifier. |
| `CESO` (T:L29) | `CISO` (S25) | NIST CSRC Glossary | **CISO** | Phonetic audio transcription error for Chief Information Security Officer. |
| `HIPPA` (T:L51) | `HIPAA` (S17) | US HHS (45 CFR) | **HIPAA** | Common phonetic spelling error (double P instead of double A); slide S17 confirms statutory acronym. |
| `personal health info` (T:L51) | `PHI` (S17) | 45 CFR § 160.103 | **Protected Health Information** | Transcript spoke incorrect colloquial expansion ("personal"); HIPAA statute mandates "Protected". |
| `hard site` (T:L63) | `Hot Site` (S18) | NIST SP 800-34 Rev. 1 | **Hot Site** | Audio transcription misinterpretation of instructor's pronunciation of "hot". |
| `fishing` (T:L87) | `Vishing` (S25) | CISA / Canadian CCCS | **Vishing** | Transcript repeatedly recorded "fishing" for both phishing and vishing; slide S25 confirms "Vishing". |
| `paged / unpaged` (T:L101-103)| `patched / unpatched` (S31-33)| NIST SP 800-40 Rev. 4 | **patched / unpatched** | Transcription software misheard "patched" as "paged" throughout the vulnerability section. |

---

## 4. Glossary Decisions Summary

- **Total Records Evaluated**: 73
- **`TERM_PASS`**: 56 records (76.7%)
- **`TERM_REVISION_REQUIRED`**: 9 records (12.3%) — (`D2-G013`, `D2-G014`, `D2-G022`, `D2-G023`, `D2-G024`, `D2-G025`, `D2-G042`, `D2-G043`, `D2-G047`)
- **`TERM_BLOCKED`**: 5 records (6.8%) — (`D2-G069` through `D2-G073`, strictly preserved as supplemental gap records, blocked from primary course bank)
- **`TERM_DEFERRED`**: 3 records (4.1%) — (`D2-G065` PCI DSS, `D2-G066` CMMC, `D2-G067` SOX)
