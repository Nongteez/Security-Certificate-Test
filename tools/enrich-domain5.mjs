import fs from 'node:fs';

const filePath = 'content/isc2-cc-2026/reading/domain-5.md';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Clean up duplicate cryptographyPipelines instances
// We want exactly ONE cryptographyPipelines right after Section 5.1.7 Digital Signatures
const diagTag = '<div class="reading-semantic-diagram" data-diagram="cryptographyPipelines"></div>';

// Remove all occurrences of diagTag first
content = content.replaceAll(diagTag, '');

// Clean up extra blank lines created by removal
content = content.replace(/(\r?\n){3,}/g, '\n\n');

// 2. Example 2: Symmetric vs. Asymmetric & Hybrid Encryption in Section 5.1.6
const example2 = `
<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การแลกเปลี่ยนข้อมูลบัญชีด้วยการเข้ารหัสแบบสมมาตรและอสมมาตร (Hybrid Encryption)</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> "อลิซ" ผู้จัดการฝ่ายบัญชีต้องการส่งไฟล์สเปรดชีตสรุปเงินเดือนประจำปีขนาด 500 MB ให้ "บ็อบ" ผู้จัดการฝ่ายบุคคลผ่านทางอินเทอร์เน็ต โดยข้อมูลต้องเป็นความลับสูงสุด</div>
  <div class="reading-example-step"><strong>2. ปัญหาของการใช้ Symmetric อย่างเดียว (Key Distribution Problem):</strong>
    <ul>
      <li>หากอลิซใช้ <strong>AES-256</strong> เข้ารหัสไฟล์ อลิซจะได้ Ciphertext ที่ปลอดภัยและประมวลผลเร็วมาก</li>
      <li>แต่อลิซจะส่งกุญแจลับ (Shared Secret Key K) ให้บ็อบได้อย่างไร? หากส่งทางอีเมลหรือแชต ผู้โจมตีที่ดักฟังอยู่จะขโมยกุญแจ K ไปถอดรหัสได้ทันที</li>
      <li>นอกจากนี้ หากบริษัทมีพนักงาน 1,000 คนที่ต้องคุยกันแบบตัวต่อตัว จะต้องจัดการกุญแจลับมากถึงเกือบ 500,000 คู่กุญแจตามสูตร n(n - 1) / 2</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. วิธีแก้ปัญหาด้วย Hybrid Encryption (TLS / OpenPGP):</strong>
    <ul>
      <li>โปรแกรมของอลิซสร้างกุญแจสมมาตรชั่วคราวขึ้นมา 1 ดอก เรียกว่า <strong>Session Key</strong> แล้วนำไปเข้ารหัสไฟล์สเปรดชีต 500 MB ด้วย <strong>AES-256</strong> (ใช้เวลาเพียง 1 วินาที)</li>
      <li>โปรแกรมนำเอา Session Key ดอกเล็กๆ นั้น ไปเข้ารหัสด้วย <strong>Public Key ของบ็อบ</strong> (โดยใช้อัลกอริทึม Asymmetric เช่น <strong>RSA-4096 หรือ ECC</strong>)</li>
      <li>อลิซส่งทั้งไฟล์ที่เข้ารหัสด้วย AES และ Session Key ที่เข้ารหัสด้วย Public Key ไปให้บ็อบพร้อมกันทางเครือข่ายสาธารณะ</li>
      <li>เมื่อบ็อบได้รับ บ็อบใช้ <strong>Private Key ของตนเอง</strong> ถอดรหัส Session Key ออกมา จากนั้นนำ Session Key นั้นไปถอดรหัสไฟล์สเปรดชีตต้นฉบับ</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): Symmetric Encryption (เช่น AES) รวดเร็วมากเหมาะกับข้อมูลปริมาณมาก แต่มีปัญหาการแจกจ่ายกุญแจ ส่วน Asymmetric Encryption (เช่น RSA, ECC) ใช้คู่กุญแจทำให้ส่งมอบ Public Key ได้อย่างปลอดภัยแต่ประมวลผลช้า สถาปัตยกรรมยุคใหม่จึงใช้ Hybrid Encryption โดยใช้ Asymmetric แลกเปลี่ยนกุญแจ Session Key และใช้ Symmetric เข้ารหัสเนื้อหาจริง</div>
</div>
`;

