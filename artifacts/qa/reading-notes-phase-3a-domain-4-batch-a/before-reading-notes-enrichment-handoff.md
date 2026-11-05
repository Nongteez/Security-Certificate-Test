# Reading Notes enrichment — Handoff

Updated: 2026-11-03. Phase 2 review complete; implementation awaits explicit human approval.

Reviewed 75 distinct recommendations: {'APPROVE WITH REVISION': 44, 'APPROVE': 10, 'HOLD': 11, 'REJECT': 10}. The canonical 56, six older media/tool proposals and thirteen finer legacy groups are covered. All eleven academic corrections, nineteen explanations, thirteen practical examples, five diagrams, four image assets / three packages, one optional IDS interaction and retained rejected candidates are reviewed.

## Reviewed finding IDs

ACC-D1-01, ACC-D2-01, ACC-D2-02, ACC-D3-01, ACC-D4-02, ACC-D4-03, ACC-D5-01, ACC-D5-02, ACC-D5-03, ACC-D5-04, ACC-D5-05, ACC-D4-01, VER-D1-01, VER-D2-01, ENR-D1-02, ENR-D1-03, ENR-D1-04, ENR-D1-06, ENR-D2-03, ENR-D3-03, ENR-D3-05, ENR-D3-06, ENR-D3-08, ENR-D4-02, ENR-D4-03, ENR-D4-04, ENR-D4-06, ENR-D4-07, ENR-D5-08, ENR-D5-12, ENR-D5-13, ENR-D5-14, ENR-X-01, ENR-X-02, ENR-D1-05, ENR-D2-04, ENR-D2-05, ENR-D2-06, ENR-D3-02, ENR-D3-04, ENR-D3-07, ENR-D4-05, ENR-D5-06, ENR-D5-07, ENR-D5-10, ENR-D5-11, ENR-D5-15, VIS-01, VIS-02, D2-A01, D2-A02, D4-M01, D5-M16, IMG-HSM-PAIR, IMG-FW, INT-IDS, D2-A03, INT-ABAC, INT-TRIAGE, IMG-HSM-PCIE, IMG-KEY, D2-I01, LEG-D1-LEGAL, LEG-D3-MODELS, LEG-D4-FOUNDATIONS, LEG-D4-IPV4, LEG-D4-WIRELESS, LEG-D4-LAYERS, LEG-D4-HYBRID, LEG-D4-AWS, LEG-D5-VA, LEG-D5-CRYPTO-DETAILS, LEG-STUDY-CUES, LEG-D1-RESIDUAL, LEG-D2-RESIDUAL

## Pending finding IDs

No pending Phase 2 disposition. Pending evidence / excluded from implementation: VER-D2-01, D5-M16, IMG-HSM-PAIR, INT-IDS, LEG-D1-LEGAL, LEG-D3-MODELS, LEG-D4-WIRELESS, LEG-D5-VA, LEG-D5-CRYPTO-DETAILS, LEG-D1-RESIDUAL, LEG-D2-RESIDUAL.

## Evidence gaps

Scorecard fourth-row units/denominator/period; exact HSM-photo permissions and attribution; learner need for threat-model diagram and IDS interaction; finer legal, access-model, wireless, VA/PT and crypto-detail claims. See report G and decisions.json for the exact next evidence request.

## Exact next action

Wait for explicit human selection of approved batch/finding IDs. Recommended D5-A (ACC-D5-01, ACC-D5-02), then separately D5-B (ACC-D5-03, ACC-D5-04). Read the report and implementation-plan.json, incorporate every revision and preserve all baseline work before implementing. Do not treat APPROVE as user authorization. Do not resume the old audit or execute Phase 1 regeneration scripts.

## Files modified / added

