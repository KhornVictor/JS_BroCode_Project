const UserEmail = document.getElementById("username");
const greeting = document.getElementById("greeting");

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
timeDate.textContent = formattedDate;
UserEmail.addEventListener("input", function() {
    if (UserEmail.value === "") {
        greeting.textContent = "Auto Username";
        return;
    }
    const email = UserEmail.value;
    const username = email.slice(0, email.indexOf("@"));
    greeting.textContent = `Hello, ${username}!`;
});