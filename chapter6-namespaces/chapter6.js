"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// /// <reference path="circleMath.ts" />
// /// <reference path="rectangleMath.ts" />
// import CircleMath = MyMath.Circle 
// import RectangleMath = MyMath.Rectangle 
// const PI = 2.99;
// console.log(CircleMath.calculateCircumference(10));
// console.log(RectangleMath.calculateRectangle(10, 2));
// console.log(PI);
const Circle = __importStar(require("./math/circle"));
const rectangle_1 = require("./math/rectangle");
console.log(Circle._PI);
console.log(Circle.calculateCircumference(10));
console.log(rectangle_1.calculateRectangle(10, 2));
