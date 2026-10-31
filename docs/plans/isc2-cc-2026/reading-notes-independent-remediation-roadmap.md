# Independent Reading Notes remediation roadmap

Date: 2026-10-31. **Proposal only. No implementation authorized or performed by this audit.** The user will approve tasks individually. Preserve concurrent Learning Slides work, unrelated features and the existing reading-progress schema.

Use the [finding register](reading-notes-independent-findings-register.md) for exact evidence and [coverage matrix](reading-notes-independent-coverage-matrix.md) for subsection applicability. Forty confirmed defects and 32 qualifications/recommendations have different evidentiary status. Priority does not convert a qualification into a proven error.

## Recommended delivery order

1. Correct the final Identification shortcut and the clearest academic misconceptions in small domain batches.
2. Repair reader lifecycle/location restoration and mobile keyboard access; these affect every study session.
3. Make desktop/tablet diagrams legible and repair the clipped cloud legend.
4. Correct measured contrast and language metadata.
5. Resolve the remaining GRC cell-fit problem and test one other narrow comparison pattern.
6. Refine selected semantic teaching structures and optional current-guidance examples.
7. Make product preference decisions about progress, next reading, English editions and optional depth.

Keep each task reviewable in isolation. A task is not complete merely because existing string/unit tests pass. Validate the actual learner trigger, with the same content and layout that failed. Academic/translation tasks need a source-based before/after review; layout tasks need real browser images and measurements. Do not add tests that merely repeat new constants.

## 1. Academic correctness

| Proposed task | Finding IDs | Bounded work | Evidence needed for acceptance |
|---|---|---|---|
| AC-01 — repair identity summary | D1-F01 | Split claiming identity from proving it in the final revision material; reconcile main prose and generated diagram. | A beginner can distinguish username/claim, proof, permissions and logs in short contrasting situations. |
| AC-02 — MFA and threat relationships | D1-F02/03/04/06 | Separate independent factors from location/context; fix external-only threat and reversed Thai vulnerability; bound logging versus non-repudiation. | Primary-reference review plus Thai/English meaning review; password+location must not be taught as sufficient MFA. |
| AC-03 — risk economics and provenance | D1-F07/08; D1-N04 | Align desktop/mobile cost-benefit logic around expected loss reduction; repair NIST attribution; label simplified risk equations. | Recompute one case where cost is below total ALE but above savings; state model units/assumptions and legal/safety qualifications. |
| AC-04 — legal/ethical statements | D1-F05/09/10; D1-N05/08 | Correct GDPR citizenship rule and unsupported word-order priority; qualify jurisdiction-dependent liability and unsourced examples. | Current primary references; traceable course citation if retaining strict canon precedence. No blanket legal conclusions. |
| AC-05 — Domain 2 recovery and measurement | D2-02/04/06/08; qualified D2-01/05/07/10/11/12 | Correct confirmed MTD/metric/DR Thai issues first. Review qualified RTO, MTTR, phishing nesting, exercise/site/storage wording separately. | One timeline with defined RTO/RPO/MTD and reprocessing; one measure serving KPI/KRI by purpose; consistent DR versus DRP translation. |
| AC-06 — IAM taxonomy/version | D34-01/02/11/15 | Correct PR.AA, include operation/action in ABAC, remove MAC guarantees and distinguish LDAP from a product. | Compare read versus delete under one ABAC policy; reconcile lesson, diagram, comparison and scenario rationale. |
| AC-07 — network fundamentals | D34-03/04/09/10/12/16 | Correct ARP layer, interface identifier, mask-dependent broadcast, link-local range, SSID explanation and socket abstraction. | RFC-based review and a /23 versus /24 broadcast example; distinguish modern identifiers from historical MAC derivation. |
| AC-08 — cloud responsibility/provider scope | D34-05/06/07/13; qualified D34-14/Q14 | Separate governance/accountability from service operation; label AWS SG/NACL example; qualify egress and scale-to-zero. | Cross-check named AWS/Azure examples, a managed IAM/storage example, and the existing public-sharing/PaaS scenarios. |

Do not silently change scenario answer keys when only reasoning needs qualification. The audit found the intended answers broadly reasonable. D1-N08 and course-specific MTTR/lifecycle claims need provenance, not automatic reversal. Keep formula arithmetic that already checks out.

## 2. Broken rendering and tables

