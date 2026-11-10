# Reading Notes — Human Acceptance package

**Status: PREPARED — USER APPROVAL PENDING.** This package does not record Human Acceptance as passed.

Repository: `D:\_Coding\SEC-CERT-TEST`. Scope: focused acceptance preparation after the semantic remediation, not another comprehensive audit or redesign.

## Recommendation

The reviewed Reading Notes are a candidate for human acceptance. No new high/medium Reading defect or product regression was identified in this focused review; the confirmed minor caption defect was corrected, and historical acceptance exceptions remain disclosed. **Do not declare unconditional production readiness:** three legacy suites remain red and their historical expectations need separate maintainer review; final academic/visual approval belongs to the user.

One confirmed minor Reading defect was fixed: removed the misleading X glyph before the neutral Domain 2 Security Scorecard caption (HAR-V01). Caption text, table and academic content remain intact. Existing remediation edits remain intact. Learning Slides, Quiz, Question Banks, Vocabulary and Progress are preserved. No commit or push.

## Start the visual review here

[Screenshot index — all sections and continuation frames](../../../artifacts/qa/reading-notes-human-acceptance/screenshot-index.md).

Fresh real Chrome review covers 16 representative/high-risk sections in all five domains, at Desktop 1366×768 and Mobile 390×844, Light and Dark: **20 domain states, 64 section/theme/size observations, 140 standard viewport screenshots**, plus two mobile table right-column captures. A further eight clearly named HAR-V01 before/after captures document the narrow caption fix. Filenames include domain, section, viewport, theme, `EN-TH` and continuation number. English and Thai are displayed simultaneously; no separate translation mode exists or was simulated.

| Priority | Review selection | Educational acceptance question |
| --- | --- | --- |
| 1 | D1 risk-treatment move; D3 biometric move | Do definitions precede the visual, and does the matching example follow in the right topic? |
| 1 | D1 ethics removal | Are all four full canons and the qualified application still clear without the duplicate diagram? |
| 1 | D2 BC/DR and measurement redesigns | Do scope/group relationships communicate clearly without implying a universal subset or mandatory hierarchy? |
| 1 | D5 cryptography and sanitization | Are operation inputs/results distinct, and do captions/examples avoid unsupported guarantees? |
| 2 | D1 AAA/control functions; D3 JML | Is Accounting ongoing, are control roles overlapping, and is Mover optional/repeatable? |
| 2 | D4 DMZ, defense layers, Scenario01; D5 local IR model | Are permitted paths, remaining risk and model limitations consistent in both languages? |
| 2 | D2 backup and bilingual table | Are restore dependencies unambiguous and all mobile columns reachable? |

Inspected all four overview sheets for grouping, spacing and theme behavior, then native-sized high-risk captures and continuation frames for meaning/readability. Checked the actual flow in a normal Chrome viewport. The moved biometrics diagram still has its example immediately afterward; the ethics section retains four canon cards, mnemonic and dilemma. [Per-section observations](../../../artifacts/qa/reading-notes-human-acceptance/visual-review-observations.json) record the focused conclusions. Overview thumbnails alone are not proof of text legibility.

## Task 126 — all 12 findings

Recovered IDs/severities from the original [Domain 2 cross-domain audit](domain-2-cross-domain-quality-audit.md), checked against the latest [remediation report](reading-notes-semantic-layout-remediation.md), its QA and fresh evidence. Status below is a technical disposition, **not user acceptance**.