const anchor517 = '<h3 id="topic-5-1-hashing-digital-signatures">';
const idx517 = content.indexOf(anchor517);
if (idx517 === -1) throw new Error('Anchor 5.1.7 not found');
const secClose516 = content.lastIndexOf('</section>', idx517);
content = content.slice(0, secClose516) + example2 + '\n' + content.slice(secClose516);

// 3. Re-insert the SINGLE cryptographyPipelines diagram + Example 3 in Section 5.1.7
const example3 = `
<div class="reading-semantic-diagram" data-diagram="cryptographyPipelines"></div>

<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การตรวจสอบความถูกต้องของเฟิร์มแวร์และลายมือชื่อดิจิทัล (Avalanche Effect &amp; Digital Signature)</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> วิศวกรเครือข่ายดาวน์โหลดไฟล์อัปเดตเฟิร์มแวร์เราเตอร์หลัก "router_fw_v4.2.bin" ขนาด 120 MB จากเว็บไซต์ผู้ผลิต โดยผู้ผลิตระบุค่า SHA-256 อ้างอิงและลายมือชื่อดิจิทัลไว้บนหน้าเว็บ</div>
  <div class="reading-example-step"><strong>2. การตรวจสอบ File Integrity และปรากฏการณ์หิมะถล่ม (Avalanche Effect):</strong>
    <ul>
      <li>วิศวกรใช้คำสั่ง sha256sum คำนวณค่าแฮชของไฟล์ที่ดาวน์โหลดมา ได้ผลลัพธ์เป็นค่าแฮช 64 ตัวอักษร เช่น a1b2c3...f9 ตรงกับค่าที่ผู้ผลิตประกาศไว้ 100%</li>
      <li>สมมติว่าระหว่างดาวน์โหลด มีมัลแวร์ในเครือข่ายพยายามแทรกโค้ดอันตรายขนาดเพียง 1 บิตลงในเฟิร์มแวร์ จากคุณสมบัติ <strong>Avalanche Effect</strong> ค่า SHA-256 ที่คำนวณได้ใหม่จะเปลี่ยนไปอย่างสิ้นเชิงมากกว่า 50% ของบิตทั้งหมด วิศวกรจะทราบทันทีว่าไฟล์ถูกดัดแปลงและยกเลิกการติดตั้ง</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. การยืนยันตัวตนด้วย Digital Signature (Authenticity &amp; Non-repudiation):</strong>
    <ul>
      <li>ลำพังเพียงค่าแฮชยังไม่พอ เพราะผู้โจมตีที่ทำ Man-in-the-Middle อาจเปลี่ยนทั้งไฟล์เฟิร์มแวร์และเปลี่ยนตัวเลขค่าแฮชบนเว็บเพจปลอมพร้อมกันได้</li>
      <li>ผู้ผลิตจึงใช้ <strong>Private Key ของบริษัทผู้ผลิต</strong> เซ็นรับรอง (Sign) บนค่าแฮชของเฟิร์มแวร์เพื่อสร้าง <strong>Digital Signature</strong></li>
      <li>ตัวเราเตอร์จะตรวจสอบลายมือชื่อด้วย <strong>Public Key ของผู้ผลิต</strong> ที่ฝังอยู่ในชิปฮาร์ดแวร์ หากค่าแฮชที่ถอดรหัสได้ตรงกัน แสดงว่า (1) เฟิร์มแวร์ไม่ถูกแก้ไข (Integrity), (2) มาจากผู้ผลิตตัวจริง (Authentication), และ (3) ผู้ผลิตไม่สามารถปฏิเสธความรับผิดชอบได้ (Non-repudiation)</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): ฟังก์ชันแฮช (เช่น SHA-256) เป็นกระบวนการทางเดียวสำหรับตรวจสอบความถูกต้องสมบูรณ์ (Integrity) โดยการเปลี่ยนเพียง 1 บิตจะทำให้ผลลัพธ์เปลี่ยนไปโดยสิ้นเชิง (Avalanche Effect) และเมื่อนำค่าแฮชไปเข้ารหัสด้วย Private Key ของผู้ส่ง จะได้เป็น ลายมือชื่อดิจิทัล (Digital Signature) ที่ให้ทั้ง Integrity, Authentication และ Non-repudiation</div>
</div>
`;

const anchor518 = '<h3 id="topic-5-1-tpm-vs-hsm">';
const idx518 = content.indexOf(anchor518);
if (idx518 === -1) throw new Error('Anchor 5.1.8 not found');
const secClose517 = content.lastIndexOf('</section>', idx518);
content = content.slice(0, secClose517) + example3 + '\n' + content.slice(secClose517);

