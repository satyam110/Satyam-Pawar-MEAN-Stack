/* Question - Write a function that computes the running total of a list. */

var list = [10,20,30,40];
document.getElementById("r1").innerHTML="<h3>Elements of the list : "+list+"</h3>";

function computeTotal(){
    var sum=0;

    for(i=0;i<list.length;i++){
        if(!isNaN(list[i])){
            sum+=list[i];
        }else{continue;}
    }
document.getElementById("r2").innerHTML="<h3>Running total of the given list is "+sum+"</h3>";
    
}