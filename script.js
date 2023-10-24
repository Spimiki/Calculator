const result = document.getElementById("result");
const buttons = document.getElementsByName("button");
const percentButton = document.getElementById("percentButton");
const topScreen = document.getElementById("calculation");
let currentValue = 0;
let array = [];
let functions = ["clear", "plusMinus", "sum", "dot", "percentButton"];

buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    if (functions.includes(button.value)) {
      button.value == "plusMinus" && (result.innerHTML *= -1);
      button.value == "clear" && clear();
      button.value == "sum" && sum();
      button.value == "dot" && setValue(".");
      button.value == "percentButton" && handlePercentClick();
    } else {
      /[0-9]/.test(button.value)
        ? setValue(button.value)
        : handleOperationClick(button.value);
    }
  });
});

function setValue(value) {
  result.innerHTML == 0
    ? (result.innerHTML = value)
    : (result.innerHTML += value);
}

function handlePercentClick() {
  if (array[array.length - 1] == "+" || array[array.length - 1] == "-") {
    result.innerHTML = array[array.length - 2] * (result.innerHTML / 100);
  }
  if (array[array.length - 1] == "*" || array[array.length - 1] == "/") {
    result.innerHTML = result.innerHTML / 100;
  }
}

function handleOperationClick(operation) {
  array.push(parseFloat(result.innerHTML));
  operation && array.push(operation);
  result.innerHTML = 0;
  currentValue = 0;
  for (let i = 0; i < array.length; i++) {
    currentValue += array[i];
  }
  topScreenUpdate();
}

function topScreenUpdate() {
  topScreen.innerHTML =
    topScreen.innerHTML == '0'
      ? (topScreen.innerHTML = "")
      : array.length
      ? currentValue
      : array.forEach((item) => item);
}

function sum() {
  currentValue += `${
    result.innerHTML == currentValue ? null : result.innerHTML
  }`;
  currentValue = stringMath(currentValue);
  result.innerHTML = /[0-9]/.test(currentValue) ? currentValue : "error";
  topScreenUpdate();
  array = [];
}

function clear() {
  result.innerHTML = 0;
  array = [];
}
