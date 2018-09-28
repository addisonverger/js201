// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare (size) {
  var line = '';
  var box = '';
  var n = 0;
  var m = 0;
  if (size > 1) {
    while (n < size) {
      n++;
      line += '*';
    }
    while (m < size) {
      m++;
      if (m < size) {
        box += (line + '\n');
      }
      else if (m = size) {
        box += line;
      }
    }
    return box;
  }
  else if (size === 1) {
    return '*';
  }
  else {
    return '';
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox (width,height) {
  var box = '';
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
        box += '*';
      }
      else {
        box += ' ';
      }
    }
    box += '\n';
  }
  return box.substring(0,box.length - 1);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner (text) {
  var border = [];
  var a = 0;
  for (i = 0; i < (text.length + 4); i++) {
    border.push('*');
  }
  return border.join('') + '\n' + '* ' + text + ' *' + '\n' + border.join('');
}
