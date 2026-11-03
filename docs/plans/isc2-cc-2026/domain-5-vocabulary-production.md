# Domain 5 Vocabulary production — implementation and validation

**PASS for the implemented vocabulary module.** 35 new entries,438 combined. All existing403 entries and157 updated/583 legacy questions match the original vocabulary baseline. Existing production convention `review_status: needs_human_review` is retained: this is not a human/native-Thai approval claim.

## 1. Source and terminology basis
Uses corrected26-record Domain5 knowledge foundation, remediation dispositions and official September2026 objectives. Original81 source files and earlier audit are reused; no repeated screenshot audit and no unrelated diagram evidence is offered as vocabulary completion evidence. Each new entry has a concept locator and primary-reference section/URL. Canonical English and meaningful Thai preserve authority, uncertainty and scope.

## 2. Candidate selection
88 initial candidates screened.35 retained for distinct learning value, not a quantity quota. `selection-decisions.json` records every initial candidate's inclusion/reuse/not-separately-authored decision. Nonselection is not an assertion of irrelevance. Broad encryption, hashing, logging, false positives/negatives, phishing, tabletop exercises, incident response, patch management and compensating controls reuse existing entries. Related words can be taught within guidance without redundant cards.

## 3. Semantic duplication
All403 existing term/acronym/full-form inventory considered, with ranked definition neighbors as retrieval aids; `definition-comparators.json` retains comparators. Exact IDs/terms checked automatically. Item-specific overlap judgments are in `entry-review.json`. Important retained distinctions: category assignment versus marking versus MAClabel; general encryption versus key-role methods; recording versus aggregation; response activity versus written plan; inventory versus lifecycle; DRbackup simulation versus canonical functional operational exercise. No new exact term duplicate. Lexical matching is not claimed as semantic proof.

## 4. Final terminology matrix and objective coverage
`content/isc2-cc-2026/vocabulary/domain-5.json` is the canonical35-row bilingual terminology dataset. Objective distribution: {'5.1': 8, '5.2': 8, '5.3': 5, '5.4': 6, '5.5': 8}. Seven standard acronyms: PQC,SIEM,CTI,IOC,IRP,SAST,DAST. No fabricated expansion of MITRE ATT&CK.

| Objective | IDs | Concepts |
|---|---|---|
| 5.1 | VOC-CC26-D5-001, VOC-CC26-D5-002, VOC-CC26-D5-003, VOC-CC26-D5-004, VOC-CC26-D5-005, VOC-CC26-D5-006, VOC-CC26-D5-007, VOC-CC26-D5-008 | Data Classification; Data Labeling; Media Sanitization; Cryptographic Erase; Symmetric Encryption; Asymmetric Cryptography; Collision Resistance; Post-Quantum Cryptography |
| 5.2 | VOC-CC26-D5-009, VOC-CC26-D5-010, VOC-CC26-D5-011, VOC-CC26-D5-012, VOC-CC26-D5-013, VOC-CC26-D5-014, VOC-CC26-D5-015, VOC-CC26-D5-034 | Log Aggregation; Security Information and Event Management; Security Event Triage; Event Correlation; Cyber Threat Intelligence; Indicator of Compromise; MITRE ATT&CK; Insider Risk |
| 5.3 | VOC-CC26-D5-016, VOC-CC26-D5-017, VOC-CC26-D5-018, VOC-CC26-D5-019, VOC-CC26-D5-020 | Incident Response Plan; Preservation Hold; Containment; Eradication; Functional Exercise |
| 5.4 | VOC-CC26-D5-021, VOC-CC26-D5-022, VOC-CC26-D5-023, VOC-CC26-D5-024, VOC-CC26-D5-025, VOC-CC26-D5-026 | Asset Lifecycle Management; End of Support; Configuration Baseline; Configuration Drift; Change Control; Rollback |
| 5.5 | VOC-CC26-D5-027, VOC-CC26-D5-028, VOC-CC26-D5-029, VOC-CC26-D5-030, VOC-CC26-D5-031, VOC-CC26-D5-032, VOC-CC26-D5-033, VOC-CC26-D5-035 | Red Team; Blue Team; Purple Team; Vulnerability Scanning; Static Application Security Testing; Dynamic Application Security Testing; Threat Modeling; Tailgating |

## 5. Entry-level academic QA
35 item records in `artifacts/qa/domain5-vocabulary/entry-review.json`: ten0–5 judgments, hard gates, knowledge/conditions, bilingual examples/guidance and overlap rationale. All dimensions>=4, totals>=45; actual distribution {46: 2, 47: 15, 48: 18}. Each item has a content hash. Technical, objective, terminology, Thai, definition, example, guidance, duplication, learning and traceability responsibilities were separate author review passes. These are editorial judgments, not statistical measurements. Independent delegated review was unavailable after its recorded account usage-limit failure; no independent model/human review is claimed. Every published item passes author QA; human review remains a disclosed refinement opportunity, matching existingD4 conventions.

