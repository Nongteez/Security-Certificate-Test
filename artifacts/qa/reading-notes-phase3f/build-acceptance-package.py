from pathlib import Path
import json,re,hashlib,subprocess
root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3f';plans=root/'docs/plans/isc2-cc-2026'
def read(n):return json.loads((q/n).read_text(encoding='utf-8-sig'))
def link(label,path,line=None):return f'[{label}](<{(root/path).as_posix()}{":"+str(line) if line else ""}>)'
s=read('summary.json');p=read('preservation.json');coverage=read('subsection-coverage.json');diagrams=read('diagram-coverage.json');tables=read('table-coverage.json');reg=read('regression-results.json')
assert s['browserFailures']==0 and not s['newFailingSuites']
prefix='artifacts/qa/reading-notes-phase3f/'
review='''# Final structured review — single-flow

Compared the master request, Phase 3E exit gate and Phase 3F evidence with the phase-only production delta. This is a local checklist review, not a claim of independent or human approval.

- Production scope is four files. No new dependency or routing/progress architecture. All original CSS bytes are recovered after removing the marked E/F blocks. UI JS is recovered after removing only the language metadata function/call; existing active-domain selection scopes it to Domains 1–4 and leaves Domain 5 untouched.
- Existing diagram keys/anchors retained. Four additive reflow representations preserve original SVG information; neutral ethics clarification is the only academic-wording change. Exact baseline-plus-ledger comparisons cover all four complete Markdown files and all 24 final diagram payloads. All original notes and unrelated/concurrent work remain byte-identical.
- Full current browser matrix, AX heading names, language, text contrast, SVG geometry, table focus/exit/ArrowRight, 56 navigation journeys and 56 native keyboard-control cases pass. Actual contact sheets, native pattern images, occlusion pairs and focused-control screenshots reviewed. No new confirmed clipping, false sequence, keyboard failure or preservation issue remains.
- QA failures were investigated: clipped MathML caused an overly broad range measurement; geometry now excludes that visually hidden subtree while checking visible KaTeX HTML. Incomplete CDP Enter input produced no click; full native Enter input confirms both actions. A same-document QA URL caused one readiness timeout; per-case document URLs and resumable state retain valid earlier cases. No production workaround was introduced for those harness issues.
- New metadata guard initially depended on a DOM dataset absent in existing test stubs; it now uses the screen's existing active-domain API. Existing shell/foundation tests pass unchanged.
- Two legacy suites remain red with identical baseline/current failures. They were not edited. Ethics current-course precedence and existing Question Bank interpretation remain explicit academic exceptions, not resolved findings.

Assessment: no new implementation blocker. Ready for human visual/academic acceptance with the stated exceptions; no full WCAG/native-screen-reader certification, commit, deployment or acceptance is implied.
'''
(q/'review.md').write_text(review,encoding='utf8')
native=['before-occlusion-d1-390.png','after-occlusion-d1-390.png','control-focus-320-dark.png','after-d1-ethicsCanons-1366-light.png','subsection-d1-topic-1-1-core-concepts-390-dark.png']
(q/'visual-review.json').write_text(json.dumps(dict(method='Actual PNG inspection of four 24-diagram overview sheets plus native-resolution occlusion pair, keyboard focus, neutral ethics and representative subsection. Phase 3E native samples cover cloud/measurement/OSI/DiD/JML/DMZ legibility. Thumbnails support structure, not individual tiny-glyph reading.',overview=[f'contact-{x}.png' for x in ['1920-light','1366-light','390-dark','320-dark']],nativeSamples=native,observations='All concepts remain available in responsive representations; inherited occlusion visibly removed; narrow focus ring and control remain visible. Wide tables intentionally scroll within named keyboard regions; a partially visible column at the start is not an inaccessible clipped column. Human preference/voice review remains pending.'),indent=2),encoding='utf8')
text=f'''# Phase 3F — Final Cross-Domain Regression & Acceptance Preparation

**Phase 3F Complete — Pending Human Acceptance**

Verified 2 November 2026 (Asia/Bangkok). Human visual and academic acceptance is **not approved**. Two historical test-suite exceptions and one academic provenance exception remain explicit below. No new failing suite or confirmed implementation regression remains.

## Entry gate and actual scope

Phase 3E completed before Phase 3F began: all 24 diagrams × fourteen states, cloud legend bounds, measurement at 320px, content-aware SVG/reflow sizing, contrast and representative image review passed. Its report, source hashes, 96 captures and 23-suite results were saved first. Phase 3F uses **current production**, not inherited success counts.

Published Reading coverage is **94 subsections: 24 / 29 / 17 / 24**, all **24 diagrams** and **22 tables**. Every subsection has fourteen current DOM/geometry observations; all diagrams and tables share that matrix. Viewports: 1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812, 320×568; Light and Dark. Installed Chrome **156.0.8078.74**, isolated profiles and localhost CDP; no user browser profile was modified.

## Confirmed fixes in this phase

### Floating-control occlusion

The existing `#btn-reading-scroll-nav` was fixed at right 28px (desktop) / 20px (mobile), intersecting the Reading column. Reproduction aligned actual text fragments with the control and found overlap in **11 of 12** sampled domain/width cases. The label was Back to top; the affected content included ordinary paragraphs and the lower-right PCI DSS explanation. Before/after PNGs retain the actual viewport.

The button now sits in the existing outer gutter: **desktop right 2px, 42×42px; mobile right 0, 24×44px**. Accounting for Chrome's 15px desktop scrollbar was necessary: right 12px still overlapped by about 6px. No article width was removed and the control was not hidden. Inset focus outline remains visible at the viewport edge; Reading bottom spacing includes a safe-area allowance. The 24px narrow target meets the AA minimum target dimension; human touch preference remains a review item.

Final reproduction: **12/12 cases, no overlap**. Every full-matrix context additionally proves the control lies outside the article and has at least a 24px target. **56 actual keyboard cases / 168 checks** prove visible focus and Enter activation to top and bottom. Reduced-motion mode makes those destination checks deterministic and is itself an accessibility path; normal navigation/scroll restoration was separately exercised.

Before: {link('occlusion screenshot',prefix+'before-occlusion-d1-390.png')}. After: {link('gutter screenshot',prefix+'after-occlusion-d1-390.png')}. Keyboard: {link('320px focused control',prefix+'control-focus-320-dark.png')}.

### Language and contrast

Reading body metadata is Thai (`lang=th`); purely English headings/block passages receive `lang=en`. Mixed Thai-English technical terms remain within their Thai context; no attempt was made to rewrite borrowed terminology. Metadata is restricted to published Domains 1–4 using the existing active-domain API. No lesson text, navigation logic or progress schema is changed by the annotation function. A final four-domain probe was repeated after adding that domain guard.

Full-page contrast testing found inherited faint concept subtitles/context notes, canon badges, scenario categories/answer labels and article metadata. Reading-scoped foreground fixes raise them to readable theme colors; the small instructional badges/scenario labels were raised to 14px. Minimum measured **prose text contrast {s['minProseContrast']:.2f}:1**, **diagram text contrast {s['minDiagramContrast']:.2f}:1**. Diagram instructional text remains at least **{s['minDiagramFontPx']:.2f}px**. These are targeted rendered measurements, not a full WCAG certification or a universal minimum-font-size rule.

### Ethics precedence — unresolved provenance, neutral production wording

**D1-N08 remains “Requires additional authoritative current-course evidence.”** The original notes explicitly enumerate four canons and an S–A–P–P mnemonic; they do not establish a universal earlier-canon-always-wins algorithm. The current official [ISC2 ethics page](https://www.isc2.org/ethics) and [examination agreement](https://www.isc2.org/exams/exam-agreement) establish mandatory professional duties and ethical judgment. Their silence does **not disprove** historical authorized precedence teaching.

Following the master's explicit instruction for an unresolved case, the lesson and diagram retain all four canonical duties, numbering, examples of professional obligations, the Canon 2 qualification and mnemonic, while removing unverified universal override language and supersedes connectors. Production now teaches contextual professional judgment. This does not assert that ISC2 has never taught an order of precedence.

Exact new bilingual rule: **พิจารณาหน้าที่ตาม Canon ทั้งสี่ร่วมกับข้อเท็จจริงและบริบท หมายเลขใช้สำหรับอ้างอิงข้อ ไม่ได้ยืนยันอัลกอริทึมตัดสินความขัดแย้งแบบตายตัว. Use professional ethical judgment; numbering alone does not establish a universal conflict-resolution algorithm.**

Trace: `ISC2 Update 2026/Domain 1/D1 sum.md:1540–1619`, `Domain 1.md:263–273`; current source `content/isc2-cc-2026/reading/domain-1.md`, anchor `topic-1-5-isc2-ethics`; registry `ethicsCanons`. Exact literal before/after pairs are in `academic-exception.json` and `tools/fixtures/reading-phase3f-clarifications.json`, with human approval explicitly false.

**Cross-module exception:** the protected Question Bank still teaches highest/strict priority in `data/certs/isc2/cc/versions/2026/questions/domain-1.js:2725,3091,3099`. It was not modified. Human academic review must reconcile that interpretation with authorized current-course evidence. It is not silently labelled false, resolved, or accepted.

## Current browser results

| Verification | Coverage / checks | Result |
|---|---:|---|
| Full Reading matrix | 94×14 subsection states; 24×14 diagrams; 22×14 tables; **{s['matrixChecks']:,} checks** | Pass |
| Navigation / progress | 56 domain/view/theme journeys; **{s['navigationChecks']} checks** | Pass |
| Native keyboard scroll control | 56 cases; **{s['keyboardControlChecks']} checks** | Pass |
| Final occlusion / language reproduction | 12 cases; **{s['occlusionChecks']} checks** | Pass |
| Browser total | **{s['totalBrowserChecks']:,} checks** | Zero final failures |
| Independent source/table/anchor reconciliation | **{s['reconciliationChecks']} derived checks** | Pass |

Counts are check executions and overlap in subject matter; they are not claims of that many independent educational concepts. Current named regions, accessible heading names via Chrome AX tree, logical heading order, whole words, visible text bounds, correct diagram relationships, table scope/rows/padded words, focus/Tab exit/ArrowRight, language metadata, floating gutter and settled layout were checked. All five numeric superscript occurrences are preserved by the automated structural/rendering suite.

Wide tables intentionally retain native horizontal scroll inside a named region. Their keyboard entry/exit and ArrowRight movement were tested where overflowing; there is no page-level horizontal scroll. A partially visible column in a start-position screenshot is an accessible scrollable column, not discarded content.

Navigation checks measure actual scroll offsets after reload, Resume, direct links, Back/Forward and cross-domain return; verify inactive-domain progress is retained; and exercise objective/subsection state, desktop sidebar scrolling, closed-mobile Tab exclusion, drawer focus entry, Shift+Tab, Escape return and responsive collapse. Each of the 56 journeys seeds a **global-fields-only v1 record** and verifies actual resumed scroll position. No migration or schema change was made.

## Complete subsection matrix

Each row has current source/heading geometry, word/Math checks and fourteen configuration observations in `subsection-coverage.json`. Earlier source-line fields are retained for traceability; current anchors are unchanged.

| Domain | Subsection / anchor | States | Result |
|---|---|---:|---|
'''
for row in coverage:text+=f"| {row['domain']} | {row['title'].replace('|',' / ')} — `{row['id']}` | 14/14 | Pass |\n"
text+='''
## Diagram and table matrices

| D | Diagram | Min px | Min contrast | States |
|---|---|---:|---:|---:|
'''
for m in diagrams:
 a=m['phase3F'];text+=f"| {m['domain']} | `{m['id']}` | {a['minFontPx']:.2f} | {a['minContrast']:.2f}:1 | 14/14 pass |\n"
