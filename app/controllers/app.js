exports.checkLogin = function(req, res, next) {
  console.log("checklogin",req.cookies.userId)
  if (req.cookies.userId) {
    next()
  }else{
    res.json({
      status:'10001',
      msg:'当前未登录',
      result:''
    })
  }
}