// 4. Example 4: SIEM Event Correlation in Section 5.2.2
const example4 = `
<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การตรวจจับการโจมตีข้ามเซิร์ฟเวอร์ด้วย SIEM Event Correlation</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> องค์กรมีเซิร์ฟเวอร์ 5 เครื่องในระบบงาน และได้รับเหตุการณ์ล็อกอินล้มเหลว (Event ID 4625) เฉลี่ยวันละหลายร้อยครั้งจากผู้ใช้ทั่วไปที่พิมพ์รหัสผ่านผิด หากดูแยกทีละเครื่องจะไม่มีอะไรผิดปกติ</div>
  <div class="reading-example-step"><strong>2. เหตุการณ์การโจมตีแบบ Password Spraying:</strong>
    <ul>
      <li>ผู้โจมตีสุ่มใช้รหัสผ่านยอดนิยมอย่าง "Winter2026!" ยิงทดสอบไปยังบัญชีพนักงาน 100 คนบนเซิร์ฟเวอร์ 5 เครื่องพร้อมกัน โดยเว้นช่วงไม่ให้บัญชีใดบัญชีหนึ่งถูกล็อก</li>
      <li>เซิร์ฟเวอร์แต่ละเครื่องบันทึกเฉพาะล็อกอินล้มเหลวเครื่องละ 20 ครั้ง ซึ่งผู้ดูแลระบบแต่ละเครื่องมองว่าเป็นเหตุการณ์ปกติ (Isolated Log Noise)</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. พลังของ SIEM Event Correlation (Connecting the Dots):</strong>
    <ul>
      <li>ระบบ SIEM ดึงล็อก (Log Ingestion &amp; Aggregation) จากเซิร์ฟเวอร์ทั้ง 5 เครื่อง, ไฟร์วอลล์, และ VPN Gateway มารวมที่ศูนย์กลาง</li>
      <li><strong>Correlation Rule:</strong> มีการตั้งกฎว่า <em>"หากมี IP แอดเดรสเดียวกัน พยายามล็อกอินล้มเหลวด้วยรหัสผ่านเดียวกัน ไปยังบัญชีผู้ใช้มากกว่า 10 บัญชี ภายในเวลา 5 นาที ข้ามเครื่องเซิร์ฟเวอร์มากกว่า 2 เครื่อง ให้จัดเป็นภัยคุกคามระดับสูง"</em></li>
      <li>เครื่องยนต์ Event Correlation ทำการจับคู่เวลา (Time-window), IP ต้นทาง และชื่อผู้ใช้ข้ามอุปกรณ์ทั้ง 5 เครื่องเข้าด้วยกัน แล้วสรุปเป็น <strong>High-Severity Alert: Distributed Password Spraying Attack</strong> ทันที</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>4. การตอบสนองอัตโนมัติ (Automated Containment):</strong> ระบบ SIEM สั่งการไปยังไฟร์วอลล์เพื่อขึ้นบัญชีดำบล็อก IP ของผู้โจมตี และแจ้งเตือนให้นักวิเคราะห์ SOC ดำเนินการรีเซ็ตรหัสผ่านบัญชีพนักงานที่มีความเสี่ยง</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): Log Aggregation คือการรวบรวมล็อกมาไว้ที่เดียว แต่หัวใจสำคัญที่แท้จริงของ SIEM คือ Event Correlation ซึ่งเป็นการเชื่อมโยงความสัมพันธ์ของล็อกหลายร้อยรายการจากหลายอุปกรณ์เข้าด้วยกันตามเวลาและตรรกะ เพื่อตรวจจับการโจมตีที่ซับซ้อนซึ่งไม่สามารถมองเห็นได้จากการดูล็อกทีละเครื่อง</div>
</div>
`;

const anchor523 = '<h3 id="topic-5-2-edr-antivirus">';
const idx523 = content.indexOf(anchor523);
if (idx523 === -1) throw new Error('Anchor 5.2.3 not found');
const secClose522 = content.lastIndexOf('</section>', idx523);
content = content.slice(0, secClose522) + example4 + '\n' + content.slice(secClose522);

