var BankAccount = new Object();

var acno = prompt("Enter bank account number :");
var holdername = prompt("Enter Bank account holder name :");
var bal = parseFloat(prompt("Enter account balance :"));

BankAccount.accountNumber = acno;
BankAccount.accountHolderName = holdername;
BankAccount.accountBalance = bal;

var Savings = Object.create(BankAccount);
var Current = Object.create(BankAccount);

Savings.isSalary = true;
Current.odLimit = 1000;



Savings.withdraw=function(x){
    if((Savings.accountBalance-x)>0){

        Savings.accountBalance -= x;
    }
}

Current.withdraw=function(x){
    if((Current.accountBalance-x)>Current.odLimit){

        Current.accountBalance -= x; 
    }
    
}

Savings.getCurrentBalance = function(){return Savings.accountBalance;};
Current.getCurrentBalance = function(){return Current.accountBalance;};

Savings.withdraw(1000);
Current.withdraw(3000);

console.log("Total account balance after transaction : "+Savings.getCurrentBalance());
console.log("Total account balance after transaction : "+Current.getCurrentBalance());

document.getElementById("r1").textContent="Total account balance after transaction : "+Savings.getCurrentBalance();
document.getElementById("r2").textContent="Total account balance after transaction : "+Current.getCurrentBalance();