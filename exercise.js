"use strict";
var banckAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "max",
    banckAccount: banckAccount,
    hobbies: ["sports", "Cooking"]
};
myself.banckAccount.deposit(3000);
