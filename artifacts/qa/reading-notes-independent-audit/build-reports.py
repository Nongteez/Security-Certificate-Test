from pathlib import Path
import json,re,collections,hashlib,subprocess,datetime
ROOT=Path.cwd(); A=ROOT/'artifacts/qa/reading-notes-independent-audit'; D=ROOT/'docs/plans/isc2-cc-2026'
inventory=json.loads((A/'inventory.json').read_text(encoding='utf8'))
browser=json.loads((A/'browser-results-attempt3.json').read_text(encoding='utf8'))
focused=json.loads((A/'focused-results.json').read_text(encoding='utf8'))
contrast=json.loads((A/'contrast-final.json').read_text(encoding='utf8'))
findings=[]
for name in ['domain-1-findings.json','domain-2-findings.json','domain-3-4-findings.json']:
 for f in json.loads((A/name).read_text(encoding='utf8')):
  # These Q rows are pointers to promoted numbered findings, not independent issues.
  if name.startswith('domain-3-4') and f['localId'] in ['Q4','Q5','Q6','Q7','Q8','Q11','Q13']:continue
  f['id']=('D34-'+f['localId']) if f['localId'].startswith('Q') else f['localId']
  f['references']=f.get('referenceUrls',f.get('references',[]));f['confidence']=f['confidence'].title()
  f['sourceReview']=name.replace('-findings.json','-source-review.md')
  findings.append(f)

def issue(id,severity,status,category,domain,subsections,file,line,title,actual,expected,root,evidence,recommendation,refs=None):
 findings.append(dict(id=id,localId=id,severity=severity,status=status,category=category,domain=domain,subsections=subsections,file=file,line=line,title=title,excerpt=actual,actual=actual,expected=expected,rootCause=root,evidence=evidence,recommendation=recommendation,references=refs or [],confidence='High',sourceReview=None))
wcag='https://www.w3.org/TR/WCAG22/'
issue('RN-I-001','P1','confirmed','Typography; Diagram; UI/UX',[1,2,3,4],['all diagram subsections'],'css/reading.css',1187,'Desktop SVG labels become too small, especially at 1024px',
 'At 1024px, visible SVG text falls to 6.72px (D1), 6.56px (D2/D3), and 5.63px (D4). All 24 diagram payloads contain labels below 11px across the four domains; 23 subsection ranges are affected because one D1 subsection contains two diagrams. Some D3/D4 labels remain only 8–10px at wide desktop.',
 'Instructional labels should remain comfortably legible at the available reading-pane width; use a readable responsive representation before severe SVG scaling occurs.',
 'The 290px sidebar plus 48px gap leaves a 575px prose pane at 1024px; full-width SVG viewBoxes scale their text. The alternative representations switch at viewport 768px rather than actual component width.',
 ['browser-results-attempt3.json: sections[].tinySvg for 1024x768 in both themes','detail-d3-topic-3-2-models-matrix-1024.png','All 24 mobile previews/source templates were reviewed; this is not a claim that phone labels still use the desktop SVG.'],
 'Choose a minimum useful component width for each diagram. Use readable HTML, a simplified vector, or a focused diagram at that width; preserve relationships rather than automatically stacking every item as cards.')
issue('RN-I-003','P1','confirmed','Navigation; UI/UX; Technical',[1,2,3,4],['all'],'js/ui/screen-reading.js',149,'Saved reading location is displaced on reload',
 'Isolated cold topic loads scroll to the intended subsection, but scrollspy changes the hash/active marker to the broad objective. After another 420px scroll and reload, D1 y8439→392, D2 y4166→421, D3 y4706→450, D4 y6317→479.',
 'Reload/resume should retain the intended subsection or documented reading offset, and the active marker should identify the actual subsection.',
 'restoreLocation returns immediately after restoring an anchor, ignoring scrollY. Scrollspy observes .reading-topic-anchor and entire .reading-objective-section blocks; D2–D4 h3 topics lack the observed class. Objective intersections can replace the explicit topic hash.',
 ['focused-results.json: isolated-cold-scroll-reload (four fresh full-document loads)','browser-results-attempt3.json reproduces the same symptom, but its accumulated-route journeys are secondary evidence only.','js/ui/screen-reading.js:149–191, 449–487; js/app.js:28–32'],
 'Repair scrollspy/restore precedence within the existing schema, using real heading targets and a stable location policy. Verify a mid-subsection position and actual heading after reload, not only nonzero scroll.')
