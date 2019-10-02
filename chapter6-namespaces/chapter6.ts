// /// <reference path="circleMath.ts" />
// /// <reference path="rectangleMath.ts" />
// import CircleMath = MyMath.Circle 
// import RectangleMath = MyMath.Rectangle 
// const PI = 2.99;
// console.log(CircleMath.calculateCircumference(10));
// console.log(RectangleMath.calculateRectangle(10, 2));
// console.log(PI);
import * as Circle from "./math/circle"
import {calculateRectangle} from "./math/rectangle"
console.log(Circle._PI);
console.log(Circle.calculateCircumference(10));
console.log(calculateRectangle(10,2));

