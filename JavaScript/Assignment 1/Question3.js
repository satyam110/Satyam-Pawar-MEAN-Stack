/*Question - Copy the flipCoin function from the last set of exercises. Now, make a function that, given a number,
          flips a coin that many times and returns the number of heads.*/
          function numHeads(){
            var headsCount=0;
            var numFlips = Number(document.getElementById("num-flip").value);
            console.log(numFlips);
            for(i=0;i<numFlips;i++){
                toss=Math.floor(Math.random()*2);
                if(toss == 1){     // 0 indicates "heads" , 1 indicates "tails"
                    headsCount++;
                }
            }
            document.getElementById("result").innerHTML="<h4>Number of times heads appeared: "+headsCount+"</h4>";
        }
    