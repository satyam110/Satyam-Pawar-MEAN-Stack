/* Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a
copy of the list. How many swap or move operations do you need? */

function getList(){
    
    var count = Number(prompt("Enter the length of list :"));
    var list=[];

    for(i=0;i<count;i++){
        list.push(prompt("Enter element "+(i+1)));
    }

    return list;
}

function shiftList(){
    var k = Number(prompt("Enter value for k :"));

    var list1=getList();
    document.getElementById("list1").innerHTML="<h3>Original List : ["+list1+"]";
    var temp=0;
    var swaps=0;
    for(i=0;i<k;i++){
        temp=list1[0];
        for(j=0;j<list1.length;j++){
            list1[j]=list1[j+1];
            swaps++;
        }
        list1[list1.length-1]=temp;
    }

    document.getElementById("list2").innerHTML="<h3>Shifted List : ["+list1+"]";
    document.getElementById("passes").innerHTML="<h3>Number of swap operations required : "+swaps+"</h3>"
}