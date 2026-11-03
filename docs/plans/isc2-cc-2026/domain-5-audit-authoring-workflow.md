# Domain 5 question-bank audit — Proposed authoring workflow (H)

Date: 2026-11-03. **This is a future-work plan, not authorization to execute it.** The current task stops after the audit reports for human review. [Blueprint](domain-5-audit-assessment-blueprint.md), [rubric](domain-5-audit-quality-rubric.md), [compatibility](domain-5-audit-bank-compatibility.md), [findings](domain-5-audit-academic-findings.md).

## Goal and architecture

Goal: develop a defensible, nonredundant Domain 5 practice bank after its evidence and assessment design have been approved. Use the existing ES-module runtime and structured bilingual explanations. Keep evidence, cognitive/difficulty tags and review metadata in an authoring/QA sidecar; map only approved fields to runtime. Preserve legacy bank, D1–4 questions, Vocabulary, Reading Notes, Learning Slides and unrelated application behavior.

Current audit outputs are nine Markdown files under `docs/plans/isc2-cc-2026/`. No new authoring, knowledge or runtime files are created in this task. Proposed future paths below are suggestions, not existing artifacts or completed work. No branch/commit/deployment has been made.

## Stage 0 — Human review of this audit

- [ ] Accept/revise source findings and the provisional 50-slot /26-family blueprint; approve scope before drafting.
- [ ] Decide wording for accidental insider risk and physical-testing examples (F10/F18).
- [ ] Approve knowledge curation for missing PQC, applied IR data handling and selected official AI contexts; incorporate verified hash corrections F03/F04.
- [ ] Record the Thai prompt/option compatibility choice before any production mapping; canonical questions remain English and explanations bilingual.
- [ ] Keep D5 runtime empty until later authoring and publication approvals. The user's approval of an audit is not implicitly approval to publish a bank.

Deliverable: approved/returned audit decision with explicit scope for the next task. No drafts are needed to approve this step.

## Stage 1 — Curate verified knowledge and resolve findings

Proposed files: a new Domain 5 knowledge-curation register and findings-resolution register under the approved Domain 5 authoring/source location, following existing Domain 4 patterns. Reuse `content/isc2-cc-2026/knowledge/domain-5.md` only if that future task explicitly includes it; do not overwrite original course files.

- [ ] Create claim records with official parent, tested concept, original evidence, external reference/section and limitations.
- [ ] For each F01–F21, record ACCEPTED-CORRECTION / QUALIFIED / UNRESOLVED / EXCLUDED with justification and dependent opportunities. Do not erase conflicting original wording.
- [ ] Curate PQC introductory purposes and IR data-handling decisions; verify precise conditions from appropriate standards/policy guidance. Use verified R18–R20 for hashes/DAST and expand physical-test references for any additional claim that will actually be used.
- [ ] Preserve the difference between course evidence, synthesized notes, official scope, verified external facts and reviewer inference in each record.
- [ ] Re-evaluate coverage based on the curated claims; external additions fill authoring gaps but do not retroactively change original-source coverage.

Exit evidence: every planned slot traces to a usable claim; held opportunities remain held until the needed claim is verified. Unresolved hardware/legal/advanced-crypto enrichment stays excluded. Stop for review if resolving a gap would require changing approved scope.

## Stage 2 — Finalize nonredundant assessment slots

- [ ] Turn AT01–AT26 into distinct authoring IDs, e.g. `D5-AT01-01`; these are local keys, not official objective numbers.
- [ ] For each slot, state the concept, assessed decision, A–E level, provisional difficulty and reason for a distinct question.
- [ ] Compare with existing legacy and updated items, especially the blueprint overlap watch list. Remove/merge slots that cannot add a new decision.
- [ ] Limit AI applications to suitable existing slots; do not add a mandatory AI quota or unlisted advanced AI topics.
- [ ] Reconcile final count and cognitive distribution after adjudication; justify departures from 50 rather than padding.

Exit evidence: approved slot register with no unsupported or unresolved target. No production IDs are reserved merely by writing a slot.

## Stage 3 — Draft English questions and bilingual teaching explanations

Proposed authoring file: `content/isc2-cc-2026/questions/domain-5-draft.mjs` or a sidecar format approved for this project. Keep it outside runtime imports. Follow the existing D3/D4 choice/rationale mapping convention if auxiliary Thai prompt fields have been approved.

- [ ] Write small batches grouped by concepts so errors can be repaired before they propagate. Start only with usable claims.
- [ ] Each item has one English stem, four English options and one defensible key. Add context only when needed for reasoning.
- [ ] Write a correct-option rationale and three independent distractor rationales in English and Thai. Give a short English takeaway. Do not reconstruct a rationale around a guessed key.
- [ ] State authoring ID, objective, bullet description, concept, decision and source locations in the sidecar. Do not add them to production objects.
- [ ] Mark all draft/review fields honestly as pending; `authored_by_assistant` is not human approval. Record actual reviewer execution identities if separate reviewers are later used.

Exit evidence: complete reviewable drafts and explanations, no production import. Reject invalid items rather than treating valid serialization as academic quality.

## Stage 4 — Review, repair and re-solve

- [ ] Execute responsibilities A–F from the rubric; record actual independence, dates and input revisions. Do not claim six reviewers when one author performs six sequential passes.
- [ ] Solve with options hidden, assess every option, seek alternate-answer counterexamples and check all qualifier conditions.
- [ ] Compare Thai reasoning against English, including certainty, actor, negation, policy and stage. Actual native-Thai/human review is a separate status, never inferred.
- [ ] Rank similarity candidates against all existing items and within the batch, then adjudicate concept/decision overlap manually. Inspect cross-item leakage and response-position/length clues.
- [ ] Repair material failures, invalidate dependent verdicts and re-review the changed revision. Retain rejected/deferred records with reasons.

