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
// handling post request to create new record
app.post('/inventory', (req,res) => {
    
    if(JSON.stringify(req.body) !== '{}'){
        data.push(req.body);
        if(req.body.name !== undefined && req.body.quantity !== undefined){
            res.json(data);
        }else{
            res.status(400).json({"error":"Name or Quantity missing"});
        }
        
    }else {
        res.status(400).json({"error":"No data to post"});
    }

});

app.listen(3000);