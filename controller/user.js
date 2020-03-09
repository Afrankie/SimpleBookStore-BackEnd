const userDao = require('../service/user_dao')
const {APPSECRET,WX_APPID} = require('../config/login')
var rp = require('request-promise');

module.exports = {
    addUser:async(ctx,next)=>{
        var data = ctx.request.query
        var user = await userDao.getUserInfo(data.openid)
        if(user){
            ctx.status=200
            ctx.body={
                id:user.id,
                result:0,
                info:"用户信息已存在"
            }
        }else{
            userDao.addUser(data)
            user = await userDao.getUserInfo(data.openid)
            ctx.status=200
            ctx.body={
                id:user.id,
                result:1,
                info:"添加用户信息成功"
            }
        }
    },
    loginUser:async(ctx,next)=>{
        var data = ctx.request.query
        var code = data.code
        // console.log("***************触发loginUser****************")
        var url = 'https://api.weixin.qq.com/sns/jscode2session'
        var options = {
            uri: url,
            qs: {
                appid: WX_APPID,
                secret: APPSECRET,
                js_code:code,
                grant_type:'authorization_code'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        
        // await rp(options)
        //     .then(function (repos) {
        //         // console.log("输出结果")
        //         ctx.status=200
        //         ctx.body={
        //             openid:repos.openid
        //         }
        //         // console.log(repos)

        //     })
        
        const res = await rp(options).catch(function (err) {
            console.log(err)
        });
        const user = await userDao.getUserInfo(res.openid).catch(err=>{
            console.log(err)
        })
        var t = ''
        if(user!=null){
            t=user.id
        }
        ctx.status=200
        ctx.body={
            id:t,
            openid:res.openid
        }
    }
}