import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '../js/core/markdown-parser.js';

const domains = [1, 2, 3, 4];
const inventory = {};

for (const dId of domains) {
  const mdPath = path.resolve(`content/isc2-cc-2026/reading/domain-${dId}.md`);
  const jsPath = path.resolve(`content/isc2-cc-2026/reading/domain-${dId}.js`);
  const scPath = path.resolve(`content/isc2-cc-2026/reading/domain-${dId}-scenarios.js`);

  const rawMd = fs.readFileSync(mdPath, 'utf8');
  const renderedHtml = parseMarkdown(rawMd);

  // Extract H1: both # and <h1>
  const h1Markdown = [...rawMd.matchAll(/^#\s+(.+)$/gm)].map(m => m[1]);
  const h1Html = [...renderedHtml.matchAll(/<h1[^>]*>(.*?)<\/h1>/gi)].map(m => m[1]);
  const h1All = [...h1Markdown, ...h1Html];

  // Extract H2: both ## and <h2>
  const h2Markdown = [...rawMd.matchAll(/^##\s+(.+)$/gm)].map(m => m[1]);
  const h2Html = [...renderedHtml.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2All = [...new Set([...h2Markdown, ...h2Html])];

  // Extract H3: both ### and <h3>
  const h3Markdown = [...rawMd.matchAll(/^###\s+(.+)$/gm)].map(m => m[1]);
  const h3Html = [...renderedHtml.matchAll(/<h3[^>]*>(.*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h3All = [...new Set([...h3Markdown, ...h3Html])];

  // Extract anchors in HTML: id="..."
  const anchorMatches = [...renderedHtml.matchAll(/id="([^"]+)"/g)].map(m => m[1]);

  // Extract diagrams: data-diagram="..." or class="reading-diagram-container"
  const diagramMatches = [...renderedHtml.matchAll(/data-diagram="([^"]+)"/g)].map(m => m[1]);

  // Extract tables: <table>
  const tableCount = (renderedHtml.match(/<table/g) || []).length;

  // Extract distinction cards
  const distinctionCards = (renderedHtml.match(/class="[^"]*reading-distinction-card[^"]*"/g) || []).length;

  // Extract exam traps / callouts
  const examTraps = (renderedHtml.match(/class="[^"]*reading-exam-trap[^"]*"/g) || []).length;
  const tipCallouts = (renderedHtml.match(/class="[^"]*reading-callout\s+tip[^"]*"/g) || []).length;
  const warningCallouts = (renderedHtml.match(/class="[^"]*reading-callout\s+warning[^"]*"/g) || []).length;

  // Scenarios in HTML or JS
  const scenarioCardsInHtml = (renderedHtml.match(/class="[^"]*reading-scenario-card[^"]*"/g) || []).length;

  let scenariosInJs = 0;
  let scenarioListInJs = [];
  if (fs.existsSync(scPath)) {
    const scText = fs.readFileSync(scPath, 'utf8');
    const scMatches = [...scText.matchAll(/id:\s*['"](scenario-[^'"]+)['"]/g)].map(m => m[1]);
    scenariosInJs = scMatches.length;
    scenarioListInJs = scMatches;
  }

  // Load metadata objectives from JS
  let jsObjectives = [];
  if (fs.existsSync(jsPath)) {
    const jsText = fs.readFileSync(jsPath, 'utf8');
    const topicMatches = [...jsText.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    jsObjectives = topicMatches;
  }

  inventory[`domain${dId}`] = {
    domainId: dId,
    mdSize: rawMd.length,
    h1Count: h1All.length,
    h1: h1All,
    h2Count: h2All.length,
    h2: h2All,
    h3Count: h3All.length,
    h3: h3All,
    anchorCount: anchorMatches.length,
    anchors: anchorMatches,
    diagrams: diagramMatches,
    tableCount,
    distinctionCards,
    examTraps,
    tipCallouts,
    warningCallouts,
    scenarioCardsInHtml,
    scenariosInJs,
    scenarioListInJs,
    jsTopicsCount: jsObjectives.length,
    jsTopics: jsObjectives
  };
}

console.log('=== DOMAINS 1–4 TEXTBOOK COMPREHENSIVE INVENTORY ===\n');
for (const dId of domains) {
  const d = inventory[`domain${dId}`];
  console.log(`Domain ${dId}:`);
  console.log(`  Markdown Size: ${d.mdSize} characters`);
  console.log(`  H1 Headings (${d.h1Count}): ${d.h1.join('; ')}`);
  console.log(`  H2 Objectives (${d.h2Count}): ${d.h2.slice(0, 3).join('; ')}${d.h2Count > 3 ? '...' : ''}`);
  console.log(`  H3 Subsections (${d.h3Count}):`);
  d.h3.slice(0, 5).forEach(t => console.log(`     - ${t}`));
  if (d.h3Count > 5) console.log(`     ... and ${d.h3Count - 5} more`);
  console.log(`  Diagrams (${d.diagrams.length}): ${d.diagrams.join(', ')}`);
  console.log(`  Tables: ${d.tableCount}`);
  console.log(`  Distinction Cards: ${d.distinctionCards}`);
  console.log(`  Callouts: ${d.tipCallouts} tips, ${d.warningCallouts} warnings, ${d.examTraps} exam-traps`);
  console.log(`  Scenarios (HTML/JS): ${d.scenarioCardsInHtml} / ${d.scenariosInJs}`);
  console.log('');
}

fs.writeFileSync('scratch/textbook-inventory.json', JSON.stringify(inventory, null, 2));
console.log('Saved to scratch/textbook-inventory.json');