| Proposed task | Finding IDs | Bounded work | Acceptance |
|---|---|---|---|
| RT-01 — GRC padded cell sizing | RN-I-009 | Account for actual keyword width and padding at the 780px table size, or allow word-boundary wrapping. | Inspect 1920/1366/1024/768/390/375/320, both themes; last word and padding remain inside the last cell; document actual scroll behavior. |
| RT-02 — one mobile comparison pilot | RN-I-014 | Select D3 model matrix or D1 document hierarchy, preserving row/column relationships. Compare contained table against a carefully structured narrow alternative. | A learner can compare the same attribute across items without losing labels. Keep compact tables unchanged. |
| RT-03 — currency parsing consistency | RN-I-010; RN-I-011 qualification | Remove raw currency escape leakage through a narrowly defined parser/source policy. Review offline math labels separately. | Connected/offline expressions and currency remain distinct; no raw backslashes in rendered currency; no damaging global math replacement. |

Horizontal table scrolling is not automatically wrong. Avoid a universal card conversion, arbitrary width inflation or smaller text as the fix. RT-02 is a human-reviewed pattern trial before applying it elsewhere.

## 3. Typography and readability

| Proposed task | Finding IDs | Bounded work | Acceptance |
|---|---|---|---|
| TY-01 — readable diagram breakpoint | RN-I-001 | Change representation according to available component width or a justified breakpoint; prioritize 1024px and dense D3/D4 diagrams. | Measure effective on-screen label size after SVG transforms, not the authored font-size attribute. Inspect both themes and sidebar states. |
| TY-02 — small-text contrast | RN-I-008 | Correct scenario answer labels, muted supporting text and white-on-color diagram labels. | Settled-theme contrast ≥4.5:1 for normal-size instructional text; use actual SVG fill/background paints. Preserve role labels so color is not the sole signal. |
| TY-03 — prose measure and rhythm pilot | RN-I-004/014; source-ledger education notes | Restore usable navigation first, then review one English-heavy and one Thai-heavy section for line length, density and spacing. | Keep prose comfortable without shrinking comparisons; evaluate actual reading, not only pixel economy. Human preference approval before broad typography changes. |

Keep the current body/lead sizes and Thai font unless evidence shows a specific problem. Do not increase every gap, add decorative gradients/icons or introduce a new card system.

## 4. Semantic content presentation

| Proposed task | Finding IDs | Bounded work | Acceptance |
|---|---|---|---|
| SP-01 — function versus timing | D1-N02 | Retain useful overlap caption; make control purpose primary, and allow detection/correction outside rigid stages. | Learner correctly classifies retrospective CCTV and correction during an incident. Numbering/arrows do not imply a mandatory workflow. |
| SP-02 — measurement relationships | D2-04 | Represent KPI/KRI as purpose-specific measures and dashboard/scorecard/report as potentially overlapping communication forms. | No hierarchy that turns “metric” into exclusively raw data or requires one mandatory reporting pipeline. |
| SP-03 — bounded IAM workflows | D34-Q1/Q2/Q3 | Label provisioning/role-first as examples, distinguish disable/lock, and connect relevant assurance concepts. | Reasoning uses approvals, event triggers and resource needs; avoids blindly selecting “define roles” for every “first” question. |
| SP-04 — selective reasoning practice | D1 source review; D2-09; D1-N01 | Add a small calculation/choice or current AI example only where it teaches a missing relationship. Reduce redundant definition repetition where possible. | Each addition has a stated learning purpose and source; no word-count quota, fabricated exam-frequency claim or large new chapter. |

Paragraphs remain the default for explanation. Bullets should group unordered related items; numbering should communicate real order or explicit enumeration. A timeline belongs to recovery windows; a comparison belongs to access models; parallel control categories do not require a sequence.

## 5. Diagrams and visualization

| Proposed task | Finding IDs | Bounded work | Acceptance |
|---|---|---|---|
| DV-01 — clipped legend | RN-I-018 | Wrap/reposition cloud CSP legend or move the legend to semantic HTML; coordinate terms with AC-08. | All label bounds stay within the visible SVG/HTML region at desktop/tablet sizes; no page-overflow-only acceptance. |
| DV-02 — layered protection relationship | D1-N03; D34-Q12 | Make D1's shared protected asset/independent layers evident; label D4 tiers as an example and DMZ port labels as sample rules. | Arrows, containment and labels encode relationships accurately; preserve complementary controls and operational examples. |
| DV-03 — mobile diagram density | RN-I-001; source ledgers | Trim repeated banners/badges and choose a meaningful phone representation per diagram. Keep the readable existing mobile text. | Desktop/mobile versions communicate the same concept; do not replace every spatial relationship with an ordered card list. |

