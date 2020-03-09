const sequelize = require('../config/mysql_sequelize')

const user = require('./user')
const order = require('./order')
const publish = require('./publish')
const book = require('./book')

user.hasMany(order,{
    foreignKey:'buyer_id',
    sourceKey:'id'
})

user.hasMany(order,{
    foreignKey:'seller_id',
    sourceKey:'id'
})

order.belongsTo(user,{
    foreignKey:'seller_id',
    targetKey:'id'
})

order.belongsTo(user,{
    foreignKey:'buyer_id',
    targetKey:'id'
})

user.hasMany(publish,{
    foreignKey:'seller_id',
    sourceKey:'id'
})

publish.belongsTo(user,{
    foreignKey:'seller_id',
    targetKey:'id'
})

publish.hasMany(order,{
    foreignKey:'pub_id',
    sourceKey:'id'
})

order.belongsTo(publish,{
    foreignKey:'pub_id',
    targetKey:'id'
})

book.hasMany(publish,{
    foreignKey:'book_id',
    sourceKey:'id'
})

publish.belongsTo(book,{
    foreignKey:'book_id',
    targetKey:'id'
})

// sequelize.sync({force: false}).then(function () {
//     console.log("My Database Configured");
// });

module.exports = {book,user,order,publish}

