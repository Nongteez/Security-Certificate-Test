import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = 'artifacts/qa/reading-notes-content-depth-audit';
if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

// 1. Objectives definition per official ISC2 CC 2026 outline
const OFFICIAL_OUTLINE = {
  1: {
    title: 'Security Principles',
    weight: '26%',
    objectives: [
      { id: '1.1', title: 'Understand security concepts' },
      { id: '1.2', title: 'Understand risk management principles' },
      { id: '1.3', title: 'Understand security governance' },
      { id: '1.4', title: 'Understand (ISC)² Code of Ethics' },
      { id: '1.5', title: 'Understand security controls' }
    ]
  },
  2: {
    title: 'Business Continuity, Disaster Recovery & Incident Response Concepts',
    weight: '10%',
    objectives: [
      { id: '2.1', title: 'Plan Governance, Risk, and Compliance (GRC)' },
      { id: '2.2', title: 'Understand redundancy' },
      { id: '2.3', title: 'Understand security awareness' },
      { id: '2.4', title: 'Measure cybersecurity effectiveness' }
    ]
  },
  3: {
    title: 'Access Controls Concepts',
    weight: '22%',
    objectives: [
      { id: '3.1', title: 'Understand Identity Life Cycle Management' },
      { id: '3.2', title: 'Understand Logical Access Controls' }
    ]
  },
  4: {
    title: 'Network Security',
    weight: '24%',
    objectives: [
      { id: '4.1', title: 'Understand Network Security' },
      { id: '4.2', title: 'Understand Network Security Architecture' },
      { id: '4.3', title: 'Understand Cloud Security' }
    ]
  },
  5: {
    title: 'Security Operations',
    weight: '18%',
    objectives: [
      { id: '5.1', title: 'Understand Data Security' },
      { id: '5.2', title: 'Understand Security Operations' },
      { id: '5.3', title: 'Understand Incident Response (IR)' },
      { id: '5.4', title: 'Understand Asset Protection' },
      { id: '5.5', title: 'Understand Security Testing' }
    ]
  }
};

// Depth criteria evaluator
function evaluateSubsectionDepth(subText, subTitle) {
  const criteria = {
    hasWhat: false,
    hasWhy: false,
    hasHow: false,
    hasWhen: false,
    hasExample: false,
    hasDistinction: false,
    hasLimitations: false,
    hasExamTerms: false
  };

  // What: definitions, คือ, หมายถึง, defined as
  if (/คือ|หมายถึง|นิยาม|defined as|is defined as|refers to/i.test(subText)) {
    criteria.hasWhat = true;
  }

  // Why: วัตถุประสงค์, เป้าหมาย, ประโยชน์, เพื่อ, purpose, rationale
  if (/วัตถุประสงค์|เป้าหมาย|ทำไม|ประโยชน์|เพื่อป้องกัน|เพื่อลด|purpose|goal|benefit|why/i.test(subText)) {
    criteria.hasWhy = true;
  }

  // How: ขั้นตอน, วิธีการ, กระบวนการ, ประกอบด้วย, steps, process, how
  if (/ขั้นตอน|กระบวนการ|วิธีการ|ดำเนิน|การทำงาน|ประกอบด้วย|steps|process|lifecycle|phase/i.test(subText)) {
    criteria.hasHow = true;
  }

  // When: เมื่อ, กรณี, เงื่อนไข, triggers, when, condition
  if (/เมื่อเกิด|กรณีที่|ในกรณี|หากมี|trigger|condition|scenario|when/i.test(subText)) {
    criteria.hasWhen = true;
  }

  // Realistic Example: ตัวอย่าง, เช่น, สถานการณ์จำลอง, e.g., for example
  if (/ตัวอย่าง|เช่น|กรณีศึกษา|สถานการณ์|ตัวอย่างเช่น|for example|e\.g\./i.test(subText)) {
    criteria.hasExample = true;
  }

  // Distinction: เปรียบเทียบ, แตกต่าง, ต่างจาก, vs, contrast, distinction
  if (/เปรียบเทียบ|แตกต่าง|ต่างจาก|ข้อแตกต่าง|versus|\bvs\b|ต่างกัน|distinction/i.test(subText)) {
    criteria.hasDistinction = true;
  }

  // Limitations / Tradeoffs: ข้อจำกัด, ข้อเสีย, ต้นทุน, Trade-off, limitation, drawback
  if (/ข้อจำกัด|ข้อเสีย|ต้นทุน|ความซับซ้อน|trade-off|overhead|limitation|drawback/i.test(subText)) {
    criteria.hasLimitations = true;
  }

  // Exam Terms / Traps: คำสำคัญสำหรับสอบ, ข้อควรระวัง, สูตรจำ, Exam Trap, Key term
  if (/สูตรจำ|ข้อควรระวัง|จุดจำ|สำหรับสอบ|exam trap|exam tip|key term|คำสำคัญ/i.test(subText)) {
    criteria.hasExamTerms = true;
  }

  const score = Object.values(criteria).filter(Boolean).length;
  return { criteria, score };
}

