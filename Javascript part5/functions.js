//1
function maketea(typeoftea) {
  return `Making ${typeoftea}`;
}
let tearoder = maketea("lemon tea");
console.log(tearoder);

//2

function ordertea(teatype) {
  function confirmorder() {
    return `order confirmed for chai`;
  }
  return confirmorder();
}

let orderconfirmation = ordertea();
console.log(orderconfirmation);

//3

const calculatetotal = (price, quantity) => price * quantity;

let totalcost = calculatetotal(499, 100);

console.log(totalcost);

//4

function maketeas(typeofteas) {
  return `maketea: ${typeofteas}`;
}

function processteaorder(teafunction) {
  return teafunction("earl grey");
}
let order = processteaorder(maketeas);
console.log(order);

//5

function createteamaker() {
  return function (teatypess) {
    return `making ${teatypess}`;
  };
}

let teamaker = createteamaker();
let result = teamaker("green tea");
console.log(result);
