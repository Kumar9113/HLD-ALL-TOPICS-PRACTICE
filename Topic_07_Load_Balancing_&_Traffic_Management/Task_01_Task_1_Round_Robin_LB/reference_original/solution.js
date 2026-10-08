import express from 'express';
import http from 'http';
const app=express();
const targets=(process.env.TARGETS||'http://app1:3001,http://app2:3002').split(',').filter(Boolean);
let i=0;

app.get('/proxy',(req,res)=>{
 const target=targets[i++%targets.length];
 const u=new URL('/health',target);
 http.get(u,r=>{
   let body=''; r.on('data',c=>body+=c);
   r.on('end',()=>res.status(r.statusCode).send(body));
 }).on('error',()=>res.status(503).json({error:'target unavailable'}));
});
app.listen(3000,()=>console.log('LB on 3000'));
