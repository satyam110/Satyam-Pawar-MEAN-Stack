/* Question - 
        Write a function that, given an array of strings, will compute the sum of the lengths of the words
        that do not contain a “q”. Do not use a loop or the forEach method, only array methods (filter, map, reduce) and string methods/properties (indexOf, length).
        */

       function lengthOfNonQWords(words){
        var reducer = (accumulator, currentValue) => accumulator + currentValue;
        var result = words.filter(word => word.indexOf("q")==-1); //filter will return array with elements not containing Q word
        var sum = result.map(res => res.length).reduce(reducer); //map function will return an array containing length for each element and reduce function will accumulate all the lengths into one single sum
        console.log(result);
        console.log(sum);

        document.getElementById("input").innerHTML="Input Array is :"+words;
        document.getElementById("result").innerHTML="Length of Non Q Words is :"+sum;
    }
    var test1 = ["stop", "quit", "exit","quick","hello"];
    lengthOfNonQWords(test1);