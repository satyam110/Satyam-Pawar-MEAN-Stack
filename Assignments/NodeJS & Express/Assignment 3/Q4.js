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

console.log(data);

// handling get request
app.get('/inventory', (req,res) => {
    res.json(data);
});

// handling delete request
app.delete('/inventory', (req,res) => {
    data.splice(0,data.length);
    console.log(data);
    if(data.length===0){
    res.status(200).send("Deleted all records")
    }else{
        res.status(400).json({"Error":"Error deleting records"})
    }
});

// handling delete request for specific record
app.delete('/inventory/:name', (req,res) =>{
    let index = data.findIndex(d => d.name === req.params.name);
    if(index !== -1) {
        data.splice(index,1);
        res.json(data);
    }else{
        res.status(400).json({"Error":"Can't find that record to delete"})
    }

})

app.listen(3000);