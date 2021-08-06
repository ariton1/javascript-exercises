const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  let sum = 0;
	if(arr.length !== 0){
    if(arr.length === 1){
      return arr[0];
    }
    else {
      for (let i = 0; i < arr.length; i++){
        sum += arr[i];
      }
      return sum;
    }
  } else {
    return 0;
  }
};

const multiply = function(arr) {
  let mult = 0;
  if(arr.length === 2){
   return arr[0]*arr[1];
  } else {
    mult = arr.reduce((accumulator, current) => accumulator*current, 1)
  } return mult;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	if (x === 0){
    return 1;
  } return x *factorial(x-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
