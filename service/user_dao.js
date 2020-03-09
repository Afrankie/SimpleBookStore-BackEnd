const {user} = require('../modules/index')

class userDao{
    static async addUser(data){
        user.create(data).then(()=>{
            console.log("add user successfully")
            // console.log(data)
        })
    }
    static async getUserInfo(openid){
        return await user.findOne({
            where:{
                openid
            },
            raw:true
        })
    }
}

module.exports = userDao