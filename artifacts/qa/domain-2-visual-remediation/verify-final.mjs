import fs from 'node:fs';import {createHash} from 'node:crypto';import assert from 'node:assert/strict';
const dir='artifacts/qa/domain-2-visual-remediation';const entry=JSON.parse(fs.readFileSync(dir+'/entry-integrity.json'));
const allowed=['css/learning-grc-foundations.css','css/learning-grc-tools-risk-register.css','css/learning-business-continuity-bcp.css','css/learning-disaster-recovery-drp.css','docs/plans/task.md'];
const changed=[],missing=[],errors=[];
for(const [p,h]of Object.entries(entry)){try{if(!fs.existsSync(p)){missing.push(p);continue;}const now=createHash('sha256').update(fs.readFileSync(p)).digest('hex');if(now!==h)changed.push(p);}catch(e){errors.push({path:p,error:e.message});}}
const result={entryFiles:Object.keys(entry).length,unchanged:Object.keys(entry).length-changed.length-missing.length-errors.length,changed,missing,errors,unexpected:changed.filter(p=>!allowed.includes(p))};
fs.writeFileSync(dir+'/final-preservation.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));assert.deepEqual(result.unexpected,[]);assert.deepEqual(missing,[]);assert.deepEqual(errors,[]);
const surfaces=[1,2,3,4].flatMap(i=>JSON.parse(fs.readFileSync(dir+`/surfaces-L${i}.json`)));assert.equal(surfaces.length,112);assert(surfaces.every(c=>c.presentation.custom&&c.restored&&c.readingChars>300));
const info=[...JSON.parse(fs.readFileSync(dir+'/info-L3.json')),...[1,2,4].flatMap(i=>[1366,1920].flatMap(s=>JSON.parse(fs.readFileSync(dir+`/info-L${i}-${s}.json`))))];assert.equal(info.length,112);assert(info.every(c=>c.chars>300));
const feedback=[1,2,3,4].flatMap(i=>JSON.parse(fs.readFileSync(dir+`/feedback-L${i}.json`)));assert.equal(feedback.length,64);assert(feedback.every(c=>c.metrics.custom&&c.metrics.bottom<=c.metrics.footerTop&&c.text.length>80));
const scroll=[1,2,3,4].flatMap(i=>JSON.parse(fs.readFileSync(dir+`/reading-scroll-L${i}.json`)));assert.equal(scroll.length,16);assert(scroll.every(c=>c.metrics.top+c.metrics.height>=c.metrics.total-2));
const resume=JSON.parse(fs.readFileSync(dir+'/resume-navigation.json'));assert.equal(resume.length,5);assert(resume.every(c=>c.actual.includes(c.expected)&&(!c.afterPreviousNext||c.afterPreviousNext.includes(c.expected))));
const summary={presentationAndReading:surfaces.length,info:info.length,feedback:feedback.length,readingScroll:scroll.length,resume:resume.length};fs.writeFileSync(dir+'/qa-summary.json',JSON.stringify(summary,null,2));console.log(summary);
