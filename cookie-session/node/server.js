const express=require('express');
const cookieParser=require('cookie-parser');  //读取cookie
var server=express();
server.use(cookieParser('ffrrrrfff'));
server.use('/aaa/a.html',(req,res)=>{
    // 发送cookie
    // res.cookie('user','fr',{path: '/aaa', maxAge: 30*24*3600*1000});  //毫秒 
    // cookie 过期时间   毫秒  30天
    
    // 对cookie加密
    req.secret='ffrrrrfff';// 签名密钥  防止改
    res.cookie('user','fr',{path: '/aaa', maxAge: 30*24*3600*1000,signed: true});  //毫秒 
    // decodeURIComponent(''); 解密   's:fr.KAKr3QzTUWyzuRPbswJVUj+x2IV5uqLaVTDuaDVDwMw'   s: 开头 带签名的
    
    // 读取cookie
    console.log(req.cookies); //不带签名的     // 没有中间件cookie-parser的时候 req.cookies 是 undefined
    console.log(req.signedCookies); //带签名的cookie
    res.write('222');
    res.end();
});
server.listen(8080);