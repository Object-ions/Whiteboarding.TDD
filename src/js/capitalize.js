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

// refactoring

function capitalize (string) {
  return string.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


// ********************** //
// ***** Solution 2 ***** //
// ********************** //

// 1. Create an empty string called 'result'
// 2. For each char in the string
//      if the character (of the current one) to the left a space
//      if it is a space we will take the current letter (character) and capitalize it 
//      capitalize and add to result
//      else add it to result as is no capitalized

// so the indicator 'when' we need to capitalize is white space to the left.

// function capitalize(string) {
//   let result = string[0].toUpperCase();

//   for (let i = 1; i < string.length; i++) {

//     if (string[i - 1] === ' ') {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i];
//     }
//   }

//   return result;
// }

module.exports = capitalize;
