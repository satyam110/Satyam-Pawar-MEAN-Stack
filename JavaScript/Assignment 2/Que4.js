var square = function square(x){
    return (x*x);
}

var arr =[];
var len=0;

//taking input
function getInput(){
    len = parseInt(prompt("Enter the number of array elements to be entered"));
    
    for(i=0;i<len;i++){
        var x = parseInt(prompt("Enter Element "+(i+1)+" :"));
        arr[i]=x;
    }
    map(arr,square);
}
console.log(arr);
var squareArr=[];
function map(arr,square){
    for(i=0;i<arr.length;i++){
            squareArr.push(square(arr[i]));
    }
    document.getElementById("r1").innerHTML="<h4> Input array is : ["+arr+"]</h4>";
    document.getElementById("r2").innerHTML="<h4> Square of numbers inside array are : "+squareArr+"</h4>";
}