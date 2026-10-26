# Production Slide 1 — Editorial Presentation Replacement

**Date:** 2026-10-25 · **Status:** Implemented in the normal lesson renderer; awaiting user visual approval. Overall Phase 3 remains incomplete. Slides 2–8 are outside this change.

## Implemented design and integration

The user authorized Concept B as the starting direction. Slide 1 now uses a mission-oriented opening question, large selectable HTML typography, an original document/lock/check/clock illustration and three flat CIA definition groups. Navy, cream and ochre carry the editorial direction. There are no nested dashboard cards, tiny SVG teaching labels, ellipses, fixed-image lesson pages or special preview routes.

The existing `hero-intro` layout dispatch now calls `editorial-intro.js`. Its content uses concise TH/EN presentation summaries; the published JSON, all text blocks, references, review metadata, lesson/slide IDs, order and revision remain unchanged. The source title remains a screen-reader heading; the question is the single prominent teaching headline. The illustration is decorative because the HTML carries the full learning message.

The SVG is a production adaptation of the exploration's original Concept B document illustration, with no embedded text. No external images, AI generation, new fonts, libraries or dependencies were introduced. The existing website typography remains in use. Concepts A/C were inspected for educational clarity and visual balance; their full layouts were not merged into this slide.

The complete original Slide 1 explanation is accessible from the existing **Lesson Info → Introduction — Full explanation** disclosure, in the selected language. It reads the actual lesson blocks rather than a duplicate snapshot. Existing outcomes, references, focus trapping, close behavior and metadata remain available. Desktop Text View retains the complete semantic source rendering.

New CSS applies only to the Slide 1 editorial content and its new Info disclosure. No toolbar, sizing policy, navigation, fullscreen controller, shared theme/language switch, progress schema, course/Domain screen, Quiz, Vocabulary or other slide composition was changed. The old hero export/styles remain inactive for this slide; they were not broadly removed/refactored.

## Browser review in the normal application

Used the unchanged production `index.html` and `js/app.js` through the normal flow:

**Certification → Version Selection → Learning → Learning Center → Domain 1 → Objective 1.1 → Start Learning → Slide 1.**

No query parameter, fixture override, exploration website or special renderer entry was used. Also reloaded the app, returned through Version Selection, observed **Continue Learning / Last viewed: Slide 1 / 1 of 8 viewed**, and resumed directly. Next opened Slide 2; Previous and the existing eight-item Slides overview returned to Slide 1. Language switching retained position. Both TH and EN complete explanations were expanded and checked in Lesson Info.

The first proposal to serve the repository root was rejected by automatic approval review because it could expose private files and `.git`. The successful safer alternative used the existing bounded preview builder/server, copied the unchanged production index to the generated directory's root entry, and included the new static illustration. The served index, renderer, module, stylesheet, Info and SVG were hash-compared to the repository and matched byte-for-byte. The server serves only its generated public-file directory; no repository root or `.git` is exposed. This is a public-file copy of the actual application, not another design gallery. Local review URL while the server is running: <http://127.0.0.1:4187/>.

Actual in-app-browser screenshots were captured and visually inspected for both languages at all three requested viewport overrides. The screenshot dimensions were independently checked from JPEG headers.

| Requested viewport | TH screenshot | EN screenshot | Observed layout |
| --- | --- | --- | --- |
| 1920×1080 | `artifacts/qa/slide-01-editorial/1920-th.jpg` | `artifacts/qa/slide-01-editorial/1920-en.jpg` | 1742.22×980 stage, 16:9; complete composition fits. |
| 1366×768 | `artifacts/qa/slide-01-editorial/1366-th.jpg` | `artifacts/qa/slide-01-editorial/1366-en.jpg` | 1187.55×668 stage, 16:9; readable text and illustration fit. |
| 390×844 | `artifacts/qa/slide-01-editorial/390-th.jpg` | `artifacts/qa/slide-01-editorial/390-en.jpg` | Existing mobile reading/flow policy, stacked goals, 18px body text. This desktop-browser override reserves a 15px scrollbar; content viewport is 375px and stage width 355px. |

Desktop screenshots use full-page capture to avoid cropping by the app's physical side panel. Mobile screenshots use an exact 390×844 clip including the scrollbar. Supplementary `390-th-full.jpg`, `390-en-full.jpg` and `390-th-bottom.jpg` show the longer flow context/lower content. Full-page captures can paint the fixed existing navigation dock over intermediate document content; the bottom viewport was separately checked to confirm all goals can scroll clear of it. Canonical viewport captures and final geometry are the six files in the table and `browser-measurements.json`.

Visual inspection found no clipped essential text, tiny diagram labels, distorted artwork or horizontal page overflow at these sizes. Real measurements show **scrollWidth = clientWidth and scrollHeight = clientHeight for the slide in all six final cases**. Desktop remains in presentation mode; mobile uses one scrolling page, with no nested slide scrollbar. Desktop mission text measured approximately 28.7px at 1920 and 19.6px at 1366; mobile paragraphs measured 18px.

