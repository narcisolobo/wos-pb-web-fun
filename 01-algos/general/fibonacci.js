/* 
  Fibonacci
  Implement the Fibonacci function, a famous mathematical
  equation that generates a numerical sequence such that
  each number is the sum of the previous two.
  
  The Fibonacci numbers at index 0 and 1, coincidentally,
  have values of 0 and 1. Your function should accept an
  argument `idx` and return the Fibonacci number at that
  index.

  Examples:
  ​fibonacci(2)​ = 1
  fibonacci(3)​ = 2
  ​fibonacci(4)​ = 3
  ​fibonacci(5)​ = 5

  https://www.mathsisfun.com/numbers/fibonacci-sequence.html
  https://www.mathsisfun.com/numbers/golden-ratio.html

  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
   0  1  2  3  4  5  6  7   8   9
*/

// iterative solution
function fib(idx) {
  const arr = [0, 1];
  for (let i = 2; i <= idx; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[idx];
}
console.log(fib(8));

// recursive solution
// 3 ingredients for a recursive function
// 1. base case (escape clause)
// 2. progression towards the base case
// 3. recursive call

function rFib(idx) {
  if (idx < 2) return idx;
  return rFib(idx - 1) + rFib(idx - 2);
}

console.log(rFib(8));
