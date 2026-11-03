# Domain 5 — Comprehensive Source-to-Reading Traceability Matrix

**Date:** 2026-11-03  
**Domain:** ISC2 Certified in Cybersecurity (CC) — Domain 5: Security Operations  
**Weight:** 17.3% (Effective September 1, 2026)  
**Primary Source Materials:**
1. `ISC2 Update 2026/Domain 5/D5 sum.md` (791 lines, 48.6 KB)
2. `ISC2 Update 2026/Domain 5/Domain 5.md` (1,231 lines, 49.5 KB)
3. `ISC2 Update 2026/Domain 5/DOMAIN 5.txt` (114 paragraphs / video transcript)
4. Official ISC2 CC 2026 Exam Outline (effective September 1, 2026)

**Target Implementation:** `content/isc2-cc-2026/reading/domain-5.md`  
**Status:** **Domain 5 Reading Notes Content Complete — Pending Human Acceptance**

---

## 1. Granular Source-to-Reading Concept Traceability

Status definitions:
- **FULLY COVERED:** Fully explained with complete definitions, context, operational mechanics, and examples.
- **CONSOLIDATED:** Grouped logically into an integrated comparative table or structured section to avoid fragmentation.
- **CORRECTED:** Updated to rectify technical inaccuracies, obsolete algorithms, or misleading distractor claims in source materials.
- **EXCLUDED WITH JUSTIFICATION:** Deliberately set aside with explicit pedagogical justification (e.g. non-examinable vendor marketing or duplicate filler).
- **PARTIALLY COVERED / UNRESOLVED:** Any concept with remaining ambiguity (none in final delivery).

