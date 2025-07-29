let addition_x = 10;
let addition_y = 5;

let subtraction_x = 23;
let subtraction_y = 3;

let multiplication_x = 7;
let multiplication_y = 6;

let division_x = 12;
let division_y = 6;

document.getElementById("addition").textContent = addition_x + " + " + addition_y + " = " + (addition_x + addition_y);
document.getElementById("subtraction").textContent = subtraction_x + " - " + subtraction_y + " = " + (subtraction_x - subtraction_y);
document.getElementById("multiplication").textContent = multiplication_x + " x " + multiplication_y + " = " + (multiplication_x * multiplication_y);
document.getElementById("division").textContent = division_x + " / " + division_y + " = " + (division_x / division_y);

/*
x += 1
x -= 2
x *= 3
x /= 4
x %= 5
x **= 2
x++;
x--;
*/