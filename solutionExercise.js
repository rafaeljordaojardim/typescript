"use strict";
let bankAccount2 = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself2 = {
    name: "max",
    bankAccount2: bankAccount2,
    hobbies: ["sports", "Cooking"]
};
myself2.bankAccount2.deposit(3000);
