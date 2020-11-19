const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let urlEncodedParser = bodyParser.urlencoded({extended:false});

app.use(urlEncodedParser);

app.get('/form', (req,res) => {
    res.sendFile(__dirname+'/Q5.html');
});

app.post('/form', (req,res)=>{
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(3000);