import { parseInline, formatBilingualTermCell } from '../js/core/markdown-parser.js';

const sample1 = '<div class="reading-bilingual-term"><span class="reading-term-en">**Role Name**</span><span class="reading-term-th">(ชื่อบทบาทหน้าที่)</span></div>';
console.log('Result 1:', parseInline(sample1));

const sample2 = '**คำศัพท์**';
console.log('Result 2:', parseInline(sample2));

const sample3 = 'ประเภท Threat Actor';
console.log('Result 3:', parseInline(sample3));

