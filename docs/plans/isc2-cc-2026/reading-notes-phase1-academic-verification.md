# Phase 1A — Academic findings verification and source comparison

Repository: `D:\_Coding\SEC-CERT-TEST`  
Review date: 2026-10-31 (Asia/Bangkok)  
Scope: Reading Notes / Textbook, Domains 1–4. Verification and proposed wording only. No textbook, original note, production, test or prior audit artifact was edited. Human Acceptance remains pending.

## Executive decision

This phase independently triages **55 unique academic, content-accuracy and bilingual-meaning observations**, including qualified recommendations from the prior audit. The prior “confirmed” labels and severities were not presumed correct. The domain verification tables and individual records below distinguish confirmed errors, ambiguous wording, acceptable simplifications, false positives and claims needing additional evidence.

**Primary verdicts: 29 Misleading or ambiguous wording, 19 Confirmed error, 2 Requires additional evidence, 5 Acceptable simplification. No whole-ID false-positive disposition; rejected subclaims are separated below.**

These are finding-level primary verdicts. Some original IDs bundle several propositions: their detail records explicitly distinguish the supported subclaim from a valid simplification or unresolved provenance claim. One accepted component does not validate every sentence, and one wording defect does not invalidate a whole lesson. Priority indicates the impact of the proposed change, not permission to implement it.

Important adjustments to the previous audit include treating the mixed Identification/Authentication shortcut as pedagogical ambiguity, retaining valid system-RTO wording and worked recovery arithmetic, retaining device posture as a legitimate ABAC input, retaining `169.254/16` as the correct IPv4 link-local block, and preserving the high-level provider-managed PaaS model. Exact subclaim decisions appear below.

## Required inputs and source hierarchy

The four required audit documents were read before domain verification:

1. [Independent findings register](reading-notes-independent-findings-register.md).
2. [Independent audit](reading-notes-independent-audit-domains-1-4.md).
3. [Remediation roadmap](reading-notes-independent-remediation-roadmap.md).
4. [Coverage matrix](reading-notes-independent-coverage-matrix.md).

All eight original learning-note files were then read and analyzed in full by the assigned domain reviewers before their corrections were finalized. Line numbering includes blank lines and refers to the current files, not copied audit excerpts. The current Reading Notes Markdown, metadata, scenarios and invoked generated diagram/structured-content payloads were separately inspected. Prior audit JSON was used to enumerate IDs, not as technical proof.

| Original learning-note file | Lines | SHA-256 |
|---|---:|---|
| `ISC2 Update 2026/Domain 1/D1 sum.md` | 1733 | `51a89939fab6f6bc1833600e9d99c3c58bde68c7e40e0ac4801e95ab755b1d74` |
| `ISC2 Update 2026/Domain 1/Domain 1.md` | 405 | `7a45a89e2c2a7604aa0a2aadeaf3c7c5117fbac66c53c4010fbc3cee4a948082` |
| `ISC2 Update 2026/Domain 2/D2 sum.md` | 633 | `147e80020de872c7c99da14ff120fd2fa347000955171d09679e20da4b5215f0` |
| `ISC2 Update 2026/Domain 2/Domain 2.md` | 731 | `b3c65bfe2003e7483ca97a40f947e89a1e3ab460e9b11b98e156f5e8a15673e4` |
| `ISC2 Update 2026/Domain 3/D3 sum.md` | 442 | `df5f773a26b5111a67659bbc798d3e546cbc8526708a0681c82cd87d978ee6df` |
| `ISC2 Update 2026/Domain 3/Domain 3.md` | 356 | `35f3e17c6811e043c817da496e13d2659da603826d48aae049ee74773472e43d` |
| `ISC2 Update 2026/Domain 4/D4 sum.md` | 883 | `4a5a42d9b97c8602f17473cef50e66665a31ca738302995d6f1a4756a53bfcf9` |
| `ISC2 Update 2026/Domain 4/Domain 4.md` | 330 | `f7a4342a04d420dbac89e252475d766374b9e56cfb34c4bbbd6d3d816fea6870` |

The original notes are the requested learning/provenance baseline, not an assertion of ISC2 endorsement. Where the shorter summary and fuller notes disagree, both are recorded. Correct original explanations should be retained; incorrect or outdated ones should not be propagated simply because they predate the textbook.

Curriculum scope is anchored to the [official ISC2 CC outline, effective September 1, 2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), printed pages 4–6 for Domains 1–4. The current [ISC2 outline page and AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) provide additional dated context. Supplemental web examples are distinguished from numbered PDF objectives. Neither source prescribes every local mnemonic, implementation detail, framework version or scenario answer.

Technical details are resolved against primary standards and publisher/provider documentation cited at each finding. NIST authentication requirements are identified in their remote-authentication context; they are not presented as universal law or a verbatim ISC2 answer key. Provider-specific controls remain illustrative examples rather than new certification requirements. Legal applicability examples are narrowly bounded to their authoritative source; this report does not provide jurisdiction-specific compliance advice.

## Verdict, provenance and scope rules

- **Confirmed error:** a statement or translation conflicts with a primary source or an established relationship in its stated context.
- **Misleading or ambiguous wording:** the core idea can be correct, but an absolute, scope omission, diagram relationship or mixed definition can teach a wrong inference.
- **Acceptable simplification:** useful entry-level teaching within a stated context; do not replace it merely to add advanced detail.
- **False positive:** the prior concern attributes a claim the current text does not make, or treats a valid fact as erroneous.
- **Requires additional evidence:** the exact authoritative/course provenance or requested depth cannot be established. A safer optional wording can be proposed without declaring the existing convention false.

“Inherited” means the relevant wording is already present in the supplied originals. “Current-only addition” means comparison did not locate that proposition in either original; it does **not** prove which generation step or human edit caused it. No historical edit-chain attribution is claimed without evidence. “Not covered in original learning notes” means the concept or asserted detail is absent from both supplied files for that domain; the nearest broader passage is identified when useful.

The 55 IDs are D1-F01–F10, D1-N01–N10, D2-01–D2-12, D34-01–D34-16 and D34-Q1/Q2/Q3/Q9/Q10/Q12/Q14. Promoted Q duplicates remain represented by their numbered IDs and are not counted twice. The prior register's other 17 RN-I findings concern layout, navigation, accessibility metadata, parser behavior or product preferences. They are not silently approved or reclassified here:

| Prior IDs | Disposition for this phase |
|---|---|
| RN-I-001/003/004/005/006/008/009/014/015/018 | Responsive, navigation, contrast and visual defects; outside academic wording verification. Academic concepts in their diagrams are still included under the corresponding D1/D2/D34 IDs. |
| RN-I-007/011/013 | Language-of-parts markup, fallback mathematical alternatives and heading semantics; accessibility work, not Thai/English concept-meaning corrections. |
| RN-I-010/012/016 | Currency escaping, parser trust boundary and CSS/component maintainability; technical work deferred. Formula/economic accuracy is included under D1-F07/N04. |
| RN-I-017 | Completion history, next reading and language-edition preferences; no academic implementation approval. |

## Findings verification tables and exact proposed wording

The three domain tables below together cover every in-scope ID once. Each detailed record identifies current and original locations, reference, discrepancy/verdict, exact Thai and English proposal, propagation, consistency risk, severity and confidence. Proposed wording is reviewable content, not an applied change. For an accepted or evidence-pending item, the text is an optional clarification or a hold proposal, not a mandatory correction.

## Phase 1A — Domain 1 independent verification

Completed 2026-10-31 after an early checkpoint. Verification only; no remediation authorized or performed. All twenty original IDs are retained.

The required planning documents consulted were `docs/plans/isc2-cc-2026/reading-notes-independent-findings-register.md`, `docs/plans/isc2-cc-2026/reading-notes-independent-audit-domains-1-4.md`, `docs/plans/isc2-cc-2026/reading-notes-independent-remediation-roadmap.md` and `docs/plans/isc2-cc-2026/reading-notes-independent-coverage-matrix.md`. Their conclusions were hypotheses for this verification. Both original files were read in full before checking claims: `ISC2 Update 2026/Domain 1/D1 sum.md` (1,733 lines, blank lines retained for citations) and `ISC2 Update 2026/Domain 1/Domain 1.md` (405 lines). The originals disagree in important places: the sum calls Authentication “Who are you?” and lists location alongside MFA factors; the fuller file correctly distinguishes Identification and three factor types. Provenance therefore cannot be reduced to “all textbook errors were generated.”

**Origin attribution throughout is textual provenance, not proven edit history.** “Inherited” means present in an original and current material; it does not prove which file was copied. “Introduced,” “textbook generation introduced,” and “current-only addition” mean the claim is not present in either supplied original but occurs in the current textbook or its generated payload. They are not proof of the actual causal authoring process. Historical commits, intermediate generation inputs and private ISC2 course materials were not examined. All replacements below are proposals for review; none were applied.

Current corpus checked: `content/isc2-cc-2026/reading/domain-1.md`, `domain-1.js`, `domain-1-scenarios.js`, `js/core/content-components.js` and Domain 1 payloads in `js/core/diagram-generator.js`. Line numbers refer to the current on-disk snapshot. Paths below are relative to `D:/_Coding/SEC-CERT-TEST/`, and are explicit file locations, not citations to historical audit output.

| Original ID | Objective(s) | Independent verdict | Severity / confidence | Origin attribution |
|---|---|---|---|---|
| D1-F01 | 1.1 | Misleading or ambiguous wording | P2 / high | Mixed originals; misleading sum mnemonic retained despite correct fuller notes |
| D1-F02 | 1.1 | Misleading or ambiguous wording | P2 / high | Mixed originals; textbook strengthens four-category framing |
| D1-F03 | 1.1 | Confirmed error | P2 / high | Textbook generation introduced external-only restriction |
| D1-F04 | 1.1 | Confirmed error | P3 / high | Textbook generation introduced reversed Thai grammar |
| D1-F05 | 1.3 | Confirmed error | P2 / high | Textbook generation introduced citizenship test |
| D1-F06 | 1.1 | Misleading or ambiguous wording | P2 / high | Textbook mobile payload introduced stronger logging guarantee |
| D1-F07 | 1.2 | Misleading or ambiguous wording | P2 / high | Textbook introduced incomplete decision-rule framing |
| D1-F08 | 1.2 | Misleading or ambiguous wording | P2 / high for NIST mismatch; medium for course attribution | Five stages inherited from sum; named-source assertions introduced |
| D1-F09 | 1.5 | Misleading or ambiguous wording | P2 / high | Textbook introduced unsupported adjective-order inference |
| D1-F10 | 1.5 | Misleading or ambiguous wording | P2 / high for overbreadth | Textbook mobile payload introduced legal claim |
| D1-N01 | 1.1–1.5 | Requires additional evidence | P2 coverage recommendation / high for omission | Neither original covers AI; timing/cause of omission uncertain |
| D1-N02 | 1.4 | Misleading or ambiguous wording | P2 / high | Timeline mnemonic inherited; rigid real-time visual framing introduced |
| D1-N03 | 1.1; 4.2 enrichment | Misleading or ambiguous wording | P2 / high | General layering inherited; guarantee and Thai grammar introduced |
| D1-N04 | 1.2 | Misleading or ambiguous wording | P3 / high | Approximate product inherited; sum/subtraction framing introduced |
| D1-N05 | 1.1, 1.3 | Confirmed error | P3 / high | Current-only controller exclusion; consent/retention components qualified separately |
| D1-N06 | 1.1, 1.3 | Misleading or ambiguous wording | P3 / high | Security questions inherited from sum; composition/no-exception claims introduced |
| D1-N07 | 1.5 | Acceptable simplification | P3 / high | Patch/scan teaching inherited; “immediate” stronger in textbook |
| D1-N08 | 1.5 | Requires additional evidence | P3 / high for lack of verified provenance | Numbered mnemonic inherited; strict override rule introduced |
| D1-N09 | 1.1 | Misleading or ambiguous wording | P3 / high | Ordinary order/LB diagram inherited; “always” and SPOF guarantee introduced |
| D1-N10 | 1.4 | Confirmed error | P3 / high | Primary typo current-only; inherited four-bucket taxonomy acceptable with mapping |

These verdicts deliberately do not reproduce the earlier audit's ten “confirmed” labels automatically. A useful upper bound is not a sufficient cost-benefit test; absence from the public ethics page does not prove a canon-priority convention false.

### Detailed verification — F01–F10

#### D1-F01 — Claiming identity versus proving identity

**Domain/objective:** 1 / 1.1 AAA; local 1.1.3 and 1.5.4. **Verdict: Misleading or ambiguous wording. Severity P2; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:1307`: `| *Prove identity / Who are you* | **Authentication** |`. Against this, line 174 says `กล่าวอ้างว่าตนเองคือใคร (Claiming Identity)` under Identification, and line 238 maps `*"Who are you?"*` to `**Identification**`. The final row collapses two concepts that this lesson explicitly distinguishes.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:221`: `> **Authentication = Who are you?**`; repeated at 1635. But `ISC2 Update 2026/Domain 1/Domain 1.md:121`: `| “Who are you?” | Identification |` and 122: `| “Prove you are that person.” | Authentication |`; its cheat sheet at 361 says only `| Prove identity | Authentication |`. This is a mixed-original conflict: the textbook preserves the weaker sum mnemonic in its final revision table after using the fuller notes' correct distinction in the main lesson. It is not wholly generation-invented.

