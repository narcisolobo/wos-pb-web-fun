/* 
  Arrays
  Arrays are a reference data type
  with which we can store a collection
  of values.
*/

// create arrays
// array literal notation
const colors = ['red', 'orange', 'purple', 'blue'];

// array constructor method
const colors2 = Array('red', 'orange', 'purple', 'blue');

console.log(colors);
console.log(colors2);

console.log(colors === colors2); // false

console.log([] == 0); // javascript is loosy-goosy

// get and set values in array

// getting values in an array
console.log(colors[2]); // purple
console.log(colors[5]); // undefined

// setting values in an array
colors[4] = 'green';
colors.push('yellow');

console.log(colors);

// colors[15] = 'brown';
// console.log(colors);

// useful array methods
// pop
const color = colors.pop();
console.log(colors);
console.log(`the color ${color} was popped`);

// reverse
colors.reverse();
console.log(colors);

// sort
colors.sort();
console.log(colors);

// research how to sort an array of numbers
console.log([1, 12, 5, 2, 9, 22].sort());