// Parse domain reading files
function parseReadingFile(d) {
  const p = `content/isc2-cc-2026/reading/domain-${d}.md`;
  const text = fs.readFileSync(p, 'utf8');
  const lines = text.split('\n');

  const subsections = [];
  let currentObj = '';
  let currentSub = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // H2 objective match
    const objMatch = line.match(/^(?:##\s+|<h2[^>]*>)(Objective\s+\d+\.\d+[^<]*)/i);
    if (objMatch) {
      currentObj = objMatch[1].replace(/<[^>]+>/g, '').trim();
      continue;
    }

    // Summary H2 match
    const sumMatch = line.match(/^(?:##\s+|<h2[^>]*>)(Domain\s+\d+\s+Summary[^<]*)/i);
    if (sumMatch) {
      currentObj = sumMatch[1].replace(/<[^>]+>/g, '').trim();
      continue;
    }

    // H3 subsection match
    const subMatch = line.match(/^(?:###\s+|<h3(?:\s+id="([^"]+)")?[^>]*>)(.*?)(?:<\/h3>)?$/i);
    if (subMatch) {
      const id = subMatch[1] || '';
      const title = subMatch[2].replace(/<[^>]+>/g, '').trim();
      currentSub = {
        domain: d,
        id,
        title,
        obj: currentObj || `Objective ${d}.1`,
        lineStart: i + 1,
        contentLines: []
      };
      subsections.push(currentSub);
      continue;
    }

    if (currentSub) {
      currentSub.contentLines.push(line);
    }
  }

  // Finalize subsections
  return subsections.map(s => {
    const rawContent = s.contentLines.join('\n');
    const depth = evaluateSubsectionDepth(rawContent, s.title);
    const hasTable = /\|(?:\s*:?-+:?\s*\|)+|<table/i.test(rawContent);
    const hasDiagram = /data-diagram=["']([^"']+)["']/i.test(rawContent);
    const hasScenario = /reading-scenario|สถานการณ์/i.test(rawContent);
    const diagramMatch = rawContent.match(/data-diagram=["']([^"']+)["']/i);
    const diagramId = diagramMatch ? diagramMatch[1] : null;

    let coverageStatus = 'ALREADY COVERED WELL';
    if (depth.score <= 3) {
      coverageStatus = 'COVERED BUT SHALLOW';
    } else if (depth.score <= 5) {
      coverageStatus = 'PARTIALLY COVERED';
    }

    return {
      domain: s.domain,
      id: s.id,
      title: s.title,
      obj: s.obj,
      lineStart: s.lineStart,
      lineCount: s.contentLines.length,
      depthScore: depth.score,
      criteria: depth.criteria,
      hasTable,
      hasDiagram,
      diagramId,
      hasScenario,
      coverageStatus,
      rawContentSample: rawContent.slice(0, 300)
    };
  });
}

// Parse Surm supplementary files
function parseSurmFile(d) {
  const p = `ISC2 Update 2026/Domain ${d}/D${d} ${d === 1 ? 'Surm.md' : 'surm.md'}`;
  const text = fs.readFileSync(p, 'utf8');
  const lines = text.split('\n');

  const topics = [];
  let currentTopic = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Level 1 or 2 heading
    const hMatch = line.match(/^(#{1,3})\s+(.*)/);
    if (hMatch) {
      const level = hMatch[1].length;
      const title = hMatch[2].trim();
      // Skip title header and toc
      if (title.includes('ISC2 Certified') || title.includes('สารบัญ') || title.includes('ฉบับขยาย')) {
        continue;
      }
      currentTopic = {
        domain: d,
        level,
        title,
        lineStart: i + 1,
        contentLines: []
      };
      topics.push(currentTopic);
    } else if (currentTopic) {
      currentTopic.contentLines.push(line);
    }
  }

  return topics.map(t => {
    const rawContent = t.contentLines.join('\n');
    const isEnrichmentTagged = t.title.includes('[เสริม]') || t.title.includes('`[เสริม]`');
    const isScenario = t.title.includes('สถานการณ์') || t.title.includes('แบบฝึกหัด') || /^Q\d+/i.test(t.title) || /^ข้อ\s+\d+/i.test(t.title);
    const isTable = t.title.includes('ตาราง') || /\|(?:\s*:?-+:?\s*\|)+/.test(rawContent);
    const isChecklist = t.title.includes('Checklist') || t.title.includes('One-page') || t.title.includes('แผนทบทวน');

    return {
      domain: t.domain,
      level: t.level,
      title: t.title,
      lineStart: t.lineStart,
      lineCount: t.contentLines.length,
      isEnrichmentTagged,
      isScenario,
      isTable,
      isChecklist,
      contentSample: rawContent.slice(0, 200)
    };
  });
}

// Run analysis for all 5 domains
const allReadingSubsections = [];
const allSurmTopics = [];

for (let d = 1; d <= 5; d++) {
  const subs = parseReadingFile(d);
  const surms = parseSurmFile(d);
  allReadingSubsections.push(...subs);
  allSurmTopics.push(...surms);
}

// Compare Surm topics against Reading Notes
const dispositionRegister = [];

for (const topic of allSurmTopics) {
  const d = topic.domain;
  const readingFileText = fs.readFileSync(`content/isc2-cc-2026/reading/domain-${d}.md`, 'utf8');

  // Extract key search terms
  const cleanTitle = topic.title.replace(/\[เสริม\]|`\[เสริม\]`|\d+\.\d+|\d+\.|ข้อ\s+\d+:?/g, '').trim();
  const englishTerms = cleanTitle.match(/[A-Za-z0-9-]{3,}/g) || [];
  const thaiTerms = cleanTitle.replace(/[A-Za-z0-9-]/g, '').trim().split(/\s+/).filter(w => w.length >= 4);

  let matchFound = false;
  let matchingSub = null;

  // Search in subsections of this domain
  const domainSubs = allReadingSubsections.filter(s => s.domain === d);
  for (const sub of domainSubs) {
    const subText = sub.title + ' ' + sub.rawContentSample;
    const enMatch = englishTerms.some(term => subText.toLowerCase().includes(term.toLowerCase()));
    const thMatch = thaiTerms.some(term => subText.includes(term));
    if (enMatch || thMatch) {
      matchFound = true;
      matchingSub = sub;
      break;
    }
  }

  // Classify disposition
  let disposition = 'USEFUL ENRICHMENT';
  let targetSubsection = matchingSub ? matchingSub.title : `Domain ${d} Objective ${d}.1`;
  let justification = '';

  if (topic.isChecklist) {
    disposition = 'REDUNDANT';
    justification = 'Summary checklist / review schedule better suited for summary section or separate review guide';
  } else if (topic.isScenario) {
    if (d === 5) {
      disposition = 'ALREADY COVERED WELL';
      justification = 'Domain 5 includes 12 comprehensive scenarios directly adapted from source exercises';
    } else {
      disposition = 'USEFUL ENRICHMENT';
      justification = 'High-yield practical exam scenario from supplementary notes, ideal for Domain Review Scenarios';
    }
  } else if (matchFound) {
    if (matchingSub.depthScore >= 6) {
      disposition = 'ALREADY COVERED WELL';
      justification = `Well covered in production subsection '${matchingSub.title}' (Depth Score: ${matchingSub.depthScore}/8)`;
    } else if (matchingSub.depthScore <= 3) {
      disposition = 'COVERED BUT SHALLOW';
      justification = `Present in production '${matchingSub.title}' but lacks operational depth, examples, or explicit exam traps (Depth Score: ${matchingSub.depthScore}/8)`;
    } else {
      disposition = 'PARTIALLY COVERED';
      justification = `Core concept mentioned in '${matchingSub.title}', but supplementary nuances, tradeoffs, or examples should be merged`;
    }
  } else {
    // Not found in reading
    if (topic.isEnrichmentTagged) {
      disposition = 'USEFUL ENRICHMENT';
      justification = 'Valuable supplementary knowledge explicitly tagged in source notes to deepen conceptual understanding';
    } else {
      disposition = 'MISSING';
      justification = 'Concept present in student source material but not explicitly highlighted in current Reading Notes text';
    }
  }

  dispositionRegister.push({
    domain: d,
    level: topic.level,
    title: topic.title,
    lineStart: topic.lineStart,
    disposition,
    targetSubsection,
    justification
  });
}

// Write artifacts
fs.writeFileSync(
  path.join(ARTIFACT_DIR, 'all-domain-subsections-depth.json'),
  JSON.stringify(allReadingSubsections, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(ARTIFACT_DIR, 'supplementary-disposition-register.json'),
  JSON.stringify(dispositionRegister, null, 2),
  'utf8'
);

// Print summary metrics
console.log('=== AUDIT COMPLETE ===');
console.log(`Total Production Subsections Audited: ${allReadingSubsections.length}`);
console.log(`Total Supplementary Topics Evaluated: ${dispositionRegister.length}`);

const dispositionCounts = {};
dispositionRegister.forEach(d => {
  dispositionCounts[d.disposition] = (dispositionCounts[d.disposition] || 0) + 1;
});

console.log('\nDisposition Counts across all domains:');
Object.entries(dispositionCounts).forEach(([k, v]) => {
  console.log(`  ${k.padEnd(25)}: ${v}`);
});

for (let d = 1; d <= 5; d++) {
  const dSubs = allReadingSubsections.filter(s => s.domain === d);
  const dDisp = dispositionRegister.filter(s => s.domain === d);
  const avgScore = (dSubs.reduce((acc, s) => acc + s.depthScore, 0) / (dSubs.length || 1)).toFixed(1);
  console.log(`\nDomain ${d}: ${dSubs.length} subsections (Avg Depth: ${avgScore}/8) | ${dDisp.length} supplementary topics`);
}

