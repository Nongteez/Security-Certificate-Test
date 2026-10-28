# Final Domain 1 academic and instructional audit

Date: 2026-10-28 (Asia/Bangkok). Scope: current production curriculum, read-only. Recommendation: **Requires Targeted Remediation**. No remediation is implemented by this audit.

## Executive assessment

The production catalog and lesson files contain **12 published lessons / 101 slides**, all with Thai and English educational content. All 101 pairs were read, including semantic blocks, tables, detailed explanations and structured visual data. All twelve composition implementations, CIA's separate hardcoded presentation copy, semantic reading conversion and Info selection were examined. This is a fresh source-first assistant assessment; it is not independent human subject-matter or native-Thai certification.

All five numbered objectives have substantial introductory teaching. The [coverage matrix](domain-1-2026-coverage-matrix.md) maps every one of the **17 official bullet requirements**, separately from the official website's AI application guidance and supplemental course depth. Fourteen bullets are Complete at introductory depth; three are Partial because contradictory CIA explanations/feedback need correction. No whole numbered objective is absent. AI application coverage is **Partial**, with two important applications Missing. Publication and passing tests do not establish academic acceptance.

**Nine confirmed findings: 0 Critical, 2 High, 4 Medium, 3 Low.** The High findings concern missing foundational AI applications and the CIA explanation's overclaim about hashes. Medium findings concern encryption's purported exclusivity, an exclusive CIA shortcut, an outsider-only confidentiality rationale and unqualified Thai non-repudiation wording. Low findings concern an omitted backup-test qualification, stale development-status copy and an obsolete reference. Most substantive findings are in L01's full reading/Info content, not in the later lessons. Their exact layers are identified below; fixing only the visible canvas would miss them.

The later curriculum is generally careful about uncertainty, permission boundaries, conditional privacy rights, financial versus technical risk, governance authority, context-dependent controls and professional judgment. No wrong quantitative result or incorrectly selected supported response was found. Two material Thai/English qualification issues and one minor omission are documented with exact replacements in the [bilingual audit](domain-1-bilingual-audit.md). No missing or empty translation object was found. Overall instructional quality is suitable for beginner teaching after targeted correction; a rebuild or automatic Lesson13 is unwarranted.

## Authority, sources and method

Both mandatory notes were read completely for this audit: **A**, [D1 sum.md](../../../ISC2%20Update%202026/Domain%201/D1%20sum.md), 1,733 lines (§§1–51 and recap); **B**, [Domain 1.md](../../../ISC2%20Update%202026/Domain%201/Domain%201.md), 405 lines (§§1–14). The current roadmap and tracker were inspected without editing. L02–L12 implementation reports were inspected for source decisions, academic qualifications, QA history and limitations. No dedicated `lesson-d1-01-…-implementation.md` exists; the L01 review metadata instead points to the earlier [Task58 curriculum review](../../reviews/domain-1-curriculum-academic-qa-review.md). That historical planning review is not proof of the present production text's correctness.

Official version verified against both the [ISC2 outline webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) and its linked [English PDF, v01/2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf): effective **September 1, 2026**, Domain1 weight24%; PDF printed p4 supplies the numbered requirements. The webpage also supplies official AI integration guidance, which is not printed as extra numbered bullets in that PDF. Both forms matter; the webpage's older introductory domain list is not the scope used here. The audit does not invent new objective numbers or predict actual exam questions.

Primary technical corroboration was targeted to the actual claims and suspected issues:

