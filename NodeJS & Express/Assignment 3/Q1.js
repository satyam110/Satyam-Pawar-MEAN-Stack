const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

// static data
let data = [{
    name: "Apples",
    quantity:3
},
{
    name: "Oranges",
    quantity: 7
},
{
    name: "Pomegranates",
    quantity: 55
}];

// handling get request
app.get('/inventory', (req,res) => {
    res.json(data);
});

// handling get request to get specific record
app.get('/inventory/:name', (req,res) => {

    let index = data.findIndex(d => d.name === req.params.name);
    
    if(index===-1){
        res.send({});
    } else{
        res.json(data[index]);
    }
});

app.listen(3000);