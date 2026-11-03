# Reading Notes — Final Human Acceptance Review

**Ready for Human Acceptance — No Critical Blockers**

Prepared 2 November 2026, Asia/Bangkok. This is an evidence-based recommendation for user review, **not human approval**. No critical blocker was reproduced in the targeted scope. Two low-severity issues merit follow-up. Academic precedence, native touch and native screen-reader acceptance remain open.

## Scope and method

Recovered the final acceptance summary, Phase 3E/F reports, source-fidelity/diagram inventory, screenshot evidence, academic/test exception registers, live tracker and dirty Git tree. Existing Phase F evidence was reused; the full 94-subsection matrix was not repeated. Current evidence covers **16 representative patterns × eight configurations**, plus two NIST and two full Privacy prose views. Thirty-two domain/viewport/theme contexts produced 128 targeted captures and 32 viewport captures. Supplemental complete-height and interaction captures bring this review to **198 PNGs**, including eight contact sheets.

Viewports: **1920×1080, 1366×768, 390×844, 320×568**, each Light and Dark. Actual installed **Chrome/156.0.8078.74** renders the current local app, not a mock. Initial captures used an isolated headed Chrome process through CDP. No Chrome native window was exposed to the computer-use inventory; stable follow-up input used the installed Chrome headless renderer. Browser input is genuine trusted browser mouse/keyboard dispatch, **not physical input/hardware or a native OS UI acceptance claim**. Profile and test progress are isolated from the user's browser.

Visual assessment used the eight contact sheets for hierarchy/grouping and original-resolution samples for labels, tables and focus; geometry alone is not the visual verdict. Long narrow diagrams need substantial vertical scrolling, but maintain normal-sized selectable text and identifiable groups. Twelve initial exports were capped at 2400px; every capped case has a separate `full-target-…` screenshot. Those caps are export limitations, not page clipping. Full Privacy section captures show surrounding prose and roles together.

## Results

| Area | Result | Evidence | Notes |
|---|---|---|---|
| Visual design | NEEDS FIX — Low, nonblocking | [visual-review.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/visual-review.json>); [target-scorecards-390-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/target-scorecards-390-dark.png>) | Overall hierarchy/readability is suitable for review; HAR-V01's X caption is misleading decoration. |
| Responsive layout | PASS | [representative-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/representative-results.json>); [contact-320-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/contact-320-dark.png>) | All four widths/both themes reviewed; native alternatives preserve groups. No page overflow/Math errors or skipped heading levels in the scoped observations. |
| Desktop width / grouping | PASS | [privacy-prose-roles-1366-light.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/privacy-prose-roles-1366-light.png>); [viewport-d4-1920-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/viewport-d4-1920-dark.png>) | Desktop space used; three Privacy prose roles remain adjacent; mobile stacks them together. Wide Privacy connector captions are tight but no confirmed clipping. |
| Light / Dark | PASS | [contact-1920-light.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/contact-1920-light.png>); [contact-1920-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/contact-1920-dark.png>) | Label/card contrast and hierarchy visually usable. Prior measured contrast evidence reused unchanged. |
| Navigation / reload / Resume | PASS | [final-interaction-summary.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/final-interaction-summary.json>) | Domain 3, Objective 3.2, ABAC, next models subsection, Back, reload and overview re-entry exercised. Actual mid-reading reload position restored. |
| Keyboard / focus | PASS, scoped | [smooth-control-320-top.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/smooth-control-320-top.png>); [scorecard-scroll-end-390-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/scorecard-scroll-end-390-dark.png>) | Enter/Space theme and scroll control; drawer Tab/Escape/return focus; table ArrowRight and exit. |
| Table legibility / semantics | PASS | [table-final-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/table-final-results.json>); [scorecard-scroll-end-390-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/scorecard-scroll-end-390-dark.png>) | Named focusable region, scoped headers, visible focus, native horizontal scrolling to final Status column. Initial partial columns are intentional contained overflow. |
| Heading / language / informative diagram names | PASS, scoped | [representative-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/representative-results.json>); [source-fidelity-check.log](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/source-fidelity-check.log>) | Thai body, English block metadata, coherent heading order and nonempty region names. These do not certify spoken-language switching. |
| Decorative SVG accessibility | NEEDS FIX — Low, nonblocking | [supplemental-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/supplemental-results.json>) | HAR-A01: unnamed decorative image nodes exposed. Actual native speech impact unverified. |
| Touch | UNVERIFIED | This report / human checklist | Browser mobile sizing is not physical touch verification. Check gutter target comfort on real hardware. |
| Native screen reader | UNVERIFIED | This report / human checklist | No native reader journey completed. NVDA absent at checked standard installation paths; no active NVDA/JAWS/Narrator session observed. Built-in Narrator was not exercised. Native voice behavior cannot be approved from AX data. |
| Neutral ethics wording | PASS for bounded requirement | [target-ethicsCanons-320-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/target-ethicsCanons-320-dark.png>); prior `academic-exception.json` | All four canons retained; no invented universal conflict algorithm in the neutral introduction. Existing canon-specific qualifications remain for academic review. |
| Academic provenance / Question Bank reconciliation | UNVERIFIED | Prior Phase F academic register | D1-N08 remains open; Reading and protected Question Bank interpretation must be reconciled using authorized evidence. |

