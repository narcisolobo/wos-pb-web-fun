/* 
  Conditionals
*/

let x = 25;
if (x > 50) {
  console.log('bigger than 50');
} else {
  // if all else fails
  // the "otherwise" case
  console.log('smaller than 50');
}

x = 75;
if (x > 100) {
  console.log('bigger than 100');
} else if (x > 50) {
  console.log('bigger than 50');
} else if (x > 25) {
  console.log('bigger than 25');
} else {
  console.log('small number');
}

/* 
  FizzBuzz Challenge
  Print the integers from 1 to 100.
  If the number is evenly divisible by 3, print "Fizz" instead of the number.
  If the number is evenly divisible by 5, print "Buzz" instead of the number.
  If the number is evenly divisible by 3 and 5, print "FizzBuzz" instead of the number.
*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Ternary Operators
// three operands
const result = 3 % 2 === 0 ? 'even' : 'odd';
console.log(result);

// react, angular, vue
