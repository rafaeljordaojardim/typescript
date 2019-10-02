"use strict";
class Person {
    constructor(name, username) {
        this.username = username;
        this.name = name;
        this.age = 29;
    }
    //methods
    printAge() {
        console.log(this.age);
        this.setType("Old guy");
    }
    //set get
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person("Rafael", "jordao.jardim");
console.log(person);
person.printAge();
// person.setType("cool guy"); it cant be acessabe from external because its private
//inheritance
class Rafael extends Person {
    // name = "max";
    constructor(username) {
        super("Rafael", username);
        this.age = 20;
        // console.log(this.type);
    }
}
const rafael = new Rafael("username");
console.log(rafael);
//Getters and setters
class Plant {
    constructor() {
        this._species = "Default";
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = "Default";
        }
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green";
console.log(plant.species);
//statics properties and methods
class Helpers {
    static calcCircumference(diamter) {
        return this.PI * diamter;
    }
}
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//abstract classes
class Project {
    constructor() {
        this.name = "Default";
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name) {
        this.name = name;
    }
}
let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project");
console.log(newProject);
//private constructors
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the only one');
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('jsaijids')
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'something else'
