
document.getElementById("result").innerHTML="<h4>Composed Value for composedValue(square,double,5) :"+composedValue(square,double,5);

function composedValue(square,double,x){
    return (double(square(x)));
}

function square(x){
    return (x*x);
}

function double(x){
    return(x*2);
}

