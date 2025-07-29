let x;
let y;
let Button = document.querySelector('form > button');

Button.onclick = function() {
    x = parseFloat(document.getElementById('X').value) || 1;
    y = parseFloat(document.getElementById('Y').value) || 2;

    document.getElementById('Math-PI').innerText = `PI: ${Math.PI}`;
    console.log(`PI: ${Math.PI}`);

    document.getElementById('Math-E').innerText = `E: ${Math.E}`;
    console.log(`E: ${Math.E}`);

    document.getElementById('Math-round').innerText = `Round(${x}): ${Math.round(x)}`;
    console.log(`Round: ${Math.round(x)}`);

    document.getElementById('Math-floor').innerText = `Floor(${x}): ${Math.floor(x)}`;
    console.log(`Floor: ${Math.floor(x)}`);

    document.getElementById('Math-ceil').innerText = `Ceil(${x}): ${Math.ceil(x)}`;
    console.log(`Ceil: ${Math.ceil(x)}`);

    document.getElementById('Math-trunc').innerText = `Trunc(${x}): ${Math.trunc(x)}`;
    console.log(`Trunc: ${Math.trunc(x)}`);


    document.getElementById('Math-abs').innerText = `Abs(-${x}): ${Math.abs(-x)}`;
    console.log(`Abs: ${Math.abs(-x)}`);

    document.getElementById('Math-sqrt').innerText = `Sqrt(${x}): ${Math.sqrt(x)}`;
    console.log(`Sqrt: ${Math.sqrt(x)}`);

    document.getElementById('Math-pow').innerText = `Pow(${x}, ${y}): ${Math.pow(x, y)}`;
    console.log(`Pow: ${Math.pow(x, y)}`);

    document.getElementById('Math-log').innerText = `Log(${x}): ${Math.log(x)}`;
    console.log(`Log: ${Math.log(x)}`);

    document.getElementById('Math-sin').innerText = `Sin(${x}): ${Math.sin(x)}`;
    console.log(`Sin: ${Math.sin(x)}`);

    document.getElementById('Math-cos').innerText = `Cos(${x}): ${Math.cos(x)}`;
    console.log(`Cos: ${Math.cos(x)}`);

    document.getElementById('Math-tan').innerText = `Tan(${x}): ${Math.tan(x)}`;
    console.log(`Tan: ${Math.tan(x)}`);

}