Only the three Phase 2 review/progress/handoff documents and new files inside `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/`. The complete artifact list is discoverable there; primary outputs: decisions.json, implementation-plan.json, media-decisions.json, legacy-proposal-crosswalk.json, subsection-review-crosswalk.json, supporting-evidence-inspection.json, review-summary.json and verification.json. prepare-review.py and verify-review.py reproduce/check review artifacts only.

## Uncommitted changes to preserve

Entry HEAD d5d5f369d293716a43a072d11692f26b3618716c. Entry git status has 29 existing changed deliverables: the tracked comprehensive audit and docs/plans/task.md plus 27 untracked Phase 1 files. Exact paths/status: phase-2/entry-git-status.txt. entry-baseline.json records SHA-256 for all 30,800 pre-existing files. Do not reset, clean, overwrite or regenerate any entry deliverable. All earlier source/contact sheets/manifests remain evidence; historical output is not automatic academic authority.

## Verification boundary

See phase-2/verification.json for fresh preservation and artifact checks. No production edits, media acquisition/generation, commits or pushes occurred. This was a source/academic review, not a browser rendering or learning-outcome test.

## Exact Phase 2 artifact paths

- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/current-target-excerpts.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/decisions-checkpoint.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/decisions.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/entry-baseline.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/entry-git-status.txt`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/implementation-plan.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/legacy-observation-decisions.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/legacy-proposal-crosswalk.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/legacy-target-excerpts.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/media-decisions.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/prepare-review.py`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/review-summary.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/subsection-review-crosswalk.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/supporting-evidence-inspection.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/verification.json`
- `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/verify-review.py`

Final verification: run `python -X utf8 artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/verify-review.py`; read verification.json for the latest result. Entry files must remain byte-identical.


## Current checkpoint — 2026-11-04, Phase 3A

**ACC-D5-01 and ACC-D5-02: implemented and verified; awaiting human acceptance.** This dated checkpoint supersedes the earlier wait-for-D5-A-authorization instruction. The Phase 3A request authorized exactly these two IDs. All other 73 reviewed recommendation groups keep their previous reviewer disposition and remain unimplemented by this phase.

Production changes: `content/isc2-cc-2026/reading/domain-5.md` (signature/HSM/TPM units and matching review/scenario wording) and `content/isc2-cc-2026/reading/domain-5-scenarios.js` (scenario 04 duplication only). No diagram, global CSS, parser, navigation, progress persistence, Domain 1–4, Learning Slides, Vocabulary or Question Banks changed. `docs/plans/task.md` received one appended Phase 3A status row; old task rows and all earlier audit artifacts are preserved.

Evidence: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-academic-corrections.md`; `artifacts/qa/reading-notes-phase-3a-domain-5/` contains original files, entry hashes/status/HEAD, exact-changes.json, primary-source verification, before/after regression logs, content integrity, real Chrome QA/screenshots and final-verification.json. Do not regenerate Phase 1/2 artifacts; their preservation checks describe their own historical baseline.

Verification: content integrity 10/10; Chrome 12/12 viewport/theme configurations, 40 screenshots, direct/reload/sidebar return checks pass; zero page overflow or runtime/console errors. The mobile hardware table uses its existing contained horizontal scroll, with both edges verified. Existing regression suites are 8 passing / 4 pre-existing failing both before and after; the report names all failures. No tests were changed to clear them.

Pending evidence: unchanged scorecard units, HSM photo permissions, finer legal/IAM/wireless/VA/crypto claims and conditional learner need for interactions. No other ID is marked implemented.

**Exact next action:** stop and await human acceptance. Recommend D5-B (ACC-D5-03 and ACC-D5-04) only after a separate explicit implementation instruction. No commits or pushes; preserve the entire current working tree. Entry SHA-256 inventory protects existing uncommitted work; final-verification.json lists the exact permitted modifications and confirms all other inventoried files unchanged.


## Current checkpoint — 2026-11-04, Phase 3A Batch 2

