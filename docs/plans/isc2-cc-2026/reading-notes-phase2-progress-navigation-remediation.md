# Phase 2 — Reading Progress, Resume & Navigation Remediation

Status: **Phase 2 Complete — Pending Human Acceptance**

Report finalized: 2026-11-01 (Asia/Bangkok). Browser evidence was collected across the interrupted execution and its continuation. Human Acceptance remains pending. No Phase 3 work is included.

## Recovery and scope

The existing implementation was retained. The interruption had already left the three production fixes, focused navigation tests, Reading-only DOM fixture, completed 56-case Chrome matrix, 21 edge checks, and regression logs on disk. The continuation read the original Phase 2 requirements, plan, reproduction driver, tests and diffs; verified the saved outputs; reran all 14 regression commands; compared protected files against the original baseline; and added settled mobile-drawer captures, this report and final evidence manifests. No additional production edits were needed during this final continuation.

The displayed Git change count includes prior Batch A/B work. It is not a reliable Phase 2 file count. Attribution below uses the captured dirty working-tree baseline, rather than assuming every difference from HEAD belongs to Phase 2. The approximately 12-file interruption estimate must not be used to overwrite existing changes.

Baseline HEAD: `27c72ba5e2c70fe34311b0172597b3a8134e4179`. `baseline.json` records the original Git status and SHA-256 hashes of 21,045 files. `source-review.json` records the required project/audit/A/B/Task 143 sources inspected. Shared routing, renderer, state, Markdown parser, academic content and original notes were preserved.

## Reproduction and root causes

The Chrome driver `reproduce.mjs --baseline` serves frozen pre-Phase-2 runtime bytes from `baseline-runtime.json` without rewriting production files. Those bytes were checked against the baseline hashes. Open a specified subsection, scroll another 620 pixels, allow persistence, and reload. On 1366×768, the original implementation displaced the reader as follows:

| Domain | Before reload displacement | Final matrix reload displacement |
|---|---:|---:|
| 1 | −8,377 px | 0 px |
| 2 | −3,711 px | 0 px |
| 3 | −3,907 px | 0 px |
| 4 | −2,091 px | 0 px |

Before/after data and screenshots are retained; the original failed and intermediate tests have not been removed.

| Root cause | Correction |
|---|---|
| Restoration returned after scrolling to an anchor, ignoring the saved position within the subsection. Initial routing also confused saved context with explicit navigation. | Resolve navigation intent first; restore subsection-relative position when available, otherwise absolute saved Y. Explicit new links start at the target heading. |
| Broad objective IntersectionObserver entries replaced subsection state; actual Domain 2–4 Markdown headings were not tracked consistently. | Track actual metadata-backed rendered heading targets in document order and update the active subsection/objective, URL and progress together. |
| Saved location alone could not reproduce older Back/Forward entries after newer progress had been written. | Keep per-entry `history.state.readingNotes` snapshots, replace passive updates, push intentional navigation, and handle same-hash popstate. Preserve other history-state properties. |
| Pending rendering/font layout and obsolete listeners/restores could outlive the current route. Debounced saves could be lost on exit. | Reader-owned cancellation generation, pending destination, mounted checks, listener abortion, timer/observer disposal, and exit/pagehide/visibility flushes. Await fonts/images with a 1,500 ms bound and two animation frames. User wheel, relevant keys, touch or content pointer interaction cancels delayed restoration. |
| A newer same-domain target arriving during Markdown loading could be lost. The loading wrapper itself matched the old content-readiness selector. | Retain the latest pending request and require the domain content cache as well as the rendered wrapper before restoring it. |
| `performance.navigation.type` continues to describe the original document after later SPA navigation. | Apply reload semantics only to the first reader mount matching the original document URL; later explicit links remain explicit. |
| Accepted V1 records can have global location fields without a per-domain entry. | Use the accepted global location as fallback for that domain; preserve other domain records. |
| Closed mobile navigation was translated offscreen but still interactive. Before reproduction reached seven hidden controls by Tab; Escape left the panel open and no expanded state was exposed. | Synchronize `inert`, `aria-hidden`, visibility and pointer handling; expose trigger controls/expanded state; focus the close control on entry; Escape/backdrop/close restores trigger focus. |
| Desktop collapse CSS could disable the mobile drawer after resizing. | Keep desktop preference separate from the mobile disclosure and narrowly override collapsed mobile display. |
| Body `overflow-x:hidden` made a non-scrolling sticky ancestor, allowing the desktop sidebar to leave the viewport. | Apply `overflow-x:clip` only while a Reading screen exists using `body:has(.reading-screen)`. |

