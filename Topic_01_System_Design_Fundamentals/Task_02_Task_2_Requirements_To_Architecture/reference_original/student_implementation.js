// Requirements -> architecture exercise.
// Keep this file as the bridge from interview requirements to components.
const requirements = {
  functional: ['search flights', 'create booking', 'cancel booking'],
  nonFunctional: { availability: '99.9%', peakRps: 1000, p95Ms: 200 }
};

const architecture = {
  edge: ['load-balancer', 'api-gateway'],
  services: ['flight-service', 'booking-service', 'payment-service'],
  data: ['postgresql', 'redis'],
  async: ['rabbitmq', 'outbox'],
  reliability: ['idempotency', 'saga', 'observability', 'backup']
};

console.log(JSON.stringify({requirements, architecture}, null, 2));
