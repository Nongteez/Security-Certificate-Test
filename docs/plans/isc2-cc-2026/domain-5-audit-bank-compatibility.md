# Domain 5 question-bank audit — Existing bank compatibility (G)

Date: 2026-11-03. Read-only inspection and verification. This audit made no bank, config, UI, CSS, Vocabulary, Reading Notes, Learning Slides, application or validation-source edits. Other changes appeared in the shared working tree during the audit; the summary records that preservation limitation. Source enumeration/imports examined every runtime question module's structure; selected items, editorial sources and related tests were read for conventions. This is **not a new academic review of all 702 existing questions**.

## Version identity and verified counts

Repository root: `D:/_Coding/SEC-CERT-TEST/`. Paths below are root-relative.

| Runtime version / path under `data/certs/isc2/cc/versions/` | D1 | D2 | D3 | D4 | D5 | Total | IDs |
|---|---:|---:|---:|---:|---:|---:|---|
| `2026/questions/domain-*.js` — registry labels it Pre-2026 | 142 | 65 | 93 | 156 | 127 | 583 | Across all modules, 1–583; domain ranges interleave |
| `next-bank/questions/domain-*.js` — September2026 outline | 24 | 39 | 23 | 33 | 0 | **119** | D1 584–607; D2 608–646; D3 647–669; D4 670–702; D5 empty |

Direct module imports found **702 questions and 702 distinct IDs** across both banks. `data/exam-versions.js` registry, `next-bank/exam.config.js` and actual module arrays agree on 119. Domain 5 is `available:false`, counts zero, with an empty exported array. The older directory name `2026` is not the updated outline's identity; importing it accidentally would mix unrelated content and weights.

`content/isc2-cc-2026/questions/domain-5.md` is an existing empty editorial staging document. It reserves production IDs **1001+**, contains no staged questions, and gives a 21-question mock-exam draw. That draw is not an authoring quota. The staging scope description under 5.5 is incomplete relative to the verified outline (application/physical testing must be included). Its schema list predates structured explanation use. Preserve this file now; update only in a separately authorized authoring task.

**ID recommendation:** retain symbolic authoring IDs such as `D5-AT01-01` until approval; respect the existing **1001+ reservation** when numerical runtime IDs are assigned. Do not silently use 703 merely because it follows the current maximum. Recheck the entire repository at publication time for new reservations/collisions. IDs remain stable across repairs and may not be recycled to hide a retired item.

## Current runtime contract

Content is JavaScript ES modules exporting `const questions = [...]` as default, not raw production JSON. Current updated D1–4 all use the same **11 top-level fields**:

| Field | Meaning / accepted convention |
|---|---|
| `id` | Unique numeric question identity; future validator should require integer |
| `dom` | Domain number, future D5 exactly 5 |
| `question` | Canonical English stem |
| `options` | Four English option strings |
| `correct_idx` | Integer zero-based key, 0–3 |
| `explanation` | Complete English fallback explanation; later domains use explicit correct and incorrect-option wording |
| `short_explanation_en` | Concise English learning takeaway |
| `question_th` | Existing Thai stem field |
| `options_th` | Existing Thai option array, same order/key mapping |
| `explanation_th` | Complete Thai fallback explanation |
| `explanation_detail` | Structured bilingual feedback described below |

Structured feedback uses `correct:{en,th}` and `incorrect:[{letter,text_en,text_th}]`; letters correspond to A–D and exclude the correct letter. Optional bilingual `exam_tip` and `example` occur in the renderer/D1 patterns. Renderer also recognizes an optional incorrect-option `idx`, but existing D3/D4 production mapping uses letters; avoid introducing a second index unnecessarily. A future D5 validator should match the established production contract and strip all authoring metadata.

There are **no top-level objective, cognitive, difficulty, source, review-status or duplicate-status fields** in the current updated runtime objects. A separate authoring/QA manifest is the compatible place for them. `dom` alone is not objective metadata. Difficulty in this audit is a planned editorial judgment, not an existing engine feature.

## Existing staging and review patterns

- `content/isc2-cc-2026/questions/domain-3-draft.mjs` and `domain-4-draft.mjs` retain editorial records and map them into runtime objects. D4 choices contain `[English option, Thai option, English rationale, Thai rationale]`. Its `buildProductionQuestion` preserves fallback strings and constructs structured feedback.
- D4 editorial fields include objective, local bullet description, targets, knowledge IDs, sources, tested concept and decision. Its `reviewRecords` explicitly says independent human review is not claimed. Reuse the separation principle; do not infer that an `ACCEPTED` string proves human/native-Thai approval.
- Current D5 Markdown staging includes provenance, difficulty, qualifier, translation, duplicate and publication status. Extend a future sidecar/authoring record rather than the production schema.
- `tools/validate-domain1-batch.mjs` is **not reusable unchanged** for D5: it hardcodes `dom:1`, starts IDs at 584, loads only the legacy bank for existing comparisons, and checks D1-specific opportunities. It also range-checks numeric key/ID values without consistently requiring integers. Its `_meta` warning is not evidence that runtime `_meta` is supported.

## English prompts and Thai compatibility decision

The request calls for English stems/options and bilingual explanations. Existing application modes offer EN/TH/both, and current D3/D4 integration validators require actual Thai text in `question_th`/`options_th`. The renderer selects Thai prompt/option text in Thai mode. Neither silently inserting English into Thai fields nor inventing new fields meets that contract.

