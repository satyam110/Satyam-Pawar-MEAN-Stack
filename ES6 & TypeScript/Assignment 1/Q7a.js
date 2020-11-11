let arr = ["New York","Texas","Nevada","California"];

document.getElementById("arr").innerHTML="Array is : ["+arr+"]";

[,,val,]=arr; //destructuring array

document.getElementById("op").innerHTML="3rd Element of the given array is : "+val;