from pathlib import Path
import json,hashlib,csv
q=Path('artifacts/qa/reading-notes-phase3c')
load=lambda n:json.loads((q/n).read_text(encoding='utf8'))
summary=load('derived-verification.json'); inventory=load('table-inventory.json'); preservation=load('preservation.json'); regressions=load('regression-results.json');nav=load('navigation-journey-results.json')
before={d:load(f'before-d{d}.json') for d in range(1,5)};after={d:load(f'after-d{d}.json') for d in range(1,5)};widths={d:load(f'after-domain{d}-widths.json') for d in range(1,5)}
assert all(len(after[d]['contexts'])==len(widths[d]['contexts'])==14 for d in range(1,5))
assert all(not any(not c['pass'] for c in x['checks']) and not x['errors'] and not x.get('error') for x in [*after.values(),*widths.values(),nav])
assert all(any(c['name']=='readable-comparison-column-floor' for c in after[d]['checks']) for d in range(1,5))
assert len([s for s in regressions if s['exitCode']])==1
assert not preservation['unexpectedChanges'] and not preservation['deleted']
stable=load('after-stable-captures.json'); assert not stable.get('error')
assert len([s for s in stable['images'] if s['edge']=='start'])==308
root='D:/_Coding/SEC-CERT-TEST/'; link=lambda label,p:f'[{label}]({root}{p})'
evidence=lambda label,p:link(label,'artifacts/qa/reading-notes-phase3c/'+p)
def table(d,index,w,phase='after'):
 return next(c for c in (after if phase=='after' else before)[d]['contexts'] if c['width']==w and c['theme']=='light')['tables'][index]
coverage=[]
for d in range(1,5):
 source=Path(f'content/isc2-cc-2026/reading/domain-{d}.md').read_text(encoding='utf8')
 for r in widths[d]['contexts'][0]['ranges']:
  line=source[:source.index(f'id="{r["id"]}"')].count('\n')+1
  coverage.append({'domain':d,'id':r['id'],'sourceLine':line,'states':14,'headingAndLayout':'pass','sourceBytes':'unchanged','tableCases':sum(t['anchor']==r['id'] for t in inventory)})
