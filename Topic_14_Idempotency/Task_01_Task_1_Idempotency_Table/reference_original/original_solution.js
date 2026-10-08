import { Sequelize, DataTypes } from 'sequelize';
const sequelize=new Sequelize({dialect:'sqlite',storage:'idem.sqlite',logging:false});
const Idem=sequelize.define('Idempotency',{
 key:{type:DataTypes.STRING,primaryKey:true},
 status:DataTypes.INTEGER,
 response:{type:DataTypes.TEXT}
});
(async()=>{
 await sequelize.sync();
 const key='booking-key-123';
 const [row,created]=await Idem.findOrCreate({
   where:{key},
   defaults:{status:201,response:JSON.stringify({bookingId:'BK1'})}
 });
 console.log(created?'FIRST REQUEST':'DUPLICATE',JSON.parse(row.response));
})();
