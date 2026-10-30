import fs from 'node:fs';

const lessons = [
  'lesson-d2-01-grc-foundations.json',
  'lesson-d2-02-grc-tools-risk-register.json',
  'lesson-d2-03-business-continuity-bcp.json',
  'lesson-d2-04-disaster-recovery-drp.json',
  'lesson-d2-05-security-awareness-culture-leadership.json',
  'lesson-d2-06-social-engineering-password-protection.json',
  'lesson-d2-07-security-metrics-kpi-kri.json',
  'lesson-d2-08-dashboards-scorecards-reports.json'
];

let totalSlides = 0;
const inventory = [];

lessons.forEach((lFile, idx) => {
  const p = 'content/isc2-cc-2026/learning/published/lessons/' + lFile;
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  console.log(`\nLesson ${idx + 1}: ${data.id} (rev: ${data.revision})`);
  console.log(`  Title EN: ${data.title?.en}`);
  console.log(`  Title TH: ${data.title?.th}`);
  console.log(`  Slides count: ${data.slides.length}`);
  totalSlides += data.slides.length;
  
  const lessonObj = {
    file: lFile,
    id: data.id,
    revision: data.revision,
    titleEn: data.title?.en,
    titleTh: data.title?.th,
    slides: []
  };

  data.slides.forEach((s, sIdx) => {
    const hasTh = !!s.title?.th;
    const hasEn = !!s.title?.en;
    const hasInteraction = !!s.interaction;
    const interactionType = s.interaction?.type || null;
    const blocksCount = s.blocks?.length || 0;
    const infoBlocksCount = s.info?.blocks?.length || 0;
    const readingBlocksCount = s.reading?.blocks?.length || 0;

    console.log(`    Slide ${sIdx + 1}: [${s.id}] (TH: ${hasTh}, EN: ${hasEn}, Blocks: ${blocksCount}, Info: ${infoBlocksCount}, Reading: ${readingBlocksCount}, Interaction: ${hasInteraction ? interactionType : 'none'})`);

    lessonObj.slides.push({
      index: sIdx + 1,
      id: s.id,
      titleEn: s.title?.en,
      titleTh: s.title?.th,
      blocksCount,
      infoBlocksCount,
      readingBlocksCount,
      interactionType
    });
  });

  inventory.push(lessonObj);
});

console.log(`\n========================================`);
console.log(`TOTAL DOMAIN 2 LESSONS: ${lessons.length}`);
console.log(`TOTAL DOMAIN 2 SLIDES: ${totalSlides}`);
console.log(`========================================`);

fs.writeFileSync('scratch/d2-inventory.json', JSON.stringify(inventory, null, 2), 'utf8');

