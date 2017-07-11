var express = require('express');
var router = express.Router();

var User = require('./../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/login",function(req,res,next){
  var param = {
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }
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
          // req.session.user = userDoc;
          res.json({
            status:'0',
            msg:'',
            result:{
                userName:userDoc.userName
            }
          })
       }else{
        res.json({
            status:'1',
            msg:'未登录',
            result:''
        });
       }
    }
  })
});

//登出接口
router.post("/logout",function(req,res,next){
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
})
// 查询当前用户的购物车数据
router.get("/cartList",function(req,res,next){
    var userId = req.cookies.userId;
    User.findOne({userId:userId},function(err,doc){
        if (err) {
           res.json({
            status:'1',
            msg:err.message,
            result:''
           });
        }else{
            if (doc) {
                console.log('获取购物车数据成功')
                res.json({
                  status:'1',
                  msg:'',
                  result:doc.cartList
                });
            }
        }
    })
})

module.exports = router;
