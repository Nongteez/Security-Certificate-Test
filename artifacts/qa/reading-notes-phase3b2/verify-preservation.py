from pathlib import Path
import json,hashlib,re,os,subprocess
root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3b2'
load=lambda n:json.loads((q/n).read_text(encoding='utf-8-sig'))
save=lambda n,v:(q/n).write_text(json.dumps(v,indent=2,ensure_ascii=False),encoding='utf-8')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
b=load('baseline.json');frozen=load('baseline-runtime.json');modified=[];missing=[]
for name,old in b['hashes'].items():
 p=root/name
 if not p.exists():missing.append(name)
 elif sha(p)!=old:modified.append(name)
expected={*[f'content/isc2-cc-2026/reading/domain-{d}.md'for d in range(1,5)],'css/reading.css','docs/plans/task.md','js/core/markdown-parser.js','tools/verify-reading-notes-domain4.mjs'}
assert set(modified)==expected and not missing,(modified,missing)
css=(root/'css/reading.css').read_bytes().decode();a=css.index('/* Phase 3B.2:');marker='/* End Phase 3B.2 scoped typography. */';z=css.index(marker,a)+len(marker)+2
checks={'originalCssRestoredExactlyByRemovingB2Block':css[:a]+css[z:]==frozen['/css/reading.css'],'trackerOriginalBytePrefix':(root/'docs/plans/task.md').read_bytes().startswith(frozen['/docs/plans/task.md'].encode())}
for d in range(1,5):
 s=(root/f'content/isc2-cc-2026/reading/domain-{d}.md').read_bytes().decode();old=frozen[f'/content/isc2-cc-2026/reading/domain-{d}.md'];checks[f'd{d}OriginalIds']=re.findall(r'id="([^"]+)"',s)==re.findall(r'id="([^"]+)"',old);checks[f'd{d}MarkdownTableCells']=re.findall(r'^\|.*$',s,re.M)==re.findall(r'^\|.*$',old,re.M);checks[f'd{d}HtmlTables']=re.findall(r'<table\b[\s\S]*?</table>',s)==re.findall(r'<table\b[\s\S]*?</table>',old);checks[f'd{d}ScenarioSourceBlocks']=re.findall(r'^:::scenario[\s\S]*?^:::',s,re.M)==re.findall(r'^:::scenario[\s\S]*?^:::',old,re.M);checks[f'd{d}DiagramReferences']=re.findall(r'data-diagram="([^"]+)"',s)==re.findall(r'data-diagram="([^"]+)"',old)
old=frozen['/content/isc2-cc-2026/reading/domain-4.md'];s=(root/'content/isc2-cc-2026/reading/domain-4.md').read_bytes().decode();pilot=lambda x:x[x.index('<section class="reading-structure-pilot">'):x.index('<h3 id="topic-4-1-tcp-ip-mapping"')];checks['pilotSourceExact']=pilot(old)==pilot(s)
assert all(checks.values()),checks
new=[]
for current,dirs,files in os.walk(root):
 dirs[:]=[d for d in dirs if d not in {'.git','node_modules','.superpowers'}]
 for name in files:
  p=Path(current)/name;rel=p.relative_to(root).as_posix()
  if not rel.startswith('artifacts/qa/reading-notes-phase3b2/')and rel not in b['hashes']:new.append(rel)
