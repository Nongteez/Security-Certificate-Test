from pathlib import Path
import json,re,hashlib,subprocess,collections,datetime
R=Path.cwd();A=R/'artifacts/qa/reading-notes-independent-audit';D=R/'docs/plans/isc2-cc-2026'
inv=json.loads((A/'inventory.json').read_text(encoding='utf8'))
findings=json.loads((A/'consolidated-findings.json').read_text(encoding='utf8'));ids={f['id'] for f in findings}
records=[]
for filename in ['browser-results-attempt3.json','focused-results.json','final-browser-checks.json']:
 data=json.loads((A/filename).read_text(encoding='utf8'))
 for s in data['screenshots']:
  s=dict(s);s['sourceResult']=filename;s['findingIds']=s.pop('findingId',[]) or []
  if isinstance(s['findingIds'],str):s['findingIds']=[s['findingIds']]
  s['use']='audit evidence';s['manualVisualReview']='not individually inspected; automated capture'
  if re.match(r'd\d-\d+x\d+-(dark|light)\.png',s['file']):
   s['manualVisualReview']='representative matrix contact sheet inspected'
  m=re.match(r'diagram-d(\d)-(\d+)-(\d+)-(light|dark)\.png',s['file'])
  if m:
   d,i,w,theme=int(m[1]),int(m[2]),int(m[3]),m[4]
   src=(R/f'content/isc2-cc-2026/reading/domain-{d}.md').read_text(encoding='utf8').splitlines()
   diagrams=[(n+1,re.search(r'data-diagram="([^"]+)"',l)[1]) for n,l in enumerate(src) if 'class="reading-semantic-diagram"' in l]
   ln,key=diagrams[i];rec=[r for r in inv if r['domain']==d and r['line']<=ln][-1]
   s['diagramKey']=key;s['subsection']=rec['title'];s['anchor']=rec['anchor']
   if w==1920:s['findingIds'].append('RN-I-001')
   if theme=='light':s['manualVisualReview']='desktop/mobile diagram contact sheet inspected; selected originals inspected'
   if key=='cloudSharedResponsibility' and w==1920:s['findingIds']+=['RN-I-018','RN-I-008','D34-05']
  # Correct known driver metadata: fresh focused profile defaults to dark before theme probes.
  if filename=='focused-results.json' and (s['file'].startswith('isolated-reload-') or s['file']=='desktop-navigation-offscreen.png'):
   s['theme']='dark';s['metadataCorrection']='Driver constant said light; these captures precede all theme changes in a fresh default-dark profile.'
  if filename=='focused-results.json' and s['file'].startswith('contrast-d'):
   s['use']='diagnostic only — theme transition; excluded from settled contrast conclusions'
  if s['file'].startswith('detail-'):
   s['captureNote']='Intended light theme; no explicit post-toggle settling delay in this early focused capture. Geometry corroborated by the settled main matrix.'
  for r in inv:
   if s['subsection']==r['anchor']:
    s['anchor']=r['anchor'];s['subsection']=r['title'];break
  s['findingIds']=list(dict.fromkeys(s['findingIds']))
  assert all(x in ids for x in s['findingIds']),(s['file'],s['findingIds'])
  assert (A/s['file']).is_file(),s['file']
  s['sha256']=hashlib.sha256((A/s['file']).read_bytes()).hexdigest();records.append(s)

baseline=json.loads((A/'baseline.json').read_text(encoding='utf8'))
hashchanges=[]
for file,h in baseline['sha256'].items():
 p=R/file;now=hashlib.sha256(p.read_bytes()).hexdigest() if p.exists() else None
 if now!=h:hashchanges.append({'file':file,'before':h,'after':now})
