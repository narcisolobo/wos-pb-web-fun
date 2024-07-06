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

/**
 * This function takes in a space-delimited string of
 * numbers and returns an array of numbers
 * @param {string} strNums
 * @returns {number[]}
 */
function splitStringToNums(strNums) {
  const numsArr = strNums.split(' ').map((num) => {
    return Number(num);
  });
  return numsArr;
}

/**
 * This function accepts an array of number and returns
 * their average.
 * @param {number[]} numsArr
 * @returns {number}
 */
function getAverage(numsArr) {
  let sum = 0;
  for (const num of numsArr) {
    sum += num;
  }

  let avg = sum / numsArr.length;
  return avg;
}

/**
 * This function prompts the user for a string of space-delimited
 * numbers and prints the average.
 */
function app() {
  rl.question('Enter the numbers separated by spaces: ', (nums) => {
    const numsArr = splitStringToNums(nums);
    const avg = getAverage(numsArr);
    console.log(`The average is: ${avg}`);

    rl.close();
  });
}

app();
