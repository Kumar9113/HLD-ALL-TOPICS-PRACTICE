// Flow to implement:
// 1. Create booking PENDING.
// 2. Command Flight Service: reserve seats.
// 3. On success, command Payment Service.
// 4. Payment success -> CONFIRM booking.
// 5. Payment failure -> release seats -> cancel booking.
//
// Every step is a local transaction.
// Compensation is a new transaction, not rollback of another service's committed transaction.
// Add idempotency and outbox when turning this into production code.
console.log('Write the state transitions before writing the HTTP/RabbitMQ code.');
