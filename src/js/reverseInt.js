// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1:

//  Gotchas!!!
// .toString()
// Math.sign(x) -> check if number is positive or negative


export const reverseInt = function reverseInt(num) {
  
  if (num === 0){
    return 0;
  } else if (num > 0) {
    let output = num.toString().split('').reverse().join('');
    return +output;
  } else {
    let output = num.toString().split('').reverse().join('');
    let newOutput = parseInt(output);
    return newOutput * -1;
  }
};

