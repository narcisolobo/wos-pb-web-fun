const { isPalindrome } = require('./is-palindrome');

/* 
  Longest Palindromic Substring

  For this challenge, we will look not only at the
  entire string provided, but also at the substrings within it.
  Return the longest palindromic substring. 

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const str1 = 'what up, daddy-o?';
const expected1 = 'dad';

const str2 = 'uh, not much';
const expected2 = 'u';

const str3 = 'Yikes! my favorite racecar erupted!';
const expected3 = 'e racecar e';

const str4 = 'a1001x20002y5677765z';
const expected4 = '5677765';

const str5 = 'a1001x20002y567765z';
const expected5 = '567765';

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} inputStr
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(inputStr) {
  // your code here
  // nested loops
}

const result1 = longestPalindromicSubstring(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = longestPalindromicSubstring(str2);
console.log(`${result2} should equal ${expected2}`);

const result3 = longestPalindromicSubstring(str3);
console.log(`${result3} should equal ${expected3}`);

const result4 = longestPalindromicSubstring(str4);
console.log(`${result4} should equal ${expected4}`);

const result5 = longestPalindromicSubstring(str5);
console.log(`${result5} should equal ${expected5}`);
