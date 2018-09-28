// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"


function leetspeak (string) {

  leetString = '';
  var leet = {
    a: 4, e: 3, g: 6, i: 1, o: 0, s: 5, t: 7, A: 4, E: 3, G: 6, I: 1, O: 0, S: 5, T: 7
  }
  for (i = 0; i < string.length; i++) {
    if (leet[string[i]]) {
      
    }
  }


}

console.log(leetspeak('Leet'));