## 6. Bilingual review
Definitions and examples compared field by field. Thai retains qualifiers such as may/suggest, authorization, retained key copies, supplied policy and vendor support scope. Guidance states a concrete distinction for every entry, rather than promising examination appearance. All105 actual-browser modal checks confirm8 English/Thai term/definition/example/guidance fields across3viewports. No claim that every entry was visually inspected: sampled long-term and mobile views were visually inspected.

## 7. Schema and focused tests
PASS `node tools/verify-vocabulary-domain5.mjs`: exact existing19-field entry schema; IDs; five objectives; real Thai; two controlled negative field checks (missing definition/guidance); combined count438; registry; loader/cache; academic gates;14 existing bank hashes. Initial expected missingJSON failure saved in red-test.log. PASS `node tools/verify-vocabulary-domain5-ui.mjs`: actual screen event handlers in NodeDOMdouble, all35 modals and flashcards, categories/objectives, search term/acronym/full form/Thai, empty results, shuffle/reset, domain changes/back. This is not browser layout evidence.

## 8. Integration
Added domain5.json. Loader aggregates registered domains and computes totals/categories from entries. UI enablesD5, adds5.1–5.5 filters and label. Registry count derives from actual JSON through data/vocabulary-count.js; no hardcoded438. Vocabulary information text updated from obsolete coming-soon language. Existing UI/CSS layout and progress behavior retained. Native JSON module imports are used for synchronous registry counts; the tested Chromium browser accepts them.

## 9. Actual browser acceptance
Actual Chromium in-app browser via CUA at verified loopback5196. Fresh origin resolved stale cached modules on5195. Evidence under `artifacts/qa/domain5-vocabulary/browser/`:105 all-entry modal checks at1920×1080,1366×768,390×844; all5 objective counts8/8/5/6/8; SIEM andThai searches; Study Cards; flip/next/previous; all35 shuffled terms unique; reset order; reset filters438; existing domain counts110/101/102/90; reload/reopen438; modal footer visible;0captured console warnings/errors; no horizontal overflow. Scrollable mobile modal reaches its bottom (scrollTop212,scrollHeight888,clientHeight676), keeping navigation accessible. Screenshots include all3 PQCmodal and study viewport samples, flashcard front/back and scrolled mobile guidance. Browser summary.json retains exact results. Vocabulary has no durable progress storage in existing implementation: reload returns to landing and reopening resets local filters/card position; no persistence feature is fabricated.

## 10. Regression and preservation
PASS updated existingD3vocabulary suite10/10, existingD4full content/loader/UI suite, quiz engine7/7, both newD5 suites. D3/D4 tests changed only expected combined total andD5availability after capturing expected403-versus438 failures; no assertions disabled. Original403 entries and740 questions are hash-identical (preservation.json). No ReadingNotes, diagrams, slides, quiz engine or question content was changed by this implementation. Older `verify-domain5-integration.mjs` fails its historical ReadingNotesD1hash guard: the same concurrent difference is recorded in resume-verification.json before vocabulary changes. That suite is not reported green or weakened. Scope-specific preservation and engine checks pass.

## 11. Exact changed files and evidence
Production: content/isc2-cc-2026/vocabulary/domain-5.json;js/core/vocabulary-loader.js;js/ui/screen-vocabulary.js;data/vocabulary-count.js;data/exam-versions.js (vocabulary count only);data/exam-version-info.js (vocabulary information only).
Tests: tools/verify-vocabulary-domain5.mjs;tools/verify-vocabulary-domain5-ui.mjs;tools/verify-vocabulary-domain3.mjs;tools/verify-vocabulary-domain4.mjs.
Evidence/reproducibility: artifacts/qa/domain5-vocabulary/*; exact file manifest in implementation-files.json. Tracker: docs/plans/isc2-cc-2026/domain-5-vocabulary-progress.md and own row in docs/plans/task.md. All other concurrent changes preserved; no Git commit/push/reset.

## 12. Readiness and limits
Ready for Domain5 Study Cards, Flashcards, bilingual Detail Modals, search and filters in the tested Chromium environment. No native-Thai/human sign-off, empirical learning effectiveness, durable progress tracking or universal repository-green claim. Historical ReadingNotes hash failure remains external to this vocabulary change. ExistingD1–4 content was preserved, not academically re-authored or certified by this task.
