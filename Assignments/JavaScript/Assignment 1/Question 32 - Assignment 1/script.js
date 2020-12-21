function calculate(){
    var temp= Number(document.getElementById("temp").value);
    console.log(temp);
    if(temp!==-1 && !isNaN(temp)){
        document.getElementById("error").innerHTML="";
        var celcius = (temp-32)*5/9;
        document.getElementById("result").innerHTML="Temperatue in celcius(&deg;C) :"+celcius;
        
    }else{
        document.getElementById("error").innerHTML="Please enter appropriate value of temperature";
    }
}