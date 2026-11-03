import json,hashlib,re
from pathlib import Path
from collections import Counter
qa=Path('artifacts/qa/domain5-vocabulary');out=Path('docs/plans/isc2-cc-2026');data=json.loads(Path('content/isc2-cc-2026/vocabulary/domain-5.json').read_text(encoding='utf8'));reviews=json.loads((qa/'entry-review.json').read_text(encoding='utf8'));base=json.loads((qa/'baseline.json').read_text(encoding='utf8'))
protected=[]
for path,sha in base['files'].items():
 if '/vocabulary/domain-' in path and path.endswith('.json') or '/questions/domain-' in path and path.startswith('data/'):
  actual=hashlib.sha256(Path(path).read_bytes()).hexdigest();assert actual==sha,path
  protected.append(dict(path=path,baseline=sha,current=actual,status='UNCHANGED'))
(qa/'preservation.json').write_text(json.dumps(protected,indent=2)+'\n',encoding='utf8')
counts=Counter(e['objective'] for e in data['entries']);scores=Counter(r['total50'] for r in reviews)
report=f'''# Domain 5 Vocabulary production — implementation and validation

**PASS for the implemented vocabulary module.** 35 new entries,438 combined. All existing403 entries and157 updated/583 legacy questions match the original vocabulary baseline. Existing production convention `review_status: needs_human_review` is retained: this is not a human/native-Thai approval claim.

## 1. Source and terminology basis
Uses corrected26-record Domain5 knowledge foundation, remediation dispositions and official September2026 objectives. Original81 source files and earlier audit are reused; no repeated screenshot audit and no unrelated diagram evidence is offered as vocabulary completion evidence. Each new entry has a concept locator and primary-reference section/URL. Canonical English and meaningful Thai preserve authority, uncertainty and scope.

## 2. Candidate selection
88 initial candidates screened.35 retained for distinct learning value, not a quantity quota. `selection-decisions.json` records every initial candidate's inclusion/reuse/not-separately-authored decision. Nonselection is not an assertion of irrelevance. Broad encryption, hashing, logging, false positives/negatives, phishing, tabletop exercises, incident response, patch management and compensating controls reuse existing entries. Related words can be taught within guidance without redundant cards.

## 3. Semantic duplication
All403 existing term/acronym/full-form inventory considered, with ranked definition neighbors as retrieval aids; `definition-comparators.json` retains comparators. Exact IDs/terms checked automatically. Item-specific overlap judgments are in `entry-review.json`. Important retained distinctions: category assignment versus marking versus MAClabel; general encryption versus key-role methods; recording versus aggregation; response activity versus written plan; inventory versus lifecycle; DRbackup simulation versus canonical functional operational exercise. No new exact term duplicate. Lexical matching is not claimed as semantic proof.

## 4. Final terminology matrix and objective coverage
`content/isc2-cc-2026/vocabulary/domain-5.json` is the canonical35-row bilingual terminology dataset. Objective distribution: {dict(sorted(counts.items()))}. Seven standard acronyms: PQC,SIEM,CTI,IOC,IRP,SAST,DAST. No fabricated expansion of MITRE ATT&CK.

| Objective | IDs | Concepts |
|---|---|---|
'''
for obj in sorted(counts):
 group=[e for e in data['entries'] if e['objective']==obj];report+=f"| {obj} | {', '.join(e['id'] for e in group)} | {'; '.join(e['term'] for e in group)} |\n"