| # | Source File | Original Heading | Source Location | Concept / Key Topic | Relevant Objective | Destination Reading Subsection | Coverage Status | Academic Clarification / Resolution |
|:---:|:---|:---|:---|:---|:---:|:---|:---:|:---|
| 1 | `Domain 5.md` | 1. ภาพรวม Domain 5 และวิธีคิด | Lines 35–48 | Protect $\rightarrow$ Observe $\rightarrow$ Analyze $\rightarrow$ Respond $\rightarrow$ Improve lifecycle | 5.0 Overview | `reading-lead` & Intro | **FULLY COVERED** | Established overarching mental model for Domain 5. |
| 2 | `Domain 5.md` | 2.1 เป้าหมายของ Cryptography | Lines 55–63 | CIA + Authentication + Non-repudiation in Cryptography | 5.1 | `topic-5-1-cryptography-symmetric-asymmetric` | **FULLY COVERED** | Mapped cryptographic algorithms directly to CIA triad outcomes. |
| 3 | `Domain 5.md` | 2.2 Encryption: Plaintext $\rightarrow$ Ciphertext | Lines 64–71 | Plaintext, Ciphertext, Algorithm, Key role; Stolen laptop scenario | 5.1 | `topic-5-1-cryptography-symmetric-asymmetric` | **FULLY COVERED** | Stolen laptop scenario used to illustrate data at rest protection. |
| 4 | `Domain 5.md` | 2.3 Symmetric Encryption | Lines 72–79 | Shared secret key, fast bulk data, AES, FDE BitLocker | 5.1 | `topic-5-1-cryptography-symmetric-asymmetric` | **FULLY COVERED** | Emphasized key distribution challenge and AES as modern standard. |
| 5 | `Domain 5.md` | 2.4 Asymmetric Cryptography | Lines 80–88 | Key pairs (Public/Private), RSA, ECC, Key agreement ECDH | 5.1 | `topic-5-1-cryptography-symmetric-asymmetric` | **FULLY COVERED** | Differentiated asymmetric encryption from digital signature signing. |
| 6 | `D5 sum.md` | 2. Encryption | Lines 15–40 | Hybrid Encryption (Symmetric speed + Asymmetric key exchange) | 5.1 | `topic-5-1-cryptography-symmetric-asymmetric` | **FULLY COVERED** | Documented session key generation and SSL/TLS hybrid model. |
| 7 | `Domain 5.md` | 2.5 Hashing | Lines 89–103 | 5 Hash Properties: Deterministic, Preimage, 2nd Preimage, Collision, Avalanche | 5.1 | `topic-5-1-hashing-digital-signatures` | **CORRECTED** | Expanded to 5 formal mathematical properties; MD5/SHA-1 deprecated. |
| 8 | `Domain 5.md` | 2.5 Hashing | Lines 101–103 | Password Hashing (Argon2id, bcrypt, PBKDF2) vs SHA-256 + Salt | 5.1 | `topic-5-1-hashing-digital-signatures` | **FULLY COVERED** | Clarified why fast hashes are vulnerable and how Salt defeats Rainbow Tables. |
| 9 | `Domain 5.md` | 2.6 Digital Signature | Lines 104–109 | Hash encrypted with Sender's Private Key; Verified by Public Key | 5.1 | `topic-5-1-hashing-digital-signatures` | **FULLY COVERED** | Reconciled that digital signatures provide Integrity + Non-repudiation, NOT secrecy. |
| 10 | `Domain 5.md` | 2.7 HSM — Hardware Security Module | Lines 110–115 | Dedicated tamper-evident hardware for key generation, storage, and execution | 5.1 | `topic-5-1-tpm-vs-hsm` | **FULLY COVERED** | Contrasted enterprise HSM (FIPS 140-2 Level 3/4) with motherboard TPM. |
| 11 | `D5 sum.md` | Part 1 Overview | Lines 7–14 | Data Handling, Classification, Labeling, Masking | 5.1 | `topic-5-1-data-handling-classification`, `topic-5-1-data-masking-obfuscation` | **FULLY COVERED** | 4-tier classification scheme (Public, Internal, Confidential, Restricted). |
| 12 | `Domain 5.md` | 3.10 DLP | Lines 205–214 | Data States: At Rest, In Transit, In Use and controls | 5.1 | `topic-5-1-data-states-controls` | **FULLY COVERED** | At rest (AES-256, FDE), In transit (TLS 1.3, IPsec), In use (Secure enclaves). |
| 13 | `D5 sum.md` | 29. Asset Lifecycle | Lines 480–505 | NIST SP 800-88 Rev 1 Data Sanitization: Clear, Purge, Destroy | 5.1 & 5.4 | `topic-5-1-data-sanitization-destruction` | **CORRECTED** | Clear (logical rewrite), Purge (degauss/secure erase), Destroy (physical shred). |
| 14 | `Domain 5.md` | 3.1 Logging vs Monitoring | Lines 129–136 | Logging (record) vs Monitoring (observe & evaluate); 10:15 firewall burst case | 5.2 | `topic-5-2-logging-telemetry-audit` | **FULLY COVERED** | Integrated 10:15 firewall log vs 60s burst monitoring example. |
| 15 | `Domain 5.md` | 3.2 แหล่ง Log ที่ควรรู้ | Lines 137–147 | 6 Log Sources: Auth, OS, App, Network, Endpoint, Cloud; Mandatory attributes | 5.2 | `topic-5-2-logging-telemetry-audit` | **FULLY COVERED** | Added 6 log sources inventory and NTP synchronization requirement. |
| 16 | `Domain 5.md` | 3.3–3.6 Logging Stages | Lines 148–175 | Log Aggregation, Alerting, Reporting, Archiving (WORM & Dwell Time) | 5.2 | `topic-5-2-logging-telemetry-audit` | **FULLY COVERED** | 3-month retrospective investigation case study included. |
| 17 | `Domain 5.md` | 3.7 Agent-Based vs Agentless | Lines 176–188 | Agent-based (deep telemetry, maintenance) vs Agentless (SNMP, API, remote) | 5.2 | `topic-5-2-monitoring-siem-correlation` | **FULLY COVERED** | Comparison table included. |
| 18 | `Domain 5.md` | 3.8 SIEM | Lines 189–198 | Log collection, normalization, correlation, alerting, SOC investigation | 5.2 | `topic-5-2-monitoring-siem-correlation` | **FULLY COVERED** | Emphasized that SIEM is not automatic prevention; requires analysts. |
| 19 | `Domain 5.md` | 3.9 Antivirus & EDR | Lines 199–204 | Signature, Heuristic, Behavioral analysis; Quarantine vs remediation | 5.2 | `topic-5-2-edr-antivirus` | **FULLY COVERED** | Quarantine isolates file but does not guarantee host is clean. |
| 20 | `Domain 5.md` | 3.10 DLP | Lines 205–214 | Endpoint DLP, Network DLP, Cloud DLP; preventing unauthorized exfiltration | 5.2 | `topic-5-2-dlp-controls` | **FULLY COVERED** | Pattern matching, regex, and USB blocking controls detailed. |
| 21 | `Domain 5.md` | 3.11 SNMP Trap | Lines 215–221 | SNMP Trap (unsolicited push alert) vs Polling (pull request); UDP 162 | 5.2 | `topic-5-2-snmp-traps-network-monitoring` | **FULLY COVERED** | Contrasted Trap push notification with scheduled Polling. |
| 22 | `Domain 5.md` | 4.1 Event, Alert, Incident | Lines 225–232 | Observable event vs Suspicious alert vs Adverse impact incident | 5.2 & 5.3 | `topic-5-2-alert-triage-prioritization`, `topic-5-3-ir-goals-terminology` | **FULLY COVERED** | Clear exam distinction connecting login $\rightarrow$ alert $\rightarrow$ breach. |
| 23 | `Domain 5.md` | 4.2 Security Event Triage | Lines 233–246 | Prioritizing alerts, assessing scope, evaluating criticality, escalation | 5.2 | `topic-5-2-alert-triage-prioritization` | **FULLY COVERED** | 6 triage questions for SOC analyst workflow. |
| 24 | `Domain 5.md` | 4.3 True/False Positive/Negative | Lines 247–256 | 2x2 matrix: Alert Fatigue (False Positive) vs Worst Nightmare (False Negative) | 5.2 | `topic-5-2-alert-triage-prioritization` | **FULLY COVERED** | Highlighted False Negative as the most dangerous operational failure. |
| 25 | `Domain 5.md` | 4.4 Prioritization | Lines 257–272 | Risk Matrix P1 to P5 (Impact vs Urgency); Severity = Likelihood x Impact | 5.2 | `topic-5-2-alert-triage-prioritization` | **FULLY COVERED** | Table connecting P1 Domain Admin alert vs P5 lab server scan. |
| 26 | `Domain 5.md` | 4.5 Event Correlation | Lines 273–288 | 5-step sequence: Failed Logins $\rightarrow$ Success $\rightarrow$ Priv Esc $\rightarrow$ Sensitive File $\rightarrow$ Incident | 5.2 | `topic-5-2-alert-triage-prioritization` | **FULLY COVERED** | Step-by-step SIEM correlation narrative. |
| 27 | `Domain 5.md` | 4.6 ตัวอย่าง Use Cases | Lines 289–297 | 6 SOC Use Cases: Impossible Travel, Brute Force, Priv Abuse, Exfiltration, etc. | 5.2 | `topic-5-2-alert-triage-prioritization` | **FULLY COVERED** | Impossible travel with corporate VPN false positive caveat. |
| 28 | `Domain 5.md` | 5.1 Threat Actor | Lines 302–316 | Nation-State (APT), Cybercriminals, Hacktivists, Insiders, Script Kiddies | 5.2 | `topic-5-2-threat-actors-motivations` | **FULLY COVERED** | Highlighted that Insider Threat includes accidental/negligent employees. |
| 29 | `Domain 5.md` | 5.2 Cyber Threat Intelligence | Lines 317–332 | Strategic, Operational, Tactical CTI; 6 questions CTI answers | 5.2 | `topic-5-2-cti-iocs-pyramid` | **FULLY COVERED** | Raw data vs actionable intelligence distinction. |
| 30 | `Domain 5.md` | 5.3 Indicators of Compromise | Lines 333–347 | 5 IOC types: IP, Domain, URL, Hash, Registry Key; Threat hunting scenario | 5.2 | `topic-5-2-cti-iocs-pyramid` | **FULLY COVERED** | Dynamic IP reassignment and CDN shared IP caveats documented. |
| 31 | `Domain 5.md` | 5.4–5.5 MITRE ATT&CK | Lines 348–374 | Tactics = WHY (Goal); Techniques = HOW (Method); Procedures = WHAT (Execution) | 5.2 | `topic-5-2-mitre-attack-framework` | **FULLY COVERED** | Visual diagram `mitreAttackTacticTechnique` integrated. |
| 32 | `Domain 5.md` | 6.1–6.2 Incident Response | Lines 379–399 | IR definition, 4 goals, CSIRT team roles, reducing disruption & loss | 5.3 | `topic-5-3-ir-goals-terminology`, `topic-5-3-irp-roles-csirt` | **FULLY COVERED** | CSIRT interdisciplinary roles (Commander, Technical, Legal, PR, HR). |
| 33 | `Domain 5.md` | 6.3 IRP 6 ขั้นตอน | Lines 400–450 | NIST SP 800-61 / ISO 27035: Prep $\rightarrow$ Det/Ana $\rightarrow$ Cont $\rightarrow$ Erad $\rightarrow$ Rec $\rightarrow$ PIR | 5.3 | `topic-5-3-irp-lifecycle-phases` | **FULLY COVERED** | Visual diagram `irpLifecycle` integrated. |
| 34 | `Domain 5.md` | 6.4 เปรียบเทียบ 3 ขั้นตอน | Lines 451–459 | Exam verb triggers: Stop spread = Contain; Remove = Eradicate; Restore = Recover | 5.3 | `topic-5-3-irp-lifecycle-phases` | **FULLY COVERED** | Dedicated exam keywords table. |
| 35 | `Domain 5.md` | 6.5 สถานการณ์ Ransomware | Lines 460–472 | End-to-end Enterprise Ransomware case study across all 6 phases | 5.3 | `topic-5-3-irp-lifecycle-phases` | **FULLY COVERED** | Detailed narrative covering email vector to post-incident review. |
| 36 | `D5 sum.md` | 24. Evidence Handling | Lines 380–415 | Order of Volatility (RFC 3227), Chain of Custody, Forensic Bit-stream Image | 5.3 | `topic-5-3-evidence-handling-chain-of-custody` | **CORRECTED** | CPU/RAM first; Disk/Backups last. Write-blocker & SHA-256 mandatory. |
| 37 | `Domain 5.md` | 7.1–7.4 IR Exercises | Lines 477–524 | Tabletop Exercise (Discussion-based) vs Technical Testing (Hands-on) | 5.3 | `topic-5-3-ir-exercises-tabletop-simulation` | **FULLY COVERED** | Comparison table and 6 tabletop discussion questions included. |
| 38 | `Domain 5.md` | 8.1–8.3 Asset Lifecycle (ALM) | Lines 529–560 | 6 stages: Plan $\rightarrow$ Acquire $\rightarrow$ Deploy $\rightarrow$ Maintain $\rightarrow$ Monitor $\rightarrow$ Dispose; Asset inventory | 5.4 | `topic-5-4-asset-lifecycle-management` | **FULLY COVERED** | Diagram `assetLifecycleAndEol` integrated. |
| 39 | `Domain 5.md` | 9.1–9.3 EOL & Compensating | Lines 563–589 | EOL/EOS risks, lack of patches, Compensating Controls (Isolation, Segmentation, WAF) | 5.4 | `topic-5-4-eol-eos-compensating-controls` | **FULLY COVERED** | Compensating controls reduce exposure, do NOT eliminate the flaw. |
| 40 | `Domain 5.md` | 10.1–10.3 Configuration Mgmt | Lines 593–626 | Security Baselines (CIS Benchmarks, STIGs), Configuration Drift, Auditing | 5.4 | `topic-5-4-configuration-management-baselines` | **FULLY COVERED** | Drift detection and remediation workflow detailed. |
| 41 | `Domain 5.md` | 10.4 Patch Management | Lines 627–640 | 5-step process: Identify $\rightarrow$ Assess $\rightarrow$ Test $\rightarrow$ Deploy $\rightarrow$ Verify; Staging sandbox | 5.4 | `topic-5-4-patch-management-process` | **FULLY COVERED** | Balancing urgency with testing to avoid outages. |
| 42 | `Domain 5.md` | 11.1–11.3 Change Management | Lines 660–693 | 7-step RFC process, CAB approval, Rollback plan, Config vs Change Table | 5.4 | `topic-5-4-change-management-process` | **FULLY COVERED** | Full head-to-head Config Mgmt vs Change Mgmt comparison table. |
| 43 | `Domain 5.md` | 12.1–12.4 Security Teaming | Lines 698–737 | Blue Team (Defenders), Red Team (Attackers), Purple Team (Collaboration 5-step loop) | 5.5 | `topic-5-5-security-teaming` | **FULLY COVERED** | 5-step collaborative loop (Simulate $\rightarrow$ Observe $\rightarrow$ Gaps $\rightarrow$ Improve $\rightarrow$ Retest). |
| 44 | `Domain 5.md` | 13.1–13.2 Vulnerability Scanning | Lines 742–758 | Automated discovery of known weaknesses vs Authorized exploitation (Pentest) | 5.5 | `topic-5-5-vulnerability-assessment-pentest` | **FULLY COVERED** | RoE (Rules of Engagement) requirements highlighted. |
| 45 | `Domain 5.md` | 13.3–13.5 AppSec Testing | Lines 759–794 | SAST (White-box, Source Code, At Rest, Shift-Left) vs DAST (Black-box, Running App) | 5.5 | `topic-5-5-appsec-sast-dast` | **FULLY COVERED** | Comparison table and code vs runtime failure examples. |
| 46 | `Domain 5.md` | 13.6 Threat Modeling | Lines 795–812 | Design phase structured analysis; STRIDE model (Spoofing, Tampering, etc.) | 5.5 | `topic-5-5-threat-modeling-design` | **FULLY COVERED** | Linked STRIDE categories to CIA/AAA violations. |
| 47 | `Domain 5.md` | 14.1 Physical Pentest | Lines 817–826 | Testing physical boundaries, locks, mantraps, cameras, clean desk policy | 5.5 | `topic-5-5-physical-penetration-testing` | **FULLY COVERED** | Physical controls evaluation in server rooms and facilities. |
| 48 | `Domain 5.md` | 14.2–14.5 Social Engineering | Lines 827–863 | Phishing, Spear Phishing, Whaling, Tailgating/Mantraps, Impersonation | 5.5 | `topic-5-5-social-engineering-testing` | **FULLY COVERED** | Human vulnerability exploits and countermeasures compared. |
| 49 | `Domain 5.md` | 15. สถานการณ์บูรณาการแบบ SOC | Lines 865–938 | 5 Integrated Scenarios (A to E): Account Compromise, EOL Server, Firewall Drift, Web App, Purple Team | Review | `topic-5-review-scenarios` | **FULLY COVERED** | Added all 5 integrated scenarios with cross-domain analysis. |
| 50 | `Domain 5.md` | 16. ตารางเปรียบเทียบคำศัพท์ | Lines 941–966 | 20+ exam terminology comparison pairs | Review | `topic-5-review-scenarios` | **FULLY COVERED** | 12 Core Concept Distinction cards + fast lookup cues. |
| 51 | `Domain 5.md` | 17. คำถามฝึกคิดพร้อมเฉลย | Lines 969–1147 | 25 practice scenario questions Q1–Q25 | Review | `topic-5-review-scenarios` & `domain-5-scenarios.js` | **CONSOLIDATED** | 12 rich interactive scenario cards integrated in UI. |
| 52 | `Domain 5.md` | 18. Cheat Sheet ทบทวนก่อนสอบ | Lines 1150–1220 | One-Line Memory Cues, 5 Key Process Sequences, Top 10 Exam Takeaways | Review | `topic-5-review-scenarios` | **FULLY COVERED** | Complete pre-exam quick reference section integrated. |

