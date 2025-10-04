//1

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedteas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedteas.push(teas[i]);
}
console.log(selectedteas);

//2

let cities = ["London", "New york", "paris", "Berlin"];
let visitedcities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris") {
    continue;
  }
  visitedcities.push(cities[i]);
}
console.log(visitedcities);

//3

let numbers = [1, 2, 3, 4, 5];
let smallnumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallnumbers.push(num);
}
console.log(smallnumbers);

//4

let tea = ["chai", "herbal tea", "Black tea"];

let preferedteas = [];

for (const teas of tea) {
  if (teas === "herbal tea") {
    continue;
  }
  preferedteas.push(teas);
}

console.log(preferedteas);

//6
let citiespopulation = {
  London: 890000,
  "New york": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let citypopulations = {};

for (const city in citiespopulation) {
  if (city === "Berlin") {
    break;
  }
  citypopulations[city] = citiespopulation[city];
}

console.log(citypopulations);

//7
let worldcities = {
  Sydney: 890000,
  Tokyo: 8400000,
  Berlin: 2200000,
  Paris: 3500000,
};

let largecities = {};

for (const cityy in worldcities) {
  if (worldcities[cityy] < 3000000) {
    continue;
  }
  largecities[cityy] = worldcities[cityy];
}

console.log(largecities);
