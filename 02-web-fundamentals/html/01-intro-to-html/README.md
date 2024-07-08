# Intro to HTML
Welcome to Web Fundamentals! Today, we'll dive into HTML, demystifying its structure, elements, and functionalities. By the end of this session, you'll have a solid foundation to start crafting your own web pages and understanding the language that forms the basis of virtually every website you visit.

**Importance of HTML in Web Development:**  
Hypertext Markup Language, or HTML for short, serves as the fundamental building block for creating content on the web. It provides the structure for web pages, allowing us to display text, images, links, and other elements.

Whether you're browsing a blog, shopping online, or checking social media, you're interacting with HTML in some form.

## What is HTML?
**Definition and Acronym**  
HTML, which stands for *Hypertext Markup Language*, is the standard markup language used to create and design content on the Web. As a markup language, HTML provides a set of instructions that tell a web browser how to structure and present content. It's the language that browsers understand to render text, images, links, and other multimedia elements on your screen.

HTML works in conjunction with other web technologies, such as Cascading Style Sheets (CSS) for styling and JavaScript for interactivity, forming the foundation of modern web development. Understanding HTML is like learning the grammar and syntax of the web – it allows you to communicate with browsers and present information in a structured and organized manner.

**Role in Web Development**  
The primary role of HTML is to create the structure of a web page. Think of it as the skeleton that gives shape to the content you see on websites. HTML uses a system of *tags* to define different elements, such as headings, paragraphs, images, and links.

In essence, HTML is the backbone of web development. It provides the framework upon which we build the visual and interactive aspects of a website.

## HTML Elements
**Tags and Attributes**  
HTML operates on a system of *tags*, which are enclosed within angle brackets (<>). Tags define the beginning and end of an HTML element, forming the basic building blocks of a web page. For example, `<p>` represents the beginning of a paragraph, and `</p>` indicates the end of that paragraph.

```html
<p>This is the content of the paragraph</p>
```

Some elements do not require a closing tag, like `meta` tags, `img` tags, and `input` tags. It is acceptable, but not required, to *self-close* such tags by adding a forward slash at the end of the tag.

```html
<img src="./my-image.jpg" alt="Me" />
```

Additionally, HTML elements can have *attributes*, like the `img` tag above. Attributes are used for configuration, providing extra information about the element. They are added within the opening tag and typically come in name-value pairs. For instance, the `<a>` (anchor) tag can have an `href` attribute specifying the URL to which the link leads.

```html
<a href="http://google.com">Click here to go to Google.</a>
```

**Anatomy of an HTML Tag**
1. Opening Tag: The initial part of the tag that marks the beginning of an HTML element. It consists of the tag name enclosed in angle brackets, such as `<tagname>`.

2. Content: The actual content of the HTML element, such as text, images, or other nested elements. For example, in `<p>Hello, World!</p>`, "Hello, World!" is the content of the paragraph.

3. Closing Tag: Marks the end of an HTML element. It looks similar to the opening tag but includes a forward slash before the tag name, such as `</tagname>`.

4. Attributes: Additional information used to configure an HTML element, specified within the opening tag. Attributes are written as name-value pairs, separated by an equal sign. For instance, in `<a href="http://google.com">Google</a>`, href is an attribute with the value `https://example.com`.

## HTML Document Structure
VS Code comes built-in with some great features that we can use to become more efficient developers. One such feature is called *Emmet Abbreviations*. Emmet Abbreviations allow us to write HTML code using a shorthand syntax.

A boilerplate HTML 5 document can be generated using an exclamation point (!). Create a new HTML document in VS Code, name it `index.html`.

In the newly-created document, type an exclamation point. When you see the pop-up containing a preview of HTML code, press your enter key to trigger the abbreviation and generate the boilerplate.

Let's take a look at the generated code.

1. `<!DOCTYPE html>`:

    The `<!DOCTYPE html>` declaration is the very first line of an HTML document. It informs the browser about the version of HTML being used, helping it to interpret and display the content correctly. In modern web development, the `<!DOCTYPE html>` declaration is followed by the `<html>` tag to signify the beginning of an HTML document.
2. `<html>`, `<head>`, `<title>`, `<body>` tags:
   
    1. `<html>` tag:
         - The `<html>` tag serves as the root element of an HTML document. It encapsulates the entire content, acting as the container for all other HTML elements.
    2. `<head>` tag:
         - Within the `<html>` tag, the `<head>` tag contains meta-information about the document, such as its title, character set, linked stylesheets, and other essential details that aren't directly visible on the webpage.
    3. `<title>` tag:
         - Nested within the `<head>` tag, the `<title>` tag specifies the title of the HTML document. The text within this tag is displayed in the browser's title bar or tab, providing a concise description of the page's content.
    4. `<body>` tag:
         - Following the `<head>` tag, the `<body>` tag contains the actual content of the HTML document. This is where you place text, images, links, and other elements that users will see and interact with on the webpage.
3. Metadata and Document Information:

    The `<meta>` tag within the `<head>` section is used to provide metadata about the HTML document. Commonly, it includes information like the character set, viewport settings for responsiveness, and other details that assist browsers in rendering the content appropriately.

    Understanding the structure of an HTML document is crucial for creating well-formed and standards-compliant web pages. The hierarchy established by these tags ensures that browsers interpret the content correctly, presenting a seamless and organized experience for users. As we continue, we'll explore how to leverage this structure to build engaging and functional web pages.

## Important HTML Tags

`*` -- no closing tag

1. Text-Related Tags:
   1. `h1` - `h6`: Headings
   2. `p`: Paragraph
   3. `strong`: Important text
   4. `em`: Emphasized text
   5. `br*`: Line break
2. Lists
   1. `ol`: Ordered list container
   2. `ul`: Unordered list container
   3. `li`: List item
3. Links and Buttons
   1. `a`: Hyperlink (aka. anchor tag, requires `href` attribute)
   2. `button`: Button tag
      1. Types -- `button`, `submit`, `reset`
4. Images
   1. `img*`: Image (requires `src` and `alt` attributes)
5. Tables
   1. `table`: Table container
   2. `thead`: Table head
   3. `tbody`: Table body
   4. `tr`: Table row
   5. `th`: Table heading
   6. `td`: Table data (table cell)
6. Forms
   1. `form`: Form container
   2. `label`: Form control label
   3. `input*`: Form control
      1. Types of form controls -- `text`, `number`, `date`, `password`, `radio`, `checkbox`
   4. `select`: Dropdown menu container
   5. `option`: Dropdown menu choice
   6. `textarea`: Long text form control