**ACC-D5-03 and ACC-D5-04 implemented and verified — awaiting human acceptance.** The Batch 2 request supplied explicit authorization for these two APPROVE WITH REVISION records. This supersedes the previous instruction to await authorization for D5-B. ACC-D5-01/02 remain protected and unchanged; their human acceptance is not inferred. Only four IDs have been implemented across the two batches; the other 71 review groups keep their previous disposition and are not implemented.

Changes: Domain 5 sanitization unit, related review/scenario 01 wording and its reusable Reading scenario data; IR attribution/iteration, long-term-containment Thai typo and directly matching review cue. The six IR activities, diagram, verb table and ransomware case remain intact. No global JavaScript/CSS, parser, progress persistence, Domain 1–4, learning slides, quiz, question banks, vocabulary or media assets changed. Existing uncommitted work remains protected.

Evidence/report: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-2.md`; `artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/` contains the entry inventory/status/HEAD, original files, exact changes, primary-source verification, original-image inspection record, 13/13 content checks, 12/12 real Chrome viewport/theme states, 88 screenshots and final-verification.json. All required direct/reload/sidebar checks pass; Batch 1 rendered text matches its previous evidence in all states. Narrow-screen tables use existing contained horizontal scrolling, with both edges checked.

Regression results: 8 passing / 4 pre-existing failing suites, unchanged from both the fresh baseline and Batch 1. No test was altered. Historical failures and exact names are recorded in the report and regression-comparison.json.

**Exact next action:** stop and await human acceptance. Recommend ACC-D5-05 only if separately authorized; do not start it, visual enrichment or other domains now. Other prior evidence gaps remain unchanged. No commit/push. Preserve this entire working tree and all historical QA artifacts; run only the new Batch 2 verification command for this state, not older finalizers that overwrite prior evidence.


## Independent workspace additions observed during final verification

The initial final scan found 22 new table-audit scripts and QA artifacts outside this batch; that independent audit continued adding screenshots during verification. Batch 2 commands did not create them; the relevant regression scripts do not write those paths. They are retained in place and separately inventoried with SHA-256 in rtifacts/qa/reading-notes-phase-3a-domain-5-batch-2/external-additions.json. All five authorized existing-path changes are still the only entry-file changes. This is a shared-workspace preservation qualification, not an additional implementation by this batch. The final verifier checks all unchanged entry files, records the current independent-addition snapshot and flags any unclassified path. Initial observations are retained in external-additions-initial.json; updates within the independent audit are disclosed rather than overwritten.


## Current checkpoint — 2026-11-04, Phase 3A Batch 3

**ACC-D5-05 implemented and verified — awaiting human acceptance.** The Batch 3 request authorizes this APPROVE record only. This supersedes the earlier wait-for-ACC-D5-05-authorization instruction. All five Domain 5 academic correction IDs are now implemented across the three batches; acceptance is not inferred, and no other recommendation is marked implemented.

Changes: Domain 5 MITRE subsection uses PowerShell T1059.001 with a concise bilingual parent/sub-technique note. Exactly three existing MITRE diagram text nodes were corrected: Spearphishing Link T1566.002, PowerShell T1059.001 and an examples caption replacing the undated count. Scenario answers/data, generic Phishing T1566 and Pass the Hash T1550.002 are unchanged. No diagram geometry, shared behavior or unrelated diagram was changed.

Protected: ACC-D5-01 through ACC-D5-04, Task 157 normalized tables/parser/CSS, Domain 1–4, Learning Slides, Question Banks, Vocabulary, Quiz, navigation and progress keys. Prior reports and QA evidence are preserved; task/progress/handoff updates retain entry bytes as prefixes.

Report: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-5-batch-3.md`. QA: `artifacts/qa/reading-notes-phase-3a-domain-5-batch-3/` contains the approved record, entry inventory/status/HEAD, original files, exact changes, dated MITRE/source verification, 12/12 content checks, 12/12 Chrome states, 80 screenshots and final-verification.json. Corrected desktop labels fit their panels; all 14 tables retain zero nested wrappers and Task 157 header styling. Direct/reload/sidebar return checks pass; zero page overflow or runtime/console errors. Regression results remain 8 passing / 4 historical failing suites with no new failed-test names; raw evidence is retained.

