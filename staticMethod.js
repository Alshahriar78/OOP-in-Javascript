function Computer(name,model){
    this.name=name;
    this.model=model;
}
Computer.sayAboutComputer= function (){ // declare static method
    console.log("This is Computer");
}

const dell = new Computer("Dell","D100p")
Computer.sayAboutComputer(); //access static method


class Computer1{
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
    static sayAboutComputer(){
        console.log("This is a Computer1");
    }
}
const HP= new Computer1("HP","HP-PAVILION-CU1400TX",75000)
// console.log(HP);
// HP.aboutComputer();
Computer1.sayAboutComputer()

