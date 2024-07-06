/* 
  Functions
  Functions are blocks of reusable code that accomplishes
  a task.
*/

// Rules of variable and function names:
// 1. Cannot start with a number
// 2. Cannot contain a hyphen
// 3. Cannot use a reserved keyword

// Guideline
// camelCase should be used

// Syntax
// Function Declaration
function greeting() {
  // code block
  console.log('Hello!');
}

// Function invocation (calling the function)
// call the function by name
// add parentheses to invoke it
greeting();

// Parameters and Arguments
// If the function requires input, we define
// "parameters" to accept the input
function greetingWithName(name) {
  console.log(`Hello ${name}!`);
}

// arguments
// greetingWithName('Narciso');

// You will constantly mix up those terms, just like I do!

// We can have as many parameters as we like.
function greetingWithNameAndTime(name, timeOfDay) {
  console.log(`Good ${timeOfDay}, ${name}!`);
}

greetingWithNameAndTime('Ciso', 'morning');

// Return statement
// function can optionally return a value
// if a function does not return a value
// it implicitly returns undefined
function doesNothing() {
  // this returns undefined
}

// console.log(doesNothing());

// Implementing return statements
function greetingWithNameAndTimeWithReturn(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

let ronHeemGreeting = greetingWithNameAndTimeWithReturn('Ronheem', 'evening');

// The value of a function is whatever that function returns

// The return value can "escape the function"

console.log(ronHeemGreeting);

// Default parameters
function greetingWithDefaults(name = 'friend', timeOfDay = 'day') {
  return `Good ${timeOfDay}, ${name}!`;
}

let greetingResult = greetingWithDefaults();
let greetingResult2 = greetingWithDefaults('Mauro');
let greetingResult3 = greetingWithDefaults('Irina', 'afternoon');
console.log(greetingResult);
console.log(greetingResult2);
console.log(greetingResult3);
