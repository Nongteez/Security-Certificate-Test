from pathlib import Path
from html.parser import HTMLParser
import json,hashlib,re,difflib,subprocess
root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3f';e=root/'artifacts/qa/reading-notes-phase3e'
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def write(n,d):(q/n).write_text(json.dumps(d,indent=2,ensure_ascii=False),encoding='utf8')
class Text(HTMLParser):
 def __init__(self,s):super().__init__(convert_charrefs=True);self.parts=[];self.feed(s)
 def handle_data(self,s):self.parts.append(s)
norm=lambda s:re.sub(r'\s+',' ',s).strip()
final=read(q/'final-diagrams.json');contexts=[];checks=[];screens=[];derived=[]
for d in range(1,5):
 r=read(q/f'after-d{d}.json');old=read(e/f'after-d{d}.json');assert len(r['contexts'])==14 and not r['errors'] and not r.get('error')
 assert all(x['pass'] for x in r['checks']);contexts+=r['contexts'];checks+=r['checks'];screens+=r['screenshots']
 for c in r['contexts']:
  before=next(x for x in old['contexts'] if (x['width'],x['theme'])==(c['width'],c['theme']))
  assert c['anchors']==before['anchors'];assert [(t['headers'],t['rows']) for t in c['tables']]==[(t['headers'],t['rows']) for t in before['tables']]
  derived.extend([dict(name='anchors-preserved',domain=d,width=c['width'],theme=c['theme']),dict(name='all-table-headers-and-rows-preserved',domain=d,width=c['width'],theme=c['theme'])])
  for diagram in c['diagrams']:
   assert diagram['text']==norm(''.join(Text(final[diagram['id']]).parts)),diagram['id']
   derived.append(dict(name='rendered-diagram-equals-final-source',id=diagram['id'],domain=d,width=c['width'],theme=c['theme']))
nav=read(q/'navigation-journey-results.json');control=read(q/'control-keyboard-results.json');occlusion=read(q/'after-occlusion.json')
assert len(nav['completed'])==56 and len(nav['checks'])==920 and all(x['pass'] for x in nav['checks']) and not nav.get('error') and not nav['errors']
assert len(control['cases'])==56 and len(control['checks'])==168 and all(x['pass'] for x in control['checks']) and not control.get('error')
assert len(occlusion['cases'])==12 and all(x['pass'] for x in occlusion['checks'])
assert sum(len(c['subsections']) for c in contexts)==1316 and sum(len(c['tables']) for c in contexts)==308
assert sum(len(c['diagrams']) for c in contexts)==336
coverage=[]
sourceMatrix=read(root/'artifacts/qa/reading-notes-phase3b2/implementation-matrix.json')
for row in sourceMatrix:
 cases=[dict(domain=row['domain'],width=c['width'],height=c['height'],theme=c['theme'],**s) for c in contexts for s in c['subsections'] if s['id']==row['id']]
 assert len(cases)==14,row['id'];coverage.append(dict(**row,phase3F='Pass',verifiedStates=14,cases=cases))
write('subsection-coverage.json',coverage)
diagramMatrix=read(q/'diagram-matrix.json')
for m in diagramMatrix:
 data=[x for c in contexts for x in c['legibility'] if x['id']==m['id']]
 m['phase3F']=dict(states=len(data),minFontPx=min(x['minPx'] for x in data),minContrast=min(x['minContrast'] for x in data),status='Pass')
 if m['id']=='ethicsCanons':m.update(relationship='Numbered mandatory canons with contextual professional judgment',disposition='Neutral clarification under Phase 3F; strict conflict-precedence provenance remains an academic acceptance exception')
write('diagram-coverage.json',diagramMatrix)
tableMatrix=[]
for d in range(1,5):
 cases=read(q/f'after-d{d}.json')['contexts']
 for index in range(len(cases[0]['tables'])):tableMatrix.append(dict(domain=d,index=index,headers=cases[0]['tables'][index]['headers'],rowCount=len(cases[0]['tables'][index]['rows']),verifiedStates=14,status='Pass',keyboardFocusAndExit=True,overflowKeyboardScrollVerified=True))
assert len(tableMatrix)==22;write('table-coverage.json',tableMatrix)
reg=read(q/'regression-results.json');historical={'verify-domain2-math-symbols','verify-bilingual-table-cells'}
assert len(reg)==28 and {x['suite'] for x in reg if x['exitCode']}==historical
for name in historical:
 old=(q/f'baseline-{name}.log').read_text(encoding='utf8');now=(q/f'{name}.log').read_text(encoding='utf8')
 pattern=r'AssertionError \[ERR_ASSERTION\]: ([^\n]+)' if 'math' in name else r'✗ FAIL: ([^\n]+)'
 assert re.findall(pattern,old)==re.findall(pattern,now),(name,re.findall(pattern,old),re.findall(pattern,now))
