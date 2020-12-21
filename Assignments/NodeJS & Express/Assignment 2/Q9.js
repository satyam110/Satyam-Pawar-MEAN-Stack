const fs = require('fs');
const express = require('express');
const app= express();

let port = process.argv[2];
let fileName = process.argv[3];

app.get('/books',(req,res)=>{
    let obj;
    fs.readFile(fileName,'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data);
        obj = JSON.parse(data);
        res.json(obj);
    });
    ;
});

app.listen(port);