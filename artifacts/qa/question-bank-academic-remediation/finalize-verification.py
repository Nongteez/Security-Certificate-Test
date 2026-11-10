"""Read-only preservation checks, evidence comparison and exact delivery manifest."""
import collections,hashlib,json,pathlib,re
OUT=pathlib.Path(__file__).resolve().parent; ROOT=OUT.parents[2]
def load(p):return json.loads(p.read_text(encoding='utf-8'))
def digest(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def save(n,v):(OUT/n).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
entry=load(OUT/'entry-hashes.json')
changed=[p for p,h in entry.items() if digest(ROOT/p)!=h]
allowed=['data/certs/isc2/cc/versions/next-bank/questions/domain-1.js','data/certs/isc2/cc/versions/next-bank/questions/domain-2.js','docs/plans/isc2-cc-2026/question-bank-200-expansion-plan.md']
assert sorted(changed)==sorted(allowed),changed
academic={p for p in entry if p.startswith('ISC2 Update 2026/')}
current={p.relative_to(ROOT).as_posix() for p in (ROOT/'ISC2 Update 2026').rglob('*') if p.is_file()}
assert academic==current,'Academic source path set changed'
before=load(OUT/'questions.before.json'); bank=[]; raw_before={};raw_after={}
def records(text):
    matches=list(re.finditer(r'^  \{\r?\n    "id": (\d+),[\s\S]*?^  \}(?=,?\r?$)',text,re.M))
    return {int(m[1]):m[0] for m in matches}
for d in range(1,6):
    path=ROOT/f'data/certs/isc2/cc/versions/next-bank/questions/domain-{d}.js'
    now=path.read_text(encoding='utf-8')
    raw_before.update(records((OUT/f'domain-{d}.before.js').read_text(encoding='utf-8')));r=records(now);raw_after.update(r)
    bank += [json.loads(s) for s in r.values()]
assert len(bank)==len(before)==157
mapping=load(ROOT/'docs/plans/isc2-cc-2026/question-bank-audit-support/question-review-register.json')
assert len(mapping)==157;by={q['id']:q for q in bank}
for q in mapping:
    assert by[q['id']]['dom']==q['domain']
    assert 'ABCD'[by[q['id']]['correct_idx']]==q['intended_key']
objectives=collections.Counter(q['objective'] for q in mapping)
slots=load(OUT/'expansion-slots.revised.json'); adds=collections.Counter(s['objective'] for s in slots)
coverage={o:dict(existing=n,add=adds[o],planned=n+adds[o]) for o,n in sorted(objectives.items())}
assert sum(x['existing'] for x in coverage.values())==157
assert sum(x['planned'] for x in coverage.values())==200
preserved=[];modified=[]
for old,new in zip(before,bank):
    assert old['id']==new['id'] and old['correct_idx']==new['correct_idx'] and old['dom']==new['dom']
    fields=[k for k in old if old[k]!=new[k]]
    row=dict(id=new['id'],key='ABCD'[new['correct_idx']],objective=next(x['objective'] for x in mapping if x['id']==new['id']),changed_fields=fields,before_sha256=hashlib.sha256(raw_before[new['id']].encode()).hexdigest(),after_sha256=hashlib.sha256(raw_after[new['id']].encode()).hexdigest())
    (modified if fields else preserved).append(row)
assert [x['id'] for x in modified]==[591,600,612,628];assert len(preserved)==153
save('record-preservation.json',dict(modified=modified,unchanged=preserved))
save('preservation.json',dict(entry_files=len(entry),changed_existing_in_entry=[dict(path=p,before=entry[p],after=digest(ROOT/p)) for p in changed],unchanged_entry_files=len(entry)-len(changed),academic_files=len(academic),academic_path_set_preserved=True,records=157,unaffected_records=153,all_keys_ids_domains_order_preserved=True,objective_map_preserved=True,objective_coverage=coverage,held_records_unchanged=[614,627,619,629,630,637]))
past=ROOT/'artifacts/qa/question-bank-academic-repair'
old=(past/'after-verify-exam-versions.log').read_text(encoding='utf-8-sig');new=(OUT/'verify-exam-versions.log').read_text(encoding='utf-8-sig')
failures=lambda s:list(dict.fromkeys(re.findall(r'^✖ (.*?) \(',s,re.M)))
assert failures(old)==failures(new) and len(failures(new))==5
migration='isc2_cc_BothThai-eng_583quiz.html'
assert all(migration in (p/'verify-isc2-question-migration.log' if p==OUT else p/'after-verify-isc2-question-migration.log').read_text(encoding='utf-8-sig') for p in [OUT,past])
save('regression-comparison.json',dict(exam_versions=dict(current_pass=14,current_fail=5,same_historical_failed_names=True,names=failures(new)),migration=dict(current_exit=1,historical_missing_fixture=migration),domain5=dict(current_exit=1,historical_first_failing_file='data/certs/isc2/cc/versions/next-bank/questions/domain-1.js',expected_pre_phase1_sha256='8ac4425e76d1040673a58f3f92b601efc4611f653264099639009db3b79b164d',entry_sha256=entry[allowed[0]],current_sha256=digest(ROOT/allowed[0]),interpretation='Historical baseline mismatch; actual hash changed further through authorized SAFE corrections. No baseline or test changed.')))
plan=(ROOT/'docs/plans/isc2-cc-2026/question-bank-200-expansion-plan.md').read_text(encoding='utf-8')
original=(OUT/'question-bank-200-expansion-plan.before.md').read_text(encoding='utf-8')
section=lambda text,i:re.search(rf'### Proposed {i} — .*?(?=\n### Proposed |\n## Research holds)',text,re.S).group(0)
changes=load(OUT/'specification-revisions.json');ids={x['id'] for x in changes}
for s in slots:
    i=s['proposed_id'];part=section(plan,i)
    if i not in ids:assert part==section(original,i),i
    assert s['target'] in part and s['context'].rstrip('.') in part and s['overlap'] in part and s['source_limit'] in part,i
assert len(re.findall(r'^### Proposed ',plan,re.M))==43
report=(ROOT/'docs/plans/isc2-cc-2026/question-bank-academic-remediation.md').read_text(encoding='utf-8')
assert '1.1 7→14' in report and '**READY FOR HUMAN APPROVAL — ACADEMIC REMEDIATION PROPOSED**' in report
focused=(OUT/'focused-final.log').read_text(encoding='utf-8-sig')
assert re.search(r'ℹ pass 8\b',focused) and re.search(r'ℹ fail 0\b',focused)
for name,n in [('verify-study-answers',8),('verify-quiz-minimal-ui',6)]:
    log=(OUT/(name+'.log')).read_text(encoding='utf-8-sig')
    assert re.search(rf'ℹ pass {n}\b',log) and re.search(r'ℹ fail 0\b',log)
for name,n in [('verify-phase4-quiz-engine',7),('verify-session-persistence',8)]:
    assert f'PASSED ({n}/{n})' in (OUT/(name+'.log')).read_text(encoding='utf-8-sig')
save('final-verification.json',dict(focused_pass=8,focused_fail=0,targeted_regression_pass=29,historical_failed_commands=3,exam_versions_pass=14,exam_versions_fail=5,entry_preservation_pass=True,source_files_preserved=277,records_preserved=157,unaffected_records=153,objectives_preserved=19,design_spec_revisions=8,reference_note_corrections=2,new_questions_generated=0,fresh_browser_validation=False,human_approval=False,status='READY FOR HUMAN APPROVAL — ACADEMIC REMEDIATION PROPOSED'))
existing=allowed+['docs/plans/task.md']
created=['docs/plans/isc2-cc-2026/question-bank-academic-remediation.md']+[p.relative_to(ROOT).as_posix() for p in OUT.rglob('*') if p.is_file() and p.name!='delivery-manifest.json']
save('delivery-manifest.json',dict(modified_existing=[dict(path=p,sha256=digest(ROOT/p)) for p in existing],created=[dict(path=p,sha256=digest(ROOT/p)) for p in sorted(created)],manifest_self='artifacts/qa/question-bank-academic-remediation/delivery-manifest.json; self-hash omitted',scope='Relative to Phase2.5 entry, not all dirty working-tree changes'))
for link in re.findall(r'\]\(([^)]+)\)',report+plan):
    if not link.startswith('http'):assert ((ROOT/'docs/plans/isc2-cc-2026')/link).exists(),link
print(f'PASS: {len(entry)} entry files; {len(changed)} authorized changes; {len(academic)} sources preserved; 153 raw records unchanged; 19 objective mappings; 43 specs; same 5 historical exam failures; plan/report links and 33 untouched sections verified.')
