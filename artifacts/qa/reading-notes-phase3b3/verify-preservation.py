from pathlib import Path
import json,hashlib,os,re,subprocess
root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3b3'
load=lambda n:json.loads((q/n).read_text(encoding='utf-8-sig'))
save=lambda n,v:(q/n).write_text(json.dumps(v,indent=2,ensure_ascii=False),encoding='utf-8')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
b=load('baseline.json');frozen=load('baseline-runtime.json');concurrent=load('resume-concurrent-files.json');ours={'content/isc2-cc-2026/reading/domain-1.md','css/reading.css','docs/plans/task.md'};modified=[];missing=[]
for n,h in b['hashes'].items():
 p=root/n
 if not p.exists():missing.append(n)
 elif sha(p)!=h:modified.append(n)
assert set(modified)==ours|set(concurrent)and not missing,(modified,missing)
assert all(sha(root/n)==h for n,h in concurrent.items()),'Concurrent Slides changed again: inspect without overwriting'
css=(root/'css/reading.css').read_bytes().decode();start=css.index('/* Phase 3B.3:');mark='/* End Phase 3B.3 content-aware widths. */';end=css.index(mark,start)+len(mark)+2
assert css[:start]+css[end:]==frozen['/css/reading.css'],'Pre-existing CSS altered'
assert (root/'docs/plans/task.md').read_bytes().startswith(frozen['/docs/plans/task.md'].encode())
for d in [2,3,4]:assert (root/f'content/isc2-cc-2026/reading/domain-{d}.md').read_bytes()==frozen[f'/content/isc2-cc-2026/reading/domain-{d}.md'].encode()
old=frozen['/content/isc2-cc-2026/reading/domain-1.md'];now=(root/'content/isc2-cc-2026/reading/domain-1.md').read_bytes().decode();a='id="topic-1-1-privacy-data-protection"';z='id="topic-1-1-zero-trust-defense-in-depth"';assert old[:old.index(a)]==now[:now.index(a)]and old[old.index(z):]==now[now.index(z):]
for d in range(1,5):
 s=(root/f'content/isc2-cc-2026/reading/domain-{d}.md').read_bytes().decode();old=frozen[f'/content/isc2-cc-2026/reading/domain-{d}.md'];assert re.findall(r'id="([^"]+)"',s)==re.findall(r'id="([^"]+)"',old);assert re.findall(r'^\|.*$',s,re.M)==re.findall(r'^\|.*$',old,re.M);assert re.findall(r'^:::scenario[\s\S]*?^:::',s,re.M)==re.findall(r'^:::scenario[\s\S]*?^:::',old,re.M)
new=[]
for current,dirs,files in os.walk(root):
 dirs[:]=[d for d in dirs if d not in {'.git','node_modules','.superpowers'}]
 for name in files:
  p=Path(current)/name;n=p.relative_to(root).as_posix()
  if not n.startswith('artifacts/qa/reading-notes-phase3b3/')and n not in b['hashes']:new.append(n)
assert set(new)=={'tools/verify-reading-layout-width.mjs','docs/plans/isc2-cc-2026/reading-notes-phase3b3-layout-width-remediation.md'},new
coverage=load('coverage-matrix.json');ranges=load('browser-coverage.json');derived=load('derived-layout-checks.json');assert len(coverage)==94 and len(ranges)==len(derived)==1316 and sum(r['sourceEdited']for r in coverage)==1;assert all(r['fidelity']=='pass'for r in coverage);assert all(r['listIndentationPreserved']and r['definitionAlignment']and r['proseFillsIntendedMeasure']for r in derived)
widthChecks=0;screenCount=0
for d in range(1,5):
 for phase in ['before','after']:
  run=load(f'{phase}-domain{d}-widths.json');assert len(run['contexts'])==14 and not run.get('error')and not run['errors']and all(c['pass']for c in run['checks'])
  if phase=='after':widthChecks+=len(run['checks'])
  screenCount+=len(run['screenshots'])
