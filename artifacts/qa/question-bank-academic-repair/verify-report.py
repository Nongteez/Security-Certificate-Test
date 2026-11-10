from pathlib import Path
import json,re
OUT=Path(__file__).resolve().parent;ROOT=OUT.parents[2]
read=lambda p:json.loads(p.read_text(encoding='utf-8'))
report=ROOT/'docs/plans/isc2-cc-2026/question-bank-157-academic-repair.md'
s=report.read_text(encoding='utf-8');p=read(OUT/'change-proposals.json');r=read(OUT/'record-preservation.json')['records'];pres=read(OUT/'preservation.json')
assert sorted(map(int,re.findall(r'^### Q(\d+)',s,re.M)))==sorted(x['id'] for x in p)
assert len(r)==157 and len({x['id'] for x in r})==157
assert sum(x['before_sha256']==x['after_sha256'] for x in r)==129
assert sum(x['raw_record_before_sha256']==x['raw_record_after_sha256'] for x in r)==129
assert set(read(OUT/'deferred-questions.json'))=={'619','629','630','637'}
assert sum(pres['objective_counts'].values())==157 and len(pres['objective_counts'])==19
assert pres['unchanged_protected_files']==1334
for key,(name,location,note) in read(OUT/'source-evidence.json').items():
 if not location.startswith('https:'):
  path,n=location.rsplit(':',1);lines=(ROOT/path).read_text(encoding='utf-8-sig').splitlines();assert 0<int(n)<=len(lines),key
for phase,n in [('before',205),('after',350)]:
 b=read(OUT/phase/'browser-results.json');assert len(b['checks'])==n and all(c['passed'] for c in b['checks']);assert len(b['matrix'])==144 and b['allContent']==471 and not b.get('error') and not b['exceptions'] and not b['consoleErrors']
 for row in b['matrix']:assert row['completeReasoning'] and row['overflow']==0
 assert len(list((OUT/phase).glob('*.png')))==24
for target in re.findall(r'\]\((\.\./\.\./\.\./artifacts/[^)]+)\)',s):assert (report.parent/target).resolve().exists(),target
assert '\ufffd' not in s
assert 'READY FOR HUMAN ACADEMIC REVIEW — EXPANSION NOT AUTHORIZED.' in s
assert 'This is not an independent blind solve' in s
assert '| Academic repair of existing 157-question next-bank | Ready for Human Academic Review' in (ROOT/'docs/plans/task.md').read_text(encoding='utf-8')
final={'status':'PASS — ready for human academic review, not accepted','records':157,'repaired':28,'unchanged_records_canonical_and_raw':129,'protected_unchanged_files':1334,'deferred':[619,629,630,637],'objective_mapping_count':19,'bank_changes_reapplied_on_resume':False,'new_questions_generated':0,'browser_evidence_reused_after_input_verification':True,'report_and_links_verified':True}
(OUT/'final-verification.json').write_text(json.dumps(final,indent=2)+'\n',encoding='utf-8')
manifest=read(OUT/'delivery-manifest.json');manifest['evidence_files']=sorted(str(p.relative_to(ROOT)).replace('\\','/') for p in OUT.rglob('*') if p.is_file());(OUT/'delivery-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(final,indent=2))
