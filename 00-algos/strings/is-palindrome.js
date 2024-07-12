/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = 'a x a';
const expected1 = true;

const str2 = 'racecar';
const expected2 = true;

const str3 = 'Dud';
const expected3 = false;

const str4 = 'oho!';
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} inputStr
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(inputStr) {
  // your code here
}

const result1 = isPalindrome(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = isPalindrome(str2);
console.log(`${result2} should equal ${expected2}`);

const result3 = isPalindrome(str3);
console.log(`${result3} should equal ${expected3}`);

const result4 = isPalindrome(str4);
console.log(`${result4} should equal ${expected4}`);

module.exports = { isPalindrome };
