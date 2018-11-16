let fs = require('fs');

fs.readFile('vue-cli/static/dataBase/1.txt','utf8',function(err,data){
    console.log('1.txt', err, data);
});

fs.readFile(`vue-cli/static/dataBase/2.txt`,'utf8',function(err,data){
    console.log('2.txt', err, data);
});

