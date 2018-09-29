// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

function sumNumbers (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positiveNumbers" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positiveNumbers([1, -3, 5, -3, 0]) --> [1, 5, 0]
// positiveNumbers([1, 2, 3]) --> [1, 2, 3]
// positiveNumbers([-1, -2, -3]) --> []

function positiveNumbers (array) {
  var posArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      posArr.push(array[i]);
    }
  }
  return posArr;
}
