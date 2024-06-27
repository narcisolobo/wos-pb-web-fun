const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Write a JavaScript program that calculates the
  average of an array of numbers.

  The program should take in a series of numbers as input
  from the user separated by spaces, and should then print
  the average.

  Example Output:

  Enter the numbers separated by spaces: 10 20 30 40 50
  The average is: 30
*/

function getAverage() {
  rl.question('Enter the numbers separated by spaces: ', (nums) => {
    const numsArr = nums.split(' ').map((num) => {
      return Number(num);
    });

    let sum = 0;
    for (const num of numsArr) {
      sum += num;
    }

    let avg = sum / numsArr.length;
    console.log(`The average is: ${avg}`);

    rl.close();
  });
}

getAverage();