| ID | Priority | Actual current status and evidence |
| --- | --- | --- |
| D2-Q01 | P1 | Resolved in reviewed sizes: readable existing mobile stacks; fresh BC/DR/measurement/backup screenshots. Earlier four-viewport label measurements remain applicable to unchanged source. |
| D2-Q02 | P1 | Resolved: prior parser fix retained; fresh rendering quality 5/5, DOM integrity 36/36, no visible directive leaks in focused states. |
| D2-Q03 | P1 | Resolved: readable BC/DR coordinated-scope comparison after its introduction. Old universal subset recommendation was deliberately rejected. |
| D2-Q04 | P1 | Resolved: six concepts remain clear in purpose groups with bilingual definitions; no forced six-level hierarchy. |
| D2-Q05 | P2 | Resolved: one H1 in each of 20 fresh states; DOM checks pass. |
| D2-Q06 | P2 | Prior educational-heading/diagram cleanup retained; no new decorative emoji. Semantic vector warning/info icons remain appropriate. |
| D2-Q07 | P2 | Resolved in reviewed scope: visible risk inequalities/terms render; no raw notation leaks. Existing formula content preserved. |
| D2-Q08 | P2 | Resolved through containment, not squeezed columns: native horizontal wheel reaches right columns in both themes (scrollLeft 248px, 328px container/576px table), zero page overflow. Actual wrapper check: 42 tables, 42 wrappers, zero nested wrappers across five domains. |
| D2-Q09 | P2 | Addressed with bounded real-browser evidence and visual inspection. Rejected a misleading full-height capture and replaced canonical evidence with standard viewport/continuation frames. |
| D2-Q10 | P3 | Observed light-label defect resolved: prior computed SVG contrast results retained and fresh Light/Dark visual review. Full HTML contrast, screen-reader and WCAG certification are not claimed. |
| D2-Q11 | P1 | Resolved: unchanged parser behavior; fresh rendering quality 5/5; scenario/application sequence remains readable. |
| D2-Q12 | P1 | Resolved: fresh navigation 15/15 and persistence 20/20; unchanged UI retains earlier native collapse/keyboard/progress 100/100 evidence. Uses actual objective metadata, not an invented objective 2.5. |

[Machine-readable reconciliation](../../../artifacts/qa/reading-notes-human-acceptance/task126-reconciliation.json) links each finding to its specific evidence/visual target. Earlier 40-state/100-interaction results are historical evidence, not mislabeled fresh runs.

## Regression investigation

Freshly reran the three failing suites and four affected functional/rendering suites without editing tests, fixtures or expectations. **No added failure names since the final remediation handoff.**

| Legacy suite | Remediation entry → handoff → fresh result | Classification |
| --- | --- | --- |
| `verify-reading-diagram-semantics` | 11/14 → 12/14 → 12/14 pass | Historical registry expects 24 keys; entry/current both have 37 with no missing old keys. Literal paragraph ledger already failed at entry. Additional literal differences reflect the documented BC/DR redesign and qualified Mover wording. The coexisting-control semantics assertion now passes. |
| `verify-reading-cross-domain-structure` | 348/391 → 346/391 → 346/391 pass | 43 baseline failures persist. Exactly two added exact-content failures: biometric group moved into `topic-3-2-logical-controls`, and dependency qualification in `topic-4-2-defense-in-depth`. Source diffs confirm authorized changes, not accidental loss. |
| `verify-domain5-integration` | fail → fail → fail | Stops at a historical protected Domain 1 hash. Independent enumeration found eight historical hash mismatches, all already present at remediation entry, including the Slides catalog. This does not mean downstream integration assertions executed successfully; this suite remains blocked by its old preservation contract. |

Dormant exact-template checks were examined as well as suite names: seven old-template differences already existed; the additional `defenseInDepthLayers` difference is the intended qualified-group/caption change. The paragraph ledger has 20 unmatched literal rows at entry and 23 now; the three additions are two BC/DR paragraphs and the Mover paragraph. These are acceptance-sensitive intended edits, not evidence that the legacy suite has a clean gate.

After the caption fix, the same failure names/counts remain. The affected Domain 2 suite also passes **9/9**. Fresh passing suites: rendering quality **5/5**, navigation **15/15**, persistence **20/20**, DOM integrity **36/36**. The earlier overall result remains nine of twelve suites passing; the other four domain suites were not needlessly repeated for this focused follow-up.

