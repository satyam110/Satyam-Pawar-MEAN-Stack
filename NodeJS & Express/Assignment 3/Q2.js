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

// handling put request
app.put('/inventory', (req,res) => {
    data = [req.body];
    res.json(data);
    console.log(data);
});

// handling put request for specific record
app.put('/inventory/:name', (req,res) => {

    let index = data.findIndex(d => d.name === req.params.name);
    
    data[index] = req.body;
    
    if(index===-1){
        res.status(400).json({"error":"Inventory not found"});
    } else{
        res.json(data);
    }
});

app.listen(3000);