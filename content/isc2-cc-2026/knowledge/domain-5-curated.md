# Domain 5 curated knowledge foundation

Date2026-11-03. Separate from unchanged original sources and historical audit. Scope authority R01; external references verify facts, not exam frequency. English explanations below are curated reviewer synthesis, not verbatim standards. High confidence concerns limited introductory claims, not native-Thai or independent human sign-off.

## KNOW-D5-001 — Classification and labeling

**Objective:** 5.1; **family:** AT01; **status:** CURATED.

Classification assigns a category under the organization’s sensitivity scheme. Labeling communicates that category through a marking or metadata; neither operation by itself enforces access.

**Conditions / scope limits:** Supply the scheme and handling rule; category names are not universal.

**Misconceptions / assessed distinctions:** Label changes sensitivity; confidential always means all employees.

**Local evidence:** T:7-19; I03,I04. **Primary verification:** R01, R22.

## KNOW-D5-002 — Masking and approved use

**Objective:** 5.1; **family:** AT02; **status:** CURATED.

Masking hides or replaces selected values while retaining information needed for an authorized purpose. It does not inherently anonymize a dataset or authorize disclosure to another service.

**Conditions / scope limits:** State exactly which fields may be shared and with whom; public AI use is governed by policy.

**Misconceptions / assessed distinctions:** Last four digits authenticate; masked records always anonymous.

**Local evidence:** T:19-23; I05. **Primary verification:** R02, R22.

## KNOW-D5-003 — Sanitization and cryptographic erase

**Objective:** 5.1; **family:** AT03; **status:** CURATED.

Choose sanitization for the medium, sensitivity and reuse plan; ordinary deletion is not equivalent. Cryptographic erase depends on sound prior encryption and eliminating recoverable relevant key copies, followed by verification/validation.

**Conditions / scope limits:** Do not equate SSD with one mandatory method or physical damage with assured destruction; consider backups and escrow.

**Misconceptions / assessed distinctions:** Deleting a file or public key suffices; any damaged media is sanitized.

**Local evidence:** T:23-27; I06. **Primary verification:** R03.

## KNOW-D5-004 — Cryptographic functions and key roles

**Objective:** 5.1; **family:** AT04; **status:** CURATED.

Symmetric encryption is efficient for bulk protection. In public-key encryption the recipient’s public key protects content for the recipient’s private key; a signature is generated with the signer’s private key and verified with the matching trusted public key.

**Conditions / scope limits:** Encryption alone does not imply integrity/authenticity. Signing is not generically private-key encryption. TLS versions differ.

**Misconceptions / assessed distinctions:** Signer verification hides content; sharing private keys solves distribution.

**Local evidence:** T:27-55; I07,I11-I15. **Primary verification:** R04, R05, R17.

## KNOW-D5-005 — Trustworthy digest comparison

**Objective:** 5.1; **family:** AT05; **status:** CURATED.

A digest comparison can show whether a file matches a trusted reference; it does not by itself identify the person who changed it. Collision resistance means finding distinct matching inputs is infeasible, not that collisions cannot exist.

**Conditions / scope limits:** Reference digest must be authenticated; MD5 unsuitable when collision resistance is required; passwords need dedicated salted costed hashing.

**Misconceptions / assessed distinctions:** Hashing is reversible encryption; collision impossible; fast unsalted hash is sufficient for passwords.

**Local evidence:** N:90-102; S:101-140; I19-I22. **Primary verification:** R19, R18, R07.

## KNOW-D5-006 — Post-quantum foundations

**Objective:** 5.1; **family:** AT06; **status:** CURATED.

Quantum-resistant cryptography addresses attacks from quantum-capable adversaries against vulnerable cryptographic schemes. It includes key establishment and signature approaches usable on conventional computers.

**Conditions / scope limits:** Inventory vulnerable public-key dependencies, evaluate approved replacements and test migration; no prediction of quantum arrival or universal deadline.

**Misconceptions / assessed distinctions:** PQC requires quantum hardware; changing bulk AES alone replaces vulnerable public-key dependencies.

