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

// Add another key to the object - "acousticGuitars"
// and make its value an empty array.
instrumentBrands.acousticGuitars = [];
console.log(instrumentBrands);

// Add "Martin" and "Taylor" to the acousticGuitars array.
instrumentBrands.acousticGuitars.push('Martin', 'Taylor');
console.log(instrumentBrands);

// Print "Deering".
console.log(instrumentBrands.banjos[0]);

// Change "PRS" to "Paul Reed Smith".
instrumentBrands.electricGuitars[2] = 'Paul Reed Smith';
console.log(instrumentBrands);

// Loop through the muppets array, printing each key of each nested object
// in gives us the key
// of gives us the value
for (let muppet of muppets) {
  for (let key in muppet) {
    console.log(key);
  }
}

// Loop through the muppets array, printing each value of each nested object
for (let muppet of muppets) {
  for (let key in muppet) {
    console.log(muppet[key]);
  }
}

// Loop through the muppets array, printing each key and value of each nested object
for (let muppet of muppets) {
  let output = '';
  for (let key in muppet) {
    output += `${key} - ${muppet[key]}, `;
  }

  console.log(output.slice(0, -2));
}

/* 
  Expected output:
  firstName - Kermie, lastName - the Frog
  firstName - Miss, lastName - Piggy
  firstName - Fozzie, lastName - Bear
  firstName - Rowlf, lastName - the Dog
  firstName - Gonzo, lastName - the Great
*/

// 1. Loop through the instrumentBrands object, printing the length of each nested array

// 2. Loop through the instrumentBrands object, printing each value of each nested array

// 3. Loop through the instrumentBrands object, printing the length of each nested array, each key, and each value

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
