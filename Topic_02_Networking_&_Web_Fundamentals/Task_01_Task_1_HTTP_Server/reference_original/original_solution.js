import http from 'http';

const server = http.createServer((req,res)=>{
  res.setHeader('Content-Type','application/json');

  if (req.url === '/health' && req.method === 'GET')
    return res.end(JSON.stringify({status:'UP'}));

  if (req.url === '/api/flights' && req.method === 'GET')
    return res.end(JSON.stringify([{id:101,from:'HYD',to:'DEL'}]));

  res.statusCode=404;
  res.end(JSON.stringify({error:'Not Found'}));
});

server.listen(3000,()=>console.log('HTTP server on 3000'));
