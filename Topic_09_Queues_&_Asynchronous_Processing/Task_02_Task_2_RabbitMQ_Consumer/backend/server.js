import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"RabbitMQ consumer producer endpoint",instance}));
app.post("/consume-test",(q,r)=>r.json({queue:"booking-events",ack:"worker handles ACK"}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
