# HTML Semantic Elements

Objectives

	•	Understand the importance of semantic HTML
	•	Identify and use common semantic HTML elements

## Introduction

Semantic elements like `<header>`, `<nav>`, or `<main>` are HTML elements  that clearly describe their meaning in a human and machine-readable way.

>[Merriam-Webster defines semantic](https://www.merriam-webster.com/dictionary/semantic) as "of or relating to meaning in language"

The operative word in this definition is "meaning".

When we use semantic HTML elements in our code, we help search engines, screen readers and other user devices understand the context of our content.

In other words, semantic elements define the *meaning* of the content they contain, and the roles and importance of different parts of the page.

## Comparison
Let's compare semantic elements with non-semantic elements.

| Semantic                                   | Non-Semantic                       |
| ------------------------------------------ | ---------------------------------- |
| `<header>...</header>`                     | `<div id="header">...</div>`       |
| `<section id="testimonials">...</section>` | `<div id="testimonials">...</div>` |
| `<h1>About Us</h1>`                        | `<span>About Us</span>`            |

**Benefits of Semantic Elements**
- Improved accessibility
  - Semantic elements provide better accessibility for screen readers and other assistive technologies.
  - For example, a screen reader can announce that a `<nav>` element contains navigation links, helping visually impaired users navigate the page more easily.
- Easier readability
  - Semantic HTML makes the code more readable and easier to maintain.
  - Other developers (or even the original developer returning to the code later) can understand the structure and purpose of the code more quickly.
- Enhanced SEO (Search Engine Optimization)
  - Search engines like Google use semantic elements to better understand the content and structure of a webpage.
  - This can improve the page’s search ranking, making it easier for users to find relevant information.

## Common Semantic Elements

- `<header>`
  - Represents introductory content or a set of navigational links.
- `<nav>`
  - Contains the navigation menu.
- `<main>`
  - Represents the dominant content of the `<body>`.
- `<section>`
  - Defines a section in a document.
- `<article>`
  - Represents a self-contained composition in a document. These elements should contain heading elements.
- `<aside>`
  - Represents content tangentially related to the content around it.
- `<footer>`
  - Represents the footer of a document or section.
