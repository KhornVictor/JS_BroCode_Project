let InputAmount = document.getElementById('input-amount');
const CheckButton = document.getElementById('check-button');
const LabelText = document.getElementById('text-label');

const checkbox = document.getElementById('checkbox');

const Visa = document.getElementById('visa');
const Master = document.getElementById('master');
const PayPal = document.getElementById('paypal'); 

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RESET = "\x1b[0m";


const greetingText = document.getElementById('greeting-text');
let time = new Date().getHours();
if (time < 12) greetingText.innerText = "Good Morning!";
else if (time < 17) greetingText.innerText = "Good Afternoon!";
else if (time < 20) greetingText.innerText = "Good Evening!";
else greetingText.innerText = "Good Night!";

const dateElement = document.getElementById('date');
let currentDate = new Date();
let currentTime = currentDate.toLocaleTimeString('kh-KH', { hour: '2-digit', minute: '2-digit' });
let options = { year: 'numeric', month: 'long', day: 'numeric' };
dateElement.innerText = currentDate.toLocaleDateString('kh-KH', options) + " - " + currentTime;

let Amount = 25.42; // Default to 23 if input is empty or invalid
document.getElementById('payment-amount').innerText = `Amount: $${Amount.toFixed(2)}`;

CheckButton.onclick = function(){
    console.log("");
    console.log("Date-Time: " + YELLOW + currentDate.toLocaleDateString('kh-KH', options) + " - " + currentTime + RESET);
    console.log("InputAmount.Value: " + YELLOW + "$" + parseFloat(InputAmount.value) + RESET);
    console.log("Amount: " + YELLOW + "$" + Amount + RESET);
    if (parseFloat(InputAmount.value) == Amount) console.log("Check Amount: " + GREEN + (parseFloat(InputAmount.value) == Amount) + RESET);
    if (parseFloat(InputAmount.value) != Amount) console.log("Check Amount: " + RED + (parseFloat(InputAmount.value) == Amount) + RESET);
    
    if (checkbox.checked) console.log("Promotion: " + GREEN + checkbox.checked + RESET + " (optional)");
    else console.log("Promotion: " + RED + checkbox.checked + RESET + " (optional)");
        
    if (!Visa.checked && !Master.checked && !PayPal.checked && InputAmount.value != "") {
        LabelText.innerText = "Please select a payment method.";
        console.log("Card: " + RED + "NULL" + RESET);
        console.log(RED + "Payment Failed" + RESET);
        return;
    }
    else if (!Visa.checked && !Master.checked && !PayPal.checked && InputAmount.value === "") {
        LabelText.innerText = "Please enter a valid number.";
        console.log("Card: " + RED + "NULL" + RESET);
        console.log(RED + "Payment Failed" + RESET);
        return;
    }   

    else{

        if (parseFloat(InputAmount.value) == Amount) {

            if (checkbox.checked) InputAmount.value = (parseFloat(InputAmount.value) * 0.9).toFixed(2);
            if (Visa.checked) {
                console.log("Card: " + YELLOW + "Visa" + RESET);
                if (checkbox.checked) LabelText.innerText = `Amount: $${InputAmount.value}\nYou got discount 90%\nPayment successful with Visa.\n Thank you for your purchase!`;
                else LabelText.innerText = `Amount: $${InputAmount.value}\nPayment successful with Visa.\n Thank you for your purchase!`;
            }
            else if (Master.checked){
                console.log("Card: " + YELLOW + "MasterCard" + RESET);
                if (checkbox.checked) LabelText.innerText = `Amount: $${InputAmount.value}\nYou got discount 90%\nPayment successful with MasterCard.\n Thank you for your purchase!`;
                else LabelText.innerText = `Amount: $${InputAmount.value}\nPayment successful with MasterCard.\n Thank you for your purchase!`;
            }
            else{
                console.log("Card: " + YELLOW + "PayPal" + RESET);
                if (checkbox.checked) LabelText.innerText = `Amount: $${InputAmount.value}\nYou got discount 90%\nPayment successful with PayPal.\n Thank you for your purchase!`;
                else LabelText.innerText = `Amount: $${InputAmount.value}\nPayment successful with PayPal.\n Thank you for your purchase!`;
            }
            InputAmount.value = "";            
            console.log(GREEN + "Payment Successful" + RESET);
        }
        else {
            LabelText.innerText = "Incorrect amount entered.";
            console.log(RED + "Payment Failed" + RESET);
        }
    }
}