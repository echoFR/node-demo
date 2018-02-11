const express=require('express');
const queryString=require('querystring');
const bodyParser=require('body-parser');
 var server=express();
 server.listen(8080);

//  GET无需中间件   POST 需要 body-parser 1.解析 2.利用
// server.use(bodyParser.urlencoded({}));  //POST 加工 body   extended:true/false 扩展模式  limit:限制 POST数据 2*1024*1024 2兆
server.use((req,res,next)=>{
    var str='';
    req.on('data',(data)=>{
        str+=data;
    });
    req.on('end',()=>{
        req.body=queryString.parse(str);
        next();
    });
});
 server.use('/',(req,res)=>{
    //  console.log(req.query);     //GET Json
    //  POST  body-parser
    console.log(req.body); //POST
 });