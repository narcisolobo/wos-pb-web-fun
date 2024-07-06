const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Write a JavaScript function that takes an integer
  input from the user and checks whether it is
  positive, negative, or zero. Use conditional
  statements (`if`, `else if`, `else`) to implement
  this logic.

  Example Output:

  Enter a number: 5
  5 is a positive number.

  Enter a number: -3
  -3 is a negative number.

  Enter a number: 0
  0 is neither positive nor negative.
*/

function whatsYourSign() {
  rl.question('Enter a number: ', (num) => {
    if (num > 0) {
      console.log(`${num} is a positive number.`);
    } else if (num < 0) {
      console.log(`${num} is a negative number.`);
    } else {
      console.log(`${num} is neither positive nor negative.`);
    }
    rl.close();
  });
}

whatsYourSign();
