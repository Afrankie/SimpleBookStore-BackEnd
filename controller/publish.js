const bookDao = require('../service/book_dao')
const publishDao = require('../service/publish_dao')
var rp = require('request-promise');

module.exports = {
    search:async(ctx,next)=>{
        const data = ctx.request.query;
        var book = await bookDao.getBookInfo(data.isbn);
        var my_book = {}
        if(book!=null){        
        }else{
            var url = 'https://api.jisuapi.com/isbn/query';
            var options = {
                uri: url,
                qs: {
                    appkey: 'e8f06309e64a4b72',
                    isbn: data.isbn
                },
                headers: {
                    'User-Agent': 'Request-Promise'
                },
                json: true
            };
            book = await rp(options)
                .then(async function (repos) {
                    const { price, author, pubdate, publisher, pic, summary, edition, format, binding, isbn, title } = repos.result
                    await bookDao.addBook({ price, author, pubdate, publisher, pic, summary, edition, format, binding, isbn, title })
                    book = await bookDao.getBookInfo(data.isbn)
                    // console.log(book)
                    console.log("add book successfully")
                    return book
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
        my_book.id=book.id
        my_book.title=book.title;
        my_book.pic=book.pic
        my_book.price=book.price
        my_book.summary=book.summary
        my_book.author=book.author
        ctx.status=200
        ctx.body={
            books:my_book
        }    
        
        
    },
    submit:async(ctx,next)=>{
        const data = ctx.request.body
        await publishDao.addPublish(data)
        const book = await publishDao.getPulishBookIdByTime(data.time)
        // console.log("???????/////////???????")
        // console.log(book)
        ctx.status=200
        ctx.body={
            info:'添加成功',
            publish_id:book[0].id
        }
        // console.log(data)
    },
    my:async(ctx,next)=>{
        const data = ctx.request.body
        // console.log(data)
        const pubs = await publishDao.getMyAllPublish(data.seller_id)
        const arr = new Array();
        Object.keys(pubs).forEach(function(prop) { 
            const subjson = {}
            subjson.title=pubs[prop]['book.title']
            subjson.author=pubs[prop]['book.author']
            subjson.price=pubs[prop].price
            subjson.pic=pubs[prop]['book.pic']
            subjson.status=pubs[prop].status
            subjson.pubid=pubs[prop].id
            var time = pubs[prop].time
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
            pubs:arr
        }
        // console.log(pubs)
    },
    sold:async(ctx,next)=>{
        const data = ctx.request.body;
        publishDao.updateStatusById(data.id,'0')
        console.log(data)
        ctx.status=200
        ctx.body={
            info:'成功',
            // pubs:arr
        }
    }
}