assert len(coverage)==94
(q/'coverage-matrix.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2),encoding='utf8')
with (q/'coverage-matrix.csv').open('w',encoding='utf-8-sig',newline='') as f:
 writer=csv.DictWriter(f,fieldnames=coverage[0].keys());writer.writeheader();writer.writerows(coverage)
checks=sum(d['tableChecks']+d['widthChecks'] for d in summary['domains'])+len(nav['checks'])
passed=sum(s['passedChecks'] for s in regressions if s['exitCode']==0)
lines=[f'''# Phase 3C — Tables & Technical Typography Remediation

**Phase 3C Implemented — Pending Human Visual Acceptance**

All 22 current Markdown tables and all 94 Reading Notes subsections were verified in installed Chrome at seven viewports in both themes. The 15 previously reported word-fragmentation ranges were reproduced after Phase 3B.3 and corrected. GRC padded-cell overflow was separately corrected. Educational source wording, values, formulas, anchors and prior corrections are unchanged. Human acceptance remains pending.

Evidence index: {evidence('screenshots and capture manifest','evidence-manifest.json')}; {evidence('visual review record','visual-review.json')}.

## Confirmed root causes and production changes

1. Generic table cells inherited `word-break: break-word` / `overflow-wrap: break-word`. Native auto layout could therefore squeeze English words below their intrinsic width. The Reading-only override now uses normal word boundaries, manual hyphenation and native `table-layout: auto` / `min-width: min-content`.
2. Word integrity alone left some Thai explanation columns too narrow. Comparisons with three or more columns receive a **9rem minimum header width**, with native auto layout allocating the remaining space according to content. This is a readability floor, not equal percentages. Two-column tables retain natural sizing. Existing document-hierarchy column roles remain in force.
3. The GRC special case combined fixed percentages, a 780px minimum and a nowrap keyword. Its keyword could exceed the padded final cell. GRC now participates in content-driven sizing with a 9rem floor and wraps phrases at spaces. “Enterprise IT Governance” remains exactly worded and intact as words.
4. The bilingual English cell span's blanket nowrap rule forced some comparison tables unnecessarily wide. It now permits meaningful word/hyphen boundaries within tables. No global paragraph/cell nowrap, nonbreaking-space substitution, font reduction or terminology rewrite was introduced.
5. Risk-card headers reserved badge width while permitting title-word fragmentation. Scoped header wrapping, a yielding title group and normal title word boundaries fix small-phone “Risk Transfer / Sharing”, “Risk Avoidance” and “Risk Acceptance”. Scenario badges similarly stop shrinking below their word width, with headers wrapping when needed.
6. The renderer preserves native `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, rows and cells. Each existing scroll wrapper receives `role="region"`, `tabindex="0"` and a name derived from its visible column headers. Markup is stripped from that name and quotes/literal ampersands are escaped. Reading-only focus outlines and normal-size native scrollbars support keyboard discovery. No content model or navigation architecture changed.

Production files: {link('css/reading.css','css/reading.css:3733')} and {link('js/core/markdown-parser.js','js/core/markdown-parser.js:485')}. Parser call-site inspection found only Reading loader callers. CSS changes are confined to `.reading-body` descendants. Existing stylesheet bytes outside the inserted Phase 3C block are preserved.

Existing table body/header type sizes (14.72px / 15.04px), 1.65 body line height, 12px × 16px cell padding, all data and all table shapes remain. No source table was converted into cards or given hidden columns.

## Table coverage and finding reconciliation

The 22-table baseline was confirmed from current source; it was not treated as a defect quota. All 15 P3-TBL-001 ranges still had a reproducible fragmented word in at least one required state. P3-TBL-002 was padded GRC overflow, not failed native keyboard scrolling. Seven tables had no reproduced word fragmentation; they were verified without inventing academic or structural defects. The D3 master matrix, for example, already preserved words but inherited overly restrictive phrase nowrap sizing.

Each row below passed 14/14 final display states. Table indexes are zero-based within the domain; dimensions are columns × body rows. Exact headers/cells and source lines are in {evidence('table-inventory.json','table-inventory.json')}.

| Domain / table | Source anchor | Line | Shape | Baseline word issue | Final |
|---|---|---:|---:|---|---|''']
for t in inventory:
 issue='Confirmed' if t['anchor'] in summary['baselineFindings'] else ('Padded GRC overflow' if t['domain']==2 and t['index']==0 else 'Not reproduced')
 lines.append(f"| D{t['domain']} / {t['index']} | {t['anchor']} | {t['line']} | {len(t['headers'])} × {len(t['rows'])} | {issue} | 14/14 pass |")
lines += ['''
No English exam keyword, Thai explanation, acronym, punctuation or meaningful hyphen was rewritten. Ordinary breaks at spaces/hyphens are valid; individual unhyphenated words were checked by character-level ranges. Table text was also compared row-by-row against the post-3B.3 baseline in every state.

## Representative before/after measurements

Numbers below are CSS pixels in Light theme; corresponding Dark states also passed. The outer wrapper/article widths are unchanged from Phase 3B.3. Table width may exceed its wrapper intentionally: overflow is contained and the last column is reachable.

### A. Domain 2 — 2.4.8 measurement memory aid

| Viewport width | Wrapper, unchanged | Table before → after | First column before → after | Split English words before → after |
|---:|---:|---:|---:|---:|''']
for w in [1920,1366,1024,768,390,375,320]:
 a=table(2,6,w,'before');b=table(2,6,w)
 lines.append(f"| {w} | {b['box']['width']:.1f} | {a['tableBox']['width']:.1f} → {b['tableBox']['width']:.1f} | {a['headers'][0]['box']['width']:.1f} → {b['headers'][0]['box']['width']:.1f} | {len(a['words']['splits'])} → {len(b['words']['splits'])} |")
lines.append(f'''
“Dashboard” and “Scorecard” now stay intact. At phone widths, the table scrolls rather than squeezing four columns into the article. The **01–06 diagram was not edited** or reinterpreted.

Desktop: {evidence('before','before-stable-d2-table6-1366-light-start.png')} / {evidence('after','after-stable-d2-table6-1366-light-start.png')}. Phone: {evidence('before','before-stable-d2-table6-390-dark-start.png')} / {evidence('after, start','after-stable-d2-table6-390-dark-start.png')} / {evidence('after, end','after-stable-d2-table6-390-dark-end.png')}.

| Case | Viewport | Table width before → after | Verified outcome |
|---|---:|---:|---|''')
for d,i,w,name in [(2,0,1024,'GRC frameworks'),(1,1,390,'D1 CIA scenario comparison'),(3,2,1366,'D3 access-control master matrix'),(3,2,390,'D3 access-control master matrix'),(4,1,390,'D4 TCP/UDP comparison')]:
 a=table(d,i,w,'before');b=table(d,i,w)
 lines.append(f"| {name} | {w} | {a['tableBox']['width']:.1f} → {b['tableBox']['width']:.1f} | Words intact; all cells fit padded bounds |")
for d,i,label in [(1,1,'C — security concepts'),(3,2,'D — access controls'),(4,1,'B — network protocols')]:
 lines.append(f"\n{label}: {evidence('before, phone',f'before-stable-d{d}-table{i}-390-dark-start.png')} / {evidence('after, phone',f'after-stable-d{d}-table{i}-390-dark-start.png')} / {evidence('after, last columns',f'after-stable-d{d}-table{i}-390-dark-end.png')}. Desktop pairs are available for every required width in the capture manifest.")
lines.append(f'''

D4 model mapping and service/port tables were also verified. Addressing prose, CIDR/NAT explanations and five native numeric superscripts passed the subsection/Math regression checks; no standalone addressing table was invented. All source values remain byte-identical.

## Chrome, typography and accessibility verification

Chrome executable: `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`; reported Chrome 156.0.0.0. Isolated temporary profiles and a task-local localhost server were used. These are real Chrome browser runs with mobile viewport emulation, not physical-device or cross-browser acceptance.

Viewports: **1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812, 320×568**, each in Light and Dark.

| Domain | Subsections × states | Tables × states | Table checks | Layout/prose checks |
|---|---:|---:|---:|---:|''')
for d in summary['domains']:lines.append(f"| {d['domain']} | {d['subsections']} × 14 | {d['tableCases']} | {d['tableChecks']} | {d['widthChecks']} |")
lines.append(f'''
**{checks:,} Chrome checks pass**, comprising table checks, full subsection layout/prose checks and **{len(nav['checks'])} actual navigation checks**. No final browser errors were recorded. Full subsection details: {evidence('coverage matrix (94 rows)','coverage-matrix.csv')} / {evidence('JSON','coverage-matrix.json')}.

- All 308 table/display combinations preserve native header scopes, row/column counts, visible cells and logical DOM order. No table-to-card conversion or missing data.
- {sum(d['tableEnglishWordsMeasured'] for d in summary['domains']):,} English table-word occurrences measured; zero fragmented words or glyphs beyond padded cell bounds. Thai/English text ranges also remain within cells, without cell-to-cell overlap. Formula rendering reports no errors.
- {sum(d['overflowCases'] for d in summary['domains'])} overflowing table states tested with real Tab/Shift+Tab entry/return, visible focus, native ArrowRight movement and reachable right endpoints. Overflow remains local; no page-level horizontal overflow.
- Computed table text contrast, including bilingual secondary text and GRC emphasis, is at least **{summary['minimumTextContrast']:.2f}:1** across both themes. This is targeted table verification, not a full WCAG or screen-reader certification.
- All 94 subsection heading/width states preserve the Phase 3B.3 shell, article alignment and prose measures. Non-diagram prose word geometry passes. Five D4 numeric superscripts retain native super alignment in all states.
- Real navigation journeys cover every domain, Light/Dark and desktop/mobile: reload location, Resume, explicit deep-link precedence, Back/Forward, v1 progress migration, closed-drawer inertness, Escape and focus return. See {evidence('journey results','navigation-journey-results.json')}; actual scroll positions are recorded, not only stored state.

Screenshot inspection uses complete passive table captures, both horizontal endpoints where needed, live focus images and fourteen contact sheets covering all 22 tables. Full-sized representative desktop/phone images were inspected in addition to the overview sheets. Human visual acceptance remains pending.

QA method corrections: programmatic focus alone does not establish keyboard modality, so genuine Tab/Shift+Tab input is used. Full-surface capture temporarily suppressed Chrome's desktop scrollbar and reflowed content by 15px, cropping some early export bounds. `capture-probe.json` records that change. The authoritative passive `*-stable-*` captures lock only the body width to its already-measured native width; each context asserts no live-layout change from the QA-only lock and each image verifies unchanged width/height and less than 1px vertical rounding before/after capture (a small border margin protects the complete image). `capture-pinned-probe.json` confirms the export fix. This does not modify production CSS. Earlier exploratory `initial-native-*`, smoke outputs and old focus/capture probes are intermediate evidence. A baseline D4 navigation hit transient `ERR_NETWORK_CHANGED`; only missing states were resumed. Final coverage is complete and the failed attempt remains recorded.

## Automated regressions

**20 suites pass ({passed} checks)**. The separate historical D1 presentation suite remains **366/370**, with precisely these four pre-existing assertions:

1. Defense in Depth SVG contains Layer 4: Identity & Access.
2. Defense in Depth SVG contains Layer 6: Application & Data.
3. Defense in Depth SVG contains Layer 7: Resilience & Response.
4. Defense in Depth highlights non-chronological complementary defense.

Those assertions were not edited. No newly introduced regression remains. One different Domain 1 parser assertion intentionally changed from an exact bare wrapper tag to requiring the **same wrapper plus named keyboard-region semantics**; native table and all other assertions remain. The new focused suite checks all 22 data structures, native counts/scopes, accessible names, attribute-injection safety and Reading-only CSS scope. Its initial run failed against the missing region attributes before implementation.

| Suite | Passed checks | Exit |
|---|---:|---:|''')
for s in regressions:lines.append(f"| {s['suite']} | {s['passedChecks']} | {s['exitCode']} |")
lines.append(f'''

Full logs: {evidence('regression-results.json','regression-results.json')}. This includes Phase 3B.2's 391 checks, Phase 3B.1 pilots, Phase 3B.3 widths, Phase 3A.2 readability, Markdown/Math/DOM, navigation/persistence and both academic batches (23 + 33 tests).

## Preservation and exact changed files

The starting tree was dirty. Preservation is measured against the **Phase 3C starting filesystem**, not attributed from the overall Git diff. Of {preservation['baselineFiles']:,} baseline files, {preservation['bytePreserved']:,} are byte-identical; the four deliberate existing-file changes are:

| File | Phase 3C delta |
|---|---|
| css/reading.css | One inserted Reading-only table/technical-typography block; existing bytes retained |
| js/core/markdown-parser.js | Scroll-wrapper region name/focus attributes; no cell data or other parse behavior changed |
| tools/verify-reading-notes-domain1.mjs | One strengthened wrapper assertion for the intended semantics |
| docs/plans/task.md | One appended Phase 3C row; earlier tracker bytes retained |

New deliverables: this report, `tools/verify-reading-tables-typography.mjs`, and the exact file inventory under `artifacts/qa/reading-notes-phase3c/`. {evidence('Changed-file manifest','changed-files.json')} lists every added QA file; {evidence('implementation delta','implementation-delta.patch')} isolates this phase from prior dirty-tree work. {evidence('Preservation results','preservation.json')} and {evidence('starting hashes','baseline-hashes.json')} provide the evidence.

All four current Reading Markdown files are **byte-identical** to phase start, preserving educational wording, table data, formulas, numbers, anchors, bilingual terminology and academic Batch A/B corrections. All eight original course-note files, diagram generator, Phase 3B.1/3B.2 source and CSS, Phase 3B.3 width/privacy grouping, Learning Slides (including the four concurrent GRC files), Quiz, Question Banks, Vocabulary, Domain 5 and unrelated UI/routing/test work are preserved. No baseline file was deleted. No stage, commit, push, reset, revert or clean was run.

## Remaining Phase 3D–3F work and limitations

- **3D:** diagram conceptual relationships, numbered measurement hierarchy, arrows and control/containment semantics remain separate work. No 01–06 reinterpretation was implemented.
- **3E:** the measurement diagram's mobile HTML fallback still fragments REPORT / METRIC and associated action words at 320px in both themes (12 recorded occurrences). These are inside the explicitly deferred diagram, not table or prose failures; see `derived-verification.json` / `initial-d2-prose-failures.json`. Diagram scale, internal label placement, contrast and whitespace remain future work.
- **3F:** human visual/academic acceptance, physical-device/cross-browser and assistive-technology acceptance remain pending. The pre-existing floating scroll control can occlude a lower-right viewport corner; this inherited UI concern remains separately tracked rather than changing unrelated navigation UI here.
- The four historical D1 diagram assertions remain open. This phase makes no claim that those diagram issues or overall course acceptance are complete.

No Phase 3D implementation was started. There are no unresolved newly introduced **in-scope** table/technical-typography defects from this phase.
''')
Path('docs/plans/isc2-cc-2026/reading-notes-phase3c-tables-typography-remediation.md').write_text('\n'.join(lines),encoding='utf8')
print('Report written; Chrome checks',checks,'coverage',len(coverage),'regression checks',passed)
