let Submit = document.getElementById("checkAge");
let result = document.getElementById("result");

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";

Submit.addEventListener("click", () => {
    let age = document.getElementById("age").value;
    let message;
    message = (age === "") ? "Please enter your age." : ((age >= 18 && age <= 100) ? "You can vote." : "You can't vote.");
    console.log("\nage: " + ((age) ? (GREEN + true + RESET + "\nvote: " + ((age >= 18 && age <= 100) ? GREEN + true + RESET : RED + false + RESET)) : RED + false + RESET));
    result.innerHTML = message;
    document.getElementById("age").value = "";
});