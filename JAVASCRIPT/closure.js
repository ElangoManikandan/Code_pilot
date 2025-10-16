function createBankAccount(initialBalance) {
    let balance = initialBalance; // private variable

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) return "Insufficient funds";
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(500));   // 1500
console.log(myAccount.withdraw(200));  // 1300
console.log(myAccount.getBalance()); 












function startTimer(name) {
  let seconds = 0;
  setInterval(() => {
    seconds++;
    seconds++;
    console.log(`${name}: ${seconds}s`);
  }, 2000);
}

startTimer("Elango"); // remembers “name” and “seconds”