Browser QA caught a legacy mobile rule overriding the new paragraphs to 15.5px. Increased only the new Slide 1 selectors' specificity, then verified all seven paragraphs compute to 18px. Added an intentional Thai line break before “โดยไม่ได้รับอนุญาต” to avoid an orphaned final word. No source JSON was edited.

**Fullscreen limitation:** clicking Fullscreen briefly showed the existing minimal controls and Exit Fullscreen, but the browser harness returned to normal mode before a stable fullscreen capture. The saved `fullscreen-attempt-returned-normal.jpg` shows that return, not proof of fullscreen acceptance. Slide 1 and TH remained selected. Native fullscreen should still be reviewed in the user's actual browser. The controller/shell files are byte-identical and existing fullscreen Node regressions pass; this does not replace manual fullscreen QA.

Browser error-log query returned no captured page errors. No claim is made about untested physical phones, Safari/Firefox, screen-reader applications, enlarged text or all fullscreen platforms. User visual approval remains pending.

## Verification

New tests were first observed failing for the absent editorial composition and complete Info explanation, then passed after implementation. A fresh pre-change DOM baseline protects all seven other slides across TH/EN and presentation/reading: **28 comparisons unchanged**. These are new preservation baselines, not updated historical expected hashes.

Executed:

```powershell
node --test tools/verify-learning-course.mjs tools/verify-learning-integration.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-visuals.mjs tools/verify-learning-phase2.mjs tools/verify-learning-catalog.mjs tools/verify-learning-progress.mjs tools/verify-learning-v3-stage.mjs tools/verify-learning-v3-viewer.mjs tools/verify-phase4-quiz-engine.mjs tools/verify-session-persistence.mjs
```

**85 Node runner entries passed, 0 failed.** This includes the engine's 7/7 and persistence suite's 8/8 internal scenarios. The persistence integrity check confirms 583 legacy questions and counts 142/65/93/156/127. The new editorial suite contributes 5 tests, including source SHA-256 preservation and all 28 protected rendering comparisons. The obsolete Slide 1 hero-card assertions were replaced with editorial-content assertions; Slide 2/6 assertions were preserved.

Also passed: Node syntax checks on the new renderer and modified renderer/Info modules; PowerShell XML parsing of the SVG; six exact JPEG dimension assertions; six no-inner-overflow geometry assertions; production-to-served-copy hash equality; scoped code `git diff --check` (only existing LF/CRLF normalization notices). The pre-existing tracker EOF blank-line warning is preserved.

Protected lesson SHA-256 remains `034d8ae332ddcb5b3669823f50bca6e8f9122926f2f698a331db50b385cd9a55`. A fresh **710-file** baseline was taken before this task. Only the listed existing files changed; all other pre-existing files, including lesson JSON, viewer shell/controller, course/Domain, bank, vocabulary and unrelated uncommitted work, remained byte-identical.

## Exact files

Modified:

- `index.html` — load the scoped content stylesheet.
- `js/ui/learning/renderers.js` — dispatch the existing introduction layout, preserve complete desktop reading fallback and normal mobile flow, avoid a duplicate visible heading.
- `js/ui/learning/lesson-info.js` — expose the full source introduction in the existing modal.
- `tools/verify-learning-visuals.mjs` — replace only obsolete Slide 1 visual assertions.
- `docs/plans/task.md` — record the production Slide 1 checkpoint and pending approval.

Created:

- `js/ui/learning/editorial-intro.js`
- `css/learning-editorial-intro.css`
- `assets/learning/cia-editorial-document.svg`
- `tools/verify-learning-editorial-intro.mjs`
- `docs/plans/isc2-cc-2026/slide-01-production-editorial.md` (this report)
- `artifacts/qa/slide-01-editorial/1920-th.jpg`
- `artifacts/qa/slide-01-editorial/1920-en.jpg`
- `artifacts/qa/slide-01-editorial/1366-th.jpg`
- `artifacts/qa/slide-01-editorial/1366-en.jpg`
- `artifacts/qa/slide-01-editorial/390-th.jpg`
- `artifacts/qa/slide-01-editorial/390-en.jpg`
- `artifacts/qa/slide-01-editorial/390-th-full.jpg`
- `artifacts/qa/slide-01-editorial/390-en-full.jpg`
- `artifacts/qa/slide-01-editorial/390-th-bottom.jpg`
- `artifacts/qa/slide-01-editorial/fullscreen-attempt-returned-normal.jpg`
- `artifacts/qa/slide-01-editorial/browser-measurements.json`

Generated public-file staging under ignored `.learning-preview/` is development output, not a new production page or feature. Previous exploration files were preserved and are not imported by the app.

## Review and stop

Review the normal lesson flow, switch TH/EN, open Info → Introduction — Full explanation, navigate away/back and test native fullscreen in the actual browser. Mobile deliberately follows the already functioning flow fallback rather than fitting all text into a tiny 16:9 rectangle; desktop uses the existing 16:9 canvas without arbitrary transform scaling. No deployment or commit was performed. **Stop after Slide 1. Do not expand this approach to any other slide until explicit user visual approval. Overall Phase 3 is not complete.**
