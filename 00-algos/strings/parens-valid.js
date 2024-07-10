/*
  Parens (Parentheses) Valid
  Create a function that, given an input string,
  returns a boolean whether parentheses in that
  string are valid.
  
  Given input ​"y(3(p)p(3)r)s"​, return true.
  Given ​"n(0(p)3"​, return ​false​.
  Given ​"n)0(t(0)k"​, return ​false​.
*/

const str1 = 'y(3(p)p(3)r)s';
const expected1 = true;

const str2 = 'n(0(p)3';
const expected2 = false;

const str3 = 'n)0(t(0)k';
const expected3 = false;

/**
 * The function parensValid returns true if the
 * parentheses in the string are valid.
 *
 * @param {string} inputStr the input string to validate.
 * @returns {boolean}
 */
function parensValid(inputStr) {
  let parensCount = 0;

  for (const char of inputStr) {
    if (char === ')') {
      if (parensCount === 0) {
        return false;
      }
      parensCount--;
    } else if (char === '(') {
      parensCount++;
    }
  }

  return parensCount === 0;
}

// tests
const result1 = parensValid(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = parensValid(str2);
console.log(`${result2} should equal ${expected2}`);

const result3 = parensValid(str3);
console.log(`${result3} should equal ${expected3}`);
