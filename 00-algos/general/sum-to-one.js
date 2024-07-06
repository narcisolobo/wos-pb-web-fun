/* 
  Sum To One Digit
  Implement a function ​sumToOne(num)​ that, given
  a number, sums that number’s digits repeatedly
  until the sum is only one digit. Return that
  final one digit result.

  Ex.
  sumToOne(5) // 5
  sumToOne(20) // 2
  sumToOne(849) // 3
*/

/**
 * This function takes in an integer as input and
 * sums that number’s digits repeatedly until the
 * sum is only one digit.
 * @param {number} num
 * @returns {number}
 */
function sumToOne(num) {
  if (String(num).length === 1) {
    return num;
  }

  const nums = String(num)
    .split('')
    .map((char) => Number(char));

  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sumToOne(sum);
}

console.log(sumToOne(5));
console.log(sumToOne(15));
console.log(sumToOne(20));
console.log(sumToOne(849));
