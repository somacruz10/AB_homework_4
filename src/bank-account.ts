class BankAccount {
    public Balance: number

    constructor(initialAmount: number) {
        this.Balance = initialAmount
    }

    deposit(amount: number): number {
        return this.Balance = this.Balance + amount

    }
}

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600
