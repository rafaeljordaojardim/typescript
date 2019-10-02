//exercise 1 
class Car1 {
    //properties
    private _aceleration:number;

    //setter and getters
    get aceleration():number{
        return this._aceleration;
    }
    //constructor
    constructor(public name:string){
        this._aceleration = 0
    }

    //methods
    acelerate(speed:number):void{
        this._aceleration += speed;
    }

    honk():void {
        console.log("Tooooooot");
    }
}
const car1 = new Car1("BMW");
car1.honk();
console.log(car1.aceleration);
car1.acelerate(10);
console.log(car1.aceleration);

//exercise 2 - [
console.log("Exercise 2");

class BaseClass {
    width:number;
    length:number;
    constructor(){
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseClass{
    constructor(){
        super();
    }
    calcSize(){
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 3;
console.log(rectangle.calcSize());

//exercise 3
class Persona {
    private _firstName:string;
    public constructor(){
        this._firstName = ""
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(name:string) {
        if(name.length > 3)this._firstName = name;
        else this._firstName = ""
    }
}
const p = new Persona();
console.log(p.firstName);
p.firstName = "ma"
console.log(p.firstName);
p.firstName = "Rafael"
console.log(p.firstName);

