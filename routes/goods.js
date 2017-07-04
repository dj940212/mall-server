var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:270127/imoocmall')

mongoose.connection.on("connected",function(){
    console.log("MongoDB connected success")
});
mongoose.connection.on("error",function(){
    console.log("MongoDB connected fail")
});
mongoose.connection.on("disconnected",function(){
    console.log("MongoDB disconnected")
});

router.get("/",function(req,res,next){
    res.send('hello,goods list')
})

module.exports = router;