status=subprocess.check_output(['git','status','--short'],text=True)
baselineStatus=baseline['gitStatus'].splitlines();currentStatus=status.splitlines()
newstatus=[s for s in currentStatus if s not in baselineStatus]
preservation={'date':'2026-10-31','timezone':'Asia/Bangkok','baselineHead':baseline['gitHead'],'currentHead':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip(),'productionFilesHashed':len(baseline['sha256']),'productionHashChanges':hashchanges,'baselineGitStatus':baselineStatus,'currentGitStatus':currentStatus,'statusEntriesAddedSinceBaseline':newstatus,'auditWriteScope':['docs/plans/isc2-cc-2026/reading-notes-independent-*.md','artifacts/qa/reading-notes-independent-audit/*'],'note':'Existing concurrent Learning Slides modifications and untracked files are preserved. No git mutation command was performed. Hashes include pre-existing modified index.html and JS/CSS, so equality means their audit-start contents were retained.'}
assert not hashchanges,hashchanges
assert preservation['baselineHead']==preservation['currentHead']
(A/'preservation-final.json').write_text(json.dumps(preservation,ensure_ascii=False,indent=2),encoding='utf8')
manifest={'date':'2026-10-31','timezone':'Asia/Bangkok','feature':'Reading Notes / Textbook','domains':[1,2,3,4],'status':'Independent Reading Notes Audit Complete — Pending Human Review','browser':'Chrome/156.0.8078.74 headless CDP; installed real Chrome','viewports':['1920x1080','1366x768','1024x768','768x1024','390x844','375x812','320x568'],'themes':['dark','light'],'coverage':{'objectives':14,'subsections':94,'perDomain':{'1':24,'2':29,'3':17,'4':24},'configurations':56,'subsectionStates':1316,'diagrams':24,'tables':22,'distinctionCards':46,'scenarios':44},'confirmedFindings':dict(collections.Counter(f['severity'] for f in findings if f['status']=='confirmed')),'observationStatuses':dict(collections.Counter(f['status'] for f in findings)),'screenshots':records,'screenshotCount':len(records),'contactSheets':sorted(p.name for p in A.glob('contact-*.jpg')),'runs':[
 {'file':'browser-results.json','status':'failed before evidence: sandbox Chrome launch','usableConfigurations':0},
 {'file':'browser-results-attempt2.json','status':'failed before evidence: driver regex escape','usableConfigurations':0},
 {'file':'browser-results-attempt3.json','status':'completed matrix; layout/academic acceptance is not implied','usableConfigurations':56},
 {'file':'focused-results.json','status':'completed isolated functional probes; contrast probes diagnostic and superseded'},
 {'file':'contrast-final.json','status':'completed eight settled-theme contrast measurements'},
 {'file':'final-browser-checks.json','status':'completed seven final route/focus/zoom/parser checks'},
 {'file':'svg-geometry.json','status':'completed eight domain-width geometry checks for all 24 SVGs'},
 {'file':'test-results.json','status':'seven existing read-only suites, 103/103 checks passed'}],
 'limitations':['Representative screenshot review, not manual visual acceptance of every subsection state.','No native screen-reader speech/Braille, physical touch-device, cross-browser, desktop toolbar/Ctrl+ zoom or OS font-scaling testing. Page/pinch zoom 200% and 320px reflow were checked.','Unverified course/legal provenance and minor technical extensions remain qualified; no current XSS exploit path was established.'],
 'artifacts':['inventory.json','coverage.json','consolidated-findings.json','domain-1-source-review.md','domain-2-source-review.md','domain-3-4-source-review.md','baseline.json','preservation-final.json','files-created.txt']}
(A/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf8')
auditDocs=sorted(D.glob('reading-notes-independent-*.md'))
created=sorted([p.relative_to(R).as_posix() for p in A.rglob('*') if p.is_file()]+[p.relative_to(R).as_posix() for p in auditDocs]+['artifacts/qa/reading-notes-independent-audit/files-created.txt'])
created=list(dict.fromkeys(created))
(A/'files-created.txt').write_text('\n'.join(created)+'\n',encoding='utf8')
print('FINAL:',len(records),'Chrome screenshots;',len(manifest['contactSheets']),'contact sheets;',len(created),'new files;',len(hashchanges),'production hash changes; HEAD unchanged')
