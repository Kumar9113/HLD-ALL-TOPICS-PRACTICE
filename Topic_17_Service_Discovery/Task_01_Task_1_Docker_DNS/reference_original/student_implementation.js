// This file is intentionally a client of Docker DNS.
// In Compose, "flight-service" resolves to the current container IP.
import http from 'http';
const host = process.env.FLIGHT_SERVICE || 'flight-service';
http.get(`http://${host}:3000/health`, res => {
  let body=''; res.on('data', c => body += c);
  res.on('end', () => console.log('discovered service response:', body));
}).on('error', err => console.error('service discovery failed:', err.message));
