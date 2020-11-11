function printAll(circle, employee) {
    console.log(circle.print);
    console.log(employee.print);
}
function printObj() {
    var circle = { radius: 3, print: "Print method from circle object" };
    var employee = { name: "Steve", print: "Print method from employee object" };
    printAll(circle, employee);
}
