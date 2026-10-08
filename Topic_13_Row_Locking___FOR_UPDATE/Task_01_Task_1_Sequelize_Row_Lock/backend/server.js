import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"row locking FOR UPDATE",instance}));
app.post("/lock",async(q,r)=>{await new Promise(x=>setTimeout(x,1000));r.json({lock:"SELECT FOR UPDATE",instance});});
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
