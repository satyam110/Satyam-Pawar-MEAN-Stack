const fs = require('fs');

let intNums = [];

intNums = fs.readFileSync('other.txt','utf-8').split(",");

let reducer = (acc,cval) => parseInt(acc)+parseInt(cval);

console.log(`Sum of the integers stored in file is ${intNums.reduce(reducer)}`);