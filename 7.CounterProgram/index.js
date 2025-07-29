const IncreaseButton = document.getElementById("increase");
const DecreaseButton = document.getElementById("decrease");
const ResetButton = document.getElementById("reset");
const Result = document.getElementById("result");
let count = 0;


IncreaseButton.onclick = function(){
    count++;
    Result.textContent = count;
}

DecreaseButton.onclick = function(){
    count--;
    Result.textContent = count;
}

ResetButton.onclick = function(){
    count = 0;
    Result.textContent = count;
}