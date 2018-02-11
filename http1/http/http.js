// 用户注册  登录
//  接口 ：  /user?act=reg&user=aaa&pass=1234
const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');
var users={};
var server=http.createServer((req,res)=>{
    var str='';
    req.on('data',function(data){
        str+=data;
    });
    req.on('end',function(){
        //对文件的读取
        // http://localhost:8080/1.html
        //对接口的读取
        // http://localhost:8080/user?act=xx....
        var obj=urlLib.parse(req.url,true);
        var url=obj.pathname;
        var GET=obj.query;
        var POST=querystring.parse(str);
        //读取文件
        if(url=='/user'){
            switch(GET.act){
                case 'reg':
                //1. 用户是否已经有了
                // 2.插入到user里面
                    if(users[GET.user]){
                        res.write('{"ok":false,"msg":"用户已经存在"}');
                    }else{
                        users[GET.user]=GET.pass;
                        res.write('{"ok": true,"msg":"注册成功"}');
                    }
                    break;
                case 'login':
                    if(users[GET.user]==null){
                        res.write('{"ok":false,"msg":"用户不存在"}');
                    }
                    else if(users[GET.user]!=GET.pass){
                        res.write('{"ok":false,"msg":"用户名或密码错误"}');
                    }
                    else{
                        res.write('{"ok":true,"msg":"登录成功"}');
                    }
                // 1.检查用户是否存在
                //2. 检查密码
                    break;
                default:
                    res.write('{"ok": false, "msg": "未知的act"}');
                    res.end();
            }
            res.end();
        }
        else{
            var filename='./www'+url;
            fs.readFile(filename,(err,data)=>{
            if(err){
                res.write('404');
            }
            else{
                res.write(data); 
            }
            res.end();
           })
        }
    });   
});
server.listen(8080);