**Local evidence:** External supplementation for missing local unit (F07). **Primary verification:** R08, R01.

## KNOW-D5-007 — Logging, monitoring and aggregation

**Objective:** 5.2; **family:** AT07; **status:** CURATED.

Logging records occurrences; aggregation collects records from multiple sources; monitoring evaluates observations. A central repository without usable data or analysis is not assurance of detection.

**Conditions / scope limits:** Choose sources relevant to the question; protect timestamp/context and records; retain under policy, not an invented universal duration.

**Misconceptions / assessed distinctions:** Collecting logs means an analyst reviewed them; SIEM replaces every endpoint defense.

**Local evidence:** T:79-109; I28-I33. **Primary verification:** R23, R22.

## KNOW-D5-008 — Risk-aware triage

**Objective:** 5.2; **family:** AT08; **status:** CURATED.

Triage validates reports and prioritizes investigation or action using scope, likely impact, time sensitivity and resources. Organizational escalation and response authority determine permitted next actions.

**Conditions / scope limits:** State stage, evidence, impact and procedure; no universal P1 matrix or first action.

**Misconceptions / assessed distinctions:** Largest alert count first; automated label overrides business context.

**Local evidence:** T:109-125; I34-I36. **Primary verification:** R21.

## KNOW-D5-009 — Signals and actual incidents

**Objective:** 5.2; **family:** AT09; **status:** CURATED.

An event is an occurrence; an alert signals a condition to evaluate; an incident meets applicable incident criteria. A false positive is a benign condition flagged under the detector’s rule; a false negative is a relevant condition missed.

**Conditions / scope limits:** State ground truth and incident criteria. An incident need not wait for completed damage.

**Misconceptions / assessed distinctions:** No alert means no threat; every alert proves breach.

**Local evidence:** N:225-255; T:119-121. **Primary verification:** R21, R23.

## KNOW-D5-010 — Correlation and bounded inference

**Objective:** 5.2; **family:** AT10; **status:** CURATED.

Relate observations using relevant host, identity and time context to assess a possible pattern. Several correlated records may strengthen an inference without proving attribution or success.

**Conditions / scope limits:** Distinguish prevented routine attempts from evidence requiring human response; validate AI-derived explanations against source records.

**Misconceptions / assessed distinctions:** Correlation alone is proof; a routine block is automatically top priority.

**Local evidence:** I35,I37; N:275-295. **Primary verification:** R21, R02.

## KNOW-D5-011 — Actor motives and insider risk

**Objective:** 5.2; **family:** AT11; **status:** CURATED.

Actor categories suggest typical motivations, not certain identity from one technique. Insider threats can be intentional or unintentional; a deliberate theft should be distinguished from an accidental disclosure.

**Conditions / scope limits:** State intent and observed motivation explicitly; avoid assigning a nation-state from one indicator.

**Misconceptions / assessed distinctions:** All insiders malicious; motive uniquely proves attribution.

**Local evidence:** I38,I39; T:125-129. **Primary verification:** R24, R15.

## KNOW-D5-012 — Contextual threat intelligence

**Objective:** 5.2; **family:** AT12; **status:** CURATED.

CTI is analyzed threat information useful to a decision. Indicators such as addresses/hashes guide searches, but require time, relevance and confidence checks before disruptive action.

**Conditions / scope limits:** A shared or reassigned address can reduce confidence; preserve information-sharing constraints.

**Misconceptions / assessed distinctions:** A feed entry is proof of compromise; indicators remain reliable forever.

**Local evidence:** I40,I41; N:317-346. **Primary verification:** R15, R21.

## KNOW-D5-013 — Adversary behavior frameworks

**Objective:** 5.2; **family:** AT13; **status:** CURATED.

ATT&CK organizes observed adversary behaviors. Tactics express goals; techniques express methods. Mapping a behavior can support detection-gap analysis; the knowledge base does not block attacks itself.

**Conditions / scope limits:** No exhaustive tactic list or technique-ID recall; frameworks are aids rather than certainty.

