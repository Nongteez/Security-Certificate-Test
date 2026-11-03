# Phase 3A.2 — Critical readability and source fidelity fixes

**Phase 3A.2 Complete — Pending Human Academic & Visual Acceptance**

Date: 2026-11-01 (Asia/Bangkok). Repository: `D:\_Coding\SEC-CERT-TEST`. Scope: the explicitly authorized DMZ service paint, five visible currency escapes and one literal-asterisk note. No Phase 3B–3F implementation or Human Acceptance approval.

## Implementation and starting state

The starting HEAD is `25a896a` (“BEFORE CHATGPT EDIT”), which differs from earlier audit HEADs. The tracked working tree was clean; the Phase 3A.1 QA directory and its three reports were untracked and were preserved. A new **23,075-file** SHA-256 baseline was taken from the current workspace, including prior academic/navigation/slides work. No previous implementation was reset or reconstructed.

Required Phase 3A / 3A.1 findings and roadmap, A/B academic reports and Phase 2 report were reviewed against the current files. The actual defects were reproduced using frozen copies of the two starting production files served only by the QA server. `--baseline` does not rewrite production source. Root causes remain the current ones established by the supplement: unspecified DMZ service fills, and Markdown-style currency/emphasis syntax in raw HTML.

Production edits are limited to **two files**:

1. `js/core/diagram-generator.js:2435–2445`: three service rectangles receive `fill="var(--panel)"`; three service-port labels receive inline `fill: var(--text)` paint. Existing title paint already uses `--text`. No SVG dimensions, positions, font sizes, connectors, labels, roles, zones, service examples or mobile alternative were changed. All other diagrams remain identical.
2. `content/isc2-cc-2026/reading/domain-1.md:424,445,484,508,951`: five currency values at four raw-HTML locations use `&#36;`, and one note's literal `*...*` becomes semantic `<em>...</em>`. All educational words, quantities, examples and qualifications remain intact.

No stylesheet, parser, math renderer, navigation/progress module, shared router/state, original course notes, other Reading Notes source, Slides, Quiz, Question Bank, Vocabulary or Domain 5 production file was edited.

## Fix A — DMZ service paint

Location: Domain 4 / **4.2.3 Demilitarized Zone (DMZ) Architecture**, `topic-4-2-dmz-architecture`, registry key `dmzFirewallArchitecture`.

The three generic `rect.diag-box` service shapes inherited black because neither their attributes nor their generic class set a fill. Explicit panel paint supplies a deliberate background in both themes. Their port labels now use the existing, measured `--text` token, just as the titles do. This is scoped to six existing SVG elements, rather than redefining generic diagram CSS or theme tokens.

| Instructional text | Light before | Light after | Dark before | Dark after |
|---|---:|---:|---:|---:|
| Web Server / WAF, Mail Gateway (SMTP), Public DNS / Proxy | 1.2908:1 | **16.2685:1** | 18.7948:1 | **16.5735:1** |
| HTTPS:443, Port 25, Port 53 | 7.2577:1 | **16.2685:1** | 4.3865:1 | **16.5735:1** |

After Light paint: `rgb(23,32,51)` on `rgb(255,255,255)`. After Dark paint: `rgb(242,242,245)` on `rgb(19,19,24)`. The figures above are calculated from actual computed SVG text and rectangle fills after theme transitions/font readiness; they are not assumed from token names. The colors/ratios are consistent at all three widths where the desktop SVG is visible: 1920, 1366 and 1024.

All six service labels fit their actual rectangles and title/port pairs do not overlap. At 768/390/375/320, the existing HTML alternative is visible instead of the desktop SVG. Its three primary zone titles and three explanatory/service-example paragraphs were additionally measured in both themes: **48 contrast/width checks passed**. The service examples remain unchanged.

The first after run exposed an undefined proposed color token that made port fills black in Dark. That intermediate attempt was rejected by nine browser contrast checks and corrected to the existing `--text` token. `first-after-browser.json` and three intermediate DMZ images retain that evidence. The final results below have no such failures.

**Preserved:** firewall roles, network zones, sample services/ports, viewBox, geometry, accessible descriptions and mobile text. No new universal packet path or topology redesign was introduced. This fixes the service-paint occurrence of P3A1-DIA-001 / P3-ACC-001; it does not claim to resolve the entire small-label, contrast or topology family across the textbook.

## Fix B — Five currency occurrences

