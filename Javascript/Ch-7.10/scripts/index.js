const myArray = ["a", "b", "c", "d", "e"];

myArray.forEach(function (char, idx) {
  console.log(idx, char);
});
// .map(references  array) makes new array for answer

// .foreach(edits arrays)

const fruitsArray = ["apple", "banana", "orange", "grape", "kiwi"];

fruitsArray.forEach(function (char, idx) {
  console.log(idx, char);
});

const originalNumbers = [3, 8, 12, 5, 7];

let newArray = originalNumbers.map((num, idx) => {
  return (myArray[idx] = num * 2);
});

console.log(newArray);

const mixedData = [
  42,
  "hello",
  ["world", 2023],
  () => "function",
  true,
  null,
  { key: "value" },
];

let arrays = [];
let strings = [];
let functions = [];
let numbers = [];

mixedData.forEach((item) => {
  if (Array.isArray(item)) arrays.push(item);
  if (typeof item === "string") strings.push(item);
  if (typeof item === "function") functions.push(item);
  if (typeof item === "number") numbers.push(item);
});

console.log({
  arrays,
  strings,
  numbers,
  functions,
});

const wordsArray = ["apple", "banana", "grape"];

const uppercaseArray = wordsArray.map(function (word) {
  return word.toUpperCase();
});
console.log(uppercaseArray);

const matrix = [
  [2, 4, 6],
  [1, 3, 5],
  [8, 10, 12],
];

matrix.forEach((subRow) => {
  subRow.forEach((element) => {
    console.log(element);
  });
});
