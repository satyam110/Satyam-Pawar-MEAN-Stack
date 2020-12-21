const fs = require('fs');

const filename = "test.txt";

fs.readFile(filename,'utf8', (err,data) => {
    if(err) throw err;
    console.log(`Contents of file inside current directory are : " ${data} "`);
})