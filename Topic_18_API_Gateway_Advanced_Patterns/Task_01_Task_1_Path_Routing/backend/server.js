import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"API gateway path routing",instance}));
app.get("/flights/",(q,r)=>r.json({service:"flight"}));app.get("/bookings/",(q,r)=>r.json({service:"booking"}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
