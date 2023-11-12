// Solution 1:
// 1. Turn 'str' into an array
// 2. Call 'reverse' methid on the array
// 3. Join the array back to a string
// 4. Return the result.

// export const reverseString = (str) => {
//   return str.split('').reverse().join('');
// };


// *************** //

// Solution 2:
// 1. Create an empty string called 'reversed'
// 2. for each char in the string - take the char and add it to the start of 'reversed'
// 3. Return the variable 'reversed'

// export const reverseString = (str) => {
//   let reversed = '';
  
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// };


// *************** //

// Solution 3:
// 1. turn into an array, using .split()
// 2. using .reduce() that take all the different values in the array
//    and condence them all down into a single value

// export const reverseString = (str) => {
//   return str.split('').reduce((reversed, char) => {
//     return char + reversed;
//   }, '');
// };

// refactoring:
export const reverseString = (str) => str.split('').reduce((rev, char) => char + rev, '');