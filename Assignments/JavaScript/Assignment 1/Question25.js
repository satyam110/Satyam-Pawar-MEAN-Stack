function checkPalindrome(){

        var str = document.getElementById("string").value.toLowerCase() ;
        var isPalindrom = false;
        var rev = str.split("");
        var revStr = rev.reverse().join("");
        if(str === revStr){
            isPalindrom = true;
        }

        if(isPalindrom){
            document.getElementById("result").value="String is Palindrome";
        }else{
            document.getElementById("result").value="String is not Palindrome";
        }
}