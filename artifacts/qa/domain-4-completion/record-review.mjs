// Run only after actually viewing the named sheets. Record hashes so retakes invalidate old review evidence.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
const q='artifacts/qa/domain-4-completion/',p=q+'visual-review-log.json';const old=fs.existsSync(p)?JSON.parse(fs.readFileSync(p,'utf8')):[];
for(const pattern of process.argv.slice(2)){
 const re=new RegExp('^'+pattern.replace(/[.+?^${}()|[\]\\]/g,'\\$&').replaceAll('*','.*')+'$');
 for(const file of fs.readdirSync(q).filter(f=>re.test(f)&&f.endsWith('.png'))){const sha256=createHash('sha256').update(fs.readFileSync(q+file)).digest('hex');if(!old.some(r=>r.file===file&&r.sha256===sha256))old.push({file,sha256,reviewer:'Codex — screenshot inspection, not human acceptance',reviewedAt:new Date().toISOString(),result:'No clipping/overlap/contrast defect visible in these captured regions; educational text reviewed separately.'});}
}fs.writeFileSync(p,JSON.stringify(old,null,2)+'\n');console.log(old.length+' reviewed sheet versions');
