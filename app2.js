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
//objects
var userData = {
    name: "max",
    age: 27
};
// userData = {}
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 27;
myRealRealAge = "27";
//check types
var finalValue = 20;
if (typeof finalValue == "number") {
    console.log("final value is a number");
}
//never
function neverReturns() {
    throw new Error('An error');
}
//nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var thisCanBeAny = null;
//compiler improvements
function controlMe(isTrue, somethingElse) {
    var result = 0; //imitializing
    if (isTrue) {
        result = 12;
    }
    return result;
}
