# Domain 5 question-bank audit — Official objective coverage (B)

Audit date: 2026-11-03, Asia/Bangkok. Source codes and exact filenames: [inventory](domain-5-audit-source-inventory.md). Technical findings and R references: [academic findings](domain-5-audit-academic-findings.md).

## Verified authority and version

**Domain 5: Security Operations and Incident Response**, effective **September 1, 2026**. The English [official ISC2 PDF](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf) (R01), printed page 7 / PDF page index 6, supplies the objective text below. Its printed page 3 gives Domain 5 an average weight of 17.3%. There are five numbered objectives and fourteen unnumbered bullet groups. No identifiers such as “5.1.1” are official here.

The [ISC2 outline webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) also confirms the date and current domain table, but its introductory topic list still contains older domain titles. Use the dated PDF's domain pages for the numbered scope. The webpage's separate AI commentary is R02, not a new numbered objective or a replacement for the PDF.

## Exact objective titles and bullet-level scope

| Official identifier and title | Unnumbered bullet scope (paraphrased; canonical technical terms retained) |
|---|---|
| 5.1 Understand data security | Handling: classify, label, mask and sanitize data. Cryptography examples span shared-secret and public-key methods, hashing, and quantum-resistant approaches. |
| 5.2 Understand security operations | Capture and monitor events. Triage covers detection use cases, priority and correlation. Distinguish actor types/motivations; use cyber threat intelligence and structured threat frameworks. |
| 5.3 Understand Incident Response (IR) | Apply data-handling policy when implementing the IRP. Exercise response capabilities through testing and discussion-based tabletops. |
| 5.4 Understand asset protection | Manage the asset lifecycle, including EOL hardware/software; control configurations and changes. |
| 5.5 Understand security testing | Assess readiness through blue, purple and red activities; assess applications through vulnerability scanning, static/dynamic analysis and threat modeling; assess physical defenses with the outline's phishing, tailgating and impersonation examples. |

Objective titles are exact; the bullet descriptions above are paraphrases rather than a reproduced outline. The linked PDF p7 is the authority for exact bullet wording and examples. The placement of hashing under encryption is official organization, **not** a technical assertion that hashing is reversible encryption. The unusual data-policy phrasing and placement of phishing under physical testing must be checked directly there; reviewer interpretation must not silently substitute a different official requirement.

## Classification rules

**FULL**: substantive introductory teaching for the named topic and examples; does not imply every claim is correct or future questions are approved. **PARTIAL**: some substantive teaching but an explicit component or necessary condition is missing. **MISSING**: no substantive teaching found. **CONFLICTING**: evidence teaches incompatible or materially misleading interpretations needing resolution. **OUT OF SCOPE**: not justified as a Domain 5 assessment target by the verified scope; may be supporting background.

Whole-objective judgments below preserve important conflicts rather than averaging them away. External verification can establish a correction, but does not retroactively make the original course complete.

## Objective-level coverage matrix

| Objective | Required knowledge in practical terms | Local support | Completeness | Ambiguities / missing knowledge | Recommended assessment |
|---|---|---|---|---|---|
| 5.1 | Handle data appropriately; distinguish confidentiality, hashing and key roles; recognize quantum risk | T:3–79; N:51–124; S:22–174; I01–I22 | **PARTIAL**, with technical conflicts | PQC absent. Both summaries omit the handling unit present in T/I02–I06. Encryption purpose, signatures, hash properties and sanitization need qualification (F01–F08). | Classification/labeling; masking; safe retirement; key selection; trustworthy integrity check; foundational quantum risk, after curation |
| 5.2 | Collect and interpret evidence; prioritize potential incidents; use actor/context/intelligence/frameworks | T:79–137; N:127–373; S:176–501; I28–I44 | **CONFLICTING** | All five bullet groups taught, but intentional-actor definition contradicts accidental insider inclusion (I38/I39). Priority matrix is illustrative. IOC match is not proof. SIEM response capability depends on integrations. | Correlation from several sources, business-aware prioritization, false positive analysis, intelligence-supported investigation, tactics versus techniques |
| 5.3 | Execute a plan under data-handling policy; test response readiness | T:137–155; N:377–523; S:503–669; I45–I51 | **PARTIAL** | Good phases/exercises. No cohesive operational data-handling-policy unit: evidence access, approved sharing/storage, retention/legal holds and authorized decisions need curated support. Six-phase teaching is not an official required taxonomy. | Protect/share incident evidence under supplied policy; choose tabletop versus functional exercise; containment versus eradication/recovery under explicit authority |
| 5.4 | Maintain protected assets from acquisition to disposal; govern configurations and changes | T:155–195; N:527–692; S:671–870; I52–I64 | **CONFLICTING** | Broad substantive coverage. I58/T175 mischaracterize SP 800-128; I59 graphic and prose differ in ordering; T167's Windows 10 support example is time-sensitive. EOL labels are vendor-specific. | Interim EOL risk reduction, retirement/disposal distinction, baseline deviation, change authorization and verification |
| 5.5 | Distinguish readiness, application and physical testing purposes | T:195–225; N:696–861; S:872–1109; I65–I78 | **FULL** at introductory topic level | Authorized scope must be explicit. Methods overlap in flaws detected. Do not assert design-only threat modeling or that all phishing is physical intrusion. Individual capture I21 is not needed for testing coverage. | Red/blue/purple purposes; scanner limits; static versus running analysis; design threats; physical verification and authorized simulation |

