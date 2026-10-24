# Task 56 — Learning Slides foundation

Implemented 2026-10-24 (Asia/Bangkok). No academic lesson or CIA pilot is published. The fourth card is Coming Soon because the public catalog contains zero lessons. Fixtures are unreviewed technical examples, not teaching content.

**Completion status after interrupted-session recovery:** implementation and focused code review/static/Node verification are complete; **Task 56 is partially complete pending manual browser acceptance**. No browser automation or manual browser verification was performed. Remaining acceptance items are listed below; no known unresolved defect from the focused review remains. Task 57 has not started.

## Architecture and technology decisions

The existing `index.html`, native ES modules, shared `state.screen` router and static HTTP delivery remain in place. No packages, npm manifest, lockfile, bundler, framework, CDN script or backend was added. Native DOM/CSS, SVG constructed by trusted code, browser media controls and the Fullscreen API cover the implemented feature. `.gitignore` excludes `node_modules/` and generated `.learning-preview/` artifacts. A future library is permitted when useful; it is not required by this foundation.

Task 55's architecture remains the baseline, reconciled with Task 56:

- The new card and learning controls have paired EN/TH UI labels. Existing Quiz/Vocabulary and original three cards retain their current language behavior.
- Presentation and reading modes consume the **same semantic `blocks`**, replacing the proposed duplicated `readingBlocks` text field. Authors can choose varied renderer/layout combinations without duplicating translations.
- Built-in renderer code lives in one small registry module until real complexity justifies splitting it. JSON cannot name an import URL or execute code.
- The center lazily validates lesson bodies when a Domain is expanded. Viewer/route code is lazily imported; future lesson bodies/media are not loaded at app startup. The selector renders the original cards immediately and checks learning availability independently, only until the first valid published lesson is found. A result updates only the learning card, preserving open information dialogs and current language.
- Only repository code can register a renderer and its validator/lazy loader/thumbnail function. A failed custom module falls back to the same slide's semantic reading content. Unknown renderer IDs block publication.
- Thumbnails use actual slide titles and short content/type-specific previews, not live interactive copies. The horizontally scrolling filmstrip mounts a bounded window (maximum 25 thumbnails) and a slide picker enables direct navigation across a large deck.

### Decision ledger

- **Ruling:** Continue in the requested checkout to preserve the supplied uncommitted implementation baseline; no resets, branch changes, commits or cleanup of unrelated work. Cost if wrong: changes share the existing checkout; the persistent before/after file-hash audit distinguishes task edits from prior work.
- **Ruling:** Use native modules with no dependencies for implemented features. Cost if wrong: a future complex animation/layout may need an additional reviewed adapter; existing modules need no build migration.
- **Ruling:** Generate a separate local preview instead of a public preview flag. Cost if wrong: developers run one optional Node command to inspect fixtures; deployed learners need no Node service.
- **Ruling:** Treat historical hash-snapshot failures as existing verification debt, not a reason to rewrite protected modules or bless stale snapshots. Cost if wrong: those old suites remain red; current task-specific integrity and behavior checks provide the scoped evidence.

Execution used failing checks before implementation for catalog/progress, viewer/fullscreen, routing/card/center and preview. Further failing checks exposed and fixed immediate completion-button refresh, malformed nested data handling and language-control focus retention.

### Completed focused review and fixes

The original review attempt stopped at an account usage limit and produced no findings. Recovery inspected the actual working tree, both baselines, the Task 55 plans and this partial report. A subsequent independent read-only reviewer inspected the feature and ran the 21 then-existing focused checks; no browser work or file writes were performed by the reviewer.

| Finding | Classification and fix | Evidence |
| --- | --- | --- |
| New/deleted-position learners started at `slides[0]` instead of the first authored `slideOrder` entry | Important Task 56 defect, fixed in progress reconciliation. Stable-ID resume remains intact. | Regression reproduced `type` instead of `interact`, then passed. |
| Source URL arrays passed regex coercion and crashed the overview | Important Task 56 defect, fixed with strict string/HTTPS parsing before publication. | Published URL-array input was accepted before the fix and rejected afterward. |
| Learning availability request delayed rendering of existing exam/vocabulary cards | Task 56 integration regression found in the recovery review; fixed by rendering immediately with a shared availability controller and updating only the fourth card asynchronously. | Deferred-fetch test failed with an empty selector before the fix; original cards render while fetch is still pending afterward. |
| Ordinary image adapter allowed unpausable GIFs despite reduced-motion policy | Task 56 media-policy defect; GIFs now require a future controlled/static adapter instead of passing the image path allowlist. | A fully populated GIF asset passed validation before the fix and is rejected afterward. |

