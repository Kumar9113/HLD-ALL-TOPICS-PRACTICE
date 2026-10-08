import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"HTTP methods status codes headers",instance}));
app.post("/echo",(req,res)=>res.status(201).set("X-Demo","hld").json({method:req.method,body:req.body}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
