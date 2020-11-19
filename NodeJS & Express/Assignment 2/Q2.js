const express = require('express');

const app = express();

app.get('/year',(req,res)=>{
    let age = req.query.age;
    var date = new Date();
    let thisYear = date.getFullYear();
    let bornYear = thisYear-age;
    res.send(`You were born in ${bornYear}`);
});

app.listen(3000);