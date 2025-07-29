let StartButton = document.getElementById("StartButton");
let RandomNumber;
let RandomInitialValue;
let RandomAfterApplyMutiplicity;

const min = 1;
const max = 99;

StartButton.onclick = function() {
    RandomInitialValue = Math.random();
    RandomAfterApplyMutiplicity = RandomInitialValue * max;

    // console.log("\nInitial Random: " + RandomInitialValue);
    // console.log("Mutiplicity Random: " + MultipleForApplyInRandom);
    // console.log("Random Mutiplicity: " + RandomAfterApplyMutiplicity);


    document.getElementById("LabelRandomNumber").innerText = Math.floor((RandomInitialValue * (max - min + 1)) + min);
}