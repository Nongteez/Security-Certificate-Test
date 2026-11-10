import copy,datetime,json,pathlib,random
OUT=pathlib.Path(__file__).resolve().parent;ROOT=OUT.parents[2]
def read(p):return json.loads(p.read_text(encoding='utf-8'))
def save(n,v):(OUT/n).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
en=read(OUT/'english-authoring.json');th=read(OUT/'thai-authoring.json')
slots=read(ROOT/'artifacts/qa/question-bank-academic-remediation/expansion-slots.revised.json');sources=read(OUT/'source-excerpts.json')
positions=[0]*11+[1]*11+[2]*11+[3]*10;random.Random(20261106).shuffle(positions)
questions=[];metadata=[];worksheet=[]
for e,t,s,source,key in zip(en,th,slots,sources,positions):
 assert e['id']==t['id']==s['proposed_id']==source['id']
 order=list(range(1,4));order.insert(key,0)
 correct=dict(en=e['choices'][0]['reason'],th=t['choices'][0]['reason'])
 wrong=[dict(letter='ABCD'[i],text_en=e['choices'][j]['reason'],text_th=t['choices'][j]['reason']) for i,j in enumerate(order) if j!=0]
 flat_en=correct['en']+'\n\n'+'\n'.join(f'{r["letter"]}: {r["text_en"]}' for r in wrong)
 flat_th=correct['th']+'\n\n'+'\n'.join(f'{r["letter"]}: {r["text_th"]}' for r in wrong)
 q=dict(id=e['id'],dom=s['domain'],question=e['question'],options=[e['choices'][j]['text'] for j in order],correct_idx=key,explanation=flat_en,short_explanation_en=correct['en'],question_th=t['question'],options_th=[t['choices'][j]['text'] for j in order],explanation_th=flat_th,explanation_detail=dict(correct=correct,incorrect=wrong))
 questions.append(q)
 metadata.append(dict(id=q['id'],domain=q['dom'],objective=s['objective'],official_outline='ISC2 CC outline effective September 1, 2026',official_scope_url='https://www.isc2.org/certifications/cc/cc-certification-exam-outline',target=s['target'],cognitive=s['cognitive'],difficulty_estimate=s['difficulty'],source=source['source'],source_start=source['start'],source_end=source['end'],source_sha256=source['sha256'],supporting_claim=correct['en'],source_limit=s['source_limit'],overlap_control=s['overlap'],provenance='Original practice question; fictional scenario facts and supplied organizational rules; local academic support with primary corroboration where noted.',review_status='Separate same-agent academic/bilingual desk pass; independent academic and qualified Thai acceptance OPEN'))
 worksheet.append({k:q[k] for k in ['id','dom','question','options','question_th','options_th']})
save('candidates.json',questions);save('new-question-metadata.json',metadata);save('key-hidden-worksheet.json',dict(created_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),limitation='Keys and explanations omitted from worksheet only. Author has already seen keys; this is not independent blind review.',items=worksheet))
held=read(ROOT/'artifacts/qa/question-bank-academic-remediation/ten-question-review.json')
save('existing-six-decisions.json',[dict(id=r['id'],classification='SUBSTANTIVE — HUMAN APPROVAL REQUIRED',current_key=r['key'],objective=r['objective'],key_assessment=r['key_and_options_review'],target_impact=r['target_assessment'],source_refs=r['source_refs'],decision='Keep full current record unchanged. Master task permits expansion to continue with this explicitly unresolved issue.',exact_proposal_reference='artifacts/qa/question-bank-academic-remediation/ten-question-review.json',original_record_confirmed=next(q for q in read(OUT/'questions.before.json') if q['id']==r['id'])==r['before']) for r in held if not r['applied']])
assert all(x['original_record_confirmed'] for x in read(OUT/'existing-six-decisions.json'))
print('Staged 43 bilingual candidate records and worksheet; original157 untouched')
