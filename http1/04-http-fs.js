const http=require('http');
const fs=require('fs');

var server=http.createServer((req,res)=>{
    var filename='./www'+req.url;
    fs.readFile(filename,(err,data)=>{
        if(err){
            // console.log(err);
            res.write('404');
        }
        else{
            res.write(data);
        }
        res.end();
    })
});
server.listen(8888);