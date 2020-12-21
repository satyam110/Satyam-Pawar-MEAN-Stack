
function parity(num){
    var parity="";
    if(num%2==0){
        parity="even";
    } else if(num%2!==0){
        parity="odd";
    }
    return parity;
}

function check(){
var num = Number(prompt("Enter Number :"))
document.getElementById("result").innerHTML="The Number "+num+" is : "+(parity(num));
}