text+='\n| D | Table index | Headers | Rows (including header) | States |\n|---|---:|---|---:|---:|\n'
for t in tables:text+=f"| {t['domain']} | {t['index']} | {' / '.join(x['text'].replace('|',' / ') for x in t['headers'])} | {t['rowCount']} | 14/14 pass |\n"
text+=f'''
## Academic fidelity and automated regressions

All four complete Markdown sources equal the Phase F baseline plus **only the exact recorded ethics replacements**. All 24 diagram payloads equal their Phase F baseline plus the recorded ethics clarification. Course formulas, numeric values, technical terminology, bilingual explanations, examples and all anchors are preserved outside that authorized clarification. Original eight notes remain byte-identical. Prior Batch A/B academic checks pass; the reported 48 corrections were not regenerated or overwritten.

**28 suites were run: 26 pass ({s['passingChecksInGreenSuites']:,} passing checks in those suites); two historical suites still fail.** Across all suites, including partial legacy suites, {s['passingAssertionsIncludingHistoricalSuites']:,} assertions pass. It would be incorrect to call all 28 suites green.

| Suite | Passing checks | Exit / disposition |
|---|---:|---|
'''
for r in reg:text+=f"| `{r['suite']}` | {r['passedChecks']} | {r['exitCode']} — {'Pass' if not r['exitCode'] else 'Historical baseline exception'} |\n"
text+='''
### Historical exceptions, not hidden failures

- `verify-domain2-math-symbols.mjs`: three obsolete assertions require the old exact RTO wording, a formal DR ⊂ BC diagram and Passphrase ≥14 text. Current academic wording and BC/DR semantics were already qualified before this master task. The suite has additional parent-harness failure accounting; these are three underlying assertion causes, not a new production defect.
- `verify-bilingual-table-cells.mjs`: 47 checks pass; the single hardcoded total expects 25 cells, while the existing current output has 27. The preserved table structures and remaining terminology checks pass.

Both failures were rerun with a read-only preload routing source reads to the **saved pre-Phase-F runtime**. Assertion messages match current runs exactly. The relevant source files also predate this task. Neither legacy suite was edited; raw baseline/current logs and `historical-regressions.json` remain. These are test-maintenance acceptance exceptions, not new regressions or permission to restore superseded teaching.

### Necessary assertion adaptations

Two existing Domain 1 expectations required a universal precedence claim; they now require four mandatory canons, professional judgment and absence of unverified supersedes wording, matching the explicit user-authorized clarification. Old fidelity fixtures remain unchanged. A test-only helper applies the exact ledger replacements only inside the ethics subsection / `ethicsCanons` expected string; all other text/byte comparisons remain active. New tests prove the entire final corpus equals that exact transformation. This does not grant human academic approval.

Phase 3E's NIST/cloud preservation guard allows only their explicitly added original SVG-label paragraphs. The original four historical entity/no-guarantee assertions resolved in Phase 3D remain green; valid safety qualifications were retained.

## Actual image review and harness corrections

Current final evidence includes 96 diagram components, 24 representative subsection viewport images, 144 navigation images, 14 keyboard-control focus images, 12 before/12 after occlusion images and four contact sheets. Actual PNG inspection covered all diagrams in overview sheets and native examples for cloud, measurement, OSI, JML, DiD, DMZ, ethics and the gutter/focus change. Overview thumbnails are structural checks; they do not certify reading every glyph. `visual-review.json` records the exact inspected files.

Three QA issues were diagnosed rather than patched into production: (1) broad paragraph ranges included KaTeX's intentionally clipped MathML accessibility tree; geometry now checks individual visible text nodes, excluding clipped MathML while retaining visible KaTeX checks; no formula changed. (2) CDP Enter without character text generated no click. A diagnostic recorded zero clicks with incomplete input and a real click with full Enter; the invalid checks were archived and complete native keyboard cases rerun. (3) one control-run readiness timeout used repeated same-document URLs; unique per-case URLs/retry and resume retained sixteen passing cases. All final 56 control cases pass.

The final language-domain guard was checked against existing shell/foundation tests and a repeated four-domain Chrome probe. It changes no Domains 1–4 annotation result and preserves unpublished Domain 5. Screenshot full-surface width locking remains QA-only; final component capture geometry checks pass. No manual screen-reader application or physical-device certification is claimed.

## Preservation and exact production changes

'''
for label,key in [('Master task','master'),('Phase 3F','phase3f')]:
 a=p[key];text+=f"{label} baseline: **{a['baselineFiles']:,} files**; **{a['bytePreserved']:,} byte-preserved**; {len(a['existingFilesChanged'])} authorized existing-file changes; no deletion/unexpected change.\n\n"
