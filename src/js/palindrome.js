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

export const palindrome = function (string) {
  const reversed = string.split('').reverse().join('');
  
  return string === reversed;
};