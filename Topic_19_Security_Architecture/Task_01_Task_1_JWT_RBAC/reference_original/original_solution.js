import express from 'express';
import jwt from 'jsonwebtoken';
const app=express(); app.use(express.json());
const SECRET=process.env.JWT_SECRET||'dev-secret';

function authenticate(req,res,next){
 const h=req.headers.authorization;
 if(!h?.startsWith('Bearer '))return res.status(401).json({error:'Unauthorized'});
 try{req.user=jwt.verify(h.slice(7),SECRET);next();}
 catch{return res.status(401).json({error:'Invalid token'});}
}
function requireRole(...roles){
 return (req,res,next)=>{
  if(!roles.includes(req.user.role))return res.status(403).json({error:'Forbidden'});
  next();
 };
}
app.get('/admin',authenticate,requireRole('ADMIN'),(req,res)=>res.json({ok:true}));
app.listen(3000,()=>console.log('security demo on 3000'));
