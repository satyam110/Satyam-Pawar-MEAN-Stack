var fs = require('fs')
var concat = require('concat-stream')
var arrwrite = concat(function(data) {console.log(data);});

//reading contents from file and writing it to concat method
arrwrite.write(fs.readFileSync('test.txt','utf-8').split(" "))
arrwrite.write(fs.readFileSync('other.txt','utf-8').split(","))
arrwrite.end()
