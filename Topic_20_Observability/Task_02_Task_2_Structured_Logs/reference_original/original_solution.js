import express from 'express';
import crypto from 'crypto';
const app=express();
app.use((req,res,next)=>{
 const requestId=req.header('x-request-id')||crypto.randomUUID();
 req.requestId=requestId;
 console.log(JSON.stringify({level:'INFO',event:'request_started',requestId,path:req.path}));
 res.on('finish',()=>console.log(JSON.stringify({level:'INFO',event:'request_finished',requestId,status:res.statusCode})));
 next();
});
app.get('/health',(req,res)=>res.json({status:'UP'}));
app.listen(3000);