## Exact representative source/route coverage

The current entry routes are `index.html#<anchor>` below, discovered from the source and existing inventory. Local session query strings only separate QA loads.

| Domain | Actual anchor | Pattern | New review |
|---|---|---|---|
| 1 | `topic-1-1-cia-triad` | ciaTriad | Eight configurations |
| 1 | `topic-1-1-privacy-data-protection` | privacyFlow | Eight configurations |
| 1 | `topic-1-1-zero-trust-defense-in-depth` | defenseInDepth | Eight configurations |
| 1 | `topic-1-2-quantitative-risk` | riskCalculationFlow | Eight configurations |
| 1 | `topic-1-4-control-types` | controlTimeline | Eight configurations |
| 1 | `topic-1-5-isc2-ethics` | ethicsCanons | Eight configurations |
| 2 | `topic-2-2-bc-vs-dr` | bcVsDrScope | Eight configurations |
| 2 | `topic-2-4-memory-aid` | effectivenessHierarchy | Eight configurations |
| 3 | `topic-3-1-jml-lifecycle` | iamLifecycle | Eight configurations |
| 3 | `topic-3-2-polp-vs-sod` | leastPrivilegeVsSod | Eight configurations |
| 3 | `topic-3-2-models-matrix` | accessControlModels | Eight configurations |
| 4 | `topic-4-1-tcp-ip-mapping` | osiVsTcpIpModel | Eight configurations |
| 4 | `topic-4-2-dmz-architecture` | dmzFirewallArchitecture | Eight configurations |
| 4 | `topic-4-3-shared-responsibility` | cloudSharedResponsibility | Eight configurations |
| 2 | `topic-2-4-dashboards` | dashboards | Eight configurations |
| 2 | `topic-2-4-scorecards` | scorecards | Eight configurations |

Additional D3 `topic-3-1-iam-frameworks`: NIST facets/63A/63B/63C at 1366 Light and 320 Dark ([nist-reference-320-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/nist-reference-320-dark.png>)). Existing Phase 3F full-domain evidence covers the other D3 contexts.

**Source-location clarification:** SLE / ARO / ALE are in **Domain 1, `topic-1-2-quantitative-risk`**, not Domain 2 in the current textbook. They were reviewed at that actual location; formulas and examples are intact. Dashboard prose is `topic-2-4-dashboards`; its adjacent scorecard example table is in `topic-2-4-scorecards`. No nonexistent dashboard table or route was invented.

Desktop judgments: wide Cloud legend fits; CIA and DiD relationships remain readable; controls are independent cards; BC/DR scopes are separated; JML Mover is optional/repeatable; OSI distinguishes reference layers from model correspondence. Mobile judgments: reflowed labels stay readable, Privacy's roles stay grouped, measurement terms remain intact, and the fixed control remains in the gutter in reviewed screenshots. Dense diagrams require longer scrolling; that preference belongs in human review rather than silent redesign.

## Interaction evidence and limitations

**16 journey checks + four settled control checks + one final table-endpoint check pass.** Native browser mouse input includes mouse movement, pressed/released state and click count; keyboard input includes complete keyDown/keyUp with Enter carriage return or Space text. Focus setup is recorded in scripts; this is browser-assisted interaction testing.

The desktop journey opens Domain 3, Objective 3.2, ABAC (3.2.7), then models (3.2.8), navigates Back, reloads mid-reading, exits through the visible top header and resumes. Returning to the header before exit intentionally moves the reading position to the top; Resume is compared to that actual exit position, not to the earlier mid-page position. Mid-page preservation is separately verified by Back/reload and the retained Phase F Resume journeys.

Theme toggles respond to both Space and Enter. Mobile drawer opens with focus at its close control, Tab follows the navigation, Escape restores toggle focus, and closed contents remain excluded from Tab. Scorecard keyboard scrolling reaches **248/248px** and reveals all Status values with focus visible; Tab exits. The earlier `journey-scorecard-keyboard-scroll.png` lands on a later region after Tab setup and is **diagnostic, not the final scorecard visual proof**; use `scorecard-scroll-start/end-390-dark.png` instead.

Initial incomplete mouse input and whole-document `scrollIntoView` during sidebar setup produced invalid journey attempts; these are retained in diagnostic JSON. QA setup was corrected to scroll only the sidebar before clicking. Two 1000ms control assertions were premature during normal smooth scrolling; four bounded endpoint checks subsequently reached exact top/bottom in **1511–1549ms**, with focus retained. Original failed timing records remain visible in `interaction-results.json`; no production workaround or test expectation was changed. See [final-interaction-summary.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/final-interaction-summary.json>).

