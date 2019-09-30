//string
let myName: string = 'MAX';
//myName = 28; we cant do it because its typed

//number
let myAge: number = 27;
//myAge = 'max'; we cant do it because it is a number

//boolean
let hashHobbies: boolean = false;

//assign types
//its a type any, it can be anything
let myRealAge : number;
myRealAge = 27;
// myRealAge = 'sad'

//array type
let hobbies: string[] = ["Cooking", "Sports"];
// hobbies = [100]

//tuples
let address: [string, number] = ["Superstreet", 99];


//enum - it can turn the numbers more expressive
enum Color {
    Gray,
    Green,
    Blue
}

let myColor :Color = Color.Green
console.log(myColor);

//any 
let car: any = "BMW";
console.log(car);
car = { brand: "bmw", series:3}
console.log(car);

//functions
function returnMyName() : string {
    return myName;
}

console.log(returnMyName());

//void type
function sayHello() : void {
    console.log('hello');
    
}

//argument types
function multiply(value1 : number, value2 : number) : number {
    return value1 + value2
}

console.log(multiply(1, 2));


//function types
let myMultiply: (val1:number, val2:number) => number;//its not a function, just a signature

// myMultiply = sayHello;
// myMultiply()
myMultiply = multiply;
console.log(myMultiply(1,2));

//objects
let userData: {name:string, age:number} = {
    name: "max",
    age:27
};
// userData = {}
//complex object

let complex : {data:number[], output: (all:boolean) => number[]} = {
    data:[100, 3.99, 10],

    output: function (all:boolean): number[] {
        return this.data;
    }
} 

//type alias
type Complex = {data:number[], output: (all:boolean) => number[]};
let complex2: Complex = {
    data:[100, 3.99, 10],
    output: function (all:boolean): number[] {
        return this.data;
    }
}

//union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

//check types
let finalValue = 20;

if(typeof finalValue == "number"){
    console.log("final value is a number");
    
}

//never
function neverReturns():never{
    throw new Error('An error');
    
}

//nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

let thisCanBeAny:any = null;

//compiler improvements
function controlMe(isTrue:boolean, somethingElse: boolean) {
    let result: number = 0;//imitializing
    if (isTrue) {
        result = 12;
    }

    return result;
}