// const x = 5;
// const y = "pizza";

// console.log(`${y}: ${x}`); // This will throw an error because x is a constant and cannot be reassigned.


// const pi = 3.1415;
// let radius = window.prompt("Enter the radius of the circle: ");
// let circumference = 2 * pi * radius;

// // pi = 3.14; // This will throw an error because pi is a constant and cannot be reassigned

// console.log(`The circumference of the circle is: ${circumference}`); 


document.getElementById("result").innerText = `Circumference: `;
document.getElementById("calculate").addEventListener("click", function() {
    const pi = 3.1415;
    let radius = document.getElementById("radius").value;
    if (radius) {
        let circumference = 2 * pi * radius;
        document.getElementById("result").innerText = `Circumference: ${circumference}`;
    } 
    else document.getElementById("result").innerText = "Please enter a valid radius.";
});