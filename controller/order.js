const orderDao = require('../service/order_dao')
const publishDao = require('../service/publish_dao')

module.exports = {
    add:async(ctx,next)=>{
        const data = ctx.request.body
        orderDao.addOrder(data)
        publishDao.updateBoughtStatus(data.pub_id,'1')
        ctx.status=200
        ctx.body={
            info:'成功'
        }
        // console.log(data)
    },
    all:async(ctx,next)=>{
        const data = ctx.request.body
        const orders = await orderDao.getMyAllOrder(data.buyer_id)
        const arr = new Array();
        Object.keys(orders).forEach(function(prop) { 
            const subjson = {}
            subjson.title=orders[prop]['publish.book.title']
            subjson.author=orders[prop]['publish.book.author']
            subjson.price=orders[prop]['publish.price']
            subjson.pic=orders[prop]['publish.book.pic']
            subjson.status=orders[prop].status
            subjson.id = orders[prop].id
            subjson.pubid=orders[prop]['publish.id']
            var time = orders[prop].time
            // console.log(time)
            var date = new Date(parseInt(time));
            // Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
            D = date.getDate() + ' ';
            h = date.getHours() + '时';
            m = date.getMinutes() + '分';
            // s = date.getSeconds(); 
            subjson.time=M+D+h+m
            arr.push(subjson)
        })
        // console.log(arr)
        ctx.status=200
        ctx.body={
            info:'成功',
            orders:arr
        }
        console.log(orders)
    },
    delete:async(ctx,next)=>{
        const data = ctx.request.body
        orderDao.updateOrderStatusById(data.id)
        publishDao.updateBoughtStatus(data.pubid,'0')
        ctx.status=200
        ctx.body={
            info:'成功',
        }
    }
}