import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"idempotency",instance}));
const seen=new Map();app.post("/payment",(q,r)=>{const k=q.get("Idempotency-Key");if(seen.has(k))return r.json({replayed:true,result:seen.get(k)});const result={paymentId:"pay-"+Date.now()};seen.set(k,result);r.status(201).json(result);});
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
