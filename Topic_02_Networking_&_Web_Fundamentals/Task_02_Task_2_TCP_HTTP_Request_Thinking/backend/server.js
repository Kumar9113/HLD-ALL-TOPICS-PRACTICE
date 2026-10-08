import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"DNS TCP TLS HTTP request path",instance}));
app.get("/network-path",(req,res)=>res.json({steps:["DNS","TCP","TLS when HTTPS","HTTP request","response"],host:req.headers.host}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
