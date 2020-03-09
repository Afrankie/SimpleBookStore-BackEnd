var rp = require('request-promise');
var bookDao = require('../service/book_dao')

var url = 'https://api.jisuapi.com/isbn/query';
const ibsn = ['9787115480193','9787212058937','9787508841786','9787115489876','9787302314233','9787111127482','9787302423287'];

var options = {
    uri: url,
    qs: {
        appkey: 'e8f06309e64a4b72',
        isbn:ibsn[6]
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
 
rp(options)
    .then(function (repos) {
        const {price,author,pubdate,publisher,pic,summary,edition,format,binding,isbn,title} = repos.result
        // bookDao.addBook({price,author,pubdate,publisher,pic,summary,edition,format,binding,isbn,title})
        console.log(repos.result);
    })
    .catch(function (err) {
        console.log(err)
        // API call failed...
    });
