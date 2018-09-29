// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

function matrixAdd (array1, array2) {
  var sumArr = [];
  var sumArr1 = [];
  var sumArr2 = [];
  sumArr1.push(array1[0][0] + array2[0][0]);
  sumArr1.push(array1[0][1] + array2[0][1]);
  sumArr2.push(array1[1][0] + array2[1][0]);
  sumArr2.push(array1[1][1] + array2[1][1]);
  sumArr.push(sumArr1,sumArr2);
  return sumArr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

function matrixMultiply (array1, array2) {
  var prodArr = [];
  var prodArr1 = [];
  var prodArr2 = [];
  prodArr1.push(array1[0][0] * array2[0][0] + array1[0][1] * array2[1][0]);
  prodArr1.push(array1[0][0] * array2[0][1] + array1[0][1] * array2[1][1]);
  prodArr2.push(array1[1][0] * array2[0][0] + array1[1][1] * array2[1][0]);
  prodArr2.push(array1[1][0] * array2[0][1] + array1[1][1] * array2[1][1]);
  prodArr.push(prodArr1,prodArr2);
  return prodArr;
}
