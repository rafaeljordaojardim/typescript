"use strict";
//simple generic
function echo(data) {
    return data;
}
console.log(echo("echo"));
console.log(echo(20));
console.log({ name: "rafael", age: 28 });
//better generic way
function betterEcho(data) {
    return data;
}
console.log(betterEcho("echo").length);
console.log(betterEcho(20));
console.log(betterEcho({ name: "rafael", age: 28 }));
//build in generics
const testResults1 = [1.94, 2.33];
testResults1.push(2);
// testResults.push(
//     'asdsad'
// )
console.log(testResults1);
//Arrays
function printAll(args) {
    args.forEach((element) => console.log(element));
}
printAll(["apple", "banana", "orange"]);
//generic types
const echo2 = betterEcho;
console.log(echo2("something"));
//generic classes
class SimpleMath {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
// const simpleMath = new SimpleMath<string, number();
// simpleMath.baseValue = "10";
// simpleMath.multiplyValue = 20;
// console.log(simpleMath.calculate());
