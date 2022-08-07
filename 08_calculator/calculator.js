const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numArray) {
  return numArray.reduce((accum, curr) => accum + curr, 0);
};

const multiply = function (numArray) {
  return numArray.reduce((accum, curr) => accum * curr, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let fact = 1;
  for (let i = num; i > 1; i--) {
    fact *= i;
  }
  return fact;
};

const recursiveFactorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
