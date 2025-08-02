const SwitchButton = document.getElementById('switch-button');
const result = document.getElementById('switch-result');
const ImageCelebrity = document.getElementById('switch-image');
let Number = 0;
let RequestNumber = 0;

const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RESET = "\x1b[0m";

SwitchButton.addEventListener('click', function () {
    Number = (Number == 6) ? 0 : Number + 1;
    RequestNumber++;
    switch (Number) {
        case 0:
            result.textContent = "TAYLOR SWIFT";
            ImageCelebrity.src = "./image/image0.png";
            ImageCelebrity.alt = "TAYLOR SWIFT";
            console.log("");
            console.log("Request Number: " + GREEN + "#" + RequestNumber + RESET);
            console.log("Celebrity: " + YELLOW + "TAYLOR SWIFT" + RESET);
            console.log("Image Source: " + GREEN + ImageCelebrity.src + RESET);

            break;
        case 1:
            result.textContent = "LADY GAGA";
            ImageCelebrity.src = "./image/image1.png";
            ImageCelebrity.alt = "LADY GAGA";
            console.log("");
            console.log("Request Number: " + GREEN + "#" + RequestNumber + RESET);
            console.log("Celebrity: " + YELLOW + "LADY GAGA" + RESET);
            console.log("Image Source: " + GREEN + ImageCelebrity.src + RESET);
            break;
        case 2:
            result.textContent = "CHARLIE PUTH";
            ImageCelebrity.src = "./image/image2.png";
            ImageCelebrity.alt = "CHARLIE PUTH";
            console.log("");
            console.log("Request Number: " + GREEN + "#" + RequestNumber + RESET);
            console.log("Celebrity: " + YELLOW + "CHARLIE PUTH" + RESET);
            console.log("Image Source: " + GREEN + ImageCelebrity.src + RESET);
            break;
        case 3:
            result.textContent = "ADELE LAURIE BLUE ADKINS";
            ImageCelebrity.src = "./image/image3.png";
            ImageCelebrity.alt = "ADELE LAURIE BLUE ADKINS";
            console.log("");
            console.log("Request Number: " + GREEN + "#" + RequestNumber + RESET);
            console.log("Celebrity: " + YELLOW + "ADELE LAURIE BLUE ADKINS" + RESET);
            console.log("Image Source: " + GREEN + ImageCelebrity.src + RESET);
            break;
        case 4:
            result.textContent = "MANN VANNDA";
            ImageCelebrity.src = "./image/image4.png";
            ImageCelebrity.alt = "MANN VANNDA";
            console.log("");
            console.log("Request Number: " + GREEN + "#" + RequestNumber + RESET);
            console.log("Celebrity: " + YELLOW + "MANN VANNDA" + RESET);
            console.log("Image Source: " + GREEN + ImageCelebrity.src + RESET);
            break;
        case 5:
            result.textContent = "OLIVA RODRIGO";
            ImageCelebrity.src = "./image/image5.png";
            ImageCelebrity.alt = "OLIVA RODRIGO";
            console.log("");
            console.log("Request Number: " + GREEN + "#" + RequestNumber + RESET);
            console.log("Celebrity: " + YELLOW + "OLIVA RODRIGO" + RESET);
            console.log("Image Source: " + GREEN + ImageCelebrity.src + RESET);
            break;
        case 6:
            result.textContent = "THE WEEKND";
            ImageCelebrity.src = "./image/image6.png";
            ImageCelebrity.alt = "The WEEKND";
            console.log("");
            console.log("Request Number: " + GREEN + "#" + RequestNumber + RESET);
            console.log("Celebrity: " + YELLOW + "THE WEEKND" + RESET);
            console.log("Image Source: " + GREEN + ImageCelebrity.src + RESET);
            break;
        default:
            result.textContent = "Unknown case!";
    }
});
