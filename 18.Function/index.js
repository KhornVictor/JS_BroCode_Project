const Button = document.getElementById('click-button');
const Paragraph = document.querySelector('main > p');
let count = 0;

HaveToDo(0);

function HaveToDo(count){
    if (count === 0) Paragraph.textContent = "Button not clicked yet!";
    else {
        Button.style.backgroundColor = "#28a745";
        Button.style.animation = "ColorChange 20s infinite linear";
        Paragraph.textContent = `Button clicked ${count} times!`;
    }
}

Button.addEventListener('click', () => {
    count++;
    HaveToDo(count);
});
