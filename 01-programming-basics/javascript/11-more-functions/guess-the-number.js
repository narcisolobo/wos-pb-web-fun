const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Write a JavaScript program that simulates a guessing game.
  The program should generate a random number between 1
  and 100, and then ask the user to guess the number. If
  the user's guess is higher than the actual number, the
  program should print "Too high, try again." If the guess
  is lower, the program should print "Too low, try again."
  The game should continue until the user correctly
  guesses the number.

  Example Output:

  Guess the number (between 1 and 100): 50
  Too high, try again.
  Guess the number (between 1 and 100): 30
  Too low, try again.
  Guess the number (between 1 and 100): 40
  Too low, try again.
  Guess the number (between 1 and 100): 45
  Congratulations! You guessed the number correctly.
*/

// PSEUDOCODE (game plan)
// WHAT TO DO BEFORE WE FIGURE HOW TO DO IT

/* 
  generate a random number
  import readline, create a readline interface

  prompt user for their guess

  while loop (guess != random num)
    conditionals: if guess > random number: too high
                  else if guess < random number: too low
  
  outside loop: congratulations
*/

// modularized code
// a function should only do one thing
function generateRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

async function compareGuess(guess, randomNum) {
  if (guess > randomNum) {
    console.log('Too high, try again.');
  } else if (guess < randomNum) {
    console.log('Too low, try again.');
  }
}
// code a little, test a lot

async function promptUser() {
  let guess = await rl.question('Guess the number (between 1 and 100): ');
  console.log(guess);
  return guess;
}

async function guessTheNumber() {
  const randomNum = generateRandomNum();
  let guess = await promptUser();
  while (guess != randomNum) {
    compareGuess(guess, randomNum);
    guess = await promptUser();
  }
  rl.close();
  console.log(`Congratulations! You guessed the number. It was ${randomNum}`);
}

guessTheNumber();
