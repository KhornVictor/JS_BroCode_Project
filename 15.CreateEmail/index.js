const username = document.getElementById("username");
const greeting = document.getElementById("greeting");
const EmailLabel1 = document.getElementById("email1");
const EmailLabel2 = document.getElementById("email2");

let n = 0;

const timeDate = document.getElementById("time-date");
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});

const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RESET = "\x1b[0m";
const RED = "\x1b[31m";

function RandomNumber(){
    let randomNumber = Math.floor((Math.random() * 99) + 1);
    randomNumber = randomNumber.toString().padStart(2, '0');
    return randomNumber;
}

timeDate.textContent = formattedDate;
username.addEventListener("input", function() {
    console.log(" ");
    console.log(((username.value === "") ? RED : GREEN) + "#" + n + RESET);
    n++;
    if (username.value === "") {
        greeting.textContent = "Hello there!";
        EmailLabel1.value = "";
        EmailLabel2.value = "";
        console.log("Email 1: " + RED + "NULL" + RESET);
        console.log("Email 2: " + RED + "NULL" + RESET);
        return;
    }
    const GetOneRandomNumber = RandomNumber();
    const NumberOfWhitespaces = username.value.split(" ").length - 1;
    if (username.value.indexOf(" ") === -1) {
        const email = username.value.toLowerCase() + GetOneRandomNumber + "@gmail.com";
        console.log("Name: " + GREEN + username.value + RESET);
        console.log("Email: " + YELLOW + email + RESET);
        greeting.textContent = `Hello ${username.value}!`;  
        EmailLabel1.value = email;
        EmailLabel2.value = "";
    }
    else if (NumberOfWhitespaces > 1) console.log("Name: "+ RED + "Invalid name" + RESET);
    else{
        const firstName = username.value.slice(0, username.value.indexOf(" "));
        const lastName = username.value.slice(username.value.indexOf(" ") + 1);
        const email1 = firstName.toLowerCase() + lastName.toLowerCase() + GetOneRandomNumber + "@gmail.com";
        const email2 = lastName.toLowerCase() + firstName.toLowerCase() + GetOneRandomNumber + "@gmail.com";
        console.log("Name: " + GREEN + firstName + " " + lastName + RESET);
        console.log("Email 1: " + YELLOW + email1 + RESET);
        console.log("Email 2: " + YELLOW + email2 + RESET);
        greeting.textContent = `Hello ${lastName    }!`;
        EmailLabel1.value = email1;
        EmailLabel2.value = email2;
    }
});