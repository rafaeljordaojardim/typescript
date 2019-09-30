//exercise 1 -  as arrow function
const double = (value:number):number =>{
    return value * 2
}
console.log(double(10));

//exercise 2 -  Default params
const greets = (name:string="Rafael"):void => {
    console.log(`hello ${name}`);
}

greets();
greets('anaa');

//exercise 3 - spread Operator
const numbers1 = [-3, 33, 38, 5];
console.log(Math.min(...numbers1));

//exercise 4 - spread operator
const newArray = [55, 20];
newArray.push(...numbers1)
console.log(newArray);

//exercise 5 - 
const testResults = [3.89, 2.99, 1.38]
const [result1, result2, result3] = testResults
console.log(result1, result2, result3);


//exercise 6 
const scientist = {firstName:"Rafael", experience:12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
