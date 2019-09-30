//exercise 1 -  as arrow function
var double = function (value) {
    return value * 2;
};
console.log(double(10));
//exercise 2 -  Default params
var greets = function (name) {
    if (name === void 0) { name = "Rafael"; }
    console.log("hello " + name);
};
greets();
greets('anaa');
//exercise 3 - spread Operator
var numbers1 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers1));
//exercise 4 - spread operator
var newArray = [55, 20];
newArray.push.apply(newArray, numbers1);
console.log(newArray);
//exercise 5 - 
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
//exercise 6 
var scientist = { firstName: "Rafael", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
