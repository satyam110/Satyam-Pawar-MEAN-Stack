/*Modify the previous program such that only multiples of three or five are
considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17*/

function sumOf(){
    var num = parseInt(prompt("Enter a limit :"));
    var sum=0;
    if(!isNaN(num)){
        for(i=1; i<=num; i++){
           if(i%3==0 || i%5==0){
            sum+=i;
           }
        }
    }else{alert("Enter number only!!!");}

    document.getElementById("result").innerHTML="<strong> The sum of only multiples of three or five for the numbers 1 to "+num+" is: "+sum+"</strong>";
}