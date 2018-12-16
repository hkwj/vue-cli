let fs = require('fs');
//解决编码格式的包
let iconv = require('iconv-lite');
//读取到的文件是utf-8 iconv.decode 需要传入相应的编码格式
//难道不能从一种编码转化成另一种编码吗？
//这里的1.txt 和 2.txt 的编码格式是utf-8
fs.readFile('vue-cli/static/dataBase/1.txt',function(err,data){
    console.log('1.txt', err, iconv.decode(data, 'utf-8'));
});

fs.readFile(`vue-cli/static/dataBase/2.txt`,function(err,data){
    console.log('2.txt', err, iconv.decode(data, 'utf-8'));
});

