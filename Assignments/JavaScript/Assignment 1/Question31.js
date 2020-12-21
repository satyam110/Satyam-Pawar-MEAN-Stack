/* Write function that translates a text to Pig Latin and back. English is
translated to Pig Latin by taking the first letter of every word, moving it to
the end of the word and adding 'ay'  */


function engToPig(){

    var eng_txt = document.getElementById("eng-text").value;
    console.log(eng_txt);
    var txtArr = eng_txt.split(" ");
    console.log(txtArr);
    for(i=0;i<txtArr.length;i++){
        var len = txtArr[i].length;

        txtArr[i] = txtArr[i].slice(1,len)+txtArr[i].slice(0,1).toLowerCase()+"ay";
    }

    var pig_txt = txtArr.join(" ");
    pig_txt=pig_txt.charAt(0).toUpperCase()+pig_txt.slice(1);
    document.getElementById("pig-op").style.textTransform="initial";

    document.getElementById("pig-op").value=pig_txt;
}