import express from "express";
import os from "os";
const app=express(); app.use(express.json()); const instance=process.env.INSTANCE_NAME||os.hostname();
app.get("/health",(req,res)=>res.json({status:"UP",instance}));
app.get("/",(req,res)=>res.json({concept:"Snowflake style distributed IDs",instance}));
let seq=0;app.get("/id",(q,r)=>{const id=Date.now()*1000+(seq++%1000);r.json({id,sortable:true});});
app.listen(3000,"0.0.0.0",()=>console.log(instance+" listening"));
