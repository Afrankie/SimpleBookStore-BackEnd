const router = require('koa-router')()
const publishController = require('../controller/publish')

router.prefix('/publish')

router.get('/search', publishController.search)
router.post('/submit', publishController.submit)
router.post('/my', publishController.my)
router.post('/sold', publishController.sold)

module.exports = router
