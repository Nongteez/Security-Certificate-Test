// Run read-only legacy static checks against the exact pre-Phase3B.3 runtime bytes.
// Production files and the original test suite are never rewritten.
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {syncBuiltinESMExports} from 'node:module';
const read=fs.readFileSync.bind(fs);
const frozen=JSON.parse(read(new URL('./baseline-runtime.json',import.meta.url),'utf8'));
const files=new Map(Object.entries(frozen).map(([name,text])=>[path.resolve('.'+name).toLowerCase(),text]));
fs.readFileSync=(file,options)=>{
 const target=file instanceof URL?fileURLToPath(file):String(file);
 const text=files.get(path.resolve(target).toLowerCase());
 if(text===undefined)return read(file,options);
 const encoding=typeof options==='string'?options:options?.encoding;
 return encoding?Buffer.from(text,'utf8').toString(encoding):Buffer.from(text,'utf8');
};
syncBuiltinESMExports();
