/* 
  Nested Data Structures
*/

// an array of objects
const muppets = [
  { firstName: 'Kermit', lastName: 'the Frog' },
  { firstName: 'Miss', lastName: 'Piggy' },
  { firstName: 'Fozzie', lastName: 'Bear' },
  { firstName: 'Rowlf', lastName: 'the Dog' },
];

// Add Gonzo the Great to the array.
muppets.push({ firstName: 'Gonzo', lastName: 'the Great' });
console.log(muppets);

// Print "Piggy".
console.log(muppets[1].lastName); // dot notation
console.log(muppets[1]['lastName']); // bracket notation

// Change "Kermit" to "Kermie".
muppets[0]['firstName'] = 'kermie';
console.log(muppets);

// an object of arrays
const instrumentBrands = {
  electricGuitars: ['Les Paul', 'Fender', 'PRS'],
  banjos: ['Deering', 'Gold Tone'],
  ukuleles: ['Kamaka', 'Koaloha', 'Kanilea'],
};

// Add another key to the object - "acoustic_guitars".

// Add "Martin" and "Taylor" to the acoustic_guitars array.

// Print "Deering".

// Change "PRS" to "Paul Reed Smith".

// Loop through the muppets array, printing each key of each nested object

// Loop through the muppets array, printing each value of each nested object

// Loop through the muppets array, printing each key and value of each nested object

// Loop through the instrumentBrands object, printing the length of each nested array

// Loop through the instrumentBrands object, printing each value of each nested array

// Loop through the instrumentBrands object, printing the length of each nested array, each key, and each value

/*
  Expected output:
  3 electric_guitars
  Les Paul
  Fender
  Paul Reed Smith

  2 banjos
  Deering
  Gold Tone

  3 ukuleles
  Kamaka
  Koaloha
  Kanilea

  2 acoustic_guitars
  Martin
  Taylor
*/