issue('RN-I-004','P2','confirmed','Navigation; UI/UX',[1,2,3,4],['all'],'css/reading.css',111,'Desktop navigation disappears during long reading',
 'At desktop scrollY=5000, the sidebar top is -4843px and bottom -4155px despite position:sticky. The left rail becomes unused space and cannot navigate without returning to the top.',
 'Long-reading navigation should remain reachable as intended by the sticky layout.',
 'Verified geometry shows sticky behavior is ineffective. The likely cause is the html/body overflow-x:hidden creating a scrolling ancestor (computed overflow hidden auto); the causal CSS change was not applied because this is audit-only.',
 ['focused-results.json: sidebar-at-long-scroll','desktop-navigation-offscreen.png','css/base.css:75–85; css/reading.css:111–123'],
 'Investigate the scrolling ancestor and sticky boundary in a small layout task; retain the existing restrained reader design.')
issue('RN-I-005','P2','confirmed','Technical; Navigation',[1,2,3,4],['all'],'js/ui/screen-reading.js',838,'Reader remounts retain old window handlers',
 'Hash routing remounts Reading Notes without a reader disposal hook. Earlier domain handlers continue saving new scroll offsets into previous domain entries. Focused route tests show simultaneous stale-domain writes; final-browser-checks.json records listener counts.',
 'Exactly one active reader should own its observers, scroll/resize handlers and pending timers.',
 'Cleanup is closure-local and is called by the in-app Back handler, but renderApp remounts only dispose Learning Slides. Reading render returns no disposal handle.',
 ['focused-results.json: inactive-domain-topic, domain-button-switch, sidebar-at-long-scroll show old-domain lastScrollY updates','js/app.js:69–72; js/ui/renderer.js:27–30; screen-reading.js:642–652, 838–879'],
 'Give the reader a route-disposal lifecycle, clear timers, and verify repeated cross-domain browser Back/Forward does not add listeners or alter inactive-domain progress.')
issue('RN-I-006','P1','confirmed','Accessibility; Navigation; UI/UX',[1,2,3,4],['all'],'css/reading.css',3052,'Hidden mobile drawer remains in the keyboard path',
 'With the drawer closed, Tab reaches its close button at x=-55 and domain/topic controls at x=-290 to -240. Opening the modal-looking drawer leaves focus outside it; Escape does not close it and the toggle exposes no expanded state.',
 'Closed navigation must be removed from keyboard/assistive traversal. An open overlay should expose its state, provide sensible focus entry/return and prevent obscured background interaction.',
 'The drawer is only translated off-screen. There is no inert/hidden state for the closed panel and no focus/keyboard handling in bindEvents.',
 ['browser-results-attempt3.json: mobile-closed-Tab-sequence, mobile-open, mobile-Escape','final-browser-checks.json: closed-drawer-focus','mobile-sidebar-open.png','js/ui/screen-reading.js:335–365, 670–695'],
 'Apply an explicit closed state and a coherent drawer focus model; support Escape and focus return. Validate WCAG 2.4.3/2.4.7 and modal-overlay interaction. The APG modal pattern is guidance, not itself a WCAG conformance rule.',
 [wcag,'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/'])
