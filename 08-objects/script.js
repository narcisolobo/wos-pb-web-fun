/* 
  Objects
  Objects in JavaScript are like object IRL.
  IRL, objects have characteristics and things
  that they can do.
*/

/* 
  IRL guitar
  characteristics = color, brand, model, number of strings
  things that it can do = jam, smash, strum, woo
*/

// In JavaScript, we call characteristics "properties"
// and we call things that an object can do "methods"

// A method is just a function that belongs to an object.

// creating objects
// object literal syntax
// key-value pairs

const guitar = {
  color: 'blue',
  brand: 'Fender',
  model: 'Stratocaster',
  numberOfStrings: 6,
};

// object constructor
const guitar2 = Object({
  color: 'green',
  brand: 'Les Paul',
  make: 'Standard',
  numberOfStrings: 6,
});

console.log(guitar);
console.log(guitar2);

const guitar3 = {
  color: 'blue',
  brand: 'Fender',
  model: 'Stratocaster',
  numberOfStrings: 6,
};

console.log(guitar == guitar3); // false

// getting and setting values in an object

// bracket notation the key name must be a string
// getting
console.log(guitar['model']);

// setting
guitar['color'] = 'yellow';
console.log(guitar);

// dot notation

// getting
console.log(guitar.model);

// setting
guitar.color = 'red';
console.log(guitar);

// adding key-value pairs to an object
// use bracket or dot notation

guitar['isNew'] = false;
console.log(guitar);

guitar.owner = 'me';
console.log(guitar);

// bracket notation use case
const keyName = 'brand';
console.log(guitar[keyName]);
