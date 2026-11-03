from pathlib import Path
import json,hashlib,re,difflib,subprocess
root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3e'
def read(n):return json.loads((q/n).read_text(encoding='utf-8-sig'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
baseline=read('baseline-hashes.json');changed=[n for n,h in baseline.items() if not (root/n).is_file() or sha(root/n)!=h]
allowed={'css/reading.css','js/core/diagram-generator.js','docs/plans/task.md','tools/verify-reading-diagram-semantics.mjs'}
assert set(changed)<=allowed,changed
css=(root/'css/reading.css').read_bytes();clean=re.sub(rb'/\* Phase 3E:.*?/\* End Phase 3E diagram legibility\. \*/\n\n',b'',css,flags=re.S)
assert hashlib.sha256(clean).hexdigest()==baseline['css/reading.css']
pres=dict(baselineFiles=len(baseline),bytePreserved=len(baseline)-len(changed),existingFilesChanged=changed,deleted=[],unexpectedChanges=[],priorCssBytesPreserved=True,originalNotesAndConcurrentWorkPreserved=True,readingMarkdownUnchanged=True)
(q/'preservation.json').write_text(json.dumps(pres,indent=2),encoding='utf8')
reg=read('regression-results.json');assert len(reg)==23 and all(x['exitCode']==0 for x in reg)
contexts=[];checks=[];screens=[]
for d in range(1,5):
 r=read(f'after-d{d}.json');assert len(r['contexts'])==14 and not r['errors'] and all(x['pass'] for x in r['checks']);contexts+=r['contexts'];checks+=r['checks'];screens+=r['screenshots']
labels=[x for c in contexts for x in c['legibility']];assert len(labels)==336
assert all(x['minContrast']>=4.5 and x['minPx']>=14 and not x['overlaps'] and not x['clipping'] for x in labels)
assert sum(len(c['tables']) for c in contexts)==308 and sum(len(c['anchors']) for c in contexts)==1316
summary=dict(status='Phase 3E Complete — Phase 3F may begin',browserChecks=len(checks),failed=0,diagramStates=336,subsectionAnchorStates=1316,tableStates=308,automatedSuites=len(reg),automatedChecks=sum(x['passedChecks'] for x in reg),minInstructionalFontPx=min(x['minPx'] for x in labels),minTextContrast=min(x['minContrast'] for x in labels),screenshots=len(screens),humanAcceptance=False)
coverage=[]
matrix=read('diagram-matrix.json')
for m in matrix:
 entries=[x for x in labels if x['id']==m['id']];m.update(phase3E=dict(contexts=len(entries),minFontPx=min(x['minPx'] for x in entries),minContrast=min(x['minContrast'] for x in entries),svgStates=sum(x['representation']=='svg' for x in entries),htmlStates=sum(x['representation']=='html' for x in entries),result='Pass'));coverage.append(m)
(q/'coverage-matrix.json').write_text(json.dumps(coverage,indent=2,ensure_ascii=False),encoding='utf8')
(q/'summary.json').write_text(json.dumps(summary,indent=2),encoding='utf8')
oldmanifest=json.loads((root/'artifacts/qa/reading-notes-phase3d/changed-files.json').read_text())
for f in oldmanifest['files']:
 if f['path'] in ['css/reading.css','js/core/diagram-generator.js']:assert baseline[f['path']]==f['sha256']
runtime=read('baseline-runtime.json');delta=[]
for n in changed:
 old=runtime.get('/'+n)
 if old is None:old=subprocess.check_output(['git','show','HEAD:'+n]).decode('utf8') if n!='tools/verify-reading-diagram-semantics.mjs' else (root/n).read_text(encoding='utf8').replace('["nistSp80063Framework","cloudSharedResponsibility"].includes(id)?diagrams[id].replace(/<p class="reading-diagram-source-labels">[\\s\\S]*?<\\/p>/g,\'\'):diagrams[id]','diagrams[id]')
 delta.extend(difflib.unified_diff(old.splitlines(True),(root/n).read_text(encoding='utf8').splitlines(True),fromfile='phase3e-start/'+n,tofile='current/'+n))
(q/'implementation-delta.patch').write_text(''.join(delta),encoding='utf8')
def link(label,name):return f'[{label}](<{(root/name).as_posix()}>)'
text=f'''# Phase 3E — Diagram Legibility & Space Utilization

**Phase 3E Complete — Phase 3F may begin.** Human visual/academic acceptance remains pending. Verified 2 November 2026, Asia/Bangkok.

## Root causes and implementation

Current Chrome probing reproduced 760–860px SVG caps and viewport-only switching. At 1920px, the old visible labels were roughly 8.14–12.85px; constrained desktop layouts were smaller. The article had available width that the SVG cap did not use. The inherited mobile alternatives already preserve richer explanations but previously appeared only below 768px.

Production CSS now names each diagram an inline-size container, removes the artificial SVG cap, and uses nineteen per-diagram container thresholds computed from actual minimum font size/viewBox width. SVGs retain aspect ratio and appear only when their label budget is met; otherwise the existing semantic HTML alternative reflows. The 14px instructional-label budget is a project readability target, **not an invented WCAG minimum font size**. Native diagram labels are 15–16px. No page-level horizontal scrolling or stretched aspect ratios were introduced.

Cloud legend clipping is fixed by restoring a suitably bounded 10.5-unit legend font; at the wide rendered scale it exceeds 14px. Both legend labels fit their SVG and remain paired with their colors. Blue/green/purple/red white-on-color badges use darker paints; normal SVG support labels use readable theme text. CSS var-blue badges had 3.48:1 contrast in Dark; they now use a stable darker blue. Labels still identify responsibility, so color is supplementary.

Measured spacing defects also corrected: SLE description/formula and AV/EF/ARO lines, five-part risk-cycle captions, RTO/RPO lower captions, and NIST facet footnotes. These are geometry changes only; formulas, numeric examples, genuine cycles and timelines are unchanged. Native recovery labels were enlarged and their columns can wrap safely.

The reflowed OSI view now explicitly contains all seven original layer labels and their original details. NIST reference identifiers, DMZ service/port labels and four cloud model examples/labels were carried from the unmodified SVG into their corresponding native cards. This avoids losing information when the responsive representation changes. `representation-parity.json` records their original source labels. No existing diagram definition was removed.

## Mandatory cases

- A Cloud: legend bounds and white-on-responsibility contrast pass in both themes; native counterparts preserve labels and examples.
- B Measurement at 320px: REPORT/METRIC and all other six categories remain whole and readable. Phase 3D had already removed the old fragmented tier layout; this phase verifies that fix rather than recreating it. The local-study-aid and no-official-procedure qualifications remain.
- C Defense in Depth: wide SVG uses the article width; constrained views use the complete readable seven-group alternative. Five/seven group variants remain examples, never chronological workflows or guarantees.
- D Control functions: five distinct semantic cards, no sequence arrows; original overlap explanation and examples remain.
- E JML: optional/repeatable Mover and continuous governance remain visible on desktop and phone.
- F OSI: all seven original layers are explicit in native reflow, with the four-layer correspondence below; no packet-flow interpretation is introduced.

## Full diagram matrix

Each row has fourteen current Chrome observations: seven required viewports in both themes. The machine-readable matrix retains exact source anchors and semantic classification from Phase 3D.

| D | Diagram | Min label px | Min contrast | SVG / HTML states | Result |
|---|---|---:|---:|---:|---|
'''
for m in coverage:
 a=m['phase3E'];text+=f"| {m['domain']} | `{m['id']}` | {a['minFontPx']:.2f} | {a['minContrast']:.2f}:1 | {a['svgStates']} / {a['htmlStates']} | Pass |\n"
text+=f'''
## Browser, screenshots and accessibility

Installed real Chrome 156.0.8078.74/CDP: **{len(checks):,} checks, zero failures/errors**, all **336 diagram states**, **1,316 subsection anchors**, **308 table states**. Viewports: 1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812, 320×568; Light and Dark. Minimum instructional font: **{summary['minInstructionalFontPx']:.2f}px**; minimum measured label contrast: **{summary['minTextContrast']:.2f}:1**. Current bounds, native word integrity, model relationships, table headers/words and Reading width pass. Visible SVG text intersection checks use transformed screen coordinates, not untransformed `getBBox` when CSS translations apply.

**96 final component PNGs** cover all 24 diagrams at representative wide, desktop and narrow configurations. Four full-inventory contact sheets were actually inspected, supplemented by native-resolution Cloud, measurement 320, DMZ, OSI, JML and defense images. Before images reuse Phase 3D final PNGs only after baseline SHA equality was verified; fresh current baseline size/clipping observations are in `before-probe.json`. `before-evidence.json` links the original captures without overwriting them. Contact thumbnails support structure, not reading tiny glyphs; native samples and font/word measurements supply that check. Screenshot export preserves measured native width and checks stable capture geometry.

Native sections/headings/lists and selectable text remain. SVGs keep image names; reflow alternatives keep meaningful content order and descriptions. Mover is indicated in words as well as border style. No new interaction or tab stops. This is scoped browser accessibility verification, not a screen-reader application certification. [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) supports the 4.5:1 normal-text threshold; [W3C reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) supports preserving information and functionality in narrow layouts. No full WCAG conformance claim is made.

## Regressions and preservation

**23 suites / {summary['automatedChecks']:,} checks pass.** Six focused legibility checks include a witnessed failing initial run and a separate failing representation-parity check before its fix. No old regression was suppressed. Three regressions exposed production issues: an unnecessary HTML comment and appending new CSS after marker-bounded prior-phase blocks. The comment was removed and Phase 3E CSS inserted before the prior Phase 3B.2 block; existing tests were unchanged and passed.

One existing Phase 3D byte-preservation assertion was deliberately refined only for NIST/cloud: remove the explicit additive source-label paragraphs before comparing all original markup bytes. The new focused suite similarly proves all 24 old payloads equal their old strings after removing only documented additions. This is an additive accessibility representation change, not permission to alter old definitions, arrows or qualifiers. The four historical Domain 1 assertion resolutions remain unchanged and pass.

Baseline: **{pres['baselineFiles']:,} files**, **{pres['bytePreserved']:,} byte-preserved**, four authorized existing-file changes, no deletion/unexpected edit. All Reading Markdown, eight original notes, parser/navigation code, Learning Slides, Quiz, Vocabulary, question banks and earlier evidence remain unchanged. Removing only the marked Phase 3E CSS block reproduces the exact starting CSS bytes. No Git mutations.

Existing files changed: `css/reading.css`, `js/core/diagram-generator.js`, `tools/verify-reading-diagram-semantics.mjs`, own appended `docs/plans/task.md` row. New test: `tools/verify-reading-diagram-legibility.mjs`; this report and task QA files are new. See `changed-files.json` for exact paths/hashes and `implementation-delta.patch` for the phase delta.

## Phase 3E exit gate

All 24 reviewed; known clipping resolved; 320px labels verified; no semantic regression; current browser matrix passes; automated suites pass; preservation and evidence/report saved. Phase 3F is authorized to begin.

Remaining Phase 3F work: full current 94-subsection QA; inherited floating-control occlusion; language metadata/keyboard/accessibility integration; ethics-precedence provenance and neutral exception wording if unresolved; current navigation/progress journeys; final regression/preservation and human acceptance package. These are not Phase 3E success claims.

## Evidence

'''
for name in ['coverage-matrix.json','summary.json','before-probe.json','before-evidence.json','label-budgets.json','representation-parity.json','regression-results.json','preservation.json','changed-files.json','implementation-delta.patch']:
 text+='- '+link(name,'artifacts/qa/reading-notes-phase3e/'+name)+'\n'
for d in range(1,5):text+='- '+link('Chrome Domain '+str(d),'artifacts/qa/reading-notes-phase3e/'+f'after-d{d}.json')+'\n'
(root/'docs/plans/isc2-cc-2026/reading-notes-phase3e-diagram-legibility-remediation.md').write_text(text,encoding='utf8')
names=changed+['tools/verify-reading-diagram-legibility.mjs','docs/plans/isc2-cc-2026/reading-notes-phase3e-diagram-legibility-remediation.md']+[p.relative_to(root).as_posix() for p in q.rglob('*') if p.is_file() and p.name!='changed-files.json']
(q/'changed-files.json').write_text(json.dumps({'scope':'Phase 3E only; manifest excludes its recursive self hash','existingFileChanges':changed,'files':[{'path':n,'bytes':(root/n).stat().st_size,'sha256':sha(root/n)} for n in sorted(set(names))]},indent=2),encoding='utf8')
print(summary)