Each fix had an observed failing regression followed by a passing full focused suite: **26/26**. No Critical findings, unresolved Important findings, deferred cosmetic findings or declined code fixes remain. The reviewer explicitly could not judge actual fullscreen, focus, responsive overflow or touch behavior without browser QA; these are acceptance checks below, not claimed test results. No second independent review of the fix diff was performed; the regression checks are the verification of those fixes.

## Running and deployment

| Environment | Behavior / verification |
| --- | --- |
| Direct `file://.../index.html` | **Not established or claimed compatible.** The existing app uses module imports and vocabulary fetch; Learning Slides also fetches JSON. Browser file-origin restrictions differ. |
| Local static HTTP server | Serve the repository's runtime files with correct JavaScript/JSON/CSS MIME types. For example `python -m http.server 8000` from the root if Python is installed; that example command was not used for verification. The generated loopback preview server is tested with real Node HTTP requests. No browser automation was used. |
| Deployed static website | Keep `index.html`, `js/`, `css/`, `data/`, cleared `assets/`, vocabulary runtime JSON and published learning files at their existing relative paths. No application server/runtime compiler is needed. No deployment configuration or verified live deployment URL was found locally, so live hosting behavior/headers are **not verified**. |

There is no new required build for the public app. Exclude `tools/`, `.learning-preview/`, source/course captures, editorial drafts and unrelated review material from a production deployment package. Folder naming is not access control if an entire repository is published. Never deploy the generated preview folder as the public site.

### Local development preview

From `D:\_Coding\SEC-CERT-TEST`:

```powershell
node tools/preview-learning.mjs --serve
```

Open `http://127.0.0.1:4173` manually. The banner explicitly identifies technical fixtures. **Open technical fixtures** opens their overview/reader; **Inspect public app (Coming Soon)** opens the normal entry in the same isolated output. The center remains the real empty public catalog. `--port 4174` selects another port. Ctrl+C stops the local server. Running without `--serve` generates files only and prints the directory.

Each invocation writes a fresh ignored `.learning-preview/run-<uuid>/`, copies the runtime static files and only catalog-approved learning files/assets, then adds the fixture data/bootstrap. It does not edit the public catalog, production entry or persisted public progress. The server binds loopback only, rejects traversal, and serves only the generated output. There is no query/fragment/localStorage switch, public preview route or import of fixtures from production code. Optional Node tooling is for development, never required by deployed end users.

The generated directories are disposable development output; this task does not delete unrelated files. The preview is a technical inspection tool, not a production publication mechanism.

## Routes and UI

New state screens: `learning-center`, `learning-lesson`, `learning-viewer`. `state.learning` stores Domain/objective/lesson/slide selection; it never creates, clears or writes a quiz session. Existing routing is extended, not replaced; no deep-link or browser History API router is introduced.

- The fourth selector entry is `isc2-cc-learning-slides`, type `learning`; it has no exam configuration/question-bank references. The original entries retain their ordering and behavior. Existing responsive grid wrapping remains (3+1 desktop, 2×2 tablet, one column phone).
- `hasPublishedLearning()` enables the learning card only after successfully fetching/validating at least one published reviewed lesson. A manually changed registry status cannot publish a fixture.
- The center shows all five Domains and 19 official objective records; empty states contain no invented lesson counts or completion percentages. Domains 4–5 have no lesson-shaped placeholders. Published lesson summaries are validated on expansion; failed/unpublished content never becomes an enabled lesson action.
- The overview offers outcomes/prerequisites when authored, ordered contents, Start/Resume, content revision, review/source access and return. Returning from a viewer preserves the lesson selection; the center reopens its Domain and restores the matching lesson link where available.
- Normal viewer: 16:9 stage, Previous/Next, n/N, Fullscreen, reading-layout switch, explicit Mark as read, horizontal active-thumbnail filmstrip and slide picker. Language switching retains slide identity and keyboard focus. Source/review details remain in the overview.
- Mobile uses reflow and meaningful reading order from the same slide blocks; desktop has an explicit reading-layout switch. Typography is not scaled to tiny text. Tables can scroll locally; no global horizontal page scrolling is intended. Layout/overflow still require human device QA.

## Fullscreen and input

