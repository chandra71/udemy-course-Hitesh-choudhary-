//1

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let mycar = new Car("Toyota", "Camry");
// console.log(mycar);

let mynewcar = new Car("Tata", "safari");
// console.log(mynewcar);

//2
function Tea(type) {
  this.type = type;

  this.describe = function () {
    return `This is a cup of ${this.buttype}`;
  };
}

let lemontea = new Tea("lemon tea");
// console.log(lemontea.describe(this.type));

//3

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

//4 Error
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
