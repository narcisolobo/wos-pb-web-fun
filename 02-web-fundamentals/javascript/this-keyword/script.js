// What is the `this` keyword in JavaScript?

const person = {
  name: 'Narciso',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

person.sayHello();

// the value of `this` can change depending on
// how and where you use it

const anotherPerson = {
  name: 'Keimha',
};

anotherPerson.sayHello = person.sayHello;

console.log(anotherPerson.sayHello);

anotherPerson.sayHello();
