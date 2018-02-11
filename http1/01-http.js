const http=require('http');
// request 请求  输入-请求的信息
// response 响应  输出-输出的东西
// createServer创建一个服务器   有一个回调函数，每当有人访问的时候回调函数就会执行
var server=http.createServer((request,response)=>{  //req  res   
    // console.log('有人来了');   在终端显示
    console.log(request.url);//请求哪一个地址
    switch(request.url){
        case '/b.html':
            response.write('b\n');
            break;
        case '/a.html':
            response.write('a\n');
            break;
        default:
            response.write('404\n');
            break;
    }
    response.write('abc');//向前台（浏览器）输出东西
    response.end();//结束
    
});
// 监听
server.listen(8080); //http://localhost:8080/