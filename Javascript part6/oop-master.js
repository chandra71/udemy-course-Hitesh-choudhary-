//1

let car = {
  make: "Toyota",
  model: "camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

//2

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
// console.log(john.age);

//3
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `$(this.type) makes a sound`;
};

//Classes

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

//Inheritance

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Tata", "corola");
// console.log(myCar.start());
// console.log(myCar.drive());

//Encapsulation

class BankAccount {
  #balance = 600000;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.deposit(50000));

//Abstraction

class CoffeeMachine {
  start() {
    return `starting the machine`;
  }
  brewcoffee() {
    return `brewing coffee`;
  }

  pressstartbutton() {
    let msgone = this.start();
    let msgtwo = this.brewcoffee();
    return `${msgone} + ${msgtwo}`;
  }
}

let mymachine = new CoffeeMachine();
// console.log(mymachine.pressstartbutton());

//polymorphism

class Bird {
  fly() {
    return `Flying`;
  }
}

class Penguin extends Bird {
  fly() {
    return `penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

//Static Method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let minicalc = new Calculator();
// console.log(Calculator.add(2, 3));

//Getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see the salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.log("Invalid salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary);
