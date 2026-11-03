// Counts come from actual published entries; existing JSON is never rewritten.
import domain1 from '../content/isc2-cc-2026/vocabulary/domain-1.json' with {type:'json'};
import domain2 from '../content/isc2-cc-2026/vocabulary/domain-2.json' with {type:'json'};
import domain3 from '../content/isc2-cc-2026/vocabulary/domain-3.json' with {type:'json'};
import domain4 from '../content/isc2-cc-2026/vocabulary/domain-4.json' with {type:'json'};
import domain5 from '../content/isc2-cc-2026/vocabulary/domain-5.json' with {type:'json'};
export const vocabularyCount=[domain1,domain2,domain3,domain4,domain5].reduce((n,d)=>n+d.entries.length,0);
