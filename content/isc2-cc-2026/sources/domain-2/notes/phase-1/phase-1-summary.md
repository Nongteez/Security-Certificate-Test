# Domain 2 - Phase 1 summary and architecture audit

Prepared: 2026-10-23 (Asia/Bangkok). Phase 1 only; audit/editorial findings, not approved knowledge or question content.

## Result and readiness

**Phase 1 source audit completed; Phase 2 has not started.** The batch supports planning a source-linked draft extraction after explicit user approval. It is **not sufficient for a complete academically verified current Domain 2 package** without supplemental AI coverage and resolution of the issues below.

| Requested result | Actual finding |
| --- | --- |
| Files discovered | **39**, 13,805,705 bytes: **1 TXT + 38 PNG**; no PDF, PPT/PPTX, Word document, separate note, audio/video or other file type in the target directory |
| Transcripts read | **1/1**, full 115 physical lines / 58 nonblank paragraphs; no timestamps |
| Images inspected | **38/38**, individually opened: **37 course captures + 1 unrelated product listing** (S20). Four repeated course views add no separate lesson; approximately 33 distinct course views |
| Wholly unreadable / inaccessible | **0**; crop edges/overlays remain limited, as recorded per image |
| Outline | Current official Domain 2 title/weight and four IDs independently confirmed; readable base-topic evidence for 2.1-2.4 |
| Coverage limit | No explicit AI-related Domain 2 teaching; recovery/measurement depth and academic correctness remain partial |
| Main conflict | Critical-vulnerability scorecard threshold: T:L111 says <10%; S36 shows <10, with unitless actual 12. No reconciliation |
| Other academic concerns | Caption corruption, PHI/legal scope, ordinal risk scale labeled quantitative, recovery guarantees/site timing/RPO assumptions, indicator interpretation and oversimplified exam mnemonics |
| Source completeness | Supplied local files fully inspected; original deck/recording, exact page count, authorship and reuse-rights evidence unavailable |

CONFIRMED means source-supported, not academically approved. The report does not certify coverage of every exam scenario, or every original lecture slide. Detailed numbering and source-to-objective evidence are in [exam outline coverage](exam-outline-coverage.md), checked against the [official ISC2 page](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) and linked dated English PDF.

## Existing project architecture - conventions to reuse

Inspected the architecture and Domain 1 pipeline before interpreting the new materials. Historical plans are distinguished from current files. The project uses Markdown source/curation records and JavaScript runtime question modules; no new schema or canonical production JSON is needed for Phase 1.

### Source intake and knowledge workflow

The [source archive README](../../../../../../content/isc2-cc-2026/sources/README.md), [manifest](../../../../../../content/isc2-cc-2026/sources/source-manifest.json), [intake protocol](../../../../../../docs/plans/isc2-cc-2026/content-intake-checklist.md) and [content README](../../../../../../content/isc2-cc-2026/README.md) establish provenance tiers, exact original filenames, source IDs/hashes and staging/runtime separation. Intended progression is intake -> provenance/rights review -> official mapping -> draft extraction/curation -> technical/bilingual review -> duplicate/quality checks -> approval -> separate production import/verification.

Domain 1's actual extraction lives in [knowledge-map.md](../../../../../../content/isc2-cc-2026/sources/domain-1/extracted-knowledge/knowledge-map.md), with companion terminology, distinctions, exam-language and [quality report](../../../../../../content/isc2-cc-2026/sources/domain-1/extracted-knowledge/source-quality-report.md). Its concepts have KNOW-D1-nnn IDs; source-supported drafts are not technical approval. The [curation plan](../../../../../../content/isc2-cc-2026/knowledge/domain-1-curation-plan.md) adds prioritized candidates, bounded selection and held claim/opportunity rules. Reviewed knowledge staging is separately reserved in [knowledge/domain-1.md](../../../../../../content/isc2-cc-2026/knowledge/domain-1.md); its introductory 'no entries' wording is not evidence that no Phase 2 drafts exist elsewhere.

For Domain 2, this audit uses the existing `sources/domain-2/notes/` location, in a `phase-1/` subfolder. Original materials stay in `ISC2 Update 2026/Domain 2/`; the old archive's empty categories and README are not changed. Audit-local T/S identifiers are not silently registered as canonical manifest IDs. A future intake must reconcile source registration explicitly.

### Canonical Knowledge structure

[Knowledge content plan](../../../../../../docs/plans/isc2-cc-2026/knowledge-content-plan.md), section 3, specifies YAML document metadata: `id, domain_id, domain_name, objective_id, objective_title, topic_name, source_reference, provenance_tier, review_status, last_verified_date`, with optional `reviewer`.

The reusable [knowledge template](../../../../../../content/isc2-cc-2026/templates/knowledge-template.md) specifies entry-level identification (`KNOW-DX-SEQ`, objective/topic/source/type/language), EN/TH explanations, terminology, practical scenarios, related concepts/AI context and technical/translation review status. Domain 1's actual canonical map uses Markdown concept headings, meaning/definition, relationships, examples, precise source citations and issue flags; there is **no standalone machine-enforced canonical-knowledge JSON schema found**. Reuse this distinction in future extraction rather than silently changing document contracts or treating examples in templates as approved entries.

### Question Opportunity structure

The [Domain 1 curation plan](../../../../../../content/isc2-cc-2026/knowledge/domain-1-curation-plan.md), 'Meaningful question opportunities' table (around line 493), is the concrete opportunity record: opportunity ID/status, served concepts/held candidates, source seed, proposed reasoning/decision skill, boundaries and nonduplication constraints. `O01-O18` are PLANNABLE families; `O19/O20` are HOLD. Candidate IDs `D1-Cnnn` and canonical `KNOW-D1-nnn` are distinct. A family is not a promised question count or approved answer key. No separate formal Question Opportunity JSON schema was found and no Domain 2 opportunity entries were created.

