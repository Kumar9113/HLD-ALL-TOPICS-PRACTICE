// Worker logic:
// 1. Select PENDING outbox events.
// 2. Publish event to RabbitMQ.
// 3. Mark PUBLISHED.
//
// Critical failure window:
// publish succeeds -> worker crashes -> status is still PENDING
// => event may be published again.
//
// Therefore Outbox gives reliable publication intent, not magical exactly-once.
// Consumers should be idempotent.
console.log('Implement worker with an eventId and idempotent consumers.');
