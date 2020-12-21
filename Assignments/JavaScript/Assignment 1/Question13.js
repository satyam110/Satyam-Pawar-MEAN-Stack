        /*Question -
            1. Define a variable x and give it a value of 5. Evaluate x and verify it shows the value.
            2. Create function half(x) which returns half of x
                Try to predict what you will get for half(x), half(4), and half(3). It is simple to predict what you will
                get for half(4), but, depending on your programming background, it might not be so easy to predict
                what you will get for half(x) and half(3). Call half(x), half(4), and half(3) and see if you were right.
            3. Try to predict what you will get if you evaluate x in the console. Is it still 5, or is it 3? Try it and see.
            4. Call seven() in the console. Try to predict what you will get if you evaluate x in the console. Try it
                and see. How do you explain the surprising result?
        */

       var x = 5;
       console.log(eval(x));
       document.getElementById("r1").textContent="Value of eval(x) = "+eval(x);

       function half(x){
           return (x/2);
       }

       console.log(half(x));
       document.getElementById("r2").textContent="Value of half(x) = "+half(x);
       console.log(half(4));
       document.getElementById("r3").textContent="Value of half(4) = "+half(4);
       console.log(half(3));
       document.getElementById("r4").textContent="Value of half(3) = "+half(3);

       document.getElementById("r5").textContent="Value of eval(x) again = "+eval(x);

       function seven() {
           x = 7;
           return(x);
       }

       console.log(seven());
       document.getElementById("r6").textContent="Value of seven() = "+seven();
   