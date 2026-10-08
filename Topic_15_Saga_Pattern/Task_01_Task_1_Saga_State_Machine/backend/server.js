import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"Saga orchestrator",instance}));
app.post("/book",async(q,r)=>{const fail=q.body.failPayment;const steps=["CREATE_BOOKING","RESERVE_FLIGHT"];if(fail)steps.push("PAYMENT_FAILED","RELEASE_FLIGHT","CANCEL_BOOKING");else steps.push("PAYMENT_SUCCESS","CONFIRMED");r.json({steps,compensated:fail});});
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
