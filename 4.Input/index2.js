let username; // Declare variable to store username

// Function to handle the username submission
// This function is triggered when the user clicks the submit button
document.getElementById('usernameSubmitButton').onclick = function() {
    // Get the value of the username input field
    username = document.getElementById('username').value;
    if (username.trim() === "") { // Check if the username is empty or consists only of whitespace
        alert("Please enter a valid username.");
        return; 
    }
    // alert("Username submitted: " + username);
    document.getElementById('Greeting_username').textContent = `Welcome ${username}`;
    // document.getElementById('username').value = ""; 
}