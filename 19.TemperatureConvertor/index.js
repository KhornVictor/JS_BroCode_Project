let username = document.getElementById("username");
const result = document.getElementById("clean-name");
const greeting = document.getElementById("greeting");

username.addEventListener("input", () => {
    username.value = username.value.replace(/[^a-zA-Z\s]/g, "").trim();
    if (username.value.split(" ").length < 2) {
        result.value = username.value.trim().charAt(0).toUpperCase() 
                    + username.value.trim().slice(1).toLowerCase();
        const message = username.value === "" ? "Hello there!" : "Hello " + result.value + "!";
        greeting.innerText = message;
    } 
    // else {
    //     result.value = username.value.trim().charAt(0).toUpperCase() 
    //                 + username.value.trim().slice(1,username.value.indexOf(" ")).toLowerCase() 
    //                 + " " 
    //                 + username.value.trim().charAt(username.value.indexOf(" ") + 1).toUpperCase() 
    //                 + username.value.trim().slice(username.value.indexOf(" ") + 2).toLowerCase();
    // }
});