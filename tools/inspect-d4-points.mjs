import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-4.md', 'utf8');

const s1 = text.indexOf('ตารางเปรียบเทียบความสัมพันธ์ระหว่างแบบจำลอง OSI และ TCP/IP:');
console.log('--- s1 (OSI/TCP table) ---');
console.log(text.slice(s1, s1 + 800));

const s2 = text.indexOf('ความมั่นคงปลอดภัยของระบบฝังตัว (Embedded Systems)');
console.log('--- s2 (ICS/SCADA) ---');
console.log(text.slice(s2, s2 + 600));

const s3 = text.indexOf('data-diagram="cloudSharedResponsibility"');
console.log('--- s3 (Shared Responsibility) ---');
console.log(text.slice(s3 - 100, s3 + 400));

