function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
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
  let sortedDisplay = display.textContent.split(/[\+|\-|\*|\/]/);
  sortedDisplay.map((e) => Number(e));

  testErrors()
}

function findCharIndex(op) {
  substring = [];
  let string = display.textContent;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === op) {
      substring.push(i);
    }
  }
  return substring;
}

function testErrors() {
  operators = ['+', '-', '*', '/'];

  // Only 1 number inserted
  if (display.textContent.split(/[\+|\-|\*|\/]/).length < 1){
    display.textContent = display.textContent.split(/[\+|\-|\*|\/]/)
  }
  // if (display.textContent.match(/^[\+\-\*\/]|[\+\-\*\/]$/)) ||
  //   ()
  //   {
  //   display.textContent = 'ERROR';
  //   disableButtons();
  //   // return true;
  // }
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
