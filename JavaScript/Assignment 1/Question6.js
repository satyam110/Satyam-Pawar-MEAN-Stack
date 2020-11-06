/*Write a function that returns the number of times you have to roll a die to get a 6.*/

function numRollsToGetSix(){
    var count=1;
    var die=0;
    while(1){
        die=Math.floor(Math.random() * 6)+1;
        if(die === 6){
            break;
        }else{
            count+=1;
        }
    }
    document.getElementById("result").innerHTML="Number of times you have to roll a die to get a 6 : <strong>"+count+"</strong>";
}