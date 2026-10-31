import fs from 'node:fs';
const root='content/isc2-cc-2026/learning/',q='artifacts/qa/domain-4-completion/';
const traces=[
 ['Summary networking/devices; official AI data-path application','S02–S03; transcript OSI discussion','S03; summary OSI functions','S04–S06; transcript TCP/IP model','S02; RFC 1122 encapsulation correction','S05; RFC 768 and RFC 9293','Original scenario applying source/model boundaries'],
 ['S07,S11; RFC 4291 notation correction','S09–S10; summary addressing','S10; NIST firewall translation distinction','S12; RFC 8504 correction','S13; official AI data path application','Original VPN/data-permission scenario'],
 ['S17–S18; IANA ranges and endpoints','S20–S21; IANA and HTTP/3 qualification','S14; NIST firewall policy','S36; summary IDS/IPS; NIST SP 800-94 supplement','Official AI monitoring application; IDPS uncertainty supplement','Original anomaly/response evidence scenario'],
 ['S16; Apple supported configuration and limits','NIST Bluetooth supplement; missing local teaching explicitly filled','S22–S26; original embedded/ICS/IoT material','S24–S25; NIST final OT safe-change supplement','S23,S26–S27,S37; original lifecycle risks','Official AI wireless/embedded monitoring application','Original controller safety scenario'],
 ['S28,S30; summary segmentation qualifications','S31–S32; zone-policy distinctions','S33; single/multiple-firewall DMZ correction','S34; 802.1Q identifier/routing correction','S35; workload policy example','S37–S39; official AI development/production application','Original camera/recorder path scenario'],
 ['S36; summary layered controls and AI training-data application','S36; independence/availability overclaim correction','S38–S39; NIST Zero Trust resource policy','S35–S39; original combined architecture synthesis','Original internal-device/resource-policy scenario'],
 ['S41–S42; summary cloud overview','S42; self-service governance explanation','S42; official AI scalability application','S42; metering/billing qualification','S42; pooling/network access distinction','Original elasticity/measurement scenario'],
 ['S43,S45,S47–S49; service boundary qualification','S43,S45,S47–S49; application/platform distinction','S44,S46–S49; SaaS data/access duties','S44,S46,S49; AWS runtime supplement','S45–S49; Microsoft component responsibility supplement','Official AI cloud duty application; model/service-specific controls','Original customer-controlled sharing scenario'],
 ['S50–S51; public service versus public data','S52; NIST ownership/location qualification','S54; community governance','S53; NIST inclusive hybrid correction','S55; multi-provider continuity/portability qualification','Original AI/analytics deployment evidence scenario']
];
let out='\n## Per-slide academic traceability\n\nAll rows below identify the teaching source or explicitly authored supplement. New scenarios are original, not copied bank items. Technical references are linked in the academic audit and lesson Info. S15 contributes no teaching.\n\n| Stable slide ID | Source / correction boundary |\n| --- | --- |\n';
const c=JSON.parse(fs.readFileSync(root+'published/catalog.json')),ls=c.domains.find(d=>d.id===4).objectives.flatMap(o=>o.lessons);
for(const [i,s] of ls.entries()){
 const path=root+'published/'+s.lessonPath,l=JSON.parse(fs.readFileSync(path));
 if(i===2&&!l.references.some(r=>r.id==='http3')){l.references.push({id:'http3',title:'RFC 9114 — HTTP/3',authority:'technical-primary',url:'https://www.rfc-editor.org/rfc/rfc9114.html',locator:'HTTP semantics over QUIC; port number alone is incomplete evidence.'});l.slides[1].referenceIds.push('http3');}
 for(const [j,slide] of l.slides.entries())out+=`| ${slide.id} | ${traces[i][j]} |\n`;
 // Add source-specific locators without changing educational fields or IDs.
 const ref=l.references.find(r=>r.id==='d4-notes');ref.locator=traces[i].slice(0,-1).join('; ')+'; full source mapping in domain-4-2026-coverage-matrix.md.';
 fs.writeFileSync(path,JSON.stringify(l,null,2)+'\n');fs.writeFileSync(root+'staged/'+s.lessonPath,JSON.stringify({...l,status:'in-preparation'},null,2)+'\n');
}
const p='docs/plans/isc2-cc-2026/domain-4-2026-coverage-matrix.md';if(!fs.readFileSync(p,'utf8').includes('## Per-slide academic traceability'))fs.appendFileSync(p,out);
fs.writeFileSync(q+'source-traceability.json',JSON.stringify(traces,null,2)+'\n');
