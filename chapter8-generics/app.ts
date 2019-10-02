//simple generic
function echo(data:any) {
    return data;
}
console.log(echo("echo"));
console.log(echo(20));
console.log({name:"rafael",age:28});

//better generic way
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("echo").length);
console.log(betterEcho(20));
console.log(betterEcho({name:"rafael",age:28}));

//build in generics
const testResults1:Array<number> = [1.94, 2.33]
testResults1.push(2);
// testResults.push(
//     'asdsad'
// )
console.log(testResults1);


//Arrays
function printAll<T>(args:T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string>(["apple", "banana", "orange"])

//generic types
const echo2: <T>(data : T) => T = betterEcho;
   console.log(echo2<string>("something"));
    
//generic classes
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue : U;
    calculate(): number{
        return +this.baseValue * +this.multiplyValue;
    }
}

// const simpleMath = new SimpleMath<string, number();
// simpleMath.baseValue = "10";
// simpleMath.multiplyValue = 20;

// console.log(simpleMath.calculate());
