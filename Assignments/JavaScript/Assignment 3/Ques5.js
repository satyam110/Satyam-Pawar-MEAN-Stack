function getPersonDetails(){
    var person = new Object();

    document.getElementById("")
    var fname = prompt("Enter First Name");
    var lname = prompt("Enter Last Name");

    person.firstName = fname;
    person.lastName = lname;

    console.log(person.middleName); //logs an undefined value

    person.middleName = prompt("Enter Middle Name");

    console.log(person.middleName); //logs assigned value
    console.log(person);

    document.getElementById("fname").innerHTML="<h3>First Name : "+person.firstName+"</h3>";
    document.getElementById("mname").innerHTML="<h3>Middle Name : "+person.middleName+"</h3>";
    document.getElementById("lname").innerHTML="<h3>Last Name : "+person.lastName+"</h3>";
    
}