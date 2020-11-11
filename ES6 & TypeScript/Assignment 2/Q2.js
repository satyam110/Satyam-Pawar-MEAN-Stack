function getNextArmstrong(){
    
    let num=10;

    return{
        next(){
            while(true){
                let len = num.toString().length;
                let sum=0
                let temp = num;
                let rem =0;
                while(temp>0){
                    rem = temp%10;
                    sum+= Math.pow(rem,len);
                    temp = parseInt(temp/10);
                }

                if(sum === num){
                    return{
                        value: num++,
                        done:false
                    };
                }

                else{
                    num++;
                    
                }
        } 

            return{
                done:true           
            }
        }
    };
}

let arm = getNextArmstrong();
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);



function getnext(){
    
    let num = arm.next().value;
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(num);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);
}

