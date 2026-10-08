import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"Docker DNS service discovery",instance}));
app.get("/discover",(q,r)=>r.json({service:"profile",address:"http://profile:3000",note:"Docker resolves service names"}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
