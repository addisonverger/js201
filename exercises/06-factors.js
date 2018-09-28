// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o

function factors (number) {
  var arr = [];
  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
