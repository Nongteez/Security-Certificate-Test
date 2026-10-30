from pathlib import Path
import json,hashlib,subprocess
r=Path('artifacts/qa/domain-2-completion-20261030');entry=json.loads((r/'entry-files.json').read_text(encoding='utf-8'))['files'];policy=json.loads((r/'protection-policy.json').read_text(encoding='utf-8'));paths=set(policy['ownedEntryFiles'])
for no,name,module,css in [('05','security-awareness-culture-leadership','security-awareness','security-awareness'),('06','social-engineering-password-protection','social-engineering-passwords','social-passwords'),('07','security-metrics-kpi-kri','security-metrics','security-metrics'),('08','dashboards-scorecards-reports','security-reporting','security-reporting')]:
 for branch in ['published','staged']:paths.add(f'content/isc2-cc-2026/learning/{branch}/lessons/lesson-d2-{no}-{name}.json')
 paths.update([f'js/ui/learning/{module}-presentations.js',f'css/learning-{css}.css'])
paths.update(['js/ui/learning/domain2-lesson-shell.js','css/learning-domain2-lesson-shell.css','tools/fixtures/learning/domain2-lesson-contract.mjs','docs/plans/2026-10-30-domain-2-completion-plan.md','docs/plans/isc2-cc-2026/domain-2-completion-report.md'])
for name in ['continuity-redesign','recovery-redesign','awareness','social-passwords','security-metrics','security-reporting','completion']:paths.add('tools/verify-learning-d2-'+name+'.mjs')
files=[]
for path in sorted(paths):
 p=Path(path);assert p.is_file(),path;files.append({'path':path,'absolutePath':str(p.resolve()),'change':'modified'if path in entry else'created','sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'entrySha256':entry.get(path)})
# Keep the exact substantive file inventory human-readable as well as machine-readable.
report=Path('docs/plans/isc2-cc-2026/domain-2-completion-report.md');s=report.read_text(encoding='utf-8');s+='\n\n## Exact substantive files created or modified\n\n'+f'{len(files)} task-owned files (excluding copied preview files and QA evidence):\n\n'+'\n'.join(f'- `{f["path"]}` — {f["change"]}'for f in files)+'\n\nExact SHA-256 and all QA/evidence paths: `artifacts/qa/domain-2-completion-20261030/delivery-manifest.json`. Git status alone is insufficient because the external commit already includes the interrupted implementation.\n';report.write_text(s,encoding='utf-8')
for f in files:f['sha256']=hashlib.sha256(Path(f['path']).read_bytes()).hexdigest()
protected=json.loads((r/'protected-files.json').read_text(encoding='utf-8'));mismatches=[p for p,h in protected.items()if not Path(p).is_file()or hashlib.sha256(Path(p).read_bytes()).hexdigest()!=h];assert not mismatches,mismatches
(r/'final-preservation.json').write_text(json.dumps({'checked':len(protected),'mismatches':mismatches,'entryHead':'521d841','currentHead':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip(),'agentCommitted':False,'agentPushed':False},indent=2),encoding='utf-8')
# Complete matrix presence checks use real screenshot/AX files, not invented browser outcomes.
coverage=[]
for lesson,count in [(3,6),(4,9),(5,6),(6,8),(7,7),(8,6)]:
 for width in [1366,1920]:
  for lang in ['EN','TH']:
   for slide in range(1,count+1):
    for suffix in [f'S{slide}',f'S{slide}-Reading',f'Info-S{slide}']:
     stem=f'L{lesson}-{width}-{lang}-{suffix}';assert (r/(stem+'.png')).is_file(),stem;assert (r/(stem+'.ax.txt')).is_file(),stem
   for choice in range(4):assert (r/f'L{lesson}-{width}-{lang}-feedback-{choice}.png').is_file()
 coverage.append({'lesson':lesson,'slides':count,'presentation':count*4,'reading':count*4,'info':count*4,'feedback':16})
(r/'final-qa-inventory.json').write_text(json.dumps({'matrix':coverage,'presentationTotal':168,'readingTotal':168,'infoTotal':168,'feedbackTotal':96,'finalBrowserRefresh':'Unavailable after final spacing/publication-only edits; previous complete matrix retained'},indent=2),encoding='utf-8')
artifacts=[{'path':str(p).replace('\\','/'),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}for p in sorted(r.rglob('*'))if p.is_file()and p.name!='delivery-manifest.json']
(r/'delivery-manifest.json').write_text(json.dumps({'substantiveFiles':files,'artifacts':artifacts,'previewDirectory':'.learning-preview/domain2-completion-20261030','preservation':'final-preservation.json','tests':'final-test-results.json','humanAcceptance':'pending'},indent=2),encoding='utf-8');print(len(files),'substantive files,',len(artifacts),'evidence/helper files; protected',len(protected),'matched')
