from pathlib import Path
import json,re,hashlib
root=Path.cwd();q=root/'artifacts/qa/reading-notes-visual-remediation'
read=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
write=lambda n,x:(q/n).write_text(json.dumps(x,ensure_ascii=False,indent=2),encoding='utf8')
link=lambda n:f'[{n}](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-visual-remediation/{n}>)'
b=read(q/'before-results.json');a=read(q/'after-results.json');v=read(q/'browser-validation.json');nav=read(q/'navigation-smoke.json');reg=read(q/'regression-results.json')
assert b['finished'] and a['finished'] and len(a['contexts'])==10
assert v['finished'] and nav['finished'] and not v.get('error') and not nav.get('error')
assert len(v['checks'])==151 and all(x['pass'] for x in v['checks']) and len(nav['checks'])==24 and all(x['pass'] for x in nav['checks'])
assert len(reg)==25 and all(x['exitCode']==0 for x in reg)
minimum=min(x['contrast'] for c in v['contexts'] for x in c['labels']);minimum_font=min(x['size'] for c in v['contexts'] for x in c['labels'])
matrix=[]
for x in a['contexts']:
 old=next(t for t in b['contexts'] if t['width']==x['width'] and t['theme']==x['theme']);m=next(t for t in v['contexts'] if t['width']==x['width'] and t['theme']==x['theme']);matrix.append(dict(viewport=f"{x['width']}×{x['height']}",theme=x['theme'],articleWidth=x['article']['width'],paragraphBefore=old['paragraph']['width'],paragraphAfter=x['paragraph']['width'],unusedBefore=old['article']['width']-old['paragraph']['width'],unusedAfter=x['article']['width']-x['paragraph']['width'],leadBefore=old['lead']['width'],leadAfter=x['lead']['width'],gapsBefore=old['gaps'],gapsAfter=x['gaps'],diagramWidth=x['card']['width'],diagramHeightBefore=old['card']['height'],diagramHeightAfter=x['card']['height'],connectorLabels=m['edges'],caption=m['captionBox'],nestedProseWidth=m['nestedPrivacyWidth'],status='Pass'))
