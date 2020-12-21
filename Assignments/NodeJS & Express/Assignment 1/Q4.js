const fs = require('fs');
let txt = process.argv[2];


fs.writeFile('test.txt',txt,(err) => {
    if(err) throw err;
    console.log('The file was saved!')
});