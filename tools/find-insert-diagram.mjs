import fs from 'node:fs';
import readline from 'node:readline';

async function findInsertDiagram() {
  const fileStream = fs.createReadStream('C:/Users/tyroc/.gemini/antigravity/brain/2dd4bbdc-72a9-43c8-8ba7-e78ca2646d72/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let lineIdx = 0;
  for await (const line of rl) {
    lineIdx++;
    if (line.includes('insert-diagram.mjs') && line.includes('write_file')) {
      const data = JSON.parse(line);
      for (const tc of (data.tool_calls || [])) {
        const args = tc.args || tc.arguments || {};
        const p = args.Path || args.path || '';
        const c = args.Content || args.content || '';
        if (p.includes('insert-diagram.mjs')) {
          console.log(`Step ${lineIdx}: ${p}`);
          fs.writeFileSync(p, c, 'utf8');
          console.log(`Re-created ${p}`);
        }
      }
    }
  }
}

findInsertDiagram();

