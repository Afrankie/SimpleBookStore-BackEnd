const sequelize = require('../config/mysql_sequelize')
const DataTypes = require('sequelize')
var book = sequelize.define(
    'book',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        author:{
            type: DataTypes.STRING,
            field: 'author'
        },
        title:{
            type: DataTypes.STRING,
            field: 'title'
        },
        pic:{
            type: DataTypes.STRING,
            field: 'pic'
        },
        summary:{
            type: DataTypes.STRING,
            field: 'summary'
        },
        publisher:{
            type: DataTypes.STRING,
            field: 'publisher'
        },
        pubdate:{
            type: DataTypes.STRING,
            field: 'pubdate'
        },
        price:{
            type: DataTypes.STRING,
            field: 'price'
        },
        edition:{
            type: DataTypes.STRING,
            field: 'edition'
        },
        format:{
            type: DataTypes.STRING,
            field: 'format'
        },
        binding:{
            type: DataTypes.STRING,
            field: 'binding'
        },
        isbn:{
            type: DataTypes.STRING,
            field: 'isbn'
        }
    }
);
module.exports = book

