// Higher Order Function
// A higher order function is a function that accepts
// a function as input (callback functions)

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

// higher order function
function ourFilter(nums, callback) {
  const filteredNums = [];
  for (const num of nums) {
    if (callback(num)) {
      filteredNums.push(num);
    }
  }
  return filteredNums;
}

const evenNums = ourFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven);
console.log(`even numbers: ${evenNums}`);
const oddNums = ourFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isOdd);
console.log(`odd numbers: ${oddNums}`);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// implicit return
const filteredEvenNums = nums.filter((num) => isEven(num));

console.log(`filtered even nums: ${filteredEvenNums}`);
