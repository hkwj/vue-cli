let fs = require('fs');
console.log(fs.readFile);
fs.readFile('static/1.txt','utf8',function(err,data){
    console.log(data);
})

