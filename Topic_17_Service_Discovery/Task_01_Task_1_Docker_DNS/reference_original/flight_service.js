import http from 'http';

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ service: 'flight-service', discovery: 'docker-dns' }));
}).listen(3000, '0.0.0.0');
