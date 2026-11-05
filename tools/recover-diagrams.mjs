import fs from 'node:fs';
import readline from 'node:readline';

async function extractToolCalls() {
  const targetLines = new Set([11257, 11284, 11296, 11304]);
  const fileStream = fs.createReadStream('C:/Users/tyroc/.gemini/antigravity/brain/2dd4bbdc-72a9-43c8-8ba7-e78ca2646d72/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let lineIdx = 0;
  for await (const line of rl) {
    lineIdx++;
    if (targetLines.has(lineIdx)) {
      const data = JSON.parse(line);
      console.log(`=== Step ${lineIdx} ===`);
      if (data.tool_calls) {
        for (const tc of data.tool_calls) {
          console.log('Tool:', tc.name);
          if (tc.name === 'write_file' || tc.name === 'edit_file') {
            fs.writeFileSync(`tools/recovered_${lineIdx}.json`, JSON.stringify(tc.arguments, null, 2), 'utf8');
            console.log(`Saved args to tools/recovered_${lineIdx}.json`);
          }
        }
      }
    }
  }
}

extractToolCalls();

