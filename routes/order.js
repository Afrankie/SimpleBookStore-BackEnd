const router = require('koa-router')()
const orderController = require('../controller/order')

router.prefix('/order')

router.post('/add', orderController.add)
router.post('/all', orderController.all)
router.post('/delete', orderController.delete)

module.exports = router
