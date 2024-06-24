/**
 * The function `print1To255` prints numbers from
 * 1 to 255 in the console.
 */
function print1To255() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
}

console.log('1. print1To255');
print1To255();
console.log('\n');

/**
 * The function `printOdds1To255` prints all odd
 * numbers from 1 to 255.
 */
function printOdds1To255() {
  for (let i = 1; i <= 255; i += 2) {
    console.log(i);
  }
}

console.log('2. printOdds1To255');
printOdds1To255();
console.log('\n');

/**
 * The function `printIntsAndSum0To255` calculates
 * the sum of integers from 0 to 255 and prints each
 * integer along with the cumulative sum.
 */
function printIntsAndSum0To255() {
  let sum = 0;
  for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log(i, sum);
  }
}

console.log('3. printIntsAndSum0To255');
printIntsAndSum0To255();
console.log('\n');

/**
 * The function `printArrayVals` iterates through an
 * array and logs each element to the console.
 * @param {Array<any>} arr - an array that contains the values you
 * want to print.
 */
function printArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const colors = ['red', 'blue', 'green'];
console.log('4. printArrayVals');
printArrayVals(colors);
console.log('\n');

/**
 * The function `printMaxOfArray` finds and prints
 * the maximum value in a given array of numbers.
 * @param {number[]} arr - the given array.
 */
function printMaxOfArray(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

const nums = [3, 7, 1, 9, 3, 4, 6];
console.log('5. printMaxOfArray');
printMaxOfArray(nums);
console.log('\n');

/*
  6. Get and Print Average
  printAverageOfArray(arr)
  Analyze an array’s values and print the
  average.
*/

/*
  7. Array with Odds
  returnOddsArray1To255()
  Create an array with all the odd integers
  between 1 and 255 (inclusive).
*/

/*
  8. Square the Values
  squareArrayVals(arr)
  Square each value in a given array, returning
  that same array with changed values.
*/

/*
  9. Greater than Y
  printArrayCountGreaterThanY(arr, y)
  Given an array and a value Y, count and print
  the number of array values greater than Y.
*/

/*
  10. Zero Out Negative Numbers
  zeroOutArrayNegativeVals(arr)
  Return the given array, after setting any
  negative values to zero.
*/

/*
  11. Max, Min, Average
  printMaxMinAverageArrayVals(arr)
  Given an array, print the max, min and
  average values for that array
*/

/*
  12. Shift Array Values
  shiftArrayValsLeft(arr)
  Given an array, move all values forward
  (to the left) by one index, dropping the
  first value and leaving a 0 (zero) value
  at the end of the array.
*/

/*
  13. Swap String For Array Negative Values
  swapStringForArrayNegativeVals(arr)
  Given an array of numbers, replace any
  negative values with the string 'Dojo'.
*/
