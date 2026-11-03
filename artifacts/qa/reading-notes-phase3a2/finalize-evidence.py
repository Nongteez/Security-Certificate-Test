"""Check final behavior and exact edit boundaries; preserve all starting concurrent work."""
from pathlib import Path
import json,hashlib,subprocess,collections
root=Path.cwd();p=root/'artifacts/qa/reading-notes-phase3a2'
def read(n):return json.loads((p/n).read_text(encoding='utf-8-sig'))
def sha(f):return hashlib.sha256(f.read_bytes()).hexdigest()
def save(n,v):(p/n).write_text(json.dumps(v,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
baseline=read('baseline.json');mapping=read('correction-map.json')
allowed=sorted(['content/isc2-cc-2026/reading/domain-1.md','js/core/diagram-generator.js','tools/verify-reading-notes-dom-integrity.mjs','docs/plans/task.md'])
changed=sorted(f for f,h in baseline['hashes'].items() if not (root/f).is_file() or sha(root/f)!=h)
assert changed==allowed,changed
assert sum(x.get('values',0) for x in mapping if x['kind']=='currency')==5
assert len([x for x in mapping if x['kind']=='emphasis'])==1
reversedHashes={}
for path in ['content/isc2-cc-2026/reading/domain-1.md','js/core/diagram-generator.js']:
 data=(root/path).read_bytes()
 for item in [x for x in mapping if x['file']==path]:
  after=item['after'].encode('utf-8');before=item['before'].encode('utf-8');assert data.count(after)==1,(path,item['line']);data=data.replace(after,before,1)
 digest=hashlib.sha256(data).hexdigest();assert digest==baseline['hashes'][path],path;reversedHashes[path]=digest
# The starting tracker has mixed historical line endings; Git's normalized blob
# is not byte-identical to that clean working copy. Recover only in memory and
# require the exact captured working-copy hash rather than normalizing its bytes.
taskNow=(root/'docs/plans/task.md').read_bytes();rowStart=taskNow.index(b'| P3A2.')
candidates=[taskNow[:rowStart-n] for n in range(5)]
taskBefore=next(x for x in candidates if hashlib.sha256(x).hexdigest()==baseline['hashes']['docs/plans/task.md'])
assert taskNow.startswith(taskBefore)
assert taskNow[len(taskBefore):].decode('utf-8').strip().startswith('| P3A2.')
testBefore=subprocess.check_output(['git','show','HEAD:tools/verify-reading-notes-dom-integrity.mjs']).decode('utf-8')
assert hashlib.sha256(testBefore.encode('utf-8')).hexdigest()==baseline['hashes']['tools/verify-reading-notes-dom-integrity.mjs']
testNow=(root/'tools/verify-reading-notes-dom-integrity.mjs').read_text(encoding='utf-8')
marker="console.log('\\nTest Suite 5: Currency vs. KaTeX Math Notation Isolation');"
last='// Test 6: Textbook Aesthetics'
assert testBefore[:testBefore.index(marker)]==testNow[:testNow.index(marker)]
assert testBefore[testBefore.index(last):]==testNow[testNow.index(last):]
assert 'Both cost-benefit currency values remain outside math delimiters' in testNow
save('boundary-checks.json',{'productionFilesExactlyReversibleToBaseline':reversedHashes,
 'allOtherDiagramPayloadsAndGeometryUnchanged':True,'unrelatedSourceBytesUnchanged':True,
 'taskTrackerExistingBytesPreserved':True,'domIntegrityChangesConfinedToCurrencySuite':True,
 'validMathEscapedDollarTokensRemaining':(root/'content/isc2-cc-2026/reading/domain-1.md').read_text(encoding='utf-8').count('\\$'),
 'sourceReplacementCounts':dict(collections.Counter(x['kind'] for x in mapping))})
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip();assert head==baseline['head']
assert not subprocess.check_output(['git','diff','--cached','--name-only'],text=True).strip()
status=subprocess.check_output(['git','status','--porcelain=v1'],text=True)
old=set(baseline['status'].splitlines());now=set(status.splitlines());assert not old-now,old-now
report='docs/plans/isc2-cc-2026/reading-notes-phase3a2-critical-readability-fixes.md'
newTest='tools/verify-reading-critical-readability.mjs'
allowedStatus={' M '+f for f in allowed}|{'?? '+report,'?? '+newTest,'?? artifacts/qa/reading-notes-phase3a2/'}
assert now-old<=allowedStatus,now-old
save('preservation.json',{'baselineFiles':len(baseline['hashes']),'expectedChangedExistingFiles':changed,'unexpectedChanges':[],
 'head':head,'headUnchanged':True,'stagedDiffEmpty':True,'newStatusLines':sorted(now-old),
 'academicWordingPreserved':True,'allOriginalEightNotesUnchanged':True,
 'phase2CodeAndSchemaUnchanged':True,'unrelatedSubsectionsAndOtherDiagramsUnchanged':True,
 'slidesQuizBanksVocabularyDomain5Unchanged':True,'allPriorEvidenceAndReportsUnchanged':True,
 'concurrentUntrackedPhase3a1WorkPreserved':True})
(p/'git-status-final.txt').write_text(status,encoding='utf-8')
diff=subprocess.run(['git','diff','--check'],capture_output=True,text=True);assert diff.returncode==0
(p/'diff-check.txt').write_text(diff.stdout+diff.stderr,encoding='utf-8')
patch=subprocess.check_output(['git','diff','--',*allowed],text=True)
(p/'implementation.patch').write_text(patch,encoding='utf-8')
before=read('before-browser.json');after=read('after-browser.json');mobile=read('mobile-service-results.json')
assert len(before['contexts'])==28 and len(after['contexts'])==32 and len(mobile['contexts'])==8
for d in [before,after,mobile]:assert not d.get('error') and not d['errors']
assert len(after['checks'])==330 and all(x['pass'] for x in after['checks'])
assert len([x for c in mobile['contexts'] for x in c['checks']])==48 and all(x['pass'] for c in mobile['contexts'] for x in c['checks'])
expected={(d,w,h,t) for d in [1,4] for w,h in [(1920,1080),(1366,768),(1024,768),(768,1024),(390,844),(375,812),(320,568)] for t in ['light','dark']}
assert {(int(c['domain']),c['width'],c['height'],c['theme']) for c in after['contexts'] if not c['fallback']}==expected
for c in after['contexts']:
 if c['fallback']:assert not c['katex'] and len(c['fallbackMath'])==19
 elif int(c['domain'])==1:
  oldc=next(x for x in before['contexts'] if x['width']==c['width'] and x['theme']==c['theme'] and int(x['domain'])==1)
  assert c['formulaTex']==oldc['formulaTex'] and len(c['formulaTex'])==19
regressions=read('regression-results.json');assert [x['suite'] for x in regressions if x['exitCode']] == ['verify-reading-notes-domain1-presentation']
historical=(p/'verify-reading-notes-domain1-presentation-final.txt').read_text(encoding='utf-8')
historicalBefore=(p/'verify-reading-notes-domain1-presentation-baseline.txt').read_text(encoding='utf-8')
failures=[z.strip() for z in historical.splitlines() if '[FAIL]' in z]
assert len(failures)==4 and failures==[z.strip() for z in historicalBefore.splitlines() if '[FAIL]' in z]
assert '36 / 36 Passed' in (p/'verify-reading-notes-dom-integrity-final.txt').read_text(encoding='utf-8')
contrast={}
for phase,d in [('before',before),('after',after)]:
 contrast[phase]={}
 for theme in ['light','dark']:
  c=next(x for x in d['contexts'] if x['width']==1366 and x['theme']==theme and int(x['domain'])==4)
  contrast[phase][theme]=c['services']
save('contrast-summary.json',contrast)
save('final-verification.json',{'status':'Phase 3A.2 Complete — Pending Human Academic & Visual Acceptance',
 'humanAcademicAcceptance':'Pending','humanVisualAcceptance':'Pending','laterPhasesStarted':False,
 'productionFilesModified':['content/isc2-cc-2026/reading/domain-1.md','js/core/diagram-generator.js'],
 'currencyValuesCorrected':5,'rawHtmlCurrencyLocations':4,'literalEmphasisNotesCorrected':1,
 'browser':{'requiredCases':28,'additionalFallbackCases':4,'coreChecksPassed':330,'mobilePrimaryLabelChecksPassed':48,
 'consoleRuntimeErrors':0,'beforeScreenshots':70,'afterScreenshots':70,'reloadMaxErrorPx':max(abs(x['prior']-x['actual']) for x in after['checks'] if x['name']=='phase2-reload-position')},
 'automated':{'targetedPassed':188,'historicalPresentationPassed':366,'historicalPresentationFailed':4,'newUnresolvedFailures':0,'historicalFailures':failures},
 'preservation':'preservation.json','boundaries':'boundary-checks.json',
 'deferred':['Small SVG text and remaining support-label contrast; semantic/topology/layout/language work remains for separately authorized phases.'],
 'limitations':['Chrome Windows headless; no native screen-reader/human academic or visual acceptance.','Targeted tests do not certify broad Markdown correctness.']})
screens=before['screenshots']+after['screenshots']
for w in [1920,1366,1024]:screens.append({'file':f'first-after-dmz-{w}-dark.png','width':w,'height':1080 if w==1920 else 768,'theme':'dark','domain':4,'phase':'intermediate rejected color token'})
assert len(screens)==143 and all((p/s['file']).exists() for s in screens)
save('screenshot-index.json',screens)
fileRecords=[{'path':f,'bytes':(root/f).stat().st_size,'sha256':sha(root/f),'status':'modified' if f in allowed else 'new'} for f in allowed+[newTest,report]]
save('changed-files.json',{'files':fileRecords,'productionFilesModified':['js/core/diagram-generator.js','content/isc2-cc-2026/reading/domain-1.md'],
 'qaDirectory':'artifacts/qa/reading-notes-phase3a2/','exhaustiveQAInventory':'evidence-manifest.json','noOtherExistingFilesModified':True})
inventory=[{'path':f.relative_to(root).as_posix(),'bytes':f.stat().st_size,'sha256':sha(f)} for f in sorted(p.rglob('*')) if f.is_file() and f.name!='evidence-manifest.json']
save('evidence-manifest.json',{'status':'Phase 3A.2 Complete — Pending Human Academic & Visual Acceptance','manifestExcludesItself':True,
 'implementationFiles':fileRecords,'files':inventory,'primaryResults':['after-browser.json','mobile-service-results.json','contrast-summary.json','regression-results.json','final-verification.json','preservation.json','boundary-checks.json'],
 'beforeAndIntermediateFailuresRetained':True})
print(json.dumps({'baselineFiles':len(baseline['hashes']),'expectedModified':changed,'unexpectedModified':[],
 'browserPassed':378,'targetedAutomatedPassed':188,'historicalFailures':4,'qaFiles':len(inventory)},indent=2))
