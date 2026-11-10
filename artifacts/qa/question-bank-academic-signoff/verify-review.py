"""Read-only production checks; writes evidence only in this review directory."""
from pathlib import Path
from collections import Counter
import json,hashlib,re,subprocess
OUT=Path(__file__).resolve().parent;ROOT=OUT.parents[2];DOC=ROOT/'docs/plans/isc2-cc-2026'
read=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
baseline=read(OUT/'entry-hashes.json')
changed=[p for p,h in baseline.items() if not (ROOT/p).exists() or hashlib.sha256((ROOT/p).read_bytes()).hexdigest()!=h]
assert not changed,changed
for prefix in ['data/','content/','js/','css/','assets/','tools/','ISC2 Update 2026/']:
 before={p for p in baseline if p.startswith(prefix)}
 now={str(p.relative_to(ROOT)).replace('\\','/') for p in (ROOT/prefix).rglob('*') if p.is_file()}
 assert now==before,(prefix,'Protected production/source inventory changed')
script="import {loadQuestionsForDomains} from './js/core/question-loader.js';console.log(JSON.stringify(Object.values(await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]})).flat()));"
current=json.loads(subprocess.check_output(['node','--input-type=module','-e',script],cwd=ROOT,encoding='utf-8'))
snapshot=read(OUT/'questions-review-snapshot.json');assert current==snapshot and len(current)==157 and len({q['id'] for q in current})==157
assert [sum(q['dom']==d for q in current) for d in range(1,6)]==[24,39,23,33,38]
r=read(OUT/'repaired-record-review.json');s=read(OUT/'specification-review.json');d=read(OUT/'deferred-proposed-revisions.json');summary=read(OUT/'review-summary.json')
assert len(r)==28 and len({q['id'] for q in r})==28 and all(q['agreement'] for q in r)
assert Counter(q['classification'] for q in r)=={'KEEP':22,'REVISE':6}
assert sorted(q['id'] for q in r if q['classification']=='REVISE')==[591,600,612,614,627,628]
assert set(d)=={'619','629','630','637'}
for q in d.values():
 assert q['classification']=='REVISE'
 for k in ['proposed_stem_en','proposed_stem_th','proposed_correct_en','proposed_correct_th','key_assessment','target_change']:assert q[k].strip()
 assert len(q['wrong_en'])==len(q['wrong_th'])==3
assert len(s)==43 and [q['proposed_id'] for q in s]==list(range(1041,1084))
assert Counter(q['status'] for q in s)=={'READY':35,'REVISE':8}
assert sorted(q['proposed_id'] for q in s if q['status']=='REVISE')==[1044,1045,1046,1051,1071,1078,1080,1082]
assert Counter(q['domain'] for q in s)=={1:24,2:1,3:8,4:8,5:2}
for q in s:
 assert not {'question','options','correct_idx','proposed_stem_en'}&set(q),'No new expansion question allowed'
 src=q['source'];line=(ROOT/src['path']).read_text(encoding='utf-8-sig').splitlines()[src['line']-1]
 assert line.lstrip('# ')==src['heading']
assert not summary['blind_independence_established'] and summary['bank_records_changed']==0
audit=read(DOC/'question-bank-audit-support/question-review-register.json');assert len({q['objective'] for q in audit})==19
assert hashlib.sha256((DOC/'question-bank-200-expansion-plan.md').read_bytes()).hexdigest()==summary['baseline_plan_sha256']
for name in ['question-bank-academic-signoff.md','question-bank-200-expansion-plan-review.md']:
 text=(DOC/name).read_text(encoding='utf-8');assert '\ufffd' not in text
 assert all(str(q['id']) in (DOC/'question-bank-academic-signoff.md').read_text(encoding='utf-8') for q in r)
assert 'BLOCKED — ACADEMIC ISSUES REMAIN' in (DOC/'question-bank-academic-signoff.md').read_text(encoding='utf-8')
for log in ['read-only-repair-tests.log','read-only-study-tests.log']:
 text=(OUT/log).read_text(encoding='utf-8');assert re.search(r'pass 8',text) and re.search(r'fail 0',text)
result={'status':'PASS review consistency and read-only preservation; academic sign-off BLOCKED','protected_existing_files':len(baseline),'protected_files_changed':changed,'production_source_inventory_unchanged':True,'questions_unchanged':157,'ids_keys_option_order_domains_unchanged':True,'objective_mappings_unchanged':19,'reviewed_repaired':28,'key_agreement':28,'KEEP':22,'REVISE':6,'deferred_reviewed':4,'deferred_classification':'REVISE for all four','specifications':43,'specification_READY':35,'specification_REVISE':8,'new_questions_generated':0,'blind_independence_established':False,'read_only_tests_passed':16,'historical_browser_checks_rerun':False}
(OUT/'verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(result,ensure_ascii=True,indent=2))