write('coverage-measurements.json',matrix)
rows='\n'.join(f"| {r['viewport']} | {r['theme']} | {r['articleWidth']:.0f} | {r['paragraphBefore']:.1f} → {r['paragraphAfter']:.1f} | {r['unusedBefore']:.1f} → {r['unusedAfter']:.1f} | Pass |" for r in matrix)
checked=[f'after-threat-{w}-{t}.png' for w in [1920,1366,1024,390,320] for t in ['light','dark']]
write('visual-review.json',dict(status='Implemented — human visual acceptance pending',reviewer='Model-assisted actual Chrome screenshot inspection; not independent or human approval',finalDiagramCaptures=checked,additionalInspected=['before-intro-1920-light.png','before-threat-1920-light.png','after-intro-1920-light.png','after-intro-320-dark.png','after-objective-1366-light.png','unrelated-cloudSharedResponsibility-1920-light.png'],observations=['Wide view uses causal edge tracks with readable labels; central Asset visibly groups its Vulnerability.','Controls occupy a separate shared band above the causal example, with conditional reduction language and no terminal arrow.','Constrained layouts retain directional labels and explicit grouping, rather than five unrelated sequential cards.','All five original detailed definitions remain, so narrow diagrams are intentionally tall.','Plain bilingual qualification is outside the illustration; no decorative note card.','Inherited 32px H4 margin and faint subtitle paint were detected in first-pass screenshots, measured and corrected only in this component.','No aesthetic acceptance is claimed. User must judge the actual final images.'],humanAccepted=False))
screens=sorted(p.name for p in q.glob('*.png'));production=['css/reading.css','js/core/diagram-generator.js']
write('evidence-manifest.json',dict(status='VIS-01–VIS-06 Implemented — Pending Human Visual Acceptance',humanAccepted=False,reviewDate='2026-11-02 Asia/Bangkok',route='index.html#topic-1-1-core-concepts',objectiveRoute='index.html#obj-1-1',screenshots=screens,screenshotCount=len(screens),before='before-results.json',after='after-results.json',browserBounds='browser-validation.json',navigation='navigation-smoke.json',regressions='regression-results.json',academicLedger='threat-redesign-ledger.json',sourceVersion={n:hashlib.sha256((root/n).read_bytes()).hexdigest() for n in production},firstPass='first-pass-results.json (diagnostic, superseded by final after-results.json)'))
text=f'''# VIS-01–VIS-06 — Targeted Reading Notes Visual Remediation

**VIS-01–VIS-06 Implemented — Pending Human Visual Acceptance**

2 November 2026, Asia/Bangkok. The user's rejection of the previous visual result remains the acceptance state until the user reviews this implementation. Earlier Phase 3A–3F/human-review reports are historical evidence, not approval of the new result. No other diagram or project phase was redesigned.

## Scope and confirmed root causes

Actual locations: Domain 1 introduction, `obj-1-1` / Objective 1.1, and `topic-1-1-core-concepts` / §1.1.1. Its placeholder resolves to `diagrams.threatChain` in `js/core/diagram-generator.js`. Reproduced with installed Chrome 156.0.8078.74, current local application, isolated profile and CDP screenshots. The user's reported patterns were reproduced from current production; no assumption of prior visual acceptance was made.

| Issue | Confirmed root cause | Production correction |
|---|---|---|
| VIS-01 width | Phase 3B.3's `--reading-narrative-measure:96ch` computes to **878.6px** at 16px; direct Objective paragraphs are capped there within a **1210px** article. Nested Privacy prose has the same cap; definition paragraphs use a separate 104ch cap. | Reading-only scoped overrides make narrative/definition measures **100% of their actual context**. Direct ordinary paragraphs follow article width. Article stays bounded at **76rem (1216px)** when the sidebar is collapsed. Tables, headings and dividers retain the same content rail. |
| VIS-02 spacing | First Objective stacks a collapsed 32px margin, 32px padding and 1px divider: **65px** lead-to-heading gap. Objective H2 inherits 1.8 line height; subsection margins add unnecessary separation. | First Objective margin/padding16px; subsequent Objective44/24px. H2 line-height1.4, bottom12px. H3 rhythm28/12px; article header24px bottom margin/16px padding; lead bottom16px. No global app spacing tokens changed. |
| VIS-03 obscured labels | Original SVG's adjacent nodes have **30 viewBox units** of connector space. `ถูกเจาะผ่าน` measures **48.5 units / 74.0 screen px**, versus about **45.8 screen px** of available gap at1920; `ก่อให้เกิด` also exceeds the gap. Text is painted into neighboring filled node regions. | Native selectable labels get their own **96px desktop tracks**, separate from arrows and nodes. Vertical reflow uses the same complete meaning. No Thai text is fitted into an SVG gap or obscured by a node. |
| VIS-04 dense note | Long bilingual semantic note sits inside the main diagram and inherits a ruled/callout-like treatment. | Shortened qualification is a plain paragraph **outside** the diagram, referenced by `aria-describedby`; no extra note card. Five original detailed definitions remain. |
| VIS-05 Controls ambiguity | Five nodes share one row; a dashed path curves from Controls toward Asset, visually suggesting a final/feedback step despite the qualification. | Controls become a separate shared risk-reduction band above the causal example, with conditional likelihood/impact wording. No edge leads from Impact to Controls and no return loop exists. |
| VIS-06 space use | Compressed single-row `760×150` SVG, duplicate mobile representation and inherited `.reading-body h4` **32px top/8px bottom** margins leave title/diagram space poorly balanced. | One native relationship map uses actual content height, one grouped vulnerable Asset, explicit edge tracks and compact title spacing. The main SVG viewBox is removed; the only SVGs are simple decorative arrow strokes (`96×12`, `12×40`). Scoped title margin0 resolves the inherited gap. |

**Important measurement distinction:** the introduction's `.reading-lead` already measured **1210/1210px** at1920. Its final short line was natural text wrapping. It was not artificially stretched. The unnecessary constraint was on Objective and nested prose. At1366, ordinary paragraph width grows878.6→953px; at1024/mobile the paragraph already filled its context and remains full-width.

## Design and exact production changes

Only **two production files** changed:

- [css/reading.css](<D:/_Coding/SEC-CERT-TEST/css/reading.css>): one marked `VIS-01–VIS-06` block inserted before Phase 3B.2. Higher Reading-only specificity overrides the existing nested prose caps/rhythm without altering original CSS bytes or global tokens. `:has(.reading-structured-objective)` limits the article/header change to published Reading; original unpublished/Domain5 and other modules are untouched. Target-only native map rules choose horizontal relations at880px of diagram-container width and vertical relations below that.
- [js/core/diagram-generator.js](<D:/_Coding/SEC-CERT-TEST/js/core/diagram-generator.js>): only the `threatChain` template. The title/key remain. Actor uses a vulnerability within an Asset; successful exploitation can cause Impact. Five bilingual definitions/subtitles and all existing examples are retained exactly, while the duplicate SVG/mobile layout and long ruled note are replaced.

The new map is a causal example, not an official process model: Controls are not a fifth procedural node. The Asset/Vulnerability grouping makes the relationship explicit; Actor and Impact are unboxed surrounding concepts, avoiding a row of five generic cards. The separated Controls band has no misleading return arrow. English labels are paired with Thai; arrows are decorative/hidden to accessibility APIs. One native structure carries all content at every width.

The previous full SVG is shorter because desktop users could not see the richer native explanations. The new desktop illustration includes those five preserved definitions, so **a shorter total card height is not claimed**. Blank title space and compressed label gaps are removed; remaining height serves actual explanations and the nested Asset/Vulnerability relationship. On narrow screens, normal-sized definitions require scrolling. User visual judgment remains required.

## Before/after measurements

All measurements in CSS pixels. `Unused` is article width minus ordinary paragraph block width, not white space after a naturally short final line.

| Viewport | Theme | Article | Ordinary paragraph Before → After | Unused Before → After | Result |
|---|---|---:|---:|---:|---|
{rows}

First-Objective spacing is **65→33px**; H2→description **16→12px**; description→subsection **40→28px**; subsection→first paragraph **16→12px** in every measured state. The 1920 sidebar-free article/paragraph measure is **1216/1216px**. The nested Privacy browser-only probe independently reproduced878.6px within1210px and verified the variable-based correction before production application. Final nested-context equality passes at all ten states.

Complete bounds, node/label rectangles, computed styles, paragraph ancestors and per-state card heights: {link('before-results.json')}, {link('after-results.json')}, {link('coverage-measurements.json')}, {link('nested-width-probe.json')}, {link('browser-validation.json')}.

## Actual Chrome before/after images

- {link('comparison-intro-1920-light.png')}: layout/spacing comparison.
- {link('comparison-threat-1920-light.png')}: wide causal-map comparison.
- {link('comparison-threat-1366-dark.png')}: constrained desktop comparison.
- {link('comparison-threat-320-dark.png')}: narrow reflow comparison.
- Final original-resolution map: {link('after-threat-1920-light.png')}, {link('after-threat-1366-dark.png')}, {link('after-threat-1024-light.png')}, {link('after-threat-390-dark.png')}, {link('after-threat-320-light.png')}.

All five viewports **1920×1080,1366×768,1024×768,390×844,320×568**, both themes:30 Before and30 final After screenshots (introduction, Objective and full diagram/caption per state). Ten first-pass diagram screenshots remain diagnostic, with their later title-margin/contrast corrections documented. Four unchanged-diagram smoke captures and four comparison sheets bring evidence to **{len(screens)} PNGs**. Original captures remain unchanged; comparison sheets only resize/place complete captures with external labels. Model-assisted original image inspection covered all ten final diagram states, representative introduction/Objective views and unchanged Cloud; this does not grant human approval. See {link('visual-review.json')}.

## Browser and regression results

**151 targeted browser checks pass**, with zero final failures: paragraphs/context widths, nested prose, exact viewport, native label bounds, no node/arrow intersections, retained concepts, separate Controls band, outside caption, text bounds, title spacing and no page overflow. Minimum instructional font is **{minimum_font:.0f}px** and minimum measured instructional text contrast **{minimum:.2f}:1**, excluding the small decorative category tag. Those are measured implementation results, not a full WCAG conformance claim.

**24 actual scroll/navigation checks pass** across Domain1/Domain4 at1920 Light and320 Dark: reload, next subsection, Back, Forward, Resume/unchanged v1 schema and page overflow. Reflowed document heights do not break position restoration. Existing UI/navigation/parser/progress code remains byte-identical. Unrelated DiD and Cloud were captured at those sizes; all other23 registry payloads remain exact, and all11 other D1 rendered diagram markups plus all D1 table contents remain exact across the ten states.

**25 applicable automated suites / {sum(x['passedChecks'] for x in reg)} checks pass.** Includes seven new targeted contracts, all four Reading domains, structural/fidelity, Markdown/Math rendering, tables, Phase3A.2, Phase3B.1, Phase3B.2, width, diagram semantics, navigation/persistence and prior BatchA/B checks. Commands/logs: {link('run-regressions.mjs')} and {link('regression-results.json')}. This is a targeted affected-suite run, not a repeat of the full94-subsection browser matrix or every application test.

Seven new contracts were run before implementation: **five failed as expected**, while two pre-existing preservation conditions passed. Final seven pass. During regression review, old byte/wrapper expectations correctly failed for the intentionally redesigned component. Narrow updates were made as follows:

- `tools/reading-fidelity-clarifications.mjs` now accepts only the exact old/new threat payloads in new `tools/fixtures/reading-visual-threat-revision.json`; an unrecorded baseline throws. Existing Phase3F ethics handling and all other diagram comparisons remain unchanged. Existing old fixtures were not edited.
- `tools/verify-reading-diagram-semantics.mjs` compares the target's five original paragraph bodies independently of removed mobile wrapper classes. Only the old banner's presentation is replaced with five explicit concepts plus the nonprocedural qualification. Every other ledger row remains checked.
- `tools/verify-reading-final-accessibility.mjs` strips only the explicit new VIS CSS block before comparing all earlier CSS bytes; navigation/UI comparisons stay unchanged.

These are intentional layout/markup changes with independent concept/body/bounds checks, not removal of a valid academic assertion. Initial failing outputs are retained in `regression-initial.json`/logs; final outputs are separate `*-final.log`. A Windows text-write initially changed line endings; source/test line endings were restored to the baseline LF form without changing implementation content. Final isolated-byte checks verify only the intended block/template changes.

The **two previously documented historical red suites** (`verify-domain2-math-symbols.mjs` and `verify-bilingual-table-cells.mjs`,25 expected/27 actual) were not modified or rerun as part of this focused suite set. Their relevant source/diagram inputs remain unchanged; prior baseline evidence and exception status remain in the Phase3F register. No all-application-tests-green or human-acceptance claim is made.

## Academic preservation

All four Reading Markdown files remain byte-identical, including formulas, numbers, examples, terminology, course anchors and Phase3D qualifications. All five target definition paragraphs and their bilingual subtitles are verified exact. The concise caption preserves four propositions: causal example; no five required steps; Controls can reduce relevant risk; Controls need not wait for Impact. The caption is smaller/plain outside the diagram; explanatory wording is shortened only within the authorized diagram presentation scope.

This representation is consistent with vulnerability being an exploitable/triggerable weakness, risk involving likelihood/impact, and safeguards addressing security requirements. Supporting primary references: [NIST vulnerability glossary](https://csrc.nist.gov/glossary/term/vulnerability), [NIST risk glossary](https://csrc.nist.gov/glossary/term/risk), [NIST security-control glossary](https://csrc.nist.gov/glossary/term/security_control). The visual structure is our illustrative arrangement, not a NIST/ISC2 mandated sequence or a guarantee of prevention. This is not a new whole-course academic verification. Ethics-provenance and protected Question Bank interpretation exceptions remain untouched.

Exact old/new template and preserved bodies: {link('threat-redesign-ledger.json')}; fixed test-only revision fixture: [reading-visual-threat-revision.json](<D:/_Coding/SEC-CERT-TEST/tools/fixtures/reading-visual-threat-revision.json>).

## Preservation, changed-file inventory and remaining review

The protected baseline contains **29071 files**. Final comparison allows only the two production files, own tracker row and three scoped test/helper files listed below. No original note, Learning Slide, Quiz, Vocabulary, Question Bank, original fixture, other diagram, existing report or prior QA artifact was changed or deleted. Removing the new CSS block recovers the complete starting CSS bytes; restoring only the old `threatChain` template recovers the complete starting module bytes. Exact hashes and isolated master-task delta are saved by finalization.

Existing files changed:

1. `css/reading.css` — scoped block.
2. `js/core/diagram-generator.js` — target template only.
3. `docs/plans/task.md` — own appended VIS row only.
4. `tools/reading-fidelity-clarifications.mjs` — exact target migration.
5. `tools/verify-reading-diagram-semantics.mjs` — targeted wrapper/body distinction.
6. `tools/verify-reading-final-accessibility.mjs` — new-block-aware preservation.

New non-QA files: this report, `tools/verify-reading-visual-remediation.mjs` and `tools/fixtures/reading-visual-threat-revision.json`. Every QA file/path/hash is included in {link('changed-files.json')}. Other evidence: {link('evidence-manifest.json')}, {link('preservation.json')}, {link('production-delta.patch')}, {link('review.md')}, {link('checkpoint.md')}.

No confirmed VIS-01–VIS-06 implementation defect remains in the scoped checks. **Human visual acceptance is still pending.** Review the real wide prose line length, central vulnerable-Asset grouping, Controls band and narrow-screen scroll length. The five full definitions are deliberately preserved; further shortening needs a separate decision. Native screen-reader and physical touch acceptance remain unverified. Prior HAR-V01 X icon/HAR-A01 decorative-icon follow-ups are outside this authorization and remain untouched. No other diagram or phase is started; no Git reset/clean/revert/stage/commit/push occurred.
'''
(root/'docs/plans/isc2-cc-2026/reading-notes-visual-remediation-vis01-vis06.md').write_bytes(text.encode('utf8'))
p=root/'docs/plans/task.md';t=p.read_bytes();lines=t.splitlines(keepends=True);matches=[i for i,l in enumerate(lines) if l.startswith(b'| VIS-01-VIS-06 targeted Reading remediation |')];assert len(matches)==1
lines[matches[0]]=b'| VIS-01-VIS-06 targeted Reading remediation | Implemented - Pending Human Visual Acceptance | 879-to-1210px prose; 65-to-33px first Objective gap; single causal map with separate Controls band and native labels. 10 viewport/theme states, 151 browser + 24 navigation checks and 25 suites/1094 assertions pass. Only CSS and threatChain production changed; human visual approval pending. |\n';p.write_bytes(b''.join(lines))
write('summary.json',dict(status='VIS-01–VIS-06 Implemented — Pending Human Visual Acceptance',humanAccepted=False,viewports=5,themes=2,finalStates=10,browserChecks=151,navigationChecks=24,browserFailures=0,automatedSuites=25,automatedChecks=sum(x['passedChecks'] for x in reg),automatedFailures=0,productionFilesChanged=production,sourceMarkdownChanged=False,otherDiagramPayloadsChanged=0,screenshots=len(screens),minInstructionalFontPx=minimum_font,minInstructionalContrast=minimum,preservation='preservation.json',remaining='User visual acceptance; native touch/screen reader; inherited academic/test/minor-icon exceptions unchanged'))
(q/'review.md').write_text('''# Scoped final review\n\nSpec review: all six requested defects have concrete production changes and Before/After evidence at ten states. No claim of user acceptance. Width measurements distinguish natural short lines from actual 96ch caps. Caption retains all four qualifications outside the diagram. Controls are a shared conditional band; original five definitions and subtitles remain exact.\n\nQuality review: no runtime dependency, observer or navigation change. One selectable responsive map; arrows are decorative and labels are separate native text. 23 unrelated payloads remain exact. Scope guarded by Reading classes and structured published content. New CSS is one reversible marked block; all original bytes match after its removal.\n\nTests: five witnessed initial contract failures; final seven pass. Narrow recorded migration updates replace obsolete byte/wrapper assertions while preserving complete other-source comparisons. Actual bounds, contrast and source-body checks are independent of expected markup fixtures. Final 25 affected suites are green; inherited red suites are not silently fixed.\n\nHuman review: wide line lengths, map preference and mobile reading length remain a human decision. No further diagram redesign authorized.\n''',encoding='utf8')
(q/'checkpoint.md').write_text('''# VIS final checkpoint\n\nImplementation and target browser/regression review complete; human visual acceptance pending. Do not reapply implement.py (one-time script) or restart earlier phases.\n\nFinal: after-results.json / browser-validation.json (151 pass); navigation-smoke.json (24 pass); regression-results.json (25 suites /1094 pass). Before results and first-pass diagnostics retained. Production only CSS VIS block + threatChain. All Markdown and other23 payloads unchanged. Exact production delta, preservation hashes and changed-files manifest are the final gate.\n\nNext: user opens comparison-intro-1920-light.png and comparison-threat-1920-light.png /320-dark, judges actual visual result. No automatic redesign or other phase. Native touch/AT and prior academic/historical exceptions remain pending. Close only owned ports5326/9386 after evidence; no production command pending.\n''',encoding='utf8')
print(json.dumps(dict(status='VIS-01–VIS-06 Implemented — Pending Human Visual Acceptance',pngs=len(screens),browserChecks=175,automatedChecks=sum(x['passedChecks'] for x in reg)),ensure_ascii=True))
