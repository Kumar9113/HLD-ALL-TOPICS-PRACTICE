import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"capacity estimation",instance}));
app.get("/capacity",(q,r)=>{const dau=Number(q.query.dau||1000000),actions=Number(q.query.actions||10),peak=Number(q.query.peak||3);const daily=dau*actions;r.json({dau,averageRps:daily/86400,peakRps:daily/86400*peak,storageGBPerYear:(dau*365*200)/1e9});});
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
