// Drill checklist:
// 1. Take a full backup.
// 2. Verify the backup exists and is readable.
// 3. Restore into a fresh database.
// 4. Run row-count and checksum/business checks.
// 5. Measure elapsed recovery time.
// 6. Record whether RTO was met.
// 7. Repeat periodically.
//
// Production lesson: "we have backups" is not proof that recovery works.
console.log('Run this drill on a disposable PostgreSQL environment.');
