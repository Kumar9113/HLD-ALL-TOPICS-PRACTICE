import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"idempotent create API",instance}));
const store=new Map(); app.post("/orders",(req,res)=>{const key=req.get("Idempotency-Key");if(!key)return res.status(400).json({error:"Idempotency-Key required"});if(store.has(key))return res.json({replayed:true,...store.get(key)});const result={orderId:"ord-"+Date.now(),body:req.body};store.set(key,result);res.status(201).json(result);});
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