issue('RN-I-007','P2','confirmed','Accessibility; Bilingual',[1,2,3,4],['all'],'js/ui/screen-reading.js',289,'Thai passages inherit the English page language',
 'The document is lang=en and each rendered domain article contains zero lang attributes despite extensive Thai explanatory paragraphs.',
 'The Thai prose language and meaningful English passages should be programmatically determinable, preserving English exam keywords appropriately.',
 'The article renderer/parser preserve no language metadata for the bilingual passages; index.html declares only English.',
 ['browser-results-attempt3.json: language=en, languageTags=0 in all 56 configurations','domain-1-rendered.html through domain-4-rendered.html','index.html:2'],
 'Add appropriately scoped Thai/English language information in a later accessibility task. Do not add a language tag to every borrowed acronym or proper name. Native screen-reader pronunciation was not tested.',
 ['https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html'])
issue('RN-I-008','P2','confirmed','Accessibility; Typography',[1,2,3,4],['review','1.1.4','1.5.3'],'css/reading.css',2762,'Scenario/supporting text misses minimum contrast',
 'Settled light-theme scenario answer labels use #10b981 on white: 2.54:1 at 11.5px. Dark-theme scenario topic text and D1 MFA subtitles use #717182 on #131318: 3.87:1; D1 priority badges are 3.58:1.',
 'Normal-sized instructional and navigational text should achieve at least 4.5:1 contrast.',
 'Scenario answer color is hardcoded; other secondary text uses --text-muted at small sizes.',
 ['contrast-final.json (8 settled-theme probes)','scenario-settled-light.png, scenario-settled-dark.png, mfa-settled-dark.png','The initial focused-results contrast data captured transition colors and is explicitly excluded. Counts include repeated elements and are not unique-defect counts.'],
 'Adjust only the affected foreground tokens and labels, then verify both themes and text roles against WCAG 1.4.3.',[wcag])
issue('RN-I-009','P2','confirmed','Table; Typography; Semantic Presentation',2,['2.1.4'],'css/reading.css',2957,'Task 145 keyword protection exceeds the last cell',
 'At table width 780px, final column width is 187.22px with 32px horizontal padding; Enterprise IT Governance is 182.30px wide, exceeding the 155.22px content box. Wrapper scrollWidth is 791px. At 1024px the wrapper is 573px, so scrolling is required contrary to the earlier report.',
 'The keyword and padding should fit the assigned cell and the report should describe actual scrolling. Wide desktop column balance should be preserved.',
 'Fixed 20/24/32/24 percent widths and 780px minimum plus nowrap exceed the actual padded content width. The td min-width:200px does not establish the claimed final column width under fixed layout.',
 ['browser-results-attempt3.json: GRC-details for 14 states','full-component-d2-topic-2-1-frameworks-standards-320-light.png','d2-1920x1080-light.png, grc-right-320-light.png','All three English keywords remain unfragmented. Keyboard ArrowRight moves the wrapper 40px in this Chrome; missing tabindex alone is not logged as a keyboard failure.'],
 'Account for padding and measured keyword width, or permit natural word-boundary wrapping. Keep contextual comparison relationships and test first/last columns. Consider a readable narrow-screen comparison format through a human-reviewed example.')
issue('RN-I-010','P3','confirmed','Typography; Technical',1,['1.2.2'],'content/isc2-cc-2026/reading/domain-1.md',422,'Escaped currency leaks through raw HTML',
 'Raw HTML lines display literal backslashes in currency values, including \\$10,000 and \\$5,000; ordinary Markdown currency processing does remove escapes.',
 'Currency examples should display clean dollar amounts with no parser escape artifacts.',
 'The raw structural HTML branch bypasses parseInline and does not unescape literal dollar sequences.',
 ['browser-results-attempt3.json: D1 rawLeaks in all states','domain-1-rendered.html; markdown-parser.js:365–377','full-component-d1-topic-1-2-quantitative-risk-320-light.png'],
 'Unify safe inline processing for supported HTML content or remove the unnecessary source escapes in a narrowly scoped later fix.')
