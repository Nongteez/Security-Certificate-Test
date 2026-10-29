import fs from 'node:fs';
const dir='artifacts/qa/domain-2-visual-remediation';
const inventory=JSON.parse(fs.readFileSync(dir+'/inventory.json'));
const cases=inventory.flatMap((l,li)=>l.slides.flatMap((s,si)=>[1366,1920].flatMap(size=>['EN','TH'].map(lang=>({lesson:li+1,slide:si+1,size,lang,filename:`final-L${li+1}-S${si+1}-${size}-${lang}.jpg`})))));
for(const c of cases)if(!fs.existsSync(dir+'/'+c.filename))throw Error(c.filename);
fs.writeFileSync(dir+'/final-image-index.json',JSON.stringify(cases,null,2));
