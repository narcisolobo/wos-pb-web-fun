// Swapping variable values
let basket1 = 'apples';
let basket2 = 'oranges';

let tempBasket = basket1;
basket1 = basket2;
basket2 = tempBasket;

console.log(basket1, basket2);

// JSDoc

/**
 * This function returns true if the given
 * word is a palindrome, and false if it is
 * not.
 * @param {string} word
 */
function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

const test1 = 'racecar';
const test2 = 'kermit';

console.log(isPalindrome(test1));
console.log(isPalindrome(test2));

/**
 * Define a function that, given an array,
 * reverses the order of the items in that array
 * in-place, returning that same array.
 * @param {any[]} arr
 */
function reverseArr(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

const nums = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c', 'd', 'e'];

console.log(reverseArr(nums));
console.log(reverseArr(letters));