// 5. Example 5: Incident Response Lifecycle in Section 5.3.3
const example5 = `
<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การรับมือวิกฤตแรนซัมแวร์ตามวงจร Incident Response Lifecycle 6 ขั้นตอน</div>
  <div class="reading-example-step"><strong>1. Preparation (การเตรียมความพร้อม):</strong> องค์กรมีแผน IRP จัดตั้งทีม CSIRT มีการติดตั้งซอฟต์แวร์ EDR บนทุกเครื่อง และทำระบบสำรองข้อมูลแบบ Immutable Cloud Backup ตลอดจนซ้อมแผน Tabletop Exercise ทุกปี</div>
  <div class="reading-example-step"><strong>2. Detection &amp; Analysis (การตรวจจับและวิเคราะห์):</strong>
    <ul>
      <li>เวลา 09:15 น. ระบบ EDR ตรวจพบลักษณะการเข้ารหัสไฟล์ผิดปกติบนเครื่องของแผนกจัดซื้อ และแจ้งเตือนมายัง SIEM</li>
      <li>นักวิเคราะห์ SOC วิเคราะห์ Signature ยืนยันว่าคือแรนซัมแวร์ LockBit ที่พยายามเชื่อมต่อ C2 Server เพื่อดาวน์โหลดเพย์โหลดเพิ่มเติม</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. Containment (การควบคุมและกักกันความเสียหาย):</strong>
    <ul>
      <li><strong>Short-term Containment:</strong> ทีม CSIRT สั่ง EDR กักกันเครื่อง (Network Isolation) ตัดสัญญาณ Wi-Fi และดึงสาย LAN ทันทีเพื่อหยุดการแพร่กระจายไปยังเซิร์ฟเวอร์ส่วนกลาง</li>
      <li>บล็อกโดเมนและ IP ของ C2 Server บน External Firewall ทั่วทั้งองค์กร</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>4. Eradication (การกำจัดต้นตอ):</strong>
    <ul>
      <li>ตรวจพบว่าผู้โจมตีเข้ามาทางช่องโหว่ VPN ที่ไม่ได้แพตช์ ทีมความปลอดภัยจึงทำการติดตั้งแพตช์อุดช่องโหว่ VPN ทันที</li>
      <li>สั่งล้างระบบเครื่องที่ติดมัลแวร์ทั้งหมดและติดตั้งระบบปฏิบัติการใหม่จาก Gold Image ที่สะอาด (Re-imaging) พร้อมทั้งบังคับรีเซ็ตรหัสผ่านและโทเค็นเซสชันของบัญชีที่เกี่ยวข้องทั้งหมด</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>5. Recovery (การกู้คืนระบบ):</strong> ทีม IT กู้คืนไฟล์ข้อมูลจากระบบ Immutable Backup ของคืนก่อนหน้า ทำการตรวจสอบความสมบูรณ์และสแกนหามัลแวร์ซ้ำ จากนั้นเปิดระบบให้พนักงานจัดซื้อกลับมาทำงานตามปกติ พร้อมเฝ้าระวังทราฟฟิกเครือข่ายอย่างใกล้ชิดตลอด 48 ชั่วโมง</div>
  <div class="reading-example-step"><strong>6. Post-Incident Review / Lessons Learned (การทบทวนหลังเหตุการณ์):</strong> ทีม CSIRT และผู้บริหารประชุมทบทวนเหตุการณ์ บันทึก Timeline และช่องโหว่ นำข้อผิดพลาดมาปรับปรุงกระบวนการ Patch Management ให้มีระยะเวลาติดตั้งแพตช์เร็วขึ้น และจัดฝึกอบรมพนักงานเรื่องการสังเกตไฟล์แนบอันตรายเพิ่มเติม</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): กระบวนการรับมือเหตุการณ์ความมั่นคงปลอดภัยต้องดำเนินตาม 6 ขั้นตอนของ NIST SP 800-61 / ISC2: การเตรียมพร้อม &rarr; การตรวจจับและวิเคราะห์ &rarr; การกักกัน &rarr; การกำจัดต้นตอ &rarr; การกู้คืนระบบ &rarr; และการสรุปบทเรียน โดยห้ามข้ามขั้นตอนการกักกัน (Containment) ก่อนไปเริ่มกำจัดมัลแวร์ เพื่อป้องกันไม่ให้มัลแวร์ลุกลามไปยังระบบอื่น</div>
</div>
`;

const anchor534 = '<h3 id="topic-5-3-evidence-handling-chain-of-custody">';
const idx534 = content.indexOf(anchor534);
if (idx534 === -1) throw new Error('Anchor 5.3.4 not found');
const secClose533 = content.lastIndexOf('</section>', idx534);
content = content.slice(0, secClose533) + example5 + '\n' + content.slice(secClose533);

// Write back with UTF-8
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully enriched Domain 5 and cleaned duplicate diagrams!');

