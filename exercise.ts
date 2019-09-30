let banckAccount = {
    money: 2000,
    deposit(value:number){
        this.money += value;
    }
};

let myself = {
    name:"max",
    banckAccount: banckAccount,
    hobbies:["sports", "Cooking"]
};

myself.banckAccount.deposit(3000);