interface printable {
    print:string;
  }
  
  function printAll(circle: printable, employee:printable) {
    console.log(circle.print);
    console.log(employee.print);
    
  }
  
  function printObj(){
  let circle = { radius:3 , print:"Print method from circle object"};
  let employee = {name:"Steve" , print:"Print method from employee object"}
  printAll(circle,employee);
  }