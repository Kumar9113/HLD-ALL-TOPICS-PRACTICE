import http from 'http';

const port = Number(process.env.PORT || 3000);
const instance = process.env.INSTANCE || 'app';
const ready = process.env.READY || 'true';

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ instance, ready: ready === 'true' }));
}).listen(port, '0.0.0.0');