---

## 2. Summary of Coverage Metrics

- **Total Source Concepts Inventoried:** 52
- **Fully Covered:** 49
- **Corrected & Fully Covered:** 2 (NIST SP 800-88 sanitization levels, Hash mathematical properties)
- **Consolidated into Interactive Components:** 1 (Q1–Q25 synthesized into 12 Grounded Scenarios)
- **Partially Covered:** 0
- **Unresolved:** 0
- **Overall Coverage Ratio:** **100% (52/52)**


---

# Learning Slides coverage addendum — 2026-11-03

The preceding Reading Notes matrix is preserved. This addendum independently maps the fourteen Domain 5 requirement bullets, including examples, to the new 11 lessons / 59 bilingual slides. Local slide numbers are not ISC2 requirement IDs.

|Official objective|Requirement paraphrase|Meaningful teaching destination|
|---|---|---|
|5.1|Data handling: classification, labeling, masking and sanitization|lesson-d5-01-data-handling|
|5.1|Encryption: symmetric, asymmetric, hashing and quantum-resistant cryptography|lesson-d5-02-cryptography|
|5.2|Logging and monitoring security events|lesson-d5-03-monitoring|
|5.2|Security event triage: use cases, prioritization and correlation|lesson-d5-04-event-triage|
|5.2|Threat actors: types and motivations|lesson-d5-05-threat-intelligence|
|5.2|Cyber threat intelligence|lesson-d5-05-threat-intelligence|
|5.2|Threat frameworks|lesson-d5-05-threat-intelligence|
|5.3|Data-handling policy applied while executing the IRP|lesson-d5-06-incident-response|
|5.3|IR exercises: testing and tabletop|lesson-d5-07-response-exercises|
|5.4|Asset lifecycle including EOL devices and software|lesson-d5-08-asset-lifecycle|
|5.4|Configuration and change management|lesson-d5-09-configuration-change|
|5.5|Readiness: blue, purple and red teaming|lesson-d5-10-security-testing|
|5.5|Application testing: scanning, static, dynamic and threat modeling|lesson-d5-10-security-testing|
|5.5|Physical testing: phishing, tailgating and impersonation|lesson-d5-11-physical-human-testing|

