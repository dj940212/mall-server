var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var http = require('http')
var mongoose = require('mongoose')
var router = require('./config/routes')

mongoose.connect('mongodb://localhost:27017/dumall')
mongoose.connection.on("connected", function() {
    console.log("数据库连接成功")
})

var app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api',router)

http.createServer(app).listen(3000)
console.log('running in http://localhost:3000')