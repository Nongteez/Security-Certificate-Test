from pathlib import Path
p=Path('docs/plans/isc2-cc-2026/domain-2-objective-2-1-redesign.md')
s=p.read_text(encoding='utf-8')
s=s.replace('**Architecture:** Keep the existing lesson data, IDs, publication metadata, semantic Reading/Info renderers, viewer and V1 progress. Author concise bilingual presentation compositions exclusively in the Lesson 1 module and stylesheet. Detailed source lists remain available in Reading/Info; no shared production change is planned.','**Architecture:** Keep lesson identities, publication metadata, semantic Reading/Info renderers, viewer and V1 progress. Author concise bilingual compositions in the Lesson1 module/stylesheet. The final user-directed editorial pass updates only Slide1’s summary and Slide2’s Reading/Info wording/table; details and preservation evidence follow. No shared production module changes.')
s=s.replace('Started 2026-10-29. **In progress — no human acceptance claimed.**','Started and verified 2026-10-29. **Lesson1 ready for human visual review — acceptance pending. Lesson2 implementation has not begun.**')
s=s.replace('No data/revision/catalog/storage/shared-renderer edits; the original full Reading text, including historical writing, stays byte-identical. The rejected sentence is not emitted anywhere on the presentation canvas.','No revision/catalog/storage/shared-renderer edits. The initial pass retained Reading verbatim; the subsequent user-directed editorial clarification below authorizes narrow Lesson1 data edits. The rejected sentence is now absent from presentation, Reading and Info.')
s=s.replace('Implementation and verification results will be appended after execution. Human acceptance remains pending. Lesson2 has not been edited.','''### Final status

**Lesson1 implemented and verified; ready for human visual acceptance. Objective2.1 redesign as a whole remains incomplete because Lesson2 implementation requires that acceptance.** Six existing slides, both languages, unchanged lesson/slide IDs/order and revision1. No new lesson, slide, engine, dependency or catalog entry. No commit/push.

### Six-slide before/after and content preservation

BEFORE links reference the rejected earlier remediation evidence, preserved byte-for-byte. AFTER sheets pair TH/EN at each desktop size. Screenshots were visually inspected, including the corrected Slide3 footer and all four final scenario feedback choices. Source data is preserved except for the explicitly listed editorial fields.

| Slide / previous problem | Final instructional composition | Reading/Info content | Before / final screenshots |
|---|---|---|---|
|1 `slide-01-grc-foundations`: roof/cycle metaphor, repeated MFA containers and competing labels.|One business purpose branches into Governance, Risk Management and Compliance roles, each with a relevant MFA example. Title states the business purpose.|Full role definitions, applicable obligation sources and business-alignment explanation retained. Only the closing arrow summary becomes a sentence explaining complementary roles.|[Before](../../../artifacts/qa/domain-2-visual-remediation/final-L1-S1-sheet.jpg), [1366 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S1-1366.jpg), [1920 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S1-1920.jpg)|
|2 `slide-02-purpose-of-grc`: seven-in-three-lenses taxonomy, number mapping, dense purpose grid.|Separate access-review requests compared with one relevant, verified evidence record; coordination is demonstrated rather than catalogued.|All seven purposes retained in the same order; their seven practical explanations are verbatim. Remove the entire invented cluster column, ordinal prefixes, numeric cross-references, grouped narrative and rejected takeaway. A two-column table and plain paired prose explain the same concepts. The evidence-reuse example explicitly requires each request’s scope/requirements to match.|[Before](../../../artifacts/qa/domain-2-visual-remediation/final-L1-S2-sheet.jpg), [1366 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S2-1366.jpg), [1920 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S2-1920.jpg), [Reading/Info table](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-editorial-table.jpg)|
|3 `slide-03-importance-of-grc`: eleven equal-weight tiles, counters and crowded overview.|Four concrete breakdown→remedy rows make inconsistent rules, unnoticed risks, missed duties and absent ownership visible. Resilience statement is qualified.|All seven benefits, four failure modes, detailed mechanisms and limitations retained unchanged.|[Before](../../../artifacts/qa/domain-2-visual-remediation/final-L1-S3-sheet.jpg), [1366 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S3-1366.jpg), [1920 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S3-1920.jpg)|
|4 `slide-04-grc-frameworks`: dense three-column definitions, name parade and repeated memory footer.|Three spacious task→reference matches: cyber-risk outcomes/NIST CSF; ISMS requirements/ISO27001; enterprise IT governance and management/COBIT. Complementary use and legal boundary remain explicit.|Original full framework names/definitions, NIST CSF2 Govern, standards/laws distinctions, scoped certification nuance and bounded AI supplement retained unchanged.|[Before](../../../artifacts/qa/domain-2-visual-remediation/final-L1-S4-sheet.jpg), [1366 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S4-1366.jpg), [1920 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S4-1920.jpg)|
|5 `slide-05-grc-distinctions`: stacked cards, arbitrary boundary numbers and repeated connector text.|Governance sends direction to Management; evidence returns. A scoped payment audit contrasted with a corporate VPN lacking MFA demonstrates why compliance does not mean risk-free.|Original role, risk/compliance, ownership and audit-scope explanations retained unchanged.|[Before](../../../artifacts/qa/domain-2-visual-remediation/final-L1-S5-sheet.jpg), [1366 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S5-1366.jpg), [1920 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S5-1920.jpg)|
|6 `slide-06-applied-grc-scenario`: giveaway option titles, repeated story/labels and decorative prompt art.|Short NovaPay brief, four plain actions, separate reasoning panel. Choice C remains recommended. A’s presentation feedback is a concise bilingual paraphrase without source-capture code S06; B/C/D retain the full original reasons.|Complete original case, options and detailed rationales retained unchanged. No scenario answer is added to persistent progress.|[Before](../../../artifacts/qa/domain-2-visual-remediation/final-L1-S6-sheet.jpg), [1366 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S6-1366.jpg), [1920 TH/EN](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-S6-1920.jpg), [final TH feedback](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-feedback-1366-TH.jpg), [final EN feedback](../../../artifacts/qa/domain-2-objective-2-1-redesign/review-feedback-1366-EN.jpg)|

The full seven purposes and eleven benefit/failure rows were already in Reading; this pass removes their dense duplication from the canvas. Genuine counts, scenario choice letters, slide-position navigation and useful source references remain. Removing arbitrary grouping does not mean deleting meaningful educational distinctions.

### Academic and TH/EN review

New concise presentation prose and the final Reading edits were compared against the source review above. No official objective, framework requirement or new academic taxonomy is introduced. The changes are instructional/editorial clarifications: GRC roles complement each other; seven purposes need no invented categories; evidence reuse is scope-dependent; benefits and ISO certification are not guarantees or universal legal mandates. NIST CSF, ISO27001 and COBIT remain complementary references with distinct emphases. The illustrative access-review/MFA/VPN/NovaPay cases are teaching examples, not universal workflows or actual exam questions.

Thai uses natural sentences with familiar terms such as Governance, Risk, Compliance, Policies, Controls and ISMS. Both languages teach the same roles, decision boundaries, seven purposes, practical examples and scenario outcomes. Source purpose names in the Reading table retain their existing English wording in TH mode, alongside the preserved Thai explanations. No blanket Thai-only translation was attempted. Other Reading/Info text was reviewed and retained where its distinctions, counts or source references help comprehension; no unrelated prose cleanup was undertaken.

### Browser verification actually performed

Production application snapshot: `.learning-preview/domain2-objective21-redesign-20261029`, served at `http://127.0.0.1:4196/`. All148 snapshot files match their current repository counterparts; `preview-parity.json` records zero mismatches. This is the real production viewer/rendering path with published lessons, not a fixture renderer or comparison mockup.

| Check | Actual result / evidence |
|---|---|
|Six presentations × TH/EN ×1366×768/1920×1080|**24/24** compositions rendered and visually reviewed. White canvas, clear message hierarchy and readable diagrams/text; no unintended Reading fallback. Final measured text bounds have no canvas outliers. `presentation-browser-cases.json` and `review-S*-*.jpg` contain the final cases.|
|Reading at both sizes/languages, all six slides|**24/24** opened; full semantic content accessible by native vertical scrolling; bottom reached; returned to the intended custom composition. `reading-browser-cases.json`, top/bottom images and six reviewed `review-reading-S*.jpg` sheets.|
|Info at both sizes/languages, all six disclosures|**24/24** opened and visually reviewed with native scrolling, including dark Info contrast. `info-browser-cases.json` and six `review-info-S*.jpg` sheets. This is a functional/visual check, not a new WCAG certification.|
|Final Reading/Info editorial retest|Slides1/2 ×both languages/sizes: **8/8** changed cases rechecked; each reached the Reading and modal bottom and returned to presentation. Separate middle-table captures verify all seven purposes remain readable. The other16 unchanged cases reuse valid prior evidence. `editorial-browser-cases.json`, `editorial-table-scroll-cases.json` and `review-editorial-table.jpg`.|
|Scenario choices A–D ×both languages/sizes|**16/16** feedback states reviewed; C recommended, A/B/D explain the remaining gap. Four A cases recaptured and visually reinspected after removing S06 from canvas feedback. All four final feedback sheets are current.|
|Navigation/state|Previous/Next arrows and keyboard left/right work; selected C remains selected through language change, previous/next, Reading and Info. Escape closes Info. No QA Finish Lesson click or progress reset.|
|Independent selection/progress/reload|L2 retained its own Slide3/7; returning to L1 restored its separate position. Actual reload → Learning Center → direct Resume verified L1 Slide3, then final L1 Slide2/6 after the editorial changes. L2 direct Resume Slide3 also verified. Continue Learning reflects the saved lesson/slide. `navigation-browser-cases.json` contains14 observations; `final-independent-L1.jpg`, `final-independent-L2.jpg`, `final-reload-center.jpg`, `final-reload-resume.jpg`.|

All screenshot review sheets listed above were visually inspected. Geometry and DOM assertions supplement that review. Reading/Info intentionally scroll as documents; a Reading view entered using its control is not a fallback defect. Earlier Info top/bottom captures are not represented as proof that every pixel was visited; the final changed cases explicitly measured the modal end and separately inspected the table middle. The browser connection became stale during resume; one REPL reconnection restored the existing tab. No preview/progress reset or repeated browser-session restart loop was used.

### Defects found and corrected during this task

1. An initial composition/root class collided with Slide1’s inner grid selector, placing the heading beside the diagram. A distinct `grf-slide-*` root class fixes ownership; affected presentations were rechecked.
2. Slide3 EN at1366 put its original footer almost against the canvas bottom. Shorter equivalent remedy/footer text creates breathing room without reducing font size. Corrected TH/EN screenshots/metrics replace the initial records.
3. Scenario A’s source-derived feedback exposed S06. A paired explanatory paraphrase removes the capture code from the presentation; all four affected viewport/language cases were recaptured and visually reviewed.
4. The resume review identified the rejected taxonomy still present in Reading/Info. The narrow data edit removes it in both languages; tests first demonstrated the failing three-column case and then passed the revised two-column contract.

Structured single-flow self-review covered scope, educational equivalence, guard/fallback behavior, English application controls, DOM text safety, CSS isolation, interaction ownership, keyboard states and regressions. No remaining critical/important defect was identified in the scoped desktop cases. This is not an independent reviewer’s approval or human visual acceptance. Scenario listeners remain AbortController-owned, parent-abort aware and disposed on destroy; no timers, async imports or global listeners were added. Text uses the existing safe DOM/localization helpers; JSON does not inject executable markup.

### Automated verification and actual commands

No new dependencies. Existing native JS/CSS, Node test runner/fixtures and bundled Python/Pillow for evidence sheets only; browser control used the available in-app browser tooling. No framework/build/schema migration.

| Command | Actual result |
|---|---|
|`node --test tools/verify-learning-d2-objective21-redesign.mjs`|**6/6 pass**: concise bilingual canvases, essential concepts, complete semantic Reading/Info, four feedback outcomes/state/disposal, independent positions and retained completion, editorial clarity/staged-published parity. Initial implementation red3pass/2fail; feedback regression red4pass/1fail; final editorial red5pass/1fail, then6/6 green. Logs retained.|
|`& artifacts/qa/domain-2-objective-2-1-redesign/run-d2-focused.ps1`|**26/26 pass**, exit0. Runs the new6 tests plus the first five academic/structural/render/interaction/progress tests in each of the four existing D2 lesson suites. Exact file array/pattern is in this helper; old whole-tree Git guards are separately run, not hidden. `d2-focused-final.txt`.|
|`& artifacts/qa/domain-1-final-signoff/run-focused-checks.ps1`|**192/192 pass**, exit0. Existing29-file suite covers all D1 lessons, academic remediation/AI/sign-off, catalog/course/progress/integration, viewer/V3 stage, visuals, language boundary, version labels, Quiz and session persistence. The D1 helper/tests were read/run, not edited. `expanded-regression-final.txt`.|
|`node --test tools/verify-learning-d2-objective21-redesign.mjs tools/verify-learning-d2-grc-foundations.mjs tools/verify-learning-d2-grc-tools-risk-register.mjs tools/verify-learning-d2-business-continuity-bcp.mjs tools/verify-learning-d2-disaster-recovery-drp.mjs`|**26 pass /4 fail (30 total)**, exit1. All four failures are the old test6 whole-tree Git allowlists described below. `d2-full-final.txt`. The full suite is not claimed green.|
|`node --check js/ui/learning/grc-foundations-presentations.js`; `node --check tools/verify-learning-d2-objective21-redesign.mjs`|Both exit0.|
|`git diff --check -- <the six modified scoped files>`|Exit0; Git emits repository LF→CRLF conversion notices, no whitespace errors.|
|`node artifacts/qa/domain-2-objective-2-1-redesign/verify-preservation.mjs`|Exit0; exact entry hashes, authorized JSON-field comparisons, source purpose/explanation preservation, tracker isolation and snapshot parity verified.|

**Four legacy guard conflicts, not new academic/render/progress regressions:**

- `verify-learning-d2-grc-foundations.mjs` test6 assumes only four historical shared files may be dirty and forbids tracker changes.
- `verify-learning-d2-grc-tools-risk-register.mjs` test6 protects Lesson1 during its historical Lesson2 task.
- `verify-learning-d2-business-continuity-bcp.mjs` test6 protects Lessons1/2 during its historical Lesson3 task.
- `verify-learning-d2-disaster-recovery-drp.mjs` test6 protects Lessons1–3 during its historical Lesson4 task.

These same four test functions already failed before the final editorial edits: their first rejected file was pre-existing `css/learning-business-continuity-bcp.css` (`d2-full-node.txt`:25/29). In the final30-test run, the first rejected path sorts earlier: the **authorized** published Lesson1 JSON. The assertions scan the whole dirty tree against old task-specific allowlists and cannot distinguish preserved entry work from this authorized task. Their guards were not weakened or rebaselined; tests for Lessons2–4 were not edited. Only the old L1 test4’s explicitly superseded canvas expectations were maintained: full seven/eleven-item academic coverage is now asserted in Reading, alongside new presentation assertions. The entry-hash check provides the relevant current preservation evidence.

### Exact substantive files created/modified

Modified during this task (not a list of all dirty files inherited from prior sessions):

1. `js/ui/learning/grc-foundations-presentations.js` — six L1-specific teaching compositions, safe two-column Slide2 guard and existing interaction contract.
2. `css/learning-grc-foundations.css` — scoped L1 white presentation compositions, typography, open rows/relationships and accessible choices.
3. `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json` — only Slide1 closing summary and Slide2 table/narrative/two examples/takeaway.
4. `content/isc2-cc-2026/learning/staged/lessons/lesson-d2-01-grc-foundations.json` — identical editorial edits; original in-preparation status retained.
5. `tools/verify-learning-d2-grc-foundations.mjs` — L1 test4 updated for the authorized instructional composition; all remaining tests/guards retained.
6. `docs/plans/task.md` — row90 only relative to task entry.

Created:

7. `tools/verify-learning-d2-objective21-redesign.mjs` — six focused regression checks.
8. `docs/plans/isc2-cc-2026/domain-2-objective-2-1-redesign.md` — this plan/audit/review report.

New evidence and local QA helpers live exclusively in `artifacts/qa/domain-2-objective-2-1-redesign/`; `artifact-manifest.json` enumerates their exact paths and SHA-256 hashes (excluding itself). The ignored bounded preview is `.learning-preview/domain2-objective21-redesign-20261029/` (148 current-source copies), not additional production changes. Prior QA files/reports were not overwritten.

### Preservation and progress compatibility

`entry-files.json` froze **3,864** tracked/untracked nonignored files before edits. Final comparison: **3,858 identical /6 authorized modified /0 missing /0 unexpected changes /0 unexpected new repository files**. This covers dirty user work as well as clean tracked files. The entry SHA-256 values were not updated. `preservation-final.json` provides exact changed paths and checks. Removing just row90 from the tracker reproduces its exact entry hash, so rows88/89 and other tracker content remain unchanged.

Domain1 production data/code/CSS/tests/sign-off documents and prior evidence are unchanged; all12 lessons/103 slides remain intact. Domain2 Lessons2–4 data/modules/CSS/tests, catalog, publication/navigation,28 D2 slide IDs/order, original study materials, Quiz/question banks, Vocabulary and shared learning engine are unchanged. All597 files of prior D2 visual-remediation evidence are byte-identical. All lesson JSON is unchanged except the documented L1 editorial fields; all other L1 metadata, outcomes, references and complete Slides3–6 are equal to the frozen before data. For Slide2 all seven purpose texts are equal after stripping only ordinal prefixes; all seven practical explanation pairs are verbatim. The staged/published copies differ only in their original status.

`sec_cert_learning_progress_v1`, schema1 and `js/core/learning-progress.js` are unchanged. Lesson1 revision1 remains valid because the same learning units receive editorial clarification, preserving both saved positions and existing completed status; no mandatory reread/migration/reset. Node tests save/reload every L1 position and completion while all other15 published lessons’ saved states remain equal. Browser evidence independently confirms L1 and L2 positions/direct Resume through real reload. Scenario choice retention is session-local; no claim is made that answers persist after reload. QA visits affect only the isolated localhost4196 origin, not another origin’s saved progress.

### Remaining limitations and human acceptance

- Human approval of the instructional/visual direction is still required. No human acceptance is claimed by this report, static tests or browser screenshots.
- TH/EN desktop sizes1366×768 and1920×1080 are the verified matrix. Mobile/tablet, other browsers, zoom variants, assistive-technology sessions and a fresh fullscreen matrix were not tested in this task.
- Reading/Info keep the existing document typography, constrained reading width and native scrolling. Their longer prose is intentionally separate from the presentation. Some original source codes and legitimate counts remain in detailed explanations/references; the rejected artificial grouping/number mapping is removed from Slide2 in every mode.
- The source purpose names in TH Reading remain English with Thai explanations. That existing terminology choice was preserved; human language/style review is welcome.
- The four legacy Git-scope guard failures remain explicitly documented. The focused and expanded functional suites are green; the unrestricted D2 suite is not wholly green.
- The seven Lesson2 audit recommendations earlier in this document remain **unimplemented and unaccepted**. The Q4/Q3 pointer and risk-scoring/ownership qualifications are deferred to a separately approved Lesson2 pass. Lessons3–4 and Objectives2.3/2.4 were not redesigned.

Manual review: open [local production preview](http://127.0.0.1:4196/) → **Open Certification → Learning → Domain2 → Objective2.1 → GRC Foundations, Frameworks & Business Alignment → Start Learning** (or direct **Resume Lesson** from the center). Use **Slides** to inspect all six, TH/EN, Reading toggle, **Info → Slides1–6 — Full explanations**, and all four NovaPay actions. Continue Learning/Start Learning deliberately reopen the saved slide rather than forcing Slide1; choose Slide1 explicitly in Slides if desired.

Human acceptance checklist:

- [ ] Six presentation messages/relationships teach clearly at both target desktop sizes.
- [ ] TH wording and EN wording feel natural and conceptually equivalent.
- [ ] Slide2’s example and complete seven-purpose Reading explanation replace the rejected taxonomy effectively.
- [ ] Diagram hierarchy, whitespace, framework matching and scenario reasoning meet the accepted Domain1 quality direction.
- [ ] Navigation, Reading/Info and saved-position behavior meet expectations.
- [ ] Approve this Lesson1 direction before any Lesson2 implementation.

**Stop here. Await explicit human visual approval for Lesson1.**''')
p.write_text(s,encoding='utf-8',newline='\n')
import re
p=Path('docs/plans/task.md');raw=p.read_bytes().decode('utf-8')
row='| 90. Domain 2 Objective 2.1 — Instructional Redesign, Lesson 1 | Ready for Human Visual Approval — Lesson 1 only | All12 D1 lessons/103slides studied in TH/EN (206 browser cases);13-slide audit recorded. Six L1 compositions redesigned; artificial Slide2 grouping removed from canvas/Reading/Info with all7 purposes retained.24 presentation/24 Reading/24 Info cases +16 feedback states reviewed; independent selection/reload/direct Resume verified.26/26 focused +192/192 expanded;4 legacy whole-tree Git guards remain.3858/3864 entry files identical,6 authorized changes; D1/L2-L4/banks/progress preserved. [Report](isc2-cc-2026/domain-2-objective-2-1-redesign.md). Stop; Lesson2 requires approval. |'
raw=re.sub(r'(?m)^\| 90\. Domain 2 Objective 2\.1[^\r\n]*',lambda _:row,raw)
p.write_bytes(raw.encode('utf-8'))