| Occurrence | Source line | Context | Browser output after |
|---|---:|---|---|
| C1 | 424 | Asset Value definition | `$10,000` |
| C2 | 445 | SLE card's AV explanation | `$10,000` |
| C3 | 484 | ALE card's SLE explanation | `$5,000` |
| C4 | 508 | Cost-benefit example, existing ALE | `$10,000/ปี` |
| C5 | 508 | Same example, control cost | `$25,000/ปี` |

The loader fetches UTF-8 Markdown text; JSON is not the cause. Ordinary inline Markdown removes currency escapes, but the permitted raw-HTML branch only performs limited math substitution and leaves those standalone backslashes visible. `&#36;` is decoded by the browser to a dollar symbol and does not enter dollar-delimiter matching.

Only these five raw-HTML dollar positions changed. The **eight** escaped-dollar tokens inside actual mathematical expressions remain intact. No global backslash stripping, math-command removal or broad parser change was performed. Simply unescaping two currencies on one raw-HTML line was rejected during planning because it can create an unintended math span; both values are now explicitly checked outside math in the source/DOM regression.

All five values were verified in native Chrome text at every required width/theme, and again in four unavailable-KaTeX cases. Values, annual units, formula assumptions and the economic counterexample are unchanged.

## Fix C — One literal-emphasis note

Location: Domain 1 / **1.5.2 Due Care vs Due Diligence**, `domain-1.md:951`, `.reading-table-note`.

This was intended emphasis written inside raw HTML, not a meaningful literal asterisk or an established AI-conversion artifact. The raw HTML path retained its opening/closing markers. The correction uses `<em>` around the same Thai/English sentence. The caveat that the illustrative verb columns are not equivalent one-to-one pairs remains verbatim. Chrome confirms semantic emphasis and no literal asterisks in both themes/all required viewports. Intentional asterisks in inline code and ordinary Markdown emphasis are covered separately by focused tests.

## Math and academic preservation

Normal Chrome loads use KaTeX and retain the same **19 original formula annotations** in each D1 state. Forced unavailable-KaTeX tests use the existing semantic fallback, retaining 19 math expressions. No math error nodes occurred. Inline and display rendering helpers were exercised through real browser calls and detached DOM inspection in both modes; this is not a new general math-renderer conformance claim.

Representative arithmetic remains: AV 10,000 × EF 0.50 = SLE 5,000; SLE 5,000 × ARO 2 = ALE 10,000/year; × ARO 0.2 = ALE 1,000/year; diagram 100,000×0.40=40,000 and ×0.5=20,000/year; net benefit (10,000−9,000)−5,000=−4,000/year. Units, valid LaTeX, original explanations and financial/legal/safety qualifications were preserved.

Academic Batch A **23/23** and Batch B **33/33** regressions pass. The final source boundary check reverses only the recorded formatting/paint substitutions in memory and reproduces the starting file hashes. This confirms that other academic literals and unrelated source bytes were not altered. No original note was edited.

## Automated verification

| Verification | Result |
|---|---|
| New `verify-reading-critical-readability.mjs` | **13/13**; initially 7 failed / 6 passed, then all green |
| Existing persistence / navigation | **20/20 + 15/15** |
| Foundation / D1 / D2 / D3 / D4 | **9/9 + 10/10 + 9/9 + 10/10 + 10/10** |
| DOM integrity | **36/36** |
| Academic A / B | **23/23 + 33/33** |
| **Targeted total** | **188 passed, 0 failed** |
| Historical D1 presentation suite | **366/370**, four unchanged pre-existing failures |

Across these runs, **554 checks passed and four historical assertions failed**. The latter expect old defense-in-depth strings: Layer 4 Identity & Access, Layer 6 Application & Data, Layer 7 Resilience & Response and non-chronological complementary defense. The exact same 366/370 result was reproduced against frozen starting files with a read-only FS hook. No academic string or historical assertion was changed to force them green.

The initial DOM-integrity run failed its serialized `$25,000` expectation after the correct HTML entity representation was introduced. That is not described as a baseline defect. Its four currency checks now recognize equivalent currency entities, retaining their original amounts, and an additional check guards the cost-benefit paragraph against dollar-as-math interpretation. Existing structure/math checks remain. Native Chrome verifies the actual decoded text; the small Node serialization helper is not treated as a layout/browser substitute.

These tests cover the bounded six formatting corrections and service paint, with representative math/Markdown regressions. They do not certify broad Markdown correctness or implement future presentation phases.

## Real Chrome results

Chrome **156.0.8078.74**, Windows headless, native CDP layout/keyboard APIs, local HTTP server, isolated temporary profiles. The user's normal browser profile/progress was not used.

