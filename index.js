

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let sum = 0;
    for(const transaction of this.transactions) {
      sum += transaction.value;
    }

    return sum;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.isAllowed) {
      this.time = new Date();
      this.account.addTransaction(this);
    } else {

    }
  }
}

class Withdrawal extends Transaction {
  get isAllowed() {
    if (this.amount <= this.account.balance) {
      return true;
    } else {
      console.log("Insufficient funds: Transaction not completed");
      return false;
    }
  }

  get value() {
    return -(this.amount);
  }
}

class Deposit extends Transaction {
  get isAllowed() {
    return true;
  }

  get value() {
    return this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
console.log("Starting balance: ", myAccount.balance);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log("New Balance: ", myAccount.balance);

t1 = new Withdrawal(50, myAccount);
t1.commit();
console.log("New Balance: ", myAccount.balance);

t2 = new Withdrawal(100.00, myAccount);
t2.commit();




console.log("Ending Balance: ", myAccount.balance);
console.log(myAccount);


