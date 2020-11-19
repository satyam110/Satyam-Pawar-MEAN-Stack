const express = require('express');

let port = process.env.PORT || 8080;

console.log(port);
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/time',(req,res)=>{
    let date = new Date();
    let ISODate = date.toISOString();
    res.send(ISODate);
});

app.listen(port);