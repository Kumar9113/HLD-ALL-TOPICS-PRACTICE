// Lightweight load-test reality exercise.
// Start a local API and run this script with Node.
// It measures completed requests rather than assuming a theoretical RPS.
import http from 'http';
const total = Number(process.env.REQUESTS || 1000);
const concurrency = Number(process.env.CONCURRENCY || 50);
let next = 0, completed = 0, failed = 0, started = Date.now();

function worker() {
  if (next >= total) return;
  next++;
  const req = http.get('http://host.docker.internal:3000/health', res => {
    res.resume();
    res.on('end', () => {
      if (res.statusCode >= 200 && res.statusCode < 500) completed++; else failed++;
      if (completed + failed === total) {
        const sec = (Date.now() - started) / 1000;
        console.log({ total, completed, failed, seconds: sec, measuredRps: total / sec });
      } else worker();
    });
  });
  req.on('error', () => { failed++; if (completed + failed < total) worker(); });
}
for (let i=0; i<concurrency; i++) worker();
