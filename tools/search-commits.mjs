import { execSync } from 'node:child_process';

const commits = execSync('git log --oneline -n 40', { encoding: 'utf8' }).trim().split('\n');

console.log('=== Commits touching diagram-generator.js or reading.css ===');
for (const line of commits) {
  const hash = line.split(' ')[0];
  const files = execSync(`git diff-tree --no-commit-id --name-only -r ${hash}`, { encoding: 'utf8' }).trim().split('\n');
  const matched = files.filter(f => f.includes('diagram-generator.js') || f.includes('reading.css') || f.includes('domain-4.md') || f.includes('domain-1.md'));
  if (matched.length > 0) {
    console.log(`${line} -> ${matched.join(', ')}`);
  }
}