issue('RN-I-011','P3','qualified concern','Accessibility; Technical',1,['1.2.1','1.2.2','1.2.5'],'js/core/math-renderer.js',73,'Offline math alternatives retain raw LaTeX labels',
 'The semantic fallback uses original LaTeX as aria-label, including commands such as \\times. The normal network-loaded Chrome run uses KaTeX/MathML and exposes no role=math labels in these subsection records.',
 'Fallback accessible math should expose a useful expression or spoken alternative, with no assumption about how a particular screen reader pronounces LaTeX commands.',
 'formatSemanticMath transforms the visible math but escapes the original input directly into aria-label.',
 ['js/core/math-renderer.js:73–77; main browser mathLabels arrays are empty with katex=true','Historical RN-D1-004 is therefore conditional in current implementation, not a verified normal-mode speech defect.'],
 'Test offline fallback and one screen-reader/MathML combination before choosing a spoken-label strategy. Keep native MathML when available.',[wcag])
issue('RN-I-012','P2','recommendation','Technical',[1,2,3,4],['all'],'js/core/markdown-parser.js',58,'HTML trust boundary needs explicit handling',
 'Allowed tags preserve arbitrary attributes and raw structural lines pass through. A string-only probe preserves onclick on span/div. No untrusted content ingestion or current exploitable route was established.',
 'If content ever becomes untrusted, use an actual attribute/protocol sanitizer; otherwise document and enforce the trusted repository-content boundary.',
 'The parser allowlist validates tag names, not attributes; rejecting script/iframe lines is not a complete sanitizer.',
 ['final-browser-checks.json: parser-attribute-preservation-string-only; no payload executed or inserted','markdown-parser.js:58–70, 274–280, 365–377'],
 'Document the current trust assumption and introduce a safe sanitizer only if an untrusted path is supported. Do not report an exploitable XSS vulnerability without an input path.')
issue('RN-I-013','P3','recommendation','Accessibility; Semantic Presentation',[1,2,3,4],['all'],'js/core/markdown-parser.js',395,'Heading and component semantics need a consistency pass',
 'All domains have an h1/objective h2/topic h3 structure and table column headers. Some card headings use h5 independent of the surrounding level, diagram titles use h4, and section navigation is often separate from the heading element.',
 'Learners should encounter predictable heading levels and meaningful list/table relationships; visual card labels need not all be document headings.',
 'Raw authored HTML and parser-generated components use different heading conventions.',
 ['domain-1-rendered.html through domain-4-rendered.html','browser-results-attempt3.json: headings and table scope results','No blanket claim that skipped heading levels alone establish a WCAG failure.'],
 'Choose a small heading convention and link real headings to anchors. Preserve the already-correct table scope attributes and scenario grouping.',[wcag])
issue('RN-I-014','P2','recommendation','Table; Semantic Presentation; UI/UX',[1,2,3,4],['table subsections'],'css/reading.css',2823,'Wide comparisons need selective mobile presentation work',
 'At 320px the article is 260px wide and table wrappers 258px. D3 master model matrix is about 1005px wide; D1 document hierarchy about 705px; D4 TCP/IP comparison about 637px. Tables remain scrollable, but sustained row-to-column comparison requires repeated horizontal movement.',
 'Use a comparison format learners can follow comfortably on narrow screens while retaining meaningful relationships.',
 'The same overflow wrapper is the default presentation for tables with substantially different educational structures.',
 ['browser-results-attempt3.json: per-subsection table dimensions','full-component screenshots; existing table headers/scopes verified','Scrollable data tables have a WCAG reflow exception; horizontal scroll itself is not logged as a conformance failure.'],
 'Prototype one long comparison with a persistent row label or a carefully structured mobile alternative. Keep compact tables as tables; do not convert the whole textbook into cards.',[wcag])
