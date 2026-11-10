"""Verify audit evidence and preservation; never modifies bank or academic sources."""
from pathlib import Path
import json, hashlib, re, subprocess
from collections import Counter

OUT=Path(__file__).resolve().parent
ROOT=OUT.parents[3]
def read(p): return json.loads(p.read_text(encoding='utf-8-sig'))
def dump(p,data): p.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
register=read(OUT/'question-review-register.json')
slots=read(OUT/'expansion-slots.json')
baseline=read(OUT/'protected-before.json')
node="""
import {loadQuestionsForDomains} from './js/core/question-loader.js';
import {renderExplanation2026Content} from './js/ui/components/explanation-2026.js';
const banks={};
for(const version of ['next-bank','2026']) banks[version]=Object.values(await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version,domainIds:[1,2,3,4,5]})).flat();
const q=banks['next-bank'].find(q=>q.id===588);
console.log(JSON.stringify({banks,rendered588:{en:renderExplanation2026Content(q,'en'),th:renderExplanation2026Content(q,'th')}}));
"""
run=subprocess.run(['node','--input-type=module','-e',node],cwd=ROOT,capture_output=True,encoding='utf-8')
assert run.returncode==0,run.stderr
live=json.loads(run.stdout)
qs=live['banks']['next-bank']
assert len(qs)==157 and len({q['id'] for q in qs})==157
assert {q['id'] for q in qs}=={r['id'] for r in register} and len(register)==157
assert len({r['objective'] for r in register})==19
assert all(r['objective'].startswith(str(r['domain'])+'.') for r in register)
expected_keys={'id','dom','question','options','correct_idx','explanation','short_explanation_en','question_th','options_th','explanation_th','explanation_detail'}
for q in qs:
    assert set(q)==expected_keys,q['id']
    assert len(q['options'])==len(q['options_th'])==4
    assert type(q['correct_idx']) is int and 0<=q['correct_idx']<4
    assert len(set(q['options']))==len(set(q['options_th']))==4
    assert all(isinstance(q[k],str) and q[k].strip() for k in ['question','question_th','explanation','explanation_th','short_explanation_en'])
    assert all(re.search('[\u0e00-\u0e7f]',v) for v in [q['question_th'],q['explanation_th']])
    # Proper names such as ISO/IEC 27001 legitimately stay English in Thai options.
    for v in q['options_th']:
        assert v.strip() and (re.search('[\u0e00-\u0e7f]',v) or q['id']==611),q['id']
    detail=q['explanation_detail']
    assert all(detail['correct'][lang].strip() for lang in ['en','th'])
    assert sorted(r['letter'] for r in detail['incorrect'])==[l for i,l in enumerate('ABCD') if i!=q['correct_idx']]
    assert all(r['text_en'].strip() and r['text_th'].strip() for r in detail['incorrect'])
assert 'Accounting' in live['rendered588']['en']
assert 'การบันทึก' in live['rendered588']['th']
assert 'PIN' in next(q for q in qs if q['id']==588)['question']
normal=lambda s: re.sub(r'[^\w]+',' ',s.casefold()).strip()
assert len({normal(q['question']) for q in qs})==157
assert len(slots)==43 and [s['proposed_id'] for s in slots]==list(range(1041,1084))
assert Counter(s['domain'] for s in slots)==Counter({1:24,2:1,3:8,4:8,5:2})
assert not {s['proposed_id'] for s in slots}&{q['id'] for bank in live['banks'].values() for q in bank}
for slot in slots:
    assert not {'question','options','correct_idx','explanation'}&set(slot),'Plan must not contain authored items'
    assert slot['objective'] in {r['objective'] for r in register}
    src=slot['source'];lines=(ROOT/src['path']).read_text(encoding='utf-8-sig').splitlines()
    assert lines[src['line']-1].lstrip('# ')==src['heading'],src
    assert slot['overlap'] and slot['source_limit'] and slot['context']
collisions=[]
for base in ['content','data']:
    for path in (ROOT/base).rglob('*'):
        if path.suffix not in ['.js','.mjs','.json']:continue
        for m in re.finditer(r'''["']?id["']?\s*:\s*(\d+)\b''',path.read_text(encoding='utf-8-sig')):
            if int(m[1]) in range(1041,1084):collisions.append(str(path.relative_to(ROOT)))
assert not collisions,collisions
for name in ['question-bank-157-audit.md','isc2-question-authoring-standard.md','question-bank-200-expansion-plan.md']:
    s=(OUT.parent/name).read_text(encoding='utf-8')
    assert 'READY FOR HUMAN REVIEW — EXPANSION NOT AUTHORIZED.' in s
    assert '\ufffd' not in s
changed=[]
for p,sha in baseline.items():
    path=ROOT/p
    if not path.exists() or hashlib.sha256(path.read_bytes()).hexdigest()!=sha:changed.append(p)
assert not changed,changed
inventory=read(OUT/'local-source-inventory.json')
now={str(p.relative_to(ROOT)).replace('\\','/') for p in (ROOT/'ISC2 Update 2026').rglob('*') if p.is_file() and any(f'Domain {d}' in p.parts for d in range(1,6))}
assert now=={r['path'] for r in inventory} and len(now)==277
verification={'status':'PASS documentation/evidence consistency and entry-state preservation; NOT academic acceptance','current_records':len(qs),'unique_ids':157,'objective_counts':dict(sorted(Counter(r['objective'] for r in register).items())),'source_files':277,'source_kinds':dict(Counter(r['kind'] for r in inventory)),'review_rows':157,'planned_slots':43,'planned_ids':[1041,1083],'proposed_id_collisions':collisions,'added_by_domain':dict(Counter(s['domain'] for s in slots)),'planned_total':200,'protected_files_compared':len(baseline),'protected_files_changed':changed,'schema_checks':'157 pass, including Thai presence and letter shape; semantic correctness not certified','semantic_diagnostic':'Q588 real renderer reproduces unrelated Accounting explanation in EN and TH; known defect remains','exact_normalized_english_stem_duplicates':0,'bilingual_qualifier_warning':[1018],'open_gates':['independent blind solving','full independent bilingual semantic review','remaining source-image/paragraph review as applicable to proposed claims','existing critical/high issue repairs','historical regression failures','human approval before generation']}
dump(OUT/'verification.json',verification)
print(json.dumps(verification,ensure_ascii=True,indent=2))
