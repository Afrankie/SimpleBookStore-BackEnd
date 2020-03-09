const sequelize = require('../config/mysql_sequelize')
const DataTypes = require('sequelize')
var order = sequelize.define(
    'order',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        buyer_id:{
            type: DataTypes.INTEGER,
            field: 'buyer_id'
        },
        seller_id:{
            type: DataTypes.INTEGER,
            field: 'seller_id'
        },
        pub_id:{
            type: DataTypes.INTEGER,
            field: 'pub_id'
        },
        time:{
            type: DataTypes.STRING,
            field: 'time'
        },
        status:{
            type: DataTypes.STRING,
            field: 'status'
        }
    }
);
module.exports = order