issue('RN-I-015','P3','confirmed','Accessibility; UI/UX',[1,2,3,4],['all'],'js/ui/screen-reading.js',622,'Reduced motion is supported only by the floating scroll control',
 'With prefers-reduced-motion:reduce, sidebar transition remains 0.25s/0.25s/0.2s and topic navigation still requests smooth scrolling. The floating scroll button correctly uses auto scrolling and disables its transition.',
 'Apply the preference consistently to the drawer and reading navigation transitions.',
 'The media query targets only .reading-scroll-nav and topic/hash routing hardcode smooth behavior.',
 ['focused-results.json: reduced-motion-sidebar','css/reading.css:3636–3641; js/app.js:77; screen-reading.js:622, 797'],
 'Use the existing motion preference in the two remaining paths. This is a comfort/preference issue; no automatic WCAG AA failure is inferred.')
issue('RN-I-016','P3','recommendation','Technical',[1,2,3,4],['all'],'css/reading.css',639,'Shared CSS and content sniffing make patterns brittle',
 'The h4 + table/list/callout sibling rules are unscoped; generic --space-* tokens are declared at :root. GRC table behavior depends on exact Thai/English header text. Structured directives discard their bodies and render hardcoded payloads.',
 'Reading-only patterns should have explicit semantic hooks and predictable scope, without a redesign or one-off parser branch for every domain.',
 'Incremental global selectors and presentation matching are mixed with authored HTML and component registries.',
 ['css/reading.css:11–19, 639–655; markdown-parser.js:299–341, 459–471','No specific regression in unrelated Learning Slides is asserted.'],
 'Scope shared selectors/tokens to Reading Notes and use explicit semantic table/directive metadata when touching the relevant pattern. Keep the lightweight renderer; a rewrite is not justified.')
issue('RN-I-017','P3','recommendation','Navigation; Content',[1,2,3,4],['all'],'js/core/reading-progress.js',115,'Location memory does not distinguish completed reading',
 'The progress schema records last location per domain, not completed subsections. The UI exposes no completed-reading history or explicit next-reading action. Reading Notes offers Thai prose with English terms, with no English-only text mode.',
 'Product decisions should clarify what Continue and completed reading mean and whether the bilingual reader is intentionally a single mixed-language edition.',
 'Current progress is a location bookmark and the content is one mixed-language corpus.',
 ['reading-progress.js:115–125, 265–307; screen-reading.js:105–137, 330–390','No completion percentage or full English edition was inferred from the bilingual label.'],
 'Treat completion indicators, next-subsection control and independent language editions as separate human preference decisions; do not alter the progress schema in audit remediation without approval.')

issue('RN-I-018','P2','confirmed','Diagram; Semantic Presentation',4,['4.3.3'],'js/core/diagram-generator.js',2637,'Cloud responsibility legend is clipped inside its SVG',
 'The CSP legend extends 34.07px beyond the SVG right edge at 1920px and 23.96px at 1024px. The SVG overflow is hidden, visibly truncating the Thai label even though there is no page overflow.',
 'The complete provider/customer legend should fit inside the SVG viewport at every desktop size.',
 'The long provider legend begins at SVG x=498 inside an 840-unit viewBox, leaving insufficient horizontal space for its bilingual text.',
 ['svg-geometry.json: cloudSharedResponsibility in both measured widths','diagram-d4-3-1920-light.png'],
 'Wrap or reposition the legend in the existing vector, or move the legend to semantic HTML. Keep the comparison itself after correcting its responsibility labels (D34-05).')

# Add measured SVG paint contrast to the cross-domain contrast issue.
for f in findings:
 if f['id']=='RN-I-008':
  f['actual']+=' D4 desktop diagram text painted white on #10b981 has 2.54:1 contrast, and white on #3b82f6 has about 3.68:1; small responsibility and network-layer labels are affected in both themes.'
  f['subsections']+=['4.1.3','4.2.3','4.2.6','4.3.3']
  f['evidence'].append('svg-geometry.json records actual SVG fill and preceding colored rectangles; diagram-d4-3-1920-light.png confirms the small white-on-color labels. HTML-only contrast counts do not include these SVG paint checks.')

def esc(s):return str(s).replace('|','\\|').replace('\n',' ')
def arr(v):return v if isinstance(v,list) else [v]
def title(f):return f.get('title') or f.get('actual','').split('.')[0]
def line_link(f):
 path=f['file'].replace('\\','/');return f"[{path}:{f['line']}](../../../{path}#L{f['line']})"
