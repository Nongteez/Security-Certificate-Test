import fs from 'node:fs';

const content = fs.readFileSync('js/core/diagram-generator.js', 'utf8');
const idx = content.indexOf('cryptographyPipelines: `');
const endIdx = content.indexOf('siemTelemetryPipeline: `', idx);

const cryptoCode = content.slice(idx, endIdx);
console.log('cryptographyPipelines length:', cryptoCode.length);
console.log('Sample from beginning:');
console.log(cryptoCode.slice(0, 1500));

