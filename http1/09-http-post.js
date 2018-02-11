const http=require('http');
const querystring=require('querystring');
const fs=require('fs');
var server=http.createServer((req,res)=>{
    // data 有一段数据到达就会触发（很多次）
    var str='';
    // var i=0;
    req.on('data',(data)=>{
        // console.log(`第${i++}次收到数据`);
        str+=data;
    });
    //end 数据全部到达触发（一次） 
    req.on('end',()=>{
        var url=req.url;
        // console.log(str); // user=user&pass=11111
        var obj=querystring.parse(str);
        console.log(url,obj);
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
    });
});
server.listen(8080);