/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with built-ins like .split first if you need to, then try to do it without
*/

const str1 = 'object oriented programming';
const expected1 = 'OOP';

// The 4 pillars of OOP
const str2 = 'abstraction polymorphism inheritance encapsulation';
const expected2 = 'APIE';

const str3 =
  'parentheses exponents multiplication division addition subtraction';
const expected3 = 'PEMDAS';

// Bonus: ignore extra spaces
const str4 = '  global   information tracker    ';
const expected4 = 'GIT';

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(wordsStr) {
  // your code here
}

// Tests
const result1 = acronymize(str1);
console.log(result1, 'should equal', expected1);

const result2 = acronymize(str2);
console.log(result2, 'should equal', expected2);

const result3 = acronymize(str3);
console.log(result3, 'should equal', expected3);

const result4 = acronymize(str4);
console.log(result4, 'should equal', expected4);
