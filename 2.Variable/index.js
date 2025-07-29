let x = 10;
let y = 20;
console.log(`The value of x is: ${x}`);
console.log(`The value of y is: ${y}`);
console.log(`The sum of x and y is: ${x + y}`);

console.log(`The type of x is: ${typeof x}`);
console.log(`The type of y is: ${typeof y}`);

let age = 25;
let name = "Gigachad";
let price = 20.34;
let isAvailable = true;
let image = null;

console.log(`${name} is ${age} years old. The price is $${price}. Available: ${isAvailable}`);
console.log(`The type of age is: ${typeof age}`);
console.log(`The type of name is: ${typeof name}`);
console.log(`The type of price is: ${typeof price}`);
console.log(`The type of isAvailable is: ${typeof isAvailable}`);

document.getElementById("name").textContent = `Name: ${name}`;
document.getElementById("age").textContent = `Age: ${age}`;
document.getElementById("price").textContent = `Price: $${price}`;
document.getElementById("isAvailable").textContent = `Available: ${isAvailable}`;