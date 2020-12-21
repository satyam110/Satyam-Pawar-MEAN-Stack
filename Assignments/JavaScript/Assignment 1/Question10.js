function convArray(stringarr){
    arr1=[];
    for(i=0;i<stringarr.length;i++)
    {
        arr1.push(parseFloat(stringarr[i]));
    }

    document.getElementById("result").innerHTML="Converted Array : ["+arr1+" ]";
}
var strings = ["1.2", "2.3", "3.4"];
convArray(strings);