**Misconceptions / assessed distinctions:** ATT&CK is SIEM; technique is motivation.

**Local evidence:** I42-I44; T:133-137. **Primary verification:** R09.

## KNOW-D5-014 — Policy-governed incident data

**Objective:** 5.3; **family:** AT14; **status:** CURATED.

Protect incident records’ confidentiality, integrity and provenance; restrict access to authorized personnel. Collect/retain data under evidence procedures and retention policy; share via designated channels with approved recipients.

**Conditions / scope limits:** Apply the policy supplied in the item; respect an explicit preservation hold. Formal forensic chain of custody is not claimed mandatory for every incident.

**Misconceptions / assessed distinctions:** IR permits unrestricted sharing; routine deletion overrides a hold; public tools can receive raw records.

**Local evidence:** N:406,414,426,471; supplemented from RS.AN-06/07. **Primary verification:** R21, R22.

## KNOW-D5-015 — Authorized containment

**Objective:** 5.3; **family:** AT15; **status:** CURATED.

Containment limits ongoing harm or spread. An authorized responder may isolate a system or restrict a compromised session under the playbook, balancing safety, evidence and business constraints.

**Conditions / scope limits:** Specify confirmed conditions, granted authority and safety constraints. No universal report/isolate/preserve-first rule.

**Misconceptions / assessed distinctions:** Wait for perfect attribution during authorized urgent containment; destroy artifacts to contain.

**Local evidence:** I46,I48; N:410-426. **Primary verification:** R21.

## KNOW-D5-016 — Eradication, recovery and learning

**Objective:** 5.3; **family:** AT16; **status:** CURATED.

Eradication addresses malicious components and causes. Recovery restores verified safe operation against recovery criteria; lessons learned feed improvements into controls, plans and training.

**Conditions / scope limits:** Restoring a copy is not proof persistence was removed. Stage labels are teaching aids, not a mandated NIST six-step taxonomy.

**Misconceptions / assessed distinctions:** Restoration fixes every cause; review replaces remediation.

**Local evidence:** N:428-450; I48,I49. **Primary verification:** R21.

## KNOW-D5-017 — Response exercises

**Objective:** 5.3; **family:** AT17; **status:** CURATED.

A tabletop discusses a simulated situation to test roles/decisions. Functional technical tests exercise actual capabilities in a controlled scope, such as isolating a test endpoint or routing an escalation.

**Conditions / scope limits:** Match the exercise to the capability; no changes to live systems are implied by discussion alone.

**Misconceptions / assessed distinctions:** Successful discussion proves technical function; written plan guarantees readiness.

**Local evidence:** I49-I51; N:491-523. **Primary verification:** R21, R14.

## KNOW-D5-018 — Asset lifecycle accountability

**Objective:** 5.4; **family:** AT18; **status:** CURATED.

Protect assets through planning, acquisition, deployment, maintenance, monitoring and secure retirement. Inventory and ownership support these activities; retirement from service is distinct from sanitizing/disposal.

**Conditions / scope limits:** Illustrative cycle labels/counts vary; final storage handling must be verified before release.

**Misconceptions / assessed distinctions:** Purchase inventory covers lifecycle; powered off means safe disposal.

**Local evidence:** I53,I54; N:531-559. **Primary verification:** R22, R11, R03.

## KNOW-D5-019 — Unsupported assets and residual risk

**Objective:** 5.4; **family:** AT19; **status:** CURATED.

If the vendor no longer supplies security fixes, new vulnerabilities may remain unpatched. If immediate replacement is infeasible, documented restricted access/segmentation/monitoring can reduce exposure while migration proceeds.

**Conditions / scope limits:** Use stated support facts rather than product-name assumptions. Temporary controls neither restore vendor support nor remove the flaw.

**Misconceptions / assessed distinctions:** Working device has no lifecycle risk; isolation makes unsupported software supported.

**Local evidence:** I55,I56; N:567-587. **Primary verification:** R11, R16.

## KNOW-D5-020 — Approved state versus observed drift

