import fs from 'node:fs';
import {drafts,stagedQuestions} from '../../../content/isc2-cc-2026/questions/domain-5-draft.mjs';
const old=[];for(const version of ['2026','next-bank'])for(let d=1;d<=5;d++){if(version==='next-bank'&&d===5)continue;old.push(...(await import(`../../../data/certs/isc2/cc/versions/${version}/questions/domain-${d}.js`)).default.map(q=>({...q,version})));}
const stop=new Set('a an the and or to of in on for with from by is are was were be been as at that this these those which what who how should most best first its their they it has have had can may must will would does do not only each all'.split(' '));
const tokens=q=>new Set((q.question+' '+q.options[q.correct_idx]).toLowerCase().replace(/[^a-z0-9]+/g,' ').split(' ').filter(t=>t.length>2&&!stop.has(t)));
const sim=(a,b)=>{let x=tokens(a),y=tokens(b);let n=[...x].filter(t=>y.has(t)).length;return n/(x.size+y.size-n)||0;};
const ranked=stagedQuestions.map(q=>({id:q.id,decision:drafts.find(d=>d.id===q.id).assessedDecision,existing:old.map(o=>({id:o.id,dom:o.dom,version:o.version,score:+sim(q,o).toFixed(3),stem:o.question,answer:o.options[o.correct_idx]})).sort((a,b)=>b.score-a.score).slice(0,4),within:stagedQuestions.filter(o=>o.id!==q.id).map(o=>({id:o.id,score:+sim(q,o).toFixed(3),stem:o.question})).sort((a,b)=>b.score-a.score).slice(0,2)}));
fs.writeFileSync('artifacts/qa/domain5-production/duplicate-candidates.json',JSON.stringify(ranked,null,2));
console.log(ranked.map(r=>`${r.id}: existing Q${r.existing[0].id}=${r.existing[0].score}; within Q${r.within[0].id}=${r.within[0].score}`).join('\n'));
fs.writeFileSync('artifacts/qa/domain5-production/old-bank-stems.json',JSON.stringify(old.map(q=>({id:q.id,version:q.version,dom:q.dom,question:q.question,correct:q.options[q.correct_idx]})),null,2));

