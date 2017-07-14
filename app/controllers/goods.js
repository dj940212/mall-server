var Goods = require('../models/goods')
var User = require('../models/user')

//查询商品列表数据
exports.goodsList = function(req,res,next){
  let page = parseInt(req.query.page)
  let pageSize = parseInt(req.query.pageSize)
  let sort = req.query.sort
  let skip = (page-1)*pageSize;
  let priceLevel = req.query.priceLevel
  let params = {};
  let priceGt = '',priceLte = '';
  if (priceLevel!=='all') {
    switch (priceLevel){
      case '0':priceGt = 0;priceLte=100;break;
      case '1':priceGt = 100;priceLte=500;break;
      case '2':priceGt = 500;priceLte=1000;break;
      case '3':priceGt = 1000;priceLte=5000;break;
    }
    params = {
      salePrice:{
        $gt:priceGt,
        $lte:priceLte 
      }
    }
  }
  let goodModel = Goods.find(params).skip(skip).limit(pageSize);
  goodModel.sort({'salePrice':sort});
  goodModel.exec(function(err,doc){
      if (err) {
          res.json({
              status:'1',
              msg:err.message
          });
      }else{
          res.json({
              status:'0',
              msg: '',
              result:{
                  count:doc.length,
                  list:doc
              }
          })
      }
    });
}

//加入到购物车
exports.addCart = function(req,res,next){
   var userId = req.cookies.userId
   var productId = req.body.productId
   User.findOne({userId:userId},function(err,userDoc){
    if (err) {
      res.json({
        status:"1",
        msg:err.message
      })
    }else{
      if (userDoc) {
        console.log("获取用户信息成功")
        var goodsItem = '';
        userDoc.cartList.forEach(function(item) {
          if (item.productId === productId) {
            goodsItem = item;
            item.productNum ++;
            console.log("购物车已有该商品,增加商品数")
          }
        });
        if (goodsItem) {
          userDoc.save(function(err2,doc){
            if (err2) {
              res.json({
                status:"1",
                msg:err2.message
              })
            }else{
              res.json({
                status:'0',
                msg:'',
                result:'suc'
              })
            }
          })
        }else{
          console.log("购物车没有该商品。。。")
          Goods.findOne({productId:productId},function(err1,productIdDoc){
           if (err1) {
             res.json({
               status:"1",
               msg:err1.message
             })
           }else{
              if (productIdDoc) {
                console.log("添加新商品成功")
                productIdDoc.productNum = 1;
                productIdDoc.checked = 1;
                userDoc.cartList.push(productIdDoc);
                userDoc.save(function(err2,doc){
                  if (err2) {
                    res.json({
                        status:"1",
                        msg:err2.message
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
           }
          })
        }
        
      }
    }
   })
}