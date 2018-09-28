// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

function cipher (string,shift) {
  // create array for char codes
  var codeArr = [];
  // go through the string
  for(i = 0; i < string.length; i++) {
    // current item in array is converted to char code
    var currentItem = string.charCodeAt(i);
    // apply shift modulo 26
    currentItem += shift % 26;
    // push current item into array
    codeArr.push(currentItem);
  }
  //convert array of char codes back to letters
  return String.fromCharCode(codeArr.join());
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

function decipher (string,shift) {
  // place each letter in string into an array
  var arr = string.split('');
  // convert letters to numbers

  // go through the array
  for(i = 0; i < arr.length; i++) {
    // item in array
    var currentItem = arr.charCodeAt(i);
    // apply shift modulo 26
    currentItem -= shift % 26
  }
  //convert numbers back to letters
  return string.fromCharCode(arr);
}
