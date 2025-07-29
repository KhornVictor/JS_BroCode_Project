// let age = window.prompt("Enter your age: ");
// age = Number(age); // convert string to number
// age += 1; // without convert your result would be string comme 25 + 1 = 251
// console.log("Your age is: " + age, typeof age); // "Your age is: 26 number"


let x = "0";
let y = "0";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN "number"
console.log(y, typeof y); // "pizza" "string"
console.log(z, typeof z); // true "boolean"