class Person {
    name : string;
    private type : string; 
    protected age : number;

    constructor(name:string, public username:string){
        this.name = name;
        this.age = 29;
    }

    //methods
    printAge() {
        console.log(this.age);
        this.setType("Old guy")
        
    }

    //set get
    private setType(type:string){
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Rafael", "jordao.jardim")
console.log(person);

person.printAge();
// person.setType("cool guy"); it cant be acessabe from external because its private

//inheritance
class Rafael extends Person {
    // name = "max";

    constructor(username: string){
        super("Rafael", username );
        this.age = 20;
        // console.log(this.type);
        
    }
}
const rafael = new Rafael("username")
console.log(rafael);

//Getters and setters
class Plant {
    private _species: string = "Default";
    
    get species() {
        return this._species;
    }

    set species(value: string){
        if (value.length > 3) {
            this._species = value
        }else{
            this._species = "Default"
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB"
console.log(plant.species);
plant.species = "Green"
console.log(plant.species);


//statics properties and methods
class Helpers {
   static PI: number = 3.14
   static calcCircumference(diamter: number):number {
       return this.PI * diamter
   }
}

console.log(2 * Helpers.PI);

console.log(Helpers.calcCircumference(8));


//abstract classes
abstract class Project {
    name:string = "Default";
    budget:number;

    abstract changeName(name:string):void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {


    changeName(name: string): void {
       this.name = name;
    }   
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project")
console.log(newProject);

//private constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name:string){}

    static getInstance(){
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the only one')
        }

        return OnlyOne.instance
    }
}

// let wrong = new OnlyOne('jsaijids')
let right = OnlyOne.getInstance()