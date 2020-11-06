function isEven(num){
    return(num%2===0);
}

function find(arr,isEven){

    if(arr.length === 0){
        return null;
    } else if(isEven(arr[0])){
        return arr[0];
    }else{
        return find(arr.slice(1),isEven);
    }
}

//taking input
var arr =[];
var func = isEven;
var even = 0;
function getInput(){
    len = parseInt(prompt("Enter the number of array elements to be entered"));
    
    for(i=0;i<len;i++){
        var x = parseInt(prompt("Enter Element "+(i+1)+" :"));
        arr[i]=x;
    }
    even = find(arr,func);
    document.getElementById("r1").innerHTML="<h4> Input array is : ["+arr+"]</h4>";
    document.getElementById("r2").innerHTML="<h4> First Even number inside array is : "+even+"</h4>";
}


