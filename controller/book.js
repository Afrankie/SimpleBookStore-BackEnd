const publishDao = require('../service/publish_dao')

module.exports = {
    getAllPublishBook:async(ctx,next)=>{
        const books = []
        const pbooks = await publishDao.getAll();
        for (var key in pbooks) {
            const book = {}
            book.publish_id=pbooks[key].id
            book.seller_id=pbooks[key].seller_id
            book.price=pbooks[key].price
            book.title=pbooks[key]["book.title"]
            book.author=pbooks[key]["book.author"]
            book.pic=pbooks[key]["book.pic"]
            book.book_id=pbooks[key]["book.id"]
            books.push(book)
        }
        ctx.status=200
        ctx.body={
            books:books
        }
        // console.log(books)
 
    },
    getSearchBook:async(ctx,next)=>{
        const data = ctx.request.query;
        const books = []
        const pbooks = await publishDao.searchPublishInfo(data.text);
        for (var key in pbooks) {
            const book = {}
            book.publish_id=pbooks[key].id
            book.seller_id=pbooks[key].seller_id
            book.price=pbooks[key].price
            book.title=pbooks[key]["book.title"]
            book.author=pbooks[key]["book.author"]
            book.pic=pbooks[key]["book.pic"]
            book.book_id=pbooks[key]["book.id"]
            books.push(book)
        }
        // console.log(pbooks) 
        ctx.status=200
        ctx.body={
            books:books
        }
    },
    getOnePublishBook:async(ctx,next)=>{
        const data = ctx.request.query;
        const books = []
        const pbooks = await publishDao.getPulishBookInfo(data.publish_id);
        for (var key in pbooks) {
            const book = {}
            book.publish_id=pbooks[key].id
            book.seller_id=pbooks[key].seller_id
            book.price=pbooks[key].price
            book.title=pbooks[key]["book.title"]
            book.author=pbooks[key]["book.author"]
            book.pic=pbooks[key]["book.pic"]
            book.book_id=pbooks[key]["book.id"]
            book.isbn=pbooks[key]["book.isbn"]
            book.publisher=pbooks[key]["book.publisher"]
            book.pubdate=pbooks[key]["book.pubdate"]
            book.binding=pbooks[key]["book.binding"]
            book.format=pbooks[key]["book.format"]
            book.summary=pbooks[key]["book.summary"]
            book.oldprice=pbooks[key]["book.price"]
            if(pbooks[key].shipping==="1"){
                book.shipping="帮送"
            }else{
                book.shipping="自提"
            }
            book.type=pbooks[key].type+"类书"
            books.push(book)
        }
        ctx.status=200
        ctx.body={
            books:books
        }
        // console.log(pbooks);
    }
}