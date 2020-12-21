function runCalculator(){
    var ch=0;
    promptMenu();
    function promptMenu(){
    while(1){
            ch= parseInt(prompt("1. Add\r\n2. Subtract\r\n3. Multiply\r\n4. Divide\r\n5. Exponent\r\n6. Mean\r\n7. Quit"));
            if(ch>=1 && ch<=7){
                break;
            }else{
                alert("Please choose correct option");
            }
        }
    }

    if(ch==1){
        var num1 = parseInt(prompt("Enter number 1"));
        var num2 = parseInt(prompt("Enter number 2"));
        if(!(isNaN(num1)&&isNaN(num2))){
            document.getElementById("result").value=num1+num2;
        }else{
            alert("Enter Valid Input");
            promptMenu();
        }
    } else if(ch==2){
        var num1 = parseInt(prompt("Enter number 1"));
        var num2 = parseInt(prompt("Enter number 2"));
        if(!(isNaN(num1)&&isNaN(num2))){
            document.getElementById("result").value=num1-num2;
        }else{
            alert("Enter Valid Input");
            promptMenu();
        }
    }else if(ch==3){
        var num1 = parseInt(prompt("Enter number 1"));
        var num2 = parseInt(prompt("Enter number 2"));
        if(!(isNaN(num1)&&isNaN(num2))){
            document.getElementById("result").value=num1*num2;
        }else{
            alert("Enter Valid Input");
            promptMenu();
        }
    }else if(ch==4){
        var num1 = parseInt(prompt("Enter number 1"));
        var num2 = parseInt(prompt("Enter number 2"));
        if(!(isNaN(num1)&&isNaN(num2))){
            document.getElementById("result").value=num1/num2;
        }else{
            alert("Enter Valid Input");
            promptMenu();
        }
    }else if(ch==5){
        var num1 = parseInt(prompt("Enter base"));
        var num2 = parseInt(prompt("Enter exponent"));
        if(!(isNaN(num1)&&isNaN(num2))){
            document.getElementById("result").value=Math.pow(num1,num2);
        }else{
            alert("Enter Valid Input");
            promptMenu();
        }
    }else if(ch==6){
        var numseries = prompt("Enter series of numbers");
        var len=numseries.length;
        var nums=numseries.substr(0,len-4);
        var numarr=nums.split(",");
        var sum=0;
        for(i=0;i<numarr.length;i++){
            sum+=parseInt(numarr[i]);
        }
        var avg=sum/numarr.length;
        document.getElementById("result").value=avg;
        promptMenu();
    }else if(ch==7){
        close();
    }
}
