/* Write function that reverses a list, preferably in place.*/

function revArray(){
    var arr =[21,33,54,12];
    document.getElementById("before").innerHTML="Array :["+arr+"]";
    var temp=[];
    var len = arr.length;
    for(i=0;i<len;i++){
        temp.push(arr.pop());
    }
    document.getElementById("result").innerHTML="Reversed Array :["+temp+"]";
}