Evidence: [comparison and full failure names](../../../artifacts/qa/reading-notes-human-acceptance/regression-investigation.json), [root-cause probes](../../../artifacts/qa/reading-notes-human-acceptance/legacy-root-causes.json), [biometric diff](../../../artifacts/qa/reading-notes-human-acceptance/difference-topic-3-2-logical-controls.diff), [defense-in-depth diff](../../../artifacts/qa/reading-notes-human-acceptance/difference-topic-4-2-defense-in-depth.diff). The original twelve-suite logs remain untouched. The older acceptance review also reported other historical math/wording suite failures; they were not rerun or represented as passing in this focused investigation of the requested three suites.

## Remaining findings and limits

An older [acceptance review](reading-notes-human-acceptance-review.md) and its tracked evidence were already present in the QA directory. They are historical inputs, not newly generated deliverables. HAR-V01 was re-confirmed and corrected here: [Desktop before](../../../artifacts/qa/reading-notes-human-acceptance/HAR-V01-before-desktop-1366x768-light-EN-TH.png) / [after](../../../artifacts/qa/reading-notes-human-acceptance/HAR-V01-after-desktop-1366x768-light-EN-TH.png), [Mobile before](../../../artifacts/qa/reading-notes-human-acceptance/HAR-V01-before-mobile-390x844-dark-EN-TH.png) / [after](../../../artifacts/qa/reading-notes-human-acceptance/HAR-V01-after-mobile-390x844-dark-EN-TH.png).

- **Historical HAR-A01 remains an accessibility acceptance item:** the older review found unnamed decorative SVG nodes, including shared controls. Native speech impact was unverified; this focused visual pass does not close that finding or authorize changes to shared non-Reading controls.
- **Historical D1-N08 remains an academic sign-off exception:** Reading preserves neutral canon wording and all four duties, while protected Question Bank precedence interpretations require provenance and separate academic-owner reconciliation. The Question Bank was not changed.
- **Legacy gate remains red.** Recommend separate, explicit review of historical fixtures/registries/hash contracts after the intended teaching changes are accepted. Do not waive these silently or rewrite expectations here.
- **One initial 8-second Domain 5 harness wait expired.** An isolated cold-load run passed all four requested size/theme combinations; the subsequent complete 20-state run passed with a 15-second wait bound. No reproducible product loading defect was established, and an 8-second loading guarantee is not claimed. Diagnostics are retained.
- **Capture tooling limitation:** a full-height clipped capture omitted the desktop risk flow although the normal viewport showed it correctly. Canonical acceptance screenshots now use standard viewport captures plus continuations. `risk-*-diagnostic.png`, `d5-chrome-review.json` and initial error logs are diagnostics, not acceptance evidence.
- **Coverage is focused:** no new comprehensive audit, cross-browser certification or formal accessibility conformance audit. Human academic/visual judgment remains outstanding.

## Exact changes in this follow-up

1. Added this package: `docs/plans/isc2-cc-2026/reading-notes-human-acceptance.md`.
2. Appended only the current acceptance-preparation row in `docs/plans/task.md`; prior tracker history preserved.
3. Added QA scripts, fresh logs, reconciliation/observation registers, screenshots, index and hash manifest under `artifacts/qa/reading-notes-human-acceptance/`.

**Production change:** removed exactly one decorative SVG from `content/isc2-cc-2026/reading/domain-2.md`, documented in `followup-production-change.json`. No other production edit. The previous remediation's uncommitted production edits were preserved, not reclassified as new work. Reversing this one replacement reconstructs the follow-up entry Domain 2 bytes. [Preservation results](../../../artifacts/qa/reading-notes-human-acceptance/preservation-verification.json) compare the current tracked tree with this follow-up's entry hashes and verify the prior handoff artifacts. [Manifest](../../../artifacts/qa/reading-notes-human-acceptance/manifest.json) lists exact new deliverables and hashes. HEAD remains unchanged.

## User decision — not recorded yet

Review the priority selections and continuation frames in both languages/themes. The available decision is **accept the scoped Reading remediation**, **request specific revisions**, or **hold pending legacy-gate maintenance**. No option has been selected for the user. Any release decision must explicitly account for the remaining red legacy gate.
