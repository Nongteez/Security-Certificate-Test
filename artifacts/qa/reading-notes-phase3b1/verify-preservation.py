from pathlib import Path
import hashlib,json,os,re,subprocess
root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3b1'
load=lambda n:json.loads((q/n).read_text(encoding='utf-8'))
save=lambda n,v:(q/n).write_text(json.dumps(v,indent=2,ensure_ascii=False),encoding='utf-8')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
b=load('baseline.json');modified=[];missing=[]
for name,expected in b['hashes'].items():
 p=root/name
 if not p.exists():missing.append(name)
 elif sha(p)!=expected:modified.append(name)
allowed={'content/isc2-cc-2026/reading/domain-4.md','css/reading.css','docs/plans/task.md'}
assert set(modified)==allowed and not missing,(modified,missing)
frozen=load('baseline-runtime.json');before=frozen['/content/isc2-cc-2026/reading/domain-4.md'];now=(root/'content/isc2-cc-2026/reading/domain-4.md').read_bytes().decode('utf-8')
a='<h3 id="topic-4-1-fundamentals-topologies"';c='<h3 id="topic-4-1-tcp-ip-mapping"'
checks={'sourcePrefixExact':now[:now.index('<section class="reading-structure-pilot">')]==before[:before.index(a)],'sourceSuffixExact':now[now.index(c):]==before[before.index(c):],'originalCssExactPrefix':(root/'css/reading.css').read_bytes().startswith(frozen['/css/reading.css'].encode()),'trackerOriginalExactPrefix':(root/'docs/plans/task.md').read_bytes().startswith(frozen['/docs/plans/task.md'].encode()),'allOriginalIdsSame':re.findall(r'id="([^"]+)"',before)==re.findall(r'id="([^"]+)"',now)}
assert all(checks.values()),checks
new=[]
for current,dirs,files in os.walk(root):
 dirs[:]=[d for d in dirs if d not in {'.git','node_modules','.superpowers'}]
 for name in files:
  p=Path(current)/name;rel=p.relative_to(root).as_posix()
  if not rel.startswith('artifacts/qa/reading-notes-phase3b1/') and rel not in b['hashes']:new.append(rel)
expectedNew={'tools/verify-reading-structure-pilot.mjs','tools/fixtures/reading-structure-pilot-content.json','docs/plans/isc2-cc-2026/reading-notes-phase3b1-semantic-structure-pilot.md'}
assert set(new)==expectedNew,new
save('preservation.json',{'baselineHead':b['head'],'baselineFiles':len(b['hashes']),'unchangedExistingFiles':len(b['hashes'])-len(modified),'modifiedExistingFiles':modified,'missing':missing,'newOutsideQa':new,'boundaryChecks':checks})
save('changed-file-manifest.json',[{'path':name,'status':'modified' if name in modified else 'new','sha256':sha(root/name),'baselineSha256':b['hashes'].get(name),'bytes':(root/name).stat().st_size}for name in sorted(modified+new)])
(q/'final-git-status.txt').write_text(subprocess.check_output(['git','status','--short'],text=True),encoding='utf-8')
after=load('after-browser.json');geometry=load('layout-verification.json');assert len(after['contexts'])==14 and len(after['checks'])==148 and all(c['pass']for c in after['checks']) and not after['errors']
assert len(geometry)==14 and all(g['insideNonoverlap']and g['outsideGapGreaterThanInside']and g['headingHierarchy']for g in geometry)
# The only final CSS selector adjustment concerns absent tip/trap components.
html=(q/'semantic-after.html').read_text(encoding='utf-8');assert 'reading-callout' not in html and 'reading-exam-trap' not in html
fail=lambda name:re.findall(r'\[FAIL\].*',(q/name).read_text(encoding='utf-8'))
assert fail('baseline-presentation.txt')==fail('verify-reading-notes-domain1-presentation.txt') and len(fail('baseline-presentation.txt'))==4
save('final-verification.json',{'status':'Phase 3B.1 Implemented — Pending Human Visual Acceptance','focusedAndRegressionPass':201,'historicalPresentationPass':366,'historicalFailures':4,'historicalFailuresEqualBaseline':True,'chromeContexts':14,'chromeChecks':148,'chromeFailures':0,'chromeErrors':0,'geometryChecks':42,'beforeScreenshots':84,'afterScreenshots':84,'comparisonSheets':14,'allComparisonSheetsVisuallyReviewed':True,'finalConditionalCssSelectorsMatchNoPilotContent':True,'protectedExistingFilesUnchanged':len(b['hashes'])-3,'humanAcceptance':False,'phase3b2Started':False})
paths=sorted(p for p in q.rglob('*')if p.is_file() and p.name!='evidence-manifest.json')
save('evidence-manifest.json',{'selfExcluded':True,'files':[{'path':p.relative_to(root).as_posix(),'bytes':p.stat().st_size,'sha256':sha(p)}for p in paths]})
print(json.dumps({'preservation':checks,'unchanged':len(b['hashes'])-3,'newOutsideQa':new,'artifacts':len(paths)+1,'chromePass':148,'geometryPass':42},indent=2))
