var Sequelize = require("sequelize")
const Op = Sequelize.Op;
const {publish,book} = require('../modules/index')

class publishDao{
    static async addPublish(data){
        return await publish.create(data).then(()=>{
            console.log("add publish")
        })
    }
    static async getAll(){
        return await publish.findAll({
            include:[{
                model:book
            }],
            where:{
                status:1,
                bought:0
            },
            raw:true
        })
    }
    static async getSome(type){
        return await publish.findAll({
            where:{
                status:1,
                bought:0,
                type:type
            },
            raw:true
        })
    }
    static async searchPublishInfo(text){
        return await publish.findAll({
            include:[{
                model:book,
                where:{
                    [Op.or]: [
                        { author: {[Op.like]: `%${text}%`} },
                        { title: {[Op.like]: `%${text}%`} },
                        { publisher: {[Op.like]: `%${text}%`} },
                        { price: {[Op.like]: `%${text}%`} }
                      ]
                    }
            }],
            where:{
                bought:'0',
                status:'1'
            },
            raw:true
        })
    }
    static async getPulishBookInfo(id){
        return await publish.findAll({
            include:[{
                model:book
            }],
            where:{
                status:1,
                bought:0,
                id
            },
            raw:true
        })
    }
    static async getPulishBookIdByTime(time){
        return await publish.findAll({
            where:{
                time
            },
            raw:true
        })
    }
    static async updateBoughtStatus(id,status){
        publish.update(
            {bought:status},
            {where: {id}
        }).then(()=>{
            console.log("update bought status sucessfully "+id)
        })
    }
    static async getMyAllPublish(seller_id){
        return await publish.findAll({
            include:[{
                model:book
            }],
            where:{
                seller_id
            },
            raw:true
        })
    }
    static async updateStatusById(id,status){
        publish.update(
            {status:status},
            {where: {id}
        }).then(()=>{
            console.log("update status sucessfully "+id)
        })
    }
}

module.exports = publishDao