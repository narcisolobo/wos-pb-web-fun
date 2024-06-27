/* 
  PREDICT THE OUTPUT
*/

// 1:
function greet(name) {
  return 'Hello, ' + name + '!';
}

console.log(greet('Alice')); // Hello, Alice!
console.log(greet('Bob')); // Hello, Bob!

// 2:
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(10, 20)); // 30
console.log(add(-1, 1)); // 0

// 3:
var x = 10;

function multiplyByTwo(num) {
  var x = num * 2;
  return x;
}

console.log(multiplyByTwo(5)); // 10
console.log(x); // 10

// 4:
let y = 20;

if (true) {
  let y = 30;
  console.log(y);
}

console.log(y); // 30 20

// 5:
const z = 40;

if (true) {
  const z = 50;
  console.log(z);
}

console.log(z); // 40

// 6:
var a = 1;
let b = 2;
const c = 3;

function testScope() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

testScope(); // 10 20 30

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 7:
console.log(double(4)); // 8

// hoisting
function double(num) {
  return num * 2;
}

console.log(double(5)); // 10

// 8:
function logMessage(message) {
  console.log(message);
}

console.log(logMessage('Hello, World!')); // Hello, World! undefined
