// function logged(constructorFn: Function) {
//    console.log(constructorFn);
// }

// @logged
// class Person4 {
//     constructor() {
//         console.log('hi');
//     }
// }


//Factors
// function logging(value:boolean) {
//     return (value ? logged : null)
// }

// @logging(true)
// class Car {

// }

//advanced
function printable(constructorFn:Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@printable
class Plants {
    name = "Green Plant"
}

const plants = new Plants();
(<any>plants).print();



//method decorator
//property decorator
function editable(value:boolean) {
    return function (target:any, propName:string, descriptor:PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value:boolean) {
    return function (target: any, propName: string) : any{
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}
class Projects {
    @overwritable(true)
    projectNames: string;

    constructor(name:string){
        this.projectNames = name;
    }
    @editable(true)
    calcBudget() {
        console.log(1000);
    }
}

const projects = new Projects("Super Project");
projects.calcBudget()

projects.calcBudget = function () {
    console.log(2000);
}

console.log(projects.calcBudget());

console.log(projects);


//parameter decorator]]
function printInfo(target:any, methodName: string, paramIndex: number) {
    console.log("target ", target);
    console.log("methodName ", methodName);
    console.log("paramIndex ", paramIndex);
}

class Course {
    name: string;

    constructor(name:string){
        this.name = name;
    }

    printStudentNumbers(mode:string, @printInfo printAll: boolean){
        if (printAll) {
            console.log(10000);
        }else{
            console.log(2000);
            
        }
    }
}

const course = new Course("redes")

course.printStudentNumbers("anything", true)
course.printStudentNumbers("anything", false)