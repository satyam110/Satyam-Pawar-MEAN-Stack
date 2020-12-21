/*Write a program that prints all prime numbers. (Note: if your programming
language does not support arbitrary size numbers, printing all primes up to
the largest number you can easily represent is fine too.)*/



document.getElementById("result").innerHTML="Prime numbers upto "+ 1000 +" are :"

for(i = 2; i <= 1000; i++){ 
    if(checkPrime(i)){
        document.write(i+" ");
    } 

}

function checkPrime(i){
    for(j = 2; j < ( Math.floor(Math.sqrt(i)) + 1); j++){
        if(i%j == 0){
            return false ;
        }
    }
    return true;
}