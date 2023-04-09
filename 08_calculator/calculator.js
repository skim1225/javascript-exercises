const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let total = 0;
  nums.forEach(n => {
    total += n;
  });
  return total;
};

const multiply = function(nums) {
  let total = 1;
  nums.forEach(n => {
    total *= n;
  });
  return total;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
	let total = 1;
  for(let i = n; i > 1; i--) {
    total *= i;
  }
  return total;
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
