import crypto from 'crypto';
const alphabet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function base62(n){
 if(n===0)return '0'; let s='';
 while(n>0){s=alphabet[n%62]+s;n=Math.floor(n/62)}
 return s;
}
console.log('UUID:',crypto.randomUUID());
const internalId=123456789;
console.log('Public code:',base62(internalId));
