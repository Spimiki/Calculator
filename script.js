const result = document.getElementById("result");

const clearButton = document.getElementById("clearButton");

const plusMinusButton = document.getElementById("plusMinusButton");

const zeroButton = document.getElementById("zeroButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");

const plusButton = document.getElementById("plusButton");
const sumButton = document.getElementById("sumButton");
const minusButton = document.getElementById("minusButton");
const timesButton = document.getElementById("timesButton");
const divideButton = document.getElementById("divideButton");

const percentButton = document.getElementById("percentButton");

const dotButton = document.getElementById("dotButton");

let currentValue = 0;

let array = [];

clearButton.addEventListener("click", () => {
  reset();
});

plusMinusButton.addEventListener("click", () => {
  result.innerHTML *= -1;
});

sumButton.addEventListener("click", () => sum());

plusButton.addEventListener("click", () => handleFunctionClick(`+`));
minusButton.addEventListener("click", () => handleFunctionClick(`-`));
timesButton.addEventListener("click", () => handleFunctionClick(`*`));
divideButton.addEventListener("click", () => handleFunctionClick(`/`));
percentButton.addEventListener("click", () => {
  if (array[array.length - 1] == "+") {
    result.innerHTML =
      array[array.length - 2] +
      array[array.length - 2] * (result.innerHTML / 100);
  }
  if (array[array.length - 1] == "-") {
    result.innerHTML =
      array[array.length - 2] -
      array[array.length - 2] * (result.innerHTML / 100);
  }
  if (array[array.length - 1] == "*") {
    result.innerHTML = array[array.length - 2] * (result.innerHTML / 100);
  }
  if (array[array.length - 1] == "/") {
    result.innerHTML = array[array.length - 2] / (result.innerHTML / 100);
  }
});

zeroButton.addEventListener("click", () => setValue(0));
oneButton.addEventListener("click", () => setValue(1));
twoButton.addEventListener("click", () => setValue(2));
threeButton.addEventListener("click", () => setValue(3));
fourButton.addEventListener("click", () => setValue(4));
fiveButton.addEventListener("click", () => setValue(5));
sixButton.addEventListener("click", () => setValue(6));
sevenButton.addEventListener("click", () => setValue(7));
eightButton.addEventListener("click", () => setValue(8));
nineButton.addEventListener("click", () => setValue(9));

dotButton.addEventListener("click", () => setValue("."));

function setValue(value) {
  result.innerHTML == 0
    ? (result.innerHTML = value)
    : (result.innerHTML += value);
}

function handleFunctionClick(operation) {
  array.push(parseFloat(result.innerHTML));
  array.push(operation);
  result.innerHTML = 0;
  currentValue = 0;
  for (let i = 0; i < array.length; i++) {
    currentValue += array[i];
  }
}

function sum() {
  currentValue += `${
    result.innerHTML == currentValue ? null : result.innerHTML
  }`;
  currentValue = stringMath(currentValue);
  result.innerHTML = /[0-9]/.test(currentValue) ? currentValue : "error";
  array = [];
}

function reset() {
  result.innerHTML = 0;
  array = [];
}
