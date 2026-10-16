const users = {
  Id: {
    name: "Alice",
    age: 22,
    dob: "7 / 22 / 2004",
    completedGrades: [6, 7, 8, 9, 10],
  },
  deleteMe: "randomValue",
};
const firstGrade = users.Id.completedGrades[0];
const lastGrade = users.Id.completedGrades[users.Id.completedGrades.length - 1];

console.log(
  `${users.Id.name} is ${users.Id.age} years old, she was born on ${users.Id.dob} and has completed ages ${firstGrade} through ${lastGrade}.`
);

delete users["deleteMe"];
console.log(users);

const user = {
  firstName: "Alice",
  lastName: "Jones",
  city: "New Orleans",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};
console.log(user);
user["semesters"]["semesterOne"] = "complete";
user["semesters"]["semesterTwo"] = "complete";
user["semesters"]["semesterThree"] = "complete";
user["semesters"]["semesterFour"] = "complete";

console.log(user);

delete user["semesters"]["semesterFour"];
console.log(user);

user["favoriteLanguage"] = "python";

console.log(user);

const mixedArray = ["Hello World", 42, true, "apple", "banana", false, 34];

mixedArray.pop();
console.log(mixedArray);
mixedArray.shift();
console.log(mixedArray);
mixedArray.push("New Ending Value");
console.log(mixedArray);
mixedArray.unshift("New Start");
console.log(mixedArray);
mixedArray[2] = "Replaced Value";
console.log(mixedArray);

const arrayCopy = [...mixedArray];
console.log(arrayCopy);
const randomArray = [99, "banana", false];
const mergedArray = [...mixedArray, ...randomArray];
console.log(mergedArray);
