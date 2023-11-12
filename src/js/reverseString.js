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

export const reverseString = (str) => {
  let reversed = '';
  
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
};