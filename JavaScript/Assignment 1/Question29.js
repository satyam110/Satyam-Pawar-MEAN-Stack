//Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c],[1,2,3] -> [a,1,b,2,c,3]


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
    var list3 = [];
    document.getElementById("list1").innerHTML="<h3>List 1 is : "+list1+"</h3>";
    document.getElementById("list2").innerHTML="<h3>List 2 is : "+list2+"</h3>";



    for(i=0;i<list1.length;i++){
        if(!(list1[i]==-1 || list2[i]==-1)){
            list3.push(list1[i]);
            list3.push(list2[i]);
        }else{
            continue;
        }
    }

    document.getElementById("list3").innerHTML="<h3>Concatenated list is : "+list3+"</h3>";
}