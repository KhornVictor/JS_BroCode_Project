const IncreaseGuessing = document.getElementById("increase-guessing");
const DecreaseGuessing = document.getElementById("decrease-guessing");
const DecreaseCoin = document.getElementById("decrease-coins");
const IncreaseCoin = document.getElementById("increase-coins");
const Bet = document.getElementById("bet");

const CoinDisplay = document.getElementById("coins-display");
const CoinDisplayBet = document.getElementById("coins-bet");
const Result = document.getElementById("result");

let count = 1;
let Coins = 10;
let BetCoins = 0;
let UserRequest = 0;

// Status
let CoinsStatus;
let BetCoinStatus;

let RandomNumber;
RandomNumber = Math.floor(Math.random() * 10) + 1;


const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RESET = "\x1b[0m";

CoinDisplay.textContent = Coins;



function updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, Count) {   
    console.log("UserRequest: " + YELLOW + "#" + UserRequest + RESET);
    console.log("Compare: " + ((RandomNumber == Count) ? GREEN + true : RED + false) + RESET);
    console.log("Count: " + YELLOW + Count + RESET);
    console.log("RandomNumber: " + YELLOW + RandomNumber + RESET);
    console.log("BetCoins: " + ((BetCoins == 0) ? RED : GREEN) + BetCoins + RESET);
    console.log("Coins-Remaining: " + (((Coins - BetCoins) == 0) ? RED : GREEN) + (Coins - BetCoins) + RESET);
    console.log("Coins-Status: " + GREEN + CoinsStatus + RESET);
    console.log("BetCoin-Status: " + ((BetCoins == 0 || BetCoins == Coins) ? RED : GREEN) + BetCoinStatus + RESET);
}

IncreaseGuessing.onclick = function(){
    count++;
    CoinsStatus = "undefined";
    BetCoinStatus = "undefined";
    if (count > 10) count = 10;
    Result.textContent = count;
    updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, count);
}

DecreaseGuessing.onclick = function(){
    count--;
    CoinsStatus = "undefined";
    BetCoinStatus = "undefined";
    if (count < 1) count = 1;
    Result.textContent = count;
    updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, count);
}

IncreaseCoin.onclick = function(){
    UserRequest++;
    console.log("");
    BetCoins++;
    if (BetCoins >= Coins){
        BetCoins = Coins;
        CoinsStatus = "Increase";
        BetCoinStatus = "Overflow";
        Result.textContent = "No Coins";
        setTimeout(() => {
            Result.textContent = count;
        }, 2000);
        updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, count);
    }
    else{
        CoinsStatus = "Increase";
        BetCoinStatus = "OK";
        updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, count);
    }
    CoinDisplayBet.textContent = BetCoins;
}

DecreaseCoin.onclick = function(){
    UserRequest++;
    console.log("");
    BetCoins--;
    if (BetCoins < 0) {
        BetCoins = 0;
        CoinsStatus = "Decrease";
        BetCoinStatus = "Underflow";
        updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, count);
    }
    else{
        CoinsStatus = "Decrease";
        BetCoinStatus = "OK";
        updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, count);
    }
    CoinDisplayBet.textContent = BetCoins;
}

Bet.onclick = function(){
    console.clear();
    UserRequest++;
    if (BetCoins == 0) {
        CoinsStatus = "No Bet";
        BetCoinStatus = "Empty";
        updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, count);
        Result.textContent = "No Bet";
        setTimeout(() => {
            Result.textContent = count;
        }, 2000);
        return;
    }
    if (count == RandomNumber) {
        Coins += BetCoins;
        BetCoins = 0;
        CoinsStatus = "Win";
        BetCoinStatus = "OK";
    } else {
        Coins -= BetCoins;
        BetCoins = 0;
        CoinsStatus = "Lose";
        BetCoinStatus = "OK";
    }

    CoinDisplay.textContent = Coins;
    CoinDisplayBet.textContent = BetCoins;
    Result.textContent = ((count == RandomNumber) ? "Win" : "Lose");
    count = 1;
    RandomNumber = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
            Result.textContent = count;
    }, 2000);
    updateCoinDisplay(UserRequest, Coins, BetCoins, CoinsStatus, BetCoinStatus, RandomNumber, count);
}
