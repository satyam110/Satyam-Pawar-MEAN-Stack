//Question - Write a function that checks whether an element occurs in a list. //

var list = [23,54,32,64,54,22];
document.getElementById("r1").innerHTML="Elements of the list : "+list;
function find(){
    

    
    var key = parseInt(prompt("Enter element to be found :"));
    var found=false;

    for(i=0;i<list.length;i++){
        if(key==list[i]){
            found=true;
            break;
        }
        else{
            found=false;
        }
    }

    if(found){
        document.getElementById("r2").innerHTML="Element present ? Yes";
    }else{
        document.getElementById("r2").innerHTML="Element present ? No";
    }


}