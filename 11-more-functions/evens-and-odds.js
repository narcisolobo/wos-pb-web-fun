/* 
  Evens and Odds - Create a function that accepts an array.
  Every time that array has three odd values in a row, print
  "That's odd!".  Every time the array has three evens in a
  row, print "Even more so!".

  [1, 3, 5, 7, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2] = two three in a rows
*/

/**
 *
 * @param {number[]} nums
 */
function evensAndOdds(nums) {
  let consecutiveEvenCount = 0;
  let consecutiveOddCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      consecutiveEvenCount++;
      if (consecutiveEvenCount >= 3) {
        console.log('Even more so!');
      }
      // broken the odd streak
      consecutiveOddCount = 0;
    } else {
      consecutiveOddCount++;
      if (consecutiveOddCount >= 3) {
        console.log("That's odd!");
      }
      // broken the even streak
      consecutiveEvenCount = 0;
    }
  }
}

const nums = [1, 3, 5, 7, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2];
evensAndOdds(nums);
