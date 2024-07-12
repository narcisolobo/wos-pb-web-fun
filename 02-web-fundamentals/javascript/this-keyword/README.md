# The `this` Keyword

Imagine you’re at a big party with lots of people. Each person has their own name tag. When you want to talk about yourself, you point to your name tag and say, “This is me.”

In JavaScript, the `this` keyword is like a special name tag that points to the person or object it’s talking about.

Here’s a simple example to show how it works:

```js
const person = {
  name: 'Narciso',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello(); // Hello, my name is Narciso
```

In this example, this is like Narciso’s name tag. When Narciso says, “Hello, my name is,” he points to his name tag to know what his name is. So `this.name` is the same as `person.name`.

But the tricky part is, `this` can change depending on how and where you use it. It’s like if you had different name tags for different occasions or if someone borrowed your name tag.

Here’s another example to show how `this` can change:

```js

const person = {
  name: 'Narciso',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const anotherPerson = {
  name: 'Keimha',
};

anotherPerson.sayHello = person.sayHello;
anotherPerson.sayHello(); // Hello, my name is Keimha
```

Here, we gave Narciso’s sayHello function to Keimha. Now, when Keimha uses it, this points to Keimha’s name tag instead of Narciso’s.

So, this is like a magical name tag that knows who it’s talking about, but you have to pay attention to where you are and who is using it.

## "Free" Function Parameter
Notice we use the `this` keyword inside the `person` object's `sayHello` method as though it was a parameter, yet we did not define any parameters for the function.

We got it for free!

