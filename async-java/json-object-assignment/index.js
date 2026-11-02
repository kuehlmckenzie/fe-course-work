const users = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alices@gmail.com",
    password: "AlicenChains",
  },
  {
    id: 2,
    name: "Bob Jones",
    email: "bobj@gmail.com",
    password: "Bobbyboi",
  },
  {
    id: 3,
    name: "Josh Ramsey",
    email: "Mtrench@gmail.com",
    password: "EverAfter",
  },
];

function greetUsers(userArray) {
  userArray.forEach((user) => {
    console.log(`Hello, ${user.name}! Your username is ${user.email}.`);
  });
}

greetUsers(users);

// challenge 2

fetch("https://www.swapi.tech/api/planets/4/")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

fetch("https://www.swapi.tech/api/films/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
