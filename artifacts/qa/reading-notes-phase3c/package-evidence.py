from pathlib import Path
import json,hashlib,os,subprocess
q=Path('artifacts/qa/reading-notes-phase3c');load=lambda p:json.loads((q/p).read_text(encoding='utf8'))
before=load('before-stable-captures.json');after=load('after-stable-captures.json')
assert not before.get('error') and not after.get('error')
assert all(c['pass'] for c in before['checks']+after['checks'])
assert sum(i['edge']=='start' for i in after['images'])==308
assert all('capture-width-lock-preserves-live-layout' in [c['name'] for c in x['checks']] for x in [before,after])
images=[dict(i,stage=stage) for data,stage in [(before,'authoritative-baseline'),(after,'authoritative-final')] for i in data['images']]
for i in images:
 p=q/i['file'];i['sha256']=hashlib.sha256(p.read_bytes()).hexdigest();i['bytes']=p.stat().st_size
manifest={'description':'Authoritative passive table images preserve the measured native body width during Chrome export; every image has before/after geometry checks. Earlier raw full-surface probes may have scrollbar reflow artifacts and are not authoritative full-table images.','images':images,'finalTableStates':308,'baselineRepresentativeStates':sum(i['edge']=='start' for i in before['images']),'contactSheets':[f'contact-{w}-{t}.png' for w in [1920,1366,1024,768,390,375,320] for t in ['light','dark']],'coreResults':['after-d1.json','after-d2.json','after-d3.json','after-d4.json','after-domain1-widths.json','after-domain2-widths.json','after-domain3-widths.json','after-domain4-widths.json','navigation-journey-results.json','derived-verification.json','regression-results.json','preservation.json','coverage-matrix.json'],'captureMethodProof':['capture-probe.json','capture-pinned-probe.json'],'intermediateResults':['initial-native-d1.json','initial-native-d2.json','initial-native-d3.json','initial-native-d4.json','initial-narrow-columns.json','initial-prose-wrap-failures.json','initial-d2-prose-failures.json','after-d2-smoke.json']}
(q/'evidence-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf8')
(q/'git-after.txt').write_text(subprocess.check_output(['git','status','--short'],text=True),encoding='utf8')
base=load('baseline-hashes.json');added=[]
for root,dirs,files in os.walk('.'):
 dirs[:]=[d for d in dirs if d not in ['.git','node_modules','.superpowers']]
 for name in files:
  p=Path(root)/name;s=p.as_posix()
  if s not in base:added.append(s)
selfPath=(q/'changed-files.json').as_posix()
if selfPath not in added:added.append(selfPath)
allowedOutside={'tools/verify-reading-tables-typography.mjs','docs/plans/isc2-cc-2026/reading-notes-phase3c-tables-typography-remediation.md'}
assert not [s for s in added if not s.startswith(q.as_posix()+'/') and s not in allowedOutside]
changed={'baseline':'Phase 3C starting filesystem; overall working tree already contained previous Reading Notes and concurrent Slides work.','existingFilesChanged':load('preservation.json')['existingFilesChanged'],'newFiles':sorted(added),'deleted':[],'qaFileCount':sum(s.startswith(q.as_posix()+'/') for s in added),'headObserved':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()}
(q/'changed-files.json').write_text(json.dumps(changed,ensure_ascii=False,indent=2),encoding='utf8')
(q/'git-after.txt').write_text(subprocess.check_output(['git','status','--short'],text=True),encoding='utf8')
print('Authoritative images',len(images),'new files',len(added),'QA files',changed['qaFileCount'])
