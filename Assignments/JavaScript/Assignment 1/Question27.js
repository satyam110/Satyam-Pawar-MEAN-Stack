/* Question - Write a function on_all that applies a function to every element of a list. Use
it to print the first twenty perfect squares. The perfect squares can be found
by multiplying each natural number with itself. The first few perfect squares
are 1*1= 1, 2*2=4, 3*3=9, 4*4=16. Twelve for example is not a perfect
square because there is no natural number m so that m*m=12. (This
question is tricky if your programming language makes it difficult to pass
functions as arguments.)*/

function perfectSquare(){

    var perfectSquares=[];
    var sqCount=0;

    for(i=1;i<1000;i++){

        if(sqCount===20){
            break;
        }else if(Math.sqrt(i)%1==0){
            perfectSquares.push(i);
            sqCount++;
        }
    }

    document.getElementById("result").innerHTML="<h3> The first 20 perfect squares are : "+perfectSquares;
    console.log(perfectSquares);
}