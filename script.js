const result = document.getElementById("result");

const clearButton = document.getElementById("clearButton");

const plusMinusButton = document.getElementById("plusMinusButton");

const sumButton = document.getElementById("sumButton");

const buttons = document.getElementsByName("button");

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

buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    /[0-9]/.test(button.value)
      ? setValue(button.value)
      : handleFunctionClick(button.value);
  });
});

percentButton.addEventListener("click", () => {
  if (array[array.length - 1] == "+" || array[array.length - 1] == "-") {
    result.innerHTML = array[array.length - 2] * (result.innerHTML / 100);
  }
  if (array[array.length - 1] == "*" || array[array.length - 1] == "/") {
    result.innerHTML = result.innerHTML / 100;
  }
});

dotButton.addEventListener("click", () => setValue("."));

function setValue(value) {
  result.innerHTML == 0
    ? (result.innerHTML = value)
    : (result.innerHTML += value);
}

function handleFunctionClick(operation) {
  array.push(parseFloat(result.innerHTML));
  operation && array.push(operation);
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