Fullscreen targets the presentation surface only. Browser events determine active state; errors/unsupported APIs produce an in-reader message. Website chrome, filmstrip and persistent navigation are outside that surface and are hidden in fullscreen. Aspect ratio is retained and overflowing slide content remains scrollable, rather than clipped.

Noninteractive short primary clicks/taps within the actual slide's left/right half move backward/forward. Drag/scroll, selected text, controls, media and marked interactive regions are excluded. Mouse wheel does not change slides. ArrowLeft/ArrowRight and literal `<`/`>` work when the viewer surface owns input; Shift is permitted for `<`/`>`. Ctrl/Alt/Meta shortcuts and composing/input/control events are ignored. Thumbnail arrow/Home/End navigation has separate ownership.

Escape/browser exit restores the normal viewer at the same slide; the native fullscreen invoker regains focus when it remains mounted. There is no keyboard lock. On touch, long-press the noninteractive slide for temporary help/Exit controls; `?` also opens help from the stage. Those controls are not persistently overlaid on the slide. Long-press behavior, browser exit UI and actual focus/screen-reader behavior require manual browser review. Browser-mandated fullscreen UI cannot be hidden by the site.

Slide changes dispose the old renderer; route changes abort async loads/listeners, exit owned fullscreen and dispose media/custom resources. Native details/summary provides the initial interaction. Custom renderers receive an AbortSignal and return cleanup. Reduced-motion CSS removes nonessential animation; built-in slides do not animate or auto-advance.

## Reading progress

Only key **`sec_cert_learning_progress_v1`** is used, independent of quiz/theme/vocabulary. Per-lesson records store lesson ID, content revision, last slide ID, visited IDs, language, status and timestamps. Current `state.setup.language` controls the UI; saved progress never overrides an active language selection. Preview progress uses an isolated memory store only.

Visiting the last slide alone never completes a lesson. Completion requires every current slide to have been visited and explicit **Mark as read** acknowledgement. This records reading, not mastery or exam readiness. Reordering slides preserves stable IDs. Deleted IDs are discarded, missing last positions fall back to the first current slide, and revision changes clear completion while retaining matching visits. Invalid/corrupt/unsupported storage is preserved and not overwritten; usable in-memory progress remains available. Quota/access failures also fall back without breaking reading. A notice explains when persistence is unavailable.

The app still starts through its existing home screen on refresh. Reenter the center/lesson to resume; there is no forced redirect to a saved lesson. Only currently published lessons can be loaded, even if storage contains an old lesson ID or path.

## Publication workflow and Task 57

Actual data fields/validation are described in [schema.md](../content/isc2-cc-2026/learning/schema.md). Follow Task 55's **Source Review → Knowledge Mapping → Storyboard → Academic Review → Slide Production → Visual/Functional QA** workflow. Structure checks cannot approve the content or verify the authenticity of a review identity.

Before the first release:

1. Prepare the limited CIA pilot's claim map and original bilingual storyboard; resolve relevant D1 source-quality holds. Do not treat fixtures as a starting academic lesson.
2. Obtain and record technical, bilingual and rights review on the exact content revision, including slide-level review and source references. Complete visual/function QA against that revision.
3. Add the reviewed lesson file and single owned catalog summary; secondary objective links reference its stable ID. Register any new renderer through trusted code, with validator/thumbnail/fallback/cleanup.
4. Validate catalog and lesson, resolve every source/media reference, check assets exist and permissions/alternatives are recorded, then test the real lesson through the normal public loader.
5. Check public card activation follows validated publication; fixtures never count. Keep D4–5 Coming Soon until genuine reviewed content exists.

The foundation is ready for the separate Task 57 evidence/storyboard work. This task does not start it, produce the CIA pilot, or close any prior academic issue.

## Verification and known limits

Focused commands:

```powershell
node --test tools/verify-learning-catalog.mjs tools/verify-learning-progress.mjs tools/verify-learning-viewer.mjs tools/verify-learning-integration.mjs
node --test tools/verify-learning-preview.mjs
node tools/verify-phase4-quiz-engine.mjs
node tools/verify-session-persistence.mjs
node tools/verify-vocabulary-domain2.mjs
node tools/verify-vocabulary-domain3.mjs
```

The preview test needs loopback access. The sandbox blocked its first HTTP request (`EACCES`); it passed with loopback networking enabled. This is HTTP/static-file verification, **not** browser or visual verification. New tests were observed failing before their corresponding implementation. DOM doubles verify event/state behavior but do not perform layout, enforce real focus semantics or implement browser fullscreen.

