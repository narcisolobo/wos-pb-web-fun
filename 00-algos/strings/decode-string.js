/* 
  String Decode  
*/

const str1 = 'a3b2c1d3';
const expected1 = 'aaabbcddd';

const str2 = 'a3b2c12d10';
const expected2 = 'aaabbccccccccccccdddddddddd';

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
  let result = '';
  let i = 0;

  while (i < str.length) {
    let char = str[i];
    i++;

    let numStr = '';

    // while we're inside the string
    // and the current char is a number
    while (i < str.length && !isNaN(str[i])) {
      numStr += str[i];
      i++;
    }

    let num = Number(numStr);
    result += char.repeat(num);
  }

  return result;
}

const result1 = decodeStr(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = decodeStr(str2);
console.log(`${result2} should equal ${expected2}`);
