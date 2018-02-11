const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
var server=express();
// var arr=[];
// for(var i=0;i<10000;i++){
//     arr.push('sig_'+Math.random());
// }

server.use(cookieParser()); //先解析cookie
server.use(cookieSession({
    name:'sess',
    keys: ['aaa','bbb','ccc'] 
    // maxAge  
}));
// 删除session   delete session
server.use('/',(req,res)=>{
    req.session['count']=1;
    console.log(req.session['count']);
    console.log(req.session);   // .keys required.  没有加key报错
});
server.listen(8080);