Review these specific assets rather than commissioning new images for all content: cloud responsibility matrix/legend, ABAC comparison, control timing, defense layers, risk savings, BC/DR translation and measurement architecture. Existing vector/code-native assets can be repaired without a new illustration pipeline.

## 6. Navigation and responsive UX

| Proposed task | Finding IDs | Bounded work | Acceptance |
|---|---|---|---|
| NX-01 — route lifecycle | RN-I-005 | Add explicit reader disposal for observers/listeners/timers on every route exit/remount. | Repeated cross-domain hash Back/Forward keeps one window scroll/resize handler; inactive-domain stored offsets remain unchanged. |
| NX-02 — location/scrollspy | RN-I-003 | Observe real topic headings and define explicit link versus saved offset precedence within the existing schema. | In all four domains, cold link, 420px additional scroll, reload, leave/re-enter and domain switch restore the intended location; active subsection matches. |
| NX-03 — reachable navigation | RN-I-004 | Correct sticky scrolling boundary and review phone access to the drawer after long reading. | Long page at y5000 retains a reachable section navigation path; no empty desktop rail caused by off-screen navigation. |
| NX-04 — optional learning-flow decisions | RN-I-017 | Decide separately whether to add completion history, next-subsection action or language editions. | Product owner specifies meaning and storage implications before implementation. No progress schema change is included in NX-01/02. |

NX-01 and NX-02 are related but independently reviewable: dispose stale owners first, then verify location logic with fresh and reused routes. Avoid combining them with unrelated routing rewrites.

## 7. Accessibility and maintainability

| Proposed task | Finding IDs | Bounded work | Acceptance |
|---|---|---|---|
| AM-01 — mobile drawer keyboard model | RN-I-006 | Remove closed contents from traversal; implement state, focus entry/return, Escape and appropriate overlay behavior. | Real keyboard Tab/Shift+Tab/Escape journeys with no invisible focus targets or obscured background controls. |
| AM-02 — language and structure | RN-I-007/013 | Mark Thai/English passages appropriately and refine heading/anchor conventions. | Inspect accessibility tree and one native screen-reader voice-switching example; preserve table header relationships and scenario grouping. |
| AM-03 — motion and touch | RN-I-015 | Apply reduced-motion behavior consistently; review target dimensions and spacing. | Preference suppresses drawer/navigation animation; evaluate WCAG 2.5.8 spacing/equivalent exceptions rather than imposing a false 44px AA rule. |
| AM-04 — parser trust contract | RN-I-012 | Document/enforce trusted repository-content assumption; sanitize attributes/protocols only if an untrusted ingestion path exists. | Threat-model the actual input path. Do not claim the tag allowlist is a complete sanitizer, or claim exploitability without a path. |
| AM-05 — reusable semantic hooks/CSS | RN-I-016 | Scope Reading selectors/tokens; replace exact-header sniffing when editing the GRC pattern; avoid ignoring authored directive bodies silently. | No new global selector leaks; no one-off branch for every table; preserve current rendering types and unrelated features. |
| AM-06 — meaningful verification gaps | RN-I-001/003/005/006/009 | Add only regression checks that reproduce the actual geometry/lifecycle/keyboard failure. | Unit-store round-trip alone cannot certify viewport restoration; nowrap alone cannot certify padded-cell fit; source font-size alone cannot certify SVG legibility. |

## Decision gates and work excluded

Before broad application, the user should review one academic batch, one comparison-table pilot and one diagram adaptation. Confirmed factual corrections do not require a new design system. Preferences about long prose measure, language editions, completion indicators, Wi-Fi generations or extra federation depth remain separate decisions.

No full rewrite, global restyling, component-library migration, extra animation programme, fixed content-length target, universal card conversion, Domain 5 work, or unrelated quiz/slides/vocabulary work is proposed. No prior human acceptance item is marked approved.

Each approved task should retain this audit's baseline evidence, add fresh before/after evidence in a new directory, list any concurrent work, and stop for review when its bounded acceptance criteria are met. This roadmap itself does not authorize remediation.