### Final commands and results

| Command | Result |
| --- | --- |
| `node --test tools/verify-learning-catalog.mjs tools/verify-learning-progress.mjs tools/verify-learning-viewer.mjs tools/verify-learning-integration.mjs tools/verify-learning-preview.mjs` | **26/26 pass**, including real loopback HTTP requests. |
| `node tools/verify-phase4-quiz-engine.mjs` | **7/7 pass**. |
| `node tools/verify-session-persistence.mjs` | **8/8 pass**. |
| `node tools/verify-vocabulary-domain2.mjs` | **10/10 pass**. |
| `node tools/verify-vocabulary-domain3.mjs` | **10/10 pass**. |
| `node tools/verify-exam-versions.mjs` | **13/19 pass**, same six named baseline failures, classified below. |
| `node tools/verify-domain3-integration.mjs` | Stops at missing `original/`; pre-existing missing source, not a passing check. |
| `node tools/verify-exam-dialog-complete.mjs` | **5/6 pass**, historical hash failure classified below. |

Only relevant checks were run; no unrelated full-project suite or browser automation. Syntax/import/JSON/document-link and baseline-preservation checks are recorded in the final audit artifacts. A passing software test does not approve fixture or lesson academics.

### Classification of all seven baseline failures

The saved `task56-baseline-tests.txt` was created before any Task 56 production writes. Fresh recovery runs reproduce the same seven names. The three test scripts themselves match their Task 56 start hashes. The starting status already showed both original HTML files deleted and `next-bank` available with 86 questions.

| # | Failure / source assertion | Classification | Evidence and disposition |
| --- | --- | --- | --- |
| 1 | `verify-domain3-integration.mjs` process / protected-group digest (lines 148–153) | **Pre-existing; missing repository fixture/source** | Its digest calls `stat` on absent `original/` and includes the also-deleted root original HTML. The pre-edit log has the same ENOENT. No restoration or hash update was made. Assertions after that stop remain unexecuted, not presumed passing. |
| 2 | `verify-exam-versions.mjs`: “invalid and upcoming configs never fall back…” (line 16) | **Pre-existing; outdated expectation** | Line 18 expects `loadExamConfig(..., 'next-bank')` to return null. The pre-edit log already returns the valid 86-question configuration. Unknown-version rejection is a separate, still-valid behavior. |
| 3 | “registry resolves explicit availability…” (line 22) | **Pre-existing; outdated expectation** | Line 25 expects a null next-bank resolution despite its pre-existing available registration. Later assertions also assume three entries; Task 56 intentionally requires four. New focused tests verify four ordered entries and non-exam gating without weakening this old test. |
| 4 | “current bank has unchanged questions and counts…” (line 36) | **Pre-existing; outdated expectation** | The old legacy count assertions pass; line 43 fails because it expects next-bank loading to reject. The pre-edit log reports the same “Missing expected rejection.” Legacy arrays still total 583 with counts 142/65/93/156/127. |
| 5 | “all original bank/config/source files… retain SHA256” (line 107) | **Pre-existing; missing repository fixture/source** | It reads deleted `original/isc2_cc_BothThai-eng_583quiz.html` from a historical snapshot and stops at ENOENT, both before and after Task 56. This does not prove a question-bank change. |
| 6 | “selection screen shows disabled future bank…” (line 124) | **Pre-existing; outdated expectation** | The pre-edit three cards were already available, so its generic disabled Coming Soon button assertion failed. The new learning card is correctly disabled and bilingual; its localized span markup is not the old plain-label assumption. Existing next-bank/vocabulary availability is preserved. |
| 7 | “router adds selection… blocks an invalid configuration” (line 168) | **Pre-existing; outdated expectation** | The test selects valid `next-bank` at line 176 and expects no start button at line 178. The pre-edit log already shows the valid start screen. Unknown/unpublished learning content remains fail-closed under the new checks. |

No one of these seven is classified as an unresolved Task 56 regression. The separately discovered selector delay was a real Task 56 regression and was fixed/tested rather than dismissed under the baseline failures. Expected hashes were not updated and no legacy tests were weakened.

### Historical dialog hash mismatch

The failure is specifically `js/ui/screen-quiz.js` in `docs/verification/exam-dialog-complete-before.json`, not the new learning card. That snapshot expects SHA-256 `3B16CAC663C46E120AD097B61AC55BC3162E604BE4AF707C7C87F887DCBB1F15`. Both the Task 56 pre-edit baseline and current file have `DC567E4E4D660FB144D3EE652E6F40440F6EDD93B0EBD3656951F60A32160085`.

