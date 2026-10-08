import express from "express";
const app=express();
app.get("/health",(req,res)=>res.json({service:"flight",status:"UP"}));
app.get("/",(req,res)=>res.json({service:"flight"}));
app.listen(3000,"0.0.0.0");
