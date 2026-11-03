import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const source=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3a/source-ledger.json','utf8'));
const out={contexts:[],screenshots:[],errors:[]};const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'planning-dom-results.json'),JSON.stringify(out,null,2));
const server=await startServer();const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-p3a1-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});let cdp;
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});

 const planned=await cdp.eval(`(()=>{const d=new DOMParser().parseFromString('<p>ALE &#36;10,000/year; Control &#36;25,000/year</p><p><em>Illustrative note</em></p>','text/html');return {currency:d.querySelector('p').textContent,note:d.querySelector('em').textContent,mathNodes:d.querySelectorAll('[role="math"],.katex').length}})()`);
 if(planned.currency!=='ALE $10,000/year; Control $25,000/year'||planned.mathNodes!==0)throw Error('Planning DOM mismatch');out.contexts.push({purpose:'QA-only candidate markup decoded in a detached browser DOM; no production edit',...planned});save();console.log('Planning DOM verified');
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}
