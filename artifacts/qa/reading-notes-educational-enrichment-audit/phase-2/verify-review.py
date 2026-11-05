"""Verify review artifacts and byte preservation; do not modify production."""
from pathlib import Path
import collections,hashlib,json,re,subprocess
OUT=Path(__file__).resolve().parent
ROOT=OUT.parents[3]
AUDIT=OUT.parent
DOCS=ROOT/'docs/plans/isc2-cc-2026'
def load(p):return json.loads(p.read_text(encoding='utf-8-sig'))
checks=[]
def check(name,ok,detail=None):checks.append({'name':name,'passed':bool(ok),'detail':detail})
d=load(OUT/'decisions.json');by={r['id']:r for r in d}
backlog=load(AUDIT/'prioritized-backlog.json')
plan=load(OUT/'implementation-plan.json')
media=load(OUT/'media-decisions.json')
check('Unique 75 reconciled packages',len(d)==len(by)==75)
check('56 original canonical IDs covered',len(backlog)==56 and all(r['id'] in by for r in backlog))
counts=dict(collections.Counter(r['decision'] for r in d))
check('Exactly one valid disposition each',set(counts)<= {'APPROVE','APPROVE WITH REVISION','REJECT','HOLD'})
check('Expected reconciled counts',counts=={'APPROVE':10,'APPROVE WITH REVISION':44,'REJECT':10,'HOLD':11},counts)
check('11 academic records with exact claims',len([r for r in d if r['category']=='Academic correction' and r.get('exactCurrentClaim')])==11)
check('19 explanation records with Thai and English samples',len([r for r in d if r['category']=='Explanation' and r['sample']['en'] and r['sample']['th']])==19)
check('13 practical examples with outcome, realism and format',len([r for r in d if r['category']=='Practical example' and r.get('learningOutcome') and r.get('realismAndFit') and r.get('recommendedMedia')])==13)
quote_results=[]
for r in d:
    q=r.get('exactCurrentClaim')
    if q:
        txt=(ROOT/q['path']).read_text(encoding='utf-8')
        quote_results.append({'id':r['id'],'present':q['text'] in txt,'startLineMatches':q['text'].splitlines()[0] in txt.splitlines()[q['startLine']-1]})
check('Exact academic quotations still match current files',all(q['present'] and q['startLineMatches'] for q in quote_results),quote_results)
target_errors=[]
for r in d:
    for t in r['targets']:
        p=ROOT/t['path']
        if not p.is_file():target_errors.append((r['id'],'missing path',t))
        elif t['path'].endswith('.md') and t['anchor'].startswith('topic-') and t['anchor'] not in p.read_text(encoding='utf-8'):target_errors.append((r['id'],'missing anchor',t))
check('All declared target files/anchors exist',not target_errors,target_errors)
ready={r['id'] for r in d if r['decision'].startswith('APPROVE')}
check('54 plan records exactly approved/revised; no held/rejected records',ready=={r['id'] for r in plan['items']} and len(ready)==54)
check('All dependencies exist and approved-plan dependencies are approved',all(dep in by for r in d for dep in r['dependencies']) and all(dep in ready for r in plan['items'] for dep in r['dependencies']))
batched=[id for b in plan['batches'] for id in b['findingIds']]
check('Every proposed implementation item assigned once to a batch',set(batched)==ready and len(batched)==len(set(batched)))
check('All records remain unauthorized',all(r['implementationAuthorized'] is False and r['userApprovalRequired'] is True for r in d))
required=['targets','smallestUsefulChange','recommendedMedia','supportingSources','academicConstraints','preserveExisting','acceptanceCriteria','dependencies','estimatedEffort']
check('Per-approved implementation specification complete',all(all(k in r and (r[k] or k=='dependencies') for k in required) for r in plan['items']))
check('13 manifest assets reviewed without acquisition approval',len(media)==13 and {r['id'] for r in media}=={r['id'] for r in load(AUDIT/'media-planning-manifest.json')} and all(r['implementationApproved'] is False and r['localStorageApproved'] is False for r in media))
check('Five diagram packages individually dispositioned',all(id in by for id in ['VIS-01','VIS-02','D2-A01','D4-M01','D5-M16']))
check('Four proposed image assets in three packages',all(id in by for id in ['D2-A02','IMG-HSM-PAIR','IMG-FW']) and all(id in {a['id'] for a in media} for id in ['D2-A02','IMG-HSM-NET','IMG-HSM-USB','IMG-FW']))
cross=load(OUT/'legacy-proposal-crosswalk.json')
check('No dangling legacy aliases',all(id in by for r in cross for id in r['decisionIds']))
obs=load(OUT/'legacy-observation-decisions.json')
check('All 67 numbered D1/D2 appendix observations explicitly dispositioned',len(obs)==67 and len({r['legacyId'] for r in obs})==67)
check('128 anchor observations preserved',len(load(OUT/'subsection-review-crosswalk.json'))==128)
report=(DOCS/'reading-notes-enrichment-human-review-preparation.md').read_text(encoding='utf-8')
check('Report A–I all present',all(re.search(r'^## '+letter+r'\. ',report,re.M) for letter in 'ABCDEFGHI'))
check('Every package visible in report',all(r['id'] in report for r in d))
check('No stale counts in deliverables',all(not re.search(r'\b(?:73 recommendations|Reviewed 73|nine HOLD|Nine HOLD|eleven finer legacy)',(DOCS/name).read_text(encoding='utf-8')) for name in ['reading-notes-enrichment-human-review-preparation.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']))
check('Report ends with exact requested boundary',report.rstrip().endswith('**Phase 2 Review Complete — Awaiting Explicit Human Approval for Implementation.**'))
baseline=load(OUT/'entry-baseline.json')
changed=[]
for item in baseline:
    p=ROOT/item['path']
    if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=item['sha256']:changed.append(item['path'])
check('All 30,800 entry files byte-identical, including 29 existing changes',len(baseline)==30800 and not changed,{'filesChecked':len(baseline),'changed':changed})
head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
check('HEAD unchanged',head=='d5d5f369d293716a43a072d11692f26b3618716c',head)
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=ROOT).decode('utf-8').split('\0')
untracked=subprocess.check_output(['git','ls-files','--others','--exclude-standard','-z'],cwd=ROOT).decode('utf-8').split('\0')
old={r['path'] for r in baseline}
new=sorted(p for p in tracked+untracked if p and p not in old)
allowed_docs={f'docs/plans/isc2-cc-2026/{name}' for name in ['reading-notes-enrichment-human-review-preparation.md','reading-notes-enrichment-progress.md','reading-notes-enrichment-handoff.md']}
check('New files confined to review artifacts and three required docs',all(p.startswith('artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/') or p in allowed_docs for p in new),new)
out={'status':'PASS' if all(c['passed'] for c in checks) else 'FAIL','checksPassed':sum(c['passed'] for c in checks),'checksTotal':len(checks),'decisions':counts,'checks':checks,'limitations':['Review artifacts and preservation checked; no production browser/render tests performed.','No claim of independent full-resolution reinspection of all source images or full-course sentence-level certification.']}
(OUT/'verification.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'status':out['status'],'passed':out['checksPassed'],'total':out['checksTotal'],'failed':[c for c in checks if not c['passed']]},ensure_ascii=False,indent=2))
raise SystemExit(0 if out['status']=='PASS' else 1)
