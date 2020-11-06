/*Question - Write a function that concatenates two lists*/

function getList(listnum){
    
    var count = Number(prompt("Enter the length of list "+listnum));
    var list=[];

    for(i=0;i<count;i++){
        list.push(prompt("Enter element "+(i+1)));
    }

    return list;
}

function concatList(){

    var list1 = getList(1);
    var list2 = getList(2);
    document.getElementById("list1").innerHTML="<h3>List 1 is : "+list1+"</h3>";
    document.getElementById("list2").innerHTML="<h3>List 2 is : "+list2+"</h3>";

    for(i=0;i<list2.length;i++){
        list1.push(list2[i]);
    }

    document.getElementById("list3").innerHTML="<h3>Concatenated list is : "+list1+"</h3>";
}