def ref_links(f):return ', '.join(f'[{re.sub(r"^https?://", "", u).split("/")[0]}]({u})' for u in f['references']) or 'Repository/runtime evidence; no external factual claim required.'

confirmed=[f for f in findings if f['status']=='confirmed'];counts=collections.Counter(f['severity'] for f in confirmed)
allcounts=collections.Counter(f['severity'] for f in findings);statuses=collections.Counter(f['status'] for f in findings)
(A/'consolidated-findings.json').write_text(json.dumps(findings,ensure_ascii=False,indent=2),encoding='utf8')

register=['# Independent Reading Notes findings register','',
 'Date: 2026-10-31. Scope: Reading Notes Domains 1–4. Audit only; no remediation or human acceptance.',
 '',f"**{len(confirmed)} confirmed defects:** "+', '.join(f'{p} {counts[p]}' for p in ['P0','P1','P2','P3'])+'.',
 f"**{len(findings)-len(confirmed)} separate qualifications/recommendations.** Status totals: "+', '.join(f'{k}: {v}' for k,v in statuses.items())+'.',
 '', 'Severity is learner impact, not a count of incorrect words. P0 is reserved for broadly unusable core content or critical material harm; localized academic errors are P1/P2 according to consequence. Qualified items are not included in the confirmed-defect severity totals.',
 '', 'Source subreview IDs are retained for traceability. D34 Q rows promoted to numbered findings are excluded to avoid duplication. Root causes are only asserted where source/runtime evidence supports them. “Confirmed” does not mean human-approved. Line references refer to the audited working-tree snapshot and can move with later edits.',
 '', '## Confirmed defects', '', '| ID | Severity | Domain / subsection | Category | Finding |','|---|---|---|---|---|']
for f in confirmed:register.append(f"| {f['id']} | {f['severity']} | {esc(f['domain'])} / {esc(', '.join(f['subsections']))} | {esc(f['category'])} | {esc(title(f))} |")
register+=['','## Qualifications and recommendations','','| ID | Priority | Status | Domain / subsection | Observation |','|---|---|---|---|---|']
for f in findings:
 if f['status']!='confirmed':register.append(f"| {f['id']} | {f['severity']} | {f['status']} | {esc(f['domain'])} / {esc(', '.join(f['subsections']))} | {esc(title(f))} |")
register+=['','## Detailed evidence and corrections','']
for f in findings:
 register += [f"### {f['id']} — {f['severity']} — {title(f)}",'',
 f"- **Category:** {f['category']}. **Domain/subsection:** {f['domain']} / {', '.join(f['subsections'])}.",
 f"- **Location:** {line_link(f)}.",f"- **Current excerpt/behavior:** {f.get('excerpt',f['actual'])}",
 f"- **Actual / impact:** {f['actual']}",f"- **Expected conceptual behavior:** {f['expected']}",
 f"- **Root cause:** {f.get('rootCause') or 'Not independently established; the observation is bounded to the evidence below.'}",
 f"- **Evidence:** {'; '.join(str(x) for x in arr(f['evidence']))}",
 f"- **References:** {ref_links(f)}",f"- **Recommendation:** {f['recommendation']}",
 f"- **Confidence:** {f['confidence']}. **Verification status:** {f['status']}; no implementation or human acceptance."]
 if f['sourceReview']:register.append(f"- **Full source-review context:** [{f['sourceReview']}](../../../artifacts/qa/reading-notes-independent-audit/{f['sourceReview']}).")
 register.append('')
(D/'reading-notes-independent-findings-register.md').write_text('\n'.join(register),encoding='utf8')

