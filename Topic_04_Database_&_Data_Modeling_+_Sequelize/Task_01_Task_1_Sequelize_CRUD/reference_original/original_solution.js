import { Sequelize, DataTypes } from 'sequelize';
const sequelize=new Sequelize({dialect:'sqlite',storage:'flights.sqlite',logging:false});

const Flight=sequelize.define('Flight',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  flightNumber:{type:DataTypes.STRING,unique:true,allowNull:false},
  from:{type:DataTypes.STRING,allowNull:false},
  to:{type:DataTypes.STRING,allowNull:false},
  seats:{type:DataTypes.INTEGER,allowNull:false}
});

(async()=>{
  await sequelize.sync();
  await Flight.create({flightNumber:'AI101',from:'HYD',to:'DEL',seats:40});
  console.log(await Flight.findAll({order:[['id','ASC']]}));
  await Flight.update({seats:35},{where:{flightNumber:'AI101'}});
  console.log(await Flight.findOne({where:{flightNumber:'AI101'}}));
  await sequelize.close();
})();