**Objective:** 5.4; **family:** AT20; **status:** CURATED.

Configuration management maintains approved system state and evaluates deviations. A baseline provides the reference; an approved exception or unrecorded legitimate change must be considered before declaring malice.

**Conditions / scope limits:** NIST800-128 is general system configuration guidance, not just a device benchmark. Reconcile evidence with authorization.

**Misconceptions / assessed distinctions:** Every deviation is malicious; change request alone updates actual settings.

**Local evidence:** I57,I58,I64; N:595-625. **Primary verification:** R11, R22.

## KNOW-D5-021 — Governed changes and verification

**Objective:** 5.4; **family:** AT21; **status:** CURATED.

Change control evaluates risk and authorizes implementation under the organization’s process. Patches require appropriate assessment/testing and verification of intended installation and service operation.

**Conditions / scope limits:** State completed steps and rollback/exception authority when asking NEXT; do not derive universal order from slide arrows.

**Misconceptions / assessed distinctions:** Automated deployment bypasses approval; install status proves operational success.

**Local evidence:** I59-I64; N:627-690. **Primary verification:** R11, R22.

## KNOW-D5-022 — Readiness team purposes

**Objective:** 5.5; **family:** AT22; **status:** CURATED.

Blue activities defend/detect/respond; red exercises simulate adversary behavior within authorization. Purple collaboration uses attack observations and defensive results to improve and retest detection.

**Conditions / scope limits:** Authorization and test scope are explicit. Purple is a collaboration approach and need not be a separate permanent team.

**Misconceptions / assessed distinctions:** Red is unauthorized attack; finding a gap completes improvement without retest.

**Local evidence:** I66-I69; N:704-736. **Primary verification:** R14, R01.

## KNOW-D5-023 — Scanning evidence and limits

**Objective:** 5.5; **family:** AT23; **status:** CURATED.

A vulnerability scan identifies potential weaknesses, including vulnerable versions and configurations. Findings require validation and scope-aware prioritization; absence of findings does not prove absence of vulnerabilities.

**Conditions / scope limits:** Do not equate version inference with demonstrated exploitation. Testing cannot guarantee complete security.

**Misconceptions / assessed distinctions:** A scanner proves every exploit succeeds; a clean scan proves secure design.

**Local evidence:** I70; N:744-757. **Primary verification:** R14.

## KNOW-D5-024 — Static and dynamic testing

**Objective:** 5.5; **family:** AT24; **status:** CURATED.

SAST inspects code artifacts without executing the application; DAST interacts with a running application. Both can contribute evidence about overlapping flaw classes.

**Conditions / scope limits:** Select by artifact/runtime access and testing objective, not an assertion that the tester cannot possess source.

**Misconceptions / assessed distinctions:** Only one method can find injection; DAST defined by inability to know code.

**Local evidence:** I71-I73; N:761-793. **Primary verification:** R12, R20.

## KNOW-D5-025 — Threat modeling through change

**Objective:** 5.5; **family:** AT25; **status:** CURATED.

Threat modeling identifies valued assets, potential threats, paths and mitigations in system context. Start early and revisit when designs or assumptions change.

**Conditions / scope limits:** No mandatory named method or one-time-only claim. It complements code/runtime testing.

**Misconceptions / assessed distinctions:** One design review guarantees security; scans replace design reasoning.

**Local evidence:** I74; N:797-811. **Primary verification:** R13.

## KNOW-D5-026 — Physical and social test boundaries

**Objective:** 5.5; **family:** AT26; **status:** CURATED.

Physical testing evaluates authorized attempts to cross access boundaries. Tailgating follows an authorized person; impersonation uses false identity; phishing uses deceptive communication. An event may combine them.

**Conditions / scope limits:** Ask about a specific action or supplied verification procedure; do not force mutually exclusive categories or call all phishing physical.

**Misconceptions / assessed distinctions:** A badge stops every follower; impersonation and tailgating cannot coexist.

**Local evidence:** I75-I78; N:819-861. **Primary verification:** R14, R01.

## Primary references