## Outstanding issues and academic/test exceptions

| ID | Classification | Severity / blocker | Reproduction / evidence | Smallest recommended follow-up |
|---|---|---|---|---|
| HAR-V01 | Confirmed presentation concern | Low / No | D2 §2.4.6, all requested states: blue X before neutral example-table caption; source `domain-2.md:489`; [target-scorecards-390-dark.png](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/target-scorecards-390-dark.png>) | Replace/remove only decorative caption glyph after approval; retain caption/table. |
| HAR-A01 | Confirmed AX exposure; speech impact unverified | Low / No | D1 CIA, 1366 Light: unnamed decorative SVG image nodes; exact nodes in [supplemental-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/supplemental-results.json>) | Hide only confirmed decorative Reading SVGs; preserve control names and meaningful diagrams. Separately approved work. |
| D1-N08 | Requires authoritative current-course evidence | Academic sign-off exception | Neutral Reading wording and four canons remain; protected Question Bank priority interpretations still exist. | Human academic owner obtains authorized provenance and resolves cross-module interpretation in a separate Question Bank workstream. No change here. |
| Native AT / touch | Unverified acceptance | User review required | No physical touch or native speech journey | Complete personal checks below. |

Ethics register: [Phase F academic exception](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/academic-exception.json>). The public sources/original notes did not verify a universal current-course earlier-canon-wins algorithm; **silence does not prove historical authorized precedence teaching false**. The neutral introduction does not settle that provenance question. All four canons, duties, numbering/mnemonic and existing canon-specific qualifications are preserved. Question Bank lines 2725, 3091 and 3099 in `data/certs/isc2/cc/versions/2026/questions/domain-1.js` remain unchanged and need a separate approved reconciliation.

The prior regression sweep is **26/28 suites green**, not fully passing. Both master-start and Phase-F-start logs reproduce these unchanged messages:

- `tools/verify-domain2-math-symbols.mjs`: `Section 2.2.6 must state RTO ≤ MTD`; `bcVsDrScope desktop SVG must include DR ⊂ BC`; `Must preserve Passphrase length ≥ 14`. These are inherited exact wording/relationship expectations; current source bytes are unchanged in this acceptance task.
- `tools/verify-bilingual-table-cells.mjs`: `Exactly 25 bilingual terminology cells converted across 3 tables (found: 27)`.

[Historical reproduction register](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/historical-regressions.json>). No assertions were modified or deleted. The full regression suite and 94×14 matrix were reused, not rerun; five focused fidelity/accessibility checks passed freshly in this review.

## Preservation and exact deliverables

No production, course note, CSS, JS, test, progress schema or unrelated module was edited. Existing uncommitted Learning Slides and prior Reading changes remain. The only existing-file update is an appended review-tracker row in `docs/plans/task.md`; no earlier row changed. New files are this report and the evidence directory. Exact SHA-256/path inventory: [changed-files.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/changed-files.json>); protected-file comparison: [preservation.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/preservation.json>). These final manifests are generated and verified after this report. No Git staging, commit, reset, revert, clean, push or deployment occurred.

- [Human acceptance review](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-human-acceptance-review.md>)
- [evidence-manifest.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/evidence-manifest.json>)
- [findings.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/findings.json>)
- [visual-review.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/visual-review.json>)
- [final-interaction-summary.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/final-interaction-summary.json>)
- [checkpoint.md](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/checkpoint.md>)

## Human sign-off checklist — all pending

- [ ] Inspect both themes on desktop and a real phone: Cloud legend, OSI, measurement labels, optional Mover, independent control functions, Privacy prose/roles, and neutral ethics.
- [ ] Read a dense mobile section long enough to judge scrolling, spacing and line lengths personally.
- [ ] Use reload, Back/Forward and Resume; Tab/Shift+Tab/Escape; activate theme and scroll control with Enter/Space; reach the scorecard's final Status column.
- [ ] Judge the 24px gutter control's actual touch comfort and the table's horizontal-scroll discoverability on physical hardware.
- [ ] Perform a native screen-reader journey, including Thai/English switching, heading/region/table reading and potential unnamed-icon noise.
- [ ] Decide whether HAR-V01/HAR-A01 need correction before your acceptance, or accept them as explicitly deferred minor work.
- [ ] Resolve or explicitly defer the ethics-provenance/Question Bank academic exception and acknowledge the two inherited test exceptions.
- [ ] Record visual and academic approval yourself. This package approves neither.

Recommendation: proceed to human acceptance with the documented minor findings and unverified areas. No critical engineering blocker was confirmed in this targeted review. Full project human approval remains pending; no further phase is started.
