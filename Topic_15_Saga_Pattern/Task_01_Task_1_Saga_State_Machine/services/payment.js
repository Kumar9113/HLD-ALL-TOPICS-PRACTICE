import express from "express"; const app=express(); app.get("/health",(q,r)=>r.json({service:"payment",status:"UP"})); app.listen(3000);
