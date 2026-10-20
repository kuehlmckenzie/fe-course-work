const users = [
  {
    isLoggedIn: true,
    isBanned: true,
    isEmailVerified: true,
    isAdmin: false,
    name: "Alice",
  },
  {
    isLoggedIn: false,
    isBanned: false,
    isEmailVerified: false,
    isAdmin: false,
    name: "Bob",
  },
  {
    isLoggedIn: true,
    isBanned: false,
    isEmailVerified: false,
    isAdmin: false,
    name: "Charlie",
  },
  {
    isLoggedIn: true,
    isBanned: false,
    isEmailVerified: true,
    isAdmin: true,
    name: "Diana",
  },
  {
    isLoggedIn: true,
    isBanned: false,
    isEmailVerified: true,
    isAdmin: false,
    name: "Ethan",
  },
];

for (const user of users) {
  let targetPage = "";

  if (user.isBanned) {
    targetPage = "/banned";
  } else if (!user.isLoggedIn) {
    targetPage = "/login";
  } else if (!user.isEmailVerified) {
    targetPage = "/verify-email";
  } else if (user.isAdmin) {
    targetPage = "/admin";
  } else {
    targetPage = "/dashboard";
  }

  console.log(`Sending ${user.name} to: ${targetPage}`);
}

const articles = [
  { title: "Getting Started with React", views: 4200, published: true },
  { title: "CSS Grid vs Flexbox", views: 8900, published: true },
  { title: "Node.js Best Practices", views: 6100, published: false },
  { title: "JavaScript Promises Explained", views: 12400, published: true },
  { title: "Understanding REST APIs", views: 9750, published: true },
];

let highestArticle = null;
let maxViews = -1;

for (const article of articles) {
  if (article.published) {
    if (article.views > maxViews) {
      maxViews = article.views;
      highestArticle = article;
    }
  }
}

console.log(
  `Highest Published Article: "${highestArticle.title}" with ${highestArticle.views} views.`
);

function numberToDigitsArray(num) {
  return Array.from(String(num), Number);
}

const result = numberToDigitsArray(12345);
console.log(result);

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c", "d"];

const minLength = Math.min(arrayOne.length, arrayTwo.length);

const matrix = Array.from({ length: minLength }, (_, i) => [
  arrayOne[i],
  arrayTwo[i],
]);

console.log(matrix);