matrix=['# Independent Reading Notes coverage matrix','',
 'Date: 2026-10-31. Actual source inventory: **94/94 inspected**; D1 24/24, D2 29/29, D3 17/17, D4 24/24. Each domain is 100% for source academic/bilingual/semantic review and automated browser/DOM checks. This is review coverage, not a claim that every statement passed or that every screen was manually viewed.',
 '', 'Fourteen official objective sections are present. The 94 local subsections include three separate domain-review headings (D2–D4); these are not official extra objectives. The expected subsection baseline matches exactly.',
 '', 'Academic status A = complete bounded source review against the official high-level scope and appropriate primary technical sources; not ISC2 endorsement. B = Thai/English meanings read together. S = source format, generated component payload and relationships inspected. DOM14 = real Chrome DOM/layout checks at all seven required viewports in both themes. Manual images are representative, not exhaustive screenshot-by-screenshot acceptance.',
 '', 'All rows share RN-I-003/004/005/006/007 lifecycle/navigation/language applicability and RN-I-012/013/015/016/017 technical/recommendation applicability where relevant. RN-I-001 applies only to invoked SVG diagrams; RN-I-014 to tables. Common IDs are not repeated in every row. Individual source-review observations, examples and scenario verdicts are in the linked source-review ledgers.',
 '', '## Remaining limits applying to every row','',
 'No native screen-reader speech/Braille test, physical device/touch or cross-browser test; 200% page/pinch zoom and 320px reflow are checked, but desktop toolbar/Ctrl+ zoom and OS font scaling are not. No claim of certification-level WCAG conformance. No equal full English translation was assumed. Unverified course provenance, jurisdiction-specific legal/tax examples, or minor optional extensions remain labeled in the finding register. No subsection remains unread.',
 '', '| Domain | Local subsection / exact source line | Academic | Bilingual | Semantic presentation | Browser/DOM | Associated specific findings | Remaining row-specific limitation |','|---|---|---|---|---|---|---|---|']
coverage=[]
for rec in inventory:
 d=rec['domain'];m=re.match(r'(\d+\.\d+\.\d+)',rec['title']);code=m.group(1) if m else 'review';ids=[]
 for f in findings:
  if d in arr(f['domain']) and (code in f['subsections'] or ('review' in f['subsections'] and (code=='review' or (d==1 and code=='1.5.4')))):ids.append(f['id'])
 configs=[c for c in browser['configurations'] if c['domain']==d]
 states=[next((s for s in c['sections'] if s['anchor']==rec['anchor']),None) for c in configs]
 assert len(states)==14 and all(s and s['headingMatched'] and s['anchorExists'] for s in states),rec
 if any(s['tinySvg'] for s in states):ids.append('RN-I-001')
 if any(s['tables'] for s in states):ids.append('RN-I-014')
 if d==2 and code=='2.1.4':ids.append('RN-I-009')
 if d==1 and code=='1.2.2':ids+=['RN-I-010','RN-I-011']
 if code=='review' or (d==1 and code=='1.5.4'):ids.append('RN-I-008')
 ids=list(dict.fromkeys(ids));rev='domain-1-source-review.md' if d==1 else 'domain-2-source-review.md' if d==2 else 'domain-3-4-source-review.md'
 note='See qualifications/recommendations for listed IDs; manual image sampling only.' if ids else 'No additional substantive source defect identified; common limitations apply.'
 matrix.append(f"| {d} | [{esc(rec['title'])}](../../../{rec['file']}#L{rec['line']}) | A; [{rev}](../../../artifacts/qa/reading-notes-independent-audit/{rev}) | B | S | DOM14; heading+anchor matched | {', '.join(ids) or 'Common findings only'} | {note} |")
 coverage.append({**rec,'academic':'reviewed','bilingual':'reviewed','semantic':'reviewed','browserStates':14,'findingIds':ids,'limits':note})
(D/'reading-notes-independent-coverage-matrix.md').write_text('\n'.join(matrix)+'\n',encoding='utf8')
(A/'coverage.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2),encoding='utf8')
print('Built register and matrix:',len(findings),'entries;',len(confirmed),'confirmed;',dict(counts),'coverage',len(coverage))
