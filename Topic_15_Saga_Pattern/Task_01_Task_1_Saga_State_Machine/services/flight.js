import express from "express"; const app=express(); app.get("/health",(q,r)=>r.json({service:"flight",status:"UP"})); app.listen(3000);
