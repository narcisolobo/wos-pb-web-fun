# Manipulating the DOM in JavaScript, Part II

**Objectives:**
- Understand how to use `querySelector` to select elements in the DOM
- How to manipulate these elements using JavaScript functions triggered by HTML event attributes

Today, we will be taking a deeper dive into manipulating the DOM (Document Object Model) using JavaScript. As we know, DOM manipulation allows us to dynamically change the content, structure, and style of a web page. This is essential for creating interactive and dynamic web applications.

## DOM Refresher
The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## Selecting Elements with `querySelector`
To manipulate elements, we first need to select them. The `querySelector` method allows us to select the first element that matches a specified CSS selector. Here’s the syntax:

```js
const element = document.querySelector('CSS_SELECTOR');
```
> CSS_SELECTOR can be any valid CSS selector (e.g., '#id', '.class', 'tag').

**Example:**
Let's select a paragraph element with the class `intro`:

```html
<p class="intro">Welcome to DOM manipulation!</p>
```
```js
const introParagraph = document.querySelector('.intro');
console.log(introParagraph.textContent);  // Outputs: Welcome to DOM manipulation!
```

## Changing Element Content and Style:
Once an element is selected, we can change its content or style.

**Example:**
Changing the text content of an element:

```js
introParagraph.textContent = 'Hello, DOM!';
```

Changing the style of an element:

```js
introParagraph.style.color = 'blue';
```

## Using Event Listeners in HTML:
Event listeners allow us to run JavaScript code when certain events occur on the page (e.g., clicks, mouseovers, input changes).

We can add event listeners directly in the HTML using *event attributes*, and then call JavaScript functions when those events occur.

**Example:**

```html
<button onclick="changeText()">Click me!</button>
<p id="text">This text will change.</p>
```

```js
function changeText() {
  const textElement = document.querySelector('#text');
  textElement.textContent = 'The text has been changed!';
}
```

## Passing `this` from HTML:
When an event occurs, we can pass the event's context (`this`) to a JavaScript function. This is useful when we need to know which element triggered the event.

**Example:**

```html
<button onclick="highlightButton(this)">Highlight me!</button>
```

```js
function highlightButton(element) {
  element.style.backgroundColor = 'yellow';
}
```

In this example, the `highlightButton` function receives the button element that triggered the event and changes its background color to yellow.

## Practical Example:
Let's put it all together in a practical example. We'll create a simple form that changes the text of a paragraph when a button is clicked, and highlights the button that was clicked.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Manipulation</title>
</head>
<body>
  <h1>DOM Manipulation Example</h1>
  <p id="message">This message will be changed.</p>
  <button onclick="updateMessage()">Change Message</button>
  <button onclick="highlightButton(this)">Highlight me!</button>

  <script src="script.js"></script>
</body>
</html>
```

```js
function updateMessage() {
  const messageElement = document.querySelector('#message');
  messageElement.textContent = 'The message has been updated!';
}

function highlightButton(element) {
  element.style.backgroundColor = 'yellow';
}
```

## Conclusion:
Today, we've learned how to manipulate the DOM using `querySelector` to select elements and how to use HTML event attributes to call JavaScript functions. We also saw how to pass `this` to functions for context. 

## Rule of Thumb:
If the element with the listener is also the element you're manipulating, use `this`. If it is not, use `querySelector`.