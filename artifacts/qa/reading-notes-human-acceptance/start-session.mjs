import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {startServer,CHROME_PATH,PORT,DEBUG_PORT,ARTIFACTS_DIR,sleep} from './chrome-support.mjs';
const server=await startServer();
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'rn-acceptance-'));
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${profile}`,'--no-first-run','--no-default-browser-check','--window-size=1366,768',`http://127.0.0.1:${PORT}/index.html#topic-1-1-cia-triad`],{windowsHide:true});
fs.writeFileSync(path.join(ARTIFACTS_DIR,'session.json'),JSON.stringify({nodePID:process.pid,chromePID:chrome.pid,profile,PORT,DEBUG_PORT,headed:false},null,2));
for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok){console.log('READY',chrome.pid,PORT,DEBUG_PORT);break;}}catch{}await sleep(100);}
process.on('SIGINT',()=>{chrome.kill();server.close();process.exit(0)});
process.on('SIGTERM',()=>{chrome.kill();server.close();process.exit(0)});
