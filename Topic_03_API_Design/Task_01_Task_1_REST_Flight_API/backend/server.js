import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"REST flight API",instance}));
const flights=Array.from({length:25},(_,i)=>({id:i+1,from:"HYD",to:i%2?"DEL":"BLR"})); app.get("/flights",(req,res)=>{const page=Number(req.query.page||1),limit=Number(req.query.limit||5),data=flights.filter(x=>!req.query.to||x.to===req.query.to);res.json({page,limit,total:data.length,data:data.slice((page-1)*limit,page*limit)});}); app.post("/flights",(req,res)=>res.status(201).json({id:Date.now(),...req.body}));
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
