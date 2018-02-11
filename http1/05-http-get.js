// 接收前台的请求数据
const http=require('http');
var server=http.createServer((req,res)=>{
    //请求浏览器的user和pass
    // console.log(req.url);      /aaa.html?user=user&pass=11111
    var url='';
    var GET={};
    if(req.url.indexOf('?')!= -1 ){
        var arr=req.url.split('?');
        // console.log(arr[0]);// arr[0]  /aaa.html
        // console.log(arr[1]);// arr[1]  user=user&pass=1111
        url=arr[0];
        var arr2=arr[1].split('&'); //['user=user','pass=1111'];
        for(var i=0;i<arr2.length;i++){
            var arr3=arr2[i].split('=');
            GET[arr3[0]]=arr3[1];
        }
    }                                                                                                                                                                                                  
    else{
        url=req.url;
    }      
    res.end();
    console.log(url,GET);
});
server.listen(8080);