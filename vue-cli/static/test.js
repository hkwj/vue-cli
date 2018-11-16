let fs = require('fs');

fs.readFile('static/dataBase/1.txt','utf8',function(err,data){
    console.log('1.txt',err, data);
    fs.readFile(`static/dataBase/2.txt`,'utf8',function(err,data){
        console.log('2.txt',err, data);
    })
});


