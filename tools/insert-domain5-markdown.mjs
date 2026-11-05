import fs from 'node:fs';

const filePath = 'content/isc2-cc-2026/reading/domain-5.md';
let content = fs.readFileSync(filePath, 'utf8');

// Item 1: Physical Media Destruction Figure in Section 5.1.4
const figSnippet = `
<figure class="reading-figure" style="max-width: 680px; margin: 18px auto;">
  <div class="reading-figure-img-wrap" style="aspect-ratio: 16/9; max-height: 320px;">
    <img src="/assets/images/reading/physically-destroyed-hard-drive.jpg" alt="Physically shredded hard drive platters showing complete mechanical destruction" class="reading-figure-img" width="800" height="600" loading="lazy">
  </div>
  <figcaption class="reading-figcaption">
    <span class="reading-figure-badge badge-physical">NIST SP 800-88 &middot; Physical Destruction</span>
    <strong>การทำลายสื่อจัดเก็บข้อมูลทางกายภาพ (Physical Media Destruction):</strong> ตัวอย่างฮาร์ดดิสก์ที่ถูกบดละเอียดผ่านเครื่องทำลายฮาร์ดดิสก์อุตสาหกรรม (Industrial Hard Drive Shredder) จนแผ่นจานแม่เหล็ก (Platters) แตกกระจายเป็นเศษชิ้นส่วนโลหะขนาดเล็ก ทำให้การกู้คืนข้อมูลด้วยเทคนิคในห้องปฏิบัติการขั้นสูงเป็นไปไม่ได้อย่างสิ้นเชิง (Ultimate Sanitization)
    <span class="reading-figure-attr">ภาพ: Raysonho / Wikimedia Commons / CC0 1.0 Universal Public Domain</span>
  </figcaption>
</figure>
`;

const target1 = '<h3 id="topic-5-1-data-states-controls">';
const idx1 = content.indexOf(target1);
if (idx1 === -1) {
  console.error('Target 1 not found');
  process.exit(1);
}
// Find </section> right before target1
const sectionClose1 = content.lastIndexOf('</section>', idx1);
content = content.slice(0, sectionClose1) + figSnippet + '\n' + content.slice(sectionClose1);

// Item 2: Cryptography Pipelines in Section 5.1.7
const diagSnippet2 = `
<div class="reading-semantic-diagram" data-diagram="cryptographyPipelines"></div>
`;
const target2 = '<h3 id="topic-5-1-tpm-vs-hsm">';
const idx2 = content.indexOf(target2);
if (idx2 === -1) {
  console.error('Target 2 not found');
  process.exit(1);
}
const sectionClose2 = content.lastIndexOf('</section>', idx2);
content = content.slice(0, sectionClose2) + diagSnippet2 + '\n' + content.slice(sectionClose2);

// Item 3: SIEM Telemetry Pipeline in Section 5.2.2
const diagSnippet3 = `
<div class="reading-semantic-diagram" data-diagram="siemTelemetryPipeline"></div>
`;
const target3 = '<h3 id="topic-5-2-edr-antivirus">';
const idx3 = content.indexOf(target3);
if (idx3 === -1) {
  console.error('Target 3 not found');
  process.exit(1);
}
const sectionClose3 = content.lastIndexOf('</section>', idx3);
content = content.slice(0, sectionClose3) + diagSnippet3 + '\n' + content.slice(sectionClose3);

// Item 4: Purple Team Collaborative Loop in Section 5.5.1
const diagSnippet4 = `
<div class="reading-semantic-diagram" data-diagram="purpleTeamLoop"></div>
`;
const target4 = '<h3 id="topic-5-5-vulnerability-assessment-pentest">';
const idx4 = content.indexOf(target4);
if (idx4 === -1) {
  console.error('Target 4 not found');
  process.exit(1);
}
const sectionClose4 = content.lastIndexOf('</section>', idx4);
content = content.slice(0, sectionClose4) + diagSnippet4 + '\n' + content.slice(sectionClose4);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully inserted all 4 visual assets into domain-5.md');