| Required viewport | D1 and D4, Light/Dark after | Result |
|---|---:|---|
| 1920×1080 | 4 cases | Pass |
| 1366×768 | 4 cases | Pass |
| 1024×768 | 4 cases | Pass |
| 768×1024 | 4 cases | Pass |
| 390×844 | 4 cases | Pass |
| 375×812 | 4 cases | Pass |
| 320×568 | 4 cases | Pass |

Core after run: **32 contexts**, comprising the required 28 plus four D1 fallback cases (1366/390 × Light/Dark). **330/330 checks pass**, 70 after screenshots, zero console/runtime errors. Before run: 28 contexts, 246 checks with **88 expected defect failures**, 70 before screenshots, zero console/runtime errors. Intermediate failed after evidence remains separately labelled. Eight additional mobile/tablet contexts provide **48/48 primary-label checks**, with zero errors. Final browser acceptance checks total **378 passed / 0 failed**.

Recorded results include visible currency/note text, computed paint/contrast, label bounds and separation, active SVG/HTML representation, math output/error nodes, document scroll/client width and console/runtime errors. No document horizontal overflow was found in the final states. Small-text metrics remain recorded as limitations rather than falsely certified readable by a source font-size assertion.

Phase 2 spot checks in the 28 normal after contexts restored the actual scroll position with a maximum **0 px** error. All 16 mobile/tablet Escape/inert/focus-return spot checks passed. The navigation/progress code is byte-identical to the starting workspace. This is focused regression evidence, not a reimplementation or a claim to have repeated the entire earlier Phase 2 matrix.

Representative screenshot pairs: `before/after-dmz-1366-light.png`, `before/after-dmz-1366-dark.png`, `before/after-risk-390-light.png`, `before/after-cba-320-dark.png`, `before/after-note-375-dark.png`. `before-browser.json`, `after-browser.json` and `mobile-service-results.json` contain full metadata and measurements.

## Exact changed-file manifest

| Path | Change |
|---|---|
| `js/core/diagram-generator.js` | Three DMZ rectangle fills and three service-port text paint attributes; no other diagram change |
| `content/isc2-cc-2026/reading/domain-1.md` | Five currency tokens in four raw HTML lines; one note's semantic emphasis |
| `tools/verify-reading-critical-readability.mjs` (new) | Thirteen bounded serialization/math/content/paint contracts |
| `tools/verify-reading-notes-dom-integrity.mjs` | Entity-aware existing currency checks plus two-currency/no-math guard; 35→36 assertions |
| `docs/plans/task.md` | One appended Phase 3A.2 tracking row; existing rows preserved |
| `docs/plans/isc2-cc-2026/reading-notes-phase3a2-critical-readability-fixes.md` (new) | This report |
| `artifacts/qa/reading-notes-phase3a2/**` (new) | Baseline/frozen source, correction map, QA drivers, red/intermediate/final logs, screenshots, boundary/preservation proof and manifests |

`changed-files.json` hashes the code/test/document paths. `evidence-manifest.json` exhaustively lists every QA file by path, size and SHA-256, excluding itself. `correction-map.json` records each exact source replacement and original line. Current line numbers did not shift in the two production files. No CSS, parser, renderer, router, progress or existing academic QA file was edited.

## Preservation and remaining work

The final comparison covers **23,075 starting files**. Only the four expected existing paths changed: two production files, the directly related DOM-integrity test and the task tracker. No unexpected baseline change was found. Reverse-substitution checks reproduce both original production hashes; all other source bytes and the existing tracker rows are preserved. All eight originals, unrelated subsections, other diagram payloads, all prior reports/evidence, Learning Slides, Quiz/Question Banks, Vocabulary, Domain 5, academic corrections and Phase 2 runtime/tests remain intact. HEAD and empty staged diff are unchanged. See `preservation.json` and `boundary-checks.json`.

Remaining issues are outside this bounded implementation: diagram typography/component-width adaptation and other muted support-label contrast (Phase 3E), DMZ connectivity/other visual relationships (3D), semantic headings/vertical rhythm (3B), table fragmentation/padded-cell layout (3C), language metadata and integrated/native assistive-technology acceptance (3F). In particular, the DMZ's constrained-desktop service labels and firewall text are still small: service title/port text is approximately **8.44 / 7.19 px at 1024**, with some firewall labels **5.62 px**. Geometry/font changes were deliberately left for the requested Phase 3E work. The improved ink contrast does not certify comfortable typography across the whole diagram.

No authorized correction is blocked. Human academic and visual acceptance remains pending. No stage, commit, push, reset, revert, clean or later-phase implementation occurred.
