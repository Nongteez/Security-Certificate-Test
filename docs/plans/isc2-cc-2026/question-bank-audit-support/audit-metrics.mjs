// Read-only analysis; writes only documentation-side evidence. Not an authoring/export tool.
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const root=process.cwd(),out=path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/,'$1'));
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8').replace(/^\uFEFF/,''));
const qs=read('tmp/audit-questions.json');
const meta=new Map();
for(const d of[3,4]){
  const {drafts}=await import(pathToFileURL(path.join(root,`content/isc2-cc-2026/questions/domain-${d}-draft.mjs`)));
  for(const q of drafts)meta.set(q.id,{objective:q.objective,topic:q.concept,decision:q.decision,sourceMetadata:`content/isc2-cc-2026/questions/domain-${d}-draft.mjs`,sources:q.sources,knowledge:q.knowledge,style:q.type||'scenario'});
}
for(const q of read('content/isc2-cc-2026/sources/domain-5/production/authoring-manifest.json'))meta.set(q.id,{objective:q.objective,topic:q.family,decision:q.assessedDecision,sourceMetadata:'content/isc2-cc-2026/sources/domain-5/production/authoring-manifest.json',sources:q.sourceEvidence,style:q.stemType,difficulty:q.difficulty,cognitive:q.cognitive,status:q.status});
const candidates=read('content/isc2-cc-2026/sources/domain-2/phase-7/domain-2-revalidated-candidate-bank.json');
for(const q of qs.filter(q=>q.dom===2)){
 const match=candidates.find(c=>c.question===q.question);
 if(match)meta.set(q.id,{objective:match.objective,topic:match.opp_id,sourceMetadata:'content/isc2-cc-2026/sources/domain-2/phase-7/domain-2-revalidated-candidate-bank.json',sources:match.source_evidence,style:'scenario'});
}
for(const q of qs.filter(q=>q.dom===1))meta.set(q.id,{objective:q.id<=590?'1.1':q.id<=596?'1.2':q.id<=600?'1.3':q.id<=605?'1.4':'1.5',sourceMetadata:'content/isc2-cc-2026/questions/domain-1.md',style:q.id===597?'concept':'scenario'});
// Audit inference from the current stems; these 13 items are absent from the 26-item candidate snapshot.
for(const q of qs.filter(q=>q.id>=634&&q.id<=646))meta.set(q.id,{objective:q.id<=636?'2.1':q.id<=639?'2.2':q.id<=643?'2.3':'2.4',sourceMetadata:'auditor inference from current question; not historical candidate metadata',style:'scenario'});
const normalize=s=>s.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const words=s=>normalize(s).split(/\s+/);
const metrics=qs.map(q=>{
 const lengths=q.options.map(o=>words(o).length),max=Math.max(...lengths),sorted=[...lengths].sort((a,b)=>b-a);
 const incorrect=q.explanation_detail?.incorrect||[],expected=['A','B','C','D'].filter((_,i)=>i!==q.correct_idx);
 return {id:q.id,domain:q.dom,...meta.get(q.id),key:'ABCD'[q.correct_idx],stemWords:words(q.question).length,optionWords:lengths,correctUniquelyLongest:lengths[q.correct_idx]===max&&lengths.filter(n=>n===max).length===1,correctLengthRatio:lengths[q.correct_idx]/Math.max(1,sorted[1]),schemaValid:q.options.length===4&&q.options_th?.length===4&&new Set(q.options.map(normalize)).size===4&&q.correct_idx>=0&&q.correct_idx<4&&incorrect.length===3&&expected.every(l=>incorrect.some(i=>i.letter===l))&&[q.question,q.question_th,q.explanation,q.explanation_th,q.short_explanation_en,q.explanation_detail?.correct?.en,q.explanation_detail?.correct?.th,...incorrect.flatMap(i=>[i.text_en,i.text_th])].every(s=>typeof s==='string'&&s.trim()),absoluteOptions:q.options.map((o,i)=>/\b(always|never|guarantee|completely|entirely|every|zero|exclusively)\b/i.test(o)?'ABCD'[i]:null).filter(Boolean)};
});
const stop=new Set('a an the and or of in on to for from with by as is are was were it its this that which what should most best first following organization company enterprise security cybersecurity would how can be has have at not only than all will their into'.split(' '));
const docs=qs.map(q=>words(q.question+' '+q.options[q.correct_idx]).filter(w=>!stop.has(w)));
const df=new Map();for(const d of docs)for(const w of new Set(d))df.set(w,(df.get(w)||0)+1);
const vecs=docs.map(d=>{const counts=new Map();for(const w of d)counts.set(w,(counts.get(w)||0)+1);let norm=0;for(const[w,n]of counts){const v=(1+Math.log(n))*Math.log(1+qs.length/(df.get(w)||1));counts.set(w,v);norm+=v*v;}return {counts,norm:Math.sqrt(norm)};});
const pairs=[];
for(let i=0;i<qs.length;i++)for(let j=i+1;j<qs.length;j++){
 const a=vecs[i],b=vecs[j];let dot=0;for(const[w,v]of a.counts)dot+=v*(b.counts.get(w)||0);
 const cosine=dot/(a.norm*b.norm);pairs.push({a:qs[i].id,b:qs[j].id,cosine:Number(cosine.toFixed(4)),sameDomain:qs[i].dom===qs[j].dom,exactStem:normalize(qs[i].question)===normalize(qs[j].question)});
}
pairs.sort((a,b)=>b.cosine-a.cosine);
fs.writeFileSync(path.join(out,'question-metrics.json'),JSON.stringify(metrics,null,2));
fs.writeFileSync(path.join(out,'similarity-candidates.json'),JSON.stringify(pairs.slice(0,80),null,2));
const counts={};for(const q of metrics){const d=counts[q.domain]||={count:0,keys:{},objectives:{},longest:0,invalid:0};d.count++;d.keys[q.key]=(d.keys[q.key]||0)+1;d.objectives[q.objective||'UNMAPPED']=(d.objectives[q.objective||'UNMAPPED']||0)+1;d.longest+=q.correctUniquelyLongest;d.invalid+=!q.schemaValid;}
console.log(JSON.stringify({counts,total:qs.length,uniqueIds:new Set(qs.map(q=>q.id)).size,uniquelyLongestCorrect:metrics.filter(q=>q.correctUniquelyLongest).length,stemOver80Words:metrics.filter(q=>q.stemWords>80).map(q=>q.id),unmapped:metrics.filter(q=>!q.objective).map(q=>q.id),topPairs:pairs.slice(0,25)},null,2));
