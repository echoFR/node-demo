1.http模块
2.文件操作--fs模块   File System
3.异步：多个操作同时进行
  同步：一次一个
4.get--- 请求数据在url里面
自动切、两次 split 
切一次、querystring.parse(str);
直接urlLib urlLib.parse(str,ture);
5.post---请求数据在post下面
req.on('data',(data)=>{str+=data;});
req.on('end',()=>{str;});
str数据通过querystring.parse(str);处理

npm install  下载 用空格隔空

/（根目录） 可以读取cookie
  /aaa 可以
    /ccc  有cookie  中了一个cookie
  /bbb 可以

  cookie：
  1.发送：
  res.secret='字符串';
  res.cookie(名字，值，{path,:'/',maxAge: 毫秒,signed: true});

  2.读取 cookie-parser
  server.use(cookieParser('密钥'));
  server.use('./',(req,res)=>{
    req.cookies;  未签名
    req.signedCookies  签名
  });

  3.删除cookie
res.clearCookie(名字)；

4.cookie-encrypter(密钥);  对cookie进行加密

----------------------------------------------------
cookie-session
一般放在cookie-parser的后面
seesion
1.
2.
