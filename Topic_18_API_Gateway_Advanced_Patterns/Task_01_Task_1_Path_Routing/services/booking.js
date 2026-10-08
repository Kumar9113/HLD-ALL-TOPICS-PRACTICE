import express from "express";
const app=express();
app.get("/health",(req,res)=>res.json({service:"booking",status:"UP"}));
app.get("/",(req,res)=>res.json({service:"booking"}));
app.listen(3000,"0.0.0.0");
