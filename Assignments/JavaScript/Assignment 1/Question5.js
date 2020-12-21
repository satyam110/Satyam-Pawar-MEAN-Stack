//Make a function that takes a number and a short string, and returns the string concatenated that number of times.
function padChars(){
    var num = Number(document.getElementById("num").value);
    var char = document.getElementById("char").value;
    var con_str="";
        for(i=0;i<num;i++){
            con_str=con_str.concat(char);
        }

        document.getElementById("result").innerHTML="<h4>Concatenated String : "+con_str+"</h4>";
}
