//Conditions

//Checking if a number is greataer than another number:

let num1 = 5;

let num2 = 8;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("Nope, num1 is not greater");
}

//Checking if a string is equal to another string

let username = "chai";
let anotherusername = "chai";

if (username == anotherusername) {
  console.log("pick another username");
} else {
  console.log("you can pick this username");
}

//Checking if a variable is a number or not

let score = 45;

if (typeof score === "number") {
  console.log("yep this is a number");
} else {
  console.log("No that is not a number");
}

//Checking if a boolean value is true or not

let isready = true;

if (isready) {
  console.log("Its ready");
} else {
  console.log("Not ready");
}

//Checking if an array is empty or not

let items = [];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Arrays is not empty");
}
