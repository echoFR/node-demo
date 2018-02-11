const queryString=require('querystring');
module.exports=()=>{
    return (req,res,next)=>{
        var str='';
        req.on('data',(data)=>{
            str+=data;
        });
        req.on('end',()=>{
            req.body=queryString.parse(str);
            next();
        });
    }
};
// module.exports={
//     aaa: ()=>{
//         return (req,res,next)=>{
//             var str='';
//             req.on('data',(data)=>{
//                 str+=data;
//             });
//             req.on('end',()=>{
//                 req.body=queryString.parse(str);
//                 next();
//             });
//         }
//     }
// };