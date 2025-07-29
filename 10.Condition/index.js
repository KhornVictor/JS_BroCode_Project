let InputNumber = document.getElementById('input-number');
let CheckButton = document.getElementById('check-button');
let ResultText = document.getElementById('result-text');

let greetingText = document.getElementById('greeting-text');
let time = new Date().getHours();
if (time < 12) greetingText.innerText = "Good Morning!";
else if (time < 17) greetingText.innerText = "Good Afternoon!";
else if (time < 20) greetingText.innerText = "Good Evening!";
else greetingText.innerText = "Good Night!";

CheckButton.onclick = function(){
    if (InputNumber.value === "") {
        ResultText.innerText = "Please enter a valid number.";
        return;
    }
    else{
        let age = Number(InputNumber.value);
        if (age < 18) ResultText.innerText = "You are a minor.";
        else if (age >= 18 && age < 65) ResultText.innerText = "You are an adult.";
        else if (age >= 65 && age < 100) ResultText.innerText = "You are a senior citizen.";
        else if (age >= 100) ResultText.innerText = "You are a centenarian.";   
        else ResultText.innerText = "Please enter a valid number.";
        InputNumber.value = "";
    }
}