| Reference | Material checked / use |
|---|---|
| [NIST FIPS199 §3](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf) | Distinct CIA harms; disclosure is not limited to outsiders. |
| [FIPS180-4 introductory explanation](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) | Fixed-size digests, collision resistance and high-probability change detection; not mathematically unique proofs. |
| [NIST SP800-38D abstract](https://csrc.nist.gov/pubs/sp/800/38/d/final) | Authenticated encryption is a direct counterexample to “secrecy only.” |
| [FIPS186-5](https://csrc.nist.gov/pubs/fips/186-5/final) | Signature assurance and later evidence; no universal human/legal liability guarantee. |
| [NIST SP800-63B-4 §§2,3.2.3](https://pages.nist.gov/800-63-4/sp800-63b.html) | Three factor families and physical-authenticator/biometric qualification in L02. |
| [NIST SP800-39](https://csrc.nist.gov/pubs/sp/800/39/final), [IR8286Ar1 §2.2.4](https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8286Ar1.pdf) | Ongoing risk decisions, authority and single-event versus annual loss interpretation; arithmetic recomputed independently. |
| [EDPB basics](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en), [erasure FAQ](https://www.edpb.europa.eu/sme/find-practical-info/faq_en) | Identifiability, scope, principles and non-absolute erasure. |
| [HHS applicability](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html) | Defined covered entities/business associates rather than all health-data holders. |
| [PCI DSS](https://www.pcisecuritystandards.org/standards/pci-dss/), [outsourcing FAQ](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/) | Industry-standard status and retained merchant duties. |
| [NIST CSF FAQs](https://www.nist.gov/cyberframework/faqs), [ISO27001 overview](https://www.iso.org/standard/27001), [CIS Controls](https://www.cisecurity.org/controls) | Outcomes versus ISMS requirements versus prioritized safeguards; not interchangeable laws/certificates. |
| [NIST compensating-controls glossary](https://csrc.nist.gov/glossary/term/compensating_controls) | Comparable protection, not any cheaper extra control. |
| [ISC2 Ethics](https://www.isc2.org/ethics), [ISACA glossary: due care/diligence](https://www.isaca.org/resources/glossary) | Four canons, retained professional judgment and careful inquiry/action distinction. |
| [SP800-61r2 publication status](https://csrc.nist.gov/pubs/sp/800/61/r2/final) | Withdrawal/supersession in April2025; L01 reference currency. |

The public ISO overview was sufficient for the introductory classification claim; the full licensed ISO standard was not read or certified. The audit does not purport to validate every possible jurisdiction, algorithm implementation or linked reference end-to-end. No mandatory source was inaccessible. Original lecture images/transcripts beyond the two required notes were not re-audited as primary evidence; the current lessons and mandatory notes, not historical assertions about lecture coverage, determine this result.

## Confirmed findings register

Paths in this register use the production lesson filenames linked in the inventory below. JSON paths are zero-based. F01 is one grouped AI coverage finding with distinct remediation acceptance cases, not multiple counted findings. Findings shared with the bilingual report keep the same IDs.

### D1-F01 — High — Coverage: AI applications remain incomplete

**Locations:** L01 `slide-04-integrity`; L02 `slide-01-aaa-map`, `slide-04-activity-trail`; L03 `slide-06-evaluate-the-claim`; L10 `slide-06-one-goal-three-controls`; L12 `slide-10-defensible-decisions`. These are candidate insertion points, not claims that their current text mentions the missing examples.

**Evidence:** Complete production review found no meaningful explanation of model poisoning or of tracing an AI service's performed actions through AAA plus bounded non-repudiation evidence. Actual AI examples are L04 `slide-08-evaluate-a-new-use` (support tickets for training), L08 `slide-07-compliance-and-security`/`slide-08-ai-governance-intake` (changed service and approval), and L12 `slide-10-defensible-decisions` (an AI-generated report, including unfair claims). L10 teaches the three control categories generically, without applying them to AI. A/B do not supply explicit AI instruction. The official webpage's Domain1 AI guidance supplies the application scope; its absence from the PDF's separate numbered list does not justify ignoring that guidance.

**Interpretation / correction:** retain the sound existing examples. Add a short poisoning/integrity case to L01; connect an automated-service identity, allowed action and protected action record across L02/L03, explicitly retaining evidence limits; apply the existing category mix and care/diligence questions to one AI-adoption case in L10/L12. The [matrix](domain-1-2026-coverage-matrix.md#ai-application-guidance) distinguishes the remaining degrees of coverage. **Verification:** paired teaching must define the new concepts, show a concrete consequence and defensible action, and explain limits; keyword insertion alone fails acceptance. No advanced model-defense taxonomy or new lesson is necessary on current evidence.

### D1-F02 — High — Technical / bilingual: hash uniqueness and proof are overstated

**Location:** L01 `slide-04-integrity`, `blocks[2].items[0]`; cross-check the SHA-256 presentation footer in `js/ui/learning/cia-presentations/integrity.js`.

**Exact evidence:** EN “Generate unique mathematical checksums to verify that data has not changed”; TH “สร้างค่าตรวจสอบเฉพาะเพื่อพิสูจน์ว่าข้อมูลไม่มีการเปลี่ยนแปลง”. Source B §2.2 already qualifies hash comparison with a trusted reference; the production explanation drops that prerequisite. FIPS180-4's introduction describes computational resistance and very high probability rather than injective uniqueness. An attacker able to replace both file and unprotected digest can defeat a naive comparison.

**Interpretation / correction:** describe a fixed-length digest, comparison against a protected/trusted reference and absence of absolute proof or origin authentication from a bare hash. Matching digests are strong evidence under assumptions, not guaranteed unique identity. Keep L03's evidence reasoning consistent. The concise canvas's “detect changes” is better bounded; do not replace it with the flawed full-text formulation. **Verification:** review the exact TH/EN replacement in the bilingual report in Info, reading and canvas context; explain the replace-file-and-digest counterexample.

### D1-F03 — Medium — Technical / layer consistency: encryption is called secrecy-only

**Location:** L01 `slide-08-takeaways`, `blocks[1].rows[0][3]` (reading/Info).

**Exact evidence:** EN “encryption protects secrecy only”; TH “การเข้ารหัสช่วยแค่เรื่องความลับ”. In contrast, current `cia-presentations/recap.js` says only that encryption does not prevent deletion, which is sound in this context. SP800-38D describes authenticated encryption, so the full explanation's blanket “only” excludes a real and relevant security property.

**Correction:** “Encryption alone does not stop deletion; authenticated encryption can also detect unauthorized changes.” Retain the narrow deletion distinction and acknowledge mode/design dependence. This does not require teaching GCM mechanics. **Verification:** inspect both languages and all reading/Info/recap surfaces; do not classify every encryption mode as authenticated.

### D1-F04 — Medium — Technical / cross-lesson reasoning: CIA shortcut suggests exclusivity

**Locations:** L01 `slide-04-integrity`, `blocks[1].text.en`; `slide-08-takeaways`, `blocks[1].rows[1][3]`.

**Exact evidence:** “strictly an Integrity violation”, “strictly Integrity”, and Thai “การดัดแปลงข้อมูลคือ Integrity เสมอ”. The integrity definition is correct; the absolute shortcut is problematic when presented as a universal exam rule. L01 `slide-06-compound-impact` and the current recap renderer correctly permit multiple goals; FIPS199 distinguishes modification/destruction from loss of use without making them mutually exclusive effects.

**Correction:** explain that unauthorized modification directly harms integrity and may also harm availability or accompany disclosure; select the specific harm the question describes. Remove “strictly”/unqualified exam-keyword guarantees and the internal SQ-13 shorthand from learner-facing guidance if revising the sentence. **Verification:** learner can explain both a falsified but available ledger and corrupted records that cannot be used. This is an ambiguity/shortcut issue, not a finding that every mention of integrity is wrong.

### D1-F05 — Medium — Feedback accuracy: confidentiality rationale is narrowed to outsiders

**Location:** L01 `slide-07-scenario-reflection`, `visual.options[0].reason`; related scenario/renderer fact “No external disclosure”.

**Exact evidence:** EN “viewed by unauthorized outsiders”; TH “ไม่มีข้อมูลความลับรั่วไหลสู่ภายนอก”. FIPS199 §3 restricts disclosure by authorization, not organizational membership. L01's intern example and L12 privileged-access example already show the correct internal boundary. No external disclosure does not establish that every internal viewing was permitted.

**Correction:** retain **Integrity** as the supported direct harm in the stated ledger case, but say that unauthorized disclosure is not established by the provided facts and that insiders can also violate confidentiality. Do not invent additional access or reverse the correct answer. **Verification:** all three original options and the complete analysis remain coherent in TH/EN and distinguish “not shown” from “impossible.”

### D1-F06 — Medium — Bilingual / evidence limits: signature becomes inability to deny responsibility

**Location:** L01 `slide-04-integrity`, `blocks[2].items[1]`.

**Exact evidence:** TH “ไม่สามารถปฏิเสธความรับผิดชอบ”; EN “provide authentication, integrity verification, and non-repudiation”. The Thai formulation turns a technical evidence service into an absolute liability conclusion. Even the English shorthand needs the conditions taught in L03 `slide-03-sign-and-verify`/`slide-05-evidence-conditions`. Source B §4.1 and FIPS186-5 support evidence with appropriate key/identity management; they do not establish a universal legal result.

**Correction:** use “supports non-repudiation” with identity/key/evidence conditions and explicitly avoid guaranteed actor, intent or legal outcome. Exact paired replacement is in the bilingual report. **Verification:** L01 must no longer contradict L03's shared/compromised-key and timestamp limitations.

### D1-F07 — Low — Bilingual completeness: backup verification qualifier disappears

**Location:** L01 `slide-05-availability`, `blocks[1].items[2]`.

**Exact evidence:** EN “Tested off-site backups”; corresponding TH starts “การสำรองข้อมูลนอกสถานที่” and omits testing. The high-level availability concept remains understandable, so this is Low. L11 `slide-04-corrective-and-recovery` provides an internal comparison: it explicitly requires validated clean data and warns that having a backup does not ensure successful restoration.

**Correction:** restore “ทดสอบการกู้คืนแล้ว” in the Thai list, alongside the existing location qualifier. No additional slide needed. **Verification:** paired text retains the recovery-test condition without promising uninterrupted service from backups alone.

### D1-F08 — Low — Educational metadata: development status remains in lesson prose

**Locations:** L09 `slide-10-connect-and-review`, `blocks[2].text`; L10 `slide-01-category-and-purpose`, `slide-05-course-labels`, `slide-08-select-and-check`, especially `blocks[3].text` on8.

**Exact evidence:** “Controls and ethics remain separate unfinished lessons”; “control functions remain planned for Lesson 11.” Current catalog revision12 contains published L10–L12. This is learner-facing full-explanation/footer copy, not merely a dated implementation report. The historical reports should remain historical.

**Correction:** replace development status with a learner prerequisite/next-topic pointer, retaining accurate concept boundaries. **Verification:** catalog availability and prose agree; do not change IDs, route or historical implementation reports as part of this correction.

### D1-F09 — Low — Reference currency: withdrawn incident guide presented without status

**Locations:** L01 reference `nist-sp-800-61r2`, used by `slide-06-compound-impact` and `slide-08-takeaways`; slide8 `blocks[2].items[2]` calls it an authoritative reference without historical qualification.

**Evidence:** NIST marks SP800-61r2 withdrawn2025-04-03, superseded by Rev3. The incident illustration is still understandable; withdrawal alone does not make the scenario false. However, a 2026 course should not silently present Rev2 as its current incident-handling guide.

**Correction:** retain a clearly labelled historical reference if the exact old passage matters, or revalidate the relevant claim against current primary guidance and update its citation/locator. Do not mechanically replace version numbers while retaining an unverified locator. **Verification:** title, URL, revision/status, passage and slide references agree; no broader incident-response course rewrite.

## Instructional assessment by lesson

Assessment is based on complete paired teaching, not title presence. “Apply” includes reasoned non-scored comparisons; it does not mean that every lesson contains a graded quiz.

| Lesson | Progression / depth / application / visual meaning | Judgment |
|---|---|---|
| L01 CIA | Mission→three harms→enterprise examples→compound event→ledger diagnosis→recap. Distinct access, modified-payment and broken-service diagrams teach real relationships. Full explanations contain the principal errors above; the current canvas is sometimes more careful. Advanced labels AES/TLS/RBAC/FIM/RAID are supporting examples, not required prior administration knowledge. | Apply-level; targeted corrections, not shallow overall. |
| L02 AAA/MFA | Claim→verification→permission→activity→factor families→combinations→denied-order analysis. Limits explicitly cover anonymous access, biometrics, context and logs. | Define/explain/apply; sufficient beginner depth. |
| L03 Evidence | Disputed order→different questions→key roles→changed copy→conditions→bounded conclusion. The comparison explicitly disclaims real cryptography. | Define/explain/apply; reconciles the notes' short non-repudiation treatment well. |
| L04 Privacy | Secure≠appropriate→identifiability→actual roles→minimal purpose→copies→retention→conditional erasure→AI reuse. Clear branches avoid unconditional erasure and cloud-role shortcuts. | Explain/apply; strong full detail, no unsupported universal deadline. |
| L05 Risk foundations | Potential event→scenario chain→terms→two dimensions→loop→risk statement→post-change review→report. Communication is throughout; ordinal labels are not multiplied blindly. | Explain/apply; prerequisite for L06–07, not a duplicate assessment lesson. |
| L06 Assessment | Methods/criteria→AV/EF/SLE→ARO→ALE→comparison→sensitivity→contextual priority. All worked units and values agree with the implementation model. | Explain/calculate/apply; financial model is qualified course enrichment. |
| L07 Response | Four groups→avoid/mitigate→share costs→authorized acceptance→residual risk→limits→cost/benefit→case→monitor→record. Repeats clinic context for new decisions. | Apply-level; no acceptance-by-low-probability or mandatory-duty waiver found. |
| L08 Governance | Purpose/roles→authority→applicability→bounded legal examples→retained duties→compliance limits→AI intake→traceability. Direction/evidence arrows are horizontal and opposite, matching the columns. | Explain/apply; legal illustrations appropriately bounded. |
| L09 Documents | Framework structure→CSF outcomes→ISMS→safeguards→four document functions→classification→alignment. Avoids treating every standard as law; verifies identity before reset. | Explain/apply; end-of-unit development copy needs refresh. |
| L10 Categories | Two questions→three mechanisms→source taxonomy reconciliation→complementary controls→human-review case→selection/evidence. Electronic locks and human ticket reviews are carefully scoped. | Explain/apply; no fourth official category invented. |
| L11 Functions | Category/function→prevent/detect→repair/recover→deter/direct→comparable alternative→camera contexts→evidence reasoning. Gateway example checks bypass and authority. | Explain/apply; appropriate supporting depth, no universal one-answer CCTV classification. |
| L12 Conduct | Authorized purpose→behavior→care→inquiry→scan/patch/verify→canons→public trust→competence→reporting choice→decision record. Full text retains professional judgment and context. | Explain/apply; adequate core1.5, some AI ethics context but not the missing AI access/poisoning unit. |

No lesson was judged merely decorative or definitions-only. Dense qualifications predominantly live in Info/reading; learners who only view the concise canvas will receive less depth. This is an instructional dependency to explain during acceptance, not an invented defect requiring all detail on a slide. A separate novice learning study was not performed. Useful reinforcement includes L02→L03 evidence, L04→L08 roles/authority, L05→L07 risk ownership and L09→L10→L11 document/category/function distinctions. Recurring “evidence, owner, review” phrasing serves different decisions; no verified need for wholesale deduplication was found.

## Visual and interaction academic review

Reviewed all lesson composition branches and relevant CSS meaning: arrows, return paths, proportions, chosen-answer accents and conditional visibility. The risk cycle explicitly places Respond bottom-right and Monitor bottom-left, with a return arrow; DOM order remains1,2,3,4. The five-of-ten asset segments convey50% value loss, not five attacks. SLE and ARO multiply into ALE; no bar claims a measured risk reduction. Governance direction and evidence flow oppositely. Privacy erasure branches are conditional. Signatures use private signing/public verification and label the changed-copy model as illustrative. The revised compensating gateway requires blocked direct paths and comparable protection. Camera intervention labels prevention only when a guard actually stops the attempt. No additional confirmed conceptual diagram error was found.

| Interaction | Actual source / states examined | Academic result |
|---|---|---|
| L01 slide7 | `cia-presentations/investigation.js`; all 3options plus shared reveal; JSON verdict/reason per option | Integrity remains supported; F05 corrects confidentiality rationale. |
| L02 slide7 | `aaa-presentations.js`; reasoning hidden/shown | All three AAA outcomes remain distinct. |
| L03 slide4 | `non-repudiation-presentations.js`; original/altered10→20 | Matching result is an authored demonstration, not a real signature tool. |
| L04 slide8 | `privacy-presentations.js`; reasoning hidden/shown | Review-before-reuse; not “all AI forbidden.” |
| L05 slide7 | `risk-foundations-presentations.js`; before/after | Installation does not become zero risk or approval. |
| L06 slide7 | `assessment-presentations.js`; ARO2/4 | Computed ALE10,000/20,000; SLE stays5,000. |
| L07 slide8 | `risk-response-presentations.js`; all 3 choices | Evidence/review is supported; close-now/insurance-alone explanations are accurate. |
| L08 slide8 | `governance-presentations.js`; all 3 choices | Map facts/responsibilities is supported by the stated unknowns. |
| L09 slide9 | `frameworks-presentations.js`; all 4 choices | Standard is the specific adopted-clause function, with filename caveat. |
| L10 slide7 | `control-categories-presentations.js`; all 3 choices | Administrative classifies the human review, not every software component. |
| L11 slide8 | `control-functions-presentations.js`; all 3 contexts | More than one function is permitted when facts justify it. |
| L12 slide9 | `professional-conduct-presentations.js`; all 3 choices | Safe accurate escalation is supported by stated facts, without a universal disclosure rule. |

Thirty-two substantive choice/toggle states per language were reviewed in source and visited through the DOM fixture (**64 TH/EN state visits**); neutral prompts were also read in source. These are static/Node observations, not newly executed browser tests or a screenshot matrix. Existing desktop QA was treated as historical functional evidence. No browser rerun was needed to establish the text/source findings. Sustained fullscreen, zoom, assistive technology, other browsers and mobile/tablet behavior are outside this academic verification.

## Source fidelity and cross-lesson reconciliation

- A4/recap's “Who are you?” shorthand is clarified by L02's identification-versus-proof distinction. A7's location/context is not taught as an independent fourth MFA factor. B3.4's accounting/auditing shorthand is properly separated.
- A lacks a dedicated non-repudiation definition; B4.1 supplies it. L03 correctly attributes the distinction and qualifies keys/evidence. The L01 Thai shorthand must be aligned, not used to weaken L03.
- A10's cloud-provider example is bounded by actual purpose/means in L04. A13–14 and B4.2 do not become global retention/deletion rules. The EU and US examples stay labelled.
- A15's five-step sketch versus B5.2's four core activities is reconciled with communication throughout; no exact ISC2-mandated flow is asserted. A22's acceptance list is not copied as automatic permission. B5.5 labels appetite/tolerance supplemental.
- A27's broad framework list is refined by L09's ISO-ISMS/CIS/CSF distinctions. A31's reset sketch is deliberately safer in production: verify before changing credentials.
- A36's four categories versus B6.1/official three are explicitly reconciled in L10; A41's broad corrective includes recovery, while B6.2 distinguishes it, and L11 permits overlap. A45's timeline is not a mandatory serial control architecture.
- A46–51/B7.3,8 are substantially represented in L12. DO/CHECK and SAPP are recall aids rather than universal legal or conflict-resolution algorithms. Principal service is not obedience to every instructor or manager.
- B9 Zero Trust/Defense in Depth maps to official4.2, not a missing D1 lesson. Detailed IAM, incident operations and BC/DR are similarly bounded. No prior lesson should be expanded into another domain to make an audit table look complete.

The older Task58 curriculum report maps different lesson numbers and lists Defense in Depth under1.4; the current roadmap/production correct that boundary. Its “100%” planning claim is not carried forward as a current acceptance result. Dated implementation reports and tracker rows retain historical stopping points; F08 concerns those statements only where embedded in live learner prose.

## Verification, preservation and limits

Read-only checks executed against the actual modules: catalog/lesson validators; ID/objective/status/title/revision/reference/path/orphan checks; recursive paired-content checks; rendering every slide in presentation/reading and complete Info for both languages; activating every listed interaction's substantive branches; recomputing financial examples. Results: **12/101**, **1,686 paired objects with zero missing/empty language halves**, **202 presentation +202 reading renders**, **202 Info explanations**, **64 state visits**. No schema validation, duplicate-ID, orphan, invalid-reference or catalog mapping discrepancy was detected. These checks support inventory/exposure, not the academic verdict by themselves.

Financial recomputation:10,000×0.50=5,000/event;5,000×2=10,000/year;5,000×4=20,000/year;500×24=12,000/year;10,000−4,000−3,000=3,000/year simplified net benefit. ARO0.2 is frequency, not automatically20% annual probability. Those distinctions appear in both languages and implemented feedback. No forced mathematical correction is recommended.

Only the four requested audit Markdown files were created. A fresh SHA-256 inventory captured **1,628 existing files**, including dirty/untracked work, before report creation; final comparison found **all 1,628 unchanged, zero modified, zero missing, exactly four authorized report additions**. Git HEAD is not the preservation baseline. Production content, JS, CSS, tests, IDs, progress, Quiz, Vocabulary, banks, earlier reports, roadmap and tracker retain their task-entry bytes. No dependency, build, migration, remediation, Lesson13 or Domain2 work occurred. Inventory excludes `.git`, ignored `.learning-preview`, `node_modules` and `.tmp*`; existing QA artifacts were included. The preserved-file fingerprint (sort paths by JavaScript ordinal order, hash the UTF-8 concatenation `path + NUL + lowercaseSHA256 + LF` for each file) is `1bcd6a4a4c714c3de5ce28617afa752e8d4b52ffccf05a5d50f10d61ecda83d0`.

Full curriculum reading is complete; independent human academic/native-Thai acceptance and actual learner-performance evaluation are not claimed. External corroboration is targeted rather than an exhaustive re-audit of every external standard. The implementation-report inspection was supporting history, not a substitute for the full production reading. No new full browser QA or full regression-suite result is claimed for this four-document read-only audit. Final document checks pass: all four verdicts, nine unique finding IDs with the2/4/3severity distribution,101slide ledger rows,14 Complete/3 Partial requirement rows, existing local links and trailing-whitespace checks. The separate source/fixture assertions described above also passed; these were executed as read-only inline Node ES modules without adding test files or evidence artifacts.

## Acceptance decision and minimal next work

**Requires Targeted Remediation.** Correct F02 and the other CIA explanation/feedback conflicts; close F01 through bounded bilingual applications in existing lessons; restore the small qualification/status/reference issues; then re-audit only affected statements/branches plus shared traceability and terminology. The [remediation plan](domain-1-remediation-plan.md) defines order, scope and acceptance tests. No new lesson or broad redesign is justified. Stop here for user review; findings remain visible in production until separately authorized remediation.

## Production inventory and complete slide ledger

The following inventory is generated from the actual production JSON, not copied from a report. Paths, titles, objective, IDs and references are the audited versions. All listed slides have both languages, reading and Info exposure. L01 introduction has a dedicated Info section; its remaining7 slides use the normal explanation list. English application controls and retained English technical labels are intentional, not missing Thai translations.
### L01 — The CIA Triad: Core Information Security Goals

- Production: [lesson-d1-01-cia-triad](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json); title TH: สามเหลี่ยม CIA: เสาหลักแห่งเป้าหมายความมั่นคงปลอดภัยสารสนเทศ.
- Mapping: Domain1 / 1.1; 8 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `034d8ae332ddcb5b3669823f50bca6e8f9122926f2f698a331db50b385cd9a55`.
- Review record: [domain-1-curriculum-academic-qa-review.md](../../../docs/reviews/domain-1-curriculum-academic-qa-review.md). Historical Task58 curriculum evidence, not a dedicated final production implementation report.
- Sources: `isc2-cc-outline-2026` — [ISC2 Certified in Cybersecurity (CC) Exam Outline (2026)](../../../docs/plans/isc2-cc-2026/domain-1-learning-slides-curriculum-plan.md); `nist-fips-199` — [NIST FIPS PUB 199: Standards for Security Categorization of Federal Information and Information Systems](https://csrc.nist.gov/publications/detail/fips/199/final); `nist-sp-800-61r2` — [NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final); `project-d1-curriculum-plan` — [SEC CERT TEST Domain 1 Learning Slides Curriculum Plan & Discrepancy Resolutions](../../../docs/plans/isc2-cc-2026/domain-1-learning-slides-curriculum-plan.md).
- Interaction: slide-07-scenario-reflection; 3 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-orientation` | Why Do We Secure Information? | ทำไมเราจึงต้องรักษาความมั่นคงปลอดภัยของข้อมูล? | `isc2-cc-outline-2026`, `project-d1-curriculum-plan` |
| `slide-02-cia-overview` | The Three Pillars of Information Security | 3 เสาหลักแห่งความมั่นคงปลอดภัยสารสนเทศ | `isc2-cc-outline-2026`, `nist-fips-199`, `project-d1-curriculum-plan` |
| `slide-03-confidentiality` | Confidentiality: Protecting Against Unauthorized Disclosure | Confidentiality: การป้องกันการเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต | `isc2-cc-outline-2026`, `nist-fips-199`, `project-d1-curriculum-plan` |
| `slide-04-integrity` | Integrity: Protecting Against Unauthorized Modification | Integrity: การป้องกันการแก้ไขดัดแปลงข้อมูลโดยไม่ได้รับอนุญาต | `isc2-cc-outline-2026`, `nist-fips-199`, `project-d1-curriculum-plan` |
| `slide-05-availability` | Availability: Ensuring Dependable, Timely Access | Availability: การรับรองความพร้อมใช้งานอย่างต่อเนื่องและทันท่วงที | `isc2-cc-outline-2026`, `nist-fips-199`, `project-d1-curriculum-plan` |
| `slide-06-compound-impact` | Real-World Complexity: Compound Impacts Across the Triad | โลกความเป็นจริง: เหตุการณ์เดียวที่ส่งผลกระทบต่อเนื่องหลายด้าน | `isc2-cc-outline-2026`, `nist-sp-800-61r2`, `project-d1-curriculum-plan` |
| `slide-07-scenario-reflection` | Scenario Reflection: Which Principle Is Violated? | ทดสอบความเข้าใจ: หลักการใดถูกละเมิดโดยตรง? | `isc2-cc-outline-2026`, `nist-fips-199`, `project-d1-curriculum-plan` |
| `slide-08-takeaways` | Key Takeaways & Exam Quick-Reference | สรุปประเด็นสำคัญและตารางช่วยจำสำหรับเตรียมสอบ | `isc2-cc-outline-2026`, `nist-fips-199`, `nist-sp-800-61r2`, `project-d1-curriculum-plan` |

### L02 — Identification, AAA & Multi-Factor Authentication

- Production: [lesson-d1-02-aaa-mfa](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json); title TH: การระบุตัวตน AAA และ Multi-Factor Authentication.
- Mapping: Domain1 / 1.1; 7 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `3daf101305bf0628d5e23d703c632e007ed7128941b486545c5118cdb763867b`.
- Review record: [lesson-d1-02-aaa-mfa-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-02-aaa-mfa-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `isc2-outline` — [ISC2 CC Exam Outline — effective September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `d1-knowledge` — [Domain 1 extracted knowledge map](../../../content/isc2-cc-2026/sources/domain-1/extracted-knowledge/knowledge-map.md); `d1-transcript` — [User-supplied Domain 1 course transcript](../../../content/isc2-cc-2026/sources/domain-1/transcripts/Script - DOMAIN 1.txt); `nist-authentication` — [NIST SP 800-63B-4 — Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html); `rfc-aaa` — [RFC 2903 — Generic AAA Architecture](https://www.rfc-editor.org/rfc/rfc2903.html).
- Interaction: slide-07-access-case; 2 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-aaa-map` | One request. Three security functions. | คำขอเดียว สามหน้าที่ด้านความปลอดภัย | `isc2-outline`, `d1-knowledge`, `d1-transcript`, `rfc-aaa` |
| `slide-02-claim-and-proof` | A name is a claim. Verification needs evidence. | ชื่อคือคำกล่าวอ้าง ต้องมีหลักฐานเพื่อยืนยัน | `d1-knowledge`, `d1-transcript`, `nist-authentication` |
| `slide-03-permission-boundary` | Signed in does not mean allowed. | เข้าสู่ระบบแล้ว ไม่ได้แปลว่าทำได้ทุกอย่าง | `isc2-outline`, `d1-knowledge`, `d1-transcript` |
| `slide-04-activity-trail` | Leave a trail that can be reviewed. | บันทึกร่องรอย เพื่อให้ตรวจสอบย้อนหลังได้ | `d1-knowledge`, `d1-transcript`, `rfc-aaa` |
| `slide-05-factor-families` | Different evidence. Different factor types. | หลักฐานต่างชนิด ปัจจัยต่างประเภท | `d1-knowledge`, `d1-transcript`, `nist-authentication` |
| `slide-06-mfa-or-more-steps` | More steps do not always mean MFA. | หลายขั้นตอน ไม่ได้แปลว่าเป็น MFA เสมอไป | `d1-knowledge`, `d1-transcript`, `nist-authentication` |
| `slide-07-access-case` | The login worked. Why was approval denied? | เข้าสู่ระบบสำเร็จ ทำไมจึงอนุมัติไม่ได้ | `isc2-outline`, `d1-knowledge`, `nist-authentication` |

### L03 — Non-repudiation & Trustworthy Evidence

- Production: [lesson-d1-03-non-repudiation](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json); title TH: Non-repudiation และหลักฐานที่น่าเชื่อถือ.
- Mapping: Domain1 / 1.1; 6 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `0a00b3e3d13112a21ae554469ff4811517a704114a3d0a2ec5b26ce902884b33`.
- Review record: [lesson-d1-03-non-repudiation-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-03-non-repudiation-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `isc2-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `notes-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `notes-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `nist-nr` — [NIST glossary — non-repudiation](https://csrc.nist.gov/glossary/term/non_repudiation); `nist-signatures` — [NIST FIPS 186-5 — Digital Signature Standard](https://csrc.nist.gov/pubs/fips/186-5/final); `nist-keys` — [NIST SP 800-57 Part 1 Rev.5 — Key Management](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).
- Interaction: slide-04-altered-copy; 2 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-disputed-action` | When an action is disputed, evidence matters. | เมื่อการกระทำถูกโต้แย้ง หลักฐานจึงสำคัญ | `notes-b`, `nist-signatures`, `notes-a`, `isc2-outline` |
| `slide-02-different-questions` | A login, a log and a signature answer different questions. | การเข้าสู่ระบบ Log และลายเซ็น ตอบคนละคำถาม | `notes-a`, `notes-b`, `nist-nr` |
| `slide-03-sign-and-verify` | Sign privately. Verify with a trusted public key. | ลงนามด้วยกุญแจส่วนตัว ตรวจด้วยกุญแจสาธารณะที่เชื่อถือได้ | `notes-b`, `nist-signatures` |
| `slide-04-altered-copy` | A copied signature does not validate changed content. | คัดลอกลายเซ็นเดิม ไม่ได้ทำให้ข้อมูลที่แก้ไขผ่านการตรวจ | `notes-b`, `nist-signatures` |
| `slide-05-evidence-conditions` | Good evidence needs more than mathematics. | หลักฐานที่ดี ต้องมีมากกว่าผลคำนวณ | `notes-b`, `nist-signatures`, `nist-keys` |
| `slide-06-evaluate-the-claim` | Which conclusion does the evidence support? | หลักฐานรองรับข้อสรุปใดได้บ้าง | `notes-b`, `nist-signatures` |

### L04 — Privacy & Personal Data

- Production: [lesson-d1-04-privacy](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json); title TH: Privacy และข้อมูลส่วนบุคคล.
- Mapping: Domain1 / 1.1; 8 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `9edaf38f654a44d5d1f66177044bd225d8a862d8cc4a153f6b16d0f0c7285294`.
- Review record: [lesson-d1-04-privacy-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-04-privacy-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `isc2-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `notes-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `notes-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `ec-data` — [European Commission — Data protection explained](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); `ec-principles` — [European Commission — Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); `dpc-retention` — [Irish Data Protection Commission — Retention](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); `edpb-erasure` — [European Data Protection Board — Small business FAQ](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); `nist-privacy` — [NIST glossary — information system-related privacy risks](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).
- Interaction: slide-08-evaluate-a-new-use; 2 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-secure-is-not-enough` | Privacy asks more than “who can read it?” | Privacy ถามมากกว่าแค่ “ใครอ่านได้” | `notes-a`, `notes-b`, `nist-privacy` |
| `slide-02-recognize-personal-data` | A person can be identified without a name. | ระบุตัวบุคคลได้ แม้ไม่มีชื่อ | `notes-a`, `notes-b`, `ec-data` |
| `slide-03-roles-and-responsibility` | Follow the decisions, not the server. | ดูว่าใครตัดสินใจ ไม่ใช่ใครมีเซิร์ฟเวอร์ | `notes-a`, `notes-b`, `ec-data` |
| `slide-04-purpose-and-minimization` | Start with the purpose. Collect what it needs. | เริ่มจากวัตถุประสงค์ แล้วเก็บเท่าที่จำเป็น | `notes-a`, `notes-b`, `ec-principles` |
| `slide-05-inventory-and-copies` | You cannot manage a copy you cannot find. | จัดการสำเนาไม่ได้ หากไม่รู้ว่าอยู่ที่ไหน | `notes-a`, `notes-b` |
| `slide-06-retention-with-a-reason` | Retention needs a reason and a review point. | Retention ต้องมีเหตุผลและจุดทบทวน | `notes-a`, `notes-b`, `dpc-retention` |
| `slide-07-conditional-erasure` | A deletion request starts a review. | คำขอลบข้อมูลเริ่มกระบวนการพิจารณา | `notes-a`, `notes-b`, `edpb-erasure` |
| `slide-08-evaluate-a-new-use` | A secure upload can still be the wrong next step. | อัปโหลดอย่างปลอดภัย ก็อาจเป็นขั้นตอนที่ไม่เหมาะสม | `notes-a`, `notes-b`, `nist-privacy`, `isc2-outline` |

### L05 — Risk Foundations & Lifecycle

- Production: [lesson-d1-05-risk-foundations](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json); title TH: พื้นฐาน Risk และวงจรการบริหารความเสี่ยง.
- Mapping: Domain1 / 1.2; 8 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `d3f9cae29ed28a612b89c79f01b09b223bb3244e88329f86d4d0c78f607c512f`.
- Review record: [lesson-d1-05-risk-foundations-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-05-risk-foundations-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `isc2-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `notes-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `notes-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `nist-assessment` — [NIST SP 800-30 Rev.1 — Guide for Conducting Risk Assessments](https://csrc.nist.gov/pubs/sp/800/30/r1/final); `nist-management` — [NIST SP 800-39 — Managing Information Security Risk](https://csrc.nist.gov/pubs/sp/800/39/final).
- Interaction: slide-07-review-after-change; 2 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-potential-harm` | Risk exists before an incident happens. | Risk มีอยู่ได้ ก่อนเกิดเหตุการณ์จริง | `notes-a`, `notes-b`, `nist-assessment` |
| `slide-02-connect-the-scenario` | Connect the weakness to a consequence. | เชื่อมจุดอ่อนให้เห็นผลที่อาจตามมา | `notes-a`, `notes-b` |
| `slide-03-separate-the-terms` | A threat is not a vulnerability. | Threat ไม่ใช่ Vulnerability | `notes-a`, `notes-b`, `nist-assessment` |
| `slide-04-likelihood-and-impact` | Two questions shape the risk judgment. | สองคำถามช่วยประเมินความเสี่ยง | `notes-a`, `notes-b`, `nist-assessment` |
| `slide-05-continuous-lifecycle` | Risk management is a loop, not a checklist finish. | Risk management วนทบทวน ไม่จบแค่ติ๊กครบ | `notes-a`, `notes-b`, `nist-management` |
| `slide-06-write-a-risk-statement` | Write a scenario people can act on. | เขียนสถานการณ์ให้คนตัดสินใจต่อได้ | `notes-a`, `notes-b` |
| `slide-07-review-after-change` | A completed patch is evidence—not “risk zero.” | ติดตั้ง Patch แล้ว ต้องประเมิน Risk ต่อ | `notes-a`, `notes-b`, `nist-management` |
| `slide-08-communicate-for-a-decision` | A useful report leads to an informed decision. | รายงานที่ดี ช่วยให้ตัดสินใจอย่างมีข้อมูล | `notes-a`, `notes-b`, `nist-management` |

### L06 — Assessment & Prioritization

- Production: [lesson-d1-06-assessment](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json); title TH: การประเมินและจัดลำดับความเสี่ยง.
- Mapping: Domain1 / 1.2; 8 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `bceed13c2bd0428267bcf10a50d147ffb791bda68deeb48e2154aa7f5becd0f6`.
- Review record: [lesson-d1-06-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-06-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `isc2-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `notes-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `notes-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `nist-assessment` — [NIST SP 800-30 Rev.1 — Guide for Conducting Risk Assessments](https://csrc.nist.gov/pubs/sp/800/30/r1/final); `nist-annual` — [NIST IR 8286A Rev.1 — Identifying and Estimating Cybersecurity Risk for ERM (December 2025)](https://csrc.nist.gov/pubs/ir/8286/a/r1/final).
- Interaction: slide-07-test-the-estimate; 2 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-choose-the-method` | Choose a method that supports the decision. | เลือกวิธีประเมินให้ตอบโจทย์การตัดสินใจ | `notes-a`, `notes-b`, `nist-assessment` |
| `slide-02-define-the-criteria` | A “high” label needs a shared meaning. | คำว่า “สูง” ต้องมีเกณฑ์ร่วมกัน | `notes-a`, `notes-b`, `nist-assessment` |
| `slide-03-estimate-one-loss` | First estimate the loss from one event. | เริ่มจากประมาณความเสียหายหนึ่งเหตุการณ์ | `notes-a`, `notes-b` |
| `slide-04-annual-frequency` | ARO is a frequency, not a probability. | ARO คือความถี่ ไม่ใช่ความน่าจะเป็น | `notes-a`, `notes-b` |
| `slide-05-annualize-the-loss` | ALE converts the model to an annual basis. | ALE แปลงค่าประมาณให้อยู่บนฐานต่อปี | `notes-a`, `notes-b`, `nist-annual` |
| `slide-06-compare-like-with-like` | The larger single loss may not have the larger ALE. | เสียต่อครั้งมากกว่า อาจมี ALE น้อยกว่า | `notes-a`, `notes-b`, `nist-annual` |
| `slide-07-test-the-estimate` | Change an assumption. Watch the estimate move. | เปลี่ยนสมมติฐาน แล้วดูค่าประมาณเปลี่ยน | `notes-a`, `notes-b`, `nist-assessment` |
| `slide-08-prioritize-with-context` | Prioritize with evidence—not a number alone. | จัดลำดับด้วยหลักฐาน ไม่ใช่ตัวเลขอย่างเดียว | `notes-a`, `notes-b`, `nist-assessment` |

### L07 — Respond, Review & Communicate Risk

- Production: [lesson-d1-07-risk-response](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json); title TH: ตอบสนอง ทบทวน และสื่อสาร Risk.
- Mapping: Domain1 / 1.2; 10 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `4334114d9b8b857eb09ba34fb46d4220ee8a73cbaaa6f9cd4c068aa8fe8827cd`.
- Review record: [lesson-d1-07-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-07-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `isc2-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `notes-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `notes-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `nist-response` — [NIST SP 800-39 — Managing Information Security Risk](https://csrc.nist.gov/pubs/sp/800/39/final).
- Interaction: slide-08-clinic-decision; 3 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-four-response-paths` | Choose a response—not just a risk label. | เลือกวิธีตอบสนอง ไม่หยุดแค่ป้ายระดับ Risk | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-02-stop-or-reduce` | Avoid the activity—or reduce its risk. | หยุดกิจกรรม หรือทำให้เสี่ยงน้อยลง | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-03-share-the-consequences` | Insurance can share costs—not stop the attack. | ประกันช่วยแบ่งค่าเสียหาย ไม่ได้หยุดการโจมตี | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-04-authorize-acceptance` | Acceptance needs a decision—not silence. | Accept ต้องมีการตัดสินใจ ไม่ใช่ปล่อยเงียบ | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-05-risk-that-remains` | Controls change risk; they do not promise zero. | Control เปลี่ยน Risk แต่ไม่สัญญาว่าเหลือศูนย์ | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-06-use-organisational-limits` | Use the organisation’s direction and limits. | ใช้ทิศทางและขอบเขตที่องค์กรกำหนด | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-07-compare-treatment-value` | Compare value on a consistent basis. | เทียบความคุ้มค่าบนฐานเดียวกัน | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-08-clinic-decision` | The patch is installed. Can the risk be closed? | ลง Patch แล้ว ปิดเรื่อง Risk ได้หรือยัง? | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-09-monitor-and-reassess` | Monitor the response—and the changing context. | ติดตามทั้งวิธีตอบสนองและบริบทที่เปลี่ยน | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |
| `slide-10-communicate-the-decision` | Leave a record people can act on. | บันทึกให้คนรับช่วงลงมือทำต่อได้ | `isc2-outline`, `notes-a`, `notes-b`, `nist-response` |

### L08 — Governance & Applicable Requirements

- Production: [lesson-d1-08-governance](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json); title TH: Governance และข้อกำหนดที่ใช้กับองค์กร.
- Mapping: Domain1 / 1.3; 9 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `7db5b5cfe9f99ba34e52e8ab9a9afa36076cea54cc32099dc9c89c96f0b350ad`.
- Review record: [lesson-d1-08-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-08-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `isc2-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `notes-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `notes-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `nist-govern` — [NIST Cybersecurity Framework FAQs — governance role](https://www.nist.gov/cyberframework/faqs); `edpb-scope` — [EDPB — Data protection basics](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); `hhs-scope` — [US HHS — Covered Entities and Business Associates](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); `pci-standard` — [PCI SSC — PCI Data Security Standard](https://www.pcisecuritystandards.org/standards/pci-dss/); `pci-outsourcing` — [PCI SSC — Outsourcing all payment processing](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).
- Interaction: slide-08-ai-governance-intake; 3 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-govern-security` | Governance gives security a direction. | Governance กำหนดทิศทางให้ความปลอดภัย | `isc2-outline`, `notes-a`, `notes-b`, `nist-govern` |
| `slide-02-govern-and-manage` | Governing and managing have different jobs. | การกำกับดูแลกับการบริหารงานมีหน้าที่ต่างกัน | `isc2-outline`, `notes-a`, `notes-b`, `nist-govern` |
| `slide-03-sources-of-obligations` | Ask where the requirement comes from. | ถามก่อนว่าข้อกำหนดมาจากไหน | `isc2-outline`, `notes-a`, `notes-b`, `pci-standard` |
| `slide-04-establish-applicability` | Applicability depends on facts—not a logo. | Applicability ต้องดูข้อเท็จจริง ไม่ใช่ตรารับรอง | `isc2-outline`, `notes-a`, `notes-b`, `nist-govern` |
| `slide-05-bound-the-legal-examples` | GDPR and HIPAA have defined scopes. | GDPR และ HIPAA มีขอบเขตที่กำหนดไว้ | `isc2-outline`, `notes-a`, `notes-b`, `edpb-scope`, `hhs-scope` |
| `slide-06-payment-card-requirements` | Outsourcing payments does not erase every duty. | จ้างภายนอกทำการจ่ายเงิน ไม่ได้ลบทุกหน้าที่ | `isc2-outline`, `notes-a`, `pci-standard`, `pci-outsourcing` |
| `slide-07-compliance-and-security` | Compliance evidence is not a promise of perfect security. | หลักฐาน Compliance ไม่ได้รับประกันความปลอดภัยสมบูรณ์ | `isc2-outline`, `notes-a`, `notes-b`, `nist-govern` |
| `slide-08-ai-governance-intake` | The AI demo works. Is that enough to approve it? | AI สาธิตได้ผล แค่นี้อนุมัติใช้ได้หรือยัง? | `isc2-outline`, `notes-a`, `notes-b`, `nist-govern` |
| `slide-09-trace-requirements` | Turn requirements into accountable evidence. | เชื่อมข้อกำหนดกับงานและหลักฐานที่มีผู้รับผิดชอบ | `isc2-outline`, `notes-a`, `notes-b`, `nist-govern` |

### L09 — Frameworks & Security Documents

- Production: [lesson-d1-09-frameworks](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json); title TH: Frameworks และเอกสารความปลอดภัย.
- Mapping: Domain1 / 1.3; 10 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `f50f5c787c8a81f4db84796e564c39128cf07c68d36ddf2d1ff38bc679cea76d`.
- Review record: [lesson-d1-09-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-09-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `ref-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `ref-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `ref-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `ref-nist` — [NIST Cybersecurity Framework FAQs](https://www.nist.gov/cyberframework/faqs); `ref-iso` — [ISO/IEC 27001 — ISMS requirements](https://www.iso.org/standard/27001); `ref-cert` — [ISO — Certification](https://www.iso.org/certification.html); `ref-cis` — [CIS Critical Security Controls](https://www.cisecurity.org/controls).
- Interaction: slide-09-classify-the-purpose; 4 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-framework-structure` | A framework gives security work a structure. | Framework ช่วยจัดโครงสร้างงานความปลอดภัย | `ref-outline`, `ref-a`, `ref-b`, `ref-nist` |
| `slide-02-nist-outcomes` | NIST CSF describes outcomes—not your exact configuration. | NIST CSF บอกผลลัพธ์ ไม่ได้กำหนดค่าระบบแทนองค์กร | `ref-outline`, `ref-a`, `ref-b`, `ref-nist` |
| `slide-03-iso-isms` | ISO/IEC 27001 specifies requirements for an ISMS. | ISO/IEC 27001 กำหนดข้อกำหนดสำหรับ ISMS | `ref-outline`, `ref-a`, `ref-b`, `ref-iso`, `ref-cert` |
| `slide-04-cis-safeguards` | CIS Controls turns priorities into practical safeguards. | CIS Controls ช่วยจัดลำดับ Safeguards ที่นำไปทำได้ | `ref-outline`, `ref-a`, `ref-b`, `ref-cis` |
| `slide-05-policy-direction` | Policy states the organisation’s direction. | Policy กำหนดทิศทางที่องค์กรต้องการ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-06-standard-requirement` | A standard makes a requirement specific. | Standard ทำให้ข้อกำหนดชัดเจนตรวจได้ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-07-procedure-steps` | A procedure makes the work repeatable. | Procedure ทำให้งานทำซ้ำได้อย่างถูกลำดับ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-08-guideline-advice` | Guidelines help people choose a good approach. | Guideline ช่วยเลือกแนวทางที่เหมาะสม | `ref-outline`, `ref-a`, `ref-b` |
| `slide-09-classify-the-purpose` | Which document function does this statement serve? | ข้อความนี้ทำหน้าที่เป็นเอกสารแบบใด? | `ref-outline`, `ref-a`, `ref-b` |
| `slide-10-connect-and-review` | Keep direction, requirements and steps aligned. | ให้ทิศทาง ข้อกำหนด และขั้นตอนสอดคล้องกัน | `ref-outline`, `ref-a`, `ref-b` |

### L10 — Control Categories

- Production: [lesson-d1-10-control-categories](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json); title TH: ประเภทของมาตรการความปลอดภัย.
- Mapping: Domain1 / 1.4; 8 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `76e2bedc250b55ea92799ab672fd6112825d7d50e9918926691d3dbd0a8d02c0`.
- Review record: [lesson-d1-10-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-10-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `ref-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `ref-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `ref-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `ref-nist` — [NIST SP 800-12 Rev.1 — An Introduction to Information Security](https://csrc.nist.gov/pubs/sp/800/12/r1/final).
- Interaction: slide-07-classify-the-mechanism; 3 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-category-and-purpose` | Category asks how a control is implemented. | Category ถามว่ามาตรการทำงานผ่านอะไร | `ref-outline`, `ref-a`, `ref-b` |
| `slide-02-technical-enforcement` | Technical controls apply rules through technology. | Technical Controls ใช้เทคโนโลยีบังคับกฎ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-03-administrative-direction` | Administrative controls organise people and decisions. | Administrative Controls จัดคน กระบวนการ และการตัดสินใจ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-04-physical-protection` | Physical controls protect spaces and tangible assets. | Physical Controls ปกป้องพื้นที่และทรัพย์สินที่จับต้องได้ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-05-course-labels` | Read the course labels without adding an official category. | อ่านคำในคอร์สให้เข้าใจ โดยไม่เพิ่มหมวดทางการ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-06-one-goal-three-controls` | One records service needs complementary controls. | บริการข้อมูลหนึ่งระบบต้องใช้มาตรการที่เสริมกัน | `ref-outline`, `ref-a`, `ref-b`, `ref-nist` |
| `slide-07-classify-the-mechanism` | Classify the review—not the ticketing tool. | จัดประเภทงานทบทวน ไม่ใช่เครื่องมือ Ticket | `ref-outline`, `ref-a`, `ref-b` |
| `slide-08-select-and-check` | Choose the mechanism, assign an owner, verify the result. | เลือกกลไก มอบหมายเจ้าของ แล้วตรวจผล | `ref-outline`, `ref-a`, `ref-b`, `ref-nist` |

### L11 — What Is the Control Doing?

- Production: [lesson-d1-11-control-functions](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json); title TH: Control นี้ทำหน้าที่อะไร?.
- Mapping: Domain1 / 1.4; 9 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `6e40ae9ffba7eab447a79fbfe7afb36d6d63d9c2b68f6320c230f1cc3be33443`.
- Review record: [lesson-d1-11-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-11-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `ref-outline` — [ISC2 CC Exam Outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `ref-a` — [User Domain 1 Summary (Source A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `ref-b` — [User Domain 1 Course Notes (Source B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `ref-compensation` — [NIST glossary — Compensating controls](https://csrc.nist.gov/glossary/term/compensating_controls); `ref-baselines` — [NIST SP800-53B — Control Baselines](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); `ref-recovery` — [NIST glossary — Recovery](https://csrc.nist.gov/glossary/term/recovery).
- Interaction: slide-08-context-changes-function; 3 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-category-and-function` | One control can have a category and several functions. | Control เดียวมีทั้ง Category และหลาย Function ได้ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-02-preventive` | Preventive controls act before an unwanted action succeeds. | Preventive Controls ทำงานก่อนการกระทำที่ไม่ต้องการสำเร็จ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-03-detective` | Detective controls make relevant activity discoverable. | Detective Controls ช่วยให้ค้นพบกิจกรรมที่เกี่ยวข้อง | `ref-outline`, `ref-a`, `ref-b` |
| `slide-04-corrective-and-recovery` | Fix the problem—and restore trusted operation. | แก้ปัญหา และฟื้นการทำงานที่เชื่อถือได้ | `ref-outline`, `ref-a`, `ref-b`, `ref-recovery` |
| `slide-05-deterrent` | Deterrent controls aim to discourage the attempt. | Deterrent Controls มุ่งยับยั้งไม่ให้เริ่มพยายาม | `ref-outline`, `ref-a`, `ref-b` |
| `slide-06-directive` | Directive controls communicate the expected action. | Directive Controls สื่อสิ่งที่คาดหวังให้ปฏิบัติ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-07-compensating` | A compensating control must address the original protection need. | Compensating Control ต้องตอบความต้องการปกป้องเดิม | `ref-outline`, `ref-a`, `ref-b`, `ref-compensation`, `ref-baselines` |
| `slide-08-context-changes-function` | The same camera can support different functions. | กล้องเดียวสนับสนุนหน้าที่ต่างกันได้ | `ref-outline`, `ref-a`, `ref-b` |
| `slide-09-reason-from-effects` | Explain the effect and the evidence behind the label. | อธิบายผลและหลักฐานที่รองรับชื่อหน้าที่ | `ref-outline`, `ref-a`, `ref-b` |

### L12 — Professional Conduct & Ethical Decisions

- Production: [lesson-d1-12-professional-conduct](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json); title TH: ความประพฤติวิชาชีพและการตัดสินใจเชิงจริยธรรม.
- Mapping: Domain1 / 1.5; 10 slides; published revision1; TH/EN; Info/reading present.
- SHA-256 at audit entry: `ada5888ff7a0599d6c3e458844924cdc607d2751969a1999e3a04822e9f2f7e1`.
- Review record: [lesson-d1-12-implementation.md](../../../docs/plans/isc2-cc-2026/lesson-d1-12-implementation.md). Technical/bilingual fields identify assistant self-review with human acceptance pending.
- Sources: `ref-outline` — [ISC2 CC outline — September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); `ref-a` — [User Domain 1 Summary (A)](../../../ISC2 Update 2026/Domain 1/D1 sum.md); `ref-b` — [User Domain 1 Course Notes (B)](../../../ISC2 Update 2026/Domain 1/Domain 1.md); `ref-ethics` — [ISC2 Code of Ethics](https://www.isc2.org/ethics); `ref-glossary` — [ISACA interactive glossary — Due care / Due diligence](https://www.isaca.org/resources/glossary).
- Interaction: slide-09-reporting-decision; 3 substantive states/language; source details in the interaction register above.

| Slide ID | English title | Thai title | Source IDs |
|---|---|---|---|
| `slide-01-access-and-authority` | Technical access is not permission for every purpose. | เข้าถึงทางเทคนิคได้ ไม่ได้แปลว่าทำได้ทุกวัตถุประสงค์ | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics` |
| `slide-02-professional-conduct` | Professional conduct makes trust observable. | ความประพฤติวิชาชีพต้องเห็นได้จากการทำงาน | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics` |
| `slide-03-reasonable-care` | Due care means reasonable protection in context. | Due Care คือการปกป้องที่สมเหตุสมผลตามบริบท | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics`, `ref-glossary` |
| `slide-04-investigate-and-review` | Due diligence builds and refreshes the evidence. | Due Diligence สร้างและทบทวนหลักฐานให้ทันสถานการณ์ | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics`, `ref-glossary` |
| `slide-05-scan-patch-verify` | Investigate → protect → verify → keep reviewing. | ตรวจสอบ → ปกป้อง → ยืนยันผล → ทบทวนต่อ | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics`, `ref-glossary` |
| `slide-06-four-canons` | Four canons frame professional judgment. | หลักจริยธรรมสี่ข้อช่วยกำกับการตัดสินใจ | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics` |
| `slide-07-public-trust-and-honesty` | Protect people without distorting the finding. | ปกป้องผู้คนโดยไม่บิดเบือนข้อค้นพบ | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics` |
| `slide-08-competent-service` | Serve principals competently—and strengthen the profession. | บริการอย่างมีความสามารถและส่งเสริมวิชาชีพ | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics` |
| `slide-09-reporting-decision` | A deadline does not justify hiding a serious finding. | เส้นตายไม่ใช่เหตุให้ปกปิดข้อค้นพบร้ายแรง | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics` |
| `slide-10-defensible-decisions` | Make the decision explainable—and review the result. | อธิบายการตัดสินใจได้ และตรวจผลที่เกิดขึ้น | `ref-outline`, `ref-a`, `ref-b`, `ref-ethics` |
