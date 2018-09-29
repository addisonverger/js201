// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors (player1Throw, player2Throw) {
  if ((player1Throw === 'paper' && player2Throw === 'rock') || (player1Throw === 'rock' && player2Throw === 'scissors') || (player1Throw === 'scissors' && player2Throw === 'paper')) {
    return 'player 1';
  }
  else if ((player1Throw === 'rock' && player2Throw === 'paper') || (player1Throw === 'scissors' && player2Throw === 'rock') || (player1Throw === 'paper' && player2Throw === 'scissors')) {
    return 'player 2';
  }
  else {
    return 'draw';
  }
}
