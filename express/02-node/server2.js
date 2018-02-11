const express=require('express');
var server=express();
const mod2=require('./lib/mod2.js');
server.use(mod2()); //mod2函数    //server.use(mo2.aaa());
server.use('/',(req,res)=>{
    console.log(req.body);
});
server.listen(8080);