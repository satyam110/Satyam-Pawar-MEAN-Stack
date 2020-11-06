function square(x){
    return (x*x);
}

function double(x){
    return(x*2);
}


function compose(f1,f2){
    
    return function(x){
        return f1(f2(x));
    };
}

var x = parseInt(prompt("Enter a number :"));

var f1=compose(square,double);
var f2=compose(double,square);
console.log(f1);
console.log(f2);

document.getElementById("r1").textContent="Square of the double of "+x+" is :"+f1(x);
document.getElementById("r2").textContent="Double of the square of "+x+" is :"+f2(x);