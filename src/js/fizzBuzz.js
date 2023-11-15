// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Solution : 
// !! Using modulo operation will give us the remainder left over of dividition
// to determind if a number is a multipul of another we can use the modulo operator !! 

// 1. loop from 1 to n
// 2.  check logic if the number multipul 3 and 5

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;