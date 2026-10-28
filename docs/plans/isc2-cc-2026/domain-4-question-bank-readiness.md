# Domain 4 - Question Bank Readiness Assessment

Task 55 | Analysis only | 2026-10-28 (Asia/Bangkok)

Companion reports: [source inventory](domain-4-source-inventory.md), [official matrix](domain-4-objective-coverage-matrix.md), [academic findings and research register](domain-4-academic-content-gap-analysis.md).

## Readiness verdict

**Ready for human review of the analysis and a subsequent knowledge-curation task; not ready for unrestricted Domain 4 question generation.** The three numbered objectives are verified. The course supplies substantial teaching for all three, but the whole-objective judgments are **4.1 Partial / 4.2 Partial / 4.3 Partial**. Bluetooth security and the separate ISC2 AI context lack substantive teaching. The academic report's F01-F20 register identifies claims requiring correction, qualification or further verification.

Several topic families can support later original practice items after the relevant findings are resolved. This does not authorize drafting now. No question quota, question IDs, stems, answer options, vocabulary entries or production changes are created in Task 55. Existing practice prompts in A/B are source artifacts, not newly approved question-bank content.

## Existing structure and standards reviewed

Read-only inspection covered the [writing guidelines](question-writing-guidelines.md), [question-bank plan](question-bank-plan.md), [verification plan](verification-plan.md), [staging template](../../../content/isc2-cc-2026/templates/question-template.md), Domain 1-3 staging headers/examples, [Domain 1 review export](../../reviews/isc2-cc-2026-domain-1-review.md), [Domain 2 phase-7 framework](../../../content/isc2-cc-2026/sources/domain-2/phase-7/academic-revalidation-report.md), and [Domain 3 review/integration record](../../../ISC2%20Update%202026/Domain%203/question-bank-review.md). Runtime modules were read and imported without mutation to verify counts, identifiers, actual fields and overlapping concepts.

| Bank/version | Current observed structure | Implication for future work |
| --- | --- | --- |
| Pre-2026 (`versions/2026`) | 583 items; domain counts 142 / 65 / 93 / 156 / 127 | Frozen preservation boundary. Network topics already exist, so later semantic comparison must include all 583 items, not just the updated bank. |
| Updated Domain 1 (`next-bank`) | 24 items, IDs 584-607 | Existing bilingual/structured-explanation pattern; source-linked staging and a complete review export. |
| Updated Domain 2 (`next-bank`) | 39 items, IDs 608-646 | Its 26-item phase-7 candidate report is historical, not the current production count. Governance/continuity/metrics decisions already have coverage. |
| Updated Domain 3 (`next-bank`) | 23 items, IDs 647-669 | Lifecycle, authorization models and anomalous-sign-in decisions already have coverage; human academic/bilingual approval remains explicitly pending in the module/review. |
| Updated Domain 4 and 5 | Empty exported arrays | Domain 4 remains at zero after this analysis. No allocation or activation is performed. |

Observed current runtime fields: `id`, `dom`, `question`, `options`, `correct_idx`, `explanation`, `short_explanation_en`, `question_th`, `options_th`, `explanation_th`, and **`explanation_detail`**. All 86 updated Domain 1-3 items contain the structured detail and English/Thai fields inspected; the structure includes a correct rationale in each language and individually lettered incorrect-option rationales. This is a structural observation, not a new semantic or translation certification of those banks. Objective IDs, claim-level sources, review judgments and opportunity reasoning belong in the audit/staging records unless the runtime contract is separately changed.

Historical planning inconsistencies must not become authoring rules: older templates recommend 1001+ IDs, leave D4 numbering pending and describe empty D2/D3 staging; actual production uses 584-669. Domain 1's staging header also retains a 26% weight while the dated outline says 24%. Use current files and the verified outline for a later authorized task; do not silently repair those historical files here. No next ID is reserved by this report. A mock exam's sampling allocation is not a target size for a domain question bank.

## Academic workflow to carry forward

