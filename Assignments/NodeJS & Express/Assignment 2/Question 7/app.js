const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));

let data = [{id:0,item:'Milk',price:'$1.5'},{id:1,item:'Apple',price:'$1.8'}]

app.get('/items',(req,res) => {
    res.render('index',{items:data});
});

app.post('/items',(req,res) => {
    data.push({id:req.body.id,item:req.body.name,price:req.body.price});
    console.log(data);
    res.redirect('/items')
});

app.get('/items/:id',(req,res) => {
    var id = data[req.query.id];
    if(id===undefined){
        res.render('index1',{items:data[data.length-1]})
    }else{
    res.render('index1',{items:id});
    }
});

app.patch('/items/:id',(req,res)=>{
    console.log(data);
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;
    data[id].item = name;
    data[id].price = price;
    // res.render('index1',{items:id});
    res.send(data);
});

app.delete('/items/:id',(req,res)=>{
    console.log(data);
    var id = req.params.id;

    if(id>0 && id<data.length){
        data.splice(id,1);
    }
    res.send(data);
    console.log(data);
});
app.listen(3000);