const express=require('express');
var server=express(); 
server.use('/',(req,res)=>{   // 当用户访问根目录的时候会执行 /a.html
    res.send('123');
    res.end();
})
server.listen(8080);

// 1. 创建服务
// 2. 监听
// 3. 处理请求  接受用户的请求
// server.use('处理的页面的地址',(req,res)=>{})