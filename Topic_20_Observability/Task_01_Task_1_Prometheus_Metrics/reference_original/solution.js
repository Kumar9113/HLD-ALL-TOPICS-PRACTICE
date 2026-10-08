import express from 'express';
import client from 'prom-client';
const app=express();
client.collectDefaultMetrics();
const requests=new client.Counter({
 name:'http_requests_total',help:'Total HTTP requests',
 labelNames:['method','route','status']
});
app.use((req,res,next)=>{
 res.on('finish',()=>requests.inc({method:req.method,route:req.path,status:String(res.statusCode)}));
 next();
});
app.get('/health',(req,res)=>res.json({status:'UP'}));
app.get('/metrics',async(req,res)=>{
 res.set('Content-Type',client.register.contentType);
 res.end(await client.register.metrics());
});
app.listen(3000,()=>console.log('metrics on 3000'));