assert widthChecks==5470
edge=load('edge-results.json');nav=load('navigation-journey-results.json');assert len(edge['contexts'])==56 and len(edge['checks'])==124 and all(c['pass']for c in edge['checks'])and not edge['errors']and not edge.get('error');assert len(nav['checks'])==240 and all(c['pass']for c in nav['checks'])and not nav['errors']and not nav.get('error')
reg=load('regression-results.json');assert len(reg)==20 and sum(r['passedChecks']for r in reg if not r['exitCode'])==687;assert [r['suite']for r in reg if r['exitCode']]==['verify-reading-notes-domain1-presentation']
fail=lambda n:re.findall(r'\[FAIL\].*',(q/n).read_text(encoding='utf-8'));assert len(fail('baseline-historical-presentation.txt'))==4 and fail('baseline-historical-presentation.txt')==fail('regression-verify-reading-notes-domain1-presentation.txt')
for phase in ['before','after']:assert len(load(f'reference-{phase}.json')['contexts'])==14
report=(root/'docs/plans/isc2-cc-2026/reading-notes-phase3b3-layout-width-remediation.md').read_text(encoding='utf-8');assert len(re.findall(r'^\| [1-4] \| topic-',report,re.M))==94
save('preservation.json',{'baselineHead':b['head'],'baselineFiles':len(b['hashes']),'taskModifiedExisting':sorted(ours),'concurrentModifiedExisting':[{'path':n,'baselineSha256':b['hashes'][n],'resumeSha256':h,'currentSha256':sha(root/n),'preservedSinceResume':True}for n,h in concurrent.items()],'identicalToInitialBaseline':len(b['hashes'])-len(modified),'missing':missing,'newOutsideQa':new,'preExistingCssExact':True,'sourceOutsideReferenceExact':True,'otherDomainSourceExact':True,'allOriginalIdsTablesScenarioBlocksExact':True,'trackerOriginalPrefixExact':True})
save('changed-file-manifest.json',[{'path':n,'status':'modified'if n in ours else'new','baselineSha256':b['hashes'].get(n),'sha256':sha(root/n),'bytes':(root/n).stat().st_size}for n in sorted(ours|set(new))])
(q/'final-git-status.txt').write_text(subprocess.check_output(['git','status','--short'],text=True),encoding='utf-8')
save('final-verification.json',{'status':'Phase 3B.3 Implemented — Pending Human Visual Acceptance','subsections':94,'sourceSubsectionsChanged':1,'beforeRangeStates':1316,'afterRangeStates':1316,'widthChecksPass':widthChecks,'glyphAndCollapsedChecksPass':len(edge['checks']),'navigationChecksPass':len(nav['checks']),'directChromeChecksPass':widthChecks+len(edge['checks'])+len(nav['checks']),'derivedChecksPass':len(derived)*3,'referenceBeforeAfterStates':14,'regressionScripts':20,'regressionScriptsPass':19,'regressionChecksPass':687,'historicalPresentationPass':366,'historicalFailures':4,'historicalFailuresMatchBaseline':True,'unchangedInitialBaselineFiles':len(b['hashes'])-len(modified),'concurrentSlidesFilesPreserved':len(concurrent),'taskProductionFiles':2,'humanAcceptance':False,'phase3cStarted':False})
paths=sorted(p for p in q.rglob('*')if p.is_file()and p.name!='evidence-manifest.json');save('evidence-manifest.json',{'selfExcluded':True,'files':[{'path':p.relative_to(root).as_posix(),'bytes':p.stat().st_size,'sha256':sha(p)}for p in paths]})
print(json.dumps({'preservation':'pass','initialBaselineFilesUnchanged':len(b['hashes'])-len(modified),'concurrentPreserved':len(concurrent),'taskChanged':sorted(ours|set(new)),'browserChecks':widthChecks+len(edge['checks'])+len(nav['checks']),'derivedChecks':len(derived)*3,'artifacts':len(paths)+1},indent=2))
