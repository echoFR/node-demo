const fs=require('fs');
// fs.readFile(文件名，回调函数)  回调函数-->异步   读文件
fs.readFile('./www/a.txt',(err,data)=>{ //err 错误信息   data文件的数据
    // console.log(err);
    if(err){
        console.log(err);
    }else{
        // butter 原始的二进制数据
        console.log(data.toString());
    }
});