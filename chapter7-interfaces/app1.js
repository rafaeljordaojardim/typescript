"use strict";
function greete(person1) {
    console.log("hello " + person1.firstName);
}
const person1 = {
    firstName: "rafael",
    hobbies: ["cooking", "sports"],
    greet(lastName) {
        console.log(lastName);
    }
};
greete(person1);
person1.greet("last name");
class Person2 {
    greet() {
        console.log(`hi ${this.firstName} ${this.lastName}`);
    }
}
const myPerson = new Person2();
myPerson.firstName = 'rafael jardim';
greete(myPerson);
myPerson.greet();
let myDoubleFunction;
myDoubleFunction = function (number1, number2) {
    return (number1 + number2) * 2;
};
const oldPerson = {
    age: 20,
    firstName: "Rafael",
    greet(lastName) {
        console.log("ola " + lastName);
    }
};
console.log(oldPerson);
