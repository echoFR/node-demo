const ejs=require('ejs');
ejs.renderFile('./view/ejs1.html',{name:'fr'},(err,data)=>{
    if(err){
        console.log('编译失败');
    }
    else{
        console.log(data);
    }
});