/*Question - Write a function that returns the largest element in a list.*/

var arr=[32,45,21,54,34,89];
var max=0;
document.getElementById("list").innerHTML = "Input List: " +arr;

function getMax(){
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    document.getElementById("result").innerHTML = "Largest Element From List : " + max;  
}

