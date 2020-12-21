class FiboList{
     _previousNo=Symbol();
     _currentNo=Symbol();
    constructor(prev,current){
        this._previousNo=prev;
        this._currentNo=current;
    }

    [Symbol.iterator](){
       let prev = this._previousNo;
       let current = this._currentNo;
       let fibo=0;
    //    let fiboSeries =[0,1];
       return{
          next(){
                 fibo=prev+current;
                 prev=current;
                 current=fibo;
                 

                if(fibo<=100){
                    return{
                        done:false, 
                        value:fibo
                    }
                }
                else{
                    return{done:true};
                }
          }  
       }
    }
}

const fiboList = new FiboList(0,1)[Symbol.iterator]();




function getnext(){
    
    let num = fiboList.next().value;
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(num);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);
}
// console.log(0);
// console.log(1);
// for(const number of fiboList){
//     console.log(number);
// }

// console.log(fiboList.next());
// console.log(fiboList.next());
// console.log(fiboList.next());
// console.log(fiboList.next());
// console.log(fiboList.next());
// console.log(fiboList.next());
// console.log(fiboList.next());
// console.log(fiboList.next());
// console.log(fiboList.next());
// console.log(fiboList.next());