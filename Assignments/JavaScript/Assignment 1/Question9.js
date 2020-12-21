/*Create an array containing 100 random numbers. Use two-step array allocation. Print out the array.*/
function randomArray(){
    var hundredNums=[];

    for(i=0; i<100; i++){
        hundredNums[i]= Math.random().toFixed(2);
    }

    document.getElementById("result").innerHTML="["+hundredNums+"]";
}

