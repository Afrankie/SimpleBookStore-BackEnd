const bookDao = require('../service/book_dao')

bookDao.getBookInfo("123456").then(res=>{
    console.log(res)
})


