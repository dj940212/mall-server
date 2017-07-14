var User = require('../models/user')

exports.cartList = function(req, res, next) {
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
}

exports.cartDel = function(req,res,next){
  var userId = req.cookies.userId;
  var productId = req.body.productId;
  User.update({'userId':userId},{$pull:{'cartList':{'productId':productId}}},function(err,doc){
    if (err) {
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:'suc'
      })
    }
  })
}

//购物车商品数量编辑
exports.cartEdit = function(req,res,next){
    var userId = "100077";//req.cookies.userId;
    var productId = req.body.productId;
    var productNum = req.body.productNum;
    var checked = req.body.checked;

    User.update({"userId":userId,"cartList.productId":productId},{
        "cartList.$.productNum":productNum,
        "cartList.$.checked":checked
    },function(err,doc){
        if (err) {
            console.log("出现错误")
            res.json({
                status:'1',
                msg:err.message,
                result:''
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                result:'suc'
            })
        }
    })
}

// 全选
exports.checkAll = function(req,res,next){
    var userId = "100077";//req.cookies.userId;
    var checkAll = req.body.checkAll ? '1':'0';
    User.findOne({userId:userId},function(err,user){
      if (err) {
        res.json({
            status:'1',
            msg:err.message,
            result:''
        });
      }else{
        if (user) {
            user.cartList.forEach((item)=>{
                item.checked = checkAll;
                console.log("item.checked",item.checked)
            })
            user.save(function(err1,doc){
               if (err) {
                 res.json({
                    status:'1',
                    msg:err1.message,
                    result:''
                 })
               }else{
                  res.json({
                    status:'1',
                    msg:'',
                    result:'suc'
                 })
               }
            })
        }
      }  
    })

}