const currentLight = "red";

let lightColor;

switch (currentLight) {
  case "green":
    lightColor = "Go";
    break;
  case "yellow":
    lightColor = "proceed with caution";
    break;
  case "red":
    lightColor = "stop";
    break;
}
console.log(lightColor);

const userName = "Khoolchick";

const password = "password";

const loginUser =
  userName === "Khoolchick" && password === "password;"
    ? "Login succesfull! Welcome Admin"
    : "Login Failed. Invalid Credentials";

console.log(loginUser);

const userRole = "user";

let loginStatus;

switch (userRole) {
  case "admin":
    loginStatus = "Full access granted. Welcome, Admin!";
    break;
  case "user":
    loginStatus = "Limited access granted. Welcome, User!";
    break;
  default:
    loginStatus = "Access denied. Unknown user role.";
}
console.log(loginStatus);

const num = 5;

function fizzBuzz(num) {
  let divisbleNum;
  if (num % 3 === 0 && num % 5 === 0) {
    divisbleNum = "FizzBuzz";
  } else if (num % 3 === 0) {
    divisbleNum = "Fizz";
  } else if (num % 5 === 0) {
    divisbleNum = "Buzz";
  } else {
    divisbleNum = num;
  }

  console.log(divisbleNum);
}

fizzBuzz(25);
