const express = require('express');
const app= express();

app.set('views', __dirname+'/templates');
app.set('view engine','pug');

let port = process.argv[2];
let templateName = process.argv[3];

app.get('/',(req,res)=>{
    res.render(templateName,{date: new Date().toDateString()})
});

app.listen(port)