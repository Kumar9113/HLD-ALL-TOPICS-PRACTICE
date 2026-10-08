import bcrypt from 'bcrypt';
(async()=>{
 const password='hello123';
 const hash=await bcrypt.hash(password,12);
 console.log('stored hash:',hash);
 console.log('correct:',await bcrypt.compare(password,hash));
 console.log('wrong:',await bcrypt.compare('wrong',hash));
})();