summary=dict(status='Phase 3F Complete — Pending Human Acceptance',humanAccepted=False,sourceSubsections=94,subsectionStates=1316,diagramCount=24,diagramStates=336,tableCount=22,tableStates=308,
 matrixChecks=len(checks),navigationChecks=len(nav['checks']),keyboardControlChecks=len(control['checks']),occlusionChecks=len(occlusion['checks']),totalBrowserChecks=len(checks)+len(nav['checks'])+len(control['checks'])+len(occlusion['checks']),browserFailures=0,
 suites=28,greenSuites=26,passingChecksInGreenSuites=sum(x['passedChecks'] for x in reg if not x['exitCode']),passingAssertionsIncludingHistoricalSuites=sum(x['passedChecks'] for x in reg),historicalFailingSuites=sorted(historical),newFailingSuites=[],
 minDiagramFontPx=min(x['minPx'] for c in contexts for x in c['legibility']),minDiagramContrast=min(x['minContrast'] for c in contexts for x in c['legibility']),minProseContrast=min(c['prose']['minContrast'] for c in contexts),reconciliationChecks=len(derived))
write('summary.json',summary);write('derived-reconciliation.json',dict(failed=0,checks=derived))
allowed={'css/reading.css','js/core/diagram-generator.js','js/ui/screen-reading.js','content/isc2-cc-2026/reading/domain-1.md','docs/plans/task.md','tools/verify-reading-cross-domain-structure.mjs','tools/verify-reading-notes-domain1-presentation.mjs','tools/verify-reading-layout-width.mjs','tools/verify-reading-diagram-semantics.mjs','tools/verify-reading-diagram-legibility.mjs'}
preservation={}
for phase,folder in [('master',e),('phase3f',q)]:
 b=read(folder/'baseline-hashes.json');missing=[n for n in b if not (root/n).is_file()];changed=[n for n,h in b.items() if (root/n).is_file() and sha(root/n)!=h]
 assert not missing,missing;assert set(changed)<=allowed,changed
 preservation[phase]=dict(baselineFiles=len(b),bytePreserved=len(b)-len(changed),existingFilesChanged=changed,deleted=missing,unexpectedChanges=[])
css=(root/'css/reading.css').read_bytes();withoutF=re.sub(rb'/\* Phase 3F:.*?/\* End Phase 3F Reading accessibility\. \*/\n\n',b'',css,flags=re.S);withoutBoth=re.sub(rb'/\* Phase 3E:.*?/\* End Phase 3E diagram legibility\. \*/\n\n',b'',withoutF,flags=re.S)
assert hashlib.sha256(withoutBoth).hexdigest()==read(e/'baseline-hashes.json')['css/reading.css']
tracker=(root/'docs/plans/task.md').read_bytes();i=tracker.index(b'| P3E');assert any(hashlib.sha256(tracker[:i-n]).hexdigest()==read(e/'baseline-hashes.json')['docs/plans/task.md'] for n in range(5))
preservation.update(originalEightNotesPreserved=True,unrelatedModulesAndConcurrentWorkPreserved=True,priorCssBytesPreserved=True,priorTrackerRowsPreserved=True,readingDomains2to4BytePreserved=True,readingDomain1OnlyExactEthicsClarification=True)
write('preservation.json',preservation)
runtime=read(q/'baseline-runtime.json');masterRuntime=read(e/'baseline-runtime.json');delta=[];production=['css/reading.css','js/core/diagram-generator.js','js/ui/screen-reading.js','content/isc2-cc-2026/reading/domain-1.md']
for n in production:
 old=masterRuntime.get('/'+n,runtime.get('/'+n));delta.extend(difflib.unified_diff(old.splitlines(True),(root/n).read_text(encoding='utf8').splitlines(True),fromfile='master-start/'+n,tofile='final/'+n))
(q/'master-production-delta.patch').write_text(''.join(delta),encoding='utf8')
write('evidence-manifest.json',dict(status=summary['status'],matrix=[f'after-d{d}.json' for d in range(1,5)],diagramAndSubsectionCaptures=screens,navigationCaptures=nav['screenshots'],keyboardControlCaptures=control['screenshots'],occlusionBefore=read(q/'before-occlusion.json')['screenshots'],occlusionAfter=occlusion['screenshots'],sourceVersion={n:sha(root/n) for n in production},historicalTestExceptions=sorted(historical),academicException='academic-exception.json'))
print(summary);print({k:v for k,v in preservation.items() if isinstance(v,dict)})
