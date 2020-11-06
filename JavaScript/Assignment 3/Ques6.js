function createObject(){

        var person = '({"firstName": "Adam", "lastName": "Jones"})';
        console.log(typeof(person));

        console.log(eval(person));
        var person1 = eval(person);
        console.log(typeof(person1));
        document.getElementById("r1").textContent="First Name :"+person1.firstName;
        document.getElementById("r2").textContent="Last Name :"+person1.lastName;
}