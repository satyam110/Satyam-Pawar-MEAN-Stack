/*Write three functions that compute the sum of the numbers in a list: using
a for-loop, a while-loop and recursion.*/          
            function forLoop(arr){
               
                var len = arr.length;
                var sum = 0;
                for(i = 0; i < len; i++ ){
                    sum += arr[i];
                }
                return sum;

            }

            function whileLoop(arr){
              
                var len = arr.length;
                var i = 0;
                var sum = 0;
                while(i < len){
                    sum += arr[i]; 
                    i++;
                }
               return sum;
            }
            
            function recursion(arr, len){
                if(len === 0){
                    return 0;
                }
                else{
                    return (recursion(arr,len-1)+arr[len-1]); 
                }
            }

            function getSum(){
                var num = Number(prompt("Enter number elements in the array :"));

                var arr=[];

                for(i=0;i<num;i++){
                    arr.push(Number(prompt("Enter element nummber "+(i+1)+" :")));
                }
                document.getElementById("ip").innerHTML = "Input List :["+arr+"]";
                document.getElementById("for").innerHTML = "Sum using for loop : "+ forLoop(arr);
                document.getElementById("while").innerHTML = "Sum using while loop : "+ whileLoop(arr);
                document.getElementById("rec").innerHTML = "Sum using recursion : "+recursion(arr, arr.length);

            }
            

        