function add(a=3,b=6){
    return a+b;
}

document.getElementById("a").innerHTML="Calling add function with deafault values a=3 & b=6 : "+add();

function userFriends(username, ...friends){
    document.getElementById("b").innerHTML="Username :"+username+", List of friends (Using rest parameters): "+friends;
}
userFriends("satyam","John","Scott","Chris");

function printCapitalNames(n1,n2,n3,n4,n5){
    document.getElementById("c").innerHTML="All names in capital (Using spread operator) : "+n1.toUpperCase()+", "+n2.toUpperCase()+", "+n3.toUpperCase()+", "+n4.toUpperCase()+", "+n5.toUpperCase();
}

let names=["Wayne","Marcus","Henry","Alex","Brian"];

printCapitalNames(...names);