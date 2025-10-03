//1
//calculate the sum of all numbers from 1 to 5

// let sum = 0;

// let i = 1;

// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }

// console.log(sum);

//2
//counts down from 5 to 1 and stores the numbers in an array named countdown

/*let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

//3
//do while loop

let teacollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
  if (tea !== "stop") {
    teacollection.push(tea);
  }
} while (tea !== "stop");*/

//4
//do while loop that adds numbers from 1 to 3 and stores in a var named total

// let total = 0;
// let k = 1;
// do {
//   total += k;
//   k++;
// } while (k <= 3);
// console.log(total);

//5
//For loop that multiplies each element in the array [2,4,6] by 2 and stores the results in a new array named mulitpliedNumbers

// let mulitpliedNumbers = [];
// let numbers = [2, 4, 6];

// for (let i = 0; i < numbers.length; i++) {
//   takenumber = numbers[i] * 2;
//   mulitpliedNumbers.push(takenumber);
// }
// console.log(mulitpliedNumbers);

//6
//For loop thta lists all the citites in the array and stores each city in a new array named citylist

let cities = ["paris", "Tokyo", "New york", "London"];
let ciytlist = [];

for (let c = 0; c < cities.length; c++) {
  const mycity = cities[c];
  ciytlist.push(mycity);
}
console.log(ciytlist);