**Exact next action:** stop and await human acceptance. In the implementation plan’s main sequence the next unimplemented batch is D1-A (ACC-D1-01, VER-D1-01, ENR-D1-04), only after separate explicit authorization. ENR-D5-07/08 remain unimplemented and unauthorized. Begin no other finding, domain or visual enrichment. No commits or pushes; preserve all current uncommitted work. Use only the new Batch 3 verifier for this state, not old finalizers that overwrite historical records.


## Current checkpoint — 2026-11-04, Phase 3A Domain 1 Batch A

**ACC-D1-01, VER-D1-01 and ENR-D1-04 implemented and verified — awaiting human acceptance.** The user request authorizes exactly the D1-A records (two APPROVE WITH REVISION, one APPROVE). It supersedes the earlier wait-for-D1-A-authorization instruction. All five Domain 5 corrections remain protected; no acceptance of previous work is inferred. Eight recommendation groups have now been implemented across these four bounded batches; all other dispositions remain unchanged.

Production: only `content/isc2-cc-2026/reading/domain-1.md`, five spans. Qualified consent/lawful basis and transparency in the existing privacy table/ownership wording; replaced the exceptionless ethics conclusion with professional judgment and authorized guidance; added one bilingual official-outline/course control terminology note. All eight scenarios, twelve diagrams, four canons and four category definitions/examples are retained. No global JS/CSS, scenario data, other-domain content, Learning Slides, Vocabulary, Question Banks, Quiz, navigation or progress code changed.

Evidence: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-1-batch-a.md` and `artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/`. Entry inventory covers 31,309 files. Content 12/12; before/after real Chrome matrices each 12/12, 204 screenshots; all affected anchors pass sidebar/direct/reload checks; four additional protected D5 smoke states pass. No page overflow, clipped changed-prose metrics or runtime errors. Task 157 styling/wrappers and all prior correction artifacts are protected by hashes.

Regression suites remain 8 pass / 4 fail. Cross-domain exact-text assertions increase from 20 to 21 failures because the approved taxonomy note differs from the old snapshot; this is explicitly disclosed, not labeled unchanged. The other historical failed-test names remain; D5 integration already fails its old D1 hash, whose actual value changes with this authorized edit. No tests/fixtures modified. Existing legal/retention HOLD material remains untouched; no D1-A blocker remains.

**Exact next action:** stop for human acceptance. Recommend D2-A (ACC-D2-01 / ACC-D2-02) only with a separate explicit instruction; begin no other batch or media enrichment. No commit/push. Preserve this entire working tree and old QA; verify this state only with `python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-1-batch-a/verify-final.py`, not older finalizers. The latest `final-verification.json` is the authoritative final preservation record.


## Current checkpoint — 2026-11-04, Phase 3A Domain 2 Batch A

**ACC-D2-01 and ACC-D2-02 implemented and verified — awaiting human acceptance.** This explicit D2-A authorization supersedes the prior wait-for-D2-A instruction. Decisions: APPROVE WITH REVISION and APPROVE respectively; no dependencies or HOLD/REJECT implementation. Ten recommendation groups are now implemented across the five bounded batches; prior human acceptance is not inferred.

Production changes: `content/isc2-cc-2026/reading/domain-2.md` (simplified recovery model/tolerance, illustrative backup/target note, dashboard cadence note/table/review cue) and four text-only spans in `js/core/diagram-generator.js` effectivenessHierarchy (two SVG texts, two matching mobile paragraphs). Original 16:30/17:00/18:00 case, all twelve scenarios/data, four diagram placements, timeline, geometry/attributes and unrelated templates preserved. D1-A, all five D5 corrections, Task 157, Slides/Vocabulary/Banks/Quiz/navigation/persistence remain protected.

Evidence: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-2-batch-a.md`; `artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/` contains exact decisions, entry hashes/originals/status/HEAD, source verification, nine-span diff, before/after suites, content 12/12, Chrome before/after each 12/12 with 280 screenshots, eight D1/D5 protected smoke states and final verification. Labels fit existing panels; tables scroll within existing wrappers; navigation/reload/direct links pass; zero page overflow/runtime errors.

