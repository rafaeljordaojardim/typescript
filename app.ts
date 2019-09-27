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
 