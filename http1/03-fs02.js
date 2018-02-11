const fs=require('fs');
// 写文件
// fs.writeFile("文件名"，"内容"，”回调函数“)
fs.writeFile('./www/b.txt',' 1005',(err)=>{
    console.log(err);
});