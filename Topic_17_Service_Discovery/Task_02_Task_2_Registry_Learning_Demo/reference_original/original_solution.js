import express from 'express';
const app=express(); app.use(express.json());
const registry=new Map();

app.post('/register',(req,res)=>{
 registry.set(req.body.name,{url:req.body.url,lastSeen:Date.now()});
 res.status(201).json({ok:true});
});
app.get('/services/:name',(req,res)=>{
 const s=registry.get(req.params.name);
 if(!s)return res.status(404).json({error:'not found'});
 res.json(s);
});
app.listen(4000,()=>console.log('registry on 4000'));