**Technical/reference basis:** Claiming an identifier and verifying control of an authenticator serve different functions. NIST SP 800-63B-4, Introduction, defines authentication in terms of validating authenticators and control of associated secrets; it does not prescribe these colloquial exam questions. [NIST SP 800-63B-4, Introduction](https://pages.nist.gov/800-63-4/sp800-63b.html#introduction). “Who are you?” can colloquially mean authentication, and this row also contains the correct “Prove identity.” It does not explicitly say a bare username authenticates. Therefore this is classified as a definite internal teaching ambiguity, not a universal technical falsehood or inherited P1 severity: the main lesson deliberately reserves that question for Identification while the final mnemonic reassigns it.

**Exact proposed replacement:** Thai: `| กล่าวอ้างตัวตน / “คุณคือใคร?” | Identification (การระบุตัวตน) |` and `| พิสูจน์ตัวตน / “พิสูจน์ว่าคุณเป็นบุคคลที่กล่าวอ้าง” | Authentication (การพิสูจน์ตัวตน) |`. English: `| Claim identity / “Who are you?” | Identification |` and `| Prove the claimed identity / “Prove it” | Authentication |`.

**CC scope and repeats:** This is a small correction to 1.1 AAA, not an additional objective. Keep the correct main text at 174–180 and comparison at 238–241. `js/core/diagram-generator.js:366–377` and 409–430 already correctly distinguish Identification/Authentication. Scenario 2 at `content/isc2-cc-2026/reading/domain-1.md:1237–1244` and `domain-1-scenarios.js:18–25` tests Authorization correctly and needs no answer change. **Consistency risk:** editing only the explanation while leaving the last-minute cheat sheet preserves the highest-risk contradiction.

#### D1-F02 — Location/context next to independent MFA factors

**Domain/objective:** 1 / 1.1; local 1.1.4. **Verdict: Misleading or ambiguous wording. Severity P2; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:187`: `**2 ประเภทที่แตกต่างกันขึ้นไป (Two or More Independent Factors)**`; line 189: `ปัจจัยการพิสูจน์ตัวตนแบ่งออกเป็น 4 หมวดหลัก:`; lines 192–195 list Know, Have, Are and Somewhere. `js/core/content-components.js:63–68` calls the fourth card `Somewhere You Are`, `Location Context`, and `เป็นปัจจัยแวดล้อมเสริม (Contextual Factor)`. That note mitigates the problem, but four numbered cards under the independent-factor heading still leave password plus corporate IP apparently sufficient.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:291`: `→ Location Factor / Context สามารถนำมาใช้ตัดสิน Access ได้`; 1641: `> **Know + Have + Are + Location/Context**`; 1643: `และ MFA ต้องใช้ **คนละ Factor**`. Conversely `ISC2 Update 2026/Domain 1/Domain 1.md:103–107` lists only Know/Have/Are and requires different types. The ambiguity is inherited from the sum; the categorical “4 หมวดหลัก” textbook heading strengthens it. The current card's context note is an improvement that must be preserved.

**Technical/reference basis:** NIST SP 800-63B-4 §2 treats unexpected location/IP as fraud/risk indicators, explicitly excluding their substitution for an authentication factor. [NIST SP 800-63B-4 §2, Authentication Assurance Levels](https://pages.nist.gov/800-63-4/sp800-63b.html#aal). This does not mean location is useless or can never influence access; it means its use must be separated from satisfying MFA.

**Exact proposed replacement:** Thai: `ปัจจัยหลักของ MFA มี 3 ประเภท: สิ่งที่รู้ (Know), สิ่งที่มี (Have) และสิ่งที่เป็น (Are) ส่วนสถานที่หรือเครือข่ายเป็นบริบทเสริมสำหรับประเมินความเสี่ยง ไม่ใช่ปัจจัยอิสระที่ใช้แทนประเภทเหล่านี้ เช่น Password + Corporate IP เพียงอย่างเดียวยังไม่ใช่ MFA`. English: `MFA combines at least two distinct factor types: knowledge, possession and inherence. Location and network information are supplementary risk signals, not substitutes for authentication factors; a password plus a corporate IP address alone is not MFA.`

**CC scope/repeats/risks:** This remains introductory AAA. Adjust the `mfa-factors` directive and generated card data together (`js/core/content-components.js:29–69`, rendering 72–107); directive body text alone does not define the generated cards. `js/core/diagram-generator.js:430` uses the three core categories appropriately. Password+PIN and password+fingerprint contrasts at current Markdown 205–210 can remain; do not mistake two passwords for two factor types. No existing D1 review scenario explicitly tests location-MFA, so no answer-key correction is established.

#### D1-F03 — Threats cannot be defined by an external-only boundary

**Domain/objective:** 1 / 1.1; local 1.1.1, 1.5.4. **Verdict: Confirmed error. Severity P2; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:37`: `Threat คือสิ่งภายนอกหรืออันตรายที่เข้ามา`; line 1040: `สิ่งภายนอก/เหตุการณ์ที่อาจก่ออันตราย (Hacker, Malware, Flood)`. Line 21 already includes `พนักงานภายในที่ประสงค์ร้าย (Insider Threats)`. The warning/summary imply that origin, rather than potential harm versus weakness, defines the distinction.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/Domain 1.md:19`: `สิ่งหรือเหตุการณ์ที่อาจก่อความเสียหาย`; line 20 includes `อาชญากรไซเบอร์ ผู้ใช้ภายใน`. `ISC2 Update 2026/Domain 1/D1 sum.md:512`: `> What could cause harm?`; line 1656: `> **Threat = สิ่งที่ทำอันตราย**`. Neither original imposes the external-only restriction. Attribution: textbook generation introduced the restriction, against both original concepts and its own insider example.

**Technical/reference basis:** Threat describes potential harm and is not restricted to outside attackers. NIST SP 800-30r1 Appendix D, Table D-2 explicitly includes insider, trusted insider and privileged insider threat sources. [NIST SP 800-30r1, Appendix D Table D-2, printed p. D-2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf#page=66). [NIST threat glossary](https://csrc.nist.gov/glossary/term/threat) supplies the broader potential-adverse-event definition.

**Exact proposed replacement:** Thai: `Threat คือสิ่ง บุคคล หรือเหตุการณ์ที่อาจก่อความเสียหาย โดยอาจมีแหล่งกำเนิดภายในหรือภายนอกองค์กร เช่น พนักงานประสงค์ร้าย แฮกเกอร์ หรือไฟไหม้ ส่วน Vulnerability คือจุดอ่อนที่อาจถูกใช้ประโยชน์หรือถูกกระตุ้นจนเกิดความเสียหาย`. English: `A threat is a person, circumstance or event with the potential to cause harm, arising inside or outside the organization. A vulnerability is a weakness that can be exploited or triggered.`

**CC scope/repeats/risks:** A basic concept clarification under 1.1/1.2. Change both lines 37 and 1040, retain the correct table at 20–24. `js/core/diagram-generator.js:21–159` threat-chain payload uses ordinary attacker/malware/flood examples; examples alone do not assert external exclusivity. Existing scenarios 1–3 do not depend on an external-only definition. **Risk:** changing only the warning leaves the final distinction card teaching the same error.

#### D1-F04 — Thai vulnerability grammar reverses the exploitation relationship

**Domain/objective:** 1 / 1.1, with 1.2 foundation. **Verdict: Confirmed error. Severity P3; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:22`: `ที่เปิดโอกาสให้ Threat ถูกใช้ประโยชน์`. Grammatically, Threat is the object being exploited. The intended relationship is that a weakness is exploited by a threat source, not that the threat is exploited.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:523`: `> Weakness that could be exploited`. `ISC2 Update 2026/Domain 1/Domain 1.md:21`: `จุดอ่อนที่อาจถูกใช้ประโยชน์`; 26: `Asset มีคุณค่า → Threat อาจใช้ Vulnerability → เกิดเหตุการณ์ที่สร้าง Impact`. Both originals have the correct relationship. Attribution: textbook generation introduced this Thai passive-object error.

**Technical/reference basis:** NIST threat glossary links threat sources exploiting system vulnerabilities, and NIST SP 800-30r1 §2.3.1 distinguishes threat source/event from vulnerability. [NIST threat glossary, FIPS 200 definition](https://csrc.nist.gov/glossary/term/threat); [NIST SP 800-30r1 §2.3.1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf#page=17).

**Exact proposed replacement:** Thai: `จุดอ่อนหรือข้อบกพร่องในระบบ กระบวนการ หรือมาตรการควบคุม ที่ผู้ก่อภัยคุกคามอาจใช้ประโยชน์ หรือเหตุการณ์คุกคามอาจกระตุ้นให้เกิดความเสียหาย`. English: `A weakness in a system, process or control that a threat source may exploit, or a threat event may trigger, to cause harm.`

**CC scope/repeats/risks:** Corrects a foundational sentence without expanding depth. Current line 24 and final row 1311 already use threat-exploits-weakness correctly. The threat-chain diagram's vulnerability entry at `js/core/diagram-generator.js:111–119` should be checked when revising terminology, but does not reproduce this exact passive reversal. No scenario answer changes. **Risk:** keep deliberate threats and accidental/environmental events intelligible; do not replace every “threat” with a human attacker.

#### D1-F05 — GDPR territorial scope is not EU citizenship wherever located

**Domain/objective:** 1 / 1.3 regulations and laws; local 1.3.2. **Verdict: Confirmed error. Severity P2; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:626`: `Controller/Processor ทั่วโลกที่มีการประมวลผลข้อมูลพลเมืองสหภาพยุโรป`. This substitutes a citizenship rule for territorial/processing criteria.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:841`: `เกี่ยวข้องกับ Personal Data / Privacy ภายใน Scope ที่กฎหมายกำหนด`; 853–855: `ไม่ใช่ทุกองค์กรต้องปฏิบัติตามทุก Regulation/Requirement` and `ต้องดู **Applicability**`. `ISC2 Update 2026/Domain 1/Domain 1.md:138` discusses handling personal information, without a GDPR citizenship rule. The exact citizenship claim is **Not covered in original learning notes** (both complete files checked). Attribution: introduced in textbook expansion, not inherited.

**Technical/reference basis:** EDPB Guidelines 3/2018 v2.1 §1 establishment criterion and §2 targeting criterion explain Article 3. Section 2(a), printed pp.14–15, explicitly says targeting is not limited by citizenship or residence. [EDPB Guidelines 3/2018, §1 and §2(a)](https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en_1.pdf#page=14). Establishment-related processing can be covered wherever performed; non-EU organizations can be covered for offering goods/services to people in the Union or monitoring behavior there, subject to Article 3's conditions.

**Exact proposed replacement:** Thai: `GDPR คุ้มครองข้อมูลส่วนบุคคลตามขอบเขตการใช้บังคับของกฎหมาย เช่น การประมวลผลในบริบทกิจกรรมของสถานประกอบการในสหภาพยุโรป หรือการเสนอสินค้า/บริการแก่บุคคลที่อยู่ในสหภาพยุโรปหรือเฝ้าติดตามพฤติกรรมของบุคคลที่เกิดขึ้นที่นั่นตามเงื่อนไข Article 3 การมีสัญชาติ EU เพียงอย่างเดียวไม่ใช่เกณฑ์ตัดสิน`. English: `GDPR applicability follows Article 3, including processing in the context of an EU establishment and specified offering-of-goods/services or behavior-monitoring activities involving people in the Union. EU citizenship alone does not determine applicability.`

**CC scope/repeats/risks:** Concise applicability teaching suits entry-level governance; no legal-advice chapter needed. The general applicability reminder at current line 644 remains useful. `privacyFlow` at `js/core/diagram-generator.js:472–556` mentions GDPR/PDPA but does not repeat citizenship. No D1 scenario tests GDPR. **Risk:** do not replace citizenship with an equally universal “all residents' data anywhere” rule, and do not imply every processor worldwide is automatically covered because its customer is covered.

#### D1-F06 — Accounting logs versus evidence of non-repudiation

**Domain/objective:** 1 / 1.1 AAA and non-repudiation; local 1.1.3, 1.1.5, 1.1.6. **Verdict: Misleading or ambiguous wording. Severity P2; confidence high.**

**Current exact evidence:** `js/core/diagram-generator.js:464`: `บันทึกเหตุการณ์และการกระทำทั้งหมดลง Log: Audit Trails, ประทับเวลา (Timestamps) เพื่อสร้างความรับผิดชอบที่ไม่สามารถปฏิเสธได้ (Non-Repudiation)`. The unqualified link makes ordinary timestamped logging appear sufficient for the stronger property. Current Markdown line 232 instead correctly says logs create `Accountability`; line 250 discusses Digital Signature, PKI and trustworthy timestamping.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/Domain 1.md:117`: `บันทึกว่า **ใครทำอะไร เมื่อไร และกับระบบใด** เพื่อการติดตาม สืบสวน และตรวจสอบความรับผิดชอบ`; line 132: `เช่น การใช้ Digital Signature พร้อมการจัดการกุญแจและหลักฐานที่เหมาะสม`. `ISC2 Update 2026/Domain 1/D1 sum.md:205`: `> Tracking + Recording Activities`. Neither original claims that timestamps alone establish non-repudiation. Attribution: mobile textbook diagram introduced conflation.

**Technical/reference basis:** RFC 4949 §2 entry “non-repudiation service,” printed pp.200–201, distinguishes verifiable evidence and dispute resolution from an inability even to deny an action; entry “accountability” describes tracing actions to entities. It is an informational glossary, not a mandatory IETF implementation standard. [RFC 4949 §2, non-repudiation service](https://www.rfc-editor.org/rfc/rfc4949.html#page-200). Logs can contribute to an evidence system; they are not inherently useless, nor are digital signatures the only conceivable evidence mechanism.

**Exact proposed replacement:** Thai: `Audit Trails และ Timestamps ช่วยติดตามกิจกรรมและสนับสนุน Accountability เมื่อบันทึกได้รับการปกป้องและเชื่อมโยงกับตัวตนอย่างน่าเชื่อถือ ส่วน Non-repudiation ต้องมีหลักฐานและการควบคุมที่เหมาะสมต่อการโต้แย้งภายหลัง เช่น ลายมือชื่อดิจิทัลพร้อมการจัดการกุญแจและหลักฐานที่เชื่อถือได้ ไม่ได้เกิดจากการมี Log เพียงอย่างเดียว`. English: `Protected audit trails and timestamps support accountability by linking activity to an identity. Non-repudiation requires evidence and assurance controls suitable for resolving later disputes, such as properly managed digital signatures; ordinary logs alone do not guarantee it.`

**CC scope/repeats/risks:** Reinforces two explicit 1.1 concepts. Desktop AAA at `js/core/diagram-generator.js:392–395` says only audit logs/tracing and can stay. Current Markdown 250–252, 299–323, 1309–1310 must remain consistent. No review scenario establishes a wrong key. **Risk:** avoid promising that a signature removes all legal disputes or that all accounting evidence is automatically non-repudiation.

#### D1-F07 — ALE upper bound presented as a complete decision rule

**Domain/objective:** 1 / 1.2; local 1.2.2, 1.2.4, 1.5.4. **Verdict: Misleading or ambiguous wording. Severity P2; confidence high. Not an arithmetic error.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:506`: `ต้นทุนของมาตรการความปลอดภัยต่อปีไม่ควรเกินมูลค่า $ALE$ ของความเสี่ยงนั้น`. `js/core/diagram-generator.js:744`: `Decision Rule: ค่าใช้จ่ายมาตรการป้องกันต่อปี (Cost of Control) ไม่ควรเกิน ALE`; mobile line 795 instead says `มูลค่าความเสียหายที่ลดลงได้ (ALE Savings)`, and calls it a `กฎเหล็กของข้อสอบ`.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:744`: `- Cost of Treatment สูงเกิน Benefit`; 643: `ความเสียหายที่คาดว่าจะเกิด **ต่อปี**`. `ISC2 Update 2026/Domain 1/Domain 1.md:173–176` describes responses, not a universal ALE spending limit. The specific “cost must not exceed untreated ALE” exam rule is **Not covered in original learning notes** (both files checked). Attribution: textbook introduced the framing; original cost-versus-benefit idea is sound.

**Technical explanation:** Under a deliberately narrow model—one year's expected financial losses, no other benefits or obligations, nonnegative residual ALE—cost ≤ untreated ALE is a necessary upper bound for positive net economic benefit, because maximum possible loss reduction cannot exceed untreated loss. It is not a sufficient criterion. Example: ALE before = 10,000/year; after = 9,000/year; annual control cost = 5,000. The upper bound passes, but savings = 1,000 and net benefit = −4,000. The textbook's 25,000-versus-10,000 rejection is numerically valid under that narrow model. Mobile's savings comparison is more precise but its absolute exam rule omits legal/safety/contract/mission constraints.

**Reference basis:** NIST SP 800-39 §3.1 and §3.3 Tasks 3-1–3-3 frame responses in terms of organizational constraints, effectiveness, priorities and trade-offs; they do not mandate this universal inequality. [NIST SP 800-39 §3.3, Risk response](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf#page=50). The example above is independent arithmetic, not attributed to NIST.

**Exact proposed replacement:** Thai: `ในการเปรียบเทียบด้านการเงินแบบง่าย ให้คำนวณผลประโยชน์จากการลดความเสียหายต่อปี = ALE ก่อนใช้ Control − ALE หลังใช้ Control แล้วเปรียบเทียบกับต้นทุน Control ต่อปี การมีต้นทุนต่ำกว่า ALE เดิมเพียงอย่างเดียวยังไม่พอ กฎหมาย สัญญา ความปลอดภัยของบุคคล และภารกิจอาจทำให้องค์กรต้องเลือกมาตรการแม้ผลตอบแทนทางการเงินโดยตรงไม่เป็นบวก`. English: `For a simple financial comparison, annual loss-reduction benefit = ALE before the control − ALE after the control. Compare this benefit with the annualized control cost; a cost below untreated ALE alone does not establish value. Legal, contractual, safety and mission requirements may also govern the decision.`

**CC scope/repeats/risks:** One before/after example supports basic 1.2 risk response without finance-course expansion. Align Markdown 505–506, desktop/mobile diagram 744/795 and `js/core/content-components.js:146–147`. Current scenario 6 at Markdown 1276–1279 and `domain-1-scenarios.js:58–61` correctly identifies an explicitly approved acceptance decision; keep its answer. Add a contextual qualifier to its reasoning if revising, rather than recasting the key. Cheat sheet 1315 already says cost exceeds benefit. **Risk:** replacing every “ALE” with “savings” mechanically can break valid definitions and arithmetic.

#### D1-F08 — Lifecycle teaching model and claimed provenance

**Domain/objective:** 1 / 1.2 risk lifecycle. **Verdict: Misleading or ambiguous wording. Severity P2; high confidence for NIST mismatch, medium for unverified current-course attribution.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:533`: `เช่น NIST หรือ ISO 31000` followed by `Identify → Assess → Treat → Monitor`, and `ในหลักสูตรการสอน ISC2 CC 2026 นี้ ได้กำหนด ... ไว้อย่างชัดเจนเป็นขั้นตอนที่ 5`. Lines 518–526 otherwise give a reasonable local five-part learning sequence.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:475`: `Lifecycle ที่เรียนคือ:` followed at 478/480/482/484/486 by Identify, Assess / Analyze, Treat / Respond, Monitor / Review, Communicate / Report. `ISC2 Update 2026/Domain 1/Domain 1.md:164–167` gives the first four without an official named-source comparison. Thus five-stage educational content is inherited from an original that expressly describes what was learned. The textbook introduced the generalized NIST/ISO comparison and stronger current-course mandate. This does not prove the sum misremembered private course instruction.

**Reference basis:** NIST SP 800-39 Chapter 3 §§3.1–3.4 names Frame, Assess, Respond, Monitor and allows flexible execution/communication. [NIST SP 800-39, Chapter 3 printed pp.32–33](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf#page=41). ISC2's current official outline lists risk lifecycle/processes at 1.2, without enumerating a mandatory fifth stage. [Official CC outline, objective 1.2](https://www.isc2.org/certifications/cc/cc-certification-exam-outline). The source mismatch is positive evidence against equating this sequence with SP 800-39; the absence of public enumeration leaves private course attribution unresolved. ISO 31000 was not separately verified here, so no independent claim that every ISO process is four stages is made.

**Exact proposed replacement:** Thai: `บทนี้ใช้ลำดับช่วยเรียนรู้ 5 ส่วนจากบันทึกการเรียน: Identify → Assess → Treat → Monitor → Communicate/Report โดยการสื่อสารเกิดควบคู่ได้ตลอดกระบวนการ กรอบงานอื่นอาจจัดกลุ่มต่างกัน เช่น NIST SP 800-39 ใช้ Frame, Assess, Respond และ Monitor หากอ้างว่าลำดับนี้เป็นข้อกำหนดเฉพาะของหลักสูตร ISC2 CC 2026 ต้องระบุเอกสารหลักสูตรและตำแหน่งอ้างอิง`. English: `This lesson uses a five-part learning sequence from the study notes: Identify, Assess, Treat, Monitor and Communicate/Report. Communication can occur throughout. Other frameworks group activities differently; NIST SP 800-39 uses Frame, Assess, Respond and Monitor. Any claim that this exact sequence is mandated by the 2026 ISC2 CC course needs a traceable course citation.`

**CC scope/repeats/risks:** Retain clear continuity and communication teaching. The lifecycle diagram at `js/core/diagram-generator.js:803–936` presents five stages; its visual sequence should be labeled a teaching model, not silently changed to four. The heading and lesson at current 514–526 should use the same model label. No scenario answer depends on a fifth-stage mandate. **Risk:** deleting reporting because the public outline is high level would discard a useful inherited learning concept without evidence.

#### D1-F09 — Canon 2 adjective order is not demonstrated precedence

**Domain/objective:** 1 / 1.5; local 1.5.3. **Verdict: Misleading or ambiguous wording. Severity P2; confidence high for unsupported inference.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:990`: `ลำดับคำใน Canon 2 ให้เกียรติและความซื่อสัตย์มาก่อนกฎหมาย` and `ความซื่อตรงต่อความจริงต้องเป็นที่ตั้งเสมอ`. The same paragraph first instructs strict compliance with law, then infers a hierarchy from English adjective order.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1562–1566` lists `Honesty`, `Integrity`, `Fairness`, `Responsibility`, `Legality` with no override rule. `ISC2 Update 2026/Domain 1/Domain 1.md:269` gives the Canon 2 sentence and a parallel Thai translation. Adjective-order precedence is **Not covered in original learning notes** (both full originals checked). Attribution: introduced textbook interpretation.

**Technical/reference basis:** ISC2's official Code gives joint duties in Canon 2 and says high-level guidance does not replace professional ethical judgment. [ISC2 Code of Ethics, Code and Canons](https://www.isc2.org/ethics). The inference does not follow from word order. This is distinct from the historically taught ordering between four canons (N08). Lack of a public adjective-order rule is not proof that legal-but-dishonest conduct is acceptable; the latter clearly can fail the honesty duty without being illegal.

**Exact proposed replacement:** Thai: `Canon 2 กำหนดให้ประพฤติอย่างมีเกียรติ ซื่อสัตย์ ยุติธรรม รับผิดชอบ และถูกกฎหมายร่วมกัน การกระทำที่ไม่ผิดกฎหมายอาจยังขัดต่อจริยธรรมหากเป็นการหลอกลวงหรือไม่เป็นธรรม ไม่ควรอนุมานลำดับเหนือกว่ากันระหว่างหน้าที่เหล่านี้จากลำดับคำในประโยค`. English: `Canon 2 requires honorable, honest, just, responsible and lawful conduct together. Conduct can be lawful yet unethical if it is dishonest or unfair. The order of adjectives alone does not establish that one duty overrides another.`

**CC scope/repeats/risks:** Teaches the actual ethical duties without a novel legal hierarchy. `js/core/diagram-generator.js:1360–1363` includes honesty/fairness/lawfulness but does not repeat adjective-order precedence; preserve that distinction. No D1 ethics scenario presently applies this inference. **Risk:** do not let the N08 inter-canon issue become a reason to retain an unsupported intra-sentence hierarchy; also do not delete the valid lawful-but-unethical insight.

#### D1-F10 — Universal loss of legal protection after possible gross negligence

**Domain/objective:** 1 / 1.5 due care/diligence; local 1.5.2. **Verdict: Misleading or ambiguous wording. Severity P2; confidence high for overbreadth, not for any particular jurisdiction's liability result.**

**Current exact evidence:** `js/core/diagram-generator.js:1280`: `อาจมีความผิดฐาน <strong>Gross Negligence (ประมาทเลินเล่ออย่างร้ายแรง)</strong> ซึ่งไม่ได้รับการคุ้มครองทางกฎหมาย`. The first clause says “may,” but the loss-of-protection clause is categorical, with no law, jurisdiction, defendant role or kind of protection specified.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1448`: `Taking reasonable steps to protect assets and reduce risk`; `ISC2 Update 2026/Domain 1/Domain 1.md:256–259` describes reasonable measures and diligent evaluation. A gross-negligence offense or blanket removal of legal protection is **Not covered in original learning notes** after checking both files. Attribution: mobile textbook payload introduced the claim.

**Technical/reference basis:** The cited ISC2 ethics code creates professional obligations and a certification discipline process; it does not establish universal civil/criminal consequences. [ISC2 Code of Ethics, Code and Ethical Complaint Procedures](https://www.isc2.org/ethics). As a bounded counterexample to universal phrasing, U.S. 42 USC §14503(a)(3) expressly conditions one particular volunteer-liability protection on absence of gross negligence; it is a specific statutory protection for a defined role, not a global rule for all cyber staff or all legal rights. [Official U.S. Code §14503, limitation on liability for volunteers](https://usc-cdn.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title42-section14503). The official search result supplied current text; direct HTML retrieval timed out, so this statute is illustrative and is not relied on to decide a learner's actual liability.

**Exact proposed replacement:** Thai: `การละเลย Due Care หรือ Due Diligence อาจก่อให้เกิดความเสียหายและผลทางวินัย วิชาชีพ หรือกฎหมาย โดยความรับผิดและข้อคุ้มครองที่ใช้ได้ขึ้นอยู่กับข้อเท็จจริง บทบาท และกฎหมายที่เกี่ยวข้อง ไม่อาจสรุปจากคำว่า Gross Negligence เพียงอย่างเดียวว่าบุคคลนั้นหมดความคุ้มครองทางกฎหมายทุกประเภท`. English: `Failure to exercise due care or due diligence may cause harm and lead to disciplinary, professional or legal consequences. Liability and available protections depend on the facts, role and applicable law; “gross negligence” alone does not establish a universal loss of all legal protection.`

**CC scope/repeats/risks:** An introductory conduct lesson needs reasonable care and possible consequences, not an unsupported universal legal doctrine. The desktop cycle at `js/core/diagram-generator.js:1186–1220` and Markdown 903–949 do not repeat this legal conclusion; no scenario key requires it. **Risk:** retain the distinction between unethical conduct, negligence and a proven legal offense rather than replacing the claim with automatic criminal guilt.

### Detailed verification — N01–N10

#### D1-N01 — AI application coverage

**Domain/objective:** 1 / 1.1–1.5; current web AI supplement. **Verdict: Requires additional evidence** for the compulsory depth/exam-mandate claim; **verified coverage recommendation**, P2 priority; high confidence in actual omission and current supplemental guidance. No existing factual statement is proved false merely because it lacks an AI example.

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:1` describes `เนื้อหาฉบับสมบูรณ์` for Domain 1. Current CIA text at 51–140 uses ordinary data/network scenarios; AAA at 168–241 uses human users; privacy 256–301 does not apply concepts to training data. All current D1 Markdown, metadata, eight scenario objects and invoked diagrams were searched for AI, artificial intelligence/Thai equivalents, training data, model poisoning and poisoning; no D1 AI application was found. Metadata `content/isc2-cc-2026/reading/domain-1.js:9–15` correctly reports Security Principles and 24%; objectives 1.1–1.5 and their topic anchors are present. Formal headings are not missing.

**Original evidence and origin:** **Not covered in original learning notes** for AI/training-data/model-poisoning application, after reading all of `ISC2 Update 2026/Domain 1/D1 sum.md:1–1733` and `ISC2 Update 2026/Domain 1/Domain 1.md:1–405`. The fuller original limits its own coverage claim at 399–405, including `ยังไม่ได้ตรวจเทียบ ... รายการหัวข้อทางการของ Exam Outline 2026`. Attribution: absence shared by originals and textbook; why/when the omission occurred is uncertain. It is not a demonstrated generation-introduced factual error.

**Reference basis:** The current official page's section “How is AI Security Incorporated into the CC Domains?”, Domain 1, explicitly applies core security concepts to AI, including training-data privacy, poisoning, traceable automated actions and responsible governance. This section is additional to the five formal objective headings. [ISC2 official CC outline, AI security integration / Domain 1](https://www.isc2.org/certifications/cc/cc-certification-exam-outline). The linked current English exam-outline PDF's formal Domain 1 objectives remain 1.1–1.5, [official 2026 English outline, printed p.4](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf#page=4). Neither establishes a fixed number of examples or an extra sixth objective.

**Optional exact addition for review:** Thai: `ตัวอย่างการประยุกต์กับ AI: ชุดข้อมูลฝึกที่ถูกแก้ไขโดยมิชอบอาจกระทบ Integrity และทำให้โมเดลทำงานผิดพลาด ข้อมูลส่วนบุคคลในชุดข้อมูลต้องได้รับการคุ้มครอง บัญชีบริการ AI ควรมีสิทธิ์เท่าที่จำเป็นและบันทึกกิจกรรมเพื่อให้ตรวจสอบย้อนกลับได้ การนำ AI มาใช้ต้องผ่านนโยบาย การประเมินความเสี่ยง และการกำกับดูแลขององค์กร`. English: `AI application: unauthorized changes to training data can damage integrity and model behavior. Personal information in datasets needs protection. AI service accounts should receive only necessary permissions and have traceable activity. AI adoption should follow organizational policies, risk assessment and governance.`

**CC scope/repeats/risks:** Add a small application of existing principles, not advanced model engineering. Coordinate 1.1.2 CIA, 1.1.6 privacy, 1.2 risk, 1.3 GRC and 1.5 responsible conduct; a single linked mini-case may avoid repetition. All eight review scenarios at Markdown 1228–1298 / `domain-1-scenarios.js:8–83` currently omit AI; no existing answer is wrong. **Risk:** avoid claiming every model-poisoning case is only integrity, or that logging alone yields non-repudiation (F06); avoid invented exam-frequency or mandatory-example counts.

#### D1-N02 — Control function versus fixed incident stage

**Domain/objective:** 1 / 1.4; local 1.4.2–1.4.3. **Verdict: Misleading or ambiguous wording. Severity P2; confidence high.**

**Current exact evidence:** `js/core/diagram-generator.js:1125` labels `DETECTIVE (ขณะเกิดเหตุ)`; line 1129 says `แจ้งเตือนภัยแบบเรียลไทม์ขณะที่เหตุการณ์หรือการโจมตีกำลังดำเนินอยู่`; 1148 labels corrective/recovery `หลังเกิดเหตุ`. Desktop at 1068–1070 says detection/alerting while the event occurs. Yet the existing caption at 1179 says the stages do not bind one control to one time, and `content/isc2-cc-2026/reading/domain-1.md:851` correctly includes retrospective CCTV as detective. The old report's “restricts” is too absolute if the caption is ignored; the actual concern is emphasis and conflict among representations.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1241`: `Discover / Detect Activity`; 1268: `Fix / Restore / Recover / Reduce Damage`; mnemonic 1391–1400 gives the deterrent→preventive→detective→corrective sequence. `ISC2 Update 2026/Domain 1/Domain 1.md:213`: `ตรวจจับเหตุการณ์หรือการละเมิด`, and 219 says one control may serve multiple functions. Attribution: general timeline/mnemonic inherited, narrow real-time framing is a current-only elaboration; causal editing history unproven.

**Reference basis:** NIST SP 800-92 §2.1.4 and §5.3 discuss log usefulness, incident investigation and forensic needs after events; footnote 46 on printed p.5-4 notes evidence can be needed weeks/months later. [NIST SP 800-92 §2.1.4 and §5.3](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-92.pdf#page=43). This supports retrospective detection without imposing a universal control taxonomy.

**Optional exact replacement:** Thai: `จัดประเภทตามหน้าที่หลักของมาตรการ: Preventive สกัดกั้นการกระทำ; Detective ค้นพบเหตุการณ์ได้ทั้งระหว่างเกิดและย้อนหลัง; Corrective แก้ไขสาเหตุหรือลดความเสียหาย และอาจเริ่มขณะเหตุยังดำเนินอยู่; Recovery ฟื้นฟูบริการ เวลาที่ทำงานอาจซ้อนทับกันได้`. English: `Classify controls by their primary function: preventive controls block unwanted activity; detective controls discover events during or after occurrence; corrective controls address problems or reduce harm and may begin during an incident; recovery restores service. Their timing can overlap.`

**CC scope/repeats/risks:** Refine the existing concept; no need to add a mandatory control-response workflow. Align desktop `js/core/diagram-generator.js:1053–1084`, mobile 1091–1159, caption 1179 and Markdown mnemonic 833–835 / analysis steps 870–873. Retain correct retrospective example 851 and function definitions 794/803. Scenario 8 (warning sign→deterrent) remains valid. **Risk:** erasing the caption would lose a useful existing qualification; recovery and corrective categories can overlap and should not be made mutually exclusive by arbitrary timing.

#### D1-N03 — Defense layers, guarantee and Thai encryption wording

**Domain/objective:** Domain 1 local 1.1.7 enrichment; formally also related to Domain 4 objective 4.2. **Verdict: Misleading or ambiguous wording. Severity P2; confidence high for guarantee/grammar, medium for visual pedagogy.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:352`: `(No Single Point of Failure in Security)`; 354 explicitly calls the seven layers an `ตัวอย่าง`, which appropriately bounds the count. `js/core/diagram-generator.js:602` says `No Single Point of Failure`, mobile 610 repeats removal of single failure points. Line 676: `ป้องกันช่องโหว่ซอฟต์แวร์และการเข้ารหัสข้อมูล` can grammatically read “prevent vulnerabilities and encryption,” although its next phrase correctly recommends encryption. The SVG core at 566–568 is surrounded by example boxes 572–599, without connecting those boxes to the protected core; visual weakness is an editorial inference, not proof the security concept is absent.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/Domain 1.md:295`: `การใช้ **มาตรการหลายชั้น** เพื่อไม่ให้การล้มเหลวของ Control เดียวเปิดทางให้ผู้โจมตีเข้าถึงทุกอย่าง`; 297 gives example controls. The sum does not supply a seven-layer diagram or encryption-prevention grammar. General layering is inherited; guaranteed elimination and the exact Thai ambiguity are current-only additions. Both originals checked; no causal edit history inferred.

**Reference basis:** NIST's defense-in-depth glossary describes integrated people, technology and operations with multiple barriers; this supports layered risk reduction rather than a guarantee of independence or total failure-point removal. [NIST CSRC defense-in-depth, definitions and source context](https://csrc.nist.gov/glossary/term/defense_in_depth). The official CC outline locates Defense in Depth explicitly under 4.2; introducing it earlier is reasonable reinforcement, not a Domain 1 coverage requirement.

**Optional exact replacement:** Thai: `Defense in Depth ใช้มาตรการหลายชั้นที่เสริมกันเพื่อลดโอกาสที่ความล้มเหลวของมาตรการเดียวจะนำไปสู่ความเสียหาย ชั้นต่าง ๆ ยังอาจมีจุดพึ่งพาร่วมกัน จึงไม่รับประกันว่าจะกำจัดจุดล้มเหลวเดี่ยวทั้งหมด ตัวอย่างชั้น Application & Data: ลดช่องโหว่ซอฟต์แวร์ด้วย WAF/การแก้ไขที่เหมาะสม และใช้การเข้ารหัสข้อมูลทั้งขณะจัดเก็บและส่งผ่าน`. English: `Defense in Depth combines complementary controls to reduce the chance that one control failure leads to loss. Layers can share dependencies and do not guarantee elimination of every single point of failure. Example Application & Data layer: reduce software exposure with suitable controls and use encryption at rest and in transit.`

**CC scope/repeats/risks:** Preserve seven as an example, not a canonical required count. Show a common protected asset with labels or containment if a diagram revision is later approved. Coordinate current Markdown 352/354/1220/1324 and generator 602/610/676; no scenario key depends on seven layers. **Risk:** visual redesign alone cannot correct an absolute guarantee, and merely adding more boxes does not prove control independence.

#### D1-N04 — Risk combination and residual subtraction mnemonic

**Domain/objective:** 1 / 1.2; local 1.2.1, 1.2.5, 1.5.4. **Verdict: Misleading or ambiguous wording. Severity P3; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:388`: `ผลรวมของโอกาส...ควบคู่กับขนาดของผลกระทบ`; 409: `Risk \approx Likelihood \times Impact`; 580: `Residual Risk = Inherent Risk - Impact of Controls`; 1056 repeats `ผลรวมของโอกาสเกิด (Likelihood) และผลกระทบ`. Thai “ผลรวม” can mean a general combination, so it is not by itself a demonstrated instruction to numerically add probability and money. Together with subtraction of an undefined “Impact of Controls,” however, the model assumptions remain unclear.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/Domain 1.md:158`: `Risk ≈ Likelihood × Impact` with the qualification `ในทางปฏิบัติองค์กรอาจใช้วิธีเชิงคุณภาพหรือเชิงปริมาณต่างกัน`; 182–185 defines risk before/after controls without subtraction. `ISC2 Update 2026/Domain 1/D1 sum.md:576/596/647` gives EF/SLE/ALE financial formulas, not a general residual subtraction equation. Approximate multiplication is inherited with a fuller-original caveat; unbounded sum/subtraction phrasing is current-only.

**Reference basis:** NIST SP 800-30r1 §3.1 Task 1-4 allows organization-specific models/scales and does not prescribe one algorithm for combining semi-quantitative values. [NIST SP 800-30r1, Task 1-4, printed p.23](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf#page=37). This supports labeling the product a simplified scoring model, not declaring every product model invalid.

**Optional exact replacement:** Thai: `Risk ประเมินจากโอกาสเกิดและผลกระทบร่วมกัน บางโมเดลแบบง่ายใช้ Risk ≈ Likelihood × Impact โดยต้องกำหนดสเกลและความหมายของคะแนนให้ชัดเจน Residual Risk คือความเสี่ยงที่ประเมินใหม่หลังคำนึงถึงมาตรการควบคุม ไม่ใช่การลบคะแนนหรือเงินออกจากกันได้เสมอไป`. English: `Risk is assessed by considering likelihood and impact together. Some simplified models use Risk ≈ Likelihood × Impact with explicitly defined scales. Residual risk is the risk reassessed after considering controls; it is not always obtained by simple subtraction.`

**CC scope/repeats/risks:** Keep SLE=AV×EF and ALE=SLE×ARO at 440/479 and worked arithmetic intact. Align definitions 388/404/409, residual 579–581 and review 1056. Risk-calculation diagram `js/core/diagram-generator.js:695–801` teaches financial pipeline, not the residual subtraction, and need not lose valid arithmetic. No existing question asks learners to add ordinal categories. **Risk:** do not overcorrect a mnemonic into a false claim that qualitative scores can never use a defined matrix/product.

#### D1-N05 — Privacy wording, controller breadth, consent and retention example

**Domain/objective:** 1 / 1.1 privacy and 1.3 applicability; local 1.1.6. **Primary verdict: Confirmed error** for excluding natural-person controllers; other components are misleading/ambiguous or require jurisdictional evidence. Severity P3; confidence high for definition/translation, medium for consent implication, low for any seven-year legal conclusion.

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:256`: `การจัดเก็บ (Collection)` then `การจัดเก็บรักษา (Storage)`; 267 defines Controller as `นิติบุคคลหรือองค์กร`; 281 says `เคารพสิทธิและความยินยอมของ Data Subject เสมอ`; 291 says `การเก็บเอกสารภาษีพนักงานไว้ 7 ปีตามที่กฎหมายกำหนด`. `js/core/diagram-generator.js:516` discusses consent as one subject right, not an explicit “consent is always required” statement; 533 narrows Controller to `องค์กร`. The alleged “universal consent flow” is an implication, not a literal established universal rule; desktop 486 simply says data are provided.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:358`: `กำหนด Purpose และ Means ของการ Processing`; 362: `คนที่ตัดสินว่า **เก็บข้อมูลทำไม และจะจัดการอย่างไร**`; 439: `Employee tax records → เก็บตามระยะเวลาที่กฎหมายกำหนด` without seven years. `ISC2 Update 2026/Domain 1/Domain 1.md:138`: `ตั้งแต่การเก็บ ใช้ เปิดเผย เก็บรักษา ไปจนถึงการลบข้อมูล`. The current natural-person exclusion, numeric retention period and universal-sounding consent addition are not in either original. Attribution is textual current-only addition; causation unproven.

**Reference basis:** EDPB final Guidelines 07/2020 v2.1 §2.1.1 paragraphs 17–19 explicitly includes natural persons as possible controllers while noting organizations commonly act in that role. [EDPB final Guidelines 07/2020 §2.1.1, printed p.10](https://www.edpb.europa.eu/system/files/documents/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf#page=10). GDPR Article 6(1) has multiple lawful bases and Article 5(1)(e) addresses storage limitation; a seven-year tax assertion requires a named applicable law. Direct EUR-Lex retrieval was blocked by a robot check; therefore this review does not purport to validate a jurisdiction-specific retention period. The controller exclusion is positively verified independently of that limitation.

**Exact proposed replacement:** Thai: `Collection = การเก็บรวบรวมข้อมูล; Storage = การเก็บรักษาข้อมูล. Controller คือบุคคลธรรมดา นิติบุคคล หน่วยงาน หรือองค์กรที่กำหนดวัตถุประสงค์และวิธีการประมวลผล โดยลำพังหรือร่วมกับผู้อื่น การประมวลผลต้องมีฐานกฎหมายที่ใช้ได้ โดยความยินยอมเป็นเพียงฐานหนึ่งเมื่อกฎหมายกำหนด เก็บเอกสารภาษีตามระยะเวลาที่กฎหมายที่ใช้บังคับกำหนด แล้วทบทวนการลบเมื่อหมดความจำเป็น`. English: `Collection means obtaining personal data; storage means retaining it. A controller may be a natural person, legal entity, authority or other body determining processing purposes and means, alone or jointly. Processing requires an applicable lawful basis; consent is one possible basis. Retain tax records for the period required by the applicable law and review deletion when retention is no longer necessary.`

**CC scope/repeats/risks:** Bounded vocabulary/role corrections fit introductory privacy. Coordinate Markdown 256/267/281/291/296 and diagram 516/533; retain valid erasure exceptions at 296. No D1 review scenario tests consent or a seven-year period. **Risk:** GDPR and Thai PDPA are distinct laws; do not imply all lawful bases, exceptions or deadlines are identical across them. Do not replace seven years with another unverified universal number.

#### D1-N06 — Hypothetical password standard versus current guidance

**Domain/objective:** 1 / 1.1 MFA vocabulary, 1.3 document hierarchy. **Verdict: Misleading or ambiguous wording. Severity P3; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:683` presents an organizational example requiring `14 ตัวอักษร ผสมอักขระ 3 ใน 4 ประเภท`. `js/core/content-components.js:37` lists `คำถามกันลืม (Security Questions)` as knowledge examples. `js/core/diagram-generator.js:1012` says standards must be followed `โดยไม่มีข้อยกเว้น`. The password row is explicitly an example of a Standard, not a claim of universal NIST compliance; that matters. Security questions accurately exemplify knowledge-based questions historically, though the absence of legacy labeling makes them seem recommended.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:243` lists `Security Question`; 956 uses a deliberately generic `Password ต้องอย่างน้อย X characters และเป็นไปตามข้อกำหนดที่องค์กรกำหนด`. `ISC2 Update 2026/Domain 1/Domain 1.md:240` gives `บัญชีผู้ดูแลระบบต้องใช้ MFA`; 242 recommends a passphrase. Security-question taxonomy is inherited; specific dated composition and no-exception absolutes are current-only additions.

**Reference basis:** NIST SP 800-63B-4 §3.1.1.2 differentiates single-factor and MFA password minima and rejects composition requirements/security questions for the covered digital-authentication use case. This is scoped NIST guidance, not proof every private organization's example is unlawful. [NIST SP 800-63B-4 §3.1.1, Passwords](https://pages.nist.gov/800-63-4/sp800-63b.html#password). Document exception handling depends on the organization's governance; “mandatory” does not by definition prove no authorized exception process can exist.

**Optional exact replacement:** Thai: `ตัวอย่าง Standard: บัญชีผู้ดูแลระบบต้องใช้ MFA ตามมาตรฐานที่องค์กรอนุมัติ. Password และ PIN เป็นตัวอย่าง Knowledge Factor; Security Questions เป็นวิธีเดิมที่คาดเดาหรือสืบค้นคำตอบได้และไม่ควรนำเสนอเป็นแนวทางสมัยใหม่. Standard เป็นข้อกำหนดบังคับ การยกเว้นต้องผ่านกระบวนการอนุมัติและบันทึกความเสี่ยงขององค์กร ไม่ใช่การยกเว้นโดยผู้ใช้เอง`. English: `Example standard: administrator accounts must use MFA under the approved organizational standard. Passwords and PINs illustrate knowledge factors; security questions are a legacy, weak approach, not a modern recommendation. Standards are mandatory; exceptions require the organization's formal approval and risk documentation rather than unilateral user discretion.`

**CC scope/repeats/risks:** The administrator-MFA example teaches Standard without adding password-policy detail irrelevant to the hierarchy comparison. Align current 683, generated MFA example 37 and diagram 1012; keep the Mandatory-versus-Advisory distinction at Markdown 682–707 and cheat-sheet 1318. No scenario requires composition rules or security questions. **Risk:** do not turn “exceptions may be formally approved” into “standards are optional,” nor claim password policy must be identical for every system.

#### D1-N07 — Patch/scan examples and reasonable authorization assumptions

**Domain/objective:** 1 / 1.5 due care/diligence and authority boundaries. **Verdict: Acceptable simplification. Severity P3 recommendation; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:917`: `การลง Patch อุดช่องโหว่ทันทีที่ได้รับแจ้ง`; scenario 4 line 1258 scans `เซิร์ฟเวอร์ทั้งหมดในองค์กร`; scenario 5 line 1267 says the team installs a critical patch `ทันที`. Their answers are Due Diligence and Due Care. These are reasonable classroom contrasts; the prompt does not state the scan is unauthorized or that change control is bypassed. Omission of those details alone does not prove misconduct or a wrong answer.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1496–1508`: `บริษัท Scan Server` → Due Diligence; `ติดตั้ง Patch` → Due Care; rescan → Due Diligence. Line 1448 says reasonable protective steps; 1430–1440 explicitly requires an authorized purpose despite technical access. `ISC2 Update 2026/Domain 1/Domain 1.md:256–259` provides the same reasonable-care distinction. Basic scan/patch teaching is inherited; immediacy is a current-only intensifier. Causal history unproven.

**Reference basis:** NIST SP 800-40r4 Abstract and §2 treats enterprise patching as prioritization, acquisition, installation and verification under an enterprise strategy. [NIST SP 800-40r4, Abstract](https://csrc.nist.gov/pubs/sp/800/40/r4/final). This supports risk-aware urgency; it does not mean urgent patching is inherently wrong. Current Markdown 892–897 already explicitly teaches technical access is not business authorization.

**Optional exact replacement:** Thai: `ทีมงานที่ได้รับอนุญาตสแกนระบบภายในขอบเขตที่อนุมัติเพื่อประเมินความเสี่ยง (Due Diligence) เมื่อพบช่องโหว่วิกฤตจึงเร่งประเมินผลกระทบและติดตั้ง Patch ตามกระบวนการเปลี่ยนแปลงหรือกระบวนการฉุกเฉินที่อนุมัติ (Due Care) แล้วตรวจสอบผลอีกครั้ง (Due Diligence)`. English: `An authorized team scans systems within an approved scope to assess risk (due diligence). On finding a critical vulnerability, it promptly assesses impact and deploys the patch through an approved change or emergency process (due care), then verifies the result (due diligence).`

**CC scope/repeats/risks:** A brief qualifier prevents an operationally poor takeaway without changing the concept tested. If edited, synchronize Markdown 917/1258/1267, `domain-1-scenarios.js:40/49`, diagram `js/core/diagram-generator.js:1252` and current reasoning 1261/1270. **Keep both answers.** **Risk:** overqualification could imply every emergency requires slow routine scheduling, or that any omitted authorization detail makes a benign educational scenario a confirmed error.

#### D1-N08 — Inter-canon precedence requires traceable current-course provenance

**Domain/objective:** 1 / 1.5 ISC2 Code of Ethics. **Verdict: Requires additional evidence. Severity P3; confidence high in provenance gap, no conclusion that the convention is false.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:956`: `Strict Order of Precedence`; 964 says `Canon ลำดับก่อนหน้าจะมีความสำคัญเหนือกว่าเสมอ`; 977 says Canon 1 is above all other rules. `js/core/diagram-generator.js:1297` says `Canon 01 supersedes 02 ... 03 supersedes 04`; 1335 repeats `ข้อก่อนหน้าจะมีอำนาจเหนือกว่าข้อถัดไปเสมอ`. This is an explicit global priority claim, not simply numbering.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1605`: `S → A → P → P`; 1619: `Public → Ethical Conduct → Client/Employer → Profession`. It enumerates an easy memory order but does not explicitly say earlier canons always override later ones. `ISC2 Update 2026/Domain 1/Domain 1.md:267–273` numbers four principles without a strict override rule. The current absolute precedence wording is not explicit in either original; historical ISC2 teaching may still support a qualified convention. Current-only textual addition does not prove its author invented the idea.

**Reference basis:** The current official ethics page lists four mandatory canons and cautions that high-level guidance does not replace professional judgment. [ISC2 Code of Ethics, Code/Preamble/Canons](https://www.isc2.org/ethics). It does not settle all historical/current-course interpretations of conflicts. An official-authored historical CISSP CBK Fourth Edition passage reportedly teaches ordered inter-canon conflict resolution; the available lead is a third-party mirror and no publisher/ISC2-hosted current CC course passage was verified in this pass. Therefore **do not treat public-page silence as disproof**. Obtain title, edition, page and authorized current training context before making a universal “always” exam claim. This is separate from F09's adjective-order inference.

**Optional exact replacement pending provenance:** Thai: `ISC2 กำหนดจริยธรรม 4 Canons ตามรายการด้านล่าง บางตำราใช้ลำดับ Canons เพื่อช่วยวิเคราะห์ความขัดแย้งทางหน้าที่ หากใช้แนวทางนี้ในการเตรียมสอบ ควรระบุเอกสารหลักสูตรและฉบับที่อ้างอิง การตัดสินใจจริงยังต้องพิจารณาข้อเท็จจริง กฎหมาย และดุลยพินิจทางวิชาชีพ โดยไม่อนุมานว่าลำดับคำภายใน Canon 2 เป็นกฎเหนือกฎหมาย`. English: `ISC2 sets out four mandatory canons in the order listed below. Some training texts use their order to analyze conflicts of duty; if this convention is taught for the exam, cite the relevant course source and edition. Actual decisions still require the facts, applicable law and professional judgment. This does not establish a priority rule among the adjectives within Canon 2.`

**CC scope/repeats/risks:** Source the teaching convention rather than reverse it automatically. Reconcile current Markdown 956/964/974/977/987/1000/1013 and all `ethicsCanons` title/ARIA/desktop/mobile badges at generator 1289–1397; mnemonic at Markdown 1021–1023/1325 can remain a numbered memory aid. No D1 review scenario depends on conflicting canons. **Risk:** changing only visible text leaves assertive accessible labels; removing all ordering may conflict with legitimate official training history. The user should review a sourced qualified formulation.

#### D1-N09 — “Always” authorization, availability and a single load balancer

**Domain/objective:** 1 / 1.1 AAA/availability; local 1.1.2, 1.1.5. **Verdict: Misleading or ambiguous wording. Severity P3; confidence high.**

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:222`: `หลังจาก Authentication สำเร็จแล้วเสมอ`; 115: `พร้อมให้ผู้มีสิทธิ์เข้าใช้งานได้เสมอเมื่อต้องการ`; 1108 repeats always-available language. `js/core/diagram-generator.js:289` says `Eliminate Single Point of Failure - SPOF` while desktop 265 and paths 269–271 show one LB feeding three servers, without redundant LBs.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:197`: `Authorization ปกติเกิดหลัง Authentication` (normally); 77: authorized users can access resources when needed. Its original LB drawing 107–109 has one LB but only claims at 112 `เครื่องหนึ่งเสีย → เครื่องอื่นยังให้บริการ`, not elimination of all SPOFs. `ISC2 Update 2026/Domain 1/Domain 1.md:66`: `ให้ผู้มีสิทธิ์ใช้ข้อมูลหรือบริการได้เมื่อจำเป็น`; 111 describes the ordinary post-authentication permission decision. Normal workflow/redundant backend pattern inherited; absolute “always” and topology-wide SPOF implication are stronger current-only claims.

**Technical/reference basis:** RFC 4949 §2 “authorization” describes granted resource access and “availability” describes service according to performance specifications; neither requires zero downtime or makes every permission rule dependent on a fresh user login. [RFC 4949 §2, authorization / availability, printed pp.29–30](https://www.rfc-editor.org/rfc/rfc4949.html#page-29). An anonymous public resource can have an authorization policy permitting unauthenticated read. A session can also reuse an earlier authentication; no new password prompt is implied for each operation. The LB observation is direct topology reasoning, not a claim that the drawing proves the deployed LB lacks internal redundancy.

**Optional exact replacement:** Thai: `ในตัวอย่างการล็อกอินทั่วไป ระบบพิสูจน์ตัวตนก่อนตรวจสิทธิ์เข้าถึงทรัพยากร แต่กฎอนุญาตอาจกำหนดให้ผู้ใช้ที่ยังไม่ล็อกอินเข้าถึงข้อมูลสาธารณะได้ Availability คือความพร้อมให้บริการแก่ผู้มีสิทธิ์ตามเวลาที่จำเป็นและข้อกำหนดบริการ ตัวอย่าง LB นี้ลดผลกระทบจาก Web Server บางเครื่องเสีย; หากต้องการหลีกเลี่ยง LB เป็นจุดล้มเหลวเดี่ยว ต้องออกแบบความซ้ำซ้อนของ LB และส่วนพึ่งพาอื่นด้วย`. English: `In a typical login example, authentication precedes a resource permission check, but authorization policy can also permit anonymous access to public resources. Availability means required access under the service requirements. This load-balancer example reduces backend-server failure impact; avoiding a load-balancer single point of failure also requires suitable redundancy and dependency design.`

**CC scope/repeats/risks:** Scope the familiar AAA sequence, not replace it with advanced architecture. Coordinate Markdown 115/222/1108, diagram 289 and diagram's ordinary AAA arrows 370–388/402. Scenario 2's authenticated-but-denied example remains correct at Markdown 1240–1243 and `domain-1-scenarios.js:22–25`; do not change its answer. **Risk:** the single depicted LB does not prove all real-world LB services are nonredundant, and a simple definition of availability is a goal rather than a promise of mathematically perfect uptime.

#### D1-N10 — Three formal categories, four teaching buckets and Thai mantrap typo

**Domain/objective:** 1 / 1.4 control categories. **Primary verdict: Confirmed error** for Thai typo; **Acceptable simplification** for the four-category teaching model with mapping recommended. Severity P3; confidence high.

**Current exact evidence:** `content/isc2-cc-2026/reading/domain-1.md:759–762` lists Technical, Managerial, Operational and Physical. `js/core/content-components.js:217`: `ประตูกลักกันคนเดินตาม (Mantraps)`. “กลักกัน” is a typographical/translation error; use “กักกัน” or a clearer access-control-vestibule description. The official three-item outline does not imply that a fourth local teaching bucket is technically false.

**Original evidence and origin:** `ISC2 Update 2026/Domain 1/D1 sum.md:1077–1079`: `มี 4 Categories ตามสไลด์:` and `Technical / Managerial / Operational / Physical`; line 1158 lists `Mantraps` without the Thai typo. `ISC2 Update 2026/Domain 1/Domain 1.md:204–206` uses Administrative/Managerial, Technical/Logical and Physical. Four categories are inherited from the sum while the fuller original already follows a three-category organization. The Thai typo is current-only. Mixed-source taxonomy does not establish an invented or incorrect model.

**Reference basis:** Official CC outline 1.4 lists Technical, Administrative and Physical controls. [ISC2 current outline, objective 1.4](https://www.isc2.org/certifications/cc/cc-certification-exam-outline). A practical mapping can group managerial and people/process operational controls under the broad administrative heading, while acknowledging function/context overlaps. This is an educational reconciliation, not a claim that all standards everywhere use one immutable category boundary.

**Exact proposed replacement:** Thai: `Exam Outline 1.4 ใช้ 3 หมวดหลัก: Technical, Administrative และ Physical บทนี้แยก Administrative ออกเป็น Managerial (นโยบาย/กำกับดูแล) และ Operational (กระบวนการที่คนปฏิบัติ) เพื่อช่วยอธิบาย จึงมี 4 กลุ่มย่อยสำหรับการเรียน ตัวอย่าง Physical Control: ประตูควบคุมการผ่านเข้าออกสองชั้น (Mantrap/Access Control Vestibule) ช่วยลดการเดินตามโดยไม่ได้รับอนุญาต`. English: `Exam Outline 1.4 lists Technical, Administrative and Physical controls. This lesson separates Administrative into Managerial and Operational teaching groups to explain governance and people-operated processes. Example physical control: a mantrap/access-control vestibule helps reduce unauthorized tailgating.`

**CC scope/repeats/risks:** One mapping sentence aligns notes with the formal objective while preserving useful inherited distinctions. Update the category directive at Markdown 758–763 and generated `controlCategoriesData` at `js/core/content-components.js:182–218`, especially 217; Mandatory/Operational headings themselves need not be deleted. Current controls examples 786 and CCTV/Firewall 848–861 do not repeat the Thai typo. Scenario 8 asks function, not category, and keeps its answer. **Risk:** do not confuse category with function or treat every human-operated technical system as categorically “Operational” without context.


## Phase 1A — Domain 2 independent verification

Verified 2026-10-31. Audit only: no repository, original-note, test, historical-artifact or Git changes by this reviewer. This fragment supersedes the early checkpoint; it does not authorize remediation or human acceptance.

The four required planning documents were loaded first: `docs/plans/isc2-cc-2026/reading-notes-independent-findings-register.md`, `reading-notes-independent-audit-domains-1-4.md`, `reading-notes-independent-remediation-roadmap.md`, and `reading-notes-independent-coverage-matrix.md`. Their conclusions were hypotheses. Before current-note verification, both originals were read in full: `ISC2 Update 2026/Domain 2/D2 sum.md` (633 lines) and `ISC2 Update 2026/Domain 2/Domain 2.md` (731 lines).

All file:line references below are relative to `D:/_Coding/SEC-CERT-TEST/`, at this snapshot. Original provenance means wording present in these two files, without independent access to their underlying slides. “Inherited” means present in originals/likely inherited. “Generated/current-only” means absent from both inspected originals; actual causal edit history or authorship is not proven. Diagram checks concern both desktop/mobile payload semantics, not fresh visual-layout acceptance.

The [current ISC2 webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) and its separate AI integration section were directly retrieved. The linked [English outline PDF, printed p.5](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf#page=5) lists Domain 2 objectives 2.1–2.4, without prescribing RTO/MTTR mnemonics, numeric password thresholds, fixed site windows or one exercise taxonomy. D2-09 distinguishes this PDF from current web guidance.

### All-ID table

| ID | Verdict | Severity / confidence | Provenance | Disposition |
|---|---|---|---|---|
| D2-01 | Misleading or ambiguous wording | P3 / high | Inherited system shorthand; current-only inequality framing | Clarify target/tolerance and reprocessing |
| D2-02 | Confirmed error | P2 / high | Current-only | Remove irreversible harm/certain collapse |
| D2-03 | Misleading or ambiguous wording | P3 / high ambiguity, medium impact | Current-only numeric advice | Scope standard/policy; 14 is not universally wrong |
| D2-04 | Confirmed error | P2 / high | Current-only raw-value restriction | KPI/KRI remain metrics |
| D2-05 | Misleading or ambiguous wording | P3 / high | Inherited Respond; current-only endpoint/exam claim | Define timestamps; require provenance for exam convention |
| D2-06 | Confirmed error | P3 / high | Current-only diagram translation | Translate DR as recovery, DRP as plan |
| D2-07 | Misleading or ambiguous wording | P2 / high | Inherited contrast; current-only exclusionary wording | Preserve nested categories and Whaling answer |
| D2-08 | Confirmed error | P3 / high semantic confidence | Current-only Thai term | Use ตัวชี้วัด for metrics |
| D2-09 | Acceptable simplification | P3 enhancement / high | Original coverage limit; current-only deepfake example | Compact current-web-guidance enrichment |
| D2-10 | Misleading or ambiguous wording | P3 / high | Current-only | Separate document review and scenario discussion |
| D2-11 | Misleading or ambiguous wording | P3 / high | Current-only specific detail; inherited relative readiness | Qualify site timings/readiness |
| D2-12 | Misleading or ambiguous wording | P3 / high | Current-only elaboration | Clarify hashing/encryption and phishing scope |

Totals: **4 Confirmed error, 7 Misleading or ambiguous wording, 1 Acceptable simplification**. No finding that every maximum-downtime RTO definition, Respond expansion, or 14-character policy is wrong. Priorities were independently reassessed.

### Batch A — Recovery concepts

#### D2-01 — Defensible RTO shorthand; incomplete RTO/MTD relation

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:204`: “คือ **Maximum Acceptable Downtime** หรือระยะเวลาสูงสุดที่ระบบ IT ยอมให้หยุดทำงานได้”; `:166`: “RTO ≤ MTD” and “น้อยกว่าหรือเท่ากับ”. `:205` adds “เพื่อความอยู่รอดของธุรกิจ”. The 17:00→18:00 target at `:221` is correct.

**Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:264`: “**Maximum acceptable downtime**”; `:270`: “เช่น RTO = 2 ชั่วโมง หมายความว่าเป้าหมายคือกู้ระบบให้กลับมาภายในช่วงเวลานั้น”. `ISC2 Update 2026/Domain 2/Domain 2.md:242`: “**RTO = Maximum acceptable downtime for an IT system**”; `:265`: “ทั้งสองค่าเป็นเป้าหมาย ไม่ใช่การรับประกันว่าทำได้จริงเสมอ”. MTD and universal inequality framing: **Not covered in original learning notes**, after both complete files were inspected.

**Reference/discrepancy:** [NIST SP 800-34r1 §3.2.1, printed p.17](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=31) defines RTO with maximum system-resource unavailability and explains restoration normally precedes MTD to allow reprocessing. “Maximum acceptable downtime” alone is therefore defensible. The concern is treating the bare inequality as sufficient without the business-resumption interval. [NIST RTO glossary, SP 800-34r1 definition](https://csrc.nist.gov/glossary/term/recovery_time_objective) also permits recovery-phase duration wording.

**Origin/verdict:** Inherited shorthand; generated/current-only absolute framing. **Misleading or ambiguous wording**, P3/high. Scenario 2’s RTO answer is not wrong.

**Thai replacement:** “RTO คือเป้าหมายระยะเวลาสูงสุดที่กำหนดให้กู้คืนระบบหรือบริการหลังหยุดชะงัก ส่วน MTD คือระยะหยุดชะงักรวมของกระบวนการธุรกิจที่องค์กรทนได้ ต้องกำหนด RTO ให้เหลือเวลาสำหรับการตรวจสอบและทำรายการค้าง เพื่อให้กลับมาดำเนินธุรกิจได้ภายใน MTD เช่น MTD 4 ชั่วโมง อาจกำหนด RTO 3 ชั่วโมงและเวลาเตรียมกลับมาทำงานอีก 1 ชั่วโมง”

**English replacement:** “RTO is the target maximum interval for restoring a disrupted system or service. MTD is the business process’s total tolerable disruption. Set RTO with enough remaining time for validation and business reprocessing to stay within MTD; a four-hour MTD may allow a three-hour RTO and one further hour for business resumption.”

**CC fit:** One target/tolerance distinction and time example teach objective 2.2 planning without advanced continuity mathematics.

**Propagation/risk:** Reconcile Markdown `:164–168,203–207,537,639,672–674`; `content/isc2-cc-2026/reading/domain-2-scenarios.js:28–30`; `js/core/diagram-generator.js:1622,1640–1642,1676`. Diagram `:1627–1628,1685–1688` already identifies service restoration. A prose-only edit leaves the same ambiguity in review/JS/desktop/mobile. Preserve RPO arithmetic; an actual backup’s capability does not itself define the requirement.

#### D2-02 — MTD does not require irreversible harm/collapse

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:164`: “ก่อนจะเกิดความเสียหายที่ไม่อาจฟื้นคืนได้”; `:167`: “องค์กรจะล่มสลายก่อนที่ระบบ IT จะกู้คืนเสร็จสิ้น”. These are categorical, without an organization-specific impact scenario.

**Original quote/context:** **Not covered in original learning notes** after both were read fully. Relevant original BIA context is `ISC2 Update 2026/Domain 2/Domain 2.md:310`: “โดยเน้นการระบุ **critical business functions and priorities** และนำผลไปกำหนด IT recovery priorities; ไม่มีสไลด์รายละเอียดขั้นตอนทำ BIA แยกต่างหากในเนื้อหาที่ส่งมา”. `D2 sum.md:258–285` covers RTO/RPO without MTD.

**Reference/discrepancy:** [NIST MTD glossary, SP 800-34r1 definition](https://csrc.nist.gov/glossary/term/maximum_tolerable_downtime) uses significant mission harm. Irreversibility and organizational extinction are unnecessary. Severe delay, contractual impact or loss can exceed tolerance even if the organization later recovers.

**Origin/verdict:** Generated/current-only expansion. **Confirmed error**, P2/high.

**Thai replacement:** “MTD คือระยะเวลารวมที่กระบวนการธุรกิจหรือภารกิจหยุดชะงักได้ก่อนเกิดผลกระทบเกินระดับที่องค์กรยอมรับได้ การกู้คืนเกิน MTD อาจก่อผลกระทบร้ายแรง แต่ไม่ได้หมายความว่าองค์กรจะล่มสลายหรือเกิดความเสียหายที่ฟื้นคืนไม่ได้เสมอไป”

**English replacement:** “MTD is the total disruption a mission or business process can tolerate before harm exceeds the organization’s acceptable level. Exceeding MTD can cause serious impact; it does not necessarily mean irreversible damage or organizational collapse.”

**CC fit:** Corrects a foundational tolerance definition without introducing a new framework.

**Propagation/risk:** Direct errors Markdown `:164,167`; reconcile survival phrase `:205` and D2-01 repetitions. No D2 scenario/diagram directly predicts irreversible harm/collapse. Repairing only `:164` leaves `:167` contradicting it.

#### D2-06 — Diagram labels translate DR as DRP

**Current quote:** `js/core/diagram-generator.js:1542`: “DISASTER RECOVERY (DR) — แผนกู้คืนระบบเทคโนโลยีสารสนเทศ”; mobile `:1577`: “แผนกู้คืนระบบ IT โครงสร้างพื้นฐาน และข้อมูล”. Invoked by `content/isc2-cc-2026/reading/domain-2.md:185`.

**Original quote:** `ISC2 Update 2026/Domain 2/Domain 2.md:594`: “**DR vs DRP** | DR คือกระบวนการ/ความสามารถกู้คืน IT; DRP คือแผนกู้คืน”. `D2 sum.md:206–208` describes policies/tools/procedures to restore IT; `:289` separately names Disaster Recovery Plan. Neither original contains these diagram mistranslations.

**Reference/discrepancy:** [NIST DRP glossary, SP 800-34r1 definition](https://csrc.nist.gov/glossary/term/disaster_recovery_plan) identifies a written plan. The Thai plan/process mismatch also contradicts current Markdown `:508–513`. The useful nested BC/DR relationship is not the defect.

**Origin/verdict:** Generated/current-only diagram translation. **Confirmed error**, P3/high; localized label error, not a wrong recovery definition throughout.

**Thai replacement:** Desktop: “DISASTER RECOVERY (DR) — การกู้คืนระบบเทคโนโลยีสารสนเทศ”; mobile: “การกู้คืนระบบ IT โครงสร้างพื้นฐาน และข้อมูล”. Reserve “แผนการกู้คืน” for DRP.

**English replacement:** “Disaster recovery (DR): recovery of IT systems, infrastructure and data. The documented recovery plan is the DRP.”

**CC fit:** Preserves the existing capability/process versus document distinction.

**Propagation/risk:** Change generator `:1542,1577` together; check consistency with Markdown `:172,194,228,508–513,638` and JS scenario 1 `:22`, which do not contain the mistranslation. Desktop-only repair leaves mobile contradictory.

#### D2-11 — Site-readiness/timing examples need boundaries

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:233`: “ข้อมูลที่ซิงโครไนซ์แบบเกือบ Real-time พร้อมใช้งานทันที”; `:234`: “ไม่กี่นาทีถึงไม่กี่ชั่วโมง”; `:238`: “หลายชั่วโมงถึง 1–2 วัน”; `:242`: “หลายวันถึงหลายสัปดาห์”. Windows are not explicitly illustrative.

**Original quote:** `ISC2 Update 2026/Domain 2/Domain 2.md:284`: “**เพิ่มเติมเพื่อความเข้าใจ (สไลด์ที่ส่งมาเอ่ยชื่อ แต่ไม่ได้อธิบายความแตกต่าง):**”; `:286`: “ความพร้อมโดยทั่วไป | ระยะเตรียมการโดยทั่วไป”; `:288`: “**Hot Site** | ระบบและทรัพยากรเตรียมพร้อมมาก | เร็วที่สุด”. `D2 sum.md:299–303` only names sites. Numeric windows and universal near-real-time sync: **Not covered in original learning notes**.

**Reference/discrepancy:** [NIST SP 800-34r1 §§3.4.3 and 5.1.5, printed pp.22 and 47](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=36) allows variable configurations and hot-site data requiring updates since the last backup. Near-concurrent replication is common, not a universal defining condition. Relative readiness/cost ordering is useful.

**Origin/verdict:** Generated/current-only absolutes; inherited relative ordering. **Misleading or ambiguous wording**, P3/high.

**Thai replacement:** “Hot site เตรียมระบบและทรัพยากรพร้อมมากเพื่อเริ่มกู้คืนได้รวดเร็ว ข้อมูลอาจจำลองแบบต่อเนื่องหรือจำเป็นต้องปรับปรุงจากสำรองล่าสุด ขึ้นอยู่กับการออกแบบ โดยทั่วไป hot พร้อมมากกว่า warm และ cold; ช่วงเวลา เช่น นาที ชั่วโมง หรือหลายวัน เป็นเพียงตัวอย่าง ความสามารถจริงต้องทดสอบเทียบ RTO/RPO”

**English replacement:** “A hot site has substantial systems and resources prepared for rapid recovery. Data may be continuously replicated or need updating from recent backups. Hot, warm and cold indicate relative readiness, not fixed recovery guarantees; illustrative time ranges depend on design and must be tested against RTO and RPO.”

**CC fit:** Retains familiar site types and teaches requirement-based selection.

**Propagation/risk:** Direct Markdown `:231–243`; generator `:1549,1584` merely lists site types. No D2 scenario/exam tip asserts the windows. Avoid replacing these with a different unsourced universal timetable or technology requirement.

### Batch B — Measurement and terminology

#### D2-04 — Metrics are not exclusively raw values beneath KPI/KRI

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:441`: “Raw measurable value” and “ค่าดิบเชิงปริมาณที่ใช้เป็นฐานข้อมูลในการประเมินผล”. `js/core/diagram-generator.js:1791`: “ค่าดิบที่วัดได้เชิงปริมาณ (Quantifiable Raw Value) ซึ่งเป็นรากฐานข้อมูลของการวัดผลทุกระดับ”; mobile `:1869` repeats the raw-value restriction. KPI/KRI are a separate tier `:1752–1778`; metric is foundation 01 `:1788–1792`.

**Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:461`: “**Metric = Measurable Value**”; `:473–475` includes percent patched, MTTD and MTTR; `:520`: “เป็น Metric ที่ให้ Early Indication ว่า Risk กำลังเพิ่มหรือลด”. `ISC2 Update 2026/Domain 2/Domain 2.md:442` defines measurable value, `:448–450` includes percentage/means, and `:474`: “**Key Risk Indicator (KRI)** คือ Metric”. Original mnemonic `:578–583` does not restrict metrics to raw counts.

**Reference/discrepancy:** [NIST SP 800-55v1 §2.4, printed pp.9–11](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf#page=17) identifies KPI/KRI as metrics. A calculated percentage/average remains a metric. Separating data collection from interpretation could be valid, but calling only raw values metrics is not.

**Origin/verdict:** Generated/current-only narrowing and diagram architecture. **Confirmed error**, P2/high.

**Thai replacement:** “Metric คือค่าที่กำหนดและวัดอย่างสม่ำเสมอเพื่อประเมินการดำเนินงานหรือความเสี่ยง อาจเป็นจำนวน ร้อยละ อัตราส่วน หรือค่าเฉลี่ย KPI และ KRI เป็น Metric ที่เลือกใช้ตามวัตถุประสงค์: KPI ติดตามผลงานเทียบเป้าหมาย ส่วน KRI เฝ้าระวังแนวโน้มความเสี่ยง Dashboard, scorecard และ report เป็นรูปแบบนำเสนอที่อาจใช้ร่วมกันได้”

**English replacement:** “A metric is a defined, repeatable measure used to assess performance or risk; it may be a count, percentage, ratio or average. KPIs and KRIs are metrics selected for performance targets and risk monitoring respectively. Dashboards, scorecards and reports are communication formats that may overlap.”

**CC fit:** Uses existing patch/MFA examples to teach the relationship without a statistics chapter or mandatory reporting pipeline.

**Propagation/risk:** Markdown `:357,388,435,441–446,609–632`; generator `:1704,1752–1792,1835–1869`. Repair the table and both diagram forms; removing “raw” in one line leaves the numbered tier implication. JS scenarios 8/9/11 (`:75–86,102`) already use counts/performance targets and need no answer change. Do not recast all dashboard/scorecard/report forms as mutually exclusive stages.

#### D2-05 — Valid Respond expansion; unsupported initiation-only exam convention

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:374`: “**Mean Time to Respond / Remediate (MTTR):**”; `:375`: “*ตามบริบทในสไลด์และเนื้อหาการสอบ ISC2 CC:*” and “เวลาเฉลี่ยที่ทีมงานใช้ในการเริ่มดำเนินการตอบสนองต่อ Security Incident ที่ได้รับแจ้ง”. `:376` acknowledges Repair/Restore/Resolve.

**Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:492`: “**MTTR — Mean Time to Respond**”; `:494`: “ตาม framing ในสไลด์:”; `:496`: “ใช้เวลาเท่าไรในการ Respond ต่อ Security Incident”. `ISC2 Update 2026/Domain 2/Domain 2.md:450`: “**Mean Time to Respond (MTTR):** เวลาเฉลี่ยในการตอบสนองเหตุการณ์”; `:457` describes response duration. Initiation-only endpoint and universal ISC2 convention: **Not covered in original learning notes**. Underlying slides were not independently available to establish the stronger claim.

**Reference/discrepancy:** [Microsoft incident-response overview, “Incident response process for SecOps” → “1. Decide and act”](https://learn.microsoft.com/en-us/security/operations/incident-response-overview#incident-response-process-for-secops) distinguishes acknowledgement from a later remediation interval. This is a legitimate different operational convention, not proof ISC2 must use it. [ISC2 objective 2.4](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) prescribes no MTTR endpoints. Merged heading/initiation-only body is ambiguous; evidence remains required to retain a mandatory exam claim.

**Origin/verdict:** Inherited Respond; generated/current-only endpoint/authority claim. **Misleading or ambiguous wording**, P3/high. “Respond is wrong; always use Repair/Remediate” would itself be unjustified.

**Thai replacement:** “MTTR มีหลายความหมายตามบริบท เช่น Mean Time to Respond, Remediate, Repair หรือ Restore จึงต้องระบุชื่อเต็มและจุดเริ่ม/สิ้นสุดของช่วงเวลาที่วัด ในบทนี้ ถ้าหมายถึงเวลาเริ่มตอบสนอง ให้ระบุว่าเฉลี่ยตั้งแต่แจ้งเหตุจนเริ่มปฏิบัติ; ถ้าหมายถึงเวลาแก้ไขจนเสร็จ ต้องระบุจุดสิ้นสุดนั้นแยกต่างหาก อ่านนิยามในโจทย์ก่อนคำนวณหรือเปรียบเทียบ”

**English replacement:** “MTTR has several context-dependent expansions, including Mean Time to Respond, Remediate, Repair or Restore. State the full term and measurement endpoints. If measuring response initiation here, define notification to first response action; remediation completion is a different endpoint. Use the question’s stated definition when calculating or comparing values.”

**CC fit:** Basic metric literacy and context-sensitive reading without claims about undisclosed real exams.

**Propagation/risk:** Direct prose `:374–376`. JS module comment `:11` merely lists MTTR; no actual scenario requires a particular interval. No dedicated MTTR diagram/scenario exists in the twelve examples. Keep MTTD `:370–372` distinct as occurrence-to-detection. A heading-only change leaves the exam-authority claim.

#### D2-08 — Thai matrix wording is used where metrics are intended

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:359`: “ลักษณะของเมทริกซ์ความปลอดภัยที่ดี 4 ประการ”; `:402`: “ข้อมูลและเมทริกซ์ความปลอดภัย”; `content/isc2-cc-2026/reading/domain-2-scenarios.js:78`: “KRI คือเมทริกซ์ที่ให้สัญญาณเตือนล่วงหน้า”. These describe measures, not row/column matrices.

**Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:461`: “**Metric = Measurable Value**”; `ISC2 Update 2026/Domain 2/Domain 2.md:442`: “**Security Metric** คือค่าที่วัดได้ (**measurable value**)”; `:509`: “การแสดงข้อมูลและ Metrics ด้าน Cybersecurity”. Mistaken Thai matrix wording: **Not covered in original learning notes**, after both complete files were inspected.

**Reference/discrepancy:** [NIST SP 800-55v1 §2.4](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf#page=17) establishes the intended measurement concept. The Thai judgment is semantic/editorial, also supported by current `:357` “ตัวชี้วัด”. No exclusive official Thai transliteration rule is asserted.

**Origin/verdict:** Generated/current-only terminology. **Confirmed error**, P3/high for intended meaning.

**Thai replacement:** At `:359`: “ลักษณะของตัวชี้วัดความปลอดภัยที่ดี 4 ประการ”; at `:402`: “Security Dashboard คือการนำเสนอข้อมูลและตัวชี้วัดความปลอดภัยในรูปแบบภาพและแผนภูมิ”; scenario wording: “KRI คือตัวชี้วัดที่ให้สัญญาณเตือนล่วงหน้า”. Apply the same intended-metric term consistently.

**English replacement:** “Characteristics of a good security metric”; “A security dashboard presents security data and metrics visually”; “A KRI is a metric that provides early warning of changing risk.” English already substantially has this meaning.

**CC fit:** Removes translation confusion while preserving the technical English exam term.

**Propagation/risk:** All matching current occurrences: Markdown `:359,402,731,732,734,764`; JS scenarios `:75,76,78,102`. No D2 diagram contains the mistaken spelling. Preserve genuine matrix/table wording, including “Exam Keyword Trigger Matrix” at Markdown `:437`; global matrix replacement would introduce new errors.

### Batch C — Awareness, authentication and scoped coverage

#### D2-03 — Contextless 14-character suggestion, not a universally invalid policy

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:327`: “นิยมใช้ Passphrase ที่มีความยาว” and “≥ 14”. The authored line suggests popularity; it does not state an ISC2/NIST SHALL requirement.

**Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:427`: “Establish Authentication Policies”; `ISC2 Update 2026/Domain 2/Domain 2.md:414`: “**Establish authentication policies:** กำหนดนโยบายการยืนยันตัวตน”. Numeric threshold: **Not covered in original learning notes**, after both complete files were inspected.

**Reference/discrepancy:** [NIST SP 800-63B-4 §3.1.1.2, Password Verifiers](https://pages.nist.gov/800-63-4/sp800-63b.html#passwordver) uses 15 characters for passwords alone and permits at least eight only within MFA. That standard has a defined scope, not universal application. Fourteen can be legitimate with MFA; the notes give no standard/authentication context for their “modern” numerical advice, nor evidence of popularity.

**Origin/verdict:** Generated/current-only numeric advice. **Misleading or ambiguous wording**, P3; high confidence on absent context, medium learner impact. Do not record “14 is always insecure/wrong”.

**Thai replacement:** “กำหนดนโยบายรหัสผ่านให้เหมาะกับความเสี่ยงและวิธียืนยันตัวตน โดยเน้นความยาวและการป้องกันรหัสผ่านที่รั่วไหล หากอ้าง NIST SP 800-63B-4: รหัสผ่านที่ใช้เป็นปัจจัยเดียวต้องมีอย่างน้อย 15 ตัวอักษร; ถ้าใช้เฉพาะร่วมกับ MFA อาจกำหนดสั้นลงได้แต่ไม่น้อยกว่า 8 ตัวอักษร ตัวเลขนี้เป็นข้อกำหนดของมาตรฐานที่ระบุ ไม่ใช่เกณฑ์สากลสำหรับทุกระบบ”

**English replacement:** “Set password policy for the risk and authentication method, emphasizing length and compromised-password checks. Under NIST SP 800-63B-4, single-factor passwords require at least 15 characters; passwords used only within MFA may be shorter but require at least eight. These are the cited standard’s scoped requirements, not a universal minimum for every system.”

**CC fit:** An attributed current example supports the outline’s general password-protection concept.

**Propagation/risk:** Numeric ≥14 appears only at Markdown `:327` in the inspected reading/JS/diagram scope. No answer key or diagram uses it. Avoid replacing it with equally unqualified “all passwords must be 15”.

#### D2-07 — Bulk examples should preserve nested phishing categories

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:565`: “การส่งข้อความหลอกลวงทั่วไปแบบไม่เจาะจงเป้าหมายในวงกว้าง”; `:579`: “การเจาะจงบุคคลทั่วไป พนักงานแผนกใดแผนกหนึ่ง หรือทีมงานเฉพาะกลุ่ม”. `content/isc2-cc-2026/reading/domain-2-scenarios.js:70`: “ซึ่งต่างจาก Spear Phishing ที่หมายถึงการเจาะจงบุคคลหรือกลุ่มงานทั่วไป”. Markdown scenario `:724` omits that exclusionary JS sentence.

**Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:400`: “**Phishing** → ข้อความหลอกทั่วไปให้ Click/Open/Reveal information”; `:402`: “**Spear Phishing** → Phishing ที่เจาะจงบุคคลหรือองค์กร”; `:404`: “**Whaling** → Target บุคคลระดับสูง เช่น Executive”. `ISC2 Update 2026/Domain 2/Domain 2.md:392–394` defines generic fraudulent-message phishing, targeted spear phishing and executive whaling; `:598–599` uses general/targeted shorthand. Stronger executive-excluding JS rationale is current-only.

**Reference/discrepancy:** [Canadian Centre for Cyber Security, “Spear-phishing”](https://www.cyber.gc.ca/en/guidance/introduction-cyber-threat-environment) explicitly treats executive/high-profile whaling as spear phishing. Its adjacent Phishing section itself describes mass messages, so mass-versus-targeted introductory examples are not inherently false. The ambiguity is categorical labels and “ต่างจาก” implying exclusion.

**Origin/verdict:** Inherited contrast; generated/current-only stronger restriction. **Misleading or ambiguous wording**, P2/high. Most-specific answer Whaling remains correct.

**Thai replacement:** “Phishing คือการส่งข้อความหลอกลวงเพื่อชักจูงให้เปิดเผยข้อมูลหรือทำสิ่งที่เป็นอันตราย อาจส่งวงกว้างหรือเจาะจงเป้าหมายก็ได้ Bulk phishing เป็นตัวอย่างแบบวงกว้าง; spear phishing เป็น phishing ที่เจาะจงเป้าหมาย; whaling เป็น spear phishing ที่พุ่งเป้าผู้บริหารหรือบุคคลสำคัญ ดังนั้นสถานการณ์ CFO นี้ตอบ Whaling ซึ่งเป็นประเภทที่เฉพาะเจาะจงที่สุด”

**English replacement:** “Phishing uses deceptive messages to induce harmful actions or disclosure. Bulk phishing targets many recipients; spear phishing targets selected people or organizations; whaling is spear phishing directed at executives or other high-profile targets. Whaling is the most specific answer for this CFO scenario.”

**CC fit:** A small nested distinction prevents false either/or reasoning without adding attack categories.

**Propagation/risk:** Markdown `:308–310,561–583,647,721–724`; JS `:62,67–70`. Label broad-message examples bulk/generic; preserve Vishing/Smishing channel distinctions. No D2 diagram depicts this taxonomy. Update JS reasoning as well as cards, retaining the Whaling answer.

#### D2-09 — Current AI supplement supports enhancement, not a fabricated PDF objective

**Current quote/evidence:** `content/isc2-cc-2026/reading/domain-2.md:320`: “ผู้โจมตีอาจนำ AI และเทคโนโลยี Deepfake Voice มาช่วยสร้างเรื่องราวหลอกลวงได้อย่างสมจริงยิ่งขึ้น”. Backup/site `:228–243`, awareness `:281–287`, and KPI/KRI `:384–397` contain no explicit AI configuration/dataset recovery, model drift or AI KRI. D2 diagram/scenario payloads do not supply these examples either.

**Original quote/context:** **Not covered in original learning notes**, after both files were fully inspected. `ISC2 Update 2026/Domain 2/Domain 2.md:271–274` covers cloud/off-site backup and testing; `:725`: “เนื้อหาอื่น ๆ ที่อาจอยู่ใน Exam Outline ฉบับเต็มแต่ยังไม่มีสไลด์ส่งมา”. `D2 sum.md:625` explicitly declines to infer later unseen course material. Neither original discusses the identified AI continuity applications.

**Reference/discrepancy:** [Current ISC2 webpage, “How is AI Security Incorporated into the CC Domains?” → “Domain 2: Security Governance”](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) directly covers AI-supported identification/reporting, updated training/playbooks/triage, configuration/dataset backup, model drift as a continuity risk, and AI KRIs. This was checked live here. [Linked PDF printed p.5](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf#page=5) enumerates broad 2.1–2.4 without these examples. Their absence is a dated web-guidance coverage gap; it is not a false existing statement or proof of a missing numbered PDF objective.

**Origin/verdict:** Original coverage limit; deepfake application current-only. **Acceptable simplification** against numbered PDF; justified P3 enhancement for current web supplement, high confidence. A claim that it is a mandatory acceptance blocker would require additional scope evidence.

**Thai addition (supplemental, not replacement of false prose):** “ตัวอย่างจากคำแนะนำ AI บนเว็บไซต์ ISC2 (ตรวจสอบ 31 ต.ค. 2026): หากบริการสำคัญใช้ AI ให้แผน BC/DR ครอบคลุมการกู้คืนชุดข้อมูลและค่ากำหนดที่จำเป็น เฝ้าระวัง model drift หรือการเปลี่ยนแปลงที่ทำให้สมรรถนะลดลง และติดตาม KRI เช่น สัดส่วนบริการ AI สำคัญที่ยังไม่ผ่านการทดสอบกู้คืน บุคลากรระดับต้นควรรายงานความผิดปกติและทำตาม playbook ที่อนุมัติ”

**English addition:** “Current ISC2 web guidance example, checked 31 October 2026: for critical AI services, include required datasets and configurations in BC/DR recovery. Monitor model drift that could degrade service, and a KRI such as the proportion of critical AI services without tested recovery. Entry-level staff report anomalies and follow approved playbooks.”

**CC fit:** Applies existing continuity/KRI concepts to AI assets, without model-training implementation. Not all drift is malicious or automatically a disaster.

**Propagation/risk:** Localize additions to Markdown `:228–230,281–287,384–397`, optionally one review application. No existing answer change/diagram overhaul is required. Any new scenario must match Markdown and JS. The illustrative KRI is proposed authoring, not a verbatim ISC2 example or claim of exam frequency.

#### D2-10 — Tabletop includes scenario discussion beyond document review

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:252`: “การตรวจทานเอกสาร (Checklist / Tabletop Exercise), การทดลองซ้อมบางส่วน (Simulation / Functional Drill) ไปจนถึงการสลับระบบจริง (Full-Interruption Test)”.

**Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:305`: “และ DR Plan ต้องมีการ Test/Drill เพื่อดูว่าใช้ได้จริง”; `ISC2 Update 2026/Domain 2/Domain 2.md:294`: “**Testing and Drills** คือการทดสอบแผน DR อย่างสม่ำเสมอเพื่อให้มั่นใจว่าแผนมีประสิทธิผล”. Checklist/tabletop grouping: **Not covered in original learning notes** after both were inspected.

**Reference/discrepancy:** [NIST SP 800-84 §4, printed p.4-1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-84.pdf#page=21) describes facilitator-led scenario discussion of roles/decisions without equipment deployment. A tabletop can validate documents; document review alone omits its defining activity. This does not establish a mandatory five-level test taxonomy.

**Origin/verdict:** Generated/current-only compression. **Misleading or ambiguous wording**, P3/high.

**Thai replacement:** “กิจกรรมอาจเริ่มจาก checklist/document review เพื่อตรวจความครบถ้วนของแผน; tabletop exercise ให้ผู้เกี่ยวข้องอภิปรายบทบาทและการตัดสินใจตามสถานการณ์ที่ผู้นำการฝึกกำหนด โดยไม่ต้องสลับระบบจริง; ส่วน functional exercise หรือการทดสอบกู้คืนจริงตรวจความสามารถปฏิบัติงานตามขอบเขตและความเสี่ยงที่อนุมัติ”

**English replacement:** “A checklist/document review checks plan completeness. A tabletop exercise uses a facilitated scenario discussion to examine roles and decisions without switching live systems. Functional exercises and recovery tests validate operational capability within an approved scope.”

**CC fit:** Concise activity distinctions support DR validation without requiring a disruptive production test or official ladder.

**Propagation/risk:** Direct issue only Markdown `:252`; rationale `:247–251` remains useful. No D2 diagram/scenario uses the conflated label. Avoid unsourced instructions that all organizations must run full interruption or use a fixed test sequence.

#### D2-12 — Verifier storage and phishing-resistance wording need scope

**Current quote:** `content/isc2-cc-2026/reading/domain-2.md:328`: “ป้องกันรหัสผ่านที่จัดเก็บด้วยการเข้ารหัสและการแฮชร่วมกับ Salt (Hashing & Salting)”; `:333`: “ทำให้ไม่สามารถถูกดักขโมยรหัสยืนยันตัวตนได้”. `:332` correctly warns ordinary MFA can be phished; `:333` correctly associates WebAuthn/FIDO2/passkeys with public-key/domain binding.

**Original quote:** `ISC2 Update 2026/Domain 2/D2 sum.md:428`: “Protect Stored Credentials”; `:431`: “Encourage Phishing-resistant Authentication”. `ISC2 Update 2026/Domain 2/Domain 2.md:415`: “**Protect stored credentials:** ปกป้องข้อมูลรับรองตัวตนที่จัดเก็บ”; `:422`: “MFA ไม่ได้แปลว่าต้านทาน Phishing ได้ทุกชนิดโดยอัตโนมัติ”. Specific storage algorithms and anti-interception guarantee: **Not covered in original learning notes** after both were read fully.

**Reference/discrepancy:** [NIST SP 800-63B-4 §§3.1.1.2 and 3.2.5](https://pages.nist.gov/800-63-4/sp800-63b.html#phish) requires suitable salted hashing at password verifiers and scopes phishing resistance to impostor-verifier disclosure. Current text does not explicitly advocate reversible encryption alone; layered encrypted-hash protection can be valid. Ambiguity concerns encryption versus hashing and attack scope. Captured protocol data is not automatically a usable credential elsewhere.

**Origin/verdict:** Generated/current-only elaboration. **Misleading or ambiguous wording**, P3/high. No encryption-only implementation or universal FIDO failure was established.

**Thai replacement:** “ระบบตรวจสอบรหัสผ่านควรเก็บค่าแฮชจากวิธี password hashing ที่เหมาะสมร่วมกับ salt เฉพาะและค่า cost ที่เหมาะสม ไม่เก็บรหัสผ่านเป็นข้อความธรรมดา; การเข้ารหัสอาจเป็นมาตรการเสริมแยกต่างหาก FIDO2/WebAuthn ผูกผลการยืนยันกับเว็บไซต์จริง จึงต้านทานการหลอกส่งข้อมูลยืนยันที่นำไปใช้ได้ให้เว็บไซต์ปลอม แต่ยังต้องปกป้องอุปกรณ์ เซสชัน และกระบวนการกู้คืนบัญชี”

**English replacement:** “A password verifier should use suitable password hashing with a unique salt and appropriate cost factor rather than plaintext. Encryption may provide an additional layer. FIDO2/WebAuthn binds authentication to the legitimate site and resists disclosure of usable authentication material to an impostor verifier; devices, sessions and account recovery still require protection.”

**CC fit:** Clear hash/encryption distinction and bounded authentication benefit without implementation parameters/protocol internals.

**Propagation/risk:** Markdown `:328,331–333`; no D2 diagram or scenario answer repeats these elaborations. Preserve useful MFA/phishing-resistant-MFA distinction. Avoid “all MFA is phishing-resistant”, “encryption never helps”, or “passkeys prevent every account compromise”.

### Suggested small review batches

1. **MTD/RTO:** D2-02 correction with D2-01 clarification; reconcile lesson, summary, tip, timeline and scenario while preserving RTO answer/times.
2. **Metrics:** D2-04 taxonomy plus D2-08 terminology; reconcile table and both diagram forms, then both scenario representations.
3. **Labels/examples:** D2-06, D2-10, D2-11; retain BC/DR scope, relative site ordering and testing rationale.
4. **Authentication/provenance:** D2-03, D2-05, D2-12; distinguish standards, chosen measurement definitions and unsupported exam conventions.
5. **Phishing/current guidance:** D2-07 nesting; D2-09 compact dated web-guidance applications. Do not invent numbered PDF requirements.

This is evidence for review, not implementation approval. Proposed wording is reviewable without modifying originals, tests, historical acceptance records, existing answer keys or unrelated UI/diagram architecture.



## Phase 1A independent verification — Domains 3 and 4

Date: 2026-10-31. Scope: the 23 unique D34 IDs in the consolidated register. Verification only. No repository, original-note, production, test, old-artifact or git writes were made by this reviewer. This fragment is the only output. No implementation or acceptance is implied.

### Corpus and method

Before verifying findings, I read the four required reports in `docs/plans/isc2-cc-2026/`: `reading-notes-independent-findings-register.md`, `reading-notes-independent-audit-domains-1-4.md`, `reading-notes-independent-remediation-roadmap.md`, and `reading-notes-independent-coverage-matrix.md`. I then read all four originals in full: D3 sum.md (442 lines), Domain 3.md (356), D4 sum.md (883), and Domain 4.md (330). The originals have explicit scope caveats: O3:4/356 do not claim complete outline coverage; O4:3/330 and S4:15/883 identify much of networking as supplemental. Original notes are provenance evidence, not authority over standards.

Current Markdown, metadata, duplicated scenario exports and relevant desktop/mobile diagram payloads were checked directly. Authoritative pages were retrieved afresh; references below state the exact section/table, rather than relying on an earlier audit's citation. This is a source verification, not a fresh rendering or UI audit.

All local references below resolve beneath **D:/_Coding/SEC-CERT-TEST/**. File aliases make repeated citations readable:

- **D3** = `content/isc2-cc-2026/reading/domain-3.md`; **D4** = `content/isc2-cc-2026/reading/domain-4.md`.
- **M3/M4** = `content/isc2-cc-2026/reading/domain-3.js` / `domain-4.js`.
- **C3/C4** = `content/isc2-cc-2026/reading/domain-3-scenarios.js` / `domain-4-scenarios.js`.
- **G** = `js/core/diagram-generator.js`.
- **O3/O4** = `ISC2 Update 2026/Domain 3/Domain 3.md` / `ISC2 Update 2026/Domain 4/Domain 4.md`.
- **S3/S4** = `ISC2 Update 2026/Domain 3/D3 sum.md` / `ISC2 Update 2026/Domain 4/D4 sum.md`.

**Scope baseline:** the [official September 1, 2026 ISC2 outline PDF](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf) was successfully retrieved. Printed p.5 covers IAM lifecycle/frameworks/tools and logical access models; printed p.6 covers networking, architecture, cloud characteristics/service/deployment/shared security models. It does not prescribe each local mnemonic, vendor detail or a six-step workflow. The live HTML's old introductory topic list conflicts with its detailed current domain table; the dated PDF takes precedence. This review adds no AI coverage finding.

### 23-ID disposition table

“Confirmed error” applies to the precise overstatement or taxonomy error described, not to every sentence in its subsection. P2/P3 reflect educational consequence, not vendor engineering criticality.

| ID | Independently verified verdict | Origin | Severity / confidence |
|---|---|---|---|
| D34-01 | Confirmed error | Textbook-introduced version detail | P2 / High |
| D34-02 | Misleading or ambiguous wording | Inherited example taxonomy; textbook asserts completeness | P2 / High |
| D34-03 | Confirmed error | Textbook-introduced | P2 / High |
| D34-04 | Confirmed error | Textbook-introduced | P2 / High |
| D34-05 | Misleading or ambiguous wording | Textbook-introduced ambiguity | P2 / High |
| D34-06 | Misleading or ambiguous wording | Textbook-introduced | P2 / High |
| D34-07 | Confirmed error | Textbook-introduced | P2 / High |
| D34-08 | Confirmed error | Textbook-introduced | P3 / High |
| D34-09 | Misleading or ambiguous wording | Textbook-introduced | P2 / High |
| D34-10 | Confirmed error | Textbook-introduced | P2 / High |
| D34-11 | Confirmed error | Textbook-introduced intensification | P2 / High |
| D34-12 | Confirmed error | Textbook-introduced | P2 / High |
| D34-13 | Confirmed error | Textbook-introduced | P2 / High |
| D34-14 | Misleading or ambiguous wording | Inherited PaaS abstraction; added service example | P3 / High evidence, Medium inference |
| D34-15 | Misleading or ambiguous wording | Textbook-introduced | P3 / High |
| D34-16 | Confirmed error | Textbook-introduced | P3 / High |
| D34-Q1 | Misleading or ambiguous wording | Inherited role-first idea; introduced mandatory order | P3 / High |
| D34-Q2 | Misleading or ambiguous wording | Textbook-introduced terminology/retention rationale | P3 / High |
| D34-Q3 | Acceptable simplification | Textbook-introduced example, no standalone claim | P3 advisory / High |
| D34-Q9 | Acceptable simplification | Textbook-introduced | P3 advisory / High |
| D34-Q10 | Acceptable simplification | Inherited common-port examples | P3 advisory / High |
| D34-Q12 | Misleading or ambiguous wording | Inherited five-layer example; introduced labels | P3 / High |
| D34-Q14 | Misleading or ambiguous wording | Textbook-introduced intensification | P3 / High |

Totals: 10 Confirmed error, 10 Misleading or ambiguous wording, 3 Acceptable simplification, 0 False positive as whole-ID dispositions, 0 Requires additional evidence. The rejected stronger interpretations are explicitly identified below. This is a reclassification of verification outcomes, not a replacement count for the earlier defect register. No promoted Q duplicate is counted.

### D34-01 — CSF version/category

- **Current quotation:** D3:129: “Govern ใน CSF 2.0) โดยมีหัวข้อการควบคุมการเข้าถึง (PR.AC)”.
- **Original quotation:** O3:115–118: “NIST Cybersecurity Framework (CSF)” / “Broader Cybersecurity Risk Management”; S3:126–137 is similarly generic. PR.AC and CSF 2.0 are **Not covered in original learning notes**.
- **Authority:** [NIST CSF FAQ](https://www.nist.gov/cyberframework/faqs), “Transitioning from CSF v1.1 to CSF v2.0”, Protect bullet: PR.AC moved to PR.AA. The present sentence mixes versions.
- **Proposed TH:** “NIST CSF 2.0 เป็นกรอบบริหารความเสี่ยงไซเบอร์ที่มี 6 ฟังก์ชัน รวม Govern; หมวด Identity Management, Authentication, and Access Control (PR.AA) อยู่ภายใต้ Protect ส่วน PR.AC เป็นรหัสใน CSF 1.1”
- **Proposed EN:** “NIST CSF 2.0 has six functions, including Govern. Its Protect function includes Identity Management, Authentication, and Access Control (PR.AA); PR.AC is the CSF 1.1 category.”
- **Scope / consistency:** Framework distinction fits 3.1. Exact identifiers are useful only because already taught; no need to expand CSF subcategories. G's `nistSp80063Framework` explains the identity family, not a repeated PR.AC claim. D3:124–127 and review:403–410 should remain consistent about proofing/authentication/federation.
- **Verdict / provenance:** Confirmed error; textbook-introduced version detail. P2, High. Correct one version reference without rewriting the valid broader-CSF comparison.

### D34-02 — ABAC operation versus device attributes

- **Current quotation:** D3:257 “หมวดหมู่คุณลักษณะหลัก 4 ด้าน”; D3:258–261 enumerate Subject, Object, Environmental, Device. D3:283 instead says “Subject, Object, Action, Environment”. G:2206 says “Subject, Object & Environment”; G:2255 includes “การกระทำ”.
- **Original quotation:** O3:266 “Attributes / Conditions ของ User, Resource, Environment หรือ Device”; O3:270–275 lists valid department/resource/time/device examples and a Finance + company device + hours policy; S3:372–388 likewise. The original did not claim those four were a canonical exhaustive taxonomy.
- **Authority:** [NIST ABAC project](https://csrc.nist.gov/projects/attribute-based-access-control), Overview paragraphs 4–8: authorization considers subject/object attributes, actions, environment and allowable operations. **Device posture is a valid attribute input**; its presence is not the defect. The precise problem is the completeness claim and inconsistent omission of requested action.
- **Proposed TH:** “ABAC ประเมินคุณลักษณะของผู้ร้องขอและทรัพยากร การกระทำที่ร้องขอ และบริบทตามนโยบาย อาจใช้สถานะอุปกรณ์ร่วมด้วย เช่น อนุญาตให้ Finance อ่านไฟล์จากอุปกรณ์บริษัทในเวลาทำการ แต่ไม่อนุญาตให้ลบไฟล์”
- **Proposed EN:** “ABAC evaluates subject and resource attributes, the requested action, and environmental context against policy. Device posture may also be an input. For example, Finance may read a file from a compliant corporate device during working hours while deletion remains denied.”
- **Repeated locations / risk:** D3:262 policy is valid and can remain; make its action explicit. Reconcile D3:283, D3:563, C3:87–90, G:2206/2255. Do not remove device controls or imply every implementation needs exactly four physical attribute stores.
- **Verdict / scope / origin:** Misleading or ambiguous wording, P2, High. Access-model comprehension fits 3.2; request/action distinction is sufficient CC depth. Inherited valid examples, textbook-introduced completeness claim.

### D34-03 — ARP in the four-layer model

- **Current quotation:** D4:90: “Internet Layer (L2) … IPv4, IPv6, ICMP, IPsec, ARP”; D4:91 Link row omits ARP.
- **Original:** **Not covered in original learning notes**. O4:28–39 and S4:64–124 give OSI basics without ARP or a detailed TCP/IP mapping.
- **Authority:** [RFC 1122 §2.3.2](https://www.rfc-editor.org/rfc/rfc1122.html#section-2.3.2), Address Resolution Protocol—ARP, is within §2 Link Layer. This supports a correction within the exact four-layer model taught; avoid pretending all pedagogical OSI treatments of ARP agree on one numeric layer.
- **Proposed TH:** “ในแบบจำลอง TCP/IP 4 ชั้นนี้ ARP อยู่ในชั้น Link / Network Access ทำหน้าที่หา Link-layer address ของปลายทางหรือ next hop บนลิงก์ IPv4 เดียวกัน; Internet Layer ใช้ IP และ ICMP”
- **Proposed EN:** “In this four-layer TCP/IP model, ARP belongs to the Link/Network Access layer and resolves the IPv4 next hop to a link-layer address on the local link. IP and ICMP belong to the Internet layer.”
- **Repeated locations / risk:** D4:90–91 are the direct error. G:2294/2333–2343 and mobile G:2379 correctly omit ARP from IP examples; synchronize the table rather than introduce a new diagram inconsistency. No matching scenario answer was found.
- **Verdict / scope / origin:** Confirmed error; textbook-introduced. P2, High. Basic TCP/IP mapping falls directly within 4.1; no ARP packet-format expansion needed.

### D34-04 — SLAAC identifier

- **Current quotation:** D4:138: “นำ Prefix ที่ได้มารวมกับ MAC Address ของตนเอง”.
- **Original:** **Not covered in original learning notes**. The originals contain no SLAAC, EUI-64 or interface-identifier description.
- **Authority:** [RFC 8064 §3](https://www.rfc-editor.org/rfc/rfc8064.html#section-3), Generation of IPv6 Interface Identifiers with SLAAC: recommends stable IID generation without embedding a stable link-layer address by default. MAC-derived EUI-64 is a real historical method, not universally required.
- **Proposed TH:** “SLAAC สร้างที่อยู่ IPv6 โดยใช้ prefix ที่เราเตอร์ประกาศร่วมกับ Interface Identifier (IID) ของอินเทอร์เฟซ วิธีสร้าง IID ไม่จำเป็นต้องใช้ MAC Address; EUI-64 ที่อาศัย MAC เป็นเพียงวิธีหนึ่งในอดีต”
- **Proposed EN:** “SLAAC forms an IPv6 address from a router-advertised prefix and an interface identifier (IID). The IID need not contain the MAC address; MAC-derived EUI-64 is one historical method.”
- **Repeated locations / risk:** D4:563 summarizes automatic configuration but does not repeat MAC derivation. No SLAAC-specific diagram/scenario claim. Preserve this summary; do not add algorithm details, guaranteed privacy claims, or suggest every address is automatically configured.
- **Verdict / scope / origin:** Confirmed error; textbook-introduced. P2, High. Prefix + IID is sufficient IPv6 scope for 4.1.

### D34-05 — retained customer duty versus exclusive service operation

- **Current quotation:** D4:458 “สิ่งที่ลูกค้าเป็นผู้รับผิดชอบ 100% เสมอ”; D4:460–462 “ไม่สามารถส่งมอบความรับผิดชอบนี้ให้แก่ผู้ให้บริการคลาวด์ได้” applies to all “Data & Information” and “Identity & Access Management”.
- **Original quotation:** O4:223–227 explicitly assigns joint PaaS “IAM, Data Protection” and SaaS “Data Security, Authentication, Access Control”, then says “ไม่ได้หมายความว่าแบ่งหน้าที่เท่ากันทุกบริการ ต้องตรวจเอกสารและข้อตกลงของ Provider”. S4:541 limits customer duties to “สิ่งที่ตนควบคุม”; S4:555–557 retains duties while qualifying provider/service agreements. The original gives a clearer operational boundary. The textbook does not explicitly deny all CSP operational duties, but its unbounded 100% phrasing can be read that way.
- **Authority:** [Azure shared responsibility](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility), “Division of responsibility” and “Responsibilities you always retain”: customer data classification, accounts and access policies remain customer duties; the scope is components the customer controls. [AWS IAM/STS Security](https://docs.aws.amazon.com/IAM/latest/UserGuide/security.html), “Security of/in the cloud”: IAM itself uses shared responsibility, with AWS protecting the service infrastructure. These support retained accountability **and** provider operational duties. The current customer-only diagram cells can remain if labels explicitly mean customer classification, identities, policy decisions and tenant-controlled settings; a short footnote can distinguish the provider-operated service. They do not establish liability or an unquoted SLA.
- **Proposed TH:** “ลูกค้ายังคงรับผิดชอบการจัดชั้นข้อมูล การกำหนดผู้มีสิทธิ์เข้าถึง และการตั้งค่าบัญชี/สิทธิ์ที่ตนควบคุมในทุกโมเดล แต่ผู้ให้บริการยังมีหน้าที่รักษาความปลอดภัยของบริการจัดเก็บข้อมูลและระบบ IAM ที่ตนบริหาร ขอบเขตจริงขึ้นอยู่กับบริการและข้อตกลง”
- **Proposed EN:** “Across cloud service models, the customer retains responsibility for data classification, deciding who should have access, and configuring the accounts and permissions it controls. The provider still secures the managed storage and identity service components it operates. The precise division depends on the service and agreement.”
- **Repeated locations / risk:** D4:451, 458–462, 697, 724, 808–810; C4:79–82; G cloud matrix broad data/access rows (e.g. G:2673/2676, 2725/2728) and G:2778. Rename diagram rows “Customer data/access decisions and settings” and add a compact provider-service boundary note. A binary responsibility matrix is valid when its row scope is explicit.
- **Scenario correction:** Keep **Customer** for the public-sharing misconfiguration (D4:807; C4:79). Ask “ใครต้องแก้ไขสิทธิ์แชร์ที่องค์กรตั้งค่าผิด?” / “Who must correct the sharing permission misconfigured by the organization?” Reasoning should identify this customer-controlled setting, rather than deny all CSP responsibility.
- **Verdict / scope / origin:** Misleading or ambiguous wording, because the broad categories and “cannot transfer” can imply exclusive operational responsibility; **not** a finding against the standard “customers always retain data/access duties” simplification. P2, High. Direct 4.3 shared-model scope; textbook-introduced. Do not invent CSP uptime, backup, breach-liability or SLA obligations.

### D34-06 — AWS security groups/NACLs generalized to VNet

- **Current quotation:** D4:502 “VPC / VNet”; D4:507 “Stateful (หากอนุญาตขาเข้า ขาออกจะได้รับอนุญาตอัตโนมัติ) กำหนดได้เฉพาะกฎ Allow”; D4:508 describes subnet stateless allow/deny NACLs.
- **Original:** **Not covered in original learning notes**. S4:631–635 has only a generic public/private-subnet example; it does not teach SG/NACL mechanics.
- **Authority:** [AWS VPC comparison](https://docs.aws.amazon.com/vpc/latest/userguide/infrastructure-security.html#VPC_Security_Comparison), “Compare security groups and network ACLs” table, supports the stated AWS contrast. [AWS SG basics](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html#VPCSecurityGroups), statefulness bullet, permits **responses** to allowed traffic. [Azure NSG overview](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview), “Security rules”, permits allow/deny and describes stateful flows; Azure NSGs can protect subnet/NIC resources. The AWS content is not intrinsically wrong.
- **Proposed TH:** “ตัวอย่างต่อไปนี้เป็น AWS VPC: Security Group เป็นการกรองแบบ stateful ที่ผูกกับทรัพยากร/อินเทอร์เฟซและใช้กฎ Allow; ทราฟฟิกตอบกลับของการเชื่อมต่อที่อนุญาตผ่านได้อัตโนมัติ ส่วน NACL ใช้ระดับ subnet เป็น stateless และมี Allow/Deny ผู้ให้บริการอื่นมีรายละเอียดต่างกัน เช่น Azure NSG เป็น stateful และมีทั้ง Allow/Deny”
- **Proposed EN:** “In this AWS VPC example, security groups provide stateful filtering for associated resources/interfaces and use allow rules. Response traffic for an allowed flow is automatically permitted. Subnet NACLs are stateless and support allow and deny rules. Other providers differ; Azure NSGs are stateful and support both allow and deny.”
- **Repeated locations / risk:** D4:681–689, 729 (its unrestricted outbound example especially needs “return traffic”), surrounding VPC/VNet section; no matching SG/NACL scenario in C4. Do not teach a cloud SG as a guest-OS host firewall or transplant AWS defaults into Azure.
- **Verdict / scope / origin:** Misleading or ambiguous wording; textbook-introduced. P2, High. Label the example within 4.3; deep provider configuration remains supplemental.

### D34-07 — NAT Gateway only

- **Current quotation:** D4:505: “หากต้องการออกไปดาวน์โหลดแพตช์ภายนอก ต้องผ่าน NAT Gateway เท่านั้น”.
- **Original:** **Not covered in original learning notes**. S4:633 mentions public/private subnets but no exclusive egress mechanism.
- **Authority:** [AWS NAT gateway versus NAT instance](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html), comparison table, establishes another IPv4 NAT implementation. [AWS egress-only IGW](https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html), “Egress-only internet gateway basics”, supports outbound IPv6 with return traffic. These are alternatives with different address-family/operational properties, not interchangeable services.
- **Proposed TH:** “Private subnet ไม่มีเส้นทางตรงผ่าน Internet Gateway การออกไปยังอินเทอร์เน็ตต้องใช้เส้นทางและกลไกที่เหมาะสม เช่น NAT Gateway สำหรับ IPv4; อาจใช้ NAT instance หรือสำหรับ IPv6 ใช้ egress-only Internet Gateway ตามสถาปัตยกรรมและนโยบาย”
- **Proposed EN:** “A private subnet has no direct route through an internet gateway. Outbound internet access needs an appropriate route and mechanism, such as an IPv4 NAT gateway; alternatives include a NAT instance or, for IPv6, an egress-only internet gateway, subject to the architecture and policy.”
- **Repeated locations / risk:** Direct “only” occurs at D4:505; no repeated diagram or scenario claim found. Keep NAT Gateway as the main example. Do not imply private endpoints provide arbitrary external patch-repository access or confuse NAT with encryption.
- **Verdict / scope / origin:** Confirmed error; textbook-introduced. P2, High. Conceptual ingress/egress distinction suffices for cloud networking; alternatives need only one short qualification.

### D34-08 — official 2026 titles

- **Current quotation:** M3:5 claims “Official ISC2 CC 2026 Outline”, while M3:13 says “Domain 3: Access Controls”; M4:5/13 similarly says “Domain 4: Network Security”. D3:1 and D4:1 repeat the short names in 2026 leads.
- **Original quotation:** O3:1 and S3:3 use “Identity and Access Management (IAM) Concepts”; O4:1 and S4:1 use “Network & Cloud Security Concepts”. The originals already include the expanded subject areas; the current short labels do not reproduce that scope.
- **Authority:** [Official ISC2 September 2026 PDF](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), printed pp.3, 5–6, confirms the expanded titles and existing 20% / 21.3% weights.
- **Proposed TH:** “Domain 3: Identity and Access Management (IAM) Concepts — แนวคิดการบริหารตัวตนและการเข้าถึง”; “Domain 4: Networking and Cloud Security Concepts — แนวคิดความมั่นคงปลอดภัยเครือข่ายและคลาวด์”.
- **Proposed EN:** “Domain 3: Identity and Access Management (IAM) Concepts”; “Domain 4: Networking and Cloud Security Concepts”. Short navigation labels may remain “IAM” and “Network & Cloud”, explicitly treated as abbreviations.
- **Repeated locations / risk:** M3/M4:2, 13–14, D3/D4:1; inspect rendered heading derived from metadata. Weights and objective IDs need no alteration. Do not treat the stale HTML introduction as evidence that the new titles are wrong.
- **Verdict / scope / origin:** Confirmed error in officially attributed metadata, P3, High. Label accuracy supports navigation across 3.1–4.3. Textbook-introduced relative to originals; precise editing history is unproven.

### D34-09 — mask-dependent IPv4 broadcast

- **Current quotation:** D4:22: “Broadcast (FF:FF:FF:FF:FF:FF หรือ x.x.x.255)”. No prefix/mask qualifies the IP pattern.
- **Original:** **Not covered in original learning notes**. O4:111 and S4:285–309 discuss separate VLAN broadcast domains without an IPv4 broadcast-address formula.
- **Authority:** [RFC 919 §7](https://www.rfc-editor.org/rfc/rfc919.html#section-7), Broadcast IP Addressing, defines the all-ones host-number principle and distinguishes limited broadcast. Subnet-directed broadcast is determined by host bits, not the last octet alone.
- **Proposed TH:** “Ethernet broadcast ใช้ FF:FF:FF:FF:FF:FF ส่วน IPv4 subnet-directed broadcast มีบิตส่วน host เป็น 1 ทั้งหมด เช่น 192.168.1.255 สำหรับ 192.168.1.0/24; ต้องดู subnet mask ไม่ใช่ดู .255 เพียงอย่างเดียว”
- **Proposed EN:** “Ethernet broadcast uses FF:FF:FF:FF:FF:FF. An IPv4 subnet-directed broadcast sets all host bits to 1, for example 192.168.1.255 for 192.168.1.0/24; the subnet mask determines the address.”
- **Repeated locations / consistency risk:** No .255 rule is repeated in the invoked diagrams or scenarios. D4:117 CIDR explanation should use the same network/host distinction. Sanity examples: 192.168.1.0/25 broadcasts to 192.168.1.127; 192.168.0.255 is a host in 192.168.0.0/23, whose broadcast is 192.168.1.255. A /24 example remains valid.
- **Verdict / scope / origin:** Misleading or ambiguous wording, P2, High; textbook-introduced. Broadcast/CIDR fundamentals are within 4.1. Add a qualifier, not a full subnetting course.

### D34-10 — APIPA grouping and range

- **Current quotation:** D4:109 introduces “ตามมาตรฐาน RFC 1918 (Private IP Addresses)”; D4:114 continues that list with “APIPA … 169.254.0.0 – 169.254.255.255 (ช่วง 169.254.0.0/16) ระบบปฏิบัติการจะจ่ายให้ตัวเองอัตโนมัติ”.
- **Original:** **Not covered in original learning notes**. Neither D4 original explains APIPA, RFC1918 blocks or host-selection exclusions.
- **Authority:** [RFC 3927 §2.1](https://www.rfc-editor.org/rfc/rfc3927.html#section-2.1), Link-Local Address Selection: the allocated block is 169.254/16, while dynamic selection uses 169.254.1.0–169.254.254.255 inclusive; the first/last 256 addresses are reserved. §1.6 distinguishes it from RFC1918 private prefixes, and §2.7 prohibits forwarding outside the link.
- **Separate subclaim decisions:** (1) Including APIPA under “RFC1918” is a confirmed grouping error. (2) **169.254.0.0/16 is the correct allocated link-local block**, not an incorrect range. (3) Saying the OS assigns that entire range without distinguishing candidate addresses is imprecise; the excluded /24s matter only when describing selection. “DHCP unavailable → APIPA” is a useful common Windows troubleshooting simplification, not a full universal definition of link-local operation.
- **Proposed TH:** “IPv4 Link-local / APIPA แยกจาก RFC1918: สงวนบล็อก 169.254.0.0/16 สำหรับสื่อสารบนลิงก์เดียวกัน การเลือกที่อยู่อัตโนมัติตาม RFC3927 ใช้ 169.254.1.0–169.254.254.255 โดยไม่ใช้ /24 แรกและสุดท้าย และเราเตอร์ไม่ส่งต่อทราฟฟิกนี้ออกนอกลิงก์”
- **Proposed EN:** “IPv4 link-local/APIPA is separate from RFC1918 addressing. The allocated block is 169.254.0.0/16; RFC3927 dynamic selection uses 169.254.1.0–169.254.254.255, excluding the first and last /24. Routers do not forward this traffic beyond the local link.”
- **Repeated locations / risk:** Direct claim occurs at D4:109–114; no matching diagram/scenario repetition found. Preserve the three correct RFC1918 prefixes; do not replace the valid /16 allocation with a supposed smaller CIDR block.
- **Verdict / scope / origin:** Confirmed error in grouping, qualified range precision; textbook-introduced. P2, High. Basic private versus link-local classification fits 4.1; selection exclusions are a short footnote, not a memorization priority.

### D34-11 — MAC security guarantee

- **Current quotation:** D3:231 “ปลอดภัยสูงสุด”; D3:238 “ป้องกันข้อมูลรั่วไหลได้อย่างเด็ดขาด”; G:2180 “Highest Security · Need-to-Know”; G:2233 “ปลอดภัยสูงสุด”.
- **Original quotation:** O3:223–229 describes central policy/labels, then “Highly Secure / ลด Unauthorized Access”; S3:297–319 calls MAC stricter than DAC and “Highly Secure”. The absolute superiority/leakage guarantee is added. O3:227 explicitly requires appropriate clearance **and** policy conditions.
- **Authority:** [NIST MAC glossary](https://csrc.nist.gov/glossary/term/mandatory_access_control), definitions sourced to SP800-192/800-44: central/non-discretionary enforcement and sensitivity/authorization define MAC. It does not establish a universal security ranking or zero-leakage outcome. Policy enforcement remains dependent on design and implementation.
- **Proposed TH:** “MAC บังคับใช้นโยบายส่วนกลาง เช่น ป้ายกำกับข้อมูลและการอนุญาตของผู้ใช้ ผู้ใช้เปลี่ยนสิทธิ์ตามดุลยพินิจไม่ได้ ช่วยจำกัดการเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต แต่ไม่รับประกันว่าจะป้องกันข้อมูลรั่วไหลได้ทุกกรณี; ต้องผ่าน Need-to-Know และนโยบายที่เกี่ยวข้องด้วย”
- **Proposed EN:** “MAC enforces centrally defined policy, such as data labels and user authorizations, without allowing users to change rights at their discretion. It can strongly restrict unauthorized disclosure, but does not guarantee that leakage is impossible. Access must also satisfy need-to-know and applicable policy.”
- **Repeated locations / risk:** D3:231, 238, 470, scenario D3:540–543 and C3:71–74, G:2180/2233. Retain D3:237's already correct clearance-alone caveat. Replace diagram trait with “Central policy · Labels · Need-to-Know”. The scenario key **MAC** remains correct; add policy/need-to-know to avoid turning a label comparison into sufficient authorization.
- **Verdict / scope / origin:** Confirmed error for absolute guarantee; textbook-introduced intensification from valid original “highly secure”. P2, High for guarantee, Medium for harm from scenario omission. Fits 3.2 access-model comparison without Bell–LaPadula expansion.

### D34-12 — hidden SSID mechanism

- **Current quotation:** D4:268: “ชื่อเครือข่ายยังคงถูกส่งออกไปใน Probe Requests และ Beacon Frames เมื่อมีเครื่องเชื่อมต่อ”.
- **Original:** **Not covered in original learning notes**. The original Domain4 notes contain no hidden-SSID or beacon mechanism claim.
- **Authority:** [Cisco Meraki Air Marshal](https://documentation.meraki.com/Wireless/Operate_and_Maintain/User_Guides/Monitoring_and_Reporting/Air_Marshal), note under Rogue SSIDs: a hidden SSID's name is not included in beacons/probe responses for that BSSID. This directly refutes the beacon-name explanation. [Cisco Aironet FAQ](https://www.cisco.com/c/en/us/support/docs/wireless-mobility/wlan-security/68583-FAQ-Wireless-Security.html), “If I disable SSID broadcast”, also distinguishes omitted beacon names from discovery frames that can reveal them; only that protocol explanation is used, not its legacy WEP recommendations.
- **Proposed TH:** “การซ่อน SSID เพียงละชื่อจากการประกาศเครือข่าย ไม่ได้หยุด Beacon ทั้งหมด และไม่ใช่การเข้ารหัสหรือการพิสูจน์ตัวตน ผู้สังเกตยังอาจทราบชื่อจากการสื่อสารระหว่างการค้นหาและเชื่อมต่อของลูกข่าย จึงควรใช้ WPA2/WPA3 และการตั้งค่าที่เหมาะสม”
- **Proposed EN:** “Hiding an SSID omits the name from network advertisements; it does not stop all beacon transmission or provide authentication or encryption. Client discovery and connection exchanges can still disclose the network name. Use appropriate WPA2/WPA3 security and configuration.”
- **Repeated locations / risk:** D4:709's “hiding is not meaningful Wi-Fi security” exam reminder is directionally valid. No beacon-specific diagram/scenario repetition. Keep the security conclusion while correcting the explanation; avoid “does nothing” as an absolute claim about every operational effect.
- **Verdict / scope / origin:** Confirmed error in beacon-name explanation; textbook-introduced. P2, High. The relevant 4.1 wireless lesson is why obscurity does not substitute for access protection; frame-level detail need not grow.

### D34-13 — FaaS scale-to-zero

- **Current quotation:** D4:442: “ระบบจะรันโค้ดเมื่อมีเหตุการณ์เข้ามากระตุ้น … และสเกลขนาดเป็นศูนย์เมื่อไม่มีการใช้งาน”; D4:443 includes Azure Functions.
- **Original quotation:** O4:211–215: “รัน Code ตาม Events โดยไม่ต้องจัดการ Servers โดยตรง” and “ค่าใช้จ่ายมักผูกกับการใช้งานจริงตามรูปแบบ Pricing ของบริการ”; S4:514–520 likewise. Scale-to-zero is **Not covered in original learning notes**.
- **Authority:** [Azure Functions event-driven scaling](https://learn.microsoft.com/en-us/azure/azure-functions/event-driven-scaling), “Cold start” plan table: Premium has a minimum of one running instance; Flex has optional always-ready instances; Dedicated uses continuous operation rather than event-driven dynamic scaling. The page says idle functions **might** scale to zero.
- **Proposed TH:** “FaaS รันฟังก์ชันตามเหตุการณ์และให้ผู้ให้บริการบริหารโครงสร้างพื้นฐาน หลายแผนรองรับการ scale-to-zero เมื่อว่าง แต่พฤติกรรมนี้ขึ้นอยู่กับบริการ แผน และการตั้งค่า เช่น การมี always-ready instance”
- **Proposed EN:** “FaaS runs functions in response to events while the provider manages the execution infrastructure. Many plans support scaling to zero when idle, but this depends on the service, plan, and configuration, such as always-ready instances.”
- **Repeated locations / risk:** D4:647 and G:2734/2742 describe event-driven functions without repeating zero-scale. Keep these; no need to introduce a pricing comparison or promise zero idle cost. Azure plan names are evidence for the qualifier, not essential CC memorization.
- **Verdict / scope / origin:** Confirmed error in universal statement; textbook-introduced. P2, High. Fits 4.3 service-model basics.

### D34-14 — PaaS abstraction and Beanstalk duties

- **Current quotation:** D4:432 “ระบบปฏิบัติการ … Runtime Environment ให้ทั้งหมด”; D4:433 “ลูกค้ามีหน้าที่เพียง … Code และ Data”; D4:434 adds AWS Elastic Beanstalk.
- **Original quotation:** O4:199–201 says provider manages OS/runtime/platform updates; its examples O4:197 are App Engine/App Service. S4:494–498 uses the same conventional PaaS abstraction. The Beanstalk example and “เพียง” intensification are additions.
- **Authority:** [AWS Beanstalk managed updates](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html), opening paragraphs: automatic updates are configurable; cross-platform-branch major upgrades are excluded. [Platform support policy](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-support-policy.html), “Retired platform branches”: maintenance/security updates stop for retired branches. This warrants service qualification, **not** reversal of the standard PaaS OS-management model.
- **Proposed TH:** “โดยทั่วไป PaaS ให้ผู้ให้บริการบริหารแพลตฟอร์มและ OS ขณะที่ลูกค้าดูแลโค้ด ข้อมูล และการตั้งค่าที่ตนควบคุม รายละเอียดขึ้นอยู่กับบริการ เช่น Elastic Beanstalk ยังต้องให้ลูกค้าเลือกเวอร์ชันที่รองรับ ตั้งค่าการอัปเดต และย้าย platform branch เมื่อจำเป็น”
- **Proposed EN:** “In a typical PaaS model, the provider manages the platform and operating system while the customer manages application code, data, and customer-controlled settings. Service-specific duties remain; with Elastic Beanstalk, customers must choose supported versions, configure updates, and migrate platform branches when needed.”
- **Repeated locations / risk:** D4:647 service recap; G:2682 onward platform/OS cells; D4:797–800 and C4:71–74 PaaS SQL-injection scenario. Keep the scenario key **Customer** for vulnerable application code. The hypothetical provider-managed OS premise is valid. Add the exception alongside the named service, not every PaaS reference.
- **Verdict / scope / origin:** Misleading or ambiguous wording, P3; High on service evidence, Medium on reader inference. Inherited valid abstraction plus introduced example/absolutism. 4.3 needs one boundary caveat, not a Beanstalk operations tutorial.

### D34-15 — LDAP is the access protocol

- **Current quotation:** D3:137–139 Directory Services: “ตัวอย่าง: Microsoft Active Directory (AD), Lightweight Directory Access Protocol (LDAP)”. This juxtaposes a service implementation and a protocol without differentiating them.
- **Original quotation:** O3:133–137 lists only “Directory Services”, “Identity Providers”, “Access Management Platforms”; S3:157–161 matches. LDAP examples are **Not covered in original learning notes**.
- **Authority:** [RFC 4511 §1](https://www.rfc-editor.org/rfc/rfc4511.html#section-1), Introduction, and abstract define protocol elements for access to directory services. The expansion correctly says “Protocol”, so claiming the lesson expressly calls LDAP a software product overstates the evidence; the taxonomy presentation is ambiguous.
- **Proposed TH:** “ตัวอย่างบริการไดเรกทอรี: Microsoft Active Directory Domain Services หรือไดเรกทอรีที่ให้บริการ LDAP โดย LDAP (Lightweight Directory Access Protocol) เป็นโพรโทคอลสำหรับเข้าถึงบริการไดเรกทอรี ไม่ใช่ชื่อผลิตภัณฑ์เดียวกับ AD”
- **Proposed EN:** “Directory service examples include Microsoft Active Directory Domain Services and LDAP directory services. LDAP (Lightweight Directory Access Protocol) is the protocol used to access directory services, rather than a directory product equivalent to AD.”
- **Repeated locations / risk:** No repeated LDAP-as-product statement found in D3 review, G, or C3. Keep generic directory/IdP distinctions; do not imply AD only supports LDAP or that LDAP itself defines every authentication service.
- **Verdict / scope / origin:** Misleading or ambiguous wording; textbook-introduced. P3, High. A one-sentence protocol-versus-service distinction fits 3.1 IAM tools.

### D34-16 — sockets are an API/endpoint abstraction

- **Current quotation:** D4:50: “โพรโทคอลสำคัญ: RPC … NetBIOS, Sockets”; G:2284 repeats “RPC, NetBIOS, Sockets · Session Management”.
- **Original quotation:** O4:33 describes Session as “จัดการ Sessions”; S4:84–90 uses “Session Management”. Sockets as a Session-layer protocol are **Not covered in original learning notes**.
- **Authority:** [Microsoft socket function](https://learn.microsoft.com/en-us/windows/win32/api/winsock2/nf-winsock2-socket), description and `type`/`protocol` parameters: the API creates a socket bound to a transport provider. Also [RFC 8504 §11.2](https://www.rfc-editor.org/rfc/rfc8504.html#section-11.2) explicitly separates APIs from on-wire behavior. A socket API is not a Session-layer wire protocol.
- **Proposed TH:** “Session Layer เป็นแนวคิดการสร้าง บริหาร และยุติเซสชันระหว่างแอปพลิเคชัน ส่วน sockets เป็น API/นามธรรมของจุดปลายการสื่อสารที่แอปใช้เรียกบริการเครือข่าย ไม่ใช่โพรโทคอลประจำ Session Layer”
- **Proposed EN:** “The Session layer describes establishing, managing, and terminating application sessions. Sockets are an API and communication-endpoint abstraction used by applications, not a Session-layer protocol.”
- **Repeated locations / risk:** D4:50 and G:2284 require matching treatment. G's mobile consolidated application layer should stay a conceptual OSI/TCP-IP mapping, not a claim all real protocols fit a single layer exactly. No sockets-specific scenario found.
- **Verdict / scope / origin:** Confirmed error in protocol taxonomy; textbook-introduced. P3, High. Within 4.1 OSI/TCP-IP scope; no socket programming required.

### D34-Q1 — illustrative IAM workflow versus mandatory exam order

- **Current quotation:** D3:64: “มี 6 ขั้นตอนตามลำดับมาตรฐาน”; D3:37: “สิ่งแรกที่ต้องทำเสมอคือ … Define Roles and Responsibilities”.
- **Original quotation:** O3:50 says “กิจกรรมที่อาจรวมอยู่ในกระบวนการ”; S3:40 says “อาจประกอบด้วย” followed by the same six activities. O3:10 explicitly calls its flow “ภาพช่วยจำ ไม่ใช่ลำดับตายตัว”. Role-first instruction itself is inherited at O3:28 / S3:17; the standard-order and unconditional exam framing are stronger additions.
- **Authority:** [NIST SP800-53 Rev5 control derivative](https://csrc.nist.gov/CSRC/media/Projects/risk-management/800-53%20Downloads/800-53r5/SP_800-53_v5_1-derived-OSCAL.pdf), AC-2 “Account Management”, subcontrols a–f/i, requires authorized account criteria, approvals and organization-defined procedures. The official CC PDF printed p.5 lists roles/provision/review/deprovision without a mandatory six-activity sequence. Neither source supports answering every “first” question with role definition regardless of context.
- **Proposed TH:** “กิจกรรม Provisioning ต่อไปนี้เป็นตัวอย่าง ไม่ใช่ลำดับมาตรฐานตายตัว ก่อนให้สิทธิ์ต้องทราบหน้าที่งาน ความจำเป็น และได้รับการอนุมัติตามนโยบาย หากโจทย์ระบุว่ายังไม่กำหนดบทบาทและสิทธิ์ของงาน ควรกำหนดสิ่งเหล่านั้นก่อนจัดสรรสิทธิ์”
- **Proposed EN:** “These provisioning activities are illustrative, not a fixed standard sequence. Access must reflect the job's approved needs and organizational policy. If a scenario states that job roles and required permissions have not been defined, define them before assigning access.”
- **Repeated locations / risk:** D3:22/37/58/64, D3:444, D3:478–483; C3:23–26; G:1892/1947. Keep the six activities and role-based onboarding example. Bound the scenario by explicitly stating roles are undefined; do not reverse its answer or invent identity-proofing-first as another universal rule.
- **Verdict / scope / origin:** Misleading or ambiguous wording, P3, High. 3.1 requires lifecycle understanding; teach prerequisites and context instead of exam-keyword certainty. Provenance is mixed: inherited idea, introduced rigidity.

### D34-Q2 — disable, lockout and retention

- **Current quotation:** D3:107: “Disable Account … (Lock Account)”; D3:117 recommends disable rather than immediate deletion to retain audit history; D3:432 “ล็อกบัญชีไม่ให้ล็อกอินได้” and D3:436 warns deletion may lose history.
- **Original quotation:** O3:84: “Deprovisioning = Remove / Disable Access … ไม่ได้แปลว่าต้องลบ Account เสมอไป”; O3:93 and S3:98 say “Disable User Account”. Lockout terminology and detailed audit-log rationale are **Not covered in original learning notes**.
- **Authority:** [Microsoft AD account management](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage-user-accounts-in-windows-server), “Reset a user password” distinguishes unlock after excessive incorrect passwords; “Disable a user account” and “Remove a user account” are separate actions. [NIST AC-2](https://csrc.nist.gov/CSRC/media/Projects/risk-management/800-53%20Downloads/800-53r5/SP_800-53_v5_1-derived-OSCAL.pdf) f/l and AC-2(3)/(4) distinguish lifecycle disabling/removal and auditing. Account retention does not by itself establish the storage/retention behavior of every log system.
- **Proposed TH:** “Disable คือการปิดการใช้งานบัญชีโดยผู้ดูแล แตกต่างจาก account lockout ที่มักเกิดจากการลงชื่อเข้าใช้ผิดซ้ำ เมื่อพ้นสภาพต้องเพิกถอนการเข้าถึงตามเวลาที่กำหนด ส่วนการเก็บหรือลบบัญชีและหลักฐานตรวจสอบให้ทำตามนโยบายการเก็บรักษา ข้อกำหนด และความสัมพันธ์ของระบบ”
- **Proposed EN:** “Administrative disabling prevents account use and is distinct from lockout after repeated failed sign-ins. Revoke access promptly when required; retain or delete the account and audit evidence according to policy, retention requirements, and system dependencies.”
- **Repeated locations / risk:** D3:107/117/431–436/570–573; C3:95–98; G:1973. Keep the useful advice against automatic immediate deletion. Do not promise disabling preserves every log or assert deletion always destroys logs. For the scenario, say retention is required by the organization's policy rather than universal best practice.
- **Verdict / scope / origin:** Misleading or ambiguous wording, P3, High; textbook-introduced terminology and rationale. Lifecycle/revocation is 3.1 scope; no legal retention duration is proposed.

### D34-Q3 — biometrics in a NIST identity-family illustration

- **Current quotation:** G:2056: “ข้อมูลประจำตัว (รหัสผ่าน, OTP, ไบโอเมตริกซ์) ในการล็อกอินประจำวัน”. D3:126 defines authentication generally and does not expressly claim a bare biometric satisfies a NIST assurance level.
- **Original quotation:** O3:109–113 and S3:114–124 list proofing/authentication/federation. Biometrics and authenticator-assurance implementation requirements are **Not covered in original learning notes**.
- **Authority:** [NIST SP800-63B-4 §3.2.3, Use of Biometrics](https://pages.nist.gov/800-63-4/sp800-63b.html#use-of-biometrics), and §2 AAL explanation: biometrics are used with a physical authenticator for this remote network-authentication scope; they are not standalone authenticators. This does not make every generic statement that biometrics participate in authentication wrong.
- **Proposed TH (optional precision):** “Authentication ตรวจสอบการควบคุม authenticator ที่ผูกกับบัญชี เช่น รหัสผ่านหรือโทเค็น OTP ในบริบท NIST สำหรับการยืนยันตัวตนระยะไกล ไบโอเมตริกซ์ใช้ร่วมกับ physical authenticator เป็น MFA ไม่ใช้ไบโอเมตริกซ์ลำพัง”
- **Proposed EN (optional precision):** “Authentication verifies control of an authenticator bound to the account, such as a password or OTP token. In NIST remote-authentication guidance, biometrics are used with a physical authenticator as part of MFA, rather than alone.”
- **Repeated locations / risk:** G:2052–2056 is the direct example; D3:124–127 and review:403–410 provide the family context. No scenario says a fingerprint alone achieves an AAL. If expanding, cross-reference the existing MFA lesson; do not apply the remote guidance to every physical biometric door system.
- **Verdict / scope / origin:** Acceptable simplification, P3 advisory, High. A useful optional caveat under 3.1 frameworks/tools, not a confirmed false standalone compliance assertion. The biometric illustration is textbook-only relative to originals.

### D34-Q9 — IPv6 IPsec support and 6to4 context

- **Current quotation:** D4:136: “รองรับมาตรฐาน … IPsec … ในระดับสถาปัตยกรรม”; D4:142: “Tunneling … เช่น 6to4 หรือ Teredo”. D4:563 says “รองรับ IPsec ในตัว”. None says every IPv6 packet is encrypted.
- **Original:** **Not covered in original learning notes**. No IPv6/IPsec requirement or 6to4 transition mechanism appears in O4/S4.
- **Authority:** [RFC8504 §13.1, IPsec requirements](https://www.rfc-editor.org/rfc/rfc8504.html#section-13.1) discusses IPsec architecture support, not automatic activation for traffic. [RFC7526 §4](https://www.rfc-editor.org/rfc/rfc7526.html#section-4) deprecates **anycast** 6to4; it explicitly does not deprecate basic unicast 6to4. A blanket “all 6to4 is deprecated” correction would itself be wrong.
- **Proposed TH (optional precision):** “IPv6 รองรับ IPsec แต่การใช้ IPv6 ไม่ได้ทำให้ทราฟฟิกเข้ารหัสอัตโนมัติ ต้องกำหนดใช้นโยบายและกลไกป้องกันที่เหมาะสม Tunneling มีหลายวิธี; 6to4 เป็นตัวอย่างทางประวัติศาสตร์ โดย anycast 6to4 ถูกยกเลิกคำแนะนำแล้ว”
- **Proposed EN (optional precision):** “IPv6 supports IPsec, but IPv6 traffic is not encrypted automatically; appropriate security policy and mechanisms must be enabled. Tunneling has several forms. 6to4 is a historical example, and anycast 6to4 has been deprecated.”
- **Repeated locations / risk:** D4:136/142/563; no matching 6to4 diagram/scenario found. Retain the distinction between support and enabled protection. Do not call optional historical transition examples mandatory deployment recommendations, or require CC learners to memorize tunnel modes.
- **Verdict / scope / origin:** Acceptable simplification, P3 advisory, High. The current IPsec claim is not a confirmed “automatic encryption” error; brief transition context improves 4.1 precision. Textbook-only compared with originals.

### D34-Q10 — conventional TCP/UDP examples and port table

- **Current quotation:** D4:153 gives HTTP/HTTPS as TCP examples; D4:159 gives DNS/streaming as UDP examples; D4:192 “UDP สำหรับคำขอทั่วไป, TCP สำหรับ Zone Transfer”; D4:197 lists HTTPS TCP443. These examples do not say “only”.
- **Original quotation:** O4:45–46: “HTTPS | TCP 443” and “DNS | UDP/TCP 53”; S4:142–151 adds an explicit note that listed ports are common/default, not mandatory for all service configurations. The port simplification is inherited; the longer textbook's DNS aside adds a common-use split.
- **Authority:** [RFC7766 §5](https://www.rfc-editor.org/rfc/rfc7766.html#section-5), Transport Protocol Selection: general-purpose DNS supports UDP/TCP and ordinary queries can begin with TCP. [RFC9114 §§2, 3.2](https://www.rfc-editor.org/rfc/rfc9114.html#section-2): HTTP/3 uses QUIC over UDP, conventionally port443. These facts add modern precision without invalidating TCP HTTPS or UDP DNS examples.
- **Proposed TH (optional precision):** “ตารางนี้แสดงพอร์ตและ transport ที่ใช้ทั่วไป DNS ใช้ได้ทั้ง UDP และ TCP รวมถึงคำขอปกติ ส่วน HTTPS แบบ HTTP/1.1 และ HTTP/2 มักใช้ TCP443 ขณะที่ HTTP/3 ใช้ QUIC บน UDP โดยทั่วไปที่พอร์ต443 แอปพลิเคชันอาจเพิ่มความน่าเชื่อถือเหนือ UDP ได้”
- **Proposed EN (optional precision):** “This table lists common ports and transports. DNS supports both UDP and TCP, including ordinary queries. HTTPS over HTTP/1.1 and HTTP/2 commonly uses TCP443; HTTP/3 uses QUIC over UDP, commonly on port443. Applications can implement reliability above UDP.”
- **Repeated locations / risk:** D4:153/159/170/192/197/707, TCP/UDP recap D4:541–550, G:2368. No matching answer key requires HTTP/3 knowledge. Preserve beginner transport distinctions, avoid “UDP applications can never be reliable”, and do not relabel QUIC as TCP. FTPS/SSL/deprecated-version refinements are outside this bounded ID verification and are not newly confirmed here.
- **Verdict / scope / origin:** Acceptable simplification, P3 advisory, High. A compact table note is sufficient 4.1 depth. Common-port examples inherited; actual authoring history remains unproven.

### D34-Q12 — example firewall rules and five defense layers

- **Current quotation:** G:2426 labels FW1 “Port80/443”, while G:2441 and G:2445 show SMTP25 and DNS53 in the DMZ. D4:379 says “Concentric Rings of Defense”; G:2519 says “5 Concentric Security Tiers”, but G:2524–2550 uses separate stacked rectangles, not concentric containment.
- **Original quotation:** O4:92 / S4:241 gives HTTPS to a DMZ web server as an **example** rule. O4:134–140 and S4:349–355 use the same five valid control families as a table; neither asserts exactly five mandatory concentric rings.
- **Authority:** [NIST defense-in-depth glossary](https://csrc.nist.gov/glossary/term/defense_in_depth), definitions from SP800-53/800-39, describes multiple barriers integrating people, technology and operations, not a universal five-layer number. For the port inconsistency, the precise evidence is local G:2426 versus G:2441/2445; it does not prove all external traffic is denied except80/443 or that every firewall has that restriction.
- **Proposed TH:** “ตัวอย่างกฎ External Firewall: อนุญาต HTTPS443 ไปยังเว็บเซิร์ฟเวอร์ และเปิดบริการสาธารณะอื่นเฉพาะพอร์ต/ปลายทางที่นโยบายอนุมัติ ภาพ Defense in Depth นี้แสดงตัวอย่างมาตรการ 5 กลุ่มที่ทำงานร่วมกัน ไม่ใช่จำนวนชั้นหรือเส้นทางตายตัว”
- **Proposed EN:** “Example external firewall rule: allow HTTPS443 to the web server; permit other public services only on policy-approved ports and destinations. This defense-in-depth diagram illustrates five complementary control groups, not a mandatory number of layers or a fixed attack path.”
- **Repeated locations / risk:** D4:344 lists web/mail/DNS, D4:379–384 five groups, D4:721 “Concentric”; G:2426/2441/2445 and G:2514–2522 plus mobile tier numbering. Retain valid DMZ/service labels and the five examples. Either title the graphic “example layers” or draw actual containment; do not infer a universal firewall rule or call the whole defense strategy false.
- **Verdict / scope / origin:** Misleading or ambiguous wording, P3, High. Appropriate 4.2 pedagogy; inherited examples with introduced unbounded labels. No scenario answer change is needed.

### D34-Q14 — NIST deployment definitions and security claims

- **Current quotation:** D4:467 attributes four deployment models to NIST; D4:470 restricts public-cloud owners to commercial providers; D4:474 promises private cloud “ความมั่นคงปลอดภัยสูงสุด”; D4:476 says “Private Cloud หรือ On-Premises ผสมกับ Public Cloud”.
- **Original quotation:** O4:245–249 gives private-cloud “Greater Control, Customization, Dedicated Environment”, without a security guarantee; S4:565 calls third-party management “โดยทั่วไป”. O4:252 and S4:585 define hybrid as public + private **cloud**; O4:271/S4:623 correctly say hybrid and multicloud can coexist. The categorical superlative/ownership restriction and conflation of any datacenter with private cloud are additions.
- **Authority:** [NIST SP800-145 §2, Deployment Models, printed p.3](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf): public ownership may be business, academic or government; hybrid joins two or more distinct private/community/public cloud infrastructures. Its private-cloud definition specifies exclusive organizational use, not guaranteed superior security. Broader vendor use of “hybrid cloud” can include traditional on-premises systems; that usage should be identified, not branded universally wrong.
- **Proposed TH:** “ตาม NIST Public Cloud เปิดให้สาธารณชนใช้และอาจเป็นขององค์กรธุรกิจ การศึกษา หรือรัฐบาล Private Cloud จัดสรรเฉพาะองค์กรเดียว จึงให้การควบคุมเฉพาะทาง แต่ไม่รับประกันความปลอดภัยสูงกว่าทุกทางเลือก Hybrid Cloud ตาม NIST เชื่อมโครงสร้างพื้นฐานคลาวด์ต่างกันตั้งแต่สองแห่ง; ในการใช้คำทั่วไปของผู้ให้บริการอาจรวมระบบ on-premises แบบเดิมด้วย Hybrid และ Multi-Cloud เกิดร่วมกันได้”
- **Proposed EN:** “Under NIST, a public cloud is open to the general public and may be owned by a business, academic, or government organization. A private cloud is dedicated to one organization, enabling tailored control without guaranteeing greater security. NIST hybrid cloud combines two or more distinct cloud infrastructures; broader vendor usage may include traditional on-premises systems. Hybrid and multicloud can coexist.”
- **Repeated locations / risk:** D4:470/474/476/486/493/496/671/675/818–820; C4 hybrid scenario:87–90. Keep **Hybrid Cloud** as the scenario answer but specify that the private environment is a private **cloud**, or identify broader vendor terminology. Avoid teaching “kept locally” as automatically most secure or assuming an on-premises server meets the five cloud characteristics. No relevant deployment diagram was found.
- **Verdict / scope / origin:** Misleading or ambiguous wording for the combined ID, with confirmed false categorical ownership/security subclaims and a terminology qualification. P3, High. Direct 4.3 deployment scope; textbook-introduced relative to the qualified originals.

### Cross-location control and verification limits

The high-value consistency bundles are (a) D3 access model prose + matrix + desktop/mobile payload + C3 scenario duplicates, (b) D4 cloud customer-duty tip + review shortcut + matrix row labels + C4 misconfiguration explanation, and (c) AWS-qualified SG/NACL prose + review table + return-traffic example. Remediation should change each bundle together while preserving valid intended scenario answers.

Origin labels describe **textual comparison**, not a proven generation/edit history: “textbook-introduced” means the problematic claim is absent from, or stronger than, all four supplied originals; it does not identify an author, tool, timestamp or causal edit. Where original abstractions are valid, the detail states which part is inherited and which part is strengthened.

No fresh rendering, network simulation, CSP account configuration, external-service mutation, exam-frequency inference, copyrighted course access, or test-suite run was needed for this source-only verification. Official documentation supports the bounded technical conclusions; it does not authorize changing legal allocations, SLAs or all provider defaults. All 23 requested IDs have an individual current quotation, original provenance, authoritative pinpoint, verdict, Thai/English proposal, scope rationale and repetition/consistency discussion.



### Original-note read inventory

| Original file | Lines | SHA-256 at verification |
|---|---:|---|
| `ISC2 Update 2026/Domain 3/D3 sum.md` | 442 | `df5f773a26b5111a67659bbc798d3e546cbc8526708a0681c82cd87d978ee6df` |
| `ISC2 Update 2026/Domain 3/Domain 3.md` | 356 | `35f3e17c6811e043c817da496e13d2659da603826d48aae049ee74773472e43d` |
| `ISC2 Update 2026/Domain 4/D4 sum.md` | 883 | `4a5a42d9b97c8602f17473cef50e66665a31ca738302995d6f1a4756a53bfcf9` |
| `ISC2 Update 2026/Domain 4/Domain 4.md` | 330 | `f7a4342a04d420dbac89e252475d766374b9e56cfb34c4bbbd6d3d816fea6870` |

## Consolidated corrections and retained explanations

The 19 primary confirmed-error findings are D1-F03/F04/F05/N05/N10; D2-02/04/06/08; and D34-01/03/04/07/08/10/11/12/13/16. Their precise corrected Thai and English wording is in the individual records, not a blanket authorization to rewrite their subsections. Some contain accepted components: D1-N10's four-category teaching extension is defensible; D34-10's link-local /16 allocation is correct; D34-08 concerns officially attributed full titles, not a prohibition on abbreviated navigation labels.

The other 29 ambiguous/misleading IDs require bounded clarification, not wholesale reversal. Five IDs retain acceptable simplifications (D1-N07, D2-09, D34-Q3/Q9/Q10); two remain evidence-pending (D1-N01/N08). The existing 44 scenario answer keys are not collectively approved or rejected by these counts: records identify exactly which reasoning or scope qualifier repeats a misconception. No proposal requires mechanically changing all answer keys.

### False positives and acceptable components

| Prior interpretation to reject | Verified decision |
|---|---|
| “Who are you?” always proves a factual Authentication error | D1-F01: broad shorthand is possible; the present row also says Prove identity. Fix the internal pedagogical ambiguity against the lesson's explicit Identification distinction; reassessed P2, not automatic P1. |
| Location/context is useless for authentication decisions | D1-F02: location is a useful risk/access signal, but not a substitute for an independent NIST authentication factor. Preserve context examples. |
| Cost below untreated ALE is always an invalid inequality | D1-F07: it can be a necessary upper bound in a narrow financial model. It is insufficient to prove benefit; use loss reduction and obligations. Existing arithmetic remains valid. |
| Any “maximum acceptable downtime” RTO shorthand is wrong | D2-01: system-target shorthand is defensible; do not confuse it with total business tolerance or omit business reprocessing. Preserve the worked RTO/RPO times and answer. |
| MTTR must always mean Repair or Remediate | D2-05: Respond is valid in context. Define timestamps and avoid an unsourced universal exam convention. |
| A 14-character password policy is inherently incorrect | D2-03: no universal prohibition exists. If citing current NIST requirements, state single-factor versus MFA context rather than presenting an unqualified modern baseline. |
| KPI and KRI can never use the same underlying measurement | D2-04 and D2 examples: purpose determines interpretation; both can be metrics and can use calculated values. |
| Retained customer data/account duties should become provider-only or every matrix cell should be Shared | D34-05: retain customer responsibilities and the misconfigured-sharing answer. Bound broad IAM/data wording and acknowledge provider-operated service components. |
| Device posture is not a valid ABAC attribute | D34-02: valid input; add requested action and remove the claim that one example list is the fixed exhaustive taxonomy. |
| 169.254.0.0/16 is an incorrect block | D34-10: correct allocated link-local block. Separate it from RFC1918 and distinguish the dynamic-selection range only where selection is described. |
| IPv6 IPsec support means the source claims automatic encryption | D34-Q9: current wording does not make that claim. Preserve support wording; a small clarification is optional. Generic 6to4 needs mode context, not a blanket assertion that every mode is deprecated. |
| Standard PaaS provider-managed OS model is wrong | D34-14: valid abstraction. Place a short service-specific maintenance qualifier beside the Beanstalk example. |
| DNS TCP/zone-transfer and HTTPS TCP443 examples claim exclusivity | D34-Q10: common-case examples are valid. Optional clarification can include DNS ordinary TCP use, HTTP/3 over UDP, and explicit/implicit FTPS distinctions. |
| Four teaching control categories or a fixed number of sample layers are intrinsically false | D1-N10/N03 and D34-Q12: map the control taxonomy to official categories and label sample layers as examples. Correct guarantees or misleading labels without deleting useful teaching structures. |

### Cross-domain consistency checks

| Concept | Required consistency boundary |
|---|---|
| Identity, factors and context | Align D1 Identification/AuthN/Authorization/Accounting and MFA with D3 assurance/IdP/ABAC and D4 cloud IAM. Knowledge, possession and inherence remain factor types; device/location context does not replace a factor. Do not turn generic category examples into unsupported claims of NIST AAL compliance. |
| Risk and recovery | D1 financial risk examples must use compatible time units and retain residual risk; D2 RTO/RPO remain targets rather than guarantees. Do not impose a universal formula on qualitative risk ratings. |
| Measurement | Use ตัวชี้วัด for metric in D2 prose, table, diagram and both scenario representations; reserve matrix for an actual matrix. KPI/KRI are purpose-selected metrics, not mandatory sequential stages. |
| Accountability and cloud operation | D1 accountability/logging and D4 retained customer duties must not imply logs alone establish non-repudiation or that a CSP operates no identity/data security controls. Keep the distinction between governance decisions and service operation. |
| Network models and addresses | Put ARP in Link/Network Access within this TCP/IP model; retain OSI/TCP-IP layer labels consistently. Prefix/mask determines broadcast; SLAAC uses prefix plus IID; link-local and RFC1918 remain separate. |
| Guarantees and shorthand | Across availability, defense layers, MAC, recovery sites, passkeys and cloud deployment, describe risk reduction and scoped capability instead of guaranteed elimination. Keep useful simple examples and correct answer keys. |
| Source authority | Distinguish the official numbered outline, supplemental ISC2 guidance, a particular NIST version, a provider-specific example and the author's mnemonic. None is interchangeable with an undisclosed exam rule. |
| Generated repeats | Reconcile Markdown, structured payloads, desktop/mobile diagram text, summary tables, exam tips and exported scenario reasoning together for each approved concept change. Label/meaning corrections do not authorize CSS, spacing or layout redesign. |

## Proposed small implementation batches — approval required

These are separate review units for a later phase. None is implemented. Each must be approved individually; original learning notes remain preserved unless separately authorized.

| Batch | IDs | Bounded change and independent acceptance check |
|---|---|---|
| A — Identity and authentication | D1-F01/F02/F06; D34-Q3 | Clarify claim/proof, factor/context and accountability/non-repudiation. Check username-only, password+PIN, password+location and a protected-authenticator example; preserve valid generic biometric teaching. |
| B — Threats and translation | D1-F03/F04/N10; D2-06/08 | Correct external-only threat, reversed Thai grammar, vestibule typo, DR/DRP label and metric terminology. Verify each paired term against current prose and generated text; no layout changes. |
| C — Financial risk and lifecycle attribution | D1-F07/F08/N04 | Reconcile savings/annual cost and simplified risk models; distinguish the local five-stage mnemonic from named NIST components. Recompute the before/after example; retain correct SLE/ARO/ALE arithmetic. Hold unsupported course assertions for source confirmation. |
| D — Recovery targets and examples | D2-01/02/10/11 | Correct MTD overstatement and qualify RTO relation, testing and recovery-site examples. Check the 17:00 RTO/RPO scenario and one resumption-time example; preserve existing target arithmetic and relative site readiness. |
| E — Metrics, authentication advice and provenance | D2-03/04/05/07/12 | Split into short sub-batches for metric taxonomy, timestamp definitions, password/phishing-resistant scope and phishing nesting. Check computed metrics, allowed MTTR definitions and the most-specific Whaling answer without excluding its parent category. |
| F — Legal/ethical claims | D1-F05/F09/F10/N05/N06/N07/N08/N09 | Correct GDPR scope/controller definition and qualify unsupported legal, consent, availability and absolute advice. Preserve code duties, lawful-but-unethical example and prudent patch/scan concepts. Strict inter-canon exam priority remains on hold pending an authoritative course citation. |
| G — IAM models and framework metadata | D34-01/02/08/11/15/Q1/Q2 | Correct CSF version, ABAC action and MAC guarantee; clarify protocol/service, workflow and disabling/lockout terms. Check read-vs-delete and leaver cases; retain MAC/RBAC/ABAC answer keys where valid. |
| H — Network facts | D34-03/04/09/10/12/16; optional Q9/Q10 | Correct model placement, IID, mask-dependent broadcast, link-local grouping, beacon explanation and socket abstraction. Verify /24, /25 and /23 examples and full original-to-current propagation. Keep optional protocol extensions separate from factual corrections. |
| I — Cloud boundaries | D34-05/06/07/13/14/Q14 | Scope retained duties and provider operations, label AWS controls, remove NAT-only/scale-to-zero/security guarantees. Check existing customer-misconfiguration and PaaS-code examples; do not add unquoted SLAs or require provider-plan memorization. |
| J — Meaning of diagrams and optional dated coverage | D1-N02/N03; D34-Q12; D1-N01; D2-09 | Correct only temporal/relationship wording and example labels in existing representations. Review optional AI applications separately as dated curriculum enrichment. No graphic rearrangement, new icons, spacing or interaction redesign in the academic batch. |

For each approved batch, review the exact source locations and proposed wording above, then verify concept consistency in every repeated representation. A source/string test alone cannot establish academic correctness. No existing test was modified and no new production test was needed for this report-only phase.

## Unresolved questions and holds

1. **D1-N08:** Which authorized ISC2 CC course/edition/page supports an unconditional inter-canon precedence rule? Historical ordered-conflict teaching is not disproved by the current public page's silence. Do not infer priority among Canon 2 adjectives from word order.
2. **D1-F08 and D2-05:** Supply underlying authorized course passages if retaining claims that ISC2 explicitly mandates the fifth lifecycle stage or a universal initiation-only MTTR interval. The provided learning notes report a mnemonic/convention, not that stronger provenance.
3. **D1-N01 / D2-09:** Current official web AI applications are verified; compulsory textbook depth or example counts are not established by the numbered PDF. Decide a bounded dated enhancement rather than inventing a missing objective or examination-frequency rule.
4. **D1-N05 / F10:** Jurisdiction-specific retention durations, negligence thresholds and legal protections require the actual jurisdiction/document/legal source. Proposed generic wording avoids declaring a seven-year duration or blanket immunity rule universal.
5. **D2-03 / D34-14:** If numerical password policy or provider operational specifics are retained, identify the standard, authentication context, service/plan and document version. Do not replace valid scoped practices with a different universal rule.

These are completed triage decisions with explicit evidence limits, not omitted findings. Their held claims are not approved for implementation.

## Separate future educational-presentation audit — outside Phase 1A

The user's additional concerns are recorded here as **user-reported investigation targets, not newly verified visual defects**:

- Insufficient spacing between concepts, examples and related sections.
- Weak subheading hierarchy that obscures grouping and reading order.
- Overly continuous bullet groups that flatten distinct ideas or processes.
- Confusing icons, arrows or flow diagrams that suggest relationships the lesson does not intend.

A future presentation audit should inspect actual rendered sections and representative viewports, record exact locations and distinguish grouping, hierarchy and diagram meaning from visual preference. It should use the academic meanings verified here as constraints. This report does not authorize spacing changes, heading restyling, regrouping bullets, icon replacement, diagram redesign, CSS edits or frontend implementation. Academic labels and false sequential claims can be corrected only within a separately approved wording batch; layout changes require their own review.

## Final verification and preservation

All 55 scoped IDs have an individual record and a primary verdict, current source evidence, original-source comparison or explicit absence, authoritative reference, Thai/English proposed wording, propagation/consistency discussion and severity/confidence. All eight supplied originals (5,513 lines) were read by the domain reviewers; their snapshot hashes are recorded above. Domain 1's final file contains all 20 records despite its agent's usage-limit interruption; Domain 2 contains 12 and Domains 3–4 contain 23. Earlier checkpoints were not treated as finished reports without inspecting their actual contents.

All 693 protected baseline files, including the eight originals, current textbook, production JS/CSS/HTML, prior planning documents and concurrent Learning Slides sources, match their Phase 1A start SHA-256 values. The only repository file created by Phase 1A is `docs/plans/isc2-cc-2026/reading-notes-phase1-academic-verification.md`. Existing uncommitted work is preserved. No stage, commit, push, reset or revert command was performed.

Concurrent repository observation: HEAD differs from the Phase 1A baseline (`d5024844f6a8bf62c4ba9b46a6c01609667feb95` → `27c72ba5e2c70fe34311b0172597b3a8134e4179`). No Git mutation was performed by this verification workflow, and the responsible concurrent action is not attributed. All 693 protected working-file hashes remain unchanged; the sole added working-tree status entry is this report. No attempt was made to reset or reconcile HEAD.

Read-only consistency checks covered the ID inventory, bilingual proposal fields, source-location bounds, subsection/reference coverage, local source hashes and the independent broadcast arithmetic (192.168.1.0/24 → .255; /25 → .127; 192.168.0.0/23 → 192.168.1.255, with 192.168.0.255 a host). No application/browser regression suite was rerun: this phase changed only this report and did not implement corrections. Previous audit screenshots/tests are not fresh proof of academic claims. External references were checked directly for the domain conclusions; unresolved course/jurisdiction claims remain labeled above. Human Acceptance was not marked complete.

**Phase 1A Academic Verification Complete — Pending Human Approval for Implementation**
