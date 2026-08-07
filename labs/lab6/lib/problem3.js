// problem3.js — implement the function bodies, then the driver at the bottom.

// ===== Arrow functions: validation =====
/* 
- isValidNumber("5")-> true, isValidNumber(" ") -> false, isValidNumber("abc") should return false
- isValidNumber(null) should return false
*/
const isValidNumber       = (input) => { return Number.isInteger(input) };

/*
 - parseValidNumber("5.5") should return 5.5
 - parseValidNumber("abc") should return null
*/
const parseValidNumber    = (input) => { return isValidNumber(input) ? Number(input) : null};

// ===== Function expressions: operations =====
// Contract: receive two NUMBERS, return a number.
const add      = function (a, b) { return a + b };
const subtract = function (a, b) { return a - b };
const multiply = function (a, b) {  return a * b};
const divide   = function (a, b) { return (b) ? a / b : null };
const getOperationFunction = function (op) {
  if(op === '+') return add;
  if(op === '-') return subtract;
  if(op === '*') return multiply;
  if(op === '/') return divide;
};

function isValidOperation(input) {
  return input === '+' || input === '-' ||input === '*' || input === '/';
}

function promptForOperation() {
  var input;

  do{
    input = prompt("Enter an operation (+, -, *, /):");
  }while(!isValidOperation(input));
  return input;
}

function promptForNumbers(message) {
  var input;
  var valid;

  do{
    input = Number(prompt(message));
    valid = isValidNumber(input);
    if(!valid) alert("Invalid number format")
  }while(!valid);

  return  parseValidNumber(input)
} 

function compute(a, b, operation) {
  return operation(a, b);
}

function main() {
  let input = promptForOperation();
  let operation = getOperationFunction(input);
  let a = promptForNumbers("Enter the first number:");
  let b = promptForNumbers("Enter the second number:");
  let result = compute(a, b, operation);

  if(result !== null) alert(`The result is ${result}`);
  else alert("Cannot divide by zero");
}

main();

