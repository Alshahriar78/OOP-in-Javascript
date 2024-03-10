class Person{
    constructor(name,age,city) {
        this.name=name;
        this.age=age;
        this.city=city;
    }
    praying(){
        console.log("I can do it In Sha ALLAH");
    }
}
const saurov= new Person("Saurov",26,"Bogra",)
// console.log(saurov)
// saurov.praying();

class Computer{
    constructor(name,model,price) { // class constructor
        this.name=name;
        this.model=model;
        this.price=price;
    }
    aboutComputer(){ //class method 
        console.log(`This Computer name is ${this.name}.
        The model is ${this.model} and 
        the price of ${this.name} products is ${this.price} bdt taka . `);
    }
}
const HP= new Computer("HP","HP-PAVILION-CU1400TX",75000)
console.log(HP);
HP.aboutComputer();