const fs = require('fs');
let searchTxt = process.argv[2];

var fileContent = [];
var count = 0;

fileContent = fs.readFileSync('test.txt','utf-8').split(" ");

var match = fileContent.map(txt => {
    if(txt.includes(searchTxt)){
        count++;
        return txt;
    }
})

console.log(`${searchTxt} appeared ${count} times in the file.`);