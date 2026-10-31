# Independent Reading Notes findings register

Date: 2026-10-31. Scope: Reading Notes Domains 1–4. Audit only; no remediation or human acceptance.

**40 confirmed defects:** P0 0, P1 4, P2 29, P3 7.
**32 separate qualifications/recommendations.** Status totals: confirmed: 40, recommendation: 14, qualified concern: 18.

Severity is learner impact, not a count of incorrect words. P0 is reserved for broadly unusable core content or critical material harm; localized academic errors are P1/P2 according to consequence. Qualified items are not included in the confirmed-defect severity totals.

Source subreview IDs are retained for traceability. D34 Q rows promoted to numbered findings are excluded to avoid duplication. Root causes are only asserted where source/runtime evidence supports them. “Confirmed” does not mean human-approved. Line references refer to the audited working-tree snapshot and can move with later edits.

## Confirmed defects

| ID | Severity | Domain / subsection | Category | Finding |
|---|---|---|---|---|
| D1-F01 | P1 | 1 / 1.1.3, 1.5.4 | academic/internal consistency | Final cheat sheet assigns the identification question to Authentication |
| D1-F02 | P2 | 1 / 1.1.4 | academic/authentication | Location is presented beside independent MFA factors; generated card calls it contextual without excluding it from satisfying MFA |
| D1-F03 | P2 | 1 / 1.1.1, 1.5.4 | academic/bilingual | Warnings define threats as external, despite earlier malicious-insider example |
| D1-F04 | P3 | 1 / 1.1.1 | bilingual/translation | Thai passive grammar says that the threat is exploited |
| D1-F05 | P2 | 1 / 1.3.2 | academic/privacy law | GDPR applicability is described as processing EU citizens' data anywhere |
| D1-F06 | P2 | 1 / 1.1.3, 1.1.5, 1.1.6 | semantic diagram/accountability | Mobile AAA diagram implies ordinary timestamped logs create non-repudiation |
| D1-F07 | P2 | 1 / 1.2.2, 1.2.4, 1.5.4 | academic/risk economics | Prose and desktop compare control costs with entire ALE; mobile compares them with ALE savings |
| D1-F08 | P2 | 1 / 1.2.3 | academic/source attribution | Callout attributes this named four-stage sequence to NIST and claims ISC2 explicitly mandates a fifth reporting stage |
| D1-F09 | P2 | 1 / 1.5.3 | academic/ethics attribution | Text infers priority of honesty over legality from adjective order inside Canon 2 |
| D1-F10 | P2 | 1 / 1.5.2 | academic/legal overstatement | Mobile diagram asserts categorical absence of legal protection after potential gross negligence |
| D2-02 | P2 | 2 / 2.2.3 | factual accuracy | MTD is described as the threshold before irreversible damage; line 167 further predicts organizational collapse |
| D2-04 | P2 | 2 / 2.4.8 | conceptual taxonomy | The memory aid restricts metrics to raw quantitative values and visually puts KPI/KRI on a separate stage |
| D2-06 | P2 | 2 / 2.2.5 | bilingual semantic mismatch | Desktop and mobile BC/DR diagram labels translate DR as a plan |
| D2-08 | P3 | 2 / 2.4.2, 2.4.5, review | Thai terminology | เมทริกซ์ is repeatedly used for metric, creating a matrix-versus-metric semantic collision |
| D34-01 | P2 | 3 / 3.1.6 | factual/version | CSF 2 |
| D34-02 | P2 | 3 / 3.2.7, 3.2.8, review | factual/internal semantic inconsistency | Action is missing from the main four-category list, while the matrix at line 283 and scenario reasoning at 563 include it |
| D34-03 | P2 | 4 / 4.1.3 | factual/protocol layer | ARP is in TCP/IP Internet layer row |
| D34-04 | P2 | 4 / 4.1.5 | factual/IPv6 | SLAAC taught as combining prefix with MAC address |
| D34-05 | P2 | 4 / 4.3.3, review | factual/cloud accountability vs operation | All data/IAM responsibility is exclusively customer, impossible for CSP to bear; repeats at 697,724,809–810, scenario module 81–82, broad diagram cells |
| D34-06 | P2 | 4 / 4.3.6, review | factual/provider-specific generalization | AWS SG/NACL model taught under generic VPC/VNet header without AWS qualification; return traffic wording can imply any outbound traffic |
| D34-07 | P2 | 4 / 4.3.6 | factual/cloud egress | Private subnet egress requires NAT Gateway only |
| D34-08 | P3 | [3, 4] / metadata, lead | metadata/outline alignment | Legacy short titles claimed as official 2026 metadata; also domain-4 |
| D34-09 | P2 | 4 / 4.1.1 | factual/IPv4 broadcast | Last octet 255 is given as generic IPv4 broadcast pattern |
| D34-10 | P2 | 4 / 4.1.4 | factual/IPv4 link-local | APIPA appears under RFC1918 private heading; reserved /16 is presented as autoselection range |
| D34-11 | P2 | 3 / 3.2.5, 3.2.8, review | factual/security guarantee | MAC declared highest security and absolute prevention of leakage; desktop/mobile repeat at generator 2180/2233 |
| D34-12 | P2 | 4 / 4.1.9 | factual/wireless | Hidden SSID name is said to be transmitted in beacons when clients connect |
| D34-13 | P2 | 4 / 4.3.2 | factual/service plan generalization | FaaS always scales to zero when idle, with Azure Functions included as example |
| D34-15 | P3 | 3 / 3.1.7 | factual/technology taxonomy | LDAP listed as a directory service product peer to AD |
| D34-16 | P3 | 4 / 4.1.2, 4.1.3 | factual/API vs protocol | Sockets is labeled a Session-layer protocol; diagram2284 repeats |
| RN-I-001 | P1 | [1, 2, 3, 4] / all diagram subsections | Typography; Diagram; UI/UX | Desktop SVG labels become too small, especially at 1024px |
| RN-I-003 | P1 | [1, 2, 3, 4] / all | Navigation; UI/UX; Technical | Saved reading location is displaced on reload |
| RN-I-004 | P2 | [1, 2, 3, 4] / all | Navigation; UI/UX | Desktop navigation disappears during long reading |
| RN-I-005 | P2 | [1, 2, 3, 4] / all | Technical; Navigation | Reader remounts retain old window handlers |
| RN-I-006 | P1 | [1, 2, 3, 4] / all | Accessibility; Navigation; UI/UX | Hidden mobile drawer remains in the keyboard path |
| RN-I-007 | P2 | [1, 2, 3, 4] / all | Accessibility; Bilingual | Thai passages inherit the English page language |
| RN-I-008 | P2 | [1, 2, 3, 4] / review, 1.1.4, 1.5.3, 4.1.3, 4.2.3, 4.2.6, 4.3.3 | Accessibility; Typography | Scenario/supporting text misses minimum contrast |
| RN-I-009 | P2 | 2 / 2.1.4 | Table; Typography; Semantic Presentation | Task 145 keyword protection exceeds the last cell |
| RN-I-010 | P3 | 1 / 1.2.2 | Typography; Technical | Escaped currency leaks through raw HTML |
| RN-I-015 | P3 | [1, 2, 3, 4] / all | Accessibility; UI/UX | Reduced motion is supported only by the floating scroll control |
| RN-I-018 | P2 | 4 / 4.3.3 | Diagram; Semantic Presentation | Cloud responsibility legend is clipped inside its SVG |

## Qualifications and recommendations

| ID | Priority | Status | Domain / subsection | Observation |
|---|---|---|---|---|
| D1-N01 | P2 | recommendation | 1 / 1.1.2, 1.1.3, 1.1.6, 1.2.1, 1.3.5, 1.5.1 | No AI/training-data/model-poisoning applications appear in this Domain 1 material |
| D1-N02 | P2 | qualified concern | 1 / 1.4.2, 1.4.3 | Main diagram restricts Detective to during/real time and correction to after incident, despite an overlap caption |
| D1-N03 | P2 | qualified concern | 1 / 1.1.7 | Diagram lists seven defenses around an isolated core and implies adding layers eliminates single failure points; layer 6 Thai grammar suggests preventing encryption |
| D1-N04 | P3 | qualified concern | 1 / 1.2.1, 1.2.5, 1.5.4 | Thai sum wording and residual-risk subtraction appear alongside a multiplicative mnemonic without model assumptions |
| D1-N05 | P3 | qualified concern | 1 / 1.1.6 | Collection translation overlaps storage; controller definition excludes natural persons; consent flow can imply universality; tax retention example lacks jurisdiction |
| D1-N06 | P3 | recommendation | 1 / 1.1.4, 1.3.4 | Hypothetical password standard teaches dated composition rules; security questions lack legacy labeling; diagram says standards have no exceptions |
| D1-N07 | P3 | recommendation | 1 / 1.5.1, 1.5.2, 1.5.4 | Immediate installation is presented as due care without change/risk context; scanning-all-servers scenario omits explicit authorization |
| D1-N08 | P3 | qualified concern | 1 / 1.5.3 | Strict inter-canon priority is repeatedly asserted without an accessible official training citation |
| D1-N09 | P3 | qualified concern | 1 / 1.1.2, 1.1.5 | Authorization always after authentication and always-available phrasing overgeneralize; load-balancer example claims elimination of SPOFs with one LB |
| D1-N10 | P3 | qualified concern | 1 / 1.4.1 | Four-bucket taxonomy is presented without mapping to official three-category outline; Thai mantrap label has typo |
| D2-01 | P2 | qualified concern | 2 / 2.2.3, 2.2.6, review | Repeated maximum-downtime triggers and RTO ≤ MTD mnemonic can obscure the distinction between a system restoration target and business disruption tolerance |
| D2-03 | P2 | qualified concern | 2 / 2.3.6 | The modern password recommendation gives an unqualified 14-character baseline |
| D2-05 | P2 | qualified concern | 2 / 2.4.3 | The heading combines Respond/Remediate while the body defines response initiation and asserts an ISC2 exam convention without traceable official evidence |
| D2-07 | P2 | qualified concern | 2 / 2.3.5, review | Phishing is restricted to broad non-targeted messages, and a JS scenario contrasts whaling with spear phishing as though categories exclude one another |
| D2-09 | P2 | recommendation | 2 / 2.2.7, 2.3.3, 2.4.4, review | Notes cover deepfake voice but omit AI continuity backups/configurations/datasets, model drift, AI-specific KRIs and updated playbook/triage applications |
| D2-10 | P3 | qualified concern | 2 / 2.2.8 | Checklist/document review and a scenario-led tabletop exercise are collapsed in one parenthetical |
| D2-11 | P3 | qualified concern | 2 / 2.2.7 | Hot-site synchronization/readiness and recovery windows are stated without clear example qualifiers |
| D2-12 | P3 | qualified concern | 2 / 2.3.6 | Verifier storage wording mixes encryption with salted hashing; line 333 also phrases phishing resistance as an unlimited inability to intercept authentication |
| D34-14 | P2 | qualified concern | 4 / 4.3.2, review | PaaS OS/runtime handled entirely by CSP, followed by Beanstalk example; may imply no customer platform-maintenance duties |
| D34-Q1 | P3 | recommendation | 3 / 3.1.1, 3.1.3, review | Six plausible activities are called standard order and role-first is unconditional |
| D34-Q2 | P3 | recommendation | 3 / 3.1.5, review | Disable conflated with lockout; history-retention rationale generalized |
| D34-Q3 | P3 | recommendation | 3 / 3.1.6, 3.1.7 | Biometric example lacks NIST remote-auth MFA qualification; no standalone compliance claim |
| D34-Q9 | P3 | qualified concern | 4 / 4.1.5, review | Source says support, not automatic encryption; generic 6to4 example needs mode qualifier |
| D34-Q10 | P3 | recommendation | 4 / 4.1.6, 4.1.7 | Conventional examples do not explicitly say only; HTTPS TCP443 omits HTTP3 |
| D34-Q12 | P3 | recommendation | 4 / 4.2.3, 4.2.6 | FW web-only label accompanies SMTP/DNS services; five-tier graphic called concentric |
| D34-Q14 | P3 | qualified concern | 4 / 4.3.4, 4.3.5, review | Onprem+public vendor usage broader than strict NIST; private highest-security guarantee and commercial-only public ownership need caveats |
| RN-I-011 | P3 | qualified concern | 1 / 1.2.1, 1.2.2, 1.2.5 | Offline math alternatives retain raw LaTeX labels |
| RN-I-012 | P2 | recommendation | [1, 2, 3, 4] / all | HTML trust boundary needs explicit handling |
| RN-I-013 | P3 | recommendation | [1, 2, 3, 4] / all | Heading and component semantics need a consistency pass |
| RN-I-014 | P2 | recommendation | [1, 2, 3, 4] / table subsections | Wide comparisons need selective mobile presentation work |
| RN-I-016 | P3 | recommendation | [1, 2, 3, 4] / all | Shared CSS and content sniffing make patterns brittle |
| RN-I-017 | P3 | recommendation | [1, 2, 3, 4] / all | Location memory does not distinguish completed reading |

