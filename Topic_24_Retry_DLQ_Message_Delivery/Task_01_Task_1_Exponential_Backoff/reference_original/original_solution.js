async function retry(operation,maxRetries=3){
 for(let attempt=0;attempt<=maxRetries;attempt++){
  try{return await operation();}
  catch(err){
   if(attempt===maxRetries)throw err;
   const base=1000*2**attempt;
   const jitter=Math.floor(Math.random()*500);
   const delay=base+jitter;
   console.log({attempt:attempt+1,delay});
   await new Promise(r=>setTimeout(r,delay));
  }
 }
}
(async()=>{
 let n=0;
 const result=await retry(async()=>{
  n++; if(n<3)throw new Error('temporary'); return 'SUCCESS';
 });
 console.log(result);
})();
