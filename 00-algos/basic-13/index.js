/* 
  Print 1-255
  print1To255()
  Print all the integers from 1 to 255. 
*/

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

/* 
  2. Print Odds 1-255
  printOdds1To255()
  Print all odd integers from 1 to 255. 
*/

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

/* 
  3. Print Ints and Sum 0-255
  printIntsAndSum0To255()
  Print integers from 0 to 255, and with each integer print the sum so far. 
*/

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

/* 
  4. Iterate and Print Array
  printArrayVals(arr)
  Iterate through a given array, printing each value.
*/

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

/* 
  5. Find and Print Max
  printMaxOfArray(arr)
  Given an array, find and print its largest element. 
*/

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

/**
 * The function `printAverageOfArray` calculates the
 * average of the elements in an array and prints the
 * result.
 * @param {number[]} arr - The array of numbers to analyze.
 */
function printAverageOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

console.log('6. printAverageOfArray');
const nums2 = [1, 2, 3, 4];
printAverageOfArray(nums2);
console.log('\n');

/* 
  7. Array with Odds
  returnOddsArray1To255()
  Create an array with all the odd integers between 1 and 255 (inclusive).  
*/

/**
 * The function `returnOddsArray1To255` generates an
 * array containing all odd numbers from 1 to 255.
 * @returns {number[]}
 */
function returnOddsArray1To255() {
  let oddsArr = [];
  for (let i = 1; i <= 255; i += 2) {
    oddsArr.push(i);
  }
  return oddsArr;
}

console.log('7. returnOddsArray1To255');
console.log(returnOddsArray1To255());
console.log('\n');

/* 
  8. Square the Values
  squareArrayVals(arr)
  Square each value in a given array, returning that
  same array with changed values. 
*/

/**
 * The function `squareArrayVals` squares each element
 * in an array and returns the modified array.
 * @param {number[]} arr - The given array of numbers.
 * @returns {number[]}
 */
function squareArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

console.log('8. squareArrayVals');
console.log(squareArrayVals([1, 2, 3, 4]));
console.log('\n');

/*
  9. Greater than Y
  printArrayCountGreaterThanY(arr, y)
  Given an array and a value Y, count and print
  the number of array values greater than Y.
*/

/**
 * The function `printArrayCountGreaterThanY` counts
 * and prints the number of elements in an array that
 * are greater than a specified value `y`.
 * @param {number[]} arr
 * @param {number} y
 */
function printArrayCountGreaterThanY(arr, y) {
  let count = 0;
  for (const num of arr) {
    if (num > y) {
      count++;
    }
  }
  console.log(count);
}

console.log('9. printArrayCountGreaterThanY');
printArrayCountGreaterThanY([1, 2, 3, 4], 3);
console.log('\n');

/*
  10. Zero Out Negative Numbers
  zeroOutArrayNegativeVals(arr)
  Return the given array, after setting any
  negative values to zero.
*/

/**
 * The function zeroOutArrayNegativeVals takes an array
 * as input and replaces any negative values in the
 * array with zero.
 * @param {number[]} arr
 * @returns {number[]}
 */
function zeroOutArrayNegativeVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

console.log('10. zeroOutArrayNegativeVals');
console.log(zeroOutArrayNegativeVals([-1, 2, -3, 4]));
console.log('\n');

/*
  11. Max, Min, Average
  printMaxMinAverageArrayVals(arr)
  Given an array, print the max, min and
  average values for that array
*/

/**
 * The function calculates and prints the maximum,
 * minimum, and average values of an array.
 * @param {number[]} arr
 */
function printMaxMinAverageArrayVals(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = arr[0];

  for (const num of arr) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
    sum += num;
  }

  const avg = sum / arr.length;

  console.log(`Max: ${max}, Min: ${min}, Average: ${avg} `);
}

console.log('11. printMaxMinAverageArrayVals');
console.log(printMaxMinAverageArrayVals([5, 3, 1, 4, 2]));
console.log('\n');

/*
  12. Shift Array Values
  shiftArrayValsLeft(arr)
  Given an array, move all values forward
  (to the left) by one index, dropping the
  first value and leaving a 0 (zero) value
  at the end of the array.
*/

/**
 * The function `shiftArrayValsLeft` shifts all elements
 * in an array to the left by one position and sets the
 * last element to 0.
 * @param {number[]} arr
 * @returns {number[]}
 */
function shiftArrayValsLeft(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
}

console.log('12. shiftArrayValsLeft');
console.log(shiftArrayValsLeft([1, 2, 3, 4, 5]));
console.log('\n');

/*
  13. Swap String For Array Negative Values
  swapStringForArrayNegativeVals(arr)
  Given an array of numbers, replace any
  negative values with the string 'Dojo'.
*/

/**
 * The function swapStringForArrayNegativeVals takes
 * an array as input and replaces any negative values
 * in the array with 'Dojo.
 * @param {number[]} arr
 * @returns {number[]}
 */
function swapStringForArrayNegativeVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}

console.log('13. swapStringForArrayNegativeVals');
console.log(swapStringForArrayNegativeVals([-1, 2, -3, 4]));
console.log('\n');