## Separate AI/application mapping

|Official guidance cluster|Destinations and treatment|
|---|---|
|AI-assisted SIEM, alert fatigue, CTI/framework triage, routine block versus human intervention|L03 S04/S06; L04 S01–S05; L05; L06 and L07 incident/exercise application|
|Security of AI workspace: public AI leakage, classification/masking/sanitization, encryption including quantum-resistant; lifecycle/config/change until EOL|L01 S02/S03/S05; L02 S07; L08 S01–S04; L09 S03/S04|
|Continuous readiness/application testing of AI-integrated defenses; phishing/tailgating and human boundaries|L10 S01/S02/S06; L11 S02–S04|

## Exact slide-to-source trace

### lesson-d5-01-data-handling

- `slide-d5-01-01-classification-labels` — S02–S04; transcript paragraphs 3–10; Domain 5.md §2; data-handling gap supplement
- `slide-d5-01-02-data-states` — S08–S10; transcript data-at-rest/transit/in-use; Domain 5.md §3.10; official AI workspace guidance
- `slide-d5-01-03-masking` — S05; transcript masking example corrected; D5 surm.md §19 supplement; official AI data-handling guidance
- `slide-d5-01-04-sanitization` — S06; transcript secure/cryptographic erase; NIST SP 800-88r2 supplementary correction
- `slide-d5-01-05-decision` — Original scenario from S02–S06 and official Domain 5 AI workspace guidance

