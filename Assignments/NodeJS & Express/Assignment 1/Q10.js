const fs = require('fs');
let filename = process.argv[2];
let content = process.argv[3];

fs.writeFile(filename,content,(err) => {
    if(err) throw err;
    console.log('The file was saved!')
});

fs.readFile(filename,'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
})