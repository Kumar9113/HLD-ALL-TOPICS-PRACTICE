import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"requirements to architecture",instance}));
app.get("/architecture",(req,res)=>res.json({functional:["create booking","cancel booking"],nonFunctional:["99.9% availability","p95 < 200ms"],bottleneck:"database"}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
