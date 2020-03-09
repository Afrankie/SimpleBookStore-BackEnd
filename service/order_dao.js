const {order,publish,book} = require('../modules/index')

class orderDao{
    static async addOrder(data){
        order.create(data).then(()=>{
            console.log("add order successfully")
            // console.log(data)
        })
    }
    static async getMyAllOrder(buyer_id){
        return await order.findAll({
            include:[{
                model:publish,
                include:[{
                    model:book
                }]
            }],
            where:{buyer_id},
            raw:true
        })
    }
    static async updateOrderStatusById(id){
        order.update(
            {status:0},
            {where: {id}
        }).then(()=>{
            console.log("update order status sucessfully "+id)
        })
    }
}

module.exports = orderDao