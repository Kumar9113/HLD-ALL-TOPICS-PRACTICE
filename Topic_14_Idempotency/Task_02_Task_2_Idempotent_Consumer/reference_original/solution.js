// Pseudocode implementation target:
// eventId -> processed_events(event_id PRIMARY KEY)
// BEGIN
//   if eventId exists: ACK and stop
//   perform business update
//   INSERT eventId
// COMMIT
//
// Keep the business update and deduplication record in the same local DB transaction.
console.log('Practice this together with Topic 9 RabbitMQ.');
