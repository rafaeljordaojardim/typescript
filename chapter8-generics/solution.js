"use strict";
class MyMap {
    constructor() {
        this.map = {};
    }
    setItem(key, item) {
        this.map[key] = item;
    } //setItem
    getItem(key) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
} //MyMap
const numberMap = new MyMap();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
console.log(numberMap.getItem('apples'));
console.log(numberMap.getItem('bananas'));
const stringMap = new MyMap();
stringMap.setItem('apples', "apple");
stringMap.setItem('bananas', "banana");
console.log(stringMap.getItem('apples'));
console.log(stringMap.getItem('bananas'));
