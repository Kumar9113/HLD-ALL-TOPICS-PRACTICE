class Snowflake{
 constructor(workerId){this.workerId=workerId;this.last=0;this.seq=0;}
 next(){
   let now=Date.now();
   if(now===this.last){this.seq=(this.seq+1)&4095;if(this.seq===0)while(Date.now()===now){}}
   else this.seq=0;
   now=Date.now(); this.last=now;
   return ((BigInt(now)<<22n)|(BigInt(this.workerId)<<12n)|BigInt(this.seq)).toString();
 }
}
const g=new Snowflake(7);
console.log(g.next()); console.log(g.next());
