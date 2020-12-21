/* Question -
            Make a function called calculation that, given three numbers a, b, and c, returns (a + b)/c. Try it
            with a few normal values. Then, try to predict what you will get for calculation(1, 1, 0), calculation(-1, -1, 0), 
            and calculation(1, -1, 0). Try those tests and see if you get what you expected.
        */

       function calculation(a,b,c){

        return((a+b)/c);
    }

    console.log(calculation(1,1,0));
    document.getElementById("r1").textContent="Result of calculation(1,1,0) : "+calculation(1,1,0);
    console.log(calculation(-1,-1,0));
    document.getElementById("r2").textContent="Result of calculation(-1,-1,0) : "+calculation(-1,-1,0);
    console.log(calculation(1,-1,0));
    document.getElementById("r3").textContent="Result of calculation(1,-1,0) : "+calculation(1,-1,0);
