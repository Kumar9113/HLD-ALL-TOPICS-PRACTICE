// Exercise: do not assume RPS/server.
// 1. Run your Node API.
// 2. Load test it (e.g. ApacheBench: ab -n 10000 -c 100 http://localhost:3000/health).
// 3. Record stable RPS at acceptable p95 latency.
// 4. Use that measured safe RPS in Task 1.
// 5. Add 20-30% headroom and one failure-capacity instance.
console.log('Capacity rule: estimate -> load test -> measure -> size -> add headroom.');
