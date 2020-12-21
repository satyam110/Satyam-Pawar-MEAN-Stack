/* Question - Write a function that returns the elements on odd positions in a list. */

function findOddElements(){
    
    var list=[];
    var count = Number(prompt("Enter number of elements"));

    for(i=0;i<count;i++){
        list[i]= Number(prompt("Enter element"+(i+1)));
    }

    var oddList=[];
    for(i=0;i<list.length;i++){
        if(i%2!==0){
            oddList.push(list[i]);
        }
    }

        document.getElementById("r1").innerHTML="Original Array : ["+list+"]"
        document.getElementById("r2").innerHTML="Elements at odd position :"+oddList;
    


}