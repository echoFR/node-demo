const jade=require('jade');
const fs=require('fs');
var str=jade.renderFile('./view/jade1.js',{pretty: true,
    name: 'fr'
});
fs.writeFile('./bulid/jade1.html',str,(err)=>{
    if(err){
        console.log('写入失败');
    }
    else{
        console.log('写入成功');
    }
});
console.log(str);