### Question Bank and next-bank

The [question schema plan](../../../../../../docs/plans/isc2-cc-2026/question-bank-plan.md) and [staging template](../../../../../../content/isc2-cc-2026/templates/question-template.md) separate runtime fields from provenance/editorial records. Core runtime fields are `id, dom, question, options, correct_idx, explanation, short_explanation_en, question_th, options_th, explanation_th`; four options per language and a zero-based key. Staging also records objective, source, difficulty/type/qualifier, technical/answer/translation/duplicate/publication statuses and distractor rationales.

Current runtime is under `data/certs/isc2/cc/versions/`: `2026/` is the **583-question legacy bank**; `next-bank/` holds **24 Domain 1 questions with IDs 584-607**. Its [configuration](../../../../../../data/certs/isc2/cc/versions/next-bank/exam.config.js) marks Domain 1 available and Domain 2 unavailable with zero questions; [D2 question module](../../../../../../data/certs/isc2/cc/versions/next-bank/questions/domain-2.js) exports an empty array. Runtime D1 objects also contain `explanation_detail`; their provenance is maintained in staging records rather than an observed `_meta` block. No new IDs were assigned.

Important documentation drift: high-ID plans recommend 1001+, while current runtime uses 584-607; [D1 staging header](../../../../../../content/isc2-cc-2026/questions/domain-1.md) still says 26% and 166 combined D1 questions. Those are historical state, not the current September-outline domain weight or current isolated next-bank count. Future ID/import policy requires reconciliation; Phase 1 changes none of these files.

### Vocabulary structure

The [vocabulary schema](../../../../../../content/isc2-cc-2026/vocabulary/schema.md) defines a top-level object with domain metadata, version, total_entries, date and entries. Each entry has ID, term/acronym/full form, Thai meaning, EN definition/TH explanation, category/domain/objective, exam relevance, bilingual examples, confusion/search lists, sources and source/review status. A citation has `source_id, locator, timestamp, concept_id`. Categories include core/acronym/exam-language/confusing/scenario terms; source status distinguishes source-supported, editorial, review-required and supplemental material. Draft/needs-human-review/approved remain separate academic states. Domain 2 has no timecodes, so future work cannot fabricate timestamp values from Domain 1's pattern. No vocabulary dataset was generated.

### Traceability and academic QA

Keep each claim tied to unchanged file/line or visible capture and distinguish official scope, instructor claims and editorial inference. Preserve unresolved conflicts and holds; do not duplicate concepts merely because capture variants repeat them. Source agreement from one course is not independent verification. EN/TH semantic parity, correct answers and distractor reasoning require qualified review; no script establishes them alone.

Relevant inspected tools include historical source SHA-256 verification, D1-specific batch checks, vocabulary extraction checks, bank isolation and question-bank audits. Their assumptions and side effects are recorded in [quality report](source-quality-report.md). Actual execution: vocabulary extraction checks **5/5 pass**; isolation suite **fails at existing invariant 9**, expecting vocabulary coming-soon rather than current available. Invariants 1-8 passed, including bank counts/uniqueness. No failure was repaired. No broad claim that all academic or application checks pass is made.

## Deliverables

Only these seven Phase 1 Markdown reports were created:

1. [source-inventory.md](source-inventory.md) - every source path/type/size/classification/access result, dimensions and exact fingerprints.
2. [transcript-analysis.md](transcript-analysis.md) - full transcript topic boundaries, examples, terms, line references and concerns.
3. [slide-analysis.md](slide-analysis.md) - 38 individual image inspections, text/visual observations, additions and limits.
4. [source-cross-reference.md](source-cross-reference.md) - shared/unique teaching, repeated captures, conflict and sequence gaps.
5. [exam-outline-coverage.md](exam-outline-coverage.md) - current official numbering/weight/subtopic mapping and missing AI context.
6. [source-quality-report.md](source-quality-report.md) - quality assessment, 14 open issues, limited authoritative checks and readiness gates.
7. [phase-1-summary.md](phase-1-summary.md) - this decision record and architecture findings.

## Verification and change boundaries

A pre-authoring in-memory SHA-256/size snapshot covered **528 existing non-Git files**, including user-supplied untracked Domain 2/3 materials. Final comparison found **all 528 unchanged**, **zero missing**, and **exactly seven added files**, all the reports listed above (535 non-Git files total). Initial Git state already contained untracked original Domain 2 and Domain 3 directories; those remain unchanged. Mechanical report checks found **zero broken local links or undefined source references**, verified all 38 image-inspection headings in sequence, and independently recounted 39 inputs / 13,805,705 bytes / 115 transcript lines / 58 nonblank paragraphs. Source fingerprints are published in the inventory. No extra baseline file, helper script, copied source, production dataset, question, schema change, UI/code edit, commit, deployment or push was created by this audit.

## Recommended next steps - after Phase 1 approval

1. Confirm course attribution and obtain the original deck/recording if available; preserve captions and image variants as evidence.
2. Resolve D2-Q03 scorecard units and prioritize legal/PHI, risk-scale and recovery assumptions before treating affected claims as knowledge.
3. Select authoritative supplemental AI coverage with separate provenance; retain source-missing labels rather than pretending the course taught it.
4. Reconcile historical manifest/ID/documentation and D1-only validator assumptions before any later registration, question authoring or runtime import.
5. After explicit user approval, perform bounded source-linked Phase 2 draft extraction using existing conventions, with issue holds and technical/bilingual review. Production questions, vocabulary and bank activation remain separate later work.

**Stop point:** Phase 1 only. Await user approval before starting Phase 2.

