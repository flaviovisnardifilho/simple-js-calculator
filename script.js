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

function displayNumber(e) {
  display.innerHTML = this.textContent;
  console.log(this);
}

const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(btn => btn.addEventListener('click', displayNumber));
