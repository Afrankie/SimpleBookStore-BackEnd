const sequelize = require('../config/mysql_sequelize')
const DataTypes = require('sequelize')
var user = sequelize.define(
    'user',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        openid:{
            type: DataTypes.STRING,
            field: 'openid'
        },
        gender:{
            type: DataTypes.STRING,
            field: 'gender'
        },
        img_url:{
            type: DataTypes.STRING,
            field: 'img_url'
        },
        balance:{
            type: DataTypes.STRING,
            field: 'balance'
        }
    }
);
module.exports = user

