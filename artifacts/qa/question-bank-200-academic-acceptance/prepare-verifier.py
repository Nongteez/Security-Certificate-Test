import pathlib
ROOT=pathlib.Path(__file__).resolve().parents[3];OUT=pathlib.Path(__file__).resolve().parent
s=(ROOT/'tools/verify-question-bank-200.mjs').read_text(encoding='utf-8')
head=s[:s.index("test('staged43")].replace("'../","'../../../")
head=head.replace("const before=read('questions.before.json'),candidates=read('candidates.json');","const before=JSON.parse(fs.readFileSync('artifacts/qa/question-bank-200-academic-acceptance/questions.entry.json','utf8')),candidates=read('candidates.json');\nconst acceptance='artifacts/qa/question-bank-200-academic-acceptance/';\nconst expected=JSON.parse(fs.readFileSync(acceptance+'questions.expected.json','utf8'));\nconst approved=()=>assert.deepEqual(bank,expected,'Only the reviewed expected field values may differ from entry');")
body=r'''
test('all200 match exactly the reviewed SAFE field values; no unapproved data drift',()=>{approved();assert.equal(bank.length,200);});
test('all IDs keys domains and per-domain ordering remain unchanged; all six deferred records stay intact',()=>{
 assert.deepEqual(bank.map(q=>[q.id,q.dom,q.correct_idx]),before.map(q=>[q.id,q.dom,q.correct_idx]));
 for(const id of [614,627,619,629,630,637])assert.deepEqual(bank.find(q=>q.id===id),before.find(q=>q.id===id));
 for(const q of bank){const old=before.find(v=>v.id===q.id);assert.deepEqual(q.options_th,old.options_th);if(q.id!==679)assert.deepEqual(q.options,old.options);}
});
test('156 unaffected records are byte-identical; only D1 D2 D4 contain bounded edits',()=>{
 const ids=new Set(expected.filter(q=>JSON.stringify(q)!==JSON.stringify(before.find(v=>v.id===q.id))).map(q=>q.id));assert.equal(ids.size,44);
 let preserved=0;
 const slices=s=>new Map([...s.matchAll(/^  \{\r?\n    "id": (\d+),[\s\S]*?^  \}(?=,?\r?$)/gm)].map(m=>[Number(m[1]),m[0]]));
 for(let d=1;d<=5;d++){const old=slices(fs.readFileSync(acceptance+`domain-${d}.before.js`,'utf8')),now=slices(fs.readFileSync(`data/certs/isc2/cc/versions/next-bank/questions/domain-${d}.js`,'utf8'));for(const[id,raw]of old)if(!ids.has(id)){assert.equal(now.get(id),raw,`Q${id}`);preserved++;}}
 assert.equal(preserved,156);assert.equal(bank.filter(q=>q.id>=1041).length,43);assert.deepEqual(bank.filter(q=>q.id>=1041),candidates);
});
test('negative guards reject key content and field drift, and all200 pass current schema',()=>{
 for(const f of [q=>q.correct_idx=(q.correct_idx+1)%4,q=>q.question+=' extra',q=>q.options.reverse(),q=>q.extra=true]){const clone=structuredClone(bank);f(clone[0]);assert.throws(()=>assert.deepEqual(clone,expected));}
 bank.forEach(q=>validate(q,q.id>=1041));
});
test('configured totals remain48/40/31/41/40 and exactly200',()=>{assert.equal(config.totalQuestions,200);assert.equal(config.defaultQuestionCount,200);assert.deepEqual(config.domains.map(d=>d.questionCount),[48,40,31,41,40]);assert.deepEqual(config.domains.map(d=>d.questionThCount),[48,40,31,41,40]);assert.deepEqual(Object.values(bankByDomain).map(q=>q.length),[48,40,31,41,40]);});
'''
tail=s[s.index("test('all200 objectives"):s.index("test('all source, UI")]
protection=r'''
test('all academic sources UI engine legacy vocabulary slides metadata config tests and prior evidence remain byte-identical',()=>{
 const allowed=new Set(['docs/plans/task.md',...[1,2,4].map(d=>`data/certs/isc2/cc/versions/next-bank/questions/domain-${d}.js`)]);
 const hashes=JSON.parse(fs.readFileSync(acceptance+'entry-hashes.json','utf8'));
 for(const[p,h]of Object.entries(hashes))if(!allowed.has(p))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),h,p);
});
'''
(OUT/'verify-acceptance.mjs').write_text(head+body+tail+protection,encoding='utf-8')
print('Prepared acceptance-specific verifier; original release verifier remains unchanged')
