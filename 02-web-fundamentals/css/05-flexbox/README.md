# Understanding CSS Flexbox
**CSS Flexbox** (Flexible Box Layout) is a one-dimensional layout system designed to efficiently organize, align, and distribute space among items within a container, even when their size is unknown or dynamic.

## Flex Container and Flex Items
When we assign an element's `display` property to `flex`, we turn that element into a *flex container* and all direct children become *flex items*.

Flexbox consists of two sets of properties, one set for the *flex container* (parent), and one set for *flex items* (children).

### Flex Container Properties:

We will mainly be using Flexbox by setting properties on the flex container. In other words, the "parent tells the children how to behave".

The below properties outline the most important Flexbox properties and settings for the flex container. This is not an exhaustive list.

#### `display: flex`
Defines a flex container, making its direct children flex items.

#### `flex-direction: row | column`
Establishes the main axis, determining the direction of flex items.

#### `flex-wrap: nowrap | wrap`
Controls whether flex items should wrap or not when they exceed the container's width.

#### `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`
Aligns flex items along the main axis.

#### `align-items: stretch | flex-start | flex-end | center | baseline`
Aligns flex items along the cross axis.

#### `align-content: flex-start | flex-end | center | space-between | space-around | stretch`
Aligns flex lines within the container when there's extra space on the cross axis.

#### `gap`
Controls spacing between flex items.

### Flex Item Properties:
The below properties outline the most important Flexbox properties and settings for flex items. This is not an exhaustive list.

#### `flex: <number>`
This is a shorthand property for `flex-grow`, `flex-shrink`, and `flex-basis`.

We will mainly use this property to define how many "pieces of the pie" each flex item is allowed to eat.

#### `align-self: flex-start | flex-end | center | baseline | stretch`
Allows individual flex items to override the container's align-items property. In other words, we can use this property to allow the child to "disobey" its parent.

**Further reading:**
[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)