## Detailed evidence and corrections

### D1-F01 — P1 — Final cheat sheet assigns the identification question to Authentication

- **Category:** academic/internal consistency. **Domain/subsection:** 1 / 1.1.3, 1.5.4.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:1307](../../../content/isc2-cc-2026/reading/domain-1.md#L1307).
- **Current excerpt/behavior:** Prove identity / Who are you → Authentication
- **Actual / impact:** Final cheat sheet assigns the identification question to Authentication.
- **Expected conceptual behavior:** Who are you/claim identity maps to Identification; prove identity maps to Authentication.
- **Root cause:** One mnemonic row combines two separately defined access-control stages.
- **Evidence:** D1:174–176 and 238 distinguish claiming identity from proving it; D1:1307 contradicts that distinction.
- **References:** [pages.nist.gov](https://pages.nist.gov/800-63-4/sp800-63b.html)
- **Recommendation:** Split Identification and Authentication into separate rows.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F02 — P2 — Location is presented beside independent MFA factors; generated card calls it contextual without excluding it from satisfying MFA

- **Category:** academic/authentication. **Domain/subsection:** 1 / 1.1.4.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:189](../../../content/isc2-cc-2026/reading/domain-1.md#L189).
- **Current excerpt/behavior:** ปัจจัยการพิสูจน์ตัวตนแบ่งออกเป็น 4 หมวดหลัก
- **Actual / impact:** Location is presented beside independent MFA factors; generated card calls it contextual without excluding it from satisfying MFA.
- **Expected conceptual behavior:** Knowledge, possession and inherence are independent factor types; location is a supplementary risk/context signal.
- **Root cause:** The four-category heading and contextual card are combined under the independent-factor MFA definition.
- **Evidence:** D1:187–195 and content-components.js:60–69; SP 800-63B-4 says fraud indicators cannot substitute for an authentication factor.
- **References:** [pages.nist.gov](https://pages.nist.gov/800-63-4/sp800-63b.html)
- **Recommendation:** Separate location context and add password plus corporate IP is not MFA.
- **Confidence:** High For Misleading Scope; Medium For Exam Consequence. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F03 — P2 — Warnings define threats as external, despite earlier malicious-insider example

- **Category:** academic/bilingual. **Domain/subsection:** 1 / 1.1.1, 1.5.4.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:37](../../../content/isc2-cc-2026/reading/domain-1.md#L37).
- **Current excerpt/behavior:** Threat คือสิ่งภายนอก
- **Actual / impact:** Warnings define threats as external, despite earlier malicious-insider example.
- **Expected conceptual behavior:** Threats can originate internally or externally; distinguish potential harm from exploitable weakness.
- **Root cause:** External/internal is used as the defining threat-versus-vulnerability distinction.
- **Evidence:** D1:21 correctly lists malicious insiders; D1:37 and 1040 restrict threats to external sources.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/glossary/term/threat), [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-39.pdf)
- **Recommendation:** Remove external-only wording and include an insider example.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F04 — P3 — Thai passive grammar says that the threat is exploited

- **Category:** bilingual/translation. **Domain/subsection:** 1 / 1.1.1.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:22](../../../content/isc2-cc-2026/reading/domain-1.md#L22).
- **Current excerpt/behavior:** ที่เปิดโอกาสให้ Threat ถูกใช้ประโยชน์
- **Actual / impact:** Thai passive grammar says that the threat is exploited.
- **Expected conceptual behavior:** Threat sources exploit vulnerabilities.
- **Root cause:** The passive object in the Thai definition is Threat rather than the weakness.
- **Evidence:** D1:22 reverses the exploitation relationship; later D1 material generally uses the correct relationship.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/glossary/term/threat)
- **Recommendation:** Use จุดอ่อน...ที่ภัยคุกคามหรือผู้ก่อภัยคุกคามอาจใช้ประโยชน์เพื่อก่อความเสียหาย.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F05 — P2 — GDPR applicability is described as processing EU citizens' data anywhere

- **Category:** academic/privacy law. **Domain/subsection:** 1 / 1.3.2.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:626](../../../content/isc2-cc-2026/reading/domain-1.md#L626).
- **Current excerpt/behavior:** Controller/Processor ทั่วโลกที่มีการประมวลผลข้อมูลพลเมืองสหภาพยุโรป
- **Actual / impact:** GDPR applicability is described as processing EU citizens' data anywhere.
- **Expected conceptual behavior:** Applicability depends on Article 3 establishment and targeting criteria; citizenship alone is not the test.
- **Root cause:** Citizenship is substituted for territorial-scope criteria.
- **Evidence:** EDPB Guidelines 3/2018 explain that nationality does not determine Article 3(2) targeting applicability.
- **References:** [www.edpb.europa.eu](https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en_1.pdf)
- **Recommendation:** Replace citizenship rule with concise qualified establishment/targeting language.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F06 — P2 — Mobile AAA diagram implies ordinary timestamped logs create non-repudiation

- **Category:** semantic diagram/accountability. **Domain/subsection:** 1 / 1.1.3, 1.1.5, 1.1.6.
- **Location:** [js/core/diagram-generator.js:464](../../../js/core/diagram-generator.js#L464).
- **Current excerpt/behavior:** Audit Trails, ประทับเวลา (Timestamps) ... (Non-Repudiation)
- **Actual / impact:** Mobile AAA diagram implies ordinary timestamped logs create non-repudiation.
- **Expected conceptual behavior:** Logs support accountability; non-repudiation requires appropriate evidence and assurance controls.
- **Root cause:** Accounting text assigns a stronger property than ordinary logging establishes.
- **Evidence:** DG:464 contrasts with D1:250's signed-evidence discussion; NIST digital-signature definition qualifies assurance by appropriate use.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/glossary/term/digital_signature)
- **Recommendation:** Label logging as accountability and separately explain non-repudiation evidence requirements.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F07 — P2 — Prose and desktop compare control costs with entire ALE; mobile compares them with ALE savings

- **Category:** academic/risk economics. **Domain/subsection:** 1 / 1.2.2, 1.2.4, 1.5.4.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:506](../../../content/isc2-cc-2026/reading/domain-1.md#L506).
- **Current excerpt/behavior:** ต้นทุนของมาตรการความปลอดภัยต่อปีไม่ควรเกินมูลค่า ALE
- **Actual / impact:** Prose and desktop compare control costs with entire ALE; mobile compares them with ALE savings.
- **Expected conceptual behavior:** Compare annual costs with expected ALE reduction, while recognizing legal/safety/contract constraints.
- **Root cause:** Desktop/prose omit residual ALE while mobile uses risk reduction.
- **Evidence:** D1:505–506 and DG:744 differ from DG:795. If ALE falls from $10,000 to $9,000 at $5,000 annual cost, being below total ALE does not make the control economical.
- **References:** [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30.pdf), [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-39.pdf)
- **Recommendation:** Use ALE before minus ALE after and align both layouts; qualify the economic rule.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F08 — P2 — Callout attributes this named four-stage sequence to NIST and claims ISC2 explicitly mandates a fifth reporting stage

- **Category:** academic/source attribution. **Domain/subsection:** 1 / 1.2.3.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:533](../../../content/isc2-cc-2026/reading/domain-1.md#L533).
- **Current excerpt/behavior:** เช่น NIST ... Identify → Assess → Treat → Monitor
- **Actual / impact:** Callout attributes this named four-stage sequence to NIST and claims ISC2 explicitly mandates a fifth reporting stage.
- **Expected conceptual behavior:** NIST SP 800-39 uses Frame, Assess, Respond, Monitor; label local five-stage mnemonic as pedagogical unless official course source is supplied.
- **Root cause:** The named NIST sequence in the local callout differs from the primary source.
- **Evidence:** NIST CSF FAQ and SP 800-39 confirm Frame/Assess/Respond/Monitor. Public ISC2 outline does not establish the separate fifth-stage claim; that part remains unverified attribution.
- **References:** [www.nist.gov](https://www.nist.gov/cyberframework/faqs), [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-39.pdf), [www.isc2.org](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)
- **Recommendation:** Correct NIST attribution and cite official training source or label five-stage model as local teaching structure.
- **Confidence:** High For Nist Mismatch; Qualified For Isc2 Training Claim. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F09 — P2 — Text infers priority of honesty over legality from adjective order inside Canon 2

- **Category:** academic/ethics attribution. **Domain/subsection:** 1 / 1.5.3.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:990](../../../content/isc2-cc-2026/reading/domain-1.md#L990).
- **Current excerpt/behavior:** ลำดับคำใน Canon 2 ให้เกียรติและความซื่อสัตย์มาก่อนกฎหมาย
- **Actual / impact:** Text infers priority of honesty over legality from adjective order inside Canon 2.
- **Expected conceptual behavior:** Treat those duties together; lawful conduct may still be unethical without implying word-order precedence.
- **Root cause:** Lexical order is interpreted as a normative hierarchy without a supporting source.
- **Evidence:** ISC2 public code provides the duties together and no adjective hierarchy.
- **References:** [www.isc2.org](https://www.isc2.org/ethics)
- **Recommendation:** Remove lexical-precedence interpretation; retain lawful-but-unethical example.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-F10 — P2 — Mobile diagram asserts categorical absence of legal protection after potential gross negligence

- **Category:** academic/legal overstatement. **Domain/subsection:** 1 / 1.5.2.
- **Location:** [js/core/diagram-generator.js:1280](../../../js/core/diagram-generator.js#L1280).
- **Current excerpt/behavior:** อาจมีความผิดฐาน Gross Negligence ... ซึ่งไม่ได้รับการคุ้มครองทางกฎหมาย
- **Actual / impact:** Mobile diagram asserts categorical absence of legal protection after potential gross negligence.
- **Expected conceptual behavior:** Describe possible professional/legal consequences without a jurisdiction-free immunity rule.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** DG:1280 qualifies possible gross negligence with may, but not the final loss-of-protection clause. ISC2 Code establishes ethical duties, not the asserted universal legal rule; no particular country's negligence law was validated.
- **References:** [www.isc2.org](https://www.isc2.org/ethics)
- **Recommendation:** Use qualified negligence/liability language and professional discipline; omit universal loss-of-protection conclusion.
- **Confidence:** High For Overstatement. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N01 — P2 — No AI/training-data/model-poisoning applications appear in this Domain 1 material

- **Category:** educational/curriculum completeness. **Domain/subsection:** 1 / 1.1.2, 1.1.3, 1.1.6, 1.2.1, 1.3.5, 1.5.1.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:1](../../../content/isc2-cc-2026/reading/domain-1.md#L1).
- **Current excerpt/behavior:** เอกสารรวบรวมและเรียบเรียงเนื้อหาฉบับสมบูรณ์
- **Actual / impact:** No AI/training-data/model-poisoning applications appear in this Domain 1 material.
- **Expected conceptual behavior:** Include concise foundational examples reflecting current ISC2 web guidance.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Full reading and targeted search found no such examples. ISC2 current page explains Domain 1 AI applications; all five formal objective labels are otherwise covered.
- **References:** [www.isc2.org](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)
- **Recommendation:** Add short CIA, privacy/AAA, risk/governance and ethics examples; no new AI domain required.
- **Confidence:** High. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N02 — P2 — Main diagram restricts Detective to during/real time and correction to after incident, despite an overlap caption

- **Category:** semantic diagram/control functions. **Domain/subsection:** 1 / 1.4.2, 1.4.3.
- **Location:** [js/core/diagram-generator.js:1129](../../../js/core/diagram-generator.js#L1129).
- **Current excerpt/behavior:** แจ้งเตือนภัยแบบเรียลไทม์ขณะที่เหตุการณ์หรือการโจมตีกำลังดำเนินอยู่
- **Actual / impact:** Main diagram restricts Detective to during/real time and correction to after incident, despite an overlap caption.
- **Expected conceptual behavior:** Classify primarily by purpose; detective controls also identify prior events and correction can overlap active response.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** DG:1053–1084,1125–1129,1140; mitigating overlap caption DG:1177–1179 acknowledged. D1:851 correctly calls retrospective CCTV detective; CISA guide p.13 supports retrospective investigations.
- **References:** [www.cisa.gov](https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-CM.pdf)
- **Recommendation:** Use often-before/during/after labels, add delayed detection, and identify absent directive/compensating functions as cross-cutting or title diagram selected functions.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N03 — P2 — Diagram lists seven defenses around an isolated core and implies adding layers eliminates single failure points; layer 6 Thai grammar suggests preventing encryption

- **Category:** semantic diagram/bilingual. **Domain/subsection:** 1 / 1.1.7.
- **Location:** [js/core/diagram-generator.js:610](../../../js/core/diagram-generator.js#L610).
- **Current excerpt/behavior:** ขจัดจุดล้มเหลวเดี่ยว (No Single Point of Failure)
- **Actual / impact:** Diagram lists seven defenses around an isolated core and implies adding layers eliminates single failure points; layer 6 Thai grammar suggests preventing encryption.
- **Expected conceptual behavior:** Show complementary relationship to core; describe reducing reliance on one control and use Thai wording protecting data through encryption.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** DG:565–605 has lists and core without connections/enclosing layers; DG:610 overstates elimination; DG:676 wording ป้องกันช่องโหว่ซอฟต์แวร์และการเข้ารหัสข้อมูล is awkward. Seven layers are explicitly an example and defensible.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/glossary/term/defense_in_depth)
- **Recommendation:** Connect/surround layers; qualify independence/diversity and eliminate overpromise; change layer 6 wording to ปกป้องข้อมูลด้วยการเข้ารหัส.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N04 — P3 — Thai sum wording and residual-risk subtraction appear alongside a multiplicative mnemonic without model assumptions

- **Category:** academic/risk modeling. **Domain/subsection:** 1 / 1.2.1, 1.2.5, 1.5.4.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:388](../../../content/isc2-cc-2026/reading/domain-1.md#L388).
- **Current excerpt/behavior:** Risk ... ผลรวมของโอกาส ... ควบคู่กับขนาดของผลกระทบ
- **Actual / impact:** Thai sum wording and residual-risk subtraction appear alongside a multiplicative mnemonic without model assumptions.
- **Expected conceptual behavior:** Use combination; label likelihood×impact and subtraction as simplified models requiring defined compatible scales.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** D1:388,409,580,1056–1060. Approximation sign in risk formula and correct before/after definitions partially mitigate concern.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/pubs/sp/800/30/r1/final), [www.cyber.gc.ca](https://www.cyber.gc.ca/en/cccsglossary)
- **Recommendation:** Reassess remaining likelihood and consequence; avoid arithmetic on ordinal High/Medium/Low labels.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N05 — P3 — Collection translation overlaps storage; controller definition excludes natural persons; consent flow can imply universality; tax retention example lacks jurisdiction

- **Category:** bilingual/privacy qualification. **Domain/subsection:** 1 / 1.1.6.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:256](../../../content/isc2-cc-2026/reading/domain-1.md#L256).
- **Current excerpt/behavior:** การจัดเก็บ (Collection)
- **Actual / impact:** Collection translation overlaps storage; controller definition excludes natural persons; consent flow can imply universality; tax retention example lacks jurisdiction.
- **Expected conceptual behavior:** Translate Collection as การเก็บรวบรวม; include natural-person controllers; qualify consent as one legal basis; source jurisdiction-specific retention.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** D1:256,267,281,291 and DG:521,533. EDPB supports natural/legal person roles and multiple lawful bases. Seven-year Thai employee-tax rule was not verified; erasure exception is appropriately qualified.
- **References:** [www.edpb.europa.eu](https://www.edpb.europa.eu/contact/frequently-asked-questions_en?page=1), [www.edpb.europa.eu](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en)
- **Recommendation:** Clarify translation, roles and applicable lawful basis; source or label the retention assumption.
- **Confidence:** High Except Unverified Retention Rule. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N06 — P3 — Hypothetical password standard teaches dated composition rules; security questions lack legacy labeling; diagram says standards have no exceptions

- **Category:** educational/password examples. **Domain/subsection:** 1 / 1.1.4, 1.3.4.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:683](../../../content/isc2-cc-2026/reading/domain-1.md#L683).
- **Current excerpt/behavior:** รหัสผ่านต้องมีความยาวอย่างน้อย 14 ตัวอักษร ผสมอักขระ 3 ใน 4 ประเภท
- **Actual / impact:** Hypothetical password standard teaches dated composition rules; security questions lack legacy labeling; diagram says standards have no exceptions.
- **Expected conceptual behavior:** Use modern example with length/blocklist/MFA and clarify organization-defined scope and approved exceptions.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** D1:683, content-components.js:37, DG:1001,1012. NIST SP 800-63B-4 §3.1.1 prohibits composition rules in that standard. Hypothetical example still correctly illustrates a measurable standard.
- **References:** [pages.nist.gov](https://pages.nist.gov/800-63-4/sp800-63b.html)
- **Recommendation:** Replace dated example, label security questions legacy, and qualify mandatory/no-exception language.
- **Confidence:** High About Nist Divergence; Medium About Hypothetical Example Harm. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N07 — P3 — Immediate installation is presented as due care without change/risk context; scanning-all-servers scenario omits explicit authorization

- **Category:** educational/operational context. **Domain/subsection:** 1 / 1.5.1, 1.5.2, 1.5.4.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:917](../../../content/isc2-cc-2026/reading/domain-1.md#L917).
- **Current excerpt/behavior:** การลง Patch อุดช่องโหว่ทันทีที่ได้รับแจ้ง
- **Actual / impact:** Immediate installation is presented as due care without change/risk context; scanning-all-servers scenario omits explicit authorization.
- **Expected conceptual behavior:** Teach authorized risk-based normal/emergency change process and prudent response.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** D1:917,1258,1267; scenarios 4 and 5; DG:1206,1252. Expected Due Diligence/Due Care answers remain correct.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/pubs/sp/800/40/r4/final), [www.canada.ca](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/cyber-security-guidance-policy/patch-management-guidance.html)
- **Recommendation:** Add authorized scan scope and approved/emergency patch process, verification and urgency context.
- **Confidence:** High. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N08 — P3 — Strict inter-canon priority is repeatedly asserted without an accessible official training citation

- **Category:** source provenance/ethics. **Domain/subsection:** 1 / 1.5.3.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:964](../../../content/isc2-cc-2026/reading/domain-1.md#L964).
- **Current excerpt/behavior:** Canon ลำดับก่อนหน้าจะมีความสำคัญเหนือกว่าเสมอ
- **Actual / impact:** Strict inter-canon priority is repeatedly asserted without an accessible official training citation.
- **Expected conceptual behavior:** Cite official course source or explain as a prioritization aid while preserving professional judgment.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** D1:956–964,977 and DG:1292–1397. Current ISC2 public code gives four canons in same order but omits a strict hierarchy; omission does not prove no official training uses it.
- **References:** [www.isc2.org](https://www.isc2.org/ethics)
- **Recommendation:** Supply traceable training citation or qualify the absolute always-supersedes rule.
- **Confidence:** High That Public Page Omits Rule; Insufficient To Declare Convention False. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N09 — P3 — Authorization always after authentication and always-available phrasing overgeneralize; load-balancer example claims elimination of SPOFs with one LB

- **Category:** academic/teaching absolutes. **Domain/subsection:** 1 / 1.1.2, 1.1.5.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:222](../../../content/isc2-cc-2026/reading/domain-1.md#L222).
- **Current excerpt/behavior:** เกิดขึ้นหลังจาก Authentication สำเร็จแล้วเสมอ
- **Actual / impact:** Authorization always after authentication and always-available phrasing overgeneralize; load-balancer example claims elimination of SPOFs with one LB.
- **Expected conceptual behavior:** Qualify named-user login model and service availability goals; ensure redundant LB tier before claiming full topology eliminates SPOFs.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** D1:115,222; DG:289. Single load balancer source topology does not show redundancy at that tier; anonymous resource authorization is outside the illustrated login model.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/pubs/sp/800/207/final)
- **Recommendation:** Use in this authenticated-user flow, timely/reliable service requirements, and explicit redundant LB assumption.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D1-N10 — P3 — Four-bucket taxonomy is presented without mapping to official three-category outline; Thai mantrap label has typo

- **Category:** educational/taxonomy mapping. **Domain/subsection:** 1 / 1.4.1.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:758](../../../content/isc2-cc-2026/reading/domain-1.md#L758).
- **Current excerpt/behavior:** Technical / Managerial (Administrative) / Operational / Physical
- **Actual / impact:** Four-bucket taxonomy is presented without mapping to official three-category outline; Thai mantrap label has typo.
- **Expected conceptual behavior:** Explain operational bucket as an alternative taxonomy/extension and map to technical, administrative and physical.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** D1:758–763; content-components.js:182–218. Official outline names technical/admin/physical; operational controls are legitimate in other taxonomies. CC:217 contains ประตูกลักกันคนเดินตาม.
- **References:** [www.isc2.org](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)
- **Recommendation:** Map categories explicitly and correct Thai access-control-vestibule label.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-1-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

### D2-01 — P2 — Repeated maximum-downtime triggers and RTO ≤ MTD mnemonic can obscure the distinction between a system restoration target and business disruption tolerance

- **Category:** conceptual precision. **Domain/subsection:** 2 / 2.2.3, 2.2.6, review.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:204](../../../content/isc2-cc-2026/reading/domain-2.md#L204).
- **Current excerpt/behavior:** Maximum Acceptable Downtime
- **Actual / impact:** Repeated maximum-downtime triggers and RTO ≤ MTD mnemonic can obscure the distinction between a system restoration target and business disruption tolerance.
- **Expected conceptual behavior:** Teach RTO as a recovery target and MTD as the business tolerance; allow for business reprocessing after technical restoration.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 164–168, 203–207, 537, 639, 672–674; scenario JS 28–30; diagram generator 1622, 1640–1642, 1676.; NIST SP 800-34r1 §3.2.1 states RTO normally needs to be shorter than MTD to leave time for reprocessing. Scenario 2 still correctly identifies RTO.
- **References:** [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=31), [csrc.nist.gov](https://csrc.nist.gov/glossary/term/recovery_time_objective)
- **Recommendation:** Use เป้าหมายระยะเวลาที่ต้องกู้คืนระบบหรือบริการให้พร้อมใช้งาน; explain why the inequality alone does not demonstrate a viable recovery plan.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-02 — P2 — MTD is described as the threshold before irreversible damage; line 167 further predicts organizational collapse

- **Category:** factual accuracy. **Domain/subsection:** 2 / 2.2.3.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:164](../../../content/isc2-cc-2026/reading/domain-2.md#L164).
- **Current excerpt/behavior:** ก่อนจะเกิดความเสียหายที่ไม่อาจฟื้นคืนได้
- **Actual / impact:** MTD is described as the threshold before irreversible damage; line 167 further predicts organizational collapse.
- **Expected conceptual behavior:** MTD concerns the threshold for significant mission/business harm, without requiring irreversible damage or certain collapse.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 164 and 167 contain categorical irreversible-damage/collapse wording.; NIST MTD glossary defines disruption tolerance in terms of significant mission harm.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/glossary/term/maximum_tolerable_downtime)
- **Recommendation:** Use ก่อนเกิดผลกระทบเกินระดับที่องค์กรยอมรับได้ and describe target-breach consequences without predicting certain collapse.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-03 — P2 — The modern password recommendation gives an unqualified 14-character baseline

- **Category:** currency and scope. **Domain/subsection:** 2 / 2.3.6.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:327](../../../content/isc2-cc-2026/reading/domain-2.md#L327).
- **Current excerpt/behavior:** Passphrase ที่มีความยาว ≥ 14 ตัวอักษร
- **Actual / impact:** The modern password recommendation gives an unqualified 14-character baseline.
- **Expected conceptual behavior:** Identify the standard and context: current NIST specifies 15 for single-factor passwords and permits at least 8 when only used within MFA.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 327 recommends ≥14 without the authentication context.; Directly checked NIST SP 800-63B-4 §3.1.1.2. A 14-character organizational policy is not universally invalid.
- **References:** [pages.nist.gov](https://pages.nist.gov/800-63-4/sp800-63b.html#passwordver)
- **Recommendation:** Refresh the cited modern baseline and distinguish single-factor from MFA usage; do not present a context-specific minimum as universal.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-04 — P2 — The memory aid restricts metrics to raw quantitative values and visually puts KPI/KRI on a separate stage

- **Category:** conceptual taxonomy. **Domain/subsection:** 2 / 2.4.8.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:441](../../../content/isc2-cc-2026/reading/domain-2.md#L441).
- **Current excerpt/behavior:** Raw measurable value
- **Actual / impact:** The memory aid restricts metrics to raw quantitative values and visually puts KPI/KRI on a separate stage.
- **Expected conceptual behavior:** Metrics can include calculated rates, ratios and averages; KPI/KRI are types of metrics.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 441 conflicts with the broader definition at 357.; Generator 1704, 1789–1792 and 1864–1869 repeat the raw-value hierarchy in desktop/mobile variants.; Final NIST SP 800-55v1 §2.4 explicitly includes KPI/KRI as metrics.
- **References:** [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf#page=16)
- **Recommendation:** Show data/measurements feeding metrics including KPI/KRI, followed by communication formats; label the architecture a local teaching aid.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-05 — P2 — The heading combines Respond/Remediate while the body defines response initiation and asserts an ISC2 exam convention without traceable official evidence

- **Category:** unsupported authority and ambiguous definition. **Domain/subsection:** 2 / 2.4.3.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:375](../../../content/isc2-cc-2026/reading/domain-2.md#L375).
- **Current excerpt/behavior:** ตามบริบทในสไลด์และเนื้อหาการสอบ ISC2 CC
- **Actual / impact:** The heading combines Respond/Remediate while the body defines response initiation and asserts an ISC2 exam convention without traceable official evidence.
- **Expected conceptual behavior:** State the selected expansion and precise start/end events without claiming a universal ISC2 answer convention.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 374–376 acknowledges multiple expansions but favors an initiation-only interpretation as exam-specific.; Official public outline does not prescribe an MTTR expansion.; Microsoft primary operational documentation separates acknowledgement from remediation with different timestamps.
- **References:** [www.isc2.org](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), [learn.microsoft.com](https://learn.microsoft.com/en-us/security/operations/incident-response-overview)
- **Recommendation:** Add an interval example and defined endpoints; retain the fact that Mean Time to Respond is a valid context-dependent expansion.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-06 — P2 — Desktop and mobile BC/DR diagram labels translate DR as a plan

- **Category:** bilingual semantic mismatch. **Domain/subsection:** 2 / 2.2.5.
- **Location:** [js/core/diagram-generator.js:1542](../../../js/core/diagram-generator.js#L1542).
- **Current excerpt/behavior:** DISASTER RECOVERY (DR) — แผนกู้คืนระบบเทคโนโลยีสารสนเทศ
- **Actual / impact:** Desktop and mobile BC/DR diagram labels translate DR as a plan.
- **Expected conceptual behavior:** Translate DR as การกู้คืน and reserve แผนการกู้คืน for DRP.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Generator 1542 and 1577 use แผน for DR.; Markdown 508–513 explicitly distinguishes DR capability/process from DRP document.; NIST SP 800-34r1 distinguishes recovery planning documents and functions.
- **References:** [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=22)
- **Recommendation:** Correct both desktop and mobile Thai labels while preserving the introductory BC/DR scope relationship.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-07 — P2 — Phishing is restricted to broad non-targeted messages, and a JS scenario contrasts whaling with spear phishing as though categories exclude one another

- **Category:** misleading taxonomy. **Domain/subsection:** 2 / 2.3.5, review.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:565](../../../content/isc2-cc-2026/reading/domain-2.md#L565).
- **Current excerpt/behavior:** การส่งข้อความหลอกลวงทั่วไปแบบไม่เจาะจงเป้าหมายในวงกว้าง
- **Actual / impact:** Phishing is restricted to broad non-targeted messages, and a JS scenario contrasts whaling with spear phishing as though categories exclude one another.
- **Expected conceptual behavior:** Phishing is the broader family, spear phishing is targeted phishing, and whaling targets senior/high-profile recipients within spear phishing.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 308–310 and 564–583; scenario JS 70.; Canadian Centre for Cyber Security directly confirms whaling as spear phishing against senior/high-profile targets.; CISA search-indexed text corroborates phishing types, but direct PDF retrieval returned HTTP 403. Finding does not depend on that blocked retrieval.
- **References:** [www.cyber.gc.ca](https://www.cyber.gc.ca/en/guidance/introduction-cyber-threat-environment), [www.cisa.gov](https://www.cisa.gov/sites/default/files/2024-02/Update%20to%20Phishing%20General%20Security%20Postcard_01.01.2024.pdf)
- **Recommendation:** Label the non-targeted column bulk/generic phishing and explicitly show nesting; retain whaling as scenario 7's most-specific correct answer.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-08 — P3 — เมทริกซ์ is repeatedly used for metric, creating a matrix-versus-metric semantic collision

- **Category:** Thai terminology. **Domain/subsection:** 2 / 2.4.2, 2.4.5, review.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:359](../../../content/isc2-cc-2026/reading/domain-2.md#L359).
- **Current excerpt/behavior:** ลักษณะของเมทริกซ์ความปลอดภัย
- **Actual / impact:** เมทริกซ์ is repeatedly used for metric, creating a matrix-versus-metric semantic collision.
- **Expected conceptual behavior:** Use ตัวชี้วัด consistently, or a clearly identified metric transliteration.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 359, 402, 731–734 and 764; scenario JS 75–78 and 102.; English metric meaning is established internally at Markdown 357 and externally in NIST SP 800-55v1.; Thai spelling judgment is editorial semantic review; no exclusive official Thai glossary spelling was established.
- **References:** [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf#page=34)
- **Recommendation:** Replace เมทริกซ์ when the intended concept is metric; preserve actual matrix terminology where a table/matrix is intended.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-09 — P2 — Notes cover deepfake voice but omit AI continuity backups/configurations/datasets, model drift, AI-specific KRIs and updated playbook/triage applications

- **Category:** supplemental coverage. **Domain/subsection:** 2 / 2.2.7, 2.3.3, 2.4.4, review.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:320](../../../content/isc2-cc-2026/reading/domain-2.md#L320).
- **Current excerpt/behavior:** ผู้โจมตีอาจนำ AI และเทคโนโลยี Deepfake Voice มาช่วยสร้างเรื่องราวหลอกลวง
- **Actual / impact:** Notes cover deepfake voice but omit AI continuity backups/configurations/datasets, model drift, AI-specific KRIs and updated playbook/triage applications.
- **Expected conceptual behavior:** Represent the current official supplemental web guidance without claiming these are additional numbered PDF objectives.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** All 777 Markdown lines were inspected; line 320 is the explicit AI teaching.; Official ISC2 live outline page Domain 2 AI integration text was directly retrieved; numbered September 2026 PDF has broader objective bullets.
- **References:** [www.isc2.org](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)
- **Recommendation:** Add compact sourced AI continuity, KRI and playbook examples and a source date; frame as supplemental guidance.
- **Confidence:** High. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-10 — P3 — Checklist/document review and a scenario-led tabletop exercise are collapsed in one parenthetical

- **Category:** instructional distinction. **Domain/subsection:** 2 / 2.2.8.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:252](../../../content/isc2-cc-2026/reading/domain-2.md#L252).
- **Current excerpt/behavior:** การตรวจทานเอกสาร (Checklist / Tabletop Exercise)
- **Actual / impact:** Checklist/document review and a scenario-led tabletop exercise are collapsed in one parenthetical.
- **Expected conceptual behavior:** Describe document review separately from discussion-based tabletop role/decision practice.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 252 groups Checklist and Tabletop Exercise under document review.; NIST SP 800-84 directly describes facilitator-led scenario discussion without deployment of equipment.
- **References:** [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-84.pdf)
- **Recommendation:** Give each activity its own short description and retain the testing rationale.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-11 — P3 — Hot-site synchronization/readiness and recovery windows are stated without clear example qualifiers

- **Category:** overgeneralized examples. **Domain/subsection:** 2 / 2.2.7.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:233](../../../content/isc2-cc-2026/reading/domain-2.md#L233).
- **Current excerpt/behavior:** ข้อมูลที่ซิงโครไนซ์แบบเกือบ Real-time พร้อมใช้งานทันที
- **Actual / impact:** Hot-site synchronization/readiness and recovery windows are stated without clear example qualifiers.
- **Expected conceptual behavior:** Treat near-real-time synchronization as a possible implementation and time windows as illustrative, with capability validated through testing.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 233–242 supplies readiness claims and specific site recovery ranges.; NIST SP 800-34r1 §§3.4.3 and 5.1.5 discusses variation in alternate-site implementation.
- **References:** [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=36)
- **Recommendation:** Add โดยทั่วไป/ตัวอย่าง and explain that design, dependencies and tests establish actual achievable recovery; retain relative readiness/cost ordering.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D2-12 — P3 — Verifier storage wording mixes encryption with salted hashing; line 333 also phrases phishing resistance as an unlimited inability to intercept authentication

- **Category:** ambiguous security wording. **Domain/subsection:** 2 / 2.3.6.
- **Location:** [content/isc2-cc-2026/reading/domain-2.md:328](../../../content/isc2-cc-2026/reading/domain-2.md#L328).
- **Current excerpt/behavior:** รหัสผ่านที่จัดเก็บด้วยการเข้ารหัสและการแฮชร่วมกับ Salt
- **Actual / impact:** Verifier storage wording mixes encryption with salted hashing; line 333 also phrases phishing resistance as an unlimited inability to intercept authentication.
- **Expected conceptual behavior:** Name salted password hashing with an appropriate cost factor for verifiers; scope encryption and phishing resistance to the intended protections.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Markdown 328 wording is ambiguous, not evidence that reversible encryption alone is advocated.; Markdown 333 contains ไม่สามารถถูกดักขโมย wording.; NIST SP 800-63B-4 §§3.1.1.2 and 3.2.5 were directly checked.
- **References:** [pages.nist.gov](https://pages.nist.gov/800-63-4/sp800-63b.html)
- **Recommendation:** Clarify hashing for verifier storage, transport/additional encryption if intended, and scope phishing-resistant claims without implying immunity to endpoint/session compromise.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-2-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

### D34-01 — P2 — CSF 2

- **Category:** factual/version. **Domain/subsection:** 3 / 3.1.6.
- **Location:** [content/isc2-cc-2026/reading/domain-3.md:129](../../../content/isc2-cc-2026/reading/domain-3.md#L129).
- **Current excerpt/behavior:** Govern ใน CSF 2.0) โดยมีหัวข้อการควบคุมการเข้าถึง (PR.AC)
- **Actual / impact:** CSF 2.0 is paired with old PR.AC category.
- **Expected conceptual behavior:** CSF 2.0 uses PR.AA; PR.AC belongs to CSF 1.1.
- **Root cause:** Versions mixed in one sentence.
- **Evidence:** NIST FAQ explicitly says PR.AC moved to PR.AA.
- **References:** [www.nist.gov](https://www.nist.gov/cyberframework/faqs)
- **Recommendation:** Use PR.AA or explicitly label PR.AC as CSF 1.1.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-02 — P2 — Action is missing from the main four-category list, while the matrix at line 283 and scenario reasoning at 563 include it

- **Category:** factual/internal semantic inconsistency. **Domain/subsection:** 3 / 3.2.7, 3.2.8, review.
- **Location:** [content/isc2-cc-2026/reading/domain-3.md:257](../../../content/isc2-cc-2026/reading/domain-3.md#L257).
- **Current excerpt/behavior:** หมวดหมู่คุณลักษณะหลัก 4 ด้าน: [Subject, Object, Environmental, Device]
- **Actual / impact:** Action is missing from the main four-category list, while the matrix at line 283 and scenario reasoning at 563 include it. Desktop diagram at 2206 omits it; mobile at 2255 includes it.
- **Expected conceptual behavior:** Consistent subject, object/resource, requested action/operation, environment model; device posture remains a valid attribute.
- **Root cause:** Parallel summaries use inconsistent taxonomies.
- **Evidence:** Local prose/matrix/scenario/desktop/mobile comparison; NIST definition evaluates requested operations.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/pubs/sp/800/162/upd2/final), [csrc.nist.gov](https://csrc.nist.gov/projects/attribute-based-access-control)
- **Recommendation:** Restore action consistently and add read-vs-delete example.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-03 — P2 — ARP is in TCP/IP Internet layer row

- **Category:** factual/protocol layer. **Domain/subsection:** 4 / 4.1.3.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:90](../../../content/isc2-cc-2026/reading/domain-4.md#L90).
- **Current excerpt/behavior:** Internet Layer (L2) ... IPv4, IPv6, ICMP, IPsec, ARP
- **Actual / impact:** ARP is in TCP/IP Internet layer row.
- **Expected conceptual behavior:** ARP belongs with Link/Network Access in the four-layer architecture used here.
- **Root cause:** ARP grouped with IP despite local-link role.
- **Evidence:** RFC1122 covers ARP in Link Layer section 2.3.2.
- **References:** [www.rfc-editor.org](https://www.rfc-editor.org/rfc/rfc1122.html#section-2.3.2)
- **Recommendation:** Move ARP to Link/Network Access row.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-04 — P2 — SLAAC taught as combining prefix with MAC address

- **Category:** factual/IPv6. **Domain/subsection:** 4 / 4.1.5.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:138](../../../content/isc2-cc-2026/reading/domain-4.md#L138).
- **Current excerpt/behavior:** นำ Prefix ที่ได้มารวมกับ MAC Address ของตนเอง
- **Actual / impact:** SLAAC taught as combining prefix with MAC address.
- **Expected conceptual behavior:** Combine prefix with interface identifier; current defaults need not embed MAC.
- **Root cause:** Historical MAC-derived method presented as universal.
- **Evidence:** RFC8064 recommends stable identifiers without embedded link-layer address by default.
- **References:** [www.rfc-editor.org](https://www.rfc-editor.org/rfc/rfc8064.html)
- **Recommendation:** Teach prefix + IID; label EUI-64 as one historical method.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-05 — P2 — All data/IAM responsibility is exclusively customer, impossible for CSP to bear; repeats at 697,724,809–810, scenario module 81–82, broad diagram cells

- **Category:** factual/cloud accountability vs operation. **Domain/subsection:** 4 / 4.3.3, review.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:460](../../../content/isc2-cc-2026/reading/domain-4.md#L460).
- **Current excerpt/behavior:** ลูกค้า (Customer) ต้องเป็นผู้รับผิดชอบเสมอ 100%
- **Actual / impact:** All data/IAM responsibility is exclusively customer, impossible for CSP to bear; repeats at 697,724,809–810, scenario module 81–82, broad diagram cells.
- **Expected conceptual behavior:** Customer retains classification/access decisions and tenant duties; CSP also secures managed storage/IAM infrastructure/services.
- **Root cause:** Customer accountability collapsed into exclusive operational responsibility.
- **Evidence:** Azure retained duties concern customer-controlled components; AWS IAM/STS itself operates under shared responsibility.
- **References:** [learn.microsoft.com](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility), [docs.aws.amazon.com](https://docs.aws.amazon.com/IAM/latest/UserGuide/security.html), [docs.aws.amazon.com](https://docs.aws.amazon.com/IAM/latest/UserGuide/data-protection.html)
- **Recommendation:** Bound cells to customer-controlled data/access decisions; retain customer answer for the public-sharing misconfiguration scenario.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-06 — P2 — AWS SG/NACL model taught under generic VPC/VNet header without AWS qualification; return traffic wording can imply any outbound traffic

- **Category:** factual/provider-specific generalization. **Domain/subsection:** 4 / 4.3.6, review.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:507](../../../content/isc2-cc-2026/reading/domain-4.md#L507).
- **Current excerpt/behavior:** Security Group ... Instance / Virtual Machine (Host Level) ... กำหนดได้เฉพาะกฎ Allow
- **Actual / impact:** AWS SG/NACL model taught under generic VPC/VNet header without AWS qualification; return traffic wording can imply any outbound traffic.
- **Expected conceptual behavior:** AWS-specific allow-only SG vs stateless subnet NACL; Azure NSG allows deny and is stateful at subnet/NIC.
- **Root cause:** Provider-specific implementation presented without provider context.
- **Evidence:** AWS VPC FAQ compared directly with Azure NSG official documentation.
- **References:** [aws.amazon.com](https://aws.amazon.com/vpc/faqs/), [learn.microsoft.com](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)
- **Recommendation:** Label AWS VPC example; specify responses to an allowed flow rather than all outbound.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-07 — P2 — Private subnet egress requires NAT Gateway only

- **Category:** factual/cloud egress. **Domain/subsection:** 4 / 4.3.6.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:505](../../../content/isc2-cc-2026/reading/domain-4.md#L505).
- **Current excerpt/behavior:** หากต้องการออกไปดาวน์โหลดแพตช์ภายนอก ต้องผ่าน NAT Gateway เท่านั้น
- **Actual / impact:** Private subnet egress requires NAT Gateway only.
- **Expected conceptual behavior:** NAT gateway is one IPv4 option; NAT instance and IPv6 egress-only IGW are alternatives.
- **Root cause:** Common architecture stated as exclusive rule.
- **Evidence:** AWS VPC FAQ documents NAT instance and IPv6 egress-only IGW.
- **References:** [aws.amazon.com](https://aws.amazon.com/vpc/faqs/)
- **Recommendation:** Replace only with an example and qualify address family/provider.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-08 — P3 — Legacy short titles claimed as official 2026 metadata; also domain-4

- **Category:** metadata/outline alignment. **Domain/subsection:** [3, 4] / metadata, lead.
- **Location:** [content/isc2-cc-2026/reading/domain-3.js:13](../../../content/isc2-cc-2026/reading/domain-3.js#L13).
- **Current excerpt/behavior:** Domain 3: Access Controls; Domain 4: Network Security
- **Actual / impact:** Legacy short titles claimed as official 2026 metadata; also domain-4.js:13 and both MD leads.
- **Expected conceptual behavior:** Identity and Access Management (IAM) Concepts; Networking and Cloud Security Concepts.
- **Root cause:** Titles were not updated alongside 2026 objective IDs/weights.
- **Evidence:** Official ISC2 current detailed outline and effective-date header fetched; PDF click did not resolve.
- **References:** [www.isc2.org](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)
- **Recommendation:** Adopt official titles; clearly mark abbreviated navigation labels.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-09 — P2 — Last octet 255 is given as generic IPv4 broadcast pattern

- **Category:** factual/IPv4 broadcast. **Domain/subsection:** 4 / 4.1.1.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:22](../../../content/isc2-cc-2026/reading/domain-4.md#L22).
- **Current excerpt/behavior:** Broadcast (FF:FF:FF:FF:FF:FF หรือ x.x.x.255)
- **Actual / impact:** Last octet 255 is given as generic IPv4 broadcast pattern.
- **Expected conceptual behavior:** Directed broadcast sets all host bits to one; mask determines which bits are host bits.
- **Root cause:** Common /24 example lacks its prefix qualifier.
- **Evidence:** RFC919 all-ones host-number principle; calculated counterexamples: 192.168.1.127 broadcast for /25; 192.168.1.255 can be host in /16.
- **References:** [www.rfc-editor.org](https://www.rfc-editor.org/rfc/rfc919.html#section-7)
- **Recommendation:** Use explicit 192.168.1.255/24 example and all-host-bits rule.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-10 — P2 — APIPA appears under RFC1918 private heading; reserved /16 is presented as autoselection range

- **Category:** factual/IPv4 link-local. **Domain/subsection:** 4 / 4.1.4.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:114](../../../content/isc2-cc-2026/reading/domain-4.md#L114).
- **Current excerpt/behavior:** APIPA ... 169.254.0.0 – 169.254.255.255
- **Actual / impact:** APIPA appears under RFC1918 private heading; reserved /16 is presented as autoselection range.
- **Expected conceptual behavior:** Link-local is separate from RFC1918; selection 169.254.1.0–169.254.254.255 excludes first/last /24.
- **Root cause:** Reserved prefix conflated with selectable addresses and private-address category.
- **Evidence:** RFC3927 sections 2.1 and 2.7.
- **References:** [www.rfc-editor.org](https://www.rfc-editor.org/rfc/rfc3927.html#section-2.1)
- **Recommendation:** Separate link-local heading and state reserved prefix vs host selection range.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-11 — P2 — MAC declared highest security and absolute prevention of leakage; desktop/mobile repeat at generator 2180/2233

- **Category:** factual/security guarantee. **Domain/subsection:** 3 / 3.2.5, 3.2.8, review.
- **Location:** [content/isc2-cc-2026/reading/domain-3.md:238](../../../content/isc2-cc-2026/reading/domain-3.md#L238).
- **Current excerpt/behavior:** ความมั่นคงปลอดภัยระดับสูงสุด ป้องกันข้อมูลรั่วไหลได้อย่างเด็ดขาด
- **Actual / impact:** MAC declared highest security and absolute prevention of leakage; desktop/mobile repeat at generator 2180/2233.
- **Expected conceptual behavior:** Mandatory central policy enforcement is a model property; real protection depends on implementation/policy/other controls.
- **Root cause:** Relative model trait turned into an absolute outcome guarantee.
- **Evidence:** NIST MAC definition specifies policy authority/enforcement, not universal rankings; main local line237 already correctly adds Need-to-Know.
- **References:** [csrc.nist.gov](https://csrc.nist.gov/glossary/term/mandatory_access_control), [csrc.nist.gov](https://csrc.nist.gov/glossary/term/need_to_know)
- **Recommendation:** Remove guarantee and repeat Need-to-Know/applicable-policy caveat in review scenario.
- **Confidence:** High For Guarantee; Medium For Scenario Omission Severity. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-12 — P2 — Hidden SSID name is said to be transmitted in beacons when clients connect

- **Category:** factual/wireless. **Domain/subsection:** 4 / 4.1.9.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:268](../../../content/isc2-cc-2026/reading/domain-4.md#L268).
- **Current excerpt/behavior:** ชื่อเครือข่ายยังคงถูกส่งออกไปใน Probe Requests และ Beacon Frames เมื่อมีเครื่องเชื่อมต่อ
- **Actual / impact:** Hidden SSID name is said to be transmitted in beacons when clients connect.
- **Expected conceptual behavior:** AP still sends beacons, but hidden SSID name is omitted/null; discovery/association traffic can reveal name.
- **Root cause:** Continued beacon transmission conflated with SSID-name inclusion.
- **Evidence:** Cisco Meraki hidden-SSID note distinguishes absent name in beacons.
- **References:** [documentation.meraki.com](https://documentation.meraki.com/Wireless/Operate_and_Maintain/User_Guides/Monitoring_and_Reporting/Air_Marshal)
- **Recommendation:** Keep conclusion that hiding is not robust security; correct mechanism.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-13 — P2 — FaaS always scales to zero when idle, with Azure Functions included as example

- **Category:** factual/service plan generalization. **Domain/subsection:** 4 / 4.3.2.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:442](../../../content/isc2-cc-2026/reading/domain-4.md#L442).
- **Current excerpt/behavior:** สเกลขนาดเป็นศูนย์เมื่อไม่มีการใช้งาน
- **Actual / impact:** FaaS always scales to zero when idle, with Azure Functions included as example.
- **Expected conceptual behavior:** Scale-to-zero depends on plan/configuration; Azure Premium always has at least one instance.
- **Root cause:** Common consumption-plan property treated as universal definition.
- **Evidence:** Azure Functions event-driven scaling table specifies minimum-one Premium and always-ready options.
- **References:** [learn.microsoft.com](https://learn.microsoft.com/en-us/azure/azure-functions/event-driven-scaling)
- **Recommendation:** Qualify scale-to-zero support by provider/plan and explain cold-start tradeoff.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-14 — P2 — PaaS OS/runtime handled entirely by CSP, followed by Beanstalk example; may imply no customer platform-maintenance duties

- **Category:** service-specific qualification. **Domain/subsection:** 4 / 4.3.2, review.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:432](../../../content/isc2-cc-2026/reading/domain-4.md#L432).
- **Current excerpt/behavior:** ผู้ให้บริการคลาวด์ดูแล ... ระบบปฏิบัติการ ... ให้ทั้งหมด
- **Actual / impact:** PaaS OS/runtime handled entirely by CSP, followed by Beanstalk example; may imply no customer platform-maintenance duties.
- **Expected conceptual behavior:** Abstract PaaS provider-management pattern is valid; named service still requires customer supported-version/update configuration and major branch maintenance.
- **Root cause:** Abstract responsibility pattern lacks service-specific exception.
- **Evidence:** Beanstalk managed updates may be disabled and exclude major platform branches; retired versions stop security updates.
- **References:** [docs.aws.amazon.com](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html), [docs.aws.amazon.com](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-support-policy.html)
- **Recommendation:** Retain exam-level provider OS pattern but qualify named-service duties; PaaS source-code scenario remains correctly keyed.
- **Confidence:** High Evidence; Medium On Reader Inference. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-15 — P3 — LDAP listed as a directory service product peer to AD

- **Category:** factual/technology taxonomy. **Domain/subsection:** 3 / 3.1.7.
- **Location:** [content/isc2-cc-2026/reading/domain-3.md:139](../../../content/isc2-cc-2026/reading/domain-3.md#L139).
- **Current excerpt/behavior:** ตัวอย่าง: Microsoft Active Directory (AD), Lightweight Directory Access Protocol (LDAP)
- **Actual / impact:** LDAP listed as a directory service product peer to AD.
- **Expected conceptual behavior:** LDAP is directory-access protocol; AD/OpenLDAP are implementation examples.
- **Root cause:** Protocol vs implementation distinction omitted.
- **Evidence:** RFC4511 defines LDAP protocol elements for access to directory services.
- **References:** [www.rfc-editor.org](https://www.rfc-editor.org/rfc/rfc4511.html)
- **Recommendation:** Name AD/OpenLDAP services and label LDAP protocol separately.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-16 — P3 — Sockets is labeled a Session-layer protocol; diagram2284 repeats

- **Category:** factual/API vs protocol. **Domain/subsection:** 4 / 4.1.2, 4.1.3.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:50](../../../content/isc2-cc-2026/reading/domain-4.md#L50).
- **Current excerpt/behavior:** โพรโทคอลสำคัญ: RPC (Remote Procedure Call), NetBIOS, Sockets
- **Actual / impact:** Sockets is labeled a Session-layer protocol; diagram2284 repeats.
- **Expected conceptual behavior:** Socket is API/endpoint abstraction using transport providers.
- **Root cause:** Conceptual layer mapping mixes API with wire protocols.
- **Evidence:** Microsoft socket API creates sockets bound to transport service provider.
- **References:** [learn.microsoft.com](https://learn.microsoft.com/en-us/windows/win32/api/winsock2/nf-winsock2-socket)
- **Recommendation:** Remove from protocol examples or label API separately; qualify illustrative OSI mappings.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-Q1 — P3 — Six plausible activities are called standard order and role-first is unconditional

- **Category:** educational workflow. **Domain/subsection:** 3 / 3.1.1, 3.1.3, review.
- **Location:** [content/isc2-cc-2026/reading/domain-3.md:64](../../../content/isc2-cc-2026/reading/domain-3.md#L64).
- **Current excerpt/behavior:** กระบวนการ Provisioning มี 6 ขั้นตอนตามลำดับมาตรฐาน
- **Actual / impact:** Six plausible activities are called standard order and role-first is unconditional.
- **Expected conceptual behavior:** Illustrative workflow; context-dependent prerequisites and approvals.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Official outline does not prescribe six-step ordering; NIST AC2 policy/criteria.
- **References:** [www.isc2.org](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)
- **Recommendation:** Label illustrative; bound first-action question.
- **Confidence:** High Except Bounded Inference As Stated. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-Q2 — P3 — Disable conflated with lockout; history-retention rationale generalized

- **Category:** Thai terminology and retention. **Domain/subsection:** 3 / 3.1.5, review.
- **Location:** [content/isc2-cc-2026/reading/domain-3.md:107](../../../content/isc2-cc-2026/reading/domain-3.md#L107).
- **Current excerpt/behavior:** Disable Account ... (Lock Account)
- **Actual / impact:** Disable conflated with lockout; history-retention rationale generalized.
- **Expected conceptual behavior:** Administrative disable is distinct from failed-login lockout; retention is policy/system-dependent.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Microsoft documents unlock/disable/delete separately.
- **References:** [learn.microsoft.com](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage-user-accounts-in-windows-server)
- **Recommendation:** Use disable/block sign-in; qualify delete/log dependency.
- **Confidence:** High Except Bounded Inference As Stated. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-Q3 — P3 — Biometric example lacks NIST remote-auth MFA qualification; no standalone compliance claim

- **Category:** authentication nuance. **Domain/subsection:** 3 / 3.1.6, 3.1.7.
- **Location:** [js/core/diagram-generator.js:2056](../../../js/core/diagram-generator.js#L2056).
- **Current excerpt/behavior:** รหัสผ่าน, OTP, ไบโอเมตริกซ์
- **Actual / impact:** Biometric example lacks NIST remote-auth MFA qualification; no standalone compliance claim.
- **Expected conceptual behavior:** In NIST remote-auth context biometric factor accompanies physical authenticator.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** SP800-63B-4 sections2 and3.2.3 checked.
- **References:** [pages.nist.gov](https://pages.nist.gov/800-63-4/sp800-63b.html)
- **Recommendation:** Cite current family; add distinct-factor recap/crosslink.
- **Confidence:** High Except Bounded Inference As Stated. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-Q9 — P3 — Source says support, not automatic encryption; generic 6to4 example needs mode qualifier

- **Category:** IPv6 qualification. **Domain/subsection:** 4 / 4.1.5, review.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:136](../../../content/isc2-cc-2026/reading/domain-4.md#L136).
- **Current excerpt/behavior:** รองรับ ... IPsec
- **Actual / impact:** Source says support, not automatic encryption; generic 6to4 example needs mode qualifier.
- **Expected conceptual behavior:** No false always-encrypted finding; only anycast6to4 deprecated.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** RFC8504 SHOULD; RFC7526 explicitly preserves basic unicast6to4.
- **References:** [www.rfc-editor.org](https://www.rfc-editor.org/rfc/rfc7526.html#section-4)
- **Recommendation:** Add no-automatic-encryption caveat and transition context.
- **Confidence:** High Except Bounded Inference As Stated. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-Q10 — P3 — Conventional examples do not explicitly say only; HTTPS TCP443 omits HTTP3

- **Category:** protocol common-case omission. **Domain/subsection:** 4 / 4.1.6, 4.1.7.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:192](../../../content/isc2-cc-2026/reading/domain-4.md#L192).
- **Current excerpt/behavior:** UDP สำหรับคำขอทั่วไป, TCP สำหรับ Zone Transfer
- **Actual / impact:** Conventional examples do not explicitly say only; HTTPS TCP443 omits HTTP3.
- **Expected conceptual behavior:** DNS ordinary queries may use TCP; HTTP3 uses UDP/QUIC.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** RFC7766 and9114 verified; FTPS/SSL extensions not separately verified.
- **References:** [www.rfc-editor.org](https://www.rfc-editor.org/rfc/rfc7766.html#section-5)
- **Recommendation:** Add modern qualifications; do not count common examples as wholly false.
- **Confidence:** High Except Bounded Inference As Stated. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-Q12 — P3 — FW web-only label accompanies SMTP/DNS services; five-tier graphic called concentric

- **Category:** diagram pedagogic qualification. **Domain/subsection:** 4 / 4.2.3, 4.2.6.
- **Location:** [js/core/diagram-generator.js:2426](../../../js/core/diagram-generator.js#L2426).
- **Current excerpt/behavior:** Port 80/443
- **Actual / impact:** FW web-only label accompanies SMTP/DNS services; five-tier graphic called concentric.
- **Expected conceptual behavior:** Identify example web rule; make five layers illustrative.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** Local diagram2437,2441,2445 comparison; no geometry/browser claim.
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Qualify labels; no claim that all firewalls permit only80/443.
- **Confidence:** High Except Bounded Inference As Stated. **Verification status:** recommendation; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### D34-Q14 — P3 — Onprem+public vendor usage broader than strict NIST; private highest-security guarantee and commercial-only public ownership need caveats

- **Category:** NIST vs vendor cloud terminology. **Domain/subsection:** 4 / 4.3.4, 4.3.5, review.
- **Location:** [content/isc2-cc-2026/reading/domain-4.md:476](../../../content/isc2-cc-2026/reading/domain-4.md#L476).
- **Current excerpt/behavior:** Private Cloud หรือ On-Premises ผสมกับ Public Cloud
- **Actual / impact:** Onprem+public vendor usage broader than strict NIST; private highest-security guarantee and commercial-only public ownership need caveats.
- **Expected conceptual behavior:** NIST hybrid combines cloud infrastructures; security depends on controls; ownership may be business/academic/government.
- **Root cause:** Not independently established; the observation is bounded to the evidence below.
- **Evidence:** NIST800-145 and hybrid glossary retrieved.
- **References:** [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf)
- **Recommendation:** Qualify NIST attribution and cloud-vs-datacenter; acknowledge hybrid/multicloud overlap.
- **Confidence:** High Except Bounded Inference As Stated. **Verification status:** qualified concern; no implementation or human acceptance.
- **Full source-review context:** [domain-3-4-source-review.md](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

### RN-I-001 — P1 — Desktop SVG labels become too small, especially at 1024px

- **Category:** Typography; Diagram; UI/UX. **Domain/subsection:** [1, 2, 3, 4] / all diagram subsections.
- **Location:** [css/reading.css:1187](../../../css/reading.css#L1187).
- **Current excerpt/behavior:** At 1024px, visible SVG text falls to 6.72px (D1), 6.56px (D2/D3), and 5.63px (D4). All 24 diagram payloads contain labels below 11px across the four domains; 23 subsection ranges are affected because one D1 subsection contains two diagrams. Some D3/D4 labels remain only 8–10px at wide desktop.
- **Actual / impact:** At 1024px, visible SVG text falls to 6.72px (D1), 6.56px (D2/D3), and 5.63px (D4). All 24 diagram payloads contain labels below 11px across the four domains; 23 subsection ranges are affected because one D1 subsection contains two diagrams. Some D3/D4 labels remain only 8–10px at wide desktop.
- **Expected conceptual behavior:** Instructional labels should remain comfortably legible at the available reading-pane width; use a readable responsive representation before severe SVG scaling occurs.
- **Root cause:** The 290px sidebar plus 48px gap leaves a 575px prose pane at 1024px; full-width SVG viewBoxes scale their text. The alternative representations switch at viewport 768px rather than actual component width.
- **Evidence:** browser-results-attempt3.json: sections[].tinySvg for 1024x768 in both themes; detail-d3-topic-3-2-models-matrix-1024.png; All 24 mobile previews/source templates were reviewed; this is not a claim that phone labels still use the desktop SVG.
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Choose a minimum useful component width for each diagram. Use readable HTML, a simplified vector, or a focused diagram at that width; preserve relationships rather than automatically stacking every item as cards.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-003 — P1 — Saved reading location is displaced on reload

- **Category:** Navigation; UI/UX; Technical. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [js/ui/screen-reading.js:149](../../../js/ui/screen-reading.js#L149).
- **Current excerpt/behavior:** Isolated cold topic loads scroll to the intended subsection, but scrollspy changes the hash/active marker to the broad objective. After another 420px scroll and reload, D1 y8439→392, D2 y4166→421, D3 y4706→450, D4 y6317→479.
- **Actual / impact:** Isolated cold topic loads scroll to the intended subsection, but scrollspy changes the hash/active marker to the broad objective. After another 420px scroll and reload, D1 y8439→392, D2 y4166→421, D3 y4706→450, D4 y6317→479.
- **Expected conceptual behavior:** Reload/resume should retain the intended subsection or documented reading offset, and the active marker should identify the actual subsection.
- **Root cause:** restoreLocation returns immediately after restoring an anchor, ignoring scrollY. Scrollspy observes .reading-topic-anchor and entire .reading-objective-section blocks; D2–D4 h3 topics lack the observed class. Objective intersections can replace the explicit topic hash.
- **Evidence:** focused-results.json: isolated-cold-scroll-reload (four fresh full-document loads); browser-results-attempt3.json reproduces the same symptom, but its accumulated-route journeys are secondary evidence only.; js/ui/screen-reading.js:149–191, 449–487; js/app.js:28–32
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Repair scrollspy/restore precedence within the existing schema, using real heading targets and a stable location policy. Verify a mid-subsection position and actual heading after reload, not only nonzero scroll.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-004 — P2 — Desktop navigation disappears during long reading

- **Category:** Navigation; UI/UX. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [css/reading.css:111](../../../css/reading.css#L111).
- **Current excerpt/behavior:** At desktop scrollY=5000, the sidebar top is -4843px and bottom -4155px despite position:sticky. The left rail becomes unused space and cannot navigate without returning to the top.
- **Actual / impact:** At desktop scrollY=5000, the sidebar top is -4843px and bottom -4155px despite position:sticky. The left rail becomes unused space and cannot navigate without returning to the top.
- **Expected conceptual behavior:** Long-reading navigation should remain reachable as intended by the sticky layout.
- **Root cause:** Verified geometry shows sticky behavior is ineffective. The likely cause is the html/body overflow-x:hidden creating a scrolling ancestor (computed overflow hidden auto); the causal CSS change was not applied because this is audit-only.
- **Evidence:** focused-results.json: sidebar-at-long-scroll; desktop-navigation-offscreen.png; css/base.css:75–85; css/reading.css:111–123
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Investigate the scrolling ancestor and sticky boundary in a small layout task; retain the existing restrained reader design.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-005 — P2 — Reader remounts retain old window handlers

- **Category:** Technical; Navigation. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [js/ui/screen-reading.js:838](../../../js/ui/screen-reading.js#L838).
- **Current excerpt/behavior:** Hash routing remounts Reading Notes without a reader disposal hook. Earlier domain handlers continue saving new scroll offsets into previous domain entries. Focused route tests show simultaneous stale-domain writes; final-browser-checks.json records listener counts.
- **Actual / impact:** Hash routing remounts Reading Notes without a reader disposal hook. Earlier domain handlers continue saving new scroll offsets into previous domain entries. Focused route tests show simultaneous stale-domain writes; final-browser-checks.json records listener counts.
- **Expected conceptual behavior:** Exactly one active reader should own its observers, scroll/resize handlers and pending timers.
- **Root cause:** Cleanup is closure-local and is called by the in-app Back handler, but renderApp remounts only dispose Learning Slides. Reading render returns no disposal handle.
- **Evidence:** focused-results.json: inactive-domain-topic, domain-button-switch, sidebar-at-long-scroll show old-domain lastScrollY updates; js/app.js:69–72; js/ui/renderer.js:27–30; screen-reading.js:642–652, 838–879
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Give the reader a route-disposal lifecycle, clear timers, and verify repeated cross-domain browser Back/Forward does not add listeners or alter inactive-domain progress.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-006 — P1 — Hidden mobile drawer remains in the keyboard path

- **Category:** Accessibility; Navigation; UI/UX. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [css/reading.css:3052](../../../css/reading.css#L3052).
- **Current excerpt/behavior:** With the drawer closed, Tab reaches its close button at x=-55 and domain/topic controls at x=-290 to -240. Opening the modal-looking drawer leaves focus outside it; Escape does not close it and the toggle exposes no expanded state.
- **Actual / impact:** With the drawer closed, Tab reaches its close button at x=-55 and domain/topic controls at x=-290 to -240. Opening the modal-looking drawer leaves focus outside it; Escape does not close it and the toggle exposes no expanded state.
- **Expected conceptual behavior:** Closed navigation must be removed from keyboard/assistive traversal. An open overlay should expose its state, provide sensible focus entry/return and prevent obscured background interaction.
- **Root cause:** The drawer is only translated off-screen. There is no inert/hidden state for the closed panel and no focus/keyboard handling in bindEvents.
- **Evidence:** browser-results-attempt3.json: mobile-closed-Tab-sequence, mobile-open, mobile-Escape; final-browser-checks.json: closed-drawer-focus; mobile-sidebar-open.png; js/ui/screen-reading.js:335–365, 670–695
- **References:** [www.w3.org](https://www.w3.org/TR/WCAG22/), [www.w3.org](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- **Recommendation:** Apply an explicit closed state and a coherent drawer focus model; support Escape and focus return. Validate WCAG 2.4.3/2.4.7 and modal-overlay interaction. The APG modal pattern is guidance, not itself a WCAG conformance rule.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-007 — P2 — Thai passages inherit the English page language

- **Category:** Accessibility; Bilingual. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [js/ui/screen-reading.js:289](../../../js/ui/screen-reading.js#L289).
- **Current excerpt/behavior:** The document is lang=en and each rendered domain article contains zero lang attributes despite extensive Thai explanatory paragraphs.
- **Actual / impact:** The document is lang=en and each rendered domain article contains zero lang attributes despite extensive Thai explanatory paragraphs.
- **Expected conceptual behavior:** The Thai prose language and meaningful English passages should be programmatically determinable, preserving English exam keywords appropriately.
- **Root cause:** The article renderer/parser preserve no language metadata for the bilingual passages; index.html declares only English.
- **Evidence:** browser-results-attempt3.json: language=en, languageTags=0 in all 56 configurations; domain-1-rendered.html through domain-4-rendered.html; index.html:2
- **References:** [www.w3.org](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html)
- **Recommendation:** Add appropriately scoped Thai/English language information in a later accessibility task. Do not add a language tag to every borrowed acronym or proper name. Native screen-reader pronunciation was not tested.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-008 — P2 — Scenario/supporting text misses minimum contrast

- **Category:** Accessibility; Typography. **Domain/subsection:** [1, 2, 3, 4] / review, 1.1.4, 1.5.3, 4.1.3, 4.2.3, 4.2.6, 4.3.3.
- **Location:** [css/reading.css:2762](../../../css/reading.css#L2762).
- **Current excerpt/behavior:** Settled light-theme scenario answer labels use #10b981 on white: 2.54:1 at 11.5px. Dark-theme scenario topic text and D1 MFA subtitles use #717182 on #131318: 3.87:1; D1 priority badges are 3.58:1.
- **Actual / impact:** Settled light-theme scenario answer labels use #10b981 on white: 2.54:1 at 11.5px. Dark-theme scenario topic text and D1 MFA subtitles use #717182 on #131318: 3.87:1; D1 priority badges are 3.58:1. D4 desktop diagram text painted white on #10b981 has 2.54:1 contrast, and white on #3b82f6 has about 3.68:1; small responsibility and network-layer labels are affected in both themes.
- **Expected conceptual behavior:** Normal-sized instructional and navigational text should achieve at least 4.5:1 contrast.
- **Root cause:** Scenario answer color is hardcoded; other secondary text uses --text-muted at small sizes.
- **Evidence:** contrast-final.json (8 settled-theme probes); scenario-settled-light.png, scenario-settled-dark.png, mfa-settled-dark.png; The initial focused-results contrast data captured transition colors and is explicitly excluded. Counts include repeated elements and are not unique-defect counts.; svg-geometry.json records actual SVG fill and preceding colored rectangles; diagram-d4-3-1920-light.png confirms the small white-on-color labels. HTML-only contrast counts do not include these SVG paint checks.
- **References:** [www.w3.org](https://www.w3.org/TR/WCAG22/)
- **Recommendation:** Adjust only the affected foreground tokens and labels, then verify both themes and text roles against WCAG 1.4.3.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-009 — P2 — Task 145 keyword protection exceeds the last cell

- **Category:** Table; Typography; Semantic Presentation. **Domain/subsection:** 2 / 2.1.4.
- **Location:** [css/reading.css:2957](../../../css/reading.css#L2957).
- **Current excerpt/behavior:** At table width 780px, final column width is 187.22px with 32px horizontal padding; Enterprise IT Governance is 182.30px wide, exceeding the 155.22px content box. Wrapper scrollWidth is 791px. At 1024px the wrapper is 573px, so scrolling is required contrary to the earlier report.
- **Actual / impact:** At table width 780px, final column width is 187.22px with 32px horizontal padding; Enterprise IT Governance is 182.30px wide, exceeding the 155.22px content box. Wrapper scrollWidth is 791px. At 1024px the wrapper is 573px, so scrolling is required contrary to the earlier report.
- **Expected conceptual behavior:** The keyword and padding should fit the assigned cell and the report should describe actual scrolling. Wide desktop column balance should be preserved.
- **Root cause:** Fixed 20/24/32/24 percent widths and 780px minimum plus nowrap exceed the actual padded content width. The td min-width:200px does not establish the claimed final column width under fixed layout.
- **Evidence:** browser-results-attempt3.json: GRC-details for 14 states; full-component-d2-topic-2-1-frameworks-standards-320-light.png; d2-1920x1080-light.png, grc-right-320-light.png; All three English keywords remain unfragmented. Keyboard ArrowRight moves the wrapper 40px in this Chrome; missing tabindex alone is not logged as a keyboard failure.
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Account for padding and measured keyword width, or permit natural word-boundary wrapping. Keep contextual comparison relationships and test first/last columns. Consider a readable narrow-screen comparison format through a human-reviewed example.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-010 — P3 — Escaped currency leaks through raw HTML

- **Category:** Typography; Technical. **Domain/subsection:** 1 / 1.2.2.
- **Location:** [content/isc2-cc-2026/reading/domain-1.md:422](../../../content/isc2-cc-2026/reading/domain-1.md#L422).
- **Current excerpt/behavior:** Raw HTML lines display literal backslashes in currency values, including \$10,000 and \$5,000; ordinary Markdown currency processing does remove escapes.
- **Actual / impact:** Raw HTML lines display literal backslashes in currency values, including \$10,000 and \$5,000; ordinary Markdown currency processing does remove escapes.
- **Expected conceptual behavior:** Currency examples should display clean dollar amounts with no parser escape artifacts.
- **Root cause:** The raw structural HTML branch bypasses parseInline and does not unescape literal dollar sequences.
- **Evidence:** browser-results-attempt3.json: D1 rawLeaks in all states; domain-1-rendered.html; markdown-parser.js:365–377; full-component-d1-topic-1-2-quantitative-risk-320-light.png
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Unify safe inline processing for supported HTML content or remove the unnecessary source escapes in a narrowly scoped later fix.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-011 — P3 — Offline math alternatives retain raw LaTeX labels

- **Category:** Accessibility; Technical. **Domain/subsection:** 1 / 1.2.1, 1.2.2, 1.2.5.
- **Location:** [js/core/math-renderer.js:73](../../../js/core/math-renderer.js#L73).
- **Current excerpt/behavior:** The semantic fallback uses original LaTeX as aria-label, including commands such as \times. The normal network-loaded Chrome run uses KaTeX/MathML and exposes no role=math labels in these subsection records.
- **Actual / impact:** The semantic fallback uses original LaTeX as aria-label, including commands such as \times. The normal network-loaded Chrome run uses KaTeX/MathML and exposes no role=math labels in these subsection records.
- **Expected conceptual behavior:** Fallback accessible math should expose a useful expression or spoken alternative, with no assumption about how a particular screen reader pronounces LaTeX commands.
- **Root cause:** formatSemanticMath transforms the visible math but escapes the original input directly into aria-label.
- **Evidence:** js/core/math-renderer.js:73–77; main browser mathLabels arrays are empty with katex=true; Historical RN-D1-004 is therefore conditional in current implementation, not a verified normal-mode speech defect.
- **References:** [www.w3.org](https://www.w3.org/TR/WCAG22/)
- **Recommendation:** Test offline fallback and one screen-reader/MathML combination before choosing a spoken-label strategy. Keep native MathML when available.
- **Confidence:** High. **Verification status:** qualified concern; no implementation or human acceptance.

### RN-I-012 — P2 — HTML trust boundary needs explicit handling

- **Category:** Technical. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [js/core/markdown-parser.js:58](../../../js/core/markdown-parser.js#L58).
- **Current excerpt/behavior:** Allowed tags preserve arbitrary attributes and raw structural lines pass through. A string-only probe preserves onclick on span/div. No untrusted content ingestion or current exploitable route was established.
- **Actual / impact:** Allowed tags preserve arbitrary attributes and raw structural lines pass through. A string-only probe preserves onclick on span/div. No untrusted content ingestion or current exploitable route was established.
- **Expected conceptual behavior:** If content ever becomes untrusted, use an actual attribute/protocol sanitizer; otherwise document and enforce the trusted repository-content boundary.
- **Root cause:** The parser allowlist validates tag names, not attributes; rejecting script/iframe lines is not a complete sanitizer.
- **Evidence:** final-browser-checks.json: parser-attribute-preservation-string-only; no payload executed or inserted; markdown-parser.js:58–70, 274–280, 365–377
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Document the current trust assumption and introduce a safe sanitizer only if an untrusted path is supported. Do not report an exploitable XSS vulnerability without an input path.
- **Confidence:** High. **Verification status:** recommendation; no implementation or human acceptance.

### RN-I-013 — P3 — Heading and component semantics need a consistency pass

- **Category:** Accessibility; Semantic Presentation. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [js/core/markdown-parser.js:395](../../../js/core/markdown-parser.js#L395).
- **Current excerpt/behavior:** All domains have an h1/objective h2/topic h3 structure and table column headers. Some card headings use h5 independent of the surrounding level, diagram titles use h4, and section navigation is often separate from the heading element.
- **Actual / impact:** All domains have an h1/objective h2/topic h3 structure and table column headers. Some card headings use h5 independent of the surrounding level, diagram titles use h4, and section navigation is often separate from the heading element.
- **Expected conceptual behavior:** Learners should encounter predictable heading levels and meaningful list/table relationships; visual card labels need not all be document headings.
- **Root cause:** Raw authored HTML and parser-generated components use different heading conventions.
- **Evidence:** domain-1-rendered.html through domain-4-rendered.html; browser-results-attempt3.json: headings and table scope results; No blanket claim that skipped heading levels alone establish a WCAG failure.
- **References:** [www.w3.org](https://www.w3.org/TR/WCAG22/)
- **Recommendation:** Choose a small heading convention and link real headings to anchors. Preserve the already-correct table scope attributes and scenario grouping.
- **Confidence:** High. **Verification status:** recommendation; no implementation or human acceptance.

### RN-I-014 — P2 — Wide comparisons need selective mobile presentation work

- **Category:** Table; Semantic Presentation; UI/UX. **Domain/subsection:** [1, 2, 3, 4] / table subsections.
- **Location:** [css/reading.css:2823](../../../css/reading.css#L2823).
- **Current excerpt/behavior:** At 320px the article is 260px wide and table wrappers 258px. D3 master model matrix is about 1005px wide; D1 document hierarchy about 705px; D4 TCP/IP comparison about 637px. Tables remain scrollable, but sustained row-to-column comparison requires repeated horizontal movement.
- **Actual / impact:** At 320px the article is 260px wide and table wrappers 258px. D3 master model matrix is about 1005px wide; D1 document hierarchy about 705px; D4 TCP/IP comparison about 637px. Tables remain scrollable, but sustained row-to-column comparison requires repeated horizontal movement.
- **Expected conceptual behavior:** Use a comparison format learners can follow comfortably on narrow screens while retaining meaningful relationships.
- **Root cause:** The same overflow wrapper is the default presentation for tables with substantially different educational structures.
- **Evidence:** browser-results-attempt3.json: per-subsection table dimensions; full-component screenshots; existing table headers/scopes verified; Scrollable data tables have a WCAG reflow exception; horizontal scroll itself is not logged as a conformance failure.
- **References:** [www.w3.org](https://www.w3.org/TR/WCAG22/)
- **Recommendation:** Prototype one long comparison with a persistent row label or a carefully structured mobile alternative. Keep compact tables as tables; do not convert the whole textbook into cards.
- **Confidence:** High. **Verification status:** recommendation; no implementation or human acceptance.

### RN-I-015 — P3 — Reduced motion is supported only by the floating scroll control

- **Category:** Accessibility; UI/UX. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [js/ui/screen-reading.js:622](../../../js/ui/screen-reading.js#L622).
- **Current excerpt/behavior:** With prefers-reduced-motion:reduce, sidebar transition remains 0.25s/0.25s/0.2s and topic navigation still requests smooth scrolling. The floating scroll button correctly uses auto scrolling and disables its transition.
- **Actual / impact:** With prefers-reduced-motion:reduce, sidebar transition remains 0.25s/0.25s/0.2s and topic navigation still requests smooth scrolling. The floating scroll button correctly uses auto scrolling and disables its transition.
- **Expected conceptual behavior:** Apply the preference consistently to the drawer and reading navigation transitions.
- **Root cause:** The media query targets only .reading-scroll-nav and topic/hash routing hardcode smooth behavior.
- **Evidence:** focused-results.json: reduced-motion-sidebar; css/reading.css:3636–3641; js/app.js:77; screen-reading.js:622, 797
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Use the existing motion preference in the two remaining paths. This is a comfort/preference issue; no automatic WCAG AA failure is inferred.
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.

### RN-I-016 — P3 — Shared CSS and content sniffing make patterns brittle

- **Category:** Technical. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [css/reading.css:639](../../../css/reading.css#L639).
- **Current excerpt/behavior:** The h4 + table/list/callout sibling rules are unscoped; generic --space-* tokens are declared at :root. GRC table behavior depends on exact Thai/English header text. Structured directives discard their bodies and render hardcoded payloads.
- **Actual / impact:** The h4 + table/list/callout sibling rules are unscoped; generic --space-* tokens are declared at :root. GRC table behavior depends on exact Thai/English header text. Structured directives discard their bodies and render hardcoded payloads.
- **Expected conceptual behavior:** Reading-only patterns should have explicit semantic hooks and predictable scope, without a redesign or one-off parser branch for every domain.
- **Root cause:** Incremental global selectors and presentation matching are mixed with authored HTML and component registries.
- **Evidence:** css/reading.css:11–19, 639–655; markdown-parser.js:299–341, 459–471; No specific regression in unrelated Learning Slides is asserted.
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Scope shared selectors/tokens to Reading Notes and use explicit semantic table/directive metadata when touching the relevant pattern. Keep the lightweight renderer; a rewrite is not justified.
- **Confidence:** High. **Verification status:** recommendation; no implementation or human acceptance.

### RN-I-017 — P3 — Location memory does not distinguish completed reading

- **Category:** Navigation; Content. **Domain/subsection:** [1, 2, 3, 4] / all.
- **Location:** [js/core/reading-progress.js:115](../../../js/core/reading-progress.js#L115).
- **Current excerpt/behavior:** The progress schema records last location per domain, not completed subsections. The UI exposes no completed-reading history or explicit next-reading action. Reading Notes offers Thai prose with English terms, with no English-only text mode.
- **Actual / impact:** The progress schema records last location per domain, not completed subsections. The UI exposes no completed-reading history or explicit next-reading action. Reading Notes offers Thai prose with English terms, with no English-only text mode.
- **Expected conceptual behavior:** Product decisions should clarify what Continue and completed reading mean and whether the bilingual reader is intentionally a single mixed-language edition.
- **Root cause:** Current progress is a location bookmark and the content is one mixed-language corpus.
- **Evidence:** reading-progress.js:115–125, 265–307; screen-reading.js:105–137, 330–390; No completion percentage or full English edition was inferred from the bilingual label.
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Treat completion indicators, next-subsection control and independent language editions as separate human preference decisions; do not alter the progress schema in audit remediation without approval.
- **Confidence:** High. **Verification status:** recommendation; no implementation or human acceptance.

### RN-I-018 — P2 — Cloud responsibility legend is clipped inside its SVG

- **Category:** Diagram; Semantic Presentation. **Domain/subsection:** 4 / 4.3.3.
- **Location:** [js/core/diagram-generator.js:2637](../../../js/core/diagram-generator.js#L2637).
- **Current excerpt/behavior:** The CSP legend extends 34.07px beyond the SVG right edge at 1920px and 23.96px at 1024px. The SVG overflow is hidden, visibly truncating the Thai label even though there is no page overflow.
- **Actual / impact:** The CSP legend extends 34.07px beyond the SVG right edge at 1920px and 23.96px at 1024px. The SVG overflow is hidden, visibly truncating the Thai label even though there is no page overflow.
- **Expected conceptual behavior:** The complete provider/customer legend should fit inside the SVG viewport at every desktop size.
- **Root cause:** The long provider legend begins at SVG x=498 inside an 840-unit viewBox, leaving insufficient horizontal space for its bilingual text.
- **Evidence:** svg-geometry.json: cloudSharedResponsibility in both measured widths; diagram-d4-3-1920-light.png
- **References:** Repository/runtime evidence; no external factual claim required.
- **Recommendation:** Wrap or reposition the legend in the existing vector, or move the legend to semantic HTML. Keep the comparison itself after correcting its responsibility labels (D34-05).
- **Confidence:** High. **Verification status:** confirmed; no implementation or human acceptance.
