// class Human{
//     constructor(name){
//         this.name=name;
//     }
// }
class Player {
    constructor(name,birthday,monthlySalary,noOfMonth){
        // super();
        this.name=name;
        this.birthday=birthday;
        this.noOfMonth=noOfMonth;
        this.monthlySalary=monthlySalary;
    }

    calculateAge(){
        const d=Date.now()-new Date(this.birthday).getTime();
        const age=new Date(d);
       return Math.abs(age.getUTCFullYear()-1970);
         
    }
    getSalary(){
        return (this.monthlySalary*this.noOfMonth).toLocaleString();
    }
    getName(){
       


        return this.name;
    }
}



const Hridoy= new Player(
    "Towhid Hridoy",
    "2000-12-04",
    50000,
    12)
console.log(Hridoy.calculateAge());
// console.log(Hridoy.getName());