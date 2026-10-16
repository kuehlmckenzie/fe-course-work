// const string = "The quick brown fox.";

// console.log(Number.prototype);
// console.log(String.prototype);
// console.log(Boolean.prototype);

// const meatArray = ["beef", "salmon", "bison"];
// const vegArray = ["onion", "tomato", "jalapeno"];
// console.log();

// // unshift adds an element to the front of an array
// meatArray.unshift("chicken");
// console.log(meatArray);
// // output would be    > ["chicken", "beef", "salmon", "bison"]

// // adds an element to the end of an array
// meatArray.push("chicken");
// console.log(meatArray);

// // output would be > ["beef", "salmon", "bison", "chicken"]

// // removes an element from the beginning of an array
// meatArray.shift();
// console.log(meatArray);
// // output would be> ["salmon", "bison"]

// // removes an element from the end of an array
// meatArray.pop();
// console.log(meatArray);

// // output would be > ['beef', 'salmon']

// // deletes an element from an array and leaves an empty index
// delete meatArray[0];
// console.log(meatArray);

// // output would be > [<1 empty item>, 'salmon', 'bison']

// // removes elements from an array and then replaces it
// // start index, delete count and then the new elements
// meatArray.splice(0, 1, "chicken", "pork", "lamb");
// console.log(meatArray);

// // output would be > ["chicken", "pork", "lamb", "salmon", "bison"];

// // joins each element into a string
// meatString = meatArray.join(", ");
// console.log(`Cook the following meat at the barbecue: ${meatString}.`);

// // output would be > Cook the following meat at the barbecue: beef, salmon, bison.

// // adds elements from one array to another the three dots are the syntax

// barbecueArray = [...meatArray, "chicken", ...vegArray];
// console.log(barbecueArray);

// // output would be > [
// //   'beef',     'salmon',
// //   'bison',    'chicken',
// //   'onion',    'tomato',
// //   'jalapeno'
// // ]

// // javascript version of a dictionary
// const mealIngredients = {
//   protein: "hot dog",
//   veg: {
//     name: "jalapeno",
//     quantity: 4,
//   },
//   condiment: "ketchup",
//   delicious: true,
// };
// console.log(mealIngredients["protein"]);
// console.log(mealIngredients.veg);
// console.log(mealIngredients);
// // gives the same output. .key is more preferred

// const keyRef = "protein";

// const mealIngredients = {
//   protein: "hot dog",
//   veg: {
//     name: "jalapeno",
//     quantity: 4,
//   },
//   condiment: "ketchup",
//   delicious: true,
// };

// console.log(mealIngredients[keyRef]);

// // use square bracket notation when using a variable for key reference

// const carDetails = { color: "black", cost: 10000, pineappleOnPizza: true };
// // adds a key-value pair
// carDetails["doors"] = 4;
// console.log(carDetails);
// // output would be > {color: "black", cost: 10000, pineappleOnPizza: true, doors: 4}

// // change a value in a key-value pair
// carDetails["pineappleOnPizza"] = false;
// console.log(carDetails);
// //  output would be { color: "black", cost: 10000, pineappleOnPizza: false };

// // delete a value in a key-value pair
// delete carDetails["pineappleOnPizza"];
// console.log(carDetails);
// //  output would be > {color: "black", cost: 10000}

// // nested arrays and object literals
// const parentArray = [["pineapple", "ham"]];
// const parentObjLit = {
//   toppings: ["pepperoni", "olive"],
// };

// console.log(parentArray[0][1]);
// console.log(parentObjLit["toppings"][0]);
// output would be ham.      pepperoni

const fruits = ["apple", "banana", "orange", "grape"];

fruits.push("strawberry");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1, 1, "kiwi");
console.log(fruits);

const fruitString = fruits.join(" - ");
console.log(fruitString);

const student = { Name: "Alice", Age: 15, Grade: [89, 72, 91] };

student["Subject"] = "Math";
console.log(student);

student["Age"] = 21;
console.log(student);

student["Grade"].push(90);
console.log(student);

delete student["Subject"];
console.log(student);

student["Name"] = "Kenzie";
console.log(student);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// const want6 = [matrix[1][2]];
// console.log(want6);
matrix[2].splice(1, 1, 12);

console.log(matrix);

matrix.push([10, 11, 12]);
console.log(matrix);

matrix.shift();
console.log(matrix);

const company = {
  name: "TechCo",
  location: {
    city: "San Francisco",
    country: "USA",
  },
  employees: [
    { name: "Alice", position: "Engineer" },
    { name: "Bob", position: "Designer" },
  ],
};

console.log(company["name"]);

company["location"]["city"] = "New York City";
console.log(company);
company["employees"].push({ name: "Charlie", position: "Manager" });

console.log(company);

company["employees"].splice(1, 1);
console.log(company);

const tasks = [
  "Buy groceries",
  "Complete homework",
  function add(a, b) {
    return a + b;
  },
];
const arrayAdd = tasks[2];
console.log(arrayAdd(5, 7));
