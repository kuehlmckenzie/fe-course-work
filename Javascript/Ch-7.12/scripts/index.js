for (let i = 0; i < 10; i++) {
  if (i == 9) {
    console.log("Local scope for let:", i);
  }
}

console.log("Global scope for let:", i);

for (var i = 0; i < 10; i++) {
  if (i == 9) {
    console.log("Local scope for var:", i);
  }
}

console.log("Global scope for var:", i);
