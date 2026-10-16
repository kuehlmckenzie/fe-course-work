const pizzaToppings = {
  protein: "sausage",
  veg: {
    name: "jalapeno",
  },
};
const tacoToppings = {
  veg: "lettuce",
  sauce: "hot sauce",
};

console.log("Toppings;", pizzaToppings, tacoToppings);

function compareNums(num1, num2) {
  let output;
  if (num1 > num2) {
    output = num1 + " is larger than " + num2;
  } else if (num2 > num1) {
    output = num2 + " is larger than " + num1;
  } else {
    ("These numbers are equal");
  }

  console.log(output);
}

compareNums(12, 14);

const string = "I am a sentence";
const newStr = string
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
  .join(" ");
console.log(newStr);

const stringTwo = "hi there";
const list = [...stringTwo];

list.sort();
const newString = list.join("");
console.log(newString);
