// In production the Set belongs in a database table with a UNIQUE/PRIMARY KEY.
const processedEvents = new Set();
function consume(event) {
  if (processedEvents.has(event.eventId)) {
    console.log('DUPLICATE -> ACK without repeating business effect', event.eventId);
    return;
  }
  console.log('PROCESS business effect', event.eventId);
  processedEvents.add(event.eventId);
  console.log('ACK', event.eventId);
}
consume({eventId:'EV1', bookingId:'BK1'});
consume({eventId:'EV1', bookingId:'BK1'});
