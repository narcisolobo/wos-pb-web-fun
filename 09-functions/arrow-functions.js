/* 
  Arrow Functions

  ES6 EcmaScript6 2015 - Changed the game
  ES6 changed the way we all write JavaScript
  
  "Syntactic Sugar"

  let, const, arrow functions, etc.
  https://www.w3schools.com/js/js_es6.asp
*/

// Function declaration
function greet() {
  console.log('Hello!');
}

greet();

/*
  In JavaScript functions are "first-class citizens."
  That means that we can do anything with functions that
  we can do with other objects.

  - pass a function as an argument to another function
  - return a function from another function
  - assign a function as the value of a variable
*/

// Function expression
const greetExpression = function () {
  console.log('Hello!');
};

greetExpression();

// Arrow functions
const greetArrow = () => {
  console.log('Hello!');
};

greetArrow();

// omit curly braces if function body is only one line
const greetOneLine = () => console.log('Hello!');

greetOneLine();

// parameters and arrow functions
const greetByName = (name) => console.log(`Hello, ${name}!`);

greetByName('Mya');

// if you only have one parameter, then you can omit
// the parentheses

// prettier-ignore
const greetByName2 = name => console.log(`Hello, ${name}!`);

greetByName2('LaNasha');

// if you have more than one parameter, parentheses are required
const greetTwoParams = (name, timeOfDay) =>
  console.log(`Good ${timeOfDay}, ${name}!`);

greetTwoParams('Max', 'morning');

// if there are more than one line in the function body,
// curly braces are required

/**
 * The function `printArrayVals` takes an array as input
 * and prints each value in the array to the console.
 * @param {Array<any>} arr - An array that contains values
 * to be printed.
 */
const printArrayVals = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printArrayVals([1, 2, 3]);

// if your function body is one line
// you can omit the return keyword
const add = (num1, num2) => num1 + num2;

const result = add(2, 3);
console.log(result);

// If the function body has more than one line
// then the return keyword is required.
const add2 = (num1, num2) => {
  const result = num1 + num2;
  return result;
};
