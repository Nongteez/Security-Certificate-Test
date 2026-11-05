import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import realAssert from 'node:assert/strict';
import {diagrams}from '../../../js/core/diagram-generator.js';import {applyDiagramClarifications}from '../../../tools/reading-fidelity-clarifications.mjs';
const OUT=path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/i,'$1'));let current;const failures=[],checks=[];
const assert=new Proxy(realAssert,{get(target,key){if(typeof target[key]!=='function')return target[key];return(...args)=>{try{target[key](...args);checks.push({test:current,assertion:key,pass:true});}catch(e){failures.push({test:current,assertion:key,expected:e.expected instanceof RegExp?String(e.expected):e.expected,actual:e.actual,reason:e.message.split('\n')[0],customMessage:typeof args.at(-1)==='string'?args.at(-1):null,stack:e.stack});}};}});
const test=(name,fn)=>{current=name;fn();};
let s=fs.readFileSync('tools/verify-reading-diagram-semantics.mjs','utf8');s=s.replace(/import[^;]+;/g,'');vm.runInNewContext(s,{fs,test,assert,diagrams,applyDiagramClarifications});
fs.writeFileSync(path.join(OUT,'diagram-all-predicates.json'),JSON.stringify({mode:'Read-only diagnostic: independently evaluate all assertions beyond original fail-fast boundaries; not a replacement passing test',pass:checks.length,failures},null,2)+'\n');
console.log(JSON.stringify(failures.map(f=>({test:f.test,assertion:f.assertion,expected:typeof f.expected==='string'?f.expected.slice(0,110):f.expected,reason:f.reason,customMessage:f.customMessage})),null,2));
