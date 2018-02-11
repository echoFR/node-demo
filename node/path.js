// 利用HTTP模块开发爬虫

const path = require('path');
const fs = require('fs');

// 获取传入的目标地址

const root = process.argv[2] || 'path';
const dist = path.join(__dirname, process.argv[3] || './dist');

const url = require('url');
const http = require('http');


function mkdirs(path, callback) {
  
};


function fetch(u) {
  var uObj = url.parse(u);
  http.get(u, (res) => {
    if (res.statusCode !== 200) {
      console.log('出现错误！' + res.statusMessage);
    } else {
      var d = path.join(dist, uObj.pathname);
      fs.stat(d, (err, stats) => {
        if (err) {
          mkdirs(path.dirname(d), (err) => {
            console.log(err);
            // res.pipe(fs.createWriteStream(d, 'utf8'));
          })
        }
      });
    }
  });
}

fetch(root);