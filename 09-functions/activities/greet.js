// common js import syntax
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Write a JavaScript program that greets a user
  by name.

  The program should prompt the user for their
  name, then print "Hello, <username>!" to the
  console.

  Ex. output:
  What's your name? Narciso
  Hello, Narciso!
*/

rl.question("What's your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