## Bullet-level evidence and gap register

These labels are local descriptions, not additional official subobjective identifiers.

| Parent | Local bullet description | Status | Precise evidence and limitation |
|---|---|---|---|
| 5.1 | Handling and four named examples | FULL in T/slides; MISSING as a substantive unit in N/S | T:5–27; I02–I06. Masking does not ensure anonymity/authentication; CE conditions absent. |
| 5.1 | Cryptographic examples | PARTIAL / CONFLICTING | T:27–79, N:64–124, S:37–174, I07–I22: symmetric/asymmetric/hash present; quantum-resistant cryptography MISSING throughout. |
| 5.2 | Logging / monitoring | FULL | T:79–109, N:129–219, S:180–334, I28–I33. Retention duration must come from policy. |
| 5.2 | Triage, use cases, priority, correlation | FULL, qualified | T:109–125, N:225–295, S:336–415, I34–I37. Severity alone is insufficient; possible compromise is conditional. |
| 5.2 | Actor types / motivations | CONFLICTING | T:125–129; N:304–315; S:417–434; I38/I39. Motivation categories overlap; no attribution certainty from a single observation. |
| 5.2 | Threat intelligence | FULL | T:129–133, N:317–346, S:436–465, I40/I41. Preserve context and confidence. |
| 5.2 | Frameworks | FULL | T:133–137, N:348–373, S:467–501, I42–I44. ATT&CK example is not an exhaustive list of frameworks. |
| 5.3 | Data-policy implementation in IRP | PARTIAL | T:145–147; N:404–426, 471; S:529–558. Policy/tools/preparation and evidence mentions exist, but applied handling rules are underdeveloped. Do not classify as entirely absent. |
| 5.3 | Exercises | FULL | T:147–155, N:475–523, S:618–669, I49–I51. Discussion and technical validation have different outputs. |
| 5.4 | Lifecycle / EOL | FULL, qualified | T:155–169; N:527–587; S:671–756; I53–I56. Unsupported does not mean inoperable; temporary controls do not restore support. |
| 5.4 | Configuration / change | CONFLICTING | T:169–195; N:591–692; S:758–870; I57–I64. Reference misdescription and graphic ordering require correction. |
| 5.5 | Readiness / team roles | FULL | T:199–207; N:704–736; S:888–944; I66–I69. Purple is collaborative improvement, not a substitute for authorization. |
| 5.5 | Application testing | FULL | T:207–217; N:742–811; S:946–1031; I70–I74. SAST and DAST can find related flaw classes. |
| 5.5 | Physical / social-engineering test examples | FULL, qualified | T:217–225; N:815–861; S:1033–1109; I75–I78. Testing is authorized; phishing/impersonation can be nonphysical. |

## Separate official AI context (R02)

The webpage's Domain 5 AI section discusses AI-assisted SIEM correlation and alert fatigue; routine blocks versus escalations; leakage through public AI services; handling/encryption; AI asset maintenance and continuous security testing. These are **applications of 5.1–5.5**, not new objective IDs or evidence of internal item frequency. Local T:189–191 describes AI-assisted change assessment followed by human approval, but does not substantively teach the broader AI contexts. N/S do not fill that gap.

Reviewer recommendation: use a small number of existing blueprint slots for AI contexts after curation, especially masking sensitive data before approved AI use and human validation of automated triage. Do not add AI engineering, model-training mathematics, prompt-injection taxonomies or extra quotas by inference.

## Scope boundaries and readiness

I24–I27 (Domain 1 pages), standalone identification/authentication taxonomies, BC/DR recovery-site selection and broad governance-document recall are **OUT OF SCOPE as standalone Domain 5 targets**. Mention only as necessary context. TPM/HSM details, SGX/homomorphic mathematics, Diffie-Hellman arithmetic, vendor products, legal deadlines, algorithm parameter memorization and certification-module standards are supporting enrichment; no dedicated slots are justified without a clearer CC need.

Coverage is therefore **not complete or publication-ready**. The audit can be complete while accurately reporting incomplete teaching. Resolve F01–F21, curate the two major knowledge gaps, and approve the blueprint before drafting. No practice-item frequency or confidential exam content has been inferred.
