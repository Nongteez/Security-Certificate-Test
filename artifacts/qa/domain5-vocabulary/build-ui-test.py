from pathlib import Path
s=Path('tools/verify-vocabulary-domain4.mjs').read_text(encoding='utf8')
body=s[s.index('// Execute the actual screen'):]
body=body.replace("const domain5=find('#vocab-domain-select').children.find(c=>c.value==='5');assert.ok(domain5.disabled);",'')
body=body.replace("value==='4'","value==='5'").replace("'4'","'5'").replace("['4.1','4.2','4.3']","['5.1','5.2','5.3','5.4','5.5']").replace('4.3','5.5').replace('Virtual Local Area Network','Static Application Security Testing').replace('PASS real-screen Node behavior: D4','PASS real-screen Node behavior: D5')
header="""import assert from 'node:assert/strict';
import {loadVocabularyData} from '../js/core/vocabulary-loader.js';
import {renderVocabularyScreen} from '../js/ui/screen-vocabulary.js';
import {createVocabularyDOM,change,input,check} from './fixtures/vocabulary-dom.mjs';
const all=await loadVocabularyData('all');const data=await loadVocabularyData(5);
"""
Path('tools/verify-vocabulary-domain5-ui.mjs').write_text(header+body,encoding='utf8')
