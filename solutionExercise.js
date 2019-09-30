"use strict";
var bankAccount2 = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself2 = {
    name: "max",
    bankAccount2: bankAccount2,
    hobbies: ["sports", "Cooking"]
};
myself2.bankAccount2.deposit(3000);
