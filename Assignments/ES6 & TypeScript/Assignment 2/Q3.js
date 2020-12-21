function* getNextArmstrong(){
    
    let num=10;

        try{
            while(true){
                
                let sum=0
                let temp = num;
                let len = num.toString().length;
                let rem =0;
                while(temp>0){
                    rem = temp%10;
                    sum+= Math.pow(rem,len);
                    temp = parseInt(temp/10);
                }

                if(sum === num){
                    yield num++;
                }

                else{
                    num++; 
                }
            } 
        }
        catch(e){
        console.log("Error caught");
     }
}


let arm = getNextArmstrong();

function reset(){
    arm = getNextArmstrong();
}

function getnext(){
    
    let num = arm.next().value;
    let node = document.createElement("LI");
    if(num<1000){               
        let textnode = document.createTextNode(num);        
        node.appendChild(textnode);                        
        document.getElementById("myList").appendChild(node);
    }
    else{
        let textnode = document.createTextNode("Next armstrong number is above 1000, please click Reset to generate from 0");        
        node.appendChild(textnode);                        
        document.getElementById("myList").appendChild(node);
        arm.throw(new Error('Count went over 1000'));
    }
}

