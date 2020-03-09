const {book} = require('../modules/index')

class bookDao{
    static async addBook(data){
        return await book.create(data).then((res)=>{
            console.log("add book successfully")
            // console.log(data)
        })
    }
    static async getBookInfo(isbn){
        return await book.findOne({
            where:{
                isbn:isbn
            },
            raw:true
        })
    }
}

module.exports = bookDao