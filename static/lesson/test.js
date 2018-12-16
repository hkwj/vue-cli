let fs = require('fs');
function read(path,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,encoding,function(err,data){
            if(err) return reject(err);
            resolve(data);
        })
    })
}

function all(promises){
    return new Promise((resolve,reject)=>{
        let result = [];
        let processData = (key,y)=>{
            result[key] = y;
            if(processData.length === index){
                
            }
        }
        for(let i=0; i<promises.length; i++){
            promises[i].then(y=>{
                processData(i,y);
            },reject)
        }
    })
};


Promise.all(
    [read('vue-cli/static/dataBase/1.txt','utf8'),
    read('vue-cli/static/dataBase/2.txt','utf8')
]).then((data)=>{
    console.log(data);
},err=>{
    console.log(err);
})
