import fs from'node:fs';import {parseMarkdown}from'../../../js/core/markdown-parser.js';
const problems=[];
for(let d=1;d<=5;d++){const source=fs.readFileSync(`content/isc2-cc-2026/reading/domain-${d}.md`,'utf8'),html=parseMarkdown(source);let previous=1;for(const m of html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)){const level=+m[1],text=m[2].replace(/<[^>]+>/g,'').trim();if(level>previous+1)problems.push({domain:d,previous,level,text,sourceHeading:source.includes(m[0])});previous=level;}}
fs.writeFileSync(new URL('./heading-audit.json',import.meta.url),JSON.stringify(problems,null,2)+'\n');console.log(JSON.stringify(problems.map(p=>({...p,text:p.text.slice(0,120)})),null,2));
