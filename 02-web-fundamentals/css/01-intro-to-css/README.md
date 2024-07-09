# Cascading Styles Sheets (CSS)
CSS defines the style of our website. We are in the interior decorating phase of building our house.

With CSS, we can:
1. Style the elements on our page
2. Arrange our layouts
3. Make our page responsive
4. Animate elements

CSS stands for Cascading Style Sheets. It's what we call a "rule-based" language. We will define these "rules" in our CSS files that instruct the browser how to display specific properties of the elements on our page. 

In this course, we will mostly be working with one CSS file and one HTML file, but one CSS file can control multiple HTML files. We can also split our CSS code into several CSS files if we like, each controlling a certain category of properties.

## Parts of a CSS Rule
Here is an example of a simple CSS rule:

```css
h2 {
  color: rebeccapurple;
  font-size: 2rem;
}
```

There are three distinct parts on display here:
1. The *selector* tells the browser which element or elements we're styling (`h2`)
2. The *properties* of the element(s) we're configuring (`color`, `font-size`)
3. The *values* we're setting those properties to (`rebeccapurple`, `2rem`)

Following the selector, we have curly braces that enclose the property settings. The properties and values are separated by a colon. Finally, each setting should end with a semicolon.

## Varieties of CSS Selectors
There are many different varieties of selectors in CSS that allow us to get as granular as we like in selecting specific elements. Here are a few:

```css
/* Type selector */
h2 {
  color: rebeccapurple;
  font-size: 2rem;
}

/* class selector */
.container {
  width: 70%;
  margin: 0 auto;
}

/* ID selector */
#hero {
  padding: 100px 0;
}
```

### The Type Selector
The first example shows a specific variety of selector, the type selector. The type selector selects *all* of the specified elements of that type on our page.

```css
/* css file */
h2 {
  color: rebeccapurple;
  font-size: 2rem;
}
```
This rule styles all `h2` elements on the page to be the color `rebeccapurple` and to be two times larger than the root font size.

```html
<!-- html file -->
<h2>About Me</h2>
<p>Jinja is a six-month-old Sheepadoodle puppy.</p>
<h2>Tricks</h2>
<p>Jinja knows lots of tricks, like "high-five" and "spin"!</p>
```

### The Class Selector
The class selector is also able to select multiple elements on the page, but the elements do not have to be the same type. Class selectors are preceded by a dot (.) and are a type of HTML attribute we can add to any element.

```css
/* css file */
.container {
  width: 70%;
  margin: 0 auto;
}
```
This rule styles each element with the class of "container" to be 70% of the width of its parent and horizontally centered on the page. The `margin` property is a shorthand property. If we supply two values for this property, the first value defines the top and bottom margins, and the second value defines the left and right margins.

```html
<!-- html file -->
<header class="container">
  <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
  </ul>
</header>
<main class="container">
  <h2>Welcome!</h2>
</main>
```

### The ID Selector
The ID selector selects one and only one element on the page, as ID's should be unique. We cannot have more than one of the same ID on any one HTML page. ID selectors are preceded by a number sign (#) and are a type of HTML attribute we can add to any element.

```css
/* css file */
#hero {
  padding: 100px 0;
}
```

This rule styles the element with the ID of "hero" to have 100 pixels of padding on the top and bottom. The `padding` property is another shorthand property. We are setting the element's top and bottom padding to 100 pixels, and the left and right to zero.

```html
<!-- html file -->
<div id="hero">
  <img src="./images/hero-image.jpg">
</div>
```

#### A Note About ID Selectors
ID selectors should be used sparingly, if at all. We will mostly use ID selectors in our JavaScript. They have a very high specificity that is difficult to override. We should use class selectors as our main type of selector in this class.