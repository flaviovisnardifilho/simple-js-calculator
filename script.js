function add(a, b) {
  // console.log(`a: ${a}, b: ${b}`)
  return Number(a) + Number(b);
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  // console.log(`a: ${a}, b: ${b}`)
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      add(a, b);
    case '-':
      subtract(a, b);
    case '*':
      multiply(a, b);
    case '/':
      divide(a, b);
    default:
      return 'Invalid operator';
  }
}

function updateDisplay(e) {
  if (this.textContent === 'C') {
    display.textContent = 0;
    allButtons.forEach((btn) => {
      if (btn.textContent != 'C') {
        btn.disabled = false;
      }
    });
  } else if (this.textContent === '=') {
    evaluateDisplay;
  } else if (display.textContent === '0') {
    display.textContent = this.textContent;
  } else {
    display.textContent += this.textContent;
  }
}

function evaluateDisplay() {
  // Stop calculation
  if (testErrors()) {
    return;
  }

  const re = /[+\-*\e/]/;
  let disp = display.textContent;
  let operatorsList = disp.split(/[0-9.]/).filter((i) => i !== '');
  let numbersList = disp.split(re);

  if (!operatorsList.length) {
    return;
  }

  let result = calculateOrderOperations(operatorsList, numbersList);
2
  display.textContent = +result.toFixed(4);
}

function calculateOrderOperations(operatorsList, numbersList) {
  do {
    // First multiplication or division
    for (let i = 0; i < operatorsList.length; i++) {
      if ((operatorsList[i] === '*') | (operatorsList[i] === '/')) {
        let result = chooseOperation(
          operatorsList[i],
          numbersList[i],
          numbersList[i + 1]
        );
        operatorsList.splice(i, 1), numbersList.splice(i, 2, result);
      }
    }
    // Sum or subtraction now
    for (let i = 0; i < operatorsList.length; i++) {
      if ((operatorsList[i] === '-') | (operatorsList[i] === '+')) {
        let result = chooseOperation(
          operatorsList[i],
          numbersList[i],
          numbersList[i + 1]
        );
        operatorsList.splice(i, 1), numbersList.splice(i, 2, result);
      }
    }
  } while (operatorsList.length > 0);
  return numbersList[0]
}

function testErrors() {
  // Starts or ends with operator, or operator followed by operator
  if (display.textContent.match(/(^[+\-*\/])|([+\-*\/]$)|([+\-*\/]{2})/)) {
    display.textContent = 'ERROR';

    disableButtons();
    return true;
  }
}

function chooseOperation(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;

    default:
      break;
  }
}

function compareCharIndex(str) {
  return display.textContent.split('').map((c, i) => {
    if (c === str) i;
  });
}

function disableButtons() {
  allButtons.forEach((btn) => {
    if (btn.textContent != 'C') {
      btn.disabled = true;
    }
  });
}

const display = document.querySelector('#display');
const equals = document.querySelector('#equals');
equals.addEventListener('click', evaluateDisplay);

const allButtons = document.querySelectorAll('.btn');
allButtons.forEach((btn) => btn.addEventListener('click', updateDisplay));