report+=f'''
## 5. Entry-level academic QA
35 item records in `artifacts/qa/domain5-vocabulary/entry-review.json`: ten0–5 judgments, hard gates, knowledge/conditions, bilingual examples/guidance and overlap rationale. All dimensions>=4, totals>=45; actual distribution {dict(sorted(scores.items()))}. Each item has a content hash. Technical, objective, terminology, Thai, definition, example, guidance, duplication, learning and traceability responsibilities were separate author review passes. These are editorial judgments, not statistical measurements. Independent delegated review was unavailable after its recorded account usage-limit failure; no independent model/human review is claimed. Every published item passes author QA; human review remains a disclosed refinement opportunity, matching existingD4 conventions.

## 6. Bilingual review
Definitions and examples compared field by field. Thai retains qualifiers such as may/suggest, authorization, retained key copies, supplied policy and vendor support scope. Guidance states a concrete distinction for every entry, rather than promising examination appearance. All105 actual-browser modal checks confirm8 English/Thai term/definition/example/guidance fields across3viewports. No claim that every entry was visually inspected: sampled long-term and mobile views were visually inspected.

## 7. Schema and focused tests
PASS `node tools/verify-vocabulary-domain5.mjs`: exact existing19-field entry schema; IDs; five objectives; real Thai; four controlled corruptions/negative field checks (missing definition/guidance); combined count438; registry; loader/cache; academic gates;14 existing bank hashes. Initial expected missingJSON failure saved in red-test.log. PASS `node tools/verify-vocabulary-domain5-ui.mjs`: actual screen event handlers in NodeDOMdouble, all35 modals and flashcards, categories/objectives, search term/acronym/full form/Thai, empty results, shuffle/reset, domain changes/back. This is not browser layout evidence.

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
'''
# Correct the count of deliberately injected corruptions: two independent field mutations.
report=report.replace('four controlled corruptions/negative field checks','two controlled negative field checks')
(out/'domain-5-vocabulary-production.md').write_text(report,encoding='utf8')
progress='''# ISC2 CC 2026 — Domain 5 Vocabulary Production

Status: implementation and scoped validation PASS.35 new entries;438combined. Definition of Done checked: productionJSON,5objectives,author academicQA, loader/UI, focused/shared regression, actual browser, protected403/157/583 entries. Human/native-Thai approval is not claimed. No unrelated task report is completion evidence.

Baseline: artifacts/qa/domain5-vocabulary/baseline.json (immutable). Resume validation: resume-verification.json. Final preservation: preservation.json (14existing vocabulary/question-bank files hash-identical).

Completed: source reuse/architecture;88candidate screen and cross-domain selection;35bilingual entries with examples/guidance;item-level authorQA with hard gates and rubric;JSON/schema;registeredD5loader;derived registry count;StudyCards/Flashcards/objective/domain filters/search/modal;105actual-browser modal checks and representative navigation/shuffle/reset/reload;D3/D4vocabulary and quiz-engine regression;final report and evidence.

Canonical data: content/isc2-cc-2026/vocabulary/domain-5.json. Academic ledger: artifacts/qa/domain5-vocabulary/entry-review.json. Report: docs/plans/isc2-cc-2026/domain-5-vocabulary-production.md. Browser summary: artifacts/qa/domain5-vocabulary/browser/summary.json. Exact changed files: implementation-files.json.

Limitations: independent delegate hit account usage limit, so final academic review is author model review; existing needs_human_review convention retained. Durable vocabulary progress persistence is absent by existing design. Older question-bank fullsuite fails a pre-vocabulary concurrent ReadingNotesD1hash change; no question entry changed. No remaining required scoped implementation step; optional human/native-Thai refinement may continue without regenerating accepted data.

Wrong-task attribution preserved for transparency: this execution earlier created reading-notes-selective-diagram-remediation-verification-addendum.md and current-semantics.log/current-legibility.log in selective-diagram-remediation; prior delegate created its baseline. Those are unrelated and were neither used as vocabulary evidence nor removed/reverted. Concurrent production ReadingNotes/diagram changes remain untouched.
'''
(out/'domain-5-vocabulary-progress.md').write_text(progress,encoding='utf8')
tracker=Path('docs/plans/task.md');s=tracker.read_text(encoding='utf8');s=re.sub(r'^\| Domain 5 Vocabulary production \|.*$', '| Domain 5 Vocabulary production | PASS — implemented and browser verified |35new/438total;all5objectives;105modalchecks;D3/D4vocabulary+engine regressions pass;403existing vocabulary and157updated/583legacy questions preserved. [Report](isc2-cc-2026/domain-5-vocabulary-production.md). |',s,flags=re.M);tracker.write_text(s,encoding='utf8')
files=['content/isc2-cc-2026/vocabulary/domain-5.json','js/core/vocabulary-loader.js','js/ui/screen-vocabulary.js','data/vocabulary-count.js','data/exam-versions.js','data/exam-version-info.js','tools/verify-vocabulary-domain5.mjs','tools/verify-vocabulary-domain5-ui.mjs','tools/verify-vocabulary-domain3.mjs','tools/verify-vocabulary-domain4.mjs','docs/plans/isc2-cc-2026/domain-5-vocabulary-production.md','docs/plans/isc2-cc-2026/domain-5-vocabulary-progress.md','docs/plans/task.md']+[str(p).replace('\\','/') for p in qa.rglob('*') if p.is_file() and p.name!='implementation-files.json']
(qa/'implementation-files.json').write_text(json.dumps([dict(path=p,sha256=hashlib.sha256(Path(p).read_bytes()).hexdigest()) for p in sorted(set(files))],indent=2)+'\n',encoding='utf8')
print('Final vocabulary report/checkpoint/manifest saved;35new,438total;14existing bank file hashes pass.')
