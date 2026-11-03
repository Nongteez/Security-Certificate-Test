import fs from 'node:fs';

const code = fs.readFileSync('js/core/diagram-generator.js', 'utf8');

const keys = ['irpLifecycle', 'mitreAttackTacticTechnique', 'securityTestingMatrix', 'assetLifecycleAndEol'];

keys.forEach(k => {
  console.log(`\n=================== ${k} ===================`);
  const regex = new RegExp(`['"]?${k}['"]?\\s*:\\s*\\{([\\s\\S]*?)\\n\\s{2}\\},?`, 'm');
  const match = code.match(regex);
  if (match) {
    const lines = match[0].split('\n');
    console.log(`Lines: ${lines.length}`);
    console.log(lines.slice(0, 40).join('\n'));
    console.log('...');
    console.log(lines.slice(-30).join('\n'));
  } else {
    console.log('Not found via regex');
  }
});