## Navigation and persistence contract

The key remains `sec_cert_reading_progress_v1`, with `schemaVersion: 1`. Existing global and per-domain fields remain readable. No migration or clearing of stored history was introduced. An optional signed finite numeric `domains[id].lastAnchorOffset` records the pixel offset from the subsection heading; negative offsets are valid near an upcoming heading. Invalid optional values are omitted. Existing V1 absolute offsets are still used when this field is absent.

Example extension, within an existing per-domain record:

```json
{"domainId":2,"lastTopicId":"topic-2-2-rto-rpo","lastScrollY":4600,"lastAnchorOffset":375}
```

Resolution policy:

1. A valid matching history-entry snapshot restores that entry's position.
2. An explicit subsection/objective URL starts at its heading; stored offsets do not override a newly opened/copied link.
3. A genuine initial document reload of the saved subsection restores its position.
4. Generic Reading entry and explicit domain selection resume that domain's recorded context.
5. Missing domain records may fall back to the accepted global V1 location for the global last domain. Switching to an empty domain cannot carry another domain's global topic.

The existing overview Read entry and domain selectors provide Resume. There was no separate overview Resume button to repair, so no new button or navigation architecture was invented. Both direct anchor and existing path-prefixed routes are supported. The shared router retains cross-domain mounting responsibility. Native `history.scrollRestoration` is manual only during reader ownership and is restored on exit/pagehide.

## Accessibility and responsive behavior

The sidebar remains a non-modal navigation disclosure. It is not a dialog and has no focus trap. Closed panels are inert, visually hidden and excluded from the accessibility tree. Opening focuses the existing close button; Tab/Shift+Tab move through real controls. Leaving the non-modal panel by keyboard closes its overlay. Escape, close button and backdrop return focus to the trigger; selecting content closes the panel and focuses the reading pane. Resizing synchronizes hidden state and focus while retaining the desktop collapse preference. Active locations expose `aria-current="location"`, and explicit targets expand their containing domain/objective.

The small Node fixture does not simulate layout, focus traversal or the accessibility engine. Those behaviors were verified in Chrome through actual key events, focus inspection, geometry and an accessibility-tree snapshot.

## Verification results

### Automated regressions

All 14 commands were rerun after recovery; command arguments and exit codes are in `regression-resumed.json`, with complete `*-resumed.txt` logs.

| Suite/group | Passed | Failed |
|---|---:|---:|
| Existing reading persistence | 20 | 0 |
| New navigation/legacy/intent tests | 15 | 0 |
| Foundation / Domains 1, 2, 3, 4 / DOM integrity | 9 / 10 / 9 / 10 / 10 / 35 | 0 |
| Batch A / Batch B academic regression tests | 23 / 33 | 0 |
| Fluid layout/dividers / lead width / reading width | 25 / 25 / 23 | 0 |
| Historical Domain 1 presentation suite | 366 | 4 pre-existing |
| **Total** | **613** | **4 pre-existing** |

The 174 targeted persistence/navigation/Reading/academic checks pass. A further 73 layout checks pass. `git diff --check` passes; Git emits LF/CRLF normalization notices for existing dirty files.

The four presentation failures are unchanged diagram-string expectations: Layer 4 Identity & Access, Layer 6 Application & Data, Layer 7 Resilience & Response, and non-chronological complementary defense. The exact same 366/370 result was reproduced against the frozen starting runtime through the read-only `baseline-fs-hook.mjs`; see `presentation-baseline.txt` and `preexisting-failures.json`. They are outside this progress/navigation correction. No academic text, diagram implementation or assertion was changed to conceal them. These baseline failures are not newly introduced Phase 2 defects and mean the entire repository test collection is not all green.