Exit evidence: explicit per-item technical, wording, option, bilingual, objective and duplicate decisions; no material unresolved rejection condition. All accepted items must have valid keys/rationale mappings after final option order.

## Stage 5 — Validate the authoring-to-runtime mapping

Proposed future test: `tools/verify-domain5-integration.mjs`, designed specifically for dom5 and the accepted sidecar. This file is **not created now**. Existing scripts must not be copied with D1/D4-specific constants left unchanged.

- [ ] Export only the established 11 runtime fields; validate integer IDs/key, dom5, four unique options, nonempty canonical English, required Thai fields under the approved contract and exactly three non-key rationales.
- [ ] Resolve all knowledge/reference IDs and official objective links in the sidecar; include source file hash and line/image region.
- [ ] Use a hand-derived mapping fixture to verify a nontrivial key position and rationale letters. Include negative cases for wrong key, duplicate option, missing language content, invalid objective and source-ID mismatch.
- [ ] Render EN/TH/both explanation modes and confirm every rationale maps to the displayed option. Check that legacy strings and structured fields teach the same reasoning.
- [ ] Recheck IDs against all banks and reservations; numeric D5 IDs follow existing `1001+` staging policy unless explicitly revised. Preserve old IDs/objects.

Exit evidence: validated staging export, test results and complete academic review report. Technical success does not itself authorize publication.

## Stage 6 — Concrete publication review

- [ ] Prepare the exact accepted runtime module and synchronized next-bank config/registry changes as a reviewable diff after publication work is authorized. Keep it unpublished pending the required final approval.
- [ ] Show final accepted count by objective and cognitive level, unresolved nonblocking limits, review-independence labels, protected-file checks and realistic mock-exam capacity.
- [ ] Explain remaining Exam draw shortages and any tests with missing fixtures/stale assumptions; do not fix unrelated behavior as a hidden dependency.
- [ ] Obtain approval of the concrete publication result before activation if the user has not already explicitly authorized that action in the future task.

Exit evidence: explicit publication approval for the reviewed revision and any necessary config/test changes. An audit/blueprint approval alone cannot be reused as this approval.

## Stage 7 — Activate and verify, only under later authorization

- [ ] Update only approved D5 runtime/config/registry/test surfaces; recheck D1–4 and legacy hashes.
- [ ] Run staging, loader, Practice, weighted Exam, scoring, resume, version-isolation and EN/TH/both checks. Update legitimate D5-empty assertions deliberately in that future scope.
- [ ] Verify browser flows at appropriate sizes and languages after runtime content changes, including domain availability, explanation alignment and resumed sessions.
- [ ] Publish release notes with count, supported scope and limitations. Do not claim CAT or a guaranteed ISC2 pass rate. Preserve a reversible previous version and saved-session compatibility plan.

Exit evidence: observed results and a publication record tied to reviewed content hashes. Roll back only the authorized new activation if verification fails; do not modify protected banks to conceal a problem.

## Proposed source-to-question traceability manifest

This is a **schema proposal**, not a record of a question that exists. Store one record per authoring ID in a sidecar and map to numeric runtime ID only when assigned. Use structured arrays for multiple sources/reviews; never smuggle these fields into runtime JSON/JS.

| Metadata field | Required content / rule |
|---|---|
| `authoringId`, `questionId`, `bankVersion` | Stable local ID; nullable numeric ID until assigned; `next-bank` |
| `officialObjective`, `outlineBullet` | One primary 5.1–5.5 identifier; exact bullet location/reference plus descriptive label; optional separately identified secondary objectives |
| `opportunityIds`, `conceptId`, `testedConcept`, `assessedDecision` | AT family/slot and curated claim/concept identity; explicit value beyond a paraphrase |
| `cognitiveCategory` | A/B/C/D/E with rationale; local taxonomy |
| `difficulty`, `difficultyRationale`, `empiricalDifficulty` | Foundational/applied/intermediate estimate; explanation; null until real pilot data |
| `sourceEvidence[]` | Source class, exact file path, SHA-256, 1-based line range or screenshot region, claim supported, known limitations |
| `technicalReferences[]` | Primary URL/publication, revision/date, section/page, date checked, exact supported claim |
| `inferences[]`, `findingDependencies[]` | Reviewer interpretations and F IDs; unresolved material dependency forces HOLD |
| `languageContract`, `terminologyVersion` | Canonical English prompts; bilingual rationale policy; auxiliary Thai prompt decision and reviewed term-set revision |
| `reviewRecords[]` | Responsibility A–F, actual reviewer/execution identity, independence label, timestamp, input hash, verdict, evidence and repairs |
| `duplicateCheck` | Existing bank/batch snapshot, methods, comparison IDs/scores, semantic verdict and added-value rationale |
| `leakageCheck` | Option length/grammar/key-position findings and cross-item disclosure review; mapping recheck after reorder |
| `status`, `publicationApproval` | PROPOSED → DRAFT → REVIEW → REVISE/HOLD/REJECT or ACCEPTED-STAGING → APPROVED-FOR-PUBLICATION → PUBLISHED; explicit human approval record where required |
| `runtimeHash`, `revisionHistory` | Final mapped-object/content hash, changes, retired ID history and dependent-review invalidations |

Only claim VERIFIED, ACCEPTED or PUBLISHED when the associated work actually happened. The present task produces a plan for these records and does not populate fictional question reviews.
