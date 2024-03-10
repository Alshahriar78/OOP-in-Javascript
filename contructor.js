// function Student(name,age){
//     this.name=name;
//     this.id= Date.now();
//     this.age=age;
//
//     this.addAge= function (increaseAge){
//      this.age=this.age+increaseAge;
//     }
// }

// const student1= new Student("Al Shahoriar",27);
// const studen2= new Student("Saurov Hossain",29);
// student1.addAge(10);
// console.log(student1);

function BankAccount(customerName,balance=0){
    this.customerName= customerName;
    this.accountNumber= Date.now();
    this.balance= balance;

    this.deposit= function(amount){
        this.balance+=amount;
    };
    this.withdraw=(amount)=>{
        this.balance-=amount;
    }
}

// const AllsAccount= new BankAccount("Al Shahoriar", 0);
// AllsAccount.deposit(500000);
// AllsAccount.withdraw(200000);
// console.log(AllsAccount);
const accounts=[];
const accountForm=document.querySelector('#accountForm');
const customerName=document.querySelector('#customerName');
const balance=document.querySelector('#balance');

const depositForm=document.querySelector('#depositForm');
const accountNumber=document.querySelector('#accountNumber');
const amount=document.querySelector('#amount');


accountForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account= new BankAccount(customerName.value,+balance.value);
    accounts.push(account)
    console.log(accounts);
});

depositForm.addEventListener('submit', (e)=>{
    e.preventDefault();
  const account=  accounts.find((account)=>account.accountNumber=== +accountNumber.value)
    account.deposit(+amount.value)
    console.log(accounts);
});