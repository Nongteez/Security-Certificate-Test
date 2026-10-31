import fs from 'node:fs';
const q='artifacts/qa/domain-4-completion/';
let a=fs.readFileSync('artifacts/qa/domain-3-completion/browser-session.mjs','utf8');
a=a.replaceAll('domain-3-completion','domain-4-completion').replaceAll('4213','4214').replaceAll('9243','9244');fs.writeFileSync(q+'browser-session.mjs',a);
a=fs.readFileSync('artifacts/qa/domain-3-completion/browser-matrix.mjs','utf8');
a=a.replaceAll('domain-3-completion','domain-4-completion').replaceAll('learning-domain-3','learning-domain-4').replaceAll('data-d3-logical','data-d4').replaceAll('.d3l-','.d4-');
a=a.replace("await click(id.includes('-0'+(id.includes('-04-')?4:id.includes('-05-')?5:6)+'-')&&/lesson-d3-0[456]-/.test(id)?'#learning-objective-3-2':'#learning-objective-3-1');","await click('#learning-objective-4-'+(Number(id.split('-')[2])<=4?1:Number(id.split('-')[2])<=6?2:3));");
a=a.replaceAll("choice===2?'recommended'","choice===[1,2,0,3,1,2,0,3,1][Number(lessonNumber)-1]?'recommended'");
fs.writeFileSync(q+'browser-matrix.mjs',a);
