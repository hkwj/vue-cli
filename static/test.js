let fs = require('fs');

fs.readFile('1.txt','utf8',function(err,data){
    console.log('1.txt',err, data);
    fs.readFile(`2.txt`,'utf8',function(err,data){
        console.log('2.txt',err, data);
    })
});


