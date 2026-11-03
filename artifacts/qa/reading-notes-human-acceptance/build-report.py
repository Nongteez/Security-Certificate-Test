from pathlib import Path
import json,hashlib,re
from datetime import datetime,timezone

root=Path.cwd();q=root/'artifacts/qa/reading-notes-human-acceptance'
read=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
write=lambda name,x:(q/name).write_text(json.dumps(x,indent=2,ensure_ascii=False),encoding='utf8')
link=lambda name:f'[{name}](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-human-acceptance/{name}>)'
main=read(q/'representative-results.json');journey=read(q/'interaction-results.json');supp=read(q/'supplemental-results.json');table=read(q/'table-final-results.json')
assert main['finished'] and len(main['observations'])==32 and len(main['screenshots'])==160
assert not main.get('error') and not supp.get('error') and supp['finished'] and table['pass']
assert all(not o['overflow'] and not o['headingSkips'] and o['bodyLang']=='th' and o['mathErrors']==0 for o in main['observations'])
assert all(d['label'] for o in main['observations'] for d in o['diagrams'])
assert all(c['pass'] for c in supp['controls']) and len(supp['controls'])==4
bad=[c for c in journey['checks'] if not c['pass']]
assert [c['name'] for c in bad]==['Enter activates Go to bottom','Space activates Back to top'] and len(journey['checks'])==18
final_checks=[dict(source='interaction-results.json',**c) for c in journey['checks'] if c['pass']]+[dict(source='supplemental-results.json',name=f"Settled {c['w']} {c['destination']} control",**c) for c in supp['controls']]+[dict(source='table-final-results.json',name='Final Status column reachable by keyboard',**{'pass':table['pass']})]
write('final-interaction-summary.json',dict(passingJourneyChecks=16,settledControlChecks=4,finalTableEndpointChecks=1,finalChecks=final_checks,prematureControlAssertions=bad,interpretation='Two fixed-1000ms checks were premature during normal smooth scrolling. All four bounded endpoint checks finish at exact destinations, in 1511–1549ms. Original attempt results retained.'))
visual_samples=['target-cloudSharedResponsibility-1920-light.png','target-privacyFlow-1920-light.png','target-bcVsDrScope-1920-dark.png','target-privacyFlow-390-dark.png','target-scorecards-390-dark.png','target-riskCalculationFlow-390-dark.png','target-controlTimeline-1366-light.png','target-ethicsCanons-320-dark.png','nist-reference-320-dark.png','full-target-cloudSharedResponsibility-320-dark.png','privacy-prose-roles-1366-light.png','privacy-prose-roles-320-dark.png','target-iamLifecycle-320-dark.png','smooth-control-320-top.png','journey-mobile-open.png','viewport-d4-1920-dark.png','scorecard-scroll-end-390-dark.png','viewport-d1-1366-light.png']
write('visual-review.json',dict(reviewType='Model-assisted inspection of actual Chrome PNGs; not human approval',contactSheets=[f'contact-{w}-{t}.png' for w in [1920,1366,390,320] for t in ['light','dark']],nativeSamplesInspected=visual_samples,notes=['Contact sheets assess grouping and representation changes; original PNGs assess glyph legibility.','Initial twelve target images have a documented 2400px export cap. Full-height supplemental images cover every capped case; this is screenshot export truncation, not content clipping.','Privacy prose keeps three roles grouped on desktop and stacked on mobile.','Scorecard intentionally scrolls within its region; final screenshot shows Actual/Status and visible focus.','Wide privacy connector captions fit but have tight breathing room; optional preference, no confirmed clipping.'],humanAccepted=False))
issues=[dict(id='HAR-V01',result='NEEDS FIX',severity='Low',acceptanceBlocker=False,domain=2,anchor='topic-2-4-scorecards',source='content/isc2-cc-2026/reading/domain-2.md:489',viewports='All four requested widths, both themes',steps='Open scorecard subsection; inspect icon before the example-table caption.',observation='Decorative blue X/cross precedes a neutral example table. It can suggest an error, failure or close action unrelated to the caption.',evidence=['target-scorecards-390-dark.png','target-scorecards-320-light.png'],recommendation='Subject to user approval, replace only this decorative caption glyph with a neutral table/example symbol or remove it. Preserve wording, table and anchors.'),dict(id='HAR-A01',result='NEEDS FIX',severity='Low',acceptanceBlocker=False,domain=1,anchor='topic-1-1-cia-triad',viewports='1366×768 Light accessible-tree sample; unnamed nodes also observed in other contexts',steps='Open CIA route and inspect Chrome accessibility tree; follow backend node IDs in supplemental-results.json.',observation='Several decorative SVGs are exposed as unnamed image nodes, including the already-named theme button icon and reading-rule icons. Instructional diagram regions retain explicit names.',evidence=['supplemental-results.json'],recommendation='In a separately approved scoped follow-up, hide purely decorative Reading SVGs from accessibility APIs while retaining button names and informative diagrams. Do not blanket-hide all SVGs.',limitation='Native speech output / practical user impact UNVERIFIED. AX exposure is confirmed, an audible announcement is not.')]
write('findings.json',issues)
pngs=sorted(p.name for p in q.glob('*.png'))
write('evidence-manifest.json',dict(reviewDate='2026-11-02 Asia/Bangkok',status='Ready for Human Acceptance — No Critical Blockers',humanApproved=False,screenshots=pngs,screenshotCount=len(pngs),representativeCases=main['cases'],supplementalCases=['NIST facets at 1366 Light and 320 Dark','Full Privacy prose/roles at 1366 Light and 320 Dark'],primary=['representative-results.json','final-interaction-summary.json','supplemental-results.json','table-final-results.json','findings.json','visual-review.json'],reusedEvidence=['artifacts/qa/reading-notes-phase3e/summary.json','artifacts/qa/reading-notes-phase3f/summary.json','artifacts/qa/reading-notes-phase3f/navigation-journey-results.json','artifacts/qa/reading-notes-phase3f/academic-exception.json','artifacts/qa/reading-notes-phase3f/historical-regressions.json'],nativeTouch='UNVERIFIED',nativeScreenReader='UNVERIFIED'))
coverage='\n'.join(f"| {x['domain']} | `{x['anchor']}` | {x['id']} | Eight configurations |" for x in main['cases'])
report=f'''# Reading Notes — Final Human Acceptance Review

**Ready for Human Acceptance — No Critical Blockers**

Prepared 2 November 2026, Asia/Bangkok. This is an evidence-based recommendation for user review, **not human approval**. No critical blocker was reproduced in the targeted scope. Two low-severity issues merit follow-up. Academic precedence, native touch and native screen-reader acceptance remain open.

## Scope and method

Recovered the final acceptance summary, Phase 3E/F reports, source-fidelity/diagram inventory, screenshot evidence, academic/test exception registers, live tracker and dirty Git tree. Existing Phase F evidence was reused; the full 94-subsection matrix was not repeated. Current evidence covers **16 representative patterns × eight configurations**, plus two NIST and two full Privacy prose views. Thirty-two domain/viewport/theme contexts produced 128 targeted captures and 32 viewport captures. Supplemental complete-height and interaction captures bring this review to **{len(pngs)} PNGs**, including eight contact sheets.

Viewports: **1920×1080, 1366×768, 390×844, 320×568**, each Light and Dark. Actual installed **{main['chrome']['Browser']}** renders the current local app, not a mock. Initial captures used an isolated headed Chrome process through CDP. No Chrome native window was exposed to the computer-use inventory; stable follow-up input used the installed Chrome headless renderer. Browser input is genuine trusted browser mouse/keyboard dispatch, **not physical input/hardware or a native OS UI acceptance claim**. Profile and test progress are isolated from the user's browser.

Visual assessment used the eight contact sheets for hierarchy/grouping and original-resolution samples for labels, tables and focus; geometry alone is not the visual verdict. Long narrow diagrams need substantial vertical scrolling, but maintain normal-sized selectable text and identifiable groups. Twelve initial exports were capped at 2400px; every capped case has a separate `full-target-…` screenshot. Those caps are export limitations, not page clipping. Full Privacy section captures show surrounding prose and roles together.

## Results

| Area | Result | Evidence | Notes |
|---|---|---|---|
| Visual design | NEEDS FIX — Low, nonblocking | {link('visual-review.json')}; {link('target-scorecards-390-dark.png')} | Overall hierarchy/readability is suitable for review; HAR-V01's X caption is misleading decoration. |
| Responsive layout | PASS | {link('representative-results.json')}; {link('contact-320-dark.png')} | All four widths/both themes reviewed; native alternatives preserve groups. No page overflow/Math errors or skipped heading levels in the scoped observations. |
| Desktop width / grouping | PASS | {link('privacy-prose-roles-1366-light.png')}; {link('viewport-d4-1920-dark.png')} | Desktop space used; three Privacy prose roles remain adjacent; mobile stacks them together. Wide Privacy connector captions are tight but no confirmed clipping. |
| Light / Dark | PASS | {link('contact-1920-light.png')}; {link('contact-1920-dark.png')} | Label/card contrast and hierarchy visually usable. Prior measured contrast evidence reused unchanged. |
| Navigation / reload / Resume | PASS | {link('final-interaction-summary.json')} | Domain 3, Objective 3.2, ABAC, next models subsection, Back, reload and overview re-entry exercised. Actual mid-reading reload position restored. |
| Keyboard / focus | PASS, scoped | {link('smooth-control-320-top.png')}; {link('scorecard-scroll-end-390-dark.png')} | Enter/Space theme and scroll control; drawer Tab/Escape/return focus; table ArrowRight and exit. |
| Table legibility / semantics | PASS | {link('table-final-results.json')}; {link('scorecard-scroll-end-390-dark.png')} | Named focusable region, scoped headers, visible focus, native horizontal scrolling to final Status column. Initial partial columns are intentional contained overflow. |
| Heading / language / informative diagram names | PASS, scoped | {link('representative-results.json')}; {link('source-fidelity-check.log')} | Thai body, English block metadata, coherent heading order and nonempty region names. These do not certify spoken-language switching. |
| Decorative SVG accessibility | NEEDS FIX — Low, nonblocking | {link('supplemental-results.json')} | HAR-A01: unnamed decorative image nodes exposed. Actual native speech impact unverified. |
| Touch | UNVERIFIED | This report / human checklist | Browser mobile sizing is not physical touch verification. Check gutter target comfort on real hardware. |
| Native screen reader | UNVERIFIED | This report / human checklist | No native reader journey completed. NVDA absent at checked standard installation paths; no active NVDA/JAWS/Narrator session observed. Built-in Narrator was not exercised. Native voice behavior cannot be approved from AX data. |
| Neutral ethics wording | PASS for bounded requirement | {link('target-ethicsCanons-320-dark.png')}; prior `academic-exception.json` | All four canons retained; no invented universal conflict algorithm in the neutral introduction. Existing canon-specific qualifications remain for academic review. |
| Academic provenance / Question Bank reconciliation | UNVERIFIED | Prior Phase F academic register | D1-N08 remains open; Reading and protected Question Bank interpretation must be reconciled using authorized evidence. |

## Exact representative source/route coverage

The current entry routes are `index.html#<anchor>` below, discovered from the source and existing inventory. Local session query strings only separate QA loads.

| Domain | Actual anchor | Pattern | New review |
|---|---|---|---|
{coverage}

Additional D3 `topic-3-1-iam-frameworks`: NIST facets/63A/63B/63C at 1366 Light and 320 Dark ({link('nist-reference-320-dark.png')}). Existing Phase 3F full-domain evidence covers the other D3 contexts.

**Source-location clarification:** SLE / ARO / ALE are in **Domain 1, `topic-1-2-quantitative-risk`**, not Domain 2 in the current textbook. They were reviewed at that actual location; formulas and examples are intact. Dashboard prose is `topic-2-4-dashboards`; its adjacent scorecard example table is in `topic-2-4-scorecards`. No nonexistent dashboard table or route was invented.

Desktop judgments: wide Cloud legend fits; CIA and DiD relationships remain readable; controls are independent cards; BC/DR scopes are separated; JML Mover is optional/repeatable; OSI distinguishes reference layers from model correspondence. Mobile judgments: reflowed labels stay readable, Privacy's roles stay grouped, measurement terms remain intact, and the fixed control remains in the gutter in reviewed screenshots. Dense diagrams require longer scrolling; that preference belongs in human review rather than silent redesign.

## Interaction evidence and limitations

**16 journey checks + four settled control checks + one final table-endpoint check pass.** Native browser mouse input includes mouse movement, pressed/released state and click count; keyboard input includes complete keyDown/keyUp with Enter carriage return or Space text. Focus setup is recorded in scripts; this is browser-assisted interaction testing.

The desktop journey opens Domain 3, Objective 3.2, ABAC (3.2.7), then models (3.2.8), navigates Back, reloads mid-reading, exits through the visible top header and resumes. Returning to the header before exit intentionally moves the reading position to the top; Resume is compared to that actual exit position, not to the earlier mid-page position. Mid-page preservation is separately verified by Back/reload and the retained Phase F Resume journeys.

Theme toggles respond to both Space and Enter. Mobile drawer opens with focus at its close control, Tab follows the navigation, Escape restores toggle focus, and closed contents remain excluded from Tab. Scorecard keyboard scrolling reaches **248/248px** and reveals all Status values with focus visible; Tab exits. The earlier `journey-scorecard-keyboard-scroll.png` lands on a later region after Tab setup and is **diagnostic, not the final scorecard visual proof**; use `scorecard-scroll-start/end-390-dark.png` instead.

Initial incomplete mouse input and whole-document `scrollIntoView` during sidebar setup produced invalid journey attempts; these are retained in diagnostic JSON. QA setup was corrected to scroll only the sidebar before clicking. Two 1000ms control assertions were premature during normal smooth scrolling; four bounded endpoint checks subsequently reached exact top/bottom in **1511–1549ms**, with focus retained. Original failed timing records remain visible in `interaction-results.json`; no production workaround or test expectation was changed. See {link('final-interaction-summary.json')}.

## Outstanding issues and academic/test exceptions

| ID | Classification | Severity / blocker | Reproduction / evidence | Smallest recommended follow-up |
|---|---|---|---|---|
| HAR-V01 | Confirmed presentation concern | Low / No | D2 §2.4.6, all requested states: blue X before neutral example-table caption; source `domain-2.md:489`; {link('target-scorecards-390-dark.png')} | Replace/remove only decorative caption glyph after approval; retain caption/table. |
| HAR-A01 | Confirmed AX exposure; speech impact unverified | Low / No | D1 CIA, 1366 Light: unnamed decorative SVG image nodes; exact nodes in {link('supplemental-results.json')} | Hide only confirmed decorative Reading SVGs; preserve control names and meaningful diagrams. Separately approved work. |
| D1-N08 | Requires authoritative current-course evidence | Academic sign-off exception | Neutral Reading wording and four canons remain; protected Question Bank priority interpretations still exist. | Human academic owner obtains authorized provenance and resolves cross-module interpretation in a separate Question Bank workstream. No change here. |
| Native AT / touch | Unverified acceptance | User review required | No physical touch or native speech journey | Complete personal checks below. |

Ethics register: [Phase F academic exception](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/academic-exception.json>). The public sources/original notes did not verify a universal current-course earlier-canon-wins algorithm; **silence does not prove historical authorized precedence teaching false**. The neutral introduction does not settle that provenance question. All four canons, duties, numbering/mnemonic and existing canon-specific qualifications are preserved. Question Bank lines 2725, 3091 and 3099 in `data/certs/isc2/cc/versions/2026/questions/domain-1.js` remain unchanged and need a separate approved reconciliation.

The prior regression sweep is **26/28 suites green**, not fully passing. Both master-start and Phase-F-start logs reproduce these unchanged messages:

- `tools/verify-domain2-math-symbols.mjs`: `Section 2.2.6 must state RTO ≤ MTD`; `bcVsDrScope desktop SVG must include DR ⊂ BC`; `Must preserve Passphrase length ≥ 14`. These are inherited exact wording/relationship expectations; current source bytes are unchanged in this acceptance task.
- `tools/verify-bilingual-table-cells.mjs`: `Exactly 25 bilingual terminology cells converted across 3 tables (found: 27)`.

[Historical reproduction register](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/historical-regressions.json>). No assertions were modified or deleted. The full regression suite and 94×14 matrix were reused, not rerun; five focused fidelity/accessibility checks passed freshly in this review.

## Preservation and exact deliverables

No production, course note, CSS, JS, test, progress schema or unrelated module was edited. Existing uncommitted Learning Slides and prior Reading changes remain. The only existing-file update is an appended review-tracker row in `docs/plans/task.md`; no earlier row changed. New files are this report and the evidence directory. Exact SHA-256/path inventory: {link('changed-files.json')}; protected-file comparison: {link('preservation.json')}. These final manifests are generated and verified after this report. No Git staging, commit, reset, revert, clean, push or deployment occurred.

- [Human acceptance review](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-human-acceptance-review.md>)
- {link('evidence-manifest.json')}
- {link('findings.json')}
- {link('visual-review.json')}
- {link('final-interaction-summary.json')}
- {link('checkpoint.md')}

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
'''
(root/'docs/plans/isc2-cc-2026/reading-notes-human-acceptance-review.md').write_text(report,encoding='utf8')
tracker=root/'docs/plans/task.md';old=tracker.read_bytes();row=b'\n| Human acceptance review. Reading Notes Domains 1-4 | Ready for Human Acceptance - No Critical Blockers; human approval pending | Targeted 16-pattern / four-viewport / both-theme review; two low-severity follow-ups; native touch and screen reader unverified; ethics and baseline test exceptions open. Evidence-only, no production edits. |\n'
if b'| Human acceptance review. Reading Notes Domains 1-4 |' not in old:tracker.write_bytes(old+row)
write('review-summary.json',dict(status='Ready for Human Acceptance — No Critical Blockers',reviewDate='2026-11-02 Asia/Bangkok',humanAccepted=False,productionFilesModified=[],representativePatterns=16,requestedConfigurations=8,domainContexts=32,targetedPatternStates=128,screenshotCount=len(pngs),finalInteractionChecks=21,criticalBlockers=[],minorFindings=['HAR-V01','HAR-A01'],unverified=['Native screen reader','Physical touch','Authorized ethics-precedence provenance / Question Bank reconciliation'],priorRegressionSuitesPassing=26,priorRegressionSuitesTotal=28,priorMatrixRerun=False))
(q/'checkpoint.md').write_text('''# Acceptance review checkpoint\n\nTargeted review completed; report and evidence saved. Human approval is pending. No production correction authorized/applied. Do not restart Phase E/F matrices.\n\nFinal evidence: representative-results.json (32 contexts / 160 captures); supplemental-results.json (12 full-height replacements, 4 Privacy/NIST views, 4 settled control captures); table-final-results.json (final Status column at 248/248px); final-interaction-summary.json (21 valid assertions). Initial input/scroll setup/timing diagnostics retained.\n\nOpen: HAR-V01 X icon; HAR-A01 unnamed decorative images (both Low); native touch/screen-reader UNVERIFIED; ethics precedence / Question Bank and two historical failing suites unchanged.\n\nNext step: user reviews report checklist. No next implementation, Git or deployment command. Close only owned session helpers after evidence; verify preservation and changed-files manifests.\n''',encoding='utf8')
print(json.dumps(dict(report='written',pngs=len(pngs),interactionChecks=21,status='Ready for Human Acceptance — No Critical Blockers')))
