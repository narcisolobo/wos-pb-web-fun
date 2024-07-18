/* 
  Given an integer to represent how much change is needed,
  calculate the fewest number of coins needed to create
  that change, using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

const cents5 = 41;
const expected5 = { quarter: 1, dime: 1, nickel: 1, penny: 1 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
  const coins = {};

  if (cents >= 25) {
    const quarters = Math.floor(cents / 25);
    coins.quarter = quarters;
    cents -= quarters * 25;
  }

  if (cents >= 10) {
    const dimes = Math.floor(cents / 10);
    coins.dime = dimes;
    cents -= dimes * 10;
  }

  if (cents >= 5) {
    const nickels = Math.floor(cents / 5);
    coins.nickel = nickels;
    cents -= nickels * 5;
  }

  if (cents >= 1) {
    coins.penny = cents;
  }

  return coins;
}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));
console.log(fewestCoinChange(cents5));
