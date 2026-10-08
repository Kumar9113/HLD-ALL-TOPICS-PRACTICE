import http from "http";
http.createServer((req,res)=>{res.end("profile ok");}).listen(3000,"0.0.0.0");
