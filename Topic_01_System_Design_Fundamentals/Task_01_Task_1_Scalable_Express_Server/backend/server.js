import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"horizontal scaling and health checks",instance}));
app.get("/slow",async(req,res)=>{await new Promise(r=>setTimeout(r,250));res.json({instance,slow:true});});
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
