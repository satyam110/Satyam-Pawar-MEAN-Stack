class Account {
    static total_bal:number=0;
    id:any;
    name:string;
    balance:number
    constructor(id,name,balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
        Account.total_bal += balance;
    }

     static getbalance(){
        return Account.total_bal;
    }
}

class SavingAccount extends Account{
    interest:any
    constructor(id,name,balance,interest){
        super(id,name,balance);
        this.interest= interest;
    }
}

class CurrentAccount extends Account{
    cash_credit:number;
    constructor(id,name,balance,cash_credit){
        super(id,name,balance);
        this.cash_credit = cash_credit;
    }
}

function getTotalBal(){

const savings1 = new SavingAccount(123,"XYZ",4324.50,"12.5%");
const current1 = new CurrentAccount(564,"ABC",67758.40,0.234);


document.getElementById("total_bal").innerHTML=`Total balance in the bank is : ${Account.getbalance()}`;

}