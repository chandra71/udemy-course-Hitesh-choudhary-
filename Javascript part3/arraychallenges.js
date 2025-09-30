//1
let teaflavours = ["green tea", "black tea", "oolong tea"];
const firstTea = teaflavours[0];
console.log(firstTea);

//2
let cities = ["London", "Tokyo", "paris", "New york"];
const favoritecity = cities[2];
console.log(favoritecity);

//3
let teatypes = ["herbal tea", "white tea", "masala chai"];
teatypes[1] = "jasminetea";
console.log(teatypes[1]);

//4
let citiesvisited = ["Mumbai", "Sydney"];
citiesvisited.push("Berlin");
console.log(citiesvisited);

//5
let teaorders = ["chai", "iced tea", "matcha", "earl grey"];
const lastorder = teaorders.pop();
console.log(teaorders);
console.log(lastorder);

//6
let popularteas = ["green tea", "oolong tea", "chai"];
let softcopyteas = popularteas;
popularteas.pop();
console.log(softcopyteas);
console.log(popularteas);

//7

let topcities = ["Berlin", "singapore", "New york"];
let hardcopycities = [...topcities];
topcities.pop();
console.log(topcities);
console.log(hardcopycities);

//8

let europeancities = ["paris", "Romw"];
let asiancities = ["Tokyo", "Bangkok"];
let worldcities = europeancities.concat(asiancities);
console.log(worldcities);

//9

let teamenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menulength = teamenu.length;
console.log(menulength);

//10

let citybucketlist = ["kyoto", "London", "cape town", "vancouver"];
let islondoninlist = citybucketlist.includes("London");
console.log(islondoninlist);
