const express = require('express');
const PORT = process.argv[2];

const app = express();

app.get('/home',(req,res)=>{
    res.send("Hello World!");
});

app.listen(PORT);