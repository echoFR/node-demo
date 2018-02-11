// 文件可读流操作

const fs = require('fs')
const path = require('path')

// var readable = fs.createReadStream(path.join('./data/1.txt'), 'utf8')
// var readable = fs.createReadStream('C:\\Users\\iceStone\\Downloads\\Softwares\\vs2015.1.ent_chs.iso', 'binary')

// // readable.on('readable', () => {
// //   console.log('readable')
// //   var thunk
// //   while (thunk = readable.read(100000)) {
// //     console.log(thunk.length)
// //   }
// // })

// var count = 0
// readable.on('readable', () => {
//   count++
//   console.log(count);
//   var chunk
//   while (null !== (chunk = readable.read())) {
//     console.log('got %d bytes of data', chunk.length)
//   }
// })

var fd = fs.openSync('path','r')

console.log(fd);
