// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// ********************** //
// ***** Solution 1 ***** //
// ********************** //

// Make an empty array of 'words'
// split the input by spaces
// for each word in the array:
//    Uppercase the first letter
//    join first letter w rest of string
//    push result into words array
//  join words into a string and return

// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }


// ********************** //
// ***** Solution 2 ***** //
// ********************** //

// 1. Create 'result' whcich is the first char of the input is capitalize
// 2. For each char in the string
//      if the char to the left a space
//      capitalize and add to result
//      else add it to result

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i -1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i]
    }
  }
  return result;
}

module.exports = capitalize;
