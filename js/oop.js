
// Class definition
class Car {
  constructor(brand, model) {
    this.brand = brand; // property
    this.model = model; // property
  }

  // method
  showDetails() {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  }
}

// Creating objects from the class
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// Using the objects
car1.showDetails(); // This car is a Toyota Corolla.
car2.showDetails(); // This car is a Honda Civic.


// // Encapsulation
// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overtime * rate);
// }

// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage : function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// }
// employee.getWage(); 

// function BankAccount(accountNumber, accountHolderName, balance) {
//     let _accountNumber = accountNumber;
//     let _accountHolderName = accountHolderName;
//     let _balance = balance;

//     function showAccountDetails() {
//         console.log(`Account Number: ${_accountNumber}`);
//         console.log(`Account Holder Name: ${_accountHolderName}`);
//         console.log(`Balance: ${_balance}`);
//     }

//     function deposit(amount) {
//         _balance += amount;
//         showAccountDetails();
//     }

//     function withdraw(amount) {
//         if (_balance >= amount) {
//             _balance -= amount;
//             showAccountDetails();
//         } else {
//             console.log("Insufficient Balance");
//         }
//     }

//     return {
//         deposit: deposit,
//         withdraw: withdraw
//     };
// }

// let myBankAccount = BankAccount("123456", "John Doe", 1000);

// myBankAccount.deposit(500); 
// // Output: Account Number: 123456 Account Holder Name: 
// //John Doe Balance: 1500

// myBankAccount.withdraw(2000); // Output: Insufficient Balance


// Inheritance
// class Animal{
// 	constructor(name){
// 		this.name = name;
// 	}

// 	speak(){
// 		console.log(`${this.name} makes a sound`);
// 	}
// }



// class Dog extends Animal{
// 	speak(){
// 		console.log(`${this.name} barks!`);
// 	}
// }


// const stuff = new Animal("wolf");
// stuff.speak();

// const pet = new Dog("Bob");
// pet.speak();

// Polymorphism

class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
dog.speak(); 

const cat = new Cat();
cat.speak();