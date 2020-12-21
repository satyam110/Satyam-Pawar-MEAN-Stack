document.getElementById("summary").disabled=true;
document.getElementById("help").innerText="This TEXTAREA provides context sensitive help. Click on any input field or use the TAB to get more information about the input field";
function checkData(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var delOptions = document.getElementsByName("get-pizza");
    var delOption="";
    for(i=0;i<delOptions.length;i++){
        if(delOptions[i].checked){
            delOption=delOptions[i].value;
        }
    }
    var toppings = document.getElementsByName("topping");
    var topping=[];
    for(i=0;i<toppings.length;i++){
        if(toppings[i].checked){
            topping.push(toppings[i].value);
        }
    }
    var tip = document.getElementById("tip").value;
    var address= document.getElementById("address").value;
    var sumbtn = document.getElementById("summary");
    
    if(name!=="" && email!=="" && delOption !=="" && tip!=="" && address!=="" && topping.length!==0){
        sumbtn.disabled=false;
        sumbtn.addEventListener("click",function(){
            var toppingSum="";
            var delivery="No";
            var total=0.0;
            var tipAmt = parseInt(tip)/100;
            for(i=0;i<topping.length;i++){
                toppingSum=toppingSum+"<tr><th>Topping"+(i+1)+"</th><td>"+topping[i]+"</td></tr>";
            }

            if(delOption==="Delivery"){
                delivery="Yes";
            }
            if(delivery=="Yes"){
                total= (10+1.5*topping.length+5)*(1.0+tipAmt);
            }
            else if(delivery=="No"){
                total= (10+1.5*topping.length+0)*(1.0+tipAmt);
            }

            document.getElementById("summary-text").innerHTML="Pizza Order Summary";
            document.getElementById("summary-table").innerHTML=" <table border='1'><tr><th>Name:</th><td>"+name+"</td></tr>"+
            "<tr><th>Email:</th><td>"+email+"</td></tr>"+
            "<tr><th>Address:</th><td>"+address+"</td></tr>"+
            "<tr colspan=2><th>Toppings:</th></tr>"+toppingSum+
            "<tr><th>Delivery?</th><td>"+delivery+"</td></tr>"+
            "<tr><th>Tip amount</th><td>"+tip+"%</td></tr>"+
            "<tr><th>Total</th><td>$"+total.toFixed(1)+"</td></tr></table>";
        })
    }
    else{
        document.getElementById("error").textContent="Some Values are missing";
    }
}

function helpDefault(){
    document.getElementById("help").innerText="This TEXTAREA provides context sensitive help. Click on any input field or use the TAB to get more information about the input field";
}

function helpName(){
    document.getElementById("help").innerText="This name input field, please enter your name in it";
}

function helpEmail(){
    document.getElementById("help").innerText="This email input field, please enter your email in it";    
}

function helpTip(){
    document.getElementById("help").innerText="Select the % of tip you want to offer";
}

function helpAddress(){
    document.getElementById("help").innerText="This is address field, please enter your address";
}
