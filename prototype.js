function Computer(name,model){
    this.name=name;
    this.model=model;
}
Computer.prototype.aboutComputer= function (){// create a new prototype
    console.log(`This Computer name is ${this.name} 
    and The model is ${this.model}`);
}
const dell = new Computer("Dell","D100p")
// console.log(dell);
//del.__proto__
// console.log(Object.getPrototypeOf(dell));
// dell.aboutComputer();
const Hp=new Computer("Hp","Hp-Pavilion");
// console.log(Hp);


const HouseRent= function (amount){
    this.amount=amount;

}
HouseRent.prototype.increase= function (){
    this.amount+=1000;
}
HouseRent.prototype.decrease= function (){
    this.amount-=1000;
}
const myRent= new HouseRent(3500);
myRent.increase();
console.log(myRent);
myRent.decrease();
console.log(myRent);


const arr=[2,3,5,78,54,67,33,4];



const evenNumber=arr.filter(element => element%2===0);
// console.log(evenNumber);
//
// console.log(Array.prototype);
// console.log(new Array())


Array.prototype.filter= function (){ // modify filter prototype
    let arr=[];
    for(let i=0;i<this.length;i++){
        if (this[i]%2===0){
            arr.push(this[i]);
        }
    }
    return arr;
}
// console.log([1,2,3,4,56,7,8,9,10].filter())