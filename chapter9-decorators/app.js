"use strict";
// function logged(constructorFn: Function) {
//    console.log(constructorFn);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plants = class Plants {
    constructor() {
        this.name = "Green Plant";
    }
};
Plants = __decorate([
    printable
], Plants);
const plants = new Plants();
plants.print();
//method decorator
//property decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        const newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
class Projects {
    constructor(name) {
        this.projectNames = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    overwritable(true),
    __metadata("design:type", String)
], Projects.prototype, "projectNames", void 0);
__decorate([
    editable(true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Projects.prototype, "calcBudget", null);
const projects = new Projects("Super Project");
projects.calcBudget();
projects.calcBudget = function () {
    console.log(2000);
};
console.log(projects.calcBudget());
console.log(projects);
//parameter decorator]]
function printInfo(target, methodName, paramIndex) {
    console.log("target ", target);
    console.log("methodName ", methodName);
    console.log("paramIndex ", paramIndex);
}
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentNumbers(mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    }
}
__decorate([
    __param(1, printInfo),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], Course.prototype, "printStudentNumbers", null);
const course = new Course("redes");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
