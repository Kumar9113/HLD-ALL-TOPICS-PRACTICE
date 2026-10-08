const rpoMinutes=5;
const rtoMinutes=15;
console.log('Maximum acceptable data loss:',rpoMinutes,'minutes');
console.log('Maximum acceptable downtime:',rtoMinutes,'minutes');
// Ask: do daily backups alone satisfy RPO=5 minutes? No.
// Consider WAL/PITR/replication depending on the design.