- **R01** [ISC2 September2026 English outline PDF](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), printed pp1,3,7; checked2026-11-03; official-scope.
- **R02** [ISC2 outline webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), “How is AI Security Incorporated…” → Domain 5; checked2026-11-03; official-context.
- **R03** [NIST SP800-88r2 PDF](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r2.pdf), §§3.1–3.2,4.5; checked2026-11-03; technical-primary.
- **R04** [FIPS186-5](https://csrc.nist.gov/pubs/fips/186-5/final), abstract; checked2026-11-03; technical-primary.
- **R05** [RFC8446](https://www.rfc-editor.org/rfc/rfc8446.html), §1.2; checked2026-11-03; technical-primary.
- **R06** [RFC7568](https://datatracker.ietf.org/doc/rfc7568/), SSLv3 deprecation; checked2026-11-03; technical-primary.
- **R07** [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html), Password Hashing Algorithms / Salting; checked2026-11-03; technical-primary.
- **R09** [MITRE ATT&CK FAQ](https://attack.mitre.org/resources/faq/), tactics/techniques definitions; checked2026-11-03; technical-primary.
- **R10** [NIST SP800-61r3](https://csrc.nist.gov/pubs/sp/800/61/r3/final), abstract / supersedes notice; checked2026-11-03; technical-primary.
- **R11** [NIST SP800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), abstract; checked2026-11-03; technical-primary.
- **R12** [OWASP Static Code Analysis](https://community.owasp.org/controls/Static_Code_Analysis), overview; checked2026-11-03; technical-primary.
- **R13** [OWASP Threat Modeling](https://community.owasp.org/Threat_Modeling), overview/objectives; checked2026-11-03; technical-primary.
- **R14** [NIST SP800-115](https://csrc.nist.gov/pubs/sp/800/115/final), abstract; checked2026-11-03; technical-primary.
- **R15** [NIST SP800-150](https://csrc.nist.gov/pubs/sp/800/150/final), abstract; checked2026-11-03; technical-primary.
- **R16** [Microsoft lifecycle FAQ](https://learn.microsoft.com/en-us/lifecycle/faq/windows), Windows10 support section; checked2026-11-03; technical-primary.
- **R17** [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final), abstract; checked2026-11-03; technical-primary.
- **R18** [RFC6151](https://datatracker.ietf.org/doc/html/rfc6151), §2; checked2026-11-03; technical-primary.
- **R19** [NIST SP800-63-4 glossary](https://pages.nist.gov/800-63-4/sp800-63/glossary/), hash-function definition; checked2026-11-03; technical-primary.
- **R20** [OWASP DevSecOps DAST guideline](https://owasp.github.io/www-project-devsecops-guideline/latest/02b-Dynamic-Application-Security-Testing), DAST overview; checked2026-11-03; technical-primary.
- **R08** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/Projects/post-quantum-cryptography), overview, PQC standards and migration; checked2026-11-03; technical-primary.
- **R21** [NIST SP800-61r3 detailed profile](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r3.pdf), RS.MA-02/03, RS.AN-06/07 pp27-29; RS.CO pp30-31; RC.RP recovery; checked2026-11-03; technical-primary.
- **R22** [NIST SP800-53r5](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf), MP-3 media marking; AU-9 audit protection; CM-2/3 configuration/change; SI-12 data minimization; checked2026-11-03; technical-primary.
- **R23** [NIST SP800-92](https://csrc.nist.gov/pubs/sp/800/92/final), log management overview; collection, analysis, storage and disposal; checked2026-11-03; technical-primary.
- **R24** [CISA Insider Threat Mitigation Guide](https://www.cisa.gov/sites/default/files/2022-11/Insider%20Threat%20Mitigation%20Guide_Final_508.pdf), defining insider threats; intentional and unintentional; checked2026-11-03; technical-primary.
- **R25** [ISC2 public Knowledge Checks](https://www.isc2.org/certifications/quizzes), public landing page; embedded actual questions not exposed by text retrieval; checked2026-11-03; style-access-limitation.
