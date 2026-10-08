import { promises as dns } from 'dns';
import https from 'https';

(async () => {
  const host = 'example.com';
  const addresses = await dns.lookup(host, { all: true });
  console.log('1. DNS ->', addresses);
  console.log('2. TCP/TLS -> HTTPS connection');
  https.get(`https://${host}`, res => {
    console.log('3. HTTP status ->', res.statusCode);
    res.resume();
  }).on('error', err => console.error('network failure ->', err.message));
})();
