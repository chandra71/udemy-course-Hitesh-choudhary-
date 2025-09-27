//Number

let balance = 120;

console.log(balance);
console.log(typeof balance);

//object
let anotherbalance = new Number(230);

console.log(typeof anotherbalance);

//Boolean

let isActive = true;
let isReallyActive = new Boolean(true); //Not recommended

//Null and Undefined

let firstname; //Null when commented out
let lastname = undefined;
console.log(firstname);
console.log(lastname);

//String

let myString = "Hello";
let myStringone = "Hola";
let username = "hitesh";

let oldGreet = myString + "chandu";
console.log(username);
console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoone = `value is ${2 * 2}`;
console.log(greetMessage);
console.log(demoone);

//Symbol - unique value

let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2);
