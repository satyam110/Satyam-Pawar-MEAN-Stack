function isEven(num){
    return(num%2===0)
}

//taking input

var arr =[];
var len=0
function getInput(){
    len = parseInt(prompt("Enter the number of array elements to be entered"));
    
    for(i=0;i<len;i++){
        var x = parseInt(prompt("Enter Element "+(i+1)+" :"));
        arr[i]=x;
    }
    find(arr,isEven);
}
console.log(arr);
var evenarr=0;
function find(arr,isEven){
    for(i=0;i<arr.length;i++){
        if(isEven(arr[i])){
            evenarr=arr[i];
            break;
        }
    }
    document.getElementById("r1").innerHTML="<h4> Input array is : ["+arr+"]</h4>";
    document.getElementById("r2").innerHTML="<h4> First Even number inside array is : "+evenarr+"</h4>";
}


