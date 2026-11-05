import fs from 'node:fs';

const content = fs.readFileSync('js/core/diagram-generator.js', 'utf8');

// Find all properties in DiagramGenerator
const diagRegex = /([a-zA-Z0-9_-]+)\s*:\s*`([\s\S]*?)`/g;
let match;
const diagrams = [];

while ((match = diagRegex.exec(content)) !== null) {
  const name = match[1];
  const template = match[2];
  if (template.includes('<svg') || template.includes('reading-diagram')) {
    diagrams.push({
      name,
      hasSvg: template.includes('<svg'),
      hasMobileStack: template.includes('reading-diag-mobile'),
      hasHex: (template.match(/#[0-9a-fA-F]{3,8}/g) || []).length,
      hasVar: (template.match(/var\(--/g) || []).length
    });
  }
}

console.log(`Found ${diagrams.length} diagrams:`);
diagrams.forEach(d => {
  console.log(`- ${d.name}: hasSvg=${d.hasSvg}, hasMobileStack=${d.hasMobileStack}, inlineHexCount=${d.hasHex}, cssVarCount=${d.hasVar}`);
});

