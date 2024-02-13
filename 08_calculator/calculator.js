const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = arr.reduce((sum,currnt) => sum + currnt, 0);
  return sum
};

const multiply = function(arr) {
  let mult = arr.reduce((mult,currnt) => mult * currnt, 1);
  return mult;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  let result = 1;
	if(num ===0 || num ===1) {
    return result;
  }
  while(num > 1) {
    result *= num
    num--;
  }
  return result;
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
