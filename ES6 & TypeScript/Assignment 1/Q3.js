function getValues(){

    const obj1 = {id:1,title:"Order 1",price:"$7.8"};

    obj1.printOrder=()=>{
        document.getElementById("prop1").innerHTML="Order ID : "+obj1.id;
        document.getElementById("prop2").innerHTML="Order Title : "+obj1.title;
    }
    obj1.getPrice=()=>{
        document.getElementById("prop3").innerHTML="Price : "+obj1.price;
    }

    obj1.printOrder();
    obj1.getPrice();
    // console.log(obj1);

    const obj2 = Object.assign(obj1);

    document.getElementById("prop11").innerHTML="Order ID : "+obj2.id;
    document.getElementById("prop22").innerHTML="Order Title : "+obj2.title;
    document.getElementById("prop33").innerHTML="Price : "+obj2.price;

}