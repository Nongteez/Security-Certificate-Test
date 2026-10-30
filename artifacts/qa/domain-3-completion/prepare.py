from pathlib import Path
import json,hashlib,subprocess,shutil,re
q=Path('artifacts/qa/domain-3-completion');q.mkdir(exist_ok=True);p=q/'entry-baseline.json';assert not p.exists(),'Inspect existing completion work before proceeding'
names=sorted(set(n for n in subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z']).decode().split('\0') if n and not n.startswith(('artifacts/','scratch/')) and Path(n).is_file()))
r={'head':subprocess.check_output(['git','rev-parse','HEAD']).decode().strip(),'status':subprocess.check_output(['git','status','--short']).decode(),'hashes':{n:hashlib.sha256(Path(n).read_bytes()).hexdigest() for n in names}}
p.write_text(json.dumps(r,indent=2),encoding='utf-8')
for n in ['content/isc2-cc-2026/learning/published/catalog.json','js/ui/learning/renderers.js','js/ui/learning/lesson-info.js','index.html','docs/plans/task.md']:
 d=q/'entry-shared'/n;d.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(n,d)
road=Path('docs/plans/isc2-cc-2026/domain-3-learning-roadmap.md').read_text(encoding='utf-8');ids={f'{i:02}':re.findall(r'### L0'+str(i)+r'-S\d+ — `(slide-[^`]+)`',road) for i in range(1,7)}
(q/'approved-slide-ids.json').write_text(json.dumps(ids,indent=2)+'\n',encoding='utf-8');print('Baseline',len(names),'approved slide counts',[len(x) for x in ids.values()])
p=Path('docs/plans/task.md');raw=p.read_bytes();assert b'D3-FINISH.' not in raw
with p.open('ab') as f:f.write(b'\n| D3-FINISH. Complete Domain 3 Learning Slides | In Progress - Lesson 4 | Preserve Lessons 1-3. Implement approved Lessons 4, 5 and 6 in sequence, focused checks after each, then full academic/desktop QA, regressions, coverage and preservation gate. No intermediate approval or Domain 4 work. |\n')
p=Path('docs/plans/isc2-cc-2026/domain-3-completion-report.md');assert not p.exists();p.write_text('''# Domain 3 Learning Slides — Completion Report

Date: 2026-10-30. Status: in progress; human acceptance pending.

## Approved execution plan

The user authorizes completing the approved L04→L05→L06 storyboard in this dirty workspace, without intermediate approval. Preserve L01–L03 and concurrent work. No roadmap regeneration, worktree recreation, commit or push.

1. Capture entry hashes, source/planning/academic review and existing 3.1 evidence.
2. L04: write failing focused behavior/source tests; author seven paired slides, meaningful permission/authority compositions and the approved scenario; register additively, review, verify focused checks.
3. L05: repeat for eight model-comparison/decision slides, preserving model/authority/clearance/role/context qualifications.
4. L06: repeat for six authentication/risk-evidence slides, explicitly sourced official application additions and qualified factor/anomaly decisions.
5. Real Chrome: all new slides EN/TH at1366×768/1920×1080, Presentation/Reading/Info, full scrolling, all feedback, representative Light/Dark, keyboard/fullscreen/language, independent six-lesson progress/reload/direct Resume. Reuse valid unchanged L01–L03 evidence and perform final navigation smoke checks across all six.
6. Run final focused/shared/D1–D2 regression checks; audit all42 bilingual slides against eight official bullets and two application clusters; compare entry hashes, finish matrix/report/manifest/tracker and stop.

Use existing JSON/DOM/ES-module architecture. A new Domain3-private helper and stylesheet may serve the three new lessons only; no protected helper extraction or engine/schema/progress redesign. The entry snapshot and exact approved IDs are in artifacts/qa/domain-3-completion/.
''',encoding='utf-8')