### lesson-d5-02-cryptography

- `slide-d5-02-01-encryption-boundary` — S07; transcript encryption purpose corrected; Domain 5.md §§2.1–2.2; D5 surm.md §19
- `slide-d5-02-02-symmetric` — S11/S13/S21; Domain 5.md §2.3; D5 surm.md §19
- `slide-d5-02-03-asymmetric-roles` — S12–S16; transcript private-key signing analogy corrected; Domain 5.md §§2.4/2.6
- `slide-d5-02-04-hybrid` — S09/S13/S14; D5 surm.md §20; transcript TLS/RSA overgeneralization corrected
- `slide-d5-02-05-trusted-hashes` — S19–S22; Domain 5.md §2.5; D5 surm.md §19
- `slide-d5-02-06-signatures-custody` — S12/S17/S18; Domain 5.md §§2.6–2.7; D5 surm.md §§19–20
- `slide-d5-02-07-quantum-resistant` — Official 5.1 encryption bullet and AI workspace guidance; NIST FIPS 203 supplement; absent substantive source coverage
- `slide-d5-02-08-decision` — Original scenario based on S12/S19–S22; Domain 5.md §2.5–2.6

### lesson-d5-03-monitoring

- `slide-d5-03-01-record-observe` — S28–S30; Domain 5.md §§3.1–3.6
- `slide-d5-03-02-trustworthy-telemetry` — Domain 5.md §3.2; D5 surm.md §21
- `slide-d5-03-03-collection-retention` — S28–S30; Domain 5.md §§3.3–3.6
- `slide-d5-03-04-siem-chain` — S32/S37; D5 surm.md §§21–23; official AI SIEM guidance
- `slide-d5-03-05-coverage-tools` — S31–S33; Domain 5.md §§3.7–3.11
- `slide-d5-03-06-decision` — Original scenario; official Domain 5 AI monitoring and human intervention guidance

