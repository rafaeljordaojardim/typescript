interface NamedPerson { 
    firstName:string;
    age?:number;
    [propName:string]:any;

    greet(lastName:string): void;
}

function greete(person1:NamedPerson) {
    console.log("hello " +person1.firstName);
}
const person1 = {
    firstName:"rafael",
    hobbies: ["cooking", "sports"],
    greet(lastName){
        console.log(lastName); 
    }
}
greete(person1)
person1.greet("last name")

class Person2 implements NamedPerson {
    firstName: string;
    lastName:String;
    greet(): void {
       console.log(`hi ${this.firstName} ${this.lastName}`);
    }
}

const myPerson = new Person2()
myPerson.firstName = 'rafael jardim'
greete(myPerson)
myPerson.greet()

//function types

interface DoubleValuFunction {
    (number1:number,number2:number):number
}

let myDoubleFunction: DoubleValuFunction;
myDoubleFunction = function (number1:number, number2:number):number {
    return (number1 + number2) * 2;
}

//Interface Inheritance
interface AgedPerson extends NamedPerson {
    age:number;
}

const oldPerson: AgedPerson = {
    age:20,
    firstName:"Rafael",
    greet(lastName:string){
        console.log("ola "+lastName);
        
    }
}

console.log(oldPerson);
