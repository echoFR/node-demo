const express=require('express');
const expressStatic=require('express-static')

var server=express();
server.listen(8080);
// 用户数据
var users={
    'luue':'123',
    'fr': '1256'
};

// 请求接口   /login?user=xxx&pass=''
            // => {ok:true/false,msg:'原因'};
 server.get('/login',(req,res)=>{  //前台请求a.html   把a.html读出来 并且发送到前台
    // req.query  原生的没有  直接是传进去数据的json形式
    var user=req.query['user'];
    var pass=req.query['pass'];
    if(users[user]==null){
        res.send({ok:false, msg: '用户不存在'});
    }else{
        if(users[user]!=pass){
            res.send({ok:false, msg:'密码错误'});
        }else{
            res.send({ok:true,msg:'成功'});
        }
    }
 });

// 读入文件
server.use(expressStatic('./www'));
 //中间件相当于一个函数 
// 参数：去哪读静态文件