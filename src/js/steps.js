// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ***** NOT WORKING *** //

// function steps(n) {
//   let result = '#';
//   let spaces = 0;

//   for (let i = 1; i <= n; i++) {
//     spaces --;
    
//     console.log(result);
//     spaces = n - i;
    
//     result = result + '#' + spaces * (' ');
//   }
// }

// ***** Solution 1 ***** //

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let result = '#'.repeat(i);
//     let spaces = ' '.repeat(n - i); 
//     console.log(result + spaces);
//   }
// }

// ***** Solution 2 ***** //

// function steps(n) {
//   for (let row = 0; row < n; row ++) {
//     let step = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }

//     console.log(step);
//   }
// }


// ***** Solution 3 ***** //
//       Recursion       //
function steps(n) {
  return n;
}


module.exports = steps;