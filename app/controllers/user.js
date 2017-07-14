var User = require('../models/user')

exports.login = function(req, res, next) {
  var param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  console.log("param",param)
  User.findOne(param,function(err,userDoc){
    if (err) {
       res.json({
         status:"1",
         msg:err.message
       })
    }else{
       if (userDoc) {
          console.log("获取用户信息成功")
          res.cookie("userId",userDoc.userId,{
            path:'/',
            maxAge:1000*60*60
          });
          res.json({
            status:'0',
            msg:'',
            result:{
                userName: userDoc.userName
            }
          })
       }else{
        res.json({
            status:'1',
            msg:'登录失败',
            result:''
        });
       }
    }
  })
}

exports.logout = function(req, res, next) {
  //删除cookie
  res.cookie("userId","",{
      path:"/",
      maxAge:-1
  })
  res.json({
      status:"0",
      msg:'登出',
      result:''
  })
}



