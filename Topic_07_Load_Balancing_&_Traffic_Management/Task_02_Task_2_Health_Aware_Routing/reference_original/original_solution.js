// Practice task: run two service instances exposing /health/ready.
// The load balancer should route only to READY instances.
// Key interview point: a load balancer needs a health signal; it does not magically know a server is down.
// Extend Task 1 with a health-check cache and remove unhealthy targets.
console.log('Implement: check /health/ready -> keep only healthy targets -> round robin.');
