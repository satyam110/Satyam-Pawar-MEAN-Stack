let croom1 = new Set();
    let user1 = new Map();
    user1.set("name","Satyam");
    user1.set("msg","hello all!!");

    let user2 = new Map();
    user2.set("name","Chris");
    user2.set("msg","Hi there");

    let user3 = new Map();
    user3.set("name","Dave");
    user3.set("msg","How are you all");

    croom1.add(user1);
    croom1.add(user2);
    croom1.add(user3);

let croom2 = new Set();

    let user4 = new Map();
    user4.set("name","Jonas");
    user4.set("msg","Hello");

    let user5 = new Map();
    user5.set("name","Joey");
    user5.set("msg","I love pizza");

    let user6 = new Map();
    user6.set("name","Ross");
    user6.set("msg","Hi, I'm Ross ");

    croom2.add(user4);
    croom2.add(user5);
    croom2.add(user6);


function chatroom1(){
    document.getElementById("room1").innerHTML="<h4>Chatroom 1 Details</h4>";
    document.getElementById("nouser").innerHTML="<h4>Number of users in chatroom 1 : "+croom1.size+"</h4>";
    let details=[]
    for(let [key,value] of user1.entries()){
        details.push(key);
        details.push(value);
    }
    for(let [key,value] of user2.entries()){
        details.push(key);
        details.push(value);
    }
    for(let [key,value] of user3.entries()){
        details.push(key);
        details.push(value);
    }
    document.getElementById("i1").innerHTML=`User : ${details[1]}, Message : ${details[3]}`;
    document.getElementById("i2").innerHTML=`User : ${details[5]}, Message : ${details[7]}`;
    document.getElementById("i3").innerHTML=`User : ${details[9]}, Message : ${details[11]}`;
}

function chatroom2(){
    document.getElementById("room2").innerHTML="<h4>Chatroom 2 Details</h4>";
    document.getElementById("nouser2").innerHTML="<h4>Number of users in chatroom 2 : "+croom2.size+"</h4>";
    let details=[]
    for(let [key,value] of user4.entries()){
        details.push(key);
        details.push(value);
    }
    for(let [key,value] of user5.entries()){
        details.push(key);
        details.push(value);
    }
    for(let [key,value] of user6.entries()){
        details.push(key);
        details.push(value);
    }
    document.getElementById("i21").innerHTML=`User : ${details[1]}, Message : ${details[3]}`;
    document.getElementById("i22").innerHTML=`User : ${details[5]}, Message : ${details[7]}`;
    document.getElementById("i23").innerHTML=`User : ${details[9]}, Message : ${details[11]}`;
}