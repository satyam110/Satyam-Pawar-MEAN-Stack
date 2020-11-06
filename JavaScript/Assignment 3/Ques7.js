function createObject(){

    var person = '{"firstName": "Adam", "lastName": "Jones"}';

    console.log(JSON.parse(person));
    var person1 = JSON.parse(person);
    document.getElementById("r1").textContent="First Name :"+person1.firstName;
    document.getElementById("r2").textContent="Last Name :"+person1.lastName;
}