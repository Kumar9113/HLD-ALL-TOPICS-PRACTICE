import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"race condition and atomic update",instance}));
app.post("/seat",(q,r)=>r.json({pattern:t===1?"read-modify-write race":"UPDATE ... WHERE available = true",safe:t===2}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
