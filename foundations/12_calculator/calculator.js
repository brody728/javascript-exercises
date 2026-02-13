const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(sumArray) {
	let sumValue = 0;
  sumArray.forEach((item) => sumValue += item);
  return sumValue;
};

const multiply = function(multiplyArray) {
  let product = 1;
  multiplyArray.forEach((item) => product *= item);
  return product;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let product = 1;
	for (let i = 1; i <= x; i++) product *= i;
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
