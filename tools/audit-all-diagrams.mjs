import fs from 'node:fs';

const code = fs.readFileSync('js/core/diagram-generator.js', 'utf8');

const keys = ['irpLifecycle', 'mitreAttackTacticTechnique', 'securityTestingMatrix', 'assetLifecycleAndEol'];

for (const k of keys) {
  const startIdx = code.indexOf(`${k}: \``);
  if (startIdx === -1) {
    console.log(`Key ${k} not found!`);
    continue;
  }
  const endIdx = code.indexOf('`,\n', startIdx);
  const html = code.slice(startIdx + k.length + 3, endIdx);
  
  console.log(`\n======================================================`);
  console.log(`DIAGRAM: ${k}`);
  console.log(`Length: ${html.length} chars`);
  
  // Check title, tag, svg viewBox, text elements, and mobile items
  const titleMatch = html.match(/<h4 class="reading-diagram-title">([^<]+)<\/h4>/);
  const tagMatch = html.match(/<span class="reading-diagram-tag">([^<]+)<\/span>/);
  const viewBoxMatch = html.match(/viewBox="([^"]+)"/);
  const rectMatches = html.match(/<rect [^>]+>/g) || [];
  const textMatches = html.match(/<text [^>]+>[^<]+<\/text>/g) || [];
  const pathMatches = html.match(/<path [^>]+>/g) || [];
  const mobMatches = html.match(/<div class="reading-mob-[^"]+">/g) || [];

  console.log(`Title: ${titleMatch ? titleMatch[1] : 'N/A'}`);
  console.log(`Tag: ${tagMatch ? tagMatch[1] : 'N/A'}`);
  console.log(`SVG viewBox: ${viewBoxMatch ? viewBoxMatch[1] : 'N/A'}`);
  console.log(`Rects: ${rectMatches.length}, Paths: ${pathMatches.length}, Texts: ${textMatches.length}`);
  console.log(`Mobile elements: ${mobMatches.length}`);

  // Check for any HTML inside SVG (which would be invalid SVG)
  const svgPart = html.slice(html.indexOf('<svg'), html.indexOf('</svg>') + 6);
  const invalidInSvg = svgPart.match(/<(div|span|p|h[1-6]|ul|li|strong|em|b|i)\b[^>]*>/gi);
  if (invalidInSvg) {
    console.log(`⚠️ INVALID HTML TAGS IN SVG:`, invalidInSvg);
  } else {
    console.log(`✓ Zero invalid HTML tags inside SVG`);
  }

  // Check for raw unparsed comments or entities
  const commentMatch = html.match(/<!--/g);
  console.log(`Comments in template: ${commentMatch ? commentMatch.length : 0}`);
}
