//Update the HTML page so that each time you reload it, you randomly see either a “Have a GOOD day!” or “Have a BAD day!” message. If you know some CSS already, make the font big.

randomNum=Math.floor(Math.random()*2);
var msg=""
if(randomNum==0){
    msg="Have a GOOD day!";
}else if(randomNum==1){
    msg="Have a BAD day!";
}
document.getElementById("text").style.fontSize="4rem";

document.getElementById("text").innerHTML=msg;