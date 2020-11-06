function square(x){
    return (x*x);
}

function map(arr,square){
    var newArr=[];
    if(arr.length===0){
        return newArr;
    }else{
        //debugger;
        newArr[0]=square(arr[0]);
        console.log(newArr[0]);
        return newArr.concat(map(arr.slice(1),square));
    }

}


//taking input

var arr=[];
var newarr=[];
function getInput(){
    len = parseInt(prompt("Enter the number of array elements to be entered"));
    
    for(i=0;i<len;i++){
        var x = parseInt(prompt("Enter Element "+(i+1)+" :"));
        arr[i]=x;
    } 
    newarr=map(arr,square);
    document.getElementById("r1").innerHTML="<h4> Input array is : ["+arr+"]</h4>";
    document.getElementById("r2").innerHTML="<h4> Square of numbers inside array are  : "+newarr+"</h4>";
}