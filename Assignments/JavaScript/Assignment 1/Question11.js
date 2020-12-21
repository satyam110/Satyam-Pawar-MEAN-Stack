/* Question - 
   Write a function that, given a string, will return the longest token (consecutive string of characters)
   that contains neither an a nor a b.
*/


function longestToken(str1){
   document.getElementById("ipstr").textContent="Input String is :"+str1;

   var str2 = str1.replaceAll("a"," "); //this will replace all the occurrences of 'a' with a whitespace
   //console.log(str2);
   var str3 = str2.replaceAll("b"," "); //this will replace all the occurrences of 'b' with a whitespace
   //console.log(str3);

   var str = str3.split(" ");
   console.log(str);

   var maxStr="";

   for(i=0; i<str.length; i++){
      if(str[i].length>maxStr.length){
         maxStr = str[i];
      }
   }
   
   console.log("Longest substring without a&b is : "+maxStr);
   document.getElementById("result").textContent="Longest substring without a&b is : "+maxStr;
}
longestToken("ababcdababefgababhiab");
