// Local design preview only. This serves this folder, never the application or repository root.
import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root = new URL('./', import.meta.url);
const allowed = new Set(['index.html','preview.css','preview.js','source-context.json','concept-a.svg','concept-b.svg','concept-c.svg']);
const types = {html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',json:'application/json; charset=utf-8',svg:'image/svg+xml'};
const server = http.createServer(async(req,res)=>{
  const url = new URL(req.url,'http://127.0.0.1'); const name = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
  if (!['GET','HEAD'].includes(req.method) || !allowed.has(name)) {res.writeHead(404);res.end('Not found');return;}
  try {const data=await readFile(new URL(name,root));res.writeHead(200,{'Content-Type':types[name.split('.').at(-1)],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:data);}
  catch {res.writeHead(404);res.end('Not found');}
});
server.listen(4186,'127.0.0.1',()=>console.log(`Slide 1 exploration: http://127.0.0.1:4186/\nFiles: ${fileURLToPath(root)}\nStop with Ctrl+C.`));
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
