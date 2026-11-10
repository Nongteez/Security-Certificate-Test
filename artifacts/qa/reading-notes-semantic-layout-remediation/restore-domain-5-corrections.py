from repair_helpers import *
results=[]
for batch in ['reading-notes-phase-3a-domain-5','reading-notes-phase-3a-domain-5-batch-2','reading-notes-phase-3a-domain-5-batch-3']:
 for c in json.loads((OUT.parent/batch/'exact-changes.json').read_text(encoding='utf-8')):
  path=c['path'];old=c.get('before',c.get('original'));new=c.get('after',c.get('corrected',c.get('replacement')));s=(ROOT/path).read_text(encoding='utf-8')
  if s.count(old)==1:
   change(path,old,new,'Restore current '+c.get('finding','approved D5')+' academic correction after verifying the exact erroneous text was reintroduced; preserve surrounding new visuals/examples.');results.append({'finding':c.get('finding'),'path':path,'status':'restored exact verified correction'})
  elif new in s:results.append({'finding':c.get('finding'),'path':path,'status':'already correct; left unchanged'})
  else:results.append({'finding':c.get('finding'),'path':path,'status':'requires current-context review'})
(OUT/'domain5-prior-correction-reconciliation.json').write_bytes((json.dumps(results,ensure_ascii=False,indent=2)+'\n').encode())
print(json.dumps({'restored':sum(r['status'].startswith('restored')for r in results),'alreadyCorrect':sum(r['status'].startswith('already')for r in results),'needsReview':[r for r in results if r['status'].startswith('requires')]},indent=2))
