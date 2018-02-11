const url=require('url');
var obj=url.parse('http://www.fengrong.com/index?user=feng&pass=123',true);
console.log(obj);
// 后面true时：     pathname  query
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.fengrong.com',
//     port: null,
//     hostname: 'www.fengrong.com',
//     hash: null,
//     search: '?user=feng&pass=123',
//     query: { user: 'feng', pass: '123' },
//     pathname: '/index',             
//     path: '/index?user=feng&pass=123',
//     href: 'http://www.fengrong.com/index?user=feng&pass=123' }