// 接收前台的请求数据
const http=require('http');
const urlLib=require('url');
var server=http.createServer((req,res)=>{
    //请求浏览器的user和pass
    // console.log(req.url);      /aaa.html?user=user&pass=11111
    var url='';
    var GET={};
    var obj=urlLib.parse(req.url,true);
    url=obj.pathname;
    GET=obj.query;
    res.end();
    console.log(url,GET);
});
server.listen(8080);