Regression: 8 pass / 4 fail. The cross-domain baseline includes D1-A's known taxonomy mismatch (21 failures). D2-A adds two exact-text mismatches for memory-aid and review-summary changes, producing 23; the report separates these from historical failures. No tests/fixtures changed. VER-D2-01 scorecard remains HOLD and untouched. Source locator 223240 is absent; actual metric slide 222340 was inspected. CISA direct fetch returned 403; NIST/ISC2 provide direct substantive support.

**Exact next action:** stop for human acceptance. Recommend D3-A (ACC-D3-01, ENR-D3-02, ENR-D3-03, ENR-D3-04) only after separate explicit authorization. Begin no other batch or visual enrichment. No commit/push. Preserve all current work; verify this state using `python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-2-batch-a/verify-final.py`, not historical finalizers. Latest `final-verification.json` is the authoritative final preservation record.


## Current checkpoint — 2026-11-04, Phase 3A Domain 3 Batch A

**ACC-D3-01, ENR-D3-02, ENR-D3-03 and ENR-D3-04 implemented and verified — awaiting human acceptance.** This explicit D3-A request supersedes the earlier wait-for-D3-A authorization. Decisions: ACC-D3-01/ENR-D3-03 APPROVE WITH REVISION; ENR-D3-02/04 APPROVE; no dependencies or HOLD/REJECT implementation. Fourteen recommendation groups are now implemented across six bounded batches; prior acceptance is not inferred.

Production: eleven spans in `content/isc2-cc-2026/reading/domain-3.md` within four approved units, plus one academically necessary `iamLifecycle` mobile paragraph in `js/core/diagram-generator.js`. Policy-bounded task access replaces universal mover revocation/automatic SoD; approved-versus-observed provisioning, accountable ownership/review enforcement and surviving-session withdrawal examples are aligned in Thai/English. All twelve original scenarios/data, five tables, four diagram placements, desktop JML, unrelated templates and retention caveat remain. Earlier D1/D2/D5/Task 157 work and all Slides/Vocabulary/Banks/Quiz/navigation/progress are protected.

Evidence/report: `docs/plans/isc2-cc-2026/reading-notes-phase-3a-domain-3-batch-a.md`; `artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/`. Entry inventory 31,920 files; exact decisions/source verification, twelve-span diff, content 12/12, real Chrome before/after each 12/12 with 348 screenshots (including 12 mobile Mover close views and 40 protected D1/D2/D5 captures), twelve protected smoke states and final verification. All four affected anchors pass sidebar/direct/reload checks; no page overflow or runtime errors.

Regression: 8 pass / 4 fail. Fresh cross-domain baseline has 23 failed assertions including the known D1-A and two D2-A text mismatches; three new authorized-text snapshots for D3 provisioning/review/deprovisioning bring it to 26. Other failed names remain unchanged. No test/fixture modified. No D3-A blocker; other recommendations retain previous disposition.

**Exact next action:** stop for human acceptance. Recommend D4-A (ACC-D4-01, ACC-D4-02, ACC-D4-03, ENR-D4-04) only after separate explicit authorization; begin no Domain 4 or visual enrichment now. No commit/push. Preserve all current work and old QA. Verify this state with `python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-3-batch-a/verify-final.py`, not historical finalizers. Latest `final-verification.json` is the authoritative final preservation record.
