import { diagrams } from '../js/core/diagram-generator.js';

console.log('=== AUDITING ALL 24 DIAGRAM TEMPLATES ===\n');

const diagramList = Object.entries(diagrams);

for (const [key, html] of diagramList) {
  // Check illegal HTML inside <text>
  const textMatches = [...html.matchAll(/<text[^>]*>(.*?)<\/text>/gis)].map(m => m[1]);
  const illegalTagsInsideText = [];
  for (const t of textMatches) {
    const tags = t.match(/<(strong|b|span|div|p|em)[^>]*>/gi);
    if (tags) illegalTagsInsideText.push(...tags);
  }

  // Check HTML comments inside SVG
  const svgOnlyMatch = html.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  let svgComments = 0;
  if (svgOnlyMatch) {
    const comments = svgOnlyMatch[1].match(/<!--[\s\S]*?-->/g);
    svgComments = comments ? comments.length : 0;
  }

  // Check mobile stack
  const hasMobileStack = html.includes('reading-mob-tier-stack') ||
                         html.includes('reading-mob-stack') ||
                         html.includes('reading-diagram-mobile-stack') ||
                         html.includes('reading-mobile-cards');

  // Check SVG viewBox
  const viewBoxMatch = html.match(/viewBox="([^"]+)"/i);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : 'none';

  console.log(`[Diagram: ${key}]`);
  console.log(`  viewBox: "${viewBox}"`);
  console.log(`  Illegal tags in <text>: ${illegalTagsInsideText.length > 0 ? 'FAIL (' + illegalTagsInsideText.join(', ') + ')' : '0 (PASS)'}`);
  console.log(`  Comments inside SVG: ${svgComments}`);
  console.log(`  Has Mobile Stack: ${hasMobileStack ? 'YES' : 'NO (Relies on SVG scaling)'}`);
  console.log('');
}

