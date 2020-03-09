const router = require('koa-router')()
const bookController = require('../controller/book')

router.prefix('/book')

router.get('/all', bookController.getAllPublishBook)
router.get('/search', bookController.getSearchBook)
router.get('/one', bookController.getOnePublishBook)

module.exports = router
