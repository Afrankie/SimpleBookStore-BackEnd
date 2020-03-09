var Sequelize = require("sequelize")
var sequelize = new Sequelize('weapp','root','zj_mysql',{
    host:'localhost',
    dialect:'mysql',
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        // collate:'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define:{
        paranoid:false,
        freezeTableName: true,
        timestamps: false
    },
      // 时区
    timezone: '+08:00'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;


