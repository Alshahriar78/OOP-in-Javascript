class Person{
    constructor(name,age,city) {
        this.name=name;
        this.age=age;
        this.city=city;
    }
    praying(){
        console.log("I can do it In Sha ALLAH");
    }
    get PersonName(){
       return  this.name;
    }
    set PersonName(value){
        this.name=value;
    }
}
const saurov= new Person("Saurov",26,"Bogra",)
console.log(saurov.PersonName);
saurov.PersonName="Al Shahoriar"
// console.log(saurov)
// saurov.praying();
console.log(saurov.PersonName);