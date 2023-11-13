// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// counting or comparing the number of strings

// 1. take the string and conver to an object
// 2. key of the object are the characters - values are the number of times this value has been count.
// 3. iterate through the character map (chars) and find the char that was used most


// Solution 1:

// function maxChar(string) {
//   const chars = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of string) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char] ++;
//     }
//   }

//   for (let char in chars) {
//     if (chars[char] > max) {
//       max = chars[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }
  
// refactor:
function maxChar(string) {
  const chars = {};
  let max = 0;
  let maxChar = '';
  
  for (let char of string) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}
  


module.exports = maxChar;