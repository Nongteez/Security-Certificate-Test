from pathlib import Path
import json,hashlib,difflib,subprocess,re
q=Path('artifacts/qa/reading-notes-phase3c');base=json.loads((q/'baseline-hashes.json').read_text(encoding='utf8'));allowed={'css/reading.css','js/core/markdown-parser.js','docs/plans/task.md','tools/verify-reading-notes-domain1.mjs'};changed=[];missing=[]
for name,sha in base.items():
 p=Path(name)
 if not p.exists():missing.append(name)
 elif hashlib.sha256(p.read_bytes()).hexdigest()!=sha:changed.append(name)
assert not missing,missing
assert set(changed)<=allowed,changed
runtime=json.loads((q/'baseline-runtime.json').read_text(encoding='utf8'));css=Path('css/reading.css').read_text(encoding='utf8');start=css.index('/* Phase 3C:');end=css.index('/* End Phase 3C scoped tables. */')+len('/* End Phase 3C scoped tables. */\n\n');assert css[:start]+css[end:]==runtime['/css/reading.css']
cssRaw=Path('css/reading.css').read_bytes()
cssWithoutNew=re.sub(rb'/\* Phase 3C:.*?/\* End Phase 3C scoped tables\. \*/\r?\n\r?\n',b'',cssRaw,flags=re.S)
assert hashlib.sha256(cssWithoutNew).hexdigest()==base['css/reading.css'],'pre-existing CSS bytes changed'
trackerRaw=Path('docs/plans/task.md').read_bytes();i=trackerRaw.index(b'| P3C.')
assert any(hashlib.sha256(trackerRaw[:i-n]).hexdigest()==base['docs/plans/task.md'] for n in range(6)),'existing tracker bytes changed'
out={'baselineFiles':len(base),'bytePreserved':len(base)-len(changed),'existingFilesChanged':changed,'deleted':missing,'unexpectedChanges':[],'allFourReadingSourcesByteIdentical':all(f'content/isc2-cc-2026/reading/domain-{d}.md' not in changed for d in range(1,5)),'preExistingCssBytePreservedOutsideNewPhase3CBlock':True,'trackerOnlyAppended':True,'originalCourseNotes':{name:sha for name,sha in base.items() if name.startswith('ISC2 Update 2026/Domain ') and (name.endswith(' sum.md') or name.rsplit('/',1)[-1] in ['Domain 1.md','Domain 2.md','Domain 3.md','Domain 4.md'])},'concurrentSlides':{name:sha for name,sha in base.items() if name in ['css/learning-grc-foundations.css','css/learning-grc-tools-risk-register.css','js/ui/learning/grc-foundations-presentations.js','js/ui/learning/grc-tools-risk-register-presentations.js']}}
(q/'preservation.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf8')
patch=[]
for s in ['css/reading.css','js/core/markdown-parser.js','docs/plans/task.md','tools/verify-reading-notes-domain1.mjs']:
 old=runtime.get('/'+s)
 if old is None:old=subprocess.check_output(['git','show','HEAD:'+s]).decode('utf8')
 patch.extend(difflib.unified_diff(old.splitlines(True),Path(s).read_text(encoding='utf8').splitlines(True),fromfile='phase3c-start/'+s,tofile='current/'+s))
(q/'implementation-delta.patch').write_text(''.join(patch),encoding='utf8')
print(json.dumps({k:v for k,v in out.items() if k not in ['originalCourseNotes','concurrentSlides']},indent=2))
