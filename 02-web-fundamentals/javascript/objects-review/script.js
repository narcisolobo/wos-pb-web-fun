// Objects Review

// Object Literal Notation

const guitar = {
  color: 'red',
  brand: 'Fender',
  model: 'Stratocaster',
  numberOfStrings: 6,
  jam: function () {
    console.log("We're jammin'");
  },
};

// getting and setting values in a js object:

// getting values using bracket notation
console.log(guitar['model']);

// setting values using bracket notation
guitar['color'] = 'blue';
console.log(guitar['color']);

// getting values using dot notation
console.log(guitar.numberOfStrings);

// setting values using dot notation
guitar.numberOfStrings = 7;
console.log(guitar.numberOfStrings);

// adding values using bracket notation
guitar['isUsed'] = true;
console.log(guitar.isUsed);

// adding values using dot notation
guitar.tuning = function () {
  console.log('Tuning the guitar...');
};

guitar.tuning();
