# Domain 5 question-bank audit — Review entry point

Date: **2026-11-03 (Asia/Bangkok)**. Task: academic source audit, exam alignment and assessment planning only.

## Outcome

**Audit and planning complete; source coverage and authoring readiness are incomplete.** All 81 local files were inventoried, three complete text files read and 78 images visually inspected, with cropped/illegible portions explicitly recorded. The official September2026 objectives are verified. No production question or application file was changed and no new question was generated. Proposed future items have no actual review status yet.

The work used one assistant session covering the requested assessment disciplines. It does not claim seven independent reviewers, a separate independent model review, native-Thai approval, confidential exam access or equivalence to ISC2's adaptive examination.

## Reports created

| Deliverable | File | Main result |
|---|---|---|
| A | [Source inventory](domain-5-audit-source-inventory.md) | 81 file-level records, hashes, provenance, visual observations and limitations |
| B | [Official objective coverage](domain-5-audit-objective-coverage.md) | Five verified objectives, fourteen bullet groups, evidence and explicit gaps/conflicts |
| C | [Academic findings](domain-5-audit-academic-findings.md) | 21 findings: 9 High, 9 Medium, 3 Low; primary reference register and human-review queue |
| D | [Examination terminology](domain-5-audit-terminology-matrix.md) | 51 contextual terminology rows, English/Thai explanations, confidence and qualifier controls |
| E | [Assessment blueprint](domain-5-audit-assessment-blueprint.md) | 26 opportunity families / provisional 50 items; nonredundant concepts and decisions |
| F | [Exam fidelity and quality rubric](domain-5-audit-quality-rubric.md) | Hard rejection gates, eight analytic dimensions and six review responsibilities |
| G | [Existing bank compatibility](domain-5-audit-bank-compatibility.md) | Verified119 updated items, 11-field contract, staging/IDs, integration and test limits |
| H | [Proposed authoring workflow](domain-5-audit-authoring-workflow.md) | Curation-to-publication stages and separate source/QA manifest design |

This summary is the ninth new Markdown file. Existing empty files `domain-5-academic-audit.md` and `domain-5-2026-coverage-matrix.md` were not overwritten. All report filenames use `domain-5-audit-` to distinguish this completed audit package from those pre-existing files.

## Decisions supported by the audit

- The correct updated runtime bank is **next-bank**, not the legacy directory named `2026`. Counts are24/39/23/33/0 =119; legacy has583. All702 existing IDs are unique. Domain 5 remains empty/unavailable.
- Whole-objective source judgments: **5.1 PARTIAL; 5.2 CONFLICTING; 5.3 PARTIAL; 5.4 CONFLICTING; 5.5 FULL** at introductory topic-coverage level. FULL is not technical acceptance of every sentence.
- Principal missing teaching: quantum-resistant cryptography; applied IR data-handling policy. Both summaries also omit substantive handling material that is present in the transcript/slides. Official AI applications need selective curation inside existing objectives.
- Principal academic risks: encryption versus authenticity, signature key roles, password hashing, collision resistance, conditional sanitization, obsolete SSL/TLS assumptions, inconsistent actor/insider definitions and misleading process graphics.
- Recommended volume: **50 conditional slots**, distributed12/12/8/8/10 by objective. Cognitive A–E distribution6/12/15/9/8. Two held families account for four slots; no quota requires their premature drafting.
- Current runtime supports bilingual per-option feedback. Editorial source/objective/difficulty/review metadata belongs in a sidecar. Existing D5 staging reserves IDs1001+.
- The current fixed sampler draws96/125 from available pools. Adding the proposed D5 bank would permit117/125 with unchanged D1–4 pools. No CAT/psychometric equivalence is claimed.

## Verification and preservation

Current D2 integration, D4 integration and all 8 explanation-formatting tests passed. Three observed historical checks failed: absent legacy HTML, missing `original/` fixture directory, and an obsolete24-item next-bank expectation. They remain documented in G and were not repaired. The read-only version inventory completed. Final hash and document checks are recorded below.

Pre-existing modifications to Reading Notes, CSS, shared code and tests were present at task start; they were preserved, not attributed to this audit. A baseline of715 files under data/js/css/content/tools and the Domain 5 source root also detected **11 files changing during the audit outside this audit's edits**: `js/core/diagram-generator.js`, `js/core/reading-loader.js`, `js/core/reading-progress.js`, `js/ui/screen-reading.js`, `css/reading.css`, and six tools: `verify-reading-notes-domain1.mjs`, `verify-reading-notes-domain2.mjs`, `verify-reading-notes-domain3.mjs`, `verify-reading-notes-domain4.mjs`, `verify-reading-persistence.mjs`, `verify-reading-visual-remediation.mjs`. Those changes were not reverted or claimed as this audit's work. A claim that the entire shared working tree remained byte-identical would therefore be false. No source corrections, schema changes, generated production questions, commits or publishing were performed by this audit.

## Completion criteria

| Criterion | Audit status / evidence |
|---|---|
| All relevant local files inventoried | Met:81 records with exact names and hashes in A |
| Text/images inspected or limitations declared | Met:3 complete text files;78 visual reviews; I16/I21/I29 cropping and uncertain handwriting disclosed |
| Official2026 objectives verified | Met:R01 dated English PDF; objective identifiers/titles and bullet mapping in B |
| Coverage and academic conflicts documented | Met:B/C; unresolved knowledge is explicitly held |
| Terminology and assessment opportunities justified | Met:D/E; confidence, cognitive decisions, counts and overlap checks specified |
| Quality and independent-review process defined | Met:F/H; no fictitious executed reviews |
| Existing schema/integration understood | Met:G; actual counts, sidecar separation, English/Thai compatibility decision and test limitations |
| No production question files changed by this audit | Met: bank/source hash comparison below; unrelated shared-worktree changes disclosed rather than overwritten |

## Final audit checks observed

- SHA-256 comparisons: all 16 files under `data/`, all 256 files under `content/`, and all 81 original Domain 5 source files matched the starting baseline. This includes both runtime banks/configs and the out-of-scope learning/content modules. The11 shared-code/CSS/test deltas above remain separately disclosed.
- All81 inventory hashes matched the actual source files. Nine reports exist, have valid UTF-8, and all relative Markdown links resolve.
- Blueprint arithmetic verified:26 families,50 slots, objective totals12/12/8/8/10 and cognitive totals6/12/15/9/8. Terminology matrix contains51 rows.
- A fresh real-loader check reconfirmed updated counts24/39/23/33/0, total119, allocations30/22/25/27/21 and current96-item Exam assembly.
- Only the nine `domain-5-audit-*.md` reports are intended deliverable changes from this audit. Temporary contact sheets/check scripts were used for inspection and removed after verification.

## Recommended next task and approval boundary

Review this audit and approve/revise the blueprint, then authorize **Domain 5 knowledge curation and findings resolution**. Curate PQC, IR evidence/data policy, selected AI examples, the verified hash corrections and any additional detailed testing claims; resolve the terminology/language-contract decisions before drafting. Question generation and publication remain future separately authorized work. Stop here for human approval.