text+='''All original notes, Learning Slides, Quiz/Question Banks, Vocabulary, Domain 5 and previous QA remain preserved. Domains 2–4 Markdown is byte-identical to task start. D1 changes are confined to the exact ethics clarification; the rest is byte-preserved. Original CSS bytes are recovered after removing only E/F insertions. Existing navigation/progress JS is recovered after removing only language annotation; schema v1 is unchanged.

Production files changed during this master execution:

| File | Scope |
|---|---|
'''
prod=[('css/reading.css','Marked E/F Reading-only diagram legibility, contrast, gutter, focus and safe bottom spacing blocks.'),('js/core/diagram-generator.js','Additive OSI/NIST/DMZ/cloud native labels; bounded neutral ethics clarification. Existing diagram keys and other relationships retained.'),('js/ui/screen-reading.js','Published-Reading language metadata function and call only; no storage/history/router change.'),('content/isc2-cc-2026/reading/domain-1.md','Only neutral ethics subsection wording/badges; original four canon duties and mnemonic retained.')]
for name,why in prod:text+=f"| {link(name,name)} | {why} |\n"
text+='''
Other task edits are the own tracker row, explicitly justified tests/helper/clarification fixture, three reports and E/F QA evidence. `changed-files.json` enumerates every task file, size and SHA-256, with the master starting SHA for existing files. `master-production-delta.patch` is isolated from pre-existing dirty changes. No Git stage, commit, push, reset, revert, clean, deployment or unrelated refactor was performed.

## Remaining exceptions and human acceptance

Engineering gates pass with **no new unresolved regression**. The following remain acceptance items, not silently closed findings:

1. D1-N08 current authorized-course precedence provenance and the protected Question Bank interpretation. Neutral wording is implemented; definitive precedence verification remains open.
2. Two pre-existing failing test suites described above. Their assertion maintenance needs separate review; no expectation was silently changed.
3. Human visual preference, touch comfort for the 24×44 mobile gutter tab, Thai-English voice switching with native assistive technology, physical devices and cross-browser review. Automated AX/keyboard/contrast checks do not equal full WCAG or human accessibility acceptance.

- [ ] Review seven viewport sizes in both themes, especially cloud legend, 320px measurement, OSI and long native cards.
- [ ] Review before/after gutter images and actual keyboard top/bottom behavior.
- [ ] Approve or request changes to the neutral ethics wording; supply authorized current-course evidence if settling precedence.
- [ ] Acknowledge/review the Question Bank interpretation and legacy test exceptions without changing protected modules in this task.
- [ ] Complete native assistive-technology/physical-device review as required for acceptance.
- [ ] Explicitly record human visual and academic acceptance. No box is checked by this report.

## Evidence and references

'''
for n in ['summary.json','subsection-coverage.json','diagram-coverage.json','table-coverage.json','derived-reconciliation.json','navigation-journey-results.json','control-keyboard-results.json','before-occlusion.json','after-occlusion.json','academic-exception.json','regression-results.json','historical-regressions.json','preservation.json','evidence-manifest.json','changed-files.json','visual-review.json','review.md','checkpoint.md']:
 text+='- '+link(n,prefix+n)+'\n'