### lesson-d5-04-event-triage

- `slide-d5-04-01-event-alert-incident` — S34–S35; Domain 5.md §4.1; official AI automated-block distinction
- `slide-d5-04-02-use-cases` — S35; Domain 5.md §4.6; D5 surm.md §23
- `slide-d5-04-03-detection-errors` — Domain 5.md §4.3; D5 sum.md §15
- `slide-d5-04-04-priority-context` — S36; Domain 5.md §4.4; D5 surm.md §23
- `slide-d5-04-05-decision` — S37; Domain 5.md §4.5; original scenario

### lesson-d5-05-threat-intelligence

- `slide-d5-05-01-actor-motivations` — S38–S39; Domain 5.md §5.1
- `slide-d5-05-02-insider-uncertainty` — S38–S39; D5 surm.md §26; official AI workspace application
- `slide-d5-05-03-intelligence-context` — S40–S41; Domain 5.md §§5.2–5.3; D5 surm.md §24
- `slide-d5-05-04-attack-framework` — S42–S44; Domain 5.md §§5.4–5.5; MITRE ATT&CK
- `slide-d5-05-05-decision` — Original scenario from S40–S41; D5 surm.md §24

### lesson-d5-06-incident-response

- `slide-d5-06-01-irp-authority` — S45–S48; Domain 5.md §6; official 5.3
- `slide-d5-06-02-prepare` — S48; Domain 5.md §6.3 Preparation; NIST SP 800-61r3
- `slide-d5-06-03-detection-evidence` — S48; Domain 5.md §6.3 Detection; D5 surm.md §26
- `slide-d5-06-04-contain-eradicate` — S46/S48; Domain 5.md §§6.3–6.5
- `slide-d5-06-05-recover-improve` — S46–S48; Domain 5.md §6.3 Recovery/Post-Incident
- `slide-d5-06-06-decision` — Original scenario from S46–S48; Domain 5.md §6.5

