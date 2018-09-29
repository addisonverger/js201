// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null

function ticTacToe (arrayTop, arrayMid, arrayBot) {
  if (arrayTop[0,1,2] || arrayMid[0,1,2] || arrayBot[0,1,2] ||
  (arrayTop[0] && arrayMid[0] && arrayBot[0]) ||
  (arrayTop[1] && arrayMid[1] && arrayBot[1]) ||
  (arrayTop[2] && arrayMid[2] && arrayBot[2]) ||
  (arrayTop[0] && arrayMid[1] && arrayBot[2]) ||
  (arrayTop[2] && arrayMid[1] && arrayBot[0]) === O) {
    return 'O';
  }
  else if (arrayTop[0,1,2] || arrayMid[0,1,2] || arrayBot[0,1,2] ||
  (arrayTop[0] && arrayMid[0] && arrayBot[0]) ||
  (arrayTop[1] && arrayMid[1] && arrayBot[1]) ||
  (arrayTop[2] && arrayMid[2] && arrayBot[2]) ||
  (arrayTop[0] && arrayMid[1] && arrayBot[2]) ||
  (arrayTop[2] && arrayMid[1] && arrayBot[0]) === X) {
    return 'X';
  }
  else {
    return null;
  }
}

console.log(ticTacToe([
['O', 'X', 'O'],
['O', 'O', null],
[null, 'X', 'X']
]));