The new intent suite was initially red (12 failures, 2 passes); additional review-driven legacy/timing regressions were also retained as red evidence before their fixes. Existing foundation/Domain 1 fixture imports were adapted for the browser APIs the reader now uses. Their original assertions were retained. Intermediate missing-fixture-API failures are documented by their saved logs, not attributed to production behavior or called baseline defects.

### Real Chrome

Chrome 156.0.8078.74, Windows, isolated temporary profile, local HTTP server, CDP with native browser layout/keyboard/accessibility APIs. This is headless Chrome, not a mocked DOM.

| Matrix | Coverage | Result |
|---|---|---|
| Domains | 1, 2, 3, 4 | All covered |
| Themes | Light, Dark | Both covered |
| Viewports | 1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812, 320×568 | All seven covered |
| Cartesian cases | 4 × 2 × 7 = 56 | 864 checks passed; 0 failures; 0 runtime/console errors |
| Screenshots | Mid-read and reload for every case; open drawer for 32 mobile/tablet cases | 144 captures |
| Supplementary settled drawers | 4 domains × 2 themes × 4 mobile/tablet widths | 64 checks passed; 32 captures; 0 errors |
| Additional edge scenarios | Legacy, restart, async timing, focus and long-table cases | 21 passed; 0 failures; 0 errors |

The matrix measures actual `scrollY`, visible heading geometry, active state and focus, not merely localStorage presence. Across all 56 cases: reload maximum error 0 px; same-domain Back 0 px; Forward 0 px; cross-domain Back 0 px; overview Read entry Resume 1 px. The acceptance tolerance in the driver is 8 px.

Every case exercises deep links, new-subsection navigation, history, overview Resume, inactive-domain preservation, disposal and desktop/mobile transitions. All 32 mobile/tablet cases exercise Tab exclusion, open focus entry, Tab/Shift+Tab, Escape focus return, programmatic hidden-focus exclusion and selection closure. All 24 desktop cases verify sidebar visibility at a scrolled reading position.

The 21 edge checks include accepted legacy V1 rendered restoration with another-domain sentinel; copied links; reload/exit before debounce; same-hash history; clean Chrome close/reopen using the same profile; trusted wheel cancellation during delayed fonts; obsolete domain fetch completion; latest same-domain target during held loading; new explicit navigation after document reload; direct objective/path routes; collapsed-ancestor expansion; accessibility-tree exclusion; non-modal Tab exit; backdrop focus return; collapsed-objective hidden focus; no saves after disposal; and long-table reload at desktop/mobile widths. Initial matrix drawer screenshots were taken during the CSS transition; supplementary `settled-drawers-*` captures wait 400 ms and assert the panel has reached its final bounds.

## Exact Phase 2 changed-file manifest

Relative paths below are rooted at `D:\_Coding\SEC-CERT-TEST`. SHA-256 values and an exhaustive QA artifact inventory are in `artifacts/qa/reading-notes-phase2-progress-navigation/evidence-manifest.json` and `changed-files.json`.

| File | Phase 2 change |
|---|---|
| `js/ui/screen-reading.js` | Reader-owned restoration, pending navigation, lifecycle/history/progress tracking, active state and mobile accessibility. Existing domain metadata and article-content renderer preserved. |
| `js/core/reading-progress.js` | Optional V1 relative offset and pure destination resolver; legacy fallback and cross-domain topic correction. |
| `css/reading.css` | Reading-scoped sticky fix, closed mobile visibility/pointer state and responsive collapse override. |
| `tools/verify-reading-navigation.mjs` (new) | 15 focused intent/persistence/legacy tests. |
| `tools/fixtures/reading-dom.mjs` (new) | Reading-only adapter around unchanged vocabulary fixture; browser globals and unmount cleanup for existing structural suites. |
| `tools/verify-reading-notes-foundation.mjs` | One fixture import changed; assertions retained. |
| `tools/verify-reading-notes-domain1.mjs` | One fixture import changed; assertions retained. |
| `docs/plans/isc2-cc-2026/reading-notes-phase2-progress-navigation-remediation.md` (new) | This implementation and QA report. |
| `artifacts/qa/reading-notes-phase2-progress-navigation/**` (new task directory) | Plan, frozen baseline, reproducible browser drivers, before/intermediate/final JSON and logs, screenshots, patch, preservation proof and manifests. Every file is listed by path/hash in the evidence manifest. |

