import fs from 'node:fs';

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|size|extmetadata|mime`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'SECCertTest-VisualLearning/1.0 (educational audit)' }
  });
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];

  const pages = Object.values(data.query.pages);
  return pages.map(p => {
    const info = p.imageinfo ? p.imageinfo[0] : {};
    const meta = info.extmetadata || {};
    return {
      title: p.title,
      url: info.url,
      thumbUrl: info.thumburl,
      width: info.width,
      height: info.height,
      mime: info.mime,
      license: meta.LicenseShortName ? meta.LicenseShortName.value : 'Unknown',
      artist: meta.Artist ? meta.Artist.value.replace(/<[^>]*>/g, '') : 'Unknown',
      credit: meta.Credit ? meta.Credit.value.replace(/<[^>]*>/g, '') : '',
      description: meta.ImageDescription ? meta.ImageDescription.value.replace(/<[^>]*>/g, '').slice(0, 150) : ''
    };
  });
}

async function run() {
  console.log('Searching Wikimedia Commons for Security Tokens...');
  const tokens = await searchCommons('Yubikey 5 NFC filetype:bitmap');
  console.log('Tokens:', JSON.stringify(tokens.slice(0, 3), null, 2));

  console.log('\nSearching Wikimedia Commons for Biometric Scanner...');
  const bio = await searchCommons('Fingerprint scanner access control filetype:bitmap');
  console.log('Biometric:', JSON.stringify(bio.slice(0, 3), null, 2));

  console.log('\nSearching Wikimedia Commons for Physical Access Turnstile...');
  const turnstiles = await searchCommons('Access control turnstiles optical filetype:bitmap');
  console.log('Turnstiles:', JSON.stringify(turnstiles.slice(0, 3), null, 2));

  console.log('\nSearching Wikimedia Commons for HSM and TPM...');
  const hsmTpm = await searchCommons('Hardware security module OR "Trusted Platform Module" chip filetype:bitmap');
  console.log('HSM / TPM:', JSON.stringify(hsmTpm.slice(0, 4), null, 2));
}

run().catch(console.error);
