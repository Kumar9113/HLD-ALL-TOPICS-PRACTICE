import crypto from "crypto";
import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"UUID and Base62 public identifiers",instance}));
app.get("/id",(q,r)=>{const id=crypto.randomUUID();r.json({uuid:id,publicId:Buffer.from(id).toString("base64url")});});
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
