"""Verify supplemental audit coverage/reuse/preservation and inventory only new audit files."""
import json,hashlib,subprocess,collections,re
from pathlib import Path
root=Path.cwd();p=root/'artifacts/qa/reading-notes-phase3a1';old=root/'artifacts/qa/reading-notes-phase3a'
def read(f):return json.loads(f.read_text(encoding='utf-8-sig'))
def sha(f):return hashlib.sha256(f.read_bytes()).hexdigest()
def save(n,v):(p/n).write_text(json.dumps(v,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
reports=['docs/plans/isc2-cc-2026/reading-notes-phase3a1-'+s+'.md' for s in ['source-fidelity-and-visual-audit','findings-addendum','updated-remediation-roadmap']]
baseline=read(p/'baseline.json');changed=[f for f,h in baseline['hashes'].items() if not (root/f).exists() or sha(root/f)!=h]
assert not changed,changed
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip();assert head==baseline['head']
assert not subprocess.check_output(['git','diff','--cached','--name-only'],text=True).strip()
status=subprocess.check_output(['git','status','--porcelain=v1'],text=True);prior=set(baseline['status'].splitlines());now=set(status.splitlines())
assert not prior-now,prior-now
assert now-prior<=set('?? '+s for s in reports)|{'?? artifacts/qa/reading-notes-phase3a1/'},now-prior
(p/'git-status-final.txt').write_text(status,encoding='utf-8')
diff=subprocess.run(['git','diff','--check'],capture_output=True,text=True);assert diff.returncode==0
(p/'diff-check.txt').write_text(diff.stdout+diff.stderr,encoding='utf-8')
save('preservation.json',{'baselineFiles':len(baseline['hashes']),'changedBaselineFiles':changed,'productionFilesModified':[],
 'head':head,'headUnchanged':True,'stagedDiffEmpty':True,'newStatusLines':sorted(now-prior),
 'allAcademicCorrectionsPreserved':True,'originalEightNotesUnchanged':True,'phase2Unchanged':True,
 'phase3aReportsAndEvidenceUnchanged':True,'slidesQuizBanksVocabularyDomain5AndUnrelatedFilesUnchanged':True})
coverage=read(p/'fidelity-coverage.json');browser=read(p/'browser-results.json');notes=read(p/'note-results.json');planning=read(p/'planning-dom-results.json')
assert len(coverage)==94 and {x['anchor'] for x in coverage}=={x['anchor'] for x in read(old/'source-ledger.json')}
assert all(set(x['freshDOMThemes'])=={'light','dark'} for x in coverage)
assert all(x['tableShapeMatchesSource'] and not x['mathErrors'] for x in coverage)
syntax=[x for x in coverage if x['visibleSyntaxCandidates']];assert {x['anchor'] for x in syntax}=={'topic-1-2-quantitative-risk','topic-1-5-due-care-due-diligence'}
assert len(browser['contexts'])==14 and sum(len(c['ranges']) for c in browser['contexts'])==332
assert len(notes['contexts'])==4
for d in [browser,notes,planning]:assert not d.get('error') and not d['errors']
dmz=[c for c in browser['contexts'] if c['domain']==4];assert len(dmz)==8
for c in dmz:
 z=c['dmz'];assert z['connectors']==0
 if c['width']>768:
  assert z['svgVisible'] and len(z['services'])==3
  ratios=[s['labels'][0]['ratio'] for s in z['services']]
  assert all((r<1.30 if c['theme']=='light' else r>18) for r in ratios)
 else:assert not z['svgVisible'] and not z['services'] and z['mobileVisible']
assert len(read(p/'diagram-classification.json'))==24
assert read(p/'table-reconciliation.json')['ranges']==15
assert all(x['identical'] and x['rawSourceIsCurrentFile'] for x in read(p/'node-render-comparison.json'))
scenarios=read(p/'scenario-fidelity.json');assert sum(len(x['sourceIds']) for x in scenarios)==44 and all(x['idsMatch'] for x in scenarios)
checks=read(p/'pipeline-checks.json')['checks'];assert len(checks)==11 and all(x['pass'] for x in checks)
reuse=read(p/'reuse-validation.json');assert reuse['runtimeAndContentUnchangedSincePhase3a'] and not reuse['changed']
roots={x['id']:x['severity'] for x in read(old/'findings.json')};roots['P3-ACC-001']='P1';roots['P3A1-SEM-001']='P2'
assert len(roots)==14 and collections.Counter(roots.values())=={'P1':3,'P2':10,'P3':1}
save('reconciliation.json',{'priorRootFamilies':13,'supplementalRecords':3,'newRootFamilies':1,
 'refinedFamilies':{'P3-TXT-002':'P3A1-FID-001','P3-ACC-001':'P3A1-DIA-001'},
 'rootFamilyPriorities':roots,'consolidatedSeverity':{'P0':0,'P1':3,'P2':10,'P3':1},
 'qualifiedConcernsExcluded':True,'noPriorReportRewritten':True})
screens=browser['screenshots']+notes['screenshots'];assert len(screens)==14
assert all((p/s['file']).exists() for s in screens);save('screenshot-index.json',screens)
save('final-verification.json',{'status':'Phase 3A.1 Supplemental Audit Complete — Pending Human Review',
 'humanReview':'Pending','humanAcceptance':'Not approved','productionChanges':[],'implementationPerformed':False,
 'sourceFidelitySubsections':94,'freshBrowserContexts':14,'freshWholeRangeDOMRecords':332,'additionalNoteContexts':4,
 'freshProductScreenshots':14,'detachedDOMPlanningContexts':1,'reusedVisualMatrix':reuse['reusedMatrix'],
 'newFullVisualMatrixPerformed':False,'sourceCoverageGaps':[],'diagramsClassified':24,'fragmentationRangesReconciled':15,
 'tableShapesMatched':22,'scenarioGroupsPreserved':44,'auditReproductionArithmeticChecksPassed':11,
 'supplementalConfirmedRecords':3,'newRootFamilies':1,'consolidatedRootFamilies':14,
 'limitations':['No new 94x14 visual matrix; prior evidence reused only after hash validation.',
 'Fresh all-94 fidelity scans at desktop in both themes; D4 has additional tablet/mobile states.',
 'No native screen-reader/user study, universal LaTeX guarantee, or comprehensive historical AI-attribution audit.',
 'Original notes are targeted editorial references; this is not a new full academic sentence-equivalence audit.']})
missing=[]
for f in reports:
 for link in re.findall(r'\]\(([^)]+)\)',(root/f).read_text(encoding='utf-8')):
  if not link.startswith(('http:','https:','#')) and not ((root/f).parent/link.split('#')[0]).exists():missing.append((f,link))
assert not missing,missing
reportHashes=[{'path':f,'bytes':(root/f).stat().st_size,'sha256':sha(root/f)} for f in reports]
save('changed-files.json',{'productionFilesModified':[],'newReports':reportHashes,
 'newQADirectory':'artifacts/qa/reading-notes-phase3a1/','exactQAFileInventory':'evidence-manifest.json',
 'preservation':'preservation.json','allFilesInThisTaskAreAuditOnly':True})
files=[{'path':f.relative_to(root).as_posix(),'bytes':f.stat().st_size,'sha256':sha(f)} for f in sorted(p.rglob('*')) if f.is_file() and f.name!='evidence-manifest.json']
save('evidence-manifest.json',{'status':'Phase 3A.1 Supplemental Audit Complete — Pending Human Review',
 'auditOnly':True,'manifestExcludesItself':True,'reports':reportHashes,'files':files,
 'reusedEvidenceManifest':'artifacts/qa/reading-notes-phase3a/evidence-manifest.json','reuseValidation':'reuse-validation.json',
 'primaryEvidence':['browser-results.json','fidelity-coverage.json','source-fidelity-inventory.json','pipeline-experiments.json',
 'correction-planning-experiments.json','diagram-classification.json','findings.json','preservation.json','reconciliation.json','final-verification.json']})
print(json.dumps({'protectedFiles':len(baseline['hashes']),'changed':changed,'coverage':len(coverage),
 'freshContexts':len(browser['contexts'])+len(notes['contexts']),'newScreenshots':len(screens),
 'auditOnlyQAFiles':len(files),'newRootFamilies':1,'consolidatedRootFamilies':len(roots)},indent=2))
