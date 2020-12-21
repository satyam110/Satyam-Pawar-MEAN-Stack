/*Question - Write a guessing game where the user has to guess a secret number. After
every guess the program tells the user whether their number was too large
or too small. At the end the number of tries needed should be printed. It
counts only as one try if they input the same number multiple times
consecutively.*/

function startGame(){

    var lower = parseInt(prompt("Enter a lower limit:"));
    var upper = parseInt(prompt("Enter a upper limit:"));

    if(!isNaN(lower) && !isNaN(upper)){
        var secretNum = Math.floor(Math.random() * (upper-lower+1))+lower;
        var count=1;

        var guessNum = parseInt(prompt("Guess a number between "+lower+" to "+upper+" :"));
        var prevGuess=guessNum;
        while(guessNum!==secretNum){

            if(guessNum<secretNum){
                guessNum = parseInt(prompt("Your guess was lesser than the Secret Number, try with greater number !"));
            }else{
                guessNum = parseInt(prompt("Your guess was greater than the Secret Number, try with lesser number !"));
            }

            if(guessNum!=prevGuess){
                count+=1;
                prevGuess=guessNum;
            }
        }
        document.getElementById("result").innerHTML="<h2>Congratulations! You have guessed the Secret Number after "+count+" attempts !</h2>";
    }else{
        alert("Enter correct input");
    }

    
}