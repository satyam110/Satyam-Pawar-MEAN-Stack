function getPersonDetails(){
    var person = new Object();

    document.getElementById("")
    var fname = prompt("Enter First Name");
    var lname = prompt("Enter Last Name");

    person.firstName = fname;
    person.lastName = lname;

    document.getElementById("fname").innerHTML="<h3>First Name : "+person.firstName+"</h3>";
    document.getElementById("lname").innerHTML="<h3>Last Name : "+person.lastName+"</h3>";
}