1. **Curate evidence first.** Record each usable claim's official parent objective, T/A/B lines, exact slide, primary corroboration, inference status and limitations. Resolve the applicable F findings before using the claim in a rationale. Keep ambiguous diagrams and unsupported assertions out of accepted knowledge; retain the originals unchanged.
2. **Define distinct learning decisions.** Select topic families according to scope, importance and gaps. Different wording or another company name is not a new cognitive target. No arbitrary minimum or fixed bank quota follows from this analysis.
3. **Write and independently re-solve English items in a later authorized task.** One defensible best answer must follow from an explicit actor, objective, policy, topology/service model and operational constraints. FIRST needs an established process stage/authority; a broad rule from an old example cannot supply a universal sequence.
4. **Review all options and explanations.** Use plausible adjacent controls and realistic mistakes. Keep option grammar, length and specificity comparable, avoid keyword/absolute clues, and explain each distractor's precise inadequacy. Keep letters, `correct_idx`, flat explanations and structured rationales synchronized.
5. **Localize and review bilingual meaning.** Preserve option correspondence and qualifiers such as BEST/FIRST/PRIMARY; use consistent networking acronyms and Thai technical wording. Confirm subject, negation, conditions and responsibility boundaries in both languages. Fluent-looking text or matching arrays does not prove semantic parity.
6. **Compare semantics and inspect key patterns.** Screen candidate-to-candidate, updated D1-D3 and the legacy 583, then manually compare the actual decision being tested. Similarity scores only prioritize review. Inspect answer positions and accidental clues; even key distribution does not establish psychometric validity or eliminate guessing.
7. **Require human academic/bilingual review before advancement.** Keep accepted, corrected, rejected and deferred claims/items traceable. Later integration requires fresh schema, identifier, explanation, loading/session and integrity checks appropriate to changed files. Task 55 stops before drafting or integration.

The older guidelines' shortcuts also require judgment: multiple viable options still need exactly one best answer; technical errors need not be forced into BEST choices. Generic ordering examples are not universal incident response instructions. Reuse the review framework rather than copying every historical assertion or claiming empirical item quality without learner data.

## Topic opportunities and conditions

This table specifies assessment targets only. **Conceptual**, **scenario**, **best-answer**, **control selection**, **troubleshooting/interpretation**, and **misconception discrimination** describe possible future formats; none is an actual question or an assertion about live ISC2 exam items.

