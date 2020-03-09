const sequelize = require('../config/mysql_sequelize')
const DataTypes = require('sequelize')
var publish = sequelize.define(
    'publish',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_id:{
            type: DataTypes.INTEGER,
            field: 'book_id'
        },
        seller_id:{
            type: DataTypes.INTEGER,
            field: 'seller_id'
        },
        phone:{
            type: DataTypes.STRING,
            field: 'phone'
        },
        shipping:{
            type: DataTypes.STRING,
            field: 'shipping'
        },
        type:{
            type: DataTypes.STRING,
            field: 'type'
        },
        address:{
            type: DataTypes.STRING,
            field: 'address'
        },
        bought:{
            type: DataTypes.STRING,
            field: 'bought'
        },
        status:{
            type: DataTypes.STRING,
            field: 'status'
        },
        time:{
            type: DataTypes.STRING,
            field: 'time'
        },
        price:{
            type: DataTypes.STRING,
            field: 'price'
        }
    }
);
module.exports = publish

