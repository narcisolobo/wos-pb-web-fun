# Objects Review

During Programming Basics, we explored the `object` reference type in JavaScript.

## IRL Analogy
We learned that JavaScript objects can help us define in code the objects we have in real life. In real life, objects have characteristics and things they can do.

A guitar has a brand, a model, a color, a number of strings, etc. These are the characteristics of a guitar. In JavaScript, we call them the *properties* of an object.

A guitar can also make music, it can be tuned, you can increase/decrease the volume. These are the things a guitar can do. In JavaScript, we call these the *methods* of an object.

Therefore, a JavaScript object is a collection of properties and methods.

## Creating an Object
As a refresher, let's go over how we can create an object in JavaScript using "object literal notation".

```js
const guitar = {
  color: 'blue',
  brand: 'Fender',
  model: 'Stratocaster',
  numberOfStrings: 6,
  jam: function () {
    console.log("We're jammin!");
  },
};
```

The above object has an identifier of `guitar`. We assign this identifier a value with curly braces at the bookends.

Inside the curly braces, we have a series of "key-value" pairs. Each pair is separated by a comma.

This `guitar` object happens to have four properties (`color`, `brand`, `model`, `numberOfStrings`) and one method (`jam`). Notice how we define both properties and methods using key-value pairs.

## Getting and Setting Values in an Object
```js
// getting values using bracket notation
console.log(guitar['model']);

// setting values using bracket notation
guitar['color'] = 'yellow';
console.log(guitar);

// getting values using dot notation
console.log(guitar.model);

// setting values using dot notation
guitar.color = 'red';

// add new values using bracket notation
guitar['isNew'] = false;
console.log(guitar);

// add new values using dot notation
guitar.owner = 'me';
console.log(guitar);

// calling the jam method
guitar.jam(); // logs "We're jammin!"
```