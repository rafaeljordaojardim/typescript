"use strict";
//let and const 
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; //its a constant, we cant change this
//block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//arrow functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 2));
const multiplyNumbers = (number1, number2) => {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 3));
const greet = () => {
    console.log("Hello");
};
greet();
const greetFriend = friend => console.log(friend);
greetFriend("rafael");
//default parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start = 10) => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("done", start);
};
countdown(20);
//Rest and Spread operators
console.log("REST AND SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));
function makeArray(...args) {
    return args;
}
console.log(makeArray(1, 2, 3));
//destructing
console.log("DESTRUCTING");
//arrays
const myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);
//objects
const userData2 = { userName: "Rafael", age: 27 };
const { userName: myName1, age: myAge1 } = userData2;
console.log(myName1, myAge1);
//template literals
const userName = "Rafael";
const gretting = `This is a heading
i'm ${userName}.
this is cool`;
console.log(gretting);
