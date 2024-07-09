# The CSS Display Property
Understanding the CSS display Property with regards to Inline, Inline-Block, and Block Elements

## Introduction
The display property is a fundamental aspect of CSS that defines how an HTML element should be rendered on the web page.

We'll focus on three main values of the display property: `inline`, `inline-block`, and `block`.

## Inline Elements
Inline elements do not start on a new line; they flow along with the content.

Examples of default inline elements include `<span>`, `<a>`, `<strong>`, and `<em>`.

The `display: inline;` property is commonly used to make elements inline.

Inline elements only take up as much width as necessary, and `height` and `width` properties do not apply.

## Block Elements
Block elements always start on a new line and take up the full width available.

Examples of block elements include `<div>`, `<p>`, `<h1>`, and `<ul>`.

The `display: block;` property is used to make elements block-level.

Block elements can have `width`, `height`, `padding`, `margin`, and can contain other `block` and `inline` elements.

## Inline-Block Elements
Inline-block elements combine features of both inline and block elements.

They flow along with the content, like inline elements, but can have `height`, `width`, `margin`, `padding`, and can contain other `block` or `inline` elements.

Examples of inline-block elements include elements with `display: inline-block;` such as images, buttons, and inputs.

## Use Cases
Inline elements are suitable for small parts of text or elements that should appear in a line, like anchor tags inside paragraphs (anchors are inline by default).

Block elements are ideal for larger sections, such as paragraphs or div containers, which are block by default.

Inline-block elements are useful when you want elements to flow inline but still have some block-level properties.
