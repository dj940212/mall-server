let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    // res.statusCode = 200;
    // res.setHeader("Content-Type","text/plain;charset=utf-8");
    // res.end(util.inspect(url.parse(req.url)));

    let pathname = url.parse(req.url).pathname
    fs.readFile(pathname.substring(1),function(err,data){
        if (err) {
            res.writeHead(404,{
                'Content-Type':'text/html'
            });
            return
        }
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        res.write(data.toString());
        res.end();
    });
    
});

server.listen(3000,'127.0.0.1',()=>{
    console.log("running in http://127.0.0.1:3000")
})