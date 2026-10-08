import http from 'http';
const targets = (process.env.TARGETS || 'http://app1:3001,http://app2:3002')
  .split(',').filter(Boolean);
const healthy = new Map(targets.map(t => [t, true]));
let cursor = 0;

async function check(target) {
  return new Promise(resolve => {
    const req = http.get(new URL('/health/ready', target), res => {
      res.resume(); resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => { req.destroy(); resolve(false); });
  });
}

setInterval(async () => {
  for (const t of targets) healthy.set(t, await check(t));
}, 3000);

const server = http.createServer((req, res) => {
  const ready = targets.filter(t => healthy.get(t));
  if (!ready.length) return res.writeHead(503).end('no ready targets');
  const target = ready[cursor++ % ready.length];
  http.get(new URL('/health/ready', target), r => {
    let body=''; r.on('data', c => body += c);
    r.on('end', () => { res.writeHead(r.statusCode); res.end(body); });
  }).on('error', () => res.writeHead(503).end('target failed'));
});
server.listen(3000, () => console.log('health-aware LB on 3000'));
