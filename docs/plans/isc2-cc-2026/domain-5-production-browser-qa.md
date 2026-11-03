# Domain 5 actual browser acceptance

**PASS**, actual Chromium in-app browser operated through documented CUA UI/locator actions. Static loopback-only server: `python -m http.server5195 --bind127.0.0.1` (actual command includes spaces before5195 and127.0.0.1). Fresh tested origin `http://127.0.0.1:5195/`. Initial sandbox network timeout and stale localhost module cache were diagnosed; current served module source and fresh-origin selector157 confirmed. No browser security setting was weakened.

| Journey/check | Actual result/evidence |
|---|---|
|Selector/setup|157 total, D5enabled38; updated-selector.txt/updated-setup.txt|
|All38 sequential D5 items|342 checks:3languages×3viewports×38; all four feedback rationales present,0horizontal overflow;all-item-checks.json|
|Viewports|1920×1080,1366×768,390×844; actual innerWidth/height recorded percheck. Classic15px vertical scrollbar reduces document/screenshot content width, not the requested viewport.|
|Correct/incorrect practice|Alternated expected correct/wrong;19correct19wrong; completed50%;practice-results.txt|
|Reload/persistence|After21 answers, reload/reselect exposed question22of38,21answered; resume matched expected item;before-reload/reload-resume-banner/after-resume.txt|
|Review/retry|Wrong question1of19 with key/selected mapping and option explanations; previous/next and back;retry pool19;wrong-answer-review/retry-wrong.txt|
|Random D5practice|38 unique items,114 additional checks of all stems/four choices in EN/TH/both; completed38/38 correct;random-practice-items.json/random-results.txt|
|Mixed exam|All117 questions answered through UI; uniqueIDs;24/22/23/27/21 domain distribution; all choices displayed; feedback deferred until finish;117/117correct100%;exam-items/exam-start/exam-finish-dialog/exam-results files|
|Existing D1–4|96 existing updated items exercised in mixed exam with expected keys and deferred feedback|
|Legacy|Legacy setup583counts142/65/93/156/127;D5one-question practice scored1/1;legacy-*.txt|
|Adjacent products|Vocabulary403cards;ReadingNotes article/navigation;LearningCenter5domain catalog smoke;vocabulary/reading/slides-smoke.txt|
|Console/assets|0warnings/errors in captured100-entry log;testedlogo complete naturalWidth512,0broken observedimages;console.json/image-assets.json. Not an exhaustive asset crawler.|

Actual evidence directory: `artifacts/qa/domain5-production/browser/`. SummaryJSON plus per-question check logs retain IDs/language/dimensions/results. Screenshots: practice-1920x1080.jpg,practice-1366x768.jpg,practice-390x844.jpg,practice-results-mobile.jpg,exam-results.jpg,final-setup.jpg. Visual inspection sampled firstD5bilingual feedback atall3sizes plus results; no claim of inspecting every item visually. Browser matching harness was repaired for YAML quote wrapping and collapsed existingD2whitespace; these were harness matching failures, not app defects. Each recovered run resumed without duplicate answer submission.

Final viewport override reset; app left at updated setup. Session state generated only for QA. No shared UI/CSS change. Existing125-question setup text versus117available exam capacity remains disclosed in integration report.
