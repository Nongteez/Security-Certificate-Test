# Domain 1 independent source review

Review date: 2026-10-31. Scope: source-level academic, educational, bilingual and semantic review; no browser or visual acceptance claim. Inspected **24/24 subsections**, all **1,328 lines** of `content/isc2-cc-2026/reading/domain-1.md`, the complete 100-line metadata module, all eight scenarios in the 81-line scenario module, all three Domain 1 structured content payloads in `js/core/content-components.js`, and all twelve diagrams invoked by Domain 1 in `js/core/diagram-generator.js` (desktop and mobile text/structure). No earlier review was used as evidence. Production files and tests were not edited.

Line numbers below refer to the files at review time. `D1` means `content/isc2-cc-2026/reading/domain-1.md`; `DG` means `js/core/diagram-generator.js`; `CC` means `js/core/content-components.js`. Severity: P0 critical, P1 high, P2 medium, P3 low. “Confirmed” means the local statement has an identifiable factual, translation, or internal-consistency defect. “Nuance” means the underlying concept is useful but its scope needs qualification. “Recommendation” is an educational improvement, not a demonstrated false statement.

## Verified reference register

All URLs in this register were opened or returned with supporting primary-source text by the web tool during this review. Search results from third-party study guides were not used as factual authority.

1. **ISC2 current outline**: [official effective-date and Domain 1 page](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [official September 2026 English PDF](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf). Effective September 1, 2026; Domain 1 is 24%, with objectives 1.1–1.5 matching the local headings. The web page additionally explains foundational AI applications across domains. It does not prescribe 24 subsections, a particular five-stage risk mnemonic, or mandatory memorization of ALE formulas.
2. **NIST authentication**: [SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html), especially Authentication Assurance Levels and §3.1.1. Location/fraud indicators do not substitute for authentication factors; password composition rules and security questions are restricted in this standard. This is authoritative technical guidance, not evidence that ISC2 requires NIST assurance-level details.
3. **NIST risk**: [SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final), [SP 800-39 full text](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-39.pdf), and [NIST CSF FAQ](https://www.nist.gov/cyberframework/faqs). NIST's four risk components are Frame, Assess, Respond, Monitor; communication is integrated. [Legacy SP 800-30 §4.6](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30.pdf) supports comparing control costs with risk reduction; this older edition is used only to corroborate that economic principle, not as the current NIST risk process.
4. **NIST terminology**: [threat](https://csrc.nist.gov/glossary/term/threat), [defense in depth](https://csrc.nist.gov/glossary/term/defense_in_depth), [digital signature](https://csrc.nist.gov/glossary/term/digital_signature); [Canadian Centre for Cyber Security glossary](https://www.cyber.gc.ca/en/cccsglossary) for residual risk. Definitions must be read in their stated context.
5. **Zero Trust**: [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final). No implicit trust solely from location/ownership; authorization and authentication precede establishment of a resource session.
6. **Control functions**: [CISA Controls Management resource guide, p.13](https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-CM.pdf), which includes retrospective detective work and compensating controls of any function; [AWS primary documentation on detective controls](https://docs.aws.amazon.com/prescriptive-guidance/latest/aws-security-controls/detective-controls.html).
7. **GDPR jurisdiction**: [EDPB territorial-scope Guidelines 3/2018](https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en_1.pdf), especially Article 3(2) targeting criterion. Citizenship alone is not the test.
8. **Privacy roles and lawfulness**: [EDPB FAQ on controller/processor](https://www.edpb.europa.eu/contact/frequently-asked-questions_en?page=1), [EDPB legal bases](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en), [European Commission GDPR application](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en). Controllers may be natural or legal persons; consent is one lawful basis among several. The EUR-Lex regulation URL was attempted but returned a robot gate; no legal claim here relies on unseen EUR-Lex contents.
9. **Ethics**: [ISC2 Code of Ethics](https://www.isc2.org/ethics). Confirms four mandatory canons in the local order and expressly preserves professional ethical judgment. The currently retrieved page does not state a strict conflict-resolution hierarchy, and does not rank the adjectives inside Canon 2.
10. **Patching**: [NIST SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final) and [Canadian Government patch guidance](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/cyber-security-guidance-policy/patch-management-guidance.html). Patching includes prioritization and verification; testing and emergency processes matter.

## Confirmed findings

### D1-F01 — P1: Final cheat sheet misclassifies identification

**Location:** D1:1307. **Excerpt:** `Prove identity / Who are you` → `Authentication`. **Confidence: high.**

The row combines two different questions. D1:174–176 and 238 correctly teach that asking who the user claims to be is Identification, whereas proving that claim is Authentication. A learner following the final revision table can select the wrong answer. Split the row into Identification (“claim identity / username / who are you”) and Authentication (“prove identity”). This finding is established by the document's own definitions and the distinction in NIST's [digital authentication guidance](https://pages.nist.gov/800-63-4/sp800-63b.html).

### D1-F02 — P2: MFA taxonomy puts location beside independent factors without an explicit exclusion

**Location:** D1:187–195; CC:60–69. **Excerpt:** `ปัจจัยการพิสูจน์ตัวตนแบ่งออกเป็น 4 หมวดหลัก` and `Somewhere You Are`. **Confidence: high for misleading scope; medium for exam-specific consequence.**

The prose immediately after the two-independent-factor definition presents location as the fourth main factor. The generated card does call it contextual, which partially mitigates the problem, but never states that password plus a corporate IP is not MFA. [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html) explicitly treats geolocation as a risk indicator that cannot replace a factor. Teach knowledge, possession and inherence as the three authentication factor types, then show location separately as a context signal. Do not claim the ISC2 outline itself specifies a fourth factor. The same-factor Password+PIN counterexample is correct.

### D1-F03 — P2: Thai explanation incorrectly makes threats external

**Location:** D1:37 and 1040. **Excerpt:** `Threat คือสิ่งภายนอก` / `สิ่งภายนอก/เหตุการณ์ที่อาจก่ออันตราย`. **Confidence: high.**

Both explanations conflict with D1:21, which correctly gives malicious insiders as threat actors. Threat sources can be internal, external, accidental or environmental; external-versus-internal is not the defining threat/vulnerability distinction. Replace with potential cause/circumstance of harm versus an exploitable weakness. Support: [NIST threat definitions](https://csrc.nist.gov/glossary/term/threat), [SP 800-39](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-39.pdf).

### D1-F04 — P3: Vulnerability definition reverses the passive object in Thai

**Location:** D1:22. **Excerpt:** `ที่เปิดโอกาสให้ Threat ถูกใช้ประโยชน์`. **Confidence: high.**

This says the threat is exploited, rather than a threat source exploiting the vulnerability. Suggested Thai: `จุดอ่อน...ที่ภัยคุกคามหรือผู้ก่อภัยคุกคามอาจใช้ประโยชน์เพื่อก่อความเสียหาย`. The later text generally uses the correct relationship, so this is a localized translation defect. Support: [NIST threat definition](https://csrc.nist.gov/glossary/term/threat).

### D1-F05 — P2: GDPR applicability is reduced to EU citizenship worldwide

**Location:** D1:626. **Excerpt:** `Controller/Processor ทั่วโลกที่มีการประมวลผลข้อมูลพลเมืองสหภาพยุโรป`. **Confidence: high.**

GDPR is not automatically triggered by processing any EU citizen's data anywhere. Article 3 involves EU establishment and, for the targeting test, offering goods/services to or monitoring people in the Union. Nationality does not determine that test. The later geography/industry/data-type callout does not correct the incorrect citizenship rule. Replace with a short qualified applicability description. Support: [EDPB Guidelines 3/2018](https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en_1.pdf).

### D1-F06 — P2: Mobile AAA diagram conflates ordinary logging with non-repudiation

**Location:** DG:464, invoked by D1:170. **Excerpt:** `Audit Trails, ประทับเวลา (Timestamps) เพื่อสร้างความรับผิดชอบที่ไม่สามารถปฏิเสธได้ (Non-Repudiation)`. **Confidence: high.**

Timestamped audit records primarily support accountability and investigation. The mere presence of logs does not establish evidence strong enough for non-repudiation. The prose at D1:250 distinguishes stronger signed evidence, making the mobile diagram inconsistent with the lesson. Say logs support accountability; separately explain that non-repudiation requires appropriate evidence and controls such as signatures, identity/key binding and protected records. Support: [NIST digital signature definition](https://csrc.nist.gov/glossary/term/digital_signature). Do not imply signatures can never be disputed either; their assurance depends on appropriate use.

### D1-F07 — P2: Desktop risk decision rule differs from mobile's risk-savings rule

**Location:** D1:505–506; DG:744 versus DG:795. **Excerpt:** `ต้นทุน...ต่อปีไม่ควรเกินมูลค่า ALE` versus mobile `มูลค่าความเสียหายที่ลดลงได้ (ALE Savings)`. **Confidence: high.**

For an economic comparison, benefits are the expected reduction: ALE before minus ALE after, compared on the same annual basis with control ownership/operation costs. Comparing only with the entire untreated ALE assumes perfect elimination. Example: ALE $10,000, residual ALE $9,000 and control cost $5,000 gives negative economic benefit despite cost being below total ALE. The mobile statement is closer but calls it an absolute exam rule. Legal, safety and contractual obligations may justify controls even when a narrow expected-loss comparison is negative. Align both versions, qualify the rule, and state the assumptions. [Legacy NIST SP 800-30 §4.6](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30.pdf) supports risk-reduction comparison; [SP 800-39](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-39.pdf) adds organizational context and tolerance. Scenario 6's classification remains Acceptance because management expressly accepts it; its answer does not prove the business decision is always suitable.

### D1-F08 — P2: Risk lifecycle callout misattributes the named NIST sequence

**Location:** D1:533. **Excerpt:** `เช่น NIST ... 4 ขั้นตอนหลัก (Identify → Assess → Treat → Monitor)`. **Confidence: high.**

NIST SP 800-39's four components are Frame, Assess, Respond and Monitor. A pedagogical Identify–Assess–Treat–Monitor sequence is permissible, but should not be presented as that named framework's sequence. The same paragraph states that ISC2 CC 2026 explicitly defines communication as a fifth stage; the verified public outline does not establish that claim. Correct the NIST attribution and label the five-stage structure as this site's teaching model unless an accessible ISC2 course reference can be cited. The second issue is an **unverified attribution**, not proof that no ISC2 training material ever uses five stages. Support: [NIST FAQ](https://www.nist.gov/cyberframework/faqs), [official ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

### D1-F09 — P2: Canon 2 adjective order is interpreted as an official hierarchy

**Location:** D1:990. **Excerpt:** `ลำดับคำใน Canon 2 ให้เกียรติและความซื่อสัตย์มาก่อนกฎหมาย`. **Confidence: high.**

It is sound to teach that lawful conduct can still be unethical. It is unsupported to infer from word order that honesty outranks legality. ISC2's current public code presents the duties together and gives no adjective hierarchy. Remove the claimed lexical priority and retain the sound lawful-but-unethical example. Support: [ISC2 Ethics](https://www.isc2.org/ethics). The separate “strict precedence” between all four canons is addressed below as a verification/provenance concern, not confirmed false solely from omission on the current page.

### D1-F10 — P2: Mobile due-care diagram makes a jurisdiction-free legal conclusion

**Location:** DG:1280, invoked by D1:939. **Excerpt:** `อาจมีความผิดฐาน Gross Negligence ... ซึ่งไม่ได้รับการคุ้มครองทางกฎหมาย`. **Confidence: high for overstatement.**

Failure to use reasonable care can have legal/professional consequences, but it does not automatically establish gross negligence, and legal protections vary by jurisdiction, duty and facts. “May” appropriately qualifies the first clause but not the final categorical loss-of-protection clause. Replace with a non-jurisdictional educational statement about potential negligence/liability and professional discipline. The [ISC2 Code](https://www.isc2.org/ethics) supports professional ethical obligations; it does not establish the asserted universal legal immunity rule. No claim about a particular country's negligence law is made by this review.

## Nuances and recommendations requiring editorial judgment

### D1-N01 — P2 recommendation: Add current Domain 1 AI applications

**Location:** D1:1–1328; scenarios 1–8. **Confidence: high that examples are absent, high that current ISC2 web guidance includes them.**

The read content and targeted search contain no AI/model-poisoning/training-data examples. [ISC2's current outline page, AI guidance under Domain 1](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) discusses applying CIA to training data/model poisoning, traceable automated actions, governance and due care for AI adoption. Add brief examples under CIA, privacy/AAA, risk and ethics. The five numbered objective coverage is otherwise intact; this is a current-guidance completeness gap, not a missing objective title or demand to create a new AI domain.

### D1-N02 — P2 nuance: controlTimeline's headings remain temporally restrictive

**Location:** DG:1053–1084, 1125–1129, 1140, 1177–1179; D1:772 and 872. **Confidence: high.**

The diagram has a useful overlap caption, which must be credited. However, Detective is explicitly confined to “during”/real time in its main mobile panel, and remediation follows “after the incident has calmed down.” Detection can occur after an event through audit/log review; containment and correction can occur while an incident continues. The lesson itself gives retrospective CCTV as detective at D1:851. Show purpose as the primary classification, use “often before/during/after” labels, and include delayed discovery. [CISA p.13](https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-CM.pdf) explicitly describes after-the-fact detective investigations. Directive and compensating controls are described correctly in prose but absent from the diagram: title it selected functions or include them as cross-cutting functions. This is not a claim that the diagram entirely lacks an overlap caveat.

### D1-N03 — P2 nuance: defenseInDepth communicates layers as a list and promises elimination

**Location:** DG:565–605, 610, 632, 687; D1:352–356. **Confidence: high.**

The seven complementary example layers are academically defensible and explicitly introduced as an example, so seven is not itself an error. Desktop SVG places a core circle between two lists with no enclosing layers or connections: semantic source does not demonstrate how controls jointly protect the core. Mobile's perimeter “first line” wording is weaker than the prose's coordinated view, and “ขจัดจุดล้มเหลวเดี่ยว” overpromises that merely adding layers eliminates common dependencies. Add a surrounding/connected relationship and qualify the aim as reducing reliance on a single control with independent/diverse measures. Layer 6's Thai `ป้องกันช่องโหว่ซอฟต์แวร์และการเข้ารหัสข้อมูล` (DG:676) awkwardly makes encryption an object being prevented; use `ป้องกันช่องโหว่ซอฟต์แวร์และปกป้องข้อมูลด้วยการเข้ารหัส`. Source: [NIST defense in depth](https://csrc.nist.gov/glossary/term/defense_in_depth). Rendering quality remains for browser review.

### D1-N04 — P3 nuance: Risk combination and residual-risk equations need model labels

**Location:** D1:388, 409, 580, 1056–1060. **Confidence: high.**

Thai `ผลรวม` can mean an arithmetic sum, conflicting with the subsequent multiplication mnemonic. Use `การประเมินร่วมกัน`/combination. Likelihood × impact is a common scoring simplification (the approximation symbol helps); ordinal labels are not universally multiplicative measurements. Residual = inherent − control impact is conceptual bookkeeping only unless all quantities share a defined quantitative scale. Reassess remaining likelihood and consequence; avoid inviting subtraction of High/Medium/Low scores. The definitions and MFA residual-risk example are otherwise useful. Support: [NIST SP 800-30 Rev.1](https://csrc.nist.gov/pubs/sp/800/30/r1/final), [Canadian residual-risk definition](https://www.cyber.gc.ca/en/cccsglossary).

### D1-N05 — P3 nuance: Privacy roles, consent, collection and retention need qualification

**Location:** D1:256, 267, 281, 291; DG:521, 533. **Confidence: high except jurisdiction-specific retention, which was not validated.**

Collection is translated as `การจัดเก็บ`, overlapping Storage; `การเก็บรวบรวม` is clearer. Controllers can be natural persons too, not only organizations/legal persons. Respecting rights is correct, but consent must not be implied as a prerequisite for all processing; other lawful bases exist. Add “ตามฐานกฎหมายที่ใช้บังคับ” and make consent conditional. The seven-year employee tax-document example is unsourced and jurisdiction-specific: identify jurisdiction/document rule or label an assumed example. The erasure exception for legally required retention is appropriately qualified. Support: [EDPB roles](https://www.edpb.europa.eu/contact/frequently-asked-questions_en?page=1), [EDPB lawful bases](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en). No Thai tax-retention rule was independently verified here.

### D1-N06 — P3 recommendation: Replace outdated password examples and unsupported absolutes

**Location:** D1:683; CC:37; DG:1001, 1012. **Confidence: high about NIST divergence, medium about learner harm in a hypothetical example.**

The purpose is to demonstrate a measurable standard; a hypothetical character-composition rule can do that, so this is not necessarily an incorrect document classification. It nevertheless teaches a dated policy. Prefer a modern minimum-length/blocklist/MFA example consistent with [NIST SP 800-63B-4 §3.1.1](https://pages.nist.gov/800-63-4/sp800-63b.html). Label security questions as legacy knowledge-based methods rather than an endorsed authentication option. “Standards ... without exception” and policies universally legally binding are stronger than the mandatory/advisory distinction warrants; mention approved exceptions and organization-defined scope.

### D1-N07 — P3 recommendation: Teach prudent patching rather than immediate installation as proof of care

**Location:** D1:917, 1267; scenario JS:49–54; DG:1206, 1252. **Confidence: high.**

The Due Care versus Due Diligence distinction and expected scenario answer are sound. Unqualified immediate production patching can also damage availability. Add authorization, risk-based urgency and an approved normal/emergency change process; clarify that “take reasonable action” includes selecting a safe response. Scenario 4 should explicitly authorize scanning, consistent with 1.5.1. Support: [NIST SP 800-40 Rev.4](https://csrc.nist.gov/pubs/sp/800/40/r4/final), [Canadian patch guidance](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/cyber-security-guidance-policy/patch-management-guidance.html).

### D1-N08 — P3 verification concern: Strict canon precedence needs a traceable course citation

**Location:** D1:956–964, 977; DG:1292–1397. **Confidence: high that retrieved public code omits the rule; not enough evidence to declare the teaching convention false.**

The four canons and their order match ISC2. Current [ISC2 public code](https://www.isc2.org/ethics) does not state the repeated absolute “always supersedes” rule, and says the code cannot replace professional judgment. Cite the specific official training source for strict precedence or describe it as a common prioritization aid with judgment/escalation. Do not infer precedence inside a canon (F09). Absence from this page alone is not proof that official training never taught precedence.

### D1-N09 — P3 nuance: Authorization and availability have teaching absolutes

**Location:** D1:115, 222; DG:289. **Confidence: high.**

“Authorization always after authentication” describes an ordinary named-user login but excludes anonymous/public resource authorization and repeated policy evaluation. Use “in this authenticated-user flow.” Availability is timely/reliable authorized access according to service requirements, not an unconditional guarantee of 100% uptime. The load-balancer example improves server availability but its one load balancer is still a potential failure point; DG:289's elimination-of-SPOF claim should specify redundancy at that tier as well. [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) supports session-level access evaluation; this is a qualification of a useful introductory model.

### D1-N10 — P3 nuance: Explain alternative control taxonomies as extensions

**Location:** D1:758–763; CC:182–218. **Confidence: high.**

The official Domain 1 outline names technical, administrative and physical. Adding operational is a defensible taxonomy, but managerial/administrative/operational labels vary by framework. Explicitly map the extension to the official three-category list. Operational examples such as training can also be administrative in another scheme. CC:217 has the Thai typo `ประตูกลักกันคนเดินตาม`; use a clear access-control-vestibule translation. This is a taxonomy-mapping/editorial recommendation, not proof operational controls do not exist.

## Per-subsection observations: 24/24 inspected

| # | Subsection / source span | Academic, bilingual and educational observations | Status |
|---|---|---|---|
| 1 | 1.1.1 Core Security Concepts & Assets, D1:11–44 | Assets/threats/controls and threat-chain example generally useful. Internal threats contradict the external-only warning; vulnerability passive construction reversed. Mobile threat-chain labels realized harm as “Impact & Risk,” which should distinguish potential risk from realized impact. | Findings F03/F04; clarify potential vs actual harm |
| 2 | 1.1.2 CIA Triad, D1:49–161 | All three definitions and four CIA scenarios checked; confidentiality leak, altered invoice, DDoS, ransomware availability answers appropriate. Ransomware explicitly acknowledges I/C overlap. Hash/encryption comparison correct at introductory level; hashing needs a trusted baseline to detect adversarial change. Availability/load-balancer absolutes need qualification; AI example absent. | Sound core; N01/N09 |
| 3 | 1.1.3 Identification & Authentication, D1:166–180 | Thai claiming versus proving distinction clear. AAA naming is three A's with preliminary identification; diagram's four steps are a teaching flow, not four letters. Mobile Accounting incorrectly promises non-repudiation. | F06; final-sheet contradiction F01 |
| 4 | 1.1.4 MFA, D1:185–213 | Independent-category definition and Password+PIN counterexample correct. Four-main-factor heading risks treating location as sufficient. Password+fingerprint is an appropriate generic category illustration; do not imply it automatically meets every NIST AAL requirement. | F02; N06 |
| 5 | 1.1.5 Authorization & Accounting, D1:218–241 | Permissions example correct; audit records support investigation/accountability. “All activities” is aspirational rather than a logging design requirement. Qualify “always after” authentication and distinguish recording from auditing. | Sound core; N09 |
| 6 | 1.1.6 Non-repudiation, Privacy & Data Protection, D1:246–326 | Digital-signature support, data subject, purposes/means, processor instruction, erasure exception and unique-identity/accountability distinctions checked. Clarify natural-person controller, lawful bases, Collection Thai and unsourced retention example. Signing supports reliable evidence rather than making all denial literally impossible. | N05; F06 diagram relationship |
| 7 | 1.1.7 Zero Trust & Defense in Depth, D1:331–373 | No trust solely from internal LAN and context/device checks agree with NIST. Microsegmentation is an implementation approach, not universally mandatory. Seven-layer example is defensible; diagram relationship and elimination claim need qualification. | N03; useful architecture comparison |
| 8 | 1.2.1 Risk Definition & Core Components, D1:386–409 | Likelihood, multidimensional impact and prioritization sound. Thai sum wording and qualitative multiplication can mislead without model assumptions. | N04 |
| 9 | 1.2.2 Quantitative Risk Analysis & Formulas, D1:414–507 | Recomputed every numerical example: 10,000×0.50=5,000; ARO 1/2=.5, 1/5=.2, 1/10=.1; ALE 5,000×2=10,000 and ×.2=1,000. DG mobile 100,000×.4=40,000 and ×.5=20,000 correct. ARO correctly permits values above one. No arithmetic defect found. Cost-benefit rule inconsistent across layouts; official outline does not explicitly mandate these formulas. | F07; arithmetic passes |
| 10 | 1.2.3 Risk Management Lifecycle, D1:512–534 | Continuous review, new-tech/legal/threat triggers and reporting appropriate. Five-step teaching structure coherent, but NIST and claimed ISC2 provenance need repair. Context-setting/risk-owner decision roles would strengthen lifecycle. | F08 |
| 11 | 1.2.4 Risk Treatment, D1:539–565 and CC:113–149 | Four common responses and insurance financial limitation sound. Avoidance eliminates a specified exposure/activity, not every related organizational risk; outsourcing/SLA only transfers obligations that the contract actually allocates. Acceptance must consider tolerance/obligations, not merely low ALE. | Sound core; F07-related qualification |
| 12 | 1.2.5 Inherent/Residual/Appetite/Tolerance, D1:570–591 | Before/after controls and broad appetite versus specific tolerance useful; advanced-phishing residual example apt for phishable MFA. Subtraction formula needs shared-scale/model caveat. | N04 |
| 13 | 1.3.1 Governance Fundamentals, D1:605–613 | Direction, oversight, accountability and business alignment appropriate. Management-versus-technical-operation contrast works for entry-level learners; real small organizations can combine roles, so it is a role distinction, not an absolute job prohibition. | Sound; optional qualification |
| 14 | 1.3.2 Laws and Regulations, D1:618–644 | HIPAA introductory description adequate; PCI DSS correctly described as industry/contract standard instead of statute. Applicability callout useful. GDPR citizenship rule materially wrong. | F05 |
| 15 | 1.3.3 Security Frameworks, D1:650–668 | NIST CSF includes all six current functions, including Govern; order in a list is not itself wrong. ISO/IEC 27001 correctly identified as ISMS standard. CIS prioritized safeguards description appropriate. Version labels would help distinguish CSF 2.0 from old five-function material. | Sound; version-label recommendation |
| 16 | 1.3.4 Document Hierarchy, D1:674–710 | Policy/standard/procedure/guideline roles and mandatory/advisory distinctions coherent. Hypothetical composition-rule standard dated; mobile policy legal-binding and no-exception claims too absolute. A guideline is advisory unless adopted into binding requirements. | N06 |
| 17 | 1.3.5 GRC, D1:715–740 | Integration and compliance-does-not-guarantee-security lesson correct. Overlap with Domain 2 GRC is beneficial reinforcement, not a domain mapping error. Add an AI adoption example for current official guidance. | Sound; N01 |
| 18 | 1.4.1 Control Categories, D1:754–763 / CC:182–218 | Technical/managerial/operational/physical examples inspected. Extra operational bucket should be mapped to official technical/admin/physical framework; avoid claiming a universal four-bucket rule. Thai mantrap typo noted. | N10 |
| 19 | 1.4.2 Control Types/Functions, D1:768–835 | Seven functions and contextual examples generally sound. Compensating means alternative protection meeting the objective, not just any cheaper substitute; example should require approved equivalent protection. Corrective/recovery overlap is acceptable. Timeline restricts detection more than prose does. | N02 |
| 20 | 1.4.3 Overlapping Controls, D1:841–874 | CCTV deterrent/detective and firewall preventive/detective distinctions correct; category versus function clear. Retrospective CCTV is good counterexample to restrictive timeline. Physical CCTV category is defensible in this chosen taxonomy. | Sound; use to repair N02 |
| 21 | 1.5.1 Professional Conduct/Authority, D1:888–898 | Technical capability does not grant legitimate business authorization; HR example and formal-purpose boundary sound. AI/service-account examples would extend applicability without changing principle. | Sound; N01 |
| 22 | 1.5.2 Due Care/Diligence, D1:903–949 | DO versus CHECK mnemonic useful; reasonable-care definition appropriately contextual. Scan/assess/vendor-review/verify examples sound. Immediate patching needs process context; mobile gross-negligence conclusion overreaches. | F10; N07 |
| 23 | 1.5.3 ISC2 Code of Ethics, D1:954–1023 | Four English canon titles match public code; Thai practical explanations generally faithful, SAPP mnemonic useful. Public-safety emphasis sensible. Canon 2 lexical precedence invented; strict inter-canon rule needs a traceable official source, not an unsupported absolute. | F09; N08 |
| 24 | 1.5.4 Distinctions/Scenarios/Review, D1:1028–1327 | All 12 comparison cards, eight scenarios and 22 cheat-sheet rows inspected. Scenarios' designated answers reasonable. External-only threat repeats F03; risk sum repeats N04; final Authentication row contradicts Identification. Scenario 4 needs scan authorization, 5 prudent change process, 6 business caveat. No exercises test governance documents, ethics conflicts, privacy lawful basis or actual ALE calculation. | F01/F03; N04/N07; broaden practice |

## Scenario and metadata reconciliation

The eight scenario payloads in `domain-1-scenarios.js` match the eight inline Markdown scenarios in situation, question, answer and reasoning. No independent source is provided for the file's “verified” label; this review independently checked their semantic answers instead. Scenarios are instructional, not asserted real exam items.

| Scenario | Verdict | Reason / caveat |
|---|---|---|
| 1 salary modification | Integrity correct | Silence of alarms adds a detective-control weakness but does not change the dominant CIA impact. |
| 2 authenticated employee denied finance file | Authorization correct | The intended successful login is clear; denial alone in a real system can also have other causes. |
| 3 cyber insurance | Transfer/Sharing correct | Only insured financial exposures shift; retained obligations remain. |
| 4 scanner risk report | Due Diligence correct | State authorized scope before scanning all servers. |
| 5 install critical patch | Due Care correct | State approved/emergency process rather than treating untested immediacy as sufficient care. |
| 6 signed decision to retain risk | Acceptance correct | Explicit acceptance establishes classification; cost comparison alone does not establish legally or operationally acceptable treatment. |
| 7 MFA/device posture despite internal LAN | Zero Trust correct | No implicit location trust, rather than MFA alone, is the distinguishing fact. |
| 8 conspicuous legal/CCTV warning | Deterrent correct | Primary intended function is discouragement; directive overlap is possible but the explanation supports the intended choice. |

Metadata: Domain 1 title, 24% weight and all five objective labels match the official September 2026 outline. All 24 topic IDs match anchors in the Markdown. Site subsection numbering is a local subdivision and should not be represented as official ISC2 subobjective numbering. Zero Trust/Defense in Depth are officially explicit in 4.2; their foundational inclusion in 1.1.7 is reasonable enrichment, not evidence of a coverage error. GRC is explicit in Domain 2; Domain 1 overview remains useful.

## Semantic diagram inventory

| Diagram key | Source inspection outcome |
|---|---|
| threatChain | Correct attack/control relationship overall; external-only warning in prose incorrect; mobile “Impact & Risk / Harm Realized” merges potential risk with realized consequence. |
| ciaTriad | Three pillars correctly mapped; examples consistent with prose. |
| loadBalancer | Health checks and redundant nodes improve availability; single LB drawing cannot demonstrate elimination of all SPOFs (N09). |
| aaaLifecycle | Claim/prove/permit/log distinction useful; mobile non-repudiation promise F06. |
| privacyFlow | Purpose/means and delegated processing correct; consent flow should not imply a universal lawful basis (N05). |
| defenseInDepth | Seven example layers valid, desktop relationship insufficiently represented; Thai encryption grammar and elimination claim N03. |
| riskCalculationFlow | Arithmetic and units sound; desktop entire-ALE budget versus mobile savings mismatch F07. |
| riskLifecycle | Iteration and reporting clear; named provenance F08. |
| documentHierarchy | Appropriate basic classification; no-exception/legal-binding wording N06. |
| controlTimeline | Good overlap caption exists; principal mobile time labels still restrictive (N02). |
| dueCareDiligence | Check–act–verify useful; patch urgency N07 and legal overstatement F10. |
| ethicsCanons | Correct four canons/order; “strict” universal conflict resolution needs source (N08). |

All **12 invoked diagram keys** were inspected. No browser geometry, overflow, contrast, keyboard or screen-reader execution was performed by this reviewer.

## Completion and limits

Coverage is **24/24 subsections, 12/12 invoked semantic diagram payloads, 3/3 structured content payloads, 8/8 scenarios and complete Domain 1 metadata**. No P0 identified. Findings: **10 confirmed issues (one P1, eight P2, one P3)** plus **10 separately labeled nuances/recommendations**. The count treats repeated manifestations of one issue as one finding. Unverified concerns are explicitly limited to training provenance/strict precedence and jurisdiction-specific examples; they must not be promoted to confirmed legal or exam-content errors without further evidence. The official outline PDF and public page were validated directly; the AI guidance is from the public web page rather than inferred from an old report. This artifact is source-review evidence, not browser signoff.
