## jade  自动识别单双标签
1. 根据缩进、规定层级
2. 属性： script(src='xxx')   link(href='xxx',rel='stylesheet')
    属性放在标签后面的括号里面，逗号分隔
    两个特殊：
            style：
                1. div(style="width:200px;height:600px")  普通属性法
                2. div(style{width:'600px',height:'800px'})    json法
            class：
                1. div(class='aaa bbb ccc')     普通属性法
                2. div(class=['aaa','bbb','ccc'])   arr
    .  class
    #  id
    div&attributes({title:'aaa',id:'bbb'});
3. 内容 <a href='xxx'>官网</a>   a(href='xxx') 官网
        <span>bbb</sapn>        span bbb
    内容空个格、直接往后放

4. 自定义标签  默认为双标签
5. | 表示原样输出
body        
        |aaa 
    |bbb
表示<body>aaa </body>bbb
6. . 所有下一级 原样输出
script.
        window.onload=function(){
            alert('aaa');
        }
如下：
<!-- <script>
    window.onload=function(){
        alert('aaa');
    }
  </script> -->
7. - 代表代码  下面的所有都是代码 
8. ！- 里面有标签 
9. include
如下：
script
        include a.js   (引入a.js文件)
10. #{变量}  =变量
    renderFile('path',{变量});  变量在这传入  
11. div(class=arr class='bbb');   arr是传进去的变量    'bbb'是新增加的class属性  自动融合
## ejs
1. 输出变量：    <%= 变量/运算>