// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function longLongVowels (string) {
  var stringLong = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      for (var j = 0; j < 4; j++) {
      stringLong += string[i]
      }
    }
    else {
      stringLong += string[i];
    }
  }
  return stringLong;
}

console.log(longLongVowels('Good'));