Classification: **pre-existing mismatch against an outdated historical integrity snapshot**. The file has not changed during Task 56. This establishes that Task 56 did not cause this mismatch; it does not retrospectively approve the change since that older snapshot. The old suite still fails its integrity test, and its remaining hash entries are not claimed verified by that stopped loop. Current task-baseline hashing independently protects existing files.

Persistent audit artifacts are outside the repository under `C:\Users\tyroc\.codex\visualizations\2026\10\24\01a16c02-506a-7071-8560-a242ca3d2469`: original `task56-baseline.json`, pre-edit failure log, recovery `task56-resume-baseline.json`, `task56-final-regressions.json`, and per-command recovery logs. The three `D1 sum.md`/`D2 sum.md`/`D3 sum.md` notes appeared after the original baseline but before recovery; they are user work, not Task 56 output, and are preserved against the recovery baseline.

### Manual browser QA still required

- Real Fullscreen API entry/rejection/external Escape exit and focus restoration on target browsers, including touch exit.
- Responsive layout/Thai line wrapping/EN+TH overflow at 320, 375, 390, 430, 768, 1024 and 1440px; portrait/landscape and enlarged text.
- Filmstrip scrolling, active-thumbnail visibility, keyboard/mouse/touch input, drag/selection exclusions and no wheel advancement.
- Mobile reflow, table overflow, screen-reader reading order/live announcements, contrast, focus visibility, dark/light chrome and reduced motion.
- Real image/media fallback, long lesson performance and custom-renderer resource cleanup on a representative device.
- Actual deployment MIME types/headers and production package exclusions.

No browser automation or visual QA was performed. The empty public catalog cannot demonstrate academic correctness of a real lesson. Direct `file://` compatibility, offline caching, deep links and account synchronization are not implemented or claimed.

## Exact Task 56 file scope

Modified existing files: `index.html`, `data/exam-versions.js`, `js/core/state.js`, `js/ui/renderer.js`, `js/ui/screen-versions.js`, `docs/plans/task.md`, and the three Task 55 Learning Slides plans.

Created:

- `.gitignore`
- `css/learning.css`
- `content/isc2-cc-2026/learning/published/catalog.json`
- `content/isc2-cc-2026/learning/schema.md`
- `js/core/learning-schema.js`, `js/core/learning-loader.js`, `js/core/learning-progress.js`
- `js/ui/screen-learning-center.js`, `js/ui/screen-learning-lesson.js`
- `js/ui/learning/dom.js`, `js/ui/learning/fullscreen.js`, `js/ui/learning/renderers.js`, `js/ui/learning/viewer.js`, `js/ui/learning/routes.js`
- `tools/fixtures/learning/fixture.mjs`, `tools/fixtures/learning/dom.mjs`, `tools/fixtures/learning/preview-app.js`
- `tools/preview-learning.mjs`
- `tools/verify-learning-catalog.mjs`, `tools/verify-learning-progress.mjs`, `tools/verify-learning-viewer.mjs`, `tools/verify-learning-integration.mjs`, `tools/verify-learning-preview.mjs`
- `docs/learning-slides.md`

Ignored generated preview output and persistent integrity/test artifacts outside the repository are not deployment source files. All pre-existing files outside the explicit modified list are compared with the 620-file Task 56 baseline; the 583-question legacy bank and existing updated questions/vocabulary are protected.

Final integrity/static audit: **24 created source files, 9 modified existing files, 611 other pre-existing files unchanged**, all **6 legacy bank files** byte-identical to the Task 56 baseline, **23 JS/MJS syntax checks** passing, **27 local Markdown links** resolving, balanced code fences, and scoped `git diff --check` passing. The three later user-authored summary notes also match the recovery baseline. No unexpected existing-file edits were found. `task56-files.tsv` in the external audit directory lists every Task 56 file with its absolute path; `task56-final-verification.json` records these results. The pre-existing original-HTML deletions remain as supplied; no reset, revert, clean, dependency installation, commit or browser automation was performed.

**Remaining acceptance blockers:** a person must exercise the already-implemented viewer in supported browsers/devices for the fullscreen, touch, responsive/overflow, focus/screen-reader and filmstrip cases listed above. Until that acceptance is recorded, the tracker deliberately says partially complete rather than claiming a fully accepted Task 56. This is not permission to start Task 57 or publish fixtures; the next action is user review.
