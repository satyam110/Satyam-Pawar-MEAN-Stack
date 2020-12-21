const fs = require('fs');
const path = __dirname+"/";

fs.readdir(path,(err,files) => {
    if (err) {
        console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        //using fs.stat for checking if given path is file or a directory
        fs.stat(file, (err,stat)=>{
            if(err){
                console.log("Not a correct file");
            }
            else if(stat.isFile()){
                console.log(`FILE:${file}`);
            }
            else if(stat.isDirectory()){
                console.log(`DIR:${file}`);
            }
        })
    });
});
