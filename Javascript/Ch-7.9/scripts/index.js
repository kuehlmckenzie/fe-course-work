// function funcName(paramOne, paramTwo) {
//   code block
//   return value
// }
// if a function does not have a return value then it will returna undefined

function subTotal(price, quantity) {
  return price * quantity;
}

const milk = subTotal(3.78, 2);
const eggs = subTotal(1.87, 3);
const cheese = subTotal(5, 1);

total = milk + eggs + cheese;

console.log(total);

function calculateArea(length, width) {
  return length * width;
}
const length = 8;
const width = 5;
const area = calculateArea(length, width);
console.log(area);

function greetUser(name = "user") {
  return `good morning! ${name}`;
}
const person = "Superstar";

console.log(greetUser(person));

function exponents(base, exponent) {
  return base ** exponent;
}
const bigNum = 2;
const littleNum = 3;
console.log(exponents(bigNum, littleNum));

let square = function (num) {
  return num ** 2;
};

const new_square = (number) => number * number;
console.log(new_square(9));