| Topic / official parent | Source support | Suitable cognitive work | Readiness condition and plausible confusion |
| --- | --- | --- | --- |
| Layer/model and protocol behavior / 4.1 | T:L5-L41; S02-S06; A section 3; B OSI | Conceptual comparison; simple fault-location and encapsulation interpretation | Resolve F01-F02. Separate layer mapping, addressing and protocol reliability. Avoid rigid TLS placement and universal header or delivery claims. |
| Address-space and coexistence rationale / 4.1 | T:L43-L67; S07-S12 | Conceptual interpretation; addressing/translation versus protection; broad dual-stack troubleshooting | Resolve F03-F05. Distinguish conservation, routing/allocation and encryption; no unnecessary classful arithmetic or subnet quota. |
| VPN and firewall placement / 4.1 | T:L69-L79; S13-S14 | Scenario; control selection for authorized remote or site connectivity; host versus network boundary | Supported foundational opportunity. A tunnel does not fix compromised endpoints or remove resource authorization; a firewall does not inherently encrypt a session. |
| Service exposure and permitted flows / 4.1 | T:L87-L107; S17-S21; A/B port tables | Best-answer exposure reduction; simple source/destination/port or application-rule interpretation | Resolve F06-F08,F10; supplement stateful/application behavior. Distinguish a listening service, vulnerability and actual exploit. Exact defaults are clues, not guarantees. |
| Wi-Fi protection / 4.1 | T:L79-L85; S16 | Best-answer control selection under supported-device and policy constraints | Resolve F09-F10 and supplement authentication/threat context. Do not equate hidden SSID, MAC allowlisting, standards generation or advertised speed with strong security. |
| Bluetooth / 4.1 | Only A:L32 and S26 icon | Future conceptual, pairing/exposure and control decisions | **Hold:** no substantive local security lesson. Add reviewed authoritative teaching before drafting. No attack-name list is assumed mandatory. |
| Embedded/ICS/IoT constraints / 4.1, applied architecture 4.2 | T:L107-L125,L173; S22-S27,S37 | Scenario; best-answer mitigation with safety/uptime constraints; select isolation, maintenance or credential controls | Fundamentals supported. Supplement procedural claims using OT guidance; avoid immediate reboot/patch assumptions or treating all embedded devices as internet-connected. |
| Segmentation/zone/DMZ traffic paths / 4.2 | T:L127-L149; S28-S33; A sections 6-8; B sections 1-3 | Scenario; control selection; simple topology/allow-deny interpretation | Resolve F12-F13. Public reachability does not permit unrestricted internal access; public services and private data need policy-defined paths. |
| VLAN versus workload granularity / 4.2 | T:L151-L163; S34-S35; A sections 9-10; B sections 4-5 | Conceptual comparison; workload communication policy selection; troubleshoot overbroad inter-VLAN permissions | Resolve F11,F15; distinguish broadcast-domain separation from an effective access policy and subnet-wide from workload-level control. |
| Defense in depth and Zero Trust / 4.2 | T:L165-L177; S36,S38-S39; A sections 11,14; B sections 6,8 | Scenario; diagnose location-only trust or reliance on one control; select contextual resource enforcement | Resolve F14. Segmentation, identity verification and multiple control layers overlap without being interchangeable. Avoid another bare rationale identical to D1 Q605. |
| Cloud properties and service responsibilities / 4.3 | T:L177-L205; S41-S49; A sections 15-17; B sections 9-11 | Conceptual discrimination; scenario; best-answer allocation of a specified configuration, code or maintenance duty | Resolve F16-F17,F20. Distinguish self-service from elasticity/metering, managed platform from secure customer code, and provider mechanisms from customer settings. |
| Deployment fit, integration and risk / 4.3 | T:L207-L225; S50-S55; A section 18; B section 12 | Scenario; best-answer fit under explicit exclusivity/integration/governance needs; model-axis discrimination | Resolve F18-F20. Public does not mean public data; private does not prove compliance; multi-cloud is not automatic failover. Include alternatives only where requirements establish one best fit. |
| AI traffic, development isolation and cloud workloads / existing 4.1-4.3 context | Official ISC2 AI commentary; no substantive local teaching | Future anomaly interpretation/reporting, control selection and responsibility application | **Hold until supplemented and reviewed.** An anomaly is a signal, not proof; AI-aware defenses do not replace foundational policy or human authority. Avoid duplicating D3 Q668's anomalous-login decision. |

## Topic priorities without a quota

**Priority 1 - Close scope and accuracy gaps.** Supplement Bluetooth and the official AI context; correct IPv6 security, port/VLAN numbers and wireless-control overstatements. These address missing required teaching and misconceptions that could invert an answer key. Preserve full 4.1 transcript/slide depth because both summaries omit it.

**Priority 2 - Develop applied architecture and cloud reasoning after curation.** Focus on permitted paths, public-service separation, workload boundaries, internal location versus access authorization, service-specific customer/provider duties, and service/deployment distinctions. These span core concepts across the verified objectives and offer useful decisions beyond labels. Correct DMZ drawings, layered-control guarantees and the hybrid definition first.

**Priority 3 - Consolidate supported foundations and operational limits.** Layer/protocol interpretation, protected connectivity, cloud characteristic discrimination, constrained-device lifecycle and ICS safety can support distinct foundational items. Add detailed troubleshooting only when evidence provides enough state to justify a conclusion. Extra protocol trivia, historical class tables, current Wi-Fi speed tables, port knocking and vendor product naming are lower priority than official scope and defensible reasoning.

The 21.3% domain weight gives broad relevance but no official within-domain topic weights or item counts. The ordering above is an analyst recommendation, based on conceptual dependence, evidence gaps and decision value.

