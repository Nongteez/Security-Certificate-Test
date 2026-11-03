import { execSync } from 'node:child_process';
import fs from 'node:fs';

const v_d50 = execSync('git show d5024844:js/core/diagram-generator.js', { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });

// List all keys in d5024844
const keys = [];
const lines = v_d50.split('\n');
lines.forEach((l, i) => {
  const m = l.match(/^\s*([a-zA-Z0-9_-]+)\s*:\s*[`'"]/);
  if (m) {
    keys.push({ key: m[1], line: i + 1 });
  }
});

console.log('=== Diagrams in d5024844 (count: ' + keys.length + ') ===');
keys.forEach(k => console.log(k.key, 'at line', k.line));

