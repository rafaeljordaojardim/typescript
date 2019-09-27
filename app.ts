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



