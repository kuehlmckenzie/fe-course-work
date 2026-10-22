greetUser = () => "Welcome to the course!";

console.log(greetUser());

const funcSingleParam = (num) => num * 2;

const num = 7;
console.log(funcSingleParam(num));

const cubeRoot = function (x) {
  return Math.cbrt(x);
};
console.log(cubeRoot(49));

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;
console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());

const calculateArea = (length, width) => length * width;

const length = 8;
const width = 5;
const area = calculateArea(length, width);
console.log(area);

// Homework assignments

// 1.)
const findLongestWord = (arrayOfWords) =>
  arrayOfWords.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );

const words = ["cup", "plate", "refrigerator", "fork"];
console.log(findLongestWord(words));

// 2.)
const swapFirstLast = (str) =>
  str.length <= 1 ? str : str.slice(-1) + str.slice(1, -1) + str[0];

console.log(swapFirstLast("Hello"));

// 3.)
const numbers = [1, 2, 3];
let sum = 0;

numbers.forEach((num) => {
  sum += num;
});

console.log(sum);

// 4.)
const array1 = ["a", "b", "c", "d"];
const array2 = [1, 2];

const result = [];
const maxLength = Math.max(array1.length, array2.length);

for (let i = 0; i < maxLength; i++) {
  if (i < array1.length) result.push(array1[i]);
  if (i < array2.length) result.push(array2[i]);
}

console.log(result);
// 5.)
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (!word) return "";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(toTitleCase("welcome to my article"));

// 6.)
const findLongestWordLine = (str) =>
  str
    .split(" ")
    .reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ""
    );
console.log(findLongestWordLine("Im making up a random sentence today."));

// 7.)
const alphabetString = (str) => str.split("").sort().join("");

const string = "webmaster";
const alphabetResult = alphabetString(string);
console.log(alphabetResult);

// 8.)
function extract(char, indices) {
  return indices.map((index) => char[index]);
}
const originalArray = ["apple", "banana", "cherry", "date", "elderberry"];
const specifiedIndices = [0, 2, 4];

const newArray = extract(originalArray, specifiedIndices);
console.log(newArray);

// 9.)

const user = {
  userName: "Khoolchick",
  activeStatus: "away",
};

const newStatus = (userName) => `${userName} is now active`;

console.log(newStatus(user[0]));

// 10.)

function power(base, exponent) {
  if (exponent === 0) return 1;

  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 3));