assert set(new)=={'tools/verify-reading-cross-domain-structure.mjs','tools/fixtures/reading-cross-domain-fidelity.json','docs/plans/isc2-cc-2026/reading-notes-phase3b2-cross-domain-implementation.md'},new
proofs=load('content-fidelity.json');assert len(proofs)==94 and all(x['equal']for x in proofs)
reg=load('regression-results.json');assert len(reg)==19 and sum(x['passedChecks']for x in reg if x['exitCode']==0)==678
assert [x['suite']for x in reg if x['exitCode']] == ['verify-reading-notes-domain1-presentation']
fail=lambda n:re.findall(r'\[FAIL\].*',(q/n).read_text(encoding='utf-8'))
assert fail('regression-verify-reading-notes-domain1-presentation.txt')==fail('baseline-verify-reading-notes-domain1-presentation.txt')and len(fail('baseline-verify-reading-notes-domain1-presentation.txt'))==4
coverage=[];browserChecks=0;shots=0
for d in range(1,5):
 primary=load(f'after-domain{d}-browser.json');targeted=load(f'after-domain{d}-targeted-browser.json');assert len(primary['contexts'])==14 and len(targeted['contexts'])==14
 for result in [primary,targeted]:
  assert not result.get('error')and not result['errors']and all(c['pass']for c in result['checks']);browserChecks+=len(result['checks']);shots+=len(result['screenshots'])
 for c in primary['contexts']:
  replacement=next(t for t in targeted['contexts']if t['width']==c['width']and t['theme']==c['theme']);byId={r['id']:r for r in replacement['ranges']}
  for r in c['ranges']:coverage.append({'domain':d,'id':r['id'],'width':c['width'],'height':c['height'],'theme':c['theme'],'pass':True,'finalEvidence':f'after-domain{d}-targeted-browser.json'if r['id']in byId else f'after-domain{d}-browser.json'})
assert len(coverage)==1316 and browserChecks==10102 and shots==1818
assert len(set((r['id'],r['width'],r['theme'])for r in coverage))==1316
nav=load('navigation-journey-results.json');assert len(nav['checks'])==240 and not nav['errors']and all(c['pass']for c in nav['checks'])and not nav.get('error')
report=(root/'docs/plans/isc2-cc-2026/reading-notes-phase3b2-cross-domain-implementation.md').read_text(encoding='utf-8-sig');assert len(re.findall(r'^\| [1-4] \| topic-',report,re.M))==94
save('browser-coverage.json',coverage)
save('preservation.json',{'baselineHead':b['head'],'baselineFiles':len(b['hashes']),'unchangedExistingFiles':len(b['hashes'])-len(modified),'modifiedExistingFiles':modified,'missing':missing,'newOutsideQa':new,'checks':checks})
save('changed-file-manifest.json',[{'path':n,'status':'modified'if n in modified else'new','sha256':sha(root/n),'baselineSha256':b['hashes'].get(n),'bytes':(root/n).stat().st_size}for n in sorted(modified+new)])
(q/'final-git-status.txt').write_text(subprocess.check_output(['git','status','--short'],text=True),encoding='utf-8')
save('final-verification.json',{'status':'Phase 3B.2 Implemented — Pending Human Visual Acceptance','subsections':94,'sourceStructureChanged':70,'scopedTypographyUpdated':92,'retainedPilots':2,'fidelityRowsPass':94,'regressionScripts':19,'regressionScriptsPass':18,'regressionChecksPass':678,'historicalPresentationPass':366,'historicalFailures':4,'historicalFailuresMatchBaseline':True,'contentChromeChecksPass':browserChecks,'navigationChromeChecksPass':len(nav['checks']),'primaryRangeViewStates':len(coverage),'targetedRangeViewStates':98,'screenshotsContent':shots,'screenshotsNavigation':len(nav['screenshots']),'screenshotsBaseline':8,'protectedBaselineFilesUnchanged':len(b['hashes'])-len(modified),'humanAcceptance':False,'phase3cStarted':False})
paths=sorted(p for p in q.rglob('*')if p.is_file()and p.name!='evidence-manifest.json');save('evidence-manifest.json',{'selfExcluded':True,'files':[{'path':p.relative_to(root).as_posix(),'bytes':p.stat().st_size,'sha256':sha(p)}for p in paths]})
print(json.dumps({'allPreservationChecksPass':all(checks.values()),'unchanged':len(b['hashes'])-len(modified),'modified':modified,'rangeStates':len(coverage),'chromeChecks':browserChecks+len(nav['checks']),'artifacts':len(paths)+1},indent=2))