**During future drafting**, keep canonical English stems/options and bilingual rationales in staging as requested. **Before production mapping**, obtain a decision whether auxiliary Thai prompt/option translations may populate existing fields while English remains canonical, or whether an English-prompt-only path is desired and needs separate compatibility work/authorization. This audit does not change the language contract or approve a UI/schema modification. No current work depends on that decision because no questions are being authored.

## Practice, exam and saved-session integration

`js/core/question-loader.js` resolves the explicit registered version, validates config totals, loads only that bank's domain module, checks count/domain/ID uniqueness and records version origin in a WeakMap. Multi-domain loading rejects duplicate IDs. Config validation needs actual totals to match both registry and domain counts; changing only a question array would make loading fail.

`js/ui/screen-start.js` enables domains with positive counts and `available !== false`. `js/core/quiz-engine.js` filters and shuffles a copied Practice pool, samples per-domain Exam allocations, then shuffles the combined question sequence. It does not redistribute deficits from undersupplied domains. Stored sessions use version-specific question IDs and reload through the same version. Cross-version objects must not be mixed even if IDs happen to match.

`js/ui/components/explanation-2026.js` renders option-specific correct/incorrect sections in EN/TH/both and falls back for unstructured content. Incorrect rationale letters must remain aligned if authored options move. No option-order randomizer was identified in the inspected assembly paths; question shuffle is not answer-leakage protection.

Current 125-item allocations with normalized weights `[24,17.3,20,21.3,17.3]` are **[30,22,25,27,21]**. Pools supply `[24,22,23,27,0]`, totaling **96/125**. A future 50-item D5 pool supplies 21, bringing the unchanged sampler to **117/125**; D1 and D3 shortages remain. Percentages sum to 99.9 due to displayed rounding and the engine normalizes them. The app's 70% pass threshold and 90 seconds/question are practice settings, not equivalents to ISC2's scaled passing score or adaptive delivery.

## Duplicate detection and integration gates

Existing tools include token-Jaccard comparisons (`validate-domain1-batch.mjs`) and TF-IDF ranking (`verify-domain4-integration.mjs --duplicates`). Similarity helps prioritize pairs; it does not establish semantic uniqueness or cross-item leakage. Future D5 checks must compare both banks plus the candidate batch, including English/Thai exact normalization and concept/decision review. Do not run migration/append/populate scripts as validation: they can mutate content.

Publication, only after later authorization, would need synchronized changes to D5 runtime module, the **next-bank** domain/config totals and availability, registry count/description, and D5-specific checks. Existing D1–4 question objects and all legacy content must remain byte-identical. Existing tests that assert D5 empty must be deliberately updated in that future scope; this audit grants no permission to edit them now.

## Verification run in this audit

Commands ran from the repository root using Node v24.15.0. These are observed results on the existing checkout, before any production change; this audit's reports do not repair pre-existing test assumptions.

| Command | Observed result | Interpretation |
|---|---|---|
| Direct ES-module import/count/unique-ID inspection | 583 legacy +119 updated; 702 unique | Confirms arrays, metadata consistency and current maximum; no academic acceptance implied |
| `node tools/verify-domain2-integration.mjs` | Exit 0; all eight checks passed | Current D2 and dynamic whole-bank integration |
| `node tools/verify-domain4-integration.mjs` | Exit 0; 33 staging items, 119 updated, 96/125 current Exam draw | Current schema/source links/rationale mapping, EN/TH/both rendering, corruption guards, duplicate collision checks, setup, Practice, scoring, reload and isolation |
| `node tools/verify-explanation-formatting-2026.mjs` | Exit 0; 8 tests passed, 0 failed | Structured explanations and legacy fallback/isolation |
| `node tools/verify-domain3-integration.mjs` | Exit 1; staging/rendering checks passed, then ENOENT for `original/` | Required snapshot/hash fixture directory missing; whole script **not passed** |
| `node tools/verify-isc2-question-migration.mjs` | Exit 1; ENOENT for root `isc2_cc_BothThai-eng_583quiz.html` | Historic source HTML unavailable; preservation cannot be proven against that absent original |
| `node tools/verify-complete-isolation.mjs` | Exit 1; expects updated total 24, actual119 | Stale historical count; do not reduce current bank to satisfy it |
| `node tools/audit-version-isolation.mjs` | Exit 0; read-only inventory, no duplicate legacy IDs | Supporting inventory only, not complete behavioral test |

`tools/verify-exam-versions.mjs` was inspected and contains assumptions that next-bank is unavailable; it was not run as a current acceptance test. No browser automation/regression suite was run because no product content/code changed. These are explicit limits, not an all-tests-pass claim.

## Future D5 regression requirements

Before later activation: require a D5 staging validator for exact supported fields, integer keys/IDs, unique options, bilingual rationale parity, source/knowledge links, objective/bullet coverage and corruption fixtures. Check real versioned loader, D5-only and mixed Practice, finite weighted Exam draws, disabled-to-enabled domain setup, result scoring, EN/TH/both explanations, saved-session resume and cross-version rejection. Record exact duplicates and semantic-overlap adjudication. Check all protected hashes. Resolve missing-fixture/stale-suite baseline issues separately; do not label an existing failed test as passed merely because its failure predates D5.
