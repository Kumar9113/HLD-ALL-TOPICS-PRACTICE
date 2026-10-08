import { Sequelize } from 'sequelize';
const sequelize=new Sequelize(process.env.DATABASE_URL||'postgres://postgres:postgres@localhost:5432/postgres',{
 dialect:'postgres',logging:false
});
(async()=>{
 await sequelize.transaction(
  {isolationLevel:Sequelize.Transaction.ISOLATION_LEVELS.REPEATABLE_READ},
  async t=>{ console.log('Transaction started at REPEATABLE READ'); }
 );
 await sequelize.close();
})();
