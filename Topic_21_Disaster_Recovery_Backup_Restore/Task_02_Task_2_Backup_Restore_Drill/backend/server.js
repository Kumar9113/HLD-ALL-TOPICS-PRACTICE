import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"RPO and RTO / backup restore",instance}));
app.get("/recovery",(q,r)=>r.json({rpoMinutes:60,rtoMinutes:120,backupFrequency:"hourly"}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
