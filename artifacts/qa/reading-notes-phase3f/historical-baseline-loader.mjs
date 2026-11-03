// Read-only QA preload: route known source reads to the saved pre-Phase-F runtime.
// Never writes or swaps production files.
import fs from 'node:fs';import path from 'node:path';import{fileURLToPath}from'node:url';import{syncBuiltinESMExports}from'node:module';
const original=fs.readFileSync.bind(fs),snapshot=JSON.parse(original(process.env.READING_QA_BASELINE_RUNTIME||'artifacts/qa/reading-notes-phase3f/baseline-runtime.json','utf8'));
fs.readFileSync=function(file,options){
 let name;try{name='/'+path.relative(process.cwd(),file instanceof URL?fileURLToPath(file):String(file)).replaceAll('\\','/')}catch{return original(file,options)}
 if(snapshot[name]!==undefined){const b=Buffer.from(snapshot[name]);return typeof options==='string'?b.toString(options):options?.encoding?b.toString(options.encoding):b}
 return original(file,options);
};
syncBuiltinESMExports();
