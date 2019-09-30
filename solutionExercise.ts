type BanckAccount = {money:number, deposit: (value:number) => void};
let bankAccount2 : BanckAccount  = {
    money:2000,
    deposit(value:number): void{
        this.money += value;
    }
};

let myself2:  {name:string,bankAccount2:BanckAccount, hobbies:string[]} = {
    name:"max",
    bankAccount2: bankAccount2,
    hobbies:["sports", "Cooking"]
};

myself2.bankAccount2.deposit(3000)