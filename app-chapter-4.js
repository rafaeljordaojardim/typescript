"use strict";
//let and const 
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; //its a constant, we cant change this
//block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//arrow functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 2));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("rafael");
//default parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("done", start);
};
countdown(20);
//Rest and Spread operators
console.log("REST AND SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3));
//destructing
console.log("DESTRUCTING");
//arrays
var myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//objects
var userData2 = { userName: "Rafael", age: 27 };
var myName1 = userData2.userName, myAge1 = userData2.age;
console.log(myName1, myAge1);
//template literals
var userName = "Rafael";
var gretting = "This is a heading\ni'm " + userName + ".\nthis is cool";
console.log(gretting);
