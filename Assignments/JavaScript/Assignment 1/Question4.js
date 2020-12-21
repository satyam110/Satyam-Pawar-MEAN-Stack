/*Question - Make a function that takes a number of flips and returns the fraction that were heads.*/
function headsRatio(){
    var headsCount=0;
    var numFlips = Number(document.getElementById("num-flip").value);
    console.log(numFlips);
    for(i=0;i<numFlips;i++){
        toss=Math.floor(Math.random()*2);
        if(toss == 1){     // 0 indicates "heads" , 1 indicates "tails"
            headsCount++;
        }
    }
    document.getElementById("result").innerHTML="<h4>Fraction of heads : "+(headsCount/numFlips) +"</h4>";
}
