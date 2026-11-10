from pathlib import Path
OUT=Path(__file__).resolve().parent
s=(OUT.parent/'reading-notes-phase-3a-domain-5-batch-3/browser-qa.mjs').read_text(encoding='utf-8');s=s[:s.index('  const version=')];s=s.replace('sec-cert-batch3-','sec-cert-semantic-')
s+=(OUT/'browser-body.mjs').read_text(encoding='utf-8')
s+='\n}catch(e){fs.writeFileSync(path.join(OUT,process.argv[2]+"-browser-error.txt"),e.stack);console.error(e);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}\n'
(OUT/'browser-qa.mjs').write_bytes(s.encode())