### lesson-d5-07-response-exercises

- `slide-d5-07-01-tabletop` — S49–S50; Domain 5.md §§7.1–7.2
- `slide-d5-07-02-technical-validation` — S51; Domain 5.md §§7.3–7.4
- `slide-d5-07-03-exercise-improvement` — S49–S51; D5 surm.md §27; official AI exercises guidance
- `slide-d5-07-04-decision` — Original scenario from S50–S51

### lesson-d5-08-asset-lifecycle

- `slide-d5-08-01-inventory-ownership` — S52–S54; Domain 5.md §§8.1–8.2; official AI asset guidance
- `slide-d5-08-02-maintain-retire` — S54; Domain 5.md §8.3; D5 surm.md §28
- `slide-d5-08-03-eol-options` — S55–S56; Domain 5.md §9; D5 surm.md §29
- `slide-d5-08-04-decision` — Original scenario from S55–S56

### lesson-d5-09-configuration-change

- `slide-d5-09-01-baseline-drift` — S57–S58/S60–S61; Domain 5.md §10; NIST SP 800-128
- `slide-d5-09-02-patch-risk` — S59–S61; Domain 5.md §10.4; D5 surm.md §31
- `slide-d5-09-03-controlled-change` — S62–S64; Domain 5.md §11; NIST SP 800-128
- `slide-d5-09-04-emergency-rollback` — D5 surm.md §32; Domain 5.md §11.2 supplemental rollback
- `slide-d5-09-05-decision` — Original scenario from S57–S64

### lesson-d5-10-security-testing

- `slide-d5-10-01-team-roles` — S65–S68; Domain 5.md §12; NIST SP 800-115
- `slide-d5-10-02-purple-feedback` — S68–S69; D5 surm.md §33
- `slide-d5-10-03-scanning-limits` — S70; Domain 5.md §§13.1–13.2
- `slide-d5-10-04-static-dynamic` — S71–S73; Domain 5.md §§13.3–13.5
- `slide-d5-10-05-threat-model` — S74; Domain 5.md §13.6; D5 surm.md §34
- `slide-d5-10-06-ai-defense-testing` — Official Domain 5 AI continuous testing guidance; S65–S74 application
- `slide-d5-10-07-decision` — Original scenario from S71–S73; Domain 5.md §13.4

### lesson-d5-11-physical-human-testing

- `slide-d5-11-01-authorized-boundaries` — S75; Domain 5.md §14.1; NIST SP 800-115
- `slide-d5-11-02-phishing-test` — S76; Domain 5.md §14.2; official AI automated threats application
- `slide-d5-11-03-tailgating-impersonation` — S77–S78; Domain 5.md §§14.3–14.5
- `slide-d5-11-04-decision` — Original scenario from S75–S78; Domain 5.md §14
