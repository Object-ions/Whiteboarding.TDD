// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1:

// 1. break the string to an array
// 2. reverse the string that was pass to us
// 3. join it back to a string
// 4. check logical equality

// export const palindrome = function (string) {
//   const reversed = string.split('').reverse().join('');
//   if (reversed === string) {
//     return true;
//   } else {
//     return false;
//   }
// };


// refactoring :

// export const palindrome = function (string) {
//   const reversed = string.split('').reverse().join('');
  
//   return string === reversed;
// };


// ************* //

// Solution 2:
// 1. taking a string and turn into an array .split()
// 2. using .every() on it to *boolian check* every element in the array
//  export. [0, 10, 14] - is every single element is greater than 5?
//  arr.every((val) => val > 5);

// input ex : ['a', 'b', 'c', 'b', 'a']

export const palindrome = function (string) {
  return string.split('').every((char, index) => {
    return char === string[string.length - index - 1]; // -1 bc the array is 0 indexed
  })
};

// many ways to solve a problem - I think this is a good solution, although its doing double the comperesion that it needs to do.