## Existing-bank overlap requiring later semantic review

| Existing content inspected | Overlap risk for Domain 4 | Preserve a different assessment target |
| --- | --- | --- |
| Domain 1 Q601, Q605 | Technical control classification and defense in depth | Evaluate actual traffic boundaries, enforcement or failure conditions rather than another definition/layer-count rationale. |
| Domain 1 Q589, Q593, Q607 | Cloud privacy role, risk-change reassessment and vendor due diligence | Keep cloud model/control responsibility distinct from privacy role or governance-process identification. |
| Domain 2 Q627, Q645 | Firewall block-count metrics and audience-specific monitoring/reporting | Evaluate what an observed flow/control means rather than another governance metric selection. |
| Domain 2 Q636, Q643 | Residual risk after safeguards and VPN credential reuse | Keep network architecture and protected-path decisions distinct from risk acceptance or password awareness. |
| Domain 3 Q664, Q668 | Attribute/context authorization and AI-assisted anomalous sign-in validation | Apply network enforcement/data-flow or workload isolation reasoning; another office location/device posture or alert-only story may still duplicate the decision. |
| Legacy Domain 4 (156 items), plus all other legacy domains | Existing network fundamentals and controls may overlap strongly | Later candidate comparison must inspect concept and required reasoning, not just stem wording. No new candidates exist, so no Task 55 duplicate-pass claim is made. |

## Next-task acceptance conditions and stopping boundary

A subsequent knowledge-curation task should produce a human-reviewable, source-linked resolution of the relevant F findings; teaching for Bluetooth and AI context; a retained/excluded/supplemental claim register; and revised coverage judgments grounded in the curated evidence. Original media gaps can remain disclosed rather than being guessed away. Some deeper product/protocol extensions may remain explicitly deferred if not necessary for CC-level decisions.

Only after human review and a separate instruction should question drafting begin. That task should recheck current bank conventions and IDs, build distinct targets, author original English content, review distractors/rationales and semantic duplicates, localize Thai, and obtain academic/bilingual sign-off. It should set scope according to usable evidence rather than a fixed quota. Vocabulary remains a separate task after question development.

## Task 55 deliverables and preservation record

Four documents created in the existing planning package:

1. [Domain 4 Source Inventory](domain-4-source-inventory.md): 58 exact files, relationships and all slide observations.
2. [Official Objective Coverage Matrix](domain-4-objective-coverage-matrix.md): verified numbering, parent objectives, topic evidence and gaps.
3. [Academic Content and Gap Analysis](domain-4-academic-content-gap-analysis.md): supported concepts, F01-F20 findings, research and source/inference boundaries.
4. This readiness assessment: existing conventions, conditional opportunities, priorities and next-task gates.

The package [README](README.md) receives only a linked Task 55 index note. Historical source manifests, D4 staging scaffolds and old pending-numbering statements are documented rather than silently rewritten. No original course file is renamed, copied into staging or edited. No question, vocabulary, runtime, UI/CSS or user work is changed. No browser automation, production integration, commit or question generation is part of this task.

Verification on 2026-10-28: a SHA-256 comparison against the session-start inventory of **2,835 existing tracked/nonignored files** found **2,834 byte-identical files**, no missing files, and only the intended planning README edit. Exactly the four analysis reports above are new repository files. All **58 original Domain 4 files** match their recorded hashes, and all **55 slide IDs** resolve to their exact inventory entries. Local report links, Markdown table column counts, finding IDs F01-F20 and unresolved-marker checks passed; the scoped `git diff --check` passed. The existing README's sole change is the Task 55 index note. These checks preserve pre-existing modified/untracked work rather than comparing it to an old clean checkout. No browser automation or application test execution was needed for documentation-only changes.

Read-only module inspection confirmed the legacy **583** items and updated D1-D3 **24 / 39 / 23** counts, with D4/D5 at zero. No new academic correctness, translation certification or empirical item-quality claim follows from these structural and preservation checks. Human review of the analysis remains the next gate.
