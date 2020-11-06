function printAsterisk(){
    var c1= parseInt(prompt("Input 1: "));
    if(c1>=1 && c1<=30){
        var c2= parseInt(prompt("Input 2: "));
        if(c2>=1 && c2<=30){
            var c3 = parseInt(prompt("Input 3: "));
            if(c3>=1 && c3<=30){
                for(i=0;i<c1;i++){
                    document.getElementById("t1").innerHTML+="*";
                }
                for(i=0;i<c2;i++){
                    document.getElementById("t2").innerHTML+="*";
                }
                for(i=0;i<c3;i++){
                    document.getElementById("t3").innerHTML+="*";
                }
            }
            else{
                alert("Number out of range please enter between 1to30");
            }
        }
        else{
                alert("Number out of range please enter between 1to30");
            }
    }
    else{
         alert("Number out of range please enter between 1to30");
    }
    
}