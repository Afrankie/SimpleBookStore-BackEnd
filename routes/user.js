const router = require('koa-router')()
const userController = require('../controller/user')

router.prefix('/user')

router.get('/add', userController.addUser)
router.get('/login', userController.loginUser)

module.exports = router
