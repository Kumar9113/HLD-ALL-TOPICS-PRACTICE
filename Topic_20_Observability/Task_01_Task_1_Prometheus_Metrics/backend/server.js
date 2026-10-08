import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"Prometheus metrics",instance}));
let count=0;app.use((q,r,next)=>{count++;next();});app.get("/metrics",(q,r)=>r.type("text").send("http_requests_total "+count+"\n"));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
