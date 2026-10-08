// Consumer algorithm:
// attemptCount = message metadata / retry queue level
// try:
//   parse + validate
//   if event already processed: ACK
//   else process + record eventId atomically
//   ACK
// catch transient:
//   send to retry queue with delay if attempts < 3
// catch permanent OR attempts >= 3:
//   dead-letter the message
//
// Never blindly NACK(requeue=true) forever.
console.log('Draw Main Queue -> Consumer -> Retry Queue -> Main Queue -> DLQ.');
