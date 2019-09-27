"use strict";
//string
var myName = 'MAX';
//myName = 28; we cant do it because its typed
//number
var myAge = 27;
//myAge = 'max'; we cant do it because it is a number
//boolean
var hashHobbies = false;
//assign types
//its a type any, it can be anything
var myRealAge;
myRealAge = 27;
// myRealAge = 'sad'
//array type
var hobbies = ["Cooking", "Sports"];
// hobbies = [100]
//tuples
var address = ["Superstreet", 99];
//enum - it can turn the numbers more expressive
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//any 
var car = "BMW";
console.log(car);
car = { brand: "bmw", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void type
function sayHello() {
    console.log('hello');
}
//argument types
function multiply(value1, value2) {
    return value1 + value2;
}
console.log(multiply(1, 2));
//function types
var myMultiply; //its not a function, just a signature
// myMultiply = sayHello;
// myMultiply()
myMultiply = multiply;
console.log(myMultiply(1, 2));