text+='''
- [W3C text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) and [focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) support the targeted criteria. They do not certify this implementation.
- [KaTeX supported layout](https://katex.org/docs/supported.html#layout) distinguishes inline breaking and display layout; visible formula checks are separate from its clipped accessibility representation.
- [Chromium CDP input protocol](https://chromedevtools.github.io/devtools-protocol/tot/Input/) and the saved empirical key-event diagnostic document the corrected native Enter input.
'''
(plans/'reading-notes-phase3f-final-regression-and-acceptance.md').write_text(text,encoding='utf8')

final=f'''# Reading Notes — Final Acceptance Summary

**Phase 3F Complete — Pending Human Acceptance**

Prepared 2 November 2026, Asia/Bangkok. Implementation and engineering QA for Domains 1–4 are ready for human review. The project is **not fully accepted**. Ethics provenance and two historical test suites remain explicit exceptions.

## What changed across Phase 3A–3F

| Original issue | Implemented resolution / evidence |
|---|---|
| P3-VS-001 BC/DR nesting | Distinct coordinated scopes; exact bilingual titles/examples retained (3D). |
| P3-VS-002 measurement hierarchy | Six local study-aid concepts grouped by purpose; no official six-step procedure (3D); readable at 320px (3E/F). |
| P3-TBL-001 fragmented terms | Content-driven columns, intact words, natural cell wrapping and native scroll regions (3C; current 3F). |
| P3-DIA-001 tiny SVG labels | Article-width SVG plus per-diagram reflow thresholds and complete native alternatives (3E; current 3F). |
| P3-TXT-001 weak groups / rhythm | Semantic subheadings, grouped definitions and scoped rhythm across all 94 ranges (3B.1/3B.2). |
| P3-SEM-001 OSI titles | Proper semantic source headings (3B); explicit seven-layer reflow and model correspondence (3D/E). |
| P3-SEM-002 compulsory Mover | Optional/repeatable Mover and continuous governance (3D). |
| P3-SEM-003 control workflow | Five complementary function cards, no mandatory sequence (3D). |
| P3-DIA-002 cloud clipping | Bounded legend, readable sizing/contrast and complete native examples (3E/F). |
| P3-TBL-002 GRC cell spill | Padded-cell/column sizing corrected; current table keyboard checks pass (3C/F). |
| P3-ACC-001 faint labels | Correct DMZ paints (3A.2), table contrast (3C), diagram contrast (3E), remaining instructional labels (3F). |
| P3-ACC-002 wrong inherited language | Thai Reading body / English block metadata (3F); native voice acceptance pending. |
| P3-TXT-002 raw currency escape | Five targeted escapes and literal-note fix, preserved by current fidelity/Math tests (3A.2/F). |
| Additional space-use concern | Wider Reading shell and context-aware prose/definition widths (3B.3). |
| Additional semantics | Ongoing Accounting, qualified DMZ zones, causal threat/control example, GRC coordination and conditional privacy consent (3D). |
| Inherited floating-control occlusion | Existing visible control moved into the outer gutter with keyboard focus/activation preserved (3F). |

The thirteen original root causes have engineering remediations verified in current scope. This table does not close D1-N08 or grant human academic/visual acceptance.

## Final production architecture

The existing Markdown parser renders native headings, lists, Math and accessible tables. Static diagram registry entries retain accurate SVG architectures or selectable semantic HTML. Reading-scoped container queries choose reflow when an SVG would undersize its labels; no responsive observer or new dependency was added. Native table regions retain contained horizontal scrolling. Existing navigation/history and `sec_cert_reading_progress_v1` position/anchor persistence remain intact. A Reading-only DOM metadata pass annotates language without rewriting content.

## Current final QA

| Coverage | Result |
|---|---|
| Subsections | **94/94** (D1 24, D2 29, D3 17, D4 24), **1,316 current states** |
| Diagrams | **24/24**, **336 current states**, minimum instructional labels {s['minDiagramFontPx']:.2f}px |
| Tables | **22/22**, **308 current states**, scoped headers/keyboard focus/scroll |
| Browser matrix | Seven required viewports × Light/Dark; **{s['matrixChecks']:,} checks pass** |
| Actual navigation | **920 checks pass**, including legacy global-only v1 records |
| Native keyboard control | **168 checks pass** across all 56 cases |
| Occlusion/language reproduction | **24 checks pass**; 11/12 before overlaps become 0/12 |
| Browser total | **{s['totalBrowserChecks']:,} final checks pass**, no final browser-matrix failures |
| Automated sweep | **26/28 suites pass**, **{s['passingChecksInGreenSuites']:,} passing checks in green suites**; two baseline exceptions remain |

Current QA was rerun after implementation; historical phase totals are not substituted for final coverage. Counts overlap in subject matter. Representative PNGs were actually inspected. Browser emulation and automated accessibility checks do not certify every physical device, browser or native screen reader.

## Academic and accessibility status

Original eight notes, prior academic corrections, formulas/numbers, examples, terminology and anchors are preserved. The only master-task academic-wording change is the exact neutral ethics clarification authorized for an unresolved case. All four canons and the mnemonic remain.

**D1-N08 is still unresolved:** primary public material and original notes do not verify a universal current-course conflict algorithm; their silence does not prove historical precedence teaching false. The protected Question Bank still teaches highest/strict priority. Human academic review must reconcile that interpretation using authorized evidence. Neither the Question Bank nor original notes were modified.

The two historical red suites are `verify-domain2-math-symbols.mjs` (three obsolete wording/relationship expectations) and `verify-bilingual-table-cells.mjs` (25 expected versus 27 existing cells). Same failures were reproduced against the saved baseline. They were not edited or hidden. No new regression remains.

Current headings/AX names, language metadata, text contrast, keyboard focus/exit, table scroll, mobile inertness/Escape and non-obscuring controls pass targeted checks. Human visual preference, narrow gutter touch comfort and native assistive-technology acceptance remain pending. No full WCAG conformance claim is made.

## Exact production inventory and preservation

This master task changed **four production files**:

'''
for name,why in prod:final+='- '+link(name,name)+': '+why+'\n'
final+='''
The cumulative current uncommitted Reading production set across the earlier phases also includes `content/isc2-cc-2026/reading/domain-2.md`, `domain-3.md`, `domain-4.md` and `js/core/markdown-parser.js` — **eight Reading production paths in total**. Those earlier changes were preserved, not reimplemented. Concurrent Learning Slides files in the wider dirty tree are not attributed to this task. Exact phase-start/current hashes and the isolated master delta are in the manifest.

'''
final+=f"Master baseline **{p['master']['baselineFiles']:,} files**: **{p['master']['bytePreserved']:,} byte-preserved**, {len(p['master']['existingFilesChanged'])} intentional existing-file changes including tests/tracker, no missing or unexpected changes. All original course notes and unrelated/concurrent modules are preserved. No Git mutations or deployment.\n\n"
final+='''## Human acceptance checklist

- [ ] Open the current application; review both themes at 1920, 1366, 1024, 768, 390, 375 and 320 widths.
- [ ] Compare the cloud legend, measurement at 320, optional Mover, DiD groups, control functions, seven OSI layers, and DMZ service labels with the evidence.
- [ ] Use Tab/Shift+Tab, Escape and table ArrowRight; test reload, Resume, Back/Forward and the gutter's top/bottom actions.
- [ ] Review and accept/request changes to the neutral ethics wording; separately settle authorized-course precedence and Question Bank consistency.
- [ ] Acknowledge the two unchanged historical test exceptions and decide on follow-up assertion maintenance.
- [ ] Complete native voice/physical-device review as required; explicitly record visual and academic acceptance. No checkbox is approved by this package.

## Reports and evidence

'''
for n,label in [('reading-notes-phase3a-presentation-audit.md','3A audit'),('reading-notes-phase3a1-source-fidelity-and-visual-audit.md','3A.1 source fidelity'),('reading-notes-phase3a2-critical-readability-fixes.md','3A.2 fixes'),('reading-notes-phase3b1-semantic-structure-pilot.md','3B.1 pilot'),('reading-notes-phase3b2-cross-domain-implementation.md','3B.2 cross-domain structure'),('reading-notes-phase3b3-layout-width-remediation.md','3B.3 widths'),('reading-notes-phase3c-tables-typography-remediation.md','3C tables'),('reading-notes-phase3d-diagram-semantics-remediation.md','3D semantics'),('reading-notes-phase3e-diagram-legibility-remediation.md','3E legibility'),('reading-notes-phase3f-final-regression-and-acceptance.md','3F current final QA')]:final+='- '+link(label,'docs/plans/isc2-cc-2026/'+n)+'\n'
for n,label in [('evidence-manifest.json','Final browser evidence'),('subsection-coverage.json','Complete 94-subsection matrix'),('changed-files.json','Exact changed-file hashes'),('preservation.json','Preservation proof'),('academic-exception.json','Open academic exception'),('historical-regressions.json','Baseline test exceptions')]:final+='- '+link(label,prefix+n)+'\n'
(plans/'reading-notes-final-acceptance-summary.md').write_text(final,encoding='utf8')
print('Phase 3F report and final acceptance summary written; human acceptance remains pending.')
