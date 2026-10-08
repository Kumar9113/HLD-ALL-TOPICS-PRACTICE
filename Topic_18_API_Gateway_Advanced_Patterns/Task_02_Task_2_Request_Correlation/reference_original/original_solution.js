import express from 'express';
import crypto from 'crypto';
const app=express();

app.use((req,res,next)=>{
 const id=req.header('x-request-id')||crypto.randomUUID();
 req.requestId=id; res.setHeader('x-request-id',id); next();
});
app.get('/api/bookings',(req,res)=>res.json({requestId:req.requestId}));
app.listen(3000,()=>console.log('gateway on 3000'));