`phase2-production.patch` compares the three runtime files against the dirty starting baseline, excluding the prior Batch A title corrections. The Git diff from HEAD also shows pre-existing Batch A/B content/diagram/component changes and the prior Domain 3 test-title correction; those are not Phase 2 edits.

## Preservation and review

The baseline comparison covers 21,045 existing files. Only the five expected existing files changed: three runtime files and the two fixture-import changes. The two new test files are recorded separately. No unexpected baseline changes were found. All eight original learning-note files, Domain 1–4 academic Markdown/metadata/scenarios, Batch A/B reports/evidence, Learning Slides, Quiz/Question Banks, Vocabulary, Domain 5 and unrelated CSS/UI/router/state/parser files remain byte-identical to the starting dirty workspace. Therefore the prior 48 reported academic corrections are preserved rather than reconstructed; the A/B suites additionally pass 56 checks. Reader domain metadata and `renderArticleContent` were compared separately and remain identical.

A fresh read-only reviewer during the interrupted execution found three edge cases (pending same-domain load, document-lifetime reload classification and global-only V1 fallback). Their fixes and red/green coverage are retained; final review reported no additional material issue. This continuation independently checked current source, saved browser outputs, regressions and preservation. No coding agent regenerated the implementation.

HEAD and the empty staged diff remain unchanged. No reset, revert, clean, staging, commit or push was performed. No competing edit was detected in the baseline comparisons. `preservation-resumed.json` provides the final continuation check; `preservation.json` retains the earlier check.

## Limitations and remaining work

No known major Phase 2 defect remains in the verified scenarios. Human Acceptance is pending, including the user's preferred browser/device and assistive-technology checks. Chrome keyboard and AX evidence is not a claim that every screen reader or mobile OS was manually tested. A clean browser restart with persistent storage was tested; abrupt process/OS termination cannot guarantee a last-millisecond save. Storage blocked/cleared by the browser cannot provide persistence across sessions; existing in-memory fallback remains. A delayed font/image load beyond the bounded wait, arbitrary future content reflow, or multi-tab simultaneous editing was not exhaustively tested.

The four pre-existing presentation assertions above remain unresolved outside Phase 2. Broader spacing, heading hierarchy, bullet grouping, icons/diagrams, typography and visual redesign are future presentation-audit concerns. They were not mixed into progress/navigation work. No educational correction or Phase 3 implementation is authorized by this report.

## Reproduction commands and evidence entry points

Run from the repository root with Node and local Chrome available. Browser drivers use ports 5277/9337 and must run sequentially in isolated profiles.

```powershell
node tools/verify-reading-navigation.mjs
node artifacts/qa/reading-notes-phase2-progress-navigation/reproduce.mjs --baseline
node artifacts/qa/reading-notes-phase2-progress-navigation/browser-qa.mjs
node artifacts/qa/reading-notes-phase2-progress-navigation/edge-qa.mjs
node artifacts/qa/reading-notes-phase2-progress-navigation/settled-drawers.mjs
```

Running a driver again rewrites its own generated output; the report refers to the saved verified run. The machine-readable `final-verification.json` connects criteria to results. `matrix-results.json`, `edge-results.json`, `settled-drawers-results.json`, `regression-resumed.json`, `preexisting-failures.json`, `preservation-resumed.json` and `evidence-manifest.json` are the primary review entry points. Earlier failed/intermediate files remain evidence of development and are not final pass results.
