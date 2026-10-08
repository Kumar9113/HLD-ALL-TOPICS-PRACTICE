// docker-compose concept:
// booking-service:
//   build: ./booking
// flight-service:
//   build: ./flight
//
// Inside the Docker network, Booking can call:
// http://flight-service:3000
//
// The service name is resolved by Docker's internal DNS.
// This is basic service discovery, not a full Consul/Eureka registry.
console.log('Think: service name -> current container IP.');
